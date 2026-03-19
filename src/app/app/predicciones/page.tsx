"use client";

import { useState } from "react";
import Link from "next/link";

const BG="#060B14",BG2="#0F1D32",BG3="#0B1825",GOLD="#c9a84c",GOLD2="#e8d48b",MID="#8a94b0",DIM="#6a7a9a",DARK="#4a5570";

const PREDICTION_TYPES = [
  { icon: "🏆", title: "Resultado Exacto", desc: "Acierta el marcador final y gana máximos puntos" },
  { icon: "⚽", title: "Primer Goleador", desc: "Predice quién marcará el primer gol" },
  { icon: "🎯", title: "Total de Goles", desc: "Over/Under en el total de goles del partido" },
  { icon: "🛡️", title: "Clean Sheet", desc: "¿Qué equipo mantendrá su portería a cero?" },
  { icon: "⚡", title: "Corners", desc: "Predice el número de corners en el partido" },
  { icon: "🎴", title: "Tarjetas", desc: "Total de tarjetas amarillas y rojas" },
  { icon: "🔥", title: "Goleador del Partido", desc: "El jugador que marcará más goles" },
  { icon: "⏱️", title: "Minuto del Primer Gol", desc: "En qué minuto caerá el primer gol" },
];

export default function PrediccionesPage() {
  const [activeTab, setActiveTab] = useState("todos");

  return (
    <div style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif",minHeight:"100vh"}}>
      {/* Hero Section */}
      <section style={{padding:"80px 20px 60px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)"}}/>
        <div style={{maxWidth:800,margin:"0 auto",position:"relative"}}>
          <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>Plataforma</span>
          <h1 style={{fontSize:"clamp(32px,6vw,52px)",fontWeight:900,marginTop:16,lineHeight:1.1}}>
            Predicciones
            <span style={{color:GOLD}}> Inteligentes</span>
          </h1>
          <p style={{color:MID,marginTop:20,maxWidth:600,margin:"20px auto 0",lineHeight:1.7,fontSize:17}}>
            8 tipos de predicciones para cada partido. Acierta resultados exactos, goleadores, corners, 
            tarjetas y más. Gana puntos, sube en el ranking y demuestra que eres el mejor.
          </p>
          <div style={{marginTop:32,display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/registro" style={{
              padding:"14px 32px",borderRadius:12,
              background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
              color:BG,fontWeight:700,fontSize:15,textDecoration:"none",display:"inline-block"
            }}>
              Empezar a predecir
            </Link>
            <button style={{
              padding:"14px 32px",borderRadius:12,
              background:"transparent",border:`1px solid ${GOLD}`,
              color:GOLD,fontWeight:600,fontSize:15,cursor:"pointer"
            }}>
              Ver demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{padding:"40px 20px",borderBottom:"1px solid rgba(255,255,255,0.04)"}}>
        <div style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:24}}>
          {[
            {value:"8",label:"Tipos de predicciones"},
            {value:"104",label:"Partidos del Mundial"},
            {value:"1000+",label:"Puntos por partido"},
            {value:"24/7",label:"Actualización en vivo"},
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
              Tipos de <span style={{color:GOLD}}>Predicciones</span>
            </h2>
            <p style={{color:MID,marginTop:12,maxWidth:500,margin:"12px auto 0"}}>
              Cada partido ofrece múltiples formas de ganar puntos
            </p>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:20}}>
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
                <div style={{fontSize:40,marginBottom:16}}>{pred.icon}</div>
                <h3 style={{fontWeight:700,fontSize:18,marginBottom:8}}>{pred.title}</h3>
                <p style={{fontSize:14,color:DIM,lineHeight:1.6}}>{pred.desc}</p>
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
              {step:"2",title:"Haz tus predicciones",desc:"Predice resultado, goleadores, corners, tarjetas y más"},
              {step:"3",title:"Gana puntos",desc:"Cuantos más aciertes, más puntos obtendrás"},
              {step:"4",title:"Sube en el ranking",desc:"Compite con amigos y la comunidad global"},
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
            ¿Listo para demostrar tu <span style={{color:GOLD}}>conocimiento?</span>
          </h2>
          <p style={{color:MID,marginBottom:32,fontSize:16}}>
            Regístrate gratis y empieza a hacer predicciones desde el primer partido del Mundial 2026.
          </p>
          <Link href="/registro" style={{
            padding:"16px 40px",borderRadius:12,
            background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
            color:BG,fontWeight:700,fontSize:16,textDecoration:"none",display:"inline-block"
          }}>
            Crear cuenta gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
