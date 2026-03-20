'use client'

import Link from "next/link"

const BG = "#060B14", BG2 = "#0F1D32", BG3 = "#0B1825", GOLD = "#c9a84c", GOLD2 = "#e8d48b", MID = "#8a94b0", DIM = "#6a7a9a"

const CREATORS = [
  { icon: "🎮", title: "Streamers de Twitch", desc: "Reacciones en tiempo real" },
  { icon: "📺", title: "YouTubers de fútbol", desc: "Análisis táctico" },
  { icon: "🎵", title: "TikTokers", desc: "Humor y memes durante el partido" },
  { icon: "📝", title: "Periodistas deportivos", desc: "Información de vestuario" },
  { icon: "⚽", title: "Exjugadores", desc: "Análisis desde adentro" },
  { icon: "😂", title: "Memers y humoristas", desc: "Para reírse de todo" },
]

const CHAT_FEATURES = [
  { icon: "🔥", title: "Reacciona con emojis", desc: "Cuando hay gol" },
  { icon: "🎯", title: "Predice el próximo gol", desc: "Minuto + jugador" },
  { icon: "🗳️", title: "Vota por MVP", desc: "Del partido" },
  { icon: "📊", title: "Encuestas en vivo", desc: "Participa en tiempo real" },
  { icon: "🎁", title: "Gana drops", desc: "Y recompensas exclusivas" },
]

const MODES = [
  { moment: "Pre-partido", duration: "30 min", desc: "Alineaciones, análisis, predicciones" },
  { moment: "Partido", duration: "90+ min", desc: "Reacciones, chat, goles, polémicas" },
  { moment: "Post-partido", duration: "30 min", desc: "Resumen, MVP,ária del VAR" },
]

const REWARDS = [
  { icon: "⏱️", title: "Monedas por tiempo", desc: "+10 monedas cada 10 minutos" },
  { icon: "🎁", title: "Drops especiales", desc: "Items exclusivos en momentos clave" },
  { icon: "📺", title: "Contenido exclusivo", desc: "Detrás de cámaras" },
  { icon: "🎤", title: "Meet & greet virtual", desc: "Conoce a los creadores" },
]

export default function StreamingPage() {
  return (
    <div style={{ background: BG, color: "#fff", fontFamily: "'Outfit',sans-serif", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ padding: "80px 20px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
          <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Comunidad</span>
          <h1 style={{ fontSize: "clamp(32px,6vw,52px)", fontWeight: 900, marginTop: 16, lineHeight: 1.1 }}>
            Mira los partidos con tu creador favorito <span style={{ color: GOLD }}>📺</span>
          </h1>
          <p style={{ color: MID, marginTop: 20, maxWidth: 600, margin: "20px auto 0", lineHeight: 1.7, fontSize: 17 }}>
            Experiencia de partido 2.0. Reacciones en vivo, comunidad, momentos épicos compartidos. No es lo mismo ver un gol solo que verlo con 10,000 personas al mismo tiempo.
          </p>
        </div>
      </section>

      {/* Watch Parties + Imagen */}
      <section style={{ padding: "80px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Watch Parties</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, marginTop: 16, marginBottom: 24 }}>
                Vive el Mundial <span style={{ color: GOLD }}>acompañado</span>
              </h2>
              <p style={{ color: MID, fontSize: 17, lineHeight: 1.7, marginBottom: 24 }}>
                Los creadores hacen streaming mientras ven el partido. Tú comentas, reaccionas y compartes la emoción con miles de fans.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: "⚽", text: "Reacciones en vivo a goles y polémicas" },
                  { icon: "💬", text: "Chat comunitario para comentar" },
                  { icon: "🎯", text: "Predicciones en tiempo real" },
                  { icon: "📊", text: "Encuestas: ¿Penalti o no?" },
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
                src="/img/zonamundial-images/imagenes/streaming zona mundial.jpeg" 
                alt="Streaming Zona Mundial" 
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 24px 50px rgba(0,0,0,0.4)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  maxWidth: 500,
                  width: "100%",
                  height: "auto",
                  display: "block"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Creadores Oficiales */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px,5vw,42px)", fontWeight: 800 }}>
              🎙️ Creadores <span style={{ color: GOLD }}>Oficiales</span>
            </h2>
            <p style={{ color: MID, marginTop: 12 }}>Tenemos creadores de todo tipo:</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {CREATORS.map((creator, i) => (
              <div key={i} style={{
                padding: 24, borderRadius: 16, background: BG2,
                border: "1px solid rgba(255,255,255,0.05)",
                display: "flex", gap: 16, alignItems: "center"
              }}>
                <div style={{ fontSize: 32 }}>{creator.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{creator.title}</h3>
                  <p style={{ fontSize: 14, color: DIM }}>{creator.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Comunitario */}
      <section style={{ padding: "80px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px,5vw,42px)", fontWeight: 800 }}>
              💬 Chat <span style={{ color: GOLD }}>Comunitario</span>
            </h2>
            <p style={{ color: MID, marginTop: 12 }}>Durante los watch parties:</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 16 }}>
            {CHAT_FEATURES.map((feature, i) => (
              <div key={i} style={{
                padding: 24, borderRadius: 16, background: BG2,
                border: "1px solid rgba(255,255,255,0.05)", textAlign: "center"
              }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{feature.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{feature.title}</h3>
                <p style={{ fontSize: 13, color: DIM }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px,5vw,42px)", fontWeight: 800 }}>
              🎁 Rewards por <span style={{ color: GOLD }}>ver</span>
            </h2>
            <p style={{ color: MID, marginTop: 12 }}>Mientras más ves, más ganas:</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: 20 }}>
            {REWARDS.map((reward, i) => (
              <div key={i} style={{
                padding: 28, borderRadius: 16, background: BG2,
                border: "1px solid rgba(255,255,255,0.05)", textAlign: "center"
              }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{reward.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{reward.title}</h3>
                <p style={{ fontSize: 14, color: DIM }}>{reward.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modos de Streaming */}
      <section style={{ padding: "80px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px,5vw,42px)", fontWeight: 800 }}>
              📅 Modos de <span style={{ color: GOLD }}>Streaming</span>
            </h2>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${GOLD}40` }}>
                  <th style={{ padding: "16px", textAlign: "left", color: GOLD }}>Momento</th>
                  <th style={{ padding: "16px", textAlign: "left", color: GOLD }}>Duración</th>
                  <th style={{ padding: "16px", textAlign: "left", color: GOLD }}>Qué pasa</th>
                </tr>
              </thead>
              <tbody>
                {MODES.map((mode, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "16px", fontWeight: 600 }}>{mode.moment}</td>
                    <td style={{ padding: "16px", color: MID }}>{mode.duration}</td>
                    <td style={{ padding: "16px" }}>{mode.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ padding: "40px 20px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{
            padding: 24, borderRadius: 16, background: BG2,
            border: "1px solid rgba(255,255,255,0.1)",
            borderLeft: `4px solid ${GOLD}`
          }}>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: MID }}>
              <strong style={{ color: "#fff" }}>⚠️ Importante:</strong> ZonaMundial <strong style={{ color: "#fff" }}>NO transmite partidos en vivo</strong>. Los creadores reaccionan y comentan usando señales legales disponibles en cada país. Es contenido generado por usuarios, no transmisión oficial.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 64, marginBottom: 24 }}>🎯</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, marginBottom: 16 }}>
            Descubre <span style={{ color: GOLD }}>creadores</span>
          </h2>
          <p style={{ color: MID, marginBottom: 32, fontSize: 16 }}>
            Únete a la comunidad y vive el Mundial como nunca antes.
          </p>
          <Link href="/registro" style={{
            padding: "16px 40px", borderRadius: 12,
            background: `linear-gradient(135deg,${GOLD},${GOLD2})`,
            color: BG, fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-block"
          }}>
            Descubre creadores → Únete a la comunidad
          </Link>
        </div>
      </section>
    </div>
  )
}