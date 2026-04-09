"use client";

import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import type { Creador } from '@/data/creadores';

interface Props {
  creadores: Creador[];
  total: string;
}

export default function CreadoresClient({ creadores, total }: Props) {
  const { t } = useLanguage();
  const cT = t.creadores;
  const nav = t.nav;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-0 pb-6 sm:pb-8">
      <nav className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-[#C9A84C]">{nav.inicio}</Link></li>
          <li>/</li>
          <li className="text-[#C9A84C]">{cT.title}</li>
        </ol>
      </nav>

      <header className="mb-6 sm:mb-10 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-[#C9A84C33] text-[10px] font-bold text-[#C9A84C] tracking-wider uppercase mb-4"
          style={{ background: 'rgba(201,168,76,0.06)' }}>
          {cT.badge}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">
          {cT.title}
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          {creadores.length} {cT.subtitle} <strong className="text-[#C9A84C]">{total} {cT.subtitleFollowers}</strong> {cT.subtitleEnd}
        </p>
      </header>

      {/* Sponsor */}
      <div className="w-full text-center mb-6 sm:mb-8">
        <a href="mailto:info@sprintmarkt.com?subject=Publicidad%20en%20ZonaMundial%20-%20P%C3%A1gina%20Creadores&body=Hola%20equipo%20de%20ZonaMundial%2C%0A%0AMe%20interesa%20contratar%20un%20espacio%20publicitario%20en%20la%20p%C3%A1gina%20de%20Creadores.%0A%0AEmpresa%3A%20%0AContacto%3A%20%0APresupuesto%20estimado%3A%20%0A%0AQuedo%20a%20la%20espera%20de%20vuestra%20propuesta.%0A%0AGracias." className="block w-full bg-[#0B1825] border border-dashed border-[#C9A84C]/30 rounded-xl py-4 hover:bg-[#C9A84C]/5 hover:border-[#C9A84C]/50 transition-all group">
          <p className="text-[#C9A84C]/60 text-sm font-bold tracking-widest uppercase mb-2 group-hover:text-[#C9A84C]/80">Espacio disponible para publicidad</p>
          <p className="text-gray-500 text-sm group-hover:text-gray-400">Contacta con nosotros → info@sprintmarkt.com</p>
        </a>
      </div>

      {/* CREATORS GRID — 1 col mobile, 2 tablet, 3 desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-10">
        {creadores.sort((a, b) => b.seguidoresNum - a.seguidoresNum).map(c => (
          <div key={c.slug}
            className="group rounded-2xl border overflow-hidden transition-all duration-500 hover:-translate-y-2 relative"
            style={{
              borderColor: c.colorPrimario + '20',
              background: `linear-gradient(180deg, ${c.colorPrimario}05 0%, rgba(15,23,42,0.6) 50%, rgba(10,15,30,0.8) 100%)`,
              boxShadow: `0 4px 24px ${c.colorPrimario}08`,
            }}>

            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(circle at 50% 0%, ${c.colorPrimario}15 0%, transparent 70%)` }} />

            {/* Top color bar */}
            <div className="h-1 relative z-10" style={{ background: `linear-gradient(90deg, ${c.colorPrimario}, ${c.colorSecundario})` }} />

            <div className="p-6 relative z-10">
              {/* Header with Photo */}
              <div className="flex flex-col items-center mb-5">
                {/* Photo with gradient ring */}
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full p-[3px] transition-transform duration-500 group-hover:scale-105"
                    style={{ background: `linear-gradient(135deg, ${c.colorPrimario}, ${c.colorSecundario}60)` }}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#0f172a] border-[3px] border-[#0f172a]">
                      <img src={c.imagen} alt={c.nombre} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  {/* Platform badge */}
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: c.colorPrimario, border: '2px solid #0f172a' }}>
                    {c.plataformaPrincipal === 'YouTube' && <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.5.6c-1 .3-1.7 1.1-2 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1 1.8 2 2.1 1.9.6 9.5.6 9.5.6s7.6 0 9.5-.6c1-.3 1.7-1.1 2-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>}
                    {c.plataformaPrincipal === 'Twitch' && <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M11.6 11.2h2v5.3h-2v-5.3zm5.3 0h2v5.3h-2v-5.3zM6 0L1.3 4.7v14.7h5.3V24l4.7-4.7h3.8L22.7 12V0H6zm14.7 11l-3.6 3.6h-3.6l-3.1 3.1v-3.1H6.6V2h14v9z"/></svg>}
                    {c.plataformaPrincipal === 'TikTok' && <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M19.3 5.3A4.5 4.5 0 0116.5 2h-3.4v13.5a2.7 2.7 0 11-1.8-2.5V9.5a6.2 6.2 0 105.3 6.1V10a8 8 0 004.7 1.5V8a4.5 4.5 0 01-2-2.7z"/></svg>}
                    {c.plataformaPrincipal === 'Instagram' && <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><path d="M12 2.2c2.7 0 3 0 4.1.1 1 0 1.5.2 1.9.3.5.2.8.4 1.1.7.3.3.5.7.7 1.1.1.4.3.9.3 1.9 0 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.5-.3 1.9-.2.5-.4.8-.7 1.1-.3.3-.7.5-1.1.7-.4.1-.9.3-1.9.3-1.1 0-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.5-.2-1.9-.3-.5-.2-.8-.4-1.1-.7-.3-.3-.5-.7-.7-1.1-.1-.4-.3-.9-.3-1.9 0-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c0-1 .2-1.5.3-1.9.2-.5.4-.8.7-1.1.3-.3.7-.5 1.1-.7.4-.1.9-.3 1.9-.3 1.1 0 1.4-.1 4.1-.1M12 0C9.3 0 8.9 0 7.8.1 6.7.1 5.9.3 5.2.6c-.7.3-1.3.6-1.9 1.2C2.7 2.4 2.4 3 2.1 3.7c-.3.7-.5 1.5-.5 2.6C1.5 7.4 1.5 7.8 1.5 12s0 4.6.1 5.7c.1 1.1.3 1.9.6 2.6.3.7.6 1.3 1.2 1.9.6.6 1.2.9 1.9 1.2.7.3 1.5.5 2.6.6 1.1 0 1.5.1 5.7.1s4.6 0 5.7-.1c1.1-.1 1.9-.3 2.6-.6.7-.3 1.3-.6 1.9-1.2.6-.6.9-1.2 1.2-1.9.3-.7.5-1.5.6-2.6 0-1.1.1-1.5.1-5.7s0-4.6-.1-5.7c-.1-1.1-.3-1.9-.6-2.6-.3-.7-.6-1.3-1.2-1.9-.6-.6-1.2-.9-1.9-1.2C18.1.3 17.3.1 16.2.1 15.1 0 14.7 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.5a1.4 1.4 0 100-2.9 1.4 1.4 0 000 2.9z"/></svg>}
                    {c.plataformaPrincipal === 'Twitter' && <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><path d="M18.2 2.25h3.5l-7.6 8.7 9 11.8h-7l-5.5-7.2-6.3 7.2H.8l8.1-9.3-8.6-11.3h7.2l5 6.6 5.7-6.5zm-1.2 18.5h1.9L7.1 4.2H5.1l11.9 16.5z"/></svg>}
                  </div>
                </div>

                {/* Name and Handle */}
                <h2 className="text-xl font-bold text-white mb-1">{c.nombre}</h2>
                <p className="text-sm text-gray-400 mb-2">{c.handle}</p>

                {/* Followers badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: `${c.colorPrimario}15`,
                    color: c.colorPrimario,
                    border: `1px solid ${c.colorPrimario}30`
                  }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                  {c.seguidores}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-3 leading-relaxed text-center">{c.bio}</p>
              <p className="text-xs text-gray-500 mb-5 text-center" style={{ color: `${c.colorPrimario}80` }}>{c.contenido}</p>

              {/* Country */}
              <div className="flex items-center justify-center gap-2 mb-5">
                <img src={`https://flagcdn.com/w20/${c.paisFlag}.png`}
                  className="w-5 h-4 rounded-[2px] object-cover shadow-sm" alt={c.pais} />
                <span className="text-sm text-gray-400">{c.pais}</span>
              </div>

              {/* Social Media Links */}
              {c.redes && c.redes.length > 0 && (
                <div className="flex items-center justify-center gap-2 mb-4">
                  {c.redes.map((red) => (
                    <a
                      key={red.plataforma}
                      href={red.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                      title={`${red.plataforma} - ${red.usuario}`}
                    >
                      {red.plataforma === 'youtube' && <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff0000"><path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.5.6c-1 .3-1.7 1.1-2 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1 1.8 2 2.1 1.9.6 9.5.6 9.5.6s7.6 0 9.5-.6c1-.3 1.7-1.1 2-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>}
                      {red.plataforma === 'twitch' && <svg width="16" height="16" viewBox="0 0 24 24" fill="#9146ff"><path d="M11.6 11.2h2v5.3h-2v-5.3zm5.3 0h2v5.3h-2v-5.3zM6 0L1.3 4.7v14.7h5.3V24l4.7-4.7h3.8L22.7 12V0H6zm14.7 11l-3.6 3.6h-3.6l-3.1 3.1v-3.1H6.6V2h14v9z"/></svg>}
                      {red.plataforma === 'tiktok' && <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M19.3 5.3A4.5 4.5 0 0116.5 2h-3.4v13.5a2.7 2.7 0 11-1.8-2.5V9.5a6.2 6.2 0 105.3 6.1V10a8 8 0 004.7 1.5V8a4.5 4.5 0 01-2-2.7z"/></svg>}
                      {red.plataforma === 'instagram' && <svg width="16" height="16" viewBox="0 0 24 24" fill="#e4405f"><path d="M12 2.2c2.7 0 3 0 4.1.1 1 0 1.5.2 1.9.3.5.2.8.4 1.1.7.3.3.5.7.7 1.1.1.4.3.9.3 1.9 0 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.5-.3 1.9-.2.5-.4.8-.7 1.1-.3.3-.7.5-1.1.7-.4.1-.9.3-1.9.3-1.1 0-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.5-.2-1.9-.3-.5-.2-.8-.4-1.1-.7-.3-.3-.5-.7-.7-1.1-.1-.4-.3-.9-.3-1.9 0-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c0-1 .2-1.5.3-1.9.2-.5.4-.8.7-1.1.3-.3.7-.5 1.1-.7.4-.1.9-.3 1.9-.3 1.1 0 1.4-.1 4.1-.1M12 0C9.3 0 8.9 0 7.8.1 6.7.1 5.9.3 5.2.6c-.7.3-1.3.6-1.9 1.2C2.7 2.4 2.4 3 2.1 3.7c-.3.7-.5 1.5-.5 2.6C1.5 7.4 1.5 7.8 1.5 12s0 4.6.1 5.7c.1 1.1.3 1.9.6 2.6.3.7.6 1.3 1.2 1.9.6.6 1.2.9 1.9 1.2.7.3 1.5.5 2.6.6 1.1 0 1.5.1 5.7.1s4.6 0 5.7-.1c1.1-.1 1.9-.3 2.6-.6.7-.3 1.3-.6 1.9-1.2.6-.6.9-1.2 1.2-1.9.3-.7.5-1.5.6-2.6 0-1.1.1-1.5.1-5.7s0-4.6-.1-5.7c-.1-1.1-.3-1.9-.6-2.6-.3-.7-.6-1.3-1.2-1.9-.6-.6-1.2-.9-1.9-1.2C18.1.3 17.3.1 16.2.1 15.1 0 14.7 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.5a1.4 1.4 0 100-2.9 1.4 1.4 0 000 2.9z"/></svg>}
                      {red.plataforma === 'twitter' && <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M18.2 2.25h3.5l-7.6 8.7 9 11.8h-7l-5.5-7.2-6.3 7.2H.8l8.1-9.3-8.6-11.3h7.2l5 6.6 5.7-6.5zm-1.2 18.5h1.9L7.1 4.2H5.1l11.9 16.5z"/></svg>}
                      {red.plataforma === 'threads' && <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M12.2 2C6.6 2 2.2 6.5 2.2 12c0 5.5 4.4 10 9.8 10h.2c5.5 0 9.8-4.5 9.8-10S17.6 2 12.2 2zm4.5 14.3c-.5 1.2-1.7 2-3 2.2-.8.1-1.5.1-2.3-.1-1.1-.3-2-1-2.5-2-.3-.6-.4-1.2-.3-1.9.2-1.3 1.1-2.2 2.3-2.6.8-.3 1.7-.3 2.5 0 .5.2.9.5 1.2.9l-1 .8c-.5-.5-1.2-.7-1.9-.5-.9.2-1.5 1-1.3 1.9.1.6.5 1 1 1.3.6.3 1.3.3 1.9.1.5-.2.8-.5 1-.9h-1.5v-1.2h2.8c.1.7 0 1.3-.2 1.9z"/></svg>}
                    </a>
                  ))}
                </div>
              )}

              {/* CTA */}
              <Link href={`/registro/${c.slug}`}
                className="block w-full py-3.5 rounded-xl text-center text-sm font-bold no-underline transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${c.colorPrimario}, ${c.colorSecundario})`,
                  color: '#fff',
                  boxShadow: `0 4px 20px ${c.colorPrimario}40`,
                }}>
                <span className="relative z-10">{cT.joinBtn}</span>
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* More creators coming */}
      <div className="text-center p-8 sm:p-10 rounded-2xl border mb-8 relative overflow-hidden"
        style={{
          borderColor: 'rgba(201,168,76,0.15)',
          background: 'linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(15,23,42,0.4) 100%)'
        }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, #C9A84C 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
            style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))', border: '1px solid rgba(201,168,76,0.2)' }}>
            <img src="/img/zonamundial-images/imagenes/logos para sustuir emojis/creadores.png" alt="" className="w-10 h-10 object-contain mx-auto" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{cT.moreSoon}</h3>
          <p className="text-sm text-gray-400 max-w-md mx-auto">{cT.moreSoonDesc}</p>
        </div>
      </div>

      {/* CTA generic */}
      <div className="text-center p-8 sm:p-10 rounded-2xl border mb-6 relative overflow-hidden group"
        style={{
          borderColor: 'rgba(201,168,76,0.25)',
          background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(15,23,42,0.5) 50%, rgba(10,15,30,0.6) 100%)'
        }}>
        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.2) 0%, transparent 60%)' }} />

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
            style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.08))', border: '1px solid rgba(201,168,76,0.3)' }}>
            <span className="text-2xl">🤔</span>
          </div>
          <p className="text-[#C9A84C] text-base font-semibold mb-2">{cT.noFav}</p>
          <p className="text-gray-400 text-sm mb-5 max-w-sm mx-auto">{cT.noFavDesc}</p>
          <Link href="/registro"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-[#030712] font-extrabold text-sm no-underline transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #B8943D)',
              boxShadow: '0 4px 24px rgba(201,168,76,0.35)'
            }}>
            <span>{cT.noFavBtn}</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
