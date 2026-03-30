// src/app/historia/campeones/page.tsx
// ZonaMundial.app — Todos los campeones mundiales 1930-2022
// Evergreen SEO content · Copyright safe (datos públicos + banderas)

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Todos los Campeones del Mundo de Fútbol (1930–2022) — Historia Completa | ZonaMundial',
  description: 'Historia completa de todos los campeones mundiales de fútbol desde Uruguay 1930 hasta Argentina 2022. Campeonas, subcampeonas, sedes, goleadores y datos clave.',
  keywords: ['campeones mundiales futbol', 'historia mundiales', 'ganadores copa del mundo', 'todos los campeones mundial', 'palmarés mundiales'],
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

const CHAMPIONS = [
  { year: 1930, host: 'Uruguay', hostFlag: 'uy', champion: 'Uruguay', champFlag: 'uy', runnerUp: 'Argentina', ruFlag: 'ar', final: '4-2', scorer: 'Guillermo Stábile (8)', teams: 13 },
  { year: 1934, host: 'Italia', hostFlag: 'it', champion: 'Italia', champFlag: 'it', runnerUp: 'Checoslovaquia', ruFlag: 'cz', final: '2-1 (prórroga)', scorer: 'Oldřich Nejedlý (5)', teams: 16 },
  { year: 1938, host: 'Francia', hostFlag: 'fr', champion: 'Italia', champFlag: 'it', runnerUp: 'Hungría', ruFlag: 'hu', final: '4-2', scorer: 'Leônidas (7)', teams: 15 },
  { year: 1950, host: 'Brasil', hostFlag: 'br', champion: 'Uruguay', champFlag: 'uy', runnerUp: 'Brasil', ruFlag: 'br', final: 'Fase final (Maracanazo)', scorer: 'Ademir (8)', teams: 13 },
  { year: 1954, host: 'Suiza', hostFlag: 'ch', champion: 'Alemania', champFlag: 'de', runnerUp: 'Hungría', ruFlag: 'hu', final: '3-2 (Milagro de Berna)', scorer: 'Sándor Kocsis (11)', teams: 16 },
  { year: 1958, host: 'Suecia', hostFlag: 'se', champion: 'Brasil', champFlag: 'br', runnerUp: 'Suecia', ruFlag: 'se', final: '5-2', scorer: 'Just Fontaine (13)', teams: 16 },
  { year: 1962, host: 'Chile', hostFlag: 'cl', champion: 'Brasil', champFlag: 'br', runnerUp: 'Checoslovaquia', ruFlag: 'cz', final: '3-1', scorer: 'Garrincha y otros (4)', teams: 16 },
  { year: 1966, host: 'Inglaterra', hostFlag: 'gb-eng', champion: 'Inglaterra', champFlag: 'gb-eng', runnerUp: 'Alemania', ruFlag: 'de', final: '4-2 (prórroga)', scorer: 'Eusébio (9)', teams: 16 },
  { year: 1970, host: 'México', hostFlag: 'mx', champion: 'Brasil', champFlag: 'br', runnerUp: 'Italia', ruFlag: 'it', final: '4-1', scorer: 'Gerd Müller (10)', teams: 16 },
  { year: 1974, host: 'Alemania', hostFlag: 'de', champion: 'Alemania', champFlag: 'de', runnerUp: 'Países Bajos', ruFlag: 'nl', final: '2-1', scorer: 'Grzegorz Lato (7)', teams: 16 },
  { year: 1978, host: 'Argentina', hostFlag: 'ar', champion: 'Argentina', champFlag: 'ar', runnerUp: 'Países Bajos', ruFlag: 'nl', final: '3-1 (prórroga)', scorer: 'Mario Kempes (6)', teams: 16 },
  { year: 1982, host: 'España', hostFlag: 'es', champion: 'Italia', champFlag: 'it', runnerUp: 'Alemania', ruFlag: 'de', final: '3-1', scorer: 'Paolo Rossi (6)', teams: 24 },
  { year: 1986, host: 'México', hostFlag: 'mx', champion: 'Argentina', champFlag: 'ar', runnerUp: 'Alemania', ruFlag: 'de', final: '3-2', scorer: 'Gary Lineker (6)', teams: 24 },
  { year: 1990, host: 'Italia', hostFlag: 'it', champion: 'Alemania', champFlag: 'de', runnerUp: 'Argentina', ruFlag: 'ar', final: '1-0', scorer: 'Salvatore Schillaci (6)', teams: 24 },
  { year: 1994, host: 'Estados Unidos', hostFlag: 'us', champion: 'Brasil', champFlag: 'br', runnerUp: 'Italia', ruFlag: 'it', final: '0-0 (penaltis 3-2)', scorer: 'Oleg Salenko, Hristo Stoichkov (6)', teams: 24 },
  { year: 1998, host: 'Francia', hostFlag: 'fr', champion: 'Francia', champFlag: 'fr', runnerUp: 'Brasil', ruFlag: 'br', final: '3-0', scorer: 'Davor Šuker (6)', teams: 32 },
  { year: 2002, host: 'Corea/Japón', hostFlag: 'kr', champion: 'Brasil', champFlag: 'br', runnerUp: 'Alemania', ruFlag: 'de', final: '2-0', scorer: 'Ronaldo (8)', teams: 32 },
  { year: 2006, host: 'Alemania', hostFlag: 'de', champion: 'Italia', champFlag: 'it', runnerUp: 'Francia', ruFlag: 'fr', final: '1-1 (penaltis 5-3)', scorer: 'Miroslav Klose (5)', teams: 32 },
  { year: 2010, host: 'Sudáfrica', hostFlag: 'za', champion: 'España', champFlag: 'es', runnerUp: 'Países Bajos', ruFlag: 'nl', final: '1-0 (prórroga)', scorer: 'Thomas Müller y otros (5)', teams: 32 },
  { year: 2014, host: 'Brasil', hostFlag: 'br', champion: 'Alemania', champFlag: 'de', runnerUp: 'Argentina', ruFlag: 'ar', final: '1-0 (prórroga)', scorer: 'James Rodríguez (6)', teams: 32 },
  { year: 2018, host: 'Rusia', hostFlag: 'ru', champion: 'Francia', champFlag: 'fr', runnerUp: 'Croacia', ruFlag: 'hr', final: '4-2', scorer: 'Harry Kane (6)', teams: 32 },
  { year: 2022, host: 'Catar', hostFlag: 'qa', champion: 'Argentina', champFlag: 'ar', runnerUp: 'Francia', ruFlag: 'fr', final: '3-3 (penaltis 4-2)', scorer: 'Kylian Mbappé (8)', teams: 32 },
];

const TITLES: Record<string, { count: number; flag: string; years: string }> = {
  'Brasil': { count: 5, flag: 'br', years: '1958, 1962, 1970, 1994, 2002' },
  'Alemania': { count: 4, flag: 'de', years: '1954, 1974, 1990, 2014' },
  'Italia': { count: 4, flag: 'it', years: '1934, 1938, 1982, 2006' },
  'Argentina': { count: 3, flag: 'ar', years: '1978, 1986, 2022' },
  'Francia': { count: 2, flag: 'fr', years: '1998, 2018' },
  'Uruguay': { count: 2, flag: 'uy', years: '1930, 1950' },
  'Inglaterra': { count: 1, flag: 'gb-eng', years: '1966' },
  'España': { count: 1, flag: 'es', years: '2010' },
};

export default function Campeones() {
  return (
    <>
      <nav className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
        <ol className="flex gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-[#C9A84C]">Inicio</Link></li>
          <li>/</li>
          <li><Link href="/historia" className="hover:text-[#C9A84C]">Historia</Link></li>
          <li>/</li>
          <li className="text-[#C9A84C]">Campeones</li>
        </ol>
      </nav>

      <header className="mb-6 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">
          Todos los Campeones del Mundo
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          22 ediciones · 8 selecciones campeonas · De Uruguay 1930 a Argentina 2022
        </p>
      </header>

      {/* TITLES RANKING */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Palmarés por Selección</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {Object.entries(TITLES).map(([name, d]) => (
            <div key={name} className="p-3 sm:p-4 rounded-xl border border-[#1E293B] text-center"
              style={{ background: 'rgba(15,23,42,0.5)' }}>
              <img src={`https://flagcdn.com/w80/${d.flag}.png`}
                className="w-10 h-7 sm:w-12 sm:h-8 rounded object-cover mx-auto border border-[#1E293B]"
                alt={name} />
              <div className="text-xl sm:text-2xl font-black text-[#C9A84C] mt-2">
                {'🏆'.repeat(d.count)}
              </div>
              <div className="text-sm font-bold text-white mt-1">{name}</div>
              <div className="text-[10px] text-gray-500 mt-0.5">{d.years}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsor */}
      <div className="w-full h-[70px] sm:h-[90px] bg-[#0B1825] border border-[#1a2a3f] rounded-lg flex items-center justify-center mb-6 sm:mb-8"
        data-sponsor-slot="historia-campeones">
        <span className="text-gray-600 text-xs">Espacio patrocinador</span>
      </div>

      {/* ALL EDITIONS TABLE — responsive: card on mobile, table on desktop */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Las 22 Ediciones</h2>

        {/* Desktop table */}
        <div className="hidden sm:block rounded-xl border border-[#1E293B] overflow-hidden"
          style={{ background: 'rgba(15,23,42,0.5)' }}>
          <div className="grid gap-0 px-4 py-2.5 text-[10px] font-bold text-[#334155] uppercase tracking-wider border-b border-[#0F172A]"
            style={{ gridTemplateColumns: '60px 1fr 1fr 1fr 100px 1fr' }}>
            <span>Año</span><span>Sede</span><span>Campeón</span><span>Subcampeón</span><span>Final</span><span>Goleador</span>
          </div>
          {CHAMPIONS.map((c, i) => (
            <div key={c.year}
              className="grid gap-0 items-center px-4 py-3 border-b border-[#0F172A] transition-colors hover:bg-[#0F172A]/50"
              style={{ gridTemplateColumns: '60px 1fr 1fr 1fr 100px 1fr', background: i % 2 === 0 ? 'transparent' : 'rgba(15,23,42,0.3)' }}>
              <span className="text-sm font-black text-[#C9A84C]">{c.year}</span>
              <span className="flex items-center gap-2">
                <img src={`https://flagcdn.com/w20/${c.hostFlag}.png`} className="w-5 h-3.5 rounded-[1px] object-cover" alt="" />
                <span className="text-xs text-gray-300">{c.host}</span>
              </span>
              <span className="flex items-center gap-2">
                <img src={`https://flagcdn.com/w20/${c.champFlag}.png`} className="w-5 h-3.5 rounded-[1px] object-cover" alt="" />
                <span className="text-sm font-bold text-white">{c.champion}</span>
              </span>
              <span className="flex items-center gap-2">
                <img src={`https://flagcdn.com/w20/${c.ruFlag}.png`} className="w-5 h-3.5 rounded-[1px] object-cover" alt="" />
                <span className="text-xs text-gray-400">{c.runnerUp}</span>
              </span>
              <span className="text-xs text-gray-400">{c.final}</span>
              <span className="text-xs text-gray-500 truncate">{c.scorer}</span>
            </div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="sm:hidden space-y-2">
          {CHAMPIONS.map(c => (
            <div key={c.year} className="p-3 rounded-xl border border-[#1E293B]"
              style={{ background: 'rgba(15,23,42,0.5)' }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-black text-[#C9A84C]">{c.year}</span>
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <img src={`https://flagcdn.com/w20/${c.hostFlag}.png`} className="w-4 h-3 rounded-[1px] object-cover" alt="" />
                  {c.host}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base">🏆</span>
                <img src={`https://flagcdn.com/w20/${c.champFlag}.png`} className="w-5 h-3.5 rounded-[1px] object-cover" alt="" />
                <span className="text-sm font-bold text-white">{c.champion}</span>
                <span className="text-xs text-gray-500">{c.final}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">🥈</span>
                <img src={`https://flagcdn.com/w20/${c.ruFlag}.png`} className="w-5 h-3.5 rounded-[1px] object-cover" alt="" />
                <span className="text-xs text-gray-400">{c.runnerUp}</span>
              </div>
              <div className="mt-2 text-[10px] text-gray-600">Goleador: {c.scorer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NEXT EDITION */}
      <div className="text-center p-5 sm:p-7 rounded-2xl border border-[#C9A84C22] mb-6"
        style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.06), rgba(15,23,42,0.3))' }}>
        <div className="text-3xl mb-2">🏆</div>
        <h2 className="text-lg sm:text-xl font-bold text-white mb-2">¿Quién será el campeón nº 23?</h2>
        <p className="text-sm text-gray-400 mb-4">EE.UU., México y Canadá acogen la edición más grande de la historia: 48 equipos, 104 partidos.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/grupos" className="px-6 py-3 rounded-xl text-sm font-bold text-[#030712] no-underline"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #A8893D)' }}>
            Ver los 12 Grupos
          </Link>
          <Link href="/registro" className="px-6 py-3 rounded-xl text-sm font-bold text-[#C9A84C] border border-[#C9A84C44] no-underline hover:bg-[#C9A84C11]">
            Predecir el Campeón
          </Link>
        </div>
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <Link href="/historia/goleadores" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-300 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-xs no-underline">⚽ Goleadores históricos</Link>
        <Link href="/historia/records" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-300 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-xs no-underline">📊 Récords</Link>
        <Link href="/datos/formato-2026" className="p-3 bg-[#0B1825] border border-[#1a2a3f] rounded-lg text-gray-300 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-xs no-underline">📐 Formato 2026</Link>
      </div>
    </>
  );
}
