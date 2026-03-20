"use client";

import Link from "next/link";

const BG="#060B14",BG2="#0F1D32",BG3="#0B1825",GOLD="#c9a84c",GOLD2="#e8d48b",MID="#8a94b0",DIM="#6a7a9a",DARK="#4a5570";

const GAME_MODES = [
  { icon: "🌅", title: "Trivia Diario", desc: "10 preguntas nuevas cada día, mantén tu racha y acumula puntos semanales", highlight: "Racha diaria" },
  { icon: "⚡", title: "Modo Relámpago", desc: "60 segundos, responde el mayor número de preguntas posible, bonus ×2 si respondes en menos de 3 segundos", highlight: "Bonus velocidad" },
  { icon: "🏆", title: "Battle Royale", desc: "100 jugadores, 1 ganador, rondas eliminatorias cada 10 preguntas", highlight: "100 vs 1" },
  { icon: "☠️", title: "Muerte Súbita", desc: "Sin límite de preguntas, falla una = ELIMINADO, récord actual: 47 preguntas", highlight: "Supervivencia" },
  { icon: "🎯", title: "Pre-partido", desc: "Trivia especial antes de cada partido importante del Mundial 2026", highlight: "Antes del partido" },
];

const CATEGORIES = [
  { name: "Historia", icon: "📜", desc: "Mundiales pasados, campeones históricos, momentos icónicos", color: GOLD },
  { name: "Actualidad", icon: "⚽", desc: "Plantillas, transferencias, formación actual de selecciones", color: GOLD },
  { name: "Visual", icon: "👁️", desc: "Siluetas de jugadores, estadios, equipaciones históricas", color: GOLD },
  { name: "Curiosidades", icon: "🎉", desc: "Datos locos, anécdotas, records insólitos del Mundial", color: GOLD },
  { name: "Pre-partido", icon: "🎯", desc: "Trivia sobre próximos enfrentamientos del torneo", color: GOLD },
];

const POINTS_SYSTEM = {
  difficulty: [
    { level: "Fácil", points: "5 pts", color: "#22c55e" },
    { level: "Media", points: "10 pts", color: GOLD },
    { level: "Difícil", points: "15 pts", color: "#f97316" },
    { level: "Experto", points: "25 pts", color: "#ef4444" },
  ],
  bonus: [
    { name: "Velocidad", multiplier: "×2", desc: "Responde en <3 segundos" },
    { name: "Racha 5", multiplier: "×1.5", desc: "5 respuestas correctas seguidas" },
    { name: "Racha 10", multiplier: "×2", desc: "10 respuestas correctas seguidas" },
    { name: "Racha 20", multiplier: "×3", desc: "20 respuestas correctas seguidas" },
  ],
};

const BADGES = [
  { icon: "📚", name: "Historiador", desc: "Completa 100 preguntas de historia", rarity: "Común" },
  { icon: "👁️", name: "Ojo de águila", desc: "Acierta 50 preguntas visuales seguidas", rarity: "Raro" },
  { icon: "⚡", name: "Velocista", desc: "Responde 20 preguntas en <3 segundos", rarity: "Raro" },
  { icon: "☠️", name: "Inmortal", desc: "Llega a 30 preguntas en Death Match", rarity: "Épico" },
  { icon: "🏆", name: "Campeón", desc: "Gana un torneo Battle Royale", rarity: "Legendario" },
];

const TITLES = [
  { rank: "Top 100", title: "Sabio", icon: "🎓", desc: "Entra al top 100 del ranking global" },
  { rank: "Top 10", title: "Leyenda", icon: "👑", desc: "Entra al top 10 del ranking global" },
  { rank: "#1", title: "GOAT", icon: "🐐", desc: "Conviértete en el #1 del ranking mundial" },
];

export default function TriviaPage() {
  return (
    <div style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif",minHeight:"100vh"}}>
      {/* Hero */}
      <section style={{padding:"80px 20px 60px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)"}}/>
        <div style={{maxWidth:800,margin:"0 auto",position:"relative"}}>
          <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>Plataforma</span>
          <h1 style={{fontSize:"clamp(32px,6vw,52px)",fontWeight:900,marginTop:16,lineHeight:1.1}}>
            ¿Eres un experto? <span style={{color:GOLD}}>Demuéstralo en la Trivia 🧠</span>
          </h1>
          <p style={{color:MID,marginTop:20,maxWidth:600,margin:"20px auto 0",lineHeight:1.7,fontSize:17}}>
            +10,000 preguntas, 5 modos de juego, Ranking global. 
            Pon a prueba tus conocimientos futboleros y compite contra jugadores de todo el mundo.
          </p>
          <div style={{marginTop:32,display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/registro" style={{
              padding:"14px 32px",borderRadius:12,
              background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
              color:BG,fontWeight:700,fontSize:15,textDecoration:"none",display:"inline-block"
            }}>
              🎯 Desafía a los mejores → Únete ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section style={{padding:"40px 20px",background:BG3,borderTop:"1px solid rgba(255,255,255,0.05)",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:24,textAlign:"center"}}>
            {[
              {value:"10,000+",label:"Preguntas disponibles"},
              {value:"5",label:"Modos de juego"},
              {value:"24/7",label:"Partidas en vivo"},
              {value:"100 vs 1",label:"Battle Royale"},
            ].map((stat,i)=>
              <div key={i}>
                <div style={{fontSize:"32px",fontWeight:800,color:GOLD}}>{stat.value}</div>
                <div style={{fontSize:13,color:DIM,marginTop:4}}>{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Game Modes */}
      <section style={{padding:"80px 20px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:2,textTransform:"uppercase"}}>Modos de juego</span>
            <h2 style={{fontSize:"clamp(28px,5vw,42px)",fontWeight:800,marginTop:12}}>
              🎮 5 Modos de <span style={{color:GOLD}}>Trivia</span>
            </h2>
            <p style={{color:MID,marginTop:12,fontSize:15}}>Los 5 modos disponibles en la app</p>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center",marginBottom:48}}>
            <div>
              <p style={{color:MID,fontSize:17,lineHeight:1.7,marginBottom:24}}>
                Elige tu modo de juego favorito y pon a prueba tus conocimientos footballísticos contra jugadores de todo el mundo.
              </p>
              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                {GAME_MODES.map((mode,i)=>[
                  <div key={i} style={{
                    padding:16,borderRadius:12,background:BG2,
                    border:"1px solid rgba(255,255,255,0.05)",
                    display:"flex",alignItems:"center",gap:12
                  }}>
                    <span style={{fontSize:28}}>{mode.icon}</span>
                    <div>
                      <div style={{fontWeight:700,fontSize:15}}>{mode.title}</div>
                      <div style={{fontSize:12,color:DIM}}>{mode.highlight}</div>
                    </div>
                  </div>
                ])}
              </div>
            </div>
            <div>
              <img 
                src="/img/zonamundial-images/imagenes/trivia zona mundial.jpeg" 
                alt="Trivia Zona Mundial" 
                style={{
                  borderRadius:16,
                  overflow:"hidden",
                  boxShadow:"0 20px 40px rgba(0,0,0,0.3)",
                  border:"1px solid rgba(255,255,255,0.08)",
                  maxWidth:450,
                  width:"100%",
                  height:"auto",
                  display:"block"
                }}
              />
            </div>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:24}}>
            {GAME_MODES.map((mode,i)=>[
              <div key={i} style={{
                padding:28,borderRadius:20,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)",
                position:"relative",overflow:"hidden"
              }}>
                <div style={{
                  position:"absolute",top:0,right:0,
                  padding:"6px 14px",background:`rgba(201,168,76,0.15)`,
                  borderBottomLeftRadius:16,color:GOLD,
                  fontSize:11,fontWeight:700,textTransform:"uppercase"
                }}>
                  {mode.highlight}
                </div>
                <div style={{display:"flex",alignItems:"flex-start",gap:16}}>
                  <div style={{fontSize:48}}>{mode.icon}</div>
                  <div style={{flex:1}}>
                    <h3 style={{fontWeight:800,fontSize:20,marginBottom:8}}>{mode.title}</h3>
                    <p style={{fontSize:14,color:DIM,lineHeight:1.7}}>{mode.desc}</p>
                  </div>
                </div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{padding:"80px 20px",background:BG3}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:2,textTransform:"uppercase"}}>Contenido</span>
            <h2 style={{fontSize:"clamp(28px,5vw,42px)",fontWeight:800,marginTop:12}}>
              📚 Categorías de <span style={{color:GOLD}}>Preguntas</span>
            </h2>
          </div>

          <div style={{background:BG2,borderRadius:20,overflow:"hidden",border:"1px solid rgba(255,255,255,0.05)"}}>
            <div style={{
              display:"grid",
              gridTemplateColumns:"60px 1fr 2fr 80px",
              padding:"16px 24px",
              background:"rgba(201,168,76,0.1)",
              fontSize:12,fontWeight:700,color:GOLD,
              textTransform:"uppercase",letterSpacing:1
            }}>
              <span></span>
              <span>Categoría</span>
              <span>Descripción</span>
              <span style={{textAlign:"center"}}>Preguntas</span>
            </div>
            {CATEGORIES.map((cat,i)=>[
              <div key={i} style={{
                display:"grid",
                gridTemplateColumns:"60px 1fr 2fr 80px",
                padding:"20px 24px",
                borderBottom:"1px solid rgba(255,255,255,0.05)",
                alignItems:"center"
              }}>
                <span style={{fontSize:24}}>{cat.icon}</span>
                <span style={{fontWeight:700,fontSize:16}}>{cat.name}</span>
                <span style={{fontSize:14,color:DIM}}>{cat.desc}</span>
                <span style={{textAlign:"center",fontWeight:700,color:GOLD}}>2,000+</span>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Example Question */}
      <section style={{padding:"80px 20px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(28px,5vw,42px)",fontWeight:800}}>
              📝 Así es una <span style={{color:GOLD}}>Pregunta</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center"}}>
            <div>
              <img 
                src="/img/zonamundial-images/imagenes/pregunta trivia zonamundial.jpeg" 
                alt="Ejemplo de pregunta trivia" 
                style={{
                  borderRadius:16,
                  overflow:"hidden",
                  boxShadow:"0 20px 40px rgba(0,0,0,0.3)",
                  border:"1px solid rgba(255,255,255,0.08)",
                  maxWidth:450,
                  width:"100%",
                  height:"auto",
                  display:"block"
                }}
              />
            </div>
            <div>
              <h3 style={{fontSize:"clamp(20px,3vw,28px)",fontWeight:800,marginBottom:20}}>
                Interfaz <span style={{color:GOLD}}>intuitiva</span>
              </h3>
              <div style={{display:"flex",flexDirection:"column",gap:14}}>
                {[
                  {icon:"⏱️",text:"Contador de tiempo siempre visible"},
                  {icon:"🎯",text:"4 opciones de respuesta"},
                  {icon:"📊",text:"Progreso de la partida"},
                  {icon:"⚡",text:"Feedback instantáneo al responder"},
                  {icon:"🔥",text:"Racha de respuestas correctas"},
                ].map((item,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",gap:12,fontSize:15}}>
                    <span style={{fontSize:20}}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
              <div style={{marginTop:24,padding:"16px 20px",borderRadius:12,background:BG2,border:"1px solid rgba(255,255,255,0.05)"}}>
                <span style={{fontSize:13,color:MID}}>Cada pregunta tiene <strong style={{color:"#fff"}}>10 segundos</strong> de límite. Responde rápido para ganar bonus.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points System */}
      <section style={{padding:"80px 20px"}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:2,textTransform:"uppercase"}}>Puntuación</span>
            <h2 style={{fontSize:"clamp(28px,5vw,42px)",fontWeight:800,marginTop:12}}>
              🏅 Sistema de <span style={{color:GOLD}}>Puntos</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:32}}>
            {/* Difficulty Points */}
            <div style={{padding:28,borderRadius:20,background:BG2,border:"1px solid rgba(255,255,255,0.05)"}}>
              <h3 style={{fontWeight:800,fontSize:18,marginBottom:24,textAlign:"center"}}>Puntos por Dificultad</h3>
              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                {POINTS_SYSTEM.difficulty.map((diff,i)=>[
                  <div key={i} style={{
                    display:"flex",justifyContent:"space-between",alignItems:"center",
                    padding:"14px 18px",borderRadius:12,
                    background:"rgba(255,255,255,0.03)"
                  }}>
                    <span style={{fontWeight:600}}>{diff.level}</span>
                    <span style={{fontWeight:800,color:diff.color,fontSize:18}}>{diff.points}</span>
                  </div>
                ])}
              </div>
            </div>

            {/* Bonus Multipliers */}
            <div style={{padding:28,borderRadius:20,background:BG2,border:"1px solid rgba(255,255,255,0.05)"}}>
              <h3 style={{fontWeight:800,fontSize:18,marginBottom:24,textAlign:"center"}}>Multiplicadores Bonus</h3>
              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                {POINTS_SYSTEM.bonus.map((bonus,i)=>[
                  <div key={i} style={{
                    display:"flex",justifyContent:"space-between",alignItems:"center",
                    padding:"14px 18px",borderRadius:12,
                    background:"rgba(201,168,76,0.08)"
                  }}>
                    <div>
                      <div style={{fontWeight:700,color:GOLD}}>{bonus.name}</div>
                      <div style={{fontSize:12,color:DIM,marginTop:2}}>{bonus.desc}</div>
                    </div>
                    <span style={{fontWeight:800,color:GOLD2,fontSize:20}}>{bonus.multiplier}</span>
                  </div>
                ])}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges & Titles */}
      <section style={{padding:"80px 20px",background:BG3}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:2,textTransform:"uppercase"}}>Recompensas</span>
            <h2 style={{fontSize:"clamp(28px,5vw,42px)",fontWeight:800,marginTop:12}}>
              🎖️ Logros y <span style={{color:GOLD}}>Badges</span>
            </h2>
          </div>

          {/* Badges Grid */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:20,marginBottom:60}}>
            {BADGES.map((badge,i)=>[
              <div key={i} style={{
                padding:24,borderRadius:16,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)",
                textAlign:"center"
              }}>
                <div style={{fontSize:48,marginBottom:12}}>{badge.icon}</div>
                <h4 style={{fontWeight:700,fontSize:16,marginBottom:4}}>{badge.name}</h4>
                <p style={{fontSize:13,color:DIM,marginBottom:12,lineHeight:1.5}}>{badge.desc}</p>
                <span style={{
                  display:"inline-block",
                  padding:"4px 12px",borderRadius:20,
                  background:badge.rarity==="Legendario"?"rgba(239,68,68,0.2)":
                           badge.rarity==="Épico"?"rgba(168,85,247,0.2)":
                           badge.rarity==="Raro"?"rgba(59,130,246,0.2)":"rgba(107,114,128,0.2)",
                  color:badge.rarity==="Legendario"?"#ef4444":
                       badge.rarity==="Épico"?"#a855f7":
                       badge.rarity==="Raro"?"#3b82f6":"#9ca3af",
                  fontSize:11,fontWeight:700
                }}>
                  {badge.rarity}
                </span>
              </div>
            ])}
          </div>

          {/* Titles Section */}
          <div style={{textAlign:"center",marginBottom:32}}>
            <h3 style={{fontSize:"clamp(20px,3vw,28px)",fontWeight:700}}>
              🏆 Títulos de <span style={{color:GOLD}}>Ranking</span>
            </h3>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:20}}>
            {TITLES.map((title,i)=>[
              <div key={i} style={{
                padding:24,borderRadius:16,
                background:`linear-gradient(135deg,rgba(201,168,76,0.15),rgba(201,168,76,0.05))`,
                border:`1px solid ${GOLD}`,
                textAlign:"center"
              }}>
                <div style={{fontSize:40,marginBottom:12}}>{title.icon}</div>
                <div style={{fontSize:14,color:GOLD,fontWeight:700,marginBottom:4}}>{title.rank}</div>
                <h4 style={{fontWeight:800,fontSize:22,marginBottom:8,color:GOLD2}}>{title.title}</h4>
                <p style={{fontSize:13,color:MID,lineHeight:1.5}}>{title.desc}</p>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"80px 20px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(201,168,76,0.1) 0%,transparent 60%)"}}/>
        <div style={{maxWidth:600,margin:"0 auto",position:"relative"}}>
          <div style={{fontSize:72,marginBottom:24}}>🧠</div>
          <h2 style={{fontSize:"clamp(28px,5vw,42px)",fontWeight:800,marginBottom:16}}>
            ¿Listo para demostrar tu <span style={{color:GOLD}}>conocimiento?</span>
          </h2>
          <p style={{color:MID,marginBottom:32,fontSize:17,lineHeight:1.7}}>
            Únete a miles de fanáticos del fútbol y compite por ser el experto mundialista definitivo. 
            +10,000 preguntas te esperan.
          </p>
          <Link href="/registro" style={{
            padding:"18px 48px",borderRadius:12,
            background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
            color:BG,fontWeight:800,fontSize:17,textDecoration:"none",display:"inline-block"
          }}>
            🎯 Desafía a los mejores → Únete ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
