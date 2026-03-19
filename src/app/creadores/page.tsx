// src/app/creadores/page.tsx
// ZonaMundial.app — Roster público de creadores

import { Metadata } from 'next';
import Link from 'next/link';
import { getCreadoresActivos, getTotalSeguidores } from '@/data/creadores';

export const metadata: Metadata = {
  title: 'Nuestros Creadores — El Equipo de ZonaMundial 2026',
  description: `${getTotalSeguidores()} seguidores combinados. Conoce a los creadores de contenido que lideran ZonaMundial durante el torneo de selecciones 2026.`,
  keywords: ['creadores zonamundial', 'influencers mundial 2026', 'creadores contenido futbol'],
  robots: { index: true, follow: true },
};

export default function CreadoresPage() {
  const creadores = getCreadoresActivos();
  const total = getTotalSeguidores();

  return (
    <>
      <nav className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-[#C9A84C]">Inicio</Link></li>
          <li>/</li>
          <li className="text-[#C9A84C]">Creadores</li>
        </ol>
      </nav>

      <header className="mb-6 sm:mb-10 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-[#C9A84C33] text-[10px] font-bold text-[#C9A84C] tracking-wider uppercase mb-4"
          style={{ background: 'rgba(201,168,76,0.06)' }}>
          Alianza con Sportfield Agency
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">
          Nuestros Creadores
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          {creadores.length} creadores de contenido con <strong className="text-[#C9A84C]">{total} seguidores</strong> combinados.
          Cada uno lanza ZonaMundial bajo su propia marca para su comunidad.
        </p>
      </header>

      {/* Sponsor */}
      <div className="w-full h-[70px] sm:h-[90px] bg-[#0B1825] border border-[#1a2a3f] rounded-lg flex items-center justify-center mb-6 sm:mb-8"
        data-sponsor-slot="creadores-hero">
        <span className="text-gray-600 text-xs">Espacio patrocinador</span>
      </div>

      {/* CREATORS GRID — 1 col mobile, 2 tablet, 3 desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
        {creadores.sort((a, b) => b.seguidoresNum - a.seguidoresNum).map(c => (
          <div key={c.slug}
            className="rounded-2xl border overflow-hidden transition-all hover:-translate-y-1"
            style={{
              borderColor: c.colorPrimario + '22',
              background: `linear-gradient(180deg, ${c.colorPrimario}08 0%, rgba(15,23,42,0.5) 100%)`,
              boxShadow: `0 4px 24px ${c.colorPrimario}08`,
            }}>

            {/* Top color bar */}
            <div className="h-1" style={{ background: `linear-gradient(90deg, ${c.colorPrimario}, ${c.colorSecundario})` }} />

            <div className="p-5">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${c.colorPrimario}15`, border: `2px solid ${c.colorPrimario}33` }}>
                  {c.emoji}
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-bold text-white truncate">{c.nombre}</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold" style={{ color: c.colorPrimario }}>{c.seguidores}</span>
                    <span className="text-xs text-gray-500">· {c.plataformaPrincipal}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-2 leading-relaxed">{c.bio}</p>
              <p className="text-xs text-gray-600 mb-4">{c.contenido}</p>

              {/* Country */}
              <div className="flex items-center gap-2 mb-5">
                <img src={`https://flagcdn.com/w20/${c.paisFlag}.png`}
                  className="w-4 h-3 rounded-[1px] object-cover" alt="" />
                <span className="text-xs text-gray-500">{c.pais}</span>
              </div>

              {/* CTA */}
              <Link href={`/registro/${c.slug}`}
                className="block w-full py-3 rounded-xl text-center text-sm font-bold no-underline transition-all hover:opacity-90"
                style={{
                  background: `linear-gradient(135deg, ${c.colorPrimario}, ${c.colorSecundario})`,
                  color: '#fff',
                  boxShadow: `0 4px 16px ${c.colorPrimario}25`,
                }}>
                Unirme al equipo
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* More creators coming */}
      <div className="text-center p-6 sm:p-8 rounded-2xl border border-[#1E293B] mb-8"
        style={{ background: 'rgba(15,23,42,0.4)' }}>
        <div className="text-3xl mb-3">🚀</div>
        <h3 className="text-lg font-bold text-white mb-2">Más creadores próximamente</h3>
        <p className="text-sm text-gray-400 max-w-md mx-auto">
          El roster de creadores sigue creciendo. Nuevos creadores se incorporarán antes del inicio del torneo.
        </p>
      </div>

      {/* CTA generic */}
      <div className="text-center p-5 sm:p-7 rounded-2xl border border-[#C9A84C22] mb-6"
        style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.06), rgba(15,23,42,0.3))' }}>
        <p className="text-[#C9A84C] text-sm font-semibold mb-3">¿No tienes creador favorito? No pasa nada</p>
        <Link href="/registro"
          className="inline-block px-7 py-3 rounded-xl text-[#030712] font-extrabold text-sm no-underline"
          style={{ background: 'linear-gradient(135deg, #C9A84C, #A8893D)', boxShadow: '0 4px 24px rgba(201,168,76,0.3)' }}>
          Regístrate y Elige Después
        </Link>
      </div>
    </>
  );
}
