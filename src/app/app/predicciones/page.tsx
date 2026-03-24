"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BG="#060B14", BG2="#0F1D32", BG3="#0B1825", GOLD="#c9a84c", GOLD2="#e8d48b", MID="#8a94b0", DIM="#6a7a9a", DARK="#4a5570";

const PREDICTION_TYPES = [
  { num: "1", title: "Resultado Exacto", difficulty: "4/5", points: "Hasta 50x", desc: "Predice el marcador final exacto del partido. Mayor precisión, mayor recompensa." },
  { num: "2", title: "Ganador del Partido", difficulty: "2/5", points: "Hasta 15x", desc: "Simple y efectivo. Elige victoria local, empate o victoria visitante." },
  { num: "3", title: "Primer Goleador", difficulty: "5/5", points: "Hasta 100x", desc: "Predice quién marcará el primer gol del partido. Alta dificultad, máxima recompensa." },
  { num: "4", title: "Predicción Encadenada", difficulty: "5/5", points: "Hasta 200x", desc: "Combina múltiples predicciones en una sola apuesta. Riesgo alto, recompensa potente." },
  { num: "5", title: "Duelo de Jugadores", difficulty: "3/5", points: "Hasta 25x", desc: "Compara rendimiento entre jugadores: goles, asistencias, tarjetas y más." },
  { num: "6", title: "Over/Under", difficulty: "3/5", points: "Hasta 20x", desc: "Predice si el total de goles, corners o tarjetas superará un número específico." },
  { num: "7", title: "Minuto del Gol", difficulty: "4/5", points: "Hasta 75x", desc: "Acierta en qué minuto exacto se marcará un gol clave." },
  { num: "8", title: "Predicción Social", difficulty: "1/5", points: "Hasta 10x", desc: "Sigue a la mayoría para puntos seguros, o apuesta contra la corriente." },
];

const MULTIPLIERS = [
  { icon: "/img/zonamundial-images/imagenes/logos para sustuir emojis/micro-predicciones.png", title: "Underdog Multiplier", value: "x2", desc: "Cuando apuestas por el equipo menos favorito y ganas, duplicas tus puntos." },
  { icon: "/img/zonamundial-images/imagenes/logos para sustuir emojis/ranking.png", title: "Diamond Match", value: "x3", desc: "Partidos seleccionados con multiplicador especial de 3x para todas las predicciones." },
];

const CHIPS = [
  { icon: "/img/zonamundial-images/imagenes/logos para sustuir emojis/predicciones.png", title: "Dado", desc: "Duplica los puntos de tu predicción. Usa estratégicamente." },
  { icon: "/img/zonamundial-images/imagenes/logos para sustuir emojis/ia coach.png", title: "Bola de Cristal", desc: "Revela qué está pensando la comunidad antes de apostar." },
  { icon: "/img/zonamundial-images/imagenes/logos para sustuir emojis/micro-predicciones.png", title: "Flash", desc: "Bonus extra por hacer tu predicción en los últimos 10 minutos." },
];

export default function PrediccionesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      const heroTl = gsap.timeline();
      heroTl.from("[data-hero-badge]", { y: -20, opacity: 0, duration: 0.6, ease: "power2.out" })
            .from("[data-hero-title]", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
            .from("[data-hero-desc]", { y: 30, opacity: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
            .from("[data-hero-cta]", { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.4")
            .from("[data-hero-decor]", { scale: 0.5, opacity: 0, duration: 1, stagger: 0.2, ease: "power2.out" }, "-=0.8");

      // App layout section
      gsap.from("[data-app-img]", {
        scrollTrigger: { trigger: "[data-app-section]", start: "top 80%" },
        x: -60, opacity: 0, duration: 0.9, ease: "power3.out"
      });

      gsap.from("[data-app-content]", {
        scrollTrigger: { trigger: "[data-app-section]", start: "top 80%" },
        x: 60, opacity: 0, duration: 0.9, ease: "power3.out"
      });

      gsap.from("[data-app-feature]", {
        scrollTrigger: { trigger: "[data-app-features]", start: "top 85%" },
        y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: "power2.out"
      });

      // Prediction types grid
      gsap.from("[data-types-header]", {
        scrollTrigger: { trigger: "[data-types-section]", start: "top 80%" },
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out"
      });

      gsap.from("[data-type-card]", {
        scrollTrigger: { trigger: "[data-types-grid]", start: "top 85%" },
        y: 50, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power3.out"
      });

      // Multipliers and Chips
      gsap.from("[data-mult-section] > div", {
        scrollTrigger: { trigger: "[data-mult-section]", start: "top 80%" },
        y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out"
      });

      gsap.from("[data-mult-item]", {
        scrollTrigger: { trigger: "[data-mult-list]", start: "top 85%" },
        x: -30, opacity: 0, duration: 0.6, stagger: 0.12, ease: "power2.out"
      });

      gsap.from("[data-chip-item]", {
        scrollTrigger: { trigger: "[data-chip-list]", start: "top 85%" },
        x: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: "power2.out"
      });

      // How it works
      gsap.from("[data-steps-header]", {
        scrollTrigger: { trigger: "[data-steps-section]", start: "top 80%" },
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out"
      });

      gsap.from("[data-step-item]", {
        scrollTrigger: { trigger: "[data-steps-grid]", start: "top 85%" },
        y: 50, opacity: 0, duration: 0.7, stagger: 0.15, ease: "back.out(1.4)"
      });

      // CTA
      gsap.from("[data-cta-content]", {
        scrollTrigger: { trigger: "[data-cta-section]", start: "top 80%" },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out"
      });

      // Hover effects for cards
      gsap.utils.toArray<HTMLElement>("[data-hover-card]").forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
        });
      });

      // Hover effects for buttons
      gsap.utils.toArray<HTMLElement>("[data-hover-btn]").forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
          gsap.to(btn, { scale: 1.05, duration: 0.2, ease: "power2.out" });
        });
        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, { scale: 1, duration: 0.2, ease: "power2.out" });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif",minHeight:"100vh"}}>
      {/* ═══════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════ */}
      <section style={{padding:"100px 20px 60px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)"}}/>
        
        {/* Decoración de fondo */}
        <div data-hero-decor style={{position:"absolute",top:"10%",left:"5%",fontSize:120,opacity:0.03,transform:"rotate(-15deg)"}}>🎯</div>
        <div data-hero-decor style={{position:"absolute",bottom:"10%",right:"5%",fontSize:100,opacity:0.03,transform:"rotate(15deg)"}}>🏆</div>
        
        <div style={{maxWidth:800,margin:"0 auto",position:"relative"}}>
          <span data-hero-badge style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase",display:"inline-block"}}>Plataforma</span>
          
          <h1 data-hero-title style={{fontSize:"clamp(36px,7vw,56px)",fontWeight:900,marginTop:20,lineHeight:1.1}}>
            8 formas de predecir,<br/><span style={{color:GOLD}}>infinitas de ganar</span>
          </h1>
          
          <p data-hero-desc style={{color:MID,marginTop:24,maxWidth:600,margin:"24px auto 0",lineHeight:1.7,fontSize:18}}>
            <strong>Predecir no es adivinar:</strong> es arte, estadística y coraje. 
            Cada partido es una oportunidad de demostrar tu conocimiento futbolístico.
          </p>
          
          <div style={{marginTop:40,display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/registro" data-hero-cta data-hover-btn style={{
              padding:"16px 36px",borderRadius:14,
              background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
              color:BG,fontWeight:800,fontSize:16,textDecoration:"none",display:"inline-block",
              boxShadow:"0 8px 32px rgba(201,168,76,0.3)"
            }}>
              🚀 Empezar a predecir
            </Link>
            <span data-hero-cta style={{
              padding:"16px 28px",borderRadius:14,
              background:BG2,border:`1px solid rgba(255,255,255,0.1)`,
              color:MID,fontWeight:600,fontSize:14
            }}>
              Gratis · 8 tipos · Hasta 200x
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LAYOUT 2 COLUMNAS: IMAGEN APP + TEXTO
          ═══════════════════════════════════════ */}
      <section data-app-section style={{padding:"60px 20px",background:BG}}>
        <div style={{maxWidth:1400,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(450px,1fr))",gap:60,alignItems:"center"}}>
            {/* Imagen de la app de predicciones */}
            <div data-app-img style={{position:"relative"}}>
              <div style={{
                borderRadius:24,
                overflow:"hidden",
                boxShadow:"0 30px 60px rgba(0,0,0,0.4)",
                border:"1px solid rgba(255,255,255,0.08)",
                maxWidth:380,
                margin:"0 auto"
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/img/zonamundial-images/imagenes/apuestas para pagina apuestas.jpeg" 
                  alt="App de Predicciones ZonaMundial" 
                  style={{width:"100%",height:"auto",display:"block"}}
                />
              </div>
            </div>

            {/* Texto explicativo */}
            <div data-app-content>
              <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:2,textTransform:"uppercase"}}>Interfaz intuitiva</span>
              <h2 style={{fontSize:"clamp(28px,4vw,40px)",fontWeight:800,marginTop:16,marginBottom:24,lineHeight:1.2}}>
                Predice con <span style={{color:GOLD}}>estadísticas</span> en tiempo real
              </h2>
              <p style={{color:MID,fontSize:17,lineHeight:1.7,marginBottom:32}}>
                Visualiza las cuotas, el historial de enfrentamientos y las estadísticas de cada equipo. 
                Toma decisiones informadas con datos actualizados al instante.
              </p>
              
              <div data-app-features style={{display:"flex",flexDirection:"column",gap:16}}>
                <div data-app-feature data-hover-card style={{display:"flex",alignItems:"center",gap:16,padding:16,borderRadius:12,background:BG2,border:"1px solid rgba(255,255,255,0.05)",cursor:"pointer"}}>
                  <div style={{width:44,height:44,borderRadius:10,background:`${GOLD}20`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>⚽</div>
                  <div>
                    <div style={{fontWeight:700,fontSize:15}}>104 Partidos disponibles</div>
                    <div style={{fontSize:13,color:DIM}}>Desde fase de grupos hasta la gran final</div>
                  </div>
                </div>
                <div data-app-feature data-hover-card style={{display:"flex",alignItems:"center",gap:16,padding:16,borderRadius:12,background:BG2,border:"1px solid rgba(255,255,255,0.05)",cursor:"pointer"}}>
                  <div style={{width:44,height:44,borderRadius:10,background:`${GOLD}20`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>📊</div>
                  <div>
                    <div style={{fontWeight:700,fontSize:15}}>Cuotas en tiempo real</div>
                    <div style={{fontSize:13,color:DIM}}>Multiplicadores dinámicos según el momento</div>
                  </div>
                </div>
                <div data-app-feature data-hover-card style={{display:"flex",alignItems:"center",gap:16,padding:16,borderRadius:12,background:BG2,border:"1px solid rgba(255,255,255,0.05)",cursor:"pointer"}}>
                  <div style={{width:44,height:44,borderRadius:10,background:`${GOLD}20`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>💎</div>
                  <div>
                    <div style={{fontWeight:700,fontSize:15}}>Partidos Diamante</div>
                    <div style={{fontSize:13,color:DIM}}>Puntos x2 en encuentros especiales</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TIPOS DE PREDICCIONES - GRID
          ═══════════════════════════════════════ */}
      <section data-types-section style={{padding:"80px 20px",background:BG3}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div data-types-header style={{textAlign:"center",marginBottom:48}}>
            <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:2,textTransform:"uppercase"}}>8 Tipos</span>
            <h2 style={{fontSize:"clamp(28px,4vw,40px)",fontWeight:800,marginTop:16}}>
              Elige tu <span style={{color:GOLD}}>estilo</span> de predicción
            </h2>
            <p style={{color:MID,marginTop:16,maxWidth:600,margin:"16px auto 0"}}>
              Desde predicciones simples hasta encadenadas complejas. 
              Cada una con su propio nivel de dificultad y recompensa.
            </p>
          </div>

          <div data-types-grid style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:20}}>
            {PREDICTION_TYPES.map((pred,i)=>(
              <div key={i} data-type-card data-hover-card style={{
                padding:24,borderRadius:16,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)",
                transition:"border-color 0.3s",cursor:"pointer"
              }} onMouseEnter={e=>{
                e.currentTarget.style.borderColor="rgba(201,168,76,0.25)";
              }} onMouseLeave={e=>{
                e.currentTarget.style.borderColor="rgba(255,255,255,0.05)";
              }}>
                <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
                  <span style={{width:32,height:32,borderRadius:"50%",background:GOLD,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:14,color:BG}}>{pred.num}</span>
                  <h3 style={{fontWeight:700,fontSize:16,flex:1}}>{pred.title}</h3>
                </div>
                <div style={{display:"flex",gap:8,marginBottom:12}}>
                  <span style={{padding:"4px 10px",borderRadius:20,background:"rgba(201,168,76,0.1)",fontSize:11,color:GOLD,fontWeight:600}}>
                    {pred.difficulty}
                  </span>
                  <span style={{padding:"4px 10px",borderRadius:20,background:"rgba(232,212,139,0.1)",fontSize:11,color:GOLD2,fontWeight:600}}>
                    {pred.points}
                  </span>
                </div>
                <p style={{fontSize:13,color:DIM,lineHeight:1.6}}>{pred.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MULTIPLICADORES Y CHIPS
          ═══════════════════════════════════════ */}
      <section data-mult-section style={{padding:"80px 20px",background:BG}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(400px,1fr))",gap:40}}>
            {/* Multiplicadores */}
            <div>
              <h3 style={{fontSize:24,fontWeight:800,marginBottom:24}}>Multiplicadores</h3>
              <div data-mult-list style={{display:"flex",flexDirection:"column",gap:16}}>
                {MULTIPLIERS.map((mult,i)=>(
                  <div key={i} data-mult-item data-hover-card style={{padding:20,borderRadius:16,background:BG2,border:"1px solid rgba(255,255,255,0.05)",display:"flex",gap:16,alignItems:"center",cursor:"pointer"}}>
                    <div style={{width:48,height:48,borderRadius:12,background:`linear-gradient(135deg,${GOLD},${GOLD2})`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <img src={mult.icon} alt="" style={{width:32,height:32,objectFit:"contain"}} />
                    </div>
                    <div style={{flex:1}}>
                      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                        <span style={{fontWeight:700}}>{mult.title}</span>
                        <span style={{padding:"2px 8px",borderRadius:8,background:"rgba(201,168,76,0.2)",color:GOLD,fontWeight:800,fontSize:12}}>{mult.value}</span>
                      </div>
                      <p style={{fontSize:13,color:DIM}}>{mult.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chips */}
            <div>
              <h3 style={{fontSize:24,fontWeight:800,marginBottom:24}}>Chips Especiales</h3>
              <div data-chip-list style={{display:"flex",flexDirection:"column",gap:16}}>
                {CHIPS.map((chip,i)=>(
                  <div key={i} data-chip-item data-hover-card style={{padding:20,borderRadius:16,background:BG2,border:"1px solid rgba(255,255,255,0.05)",display:"flex",gap:16,alignItems:"center",cursor:"pointer"}}>
                    <div style={{width:48,height:48,borderRadius:12,background:`${GOLD}20`,border:`2px solid ${GOLD}40`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <img src={chip.icon} alt="" style={{width:32,height:32,objectFit:"contain"}} />
                    </div>
                    <div style={{flex:1}}>
                      <span style={{fontWeight:700,display:"block",marginBottom:4}}>{chip.title}</span>
                      <p style={{fontSize:13,color:DIM}}>{chip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CÓMO FUNCIONA
          ═══════════════════════════════════════ */}
      <section data-steps-section style={{padding:"80px 20px",background:BG3}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div data-steps-header style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              ¿Cómo <span style={{color:GOLD}}>funciona?</span>
            </h2>
          </div>

          <div data-steps-grid style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:24}}>
            {[
              {step:"1",title:"Elige un partido",desc:"Selecciona cualquiera de los 104 partidos del Mundial 2026"},
              {step:"2",title:"Selecciona tipo",desc:"Elige entre las 8 formas de predecir disponibles"},
              {step:"3",title:"Usa tus chips",desc:"Potencia tus predicciones con chips estratégicos"},
              {step:"4",title:"Gana y sube",desc:"Acumula puntos y escala en el ranking global"},
            ].map((item,i)=>(
              <div key={i} data-step-item style={{textAlign:"center",padding:24}}>
                <div style={{
                  width:56,height:56,borderRadius:16,
                  background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontWeight:800,fontSize:24,color:BG,margin:"0 auto 16px"
                }}>
                  {item.step}
                </div>
                <h3 style={{fontWeight:700,fontSize:16,marginBottom:8}}>{item.title}</h3>
                <p style={{fontSize:14,color:DIM,lineHeight:1.6}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA FINAL
          ═══════════════════════════════════════ */}
      <section data-cta-section style={{padding:"80px 20px",textAlign:"center",background:BG}}>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <h2 data-cta-content style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800,marginBottom:16}}>
            🎯 Domina todas las predicciones
          </h2>
          <p data-cta-content style={{color:MID,marginBottom:32,fontSize:16}}>
            Pre-regístrate ahora y sé de los primeros en experimentar 
            el sistema de predicciones más completo del Mundial 2026.
          </p>
          <Link href="/registro" data-cta-content data-hover-btn style={{
            padding:"16px 40px",borderRadius:14,
            background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
            color:BG,fontWeight:800,fontSize:16,textDecoration:"none",display:"inline-block",
            boxShadow:"0 8px 32px rgba(201,168,76,0.3)"
          }}>
            Pre-regístrate →
          </Link>
        </div>
      </section>
    </div>
  );
}
