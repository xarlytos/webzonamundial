"use client";

import Link from "next/link";

const BG = "#060B14", BG2 = "#0F1D32", BG3 = "#0B1825", GOLD = "#c9a84c", GOLD2 = "#e8d48b", MID = "#8a94b0", DIM = "#6a7a9a", DARK = "#4a5570";

const COMPARISON_DATA = [
  { feature: "Predicciones básicas", free: "✅", premium: "✅" },
  { feature: "Fantasy standard", free: "✅", premium: "✅" },
  { feature: "Trivia diaria", free: "✅", premium: "✅" },
  { feature: "IA Coach básica", free: "✅", premium: "✅" },
  { feature: "Ligas privadas", free: "✅", premium: "✅" },
  { feature: "Predicciones avanzadas (8 tipos)", free: "3/día", premium: "Ilimitadas", highlight: true },
  { feature: "IA Coach pro", free: "❌", premium: "✅", highlight: true },
  { feature: "Estadísticas avanzadas", free: "Limitadas", premium: "Completas", highlight: true },
  { feature: "Sin anuncios", free: "❌", premium: "✅", highlight: true },
  { feature: "Badge Premium", free: "❌", premium: "✅", highlight: true },
  { feature: "Soporte prioritario", free: "❌", premium: "✅", highlight: true },
  { feature: "Acceso anticipado", free: "❌", premium: "✅", highlight: true },
  { feature: "Exportar datos", free: "❌", premium: "✅", highlight: true },
  { feature: "Ligas premium exclusivas", free: "❌", premium: "✅", highlight: true },
];

const PRICING_PLANS = [
  { name: "Mensual", price: "$4.99", period: "/mes", save: null, popular: false },
  { name: "Mundial Completo", price: "$19.99", period: " (5 meses)", save: "Ahorra 20%", popular: true },
  { name: "Anual", price: "$39.99", period: "/año", save: "Mejor valor", popular: false },
];

const PREMIUM_FEATURES = [
  {
    icon: "🤖",
    title: "IA Coach Pro",
    desc: "Análisis completo de TODOS los partidos con Machine Learning avanzado. Alertas de última hora (lesiones, rotaciones) y reportes personalizados semanales.",
  },
  {
    icon: "📊",
    title: "Estadísticas Avanzadas",
    desc: "Acceso completo a xG, xA, heatmaps de posición, mapas de tiros, redes de pases y tendencias de forma. Datos de nivel profesional.",
  },
  {
    icon: "🎯",
    title: "Predicciones Ilimitadas",
    desc: "Sin límites diarios. Todos los 8 tipos de predicciones disponibles siempre. Multiplicadores exclusivos solo para usuarios Premium.",
  },
  {
    icon: "👑",
    title: "Badge y Perfil Premium",
    desc: "Badge dorado 'Premium' visible, marco de avatar exclusivo animado, animaciones especiales al ganar y prioridad en leaderboards públicos.",
  },
];

const GUARANTEES = [
  { icon: "✅", title: "7 días de prueba GRATIS", desc: "Prueba todas las funciones Premium sin compromiso" },
  { icon: "🔄", title: "Cancela cuando quieras", desc: "Sin contratos, sin letra pequeña, sin complicaciones" },
  { icon: "🛡️", title: "Reembolso 30 días", desc: "Si no te gusta, te devolvemos tu dinero. Garantizado." },
];

export default function PremiumPage() {
  return (
    <div style={{ background: BG, color: "#fff", fontFamily: "'Outfit',sans-serif", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ padding: "80px 20px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(201,168,76,0.15) 0%,transparent 60%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>💎</div>
          <h1 style={{ fontSize: "clamp(32px,6vw,52px)", fontWeight: 900, lineHeight: 1.1 }}>
            Desbloquea el máximo potencial
          </h1>
          <p style={{ color: GOLD, fontSize: "clamp(18px,3vw,24px)", fontWeight: 600, marginTop: 16 }}>
            Lleva tu experiencia al siguiente nivel
          </p>
          <p style={{ color: MID, marginTop: 20, maxWidth: 600, margin: "20px auto 0", lineHeight: 1.7, fontSize: 17 }}>
            Funciones exclusivas, ventajas competitivas, cero anuncios. Sé el mejor, sin límites.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              Free vs <span style={{ color: GOLD }}>Premium</span>
            </h2>
          </div>

          <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", background: BG2, padding: "16px 20px", fontWeight: 700, fontSize: 14 }}>
              <span>Feature</span>
              <span style={{ textAlign: "center" }}>Free</span>
              <span style={{ textAlign: "center", color: GOLD }}>Premium</span>
            </div>

            {/* Rows */}
            {COMPARISON_DATA.map((row, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr",
                  padding: "14px 20px",
                  background: i % 2 === 0 ? BG3 : BG2,
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  fontSize: 14,
                }}
              >
                <span style={{ color: row.highlight ? "#fff" : DIM, fontWeight: row.highlight ? 600 : 400 }}>
                  {row.feature}
                </span>
                <span style={{ textAlign: "center", color: row.free === "✅" ? GOLD : row.free === "❌" ? DARK : DIM }}>
                  {row.free}
                </span>
                <span style={{ textAlign: "center", color: row.premium === "✅" || row.highlight ? GOLD : DIM, fontWeight: row.highlight ? 700 : 400 }}>
                  {row.premium}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "60px 20px", background: BG3 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              💰 <span style={{ color: GOLD }}>Precios</span>
            </h2>
            <p style={{ color: MID, marginTop: 12, fontSize: 16 }}>
              Menos de un café al mes para la mejor experiencia del Mundial
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, justifyContent: "center" }}>
            {PRICING_PLANS.map((plan, i) => (
              <div
                key={i}
                style={{
                  padding: 36,
                  borderRadius: 24,
                  background: plan.popular ? BG2 : BG,
                  border: `2px solid ${plan.popular ? GOLD : "rgba(255,255,255,0.1)"}`,
                  position: "relative",
                  transform: plan.popular ? "scale(1.02)" : "none",
                }}
              >
                {plan.popular && (
                  <div style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "6px 16px",
                    borderRadius: 20,
                    background: GOLD,
                    color: BG,
                    fontSize: 12,
                    fontWeight: 700,
                  }}>
                    MÁS POPULAR
                  </div>
                )}

                <div style={{ textAlign: "center", marginBottom: 24 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: plan.popular ? GOLD : "#fff" }}>
                    {plan.name}
                  </h3>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 4 }}>
                    <span style={{ fontSize: 42, fontWeight: 800 }}>{plan.price}</span>
                    <span style={{ fontSize: 14, color: DIM }}>{plan.period}</span>
                  </div>
                  {plan.save && (
                    <div style={{
                      marginTop: 8,
                      padding: "4px 12px",
                      borderRadius: 12,
                      background: plan.save === "Mejor valor" ? "rgba(201,168,76,0.2)" : "rgba(255,255,255,0.1)",
                      color: plan.save === "Mejor valor" ? GOLD : "#fff",
                      fontSize: 12,
                      fontWeight: 700,
                      display: "inline-block",
                    }}>
                      {plan.save}
                    </div>
                  )}
                </div>

                <Link
                  href="/registro"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "14px 0",
                    borderRadius: 12,
                    background: plan.popular ? `linear-gradient(135deg,${GOLD},${GOLD2})` : "transparent",
                    border: `2px solid ${plan.popular ? GOLD : "rgba(255,255,255,0.1)"}`,
                    color: plan.popular ? BG : "#fff",
                    fontWeight: 700,
                    fontSize: 15,
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                >
                  Elegir plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features Detail */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              ✨ Features <span style={{ color: GOLD }}>Premium</span> detalladas
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 24 }}>
            {PREMIUM_FEATURES.map((feature, i) => (
              <div
                key={i}
                style={{
                  padding: 28,
                  borderRadius: 16,
                  background: BG2,
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 16 }}>{feature.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 12, color: GOLD }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: 14, color: DIM, lineHeight: 1.6 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section style={{ padding: "60px 20px", background: BG3 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              🛡️ <span style={{ color: GOLD }}>Garantía</span>
            </h2>
            <p style={{ color: MID, marginTop: 12 }}>Sin compromiso. Sin letra pequeña.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
            {GUARANTEES.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: 24,
                  borderRadius: 16,
                  background: BG2,
                  border: "1px solid rgba(255,255,255,0.05)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: DIM, lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Offer */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            padding: "40px 32px",
            borderRadius: 24,
            background: `linear-gradient(135deg, ${BG2}, ${BG3})`,
            border: `2px solid ${GOLD}`,
            position: "relative",
          }}>
            <div style={{
              position: "absolute",
              top: -15,
              left: "50%",
              transform: "translateX(-50%)",
              padding: "8px 20px",
              borderRadius: 20,
              background: GOLD,
              color: BG,
              fontSize: 13,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}>
              Oferta Limitada
            </div>

            <h2 style={{ fontSize: "clamp(22px,4vw,32px)", fontWeight: 800, marginBottom: 16 }}>
              🔥 Oferta de lanzamiento
            </h2>
            <p style={{ fontSize: "clamp(28px,5vw,42px)", fontWeight: 900, color: GOLD, marginBottom: 8 }}>
              50% de descuento
            </p>
            <p style={{ fontSize: 16, color: MID, marginBottom: 24 }}>
              Para los primeros 1,000 usuarios Premium
            </p>
            <div style={{
              padding: "12px 24px",
              borderRadius: 12,
              background: "rgba(201,168,76,0.15)",
              display: "inline-block",
              marginBottom: 8,
            }}>
              <span style={{ color: GOLD, fontWeight: 700 }}>Quedan: [XXX] cupos</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 20px", textAlign: "center", background: BG3 }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 64, marginBottom: 24 }}>🎯</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, marginBottom: 16 }}>
            ¿Listo para el máximo potencial?
          </h2>
          <p style={{ color: MID, marginBottom: 32, fontSize: 16 }}>
            Únete a miles de usuarios que ya disfrutan de la experiencia Premium completa.
          </p>
          <Link
            href="/registro"
            style={{
              padding: "18px 48px",
              borderRadius: 12,
              background: `linear-gradient(135deg,${GOLD},${GOLD2})`,
              color: BG,
              fontWeight: 800,
              fontSize: 18,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Empieza tu prueba gratis →
          </Link>
          <p style={{ color: DARK, marginTop: 16, fontSize: 13 }}>
            7 días gratis · Cancela cuando quieras · Sin tarjeta
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              Preguntas <span style={{ color: GOLD }}>frecuentes</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { q: "¿Puedo cancelar en cualquier momento?", a: "Sí, puedes cancelar tu suscripción Premium cuando quieras. Seguirás teniendo acceso hasta el final del período pagado." },
              { q: "¿Qué pasa si bajo de Premium a Gratis?", a: "Conservarás tus datos, pero algunas funciones se limitarán según el plan gratuito." },
              { q: "¿La prueba gratis requiere tarjeta?", a: "No, los 7 días de prueba son completamente gratuitos y no requieren método de pago." },
            ].map((faq, i) => (
              <div
                key={i}
                style={{
                  padding: 24,
                  borderRadius: 16,
                  background: BG2,
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{faq.q}</h3>
                <p style={{ fontSize: 14, color: DIM, lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
