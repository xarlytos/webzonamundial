// src/app/selecciones/page.tsx
// ZonaMundial.app — Índice de las 48 selecciones por grupo

import { Metadata } from 'next';
import Link from 'next/link';
import { GRUPOS, getSeleccionesByGrupo } from '@/data/selecciones';

export const metadata: Metadata = {
  title: 'Las 48 Selecciones del Torneo 2026 — Plantillas, Grupos y Datos | ZonaMundial',
  description: '48 selecciones, 12 grupos, 6 confederaciones. Toda la información de cada selección del torneo de selecciones 2026: plantilla, historial, clasificación y predicciones.',
  keywords: ['selecciones mundial 2026', 'grupos mundial 2026', '48 equipos mundial', 'plantillas mundial 2026'],
  openGraph: {
    title: 'Las 48 Selecciones del Torneo 2026 | ZonaMundial',
    description: '48 selecciones, 12 grupos. Plantillas, datos y predicciones de cada equipo.',
    url: 'https://zonamundial.app/selecciones',
    siteName: 'ZonaMundial',
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function SeleccionesIndex() {
  const grupos = Object.entries(GRUPOS);

  return (
    <>
      {/* Schema Breadcrumb */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://zonamundial.app' },
          { '@type': 'ListItem', position: 2, name: 'Selecciones', item: 'https://zonamundial.app/selecciones' },
        ],
      })}} />

      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-gold">Inicio</Link></li>
          <li>/</li>
          <li className="text-gold">Selecciones</li>
        </ol>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Las 48 Selecciones
        </h1>
        <p className="text-xl text-gray-300">
          Torneo de Selecciones 2026 · 48 equipos · 12 grupos · 6 confederaciones · 104 partidos
        </p>
      </header>

      {/* SPONSOR SLOT */}
      <div className="w-full h-[90px] bg-[#0B1825] border border-[#1a2a3f] rounded-lg flex items-center justify-center mb-8" data-sponsor-slot="selecciones-hero">
        <span className="text-gray-600 text-sm">Espacio patrocinador</span>
      </div>

      {/* GRID DE GRUPOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {grupos.map(([letra, grupo]) => {
          const equipos = getSeleccionesByGrupo(letra);
          return (
            <div key={letra} className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg overflow-hidden hover:border-gold/30 transition-colors">
              <div className="bg-[#0F1D32] px-4 py-3 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gold">Grupo {letra}</h2>
                <Link href={`/grupos/grupo-${letra.toLowerCase()}`} className="text-sm text-gray-400 hover:text-gold">
                  Ver grupo →
                </Link>
              </div>
              <div className="divide-y divide-[#1a2a3f]">
                {equipos.map(team => (
                  <Link
                    key={team.slug}
                    href={`/selecciones/${team.slug}`}
                    className="flex items-center justify-between p-3 hover:bg-[#0F1D32] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{team.emoji}</span>
                      <div>
                        <span className="text-white font-medium">{team.nombre}</span>
                        {team.esAnfitrion && <span className="ml-2 text-xs text-gold">Anfitrión</span>}
                        {team.esPlayoff && <span className="ml-2 text-xs text-orange-400">Playoff</span>}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-400">
                        #{team.rankingFIFA || 'TBD'}
                      </span>
                      {team.mundiales > 0 && (
                        <span className="ml-2 text-sm text-gold">🏆×{team.mundiales}</span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <section className="mt-10 p-6 bg-gradient-to-r from-gold/10 to-transparent border border-gold/30 rounded-lg text-center">
        <h2 className="text-xl font-bold text-white mb-2">¿Listo para predecir el torneo?</h2>
        <p className="text-gray-400 mb-4">Regístrate gratis y compite con tu selección favorita.</p>
        <Link href="/registro" className="px-8 py-3 bg-gold text-[#060B14] font-bold rounded-lg hover:bg-gold/90 transition-colors inline-block">
          Regístrate Gratis
        </Link>
      </section>
    </>
  );
}
