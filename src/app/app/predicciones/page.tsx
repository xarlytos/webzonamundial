"use client";

import Link from "next/link";

const BG="#060B14", BG2="#0F1D32", BG3="#0B1825", GOLD="#c9a84c", GOLD2="#e8d48b", MID="#8a94b0", DIM="#6a7a9a", DARK="#4a5570";

const PREDICTION_TYPES = [
  { num: "1️⃣", title: "Resultado Exacto", difficulty: "⭐⭐⭐⭐", points: "Hasta 50x", desc: "Predice el marcador final exacto del partido. Mayor precisión, mayor recompensa." },
  { num: "2️⃣", title: "Ganador del Partido", difficulty: "⭐⭐", points: "Hasta 15x", desc: "Simple y efectivo. Elige victoria local, empate o victoria visitante." },
  { num: "3️⃣", title: "Primer Goleador", difficulty: "⭐⭐⭐⭐⭐", points: "Hasta 100x", desc: "Predice quién marcará el primer gol del partido. Alta dificultad, máxima recompensa." },
  { num: "4️⃣", title: "Predicción Encadenada", difficulty: "⭐⭐⭐⭐⭐", points: "Hasta 200x", desc: "Combina múltiples predicciones en una sola apuesta. Riesgo alto, recompensa potente." },
  { num: "5️⃣", title: "Duelo de Jugadores", difficulty: "⭐⭐⭐", points: "Hasta 25x", desc: "Compara rendimiento entre jugadores: goles, asistencias, tarjetas y más." },
  { num: "6️⃣", title: "Over/Under", difficulty: "⭐⭐⭐", points: "Hasta 20x", desc: "Predice si el total de goles, corners o tarjetas superará un número específico." },
  { num: "7️⃣", title: "Minuto del Gol", difficulty: "⭐⭐⭐⭐", points: "Hasta 75x", desc: "Acierta en qué minuto exacto se marcará un gol clave." },
  { num: "8️⃣", title: "Predicción Social", difficulty: "⭐", points: "Hasta 10x", desc: "Sigue a la mayoría para puntos seguros, o apuesta contra la corriente." },
];

const MULTIPLIERS = [
  { icon: "🐶", title: "Underdog Multiplier", value: "x2", desc: "Cuando apuestas por el equipo menos favorito y ganas, duplicas tus puntos." },
  { icon: "💎", title: "Diamond Match", value: "x3", desc: "Partidos seleccionados con multiplicador especial de 3x para todas las predicciones." },
];

const CHIPS = [
  { icon: "🎲", title: "Dado", desc: "Duplica los puntos de tu predicción. Usa estratégicamente." },
  { icon: "🔮", title: "Bola de Cristal", desc: "Revela qué está pensando la comunidad antes de apostar." },
  { icon: "⚡", title: "Flash", desc: "Bonus extra por hacer tu predicción en los últimos 10 minutos." },
];

export default function PrediccionesPage() {
  return (
    <div style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif",minHeight:"100vh"}}>
      {/* ═══════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════ */}
      <section style={{padding:"100px 20px 60px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)"}}/>
        
        {/* Decoración de fondo */}
        <div style={{position:"absolute",top:"10%",left:"5%",fontSize:120,opacity:0.03,transform:"rotate(-15deg)"}}>🎯</div>
        <div style={{position:"absolute",bottom:"10%",right:"5%",fontSize:100,opacity:0.03,transform:"rotate(15deg)"}}>🏆</div>
        
        <div style={{maxWidth:800,margin:"0 auto",position:"relative"}}>
          <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>Plataforma</span>
          
          <h1 style={{fontSize:"clamp(36px,7vw,56px)",fontWeight:900,marginTop:20,lineHeight:1.1}}>
            8 formas de predecir,<br/><span style={{color:GOLD}}>infinitas de ganar</span>
          </h1>
          
          <p style={{color:MID,marginTop:24,maxWidth:600,margin:"24px auto 0",lineHeight:1.7,fontSize:18}}>
            <strong>Predecir no es adivinar:</strong> es arte, estadística y coraje. 
            Cada partido es una oportunidad de demostrar tu conocimiento futbolístico.
          </p>
          
          <div style={{marginTop:40,display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/registro" style={{
              padding:"16px 36px",borderRadius:14,
              background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
              color:BG,fontWeight:800,fontSize:16,textDecoration:"none",display:"inline-block",
              boxShadow:"0 8px 32px rgba(201,168,76,0.3)"
            }}>
              🚀 Empezar a predecir
            </Link>
            <span style={{
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
      <section style={{padding:"60px 20px",background:BG}}>
        <div style={{maxWidth:1400,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(450px,1fr))",gap:60,alignItems:"center"}}>
            {/* Imagen de la app de predicciones */}
            <div style={{position:"relative"}}>
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
            <div>
              <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:2,textTransform:"uppercase"}}>Interfaz intuitiva</span>
              <h2 style={{fontSize:"clamp(28px,4vw,40px)",fontWeight:800,marginTop:16,marginBottom:24,lineHeight:1.2}}>
                Predice con <span style={{color:GOLD}}>estadísticas</span> en tiempo real
              </h2>
              <p style={{color:MID,fontSize:17,lineHeight:1.7,marginBottom:32}}>
                Visualiza las cuotas, el historial de enfrentamientos y las estadísticas de cada equipo. 
                Toma decisiones informadas con datos actualizados al instante.
              </p>
              
              <div style={{display:"flex",flexDirection:"column",gap:16}}>
                <div style={{display:"flex",alignItems:"center",gap:16,padding:16,borderRadius:12,background:BG2,border:"1px solid rgba(255,255,255,0.05)"}}>
                  <div style={{width:44,height:44,borderRadius:10,background:`${GOLD}20`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>⚽</div>
                  <div>
                    <div style={{fontWeight:700,fontSize:15}}>104 Partidos disponibles</div>
                    <div style={{fontSize:13,color:DIM}}>Desde fase de grupos hasta la gran final</div>
                  </div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:16,padding:16,borderRadius:12,background:BG2,border:"1px solid rgba(255,255,255,0.05)"}}>
                  <div style={{width:44,height:44,borderRadius:10,background:`${GOLD}20`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>📊</div>
                  <div>
                    <div style={{fontWeight:700,fontSize:15}}>Cuotas en tiempo real</div>
                    <div style={{fontSize:13,color:DIM}}>Multiplicadores dinámicos según el momento</div>
                  </div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:16,padding:16,borderRadius:12,background:BG2,border:"1px solid rgba(255,255,255,0.05)"}}>
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
      <section style={{padding:"80px 20px",background:BG3}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:2,textTransform:"uppercase"}}>8 Tipos</span>
            <h2 style={{fontSize:"clamp(28px,4vw,40px)",fontWeight:800,marginTop:16}}>
              Elige tu <span style={{color:GOLD}}>estilo</span> de predicción
            </h2>
            <p style={{color:MID,marginTop:16,maxWidth:600,margin:"16px auto 0"}}>
              Desde predicciones simples hasta encadenadas complejas. 
              Cada una con su propio nivel de dificultad y recompensa.
            </p>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:20}}>
            {PREDICTION_TYPES.map((pred,i)=>(
              <div key={i} style={{
                padding:24,borderRadius:16,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)",
                transition:"all 0.3s"
              }} onMouseEnter={e=>{
                e.currentTarget.style.borderColor="rgba(201,168,76,0.25)";
                e.currentTarget.style.transform="translateY(-4px)";
              }} onMouseLeave={e=>{
                e.currentTarget.style.borderColor="rgba(255,255,255,0.05)";
                e.currentTarget.style.transform="translateY(0)";
              }}>
                <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
                  <span style={{fontSize:24}}>{pred.num}</span>
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
      <section style={{padding:"80px 20px",background:BG}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(400px,1fr))",gap:40}}>
            {/* Multiplicadores */}
            <div>
              <h3 style={{fontSize:24,fontWeight:800,marginBottom:24}}>💎 Multiplicadores</h3>
              <div style={{display:"flex",flexDirection:"column",gap:16}}>
                {MULTIPLIERS.map((mult,i)=>(
                  <div key={i} style={{padding:20,borderRadius:16,background:BG2,border:"1px solid rgba(255,255,255,0.05)",display:"flex",gap:16,alignItems:"center"}}>
                    <div style={{width:48,height:48,borderRadius:12,background:`linear-gradient(135deg,${GOLD},${GOLD2})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>
                      {mult.icon}
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
              <h3 style={{fontSize:24,fontWeight:800,marginBottom:24}}>🃏 Chips Especiales</h3>
              <div style={{display:"flex",flexDirection:"column",gap:16}}>
                {CHIPS.map((chip,i)=>(
                  <div key={i} style={{padding:20,borderRadius:16,background:BG2,border:"1px solid rgba(255,255,255,0.05)",display:"flex",gap:16,alignItems:"center"}}>
                    <div style={{width:48,height:48,borderRadius:12,background:`${GOLD}20`,border:`2px solid ${GOLD}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>
                      {chip.icon}
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
      <section style={{padding:"80px 20px",background:BG3}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              ¿Cómo <span style={{color:GOLD}}>funciona?</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:24}}>
            {[
              {step:"1",title:"Elige un partido",desc:"Selecciona cualquiera de los 104 partidos del Mundial 2026"},
              {step:"2",title:"Selecciona tipo",desc:"Elige entre las 8 formas de predecir disponibles"},
              {step:"3",title:"Usa tus chips",desc:"Potencia tus predicciones con chips estratégicos"},
              {step:"4",title:"Gana y sube",desc:"Acumula puntos y escala en el ranking global"},
            ].map((item,i)=>(
              <div key={i} style={{textAlign:"center",padding:24}}>
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
      <section style={{padding:"80px 20px",textAlign:"center",background:BG}}>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800,marginBottom:16}}>
            🎯 Domina todas las predicciones
          </h2>
          <p style={{color:MID,marginBottom:32,fontSize:16}}>
            Pre-regístrate ahora y sé de los primeros en experimentar 
            el sistema de predicciones más completo del Mundial 2026.
          </p>
          <Link href="/registro" style={{
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
