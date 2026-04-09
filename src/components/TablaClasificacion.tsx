"use client";

import { Seleccion } from "@/data/selecciones";
import { useLanguage } from "@/i18n/LanguageContext";
import FlagImage from "@/components/FlagImage";

interface TablaClasificacionProps {
  selecciones: Seleccion[];
  groupColor: string;
}

export default function TablaClasificacion({ selecciones, groupColor }: TablaClasificacionProps) {
  const { t } = useLanguage();
  const isEN = t.nav.selecciones === "48 Teams";

  const labels = isEN
    ? {
        title: "Standings",
        team: "Team",
        pj: "MP",
        g: "W",
        e: "D",
        p: "L",
        gf: "GF",
        ga: "GA",
        gd: "GD",
        pts: "Pts",
      }
    : {
        title: "Tabla de clasificación",
        team: "Equipo",
        pj: "PJ",
        g: "G",
        e: "E",
        p: "P",
        gf: "GF",
        ga: "GA",
        gd: "GD",
        pts: "Pts",
      };

  // Sort teams by FIFA ranking (ascending = better ranked first)
  const sorted = [...selecciones].sort(
    (a, b) => (a.rankingFIFA ?? 999) - (b.rankingFIFA ?? 999)
  );

  // Position border colors: 1-2 green (qualify), 3 yellow (possible best 3rd), 4 red/gray (eliminated)
  const positionBorderColor = (pos: number) => {
    if (pos <= 2) return "border-l-green-500";
    if (pos === 3) return "border-l-yellow-500";
    return "border-l-red-800";
  };

  return (
    <div className="rounded-xl border border-white/5 bg-[#0B0F1A] overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <svg
          className="w-5 h-5 shrink-0"
          style={{ color: groupColor }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h18M3 6h18M3 14h18M3 18h18"
          />
        </svg>
        <h3 className="text-white font-semibold text-base">{labels.title}</h3>
      </div>

      {/* Table wrapper — scrollable on mobile */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[540px] text-sm">
          <thead>
            <tr className="text-[#c9a84c] uppercase text-[11px] tracking-wider border-b border-white/5">
              <th className="py-2 px-3 text-center w-8">#</th>
              <th className="py-2 px-3 text-left">{labels.team}</th>
              <th className="py-2 px-2 text-center">{labels.pj}</th>
              <th className="py-2 px-2 text-center">{labels.g}</th>
              <th className="py-2 px-2 text-center">{labels.e}</th>
              <th className="py-2 px-2 text-center">{labels.p}</th>
              <th className="py-2 px-2 text-center">{labels.gf}</th>
              <th className="py-2 px-2 text-center">{labels.ga}</th>
              <th className="py-2 px-2 text-center">{labels.gd}</th>
              <th className="py-2 px-2 text-center font-bold">{labels.pts}</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((team, idx) => {
              const pos = idx + 1;
              return (
                <tr
                  key={team.slug}
                  className={`border-b border-white/5 last:border-b-0 hover:bg-white/[0.03] transition-colors border-l-4 ${positionBorderColor(pos)}`}
                >
                  <td className="py-2.5 px-3 text-center text-white/50 text-xs font-medium">
                    {pos}
                  </td>
                  <td className="py-2.5 px-3">
                    <div className="flex items-center gap-2">
                      <FlagImage
                        code={team.flagCode}
                        alt={team.nombre}
                        width={24}
                        className="rounded-sm shadow-sm"
                      />
                      <span className="text-white text-sm font-medium truncate">
                        {team.nombre}
                      </span>
                    </div>
                  </td>
                  <td className="py-2.5 px-2 text-center text-white/60">0</td>
                  <td className="py-2.5 px-2 text-center text-white/60">0</td>
                  <td className="py-2.5 px-2 text-center text-white/60">0</td>
                  <td className="py-2.5 px-2 text-center text-white/60">0</td>
                  <td className="py-2.5 px-2 text-center text-white/60">0</td>
                  <td className="py-2.5 px-2 text-center text-white/60">0</td>
                  <td className="py-2.5 px-2 text-center text-white/60">0</td>
                  <td className="py-2.5 px-2 text-center text-white font-bold">0</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
