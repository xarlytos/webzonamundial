"use client";

import Link from "next/link";

const BG="#060B14",BG2="#0F1D32",BG3="#0B1825",GOLD="#c9a84c",GOLD2="#e8d48b",MID="#8a94b0",DIM="#6a7a9a",DARK="#4a5570";

const LEAGUE_TYPES = [
  { icon: "👥", title: "Pública", desc: "Cualquiera puede unirse. Compite contra desconocidos de todo el mundo." },
  { icon: "🔒", title: "Privada", desc: "Solo con invitación. Perfecta para jugar con amigos y familia." },
  { icon: "⚡", title: "Rápida", desc: "Duración de 1 jornada. Competencia intensa y rápida." },
  { icon: "🏆", title: "Temporada", desc: "Toda la duración del Mundial. La liga definitiva." },
];

const SAMPLE_LEAGUES = [
  { name: "Liga de Amigos Valencia", type: "Privada", members: 12, ranking: 45 },
  { name: "Competencia Mundial", type: "Pública", members: 1250, ranking: 3 },
  { name: "Fantasy Pro España", type: "Pública", members: 500, ranking: 12 },
];

export default function LigasPage() {
  return (
    <div style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif",minHeight:"100vh"}}>
      {/* Hero */}
      <section style={{padding:"80px 20px 60px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)"}}/>
        <div style={{maxWidth:800,margin:"0 auto",position:"relative"}}>
          <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>Plataforma</span>
          <h1 style={{fontSize:"clamp(32px,6vw,52px)",fontWeight:900,marginTop:16,lineHeight:1.1}}>
            Ligas <span style={{color:GOLD}}>Privadas</span>
          </h1>
          <p style={{color:MID,marginTop:20,maxWidth:600,margin:"20px auto 0",lineHeight:1.7,fontSize:17}}>
            Crea tu propia liga y compite contra amigos, familia o colegas. 
            Configura tus propias reglas y demuestra quién es el mejor.
          </p>
          <div style={{marginTop:32,display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/registro" style={{
              padding:"14px 32px",borderRadius:12,
              background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
              color:BG,fontWeight:700,fontSize:15,textDecoration:"none",display:"inline-block"
            }}>
              Crear mi liga
            </Link>
            <button style={{
              padding:"14px 32px",borderRadius:12,
              background:"transparent",border:`1px solid ${GOLD}`,
              color:GOLD,fontWeight:600,fontSize:15,cursor:"pointer"
            }}>
              Unirme a una liga
            </button>
          </div>
        </div>
      </section>

      {/* League Types */}
      <section style={{padding:"60px 20px",background:BG3}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Tipos de <span style={{color:GOLD}}>Ligas</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:24}}>
            {LEAGUE_TYPES.map((type,i)=>[
              <div key={i} style={{
                padding:28,borderRadius:16,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)",
                textAlign:"center"
              }}>
                <div style={{fontSize:40,marginBottom:12}}>{type.icon}</div>
                <h3 style={{fontWeight:700,fontSize:18,marginBottom:8}}>{type.title}</h3>
                <p style={{fontSize:14,color:DIM,lineHeight:1.6}}>{type.desc}</p>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{padding:"60px 20px"}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              ¿Qué puedes hacer en una <span style={{color:GOLD}}>liga?</span>
            </h2>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:20}}>
            {[
              {title:"Chat integrado",desc:"Comunícate con los miembros de tu liga en tiempo real."},
              {title:"Tabla de posiciones",desc:"Sigue el ranking actualizado después de cada partido."},
              {title:"Estadísticas detalladas",desc:"Analiza el rendimiento de cada jugador en la liga."},
              {title:"Premios personalizados",desc:"Define premios para los ganadores de tu liga."},
            ].map((feature,i)=>[
              <div key={i} style={{
                display:"flex",alignItems:"center",gap:20,
                padding:20,borderRadius:12,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)"
              }}>
                <div style={{
                  width:48,height:48,borderRadius:10,
                  background:GOLD,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:20,flexShrink:0
                }}>
                  {["💬","📊","📈","🎁"][i]}
                </div>
                <div>
                  <h3 style={{fontWeight:700,fontSize:16,marginBottom:4}}>{feature.title}</h3>
                  <p style={{fontSize:14,color:DIM}}>{feature.desc}</p>
                </div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Sample Leagues */}
      <section style={{padding:"60px 20px",background:BG3}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Ligas <span style={{color:GOLD}}>populares</span>
            </h2>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            {SAMPLE_LEAGUES.map((league,i)=>[
              <div key={i} style={{
                padding:24,borderRadius:16,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)",
                display:"flex",justifyContent:"space-between",alignItems:"center",
                flexWrap:"wrap",gap:16
              }}>
                <div>
                  <h3 style={{fontWeight:700,fontSize:17,marginBottom:4}}>{league.name}</h3>
                  <p style={{fontSize:13,color:DIM}}>{league.members} miembros • {league.type}</p>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <span style={{fontSize:24}}>#{league.ranking}</span>
                  <button style={{
                    padding:"8px 16px",borderRadius:8,
                    background:GOLD,color:BG,
                    border:"none",fontWeight:600,fontSize:13,cursor:"pointer"
                  }}>
                    Ver
                  </button>
                </div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"80px 20px",textAlign:"center"}}>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <div style={{fontSize:64,marginBottom:24}}>👥</div>
          <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800,marginBottom:16}}>
            Crea tu liga y <span style={{color:GOLD}}>invita amigos</span>
          </h2>
          <p style={{color:MID,marginBottom:32,fontSize:16}}>
            Gratis e ilimitado. Crea tantas ligas como quieras y compite por la gloria.
          </p>
          <Link href="/registro" style={{
            padding:"16px 40px",borderRadius:12,
            background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
            color:BG,fontWeight:700,fontSize:16,textDecoration:"none",display:"inline-block"
          }}>
            Crear mi liga gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
