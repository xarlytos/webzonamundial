"use client";

import Link from "next/link";

const BG="#060B14",BG2="#0F1D32",BG3="#0B1825",GOLD="#c9a84c",GOLD2="#e8d48b",MID="#8a94b0",DIM="#6a7a9a",DARK="#4a5570";

const CAREER_STEPS = [
  { step: 1, title: "Inicio", desc: "Comienzas como aficionado sin experiencia" },
  { step: 2, title: "Novato", desc: "Gana tus primeros 1000 puntos en predicciones" },
  { step: 3, title: "Aficionado", desc: "Completa 50 predicciones correctas" },
  { step: 4, title: "Experto", desc: "Entra en el top 1000 del ranking" },
  { step: 5, title: "Profesional", desc: "Gana una liga privada contra amigos" },
  { step: 6, title: "Leyenda", desc: "Alcanza el top 100 global" },
  { step: 7, title: "Ídolo", desc: "Sé el mejor de tu país" },
  { step: 8, title: "Dios del Fútbol", desc: "Top 10 mundial durante todo el torneo" },
];

const ACHIEVEMENTS = [
  { icon: "🎯", name: "Primera Predicción", desc: "Haz tu primera predicción", points: 100 },
  { icon: "🔥", name: "Racha de 5", desc: "Acierta 5 predicciones seguidas", points: 500 },
  { icon: "⚽", name: "Goleador", desc: "Acierta el goleador en 10 partidos", points: 1000 },
  { icon: "🏆", name: "Campeón de Liga", desc: "Gana una liga privada", points: 2000 },
  { icon: "⭐", name: "Top 100", desc: "Entra al top 100 del ranking", points: 5000 },
  { icon: "👑", name: "Predicción Perfecta", desc: "Acierta resultado exacto, goleador y más", points: 10000 },
];

export default function ModoCarreraPage() {
  return (
    <div style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif",minHeight:"100vh"}}>
      {/* Hero */}
      <section style={{padding:"80px 20px 60px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)"}}/>
        <div style={{maxWidth:800,margin:"0 auto",position:"relative"}}>
          <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>Plataforma</span>
          <h1 style={{fontSize:"clamp(32px,6vw,52px)",fontWeight:900,marginTop:16,lineHeight:1.1}}>
            Modo <span style={{color:GOLD}}>Carrera</span>
          </h1>
          <p style={{color:MID,marginTop:20,maxWidth:600,margin:"20px auto 0",lineHeight:1.7,fontSize:17}}>
            Evoluciona desde aficionado hasta convertirte en leyenda del fútbol. 
            Completa logros, sube de nivel y desbloquea recompensas exclusivas.
          </p>
          <div style={{marginTop:32}}>
            <Link href="/registro" style={{
              padding:"14px 32px",borderRadius:12,
              background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
              color:BG,fontWeight:700,fontSize:15,textDecoration:"none",display:"inline-block"
            }}>
              Comenzar mi carrera
            </Link>
          </div>
        </div>
      </section>

      {/* Progress Path */}
      <section style={{padding:"60px 20px",background:BG3}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Tu camino hacia la <span style={{color:GOLD}}>leyenda</span>
            </h2>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:20}}>
            {CAREER_STEPS.map((item,i)=>[
              <div key={i} style={{
                display:"flex",alignItems:"center",gap:24,
                padding:24,borderRadius:16,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)"
              }}>
                <div style={{
                  width:56,height:56,borderRadius:"50%",
                  background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontWeight:800,fontSize:20,color:BG,flexShrink:0
                }}>
                  {item.step}
                </div>
                <div style={{flex:1}}>
                  <h3 style={{fontWeight:700,fontSize:18,marginBottom:4}}>{item.title}</h3>
                  <p style={{fontSize:14,color:DIM}}>{item.desc}</p>
                </div>
                <div style={{fontSize:24}}>
                  {i < 2 ? "✅" : "🔒"}
                </div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section style={{padding:"60px 20px"}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Logros y <span style={{color:GOLD}}>Recompensas</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:20}}>
            {ACHIEVEMENTS.map((ach,i)=>[
              <div key={i} style={{
                padding:24,borderRadius:16,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)",
                display:"flex",gap:16,alignItems:"center"
              }}>
                <div style={{fontSize:40}}>{ach.icon}</div>
                <div style={{flex:1}}>
                  <h3 style={{fontWeight:700,fontSize:16,marginBottom:4}}>{ach.name}</h3>
                  <p style={{fontSize:13,color:DIM,marginBottom:6}}>{ach.desc}</p>
                  <span style={{fontSize:13,color:GOLD,fontWeight:600}}>+{ach.points.toLocaleString()} pts</span>
                </div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{padding:"60px 20px",background:BG3}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Tu <span style={{color:GOLD}}>progreso</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:24}}>
            {[
              {label:"Nivel actual",value:"Novato"},
              {label:"Puntos totales",value:"1,250"},
              {label:"Logros",value:"3/50"},
              {label:"Racha actual",value:"2 partidos"},
            ].map((stat,i)=>[
              <div key={i} style={{
                padding:28,borderRadius:16,background:BG2,
                textAlign:"center",border:"1px solid rgba(255,255,255,0.05)"
              }}>
                <div style={{fontSize:28,fontWeight:800,color:GOLD,marginBottom:8}}>{stat.value}</div>
                <div style={{fontSize:14,color:DIM}}>{stat.label}</div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"80px 20px",textAlign:"center"}}>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <div style={{fontSize:64,marginBottom:24}}>🏆</div>
          <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800,marginBottom:16}}>
            ¿Listo para convertirte en <span style={{color:GOLD}}>leyenda?</span>
          </h2>
          <p style={{color:MID,marginBottom:32,fontSize:16}}>
            Cada predicción cuenta. Cada punto te acerca más a la cima del ranking mundial.
          </p>
          <Link href="/registro" style={{
            padding:"16px 40px",borderRadius:12,
            background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
            color:BG,fontWeight:700,fontSize:16,textDecoration:"none",display:"inline-block"
          }}>
            Empezar mi carrera
          </Link>
        </div>
      </section>
    </div>
  );
}
