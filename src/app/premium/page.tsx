"use client";

import Link from "next/link";
import { FeatureIcon } from "@/components/FeatureIcon";

const BG = "#060B14", BG2 = "#0F1D32", BG3 = "#0B1825", GOLD = "#c9a84c", GOLD2 = "#e8d48b", MID = "#8a94b0", DIM = "#6a7a9a", DARK = "#4a5570";

const COMPARISON_DATA = [
  { feature: "Predicciones básicas", free: "✅", premium: "✅", highlight: false },
  { feature: "Fantasy", free: "Básico", premium: "Funciones exclusivas Premium", highlight: true },
  { feature: "Trivia", free: "Modo Clásico", premium: "Todos los modos de juego", highlight: true },
  { feature: "IA Coach", free: "Básico", premium: "Pro completo", highlight: true },
  { feature: "Ligas privadas", free: "Unirse", premium: "Crear ilimitadas", highlight: true },
  { feature: "Predicciones avanzadas (8 tipos)", free: "❌", premium: "✅ Ilimitadas", highlight: true },
  { feature: "Estadísticas avanzadas", free: "Básicas", premium: "Pro + xG/xA", highlight: true },
  { feature: "Sin anuncios", free: "❌", premium: "✅", highlight: true },
  { feature: "Badge Premium", free: "❌", premium: "✅ Dorado", highlight: true },
  { feature: "Soporte", free: "Email", premium: "Prioritario 24h", highlight: true },
  { feature: "Acceso anticipado", free: "❌", premium: "✅ Betas", highlight: true },
  { feature: "Exportar datos", free: "❌", premium: "✅ CSV/Excel", highlight: true },
  { feature: "Ligas premium exclusivas", free: "❌", premium: "✅ Torneos", highlight: true },
];

const PRICING_PLAN = {
  name: "Mundial Completo 2026",
  price: "10€",
  period: " todo el mundial",
  description: "Acceso completo a todas las funciones Premium durante todo el Mundial 2026",
};

const PREMIUM_FEATURES = [
  {
    iconTitle: "IA Coach Pro",
    title: "IA Coach Pro",
    desc: "Tu asistente personal de inteligencia artificial analiza TODOS los partidos del Mundial usando Machine Learning avanzado. Recibe alertas en tiempo real sobre lesiones, rotaciones de jugadores, cambios tácticos y noticias de última hora. Obtén reportes personalizados semanales con recomendaciones específicas para tu equipo Fantasy y predicciones basadas en datos históricos y forma actual.",
  },
  {
    iconTitle: "Estadísticas Avanzadas",
    title: "Estadísticas Avanzadas",
    desc: "Accede a métricas de nivel profesional: xG (goles esperados), xA (asistencias esperadas), heatmaps de posición, mapas de tiros detallados, redes de pases completas, análisis de presión, distancia recorrida, sprints, y tendencias de forma de cada jugador. Compara estadísticas históricas entre selecciones y jugadores con filtros avanzados.",
  },
  {
    iconTitle: "Predicciones Ilimitadas",
    title: "Predicciones Ilimitadas",
    desc: "Olvídate de los límites diarios. Realiza todas las predicciones que quieras con acceso ilimitado a los 8 tipos disponibles: resultado exacto, marcador, goles totales, ambos marcan, primer gol, tarjetas, corners y jugadores destacados. Disfruta de multiplicadores exclusivos solo para usuarios Premium que aumentan tus recompensas.",
  },
  {
    iconTitle: "Badge y Perfil Premium",
    title: "Badge y Perfil Premium",
    desc: "Destaca con tu badge dorado exclusivo visible en toda la plataforma. Obtén un marco de avatar animado único que muestra tu estatus Premium, animaciones especiales cuando ganas predicciones o subes en el ranking, y prioridad absoluta en todas las tablas de clasificación públicas. Tu perfil incluye estadísticas avanzadas y logros desbloqueables.",
  },
  {
    iconTitle: "Ligas Premium Exclusivas",
    title: "Ligas Premium Exclusivas",
    desc: "Accede a ligas privadas exclusivas solo para usuarios Premium con premios especiales, competiciones paralelas únicas durante el Mundial, y la posibilidad de crear ligas ilimitadas con configuraciones avanzadas. Participa en torneos semanales con recompensas exclusivas y compite contra los mejores jugadores.",
  },
  {
    iconTitle: "Exportar Datos",
    title: "Exportar Datos",
    desc: "Descarga todos tus datos, estadísticas y predicciones en formato CSV o Excel para analizarlos fuera de la plataforma. Crea tus propios modelos de análisis, compara tu rendimiento y lleva un seguimiento detallado de tu progreso durante todo el Mundial con reportes completos exportables.",
  },
  {
    iconTitle: "Acceso Anticipado",
    title: "Acceso Anticipado",
    desc: "Sé el primero en probar todas las nuevas funciones que lanzamos. Accede a betas exclusivas, funciones experimentales y herramientas en desarrollo antes que nadie. Tu feedback como usuario Premium será prioritario para el desarrollo de nuevas características.",
  },
  {
    iconTitle: "Soporte Prioritario",
    title: "Soporte Prioritario",
    desc: "Obtén atención inmediata con nuestro equipo de soporte dedicado. Respuestas garantizadas en menos de 24 horas, chat en vivo disponible, y un canal directo para sugerencias y reporte de problemas. Como usuario Premium, tu experiencia es nuestra máxima prioridad.",
  },
];

export default function PremiumPage() {
  return (
    <div style={{ background: BG, color: "#fff", fontFamily: "'Outfit',sans-serif", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ padding: "20px 20px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(201,168,76,0.15) 0%,transparent 60%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
          <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center' }}>
            <FeatureIcon title="Fantasy" size={64} />
          </div>
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
                <span style={{ color: "#fff", fontWeight: row.highlight ? 600 : 400 }}>
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
              <span style={{ color: GOLD }}>Precios</span>
            </h2>
            <p style={{ color: MID, marginTop: 12, fontSize: 16 }}>
              Menos de un café al mes para la mejor experiencia del Mundial
            </p>
          </div>

          <div style={{ maxWidth: 420, margin: "0 auto" }}>
            <div
              style={{
                padding: 48,
                borderRadius: 24,
                background: BG2,
                border: `2px solid ${GOLD}`,
                position: "relative",
                textAlign: "center",
              }}
            >
              <div style={{
                position: "absolute",
                top: -15,
                left: "50%",
                transform: "translateX(-50%)",
                padding: "8px 24px",
                borderRadius: 20,
                background: GOLD,
                color: BG,
                fontSize: 13,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}>
                PRECIO ÚNICO
              </div>

              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, color: GOLD }}>
                {PRICING_PLAN.name}
              </h3>
              
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 8, marginBottom: 16 }}>
                <span style={{ fontSize: 56, fontWeight: 800 }}>{PRICING_PLAN.price}</span>
                <span style={{ fontSize: 16, color: MID }}>{PRICING_PLAN.period}</span>
              </div>

              <p style={{ color: MID, fontSize: 15, marginBottom: 32, lineHeight: 1.6 }}>
                {PRICING_PLAN.description}
              </p>

              <Link
                href="/registro"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "16px 0",
                  borderRadius: 12,
                  background: `linear-gradient(135deg,${GOLD},${GOLD2})`,
                  color: BG,
                  fontWeight: 800,
                  fontSize: 16,
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                Obtener Premium →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Detail */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800 }}>
              Features <span style={{ color: GOLD }}>Premium</span> detalladas
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
                <div style={{ marginBottom: 16 }}>
                  <FeatureIcon title={feature.iconTitle} size={48} />
                </div>
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

      {/* CTA */}
      <section style={{ padding: "80px 20px", textAlign: "center", background: BG3 }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
            <FeatureIcon title="Predicciones" size={64} />
          </div>
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


    </div>
  );
}
