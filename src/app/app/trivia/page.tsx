"use client";

import { useState } from "react";
import Link from "next/link";

const BG="#060B14",BG2="#0F1D32",BG3="#0B1825",GOLD="#c9a84c",GOLD2="#e8d48b",MID="#8a94b0",DIM="#6a7a9a",DARK="#4a5570";

const CATEGORIES = [
  { id: "historia", name: "Historia", icon: "📚" },
  { id: "jugadores", name: "Jugadores", icon: "⚽" },
  { id: "equipos", name: "Equipos", icon: "🏆" },
  { id: "mundiales", name: "Mundiales", icon: "🌍" },
  { id: "records", name: "Récords", icon: "📊" },
];

const SAMPLE_QUESTIONS = [
  { question: "¿Quién ha ganado más Mundiales?", options: ["Brasil", "Alemania", "Italia", "Argentina"], correct: 0 },
  { question: "¿Cuántos goles marcó Just Fontaine en 1958?", options: ["10", "11", "12", "13"], correct: 3 },
  { question: "¿En qué año se jugó el primer Mundial?", options: ["1928", "1930", "1934", "1938"], correct: 1 },
  { question: "¿Qué país organizará el Mundial 2026?", options: ["Estados Unidos", "Canadá", "México", "Los 3 anteriores"], correct: 3 },
];

export default function TriviaPage() {
  const [selectedCategory, setSelectedCategory] = useState("historia");

  return (
    <div style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif",minHeight:"100vh"}}>
      {/* Hero */}
      <section style={{padding:"80px 20px 60px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)"}}/>
        <div style={{maxWidth:800,margin:"0 auto",position:"relative"}}>
          <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>Plataforma</span>
          <h1 style={{fontSize:"clamp(32px,6vw,52px)",fontWeight:900,marginTop:16,lineHeight:1.1}}>
            Trivia <span style={{color:GOLD}}>Mundial</span>
          </h1>
          <p style={{color:MID,marginTop:20,maxWidth:600,margin:"20px auto 0",lineHeight:1.7,fontSize:17}}>
            Demuestra tu conocimiento futbolero con trivia en tiempo real. 
            Compite contra amigos y jugadores de todo el mundo.
          </p>
          <div style={{marginTop:32}}>
            <Link href="/registro" style={{
              padding:"14px 32px",borderRadius:12,
              background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
              color:BG,fontWeight:700,fontSize:15,textDecoration:"none",display:"inline-block"
            }}>
              Jugar ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{padding:"40px 20px",background:BG3}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:32}}>
            <h2 style={{fontSize:"clamp(20px,3vw,28px)",fontWeight:700}}>
              Elige una <span style={{color:GOLD}}>categoría</span>
            </h2>
          </div>

          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            {CATEGORIES.map((cat)=>[
              <button
                key={cat.id}
                onClick={()=>setSelectedCategory(cat.id)}
                style={{
                  padding:"12px 24px",borderRadius:12,
                  background:selectedCategory===cat.id?`linear-gradient(135deg,${GOLD},${GOLD2})`:BG2,
                  color:selectedCategory===cat.id?BG:"#fff",
                  border:`1px solid ${selectedCategory===cat.id?GOLD:"rgba(255,255,255,0.1)"}`,
                  cursor:"pointer",fontWeight:600,fontSize:14,
                  display:"flex",alignItems:"center",gap:8
                }}
              >
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            ])}
          </div>
        </div>
      </section>

      {/* Sample Questions */}
      <section style={{padding:"60px 20px"}}>
        <div style={{maxWidth:700,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Ejemplo de <span style={{color:GOLD}}>Preguntas</span>
            </h2>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:24}}>
            {SAMPLE_QUESTIONS.map((q,i)=>[
              <div key={i} style={{
                padding:28,borderRadius:20,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)"
              }}>
                <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
                  <span style={{
                    padding:"4px 10px",borderRadius:20,
                    background:GOLD,color:BG,
                    fontSize:11,fontWeight:700
                  }}>
                    PREGUNTA {i+1}
                  </span>
                </div>
                <h3 style={{fontWeight:600,fontSize:17,marginBottom:20}}>{q.question}</h3>
                <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12}}>
                  {q.options.map((opt,j)=>[
                    <button
                      key={j}
                      style={{
                        padding:"14px 16px",borderRadius:10,
                        background:j===q.correct?"rgba(34,197,94,0.1)":BG3,
                        border:`1px solid ${j===q.correct?"#22c55e":"rgba(255,255,255,0.1)"}`,
                        color:j===q.correct?"#22c55e":"#fff",
                        cursor:"pointer",fontSize:14,textAlign:"left"
                      }}
                    >
                      {j===q.correct && "✓ "}{opt}
                    </button>
                  ])}
                </div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{padding:"60px 20px",background:BG3}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Modos de <span style={{color:GOLD}}>Juego</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:24}}>
            {[
              { icon: "⚡", title: "Rápido", desc: "10 preguntas contra el reloj. Gana quien responda más rápido." },
              { icon: "👥", title: "Multijugador", desc: "Compite en tiempo real contra jugadores de todo el mundo." },
              { icon: "🎯", title: "Por Categoría", desc: "Especialízate en historia, jugadores, equipos o récords." },
              { icon: "🏆", title: "Torneos", desc: "Participa en torneos diarios y semanales con premios." },
            ].map((mode,i)=>[
              <div key={i} style={{
                padding:28,borderRadius:16,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)",
                textAlign:"center"
              }}>
                <div style={{fontSize:40,marginBottom:12}}>{mode.icon}</div>
                <h3 style={{fontWeight:700,fontSize:18,marginBottom:8}}>{mode.title}</h3>
                <p style={{fontSize:14,color:DIM,lineHeight:1.6}}>{mode.desc}</p>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{padding:"60px 20px"}}>
        <div style={{maxWidth:900,margin:"0 auto",textAlign:"center"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:32}}>
            {[
              {value:"10,000+",label:"Preguntas disponibles"},
              {value:"50,000+",label:"Jugadores activos"},
              {value:"5",label:"Categorías"},
              {value:"24/7",label:"Torneos en vivo"},
            ].map((stat,i)=>[
              <div key={i}>
                <div style={{fontSize:"40px",fontWeight:800,color:GOLD}}>{stat.value}</div>
                <div style={{fontSize:14,color:DIM,marginTop:4}}>{stat.label}</div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"80px 20px",textAlign:"center",background:BG3}}>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <div style={{fontSize:64,marginBottom:24}}>❓</div>
          <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800,marginBottom:16}}>
            ¿Cuánto sabes de <span style={{color:GOLD}}>fútbol?</span>
          </h2>
          <p style={{color:MID,marginBottom:32,fontSize:16}}>
            Pon a prueba tus conocimientos y demuestra que eres el experto mundialista definitivo.
          </p>
          <Link href="/registro" style={{
            padding:"16px 40px",borderRadius:12,
            background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
            color:BG,fontWeight:700,fontSize:16,textDecoration:"none",display:"inline-block"
          }}>
            Jugar trivia gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
