// src/app/grupos/page.tsx
// ZonaMundial.app — Índice de los 12 grupos

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Los 12 Grupos del Torneo 2026 — Sorteo, Equipos y Calendario | ZonaMundial',
  description: '12 grupos, 48 selecciones. Todo sobre los grupos del torneo de selecciones 2026: sorteo, equipos, calendario de partidos, sedes y predicciones.',
  keywords: ['grupos mundial 2026', 'sorteo mundial 2026', '12 grupos mundial', 'fase grupos 2026'],
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

const GROUPS_PREVIEW = [
  { letter: 'A', teams: [['mx','México'],['kr','Corea'],['za','Sudáfrica'],['eu','UEFA D']], tag: 'INAUGURACIÓN', tagColor: '#C9A84C' },
  { letter: 'B', teams: [['ca','Canadá'],['ch','Suiza'],['qa','Catar'],['eu','UEFA A']], tag: 'ANFITRIÓN', tagColor: '#22C55E' },
  { letter: 'C', teams: [['br','Brasil'],['ma','Marruecos'],['gb-sct','Escocia'],['ht','Haití']], tag: 'BRASIL', tagColor: '#FBBF24' },
  { letter: 'D', teams: [['us','EE.UU.'],['py','Paraguay'],['au','Australia'],['eu','UEFA C']], tag: 'ANFITRIÓN', tagColor: '#22C55E' },
  { letter: 'E', teams: [['de','Alemania'],['ci','C. Marfil'],['ec','Ecuador'],['cw','Curazao']], tag: 'DEBUT CURAZAO', tagColor: '#94A3B8' },
  { letter: 'F', teams: [['nl','P. Bajos'],['jp','Japón'],['tn','Túnez'],['eu','UEFA B']], tag: null },
  { letter: 'G', teams: [['be','Bélgica'],['eg','Egipto'],['ir','Irán'],['nz','N. Zelanda']], tag: 'SALAH', tagColor: '#EF4444' },
  { letter: 'H', teams: [['es','España'],['uy','Uruguay'],['sa','A. Saudita'],['cv','C. Verde']], tag: 'Nº1 FIFA', tagColor: '#C9A84C' },
  { letter: 'I', teams: [['fr','Francia'],['sn','Senegal'],['no','Noruega'],['bo','IC 2']], tag: 'GRUPO MUERTE', tagColor: '#EF4444' },
  { letter: 'J', teams: [['ar','Argentina'],['dz','Argelia'],['at','Austria'],['jo','Jordania']], tag: 'CAMPEONA', tagColor: '#C9A84C' },
  { letter: 'K', teams: [['pt','Portugal'],['co','Colombia'],['uz','Uzbekistán'],['jm','IC 1']], tag: 'CR7', tagColor: '#FBBF24' },
  { letter: 'L', teams: [['gb-eng','Inglaterra'],['hr','Croacia'],['gh','Ghana'],['pa','Panamá']], tag: 'REVANCHA 2018', tagColor: '#94A3B8' },
];

export default function GruposIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://zonamundial.app' },
          { '@type': 'ListItem', position: 2, name: 'Grupos', item: 'https://zonamundial.app/grupos' },
        ],
      })}} />

      <nav className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-[#C9A84C]">Inicio</Link></li>
          <li>/</li>
          <li className="text-[#C9A84C]">Grupos</li>
        </ol>
      </nav>

      <header className="mb-6 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 sm:mb-3">Los 12 Grupos</h1>
        <p className="text-base sm:text-xl text-gray-300">
          Torneo de Selecciones 2026 · 48 equipos · 72 partidos en fase de grupos
        </p>
      </header>

      {/* Sponsor */}
      <div className="w-full h-[70px] sm:h-[90px] bg-[#0B1825] border border-[#1a2a3f] rounded-lg flex items-center justify-center mb-6 sm:mb-8"
        data-sponsor-slot="grupos-hero">
        <span className="text-gray-600 text-xs">Espacio patrocinador</span>
      </div>

      {/* GROUPS GRID — 1 col mobile, 2 tablet, 3 desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
        {GROUPS_PREVIEW.map(g => (
          <Link key={g.letter} href={`/grupos/grupo-${g.letter.toLowerCase()}`}
            className="group relative overflow-hidden rounded-xl border border-[#1E293B] hover:border-[#C9A84C44] transition-all duration-300 no-underline"
            style={{ background: 'rgba(15,23,42,0.5)', backdropFilter: 'blur(8px)' }}>

            {/* Tag */}
            {g.tag && (
              <div className="absolute top-0 right-0 px-2.5 py-1 rounded-bl-lg text-[8px] font-extrabold tracking-wider"
                style={{ background: g.tagColor, color: '#030712' }}>
                {g.tag}
              </div>
            )}

            {/* Content */}
            <div className="p-4 sm:p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center font-black text-lg sm:text-xl"
                  style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))', color: '#C9A84C', border: '1px solid #C9A84C33' }}>
                  {g.letter}
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-[#C9A84C] transition-colors">
                    Grupo {g.letter}
                  </h2>
                  <p className="text-[10px] sm:text-xs text-gray-500">6 partidos · 3 jornadas</p>
                </div>
              </div>

              {/* Teams list */}
              <div className="space-y-2">
                {g.teams.map(([flag, name], i) => (
                  <div key={flag + i} className="flex items-center gap-2.5">
                    <img src={`https://flagcdn.com/w40/${flag}.png`}
                      className="w-6 h-4 rounded-[2px] object-cover border border-[#1E293B]"
                      alt={name} />
                    <span className="text-xs sm:text-sm text-[#CBD5E1] font-medium">{name}</span>
                    {i === 0 && <span className="text-[9px] text-[#C9A84C] font-bold ml-auto">CABEZA</span>}
                  </div>
                ))}
              </div>

              {/* Arrow */}
              <div className="mt-4 text-right">
                <span className="text-xs text-gray-600 group-hover:text-[#C9A84C] transition-colors">
                  Ver grupo completo →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* FORMAT EXPLAINER */}
      <div className="p-4 sm:p-6 rounded-xl border border-[#1E293B] mb-6 sm:mb-8"
        style={{ background: 'rgba(15,23,42,0.5)' }}>
        <h2 className="text-lg sm:text-xl font-bold text-white mb-3">¿Cómo funciona el formato 2026?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm text-gray-300">
          <div className="p-3 rounded-lg bg-[#0F172A]">
            <div className="text-2xl mb-1">1️⃣</div>
            <p className="font-bold text-white text-sm">Fase de grupos</p>
            <p className="text-xs text-gray-400 mt-1">12 grupos × 4 equipos. Los 2 primeros de cada grupo clasifican directamente.</p>
          </div>
          <div className="p-3 rounded-lg bg-[#0F172A]">
            <div className="text-2xl mb-1">2️⃣</div>
            <p className="font-bold text-white text-sm">Mejores terceros</p>
            <p className="text-xs text-gray-400 mt-1">Los 8 mejores terceros también clasifican. Total: 32 equipos pasan a eliminatorias.</p>
          </div>
          <div className="p-3 rounded-lg bg-[#0F172A]">
            <div className="text-2xl mb-1">3️⃣</div>
            <p className="font-bold text-white text-sm">Eliminatorias</p>
            <p className="text-xs text-gray-400 mt-1">Dieciseisavos → Octavos → Cuartos → Semis → Final (19 julio, Nueva York)</p>
          </div>
        </div>
        <Link href="/datos/formato-2026" className="inline-block mt-4 text-xs text-[#C9A84C] font-semibold hover:underline">
          Ver explicación completa del formato →
        </Link>
      </div>

      {/* CTA */}
      <div className="text-center p-5 sm:p-7 rounded-2xl border border-[#C9A84C22] mb-6"
        style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.06), rgba(15,23,42,0.3))' }}>
        <p className="text-[#C9A84C] text-sm font-semibold mb-3">¿Quieres predecir cada grupo del torneo?</p>
        <Link href="/registro"
          className="inline-block px-7 py-3 rounded-xl text-[#030712] font-extrabold text-sm no-underline"
          style={{ background: 'linear-gradient(135deg, #C9A84C, #A8893D)', boxShadow: '0 4px 24px rgba(201,168,76,0.3)' }}>
          Regístrate Gratis
        </Link>
      </div>
    </>
  );
}
