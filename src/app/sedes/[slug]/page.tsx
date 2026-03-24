// src/app/sedes/[slug]/page.tsx
// ZonaMundial.app — Página dinámica de sede/ciudad (Diseño mejorado)

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSedeBySlug, getAllSedeSlugs } from '@/data/sedes';
import Link from 'next/link';

const BG = "#060B14";
const BG2 = "#0F1D32";
const BG3 = "#0B1825";
const GOLD = "#c9a84c";
const GOLD2 = "#e8d48b";
const MID = "#8a94b0";
const DIM = "#6a7a9a";

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

export async function generateStaticParams() {
  return getAllSedeSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const sede = getSedeBySlug(params.slug);
  if (!sede) return { title: 'Sede no encontrada | ZonaMundial' };
  return {
    title: sede.seoTitle,
    description: sede.seoDescription,
    keywords: sede.seoKeywords,
    openGraph: {
      title: sede.seoTitle,
      description: sede.seoDescription,
      url: `https://zonamundial.app/sedes/${sede.slug}`,
      siteName: 'ZonaMundial',
    },
    robots: { index: true, follow: true, 'max-image-preview': 'large' },
  };
}

// Componente de stat
function StatCard({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <div className="p-4 bg-[#0B1825] rounded-2xl border border-white/5 hover:border-[#c9a84c]/30 transition-all group">
      <span className="text-2xl mb-2 block">{icon}</span>
      <p className="text-2xl font-black text-[#c9a84c] group-hover:scale-105 transition-transform">{value}</p>
      <p className="text-xs text-[#6a7a9a] mt-1">{label}</p>
    </div>
  );
}

// Componente de info card
function InfoCard({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#0B1825] rounded-2xl p-6 border border-white/5 hover:border-[#c9a84c]/20 transition-all">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default function SedePage({ params }: { params: { slug: string } }) {
  const sede = getSedeBySlug(params.slug);
  if (!sede) notFound();
  const g = sede.guiaViaje;
  const imageUrl = STADIUM_IMAGES[sede.slug];
  const isFinalSede = sede.fasesQueAlberga.includes('FINAL');

  return (
    <div style={{ background: BG, minHeight: '100vh' }}>
      {/* Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Place',
        name: `${sede.estadio} — ${sede.nombre}`,
        address: { '@type': 'PostalAddress', addressLocality: sede.ciudad, addressCountry: sede.paisCodigo },
        geo: { '@type': 'GeoCoordinates', latitude: sede.coordenadas.lat, longitude: sede.coordenadas.lng },
        maximumAttendeeCapacity: sede.capacidad,
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://zonamundial.app' },
          { '@type': 'ListItem', position: 2, name: 'Sedes', item: 'https://zonamundial.app/sedes' },
          { '@type': 'ListItem', position: 3, name: sede.nombre, item: `https://zonamundial.app/sedes/${sede.slug}` },
        ],
      })}} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-[#6a7a9a] mb-6">
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">Inicio</Link>
          <span>/</span>
          <Link href="/sedes" className="hover:text-[#c9a84c] transition-colors">Sedes</Link>
          <span>/</span>
          <span className="text-[#c9a84c]">{sede.nombre}</span>
        </nav>

        {/* Hero Section con imagen */}
        <section className="relative mb-12 rounded-3xl overflow-hidden">
          {/* Imagen de fondo */}
          <div className="relative h-[400px] md:h-[500px]">
            {imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageUrl}
                alt={sede.estadio}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#0F1D32] to-[#1a2a3f] flex items-center justify-center">
                <span className="text-8xl">🏟️</span>
              </div>
            )}
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/60 to-transparent" />
            
            {/* Contenido del hero */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <img 
                  src={`https://flagcdn.com/w80/${sede.paisCodigo.toLowerCase()}.png`}
                  alt={sede.pais}
                  className="w-10 h-7 object-cover rounded shadow-lg"
                />
                {isFinalSede && (
                  <span className="px-4 py-1.5 bg-[#c9a84c] text-[#060B14] text-sm font-black rounded-full">
                    🏆 FINAL DEL MUNDIAL
                  </span>
                )}
                {sede.techoCerrado && (
                  <span className="px-3 py-1.5 bg-blue-500/20 text-blue-400 text-sm font-bold rounded-full border border-blue-500/30">
                    🏠 TECHO
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-white mb-2">
                {sede.nombre}
              </h1>
              <p className="text-xl md:text-2xl text-[#c9a84c] font-semibold">
                {sede.estadio}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <StatCard 
              value={sede.capacidad.toLocaleString()} 
              label="Capacidad" 
              icon="👥" 
            />
            <StatCard 
              value={sede.totalPartidos.toString()} 
              label="Partidos" 
              icon="⚽" 
            />
            <StatCard 
              value={sede.clima.tempMedia} 
              label="Temperatura" 
              icon="🌡️" 
            />
            <StatCard 
              value={`${sede.altitudMetros}m`} 
              label="Altitud" 
              icon="⛰️" 
            />
            <StatCard 
              value={sede.zonaHoraria} 
              label="Zona horaria" 
              icon="🕐" 
            />
            <StatCard 
              value={sede.transporte.codigoIATA} 
              label="Aeropuerto" 
              icon="✈️" 
            />
          </div>
        </section>

        {/* Sponsor */}
        <div className="w-full h-[90px] bg-[#0B1825] border border-white/5 rounded-xl flex items-center justify-center mb-12" data-sponsor-slot="sede-banner">
          <span className="text-[#4a5570] text-sm">Espacio patrocinador</span>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Columna principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Historia */}
            <section className="bg-[#0B1825] rounded-2xl p-6 md:p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 flex items-center justify-center border border-[#c9a84c]/20">
                  <span className="text-2xl">📖</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Historia del estadio</h2>
              </div>
              <p className="text-[#8a94b0] leading-relaxed text-lg mb-6">
                {sede.historia}
              </p>
              <div className="p-4 bg-[#c9a84c]/10 border-l-4 border-[#c9a84c] rounded-r-xl">
                <p className="text-[#c9a84c] font-semibold flex items-center gap-2">
                  <span>💡</span> {sede.datosClave}
                </p>
              </div>
            </section>

            {/* Partidos */}
            <section className="bg-[#0B1825] rounded-2xl p-6 md:p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 flex items-center justify-center border border-[#c9a84c]/20">
                  <span className="text-2xl">⚽</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Partidos en esta sede</h2>
              </div>
              
              {/* Fases */}
              <div className="flex flex-wrap gap-2 mb-6">
                {sede.fasesQueAlberga.map(fase => (
                  <span 
                    key={fase} 
                    className={`px-4 py-2 rounded-xl text-sm font-bold ${
                      fase.includes('FINAL') || fase.includes('SEMI') 
                        ? 'bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30' 
                        : 'bg-[#060B14] text-[#8a94b0] border border-white/5'
                    }`}
                  >
                    {fase}
                  </span>
                ))}
              </div>

              {/* Grupos */}
              <div className="mb-6">
                <p className="text-sm text-[#6a7a9a] mb-3">Grupos asignados:</p>
                <div className="flex flex-wrap gap-2">
                  {sede.gruposAsignados.map(g => (
                    <Link
                      key={g}
                      href={`/grupos/grupo-${g.toLowerCase()}`}
                      className="px-4 py-2 bg-[#060B14] rounded-xl text-white font-bold hover:bg-[#c9a84c]/20 hover:text-[#c9a84c] transition-all border border-white/5"
                    >
                      Grupo {g}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Partidos destacados */}
              {sede.partidosDestacados.length > 0 && (
                <div>
                  <p className="text-sm text-[#6a7a9a] mb-3">Partidos destacados:</p>
                  <div className="space-y-2">
                    {sede.partidosDestacados.map((p, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-[#060B14] rounded-xl border border-white/5">
                        <span className="text-[#c9a84c]">⭐</span>
                        <span className="text-white">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Datos técnicos */}
            <section className="bg-[#0B1825] rounded-2xl p-6 md:p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 flex items-center justify-center border border-[#c9a84c]/20">
                  <span className="text-2xl">🏟️</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Datos técnicos</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  ['Estadio', sede.estadio],
                  ['Ciudad', sede.ciudad],
                  ['País', `${sede.paisEmoji} ${sede.pais}`],
                  ['Capacidad', `${sede.capacidad.toLocaleString()} espectadores`],
                  ['Altitud', `${sede.altitudMetros}m sobre el nivel del mar`],
                  ['Techo', sede.techoCerrado ? 'Retráctil / Cerrado' : 'Abierto'],
                  ['Zona horaria', `${sede.zonaHoraria} (${sede.utcOffset})`],
                  ['Total partidos', `${sede.totalPartidos} partidos`],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between p-4 bg-[#060B14] rounded-xl">
                    <span className="text-[#6a7a9a]">{label}</span>
                    <span className="text-white font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Guía de viaje */}
            <div className="bg-gradient-to-br from-[#0B1825] to-[#0F1D32] rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🧳</span>
                <h3 className="text-xl font-bold text-white">Guía de viaje</h3>
              </div>

              <div className="space-y-4">
                <InfoCard title="Cómo llegar" icon="✈️">
                  <p className="text-[#8a94b0] text-sm mb-2"><strong className="text-white">Aeropuerto:</strong> {sede.transporte.aeropuerto}</p>
                  <p className="text-[#8a94b0] text-sm mb-2"><strong className="text-white">Código:</strong> {sede.transporte.codigoIATA}</p>
                  <p className="text-[#8a94b0] text-sm mb-2"><strong className="text-white">Al estadio:</strong> {sede.transporte.distanciaEstadio}</p>
                  <p className="text-[#8a94b0] text-sm"><strong className="text-white">Transporte:</strong> {sede.transporte.metroTren}</p>
                </InfoCard>

                <InfoCard title="Visa y Dinero" icon="🛂">
                  <p className="text-[#8a94b0] text-sm mb-2"><strong className="text-white">Visa:</strong> {g.visa}</p>
                  <p className="text-[#8a94b0] text-sm mb-2"><strong className="text-white">Idioma:</strong> {g.idioma}</p>
                  <p className="text-[#8a94b0] text-sm"><strong className="text-white">Moneda:</strong> {g.moneda}</p>
                </InfoCard>

                <InfoCard title="Alojamiento" icon="🏨">
                  <p className="text-[#8a94b0] text-sm mb-3">{g.costoAlojamiento}</p>
                  <p className="text-white text-sm font-semibold mb-2">Zonas recomendadas:</p>
                  <div className="flex flex-wrap gap-2">
                    {g.zonasRecomendadas.map(z => (
                      <span key={z} className="px-3 py-1 bg-[#060B14] rounded-lg text-xs text-[#8a94b0]">{z}</span>
                    ))}
                  </div>
                </InfoCard>

                <InfoCard title="Clima" icon="🌡️">
                  <p className="text-[#8a94b0] text-sm mb-2"><strong className="text-white">Junio:</strong> {sede.clima.junio}</p>
                  <p className="text-[#8a94b0] text-sm mb-2"><strong className="text-white">Julio:</strong> {sede.clima.julio}</p>
                  <p className="text-[#8a94b0] text-sm"><strong className="text-white">Lluvia:</strong> {sede.clima.lluvia}</p>
                </InfoCard>

                <InfoCard title="Gastronomía" icon="🍽️">
                  <p className="text-[#8a94b0] text-sm">{g.gastronomia}</p>
                </InfoCard>

                <InfoCard title="Seguridad" icon="🔒">
                  <p className="text-[#8a94b0] text-sm mb-2">{g.seguridadNota}</p>
                  {g.fanZone && (
                    <p className="text-[#8a94b0] text-sm"><strong className="text-white">Fan Zone:</strong> {g.fanZone}</p>
                  )}
                </InfoCard>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 rounded-2xl p-6 border border-[#c9a84c]/20">
              <h3 className="font-bold text-white mb-2">¿Vas a {sede.nombre}?</h3>
              <p className="text-sm text-[#8a94b0] mb-4">Predice los resultados de los partidos aquí.</p>
              <Link 
                href="/registro" 
                className="block w-full py-3 bg-gradient-to-r from-[#c9a84c] to-[#e8d48b] text-[#060B14] font-bold rounded-xl text-center hover:shadow-lg transition-all"
              >
                Regístrate Gratis
              </Link>
            </div>
          </div>
        </div>

        {/* Enlaces relacionados */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Explora más</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/sedes', icon: '🏟️', label: 'Todas las sedes' },
              { href: '/calendario', icon: '📅', label: 'Calendario' },
              { href: '/selecciones', icon: '⚽', label: 'Selecciones' },
              { href: '/grupos', icon: '📊', label: 'Grupos' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 p-4 bg-[#0B1825] rounded-xl border border-white/5 hover:border-[#c9a84c]/30 hover:text-[#c9a84c] transition-all group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">{link.icon}</span>
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Sponsor footer */}
        <div className="w-full h-[90px] bg-[#0B1825] border border-white/5 rounded-xl flex items-center justify-center" data-sponsor-slot="sede-footer">
          <span className="text-[#4a5570] text-sm">Espacio patrocinador</span>
        </div>
      </div>
    </div>
  );
}
