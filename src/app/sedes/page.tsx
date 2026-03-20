// src/app/sedes/page.tsx
// ZonaMundial.app — Índice de las 16 sedes con imágenes reales (Diseño mejorado)

import { Metadata } from 'next';
import Link from 'next/link';
import { SEDES, getSedesByPais } from '@/data/sedes';

const BG = "#060B14";
const BG2 = "#0F1D32";
const BG3 = "#0B1825";
const GOLD = "#c9a84c";
const GOLD2 = "#e8d48b";

export const metadata: Metadata = {
  title: 'Las 16 Sedes del Mundial 2026 — Estadios, Ciudades y Guías de Viaje | ZonaMundial',
  description: '16 ciudades, 3 países, 104 partidos. Todo sobre las sedes del Mundial 2026: estadios, capacidad, clima, transporte, alojamiento y guías de viaje.',
  keywords: ['sedes mundial 2026', 'estadios mundial 2026', 'ciudades mundial', 'guia viaje mundial 2026'],
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

// Mapeo de imágenes de estadios - Imágenes locales del proyecto
const STADIUM_IMAGES: Record<string, string> = {
  'nueva-york': '/img/zonamundial-images/stadiums/metlife-stadium.jpg',
  'los-angeles': '/img/zonamundial-images/stadiums/sofi-stadium-los-angeles.jpg',
  'miami': '/img/zonamundial-images/stadiums/hard-rock-stadium-miami.jpg',
  'dallas': '/img/zonamundial-images/stadiums/att-stadium-dallas.jpg',
  'san-francisco': '/img/zonamundial-images/stadiums/levis-stadium-san-francisco.jpg',
  'seattle': '/img/zonamundial-images/stadiums/lumen-field-seattle.jpg',
  'atlanta': '/img/zonamundial-images/stadiums/mercedes-benz-stadium-atlanta.jpg',
  'houston': '/img/zonamundial-images/stadiums/nrg-stadium-houston.jpg',
  'filadelfia': '/img/zonamundial-images/stadiums/lincoln-financial-field-filadelfia.jpg',
  'boston': '/img/zonamundial-images/stadiums/gillette-stadium-boston.jpg',
  'kansas-city': '/img/zonamundial-images/stadiums/arrowhead-stadium-kansas-city.jpg',
  'ciudad-de-mexico': '/img/zonamundial-images/stadiums/estadio-azteca-cdmx.jpg',
  'guadalajara': '/img/zonamundial-images/stadiums/estadio-akron-guadalajara.jpg',
  'monterrey': '/img/zonamundial-images/stadiums/estadio-bbva-monterrey.jpg',
  'toronto': '/img/zonamundial-images/stadiums/bmo-field-toronto.jpg',
  'vancouver': '/img/zonamundial-images/stadiums/bc-place-vancouver.jpg',
};

// Componente de tarjeta de estadio
function EstadioCard({ sede }: { sede: typeof SEDES[0] }) {
  const imageUrl = STADIUM_IMAGES[sede.slug];
  const isFinal = sede.fasesQueAlberga.includes('FINAL');
  const isSemifinal = sede.fasesQueAlberga.includes('Semifinal');
  const isInaugural = sede.partidosDestacados.some(p => p.toLowerCase().includes('inaugur'));
  
  return (
    <Link
      href={`/sedes/${sede.slug}`}
      className="group relative block rounded-2xl overflow-hidden border border-white/5 hover:border-[#c9a84c]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(201,168,76,0.15)] bg-[#0B1825]"
    >
      {/* Imagen del estadio */}
      <div className="relative h-48 overflow-hidden">
              {imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={imageUrl}
                  alt={sede.estadio}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0F1D32] to-[#1a2a3f] flex items-center justify-center">
            <span className="text-5xl">🏟️</span>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {isFinal && (
            <span className="px-3 py-1 bg-[#c9a84c] text-[#060B14] text-xs font-black rounded-full shadow-lg">
              🏆 FINAL
            </span>
          )}
          {isSemifinal && !isFinal && (
            <span className="px-3 py-1 bg-[#c9a84c]/90 text-[#060B14] text-xs font-black rounded-full shadow-lg">
              ⚽ SEMIFINAL
            </span>
          )}
          {isInaugural && (
            <span className="px-3 py-1 bg-green-500 text-white text-xs font-black rounded-full shadow-lg">
              🚀 INAUGURACIÓN
            </span>
          )}
          {sede.techoCerrado && (
            <span className="px-3 py-1 bg-blue-500/80 text-white text-xs font-bold rounded-full shadow-lg">
              🏠 TECHO
            </span>
          )}
        </div>

        {/* Bandera del país */}
        <div className="absolute top-3 left-3">
          <img
            src={`https://flagcdn.com/w80/${sede.paisCodigo.toLowerCase()}.png`}
            alt={sede.pais}
            className="w-10 h-7 object-cover rounded shadow-lg border border-white/20"
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold text-white text-lg group-hover:text-[#c9a84c] transition-colors leading-tight">
              {sede.nombre}
            </h3>
            <p className="text-sm text-[#6a7a9a] mt-1">{sede.estadio}</p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-2 mt-4 mb-4">
          <div className="bg-[#060B14] rounded-lg p-2 text-center">
            <p className="text-[10px] text-[#6a7a9a] uppercase">Capacidad</p>
            <p className="text-sm font-bold text-[#c9a84c]">{sede.capacidad.toLocaleString()}</p>
          </div>
          <div className="bg-[#060B14] rounded-lg p-2 text-center">
            <p className="text-[10px] text-[#6a7a9a] uppercase">Partidos</p>
            <p className="text-sm font-bold text-white">{sede.totalPartidos}</p>
          </div>
          <div className="bg-[#060B14] rounded-lg p-2 text-center">
            <p className="text-[10px] text-[#6a7a9a] uppercase">Clima</p>
            <p className="text-sm font-bold text-white">{sede.clima.tempMedia}</p>
          </div>
        </div>

        {/* Fases */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {sede.fasesQueAlberga.slice(0, 3).map((fase) => (
            <span 
              key={fase}
              className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                fase === 'FINAL' || fase === 'Semifinal' 
                  ? 'bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30'
                  : 'bg-white/5 text-[#8a94b0]'
              }`}
            >
              {fase}
            </span>
          ))}
          {sede.fasesQueAlberga.length > 3 && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-[#6a7a9a]">
              +{sede.fasesQueAlberga.length - 3}
            </span>
          )}
        </div>

        {/* Partidos destacados */}
        {sede.partidosDestacados.length > 0 && (
          <div className="pt-3 border-t border-white/5">
            <p className="text-xs text-[#8a94b0] flex items-center gap-1">
              <span>⭐</span>
              <span className="truncate">{sede.partidosDestacados[0]}</span>
            </p>
          </div>
        )}

        {/* Hover indicator */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-[#6a7a9a] group-hover:text-[#c9a84c] transition-colors">
            Ver guía completa
          </span>
          <span className="text-[#c9a84c] group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>

      {/* Bottom glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </Link>
  );
}

// Componente de estadio destacado (hero)
function EstadioDestacado({ sede, badge, badgeColor }: { sede: typeof SEDES[0]; badge: string; badgeColor: string }) {
  const imageUrl = STADIUM_IMAGES[sede.slug];
  
  return (
    <Link
      href={`/sedes/${sede.slug}`}
      className="group relative block rounded-3xl overflow-hidden border-2 border-[#c9a84c]/30 hover:border-[#c9a84c] transition-all duration-300"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={sede.estadio}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0F1D32] to-[#1a2a3f]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6 md:p-8 min-h-[300px] flex flex-col justify-end">
        {/* Badge */}
        <span 
          className="absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-black shadow-lg"
          style={{ background: badgeColor, color: badgeColor === '#c9a84c' ? '#060B14' : '#fff' }}
        >
          {badge}
        </span>

        {/* Bandera */}
        <img
          src={`https://flagcdn.com/w80/${sede.paisCodigo.toLowerCase()}.png`}
          alt={sede.pais}
          className="w-12 h-8 object-cover rounded shadow-lg border border-white/20 mb-4"
        />

        <h3 className="text-2xl md:text-3xl font-black text-white mb-2 group-hover:text-[#c9a84c] transition-colors">
          {sede.nombre}
        </h3>
        <p className="text-lg text-[#8a94b0] mb-4">{sede.estadio}</p>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">👥</span>
            <div>
              <p className="text-xs text-[#6a7a9a]">Capacidad</p>
              <p className="text-lg font-bold text-[#c9a84c]">{sede.capacidad.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚽</span>
            <div>
              <p className="text-xs text-[#6a7a9a]">Partidos</p>
              <p className="text-lg font-bold text-white">{sede.totalPartidos}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌡️</span>
            <div>
              <p className="text-xs text-[#6a7a9a]">Clima</p>
              <p className="text-lg font-bold text-white">{sede.clima.tempMedia}</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-[#8a94b0] line-clamp-2">{sede.historia}</p>
      </div>
    </Link>
  );
}

export default function SedesIndex() {
  const usa = getSedesByPais('Estados Unidos');
  const mex = getSedesByPais('México');
  const can = getSedesByPais('Canadá');

  // Sedes destacadas
  const finalSede = SEDES.find(s => s.fasesQueAlberga.includes('FINAL'));
  const inauguralSede = SEDES.find(s => s.partidosDestacados.some(p => p.toLowerCase().includes('inaugur')));
  const semifinalSede = SEDES.find(s => s.fasesQueAlberga.includes('Semifinal') && !s.fasesQueAlberga.includes('FINAL'));

  return (
    <div style={{ background: BG, minHeight: '100vh' }}>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://zonamundial.app' },
          { '@type': 'ListItem', position: 2, name: 'Sedes', item: 'https://zonamundial.app/sedes' },
        ],
      })}} />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ padding: '80px 20px 60px' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-10 left-10 text-8xl opacity-[0.03] rotate-[-15deg]">🏟️</div>
        <div className="absolute bottom-10 right-10 text-7xl opacity-[0.03] rotate-[15deg]">⚽</div>

        <div className="max-w-6xl mx-auto relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#6a7a9a] mb-6">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-[#c9a84c]">Sedes</span>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-bold tracking-wider uppercase mb-4 border border-[#c9a84c]/20">
              Mundial 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#e8d48b]">16</span> Estadios
            </h1>
            <p className="text-lg text-[#8a94b0] mb-8">
              Primer mundial tripartito de la historia. 16 ciudades, 3 países, 104 partidos, 4 zonas horarias.
            </p>

            {/* Stats de países */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-[#0B1825] rounded-2xl p-4 border border-white/5 hover:border-blue-500/30 transition-colors">
                <img src="https://flagcdn.com/w80/us.png" alt="USA" className="w-12 h-8 object-cover rounded mx-auto mb-2 shadow-lg" />
                <p className="text-2xl font-black text-white">10</p>
                <p className="text-xs text-[#6a7a9a]">Estados Unidos</p>
                <p className="text-xs text-blue-400 mt-1">78 partidos</p>
              </div>
              <div className="bg-[#0B1825] rounded-2xl p-4 border border-white/5 hover:border-green-500/30 transition-colors">
                <img src="https://flagcdn.com/w80/mx.png" alt="México" className="w-12 h-8 object-cover rounded mx-auto mb-2 shadow-lg" />
                <p className="text-2xl font-black text-white">3</p>
                <p className="text-xs text-[#6a7a9a]">México</p>
                <p className="text-xs text-green-400 mt-1">13 partidos</p>
              </div>
              <div className="bg-[#0B1825] rounded-2xl p-4 border border-white/5 hover:border-red-500/30 transition-colors">
                <img src="https://flagcdn.com/w80/ca.png" alt="Canadá" className="w-12 h-8 object-cover rounded mx-auto mb-2 shadow-lg" />
                <p className="text-2xl font-black text-white">3</p>
                <p className="text-xs text-[#6a7a9a]">Canadá</p>
                <p className="text-xs text-red-400 mt-1">13 partidos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="w-full h-[90px] bg-[#0B1825] border border-white/5 rounded-xl flex items-center justify-center" data-sponsor-slot="sedes-hero">
          <span className="text-[#4a5570] text-sm">Espacio patrocinador</span>
        </div>
      </div>

      {/* Sedes destacadas */}
      {(finalSede || inauguralSede || semifinalSede) && (
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 flex items-center justify-center border border-[#c9a84c]/20">
              <span className="text-2xl">⭐</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Sedes destacadas</h2>
              <p className="text-sm text-[#6a7a9a]">Los estadios más importantes del torneo</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {finalSede && (
              <EstadioDestacado 
                sede={finalSede} 
                badge="🏆 LA FINAL" 
                badgeColor="#c9a84c" 
              />
            )}
            {inauguralSede && (
              <EstadioDestacado 
                sede={inauguralSede} 
                badge="🚀 INAUGURACIÓN" 
                badgeColor="#22c55e" 
              />
            )}
            {semifinalSede && (
              <EstadioDestacado 
                sede={semifinalSede} 
                badge="⚽ SEMIFINAL" 
                badgeColor="#3b82f6" 
              />
            )}
          </div>
        </section>
      )}

      {/* Estados Unidos */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="flex items-center gap-4 mb-8">
          <img src="https://flagcdn.com/w80/us.png" alt="USA" className="w-14 h-10 object-cover rounded-lg shadow-lg" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Estados Unidos</h2>
            <p className="text-sm text-[#6a7a9a]">{usa.length} sedes · 78 partidos</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {usa.map((sede) => (
            <EstadioCard key={sede.slug} sede={sede} />
          ))}
        </div>
      </section>

      {/* México */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="flex items-center gap-4 mb-8">
          <img src="https://flagcdn.com/w80/mx.png" alt="México" className="w-14 h-10 object-cover rounded-lg shadow-lg" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">México</h2>
            <p className="text-sm text-[#6a7a9a]">{mex.length} sedes · 13 partidos</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mex.map((sede) => (
            <EstadioCard key={sede.slug} sede={sede} />
          ))}
        </div>
      </section>

      {/* Canadá */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="flex items-center gap-4 mb-8">
          <img src="https://flagcdn.com/w80/ca.png" alt="Canadá" className="w-14 h-10 object-cover rounded-lg shadow-lg" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Canadá</h2>
            <p className="text-sm text-[#6a7a9a]">{can.length} sedes · 13 partidos</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {can.map((sede) => (
            <EstadioCard key={sede.slug} sede={sede} />
          ))}
        </div>
      </section>

      {/* Info general */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-[#0B1825] to-[#0F1D32] rounded-2xl p-6 md:p-8 border border-white/5">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 flex items-center justify-center border border-[#c9a84c]/20">
              <span className="text-2xl">🌎</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Información de viaje</h2>
              <p className="text-sm text-[#6a7a9a]">Todo lo que necesitas saber</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-[#060B14] rounded-xl border border-white/5">
              <span className="text-3xl mb-3 block">🛂</span>
              <h3 className="font-bold text-white mb-2">Visados</h3>
              <ul className="text-sm text-[#8a94b0] space-y-1">
                <li>• USA: ESTA o Visa B2</li>
                <li>• México: Sin visa (180 días)</li>
                <li>• Canadá: eTA electrónica</li>
              </ul>
            </div>
            <div className="p-4 bg-[#060B14] rounded-xl border border-white/5">
              <span className="text-3xl mb-3 block">💱</span>
              <h3 className="font-bold text-white mb-2">Monedas</h3>
              <ul className="text-sm text-[#8a94b0] space-y-1">
                <li>• USA: Dólar USD</li>
                <li>• México: Peso MXN</li>
                <li>• Canadá: Dólar CAD</li>
              </ul>
            </div>
            <div className="p-4 bg-[#060B14] rounded-xl border border-white/5">
              <span className="text-3xl mb-3 block">🌤️</span>
              <h3 className="font-bold text-white mb-2">Clima</h3>
              <ul className="text-sm text-[#8a94b0] space-y-1">
                <li>• Junio: 15-35°C variable</li>
                <li>• Julio: 18-38°C caluroso</li>
                <li>• Revisa cada sede</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#c9a84c]/10 via-[#0B1825] to-[#0F1D32] border border-[#c9a84c]/20 p-8 md:p-12 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a84c]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c9a84c]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative">
            <span className="text-5xl mb-4 block">🎯</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              ¿En qué sede jugará tu selección?
            </h2>
            <p className="text-[#8a94b0] mb-8 max-w-xl mx-auto">
              Consulta el calendario completo y planifica tu viaje al Mundial 2026. ¡No te pierdas ni un partido!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/calendario" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#c9a84c] to-[#e8d48b] text-[#060B14] font-bold rounded-xl hover:shadow-[0_8px_32px_rgba(201,168,76,0.4)] transition-all hover:-translate-y-0.5"
              >
                📅 Ver calendario
              </Link>
              <Link 
                href="/grupos" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#060B14] border border-[#c9a84c]/30 text-[#c9a84c] font-bold rounded-xl hover:bg-[#c9a84c]/10 transition-all"
              >
                📊 Ver grupos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor footer */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="w-full h-[90px] bg-[#0B1825] border border-white/5 rounded-xl flex items-center justify-center" data-sponsor-slot="sedes-footer">
          <span className="text-[#4a5570] text-sm">Espacio patrocinador</span>
        </div>
      </div>
    </div>
  );
}
