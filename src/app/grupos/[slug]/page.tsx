// src/app/grupos/[slug]/page.tsx
// ZonaMundial.app — Página individual de grupo con simulador embebido

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SimuladorGrupos from '@/components/SimuladorGrupos';

const VALID_GROUPS = ['a','b','c','d','e','f','g','h','i','j','k','l'];

const GROUP_META: Record<string, { title: string; desc: string; highlight: string }> = {
  a: { title: 'Grupo A — México, Corea del Sur, Sudáfrica', desc: 'México abre el torneo en el Azteca. Grupo A con Corea del Sur, Sudáfrica y clasificado UEFA D.', highlight: 'Partido inaugural: México vs Sudáfrica' },
  b: { title: 'Grupo B — Canadá, Suiza, Catar', desc: 'Canadá debuta como anfitriona. Grupo B con Suiza, Catar y clasificado UEFA A (¿Italia?).', highlight: 'Debut de Canadá como anfitriona' },
  c: { title: 'Grupo C — Brasil, Marruecos, Escocia, Haití', desc: 'Brasil vs Marruecos, el duelo estrella. Escocia vuelve tras 28 años. Haití debuta.', highlight: 'Brasil vs Marruecos en Nueva York' },
  d: { title: 'Grupo D — Estados Unidos, Paraguay, Australia', desc: 'EE.UU. como principal anfitrión debuta en Los Ángeles. Grupo D con Paraguay y Australia.', highlight: 'Debut de EE.UU. en Los Ángeles' },
  e: { title: 'Grupo E — Alemania, Costa de Marfil, Ecuador, Curazao', desc: 'Alemania busca redención. Curazao debuta como la selección más pequeña de la historia.', highlight: 'Curazao: debut histórico vs Alemania' },
  f: { title: 'Grupo F — Países Bajos, Japón, Túnez', desc: 'Países Bajos vs Japón, revancha mundialista. Túnez aporta garra africana.', highlight: 'Países Bajos vs Japón' },
  g: { title: 'Grupo G — Bélgica, Egipto, Irán, Nueva Zelanda', desc: 'Salah vs la generación dorada belga. Nueva Zelanda con primera plaza garantizada de Oceanía.', highlight: 'Salah vs De Bruyne' },
  h: { title: 'Grupo H — España, Uruguay, Arabia Saudita, Cabo Verde', desc: 'España nº1 del mundo vs Uruguay bicampeona. Arabia Saudita busca repetir sorpresa de 2022.', highlight: 'España vs Uruguay: choque de campeonas' },
  i: { title: 'Grupo I — Francia, Senegal, Noruega', desc: 'El grupo de la muerte: Mbappé vs Haaland. Francia-Senegal, revancha de 2002.', highlight: 'Mbappé vs Haaland · Francia vs Senegal' },
  j: { title: 'Grupo J — Argentina, Argelia, Austria, Jordania', desc: 'Argentina campeona defensora con Messi. Jordania debuta. Austria de Rangnick.', highlight: 'Messi busca el bicampeonato' },
  k: { title: 'Grupo K — Portugal, Colombia, Uzbekistán', desc: 'Cristiano Ronaldo a los 41 vs Colombia finalista de Copa América. Uzbekistán debuta.', highlight: 'CR7 vs Colombia' },
  l: { title: 'Grupo L — Inglaterra, Croacia, Ghana, Panamá', desc: 'Revancha de la semifinal 2018: Inglaterra vs Croacia. Bellingham lidera a los Three Lions.', highlight: 'Inglaterra vs Croacia: revancha 2018' },
};

export async function generateStaticParams() {
  return VALID_GROUPS.map(g => ({ slug: `grupo-${g}` }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const letter = params.slug.replace('grupo-', '').toUpperCase();
  const meta = GROUP_META[letter.toLowerCase()];
  if (!meta) return { title: 'Grupo no encontrado | ZonaMundial' };
  return {
    title: `${meta.title} | Torneo 2026 | ZonaMundial`,
    description: meta.desc,
    keywords: [`grupo ${letter.toLowerCase()} mundial 2026`, `mundial 2026 grupo ${letter.toLowerCase()}`, meta.highlight.toLowerCase()],
    openGraph: {
      title: `Grupo ${letter} — Torneo de Selecciones 2026 | ZonaMundial`,
      description: meta.desc,
      url: `https://zonamundial.app/grupos/grupo-${letter.toLowerCase()}`,
      images: [{ url: `https://zonamundial.app/api/og/grupo?g=${letter}`, width: 1200, height: 630 }],
    },
    robots: { index: true, follow: true, 'max-image-preview': 'large' },
  };
}

export default function GrupoPage({ params }: { params: { slug: string } }) {
  const letter = params.slug.replace('grupo-', '').toUpperCase();
  if (!VALID_GROUPS.includes(letter.toLowerCase())) notFound();
  const meta = GROUP_META[letter.toLowerCase()];

  return (
    <>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://zonamundial.app' },
          { '@type': 'ListItem', position: 2, name: 'Grupos', item: 'https://zonamundial.app/grupos' },
          { '@type': 'ListItem', position: 3, name: `Grupo ${letter}`, item: `https://zonamundial.app/grupos/grupo-${letter.toLowerCase()}` },
        ],
      })}} />

      <nav className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
        <ol className="flex gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-[#C9A84C]">Inicio</Link></li>
          <li>/</li>
          <li><Link href="/grupos" className="hover:text-[#C9A84C]">Grupos</Link></li>
          <li>/</li>
          <li className="text-[#C9A84C]">Grupo {letter}</li>
        </ol>
      </nav>

      <header className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
          Grupo {letter}
        </h1>
        <p className="text-sm sm:text-base text-gray-400">{meta.desc}</p>
        <div className="mt-3 inline-block px-3 py-1.5 rounded-lg text-xs font-bold text-[#C9A84C] border border-[#C9A84C33]"
          style={{ background: 'rgba(201,168,76,0.06)' }}>
          ⭐ {meta.highlight}
        </div>
      </header>

      {/* Sponsor */}
      <div className="w-full h-[70px] sm:h-[90px] bg-[#0B1825] border border-[#1a2a3f] rounded-lg flex items-center justify-center mb-6"
        data-sponsor-slot="grupo-hero" data-group={letter}>
        <span className="text-gray-600 text-xs">Espacio patrocinador</span>
      </div>

      {/* SIMULADOR */}
      <SimuladorGrupos initialGroup={letter} />
    </>
  );
}
