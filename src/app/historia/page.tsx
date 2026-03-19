"use client";

import Link from "next/link";

const BG = "#060B14", BG2 = "#0F1D32", BG3 = "#0B1825", GOLD = "#c9a84c", GOLD2 = "#e8d48b", MID = "#8a94b0", DIM = "#6a7a9a", DARK = "#4a5570";

const WORLD_CUP_STATS = [
  { year: 1930, host: "Uruguay", champion: "Uruguay", runnerUp: "Argentina", teams: 13 },
  { year: 1934, host: "Italia", champion: "Italia", runnerUp: "Checoslovaquia", teams: 16 },
  { year: 1938, host: "Francia", champion: "Italia", runnerUp: "Hungría", teams: 15 },
  { year: 1950, host: "Brasil", champion: "Uruguay", runnerUp: "Brasil", teams: 13 },
  { year: 1954, host: "Suiza", champion: "Alemania", runnerUp: "Hungría", teams: 16 },
  { year: 1958, host: "Suecia", champion: "Brasil", runnerUp: "Suecia", teams: 16 },
  { year: 1962, host: "Chile", champion: "Brasil", runnerUp: "Checoslovaquia", teams: 16 },
  { year: 1966, host: "Inglaterra", champion: "Inglaterra", runnerUp: "Alemania", teams: 16 },
  { year: 1970, host: "México", champion: "Brasil", runnerUp: "Italia", teams: 16 },
  { year: 1974, host: "Alemania", champion: "Alemania", runnerUp: "Países Bajos", teams: 16 },
  { year: 1978, host: "Argentina", champion: "Argentina", runnerUp: "Países Bajos", teams: 16 },
  { year: 1982, host: "España", champion: "Italia", runnerUp: "Alemania", teams: 24 },
  { year: 1986, host: "México", champion: "Argentina", runnerUp: "Alemania", teams: 24 },
  { year: 1990, host: "Italia", champion: "Alemania", runnerUp: "Argentina", teams: 24 },
  { year: 1994, host: "Estados Unidos", champion: "Brasil", runnerUp: "Italia", teams: 24 },
  { year: 1998, host: "Francia", champion: "Francia", runnerUp: "Brasil", teams: 32 },
  { year: 2002, host: "Corea/Japón", champion: "Brasil", runnerUp: "Alemania", teams: 32 },
  { year: 2006, host: "Alemania", champion: "Italia", runnerUp: "Francia", teams: 32 },
  { year: 2010, host: "Sudáfrica", champion: "España", runnerUp: "Países Bajos", teams: 32 },
  { year: 2014, host: "Brasil", champion: "Alemania", runnerUp: "Argentina", teams: 32 },
  { year: 2018, host: "Rusia", champion: "Francia", runnerUp: "Croacia", teams: 32 },
  { year: 2022, host: "Qatar", champion: "Argentina", runnerUp: "Francia", teams: 32 },
];

const TOP_CHAMPIONS = [
  { country: "Brasil", titles: 5, years: "1958, 1962, 1970, 1994, 2002", flag: "🇧🇷" },
  { country: "Alemania", titles: 4, years: "1954, 1974, 1990, 2014", flag: "🇩🇪" },
  { country: "Italia", titles: 4, years: "1934, 1938, 1982, 2006", flag: "🇮🇹" },
  { country: "Argentina", titles: 3, years: "1978, 1986, 2022", flag: "🇦🇷" },
  { country: "Francia", titles: 2, years: "1998, 2018", flag: "🇫🇷" },
];

const RECORDS = [
  { title: "Más goles en Mundiales", holder: "Miroslav Klose", value: "16 goles", flag: "🇩🇪" },
  { title: "Más partidos jugados", holder: "Lothar Matthäus", value: "25 partidos", flag: "🇩🇪" },
  { title: "Más goles en un Mundial", holder: "Just Fontaine", value: "13 goles (1958)", flag: "🇫🇷" },
  { title: "Mundiales como jugador", holder: "Antonio Carbajal, Lothar Matthäus, Rafael Márquez", value: "5 ediciones", flag: "🌍" },
];

export default function HistoriaPage() {
  return (
    <div style={{ background: BG, color: "#fff", fontFamily: "'Outfit',sans-serif", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ padding: "80px 20px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
          <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Torneo</span>
          <h1 style={{ fontSize: "clamp(32px,6vw,52px)", fontWeight: 900, marginTop: 16, lineHeight: 1.1 }}>
            Historia de los <span style={{ color: GOLD }}>Mundiales</span>
          </h1>
          <p style={{ color: MID, marginTop: 20, maxWidth: 600, margin: "20px auto 0", lineHeight: 1.7, fontSize: 17 }}>
            Desde Uruguay 1930 hasta Qatar 2022. Revive la historia del torneo más importante del fútbol mundial.
          </p>
        </div>
      </section>

      {/* Top Champions */}
      <section style={{ padding: "60px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              Máximos <span style={{ color: GOLD }}>Campeones</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>
            {TOP_CHAMPIONS.map((team, i) => [
              <div key={i} style={{
                padding: 28, borderRadius: 16, background: BG2,
                border: "1px solid rgba(255,255,255,0.05)",
                textAlign: "center",
                borderTop: i === 0 ? `3px solid ${GOLD}` : undefined
              }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>{team.flag}</div>
                <div style={{ fontSize: 36, fontWeight: 800, color: GOLD }}>{team.titles}</div>
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{team.country}</div>
                <div style={{ fontSize: 12, color: DIM }}>{team.years}</div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Records */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              Récords <span style={{ color: GOLD }}>Históricos</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {RECORDS.map((record, i) => [
              <div key={i} style={{
                padding: 24, borderRadius: 16, background: BG2,
                border: "1px solid rgba(255,255,255,0.05)",
                display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap"
              }}>
                <div style={{ fontSize: 32 }}>{record.flag}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: DIM, marginBottom: 4 }}>{record.title}</div>
                  <div style={{ fontSize: 17, fontWeight: 700 }}>{record.holder}</div>
                </div>
                <div style={{
                  padding: "8px 16px", borderRadius: 8,
                  background: "rgba(201,168,76,0.1)",
                  color: GOLD, fontWeight: 700, fontSize: 14
                }}>
                  {record.value}
                </div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* All World Cups */}
      <section style={{ padding: "60px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              Todos los <span style={{ color: GOLD }}>Mundiales</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 16 }}>
            {WORLD_CUP_STATS.map((wc, i) => [
              <div key={i} style={{
                padding: 20, borderRadius: 12, background: BG2,
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ fontSize: 24, fontWeight: 800, color: GOLD }}>{wc.year}</span>
                  <span style={{ fontSize: 12, color: DIM }}>{wc.teams} equipos</span>
                </div>
                <div style={{ fontSize: 14, color: DIM, marginBottom: 8 }}>🏟️ {wc.host}</div>
                <div style={{ fontSize: 14 }}>
                  <span style={{ color: GOLD }}>🏆 {wc.champion}</span>
                  <span style={{ color: DARK, margin: "0 8px" }}>vs</span>
                  <span style={{ color: DIM }}>{wc.runnerUp}</span>
                </div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* 2026 Preview */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 64, marginBottom: 24 }}>🌍</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, marginBottom: 16 }}>
            Mundial <span style={{ color: GOLD }}>2026</span>
          </h2>
          <p style={{ color: MID, marginBottom: 32, fontSize: 16 }}>
            Estados Unidos, Canadá y México serán los anfitriones del Mundial más grande de la historia: 48 equipos, 104 partidos y 16 sedes.
          </p>
          <Link href="/selecciones" style={{
            padding: "16px 40px", borderRadius: 12,
            background: `linear-gradient(135deg,${GOLD},${GOLD2})`,
            color: BG, fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-block"
          }}>
            Ver selecciones participantes
          </Link>
        </div>
      </section>
    </div>
  );
}
