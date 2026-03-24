// src/app/registro/page.tsx
// ZonaMundial.app — Página de pre-registro mejorada

"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FormularioRegistro from '@/components/FormularioRegistro';
import { FeatureIcon } from '@/components/FeatureIcon';
import { getTotalSeguidores, getCreadoresActivos } from '@/data/creadores';

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Metadata movido a metadata.ts aparte para compatibilidad con "use client"

const FEATURES = [
  { iconTitle: 'Predicciones', title: 'Predicciones', desc: '8 tipos por partido', color: '#22c55e' },
  { iconTitle: 'Fantasy', title: 'Fantasy', desc: 'Ligas privadas', color: '#f59e0b' },
  { iconTitle: 'IA Coach', title: 'IA Coach', desc: 'Análisis inteligente', color: '#8b5cf6' },
  { iconTitle: 'Streaming', title: 'Streaming', desc: 'Con creadores', color: '#ec4899' },
  { iconTitle: 'Rankings', title: 'Rankings', desc: 'En tiempo real', color: '#3b82f6' },
  { iconTitle: 'Trivia', title: 'Trivia', desc: 'Pon a prueba tus conocimientos', color: '#f97316' },
  { iconTitle: 'Modo Carrera', title: 'Modo Carrera', desc: 'Dirige tu selección', color: '#06b6d4' },
  { iconTitle: 'Chat', title: 'Chat', desc: 'Conversa con la comunidad', color: '#14b8a6' },
  { iconTitle: 'Logros', title: 'Logros', desc: 'Desbloquea recompensas', color: '#eab308' },
];

export default function RegistroPage() {
  const totalSeg = getTotalSeguidores();
  const numCreadores = getCreadoresActivos().length;
  const creadores = getCreadoresActivos();

  // Refs para animaciones
  const breadcrumbRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const creadoresRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline para animaciones de entrada del Hero
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      heroTl
        .from(breadcrumbRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.6,
        })
        .from(badgeRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6,
        }, '-=0.3')
        .from(titleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
        }, '-=0.4')
        .from(descRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6,
        }, '-=0.5')
        .from(statsRef.current?.children || [], {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        }, '-=0.3');

      // Animación del grid de features con ScrollTrigger
      if (featuresRef.current) {
        const featureCards = featuresRef.current.querySelectorAll('.feature-card');
        gsap.from(featureCards, {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
        });
      }

      // Animación de creadores destacados
      if (creadoresRef.current) {
        const creadorItems = creadoresRef.current.querySelectorAll('.creador-item');
        gsap.from(creadorItems, {
          scrollTrigger: {
            trigger: creadoresRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          x: -30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: 'power2.out',
        });
      }

      // Animación del formulario
      if (formRef.current) {
        gsap.from(formRef.current, {
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      }

      // Hover effects para botones y cards
      const buttons = document.querySelectorAll('.gsap-hover-btn');
      buttons.forEach((btn) => {
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
      });

      const cards = document.querySelectorAll('.gsap-hover-card');
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -5, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

          {/* Breadcrumb */}
          <nav ref={breadcrumbRef} className="text-xs text-gray-500 mb-8">
            <ol className="flex gap-2 items-center">
              <li><Link href="/" className="hover:text-[#C9A84C] transition-colors">Inicio</Link></li>
              <li className="text-gray-600">/</li>
              <li className="text-[#C9A84C] font-medium">Registro</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A84C]/30 text-xs font-bold text-[#C9A84C] tracking-wider uppercase mb-6 gsap-hover-btn cursor-pointer"
              style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.02))' }}>
              <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
              Gratis · Sin compromiso · 30 segundos
            </div>

            <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Tu Mundial.{' '}
              <span className="bg-gradient-to-r from-[#C9A84C] via-[#FDE68A] to-[#C9A84C] bg-clip-text text-transparent">
                Tus Reglas.
              </span>
            </h1>

            <p ref={descRef} className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Únete a la comunidad de {numCreadores} creadores con {totalSeg} seguidores. 
              Predicciones, fantasy y competición durante los 39 días del torneo 2026.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
              {[
                { value: totalSeg, label: 'Seguidores', icon: '/img/zonamundial-images/imagenes/logos para sustuir emojis/creadores.png' },
                { value: numCreadores.toString(), label: 'Creadores', icon: '/img/zonamundial-images/imagenes/logos para sustuir emojis/48 selecciones.png' },
                { value: '104', label: 'Partidos', icon: '/img/zonamundial-images/imagenes/logos para sustuir emojis/match center.png' },
                { value: '8', label: 'Modos', icon: '/img/zonamundial-images/imagenes/logos para sustuir emojis/fantasy.png' },
              ].map((stat, i) => (
                <div key={i} className="gsap-hover-card flex items-center gap-3 px-5 py-3 rounded-2xl border border-[#1E293B]/50 cursor-default"
                  style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.6), rgba(15,23,42,0.3))' }}>
                  <img src={stat.icon} alt="" className="w-10 h-10 object-contain" />
                  <div className="text-left">
                    <div className="text-xl sm:text-2xl font-black text-[#C9A84C]">{stat.value}</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* LEFT: Features & Creadores */}
            <div className="space-y-8">
              {/* Features Grid */}
              <div ref={featuresRef} className="p-6 sm:p-8 rounded-3xl border border-[#1E293B]/50"
                style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.5), rgba(15,23,42,0.2))', backdropFilter: 'blur(12px)' }}>
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <FeatureIcon title="Predicciones" size={32} /> Todo lo que incluye
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {FEATURES.map((f, i) => (
                    <div key={i} 
                      className="feature-card gsap-hover-card p-4 rounded-2xl border border-[#1E293B]/30 hover:border-[#C9A84C]/30 transition-all duration-300 group cursor-default"
                      style={{ background: 'rgba(11,24,37,0.5)' }}>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                        style={{ background: `${f.color}15`, border: `1px solid ${f.color}30` }}>
                        <FeatureIcon title={f.iconTitle} size={36} />
                      </div>
                      <div className="font-bold text-white text-sm mb-1">{f.title}</div>
                      <div className="text-xs text-gray-500">{f.desc}</div>
                    </div>
                  ))}
                </div>
                
                {/* And more... */}
                <div className="mt-6 p-4 rounded-2xl border border-[#C9A84C]/20 text-center"
                  style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02))' }}>
                  <p className="text-sm text-[#C9A84C] font-medium flex items-center justify-center gap-2">
                    <img src="/img/zonamundial-images/imagenes/logos para sustuir emojis/stories.png" alt="" className="w-5 h-5 object-contain" />
                    Y muchas más sorpresas que descubrirás dentro de la app...
                  </p>
                </div>
              </div>

              {/* Creadores Destacados */}
              <div ref={creadoresRef} className="p-6 sm:p-8 rounded-3xl border border-[#1E293B]/50"
                style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.5), rgba(15,23,42,0.2))', backdropFilter: 'blur(12px)' }}>
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <FeatureIcon title="Creadores" size={32} /> Creadores destacados
                </h2>
                <div className="space-y-3">
                  {creadores.slice(0, 4).map((c, i) => (
                    <Link key={c.slug} href={`/registro/${c.slug}`}
                      className="creador-item gsap-hover-card flex items-center gap-4 p-4 rounded-2xl border border-[#1E293B]/30 hover:border-[#C9A84C]/30 transition-all duration-300 group"
                      style={{ background: 'rgba(11,24,37,0.3)' }}>
                      <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 border-2"
                        style={{ borderColor: `${c.colorPrimario}40` }}>
                        <img src={c.imagen} alt={c.nombre} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-white text-sm truncate group-hover:text-[#C9A84C] transition-colors">{c.nombre}</div>
                        <div className="text-xs text-gray-500">{c.seguidores} seguidores</div>
                      </div>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                        style={{ background: `${c.colorPrimario}15` }}>
                        {c.emoji}
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/creadores" 
                  className="gsap-hover-btn block text-center mt-4 text-sm text-[#C9A84C] hover:underline">
                  Ver todos los creadores →
                </Link>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div ref={formRef} className="lg:sticky lg:top-24">
              <div className="p-6 sm:p-8 rounded-3xl border border-[#C9A84C]/20"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(11,24,37,0.6))', 
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 25px 50px -12px rgba(201,168,76,0.15), 0 0 0 1px rgba(201,168,76,0.1)'
                }}>
                
                {/* Form Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))', border: '1px solid rgba(201,168,76,0.3)' }}>
                    <img 
                      src="/img/zonamundial-images/imagenes/IMG-20260302-WA0016-removebg-preview.png" 
                      alt="ZonaMundial" 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Crea tu cuenta</h2>
                  <p className="text-sm text-gray-400">Regístrate gratis en menos de 1 minuto</p>
                </div>

                <FormularioRegistro />

                {/* Trust badges */}
                <div className="mt-6 pt-6 border-t border-[#1E293B]/50">
                  <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      100% Gratis
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      Seguro
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Sin spam
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Sponsor */}
              <div className="lg:hidden mt-6 h-[100px] rounded-2xl border border-dashed border-[#1E293B] flex items-center justify-center"
                data-sponsor-slot="registro-mobile">
                <span className="text-gray-600 text-xs">Espacio patrocinador</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
