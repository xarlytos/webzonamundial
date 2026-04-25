/**
 * Unified noticias loader.
 *
 * Combines static curated articles (src/data/noticias.ts) with the
 * published drafts from the auto-ingest pipeline (data/noticias-ingested.json).
 *
 * In production on Vercel the local filesystem is read-only outside
 * /tmp, so the cron writes to /tmp and reads back from /tmp. For long-term
 * persistence you should swap this for Vercel KV / Upstash / Sanity —
 * see TODO at the bottom.
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import {
  NOTICIAS as STATIC_NOTICIAS,
  type Noticia,
  type NoticiaCategory,
} from "@/data/noticias";
import type { DraftNoticia } from "./noticias-ingest";

interface IngestStore {
  generatedAt: string;
  drafts: DraftNoticia[];
}

/** Where the ingest cron writes / reads the JSON store. */
function storePath(): string {
  // In Vercel serverless, the only writable path is /tmp. Locally we use the
  // project's data/ folder so dev edits are visible.
  if (process.env.VERCEL) {
    return path.join("/tmp", "noticias-ingested.json");
  }
  return path.join(process.cwd(), "data", "noticias-ingested.json");
}

export function getStorePath(): string {
  return storePath();
}

export async function readIngestStore(): Promise<IngestStore> {
  try {
    const raw = await fs.readFile(storePath(), "utf-8");
    return JSON.parse(raw) as IngestStore;
  } catch {
    return { generatedAt: new Date().toISOString(), drafts: [] };
  }
}

export async function writeIngestStore(store: IngestStore): Promise<void> {
  const p = storePath();
  await fs.mkdir(path.dirname(p), { recursive: true });
  await fs.writeFile(p, JSON.stringify(store, null, 2), "utf-8");
}

/** Convert a published draft into the public Noticia shape. */
function draftToNoticia(d: DraftNoticia, idx: number): Noticia {
  return {
    id: 1_000_000 + idx, // synthetic id range to avoid collision with static
    slug: d.slug,
    title: d.title,
    excerpt: d.excerpt,
    seoDescription: d.seoDescription,
    cat: d.cat as NoticiaCategory,
    date: d.date,
    updatedAt: d.updatedAt,
    readTime: d.readTime,
    flags: d.flags,
    tags: d.tags,
    featured: d.featured,
    realImage: d.realImage,
    imageCaption: d.imageCaption,
    imageSource: d.imageSource,
    authorId: d.authorId,
    body: d.body,
    sourceUrl: d.sourceUrl,
    sourceName: d.sourceName,
  };
}

/** Returns ALL noticias visible to the public site (static + auto-published). */
export async function getAllPublicNoticias(): Promise<Noticia[]> {
  const store = await readIngestStore();
  const published = store.drafts
    .filter((d) => d.status === "published")
    .map(draftToNoticia);

  // Dedup by slug (static wins over auto)
  const seen = new Set<string>(STATIC_NOTICIAS.map((n) => n.slug));
  const merged: Noticia[] = [...STATIC_NOTICIAS];
  for (const n of published) {
    if (seen.has(n.slug)) continue;
    seen.add(n.slug);
    merged.push(n);
  }

  // Sort by date desc
  merged.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return merged;
}

export async function getNoticiaBySlugPublic(slug: string): Promise<Noticia | undefined> {
  const all = await getAllPublicNoticias();
  return all.find((n) => n.slug === slug);
}

export async function getAllPublicSlugs(): Promise<string[]> {
  const all = await getAllPublicNoticias();
  return all.map((n) => n.slug);
}

export async function getRelatedNoticiasPublic(
  current: Noticia,
  limit = 4,
): Promise<Noticia[]> {
  const all = await getAllPublicNoticias();
  const others = all.filter((n) => n.slug !== current.slug);
  const scored = others.map((n) => {
    const tagOverlap = n.tags.filter((t) => current.tags.includes(t)).length;
    const catBoost = n.cat === current.cat ? 2 : 0;
    return { n, score: tagOverlap * 3 + catBoost };
  });
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return new Date(b.n.date).getTime() - new Date(a.n.date).getTime();
  });
  return scored.slice(0, limit).map((s) => s.n);
}

/* TODO (production):
 * Replace fs-based store with Vercel KV (or Upstash, or Sanity) so writes
 * persist across deployments and lambda invocations. See:
 *   - https://vercel.com/docs/storage/vercel-kv
 *   - npm i @vercel/kv
 *
 * The interface above (readIngestStore / writeIngestStore) is the only
 * surface to swap.
 */
