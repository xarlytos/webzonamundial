// src/app/historia/page.tsx
// ZonaMundial.app — Historia de los Mundiales

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Historia de los Mundiales de Fútbol (1930-2026) | ZonaMundial',
  description: 'Revive la historia del torneo más importante del fútbol mundial. Desde Uruguay 1930 hasta Qatar 2022, con todos los campeones, momentos icónicos y récords.',
  keywords: ['historia mundiales futbol', 'mundiales de futbol historia', 'campeones mundiales', 'copa del mundo historia'],
  robots: { index: true, follow: true },
};

const WORLD_CUP_STATS = [
  { year: 1930, host: "Uruguay", champion: "Uruguay", runnerUp: "Argentina", teams: 13, hostFlag: 'uy', champFlag: 'uy', ruFlag: 'ar' },
  { year: 1934, host: "Italia", champion: "Italia", runnerUp: "Checoslovaquia", teams: 16, hostFlag: 'it', champFlag: 'it', ruFlag: 'cz' },
  { year: 1938, host: "Francia", champion: "Italia", runnerUp: "Hungría", teams: 15, hostFlag: 'fr', champFlag: 'it', ruFlag: 'hu' },
  { year: 1950, host: "Brasil", champion: "Uruguay", runnerUp: "Brasil", teams: 13, hostFlag: 'br', champFlag: 'uy', ruFlag: 'br' },
  { year: 1954, host: "Suiza", champion: "Alemania", runnerUp: "Hungría", teams: 16, hostFlag: 'ch', champFlag: 'de', ruFlag: 'hu' },
  { year: 1958, host: "Suecia", champion: "Brasil", runnerUp: "Suecia", teams: 16, hostFlag: 'se', champFlag: 'br', ruFlag: 'se' },
  { year: 1962, host: "Chile", champion: "Brasil", runnerUp: "Checoslovaquia", teams: 16, hostFlag: 'cl', champFlag: 'br', ruFlag: 'cz' },
  { year: 1966, host: "Inglaterra", champion: "Inglaterra", runnerUp: "Alemania", teams: 16, hostFlag: 'gb-eng', champFlag: 'gb-eng', ruFlag: 'de' },
  { year: 1970, host: "México", champion: "Brasil", runnerUp: "Italia", teams: 16, hostFlag: 'mx', champFlag: 'br', ruFlag: 'it' },
  { year: 1974, host: "Alemania", champion: "Alemania", runnerUp: "Países Bajos", teams: 16, hostFlag: 'de', champFlag: 'de', ruFlag: 'nl' },
  { year: 1978, host: "Argentina", champion: "Argentina", runnerUp: "Países Bajos", teams: 16, hostFlag: 'ar', champFlag: 'ar', ruFlag: 'nl' },
  { year: 1982, host: "España", champion: "Italia", runnerUp: "Alemania", teams: 24, hostFlag: 'es', champFlag: 'it', ruFlag: 'de' },
  { year: 1986, host: "México", champion: "Argentina", runnerUp: "Alemania", teams: 24, hostFlag: 'mx', champFlag: 'ar', ruFlag: 'de' },
  { year: 1990, host: "Italia", champion: "Alemania", runnerUp: "Argentina", teams: 24, hostFlag: 'it', champFlag: 'de', ruFlag: 'ar' },
  { year: 1994, host: "Estados Unidos", champion: "Brasil", runnerUp: "Italia", teams: 24, hostFlag: 'us', champFlag: 'br', ruFlag: 'it' },
  { year: 1998, host: "Francia", champion: "Francia", runnerUp: "Brasil", teams: 32, hostFlag: 'fr', champFlag: 'fr', ruFlag: 'br' },
  { year: 2002, host: "Corea/Japón", champion: "Brasil", runnerUp: "Alemania", teams: 32, hostFlag: 'kr', champFlag: 'br', ruFlag: 'de' },
  { year: 2006, host: "Alemania", champion: "Italia", runnerUp: "Francia", teams: 32, hostFlag: 'de', champFlag: 'it', ruFlag: 'fr' },
  { year: 2010, host: "Sudáfrica", champion: "España", runnerUp: "Países Bajos", teams: 32, hostFlag: 'za', champFlag: 'es', ruFlag: 'nl' },
  { year: 2014, host: "Brasil", champion: "Alemania", runnerUp: "Argentina", teams: 32, hostFlag: 'br', champFlag: 'de', ruFlag: 'ar' },
  { year: 2018, host: "Rusia", champion: "Francia", runnerUp: "Croacia", teams: 32, hostFlag: 'ru', champFlag: 'fr', ruFlag: 'hr' },
  { year: 2022, host: "Qatar", champion: "Argentina", runnerUp: "Francia", teams: 32, hostFlag: 'qa', champFlag: 'ar', ruFlag: 'fr' },
];

const ICONIC_MOMENTS = [
  { year: 1930, title: "Uruguay 1930", description: "La primera Copa del Mundo con 13 equipos participantes", emoji: "🥇", color: "#C9A84C" },
  { year: 1950, title: "El Maracanazo", description: "Uruguay derrota a Brasil en el Maracaná ante 200,000 personas", emoji: "🏟️", color: "#22C55E" },
  { year: 1970, title: "Brasil de Pelé", description: "Considerado el mejor equipo de la historia del fútbol", emoji: "👑", color: "#FACC15" },
  { year: 1986, title: "La mano de Dios", description: "Maradona anota el gol más famoso de la historia vs Inglaterra", emoji: "✋", color: "#38BDF8" },
  { year: 2010, title: "España campeona", description: "El gol de Iniesta en la prórroga da la primera Copa a España", emoji: "🏆", color: "#C9A84C" },
  { year: 2022, title: "Messi se consagra", description: "Argentina campeona en una final épica vs Francia con hat-trick de Mbappé", emoji: "🐐", color: "#60A5FA" },
];

const RECORDS = [
  { title: "Más títulos", holder: "Brasil", value: "5", flag: "br" },
  { title: "Más partidos jugados", holder: "Lothar Matthäus", value: "25", flag: "de" },
  { title: "Más goles", holder: "Miroslav Klose", value: "16 goles", flag: "de" },
  { title: "Más goles en un torneo", holder: "Just Fontaine", value: "13 en 1958", flag: "fr" },
  { title: "Jugador más joven", holder: "Norman Whiteside", value: "17 años", flag: "gb" },
  { title: "Jugador más viejo", holder: "Essam El-Hadary", value: "45 años", flag: "eg" },
];

const HOST_2026 = [
  { country: "México", times: 3, years: "1970, 1986, 2026", flag: "mx", description: "Primer país en organizar tres Mundiales" },
  { country: "Estados Unidos", times: 2, years: "1994, 2026", flag: "us", description: "Récord de asistencia en 1994 con 3.6M espectadores" },
  { country: "Canadá", times: 1, years: "2026", flag: "ca", description: "Primera vez como anfitrión en la historia" },
];

export default function HistoriaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-0 pb-6 sm:pb-8">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-[#C9A84C]">Inicio</Link></li>
          <li>/</li>
          <li className="text-[#C9A84C]">Historia</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-8 sm:mb-12 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#C9A84C]/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A84C]/20 text-[10px] font-bold text-[#C9A84C] tracking-wider uppercase mb-4 bg-[#C9A84C]/5">
            Desde 1930 hasta hoy
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Momentos que hicieron <span className="text-[#C9A84C]">historia</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            22 ediciones, 8 campeones diferentes y miles de historias que marcaron el fútbol mundial.
            Revive la historia del torneo más importante del planeta.
          </p>
        </div>
      </header>

      {/* Sponsor */}
      <div className="w-full h-[70px] sm:h-[90px] bg-[#0B1825] border border-[#1a2a3f] rounded-xl flex items-center justify-center mb-8 sm:mb-10"
        data-sponsor-slot="historia-hero">
        <span className="text-gray-600 text-xs">Espacio patrocinador</span>
      </div>

      {/* Iconic Moments */}
      <section className="mb-10 sm:mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5 flex items-center justify-center border border-[#C9A84C]/20">
            <span className="text-2xl">🏆</span>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Momentos icónicos</h2>
            <p className="text-sm text-gray-500">Instantes que definieron la historia</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ICONIC_MOMENTS.map((moment, i) => (
            <div key={i} 
              className="group p-5 rounded-2xl border border-white/5 bg-[#0F1D32]/80 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 transition-all duration-300" 
                style={{ background: `linear-gradient(90deg, ${moment.color}, ${moment.color}60)` }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${moment.color}10 0%, transparent 70%)` }} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{moment.emoji}</span>
                  <div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" 
                      style={{ background: `${moment.color}20`, color: moment.color }}>
                      {moment.year}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{moment.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{moment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Records */}
      <section className="mb-10 sm:mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/5 flex items-center justify-center border border-amber-500/20">
            <span className="text-2xl">📊</span>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Récords impresionantes</h2>
            <p className="text-sm text-gray-500">Datos que marcan la diferencia</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RECORDS.map((record, i) => (
            <div key={i} 
              className="p-4 rounded-xl border border-white/5 bg-[#0F1D32]/80 flex items-center gap-4 hover:border-[#C9A84C]/30 transition-all duration-300">
              <img src={`https://flagcdn.com/w40/${record.flag}.png`} 
                alt={record.holder} 
                className="w-10 h-7 rounded object-cover border border-white/10" />
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-500 mb-0.5">{record.title}</div>
                <div className="text-sm font-bold text-white truncate">{record.holder}</div>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20">
                <span className="text-sm font-bold text-[#C9A84C]">{record.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hosts 2026 */}
      <section className="mb-10 sm:mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 flex items-center justify-center border border-blue-500/20">
            <span className="text-2xl">🌍</span>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Historia de las sedes 2026</h2>
            <p className="text-sm text-gray-500">Tres naciones, un mismo sueño</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {HOST_2026.map((host, i) => (
            <div key={i} 
              className="p-6 rounded-2xl border border-white/5 bg-[#0F1D32]/80 text-center hover:border-white/10 transition-all duration-300">
              <img src={`https://flagcdn.com/w80/${host.flag}.png`} 
                alt={host.country} 
                className="w-16 h-11 rounded-lg object-cover mx-auto mb-4 border border-white/10" />
              <h3 className="text-lg font-bold text-white mb-1">{host.country}</h3>
              <div className="text-3xl font-black text-[#C9A84C] mb-2">{host.times}×</div>
              <div className="text-xs text-gray-500 mb-3">{host.years}</div>
              <p className="text-sm text-gray-400 leading-relaxed">{host.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* All World Cups */}
      <section className="mb-10 sm:mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 flex items-center justify-center border border-purple-500/20">
            <span className="text-2xl">📜</span>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Todas las ediciones</h2>
            <p className="text-sm text-gray-500">22 Mundiales, 22 historias</p>
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block rounded-2xl border border-[#1E293B] overflow-hidden bg-[#0F1D32]/50">
          <div className="grid gap-0 px-4 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider border-b border-[#1E293B]"
            style={{ gridTemplateColumns: '70px 1fr 1fr 1fr 80px' }}>
            <span>Año</span>
            <span>Sede</span>
            <span>Campeón</span>
            <span>Subcampeón</span>
            <span className="text-right">Equipos</span>
          </div>
          {WORLD_CUP_STATS.map((wc, i) => (
            <div key={wc.year}
              className="grid gap-0 items-center px-4 py-3 border-b border-[#1E293B] last:border-0 hover:bg-[#1E293B]/50 transition-colors"
              style={{ gridTemplateColumns: '70px 1fr 1fr 1fr 80px', background: i % 2 === 0 ? 'transparent' : 'rgba(15,23,42,0.3)' }}>
              <span className="text-sm font-black text-[#C9A84C]">{wc.year}</span>
              <span className="flex items-center gap-2">
                <img src={`https://flagcdn.com/w20/${wc.hostFlag}.png`} className="w-5 h-3.5 rounded-[1px] object-cover" alt="" />
                <span className="text-sm text-gray-300">{wc.host}</span>
              </span>
              <span className="flex items-center gap-2">
                <img src={`https://flagcdn.com/w20/${wc.champFlag}.png`} className="w-5 h-3.5 rounded-[1px] object-cover" alt="" />
                <span className="text-sm font-bold text-white">{wc.champion}</span>
              </span>
              <span className="flex items-center gap-2">
                <img src={`https://flagcdn.com/w20/${wc.ruFlag}.png`} className="w-5 h-3.5 rounded-[1px] object-cover" alt="" />
                <span className="text-sm text-gray-400">{wc.runnerUp}</span>
              </span>
              <span className="text-sm text-gray-500 text-right">{wc.teams}</span>
            </div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {WORLD_CUP_STATS.map(wc => (
            <div key={wc.year} className="p-4 rounded-xl border border-[#1E293B] bg-[#0F1D32]/50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-black text-[#C9A84C]">{wc.year}</span>
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <img src={`https://flagcdn.com/w20/${wc.hostFlag}.png`} className="w-5 h-3.5 rounded-[1px] object-cover" alt="" />
                  {wc.host}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-base">🏆</span>
                  <img src={`https://flagcdn.com/w20/${wc.champFlag}.png`} className="w-5 h-3.5 rounded-[1px] object-cover" alt="" />
                  <span className="text-sm font-bold text-white">{wc.champion}</span>
                </div>
                <span className="text-xs text-gray-500">{wc.teams} equipos</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-base">🥈</span>
                <img src={`https://flagcdn.com/w20/${wc.ruFlag}.png`} className="w-5 h-3.5 rounded-[1px] object-cover" alt="" />
                <span className="text-sm text-gray-400">{wc.runnerUp}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTAs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/historia/campeones" 
          className="p-6 rounded-2xl border border-[#C9A84C]/20 bg-gradient-to-br from-[#C9A84C]/10 to-transparent text-center hover:border-[#C9A84C]/40 transition-all duration-300 group">
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🏆</div>
          <h3 className="text-lg font-bold text-white mb-2">Todos los campeones</h3>
          <p className="text-sm text-gray-400">Descubre el palmarés completo de los 22 Mundiales</p>
        </Link>

        <Link href="/trivia" 
          className="p-6 rounded-2xl border border-white/10 bg-[#0F1D32] text-center hover:border-[#C9A84C]/30 transition-all duration-300 group">
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🎯</div>
          <h3 className="text-lg font-bold text-white mb-2">¿Cuánto sabes?</h3>
          <p className="text-sm text-gray-400">Pon a prueba tus conocimientos con nuestra trivia</p>
        </Link>
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-8">
        <Link href="/historia/campeones" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-400 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-xs text-center">🏆 Todos los campeones</Link>
        <Link href="/grupos" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-400 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-xs text-center">📊 Grupos 2026</Link>
        <Link href="/selecciones" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-400 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-xs text-center">⚽ Selecciones</Link>
        <Link href="/registro" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-400 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-xs text-center">🎮 Jugar</Link>
      </div>
    </div>
  );
}
