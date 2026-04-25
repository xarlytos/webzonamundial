/**
 * Pass-through layout for /noticias and /noticias/[slug].
 * Per-page metadata is defined in each page.tsx so each article can
 * generate its own canonical, OG image and JSON-LD.
 */
export default function NoticiasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
