'use client'

import Link from "next/link"

const BG = "#060B14", BG2 = "#0F1D32", BG3 = "#0B1825", GOLD = "#c9a84c", GOLD2 = "#e8d48b", MID = "#8a94b0", DIM = "#6a7a9a"

const FORMATIONS = [
  { form: "4-3-3", style: "Ofensivo" },
  { form: "4-4-2", style: "Equilibrado" },
  { form: "3-5-2", style: "Dominio" },
  { form: "5-3-2", style: "Defensivo" },
  { form: "4-2-3-1", style: "Posesión" },
  { form: "3-4-3", style: "Todo ataque" },
]

const TACTICS = [
  { name: "Posesión", use: "Contra equipos débiles" },
  { name: "Contragolpe", use: "Contra equipos fuertes" },
  { name: "Presión Alta", use: "Para arriesgar" },
  { name: "Defensivo", use: "Proteger ventaja" },
  { name: "Equilibrado", use: "Partidos normales" },
]

const ACHIEVEMENTS_PREVIEW = [
  { icon: "👑", name: "Campeón del Mundo", rarity: "Legendaria" },
  { icon: "🏆", name: "Finalista", rarity: "Épica" },
  { icon: "⭐", name: "Semifinalista", rarity: "Rara" },
  { icon: "🏅", name: "Clasificado", rarity: "Común" },
]

const ImgStyle = {
  borderRadius: 20,
  overflow: "hidden",
  boxShadow: "0 24px 50px rgba(0,0,0,0.4)",
  border: "1px solid rgba(255,255,255,0.08)",
  maxWidth: 500,
  width: "100%",
  height: "auto",
  display: "block"
}

export default function ModoCarreraPage() {
  return (
    <div style={{ background: BG, color: "#fff", fontFamily: "'Outfit',sans-serif", minHeight: "100vh" }}>
      {/* HERO */}
      <section style={{ padding: "100px 20px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(201,168,76,0.1) 0%,transparent 60%)" }} />
        
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Modo Carrera</span>
          <h1 style={{ fontSize: "clamp(36px,7vw,56px)", fontWeight: 900, marginTop: 20, lineHeight: 1.1 }}>
            Conviértete en el <span style={{ color: GOLD }}>Seleccionador</span>
          </h1>
          <p style={{ color: MID, marginTop: 24, maxWidth: 600, margin: "24px auto 0", lineHeight: 1.7, fontSize: 18 }}>
            Dirige una selección nacional. Elige tu nación, forma tu plantilla y guía a tu equipo hacia la gloria mundialista.
          </p>
          
          <div style={{ marginTop: 40, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/registro" style={{
              padding: "16px 36px", borderRadius: 14,
              background: `linear-gradient(135deg,${GOLD},${GOLD2})`,
              color: BG, fontWeight: 800, fontSize: 16, textDecoration: "none", display: "inline-block",
              boxShadow: "0 8px 32px rgba(201,168,76,0.3)"
            }}>
              🚀 Nueva Carrera
            </Link>
          </div>
        </div>
      </section>

      {/* SELECCIÓN DE NACIÓN */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            {/* Texto */}
            <div>
              <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Paso 1</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, marginTop: 16, marginBottom: 24 }}>
                Elige tu <span style={{ color: GOLD }}>Nación</span>
              </h2>
              <p style={{ color: MID, fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>
                Selecciona una de las 48 selecciones del Mundial 2026. Cada una tiene un nivel de dificultad según su Overall.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: "⭐⭐⭐⭐⭐", name: "Élite", color: "#22c55e" },
                  { icon: "⭐⭐⭐⭐", name: "Muy Fuerte", color: "#3b82f6" },
                  { icon: "⭐⭐⭐", name: "Fuerte", color: "#f59e0b" },
                  { icon: "⭐⭐", name: "Media", color: "#f97316" },
                ].map((d, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: 14, borderRadius: 12, background: BG2 }}>
                    <span style={{ fontSize: 16 }}>{d.icon}</span>
                    <span style={{ fontWeight: 600, color: d.color }}>{d.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagen */}
            <div>
              <img 
                src="/img/zonamundial-images/imagenes/elige nacion modo carrera.jpeg" 
                alt="Selección de nación" 
                style={ImgStyle}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PLANTILLA */}
      <section style={{ padding: "80px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            
            {/* Imagen */}
            <div>
              <img 
                src="/img/zonamundial-images/imagenes/alineacion modo carrera.jpeg" 
                alt="Plantilla" 
                style={ImgStyle}
              />
            </div>

            {/* Texto */}
            <div>
              <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Paso 2</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, marginTop: 16, marginBottom: 24 }}>
                Forma tu <span style={{ color: GOLD }}>Plantilla</span>
              </h2>
              <p style={{ color: MID, fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>
                36 jugadores disponibles. Elige entre 23-26 para tu convocatoria final.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
                {[
                  { label: "Plantilla", value: "36" },
                  { label: "Convocatoria", value: "23-26" },
                  { label: "Porteros", value: "Min 2" },
                  { label: "Overall", value: "0-99" },
                ].map((item, i) => (
                  <div key={i} style={{ padding: 20, borderRadius: 12, background: BG2, textAlign: "center" }}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: GOLD }}>{item.value}</div>
                    <div style={{ fontSize: 12, color: DIM }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMACIONES Y TACTICAS */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Paso 3</span>
          <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, marginTop: 16, marginBottom: 32 }}>
            Configura <span style={{ color: GOLD }}>Tácticas</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 32 }}>
            {/* Formaciones */}
            <div style={{ padding: 28, borderRadius: 20, background: BG2, border: "1px solid rgba(255,255,255,0.05)" }}>
              <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 20, color: GOLD }}>📋 6 Formaciones</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
                {FORMATIONS.map((f, i) => (
                  <div key={i} style={{ padding: 16, borderRadius: 12, background: BG3, textAlign: "center" }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: GOLD, marginBottom: 4 }}>{f.form}</div>
                    <div style={{ fontSize: 12, color: DIM }}>{f.style}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tácticas */}
            <div style={{ padding: 28, borderRadius: 20, background: BG2, border: "1px solid rgba(255,255,255,0.05)" }}>
              <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 20, color: GOLD }}>🎮 5 Estilos</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {TACTICS.map((t, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 14, borderRadius: 10, background: BG3 }}>
                    <span style={{ fontWeight: 600, fontSize: 15 }}>{t.name}</span>
                    <span style={{ fontSize: 12, color: DIM }}>{t.use}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TORNEO */}
      <section style={{ padding: "80px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            
            {/* Contenido */}
            <div>
              <div style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: "clamp(28px,5vw,42px)", fontWeight: 800, marginBottom: 24 }}>
                  🏟️ El Torneo
                </h2>
              </div>

              {/* Fases */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
                {[
                  { phase: "Grupos", teams: "48", color: "#3b82f6" },
                  { phase: "16avos", teams: "32", color: "#8b5cf6" },
                  { phase: "Octavos", teams: "16", color: "#ec4899" },
                  { phase: "Cuartos", teams: "8", color: "#f59e0b" },
                  { phase: "Semis", teams: "4", color: "#ef4444" },
                  { phase: "Final", teams: "2", color: GOLD },
                ].map((p, i) => (
                  <div key={i} style={{ padding: "12px 18px", borderRadius: 10, background: BG2, border: `1px solid ${p.color}40`, textAlign: "center", minWidth: 75 }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: p.color }}>{p.teams}</div>
                    <div style={{ fontSize: 11, color: DIM }}>{p.phase}</div>
                  </div>
                ))}
              </div>

              {/* Sistema de puntos */}
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <div style={{ padding: "12px 24px", borderRadius: 10, background: BG2, border: "1px solid #22c55e40", textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#22c55e" }}>3 pts</div>
                  <div style={{ fontSize: 11, color: DIM }}>Victoria</div>
                </div>
                <div style={{ padding: "12px 24px", borderRadius: 10, background: BG2, border: "1px solid #f59e0b40", textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#f59e0b" }}>1 pt</div>
                  <div style={{ fontSize: 11, color: DIM }}>Empate</div>
                </div>
                <div style={{ padding: "12px 24px", borderRadius: 10, background: BG2, border: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>0 pts</div>
                  <div style={{ fontSize: 11, color: DIM }}>Derrota</div>
                </div>
              </div>

              <div style={{ marginTop: 20 }}>
                <span style={{ fontSize: 13, color: DIM }}>Prórroga y penaltis en eliminatorias</span>
              </div>
            </div>

            {/* Imagen */}
            <div>
              <img 
                src="/img/zonamundial-images/imagenes/grupos modo carrera.jpeg" 
                alt="Fase de grupos" 
                style={ImgStyle}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PARTIDOS */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            {/* Texto */}
            <div>
              <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Paso 4</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, marginTop: 16, marginBottom: 24 }}>
                ⚽ Jugando <span style={{ color: GOLD }}>Partidos</span>
              </h2>
              <p style={{ color: MID, fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>
                Partidos simulados en tiempo real. Toma decisiones tácticas clave y vive cada momento.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: "⏱️", text: "Velocidad 1x, 2x, 4x y pausa" },
                  { icon: "🎲", text: "Decisiones: Atacar, Equilibrado, Defender" },
                  { icon: "📝", text: "Narración en vivo" },
                  { icon: "⚽", text: "Goles con goleadores reales" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15 }}>
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Imagen */}
            <div>
              <img 
                src="/img/zonamundial-images/imagenes/gol messi modo carrera.jpeg" 
                alt="Partido en vivo" 
                style={ImgStyle}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOGROS */}
      <section style={{ padding: "80px 20px", background: BG3 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px,5vw,42px)", fontWeight: 800 }}>
              🏅 Logros
            </h2>
            <p style={{ color: MID, marginTop: 12 }}>10 logros exclusivos por desbloquear</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
            {ACHIEVEMENTS_PREVIEW.map((a, i) => (
              <div key={i} style={{ padding: 24, borderRadius: 16, background: BG2, border: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>{a.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{a.name}</div>
                <div style={{ fontSize: 11, color: DIM, textTransform: "uppercase", letterSpacing: 1 }}>{a.rarity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 20px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201,168,76,0.1) 0%, transparent 60%)" }} />
        
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
          <div style={{ fontSize: 64, marginBottom: 24 }}>🏆</div>
          <h2 style={{ fontSize: "clamp(28px,5vw,44px)", fontWeight: 900, marginBottom: 16 }}>
            ¡Empieza tu camino!
          </h2>
          <p style={{ color: MID, marginBottom: 40, fontSize: 18 }}>
            Elige tu nación y lleva a tu selección a la gloria.
          </p>
          <Link href="/registro" style={{
            padding: "18px 44px", borderRadius: 14,
            background: `linear-gradient(135deg,${GOLD},${GOLD2})`,
            color: BG, fontWeight: 800, fontSize: 18, textDecoration: "none", display: "inline-block",
            boxShadow: "0 8px 32px rgba(201,168,76,0.35)"
          }}>
            🚀 Nueva Carrera
          </Link>
        </div>
      </section>
    </div>
  )
}