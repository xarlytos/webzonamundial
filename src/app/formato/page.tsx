// src/app/formato/page.tsx
// ZonaMundial.app — Formato del Mundial 2026 (48 equipos)

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Formato del Mundial 2026: 48 Equipos, 104 Partidos | ZonaMundial',
  description: 'Todo sobre el nuevo formato del Mundial 2026: 48 equipos, 12 grupos, dieciseisavos de final, mejores terceros y 104 partidos en 3 países. Entiende cómo funciona.',
  keywords: ['formato mundial 2026', '48 equipos mundial', 'mejores terceros mundial', 'nuevo formato copa del mundo', 'mundial 2026 explicado'],
  robots: { index: true, follow: true },
};

const FORMAT_2026 = {
  teams: 48,
  groups: 12,
  matches: 104,
  venues: 16,
  days: 39,
};

const PHASES = [
  { name: "Fase de Grupos", desc: "12 grupos de 4 equipos. Los 2 primeros de cada grupo y los 8 mejores terceros avanzan.", matches: 72, qualified: 32, icon: "📋" },
  { name: "32avos de Final", desc: "Nueva ronda con los 8 mejores terceros contra los segundos de grupo.", matches: 16, qualified: 16, icon: "⚔️" },
  { name: "Octavos de Final", desc: "Los 16 equipos clasificados se enfrentan en eliminación directa.", matches: 8, qualified: 8, icon: "🔥" },
  { name: "Cuartos de Final", desc: "Los 8 mejores equipos compiten por un lugar en semifinales.", matches: 4, qualified: 4, icon: "⭐" },
  { name: "Semifinales", desc: "Las 4 potencias restantes buscan el pase a la gran final.", matches: 2, qualified: 2, icon: "🏆" },
  { name: "Final", desc: "El partido por el título más codiciado del fútbol mundial.", matches: 1, qualified: 1, icon: "🥇" },
];

const VENTAJAS = [
  { icon: "🌍", title: "Más países participan", desc: "16 selecciones adicionales tendrán la oportunidad de competir en la máxima cita del fútbol mundial." },
  { icon: "⚽", title: "Más partidos", desc: "40 partidos más que en ediciones anteriores, significa más emoción para los fans durante 39 días." },
  { icon: "🎯", title: "Más equipos tienen chances", desc: "Incluso quedando terceros en grupo, 8 selecciones podrán avanzar a la fase eliminatoria." },
  { icon: "💰", title: "Economía", desc: "Mayor recaudación que se reinvierte en el desarrollo del fútbol en todo el mundo." },
  { icon: "🚀", title: "Desarrollo", desc: "Países que nunca habían clasificado podrán debutar en un Mundial, impulsando el crecimiento del fútbol." },
  { icon: "🎉", title: "Celebración continental", desc: "Tres países anfitriones celebran juntos el fútbol en Norteamérica por primera vez en la historia." },
];

const CRITICAS = [
  { icon: "⚡", title: "Calidad", desc: "¿Se diluye la calidad del torneo al incluir 48 equipos?" },
  { icon: "😴", title: "Cansancio", desc: "104 partidos en 39 días pueden saturar a los espectadores." },
  { icon: "🗺️", title: "Logística", desc: "Coordinar 16 sedes en 3 países diferentes es un desafío enorme." },
  { icon: "📅", title: "Calendario", desc: "10 días más que el Mundial anterior, afectando ligas y jugadores." },
];

export default function FormatoPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-0 pb-6 sm:pb-8">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-[#C9A84C]">Inicio</Link></li>
          <li>/</li>
          <li className="text-[#C9A84C]">Formato 2026</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-8 sm:mb-12 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#C9A84C]/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A84C]/20 text-[10px] font-bold text-[#C9A84C] tracking-wider uppercase mb-4 bg-[#C9A84C]/5">
            El Mundial más grande de la historia
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            48 equipos, un formato <span className="text-[#C9A84C]">épico</span> 🆕
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            El Mundial 2026 cambia para siempre. Más equipos, más partidos, más emoción. 
            Descubre cómo funciona el nuevo formato con 48 selecciones.
          </p>
        </div>
      </header>

      {/* Sponsor */}
      <div className="w-full h-[70px] sm:h-[90px] bg-[#0B1825] border border-[#1a2a3f] rounded-xl flex items-center justify-center mb-8 sm:mb-10"
        data-sponsor-slot="formato-hero">
        <span className="text-gray-600 text-xs">Espacio patrocinador</span>
      </div>

      {/* Stats Grid */}
      <section className="mb-10 sm:mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { value: FORMAT_2026.teams, label: "Selecciones", icon: "🌍" },
            { value: FORMAT_2026.groups, label: "Grupos", icon: "📊" },
            { value: FORMAT_2026.matches, label: "Partidos", icon: "⚽" },
            { value: FORMAT_2026.venues, label: "Sedes", icon: "🏟️" },
            { value: FORMAT_2026.days, label: "Días", icon: "📅" },
            { value: "3", label: "Países", icon: "🌎" },
          ].map((stat, i) => (
            <div key={i} className="p-4 sm:p-6 rounded-xl border border-white/5 bg-[#0F1D32]/80 text-center hover:border-[#C9A84C]/30 transition-all duration-300">
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <div className="text-3xl sm:text-4xl font-black text-[#C9A84C] mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Antes vs Ahora */}
      <section className="mb-10 sm:mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5 flex items-center justify-center border border-[#C9A84C]/20">
            <span className="text-2xl">📊</span>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Antes vs Ahora</h2>
            <p className="text-sm text-gray-500">Compara el formato clásico con el nuevo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Qatar 2022 */}
          <div className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#0F1D32]/80">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Qatar 2022</div>
            <h3 className="text-xl font-bold text-white mb-6">Formato Clásico</h3>
            <div className="space-y-4">
              {[
                { label: "Equipos", value: "32" },
                { label: "Grupos", value: "8 de 4" },
                { label: "Partidos", value: "64" },
                { label: "Clasifican", value: "16 (1º y 2º)" },
                { label: "Duración", value: "29 días" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                  <span className="text-sm text-gray-400">{item.label}</span>
                  <span className="text-sm font-semibold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2026 */}
          <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#C9A84C] bg-[#0F1D32]/80 relative overflow-hidden">
            <div className="absolute top-4 right-4 px-3 py-1 bg-[#C9A84C] text-[#030712] text-[10px] font-bold uppercase rounded-full">
              Nuevo
            </div>
            <div className="text-xs font-bold text-[#C9A84C] uppercase tracking-wider mb-4">2026</div>
            <h3 className="text-xl font-bold text-white mb-6">Formato Ampliado</h3>
            <div className="space-y-4">
              {[
                { label: "Equipos", value: "48", highlight: true },
                { label: "Grupos", value: "12 de 4", highlight: true },
                { label: "Partidos", value: "104", highlight: true },
                { label: "Clasifican", value: "32 (2+8 terceros)" },
                { label: "Duración", value: "39 días", highlight: true },
                { label: "Nueva ronda", value: "32avos de final", highlight: true },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                  <span className="text-sm text-gray-400">{item.label}</span>
                  <span className={`text-sm font-bold ${item.highlight ? 'text-[#C9A84C]' : 'text-white'}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="mb-10 sm:mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/5 flex items-center justify-center border border-green-500/20">
            <span className="text-2xl">🎯</span>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">¿Cómo funciona?</h2>
            <p className="text-sm text-gray-500">Entiende el formato paso a paso</p>
          </div>
        </div>

        {/* Fase de Grupos */}
        <div className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#0F1D32]/80 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8D48B] flex items-center justify-center text-xl">
              📋
            </div>
            <h3 className="text-xl font-bold text-white">FASE DE GRUPOS</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-[#060B14] border border-white/5 text-center">
              <div className="text-3xl font-black text-[#C9A84C] mb-1">12</div>
              <div className="text-sm text-gray-500">grupos (A-L)</div>
            </div>
            <div className="p-4 rounded-xl bg-[#060B14] border border-white/5 text-center">
              <div className="text-3xl font-black text-[#C9A84C] mb-1">4</div>
              <div className="text-sm text-gray-500">equipos por grupo</div>
            </div>
            <div className="p-4 rounded-xl bg-[#060B14] border border-white/5 text-center">
              <div className="text-3xl font-black text-[#C9A84C] mb-1">32</div>
              <div className="text-sm text-gray-500">equipos avanzan</div>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Los <strong className="text-white">2 mejores</strong> de cada grupo avanzan + los <strong className="text-white">8 mejores terceros</strong> = <strong className="text-[#C9A84C]">32 equipos</strong> en la fase eliminatoria
          </p>
        </div>

        {/* Eliminación directa */}
        <div className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#0F1D32]/80">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8D48B] flex items-center justify-center text-xl">
              ⚔️
            </div>
            <h3 className="text-xl font-bold text-white">ELIMINATORIA DIRECTA</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { name: "32avos", from: 32, to: 16, new: true },
              { name: "Octavos", from: 16, to: 8, new: false },
              { name: "Cuartos", from: 8, to: 4, new: false },
              { name: "Semis", from: 4, to: 2, new: false },
              { name: "Final", from: 2, to: 1, new: false },
            ].map((round, i) => (
              <div key={i} className={`p-4 rounded-xl border text-center ${round.new ? 'border-[#C9A84C] bg-[#C9A84C]/5' : 'border-white/5 bg-[#060B14]'}`}>
                <div className="text-xs text-gray-500 mb-1">{round.from} → {round.to}</div>
                <div className={`text-base font-bold ${round.new ? 'text-[#C9A84C]' : 'text-white'}`}>
                  {round.name}
                </div>
                {round.new && <div className="text-[10px] text-[#C9A84C] mt-1">¡NUEVO!</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fases del torneo */}
      <section className="mb-10 sm:mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 flex items-center justify-center border border-purple-500/20">
            <span className="text-2xl">🏆</span>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Fases del Torneo</h2>
            <p className="text-sm text-gray-500">Del primer partido a la final</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {PHASES.map((phase, i) => (
            <div key={i} className="group p-4 sm:p-5 rounded-xl border border-white/5 bg-[#0F1D32]/80 hover:border-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-base flex-shrink-0 ${i === PHASES.length - 1 ? 'bg-gradient-to-br from-[#C9A84C] to-[#E8D48B] text-[#030712]' : 'bg-[#0B1825] text-[#C9A84C] border border-[#C9A84C]/20'}`}>
                  {i === PHASES.length - 1 ? '🏆' : phase.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-white truncate">{phase.name}</h3>
                  <p className="text-xs text-gray-500">Fase {i + 1}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-400 mb-3 leading-relaxed">{phase.desc}</p>
              
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-1 rounded bg-[#060B14] text-[#C9A84C] font-semibold">
                  {phase.matches} partidos
                </span>
                <span className="text-gray-600">→</span>
                <span className="px-2 py-1 rounded bg-[#060B14] text-white font-semibold">
                  {phase.qualified} clasifican
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ventajas */}
      <section className="mb-10 sm:mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 flex items-center justify-center border border-emerald-500/20">
            <span className="text-2xl">✅</span>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Ventajas del nuevo formato</h2>
            <p className="text-sm text-gray-500">Los beneficios de la expansión</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VENTAJAS.map((item, i) => (
            <div key={i} className="p-5 rounded-xl border border-white/5 bg-[#0F1D32]/80 hover:border-[#C9A84C]/30 transition-all duration-300 group">
              <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">{item.icon}</span>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Críticas */}
      <section className="mb-10 sm:mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/5 flex items-center justify-center border border-red-500/20">
            <span className="text-2xl">⚠️</span>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Críticas y desafíos</h2>
            <p className="text-sm text-gray-500">Los retos del nuevo formato</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CRITICAS.map((item, i) => (
            <div key={i} className="p-5 rounded-xl border border-white/5 bg-[#0F1D32]/80 text-center">
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTAs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/grupos" 
          className="p-6 rounded-2xl border border-[#C9A84C]/20 bg-gradient-to-br from-[#C9A84C]/10 to-transparent text-center hover:border-[#C9A84C]/40 transition-all duration-300 group">
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📊</div>
          <h3 className="text-lg font-bold text-white mb-2">Ver los 12 Grupos</h3>
          <p className="text-sm text-gray-400">Descubre cómo están distribuidas las 48 selecciones</p>
        </Link>

        <Link href="/registro" 
          className="p-6 rounded-2xl border border-white/10 bg-[#0F1D32] text-center hover:border-[#C9A84C]/30 transition-all duration-300 group">
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🎮</div>
          <h3 className="text-lg font-bold text-white mb-2">Empieza a Predecir</h3>
          <p className="text-sm text-gray-400">Regístrate y predice quién avanzará de cada grupo</p>
        </Link>
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-8">
        <Link href="/grupos" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-400 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-xs text-center">📊 Ver Grupos</Link>
        <Link href="/selecciones" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-400 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-xs text-center">⚽ Selecciones</Link>
        <Link href="/historia" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-400 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-xs text-center">📜 Historia</Link>
        <Link href="/registro" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-400 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-xs text-center">🎮 Jugar</Link>
      </div>
    </div>
  );
}
