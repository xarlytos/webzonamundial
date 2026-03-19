// src/app/sedes/[slug]/page.tsx
// ZonaMundial.app — Página dinámica de sede/ciudad

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSedeBySlug, getAllSedeSlugs } from '@/data/sedes';
import Link from 'next/link';

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
      images: [{ url: `https://zonamundial.app/api/og/sede?city=${sede.slug}`, width: 1200, height: 630, alt: `${sede.nombre} — Torneo 2026` }],
    },
    alternates: {
      canonical: `https://zonamundial.app/sedes/${sede.slug}`,
      languages: { 'es': `https://zonamundial.app/sedes/${sede.slug}`, 'es-MX': `https://zonamundial.app/sedes/${sede.slug}`, 'es-AR': `https://zonamundial.app/sedes/${sede.slug}` },
    },
    robots: { index: true, follow: true, 'max-image-preview': 'large' },
  };
}

export default function SedePage({ params }: { params: { slug: string } }) {
  const sede = getSedeBySlug(params.slug);
  if (!sede) notFound();
  const g = sede.guiaViaje;

  return (
    <>
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

      {/* BREADCRUMBS */}
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-gold">Inicio</Link></li>
          <li>/</li>
          <li><Link href="/sedes" className="hover:text-gold">Sedes</Link></li>
          <li>/</li>
          <li className="text-gold">{sede.nombre}</li>
        </ol>
      </nav>

      {/* HERO */}
      <header className="mb-10">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-6xl">{sede.paisEmoji}</span>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">{sede.nombre}</h1>
            <p className="text-xl text-gold mt-1">{sede.estadio} · {sede.capacidad.toLocaleString()} localidades · {sede.pais}</p>
            {sede.techoCerrado && (
              <span className="inline-block mt-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">🏟️ Techo retráctil</span>
            )}
          </div>
        </div>

        {/* Stats rápidas */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
          <div className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg">
            <p className="text-2xl font-bold text-gold">{sede.totalPartidos}</p>
            <p className="text-gray-400 text-sm">Partidos</p>
          </div>
          <div className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg">
            <p className="text-2xl font-bold text-white">{sede.capacidad.toLocaleString()}</p>
            <p className="text-gray-400 text-sm">Capacidad</p>
          </div>
          <div className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg">
            <p className="text-2xl font-bold text-white">{sede.utcOffset}</p>
            <p className="text-gray-400 text-sm">Zona horaria</p>
          </div>
          <div className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg">
            <p className="text-2xl font-bold text-white">{sede.altitudMetros}m</p>
            <p className="text-gray-400 text-sm">Altitud</p>
          </div>
          <div className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg">
            <p className="text-2xl font-bold text-white">{sede.clima.tempMedia}</p>
            <p className="text-gray-400 text-sm">Temp. media verano</p>
          </div>
        </div>
      </header>

      {/* SPONSOR SLOT */}
      <div className="w-full h-[90px] bg-[#0B1825] border border-[#1a2a3f] rounded-lg flex items-center justify-center mb-8" data-sponsor-slot="sede-banner" data-city={sede.slug}>
        <span className="text-gray-600 text-sm">Espacio patrocinador</span>
      </div>

      {/* CONTENIDO EDITORIAL */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">{sede.nombre} en el Torneo 2026</h2>
        <p className="text-gray-300 leading-relaxed text-lg">{sede.historia}</p>
        <div className="mt-4 p-4 bg-gold/10 border-l-4 border-gold rounded-r-lg">
          <p className="text-gold font-semibold">💡 {sede.datosClave}</p>
        </div>
      </section>

      {/* PARTIDOS EN ESTA SEDE */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Partidos en {sede.nombre}</h2>
        <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {sede.fasesQueAlberga.map(fase => (
              <span key={fase} className={`px-3 py-1 rounded-full text-sm font-medium ${
                fase.includes('FINAL') || fase.includes('SEMI') ? 'bg-gold/20 text-gold' : 'bg-[#0F1D32] text-gray-300'
              }`}>{fase}</span>
            ))}
          </div>
          <p className="text-gray-400 mb-3">Grupos asignados: {sede.gruposAsignados.map(g => `Grupo ${g}`).join(', ')}</p>
          <div className="space-y-2">
            {sede.partidosDestacados.map(p => (
              <div key={p} className="flex items-center gap-2 p-2 bg-[#0F1D32] rounded">
                <span className="text-gold">⚽</span>
                <span className="text-gray-300">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUÍA DE VIAJE */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">🧳 Guía de Viaje — {sede.nombre}</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {/* Cómo llegar */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5">
            <h3 className="text-lg font-bold text-gold mb-3">✈️ Cómo llegar</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p><span className="text-white font-medium">Aeropuerto:</span> {sede.transporte.aeropuerto} ({sede.transporte.codigoIATA})</p>
              <p><span className="text-white font-medium">Al estadio:</span> {sede.transporte.distanciaEstadio}</p>
              <p><span className="text-white font-medium">Transporte público:</span> {sede.transporte.metroTren}</p>
            </div>
          </div>

          {/* Visa y dinero */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5">
            <h3 className="text-lg font-bold text-gold mb-3">🛂 Visa y Dinero</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p><span className="text-white font-medium">Visa:</span> {g.visa}</p>
              <p><span className="text-white font-medium">Idioma:</span> {g.idioma}</p>
              <p><span className="text-white font-medium">Moneda:</span> {g.moneda}</p>
            </div>
          </div>

          {/* Alojamiento */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5">
            <h3 className="text-lg font-bold text-gold mb-3">🏨 Alojamiento</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p><span className="text-white font-medium">Precio:</span> {g.costoAlojamiento}</p>
              <p><span className="text-white font-medium">Zonas recomendadas:</span></p>
              <div className="flex flex-wrap gap-1 mt-1">
                {g.zonasRecomendadas.map(z => (
                  <span key={z} className="px-2 py-0.5 bg-[#0F1D32] rounded text-xs">{z}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Clima */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5">
            <h3 className="text-lg font-bold text-gold mb-3">🌡️ Clima</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p><span className="text-white font-medium">Junio:</span> {sede.clima.junio}</p>
              <p><span className="text-white font-medium">Julio:</span> {sede.clima.julio}</p>
              <p><span className="text-white font-medium">Lluvia:</span> {sede.clima.lluvia}</p>
            </div>
          </div>

          {/* Gastronomía */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5">
            <h3 className="text-lg font-bold text-gold mb-3">🍽️ Gastronomía</h3>
            <p className="text-gray-300 text-sm">{g.gastronomia}</p>
          </div>

          {/* Seguridad */}
          <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-5">
            <h3 className="text-lg font-bold text-gold mb-3">🔒 Seguridad</h3>
            <p className="text-gray-300 text-sm">{g.seguridadNota}</p>
            {g.fanZone && <p className="text-gray-300 text-sm mt-2"><span className="text-white font-medium">Fan Zone:</span> {g.fanZone}</p>}
          </div>
        </div>
      </section>

      {/* DATOS TÉCNICOS ESTADIO */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">🏟️ Datos del Estadio</h2>
        <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg overflow-hidden">
          {[
            ['Nombre oficial (torneo)', sede.estadio],
            ['Ciudad', sede.ciudad],
            ['País', `${sede.paisEmoji} ${sede.pais}`],
            ['Capacidad', `${sede.capacidad.toLocaleString()} espectadores`],
            ['Altitud', `${sede.altitudMetros} metros sobre el nivel del mar`],
            ['Techo', sede.techoCerrado ? 'Retráctil / cerrado (clima controlado)' : 'Abierto'],
            ['Zona horaria', `${sede.zonaHoraria} (${sede.utcOffset})`],
            ['Región del torneo', sede.region],
            ['Total partidos', `${sede.totalPartidos} partidos`],
          ].map(([label, value], i) => (
            <div key={label} className={`flex justify-between p-3 ${i % 2 === 0 ? 'bg-[#0F1D32]/50' : ''}`}>
              <span className="text-gray-400">{label}</span>
              <span className="text-white font-medium">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mb-10 p-6 bg-gradient-to-r from-gold/10 to-transparent border border-gold/30 rounded-lg">
        <h2 className="text-xl font-bold text-white mb-2">¿Vas a seguir los partidos desde {sede.nombre}?</h2>
        <p className="text-gray-400 mb-4">Regístrate en ZonaMundial y predice los resultados de los partidos que se juegan aquí.</p>
        <div className="flex gap-3">
          <Link href="/registro" className="px-6 py-3 bg-gold text-[#060B14] font-bold rounded-lg hover:bg-gold/90 transition-colors">Regístrate Gratis</Link>
          <Link href="/calendario" className="px-6 py-3 border border-gold/50 text-gold font-bold rounded-lg hover:bg-gold/10 transition-colors">Ver Calendario</Link>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">Explora más</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/sedes" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-300 hover:border-gold hover:text-gold transition-all text-sm">🏟️ Las 16 sedes</Link>
          <Link href="/calendario" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-300 hover:border-gold hover:text-gold transition-all text-sm">📅 Calendario completo</Link>
          <Link href="/selecciones" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-300 hover:border-gold hover:text-gold transition-all text-sm">📋 48 selecciones</Link>
          <Link href="/guia/boletos" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-300 hover:border-gold hover:text-gold transition-all text-sm">🎫 Guía de boletos</Link>
          <Link href="/guia/moverse-entre-sedes" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-300 hover:border-gold hover:text-gold transition-all text-sm">🚆 Moverse entre sedes</Link>
          <Link href="/datos/formato-2026" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-300 hover:border-gold hover:text-gold transition-all text-sm">📐 Formato 48 equipos</Link>
        </div>
      </section>

      {/* SPONSOR FOOTER */}
      <div className="w-full h-[90px] bg-[#0B1825] border border-[#1a2a3f] rounded-lg flex items-center justify-center" data-sponsor-slot="sede-footer" data-city={sede.slug}>
        <span className="text-gray-600 text-sm">Espacio patrocinador</span>
      </div>
    </>
  );
}
