// src/app/sedes/page.tsx
// ZonaMundial.app — Índice de las 16 sedes por país y región

import { Metadata } from 'next';
import Link from 'next/link';
import { SEDES, getSedesByPais } from '@/data/sedes';

export const metadata: Metadata = {
  title: 'Las 16 Sedes del Torneo 2026 — Estadios, Ciudades y Guías de Viaje | ZonaMundial',
  description: '16 ciudades, 3 países, 104 partidos. Todo sobre las sedes del torneo 2026: estadios, capacidad, clima, transporte, alojamiento y guías de viaje.',
  keywords: ['sedes mundial 2026', 'estadios mundial 2026', 'ciudades mundial', 'guia viaje mundial 2026'],
  openGraph: {
    title: 'Las 16 Sedes del Torneo 2026 | ZonaMundial',
    description: '16 ciudades en 3 países. Estadios, guías de viaje y partidos asignados.',
    url: 'https://zonamundial.app/sedes',
    siteName: 'ZonaMundial',
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

interface EstadioDetalle {
  nombre: string;
  ciudad: string;
  capacidad: string;
  nota?: string;
}

const estadiosUSA: EstadioDetalle[] = [
  { nombre: 'MetLife Stadium', ciudad: 'Nueva York/NJ', capacidad: '82,500', nota: '¡La Gran Final!' },
  { nombre: 'SoFi Stadium', ciudad: 'Los Ángeles', capacidad: '70,000', nota: 'El más moderno' },
  { nombre: 'AT&T Stadium', ciudad: 'Dallas', capacidad: '80,000', nota: 'Techo retráctil gigante' },
  { nombre: 'Hard Rock Stadium', ciudad: 'Miami', capacidad: '64,000', nota: 'Clima tropical' },
  { nombre: 'Mercedes-Benz Stadium', ciudad: 'Atlanta', capacidad: '71,000', nota: 'Techo que se abre' },
  { nombre: 'NRG Stadium', ciudad: 'Houston', capacidad: '72,000', nota: 'Aire acondicionado' },
  { nombre: 'Lincoln Financial Field', ciudad: 'Filadelfia', capacidad: '69,000' },
  { nombre: 'Lumen Field', ciudad: 'Seattle', capacidad: '69,000', nota: 'Afición más ruidosa' },
  { nombre: "Levi's Stadium", ciudad: 'Bay Area', capacidad: '68,500' },
  { nombre: 'Gillette Stadium', ciudad: 'Boston', capacidad: '65,000' },
];

const estadiosMexico: EstadioDetalle[] = [
  { nombre: 'Estadio Azteca', ciudad: 'CDMX', capacidad: '87,000', nota: 'Único en 3 mundiales!' },
  { nombre: 'Estadio Akron', ciudad: 'Guadalajara', capacidad: '48,000' },
  { nombre: 'Estadio BBVA', ciudad: 'Monterrey', capacidad: '53,500', nota: 'Gigante de Acero' },
];

const estadiosCanada: EstadioDetalle[] = [
  { nombre: 'BC Place', ciudad: 'Vancouver', capacidad: '54,000' },
  { nombre: 'BMO Field', ciudad: 'Toronto', capacidad: '45,000' },
  { nombre: 'Estadio Olímpico', ciudad: 'Montreal', capacidad: '56,000' },
];

const TablaEstadios = ({ estadios, colorHeader }: { estadios: EstadioDetalle[]; colorHeader: string }) => (
  <div className="overflow-x-auto mb-8">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className={`${colorHeader}`}>
          <th className="p-3 text-white font-bold rounded-tl-lg">Estadio</th>
          <th className="p-3 text-white font-bold">Ciudad</th>
          <th className="p-3 text-white font-bold">Capacidad</th>
          <th className="p-3 text-white font-bold rounded-tr-lg">Dato</th>
        </tr>
      </thead>
      <tbody>
        {estadios.map((estadio, index) => (
          <tr
            key={estadio.nombre}
            className={`border-b border-[#1a2a3f] hover:bg-[#0F1D32]/50 transition-colors ${
              index === estadios.length - 1 ? '' : ''
            }`}
          >
            <td className="p-3 text-white font-semibold">{estadio.nombre}</td>
            <td className="p-3 text-gray-300">{estadio.ciudad}</td>
            <td className="p-3 text-gold font-semibold">{estadio.capacidad}</td>
            <td className="p-3 text-gray-400 text-sm italic">{estadio.nota || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function SedesIndex() {
  const usa = getSedesByPais('Estados Unidos');
  const mex = getSedesByPais('México');
  const can = getSedesByPais('Canadá');

  const PaisSection = ({ pais, emoji, sedes, partidos, color }: {
    pais: string; emoji: string; sedes: typeof SEDES; partidos: number; color: string;
  }) => (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{emoji}</span>
        <div>
          <h2 className="text-2xl font-bold text-white">{pais}</h2>
          <p className="text-gray-400">{sedes.length} sedes · {partidos} partidos</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sedes.map(sede => (
          <Link
            key={sede.slug}
            href={`/sedes/${sede.slug}`}
            className="bg-[#0B1825] border border-[#1a2a3f] rounded-lg p-4 hover:border-gold/50 transition-all group"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">{sede.nombre}</h3>
              {sede.techoCerrado && <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">Techo</span>}
            </div>
            <p className="text-sm text-gray-400 mb-3">{sede.estadio} · {sede.capacidad.toLocaleString()} espectadores</p>
            <div className="flex flex-wrap gap-1 mb-3">
              {sede.fasesQueAlberga.map(fase => (
                <span key={fase} className={`text-xs px-2 py-0.5 rounded ${
                  fase.includes('FINAL') || fase.includes('SEMI') ? 'bg-gold/20 text-gold font-semibold' : 'bg-[#0F1D32] text-gray-400'
                }`}>{fase}</span>
              ))}
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{sede.totalPartidos} partidos</span>
              <span className="text-gray-500">{sede.clima.tempMedia}</span>
            </div>
            {sede.partidosDestacados[0] && (
              <p className="text-xs text-gold/80 mt-2 truncate">⚽ {sede.partidosDestacados[0]}</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://zonamundial.app' },
          { '@type': 'ListItem', position: 2, name: 'Sedes', item: 'https://zonamundial.app/sedes' },
        ],
      })}} />

      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-gold">Inicio</Link></li>
          <li>/</li>
          <li className="text-gold">Sedes</li>
        </ol>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">16 estadios, 3 países, 1 sueño 🏟️</h1>
        <p className="text-xl text-gray-300">
          Primer mundial tripartito de la historia · 16 ciudades · 3 países · 104 partidos · 4 zonas horarias
        </p>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-center">
            <p className="text-3xl">🇺🇸</p>
            <p className="text-white font-bold">10 sedes</p>
            <p className="text-gray-400 text-sm">78 partidos</p>
          </div>
          <div className="p-4 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-center">
            <p className="text-3xl">🇲🇽</p>
            <p className="text-white font-bold">3 sedes</p>
            <p className="text-gray-400 text-sm">13 partidos</p>
          </div>
          <div className="p-4 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-center">
            <p className="text-3xl">🇨🇦</p>
            <p className="text-white font-bold">3 sedes</p>
            <p className="text-gray-400 text-sm">13 partidos</p>
          </div>
        </div>
      </header>

      {/* SPONSOR */}
      <div className="w-full h-[90px] bg-[#0B1825] border border-[#1a2a3f] rounded-lg flex items-center justify-center mb-8" data-sponsor-slot="sedes-hero">
        <span className="text-gray-600 text-sm">Espacio patrocinador</span>
      </div>

      {/* Tablas Detalladas */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="text-4xl">🇺🇸</span>
          ESTADOS UNIDOS <span className="text-gold">(10 sedes)</span>
        </h2>
        <TablaEstadios estadios={estadiosUSA} colorHeader="bg-blue-600/80" />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="text-4xl">🇲🇽</span>
          MÉXICO <span className="text-gold">(3 sedes)</span>
        </h2>
        <TablaEstadios estadios={estadiosMexico} colorHeader="bg-green-600/80" />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="text-4xl">🇨🇦</span>
          CANADÁ <span className="text-gold">(3 sedes)</span>
        </h2>
        <TablaEstadios estadios={estadiosCanada} colorHeader="bg-red-600/80" />
      </section>

      {/* Tarjetas de Sedes por País */}
      <PaisSection pais="Estados Unidos" emoji="🇺🇸" sedes={usa} partidos={78} color="blue" />
      <PaisSection pais="México" emoji="🇲🇽" sedes={mex} partidos={13} color="green" />
      <PaisSection pais="Canadá" emoji="🇨🇦" sedes={can} partidos={13} color="red" />

      {/* CTA */}
      <section className="mt-10 p-6 bg-gradient-to-r from-gold/10 to-transparent border border-gold/30 rounded-lg text-center">
        <Link href="#" className="inline-flex items-center gap-2 text-xl font-bold text-white hover:text-gold transition-colors group">
          <span>🎯</span>
          <span>¿En qué sede jugará tu selección?</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </section>
    </>
  );
}
