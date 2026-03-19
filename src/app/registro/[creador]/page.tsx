// src/app/registro/[creador]/page.tsx
// ZonaMundial.app — Landing personalizada por creador (white-label)
// Esta es la URL que el creador pone en su bio de IG/YouTube/TikTok

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCreadorBySlug, getAllCreadorSlugs } from '@/data/creadores';
import FormularioRegistro from '@/components/FormularioRegistro';

export async function generateStaticParams() {
  return getAllCreadorSlugs().map(creador => ({ creador }));
}

export async function generateMetadata({ params }: { params: { creador: string } }): Promise<Metadata> {
  const c = getCreadorBySlug(params.creador);
  if (!c) return { title: 'Creador no encontrado | ZonaMundial' };
  return {
    title: `Únete al Equipo de ${c.nombre} — ZonaMundial 2026`,
    description: `${c.nombre} te invita a unirte a ZonaMundial. Predicciones, Fantasy, Streaming y más durante el torneo de selecciones 2026. Regístrate gratis.`,
    keywords: [`${c.nombre.toLowerCase()} zonamundial`, `${c.nombre.toLowerCase()} mundial 2026`, 'predicciones mundial gratis'],
    openGraph: {
      title: `Únete al Equipo de ${c.nombre} — ZonaMundial`,
      description: `${c.seguidores} fans ya siguen a ${c.nombre}. Únete y compite durante el torneo 2026.`,
      url: `https://zonamundial.app/registro/${c.slug}`,
      images: [{ url: `https://zonamundial.app/api/og/creador?c=${c.slug}`, width: 1200, height: 630 }],
    },
    robots: { index: true, follow: true },
  };
}

export default function CreadorRegistroPage({ params }: { params: { creador: string } }) {
  const c = getCreadorBySlug(params.creador);
  if (!c) notFound();

  return (
    <div className="min-h-screen relative">
      {/* Creator-themed ambient */}
      <div className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 600px 400px at 30% 0%, ${c.colorPrimario}08 0%, transparent 70%),
            radial-gradient(ellipse 400px 600px at 70% 100%, ${c.colorSecundario}05 0%, transparent 50%)
          `,
        }} />
      {/* Top accent line with creator color */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-10"
        style={{ background: `linear-gradient(90deg, transparent, ${c.colorPrimario}, transparent)` }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 mb-6">
          <ol className="flex gap-2 flex-wrap">
            <li><Link href="/" className="hover:text-[#C9A84C]">Inicio</Link></li>
            <li>/</li>
            <li><Link href="/registro" className="hover:text-[#C9A84C]">Registro</Link></li>
            <li>/</li>
            <li style={{ color: c.colorPrimario }}>{c.nombre}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* LEFT: Creator Hero */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-8">

              {/* Creator card */}
              <div className="p-5 sm:p-6 rounded-2xl border mb-6"
                style={{
                  borderColor: c.colorPrimario + '33',
                  background: `linear-gradient(135deg, ${c.colorPrimario}08, rgba(15,23,42,0.5))`,
                }}>

                {/* Avatar placeholder + name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl"
                    style={{ background: `linear-gradient(135deg, ${c.colorPrimario}22, ${c.colorSecundario}11)`, border: `2px solid ${c.colorPrimario}44` }}>
                    {c.emoji}
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-white">{c.nombre}</h1>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-bold" style={{ color: c.colorPrimario }}>{c.seguidores}</span>
                      <span className="text-xs text-gray-500">en {c.plataformaPrincipal}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-4 leading-relaxed">{c.bio}</p>

                {/* Live counter */}
                <div className="p-3 rounded-xl text-center"
                  style={{ background: `${c.colorPrimario}0A`, border: `1px solid ${c.colorPrimario}22` }}>
                  <div className="text-xs text-gray-400 mb-1">Fans registrados en el equipo</div>
                  <div className="text-2xl sm:text-3xl font-black" style={{ color: c.colorPrimario }}>
                    {/* This would be dynamic from API */}
                    —
                  </div>
                  <div className="text-[10px] text-gray-500 mt-1">Sé de los primeros en unirte</div>
                </div>
              </div>

              {/* What you get */}
              <div className="space-y-2 hidden sm:block">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Al unirte al equipo de {c.nombre}:</p>
                {[
                  'Acceso a la comunidad exclusiva del creador',
                  'Predicciones y ranking dentro de su liga',
                  'Streaming y watch parties en directo',
                  'Contenido exclusivo durante el torneo',
                  'Competir con otros fans del creador',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-xs" style={{ color: c.colorPrimario }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Sponsor slot */}
              <div className="hidden lg:flex mt-6 h-[250px] rounded-xl border border-dashed items-center justify-center"
                style={{ borderColor: '#1E293B' }}
                data-sponsor-slot="registro-creador-sidebar" data-creador={c.slug}>
                <span className="text-[#1E293B] text-xs">Espacio patrocinador</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-3">
            <div className="p-5 sm:p-8 rounded-2xl border"
              style={{
                borderColor: c.colorPrimario + '22',
                background: 'rgba(15,23,42,0.5)',
                backdropFilter: 'blur(12px)',
              }}>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-lg sm:text-xl font-bold text-white">Únete al equipo</h2>
                <span className="text-lg">{c.emoji}</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mb-6">
                Regístrate gratis y empieza a competir con la comunidad de {c.nombre}
              </p>

              <FormularioRegistro creadorPreseleccionado={c.slug} refSource={`creador-${c.slug}`} />
            </div>

            {/* Sponsor mobile */}
            <div className="lg:hidden mt-6 h-[90px] rounded-xl border border-dashed border-[#1E293B] flex items-center justify-center"
              data-sponsor-slot="registro-creador-mobile" data-creador={c.slug}>
              <span className="text-[#1E293B] text-xs">Espacio patrocinador</span>
            </div>

            {/* Share section */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl border border-[#1E293B] text-center"
              style={{ background: 'rgba(15,23,42,0.3)' }}>
              <p className="text-xs text-gray-400 mb-3">¿Conoces a alguien que le encante el fútbol?</p>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`Únete al equipo de ${c.nombre} en ZonaMundial para el torneo 2026 🏆⚽ https://zonamundial.app/registro/${c.slug}`)}`}
                target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-bold text-sm no-underline transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 4px 16px rgba(37,211,102,0.25)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.914.914l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.826-6.326-2.209l-.362-.29-3.053 1.024 1.024-3.053-.29-.362A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                Invitar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
