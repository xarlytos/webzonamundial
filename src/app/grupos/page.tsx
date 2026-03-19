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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 sm:mb-3">Los 12 grupos del Mundial 2026 📊</h1>
        <p className="text-base sm:text-xl text-gray-300">
          Nuevo formato: 12 grupos de 4, los 2 mejores avanzan + 8 mejores terceros = 32avos de final
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

      {/* DESCRIPCIONES DETALLADAS DE LOS GRUPOS */}
      <section className="mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 sm:mb-8">Descripción de cada grupo</h2>
        
        <div className="space-y-6 sm:space-y-8">
          {/* Grupo A */}
          <div className="p-4 sm:p-6 rounded-xl border border-[#1E293B] hover:border-[#C9A84C33] transition-all" style={{ background: 'rgba(15,23,42,0.5)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))', color: '#C9A84C', border: '1px solid #C9A84C33' }}>A</div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Grupo A — El de México 🇲🇽</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/mx.png" className="w-4 h-3 rounded-[1px]" alt="México"/> México (anfitrión)</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/za.png" className="w-4 h-3 rounded-[1px]" alt="Sudáfrica"/> Sudáfrica</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/kr.png" className="w-4 h-3 rounded-[1px]" alt="Corea del Sur"/> Corea del Sur</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-gray-400">❓ Por definir</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300">México debuta en el Azteca. Corea del Sur con Son Heung-min. Sudáfrica, peligroso outsider.</p>
          </div>

          {/* Grupo B */}
          <div className="p-4 sm:p-6 rounded-xl border border-[#1E293B] hover:border-[#C9A84C33] transition-all" style={{ background: 'rgba(15,23,42,0.5)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))', color: '#C9A84C', border: '1px solid #C9A84C33' }}>B</div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Grupo B — Duro</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/ca.png" className="w-4 h-3 rounded-[1px]" alt="Canadá"/> Canadá</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/qa.png" className="w-4 h-3 rounded-[1px]" alt="Catar"/> Catar</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/ch.png" className="w-4 h-3 rounded-[1px]" alt="Suiza"/> Suiza</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-gray-400">❓ Por definir</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300">Canadá vs Suiza, duelo de organizados. Catar siempre incómodo.</p>
          </div>

          {/* Grupo C - GRUPO DE LA MUERTE */}
          <div className="p-4 sm:p-6 rounded-xl border-2 border-[#EF4444] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(15,23,42,0.8))' }}>
            <div className="absolute top-0 right-0 px-3 py-1 rounded-bl-lg text-[10px] font-extrabold tracking-wider bg-[#EF4444] text-white">🔥 GRUPO DE LA MUERTE</div>
            <div className="flex items-center gap-3 mb-4 mt-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg" style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.3), rgba(239,68,68,0.1))', color: '#EF4444', border: '1px solid #EF444455' }}>C</div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Grupo C — Brasil vs Marruecos vs Escocia vs Haití</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/br.png" className="w-4 h-3 rounded-[1px]" alt="Brasil"/> Brasil</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/ma.png" className="w-4 h-3 rounded-[1px]" alt="Marruecos"/> Marruecos (semifinalista Qatar 2022)</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/ht.png" className="w-4 h-3 rounded-[1px]" alt="Haití"/> Haití</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/gb-sct.png" className="w-4 h-3 rounded-[1px]" alt="Escocia"/> Escocia</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300">Brasil vs Marruecos, partidazo. Escocia con McTominay nunca se rinde. Haití, la sorpresa del Caribe.</p>
          </div>

          {/* Grupo D */}
          <div className="p-4 sm:p-6 rounded-xl border border-[#1E293B] hover:border-[#C9A84C33] transition-all" style={{ background: 'rgba(15,23,42,0.5)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))', color: '#C9A84C', border: '1px solid #C9A84C33' }}>D</div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Grupo D — Americano</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/us.png" className="w-4 h-3 rounded-[1px]" alt="Estados Unidos"/> Estados Unidos</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/py.png" className="w-4 h-3 rounded-[1px]" alt="Paraguay"/> Paraguay</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/au.png" className="w-4 h-3 rounded-[1px]" alt="Australia"/> Australia</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-gray-400">❓ Por definir</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300">USA quiere demostrar en casa. Paraguay siempre pelea. Australia, veterano de mundiales.</p>
          </div>

          {/* Grupo E */}
          <div className="p-4 sm:p-6 rounded-xl border border-[#1E293B] hover:border-[#C9A84C33] transition-all" style={{ background: 'rgba(15,23,42,0.5)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))', color: '#C9A84C', border: '1px solid #C9A84C33' }}>E</div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Grupo E — Europeo-Africano</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/de.png" className="w-4 h-3 rounded-[1px]" alt="Alemania"/> Alemania</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/cw.png" className="w-4 h-3 rounded-[1px]" alt="Curazao"/> Curazao</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/ci.png" className="w-4 h-3 rounded-[1px]" alt="Costa de Marfil"/> Costa de Marfil</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/ec.png" className="w-4 h-3 rounded-[1px]" alt="Ecuador"/> Ecuador</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300">Alemania favorita, pero Cote d&apos;Ivoire y Ecuador pueden complicar.</p>
          </div>

          {/* Grupo F */}
          <div className="p-4 sm:p-6 rounded-xl border border-[#1E293B] hover:border-[#C9A84C33] transition-all" style={{ background: 'rgba(15,23,42,0.5)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))', color: '#C9A84C', border: '1px solid #C9A84C33' }}>F</div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Grupo F — Versátil</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/nl.png" className="w-4 h-3 rounded-[1px]" alt="Países Bajos"/> Países Bajos</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/jp.png" className="w-4 h-3 rounded-[1px]" alt="Japón"/> Japón</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/tn.png" className="w-4 h-3 rounded-[1px]" alt="Túnez"/> Túnez</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-gray-400">❓ Por definir</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300">Países Bajos vs Japón, choque de estilos. Duelo táctico fascinante.</p>
          </div>

          {/* Grupo G */}
          <div className="p-4 sm:p-6 rounded-xl border border-[#1E293B] hover:border-[#C9A84C33] transition-all" style={{ background: 'rgba(15,23,42,0.5)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))', color: '#C9A84C', border: '1px solid #C9A84C33' }}>G</div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Grupo G — Estrellas</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/be.png" className="w-4 h-3 rounded-[1px]" alt="Bélgica"/> Bélgica (último torneo de la generación dorada)</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/eg.png" className="w-4 h-3 rounded-[1px]" alt="Egipto"/> Egipto (Salah)</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/ir.png" className="w-4 h-3 rounded-[1px]" alt="Irán"/> Irán</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/nz.png" className="w-4 h-3 rounded-[1px]" alt="Nueva Zelanda"/> Nueva Zelanda</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300">De Bruyne vs Salah. Choque de titanes.</p>
          </div>

          {/* Grupo H */}
          <div className="p-4 sm:p-6 rounded-xl border border-[#1E293B] hover:border-[#C9A84C33] transition-all" style={{ background: 'rgba(15,23,42,0.5)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))', color: '#C9A84C', border: '1px solid #C9A84C33' }}>H</div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Grupo H — Campeón</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/es.png" className="w-4 h-3 rounded-[1px]" alt="España"/> España (campeona de Europa)</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/cv.png" className="w-4 h-3 rounded-[1px]" alt="Cabo Verde"/> Cabo Verde</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/sa.png" className="w-4 h-3 rounded-[1px]" alt="Arabia Saudita"/> Arabia Saudita</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/uy.png" className="w-4 h-3 rounded-[1px]" alt="Uruguay"/> Uruguay</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300">España vs Uruguay, campeones del mundo. Cabo Verde, la ilusión africana.</p>
          </div>

          {/* Grupo I */}
          <div className="p-4 sm:p-6 rounded-xl border border-[#1E293B] hover:border-[#C9A84C33] transition-all" style={{ background: 'rgba(15,23,42,0.5)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))', color: '#C9A84C', border: '1px solid #C9A84C33' }}>I</div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Grupo I — Poderío</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/fr.png" className="w-4 h-3 rounded-[1px]" alt="Francia"/> Francia</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/sn.png" className="w-4 h-3 rounded-[1px]" alt="Senegal"/> Senegal</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/no.png" className="w-4 h-3 rounded-[1px]" alt="Noruega"/> Noruega (Haaland + Ødegaard)</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-gray-400">❓ Por definir</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300">Francia vs Senegal, revancha del 2002. Si Noruega entra, fuego.</p>
          </div>

          {/* Grupo J */}
          <div className="p-4 sm:p-6 rounded-xl border border-[#1E293B] hover:border-[#C9A84C33] transition-all" style={{ background: 'rgba(15,23,42,0.5)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))', color: '#C9A84C', border: '1px solid #C9A84C33' }}>J</div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Grupo J — Variado</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/ar.png" className="w-4 h-3 rounded-[1px]" alt="Argentina"/> Argentina</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/dz.png" className="w-4 h-3 rounded-[1px]" alt="Argelia"/> Argelia</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/at.png" className="w-4 h-3 rounded-[1px]" alt="Austria"/> Austria</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/jo.png" className="w-4 h-3 rounded-[1px]" alt="Jordania"/> Jordania</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300">Campeón del mundo vs Argelia (hermanos franceses). Austria, peligroso.</p>
          </div>

          {/* Grupo K */}
          <div className="p-4 sm:p-6 rounded-xl border border-[#1E293B] hover:border-[#C9A84C33] transition-all" style={{ background: 'rgba(15,23,42,0.5)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))', color: '#C9A84C', border: '1px solid #C9A84C33' }}>K</div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Grupo K — Latino-Asiático</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/pt.png" className="w-4 h-3 rounded-[1px]" alt="Portugal"/> Portugal</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/co.png" className="w-4 h-3 rounded-[1px]" alt="Colombia"/> Colombia</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/uz.png" className="w-4 h-3 rounded-[1px]" alt="Uzbekistán"/> Uzbekistán</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-gray-400">❓ Por definir</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300">Cristiano vs Colombia. Uzbekistán, debutante a seguir.</p>
          </div>

          {/* Grupo L */}
          <div className="p-4 sm:p-6 rounded-xl border border-[#1E293B] hover:border-[#C9A84C33] transition-all" style={{ background: 'rgba(15,23,42,0.5)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))', color: '#C9A84C', border: '1px solid #C9A84C33' }}>L</div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Grupo L — Europeo clásico</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/gb-eng.png" className="w-4 h-3 rounded-[1px]" alt="Inglaterra"/> Inglaterra</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/hr.png" className="w-4 h-3 rounded-[1px]" alt="Croacia"/> Croacia (subcampeona 2018)</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/gh.png" className="w-4 h-3 rounded-[1px]" alt="Ghana"/> Ghana</span>
              <span className="px-2 py-1 rounded bg-[#0B1825] text-xs text-[#CBD5E1] flex items-center gap-1"><img src="https://flagcdn.com/w20/pa.png" className="w-4 h-3 rounded-[1px]" alt="Panamá"/> Panamá</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300">Inglaterra vs Croacia, revancha de la semi 2018. Ghana y Panamá, outsider.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <div className="text-center p-5 sm:p-7 rounded-2xl border border-[#C9A84C22] mb-6 sm:mb-8" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(15,23,42,0.3))' }}>
        <p className="text-[#C9A84C] text-sm font-semibold mb-4">¿Tienes claro quién pasará de cada grupo?</p>
        <Link href="/registro"
          className="inline-block px-7 py-3 rounded-xl text-[#030712] font-extrabold text-sm no-underline hover:scale-105 transition-transform"
          style={{ background: 'linear-gradient(135deg, #C9A84C, #A8893D)', boxShadow: '0 4px 24px rgba(201,168,76,0.3)' }}>
          🎯 Crea tu predicción de grupos →
        </Link>
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
    </>
  );
}
