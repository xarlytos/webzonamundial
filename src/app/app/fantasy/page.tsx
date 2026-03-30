"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BG="#060B14", BG2="#0F1D32", BG3="#0B1825", GOLD="#c9a84c", GOLD2="#e8d48b", MID="#8a94b0", DIM="#6a7a9a", DARK="#4a5570";

const FORMACIONES = [
  { formacion: "4-3-3", estilo: "Ofensivo clásico", desc: "4 defensas, 3 medios, 3 delanteros" },
  { formacion: "4-4-2", estilo: "Equilibrado", desc: "La clásica. Sólido en defensa y ataque" },
  { formacion: "4-2-3-1", estilo: "Control total", desc: "Doble pivote, mediapunta y extremos" },
  { formacion: "3-5-2", estilo: "Dominio centro", desc: "3 defensas, 5 medios, 2 delanteros" },
  { formacion: "3-4-3", estilo: "Todo al ataque", desc: "Máximo poder ofensivo" },
  { formacion: "5-3-2", estilo: "Fortín defensivo", desc: "5 defensas, 3 medios, 2 delanteros" },
  { formacion: "5-4-1", estilo: "Contraataque", desc: "Ultra defensivo, espera al rival" },
];

const PUNTOS_SISTEMA = [
  { accion: "Gol (Delantero)", puntos: "+5", icono: "/img/imagenessilviu/balondefutbol.png" },
  { accion: "Gol (Mediocentro)", puntos: "+6", icono: "/img/imagenessilviu/balondefutbol.png" },
  { accion: "Gol (Defensa)", puntos: "+8", icono: "/img/imagenessilviu/balondefutbol.png" },
  { accion: "Gol (Portero)", puntos: "+10", icono: "/img/imagenessilviu/balondefutbol.png" },
  { accion: "Asistencia", puntos: "+3", icono: "/img/zonamundial-images/imagenes/logos para sustuir emojis/micro-predicciones.png" },
  { accion: "Portería a 0 (POR)", puntos: "+5", icono: "/img/zonamundial-images/imagenes/logos para sustuir emojis/ranking.png" },
  { accion: "Portería a 0 (DEF)", puntos: "+4", icono: "/img/zonamundial-images/imagenes/logos para sustuir emojis/ranking.png" },
  { accion: "Titular (60+ min)", puntos: "+2", icono: "/img/zonamundial-images/imagenes/logos para sustuir emojis/48 selecciones.png" },
  { accion: "Suplente (<60 min)", puntos: "+1", icono: "/img/zonamundial-images/imagenes/logos para sustuir emojis/modo carrera.png" },
  { accion: "Tarjeta amarilla", puntos: "-1", icono: "/img/zonamundial-images/imagenes/logos para sustuir emojis/historia.png" },
  { accion: "Tarjeta roja", puntos: "-3", icono: "/img/zonamundial-images/imagenes/logos para sustuir emojis/historia.png" },
  { accion: "Autogol", puntos: "-2", icono: "/img/zonamundial-images/imagenes/logos para sustuir emojis/predicciones.png" },
  { accion: "Penalti fallado", puntos: "-2", icono: "/img/zonamundial-images/imagenes/logos para sustuir emojis/micro-predicciones.png" },
];

const CHIPS = [
  { 
    icono: "/img/zonamundial-images/imagenes/logos para sustuir emojis/predicciones.png", 
    nombre: "Comodín Total", 
    usos: "1 uso", 
    desc: "Reconstruye TODA tu selección desde cero. Úsalo cuando tu equipo vaya mal.",
    cuando: "Cuando todo falla"
  },
  { 
    icono: "/img/zonamundial-images/imagenes/logos para sustuir emojis/ranking.png", 
    nombre: "Triple Capitán", 
    usos: "1 uso", 
    desc: "Tu capitán suma ×3 puntos (en vez de ×2). Ideal para jornadas con partidos favorables.",
    cuando: "Jornada decisiva"
  },
  { 
    icono: "/img/zonamundial-images/imagenes/logos para sustuir emojis/modo carrera.png", 
    nombre: "Banca Completa", 
    usos: "1 uso", 
    desc: "Tus 4 suplentes TAMBIÉN suman puntos esa jornada. ¡15 jugadores puntuando!",
    cuando: "Máxima puntuación"
  },
  { 
    icono: "/img/zonamundial-images/imagenes/logos para sustuir emojis/ia coach.png", 
    nombre: "Revelación", 
    usos: "3 usos", 
    desc: "Selecciona un jugador Sub-23. Si marca o asiste, sus puntos se duplican (×2).",
    cuando: "Apuesta por jóvenes"
  },
];

export default function FantasyPage() {
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

      // Alineación section
      gsap.from("[data-ali-img]", {
        scrollTrigger: { trigger: "[data-ali-section]", start: "top 80%" },
        x: -60, opacity: 0, duration: 0.9, ease: "power3.out"
      });

      gsap.from("[data-ali-content]", {
        scrollTrigger: { trigger: "[data-ali-section]", start: "top 80%" },
        x: 60, opacity: 0, duration: 0.9, ease: "power3.out"
      });

      gsap.from("[data-ali-feature]", {
        scrollTrigger: { trigger: "[data-ali-features]", start: "top 85%" },
        y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: "power2.out"
      });

      gsap.from("[data-formacion-item]", {
        scrollTrigger: { trigger: "[data-formaciones-grid]", start: "top 90%" },
        scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.08, ease: "back.out(1.4)"
      });

      // Listado section
      gsap.from("[data-list-content]", {
        scrollTrigger: { trigger: "[data-list-section]", start: "top 80%" },
        x: -60, opacity: 0, duration: 0.9, ease: "power3.out"
      });

      gsap.from("[data-list-img]", {
        scrollTrigger: { trigger: "[data-list-section]", start: "top 80%" },
        x: 60, opacity: 0, duration: 0.9, ease: "power3.out"
      });

      gsap.from("[data-list-feature]", {
        scrollTrigger: { trigger: "[data-list-features]", start: "top 85%" },
        y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out"
      });

      // Equipo válido section
      gsap.from("[data-equipo-header]", {
        scrollTrigger: { trigger: "[data-equipo-section]", start: "top 80%" },
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out"
      });

      gsap.from("[data-equipo-card]", {
        scrollTrigger: { trigger: "[data-equipo-card]", start: "top 85%" },
        y: 50, opacity: 0, duration: 0.9, ease: "power3.out"
      });

      gsap.from("[data-seleccion-item]", {
        scrollTrigger: { trigger: "[data-selecciones-grid]", start: "top 85%" },
        y: 20, opacity: 0, duration: 0.5, stagger: 0.06, ease: "power2.out"
      });

      gsap.from("[data-resumen-item]", {
        scrollTrigger: { trigger: "[data-resumen-row]", start: "top 90%" },
        scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.4)"
      });

      // Puntos section
      gsap.from("[data-puntos-header]", {
        scrollTrigger: { trigger: "[data-puntos-section]", start: "top 80%" },
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out"
      });

      gsap.from("[data-punto-item]", {
        scrollTrigger: { trigger: "[data-puntos-grid]", start: "top 85%" },
        y: 30, opacity: 0, duration: 0.6, stagger: 0.06, ease: "power2.out"
      });

      // Comodines section
      gsap.from("[data-comodines-header]", {
        scrollTrigger: { trigger: "[data-comodines-section]", start: "top 80%" },
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out"
      });

      gsap.from("[data-comodin-card]", {
        scrollTrigger: { trigger: "[data-comodines-grid]", start: "top 85%" },
        y: 50, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out"
      });

      // Duelos section
      gsap.from("[data-duelos-card]", {
        scrollTrigger: { trigger: "[data-duelos-section]", start: "top 80%" },
        scale: 0.9, opacity: 0, duration: 0.8, ease: "power3.out"
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
          HERO SECTION CON IMÁGENES
          ═══════════════════════════════════════ */}
      <section style={{padding:"20px 20px 60px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)"}}/>
        
        {/* Decoración de fondo */}
        <img data-hero-decor src="/img/imagenessilviu/balondefutbol.png" alt="" style={{position:"absolute",top:"10%",left:"5%",width:120,opacity:0.03,transform:"rotate(-15deg)"}} />
        <img data-hero-decor src="/img/zonamundial-images/imagenes/logos para sustuir emojis/ranking.png" alt="" style={{position:"absolute",bottom:"10%",right:"5%",width:100,opacity:0.03,transform:"rotate(15deg)"}} />
        
        <div style={{maxWidth:800,margin:"0 auto",position:"relative"}}>
          <span data-hero-badge style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase",display:"inline-block"}}>Plataforma</span>
          
          <h1 data-hero-title style={{fontSize:"clamp(36px,7vw,56px)",fontWeight:900,marginTop:20,lineHeight:1.1}}>
            Tu XI Ideal del <span style={{color:GOLD}}>Mundial</span>
          </h1>
          
          <p data-hero-desc style={{color:MID,marginTop:24,maxWidth:600,margin:"24px auto 0",lineHeight:1.7,fontSize:18}}>
            <strong>15 jugadores, 13 selecciones, 1 campeón.</strong> El fantasy más estratégico del Mundial 2026. 
            Sin dinero, sin draft. Pura estrategia y conocimiento futbolístico.
          </p>
          
          <div style={{marginTop:40,display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/registro" data-hero-cta data-hover-btn style={{
              padding:"16px 36px",borderRadius:14,
              background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
              color:BG,fontWeight:800,fontSize:16,textDecoration:"none",display:"inline-block",
              boxShadow:"0 8px 32px rgba(201,168,76,0.3)"
            }}>
              Arma tu equipo
            </Link>
            <span data-hero-cta style={{
              padding:"16px 28px",borderRadius:14,
              background:BG2,border:`1px solid rgba(255,255,255,0.1)`,
              color:MID,fontWeight:600,fontSize:14
            }}>
              Gratis · Sin dinero · Solo estrategia
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LAYOUT 2 COLUMNAS: IMAGEN ALINEACIÓN + TEXTO
          ═══════════════════════════════════════ */}
      <section data-ali-section style={{padding:"60px 20px",background:BG}}>
        <div style={{maxWidth:1400,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(450px,1fr))",gap:60,alignItems:"center"}}>
            {/* Imagen de alineación - ajustada para verse completa */}
            <div data-ali-img style={{position:"relative"}}>
              <div style={{
                borderRadius:24,
                overflow:"hidden",
                boxShadow:"0 30px 60px rgba(0,0,0,0.4)",
                border:"1px solid rgba(255,255,255,0.08)",
                maxWidth:400,
                margin:"0 auto"
              }}>
                <img 
                  src="/img/zonamundial-images/imagenes/alineacion fantasy.jpeg" 
                  alt="Alineación Fantasy ZonaMundial" 
                  style={{width:"100%",height:"auto",display:"block"}}
                />
              </div>
          </div>

          {/* Texto explicativo */}
            <div data-ali-content>
              <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:2,textTransform:"uppercase"}}>Interfaz intuitiva</span>
              <h2 style={{fontSize:"clamp(28px,4vw,40px)",fontWeight:800,marginTop:16,marginBottom:24,lineHeight:1.2}}>
                Configura tu <span style={{color:GOLD}}>alineación</span> táctica
              </h2>
              <p style={{color:MID,fontSize:17,lineHeight:1.7,marginBottom:32}}>
                Visualiza tu equipo en el campo con nuestra interfaz táctica. Cambia formaciones al instante 
                y activa comodines con un solo tap.
              </p>
              
              <div data-ali-features style={{display:"flex",flexDirection:"column",gap:16}}>
                <div data-ali-feature data-hover-card style={{display:"flex",alignItems:"center",gap:16,padding:16,borderRadius:12,background:BG2,border:"1px solid rgba(255,255,255,0.05)",cursor:"pointer"}}>
                  <div style={{width:44,height:44,borderRadius:10,background:`${GOLD}20`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    <img src="/img/zonamundial-images/imagenes/logos para sustuir emojis/los 12 grupos.png" alt="" style={{width:28,height:28,objectFit:"contain"}} />
                  </div>
                  <div>
                    <div style={{fontWeight:700,fontSize:15}}>7 Formaciones disponibles</div>
                    <div style={{fontSize:13,color:DIM}}>Desde 4-3-3 ofensivo hasta 5-4-1 defensivo</div>
                  </div>
                </div>
                <div data-ali-feature data-hover-card style={{display:"flex",alignItems:"center",gap:16,padding:16,borderRadius:12,background:BG2,border:"1px solid rgba(255,255,255,0.05)",cursor:"pointer"}}>
                  <div style={{width:44,height:44,borderRadius:10,background:`${GOLD}20`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    <img src="/img/zonamundial-images/imagenes/logos para sustuir emojis/predicciones.png" alt="" style={{width:28,height:28,objectFit:"contain"}} />
                  </div>
                  <div>
                    <div style={{fontWeight:700,fontSize:15}}>Gestión de comodines</div>
                    <div style={{fontSize:13,color:DIM}}>Activa Triple Capitán, Banca Completa y más</div>
                  </div>
                </div>
                <div data-ali-feature data-hover-card style={{display:"flex",alignItems:"center",gap:16,padding:16,borderRadius:12,background:BG2,border:"1px solid rgba(255,255,255,0.05)",cursor:"pointer"}}>
                  <div style={{width:44,height:44,borderRadius:10,background:`${GOLD}20`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    <img src="/img/zonamundial-images/imagenes/logos para sustuir emojis/stories.png" alt="" style={{width:28,height:28,objectFit:"contain"}} />
                  </div>
                  <div>
                    <div style={{fontWeight:700,fontSize:15}}>Guarda tu equipo</div>
                    <div style={{fontSize:13,color:DIM}}>Modifica y guarda antes de cada jornada</div>
                  </div>
                </div>
              </div>
              
              {/* Grid de formaciones */}
              <div style={{marginTop:32}}>
                <div style={{fontWeight:700,fontSize:16,marginBottom:16,color:GOLD}}>7 Formaciones tácticas</div>
                <div data-formaciones-grid style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(100px,1fr))",gap:10}}>
                  {FORMACIONES.map((f,i)=>(
                    <div key={i} data-formacion-item data-hover-card style={{padding:12,borderRadius:10,background:BG2,border:"1px solid rgba(255,255,255,0.08)",textAlign:"center",cursor:"pointer"}}>
                      <div style={{fontSize:18,fontWeight:800,color:GOLD,marginBottom:4}}>{f.formacion}</div>
                      <div style={{fontSize:11,color:DIM}}>{f.estilo}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LAYOUT 2 COLUMNAS INVERSO: TEXTO + IMAGEN LISTADO
          ═══════════════════════════════════════ */}
      <section data-list-section style={{padding:"80px 20px",background:BG3}}>
        <div style={{maxWidth:1400,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(450px,1fr))",gap:60,alignItems:"center"}}>
            {/* Texto - ahora primero en desktop */}
            <div data-list-content style={{order:1}}>
              <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:2,textTransform:"uppercase"}}>48 selecciones</span>
              <h2 style={{fontSize:"clamp(28px,4vw,40px)",fontWeight:800,marginTop:16,marginBottom:24,lineHeight:1.2}}>
                Explora y <span style={{color:GOLD}}>elige</span> jugadores
              </h2>
              <p style={{color:MID,fontSize:17,lineHeight:1.7,marginBottom:32}}>
                Navega por todas las selecciones del Mundial 2026. Filtra por posición, 
                consulta estadísticas y añade jugadores a tu equipo con un solo tap.
              </p>
              
              <div data-list-features style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12}}>
                {[
                  {icon:"/img/zonamundial-images/imagenes/logos para sustuir emojis/ia coach.png", title:"Filtros avanzados", desc:"Por posición, selección o valor"},
                  {icon:"/img/zonamundial-images/imagenes/logos para sustuir emojis/ranking.png", title:"Estadísticas", desc:"Forma actual y datos clave"},
                  {icon:"/img/zonamundial-images/imagenes/logos para sustuir emojis/48 selecciones.png", title:"Selección fácil", desc:"Añade con un tap"},
                  {icon:"/img/zonamundial-images/imagenes/logos para sustuir emojis/micro-predicciones.png", title:"Jugadores destacados", desc:"Estrellas y joyas ocultas"},
                ].map((item,i)=>(
                  <div key={i} data-list-feature data-hover-card style={{padding:20,borderRadius:12,background:BG2,border:"1px solid rgba(255,255,255,0.05)",cursor:"pointer"}}>
                    <img src={item.icon} alt="" style={{width:28,height:28,objectFit:"contain",marginBottom:8}} />
                    <div style={{fontWeight:700,fontSize:14,marginBottom:4}}>{item.title}</div>
                    <div style={{fontSize:12,color:DIM}}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagen del listado - ajustada para verse completa */}
            <div data-list-img style={{order:2,position:"relative"}}>
              <div style={{
                borderRadius:24,
                overflow:"hidden",
                boxShadow:"0 30px 60px rgba(0,0,0,0.4)",
                border:"1px solid rgba(255,255,255,0.08)",
                maxWidth:400,
                margin:"0 auto"
              }}>
                <img 
                  src="/img/zonamundial-images/imagenes/listado españa fantasy.jpeg" 
                  alt="Listado de jugadores de España" 
                  style={{width:"100%",height:"auto",display:"block"}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EJEMPLO DE EQUIPO VÁLIDO (MEJORADO)
          ═══════════════════════════════════════ */}
      <section data-equipo-section style={{padding:"80px 20px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div data-equipo-header style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(28px,5vw,40px)",fontWeight:800}}>
              Ejemplo de equipo <span style={{color:GOLD}}>válido</span>
            </h2>
            <p style={{color:MID,marginTop:12,fontSize:16}}>15 jugadores · 13 selecciones · 2 dobles permitidos</p>
          </div>

          <div data-equipo-card style={{
            padding:40,
            borderRadius:32,
            background:`linear-gradient(135deg,${BG2},${BG3})`,
            border:"1px solid rgba(255,255,255,0.08)",
            boxShadow:"0 20px 60px rgba(0,0,0,0.3)"
          }}>
            {/* Grid de selecciones - DISEÑO HORIZONTAL */}
            <div data-selecciones-grid style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:12,marginBottom:32}}>
              {/* Dobles - destacados */}
              {[
                {code:"ar", pais:"Argentina", jug:"Messi + Otamendi", doble:true},
                {code:"br", pais:"Brasil", jug:"Vinicius + Rodrygo", doble:true},
                {code:"es", pais:"España", jug:"Lamine Yamal", doble:false},
                {code:"fr", pais:"Francia", jug:"Kylian Mbappé", doble:false},
                {code:"gb-eng", pais:"Inglaterra", jug:"Jude Bellingham", doble:false},
                {code:"pt", pais:"Portugal", jug:"Vitinha", doble:false},
                {code:"be", pais:"Bélgica", jug:"Thibaut Courtois", doble:false},
                {code:"nl", pais:"Holanda", jug:"Virgil van Dijk", doble:false},
                {code:"uy", pais:"Uruguay", jug:"Federico Valverde", doble:false},
                {code:"ma", pais:"Marruecos", jug:"Achraf Hakimi", doble:false},
                {code:"co", pais:"Colombia", jug:"Luis Díaz", doble:false},
                {code:"de", pais:"Alemania", jug:"Jamal Musiala", doble:false},
                {code:"us", pais:"USA", jug:"Christian Pulisic", doble:false},
              ].map((item,i)=>[
                <div key={i} data-seleccion-item data-hover-card style={{
                  padding:12,
                  borderRadius:12,
                  background:item.doble?`linear-gradient(135deg,${GOLD}20,transparent)`:'transparent',
                  border:`1px solid ${item.doble?GOLD:'rgba(255,255,255,0.1)'}`,
                  display:"flex",
                  alignItems:"center",
                  gap:12,
                  minHeight:60,
                  cursor:"pointer"
                }}>
                  <img src={`https://flagcdn.com/w40/${item.code}.png`} alt={item.pais} style={{width:32,height:20,borderRadius:3,flexShrink:0}} />
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontWeight:700,fontSize:13,color:item.doble?GOLD:'#fff',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                      {item.pais} {item.doble?'⭐':''}
                    </div>
                    <div style={{fontSize:11,color:DIM,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                      {item.jug}
                    </div>
                  </div>
                </div>
              ])}
            </div>

            {/* Info resumen */}
            <div data-resumen-row style={{
              display:"flex",
              justifyContent:"center",
              gap:32,
              flexWrap:"wrap",
              padding:"20px 0",
              borderTop:"1px solid rgba(255,255,255,0.05)"
            }}>
              <div data-resumen-item style={{textAlign:"center"}}>
                <div style={{fontSize:28,fontWeight:800,color:GOLD}}>15</div>
                <div style={{fontSize:12,color:DIM}}>Jugadores</div>
              </div>
              <div data-resumen-item style={{textAlign:"center"}}>
                <div style={{fontSize:28,fontWeight:800,color:GOLD}}>13</div>
                <div style={{fontSize:12,color:DIM}}>Selecciones</div>
              </div>
              <div data-resumen-item style={{textAlign:"center"}}>
                <div style={{fontSize:28,fontWeight:800,color:GOLD}}>2</div>
                <div style={{fontSize:12,color:DIM}}>Con dobles</div>
              </div>
              <div data-resumen-item style={{textAlign:"center"}}>
                <div style={{fontSize:28,fontWeight:800,color:"#22c55e"}}>OK</div>
                <div style={{fontSize:12,color:DIM}}>Válido</div>
              </div>
            </div>

            {/* Equipo inválido */}
            <div style={{
              marginTop:32,
              padding:24,
              borderRadius:20,
              background:"rgba(239,68,68,0.08)",
              border:"1px solid rgba(239,68,68,0.25)",
              display:"flex",
              gap:16,
              alignItems:"flex-start"
            }}>
              <span style={{fontWeight:700,color:"#ef4444",fontSize:15}}>EQUIPO INVÁLIDO:</span>
              <div>
                <p style={{fontSize:14,color:MID,marginTop:6,lineHeight:1.6}}>
                  2 de Argentina + 2 de Brasil + <strong style={{color:"#ef4444"}}>2 de Francia</strong> = No permitido.<br/>
                  Solo puedes tener dobles en <strong>2 selecciones</strong> como máximo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SISTEMA DE PUNTOS DETALLADO
          ═══════════════════════════════════════ */}
      <section data-puntos-section style={{padding:"80px 20px",background:BG3}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div data-puntos-header style={{textAlign:"center",marginBottom:50}}>
            <h2 style={{fontSize:"clamp(28px,5vw,42px)",fontWeight:800}}>
              Sistema de <span style={{color:GOLD}}>Puntos</span>
            </h2>
            <p style={{color:MID,marginTop:12}}>Cada acción cuenta</p>
          </div>

          <div data-puntos-grid style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:16}}>
            {PUNTOS_SISTEMA.map((p,i)=>(
              <div key={i} data-punto-item data-hover-card style={{padding:20,borderRadius:16,background:BG2,border:"1px solid rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"}}>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <img src={p.icono} alt="" style={{width:28,height:28,objectFit:"contain"}} />
                  <span style={{fontSize:14,color:MID}}>{p.accion}</span>
                </div>
                <span style={{fontSize:18,fontWeight:800,color:p.puntos.includes("-")?"#ef4444":GOLD}}>
                  {p.puntos}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LOS 4 COMODINES (CHIPS)
          ═══════════════════════════════════════ */}
      <section data-comodines-section style={{padding:"80px 20px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div data-comodines-header style={{textAlign:"center",marginBottom:50}}>
            <span style={{color:GOLD,fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>Momentos decisivos</span>
            <h2 style={{fontSize:"clamp(28px,5vw,42px)",fontWeight:800,marginTop:16}}>
              Los 4 <span style={{color:GOLD}}>Comodines</span>
            </h2>
            <p style={{color:MID,marginTop:12,maxWidth:500,margin:"12px auto 0"}}>
              Úsalos sabiamente. No se regeneran durante el torneo.
            </p>
          </div>

          <div data-comodines-grid style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:24}}>
            {CHIPS.map((chip,i)=>(
              <div key={i} data-comodin-card data-hover-card style={{padding:32,borderRadius:24,background:BG2,border:"1px solid rgba(255,255,255,0.05)",position:"relative",overflow:"hidden",cursor:"pointer"}}>
                <div style={{position:"absolute",top:16,right:16,padding:"4px 12px",borderRadius:12,background:BG3,fontSize:11,color:GOLD,fontWeight:700}}>
                  {chip.usos}
                </div>
                <img src={chip.icono} alt="" style={{width:64,height:64,objectFit:"contain",marginBottom:16}} />
                <h3 style={{fontSize:20,fontWeight:800,marginBottom:12}}>{chip.nombre}</h3>
                <p style={{fontSize:14,color:MID,lineHeight:1.7,marginBottom:16}}>{chip.desc}</p>
                <div style={{padding:12,borderRadius:8,background:BG3,fontSize:12,color:GOLD}}>
                  <img src="/img/zonamundial-images/imagenes/logos para sustuir emojis/ia coach.png" alt="" style={{width:16,height:16,objectFit:"contain",display:"inline-block",verticalAlign:"middle",marginRight:4}} /> <strong>Cuándo:</strong> {chip.cuando}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DUelos HEAD-TO-HEAD
          ═══════════════════════════════════════ */}
      <section data-duelos-section style={{padding:"60px 20px"}}>
        <div style={{maxWidth:800,margin:"0 auto",textAlign:"center"}}>
          <div data-duelos-card style={{padding:40,borderRadius:24,background:`linear-gradient(135deg,${GOLD}10,transparent)`,border:`1px solid ${GOLD}30`}}>
             <img src="/img/zonamundial-images/imagenes/logos para sustuir emojis/micro-predicciones.png" alt="" style={{width:64,height:64,objectFit:"contain",marginBottom:16}} />
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800,marginBottom:16}}>
              Duelos <span style={{color:GOLD}}>1vs1</span>
            </h2>
            <p style={{color:MID,fontSize:16,lineHeight:1.7,maxWidth:600,margin:"0 auto 24px"}}>
              Reta a cualquier usuario a un duelo directo. Gana quien sume más puntos en la jornada. 
              Apuesta monedas o puntos de ranking y demuestra quién es el mejor manager.
            </p>
            <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
              <span style={{padding:"10px 20px",borderRadius:20,background:BG2,fontSize:14,color:MID}}>Gana el mejor</span>
              <span style={{padding:"10px 20px",borderRadius:20,background:BG2,fontSize:14,color:MID}}>Apuesta monedas</span>
              <span style={{padding:"10px 20px",borderRadius:20,background:BG2,fontSize:14,color:MID}}>Ranking</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA FINAL
          ═══════════════════════════════════════ */}
      <section data-cta-section style={{padding:"100px 20px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center, rgba(201,168,76,0.1) 0%, transparent 60%)"}}/>
        
        <div style={{maxWidth:700,margin:"0 auto",textAlign:"center",position:"relative"}}>
          <img src="/img/imagenessilviu/balondefutbol.png" alt="" style={{width:80,height:80,objectFit:"contain",marginBottom:24}} />
          <h2 data-cta-content style={{fontSize:"clamp(28px,5vw,44px)",fontWeight:900,marginBottom:16,lineHeight:1.1}}>
            Construye tu XI <span style={{color:GOLD}}>ideal</span>
          </h2>
          <p data-cta-content style={{color:MID,marginBottom:40,fontSize:18,maxWidth:500,margin:"0 auto 40px",lineHeight:1.6}}>
            Sin dinero, sin draft. Solo tu conocimiento futbolístico y estrategia. 
            <strong style={{color:"#fff"}}> 15 jugadores, 13 selecciones, 1 campeón.</strong>
          </p>
          <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",marginBottom:24}}>
            <Link href="/registro" data-cta-content data-hover-btn style={{
              padding:"18px 44px",borderRadius:14,
              background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
              color:BG,fontWeight:800,fontSize:18,textDecoration:"none",display:"inline-block",
              boxShadow:"0 8px 32px rgba(201,168,76,0.35)"
            }}>
              Pre-regístrate gratis
            </Link>
          </div>
          <p data-cta-content style={{fontSize:14,color:DARK}}>
            Es fácil de jugar, difícil de dominar · Gratis · Sin compromiso
          </p>
        </div>
      </section>
    </div>
  );
}
