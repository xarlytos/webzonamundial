// src/app/selecciones/[slug]/page.tsx
// ZonaMundial.app — Página dinámica de selección
// Genera 48 páginas estáticas con SSG + SEO completo + Schema markup

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSeleccionBySlug, getSeleccionesByGrupo, getAllSlugs, GRUPOS } from '@/data/selecciones';
import Link from 'next/link';

// ===== SSG: Genera las 48 páginas en build time =====
export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

// ===== SEO: Metadata dinámica por selección =====
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const team = getSeleccionBySlug(params.slug);
  if (!team) return { title: 'Selección no encontrada | ZonaMundial' };

  const seoTitle = `${team.nombre} — Mundial 2026 | ZonaMundial`;
  const seoDescription = `Todo sobre ${team.nombre} en el Mundial 2026: calendario, jugadores, historia y predicciones.`;
  const seoKeywords = `${team.nombre}, mundial 2026, selección ${team.nombre}`;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `https://zonamundial.app/selecciones/${team.slug}`,
      siteName: 'ZonaMundial',
      type: 'website',
      images: [{
        url: `https://zonamundial.app/api/og/seleccion?team=${team.slug}`,
        width: 1200,
        height: 630,
        alt: `${team.nombre} — Torneo de Selecciones 2026`,
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
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  };
}

// ===== Schema.org JSON-LD =====
function TeamSchema({ team }: { team: ReturnType<typeof getSeleccionBySlug> }) {
  if (!team) return null;

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

// ===== COMPONENTE PRINCIPAL =====
export default function SeleccionPage({ params }: { params: { slug: string } }) {
  const team = getSeleccionBySlug(params.slug);
  if (!team) notFound();

  const grupoData = GRUPOS[team.grupo];
  const companeros = getSeleccionesByGrupo(team.grupo).filter(t => t.slug !== team.slug);

  // Usar as any para propiedades que faltan en el tipo
  const teamAny = team as any;

  return (
    <>
      <TeamSchema team={team} />

      {/* BREADCRUMBS */}
      <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-gold">Inicio</Link></li>
          <li>/</li>
          <li><Link href="/selecciones" className="hover:text-gold">Selecciones</Link></li>
          <li>/</li>
          <li className="text-gold">{team.nombre}</li>
        </ol>
      </nav>

      {/* HERO: Bandera + Nombre + Datos clave */}
      <header className="mb-10">
        <div className="flex items-center gap-6 mb-4">
          {/* Bandera grande — dominio público, sin copyright */}
          <span className="text-8xl" role="img" aria-label={`Bandera de ${team.nombre}`}>
            {team.emoji}
          </span>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {team.nombre}
            </h1>
            <p className="text-xl text-gold mt-1">
              {team.grupo ? `Grupo ${team.grupo}` : ''} · {team.confederacion} · Ranking FIFA #{team.rankingFIFA || 'TBD'}
            </p>
            {team.esAnfitrion && (
              <span className="inline-block mt-2 px-3 py-1 bg-gold/20 text-gold rounded-full text-sm font-semibold">
                🏟️ País anfitrión
              </span>
            )}
            {team.esPlayoff && (
              <span className="inline-block mt-2 px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">
                ⏳ Pendiente playoff — {teamAny.playoffPath || 'TBD'}
              </span>
            )}
          </div>
        </div>

        {/* Datos rápidos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <StatCard label="Títulos mundiales" value={team.mundiales.toString()} icon="🏆" />
          <StatCard label="Participaciones" value={teamAny.participaciones?.toString() || '0'} icon="📊" />
          <StatCard label="Mejor resultado" value={teamAny.mejorResultado || 'TBD'} icon="⭐" />
          <StatCard label="Director técnico" value={teamAny.director || 'TBD'} icon="👔" />
        </div>
      </header>

      {/* SLOT SPONSOR — Banner 728x90 para tiers Match + Challenge */}
      <div className="w-full h-[90px] bg-[#0B1825] border border-[#1a2a3f] rounded-lg flex items-center justify-center mb-8" data-sponsor-slot="seleccion-banner" data-team={team.slug}>
        <span className="text-gray-600 text-sm">Espacio patrocinador</span>
      </div>

      {/* HISTORIA / CONTENIDO EDITORIAL */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          {team.nombre} en el Torneo de Selecciones 2026
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          {teamAny.historia || `${team.nombre} participará en el Mundial 2026. Más información próximamente.`}
        </p>
        {teamAny.datosClave && (
          <div className="mt-4 p-4 bg-gold/10 border-l-4 border-gold rounded-r-lg">
            <p className="text-gold font-semibold">💡 {teamAny.datosClave}</p>
          </div>
        )}
      </section>

      {/* CLASIFICACIÓN */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Clasificación</h2>
        <p className="text-gray-300">{teamAny.clasificacion || 'Información de clasificación próximamente.'}</p>
        {team.esPlayoff && teamAny.playoffEquipos && (
          <div className="mt-4">
            <p className="text-gray-400 mb-2">Equipos en el playoff:</p>
            <div className="flex flex-wrap gap-2">
              {teamAny.playoffEquipos.map((eq: string) => (
                <span key={eq} className="px-3 py-1 bg-[#0B1825] border border-[#1a2a3f] rounded-full text-sm text-gray-300">
                  {eq}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* JUGADORES CLAVE — Solo datos editoriales, sin fotos */}
      {teamAny.jugadoresClave && teamAny.jugadoresClave.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Jugadores Clave</h2>
          <div className="grid gap-3">
            {teamAny.jugadoresClave.map((j: any) => (
              <div key={j.nombre} className="flex items-center justify-between p-4 bg-[#0B1825] border border-[#1a2a3f] rounded-lg hover:border-gold/50 transition-colors">
                <div className="flex items-center gap-4">
                  {/* Icono de posición en lugar de foto — copyright safe */}
                  <div className="w-12 h-12 rounded-full bg-[#0F1D32] flex items-center justify-center text-lg">
                    {j.posicion === 'POR' ? '🧤' : j.posicion === 'DEF' ? '🛡️' : j.posicion === 'MED' ? '⚙️' : '⚡'}
                  </div>
                  <div>
                    <p className="font-bold text-white">{j.nombre}</p>
                    <p className="text-sm text-gray-400">{j.club} · {j.posicion} · {j.edad} años</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gold font-bold">{j.golesIntl} goles</p>
                  <p className="text-sm text-gray-400">{j.internacionalidades} partidos intl.</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            * Datos editoriales de fuentes públicas. Estadísticas actualizadas a marzo 2026.
            {/* Placeholder para fotos si se confirma licencia */}
          </p>
        </section>
      )}

      {/* GRUPO — Tabla con enlaces a compañeros */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Grupo {team.grupo}</h2>
        <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-0 text-sm font-semibold text-gray-400 bg-[#0F1D32] p-3">
            <span>Selección</span>
            <span className="text-center">Ranking</span>
            <span className="text-center">Conf.</span>
            <span className="text-center">Títulos</span>
          </div>
          {[team, ...companeros].map(t => (
            <Link
              key={t.slug}
              href={`/selecciones/${t.slug}`}
              className={`grid grid-cols-4 gap-0 p-3 border-t border-[#1a2a3f] hover:bg-[#0F1D32] transition-colors ${t.slug === team.slug ? 'bg-gold/5' : ''}`}
            >
              <span className="flex items-center gap-2">
                <span>{t.emoji}</span>
                <span className={`font-medium ${t.slug === team.slug ? 'text-gold' : 'text-white'}`}>
                  {t.nombre}
                </span>
              </span>
              <span className="text-center text-gray-300">#{t.rankingFIFA || 'TBD'}</span>
              <span className="text-center text-gray-300">{t.confederacion}</span>
              <span className="text-center text-gray-300">{t.mundiales > 0 ? `🏆 ${t.mundiales}` : '—'}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* PREDICTOR COMUNITARIO — Widget demo (sin puntos, empuja a app) */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          ¿Hasta dónde llegará {team.nombre}?
        </h2>
        <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-6">
          <p className="text-gray-400 mb-4">Vota y compara tu predicción con la comunidad ZonaMundial:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Fase de grupos', 'Octavos', 'Cuartos', 'Semifinales', 'Final', 'Campeón'].map(fase => (
              <button
                key={fase}
                className="p-3 bg-[#0F1D32] border border-[#1a2a3f] rounded-lg text-gray-300 hover:border-gold hover:text-gold transition-all text-sm font-medium"
              >
                {fase}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Descarga la app para que tu voto cuente en el ranking global.
          </p>
        </div>
      </section>

      {/* CTA REGISTRO */}
      <section className="mb-10 p-6 bg-gradient-to-r from-gold/10 to-transparent border border-gold/30 rounded-lg">
        <h2 className="text-xl font-bold text-white mb-2">
          ¿Quieres predecir los partidos de {team.nombre}?
        </h2>
        <p className="text-gray-400 mb-4">
          Regístrate gratis en ZonaMundial y compite con tus amigos durante todo el torneo.
        </p>
        <div className="flex gap-3">
          <Link
            href="/registro"
            className="px-6 py-3 bg-gold text-[#060B14] font-bold rounded-lg hover:bg-gold/90 transition-colors"
          >
            Regístrate Gratis
          </Link>
          <Link
            href="/app"
            className="px-6 py-3 border border-gold/50 text-gold font-bold rounded-lg hover:bg-gold/10 transition-colors"
          >
            Ver la App
          </Link>
        </div>
      </section>

      {/* ENLACES INTERNOS — SEO internal linking */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">Explora más</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/selecciones" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-300 hover:border-gold hover:text-gold transition-all text-sm">
            📋 Todas las selecciones
          </Link>
          <Link href={`/grupos/grupo-${team.grupo.toLowerCase()}`} className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-300 hover:border-gold hover:text-gold transition-all text-sm">
            📊 Grupo {team.grupo} completo
          </Link>
          <Link href="/calendario" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-300 hover:border-gold hover:text-gold transition-all text-sm">
            📅 Calendario de partidos
          </Link>
          <Link href="/sedes" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-300 hover:border-gold hover:text-gold transition-all text-sm">
            🏟️ Las 16 sedes
          </Link>
          <Link href="/historia/campeones" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-300 hover:border-gold hover:text-gold transition-all text-sm">
            🏆 Historial de campeones
          </Link>
          <Link href="/datos/formato-2026" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-300 hover:border-gold hover:text-gold transition-all text-sm">
            📐 Formato 48 equipos
          </Link>
        </div>
      </section>

      {/* SLOT SPONSOR — Footer de selección */}
      <div className="w-full h-[90px] bg-[#0B1825] border border-[#1a2a3f] rounded-lg flex items-center justify-center" data-sponsor-slot="seleccion-footer" data-team={team.slug}>
        <span className="text-gray-600 text-sm">Espacio patrocinador</span>
      </div>
    </>
  );
}

// ===== Componente auxiliar =====
function StatCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="p-4 bg-[#0B1825] border border-[#1a2a3f] rounded-lg">
      <span className="text-2xl">{icon}</span>
      <p className="text-white font-bold mt-1">{value}</p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}
