// src/app/registro/page.tsx
// ZonaMundial.app — Página de pre-registro genérica

import { Metadata } from 'next';
import Link from 'next/link';
import FormularioRegistro from '@/components/FormularioRegistro';
import { getTotalSeguidores, getCreadoresActivos } from '@/data/creadores';

export const metadata: Metadata = {
  title: 'Regístrate Gratis — Predicciones, Fantasy y Más | ZonaMundial',
  description: 'Únete a ZonaMundial: predicciones, fantasy, streaming con creadores y competición social durante el torneo de selecciones 2026. Regístrate gratis con tu creador favorito.',
  keywords: ['registro zonamundial', 'predicciones mundial 2026 gratis', 'fantasy mundial 2026'],
  openGraph: {
    title: 'Regístrate Gratis en ZonaMundial',
    description: 'Predicciones, Fantasy, IA Coach y más. Elige tu creador favorito y compite durante el torneo 2026.',
    url: 'https://zonamundial.app/registro',
  },
  robots: { index: true, follow: true },
};

export default function RegistroPage() {
  const totalSeg = getTotalSeguidores();
  const numCreadores = getCreadoresActivos().length;

  return (
    <>
      <div className="min-h-screen relative">
        {/* Ambient */}
        <div className="fixed inset-0 z-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 600px 400px at 50% 0%, rgba(201,168,76,0.04) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

          {/* Breadcrumb */}
          <nav className="text-xs text-gray-500 mb-6">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-[#C9A84C]">Inicio</Link></li>
              <li>/</li>
              <li className="text-[#C9A84C]">Registro</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* LEFT: Info */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-8">
                <div className="inline-block px-3 py-1 rounded-full border border-[#C9A84C33] text-[10px] font-bold text-[#C9A84C] tracking-wider uppercase mb-4"
                  style={{ background: 'rgba(201,168,76,0.06)' }}>
                  Gratis · Sin compromiso
                </div>

                <h1 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
                  Tu Mundial.{' '}
                  <span style={{ background: 'linear-gradient(135deg, #C9A84C, #FDE68A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Tus Reglas.
                  </span>
                </h1>

                <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
                  Elige tu creador favorito, únete a su comunidad y compite durante los 39 días del torneo de selecciones 2026.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="p-3 rounded-xl border border-[#1E293B]" style={{ background: 'rgba(15,23,42,0.5)' }}>
                    <div className="text-lg sm:text-xl font-black text-[#C9A84C]">{totalSeg}</div>
                    <div className="text-[10px] text-gray-500">Seguidores</div>
                  </div>
                  <div className="p-3 rounded-xl border border-[#1E293B]" style={{ background: 'rgba(15,23,42,0.5)' }}>
                    <div className="text-lg sm:text-xl font-black text-white">{numCreadores}</div>
                    <div className="text-[10px] text-gray-500">Creadores</div>
                  </div>
                  <div className="p-3 rounded-xl border border-[#1E293B]" style={{ background: 'rgba(15,23,42,0.5)' }}>
                    <div className="text-lg sm:text-xl font-black text-white">104</div>
                    <div className="text-[10px] text-gray-500">Partidos</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2.5 hidden sm:block">
                  {[
                    { icon: '⚽', text: '8 tipos de predicciones por partido' },
                    { icon: '🏆', text: 'Fantasy de selecciones con ligas privadas' },
                    { icon: '🤖', text: 'IA Coach que analiza tus predicciones' },
                    { icon: '📺', text: 'Streaming con tu creador favorito' },
                    { icon: '📊', text: 'Rankings en tiempo real' },
                  ].map(f => (
                    <div key={f.text} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="text-lg">{f.icon}</span>
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* Sponsor slot */}
                <div className="hidden lg:flex mt-8 h-[250px] rounded-xl border border-dashed border-[#1E293B] items-center justify-center"
                  data-sponsor-slot="registro-sidebar">
                  <span className="text-[#1E293B] text-xs">Espacio patrocinador</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="lg:col-span-3">
              <div className="p-5 sm:p-8 rounded-2xl border border-[#1E293B]"
                style={{ background: 'rgba(15,23,42,0.5)', backdropFilter: 'blur(12px)' }}>
                <h2 className="text-lg sm:text-xl font-bold text-white mb-1">Crea tu cuenta</h2>
                <p className="text-xs sm:text-sm text-gray-500 mb-6">Regístrate en menos de 1 minuto</p>
                <FormularioRegistro />
              </div>

              {/* Sponsor mobile */}
              <div className="lg:hidden mt-6 h-[90px] rounded-xl border border-dashed border-[#1E293B] flex items-center justify-center"
                data-sponsor-slot="registro-mobile">
                <span className="text-[#1E293B] text-xs">Espacio patrocinador</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
