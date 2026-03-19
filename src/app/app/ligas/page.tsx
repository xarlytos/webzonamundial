'use client'

import Link from "next/link"

const BG = "#060B14", BG2 = "#0F1D32", BG3 = "#0B1825", GOLD = "#c9a84c", GOLD2 = "#e8d48b", MID = "#8a94b0", DIM = "#6a7a9a"

const LEAGUE_TYPES = [
  {
    icon: "🎯",
    title: "Liga de Predicciones",
    features: [
      "Todos predicen los mismos partidos",
      "Ranking privado con puntos acumulados",
      "Chat integrado para burlarse (con cariño 😄)",
      "Apuestas simbólicas entre amigos"
    ]
  },
  {
    icon: "⚽",
    title: "Liga Fantasy",
    features: [
      "Draft exclusivo de la liga",
      "Mercado de fichajes P2P (tradea jugadores)",
      "Sistema de trades entre managers",
      "Playoffs al final del mundial"
    ]
  },
  {
    icon: "🧠",
    title: "Liga de Trivia",
    features: [
      "Battle Royale privado",
      "Torneos personalizados",
      "Temas específicos (ej: solo historia del Real Madrid)"
    ]
  },
]

const FEATURES = [
  { icon: "🔒", title: "100% Privadas", desc: "Solo con invitación" },
  { icon: "🏆", title: "Tabla de clasificación propia", desc: "Ranking solo de tu grupo" },
  { icon: "💬", title: "Chat grupal", desc: "Búrlate, celebra, celebra" },
  { icon: "🎁", title: "Premios personalizables", desc: "Tú eliges qué se juega" },
  { icon: "📊", title: "Estadísticas detalladas", desc: "Quién es mejor en qué" },
  { icon: "🔔", title: "Notificaciones de eventos", desc: "No te pierdas nada" },
]

const IDEAS = [
  { icon: "👔", title: "Liga de la oficina", desc: "El que queda último paga las cervezas del mes" },
  { icon: "👨‍👩‍👧‍👦", title: "Familia Rodríguez", desc: "El tío no la pega ni una, pero nunca se rinde" },
  { icon: "🎓", title: "Curso 2024", desc: "El profe de matemáticas también juega y es buenísimo" },
  { icon: "⚽", title: "Peña Fútbolera", desc: "Honor, gloria y el álbum de figuritas en juego" },
  { icon: "🏢", title: "StartUp Tech", desc: "El CTO es el peor, pero tiene suerte" },
]

const STEPS = [
  { step: "1️⃣", title: "Crea tu liga", desc: "Elige nombre, foto, tipo de liga, reglas personalizadas" },
  { step: "2️⃣", title: "Invita amigos", desc: "Link directo, WhatsApp, código de invitación, email" },
  { step: "3️⃣", title: "Configura reglas", desc: "Puntos extra, premios, castigos, deadline de predicciones" },
  { step: "4️⃣", title: "¡A competir!", desc: "Que comience la batalla por el honor (y las cervezas)" },
]

export default function LigasPage() {
  return (
    <div style={{ background: BG, color: "#fff", fontFamily: "'Outfit',sans-serif", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ padding: "80px 20px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
          <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Comunidad</span>
          <h1 style={{ fontSize: "clamp(32px,6vw,52px)", fontWeight: 900, marginTop: 16, lineHeight: 1.1 }}>
            Juega con tus amigos, gana el <span style={{ color: GOLD }}>respeto 👥</span>
          </h1>
          <p style={{ color: MID, marginTop: 20, maxWidth: 600, margin: "20px auto 0", lineHeight: 1.7, fontSize: 17 }}>
            El fútbol se disfruta más en compañía. Crea tu liga privada y compite con amigos, familia, compañeros. Que gane el mejor... y que el peor pague las cervezas.
          </p>
        </div>
      </section>

      {/* Tipos de Ligas */}
      <section style={{ padding: "60px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              3 Tipos de <span style={{ color: GOLD }}>Ligas</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 24 }}>
            {LEAGUE_TYPES.map((type, i) => (
              <div key={i} style={{
                padding: 28, borderRadius: 16, background: BG2,
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{type.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 16, color: GOLD }}>{type.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {type.features.map((feature, j) => (
                    <li key={j} style={{ fontSize: 14, color: MID, display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ color: GOLD }}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              <span style={{ color: GOLD }}>Características</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {FEATURES.map((feature, i) => (
              <div key={i} style={{
                padding: 24, borderRadius: 16, background: BG2,
                border: "1px solid rgba(255,255,255,0.05)",
                display: "flex", gap: 16, alignItems: "flex-start"
              }}>
                <div style={{ fontSize: 28 }}>{feature.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{feature.title}</h3>
                  <p style={{ fontSize: 14, color: DIM }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideas de ligas */}
      <section style={{ padding: "60px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              Ideas de <span style={{ color: GOLD }}>ligas</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {IDEAS.map((idea, i) => (
              <div key={i} style={{
                padding: 24, borderRadius: 16, background: BG2,
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{idea.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{idea.title}</h3>
                <p style={{ fontSize: 14, color: DIM, fontStyle: "italic" }}>&ldquo;{idea.desc}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              Cómo <span style={{ color: GOLD }}>funciona</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 20 }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{
                padding: 28, borderRadius: 16, background: BG2,
                border: "1px solid rgba(255,255,255,0.05)",
                textAlign: "center"
              }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>{step.step}</div>
                <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: DIM, lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 64, marginBottom: 24 }}>🎯</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, marginBottom: 16 }}>
            Crea tu liga <span style={{ color: GOLD }}>ahora</span>
          </h2>
          <p style={{ color: MID, marginBottom: 32, fontSize: 16 }}>
            Gratis e ilimitado. Crea tantas ligas como quieras y compite por la gloria.
          </p>
          <Link href="/registro" style={{
            padding: "16px 40px", borderRadius: 12,
            background: `linear-gradient(135deg,${GOLD},${GOLD2})`,
            color: BG, fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-block"
          }}>
            Crea tu liga ahora → Regístrate gratis
          </Link>
        </div>
      </section>
    </div>
  )
}
