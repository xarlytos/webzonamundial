"use client";

import Link from "next/link";

const BG = "#060B14", BG2 = "#0F1D32", BG3 = "#0B1825", GOLD = "#c9a84c", GOLD2 = "#e8d48b", MID = "#8a94b0", DIM = "#6a7a9a";

const HOW_IT_WORKS_STEPS = [
  {
    num: "1️⃣",
    title: "Analiza",
    items: [
      "Forma reciente de equipos y jugadores",
      "Historial de enfrentamientos (H2H)",
      "Estadísticas avanzadas (xG, xA, heatmaps)",
      "Lesiones, sanciones, rotaciones",
      "Condiciones climáticas",
      "Presión del momento (¿es eliminación directa?)"
    ]
  },
  {
    num: "2️⃣",
    title: "Predice",
    desc: "Genera probabilidades para cada escenario:",
    example: [
      { label: "Argentina gana", value: "65%" },
      { label: "Empate", value: "20%" },
      { label: "México gana", value: "15%" }
    ]
  },
  {
    num: "3️⃣",
    title: "Te asesora",
    desc: "Recomienda tu mejor jugada basada en tu estilo:",
    example: [
      { type: "conservador", text: "Eres conservador: Predice 'Argentina gana'" },
      { type: "arriesgado", text: "Eres arriesgado: Apuesta por 'Messi primer goleador'" }
    ]
  }
];

const IA_FEATURES = [
  { icon: "🔮", title: "Predicciones con probabilidad", desc: "No te dice qué pasará. Te dice las probabilidades para que decidas informado. Ej: Brasil vs Corea: 72% over 2.5 goles | 58% ambos marcan" },
  { icon: "📊", title: "Análisis de forma", desc: "Gráficos de evolución de equipos y jugadores en los últimos 5 partidos" },
  { icon: "⚠️", title: "Alertas inteligentes", desc: "Mbappé entrenó diferenciado. 30% chance de no jugar. Messi lleva 3 partidos sin marcar. xG acumulado: 2.8. Está 'debido'." },
  { icon: "🎯", title: "Recomendaciones para fantasy", desc: "Compra a Musiala ($120M). Forma ↑↑↑, precio aún bajo. Vende a Cristiano ($30M). Minutos reducidos, edad." },
  { icon: "📈", title: "Estadísticas avanzadas", desc: "xG (goles esperados), xA (asistencias esperadas), heatmaps de posición, mapa de tiros, redes de pases" },
  { icon: "💡", title: "Tips diarios personalizados", desc: "Según tu historial, la IA aprende tu estilo y te da consejos personalizados" }
];

export default function IACoachPage() {
  return (
    <div style={{ background: BG, color: "#fff", fontFamily: "'Outfit',sans-serif", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ padding: "80px 20px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
          <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Plataforma</span>
          <h1 style={{ fontSize: "clamp(32px,6vw,52px)", fontWeight: 900, marginTop: 16, lineHeight: 1.1 }}>
            Tu asistente personal con <span style={{ color: GOLD }}>inteligencia artificial</span> 🤖
          </h1>
          <p style={{ color: MID, marginTop: 20, maxWidth: 600, margin: "20px auto 0", lineHeight: 1.7, fontSize: 17 }}>
            ¿No sabes qué predecir? ¿Dudas en tu fantasy? La IA Coach analiza millones de datos y te da la recomendación perfecta. 
            Es como tener a un experto en el bolsillo.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/registro" style={{
              padding: "14px 32px", borderRadius: 12,
              background: `linear-gradient(135deg,${GOLD},${GOLD2})`,
              color: BG, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block"
            }}>
              Probar IA Coach
            </Link>
          </div>
        </div>
      </section>

      {/* IA Image Section */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Inteligencia Artificial</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, marginTop: 16, marginBottom: 24 }}>
                IA especializada en el <span style={{ color: GOLD }}>Mundial 2026</span>
              </h2>
              <p style={{ color: MID, fontSize: 17, lineHeight: 1.7, marginBottom: 24 }}>
                Nuestra inteligencia artificial está entrenada específicamente para analizar los partidos y estadísticas del Mundial 2026. Obtén predicciones precisas y consejos personalizados.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: "🔮", text: "Predicciones con probabilidad" },
                  { icon: "📊", text: "Análisis de forma" },
                  { icon: "⚠️", text: "Alertas inteligentes" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15 }}>
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="/img/zonamundial-images/imagenes/ia mundial.jpeg" 
                alt="IA Coach - Inteligencia Artificial" 
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  maxWidth: 350,
                  width: "100%",
                  height: "auto",
                  display: "block",
                  margin: "0 auto"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section style={{ padding: "60px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              🧠 ¿Cómo <span style={{ color: GOLD }}>funciona?</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Step 1 - Analiza */}
            <div style={{
              padding: 32, borderRadius: 20, background: BG2,
              border: "1px solid rgba(255,255,255,0.05)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <span style={{ fontSize: 40 }}>1️⃣</span>
                <h3 style={{ fontWeight: 700, fontSize: 24, color: GOLD }}>Analiza</h3>
              </div>
              <p style={{ color: MID, marginBottom: 16, fontSize: 15 }}>La IA estudia:</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 12 }}>
                {HOW_IT_WORKS_STEPS[0].items.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#fff" }}>
                    <span style={{ color: GOLD }}>•</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2 - Predice */}
            <div style={{
              padding: 32, borderRadius: 20, background: BG2,
              border: "1px solid rgba(255,255,255,0.05)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <span style={{ fontSize: 40 }}>2️⃣</span>
                <h3 style={{ fontWeight: 700, fontSize: 24, color: GOLD }}>Predice</h3>
              </div>
              <p style={{ color: MID, marginBottom: 16, fontSize: 15 }}>{HOW_IT_WORKS_STEPS[1].desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                {HOW_IT_WORKS_STEPS[1].example.map((ex, i) => (
                  <div key={i} style={{
                    padding: "12px 20px", borderRadius: 12,
                    background: "rgba(201,168,76,0.15)",
                    border: "1px solid rgba(201,168,76,0.3)"
                  }}>
                    <span style={{ color: MID, fontSize: 13 }}>{ex.label}: </span>
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: 18 }}>{ex.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3 - Te asesora */}
            <div style={{
              padding: 32, borderRadius: 20, background: BG2,
              border: "1px solid rgba(255,255,255,0.05)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <span style={{ fontSize: 40 }}>3️⃣</span>
                <h3 style={{ fontWeight: 700, fontSize: 24, color: GOLD }}>Te asesora</h3>
              </div>
              <p style={{ color: MID, marginBottom: 16, fontSize: 15 }}>{HOW_IT_WORKS_STEPS[2].desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {HOW_IT_WORKS_STEPS[2].example.map((ex, i) => (
                  <div key={i} style={{
                    padding: "14px 20px", borderRadius: 12,
                    background: ex.type === "conservador" ? "rgba(74,222,128,0.1)" : "rgba(251,146,60,0.1)",
                    border: `1px solid ${ex.type === "conservador" ? "rgba(74,222,128,0.3)" : "rgba(251,146,60,0.3)"}`,
                    display: "flex", alignItems: "center", gap: 12
                  }}>
                    <span style={{
                      padding: "4px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600, textTransform: "uppercase",
                      background: ex.type === "conservador" ? "rgba(74,222,128,0.2)" : "rgba(251,146,60,0.2)",
                      color: ex.type === "conservador" ? "#4ade80" : "#fb923c"
                    }}>
                      {ex.type}
                    </span>
                    <span style={{ fontSize: 14, fontStyle: "italic" }}>&ldquo;{ex.text}&rdquo;</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              ✨ Features de la <span style={{ color: GOLD }}>IA Coach</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 24 }}>
            {IA_FEATURES.map((feature, i) => (
              <div key={i} style={{
                padding: 28, borderRadius: 20, background: BG2,
                border: "1px solid rgba(255,255,255,0.05)",
                display: "flex", flexDirection: "column"
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{feature.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>{feature.title}</h3>
                <p style={{ fontSize: 14, color: DIM, lineHeight: 1.6, flex: 1 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Interaction */}
      <section style={{ padding: "60px 20px", background: BG3 }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              💬 Ejemplo de <span style={{ color: GOLD }}>interacción</span>
            </h2>
          </div>

          <div style={{
            padding: 32, borderRadius: 20, background: BG2,
            border: "1px solid rgba(255,255,255,0.05)"
          }}>
            {/* User Message */}
            <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, flexShrink: 0
              }}>
                👤
              </div>
              <div style={{
                padding: "16px 20px", borderRadius: 16,
                background: "rgba(59,130,246,0.15)",
                border: "1px solid rgba(59,130,246,0.3)",
                maxWidth: "80%"
              }}>
                <p style={{ fontSize: 15, lineHeight: 1.5 }}>
                  <strong style={{ color: "#60a5fa" }}>Usuario:</strong> ¿Qué predicción hago para Argentina vs México?
                </p>
              </div>
            </div>

            {/* IA Message */}
            <div style={{ display: "flex", gap: 16, flexDirection: "row-reverse" }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: `linear-gradient(135deg, ${GOLD}, ${GOLD2})`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, flexShrink: 0
              }}>
                🤖
              </div>
              <div style={{
                padding: "20px 24px", borderRadius: 16,
                background: "rgba(201,168,76,0.1)",
                border: `1px solid rgba(201,168,76,0.3)`,
                maxWidth: "85%"
              }}>
                <p style={{ fontSize: 15, lineHeight: 1.5, marginBottom: 12 }}>
                  <strong style={{ color: GOLD }}>IA Coach:</strong> Basado en el análisis:
                </p>
                <ul style={{ color: MID, fontSize: 14, lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 }}>
                  <li>Argentina invicta hace 12 partidos</li>
                  <li>México ha encajado gol en 8 de sus últimos 10</li>
                  <li>Messi tiene xG de 0.8 por partido vs selecciones CONCACAF</li>
                  <li>73% probabilidad de que Messi marque</li>
                  <li>68% probabilidad de over 2.5 goles</li>
                </ul>
                <div style={{
                  padding: "14px 18px", borderRadius: 12,
                  background: "rgba(201,168,76,0.15)",
                  border: "1px solid rgba(201,168,76,0.4)"
                }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: GOLD, marginBottom: 4 }}>Recomendación:</p>
                  <p style={{ fontSize: 14, color: "#fff", lineHeight: 1.5 }}>
                    Predicción &lsquo;Over 2.5 goles&rsquo; o &lsquo;Ambos marcan&rsquo;. Si eres arriesgado: &lsquo;Messi primer goleador&rsquo;.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ padding: "40px 20px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{
            padding: "24px 28px", borderRadius: 16,
            background: "rgba(251,191,36,0.1)",
            border: "1px solid rgba(251,191,36,0.3)",
            display: "flex", gap: 16, alignItems: "flex-start"
          }}>
            <span style={{ fontSize: 28 }}>⚠️</span>
            <div>
              <h4 style={{ fontWeight: 700, fontSize: 15, color: "#fbbf24", marginBottom: 8 }}>Disclaimer</h4>
              <p style={{ fontSize: 14, color: MID, lineHeight: 1.6, fontStyle: "italic" }}>
                &ldquo;La IA es buena, pero el fútbol es impredecible. Un día de viento, un error del portero, 
                una expulsión tonta... El fútbol siempre sorprende. ¡Usa la IA + tu instinto!&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 20px", textAlign: "center", background: BG3 }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 64, marginBottom: 24 }}>🎯</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, marginBottom: 16 }}>
            Prueba el poder de la <span style={{ color: GOLD }}>IA</span>
          </h2>
          <p style={{ color: MID, marginBottom: 32, fontSize: 16 }}>
            Tu coach de inteligencia artificial te espera. Análisis en tiempo real, alertas inteligentes 
            y recomendaciones personalizadas para dominar tus predicciones.
          </p>
          <Link href="/registro" style={{
            padding: "16px 40px", borderRadius: 12,
            background: `linear-gradient(135deg,${GOLD},${GOLD2})`,
            color: BG, fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-block"
          }}>
            Pre-regístrate →
          </Link>
        </div>
      </section>
    </div>
  );
}
