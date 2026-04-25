/**
 * GNews.io API client.
 *
 * Free tier: 100 requests/day, max 10 articles per request.
 * Docs: https://gnews.io/docs/v4
 */

export interface GNewsArticle {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string; // ISO 8601
  source: {
    name: string;
    url: string;
  };
}

export interface GNewsSearchOptions {
  /** Search query (supports operators: AND, OR, NOT, quotes for exact match) */
  q: string;
  /** ISO 639-1 language code */
  lang?: "es" | "en" | "pt" | "fr" | "de" | "it";
  /** ISO 3166-1 alpha-2 country code */
  country?: string;
  /** Max articles (1-100; free tier returns at most 10) */
  max?: number;
  /** Sort: "publishedAt" (default) | "relevance" */
  sortBy?: "publishedAt" | "relevance";
  /** Date range filter: ISO 8601 timestamp */
  from?: string;
  to?: string;
  /** Restrict to specific source domain (e.g., "marca.com") */
  in?: string;
}

export interface GNewsResponse {
  totalArticles: number;
  articles: GNewsArticle[];
}

const ENDPOINT = "https://gnews.io/api/v4";

function getApiKey(): string {
  const key = process.env.GNEWS_API_KEY;
  if (!key) throw new Error("GNEWS_API_KEY missing in environment");
  return key;
}

/**
 * Search articles. Use this for keyword-based ingestion (Mundial 2026, FIFA, etc).
 */
export async function gnewsSearch(opts: GNewsSearchOptions): Promise<GNewsResponse> {
  const params = new URLSearchParams({
    q: opts.q,
    lang: opts.lang || "es",
    max: String(opts.max ?? 10),
    sortby: opts.sortBy || "publishedAt",
    apikey: getApiKey(),
  });
  if (opts.country) params.set("country", opts.country);
  if (opts.from) params.set("from", opts.from);
  if (opts.to) params.set("to", opts.to);
  if (opts.in) params.set("in", opts.in);

  const res = await fetch(`${ENDPOINT}/search?${params.toString()}`, {
    next: { revalidate: 0 }, // never cache server-side, the cron handles freshness
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`GNews search failed (${res.status}): ${text}`);
  }
  return (await res.json()) as GNewsResponse;
}

/**
 * Top headlines (alternative endpoint, useful for the breaking ticker).
 */
export async function gnewsTopHeadlines(opts: {
  topic?: "world" | "nation" | "business" | "technology" | "entertainment" | "sports" | "science" | "health";
  lang?: string;
  country?: string;
  max?: number;
}): Promise<GNewsResponse> {
  const params = new URLSearchParams({
    lang: opts.lang || "es",
    max: String(opts.max ?? 10),
    apikey: getApiKey(),
  });
  if (opts.topic) params.set("topic", opts.topic);
  if (opts.country) params.set("country", opts.country);

  const res = await fetch(`${ENDPOINT}/top-headlines?${params.toString()}`, {
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`GNews top-headlines failed (${res.status}): ${text}`);
  }
  return (await res.json()) as GNewsResponse;
}

/* ---------------------------------------------------------------- */
/* Pre-built queries for the World Cup beat                         */
/* ---------------------------------------------------------------- */

/**
 * Queries cover the full World Cup beat — players, selecciones, sedes,
 * historia, fichajes, lesiones, partidos, polémicas. Each runs against
 * the GNews search endpoint independently so we maximize topical
 * coverage without exhausting the daily quota.
 */
export const WORLD_CUP_QUERIES = {
  // Anchor: any World Cup 2026 article
  general: '"Mundial 2026" OR "World Cup 2026" OR "Copa del Mundo 2026"',
  // Match-day, fixtures, lineups
  fixtures: '("Mundial 2026" OR "FIFA 2026") AND (calendario OR fixture OR alineación OR convocatoria OR lista)',
  // Injuries beat
  injuries: '("Mundial 2026" OR "World Cup 2026") AND (lesión OR baja OR operad OR injury)',
  // Coach / DT / staff
  coaches: '("Mundial 2026" OR "Copa del Mundo") AND (seleccionador OR DT OR técnico OR coach OR cuerpo técnico)',
  // Player profiles + stars (rotates, edit if needed)
  stars: '("Mundial 2026" OR "Copa del Mundo") AND (Messi OR Mbapp OR Vinicius OR Lamine OR Bellingham OR Yamal OR Kane OR Cristiano OR Neymar)',
  // Venues + cities + stadiums (sedes)
  venues: '("Mundial 2026" OR "World Cup 2026") AND (sede OR estadio OR MetLife OR Azteca OR SoFi OR "ciudad anfitriona" OR "host city")',
  // Tickets, hotels, fan experience
  tickets: '("Mundial 2026" OR "World Cup 2026") AND (entrada OR boleto OR ticket OR hotel OR fan)',
  // Federations / FIFA institutional
  fifa: '"FIFA" AND ("Mundial 2026" OR "World Cup 2026") AND (decisión OR anuncio OR norma OR reglamento)',
  // Eliminatorias / qualifiers leading up to the World Cup
  qualifiers: '(eliminatoria OR clasificación OR qualifier) AND ("Mundial 2026" OR "World Cup 2026")',
  // Historical context (anniversaries, classics, retrospectives)
  history: '(historia OR histórico OR retrospectiva) AND ("Copa del Mundo" OR "Mundial")',
  // Argentina beat (high reader interest in LatAm)
  argentina: '(Argentina OR Albiceleste OR Scaloni OR Messi) AND ("Mundial 2026" OR "Copa del Mundo")',
  // Brazil beat
  brazil: '(Brasil OR Brazil OR Canarinha OR Ancelotti) AND ("Mundial 2026" OR "Copa del Mundo")',
  // Spain beat
  spain: '(España OR "La Roja" OR "De la Fuente" OR Lamine) AND ("Mundial 2026" OR "Copa del Mundo")',
  // Mexico beat (host country)
  mexico: '(México OR Tri OR Aguirre OR Giménez) AND ("Mundial 2026" OR "Copa del Mundo")',
  // USA beat (host country)
  usa: '("Estados Unidos" OR USMNT OR "United States") AND ("Mundial 2026" OR "World Cup 2026")',
};

export type WorldCupQueryKey = keyof typeof WORLD_CUP_QUERIES;
