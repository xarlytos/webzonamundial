// src/app/grupos/page.tsx
// ZonaMundial.app — Índice de los 12 grupos (Diseño mejorado)

import { Metadata } from 'next';
import Link from 'next/link';
import { SELECCIONES, getSeleccionesByGrupo } from '@/data/selecciones';

const BG = "#060B14";
const BG2 = "#0F1D32";
const BG3 = "#0B1825";
const GOLD = "#c9a84c";
const GOLD2 = "#e8d48b";

export const metadata: Metadata = {
  title: 'Los 12 Grupos del Mundial 2026 — Sorteo, Equipos y Calendario | ZonaMundial',
  description: '12 grupos, 48 selecciones. Todo sobre los grupos del Mundial 2026: sorteo, equipos, calendario de partidos, sedes y predicciones.',
  keywords: ['grupos mundial 2026', 'sorteo mundial 2026', '12 grupos mundial', 'fase grupos 2026'],
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

// Tags especiales para grupos
const GROUP_TAGS: Record<string, { text: string; color: string; bg: string }> = {
  'A': { text: '🏟️ ANFITRIÓN: MÉXICO', color: '#22c55e', bg: 'rgba(34,197,94,0.15)' },
  'B': { text: '📍 ANFITRIÓN: CANADÁ', color: '#22c55e', bg: 'rgba(34,197,94,0.15)' },
  'C': { text: '🔥 5 TÍTULOS MUNDIALES', color: '#22c55e', bg: 'rgba(34,197,94,0.15)' },
  'D': { text: '📍 ANFITRIÓN: EE.UU.', color: '#22c55e', bg: 'rgba(34,197,94,0.15)' },
  'E': { text: '🏆 4 TÍTULOS: ALEMANIA', color: '#fbbf24', bg: 'rgba(251,191,36,0.15)' },
  'G': { text: '⚡ ESTRELLAS DEL FÚTBOL', color: '#ef4444', bg: 'rgba(239,68,68,0.15)' },
  'H': { text: '🏆 3 TÍTULOS: ESPAÑA + URUGUAY', color: '#c9a84c', bg: 'rgba(201,168,76,0.15)' },
  'I': { text: '🔥 2 TÍTULOS: FRANCIA', color: '#3b82f6', bg: 'rgba(59,130,246,0.15)' },
  'J': { text: '👑 CAMPEÓN VIGENTE: ARGENTINA', color: '#38bdf8', bg: 'rgba(56,189,248,0.15)' },
  'K': { text: '⭐ CR7 ÚLTIMO MUNDIAL', color: '#a855f7', bg: 'rgba(168,85,247,0.15)' },
  'L': { text: '🏆 SEMIFINAL 2018', color: '#94a3b8', bg: 'rgba(148,163,184,0.15)' },
};

// Descripciones de grupos
const GROUP_DESCRIPTIONS: Record<string, string> = {
  'A': 'México debuta como anfitrión en el Azteca. Corea del Sur con Son Heung-min. Sudáfrica busca sorprender.',
  'B': 'Canadá debuta como anfitrión. Suiza siempre organizada. Qatar, incómodo rival asiático.',
  'C': 'Brasil vs Marruecos, duelo de campeón mundial contra semifinalista de Qatar 2022. Escocia con McTominay.',
  'D': 'EE.UU. demuestra en casa. Paraguay pelea. Australia, veterano. Un equipo por definir.',
  'E': 'Alemania, campeón mundial 4 veces. Costa de Marfil y Ecuador pueden complicar. Curazao debuta histórico.',
  'F': 'Países Bajos vs Japón, choque de estilos. Túnez y un equipo por definir completan el grupo.',
  'G': 'De Bruyne vs Salah, choque de super estrellas. Irán siempre difícil. Nueva Zelanda de Oceanía.',
  'H': 'España vs Uruguay, duelo de campeones mundiales. Arabia Saudita y Cabo Verde completan el grupo.',
  'I': 'Francia vs Senegal, revancha del 2002. Si Noruega entra, Haaland vs Mbappé. Inglaterra a seguir.',
  'J': 'Argentina, campeona vigente vs Argelia. Austria de Rangnick. Jordania debuta histórico.',
  'K': 'Cristiano Ronaldo con Portugal vs Colombia. Uzbekistán debuta en la historia del Mundial.',
  'L': 'Inglaterra vs Croacia, revancha de la semifinal 2018. Ghana y Panamá, outsiders peligrosos.',
};

// Componente de tarjeta de grupo
function GrupoCard({ letra }: { letra: string }) {
  const selecciones = getSeleccionesByGrupo(letra);
  const tag = GROUP_TAGS[letra];
  const isHighlight = tag?.text.includes('MUERTE') || tag?.text.includes('CAMPEÓN');

  return (
    <Link
      href={`/grupos/grupo-${letra.toLowerCase()}`}
      className={`group relative block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        isHighlight 
          ? 'border-2 border-red-500/50 hover:border-red-500' 
          : 'border border-white/5 hover:border-[#c9a84c]/50'
      }`}
      style={{ 
        background: isHighlight 
          ? 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(15,23,42,0.8))'
          : BG3 
      }}
    >
      {/* Tag */}
      {tag && (
        <div 
          className="absolute top-0 right-0 px-3 py-1.5 rounded-bl-xl text-[10px] font-black tracking-wider z-10"
          style={{ background: tag.bg, color: tag.color, borderLeft: `1px solid ${tag.color}30`, borderBottom: `1px solid ${tag.color}30` }}
        >
          {tag.text}
        </div>
      )}

      <div className="p-5">
        {/* Header */}
        <div className="flex items-center gap-4 mb-5">
          <div 
            className={`w-14 h-14 rounded-xl flex items-center justify-center font-black text-2xl ${
              isHighlight ? 'bg-red-500/20 text-red-400 border border-red-500/30' : ''
            }`}
            style={!isHighlight ? { 
              background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))', 
              color: '#c9a84c',
              border: '1px solid rgba(201,168,76,0.3)'
            } : {}}
          >
            {letra}
          </div>
          <div>
            <h2 className={`text-lg font-bold group-hover:text-[#c9a84c] transition-colors ${isHighlight ? 'text-white' : 'text-white'}`}>
              Grupo {letra}
            </h2>
            <p className="text-xs text-[#6a7a9a]">4 equipos · 6 partidos</p>
          </div>
        </div>

        {/* Equipos */}
        <div className="space-y-2.5">
          {selecciones.map((team, idx) => (
            <div key={team.slug} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
              <img 
                src={`https://flagcdn.com/w40/${team.flagCode}.png`}
                alt={team.nombre}
                className="w-7 h-5 object-cover rounded shadow-md"
              />
              <span className={`text-sm font-medium truncate flex-1 ${idx === 0 ? 'text-[#c9a84c]' : 'text-[#CBD5E1]'}`}>
                {team.nombre}
              </span>
              {idx === 0 && (
                <span className="text-[10px] font-bold text-[#c9a84c] bg-[#c9a84c]/10 px-2 py-0.5 rounded-full">
                  CABEZA
                </span>
              )}
              {team.mejorResultado?.includes('Campeón') && (
                <span className="text-[10px] text-yellow-400" title={team.mejorResultado}>
                  🏆
                </span>
              )}
              {team.esAnfitrion && (
                <span className="text-[10px] text-green-400">🏟️</span>
              )}
            </div>
          ))}
        </div>

        {/* Ver más */}
        <div className="mt-4 pt-3 border-t border-white/5">
          <span className="text-xs text-[#6a7a9a] group-hover:text-[#c9a84c] transition-colors flex items-center gap-1">
            Ver grupo completo 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#c9a84c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </Link>
  );
}

// Componente de descripción de grupo
function GrupoDescripcion({ letra }: { letra: string }) {
  const selecciones = getSeleccionesByGrupo(letra);
  const descripcion = GROUP_DESCRIPTIONS[letra];
  const isHighlight = ['C', 'I'].includes(letra);

  return (
    <div 
      className={`p-5 rounded-xl border transition-all hover:border-[#c9a84c]/30 ${
        isHighlight ? 'border-red-500/30 bg-gradient-to-br from-red-500/5 to-transparent' : 'border-white/5 bg-[#0B1825]'
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div 
          className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg ${
            isHighlight ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-[#c9a84c]/10 text-[#c9a84c]'
          }`}
        >
          {letra}
        </div>
        <h3 className="text-lg font-bold text-white">Grupo {letra}</h3>
      </div>

      {/* Banderas */}
      <div className="flex flex-wrap gap-2 mb-4">
        {selecciones.map((team) => (
          <Link
            key={team.slug}
            href={`/selecciones/${team.slug}`}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#060B14] border border-white/5 hover:border-[#c9a84c]/30 transition-all"
          >
            <img 
              src={`https://flagcdn.com/w20/${team.flagCode}.png`}
              alt={team.nombre}
              className="w-5 h-3.5 object-cover rounded"
            />
            <span className="text-xs text-[#CBD5E1] hover:text-[#c9a84c]">{team.nombre}</span>
          </Link>
        ))}
      </div>

      <p className="text-sm text-[#8a94b0] leading-relaxed">{descripcion}</p>
    </div>
  );
}

export default function GruposIndex() {
  const gruposLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

  return (
    <div style={{ background: BG, minHeight: '100vh' }}>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', 
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://zonamundial.app' },
          { '@type': 'ListItem', position: 2, name: 'Grupos', item: 'https://zonamundial.app/grupos' },
        ],
      })}} />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ padding: '80px 20px 60px' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-10 left-10 text-8xl opacity-[0.03] rotate-[-15deg]">📊</div>
        <div className="absolute bottom-10 right-10 text-7xl opacity-[0.03] rotate-[15deg]">⚽</div>

        <div className="max-w-6xl mx-auto relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#6a7a9a] mb-6">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-[#c9a84c]">Grupos</span>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-bold tracking-wider uppercase mb-4 border border-[#c9a84c]/20">
              Fase de Grupos
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
              Los <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#e8d48b]">12</span> Grupos
            </h1>
            <p className="text-lg text-[#8a94b0] mb-8">
              Nuevo formato: 12 grupos de 4 equipos. Los 2 mejores de cada grupo + 8 mejores terceros avanzan a los 32avos de final.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { value: '12', label: 'Grupos', icon: '📊' },
                { value: '48', label: 'Equipos', icon: '⚽' },
                { value: '72', label: 'Partidos', icon: '🏟️' },
                { value: '32', label: 'Clasifican', icon: '✅' },
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

      {/* Sponsor */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="w-full h-[90px] bg-[#0B1825] border border-white/5 rounded-xl flex items-center justify-center" data-sponsor-slot="grupos-hero">
          <span className="text-[#4a5570] text-sm">Espacio patrocinador</span>
        </div>
      </div>

      {/* Grid de grupos */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 flex items-center justify-center border border-[#c9a84c]/20">
            <span className="text-2xl">🏆</span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Todos los grupos</h2>
            <p className="text-sm text-[#6a7a9a]">Haz clic para ver el calendario y simulador</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {gruposLetras.map((letra) => (
            <GrupoCard key={letra} letra={letra} />
          ))}
        </div>
      </section>

      {/* Descripciones detalladas */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 flex items-center justify-center border border-[#c9a84c]/20">
            <span className="text-2xl">📖</span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Análisis de cada grupo</h2>
            <p className="text-sm text-[#6a7a9a]">Lo que debes saber de cada uno</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gruposLetras.map((letra) => (
            <GrupoDescripcion key={letra} letra={letra} />
          ))}
        </div>
      </section>

      {/* Cómo funciona el formato */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-[#0B1825] to-[#0F1D32] rounded-2xl p-6 md:p-8 border border-white/5">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 flex items-center justify-center border border-blue-500/20">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">¿Cómo funciona el formato 2026?</h2>
              <p className="text-sm text-[#6a7a9a]">El nuevo sistema de clasificación</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                step: '1', 
                title: 'Fase de grupos', 
                desc: '12 grupos × 4 equipos. Todos contra todos. Los 2 primeros de cada grupo clasifican directamente (24 equipos).',
                icon: '🏆'
              },
              { 
                step: '2', 
                title: 'Mejores terceros', 
                desc: 'Los 8 mejores terceros de los 12 grupos también avanzan. Total: 32 equipos en eliminatorias.',
                icon: '⭐'
              },
              { 
                step: '3', 
                title: 'Eliminatorias', 
                desc: '32avos → 16avos → Octavos → Cuartos → Semifinales → Final. El campeón juega 8 partidos.',
                icon: '🎯'
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 text-[#c9a84c] flex items-center justify-center font-black text-lg border border-[#c9a84c]/20">
                    {item.step}
                  </div>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#8a94b0] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-[#8a94b0]">
              📅 La final se juega el <span className="text-[#c9a84c] font-bold">19 de julio de 2026</span> en Nueva York
            </p>
            <Link 
              href="/datos/formato-2026" 
              className="px-5 py-2.5 bg-[#060B14] rounded-xl text-[#c9a84c] text-sm font-medium hover:bg-[#c9a84c]/10 transition-colors border border-[#c9a84c]/20"
            >
              Ver formato completo →
            </Link>
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
              ¿Tienes claro quién pasará?
            </h2>
            <p className="text-[#8a94b0] mb-8 max-w-xl mx-auto">
              Crea tu predicción de grupos, compite con tus amigos y demuestra quién es el mejor pronosticador.
            </p>
            <Link 
              href="/registro" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#e8d48b] text-[#060B14] font-bold rounded-xl hover:shadow-[0_8px_32px_rgba(201,168,76,0.4)] transition-all hover:-translate-y-0.5"
            >
              Crea tu predicción de grupos
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsor footer */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="w-full h-[90px] bg-[#0B1825] border border-white/5 rounded-xl flex items-center justify-center" data-sponsor-slot="grupos-footer">
          <span className="text-[#4a5570] text-sm">Espacio patrocinador</span>
        </div>
      </div>
    </div>
  );
}
