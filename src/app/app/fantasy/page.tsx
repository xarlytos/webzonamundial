"use client";

import { useState } from "react";
import Link from "next/link";

const BG="#060B14",BG2="#0F1D32",BG3="#0B1825",GOLD="#c9a84c",GOLD2="#e8d48b",MID="#8a94b0",DIM="#6a7a9a",DARK="#4a5570";

const SAMPLE_PLAYERS = [
  { name: "Mbappé", team: "Francia", pos: "DEL", price: "$180M", pts: 45 },
  { name: "Haaland", team: "Noruega", pos: "DEL", price: "$120M", pts: 42 },
  { name: "Bellingham", team: "Inglaterra", pos: "MED", price: "$95M", pts: 38 },
  { name: "Vinicius", team: "Brasil", pos: "DEL", price: "$110M", pts: 40 },
  { name: "Rodri", team: "España", pos: "MED", price: "$85M", pts: 35 },
];

const FORMATIONS = [
  { formation: "4-4-2", style: "Equilibrado", ideal: "Principiantes" },
  { formation: "4-3-3", style: "Ofensivo", ideal: "Muchos delanteros top" },
  { formation: "3-5-2", style: "Control mediocampo", ideal: "Mediocampistas fuertes" },
  { formation: "5-4-1", style: "Defensivo", ideal: "Proteger ventaja" },
  { formation: "4-2-3-1", style: "Versátil", ideal: "Equipos mixtos" },
];

const CHIPS = [
  { icon: "🃏", name: "Comodín", effect: "Puntos ×2 un partido", when: "Tu jugador enfrenta a un débil" },
  { icon: "🔥", name: "Triple Capitán", effect: "Capitán ×3", when: "Jornada con partidos accesibles" },
  { icon: "💎", name: "Diamante", effect: "Bloquea un jugador rival", when: "Evita que tu oponente use a una estrella" },
  { icon: "⚡", name: "Boost", effect: "+20% puntos toda la jornada", when: "Jornada decisiva" },
  { icon: "🔄", name: "Wildcard", effect: "Cambia todo tu equipo gratis", when: "Lesiones o mal rendimiento" },
];

const POINTS_OFFENSIVE = [
  { action: "Gol", points: "+10 pts" },
  { action: "Asistencia", points: "+6 pts" },
  { action: "Tiros a puerta", points: "+2 pts" },
  { action: "Pase clave", points: "+3 pts" },
];

const POINTS_DEFENSIVE = [
  { action: "Clean sheet (DEF/POR)", points: "+5 pts" },
  { action: "Parada", points: "+2 pts" },
  { action: "Recuperación", points: "+1 pt" },
  { action: "Regate", points: "+1 pt" },
];

const POINTS_BONUS = [
  { action: "MVP del partido", points: "+5 pts" },
  { action: "Gol de cabeza", points: "+2 pts extra" },
  { action: "Gol de fuera del área", points: "+3 pts extra" },
];

const POINTS_NEGATIVE = [
  { action: "Tarjeta amarilla", points: "-2 pts" },
  { action: "Tarjeta roja", points: "-5 pts" },
  { action: "Autogol", points: "-5 pts" },
  { action: "Penalti fallado", points: "-4 pts" },
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
            Crea tu dream team y demuestra quién sabe más
            <span style={{color:GOLD}}> ⚽</span>
          </h1>
          <p style={{color:MID,marginTop:20,maxWidth:600,margin:"20px auto 0",lineHeight:1.7,fontSize:17}}>
            El fantasy más completo del Mundial. Draft inteligente, formaciones tácticas, chips estratégicos. 
            ¿Tienes lo que se necesita para ser el mejor manager?
          </p>
          <div style={{marginTop:32,display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/registro" style={{
              padding:"14px 32px",borderRadius:12,
              background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
              color:BG,fontWeight:700,fontSize:15,textDecoration:"none",display:"inline-block"
            }}>
              Jugar ahora
            </Link>
            <Link href="#draft" style={{
              padding:"14px 32px",borderRadius:12,
              background:"transparent",border:`1px solid ${GOLD}`,
              color:GOLD,fontWeight:600,fontSize:15,textDecoration:"none",display:"inline-block"
            }}>
              Ver reglas
            </Link>
          </div>
        </div>
      </section>

      {/* Draft Section */}
      <section id="draft" style={{padding:"60px 20px",background:BG3}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              🏗️ El <span style={{color:GOLD}}>Draft</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:24}}>
            {/* Presupuesto */}
            <div style={{padding:28,borderRadius:16,background:BG2,border:"1px solid rgba(255,255,255,0.05)"}}>
              <div style={{fontSize:40,marginBottom:16}}>💰</div>
              <h3 style={{fontWeight:700,fontSize:20,marginBottom:12}}>Presupuesto</h3>
              <p style={{fontSize:32,fontWeight:800,color:GOLD,marginBottom:8}}>$100M</p>
              <p style={{fontSize:14,color:DIM,lineHeight:1.6}}>Para armar tu equipo de 11 jugadores. ¿Estrellas o equilibrio? La estrategia es tuya.</p>
            </div>

            {/* Plantilla */}
            <div style={{padding:28,borderRadius:16,background:BG2,border:"1px solid rgba(255,255,255,0.05)"}}>
              <div style={{fontSize:40,marginBottom:16}}>⚽</div>
              <h3 style={{fontWeight:700,fontSize:20,marginBottom:12}}>Tu Plantilla</h3>
              <ul style={{listStyle:"none",padding:0,margin:0,fontSize:14,color:DIM,lineHeight:2}}>
                <li>🧤 1 Portero</li>
                <li>🛡️ 4 Defensas (o 3 o 5)</li>
                <li>⚙️ 4 Mediocampistas (o 3 o 5)</li>
                <li>⚡ 2 Delanteros (o 1 o 3)</li>
              </ul>
            </div>

            {/* Mercado */}
            <div style={{padding:28,borderRadius:16,background:BG2,border:"1px solid rgba(255,255,255,0.05)"}}>
              <div style={{fontSize:40,marginBottom:16}}>📈</div>
              <h3 style={{fontWeight:700,fontSize:20,marginBottom:12}}>El Mercado</h3>
              <p style={{fontSize:14,color:DIM,lineHeight:1.6,marginBottom:12}}>
                Precios dinámicos según rendimiento. Mbappé puede llegar a <span style={{color:GOLD,fontWeight:700}}>$180M</span> mientras que una joya oculta de Uzbekistán cuesta solo <span style={{color:GOLD,fontWeight:700}}>$3M</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formations */}
      <section style={{padding:"60px 20px"}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              ⚔️ <span style={{color:GOLD}}>Formaciones</span>
            </h2>
            <p style={{color:MID,marginTop:12}}>Elige tu estilo de juego</p>
          </div>

          <div style={{background:BG2,borderRadius:20,padding:24,border:"1px solid rgba(255,255,255,0.05)",overflow:"hidden"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",padding:"16px 0",borderBottom:"1px solid rgba(255,255,255,0.1)",fontSize:12,color:DIM,fontWeight:600,gap:16}}>
              <span>FORMACIÓN</span>
              <span>ESTILO</span>
              <span>IDEAL PARA</span>
            </div>
            {FORMATIONS.map((item,i)=>[
              <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",padding:"20px 0",borderBottom:i<FORMATIONS.length-1?"1px solid rgba(255,255,255,0.05)":"none",alignItems:"center",gap:16}}>
                <span style={{fontWeight:700,fontSize:18,color:GOLD}}>{item.formation}</span>
                <span style={{fontSize:14}}>{item.style}</span>
                <span style={{fontSize:14,color:DIM}}>{item.ideal}</span>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Captain System */}
      <section style={{padding:"60px 20px",background:BG3}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              👑 Sistema de <span style={{color:GOLD}}>Capitanes</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:24}}>
            <div style={{padding:32,borderRadius:20,background:BG2,border:`2px solid ${GOLD}`,textAlign:"center"}}>
              <div style={{fontSize:48,marginBottom:16}}>©️</div>
              <h3 style={{fontWeight:800,fontSize:24,marginBottom:8}}>Capitán (C)</h3>
              <p style={{fontSize:36,fontWeight:800,color:GOLD,marginBottom:12}}>×2</p>
              <p style={{fontSize:14,color:DIM}}>Los puntos de tu capitán se duplican</p>
            </div>

            <div style={{padding:32,borderRadius:20,background:BG2,border:"1px solid rgba(255,255,255,0.1)",textAlign:"center"}}>
              <div style={{fontSize:48,marginBottom:16}}>🥈</div>
              <h3 style={{fontWeight:800,fontSize:24,marginBottom:8}}>Vicecapitán (VC)</h3>
              <p style={{fontSize:36,fontWeight:800,color:GOLD2,marginBottom:12}}>×1.5</p>
              <p style={{fontSize:14,color:DIM}}>Los puntos de tu vicecapitán se multiplican por 1.5</p>
            </div>
          </div>

          <p style={{textAlign:"center",color:MID,marginTop:32,fontSize:15}}>
            Elige sabiamente. ¿Apuestas por la estrella segura o la joya que puede explotar?
          </p>
        </div>
      </section>

      {/* Special Chips */}
      <section style={{padding:"60px 20px"}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              🎲 Chips <span style={{color:GOLD}}>Especiales</span>
            </h2>
            <p style={{color:MID,marginTop:12}}>Usa estos poderes en momentos clave</p>
          </div>

          <div style={{background:BG2,borderRadius:20,padding:24,border:"1px solid rgba(255,255,255,0.05)",overflow:"hidden"}}>
            <div style={{display:"grid",gridTemplateColumns:"60px 1fr 1.5fr 1.5fr",padding:"16px 0",borderBottom:"1px solid rgba(255,255,255,0.1)",fontSize:12,color:DIM,fontWeight:600,gap:16}}>
              <span></span>
              <span>CHIP</span>
              <span>EFECTO</span>
              <span>CUÁNDO USAR</span>
            </div>
            {CHIPS.map((chip,i)=>[
              <div key={i} style={{display:"grid",gridTemplateColumns:"60px 1fr 1.5fr 1.5fr",padding:"20px 0",borderBottom:i<CHIPS.length-1?"1px solid rgba(255,255,255,0.05)":"none",alignItems:"center",gap:16}}>
                <span style={{fontSize:28}}>{chip.icon}</span>
                <span style={{fontWeight:700,fontSize:16}}>{chip.name}</span>
                <span style={{fontSize:14,color:GOLD}}>{chip.effect}</span>
                <span style={{fontSize:14,color:DIM}}>{chip.when}</span>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Points System */}
      <section style={{padding:"60px 20px",background:BG3}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              📊 Sistema de <span style={{color:GOLD}}>puntos</span>
            </h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:24}}>
            {/* Offensive */}
            <div style={{padding:24,borderRadius:16,background:BG2,border:"1px solid rgba(255,255,255,0.05)"}}>
              <h3 style={{fontWeight:700,fontSize:18,marginBottom:20,color:GOLD}}>⚔️ Acciones ofensivas</h3>
              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                {POINTS_OFFENSIVE.map((item,i)=>[
                  <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:i<POINTS_OFFENSIVE.length-1?"1px solid rgba(255,255,255,0.05)":"none"}}>
                    <span style={{fontSize:14}}>{item.action}</span>
                    <span style={{fontWeight:700,color:GOLD2}}>{item.points}</span>
                  </div>
                ])}
              </div>
            </div>

            {/* Defensive */}
            <div style={{padding:24,borderRadius:16,background:BG2,border:"1px solid rgba(255,255,255,0.05)"}}>
              <h3 style={{fontWeight:700,fontSize:18,marginBottom:20,color:GOLD}}>🛡️ Acciones defensivas</h3>
              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                {POINTS_DEFENSIVE.map((item,i)=>[
                  <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:i<POINTS_DEFENSIVE.length-1?"1px solid rgba(255,255,255,0.05)":"none"}}>
                    <span style={{fontSize:14}}>{item.action}</span>
                    <span style={{fontWeight:700,color:GOLD2}}>{item.points}</span>
                  </div>
                ])}
              </div>
            </div>

            {/* Bonus */}
            <div style={{padding:24,borderRadius:16,background:BG2,border:"1px solid rgba(255,255,255,0.05)"}}>
              <h3 style={{fontWeight:700,fontSize:18,marginBottom:20,color:GOLD}}>⭐ Bonus</h3>
              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                {POINTS_BONUS.map((item,i)=>[
                  <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:i<POINTS_BONUS.length-1?"1px solid rgba(255,255,255,0.05)":"none"}}>
                    <span style={{fontSize:14}}>{item.action}</span>
                    <span style={{fontWeight:700,color:GOLD2}}>{item.points}</span>
                  </div>
                ])}
              </div>
            </div>

            {/* Negative */}
            <div style={{padding:24,borderRadius:16,background:BG2,border:"1px solid rgba(255,255,255,0.05)"}}>
              <h3 style={{fontWeight:700,fontSize:18,marginBottom:20,color:"#ff6b6b"}}>⚠️ Negativos</h3>
              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                {POINTS_NEGATIVE.map((item,i)=>[
                  <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:i<POINTS_NEGATIVE.length-1?"1px solid rgba(255,255,255,0.05)":"none"}}>
                    <span style={{fontSize:14}}>{item.action}</span>
                    <span style={{fontWeight:700,color:"#ff6b6b"}}>{item.points}</span>
                  </div>
                ])}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Leagues */}
      <section style={{padding:"60px 20px"}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              🏆 Ligas <span style={{color:GOLD}}>privadas</span>
            </h2>
            <p style={{color:MID,marginTop:12}}>Crea tu liga fantasy y compite con amigos</p>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:20}}>
            {[
              { icon: "🎯", title: "Draft exclusivo", desc: "Draft único para tu liga" },
              { icon: "💱", title: "Mercado P2P", desc: "Tradea jugadores entre managers" },
              { icon: "🔥", title: "Playoffs", desc: "Eliminatorias al final del mundial" },
              { icon: "🎁", title: "Premios", desc: "Personaliza los premios de tu liga" },
            ].map((item,i)=>[
              <div key={i} style={{padding:28,borderRadius:16,background:BG2,border:"1px solid rgba(255,255,255,0.05)",textAlign:"center"}}>
                <div style={{fontSize:40,marginBottom:16}}>{item.icon}</div>
                <h3 style={{fontWeight:700,fontSize:17,marginBottom:8}}>{item.title}</h3>
                <p style={{fontSize:14,color:DIM}}>{item.desc}</p>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* Sample Players */}
      <section style={{padding:"60px 20px",background:BG3}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800}}>
              Jugadores <span style={{color:GOLD}}>Destacados</span>
            </h2>
            <p style={{color:MID,marginTop:12}}>Ejemplo de precios del mercado</p>
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

      {/* CTA */}
      <section style={{padding:"80px 20px",textAlign:"center"}}>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800,marginBottom:16}}>
            🎯 <span style={{color:GOLD}}>Construye tu equipo campeón</span>
          </h2>
          <p style={{color:MID,marginBottom:32,fontSize:16}}>
            Únete a miles de jugadores y compite por ser el mejor manager del Mundial 2026.
          </p>
          <Link href="/registro" style={{
            padding:"18px 48px",borderRadius:12,
            background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
            color:BG,fontWeight:700,fontSize:18,textDecoration:"none",display:"inline-block"
          }}>
            Regístrate gratis →
          </Link>
        </div>
      </section>
    </div>
  );
}
