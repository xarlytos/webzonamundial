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
      {/* Hero - Nuevo contenido */}
      <section style={{ padding: "80px 20px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
          <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>El Mundial más grande de la historia</span>
          <h1 style={{ fontSize: "clamp(32px,6vw,52px)", fontWeight: 900, marginTop: 16, lineHeight: 1.1 }}>
            48 equipos, un nuevo formato épico <span style={{ color: GOLD }}>🆕</span>
          </h1>
          <p style={{ color: MID, marginTop: 20, maxWidth: 600, margin: "20px auto 0", lineHeight: 1.7, fontSize: 18 }}>
            El Mundial 2026 cambia para siempre
          </p>
        </div>
      </section>

      {/* 📊 Antes vs Ahora - Nueva sección */}
      <section style={{ padding: "60px 20px", background: BG3 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              <span style={{ color: GOLD }}>📊</span> Antes vs Ahora
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24
          }}>
            {/* Qatar 2022 */}
            <div style={{
              padding: 28,
              borderRadius: 16,
              background: BG2,
              border: "1px solid rgba(255,255,255,0.05)"
            }}>
              <div style={{ color: DIM, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
                Qatar 2022
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Formato Clásico</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 15 }}>
                <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ color: DIM }}>Equipos</span>
                  <span style={{ fontWeight: 600 }}>32</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ color: DIM }}>Grupos</span>
                  <span style={{ fontWeight: 600 }}>8 de 4</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ color: DIM }}>Partidos</span>
                  <span style={{ fontWeight: 600 }}>64</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ color: DIM }}>Clasifican</span>
                  <span style={{ fontWeight: 600 }}>16 (1º y 2º)</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: DIM }}>Duración</span>
                  <span style={{ fontWeight: 600 }}>29 días</span>
                </div>
              </div>
            </div>

            {/* 2026 */}
            <div style={{
              padding: 28,
              borderRadius: 16,
              background: BG2,
              border: `1px solid ${GOLD}`,
              position: "relative"
            }}>
              <div style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: GOLD,
                color: BG,
                fontSize: 10,
                fontWeight: 700,
                padding: "4px 10px",
                borderRadius: 20,
                textTransform: "uppercase"
              }}>
                NUEVO
              </div>
              <div style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
                2026
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Formato Ampliado</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 15 }}>
                <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ color: DIM }}>Equipos</span>
                  <span style={{ fontWeight: 700, color: GOLD }}>48</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ color: DIM }}>Grupos</span>
                  <span style={{ fontWeight: 700, color: GOLD }}>12 de 4</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ color: DIM }}>Partidos</span>
                  <span style={{ fontWeight: 700, color: GOLD }}>104</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ color: DIM }}>Clasifican</span>
                  <span style={{ fontWeight: 600 }}>32 (2+8 terceros)</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ color: DIM }}>Duración</span>
                  <span style={{ fontWeight: 700, color: GOLD }}>39 días</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: DIM }}>Nueva ronda</span>
                  <span style={{ fontWeight: 600, color: GOLD }}>32avos de final</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Sección existente */}
      <section style={{ padding: "40px 20px", background: BG }}>
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

      {/* 🎯 ¿Cómo funciona? - Nueva sección */}
      <section style={{ padding: "60px 20px", background: BG3 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              <span style={{ color: GOLD }}>🎯</span> ¿Cómo funciona?
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* FASE DE GRUPOS */}
            <div style={{
              padding: 28,
              borderRadius: 16,
              background: BG2,
              border: "1px solid rgba(255,255,255,0.05)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg,${GOLD},${GOLD2})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20
                }}>
                  📋
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800 }}>FASE DE GRUPOS</h3>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                <div style={{ padding: 16, background: BG, borderRadius: 12 }}>
                  <div style={{ color: GOLD, fontSize: 28, fontWeight: 800 }}>12</div>
                  <div style={{ color: MID, fontSize: 14 }}>grupos (A-L)</div>
                </div>
                <div style={{ padding: 16, background: BG, borderRadius: 12 }}>
                  <div style={{ color: GOLD, fontSize: 28, fontWeight: 800 }}>4</div>
                  <div style={{ color: MID, fontSize: 14 }}>equipos por grupo</div>
                </div>
                <div style={{ padding: 16, background: BG, borderRadius: 12 }}>
                  <div style={{ color: GOLD, fontSize: 28, fontWeight: 800 }}>32</div>
                  <div style={{ color: MID, fontSize: 14 }}>equipos avanzan</div>
                </div>
              </div>
              <p style={{ marginTop: 20, color: DIM, lineHeight: 1.6, fontSize: 15 }}>
                Los <strong style={{ color: "#fff" }}>2 mejores</strong> de cada grupo avanzan + los <strong style={{ color: "#fff" }}>8 mejores terceros</strong> = <strong style={{ color: GOLD }}>32 equipos</strong> en eliminatoria
              </p>
            </div>

            {/* ELIMINATORIA */}
            <div style={{
              padding: 28,
              borderRadius: 16,
              background: BG2,
              border: "1px solid rgba(255,255,255,0.05)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg,${GOLD},${GOLD2})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20
                }}>
                  ⚔️
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800 }}>ELIMINATORIA</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
                {[
                  { name: "32avos", from: 32, to: 16 },
                  { name: "Octavos", from: 16, to: 8 },
                  { name: "Cuartos", from: 8, to: 4 },
                  { name: "Semis", from: 4, to: 2 },
                  { name: "Final", from: 2, to: 1 },
                ].map((round, i) => (
                  <div key={i} style={{
                    flex: "1 1 140px",
                    maxWidth: 160,
                    padding: 16,
                    background: BG,
                    borderRadius: 12,
                    textAlign: "center",
                    border: i === 0 ? `1px solid ${GOLD}` : "1px solid transparent"
                  }}>
                    <div style={{ fontSize: 13, color: DIM, marginBottom: 4 }}>
                      {round.from} → {round.to}
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: i === 0 ? GOLD : "#fff" }}>
                      {round.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Phases - Sección existente */}
      <section style={{ padding: "60px 20px", background: BG }}>
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

      {/* ✅ Ventajas del nuevo formato - Nueva sección */}
      <section style={{ padding: "60px 20px", background: BG3 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              <span style={{ color: GOLD }}>✅</span> Ventajas del nuevo formato
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
            {[
              { icon: "🌍", title: "Más países participan", desc: "Fútbol más global" },
              { icon: "⚽", title: "Más partidos", desc: "Más diversión para los fans" },
              { icon: "🎯", title: "Más equipos tienen chances", desc: "Hasta el tercero puede avanzar" },
              { icon: "💰", title: "Economía", desc: "Más ingresos para el torneo" },
              { icon: "🚀", title: "Desarrollo", desc: "Países pequeños debutan" },
            ].map((item, i) => (
              <div key={i} style={{
                padding: 24,
                borderRadius: 16,
                background: BG2,
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: DIM, fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⚠️ Críticas - Nueva sección */}
      <section style={{ padding: "60px 20px", background: BG }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              <span style={{ color: GOLD }}>⚠️</span> Críticas
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {[
              { icon: "⚡", title: "Calidad", desc: "¿Se diluye con 48 equipos?" },
              { icon: "😴", title: "Cansancio", desc: "104 partidos en total" },
              { icon: "🗺️", title: "Logística", desc: "3 países, 16 sedes" },
              { icon: "📅", title: "Calendario", desc: "39 días de competición" },
            ].map((item, i) => (
              <div key={i} style={{
                padding: 24,
                borderRadius: 16,
                background: BG2,
                border: "1px solid rgba(255,255,255,0.05)",
                textAlign: "center"
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: DIM, fontSize: 14 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues - Sección existente */}
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

      {/* Group Stage Format - Sección existente */}
      <section style={{ padding: "60px 20px", background: BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              Fase de <span style={{ color: GOLD }}>Grupos</span> Detallada
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

      {/* CTA - Nuevo con IA Coach */}
      <section style={{ padding: "80px 20px", textAlign: "center", background: BG3 }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 64, marginBottom: 24 }}>🎯</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, marginBottom: 16 }}>
            Domina el formato con nuestra <span style={{ color: GOLD }}>IA Coach</span>
          </h2>
          <p style={{ color: MID, marginBottom: 32, fontSize: 16 }}>
            Entiende todas las reglas, posibilidades y estrategias del nuevo formato épico del Mundial 2026.
          </p>
          <Link href="/ia-coach" style={{
            padding: "16px 40px", borderRadius: 12,
            background: `linear-gradient(135deg,${GOLD},${GOLD2})`,
            color: BG, fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-block"
          }}>
            Pregúntale a la IA Coach →
          </Link>
        </div>
      </section>
    </div>
  );
}
