// src/app/selecciones/[slug]/page.tsx
// ZonaMundial.app — Página dinámica de selección (Diseño mejorado)

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSeleccionBySlug, getSeleccionesByGrupo, getAllSlugs, GRUPOS } from '@/data/selecciones';
import Link from 'next/link';

const BG = "#060B14";
const BG2 = "#0F1D32";
const BG3 = "#0B1825";
const GOLD = "#c9a84c";
const GOLD2 = "#e8d48b";
const MID = "#8a94b0";

// SSG: Genera las 48 páginas en build time
export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

// SEO: Metadata dinámica por selección
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const team = getSeleccionBySlug(params.slug);
  if (!team) return { title: 'Selección no encontrada | ZonaMundial' };

  const seoTitle = `${team.nombre} — Mundial 2026 | ZonaMundial`;
  const seoDescription = `Todo sobre ${team.nombre} en el Mundial 2026: calendario, jugadores, historia y predicciones.`;

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `https://zonamundial.app/selecciones/${team.slug}`,
      siteName: 'ZonaMundial',
      type: 'website',
      images: [{
        url: `https://flagcdn.com/w640/${team.flagCode}.png`,
        width: 640,
        height: 427,
        alt: `${team.nombre} — Mundial 2026`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
    },
    alternates: {
      canonical: `https://zonamundial.app/selecciones/${team.slug}`,
    },
  };
}

// Schema.org JSON-LD
function TeamSchema({ team }: { team: NonNullable<ReturnType<typeof getSeleccionBySlug>> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SportsTeam',
    name: `Selección de ${team.nombre}`,
    sport: 'Football',
    url: `https://zonamundial.app/selecciones/${team.slug}`,
    description: `${team.nombre} en el Mundial 2026`,
    memberOf: {
      '@type': 'SportsOrganization',
      name: team.confederacion,
    },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://zonamundial.app' },
      { '@type': 'ListItem', position: 2, name: 'Selecciones', item: 'https://zonamundial.app/selecciones' },
      { '@type': 'ListItem', position: 3, name: team.nombre, item: `https://zonamundial.app/selecciones/${team.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

// Componente de stat card
function StatCard({ label, value, icon, highlight = false }: { 
  label: string; 
  value: string; 
  icon: string;
  highlight?: boolean;
}) {
  return (
    <div className={`p-4 rounded-xl border transition-all hover:border-[#c9a84c]/50 ${
      highlight 
        ? 'bg-gradient-to-br from-[#c9a84c]/10 to-[#c9a84c]/5 border-[#c9a84c]/30' 
        : 'bg-[#0B1825] border-white/5'
    }`}>
      <span className="text-2xl mb-2 block">{icon}</span>
      <p className={`text-2xl font-black ${highlight ? 'text-[#c9a84c]' : 'text-white'}`}>{value}</p>
      <p className="text-xs text-[#6a7a9a] uppercase tracking-wider">{label}</p>
    </div>
  );
}

// Componente principal
export default function SeleccionPage({ params }: { params: { slug: string } }) {
  const team = getSeleccionBySlug(params.slug);
  if (!team) notFound();

  const companeros = getSeleccionesByGrupo(team.grupo).filter(t => t.slug !== team.slug);
  const teamAny = team as any;

  // Color según confederación
  const getConfederacionGradient = (conf: string) => {
    switch (conf) {
      case 'UEFA': return 'from-blue-500/30 via-blue-600/20 to-transparent';
      case 'CONMEBOL': return 'from-yellow-500/30 via-yellow-600/20 to-transparent';
      case 'CONCACAF': return 'from-red-500/30 via-red-600/20 to-transparent';
      case 'CAF': return 'from-green-500/30 via-green-600/20 to-transparent';
      case 'AFC': return 'from-purple-500/30 via-purple-600/20 to-transparent';
      case 'OFC': return 'from-cyan-500/30 via-cyan-600/20 to-transparent';
      default: return 'from-gray-500/30 to-transparent';
    }
  };

  return (
    <div style={{ background: BG, minHeight: '100vh' }}>
      <TeamSchema team={team} />

      {/* Hero Section con bandera de fondo */}
      <section className="relative overflow-hidden">
        {/* Background con bandera */}
        <div className="absolute inset-0 opacity-10">
          <img
            src={`https://flagcdn.com/w1280/${team.flagCode}.png`}
            alt=""
            className="w-full h-full object-cover blur-3xl scale-150"
          />
        </div>
        <div className={`absolute inset-0 bg-gradient-to-b ${getConfederacionGradient(team.confederacion)}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-20">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-[#6a7a9a] mb-8">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/selecciones" className="hover:text-[#c9a84c] transition-colors">Selecciones</Link>
            <span>/</span>
            <span className="text-[#c9a84c]">{team.nombre}</span>
          </nav>

          {/* Header principal */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Bandera grande */}
            <div className="relative">
              <div className="w-32 h-24 md:w-48 md:h-36 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                <img
                  src={`https://flagcdn.com/w640/${team.flagCode}.png`}
                  alt={`Bandera de ${team.nombre}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-[#c9a84c]/20 rounded-full blur-3xl -z-10" />
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
                {team.esAnfitrion && (
                  <span className="px-3 py-1 text-xs font-bold bg-[#c9a84c]/20 text-[#c9a84c] rounded-full border border-[#c9a84c]/30">
                    🏟️ ANFITRIÓN
                  </span>
                )}
                {team.esPlayoff && (
                  <span className="px-3 py-1 text-xs font-bold bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30">
                    ⏳ PENDIENTE PLAYOFF
                  </span>
                )}
                <span className="px-3 py-1 text-xs font-bold bg-white/5 text-[#8a94b0] rounded-full border border-white/10">
                  {team.confederacion}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white mb-2">
                {team.nombre}
              </h1>

              <p className="text-lg text-[#8a94b0] mb-6">
                Grupo <span className="text-[#c9a84c] font-bold text-xl">{team.grupo}</span>
                <span className="mx-3">·</span>
                Ranking FIFA <span className="text-white font-bold">#{team.rankingFIFA || 'TBD'}</span>
              </p>

              {/* Stats rápidos */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <StatCard 
                  label="Participaciones" 
                  value={team.mundiales.toString()} 
                  icon="🌍" 
                  highlight={team.mundiales > 10}
                />
                <StatCard 
                  label="Títulos Mundial" 
                  value={team.mejorResultado.includes('Campeón') ? (team.mejorResultado.match(/\d+/)?.[0] || '1') : '0'} 
                  icon="🏆" 
                  highlight={team.mejorResultado.includes('Campeón')}
                />
                <StatCard 
                  label="Mejor Resultado" 
                  value={team.mejorResultado} 
                  icon="⭐" 
                  highlight={team.mejorResultado.includes('Campeón') || team.mejorResultado.includes('Subcampeón')}
                />
                <StatCard 
                  label="Confederación" 
                  value={team.confederacion} 
                  icon="🌐" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Sponsor */}
            <div className="w-full h-[90px] bg-[#0B1825] border border-white/5 rounded-xl flex items-center justify-center" data-sponsor-slot="seleccion-banner">
              <span className="text-[#4a5570] text-sm">Espacio patrocinador</span>
            </div>

            {/* Historia */}
            <section className="bg-[#0B1825] rounded-2xl p-6 border border-white/5">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>📖</span> Historia
              </h2>
              <p className="text-[#8a94b0] leading-relaxed">
                {teamAny.historia || `${team.nombre} participará en el Mundial 2026. Esta será ${team.mundiales > 0 ? `su ${team.mundiales + 1}ª participación` : 'su primera participación'} en la historia de los mundiales.`}
              </p>
              {teamAny.datosClave && (
                <div className="mt-4 p-4 bg-[#c9a84c]/10 border-l-4 border-[#c9a84c] rounded-r-xl">
                  <p className="text-[#c9a84c] font-semibold text-sm">💡 {teamAny.datosClave}</p>
                </div>
              )}
            </section>

            {/* Clasificación */}
            <section className="bg-[#0B1825] rounded-2xl p-6 border border-white/5">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🎯</span> Clasificación
              </h2>
              <p className="text-[#8a94b0] leading-relaxed">
                {teamAny.clasificacion || `${team.nombre} se ha clasificado para el Mundial 2026 ${team.esAnfitrion ? 'como país anfitrión' : `a través de ${team.confederacion}`}.`}
              </p>
            </section>

            {/* Jugadores Clave */}
            {teamAny.jugadoresClave && teamAny.jugadoresClave.length > 0 && (
              <section className="bg-[#0B1825] rounded-2xl p-6 border border-white/5">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span>⭐</span> Jugadores Clave
                </h2>
                <div className="grid gap-3">
                  {teamAny.jugadoresClave.map((j: any) => (
                    <div 
                      key={j.nombre} 
                      className="flex items-center gap-4 p-4 bg-[#060B14] rounded-xl border border-white/5 hover:border-[#c9a84c]/30 transition-all group"
                    >
                      <div className="w-14 h-14 rounded-xl bg-[#0F1D32] flex items-center justify-center text-2xl group-hover:bg-[#c9a84c]/20 transition-colors">
                        {j.posicion === 'POR' ? '🧤' : 
                         j.posicion === 'DEF' ? '🛡️' : 
                         j.posicion === 'MED' ? '⚙️' : '⚡'}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-white group-hover:text-[#c9a84c] transition-colors">{j.nombre}</p>
                        <p className="text-sm text-[#6a7a9a]">{j.club} · {j.posicion} · {j.edad} años</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[#c9a84c] font-bold">{j.golesIntl} goles</p>
                        <p className="text-xs text-[#6a7a9a]">{j.internacionalidades} partidos</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Predicción */}
            <section className="bg-gradient-to-br from-[#c9a84c]/10 to-[#0B1825] rounded-2xl p-6 border border-[#c9a84c]/20">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🔮</span> ¿Hasta dónde llegará {team.nombre}?
              </h2>
              <p className="text-[#8a94b0] mb-4">Vota y compara tu predicción con la comunidad:</p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {['Fase de grupos', 'Octavos', 'Cuartos', 'Semifinales', 'Final', 'Campeón'].map((fase) => (
                  <button
                    key={fase}
                    className="p-3 bg-[#060B14] border border-white/10 rounded-xl text-[#8a94b0] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all text-xs font-medium text-center"
                  >
                    {fase}
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Grupo */}
            <section className="bg-[#0B1825] rounded-2xl p-6 border border-white/5">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>📊</span> Grupo {team.grupo}
              </h3>
              <div className="space-y-2">
                {[team, ...companeros].map((t, idx) => (
                  <Link
                    key={t.slug}
                    href={`/selecciones/${t.slug}`}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                      t.slug === team.slug 
                        ? 'bg-[#c9a84c]/10 border border-[#c9a84c]/30' 
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <span className="text-[#6a7a9a] text-sm font-mono w-4">{idx + 1}</span>
                    <img
                      src={`https://flagcdn.com/w40/${t.flagCode}.png`}
                      alt={t.nombre}
                      className="w-8 h-6 object-cover rounded shadow-md"
                    />
                    <span className={`flex-1 font-medium ${t.slug === team.slug ? 'text-[#c9a84c]' : 'text-white'}`}>
                      {t.nombre}
                    </span>
                    <span className="text-xs text-[#6a7a9a]">#{t.rankingFIFA || '-'}</span>
                  </Link>
                ))}
              </div>
              <Link 
                href={`/grupos/grupo-${team.grupo.toLowerCase()}`}
                className="mt-4 block text-center py-3 bg-[#060B14] rounded-xl text-[#8a94b0] hover:text-[#c9a84c] hover:border-[#c9a84c]/30 border border-transparent transition-all text-sm font-medium"
              >
                Ver grupo completo →
              </Link>
            </section>

            {/* Enlaces rápidos */}
            <section className="bg-[#0B1825] rounded-2xl p-6 border border-white/5">
              <h3 className="text-lg font-bold text-white mb-4">Explora más</h3>
              <div className="space-y-2">
                {[
                  { href: '/selecciones', label: '📋 Todas las selecciones' },
                  { href: '/calendario', label: '📅 Calendario' },
                  { href: '/sedes', label: '🏟️ Las 16 sedes' },
                  { href: '/historia/campeones', label: '🏆 Historial' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block p-3 rounded-xl text-[#8a94b0] hover:bg-white/5 hover:text-[#c9a84c] transition-all text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 rounded-2xl p-6 border border-[#c9a84c]/20">
              <h3 className="font-bold text-white mb-2">¿Quieres predecir?</h3>
              <p className="text-sm text-[#8a94b0] mb-4">
                Regístrate gratis y compite con tus amigos.
              </p>
              <Link
                href="/registro"
                className="block w-full py-3 bg-gradient-to-r from-[#c9a84c] to-[#e8d48b] text-[#060B14] font-bold rounded-xl text-center hover:shadow-lg transition-all"
              >
                Registrarse Gratis
              </Link>
            </div>

            {/* Sponsor */}
            <div className="w-full h-[200px] bg-[#0F1D32] border border-white/5 rounded-xl flex items-center justify-center" data-sponsor-slot="seleccion-sidebar">
              <span className="text-[#4a5570] text-sm">Espacio patrocinador</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
