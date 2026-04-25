/**
 * LLM-powered editorial rewriter.
 *
 * Takes a raw GNews-derived draft and rewrites it as if a ZonaMundial editor
 * (Carlos Zamudio or Gabriel Venegas) had written it from scratch:
 *  - Original headline (no copy/paste of the source)
 *  - 3-6 paragraph body, with a clear lede + 1-2 H2 subheaders + a callout
 *  - SEO metadescription 155-160 chars
 *  - Tag list (2-5 tags) and a clean slug
 *
 * The rewrite is grounded ONLY in the source description/content provided.
 * The system prompt forbids inventing facts, quotes, stats or names.
 */

import Anthropic from "@anthropic-ai/sdk";
import type { DraftNoticia } from "./noticias-ingest";
import type { NoticiaBlock, NoticiaCategory } from "@/data/noticias";

const DEFAULT_MODEL = "claude-haiku-4-5-20251001";

let _client: Anthropic | null = null;
function getClient(): Anthropic {
  if (_client) return _client;
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error("ANTHROPIC_API_KEY missing");
  _client = new Anthropic({ apiKey: key });
  return _client;
}

interface RewriteOutput {
  title: string;
  excerpt: string;
  seoDescription: string;
  slug: string;
  tags: string[];
  body: NoticiaBlock[];
  cat?: NoticiaCategory;
}

const SYSTEM_PROMPT = `Eres editor de la sección de noticias de fútbol de ZonaMundial, una plataforma sobre el Mundial 2026. Tu trabajo es reescribir noticias provenientes de fuentes externas en un estilo editorial propio, NUNCA copiando frases literales.

Reglas inviolables:
1. NO inventar datos: nombres, fechas, cifras, lesiones, fichajes, declaraciones que no estén en el material fuente. Si un dato no está en la fuente, no lo escribas.
2. NO copiar frases literales de más de 6 palabras. Reescribe en estilo periodístico de calidad.
3. Tono: directo, claro, informado. Tono periódico tipo The Athletic / ESPN en español.
4. Idioma: español neutro / España.
5. NUNCA inventar quotes (citas textuales). Si no hay quote en la fuente, no inventes una.
6. La fecha de hoy es relativa al material; si la fuente menciona "ayer" o "esta semana", manténlo así.
7. Devuelve SOLO un JSON válido, sin texto adicional, sin markdown, sin backticks.

Categorías permitidas (campo "cat"): "selecciones" | "analisis" | "datos" | "sedes" | "historia" | "plataforma".

Estructura del JSON de salida:
{
  "title": "Titular SEO 50-90 chars, sin clickbait barato pero potente",
  "excerpt": "Resumen 200-280 chars que enganche y resuma",
  "seoDescription": "Meta description 155-160 chars optimizada",
  "slug": "slug-en-minusculas-con-guiones-sin-acentos-max-70-chars",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "cat": "selecciones",
  "body": [
    { "type": "p", "text": "Lede de 2-3 frases que conteste qué pasa, quién, cuándo, dónde." },
    { "type": "h2", "text": "Subtítulo de sección" },
    { "type": "p", "text": "Párrafo de desarrollo." },
    { "type": "p", "text": "Otro párrafo." },
    { "type": "h2", "text": "Otro subtítulo (opcional)" },
    { "type": "p", "text": "Más desarrollo." },
    { "type": "list", "items": ["Punto 1", "Punto 2", "Punto 3"] },
    { "type": "callout", "title": "Lo que viene", "text": "Cierre con próximo paso o consecuencia." }
  ]
}

El body debe tener entre 4 y 8 bloques. Mínimo: 1 lede + 1 h2 + 2 p + 1 callout.`;

function buildUserMessage(draft: DraftNoticia): string {
  const sourceText = draft.body
    .filter((b) => b.type === "p")
    .map((b) => (b as { text: string }).text)
    .join("\n\n");
  return `Material fuente (proviene de "${draft.sourceName || "fuente externa"}"):

TÍTULO ORIGINAL: ${draft.title}

CONTENIDO:
${sourceText}

CATEGORÍA SUGERIDA POR HEURÍSTICA: ${draft.cat}
PAÍSES DETECTADOS: ${draft.flags.join(", ") || "ninguno"}

Reescribe esta noticia en estilo editorial ZonaMundial. Devuelve SOLO el JSON.`;
}

export async function rewriteDraft(draft: DraftNoticia): Promise<RewriteOutput | null> {
  const client = getClient();
  const model = process.env.ANTHROPIC_MODEL || DEFAULT_MODEL;

  let resp;
  try {
    resp = await client.messages.create({
      model,
      max_tokens: 2000,
      temperature: 0.4,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: buildUserMessage(draft) }],
    });
  } catch (err) {
    console.error("[rewriter] API error", (err as Error).message);
    return null;
  }

  const textBlock = resp.content.find((b) => b.type === "text");
  if (!textBlock || textBlock.type !== "text") return null;

  const raw = textBlock.text.trim();
  // Strip optional ```json fences
  const cleaned = raw.replace(/^```(?:json)?\s*/, "").replace(/```\s*$/, "");

  let parsed: RewriteOutput;
  try {
    parsed = JSON.parse(cleaned);
  } catch (err) {
    console.error("[rewriter] JSON parse failed", (err as Error).message, raw.slice(0, 200));
    return null;
  }

  // Defensive: must have at least the required fields
  if (!parsed.title || !parsed.body || !Array.isArray(parsed.body) || parsed.body.length < 3) {
    console.error("[rewriter] output missing required fields");
    return null;
  }
  return parsed;
}

/** Apply LLM rewrite on top of a draft, mutating the draft fields. */
export async function applyRewrite(draft: DraftNoticia): Promise<DraftNoticia> {
  const out = await rewriteDraft(draft);
  if (!out) {
    // Fallback: rewrite failed → keep stub but flag for review (NOT published)
    return { ...draft, status: "review" };
  }
  return {
    ...draft,
    title: out.title,
    excerpt: out.excerpt,
    seoDescription: out.seoDescription,
    slug: out.slug || draft.slug,
    tags: out.tags || [],
    body: out.body,
    cat: (out.cat as NoticiaCategory) || draft.cat,
    // Auto-publish: a successful rewrite is editorial-ready and goes live
    // immediately. Failed rewrites stay at "review" and never appear in the
    // public site (filtered out in the data layer).
    status: "published",
    readTime: Math.max(2, Math.round(out.body.length * 1.3)),
  };
}
