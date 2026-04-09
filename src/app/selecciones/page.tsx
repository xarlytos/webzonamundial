'use client';

// src/app/selecciones/page.tsx
// ZonaMundial.app — Las 48 selecciones del Mundial 2026 (Diseño mejorado)

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SELECCIONES } from '@/data/selecciones';
import FlagImage from '@/components/FlagImage';
import { useLanguage } from '@/i18n/LanguageContext';

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const BG = "#060B14";
const BG2 = "#0F1D32";
const BG3 = "#0B1825";
const GOLD = "#c9a84c";
const GOLD2 = "#e8d48b";
const MID = "#8a94b0";

// Componente de tarjeta de selección
function SeleccionCard({ team, index = 0 }: { team: typeof SELECCIONES[0]; index?: number }) {
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
      className="group relative block gsap-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(201,168,76,0.15)]"
    >
      <div 
        className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${getConfederacionColor(team.confederacion)} 
          border border-white/5 hover:border-[#c9a84c]/50 transition-all duration-300 h-full`}
        style={{ background: BG3 }}
      >
        {/* Banner de confederación */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="p-3">
          {/* Header con bandera y badge */}
          <div className="flex items-start justify-between mb-2">
            <div className="relative">
              <FlagImage
                code={team.flagCode}
                alt={`Bandera de ${team.nombre}`}
                width={80}
                className="w-12 h-8 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="flex flex-col items-end gap-1">
              {team.esAnfitrion && (
                <span className="px-2 py-0.5 text-[9px] font-bold bg-[#c9a84c]/20 text-[#c9a84c] rounded-full border border-[#c9a84c]/30 flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 3.5L18 12h-1.5v6h-9v-6H6L12 5.5z"/></svg>
                </span>
              )}
              {team.esPlayoff && (
                <span className="px-2 py-0.5 text-[9px] font-bold bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30 flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></svg>
                </span>
              )}
            </div>
          </div>

          {/* Nombre y confederación */}
          <h3 className="font-bold text-white text-sm mb-0.5 group-hover:text-[#c9a84c] transition-colors truncate">
            {team.nombre}
          </h3>
          <p className="text-[11px] text-[#8a94b0] mb-2">{team.confederacion}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#060B14]/50 rounded-lg p-1.5 text-center gsap-stat">
              <p className="text-[9px] text-[#6a7a9a] uppercase tracking-wider">FIFA</p>
              <p className="text-base font-bold text-white">#{team.rankingFIFA || 'TBD'}</p>
            </div>
            <div className="bg-[#060B14]/50 rounded-lg p-1.5 text-center gsap-stat">
              <p className="text-[9px] text-[#6a7a9a] uppercase tracking-wider">Grupo</p>
              <p className="text-base font-bold text-[#c9a84c]">{team.grupo}</p>
            </div>
          </div>
        </div>

        {/* Hover indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </div>
    </Link>
  );
}

export default function SeleccionesIndex() {
  const { t } = useLanguage();
  const sT = t.selecciones;

  // Refs para animaciones
  const heroRef = useRef<HTMLElement>(null);
  const favoritosRef = useRef<HTMLElement>(null);
  const aSeguirRef = useRef<HTMLElement>(null);
  const confederacionesRef = useRef<HTMLElement>(null);
  const restoRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  
  // Selecciones destacadas (favoritos)
  const favoritos = SELECCIONES.filter(s => 
    ['argentina', 'francia', 'brasil', 'espana', 'inglaterra', 'portugal', 'alemania'].includes(s.slug)
  );

  // Selecciones a seguir
  const aSeguir = SELECCIONES.filter(s =>
    ['mexico', 'estados-unidos', 'canada', 'marruecos', 'noruega'].includes(s.slug)
  );

  // Resto de selecciones (las que no están en favoritos ni a seguir)
  const favoritosYSeguirSlugs = ['argentina', 'francia', 'brasil', 'espana', 'inglaterra', 'portugal', 'alemania', 'mexico', 'estados-unidos', 'canada', 'marruecos', 'noruega'];
  const resto = SELECCIONES.filter(s => !favoritosYSeguirSlugs.includes(s.slug)).sort((a, b) => (a.rankingFIFA || 999) - (b.rankingFIFA || 999));

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      if (heroRef.current) {
        gsap.fromTo('.gsap-hero-badge', 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        );
        
        gsap.fromTo('.gsap-hero-title', 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 }
        );
        
        gsap.fromTo('.gsap-hero-subtitle', 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
        );

        // Stats stagger
        gsap.fromTo('.gsap-stat-item', 
          { opacity: 0, y: 50, scale: 0.9 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.8, 
            ease: 'power3.out', 
            stagger: 0.1,
            delay: 0.3 
          }
        );
      }

      // Favoritos section
      if (favoritosRef.current) {
        gsap.fromTo('.gsap-favoritos-header',
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: favoritosRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );

        gsap.fromTo(favoritosRef.current.querySelectorAll('.gsap-card'),
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: favoritosRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // A Seguir section
      if (aSeguirRef.current) {
        gsap.fromTo('.gsap-seguir-header',
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: aSeguirRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );

        gsap.fromTo(aSeguirRef.current.querySelectorAll('.gsap-card'),
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: aSeguirRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // Confederaciones section
      if (confederacionesRef.current) {
        gsap.fromTo('.gsap-conf-header',
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: confederacionesRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );

        gsap.fromTo('.gsap-conf-item',
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: confederacionesRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // Resto de selecciones section
      if (restoRef.current) {
        gsap.fromTo('.gsap-resto-header',
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: restoRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );

        gsap.fromTo(restoRef.current.querySelectorAll('.gsap-card'),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.03,
            scrollTrigger: {
              trigger: restoRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // CTA section
      if (ctaRef.current) {
        gsap.fromTo('.gsap-cta-content',
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

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
      <section ref={heroRef} className="relative overflow-hidden" style={{ padding: '20px 20px 60px' }}>
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
        <img src="/img/zonamundial-images/imagenes/logos para sustuir emojis/match center.png" alt="" className="absolute top-10 left-10 w-28 h-28 opacity-[0.06] rotate-[-15deg] pointer-events-none" />
        <img src="/img/zonamundial-images/imagenes/logos para sustuir emojis/predicciones.png" alt="" className="absolute bottom-10 right-10 w-24 h-24 opacity-[0.06] rotate-[15deg] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#6a7a9a] mb-6">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">{t.ui.inicio}</Link>
            <span>/</span>
            <span className="text-[#c9a84c]">{t.ui.selecciones}</span>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="gsap-hero-badge inline-block px-3 py-1 rounded-full bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-bold tracking-wider uppercase mb-4 border border-[#c9a84c]/20" style={{ opacity: 0 }}>
              {sT.badge}
            </span>
            <h1 className="gsap-hero-title text-4xl md:text-6xl font-black text-white mb-4 leading-tight" style={{ opacity: 0 }}>
              {sT.title.split('48')[0]}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#e8d48b]">48</span>{sT.title.split('48')[1]}
            </h1>
            <p className="gsap-hero-subtitle text-lg text-[#8a94b0] mb-8" style={{ opacity: 0 }}>
              {sT.subtitle}
            </p>

            {/* Stats banner */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { value: '48',  label: sT.stats.selecciones,    icon: '/img/zonamundial-images/imagenes/logos para sustuir emojis/48 selecciones.png' },
                { value: '12',  label: sT.stats.grupos,          icon: '/img/zonamundial-images/imagenes/logos para sustuir emojis/los 12 grupos.png' },
                { value: '6',   label: sT.stats.confederaciones, icon: '/img/zonamundial-images/imagenes/logos para sustuir emojis/ranking.png' },
                { value: '104', label: sT.stats.partidos,        icon: '/img/zonamundial-images/imagenes/logos para sustuir emojis/match center.png' },
              ].map((stat) => (
                <div key={stat.label} className="gsap-stat-item flex items-center gap-3 px-4 py-2 bg-[#0F1D32] rounded-xl border border-white/5" style={{ opacity: 0 }}>
                  <img src={stat.icon} alt="" className="w-10 h-10 object-contain" />
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
      <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
        <a href="mailto:info@sprintmarkt.com?subject=Publicidad%20en%20ZonaMundial%20-%20P%C3%A1gina%20Selecciones&body=Hola%20equipo%20de%20ZonaMundial%2C%0A%0AMe%20interesa%20contratar%20un%20espacio%20publicitario%20en%20la%20p%C3%A1gina%20de%20Selecciones.%0A%0AEmpresa%3A%20%0AContacto%3A%20%0APresupuesto%20estimado%3A%20%0A%0AQuedo%20a%20la%20espera%20de%20vuestra%20propuesta.%0A%0AGracias." className="inline-block w-full bg-[#0B1825] border border-dashed border-[#C9A84C]/30 rounded-xl py-4 hover:bg-[#C9A84C]/5 hover:border-[#C9A84C]/50 transition-all group">
          <p className="text-[#C9A84C]/60 text-sm font-bold tracking-widest uppercase mb-2 group-hover:text-[#C9A84C]/80">Espacio disponible para publicidad</p>
          <p className="text-gray-500 text-sm group-hover:text-gray-400">Contacta con nosotros → info@sprintmarkt.com</p>
        </a>
      </div>

      {/* Favoritos al título */}
      <section ref={favoritosRef} className="max-w-6xl mx-auto px-4 mb-16">
        <div className="gsap-favoritos-header flex items-center gap-4 mb-6" style={{ opacity: 0 }}>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 flex items-center justify-center border border-[#c9a84c]/20">
            <img src="/img/imagenessilviu/balondefutbol.png" alt="" className="w-8 h-8 object-contain" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{sT.favoritos}</h2>
            <p className="text-sm text-[#6a7a9a]">{sT.favoritosSub}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {favoritos.map((team, index) => (
            <SeleccionCard key={team.slug} team={team} index={index} />
          ))}
        </div>
      </section>

      {/* Equipos a seguir */}
      <section ref={aSeguirRef} className="max-w-6xl mx-auto px-4 mb-16">
        <div className="gsap-seguir-header flex items-center gap-4 mb-6" style={{ opacity: 0 }}>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 flex items-center justify-center border border-blue-500/20">
            <img src="/img/zonamundial-images/imagenes/logos para sustuir emojis/micro-predicciones.png" alt="" className="w-8 h-8 object-contain" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{sT.aSeguir}</h2>
            <p className="text-sm text-[#6a7a9a]">{sT.aSeguirSub}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {aSeguir.map((team, index) => (
            <SeleccionCard key={team.slug} team={team} index={index} />
          ))}
        </div>
      </section>

      {/* Distribución por confederación */}
      <section ref={confederacionesRef} className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-[#0B1825] to-[#0F1D32] rounded-2xl p-6 md:p-8 border border-white/5">
          <div className="gsap-conf-header flex items-center gap-4 mb-8" style={{ opacity: 0 }}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/5 flex items-center justify-center border border-green-500/20">
              <img src="/img/zonamundial-images/imagenes/logos para sustuir emojis/48 selecciones.png" alt="" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{sT.confederaciones}</h2>
              <p className="text-sm text-[#6a7a9a]">{sT.confederacionesSub}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'UEFA', flag: '/img/zonamundial-images/imagenes/logos para sustuir emojis/ranking.png', plazas: 16, color: 'from-blue-500/20 to-blue-600/10' },
              { name: 'CONMEBOL', flag: '/img/zonamundial-images/imagenes/logos para sustuir emojis/los 12 grupos.png', plazas: '6+1', color: 'from-yellow-500/20 to-yellow-600/10' },
              { name: 'CONCACAF', flag: '/img/zonamundial-images/imagenes/logos para sustuir emojis/48 selecciones.png', plazas: 6, color: 'from-red-500/20 to-red-600/10' },
              { name: 'CAF', flag: '/img/zonamundial-images/imagenes/logos para sustuir emojis/match center.png', plazas: 9, color: 'from-green-500/20 to-green-600/10' },
              { name: 'AFC', flag: '/img/zonamundial-images/imagenes/logos para sustuir emojis/predicciones.png', plazas: 8, color: 'from-purple-500/20 to-purple-600/10' },
              { name: 'OFC', flag: '/img/zonamundial-images/imagenes/logos para sustuir emojis/historia.png', plazas: 1, color: 'from-cyan-500/20 to-cyan-600/10' },
            ].map((conf) => (
              <div key={conf.name} className={`gsap-conf-item bg-gradient-to-br ${conf.color} rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors text-center`} style={{ opacity: 0 }}>
                <img src={conf.flag} alt="" className="w-10 h-10 mx-auto mb-2 object-contain" />
                <p className="text-2xl font-black text-[#c9a84c] mb-1">{conf.plazas}</p>
                <p className="text-xs text-[#8a94b0]">{conf.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resto de selecciones */}
      <section ref={restoRef} className="max-w-6xl mx-auto px-4 mb-16">
        <div className="gsap-resto-header flex items-center gap-4 mb-6" style={{ opacity: 0 }}>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 flex items-center justify-center border border-emerald-500/20">
            <img src="/img/zonamundial-images/imagenes/logos para sustuir emojis/48 selecciones.png" alt="" className="w-8 h-8 object-contain" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{sT.restoSelecciones}</h2>
            <p className="text-sm text-[#6a7a9a]">{sT.restoSeleccionesSub}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {resto.map((team, index) => (
            <SeleccionCard key={team.slug} team={team} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section ref={ctaRef} className="max-w-5xl mx-auto px-4 mb-16">
        <div className="gsap-cta-content relative rounded-3xl border border-[#c9a84c]/20 overflow-hidden group" style={{ opacity: 0 }}>
          {/* Imagen de estadio como fondo */}
          <img
            src="/img/imagenessilviu/Estadio Atmosphere.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/85 to-[#060B14]/70"/>
          <div className="absolute inset-0 bg-gradient-to-r from-[#c9a84c]/10 via-transparent to-[#c9a84c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"/>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 md:p-12">
            {/* Imagen Únete Ahora */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-[#c9a84c]/20 blur-[60px] rounded-full"/>
                <img
                  src="/img/zonamundial-images/imagenes/logos para sustuir emojis/unete ahora.png"
                  alt="Únete ahora"
                  className="relative w-48 h-48 sm:w-56 sm:h-56 object-contain float-animation drop-shadow-[0_0_40px_rgba(201,168,76,0.4)]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Texto + CTA */}
            <div className="text-center lg:text-left flex-1">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                {sT.cta.title}
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl text-lg leading-relaxed">
                {sT.cta.desc}
              </p>
              <Link
                href="/registro"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#e8d48b] text-[#060B14] font-bold rounded-xl hover:shadow-[0_8px_32px_rgba(201,168,76,0.4)] transition-all hover:-translate-y-0.5"
              >
                {sT.cta.btn}
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor footer */}
      <div className="max-w-6xl mx-auto px-4 mb-8 text-center">
        <a href="mailto:info@sprintmarkt.com?subject=Publicidad%20en%20ZonaMundial%20-%20P%C3%A1gina%20Selecciones%20(footer)&body=Hola%20equipo%20de%20ZonaMundial%2C%0A%0AMe%20interesa%20contratar%20un%20espacio%20publicitario%20en%20la%20p%C3%A1gina%20de%20Selecciones%20(footer).%0A%0AEmpresa%3A%20%0AContacto%3A%20%0APresupuesto%20estimado%3A%20%0A%0AQuedo%20a%20la%20espera%20de%20vuestra%20propuesta.%0A%0AGracias." className="inline-block w-full bg-[#0B1825] border border-dashed border-[#C9A84C]/30 rounded-xl py-4 hover:bg-[#C9A84C]/5 hover:border-[#C9A84C]/50 transition-all group">
          <p className="text-[#C9A84C]/60 text-sm font-bold tracking-widest uppercase mb-2 group-hover:text-[#C9A84C]/80">Espacio disponible para publicidad</p>
          <p className="text-gray-500 text-sm group-hover:text-gray-400">Contacta con nosotros → info@sprintmarkt.com</p>
        </a>
      </div>
    </div>
  );
}
