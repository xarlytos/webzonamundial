"use client";

import Link from "next/link";

const BG="#060B14",BG2="#0F1D32",BG3="#0B1825",GOLD="#c9a84c",GOLD2="#e8d48b",MID="#8a94b0",DIM="#6a7a9a",DARK="#4a5570";

const PLANS = [
  {
    name: "Gratis",
    price: "0€",
    period: "para siempre",
    features: [
      "Predicciones básicas",
      "Fantasy (1 equipo)",
      "Trivia ilimitada",
      "Acceso a ligas públicas",
      "Streaming con anuncios",
    ],
    cta: "Registrarse gratis",
    popular: false,
  },
  {
    name: "Premium",
    price: "9,99€",
    period: "/mes",
    features: [
      "Todas las predicciones",
      "Fantasy (5 equipos)",
      "IA Coach ilimitado",
      "Ligas privadas ilimitadas",
      "Streaming sin anuncios",
      "Estadísticas avanzadas",
      "Soporte prioritario",
      "Insignia Premium",
    ],
    cta: "Ser Premium",
    popular: true,
  },
];

const BENEFITS = [
  { icon: "🧠", title: "IA Coach sin límites", desc: "Análisis ilimitados de todos los partidos" },
  { icon: "🏆", title: "Múltiples equipos", desc: "Juega con hasta 5 equipos en Fantasy" },
  { icon: "👥", title: "Ligas ilimitadas", desc: "Crea todas las ligas privadas que quieras" },
  { icon: "📺", title: "Sin anuncios", desc: "Streaming limpio sin interrupciones" },
  { icon: "📊", title: "Stats Pro", desc: "Acceso a todas las estadísticas avanzadas" },
  { icon: "⚡", title: "Soporte VIP", desc: "Atención prioritaria en menos de 24h" },
];

export default function PremiumPage() {
  return (
    <div style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif",minHeight:"100vh"}}>
      {/* Hero */}
      <section style={{padding:"80px 20px 60px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(201,168,76,0.1) 0%,transparent 60%)"}}/>
        <div style={{maxWidth:800,margin:"0 auto",position:"relative"}}>
          <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>
            Mejora tu experiencia
          </span>
          <h1 style={{fontSize:"clamp(32px,6vw,52px)",fontWeight:900,marginTop:16,lineHeight:1.1}}>
            Hazte <span style={{color:GOLD}}>Premium</span>
          </h1>
          <p style={{color:MID,marginTop:20,maxWidth:600,margin:"20px auto 0",lineHeight:1.7,fontSize:17}}>
            Desbloquea todo el potencial de ZonaMundial. IA ilimitada, múltiples equipos, 
            ligas privadas sin restricciones y mucho más.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section style={{padding:"60px 20px"}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:24,justifyContent:"center"}}>
            {PLANS.map((plan,i)=>[
              <div key={i} style={{
                padding:36,borderRadius:24,
                background:plan.popular?BG2:BG3,
                border:`2px solid ${plan.popular?GOLD:"rgba(255,255,255,0.05)"}`,
                position:"relative",
                transform:plan.popular?"scale(1.02)":"none",
              }}>
                {plan.popular && (
                  <div style={{
                    position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",
                    padding:"6px 16px",borderRadius:20,
                    background:GOLD,color:BG,
                    fontSize:12,fontWeight:700
                  }}>
                    MÁS POPULAR
                  </div>
                )}
                
                <div style={{textAlign:"center",marginBottom:32}}>
                  <h3 style={{fontSize:20,fontWeight:700,marginBottom:16}}>{plan.name}</h3>
                  <div style={{display:"flex",alignItems:"baseline",justifyContent:"center",gap:4}}>
                    <span style={{fontSize:48,fontWeight:800}}>{plan.price}</span>
                    <span style={{fontSize:16,color:DIM}}>{plan.period}</span>
                  </div>
                </div>

                <ul style={{listStyle:"none",padding:0,margin:0,marginBottom:32,display:"flex",flexDirection:"column",gap:12}}>
                  {plan.features.map((feature,j)=>[
                    <li key={j} style={{display:"flex",alignItems:"center",gap:12,fontSize:15}}>
                      <span style={{color:GOLD}}>✓</span>
                      <span style={{color:DIM}}>{feature}</span>
                    </li>
                  ])}
                </ul>

                <Link href="/registro" style={{
                  display:"block",width:"100%",padding:"14px 0",borderRadius:12,
                  background:plan.popular?`linear-gradient(135deg,${GOLD},${GOLD2})`:"transparent",
                  border:`2px solid ${plan.popular?GOLD:"rgba(255,255,255,0.1)"}`,
                  color:plan.popular?BG:"#fff",
                  fontWeight:700,fontSize:15,textAlign:"center",textDecoration:"none"
                }}>
                  {plan.cta}
                </Link>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{padding:"60px 20px",background:BG3}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Ventajas <span style={{color:GOLD}}>Premium</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:24}}>
            {BENEFITS.map((benefit,i)=>[
              <div key={i} style={{
                padding:24,borderRadius:16,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)",
                display:"flex",gap:16,alignItems:"flex-start"
              }}>
                <div style={{fontSize:32}}>{benefit.icon}</div>
                <div>
                  <h3 style={{fontWeight:700,fontSize:17,marginBottom:6}}>{benefit.title}</h3>
                  <p style={{fontSize:14,color:DIM,lineHeight:1.6}}>{benefit.desc}</p>
                </div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{padding:"60px 20px"}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Preguntas <span style={{color:GOLD}}>frecuentes</span>
            </h2>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            {[
              {q:"¿Puedo cancelar en cualquier momento?",a:"Sí, puedes cancelar tu suscripción Premium cuando quieras. Seguirás teniendo acceso hasta el final del período pagado."},
              {q:"¿Qué pasa si bajo de Premium a Gratis?",a:"Conservarás tus datos, pero algunas funciones se limitarán según el plan gratuito."},
              {q:"¿Hay descuento por pago anual?",a:"Sí, al pagar anualmente ahorras 2 meses. El precio es de 99,99€/año."},
            ].map((faq,i)=>[
              <div key={i} style={{
                padding:24,borderRadius:16,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)"
              }}>
                <h3 style={{fontWeight:700,fontSize:16,marginBottom:8}}>{faq.q}</h3>
                <p style={{fontSize:14,color:DIM,lineHeight:1.6}}>{faq.a}</p>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"80px 20px",textAlign:"center",background:BG3}}>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <div style={{fontSize:64,marginBottom:24}}>👑</div>
          <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800,marginBottom:16}}>
            Únete a los <span style={{color:GOLD}}>Premium</span>
          </h2>
          <p style={{color:MID,marginBottom:32,fontSize:16}}>
            Miles de usuarios ya disfrutan de la experiencia completa. ¿A qué esperas?
          </p>
          <Link href="/registro" style={{
            padding:"18px 48px",borderRadius:12,
            background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
            color:BG,fontWeight:700,fontSize:18,textDecoration:"none",display:"inline-block"
          }}>
            Ser Premium ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
