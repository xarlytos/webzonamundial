/**
 * Cron endpoint: pulls fresh World Cup news from GNews, deduplicates,
 * builds drafts and appends them to data/noticias-ingested.json.
 *
 * On Vercel Cron this is invoked with `Authorization: Bearer ${CRON_SECRET}`.
 * In dev / locally you can hit it manually with the same header.
 *
 * Drafts are NEVER auto-published — they sit in the JSON file with
 * `status: "draft"` until a human (or a future LLM step) reviews them
 * and either rewrites the body or moves them to the static NOTICIAS array.
 */

import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
import { ingestNews, type DraftNoticia } from "@/lib/noticias-ingest";
import { applyRewrite } from "@/lib/noticias-rewriter";
import { WORLD_CUP_QUERIES } from "@/lib/gnews";

const STORE_PATH = path.join(process.cwd(), "data", "noticias-ingested.json");

interface Store {
  generatedAt: string;
  drafts: DraftNoticia[];
}

async function readStore(): Promise<Store> {
  try {
    const raw = await fs.readFile(STORE_PATH, "utf-8");
    return JSON.parse(raw) as Store;
  } catch {
    return { generatedAt: new Date().toISOString(), drafts: [] };
  }
}

async function writeStore(store: Store): Promise<void> {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  await fs.writeFile(STORE_PATH, JSON.stringify(store, null, 2), "utf-8");
}

export async function GET(req: Request) {
  // Auth: Vercel Cron sends Authorization: Bearer ${CRON_SECRET}
  const expected = process.env.CRON_SECRET;
  if (expected) {
    const auth = req.headers.get("authorization");
    if (auth !== `Bearer ${expected}`) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
  }

  const store = await readStore();
  const knownHashes = new Set(store.drafts.map((d) => d.sourceUrlHash));

  // Run ALL the World Cup beat queries every cron tick to ensure no topic
  // is left behind (selecciones, jugadores, sedes, historia, lesiones,
  // entradas, FIFA, eliminatorias, etc).
  const queries = Object.keys(WORLD_CUP_QUERIES) as (keyof typeof WORLD_CUP_QUERIES)[];

  const result = await ingestNews({
    knownHashes,
    queries,
    maxPerQuery: 10,
  });

  // Optionally rewrite each fresh draft via the LLM. Controlled by env so
  // we can disable it in case of quota issues without touching code.
  // Default: ENABLED when ANTHROPIC_API_KEY is present.
  const url = new URL(req.url);
  const skipRewrite = url.searchParams.get("rewrite") === "0";
  const rewriteLimit = parseInt(url.searchParams.get("rewriteLimit") || "0", 10);
  const rewriteEnabled = !!process.env.ANTHROPIC_API_KEY && !skipRewrite;

  let rewritten = 0;
  let rewriteFailed = 0;
  if (rewriteEnabled) {
    const cap = rewriteLimit > 0 ? Math.min(rewriteLimit, result.drafts.length) : result.drafts.length;
    // Process sequentially to respect rate limits + minimize cost.
    for (let i = 0; i < cap; i++) {
      try {
        result.drafts[i] = await applyRewrite(result.drafts[i]);
        if (result.drafts[i].status === "review") rewritten += 1;
      } catch (err) {
        rewriteFailed += 1;
        console.error("[cron] rewrite failed", (err as Error).message);
      }
    }
  }

  store.drafts.push(...result.drafts);
  // Keep only the last 300 drafts so the file does not balloon
  if (store.drafts.length > 300) {
    store.drafts = store.drafts.slice(-300);
  }
  store.generatedAt = new Date().toISOString();
  await writeStore(store);

  return NextResponse.json({
    ok: true,
    queries: queries.length,
    fetched: result.fetched,
    new: result.drafts.length,
    duplicates: result.duplicates,
    rewritten,
    rewriteFailed,
    rewriteEnabled,
    errors: result.errors,
    totalStored: store.drafts.length,
    storePath: "data/noticias-ingested.json",
  });
}

// Force dynamic so Vercel Cron always hits a fresh execution
export const dynamic = "force-dynamic";
// Allow up to 5 min for fetch + rewrite (Vercel Pro plan; on Hobby cap is 60s)
export const maxDuration = 300;
