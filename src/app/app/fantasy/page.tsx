"use client";

import { useState } from "react";
import Link from "next/link";

const BG="#060B14",BG2="#0F1D32",BG3="#0B1825",GOLD="#c9a84c",GOLD2="#e8d48b",MID="#8a94b0",DIM="#6a7a9a",DARK="#4a5570";

const FEATURES = [
  { icon: "⚽", title: "Draft de Jugadores", desc: "Selecciona 11 jugadores dentro del presupuesto de 100M" },
  { icon: "💰", title: "Mercado de Valores", desc: "Los precios suben y bajan según el rendimiento" },
  { icon: "🔄", title: "Transferencias", desc: "1 transferencia gratis por jornada, pagando por más" },
  { icon: "⭐", title: "Capitán Doble", desc: "Tu capitán gana el doble de puntos cada jornada" },
  { icon: "🏆", title: "Ligas Privadas", desc: "Crea ligas con amigos y compite por el trofeo" },
  { icon: "📊", title: "Estadísticas Avanzadas", desc: "Análisis detallado de cada jugador y equipo" },
];

const SAMPLE_PLAYERS = [
  { name: "Mbappé", team: "Francia", pos: "DEL", price: "12.5M", pts: 45 },
  { name: "Haaland", team: "Noruega", pos: "DEL", price: "11.5M", pts: 42 },
  { name: "Bellingham", team: "Inglaterra", pos: "MED", price: "9.5M", pts: 38 },
  { name: "Vinicius", team: "Brasil", pos: "DEL", price: "10.5M", pts: 40 },
  { name: "Rodri", team: "España", pos: "MED", price: "8.5M", pts: 35 },
];

export default function FantasyPage() {
  return (
    <div style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif",minHeight:"100vh"}}>
      {/* Hero */}
      <section style={{padding:"80px 20px 60px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)"}}/>
        <div style={{maxWidth:800,margin:"0 auto",position:"relative"}}>
          <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>Plataforma</span>
          <h1 style={{fontSize:"clamp(32px,6vw,52px)",fontWeight:900,marginTop:16,lineHeight:1.1}}>
            Fantasy
            <span style={{color:GOLD}}> Mundial</span>
          </h1>
          <p style={{color:MID,marginTop:20,maxWidth:600,margin:"20px auto 0",lineHeight:1.7,fontSize:17}}>
            Arma tu equipo de ensueño con 100M de presupuesto. Compite con amigos y la comunidad 
            global durante todo el Mundial 2026.
          </p>
          <div style={{marginTop:32,display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/registro" style={{
              padding:"14px 32px",borderRadius:12,
              background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
              color:BG,fontWeight:700,fontSize:15,textDecoration:"none",display:"inline-block"
            }}>
              Jugar ahora
            </Link>
            <button style={{
              padding:"14px 32px",borderRadius:12,
              background:"transparent",border:`1px solid ${GOLD}`,
              color:GOLD,fontWeight:600,fontSize:15,cursor:"pointer"
            }}>
              Ver reglas
            </button>
          </div>
        </div>
      </section>

      {/* How to Play */}
      <section style={{padding:"60px 20px",background:BG3}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              ¿Cómo <span style={{color:GOLD}}>jugar?</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:24}}>
            {[
              {step:"1",title:"Regístrate",desc:"Crea tu cuenta gratis en menos de 1 minuto"},
              {step:"2",title:"Arma tu equipo",desc:"Elige 11 jugadores con 100M de presupuesto"},
              {step:"3",title:"Elige capitán",desc:"Tu capitán gana el doble de puntos"},
              {step:"4",title:"Compite",desc:"Gana puntos y sube en el ranking"},
            ].map((item,i)=>[
              <div key={i} style={{textAlign:"center",padding:24}}>
                <div style={{
                  width:60,height:60,borderRadius:"50%",
                  background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontWeight:800,fontSize:24,color:BG,margin:"0 auto 16px"
                }}>
                  {item.step}
                </div>
                <h3 style={{fontWeight:700,fontSize:18,marginBottom:8}}>{item.title}</h3>
                <p style={{fontSize:14,color:DIM,lineHeight:1.6}}>{item.desc}</p>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Sample Players */}
      <section style={{padding:"60px 20px"}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Jugadores <span style={{color:GOLD}}>Destacados</span>
            </h2>
            <p style={{color:MID,marginTop:12}}>Algunos de los jugadores más valorados del Mundial</p>
          </div>

          <div style={{background:BG2,borderRadius:20,padding:24,border:"1px solid rgba(255,255,255,0.05)"}}>
            <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr",padding:"12px 0",borderBottom:"1px solid rgba(255,255,255,0.05)",fontSize:12,color:DIM,fontWeight:600}}>
              <span>JUGADOR</span>
              <span>POS</span>
              <span>EQUIPO</span>
              <span>PRECIO</span>
              <span>PTS</span>
            </div>
            {SAMPLE_PLAYERS.map((player,i)=>[
              <div key={i} style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr",padding:"16px 0",borderBottom:"1px solid rgba(255,255,255,0.03)",alignItems:"center"}}>
                <span style={{fontWeight:600}}>{player.name}</span>
                <span style={{fontSize:13,color:DIM}}>{player.pos}</span>
                <span style={{fontSize:13,color:DIM}}>{player.team}</span>
                <span style={{fontWeight:700,color:GOLD}}>{player.price}</span>
                <span style={{fontWeight:700}}>{player.pts}</span>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{padding:"60px 20px",background:BG3}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Características <span style={{color:GOLD}}>Destacadas</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:20}}>
            {FEATURES.map((feature,i)=>[
              <div key={i} style={{
                padding:28,borderRadius:16,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)",
                display:"flex",gap:16,alignItems:"flex-start"
              }}>
                <div style={{fontSize:32}}>{feature.icon}</div>
                <div>
                  <h3 style={{fontWeight:700,fontSize:17,marginBottom:6}}>{feature.title}</h3>
                  <p style={{fontSize:14,color:DIM,lineHeight:1.6}}>{feature.desc}</p>
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
            ¿Listo para tu <span style={{color:GOLD}}>equipo soñado?</span>
          </h2>
          <p style={{color:MID,marginBottom:32,fontSize:16}}>
            Únete a miles de jugadores y compite por ser el mejor manager del Mundial 2026.
          </p>
          <Link href="/registro" style={{
            padding:"16px 40px",borderRadius:12,
            background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
            color:BG,fontWeight:700,fontSize:16,textDecoration:"none",display:"inline-block"
          }}>
            Crear equipo gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
