// src/app/grupos/[slug]/page.tsx
// ZonaMundial.app — Página individual de grupo con simulador (Diseño mejorado)

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SimuladorGrupos from '@/components/SimuladorGrupos';
import { getSeleccionesByGrupo } from '@/data/selecciones';

const BG = "#060B14";
const BG2 = "#0F1D32";
const BG3 = "#0B1825";
const GOLD = "#c9a84c";

const VALID_GROUPS = ['a','b','c','d','e','f','g','h','i','j','k','l'];

const GROUP_META: Record<string, { title: string; desc: string; highlight: string; tag?: string; tagColor?: string }> = {
  a: { 
    title: 'Grupo A — México, Corea del Sur, Sudáfrica', 
    desc: 'México debuta como anfitrión en el Azteca. Corea del Sur con Son Heung-min. Sudáfrica busca sorprender.', 
    highlight: 'Anfitrión: México',
    tag: '🏟️ ANFITRIÓN: MÉXICO',
    tagColor: '#22c55e'
  },
  b: { 
    title: 'Grupo B — Canadá, Suiza, Qatar', 
    desc: 'Canadá debuta como anfitrión. Suiza siempre organizada. Qatar, incómodo rival asiático.', 
    highlight: 'Anfitrión: Canadá',
    tag: '📍 ANFITRIÓN: CANADÁ',
    tagColor: '#22c55e'
  },
  c: { 
    title: 'Grupo C — Brasil, Marruecos, Escocia, Haití', 
    desc: 'Brasil, el máximo ganador con 5 títulos. Marruecos, semifinalista de Qatar 2022. Escocia y Haití completan.', 
    highlight: 'Brasil vs Marruecos',
    tag: '🔥 5 TÍTULOS MUNDIALES',
    tagColor: '#22c55e'
  },
  d: { 
    title: 'Grupo D — Estados Unidos, Paraguay, Australia', 
    desc: 'EE.UU. demuestra en casa. Paraguay pelea. Australia, veterano. Un equipo por definir.', 
    highlight: 'Anfitrión: EE.UU.',
    tag: '📍 ANFITRIÓN: EE.UU.',
    tagColor: '#22c55e'
  },
  e: { 
    title: 'Grupo E — Alemania, Costa de Marfil, Ecuador, Curazao', 
    desc: 'Alemania, campeón mundial 4 veces. Costa de Marfil y Ecuador pueden complicar. Curazao debuta histórico.', 
    highlight: '4 veces campeón',
    tag: '🏆 4 TÍTULOS: ALEMANIA',
    tagColor: '#fbbf24'
  },
  f: { 
    title: 'Grupo F — Países Bajos, Japón, Túnez', 
    desc: 'Países Bajos vs Japón, choque de estilos. Túnez y un equipo por definir completan el grupo.', 
    highlight: 'Países Bajos vs Japón'
  },
  g: { 
    title: 'Grupo G — Bélgica, Egipto, Irán, Nueva Zelanda', 
    desc: 'De Bruyne vs Salah, duelo de super estrellas. Irán siempre difícil. Nueva Zelanda de Oceanía.', 
    highlight: 'Estrellas del fútbol',
    tag: '⚡ ESTRELLAS DEL FÚTBOL',
    tagColor: '#ef4444'
  },
  h: { 
    title: 'Grupo H — España, Uruguay, Arabia Saudita, Cabo Verde', 
    desc: 'España vs Uruguay, duelo de campeones mundiales. Arabia Saudita y Cabo Verde completan.', 
    highlight: 'Duelo de campeones',
    tag: '🏆 3 TÍTULOS: ESPAÑA + URUGUAY',
    tagColor: '#c9a84c'
  },
  i: { 
    title: 'Grupo I — Francia, Senegal, Noruega', 
    desc: 'Francia, bicampeona mundial. Senegal busca revancha de 2002. Si Noruega entra, Haaland vs Mbappé.', 
    highlight: 'Bicampeón mundial',
    tag: '🔥 2 TÍTULOS: FRANCIA',
    tagColor: '#3b82f6'
  },
  j: { 
    title: 'Grupo J — Argentina, Argelia, Austria, Jordania', 
    desc: 'Argentina, campeón vigente con Messi. Argelia, Austria de Rangnick y Jordania debutante.', 
    highlight: 'Campeón vigente',
    tag: '👑 CAMPEÓN VIGENTE: ARGENTINA',
    tagColor: '#38bdf8'
  },
  k: { 
    title: 'Grupo K — Portugal, Colombia, Uzbekistán', 
    desc: 'Cristiano Ronaldo con Portugal vs Colombia. Uzbekistán debuta en la historia del Mundial.', 
    highlight: 'Último Mundial de CR7',
    tag: '⭐ CR7 ÚLTIMO MUNDIAL',
    tagColor: '#a855f7'
  },
  l: { 
    title: 'Grupo L — Inglaterra, Croacia, Ghana, Panamá', 
    desc: 'Inglaterra vs Croacia, revancha de la semifinal 2018. Ghana y Panamá, outsiders peligrosos.', 
    highlight: 'Revancha 2018',
    tag: '🏆 SEMIFINAL 2018',
    tagColor: '#94a3b8'
  },
};

export async function generateStaticParams() {
  return VALID_GROUPS.map(g => ({ slug: `grupo-${g}` }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const letter = params.slug.replace('grupo-', '').toUpperCase();
  const meta = GROUP_META[letter.toLowerCase()];
  if (!meta) return { title: 'Grupo no encontrado | ZonaMundial' };
  return {
    title: `${meta.title} | Mundial 2026 | ZonaMundial`,
    description: meta.desc,
    keywords: [`grupo ${letter.toLowerCase()} mundial 2026`, `mundial 2026 grupo ${letter.toLowerCase()}`, meta.highlight.toLowerCase()],
    openGraph: {
      title: `Grupo ${letter} — Mundial 2026 | ZonaMundial`,
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
  const isHighlight = ['C', 'I', 'J'].includes(letter);

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

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ padding: '60px 20px 40px' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
        
        <div className="max-w-6xl mx-auto relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#6a7a9a] mb-6">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/grupos" className="hover:text-[#c9a84c] transition-colors">Grupos</Link>
            <span>/</span>
            <span className="text-[#c9a84c]">Grupo {letter}</span>
          </nav>

          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Letra del grupo */}
            <div 
              className={`w-24 h-24 rounded-2xl flex items-center justify-center font-black text-5xl flex-shrink-0 ${
                isHighlight 
                  ? 'bg-red-500/20 text-red-400 border-2 border-red-500/50' 
                  : ''
              }`}
              style={!isHighlight ? {
                background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))',
                color: '#c9a84c',
                border: '2px solid rgba(201,168,76,0.3)'
              } : {}}
            >
              {letter}
            </div>

            <div className="flex-1">
              {/* Tag */}
              {meta.tag && (
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                  style={{ 
                    background: `${meta.tagColor}20`, 
                    color: meta.tagColor,
                    border: `1px solid ${meta.tagColor}40`
                  }}
                >
                  {meta.tag}
                </span>
              )}
              
              <h1 className="text-3xl md:text-5xl font-black text-white mb-3">
                Grupo {letter}
              </h1>
              
              <p className="text-lg text-[#8a94b0] mb-4 max-w-2xl">
                {meta.desc}
              </p>

              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
                style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
              >
                <span className="text-[#c9a84c]">⭐</span>
                <span className="text-sm text-[#c9a84c] font-semibold">{meta.highlight}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna principal - Simulador */}
          <div className="lg:col-span-2">
            {/* Sponsor */}
            <div className="w-full h-[90px] bg-[#0B1825] border border-white/5 rounded-xl flex items-center justify-center mb-6" data-sponsor-slot="grupo-hero" data-group={letter}>
              <span className="text-[#4a5570] text-sm">Espacio patrocinador</span>
            </div>

            {/* Simulador */}
            <div className="bg-[#0B1825] rounded-2xl border border-white/5 overflow-hidden">
              <div className="p-4 border-b border-white/5 flex items-center justify-between">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>🎮</span> Predice los resultados del Grupo {letter}
                </h2>
                <span className="text-xs text-[#6a7a9a]">Simulador</span>
              </div>
              <div className="p-4">
                <SimuladorGrupos initialGroup={letter} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Equipos del grupo */}
            <div className="bg-[#0B1825] rounded-2xl p-5 border border-white/5">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>⚽</span> Equipos
              </h3>
              <div className="space-y-2">
                {selecciones.map((team, idx) => (
                  <Link
                    key={team.slug}
                    href={`/selecciones/${team.slug}`}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-white/5 ${
                      idx === 0 ? 'bg-[#c9a84c]/5 border border-[#c9a84c]/20' : ''
                    }`}
                  >
                    <span className="text-[#6a7a9a] text-sm font-mono w-4">{idx + 1}</span>
                    <img
                      src={`https://flagcdn.com/w40/${team.flagCode}.png`}
                      alt={team.nombre}
                      className="w-8 h-6 object-cover rounded shadow-md"
                    />
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium truncate ${idx === 0 ? 'text-[#c9a84c]' : 'text-white'}`}>
                        {team.nombre}
                      </p>
                      <p className="text-xs text-[#6a7a9a]">{team.confederacion}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {team.mejorResultado?.includes('Campeón') && (
                        <span className="text-xs text-yellow-400" title={team.mejorResultado}>
                          🏆
                        </span>
                      )}
                      {team.esAnfitrion && (
                        <span className="text-xs text-green-400">🏟️</span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Estadísticas rápidas */}
            <div className="bg-[#0B1825] rounded-2xl p-5 border border-white/5">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>📊</span> Datos del Grupo
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-sm text-[#8a94b0]">Equipos</span>
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-sm text-[#8a94b0]">Partidos</span>
                  <span className="text-white font-bold">6</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-sm text-[#8a94b0]">1º y 2º clasifican</span>
                  <span className="text-[#c9a84c] font-bold">Directo</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-[#8a94b0]">3º</span>
                  <span className="text-white font-bold">Mejores 8</span>
                </div>
              </div>
            </div>

            {/* Otros grupos */}
            <div className="bg-[#0B1825] rounded-2xl p-5 border border-white/5">
              <h3 className="text-lg font-bold text-white mb-4">Otros grupos</h3>
              <div className="grid grid-cols-4 gap-2">
                {VALID_GROUPS.filter(g => g !== letter.toLowerCase()).map((g) => (
                  <Link
                    key={g}
                    href={`/grupos/grupo-${g}`}
                    className="aspect-square flex items-center justify-center rounded-xl bg-[#060B14] border border-white/5 hover:border-[#c9a84c]/30 hover:text-[#c9a84c] transition-all text-white font-bold"
                  >
                    {g.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 rounded-2xl p-5 border border-[#c9a84c]/20">
              <h3 className="font-bold text-white mb-2">¿Quién ganará?</h3>
              <p className="text-sm text-[#8a94b0] mb-4">
                Predice los resultados y compite.
              </p>
              <Link
                href="/registro"
                className="block w-full py-3 bg-gradient-to-r from-[#c9a84c] to-[#e8d48b] text-[#060B14] font-bold rounded-xl text-center hover:shadow-lg transition-all"
              >
                Crear predicción
              </Link>
            </div>

            {/* Sponsor sidebar */}
            <div className="w-full h-[200px] bg-[#0F1D32] border border-white/5 rounded-xl flex items-center justify-center" data-sponsor-slot="grupo-sidebar">
              <span className="text-[#4a5570] text-sm">Espacio patrocinador</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
