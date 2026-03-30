// src/app/grupos/[slug]/page.tsx
// ZonaMundial.app — Página individual de grupo con simulador (Diseño moderno)

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SimuladorGrupos from '@/components/SimuladorGrupos';
import { getSeleccionesByGrupo } from '@/data/selecciones';
import FlagImage from '@/components/FlagImage';

const BG = "#030712";

const VALID_GROUPS = ['a','b','c','d','e','f','g','h','i','j','k','l'];

// Colores por grupo
const GROUP_COLORS: Record<string, string> = {
  a: '#22c55e',
  b: '#22c55e',
  c: '#eab308',
  d: '#22c55e',
  e: '#fbbf24',
  f: '#ef4444',
  g: '#a855f7',
  h: '#c9a84c',
  i: '#3b82f6',
  j: '#38bdf8',
  k: '#a855f7',
  l: '#94a3b8',
};

const GROUP_META: Record<string, { title: string; desc: string; subtitle: string }> = {
  a: { 
    title: 'Grupo A', 
    desc: 'México debuta como anfitrión en el Azteca. Corea del Sur con Son Heung-min. Sudáfrica busca sorprender.',
    subtitle: 'Anfitrión: México'
  },
  b: { 
    title: 'Grupo B', 
    desc: 'Canadá debuta como anfitrión. Suiza siempre organizada. Qatar, incómodo rival asiático.',
    subtitle: 'Anfitrión: Canadá'
  },
  c: { 
    title: 'Grupo C', 
    desc: 'Brasil, el máximo ganador con 5 títulos. Marruecos, semifinalista de Qatar 2022. Escocia y Haití completan.',
    subtitle: '5 Títulos Mundiales'
  },
  d: { 
    title: 'Grupo D', 
    desc: 'EE.UU. demuestra en casa. Paraguay pelea. Australia, veterano. Un equipo por definir.',
    subtitle: 'Anfitrión: EE.UU.'
  },
  e: { 
    title: 'Grupo E', 
    desc: 'Alemania, campeón mundial 4 veces. Costa de Marfil y Ecuador pueden complicar. Curazao debuta histórico.',
    subtitle: '4 Títulos: Alemania'
  },
  f: { 
    title: 'Grupo F', 
    desc: 'Países Bajos vs Japón, choque de estilos. Túnez y un equipo por definir completan el grupo.',
    subtitle: 'Choque de estilos'
  },
  g: { 
    title: 'Grupo G', 
    desc: 'De Bruyne vs Salah, duelo de super estrellas. Irán siempre difícil. Nueva Zelanda de Oceanía.',
    subtitle: 'Estrellas del fútbol'
  },
  h: { 
    title: 'Grupo H', 
    desc: 'España vs Uruguay, duelo de campeones mundiales. Arabia Saudita y Cabo Verde completan.',
    subtitle: 'Duelo de campeones'
  },
  i: { 
    title: 'Grupo I', 
    desc: 'Francia, bicampeona mundial. Senegal busca revancha de 2002. Si Noruega entra, Haaland vs Mbappé.',
    subtitle: 'Bicampeón mundial'
  },
  j: { 
    title: 'Grupo J', 
    desc: 'Argentina, campeón vigente con Messi. Argelia, Austria de Rangnick y Jordania debutante.',
    subtitle: 'Campeón vigente'
  },
  k: { 
    title: 'Grupo K', 
    desc: 'Cristiano Ronaldo con Portugal vs Colombia. Uzbekistán debuta en la historia del Mundial.',
    subtitle: 'Último Mundial de CR7'
  },
  l: { 
    title: 'Grupo L', 
    desc: 'Inglaterra vs Croacia, revancha de la semifinal 2018. Ghana y Panamá, outsiders peligrosos.',
    subtitle: 'Revancha 2018'
  },
};

function getGroupColor(letter: string): string {
  return GROUP_COLORS[letter.toLowerCase()] || '#c9a84c';
}

export async function generateStaticParams() {
  return VALID_GROUPS.map(g => ({ slug: `grupo-${g}` }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const letter = params.slug.replace('grupo-', '').toUpperCase();
  const meta = GROUP_META[letter.toLowerCase()];
  if (!meta) return { title: 'Grupo no encontrado | ZonaMundial' };
  return {
    title: `${meta.title} — Mundial 2026 | ZonaMundial`,
    description: meta.desc,
    keywords: [`grupo ${letter.toLowerCase()} mundial 2026`, `mundial 2026 grupo ${letter.toLowerCase()}`, meta.subtitle.toLowerCase()],
    openGraph: {
      title: `${meta.title} — Mundial 2026 | ZonaMundial`,
      description: meta.desc,
      url: `https://zonamundial.app/grupos/grupo-${letter.toLowerCase()}`,
    },
    robots: { index: true, follow: true, 'max-image-preview': 'large' },
  };
}

export default function GrupoPage({ params }: { params: { slug: string } }) {
  const letter = params.slug.replace('grupo-', '').toUpperCase();
  if (!VALID_GROUPS.includes(letter.toLowerCase())) notFound();
  
  const meta = GROUP_META[letter.toLowerCase()];
  const selecciones = getSeleccionesByGrupo(letter);
  const groupColor = getGroupColor(letter);

  return (
    <div style={{ background: BG, minHeight: '100vh' }}>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', 
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://zonamundial.app' },
          { '@type': 'ListItem', position: 2, name: 'Grupos', item: 'https://zonamundial.app/grupos' },
          { '@type': 'ListItem', position: 3, name: `Grupo ${letter}`, item: `https://zonamundial.app/grupos/grupo-${letter.toLowerCase()}` },
        ],
      })}} />

      {/* Top Color Bar */}
      <div style={{ height: '4px', background: groupColor }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ padding: '16px 20px 60px' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05)_0%,transparent_60%)]" />
        
        <div className="max-w-6xl mx-auto relative">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Link 
              href="/grupos"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-400 border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver
            </Link>

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>/</span>
              <Link href="/grupos" className="hover:text-white transition-colors">Grupos</Link>
              <span>/</span>
              <span className="text-white font-medium">Grupo {letter}</span>
            </nav>
          </div>

          {/* Header */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Large Letter Box */}
            <div 
              className="w-[140px] h-[140px] rounded-3xl flex items-center justify-center font-black text-7xl flex-shrink-0"
              style={{ 
                background: `${groupColor}20`,
                color: groupColor,
                border: `2px solid ${groupColor}40`
              }}
            >
              {letter}
            </div>

            <div className="flex-1 pt-2">
              {/* Subtitle Tag */}
              <span 
                className="inline-block px-3 py-1.5 rounded-full text-xs font-bold mb-4 tracking-wide"
                style={{ 
                  background: `${groupColor}15`, 
                  color: groupColor,
                  border: `1px solid ${groupColor}30`
                }}
              >
                {meta.subtitle.toUpperCase()}
              </span>
              
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                {meta.title}
              </h1>
              
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                {meta.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column - 2/3 */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sponsor Banner */}
            <div 
              className="w-full h-[120px] rounded-3xl flex items-center justify-center border border-white/5"
              style={{ background: '#0B0F1A' }}
              data-sponsor-slot="grupo-hero" 
              data-group={letter}
            >
              <span className="text-gray-600 text-sm">Espacio patrocinador</span>
            </div>

            {/* Simulador Card */}
            <div 
              className="rounded-3xl border border-white/5 overflow-hidden"
              style={{ background: '#0B0F1A' }}
            >
              <div 
                className="px-6 py-5 border-b border-white/5 flex items-center justify-between"
                style={{ background: `${groupColor}08` }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${groupColor}20` }}
                  >
                    <span style={{ color: groupColor }}>🎮</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Simulador del Grupo {letter}</h2>
                    <p className="text-sm text-gray-500">Predice los resultados de todos los partidos</p>
                  </div>
                </div>
                <span 
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ 
                    background: `${groupColor}15`,
                    color: groupColor 
                  }}
                >
                  Simulador
                </span>
              </div>
              <div className="p-6">
                <SimuladorGrupos initialGroup={letter} />
              </div>
            </div>
          </div>

          {/* Sidebar - 1/3 */}
          <div className="space-y-6">
            {/* Teams List */}
            <div 
              className="rounded-3xl p-6 border border-white/5"
              style={{ background: '#0B0F1A' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${groupColor}15` }}
                >
                  <span style={{ color: groupColor }}>⚽</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Equipos</h3>
                  <p className="text-sm text-gray-500">{selecciones.length} selecciones</p>
                </div>
              </div>

              <div className="space-y-2">
                {selecciones.map((team, idx) => (
                  <Link
                    key={team.slug}
                    href={`/selecciones/${team.slug}`}
                    className="flex items-center gap-3 p-3 rounded-2xl transition-all hover:bg-white/5 group"
                  >
                    <span className="text-gray-600 text-sm font-mono w-5">{idx + 1}</span>
                    <FlagImage
                      code={team.flagCode}
                      alt={team.nombre}
                      width={40}
                      className="w-8 h-6 object-cover rounded shadow-md group-hover:scale-110 transition-transform"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white truncate group-hover:text-gray-200 transition-colors">
                        {team.nombre}
                      </p>
                      <p className="text-xs text-gray-500">{team.confederacion}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {team.mejorResultado?.includes('Campeón') && (
                        <span className="text-xs" title={team.mejorResultado}>🏆</span>
                      )}
                      {team.esAnfitrion && (
                        <span className="text-xs">🏟️</span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div 
              className="rounded-3xl p-6 border"
              style={{ 
                background: `${groupColor}10`,
                borderColor: `${groupColor}30`
              }}
            >
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: `${groupColor}20` }}
              >
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-bold text-white text-lg mb-2">¿Quién ganará?</h3>
              <p className="text-sm text-gray-400 mb-5">
                Predice los resultados y compite con tus amigos por ser el mejor pronosticador.
              </p>
              <Link
                href="/registro"
                className="block w-full py-3.5 rounded-xl text-center font-bold transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ 
                  background: groupColor,
                  color: '#030712'
                }}
              >
                Crear predicción
              </Link>
            </div>

            {/* Other Groups */}
            <div 
              className="rounded-3xl p-6 border border-white/5"
              style={{ background: '#0B0F1A' }}
            >
              <h3 className="text-lg font-bold text-white mb-4">Otros grupos</h3>
              <div className="grid grid-cols-6 gap-2">
                {VALID_GROUPS.filter(g => g !== letter.toLowerCase()).map((g) => {
                  const gColor = getGroupColor(g);
                  return (
                    <Link
                      key={g}
                      href={`/grupos/grupo-${g}`}
                      className="aspect-square flex items-center justify-center rounded-xl font-bold text-sm transition-all hover:scale-105"
                      style={{ 
                        background: `${gColor}15`,
                        color: gColor,
                        border: `1px solid ${gColor}30`
                      }}
                    >
                      {g.toUpperCase()}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
