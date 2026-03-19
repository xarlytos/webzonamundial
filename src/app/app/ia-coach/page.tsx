"use client";

import { useState } from "react";
import Link from "next/link";

const BG="#060B14",BG2="#0F1D32",BG3="#0B1825",GOLD="#c9a84c",GOLD2="#e8d48b",MID="#8a94b0",DIM="#6a7a9a",DARK="#4a5570";

const AI_FEATURES = [
  { icon: "🧠", title: "Análisis Predictivo", desc: "La IA analiza estadísticas históricas, forma actual y contexto del partido" },
  { icon: "📈", title: "Recomendaciones", desc: "Sugerencias personalizadas para tus predicciones y fantasy" },
  { icon: "⚡", title: "En Tiempo Real", desc: "Actualizaciones durante los partidos con análisis live" },
  { icon: "🎯", title: "Probabilidades", desc: "Porcentajes de victoria, empate y derrota calculados por IA" },
];

const SAMPLE_INSIGHTS = [
  { match: "Argentina vs Brasil", insight: "Argentina tiene 65% de probabilidad de victoria basado en su rendimiento en casa", confidence: 85 },
  { match: "España vs Alemania", insight: "El historial reciente favorece a España 3-1-1 en los últimos 5 encuentros", confidence: 72 },
  { match: "Francia vs Inglaterra", insight: "Mbappé ha marcado en 4 de sus últimos 5 partidos contra equipos ingleses", confidence: 68 },
];

export default function IACoachPage() {
  return (
    <div style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif",minHeight:"100vh"}}>
      {/* Hero */}
      <section style={{padding:"80px 20px 60px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)"}}/>
        <div style={{maxWidth:800,margin:"0 auto",position:"relative"}}>
          <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>Plataforma</span>
          <h1 style={{fontSize:"clamp(32px,6vw,52px)",fontWeight:900,marginTop:16,lineHeight:1.1}}>
            IA <span style={{color:GOLD}}>Coach</span>
          </h1>
          <p style={{color:MID,marginTop:20,maxWidth:600,margin:"20px auto 0",lineHeight:1.7,fontSize:17}}>
            Tu analista personal con inteligencia artificial. Recibe insights, predicciones y 
            recomendaciones basadas en datos para tomar mejores decisiones.
          </p>
          <div style={{marginTop:32}}>
            <Link href="/registro" style={{
              padding:"14px 32px",borderRadius:12,
              background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
              color:BG,fontWeight:700,fontSize:15,textDecoration:"none",display:"inline-block"
            }}>
              Probar IA Coach
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{padding:"60px 20px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              ¿Qué hace el <span style={{color:GOLD}}>IA Coach?</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:24}}>
            {AI_FEATURES.map((feature,i)=>[
              <div key={i} style={{
                padding:32,borderRadius:20,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)",
                textAlign:"center"
              }}>
                <div style={{fontSize:48,marginBottom:16}}>{feature.icon}</div>
                <h3 style={{fontWeight:700,fontSize:18,marginBottom:12}}>{feature.title}</h3>
                <p style={{fontSize:14,color:DIM,lineHeight:1.6}}>{feature.desc}</p>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Sample Insights */}
      <section style={{padding:"60px 20px",background:BG3}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Ejemplos de <span style={{color:GOLD}}>Insights</span>
            </h2>
            <p style={{color:MID,marginTop:12}}>Así es como la IA te ayuda a tomar decisiones</p>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            {SAMPLE_INSIGHTS.map((item,i)=>[
              <div key={i} style={{
                padding:24,borderRadius:16,background:BG2,
                border:"1px solid rgba(255,255,255,0.05)"
              }}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12,flexWrap:"wrap",gap:8}}>
                  <h3 style={{fontWeight:700,fontSize:16}}>{item.match}</h3>
                  <div style={{
                    padding:"4px 12px",borderRadius:20,
                    background:`rgba(201,168,76,${item.confidence/200})`,
                    fontSize:12,fontWeight:600,
                    color:item.confidence>75?GOLD:"#fff"
                  }}>
                    Confianza: {item.confidence}%
                  </div>
                </div>
                <p style={{fontSize:14,color:DIM,lineHeight:1.6}}>{item.insight}</p>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section style={{padding:"60px 20px"}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Cómo <span style={{color:GOLD}}>funciona</span>
            </h2>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:24}}>
            {[
              {title:"Recopilación de Datos",desc:"La IA analiza miles de datos históricos, estadísticas de jugadores, condiciones climáticas, y más."},
              {title:"Procesamiento con ML",desc:"Algoritmos de machine learning identifican patrones y correlaciones relevantes."},
              {title:"Generación de Insights",desc:"La IA genera recomendaciones personalizadas basadas en tu historial y preferencias."},
              {title:"Aprendizaje Continuo",desc:"El sistema mejora con cada predicción, aprendiendo de los resultados reales."},
            ].map((step,i)=>[
              <div key={i} style={{display:"flex",gap:20,alignItems:"flex-start"}}>
                <div style={{
                  width:40,height:40,borderRadius:10,
                  background:GOLD,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontWeight:700,color:BG,flexShrink:0
                }}>
                  {i+1}
                </div>
                <div>
                  <h3 style={{fontWeight:700,fontSize:17,marginBottom:6}}>{step.title}</h3>
                  <p style={{fontSize:14,color:DIM,lineHeight:1.6}}>{step.desc}</p>
                </div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"80px 20px",textAlign:"center",background:BG3}}>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <div style={{fontSize:64,marginBottom:24}}>🤖</div>
          <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800,marginBottom:16}}>
            Tu coach de <span style={{color:GOLD}}>inteligencia artificial</span>
          </h2>
          <p style={{color:MID,marginBottom:32,fontSize:16}}>
            Disponible para todos los usuarios registrados. Mejora tus predicciones con el poder de la IA.
          </p>
          <Link href="/registro" style={{
            padding:"16px 40px",borderRadius:12,
            background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
            color:BG,fontWeight:700,fontSize:16,textDecoration:"none",display:"inline-block"
          }}>
            Empezar a usar IA Coach
          </Link>
        </div>
      </section>
    </div>
  );
}
