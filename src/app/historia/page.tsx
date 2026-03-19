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

const ICONIC_MOMENTS = [
  { year: 1930, title: "Uruguay", description: "El primero, 13 equipos", emoji: "🥇" },
  { year: 1950, title: "El Maracanazo", description: "Brasil 1-2 Uruguay, 200,000 personas en silencio", emoji: "🏟️" },
  { year: 1970, title: "Brasil de Pelé", description: "Mejor equipo de la historia", emoji: "👑" },
  { year: 1986, title: "La mano de Dios", description: "Maradona vs Inglaterra", emoji: "✋" },
  { year: 1994, title: "Escándalo en USA", description: "Escobar autogol, Romario campeón", emoji: "🇺🇸" },
  { year: 2002, title: "Corea-Japón", description: "Corea semifinalista, Brasil pentacampeón", emoji: "🌏" },
  { year: 2010, title: "España campeona", description: "El gol de Iniesta en la prórroga para la primera Copa de España", emoji: "🏆" },
  { year: 2022, title: "Messi se consagra", description: "Argentina campeona, Mbappé hat-trick", emoji: "🐐" },
];

const RECORDS = [
  { title: "Más títulos", holder: "Brasil", value: "5", flag: "🇧🇷" },
  { title: "Más partidos jugados", holder: "Lothar Matthäus", value: "25", flag: "🇩🇪" },
  { title: "Más goles", holder: "Miroslav Klose", value: "16 goles", flag: "🇩🇪" },
  { title: "Más goles en un torneo", holder: "Just Fontaine", value: "13 en 1958", flag: "🇫🇷" },
  { title: "Jugador más joven", holder: "Norman Whiteside", value: "17 años", flag: "🇬🇧" },
  { title: "Jugador más viejo", holder: "Essam El-Hadary", value: "45 años, Egipto 2018", flag: "🇪🇬" },
];

const HOST_HISTORY = [
  { country: "México", times: 3, years: "1970, 1986, 2026", emoji: "🇲🇽", description: "Primer país en organizar tres Mundiales" },
  { country: "Estados Unidos", times: 2, years: "1994, 2026", emoji: "🇺🇸", description: "Récord de asistencia en 1994 con 3.6M de espectadores" },
  { country: "Canadá", times: 1, years: "2026", emoji: "🇨🇦", description: "Primera vez como anfitrión en la historia" },
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
            Momentos que hicieron <span style={{ color: GOLD }}>historia</span> 📜
          </h1>
          <p style={{ color: MID, marginTop: 20, maxWidth: 600, margin: "20px auto 0", lineHeight: 1.7, fontSize: 17 }}>
            Desde Uruguay 1930 hasta Qatar 2022. Revive la historia del torneo más importante del fútbol mundial.
          </p>
        </div>
      </section>

      {/* Iconic Moments */}
      <section style={{ padding: "60px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              🏆 Momentos <span style={{ color: GOLD }}>icónicos</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            {ICONIC_MOMENTS.map((moment, i) => (
              <div key={i} style={{
                padding: 24, borderRadius: 16, background: BG2,
                border: "1px solid rgba(255,255,255,0.05)",
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: i < 3 ? `linear-gradient(90deg,${GOLD},${GOLD2})` : "rgba(201,168,76,0.3)" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                  <span style={{ fontSize: 40 }}>{moment.emoji}</span>
                  <div>
                    <span style={{ fontSize: 14, color: GOLD, fontWeight: 700 }}>{moment.year}</span>
                    <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{moment.title}</h3>
                  </div>
                </div>
                <p style={{ color: MID, fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                  {moment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Records */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              🏅 Récords <span style={{ color: GOLD }}>impresionantes</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {RECORDS.map((record, i) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Hosts 2026 History */}
      <section style={{ padding: "60px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              🇲🇽🇺🇸🇨🇦 Historia de las <span style={{ color: GOLD }}>sedes 2026</span>
            </h2>
            <p style={{ color: MID, marginTop: 16, maxWidth: 600, margin: "16px auto 0", fontSize: 16 }}>
              Por primera vez en la historia, tres naciones compartirán la organización del Mundial
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            {HOST_HISTORY.map((host, i) => (
              <div key={i} style={{
                padding: 28, borderRadius: 16, background: BG2,
                border: "1px solid rgba(255,255,255,0.05)",
                textAlign: "center"
              }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{host.emoji}</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>{host.country}</h3>
                <div style={{ fontSize: 36, fontWeight: 800, color: GOLD, marginBottom: 8 }}>{host.times}x</div>
                <div style={{ fontSize: 14, color: DIM, marginBottom: 12 }}>{host.years}</div>
                <p style={{ color: MID, fontSize: 14, lineHeight: 1.5, margin: 0 }}>{host.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All World Cups */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              Todos los <span style={{ color: GOLD }}>Mundiales</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 16 }}>
            {WORLD_CUP_STATS.map((wc, i) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Trivia */}
      <section style={{ padding: "80px 20px", textAlign: "center", background: BG3 }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 64, marginBottom: 24 }}>🎯</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, marginBottom: 16 }}>
            ¿Cuánto sabes de <span style={{ color: GOLD }}>historia</span>?
          </h2>
          <p style={{ color: MID, marginBottom: 32, fontSize: 16 }}>
            Pon a prueba tus conocimientos con nuestra trivia de la historia de los Mundiales
          </p>
          <Link href="/trivia" style={{
            padding: "16px 40px", borderRadius: 12,
            background: `linear-gradient(135deg,${GOLD},${GOLD2})`,
            color: BG, fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-block"
          }}>
            Juega Trivia →
          </Link>
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
