"use client";

import Link from "next/link";

const BG="#060B14",BG2="#0F1D32",BG3="#0B1825",GOLD="#c9a84c",GOLD2="#e8d48b",MID="#8a94b0",DIM="#6a7a9a",DARK="#4a5570";

const PREDICTION_TYPES = [
  { 
    num: "1️⃣", 
    title: "Resultado Exacto", 
    difficulty: "⭐⭐⭐⭐", 
    points: "Hasta 50x",
    desc: "Predice el marcador final exacto del partido. Mayor precisión, mayor recompensa."
  },
  { 
    num: "2️⃣", 
    title: "Ganador del Partido", 
    difficulty: "⭐⭐", 
    points: "Hasta 15x",
    desc: "Simple y efectivo. Elige victoria local, empate o victoria visitante. Multiplicador de confianza disponible."
  },
  { 
    num: "3️⃣", 
    title: "Primer Goleador", 
    difficulty: "⭐⭐⭐⭐⭐", 
    points: "Hasta 100x",
    desc: "Predice quién marcará el primer gol del partido. Alta dificultad, máxima recompensa."
  },
  { 
    num: "4️⃣", 
    title: "Predicción Encadenada 🔗", 
    difficulty: "⭐⭐⭐⭐⭐", 
    points: "Hasta 200x",
    desc: "Combina múltiples predicciones en una sola apuesta. Riesgo alto, pero el multiplicador más potente."
  },
  { 
    num: "5️⃣", 
    title: "Duelo de Jugadores ⚔️", 
    difficulty: "⭐⭐⭐", 
    points: "Hasta 25x",
    desc: "Compara rendimiento entre jugadores: goles, asistencias, tarjetas y más."
  },
  { 
    num: "6️⃣", 
    title: "Over/Under Inteligente", 
    difficulty: "⭐⭐⭐", 
    points: "Hasta 20x",
    desc: "Predice si el total de goles, corners o tarjetas superará o no un número específico."
  },
  { 
    num: "7️⃣", 
    title: "Minuto del Drama ⏰", 
    difficulty: "⭐⭐⭐⭐", 
    points: "Hasta 75x",
    desc: "Acierta en qué minuto exacto se marcará un gol clave. Para los amantes de la tensión."
  },
  { 
    num: "8️⃣", 
    title: "Predicción Social (Modo Manada) 🐑", 
    difficulty: "⭐", 
    points: "Hasta 10x (20x contrarian)",
    desc: "Sigue a la mayoría para puntos seguros, o apuesta contra la corriente para duplicar."
  },
];

const MULTIPLIERS = [
  { icon: "🐶", title: "Underdog Multiplier", value: "x2", desc: "Cuando apuestas por el equipo menos favorito y ganas, duplicas tus puntos." },
  { icon: "💎", title: "Diamond Match", value: "x3", desc: "Partidos seleccionados con multiplicador especial de 3x para todas las predicciones." },
];

const CHIPS = [
  { icon: "🎲", title: "Dado", desc: "Duplica los puntos de tu predicción. Usa estratégicamente." },
  { icon: "🔮", title: "Bola de Cristal", desc: "Revela qué está pensando la comunidad antes de apostar." },
  { icon: "⚡", title: "Flash", desc: "Bonus extra por hacer tu predicción en los últimos 10 minutos antes del partido." },
];

export default function PrediccionesPage() {
  return (
    <div style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif",minHeight:"100vh"}}>
      {/* Hero Section */}
      <section style={{padding:"80px 20px 60px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)"}}/>
        <div style={{maxWidth:900,margin:"0 auto",position:"relative"}}>
          <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>Sistema de Predicciones</span>
          <h1 style={{fontSize:"clamp(32px,6vw,52px)",fontWeight:900,marginTop:16,lineHeight:1.1}}>
            8 formas de predecir,
            <br/>
            <span style={{color:GOLD}}>infinitas formas de ganar 🎯</span>
          </h1>
          <p style={{color:MID,marginTop:20,maxWidth:650,margin:"20px auto 0",lineHeight:1.7,fontSize:18}}>
            Predecir no es adivinar: es arte, estadística y coraje. 
            Cada partido es una oportunidad de demostrar tu conocimiento futbolístico 
            y ganar puntos que te llevarán a la cima del ranking.
          </p>
          <div style={{marginTop:32,display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/registro" style={{
              padding:"14px 32px",borderRadius:12,
              background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
              color:BG,fontWeight:700,fontSize:15,textDecoration:"none",display:"inline-block"
            }}>
              Empezar a predecir
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{padding:"40px 20px",borderBottom:"1px solid rgba(255,255,255,0.04)"}}>
        <div style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:24}}>
          {[
            {value:"8",label:"Tipos de predicciones"},
            {value:"200x",label:"Multiplicador máximo"},
            {value:"3",label:"Chips especiales"},
            {value:"∞",label:"Formas de ganar"},
          ].map((stat,i)=>[
            <div key={i} style={{textAlign:"center",padding:"20px"}}>
              <div style={{fontSize:"36px",fontWeight:800,color:GOLD}}>{stat.value}</div>
              <div style={{fontSize:14,color:DIM,marginTop:4}}>{stat.label}</div>
            </div>
          ])}
        </div>
      </section>

      {/* Prediction Types */}
      <section style={{padding:"60px 20px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Las <span style={{color:GOLD}}>8 formas</span> de predecir
            </h2>
            <p style={{color:MID,marginTop:12,maxWidth:550,margin:"12px auto 0"}}>
              Desde predicciones simples hasta encadenadas complejas. 
              Cada una con su propio nivel de dificultad y recompensa.
            </p>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:20}}>
            {PREDICTION_TYPES.map((pred,i)=>[
              <div key={i} style={{
                padding:28,borderRadius:20,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)",
                transition:"all 0.3s",cursor:"pointer",
              }} onMouseEnter={e=>{
                e.currentTarget.style.borderColor="rgba(201,168,76,0.25)";
                e.currentTarget.style.transform="translateY(-4px)";
              }} onMouseLeave={e=>{
                e.currentTarget.style.borderColor="rgba(255,255,255,0.05)";
                e.currentTarget.style.transform="translateY(0)";
              }}>
                <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
                  <span style={{fontSize:28}}>{pred.num}</span>
                  <h3 style={{fontWeight:700,fontSize:18,flex:1}}>{pred.title}</h3>
                </div>
                <div style={{display:"flex",gap:12,marginBottom:16}}>
                  <div style={{
                    padding:"6px 12px",borderRadius:20,background:"rgba(201,168,76,0.1)",
                    fontSize:12,color:GOLD,fontWeight:600
                  }}>
                    Dificultad {pred.difficulty}
                  </div>
                  <div style={{
                    padding:"6px 12px",borderRadius:20,background:"rgba(232,212,139,0.1)",
                    fontSize:12,color:GOLD2,fontWeight:600
                  }}>
                    {pred.points}
                  </div>
                </div>
                <p style={{fontSize:14,color:DIM,lineHeight:1.6}}>{pred.desc}</p>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Multipliers Section */}
      <section style={{padding:"60px 20px",background:BG3}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              💎 Multiplicadores de partido
            </h2>
            <p style={{color:MID,marginTop:12,maxWidth:500,margin:"12px auto 0"}}>
              Eventos especiales que multiplican tus ganancias
            </p>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(400px,1fr))",gap:24}}>
            {MULTIPLIERS.map((mult,i)=>[
              <div key={i} style={{
                padding:32,borderRadius:20,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)",
                display:"flex",gap:20,alignItems:"flex-start"
              }}>
                <div style={{
                  width:64,height:64,borderRadius:16,
                  background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:32,flexShrink:0
                }}>
                  {mult.icon}
                </div>
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:8}}>
                    <h3 style={{fontWeight:700,fontSize:20}}>{mult.title}</h3>
                    <span style={{
                      padding:"4px 12px",borderRadius:12,background:"rgba(201,168,76,0.2)",
                      color:GOLD,fontWeight:800,fontSize:16
                    }}>
                      {mult.value}
                    </span>
                  </div>
                  <p style={{fontSize:14,color:DIM,lineHeight:1.6}}>{mult.desc}</p>
                </div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Chips System */}
      <section style={{padding:"60px 20px"}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              🃏 Sistema de Chips
            </h2>
            <p style={{color:MID,marginTop:12,maxWidth:500,margin:"12px auto 0"}}>
              Potenciadores especiales para maximizar tus predicciones
            </p>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:24}}>
            {CHIPS.map((chip,i)=>[
              <div key={i} style={{
                padding:28,borderRadius:20,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)",
                textAlign:"center"
              }}>
                <div style={{
                  width:80,height:80,borderRadius:"50%",
                  background:`linear-gradient(135deg,${GOLD}20,${GOLD2}20)`,
                  border:`2px solid ${GOLD}40`,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:36,margin:"0 auto 20px"
                }}>
                  {chip.icon}
                </div>
                <h3 style={{fontWeight:700,fontSize:20,marginBottom:12}}>{chip.title}</h3>
                <p style={{fontSize:14,color:DIM,lineHeight:1.6}}>{chip.desc}</p>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section style={{padding:"60px 20px",background:BG3}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              ¿Cómo <span style={{color:GOLD}}>funciona?</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:32}}>
            {[
              {step:"1",title:"Elige un partido",desc:"Selecciona cualquiera de los 104 partidos del Mundial 2026"},
              {step:"2",title:"Selecciona tu tipo",desc:"Elige entre las 8 formas de predecir disponibles"},
              {step:"3",title:"Usa tus chips",desc:"Potencia tus predicciones con chips estratégicos"},
              {step:"4",title:"Gana y sube",desc:"Acumula puntos y escala en el ranking global"},
            ].map((item,i)=>[
              <div key={i} style={{display:"flex",gap:20,alignItems:"flex-start"}}>
                <div style={{
                  width:48,height:48,borderRadius:12,
                  background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontWeight:800,fontSize:20,color:BG,flexShrink:0
                }}>
                  {item.step}
                </div>
                <div>
                  <h3 style={{fontWeight:700,fontSize:18,marginBottom:6}}>{item.title}</h3>
                  <p style={{fontSize:14,color:DIM,lineHeight:1.6}}>{item.desc}</p>
                </div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"80px 20px",textAlign:"center"}}>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800,marginBottom:16}}>
            🎯 Domina todas las predicciones
          </h2>
          <p style={{color:MID,marginBottom:32,fontSize:16}}>
            Pre-regístrate ahora y sé de los primeros en experimentar 
            el sistema de predicciones más completo del Mundial 2026.
          </p>
          <Link href="/registro" style={{
            padding:"16px 40px",borderRadius:12,
            background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
            color:BG,fontWeight:700,fontSize:16,textDecoration:"none",display:"inline-block"
          }}>
            Pre-regístrate →
          </Link>
        </div>
      </section>
    </div>
  );
}
