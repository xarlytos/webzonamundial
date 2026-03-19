"use client";

import Link from "next/link";

const BG = "#060B14", BG2 = "#0F1D32", BG3 = "#0B1825", GOLD = "#c9a84c", GOLD2 = "#e8d48b", MID = "#8a94b0", DIM = "#6a7a9a", DARK = "#4a5570";

const FORMAT_2026 = {
  teams: 48,
  groups: 12,
  matches: 104,
  venues: 16,
  days: 39,
};

const PHASES = [
  {
    name: "Fase de Grupos",
    desc: "12 grupos de 4 equipos. Los 2 primeros de cada grupo y los 8 mejores terceros avanzan.",
    matches: 72,
    qualified: 32,
  },
  {
    name: "32avos de Final",
    desc: "Nueva ronda con los 8 mejores terceros contra los segundos de grupo.",
    matches: 16,
    qualified: 16,
  },
  {
    name: "Octavos de Final",
    desc: "Los 16 equipos clasificados se enfrentan en eliminación directa.",
    matches: 8,
    qualified: 8,
  },
  {
    name: "Cuartos de Final",
    desc: "Los 8 mejores equipos compiten por un lugar en semifinales.",
    matches: 4,
    qualified: 4,
  },
  {
    name: "Semifinales",
    desc: "Las 4 potencias restantes buscan el pase a la gran final.",
    matches: 2,
    qualified: 2,
  },
  {
    name: "Final",
    desc: "El partido por el título más codiciado del fútbol mundial.",
    matches: 1,
    qualified: 1,
  },
];

const VENUES = [
  { city: "Ciudad de México", country: "México", stadium: "Estadio Azteca", capacity: "87,523" },
  { city: "Nueva York/NJ", country: "Estados Unidos", stadium: "MetLife Stadium", capacity: "82,500" },
  { city: "Los Ángeles", country: "Estados Unidos", stadium: "SoFi Stadium", capacity: "70,240" },
  { city: "Dallas", country: "Estados Unidos", stadium: "AT&T Stadium", capacity: "80,000" },
  { city: "Miami", country: "Estados Unidos", stadium: "Hard Rock Stadium", capacity: "64,767" },
  { city: "Toronto", country: "Canadá", stadium: "BMO Field", capacity: "45,736" },
];

export default function FormatoPage() {
  return (
    <div style={{ background: BG, color: "#fff", fontFamily: "'Outfit',sans-serif", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ padding: "80px 20px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
          <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Torneo</span>
          <h1 style={{ fontSize: "clamp(32px,6vw,52px)", fontWeight: 900, marginTop: 16, lineHeight: 1.1 }}>
            Formato <span style={{ color: GOLD }}>2026</span>
          </h1>
          <p style={{ color: MID, marginTop: 20, maxWidth: 600, margin: "20px auto 0", lineHeight: 1.7, fontSize: 17 }}>
            El Mundial más grande de la historia: 48 selecciones, 104 partidos, 16 sedes y 3 países anfitriones.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "40px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 24 }}>
            {[
              { value: FORMAT_2026.teams, label: "Selecciones" },
              { value: FORMAT_2026.groups, label: "Grupos" },
              { value: FORMAT_2026.matches, label: "Partidos" },
              { value: FORMAT_2026.venues, label: "Sedes" },
              { value: FORMAT_2026.days, label: "Días" },
              { value: "3", label: "Países" },
            ].map((stat, i) => [
              <div key={i} style={{ textAlign: "center", padding: "20px" }}>
                <div style={{ fontSize: "40px", fontWeight: 800, color: GOLD }}>{stat.value}</div>
                <div style={{ fontSize: 14, color: DIM, marginTop: 4 }}>{stat.label}</div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Tournament Phases */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              Fases del <span style={{ color: GOLD }}>Torneo</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PHASES.map((phase, i) => [
              <div key={i} style={{
                padding: 24, borderRadius: 16, background: BG2,
                border: "1px solid rgba(255,255,255,0.05)",
                display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap"
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: i === PHASES.length - 1 ? `linear-gradient(135deg,${GOLD},${GOLD2})` : BG3,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: 18,
                  color: i === PHASES.length - 1 ? BG : GOLD,
                  flexShrink: 0
                }}>
                  {i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>{phase.name}</h3>
                  <p style={{ fontSize: 14, color: DIM, lineHeight: 1.6 }}>{phase.desc}</p>
                </div>
                <div style={{ display: "flex", gap: 16, fontSize: 13 }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ color: GOLD, fontWeight: 700 }}>{phase.matches}</div>
                    <div style={{ color: DARK }}>partidos</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ color: GOLD, fontWeight: 700 }}>{phase.qualified}</div>
                    <div style={{ color: DARK }}>clasifican</div>
                  </div>
                </div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section style={{ padding: "60px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              Principales <span style={{ color: GOLD }}>Sedes</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {VENUES.map((venue, i) => [
              <div key={i} style={{
                padding: 24, borderRadius: 16, background: BG2,
                border: "1px solid rgba(255,255,255,0.05)",
                position: "relative", overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute", top: -20, right: -20,
                  width: 100, height: 100, borderRadius: "50%",
                  background: GOLD, opacity: 0.05
                }} />
                <div style={{ position: "relative" }}>
                  <div style={{ fontSize: 12, color: GOLD, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 }}>
                    {venue.country}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{venue.city}</h3>
                  <div style={{ fontSize: 14, color: DIM }}>{venue.stadium}</div>
                  <div style={{ marginTop: 12, fontSize: 13, color: DARK }}>
                    Capacidad: {venue.capacity}
                  </div>
                </div>
              </div>
            ])}
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/sedes" style={{
              padding: "12px 24px", borderRadius: 10,
              background: "transparent", border: `1px solid ${GOLD}`,
              color: GOLD, fontWeight: 600, fontSize: 14, textDecoration: "none", display: "inline-block"
            }}>
              Ver todas las sedes
            </Link>
          </div>
        </div>
      </section>

      {/* Group Stage Format */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              Fase de <span style={{ color: GOLD }}>Grupos</span>
            </h2>
            <p style={{ color: MID, marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>
              12 grupos de 4 equipos. Los 2 primeros y los 8 mejores terceros avanzan a la fase eliminatoria.
            </p>
          </div>

          <div style={{
            padding: 32, borderRadius: 20, background: BG2,
            border: "1px solid rgba(255,255,255,0.05)"
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { label: "Total de grupos", value: "12 (A-L)" },
                { label: "Equipos por grupo", value: "4 selecciones" },
                { label: "Partidos por grupo", value: "6 partidos" },
                { label: "Clasifican directo", value: "24 (1º y 2º)" },
                { label: "Mejores terceros", value: "8 clasifican" },
                { label: "Total en eliminatoria", value: "32 equipos" },
              ].map((item, i) => [
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "12px 0", borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  fontSize: 15
                }}>
                  <span style={{ color: DIM }}>{item.label}</span>
                  <span style={{ fontWeight: 600 }}>{item.value}</span>
                </div>
              ])}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 20px", textAlign: "center", background: BG3 }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 64, marginBottom: 24 }}>🏆</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, marginBottom: 16 }}>
            El Mundial más grande de la <span style={{ color: GOLD }}>historia</span>
          </h2>
          <p style={{ color: MID, marginBottom: 32, fontSize: 16 }}>
            No te pierdas ningún detalle del torneo que cambiará el fútbol para siempre.
          </p>
          <Link href="/calendario" style={{
            padding: "16px 40px", borderRadius: 12,
            background: `linear-gradient(135deg,${GOLD},${GOLD2})`,
            color: BG, fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-block"
          }}>
            Ver calendario completo
          </Link>
        </div>
      </section>
    </div>
  );
}
