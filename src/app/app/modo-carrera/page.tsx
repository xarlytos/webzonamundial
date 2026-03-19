'use client'

import Link from "next/link"

const BG = "#060B14", BG2 = "#0F1D32", BG3 = "#0B1825", GOLD = "#c9a84c", GOLD2 = "#e8d48b", MID = "#8a94b0", DIM = "#6a7a9a"

const LEVELS = [
  { rank: "🥉", name: "Bronce", levels: "1-10", title: "Novato → Aficionado", color: "#cd7f32" },
  { rank: "🥈", name: "Plata", levels: "11-25", title: "Experto → Profesional", color: "#c0c0c0" },
  { rank: "🥇", name: "Oro", levels: "26-50", title: "Leyenda → Ídolo", color: GOLD },
  { rank: "💎", name: "Diamante", levels: "51-99", title: "Mítico → Dios del Fútbol", color: "#b9f2ff" },
  { rank: "👑", name: "Especial", levels: "100", title: "GOAT 🐐", color: "#ff6b9d" },
]

const XP_ACTIONS = [
  { action: "Predicción acertada", xp: "+50-500" },
  { action: "Trivia correcta", xp: "+10-50" },
  { action: "Fantasy jornada", xp: "+100-1000" },
  { action: "Logro desbloqueado", xp: "+200" },
  { action: "Amigo invitado", xp: "+100" },
]

const BENEFITS = [
  { level: "Nivel 10", benefit: "Desbloquea ligas privadas" },
  { level: "Nivel 25", benefit: "IA Coach pro completo" },
  { level: "Nivel 50", benefit: "Badge exclusivo + Marco de avatar" },
  { level: "Nivel 75", benefit: "Acceso a torneos exclusivos" },
  { level: "Nivel 100", benefit: "GOAT Badge + Atención VIP + Eventos especiales" },
]

const ACHIEVEMENTS = {
  predictions: [
    { icon: "🎲", name: "Adivino", desc: "10 aciertos seguidos" },
    { icon: "🔮", name: "Milagroso", desc: "Acierta resultado exacto de la final" },
    { icon: "🐑", name: "Contrarian", desc: "Gana predicción social contra el 90%" },
    { icon: "💎", name: "Diamante puro", desc: "Acierta en un Diamond Match (×3)" },
  ],
  fantasy: [
    { icon: "👔", name: "Manager del mes", desc: "Gana liga mensual" },
    { icon: "👁️", name: "Ojo de águila", desc: "Compra joya <$5M que haga >50 pts" },
    { icon: "🛡️", name: "Invicto", desc: "Liga perfecta sin perder" },
    { icon: "💰", name: "Trader", desc: "10 trades exitosos" },
  ],
  trivia: [
    { icon: "🔥", name: "Racha loca", desc: "20 correctas seguidas" },
    { icon: "⚡", name: "Velocista", desc: "Responde en <1 segundo" },
    { icon: "🏛️", name: "Historiador", desc: "100 preguntas de historia" },
    { icon: "🕵️", name: "Detective", desc: "50 preguntas visuales" },
  ],
  social: [
    { icon: "📢", name: "Influencer", desc: "100 seguidores" },
    { icon: "👑", name: "Líder", desc: "Crea liga con 50+ miembros" },
    { icon: "🤝", name: "Amigo fiel", desc: "30 días jugando con el mismo amigo" },
    { icon: "🌍", name: "Global", desc: "Juega contra alguien de cada continente" },
  ],
}

const COINS = [
  { action: "Acciones diarias", coins: "+50 monedas" },
  { action: "Predicciones", coins: "+10-100 monedas" },
  { action: "Logros", coins: "+500 monedas" },
  { action: "Invitar amigos", coins: "+200 monedas" },
]

const SHOP_ITEMS = [
  { item: "🎨 Skins de perfil" },
  { item: "😎 Emojis personalizados" },
  { item: "✨ Efectos especiales" },
  { item: "🚀 Boosts para fantasy" },
  { item: "💡 Pistas en trivia" },
  { item: "🖼️ Marcos de avatar" },
]

export default function ModoCarreraPage() {
  return (
    <div style={{ background: BG, color: "#fff", fontFamily: "'Outfit',sans-serif", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ padding: "80px 20px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
          <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Progresión</span>
          <h1 style={{ fontSize: "clamp(32px,6vw,52px)", fontWeight: 900, marginTop: 16, lineHeight: 1.1 }}>
            Tu camino hacia la <span style={{ color: GOLD }}>gloria 🚀</span>
          </h1>
          <p style={{ color: MID, marginTop: 20, maxWidth: 600, margin: "20px auto 0", lineHeight: 1.7, fontSize: 17 }}>
            Cada predicción, cada trivia, cada fantasy... suma. Sube de nivel, desbloquea recompensas, conviértete en una leyenda de ZonaMundial.
          </p>
        </div>
      </section>

      {/* Sistema de Niveles */}
      <section style={{ padding: "60px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              Sistema de <span style={{ color: GOLD }}>Niveles</span>
            </h2>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${GOLD}40` }}>
                  <th style={{ padding: "16px", textAlign: "left", color: GOLD }}>Rango</th>
                  <th style={{ padding: "16px", textAlign: "left", color: GOLD }}>Niveles</th>
                  <th style={{ padding: "16px", textAlign: "left", color: GOLD }}>Título</th>
                </tr>
              </thead>
              <tbody>
                {LEVELS.map((level, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "16px" }}>
                      <span style={{ fontSize: 20, marginRight: 8 }}>{level.rank}</span>
                      <span style={{ color: level.color, fontWeight: 600 }}>{level.name}</span>
                    </td>
                    <td style={{ padding: "16px", color: MID }}>{level.levels}</td>
                    <td style={{ padding: "16px" }}>{level.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* XP por acción */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              XP por <span style={{ color: GOLD }}>acción</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 20 }}>
            {XP_ACTIONS.map((action, i) => (
              <div key={i} style={{
                padding: 24, borderRadius: 16, background: BG2,
                border: "1px solid rgba(255,255,255,0.05)", textAlign: "center"
              }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: GOLD, marginBottom: 8 }}>{action.xp}</div>
                <div style={{ fontSize: 14, color: DIM }}>{action.action}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios por nivel */}
      <section style={{ padding: "60px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              Beneficios por <span style={{ color: GOLD }}>nivel</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {BENEFITS.map((benefit, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 20,
                padding: 20, borderRadius: 12, background: BG2,
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <div style={{
                  padding: "8px 16px", borderRadius: 8,
                  background: `linear-gradient(135deg,${GOLD},${GOLD2})`,
                  color: BG, fontWeight: 700, fontSize: 14, whiteSpace: "nowrap"
                }}>
                  {benefit.level}
                </div>
                <div style={{ fontSize: 15 }}>{benefit.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sistema de Logros */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              Sistema de <span style={{ color: GOLD }}>Logros</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 32 }}>
            {Object.entries(ACHIEVEMENTS).map(([category, items]) => (
              <div key={category} style={{ background: BG2, borderRadius: 16, padding: 24, border: "1px solid rgba(255,255,255,0.05)" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: GOLD, textTransform: "capitalize" }}>
                  {category === "predictions" ? "🎯 Predicciones" :
                   category === "fantasy" ? "⚽ Fantasy" :
                   category === "trivia" ? "🧠 Trivia" : "👥 Social"}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {items.map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 20 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14 }}>{item.name}</div>
                        <div style={{ fontSize: 12, color: DIM }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monedas y Tienda */}
      <section style={{ padding: "60px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              🪙 Monedas y <span style={{ color: GOLD }}>Tienda</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 32 }}>
            {/* Ganar monedas */}
            <div style={{ background: BG2, borderRadius: 16, padding: 28, border: "1px solid rgba(255,255,255,0.05)" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20, color: GOLD }}>Gana monedas</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {COINS.map((coin, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < COINS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <span style={{ fontSize: 14 }}>{coin.action}</span>
                    <span style={{ fontSize: 14, color: GOLD, fontWeight: 600 }}>{coin.coins}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gastar en tienda */}
            <div style={{ background: BG2, borderRadius: 16, padding: 28, border: "1px solid rgba(255,255,255,0.05)" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20, color: GOLD }}>Gasta en</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {SHOP_ITEMS.map((item, i) => (
                  <div key={i} style={{ padding: 12, background: BG3, borderRadius: 8, fontSize: 14, textAlign: "center" }}>
                    {item.item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 64, marginBottom: 24 }}>🎯</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, marginBottom: 16 }}>
            ¿Listo para empezar tu <span style={{ color: GOLD }}>carrera?</span>
          </h2>
          <p style={{ color: MID, marginBottom: 32, fontSize: 16 }}>
            Cada punto cuenta. Cada nivel te acerca más a la cima del ranking mundial.
          </p>
          <Link href="/registro" style={{
            padding: "16px 40px", borderRadius: 12,
            background: `linear-gradient(135deg,${GOLD},${GOLD2})`,
            color: BG, fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-block"
          }}>
            Empieza tu carrera → Pre-regístrate
          </Link>
        </div>
      </section>
    </div>
  )
}
