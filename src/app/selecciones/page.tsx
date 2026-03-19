// src/app/selecciones/page.tsx
// ZonaMundial.app — Las 48 selecciones del Mundial 2026

import { Metadata } from 'next';
import Link from 'next/link';
import { GRUPOS, getSeleccionesByGrupo } from '@/data/selecciones';

export const metadata: Metadata = {
  title: 'Las 48 Selecciones del Mundial 2026 — Plantillas, Grupos y Datos | ZonaMundial',
  description: '48 selecciones, 12 grupos, 6 confederaciones. Toda la información de cada selección del Mundial 2026: plantilla, historial, clasificación y predicciones.',
  keywords: ['selecciones mundial 2026', 'grupos mundial 2026', '48 equipos mundial', 'plantillas mundial 2026'],
  openGraph: {
    title: 'Las 48 Selecciones del Mundial 2026 | ZonaMundial',
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
          Las 48 selecciones del Mundial 2026 🌍
        </h1>
        <p className="text-xl text-gray-300">
          Por primera vez en la historia, 48 equipos competirán por la gloria mundialista en la edición más grande jamás disputada.
        </p>
      </header>

      {/* SPONSOR SLOT */}
      <div className="w-full h-[90px] bg-[#0B1825] border border-[#1a2a3f] rounded-lg flex items-center justify-center mb-12" data-sponsor-slot="selecciones-hero">
        <span className="text-gray-600 text-sm">Espacio patrocinador</span>
      </div>

      {/* 🏆 FAVORITOS AL TÍTULO */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🏆</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Favoritos al título</h2>
        </div>
        <p className="text-gray-400 mb-6">Los candidatos con mayor poder de fuego para levantar el trofeo en julio de 2026.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Argentina */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5 hover:border-gold/40 transition-colors group">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🇦🇷</span>
              <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">Argentina</h3>
            </div>
            <p className="text-sm text-gray-400">Campeón defensor. Messi busca despedirse con una corona mundial en suelo americano.</p>
          </div>

          {/* Francia */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5 hover:border-gold/40 transition-colors group">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🇫🇷</span>
              <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">Francia</h3>
            </div>
            <p className="text-sm text-gray-400">El mejor talento joven del planeta. Mbappé y Dembél lideran una generación dorada.</p>
          </div>

          {/* Brasil */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5 hover:border-gold/40 transition-colors group">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🇧🇷</span>
              <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">Brasil</h3>
            </div>
            <p className="text-sm text-gray-400">Vinicius Jr., Endrick y Rodrygo forman el tridente más temible del torneo.</p>
          </div>

          {/* España */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5 hover:border-gold/40 transition-colors group">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🇪🇸</span>
              <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">España</h3>
            </div>
            <p className="text-sm text-gray-400">Lamine Yamal y Pedri lideran una revolución táctica que ya conquistó Europa.</p>
          </div>

          {/* Inglaterra */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5 hover:border-gold/40 transition-colors group">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
              <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">Inglaterra</h3>
            </div>
            <p className="text-sm text-gray-400">Kane, Bellingham y Foden: tres estrellas en busca del título que escapa desde 1966.</p>
          </div>

          {/* Portugal */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5 hover:border-gold/40 transition-colors group">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🇵🇹</span>
              <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">Portugal</h3>
            </div>
            <p className="text-sm text-gray-400">El último baile de CR7. Una generación completa busca coronar la era dorada.</p>
          </div>

          {/* Alemania */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5 hover:border-gold/40 transition-colors group">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🇩🇪</span>
              <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">Alemania</h3>
            </div>
            <p className="text-sm text-gray-400">La Mannschaft busca redimirse en casa. Juegan en casa de tres de sus rivales.</p>
          </div>
        </div>
      </section>

      {/* ⚡ EQUIPOS A SEGUIR */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">⚡</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Equipos a seguir</h2>
        </div>
        <p className="text-gray-400 mb-6">Selecciones que prometen sorprender y dar la campanada en el torneo.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {/* México */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5 hover:border-gold/40 transition-colors group">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🇲🇽</span>
              <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">México</h3>
            </div>
            <p className="text-sm text-gray-400">Anfitrión con ventaja. La afición azteca convertirá cada estadio en el Azteca.</p>
          </div>

          {/* Estados Unidos */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5 hover:border-gold/40 transition-colors group">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🇺🇸</span>
              <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">Estados Unidos</h3>
            </div>
            <p className="text-sm text-gray-400">Pulisic, Reyna y Pochettino lideran el proyecto más ambicioso del fútbol americano.</p>
          </div>

          {/* Canadá */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5 hover:border-gold/40 transition-colors group">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🇨🇦</span>
              <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">Canadá</h3>
            </div>
            <p className="text-sm text-gray-400">Alphonso Davies es la estrella de una selección en ascenso que sueña en grande.</p>
          </div>

          {/* Marruecos */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5 hover:border-gold/40 transition-colors group">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🇲🇦</span>
              <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">Marruecos</h3>
            </div>
            <p className="text-sm text-gray-400">Los héroes de Qatar buscan repetir la hazaña. Semifinalistas con hambre de más.</p>
          </div>

          {/* Noruega */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5 hover:border-gold/40 transition-colors group">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🇳🇴</span>
              <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">Noruega</h3>
            </div>
            <p className="text-sm text-gray-400">Haaland + Ødegaard: la dupla letal que puede hacer historia para los vikingos.</p>
          </div>
        </div>
      </section>

      {/* 🌎 CLASIFICADOS POR CONFEDERACIÓN */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🌎</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Clasificados por confederación</h2>
        </div>
        <p className="text-gray-400 mb-6">El Mundial 2026 expande sus plazas para incluir a más selecciones de cada continente.</p>
        
        <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0F1D32]">
                <th className="text-left px-6 py-4 text-gold font-bold">Confederación</th>
                <th className="text-center px-6 py-4 text-gold font-bold">Plazas</th>
                <th className="text-left px-6 py-4 text-gold font-bold">Notas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1a2a3f]">
              <tr className="hover:bg-[#0F1D32] transition-colors">
                <td className="px-6 py-4 text-white font-medium">🇪🇺 UEFA</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-2xl font-bold text-gold">16</span>
                </td>
                <td className="px-6 py-4 text-gray-400">Máxima representación europea en la historia</td>
              </tr>
              <tr className="hover:bg-[#0F1D32] transition-colors">
                <td className="px-6 py-4 text-white font-medium">🌎 CONMEBOL</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-2xl font-bold text-gold">6+1</span>
                </td>
                <td className="px-6 py-4 text-gray-400">6 directas + 1 en repechaje intercontinental</td>
              </tr>
              <tr className="hover:bg-[#0F1D32] transition-colors">
                <td className="px-6 py-4 text-white font-medium">🇺🇸🇲🇽🇨🇦 CONCACAF</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-2xl font-bold text-gold">6</span>
                </td>
                <td className="px-6 py-4 text-gray-400">3 anfitriones + 3 plazas de clasificación</td>
              </tr>
              <tr className="hover:bg-[#0F1D32] transition-colors">
                <td className="px-6 py-4 text-white font-medium">🌍 CAF (África)</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-2xl font-bold text-gold">9</span>
                </td>
                <td className="px-6 py-4 text-gray-400">Cuatro plazas adicionales respecto a 2022</td>
              </tr>
              <tr className="hover:bg-[#0F1D32] transition-colors">
                <td className="px-6 py-4 text-white font-medium">🏆 AFC (Asia)</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-2xl font-bold text-gold">8</span>
                </td>
                <td className="px-6 py-4 text-gray-400">El fútbol asiático sigue creciendo con 4 plazas más</td>
              </tr>
              <tr className="hover:bg-[#0F1D32] transition-colors">
                <td className="px-6 py-4 text-white font-medium">🌊 OFC (Oceanía)</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-2xl font-bold text-gold">1</span>
                </td>
                <td className="px-6 py-4 text-gray-400">Por primera vez, plaza garantizada para Oceanía</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-[#0F1D32]">
                <td className="px-6 py-4 text-white font-bold">Total</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-2xl font-bold text-gold">48</span>
                </td>
                <td className="px-6 py-4 text-gray-400">16 equipos más que en ediciones anteriores</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* GRID DE GRUPOS */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Los 12 grupos</h2>
        </div>
        <p className="text-gray-400 mb-6">Cada grupo con 4 selecciones. Los 2 primeros de cada grupo avanzan a la fase eliminatoria.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grupos.map(([letra, grupo]) => {
            const equipos = getSeleccionesByGrupo(letra);
            return (
              <div key={letra} className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg overflow-hidden hover:border-gold/30 transition-colors">
                <div className="bg-[#0F1D32] px-4 py-3 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gold">Grupo {letra}</h3>
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
      </section>

      {/* CTA */}
      <section className="mt-10 p-8 bg-gradient-to-r from-gold/10 to-transparent border border-gold/30 rounded-lg text-center">
        <div className="text-4xl mb-4">🎯</div>
        <h2 className="text-2xl font-bold text-white mb-3">¿Quién ganará el Mundial 2026?</h2>
        <p className="text-gray-400 mb-6 max-w-lg mx-auto">Predice los resultados de todos los partidos, compite con tus amigos y demuestra quién es el mejor pronosticador.</p>
        <Link href="/registro" className="px-8 py-4 bg-gold text-[#060B14] font-bold rounded-lg hover:bg-gold/90 transition-colors inline-block text-lg">
          Regístrate gratis y empieza a predecir →
        </Link>
      </section>
    </>
  );
}
