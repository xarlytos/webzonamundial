// src/app/registro/page.tsx
// ZonaMundial.app — Página de pre-registro

"use client";

import Link from 'next/link';
import FormularioRegistro from '@/components/FormularioRegistro';
import { FeatureIcon } from '@/components/FeatureIcon';
import { getTotalSeguidores, getCreadoresActivos } from '@/data/creadores';
import { useLanguage } from '@/i18n/LanguageContext';

const IMG = "/img/zonamundial-images/imagenes/logos para sustuir emojis";

export default function RegistroPage() {
  const { t } = useLanguage();
  const rT = t.registro;
  const totalSeg = getTotalSeguidores();
  const numCreadores = getCreadoresActivos().length;
  const creadores = getCreadoresActivos();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-0 pb-8 sm:pb-12">

        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 mb-6">
          <ol className="flex gap-2 items-center">
            <li><Link href="/" className="hover:text-[#C9A84C] transition-colors">{t.nav.inicio}</Link></li>
            <li className="text-gray-600">/</li>
            <li className="text-[#C9A84C] font-medium">{rT.formTitle}</li>
          </ol>
        </nav>

        {/* Hero compact */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A84C]/30 text-xs font-bold text-[#C9A84C] tracking-wider uppercase mb-5"
            style={{ background: 'rgba(201,168,76,0.05)' }}>
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            {rT.badge}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">
            {rT.title1}{' '}
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#FDE68A] to-[#C9A84C] bg-clip-text text-transparent">
              {rT.title2}
            </span>
          </h1>

          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            {rT.subtitle.replace('{n}', numCreadores.toString()).replace('{s}', totalSeg)}
          </p>
        </div>

        {/* Main layout: Form (left) + Benefits (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">

          {/* LEFT: Form (3/5) */}
          <div className="lg:col-span-3 order-1">
            <div className="p-7 sm:p-9 rounded-3xl border border-[#C9A84C]/20"
              style={{
                background: 'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(11,24,37,0.6))',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 25px 50px -12px rgba(201,168,76,0.1)'
              }}>

              {/* Form Header */}
              <div className="flex items-center gap-4 mb-7">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))', border: '1px solid rgba(201,168,76,0.3)' }}>
                  <img
                    src="/img/zonamundial-images/imagenes/IMG-20260302-WA0016-removebg-preview.png"
                    alt="ZonaMundial"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{rT.formTitle}</h2>
                  <p className="text-sm text-gray-400">{rT.formSub}</p>
                </div>
              </div>

              <FormularioRegistro />

              {/* Trust badges */}
              <div className="mt-6 pt-5 border-t border-[#1E293B]/50">
                <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {rT.trust.free}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    {rT.trust.secure}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {rT.trust.noSpam}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Benefits sidebar (2/5) */}
          <div className="lg:col-span-2 order-2 space-y-6">

            {/* What's included - compact */}
            <div className="p-6 rounded-2xl border border-[#1E293B]/50"
              style={{ background: 'rgba(15,23,42,0.4)', backdropFilter: 'blur(12px)' }}>
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <img src={`${IMG}/predicciones.png`} alt="" className="w-6 h-6 object-contain" />
                {rT.includes}
              </h3>
              <div className="space-y-3">
                {rT.features.slice(0, 6).map((f: { iconTitle: string; title: string; desc: string }, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <FeatureIcon title={f.iconTitle} size={28} />
                    <div>
                      <p className="text-sm font-semibold text-white">{f.title}</p>
                      <p className="text-xs text-gray-500">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#C9A84C] mt-4 flex items-center gap-1.5">
                <img src={`${IMG}/stories.png`} alt="" className="w-4 h-4 object-contain" />
                {rT.surprises}
              </p>
            </div>

            {/* Top Creators compact */}
            <div className="p-6 rounded-2xl border border-[#1E293B]/50"
              style={{ background: 'rgba(15,23,42,0.4)', backdropFilter: 'blur(12px)' }}>
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <img src={`${IMG}/creadores.png`} alt="" className="w-6 h-6 object-contain" />
                {rT.featuredCreators}
              </h3>
              <div className="space-y-3">
                {creadores.slice(0, 4).map((c) => (
                  <Link key={c.slug} href={`/registro/${c.slug}`}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all group">
                    <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 border"
                      style={{ borderColor: `${c.colorPrimario}40` }}>
                      <img src={c.imagen} alt={c.nombre} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-white text-sm group-hover:text-[#C9A84C] transition-colors truncate">{c.nombre}</p>
                      <p className="text-xs text-gray-500">{c.seguidores} · {c.plataformaPrincipal}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/creadores"
                className="block text-center mt-4 text-xs font-medium text-[#C9A84C] hover:text-[#E8D48B] transition-colors">
                {rT.verCreadores}
              </Link>
            </div>

            {/* Stats mini */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: '104', label: rT.stats.partidos, icon: `${IMG}/match center.png` },
                { value: '8', label: rT.stats.modos, icon: `${IMG}/fantasy.png` },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-[#1E293B]/50"
                  style={{ background: 'rgba(15,23,42,0.4)' }}>
                  <img src={stat.icon} alt="" className="w-8 h-8 object-contain" />
                  <div>
                    <p className="text-xl font-black text-[#C9A84C]">{stat.value}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Sponsor */}
            <a href="mailto:info@sprintmarkt.com?subject=Publicidad%20en%20ZonaMundial%20-%20P%C3%A1gina%20Registro&body=Hola%20equipo%20de%20ZonaMundial%2C%0A%0AMe%20interesa%20contratar%20un%20espacio%20publicitario%20en%20la%20p%C3%A1gina%20de%20Registro.%0A%0AEmpresa%3A%20%0AContacto%3A%20%0APresupuesto%20estimado%3A%20%0A%0AQuedo%20a%20la%20espera%20de%20vuestra%20propuesta.%0A%0AGracias." className="block rounded-2xl border border-dashed border-[#C9A84C]/30 bg-[#0B1825] py-4 text-center hover:bg-[#C9A84C]/5 hover:border-[#C9A84C]/50 transition-all group">
              <p className="text-[#C9A84C]/60 text-sm font-bold tracking-widest uppercase mb-2 group-hover:text-[#C9A84C]/80">Espacio disponible para publicidad</p>
              <p className="text-gray-500 text-sm group-hover:text-gray-400">info@sprintmarkt.com</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
