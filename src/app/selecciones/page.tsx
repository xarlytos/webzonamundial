// src/app/selecciones/page.tsx
// ZonaMundial.app — Las 48 selecciones del Mundial 2026 (Diseño mejorado)

import { Metadata } from 'next';
import Link from 'next/link';
import { GRUPOS, getSeleccionesByGrupo, SELECCIONES } from '@/data/selecciones';
import FlagImage from '@/components/FlagImage';

const BG = "#060B14";
const BG2 = "#0F1D32";
const BG3 = "#0B1825";
const GOLD = "#c9a84c";
const GOLD2 = "#e8d48b";
const MID = "#8a94b0";

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

// Componente de tarjeta de selección
function SeleccionCard({ team }: { team: typeof SELECCIONES[0] }) {
  const getConfederacionColor = (conf: string) => {
    switch (conf) {
      case 'UEFA': return 'from-blue-500/20 to-blue-600/10';
      case 'CONMEBOL': return 'from-yellow-500/20 to-yellow-600/10';
      case 'CONCACAF': return 'from-red-500/20 to-red-600/10';
      case 'CAF': return 'from-green-500/20 to-green-600/10';
      case 'AFC': return 'from-purple-500/20 to-purple-600/10';
      case 'OFC': return 'from-cyan-500/20 to-cyan-600/10';
      default: return 'from-gray-500/20 to-gray-600/10';
    }
  };

  return (
    <Link
      href={`/selecciones/${team.slug}`}
      className="group relative block"
    >
      <div 
        className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${getConfederacionColor(team.confederacion)} 
          border border-white/5 hover:border-[#c9a84c]/50 transition-all duration-300
          hover:shadow-[0_8px_32px_rgba(201,168,76,0.15)] hover:-translate-y-1`}
        style={{ background: BG3 }}
      >
        {/* Banner de confederación */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="p-4">
          {/* Header con bandera y badge */}
          <div className="flex items-start justify-between mb-3">
            <div className="relative">
              <FlagImage
                code={team.flagCode}
                alt={`Bandera de ${team.nombre}`}
                width={80}
                className="w-14 h-10 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              {/* Sombra decorativa */}
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#c9a84c]/20 rounded-full blur-xl group-hover:bg-[#c9a84c]/30 transition-colors" />
            </div>
            
            <div className="flex flex-col items-end gap-1">
              {team.esAnfitrion && (
                <span className="px-2 py-0.5 text-[10px] font-bold bg-[#c9a84c]/20 text-[#c9a84c] rounded-full border border-[#c9a84c]/30">
                  🏟️ ANFITRIÓN
                </span>
              )}
              {team.esPlayoff && (
                <span className="px-2 py-0.5 text-[10px] font-bold bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30">
                  ⏳ PLAYOFF
                </span>
              )}
            </div>
          </div>

          {/* Nombre y confederación */}
          <h3 className="font-bold text-white text-base mb-1 group-hover:text-[#c9a84c] transition-colors truncate">
            {team.nombre}
          </h3>
          <p className="text-xs text-[#8a94b0] mb-3">{team.confederacion}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#060B14]/50 rounded-lg p-2 text-center">
              <p className="text-[10px] text-[#6a7a9a] uppercase tracking-wider">FIFA</p>
              <p className="text-lg font-bold text-white">#{team.rankingFIFA || 'TBD'}</p>
            </div>
            <div className="bg-[#060B14]/50 rounded-lg p-2 text-center">
              <p className="text-[10px] text-[#6a7a9a] uppercase tracking-wider">Grupo</p>
              <p className="text-lg font-bold text-[#c9a84c]">{team.grupo}</p>
            </div>
          </div>
        </div>

        {/* Hover indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </div>
    </Link>
  );
}

// Componente de grupo
function GrupoSection({ letra, selecciones }: { letra: string; selecciones: typeof SELECCIONES }) {
  return (
    <div className="bg-[#0B1825] rounded-2xl overflow-hidden border border-white/5 hover:border-[#c9a84c]/20 transition-colors">
      {/* Header del grupo */}
      <div className="bg-gradient-to-r from-[#0F1D32] to-[#0B1825] px-5 py-4 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#e8d48b] flex items-center justify-center shadow-lg">
            <span className="text-[#060B14] font-black text-lg">{letra}</span>
          </div>
          <div>
            <h3 className="font-bold text-white">Grupo {letra}</h3>
            <p className="text-xs text-[#6a7a9a]">{selecciones.length} selecciones</p>
          </div>
        </div>
        <Link 
          href={`/grupos/grupo-${letra.toLowerCase()}`}
          className="text-xs text-[#8a94b0] hover:text-[#c9a84c] transition-colors flex items-center gap-1"
        >
          Ver grupo <span className="text-lg">→</span>
        </Link>
      </div>

      {/* Lista de selecciones */}
      <div className="p-4 space-y-2">
        {selecciones.map((team) => (
          <Link
            key={team.slug}
            href={`/selecciones/${team.slug}`}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group"
          >
            <FlagImage
              code={team.flagCode}
              alt={team.nombre}
              width={40}
              className="w-8 h-6 object-cover rounded shadow-md group-hover:scale-110 transition-transform"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate group-hover:text-[#c9a84c] transition-colors">
                {team.nombre}
              </p>
              <p className="text-[10px] text-[#6a7a9a]">{team.confederacion}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#6a7a9a]">#{team.rankingFIFA || '-'}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function SeleccionesIndex() {
  const grupos = Object.entries(GRUPOS);
  
  // Selecciones destacadas (favoritos)
  const favoritos = SELECCIONES.filter(s => 
    ['argentina', 'francia', 'brasil', 'espana', 'inglaterra', 'portugal', 'alemania'].includes(s.slug)
  );

  // Selecciones a seguir
  const aSeguir = SELECCIONES.filter(s => 
    ['mexico', 'estados-unidos', 'canada', 'marruecos', 'noruega'].includes(s.slug)
  );

  return (
    <div style={{ background: BG, minHeight: '100vh' }}>
      {/* Schema Breadcrumb */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://zonamundial.app' },
          { '@type': 'ListItem', position: 2, name: 'Selecciones', item: 'https://zonamundial.app/selecciones' },
        ],
      })}} />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ padding: '80px 20px 60px' }}>
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-10 left-10 text-8xl opacity-[0.03] rotate-[-15deg]">⚽</div>
        <div className="absolute bottom-10 right-10 text-7xl opacity-[0.03] rotate-[15deg]">🏆</div>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#6a7a9a] mb-6">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-[#c9a84c]">Selecciones</span>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-bold tracking-wider uppercase mb-4 border border-[#c9a84c]/20">
              Mundial 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
              Las <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#e8d48b]">48</span> Selecciones
            </h1>
            <p className="text-lg text-[#8a94b0] mb-8">
              Por primera vez en la historia, 48 equipos competirán por la gloria mundialista 
              en la edición más grande jamás disputada.
            </p>

            {/* Stats banner */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { value: '48', label: 'Selecciones', icon: '🌍' },
                { value: '12', label: 'Grupos', icon: '📊' },
                { value: '6', label: 'Confederaciones', icon: '🏆' },
                { value: '104', label: 'Partidos', icon: '⚽' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 px-4 py-2 bg-[#0F1D32] rounded-xl border border-white/5">
                  <span className="text-2xl">{stat.icon}</span>
                  <div className="text-left">
                    <p className="text-xl font-black text-[#c9a84c]">{stat.value}</p>
                    <p className="text-xs text-[#6a7a9a]">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor slot */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="w-full h-[90px] bg-[#0B1825] border border-white/5 rounded-xl flex items-center justify-center" data-sponsor-slot="selecciones-hero">
          <span className="text-[#4a5570] text-sm">Espacio patrocinador</span>
        </div>
      </div>

      {/* Favoritos al título */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 flex items-center justify-center border border-[#c9a84c]/20">
            <span className="text-2xl">🏆</span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Favoritos al título</h2>
            <p className="text-sm text-[#6a7a9a]">Los candidatos con mayor poder de fuego</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {favoritos.map((team) => (
            <SeleccionCard key={team.slug} team={team} />
          ))}
        </div>
      </section>

      {/* Equipos a seguir */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 flex items-center justify-center border border-blue-500/20">
            <span className="text-2xl">⚡</span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Equipos a seguir</h2>
            <p className="text-sm text-[#6a7a9a]">Selecciones que prometen sorprender</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {aSeguir.map((team) => (
            <SeleccionCard key={team.slug} team={team} />
          ))}
        </div>
      </section>

      {/* Distribución por confederación */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-[#0B1825] to-[#0F1D32] rounded-2xl p-6 md:p-8 border border-white/5">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/5 flex items-center justify-center border border-green-500/20">
              <span className="text-2xl">🌎</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Clasificados por confederación</h2>
              <p className="text-sm text-[#6a7a9a]">El Mundial 2026 expande sus plazas</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'UEFA', flag: '🇪🇺', plazas: 16, color: 'from-blue-500/20 to-blue-600/10' },
              { name: 'CONMEBOL', flag: '🌎', plazas: '6+1', color: 'from-yellow-500/20 to-yellow-600/10' },
              { name: 'CONCACAF', flag: '🌎', plazas: 6, color: 'from-red-500/20 to-red-600/10' },
              { name: 'CAF', flag: '🌍', plazas: 9, color: 'from-green-500/20 to-green-600/10' },
              { name: 'AFC', flag: '🏆', plazas: 8, color: 'from-purple-500/20 to-purple-600/10' },
              { name: 'OFC', flag: '🌊', plazas: 1, color: 'from-cyan-500/20 to-cyan-600/10' },
            ].map((conf) => (
              <div key={conf.name} className={`bg-gradient-to-br ${conf.color} rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors text-center`}>
                <span className="text-3xl mb-2 block">{conf.flag}</span>
                <p className="text-2xl font-black text-[#c9a84c] mb-1">{conf.plazas}</p>
                <p className="text-xs text-[#8a94b0]">{conf.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Los 12 grupos */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 flex items-center justify-center border border-[#c9a84c]/20">
            <span className="text-2xl">📊</span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Los 12 grupos</h2>
            <p className="text-sm text-[#6a7a9a]">Los 2 primeros avanzan a eliminatorias</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {grupos.map(([letra]) => {
            const selecciones = getSeleccionesByGrupo(letra);
            return (
              <GrupoSection key={letra} letra={letra} selecciones={selecciones} />
            );
          })}
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#c9a84c]/10 via-[#0B1825] to-[#0F1D32] border border-[#c9a84c]/20 p-8 md:p-12 text-center">
          {/* Decoración */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a84c]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c9a84c]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative">
            <span className="text-5xl mb-4 block">🎯</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              ¿Quién ganará el Mundial 2026?
            </h2>
            <p className="text-[#8a94b0] mb-8 max-w-xl mx-auto">
              Predice los resultados de todos los partidos, compite con tus amigos y demuestra quién es el mejor pronosticador.
            </p>
            <Link 
              href="/registro" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#e8d48b] text-[#060B14] font-bold rounded-xl hover:shadow-[0_8px_32px_rgba(201,168,76,0.4)] transition-all hover:-translate-y-0.5"
            >
              Regístrate gratis y empieza a predecir
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsor footer */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="w-full h-[90px] bg-[#0B1825] border border-white/5 rounded-xl flex items-center justify-center" data-sponsor-slot="selecciones-footer">
          <span className="text-[#4a5570] text-sm">Espacio patrocinador</span>
        </div>
      </div>
    </div>
  );
}
