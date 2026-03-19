"use client";

import Link from "next/link";

const BG="#060B14",BG2="#0F1D32",BG3="#0B1825",GOLD="#c9a84c",GOLD2="#e8d48b",MID="#8a94b0",DIM="#6a7a9a",DARK="#4a5570";

const STREAMS = [
  { type: "live", title: "México vs Sudáfrica", time: "EN VIVO", viewers: "125K" },
  { type: "upcoming", title: "Argentina vs Brasil", time: "En 2 horas", viewers: "—" },
  { type: "upcoming", title: "España vs Alemania", time: "Mañana 15:00", viewers: "—" },
];

const FEATURES = [
  { icon: "📺", title: "Todo el Mundial", desc: "Acceso a todos los 104 partidos del torneo" },
  { icon: "💬", title: "Chat en vivo", desc: "Comenta con la comunidad durante los partidos" },
  { icon: "📊", title: "Estadísticas", desc: "Datos en tiempo real mientras ves el partido" },
  { icon: "🔔", title: "Alertas", desc: "Notificaciones de goles y momentos clave" },
];

export default function StreamingPage() {
  return (
    <div style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif",minHeight:"100vh"}}>
      {/* Hero */}
      <section style={{padding:"80px 20px 60px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)"}}/>
        <div style={{maxWidth:800,margin:"0 auto",position:"relative"}}>
          <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>Plataforma</span>
          <h1 style={{fontSize:"clamp(32px,6vw,52px)",fontWeight:900,marginTop:16,lineHeight:1.1}}>
            <span style={{color:GOLD}}>Streaming</span> en Vivo
          </h1>
          <p style={{color:MID,marginTop:20,maxWidth:600,margin:"20px auto 0",lineHeight:1.7,fontSize:17}}>
            Mira todos los partidos del Mundial 2026 con la mejor calidad. 
            Chat en vivo, estadísticas y comunidad en un solo lugar.
          </p>
          <div style={{marginTop:32}}>
            <Link href="/registro" style={{
              padding:"14px 32px",borderRadius:12,
              background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
              color:BG,fontWeight:700,fontSize:15,textDecoration:"none",display:"inline-block"
            }}>
              Acceder al streaming
            </Link>
          </div>
        </div>
      </section>

      {/* Live Now */}
      <section style={{padding:"60px 20px",background:BG3}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Ahora <span style={{color:GOLD}}>en vivo</span>
            </h2>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            {STREAMS.map((stream,i)=>[
              <div key={i} style={{
                padding:24,borderRadius:16,background:BG2,
                border:`1px solid ${stream.type==="live"?GOLD:"rgba(255,255,255,0.05)"}`,
                display:"flex",justifyContent:"space-between",alignItems:"center",
                flexWrap:"wrap",gap:16
              }}>
                <div style={{display:"flex",alignItems:"center",gap:16}}>
                  {stream.type==="live" && (
                    <div style={{
                      width:12,height:12,borderRadius:"50%",
                      background:"#ef4444",
                      animation:"pulse 2s infinite"
                    }}/>
                  )}
                  <div>
                    <h3 style={{fontWeight:700,fontSize:18}}>{stream.title}</h3>
                    <p style={{fontSize:13,color:stream.type==="live"?"#ef4444":DIM,marginTop:4}}>
                      {stream.time}
                    </p>
                  </div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:16}}>
                  {stream.viewers !== "—" && (
                    <span style={{fontSize:14,color:DIM}}>👁 {stream.viewers}</span>
                  )}
                  <button style={{
                    padding:"10px 20px",borderRadius:10,
                    background:stream.type==="live"?GOLD:BG3,
                    color:stream.type==="live"?BG:"#fff",
                    border:`1px solid ${stream.type==="live"?GOLD:"rgba(255,255,255,0.1)"}`,
                    fontWeight:600,fontSize:14,cursor:"pointer"
                  }}>
                    {stream.type==="live"?"Ver ahora":"Recordarme"}
                  </button>
                </div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{padding:"60px 20px"}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Todo en <span style={{color:GOLD}}>un solo lugar</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:24}}>
            {FEATURES.map((feature,i)=>[
              <div key={i} style={{
                padding:28,borderRadius:16,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)",
                textAlign:"center"
              }}>
                <div style={{fontSize:40,marginBottom:12}}>{feature.icon}</div>
                <h3 style={{fontWeight:700,fontSize:18,marginBottom:8}}>{feature.title}</h3>
                <p style={{fontSize:14,color:DIM,lineHeight:1.6}}>{feature.desc}</p>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section style={{padding:"60px 20px",background:BG3}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Próximos <span style={{color:GOLD}}>partidos</span>
            </h2>
          </div>

          <div style={{background:BG2,borderRadius:20,padding:28,border:"1px solid rgba(255,255,255,0.05)"}}>
            {[
              {date:"Hoy",matches:["México vs Sudáfrica - 12:00","Corea del Sur vs TBD - 18:00"]},
              {date:"Mañana",matches:["Canadá vs Qatar - 12:00","Brasil vs Haití - 18:00"]},
            ].map((day,i)=>[
              <div key={i} style={{marginBottom:i===0?24:0}}>
                <h3 style={{fontWeight:700,fontSize:14,color:GOLD,marginBottom:12,textTransform:"uppercase",letterSpacing:1}}>
                  {day.date}
                </h3>
                {day.matches.map((match,j)=>[
                  <div key={j} style={{
                    padding:"14px 0",
                    borderBottom:j<day.matches.length-1?"1px solid rgba(255,255,255,0.05)":"none",
                    fontSize:15
                  }}>
                    {match}
                  </div>
                ])}
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"80px 20px",textAlign:"center"}}>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <div style={{fontSize:64,marginBottom:24}}>📺</div>
          <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800,marginBottom:16}}>
            No te pierdas ni un <span style={{color:GOLD}}>solo partido</span>
          </h2>
          <p style={{color:MID,marginBottom:32,fontSize:16}}>
            Disponible para todos los usuarios registrados. Streaming HD sin interrupciones.
          </p>
          <Link href="/registro" style={{
            padding:"16px 40px",borderRadius:12,
            background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
            color:BG,fontWeight:700,fontSize:16,textDecoration:"none",display:"inline-block"
          }}>
            Ver streaming gratis
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
