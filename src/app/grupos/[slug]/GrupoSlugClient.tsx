"use client";

import Link from 'next/link';
import SimuladorGrupos from '@/components/SimuladorGrupos';
import FlagImage from '@/components/FlagImage';
import TablaClasificacion from '@/components/TablaClasificacion';
import CalendarioGrupo from '@/components/CalendarioGrupo';
import { useLanguage } from '@/i18n/LanguageContext';
import type { Seleccion } from '@/data/selecciones';

const BG = "#030712";

const GROUP_COLORS: Record<string, string> = {
  a: '#22c55e', b: '#22c55e', c: '#eab308', d: '#22c55e', e: '#fbbf24',
  f: '#ef4444', g: '#a855f7', h: '#c9a84c', i: '#3b82f6', j: '#38bdf8',
  k: '#a855f7', l: '#94a3b8',
};

const VALID_GROUPS = ['a','b','c','d','e','f','g','h','i','j','k','l'];

function getGroupColor(letter: string): string {
  return GROUP_COLORS[letter.toLowerCase()] || '#c9a84c';
}

interface Props {
  letter: string;
  selecciones: Seleccion[];
}

export default function GrupoSlugClient({ letter, selecciones }: Props) {
  const { t } = useLanguage();
  const gT = t.grupos;
  const gsT = t.grupoSlug;
  const nav = t.nav;
  const ui = t.ui;

  const groupColor = getGroupColor(letter);
  const desc = gT.descriptions[letter as keyof typeof gT.descriptions] || '';
  const subtitle = gT.tags[letter as keyof typeof gT.tags] || '';

  return (
    <div style={{ background: BG, minHeight: '100vh' }}>
      {/* Top Color Bar */}
      <div style={{ height: '4px', background: groupColor }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ padding: '16px 20px 60px' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05)_0%,transparent_60%)]" />

        <div className="max-w-6xl mx-auto relative">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/grupos"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-400 border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {ui.volver}
            </Link>

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-white transition-colors">{nav.inicio}</Link>
              <span>/</span>
              <Link href="/grupos" className="hover:text-white transition-colors">{nav.grupos}</Link>
              <span>/</span>
              <span className="text-white font-medium">{ui.grupo} {letter}</span>
            </nav>
          </div>

          {/* Header */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Large Letter Box */}
            <div
              className="w-[140px] h-[140px] rounded-3xl flex items-center justify-center font-black text-7xl flex-shrink-0"
              style={{ background: `${groupColor}20`, color: groupColor, border: `2px solid ${groupColor}40` }}
            >
              {letter}
            </div>

            <div className="flex-1 pt-2">
              {/* Subtitle Tag */}
              <span
                className="inline-block px-3 py-1.5 rounded-full text-xs font-bold mb-4 tracking-wide"
                style={{ background: `${groupColor}15`, color: groupColor, border: `1px solid ${groupColor}30` }}
              >
                {subtitle.toUpperCase()}
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                {ui.grupo} {letter}
              </h1>

              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column - 2/3 */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sponsor Banner */}
            <a
              href="mailto:info@sprintmarkt.com?subject=Publicidad%20en%20ZonaMundial%20-%20P%C3%A1gina%20Grupo&body=Hola%20equipo%20de%20ZonaMundial%2C%0A%0AMe%20interesa%20contratar%20un%20espacio%20publicitario%20en%20la%20p%C3%A1gina%20de%20Grupo.%0A%0AEmpresa%3A%20%0AContacto%3A%20%0APresupuesto%20estimado%3A%20%0A%0AQuedo%20a%20la%20espera%20de%20vuestra%20propuesta.%0A%0AGracias."
              className="w-full rounded-3xl flex flex-col items-center justify-center border border-dashed border-[#C9A84C]/30 py-4 hover:bg-[#C9A84C]/5 hover:border-[#C9A84C]/50 transition-all group"
              style={{ background: '#0B0F1A' }}
            >
              <p className="text-[#C9A84C]/60 text-sm font-bold tracking-widest uppercase mb-2 group-hover:text-[#C9A84C]/80">Espacio disponible para publicidad</p>
              <p className="text-gray-500 text-sm group-hover:text-gray-400">Contacta con nosotros → info@sprintmarkt.com</p>
            </a>

            {/* Tabla de Clasificación */}
            <TablaClasificacion selecciones={selecciones} groupColor={groupColor} />

            {/* Calendario de Partidos */}
            <CalendarioGrupo grupo={letter} groupColor={groupColor} />

            {/* Simulador Card */}
            <div className="rounded-3xl border border-white/5 overflow-hidden" style={{ background: '#0B0F1A' }}>
              <div
                className="px-6 py-5 border-b border-white/5 flex items-center justify-between"
                style={{ background: `${groupColor}08` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${groupColor}20` }}>
                    <img src="/img/zonamundial-images/imagenes/logos para sustuir emojis/predicciones.png" alt="" className="w-6 h-6 object-contain" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">{gsT.simuladorGrupo} {letter}</h2>
                    <p className="text-sm text-gray-500">{gsT.simuladorDesc}</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${groupColor}15`, color: groupColor }}>
                  {gsT.simuladorLabel}
                </span>
              </div>
              <div className="p-6">
                <SimuladorGrupos initialGroup={letter} />
              </div>
            </div>
          </div>

          {/* Sidebar - 1/3 */}
          <div className="space-y-6">
            {/* Teams List */}
            <div className="rounded-3xl p-6 border border-white/5" style={{ background: '#0B0F1A' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${groupColor}15` }}>
                  <img src="/img/zonamundial-images/imagenes/logos para sustuir emojis/48 selecciones.png" alt="" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{gT.stats.equipos}</h3>
                  <p className="text-sm text-gray-500">{selecciones.length} {ui.selecciones.toLowerCase()}</p>
                </div>
              </div>

              <div className="space-y-2">
                {selecciones.map((team, idx) => (
                  <Link
                    key={team.slug}
                    href={`/selecciones/${team.slug}`}
                    className="flex items-center gap-3 p-3 rounded-2xl transition-all hover:bg-white/5 group"
                  >
                    <span className="text-gray-600 text-sm font-mono w-5">{idx + 1}</span>
                    <FlagImage
                      code={team.flagCode}
                      alt={team.nombre}
                      width={40}
                      className="w-8 h-6 object-cover rounded shadow-md group-hover:scale-110 transition-transform"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white truncate group-hover:text-gray-200 transition-colors">{team.nombre}</p>
                      <p className="text-xs text-gray-500">{team.confederacion}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {team.mejorResultado?.includes('Campeón') && <svg width="12" height="12" viewBox="0 0 24 24" fill="#facc15"><path d="M5 3h14l-1.5 6H20l-8 12v-8H7l2-10z"/></svg>}
                      {team.esAnfitrion && <svg width="12" height="12" viewBox="0 0 24 24" fill="#4ade80"><path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 3.5L18 12h-1.5v6h-9v-6H6L12 5.5z"/></svg>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="rounded-3xl p-6 border" style={{ background: `${groupColor}10`, borderColor: `${groupColor}30` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${groupColor}20` }}>
                <img src="/img/zonamundial-images/imagenes/logos para sustuir emojis/predicciones.png" alt="" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{gsT.quienGanara}</h3>
              <p className="text-sm text-gray-400 mb-5">{gsT.quienGanaraDesc}</p>
              <Link
                href="/registro"
                className="block w-full py-3.5 rounded-xl text-center font-bold transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: groupColor, color: '#030712' }}
              >
                {gsT.crearPrediccion}
              </Link>
            </div>

            {/* Other Groups */}
            <div className="rounded-3xl p-6 border border-white/5" style={{ background: '#0B0F1A' }}>
              <h3 className="text-lg font-bold text-white mb-4">{gsT.otrosGrupos}</h3>
              <div className="grid grid-cols-6 gap-2">
                {VALID_GROUPS.filter(g => g !== letter.toLowerCase()).map((g) => {
                  const gColor = getGroupColor(g);
                  return (
                    <Link
                      key={g}
                      href={`/grupos/grupo-${g}`}
                      className="aspect-square flex items-center justify-center rounded-xl font-bold text-sm transition-all hover:scale-105"
                      style={{ background: `${gColor}15`, color: gColor, border: `1px solid ${gColor}30` }}
                    >
                      {g.toUpperCase()}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
