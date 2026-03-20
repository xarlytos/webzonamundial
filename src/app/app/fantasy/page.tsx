"use client";

import Link from "next/link";

const BG="#060B14", BG2="#0F1D32", BG3="#0B1825", GOLD="#c9a84c", GOLD2="#e8d48b", MID="#8a94b0", DIM="#6a7a9a", DARK="#4a5570";

const FORMACIONES = [
  { formacion: "4-3-3", estilo: "Ofensivo clásico", desc: "4 defensas, 3 medios, 3 delanteros" },
  { formacion: "4-4-2", estilo: "Equilibrado", desc: "La clásica. Sólido en defensa y ataque" },
  { formacion: "4-2-3-1", estilo: "Control total", desc: "Doble pivote, mediapunta y extremos" },
  { formacion: "3-5-2", estilo: "Dominio centro", desc: "3 defensas, 5 medios, 2 delanteros" },
  { formacion: "3-4-3", estilo: "Todo al ataque", desc: "Máximo poder ofensivo" },
  { formacion: "5-3-2", estilo: "Fortín defensivo", desc: "5 defensas, 3 medios, 2 delanteros" },
  { formacion: "5-4-1", estilo: "Contraataque", desc: "Ultra defensivo, espera al rival" },
];

const PUNTOS_SISTEMA = [
  { accion: "Gol (Delantero)", puntos: "+5", icono: "⚽" },
  { accion: "Gol (Mediocentro)", puntos: "+6", icono: "⚽" },
  { accion: "Gol (Defensa)", puntos: "+8", icono: "⚽" },
  { accion: "Gol (Portero)", puntos: "+10", icono: "🧤" },
  { accion: "Asistencia", puntos: "+3", icono: "🅰️" },
  { accion: "Portería a 0 (POR)", puntos: "+5", icono: "🛡️" },
  { accion: "Portería a 0 (DEF)", puntos: "+4", icono: "🛡️" },
  { accion: "Titular (60+ min)", puntos: "+2", icono: "✅" },
  { accion: "Suplente (<60 min)", puntos: "+1", icono: "🔄" },
  { accion: "Tarjeta amarilla", puntos: "-1", icono: "🟨" },
  { accion: "Tarjeta roja", puntos: "-3", icono: "🟥" },
  { accion: "Autogol", puntos: "-2", icono: "😱" },
  { accion: "Penalti fallado", puntos: "-2", icono: "❌" },
];

const CHIPS = [
  { 
    icono: "🃏", 
    nombre: "Comodín Total", 
    usos: "1 uso", 
    desc: "Reconstruye TODA tu selección desde cero. Úsalo cuando tu equipo vaya mal.",
    cuando: "Cuando todo falla"
  },
  { 
    icono: "👑", 
    nombre: "Triple Capitán", 
    usos: "1 uso", 
    desc: "Tu capitán suma ×3 puntos (en vez de ×2). Ideal para jornadas con partidos favorables.",
    cuando: "Jornada decisiva"
  },
  { 
    icono: "🪑", 
    nombre: "Banca Completa", 
    usos: "1 uso", 
    desc: "Tus 4 suplentes TAMBIÉN suman puntos esa jornada. ¡15 jugadores puntuando!",
    cuando: "Máxima puntuación"
  },
  { 
    icono: "🔮", 
    nombre: "Revelación", 
    usos: "3 usos", 
    desc: "Selecciona un jugador Sub-23. Si marca o asiste, sus puntos se duplican (×2).",
    cuando: "Apuesta por jóvenes"
  },
];

export default function FantasyPage() {
  return (
    <div style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif",minHeight:"100vh"}}>
      {/* ═══════════════════════════════════════
          HERO SECTION CON IMÁGENES
          ═══════════════════════════════════════ */}
      <section style={{padding:"100px 20px 60px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 60%)"}}/>
        
        {/* Decoración de fondo */}
        <div style={{position:"absolute",top:"10%",left:"5%",fontSize:120,opacity:0.03,transform:"rotate(-15deg)"}}>⚽</div>
        <div style={{position:"absolute",bottom:"10%",right:"5%",fontSize:100,opacity:0.03,transform:"rotate(15deg)"}}>🏆</div>
        
        <div style={{maxWidth:800,margin:"0 auto",position:"relative"}}>
          <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>Plataforma</span>
          
          <h1 style={{fontSize:"clamp(36px,7vw,56px)",fontWeight:900,marginTop:20,lineHeight:1.1}}>
            Tu XI Ideal del <span style={{color:GOLD}}>Mundial</span>
          </h1>
          
          <p style={{color:MID,marginTop:24,maxWidth:600,margin:"24px auto 0",lineHeight:1.7,fontSize:18}}>
            <strong>15 jugadores, 13 selecciones, 1 campeón.</strong> El fantasy más estratégico del Mundial 2026. 
            Sin dinero, sin draft. Pura estrategia y conocimiento futbolístico.
          </p>
          
          <div style={{marginTop:40,display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/registro" style={{
              padding:"16px 36px",borderRadius:14,
              background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
              color:BG,fontWeight:800,fontSize:16,textDecoration:"none",display:"inline-block",
              boxShadow:"0 8px 32px rgba(201,168,76,0.3)"
            }}>
              🚀 Arma tu equipo
            </Link>
            <span style={{
              padding:"16px 28px",borderRadius:14,
              background:BG2,border:`1px solid rgba(255,255,255,0.1)`,
              color:MID,fontWeight:600,fontSize:14
            }}>
              Gratis · Sin dinero · Solo estrategia
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LAYOUT 2 COLUMNAS: IMAGEN ALINEACIÓN + TEXTO
          ═══════════════════════════════════════ */}
      <section style={{padding:"60px 20px",background:BG}}>
        <div style={{maxWidth:1400,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(450px,1fr))",gap:60,alignItems:"center"}}>
            {/* Imagen de alineación - ajustada para verse completa */}
            <div style={{position:"relative"}}>
              <div style={{
                borderRadius:24,
                overflow:"hidden",
                boxShadow:"0 30px 60px rgba(0,0,0,0.4)",
                border:"1px solid rgba(255,255,255,0.08)",
                maxWidth:400,
                margin:"0 auto"
              }}>
                <img 
                  src="/img/zonamundial-images/imagenes/alineacion fantasy.jpeg" 
                  alt="Alineación Fantasy ZonaMundial" 
                  style={{width:"100%",height:"auto",display:"block"}}
                />
              </div>
          </div>

          {/* Texto explicativo */}
            <div>
              <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:2,textTransform:"uppercase"}}>Interfaz intuitiva</span>
              <h2 style={{fontSize:"clamp(28px,4vw,40px)",fontWeight:800,marginTop:16,marginBottom:24,lineHeight:1.2}}>
                Configura tu <span style={{color:GOLD}}>alineación</span> táctica
              </h2>
              <p style={{color:MID,fontSize:17,lineHeight:1.7,marginBottom:32}}>
                Visualiza tu equipo en el campo con nuestra interfaz táctica. Cambia formaciones al instante 
                y activa comodines con un solo tap.
              </p>
              
              <div style={{display:"flex",flexDirection:"column",gap:16}}>
                <div style={{display:"flex",alignItems:"center",gap:16,padding:16,borderRadius:12,background:BG2,border:"1px solid rgba(255,255,255,0.05)"}}>
                  <div style={{width:44,height:44,borderRadius:10,background:`${GOLD}20`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>🔄</div>
                  <div>
                    <div style={{fontWeight:700,fontSize:15}}>7 Formaciones disponibles</div>
                    <div style={{fontSize:13,color:DIM}}>Desde 4-3-3 ofensivo hasta 5-4-1 defensivo</div>
                  </div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:16,padding:16,borderRadius:12,background:BG2,border:"1px solid rgba(255,255,255,0.05)"}}>
                  <div style={{width:44,height:44,borderRadius:10,background:`${GOLD}20`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>🎁</div>
                  <div>
                    <div style={{fontWeight:700,fontSize:15}}>Gestión de comodines</div>
                    <div style={{fontSize:13,color:DIM}}>Activa Triple Capitán, Banca Completa y más</div>
                  </div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:16,padding:16,borderRadius:12,background:BG2,border:"1px solid rgba(255,255,255,0.05)"}}>
                  <div style={{width:44,height:44,borderRadius:10,background:`${GOLD}20`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>💾</div>
                  <div>
                    <div style={{fontWeight:700,fontSize:15}}>Guarda tu equipo</div>
                    <div style={{fontSize:13,color:DIM}}>Modifica y guarda antes de cada jornada</div>
                  </div>
                </div>
              </div>
              
              {/* Grid de formaciones */}
              <div style={{marginTop:32}}>
                <div style={{fontWeight:700,fontSize:16,marginBottom:16,color:GOLD}}>7 Formaciones tácticas</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(100px,1fr))",gap:10}}>
                  {FORMACIONES.map((f,i)=>(
                    <div key={i} style={{padding:12,borderRadius:10,background:BG2,border:"1px solid rgba(255,255,255,0.08)",textAlign:"center"}}>
                      <div style={{fontSize:18,fontWeight:800,color:GOLD,marginBottom:4}}>{f.formacion}</div>
                      <div style={{fontSize:11,color:DIM}}>{f.estilo}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LAYOUT 2 COLUMNAS INVERSO: TEXTO + IMAGEN LISTADO
          ═══════════════════════════════════════ */}
      <section style={{padding:"80px 20px",background:BG3}}>
        <div style={{maxWidth:1400,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(450px,1fr))",gap:60,alignItems:"center"}}>
            {/* Texto - ahora primero en desktop */}
            <div style={{order:1}}>
              <span style={{color:GOLD,fontSize:12,fontWeight:700,letterSpacing:2,textTransform:"uppercase"}}>48 selecciones</span>
              <h2 style={{fontSize:"clamp(28px,4vw,40px)",fontWeight:800,marginTop:16,marginBottom:24,lineHeight:1.2}}>
                Explora y <span style={{color:GOLD}}>elige</span> jugadores
              </h2>
              <p style={{color:MID,fontSize:17,lineHeight:1.7,marginBottom:32}}>
                Navega por todas las selecciones del Mundial 2026. Filtra por posición, 
                consulta estadísticas y añade jugadores a tu equipo con un solo tap.
              </p>
              
              <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12}}>
                {[
                  {icon:"🔍", title:"Filtros avanzados", desc:"Por posición, selección o valor"},
                  {icon:"📊", title:"Estadísticas", desc:"Forma actual y datos clave"},
                  {icon:"✓", title:"Selección fácil", desc:"Añade con un tap"},
                  {icon:"⭐", title:"Jugadores destacados", desc:"Estrellas y joyas ocultas"},
                ].map((item,i)=>(
                  <div key={i} style={{padding:20,borderRadius:12,background:BG2,border:"1px solid rgba(255,255,255,0.05)"}}>
                    <div style={{fontSize:24,marginBottom:8}}>{item.icon}</div>
                    <div style={{fontWeight:700,fontSize:14,marginBottom:4}}>{item.title}</div>
                    <div style={{fontSize:12,color:DIM}}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagen del listado - ajustada para verse completa */}
            <div style={{order:2,position:"relative"}}>
              <div style={{
                borderRadius:24,
                overflow:"hidden",
                boxShadow:"0 30px 60px rgba(0,0,0,0.4)",
                border:"1px solid rgba(255,255,255,0.08)",
                maxWidth:400,
                margin:"0 auto"
              }}>
                <img 
                  src="/img/zonamundial-images/imagenes/listado españa fantasy.jpeg" 
                  alt="Listado de jugadores de España" 
                  style={{width:"100%",height:"auto",display:"block"}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EJEMPLO DE EQUIPO VÁLIDO (MEJORADO)
          ═══════════════════════════════════════ */}
      <section style={{padding:"80px 20px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(28px,5vw,40px)",fontWeight:800}}>
              Ejemplo de equipo <span style={{color:GOLD}}>válido</span> ✅
            </h2>
            <p style={{color:MID,marginTop:12,fontSize:16}}>15 jugadores · 13 selecciones · 2 dobles permitidos</p>
          </div>

          <div style={{
            padding:40,
            borderRadius:32,
            background:`linear-gradient(135deg,${BG2},${BG3})`,
            border:"1px solid rgba(255,255,255,0.08)",
            boxShadow:"0 20px 60px rgba(0,0,0,0.3)"
          }}>
            {/* Grid de selecciones - DISEÑO HORIZONTAL */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:12,marginBottom:32}}>
              {/* Dobles - destacados */}
              {[
                {code:"ar", pais:"Argentina", jug:"Messi + Otamendi", doble:true},
                {code:"br", pais:"Brasil", jug:"Vinicius + Rodrygo", doble:true},
                {code:"es", pais:"España", jug:"Lamine Yamal", doble:false},
                {code:"fr", pais:"Francia", jug:"Kylian Mbappé", doble:false},
                {code:"gb-eng", pais:"Inglaterra", jug:"Jude Bellingham", doble:false},
                {code:"pt", pais:"Portugal", jug:"Vitinha", doble:false},
                {code:"be", pais:"Bélgica", jug:"Thibaut Courtois", doble:false},
                {code:"nl", pais:"Holanda", jug:"Virgil van Dijk", doble:false},
                {code:"uy", pais:"Uruguay", jug:"Federico Valverde", doble:false},
                {code:"ma", pais:"Marruecos", jug:"Achraf Hakimi", doble:false},
                {code:"co", pais:"Colombia", jug:"Luis Díaz", doble:false},
                {code:"de", pais:"Alemania", jug:"Jamal Musiala", doble:false},
                {code:"us", pais:"USA", jug:"Christian Pulisic", doble:false},
              ].map((item,i)=>[
                <div key={i} style={{
                  padding:12,
                  borderRadius:12,
                  background:item.doble?`linear-gradient(135deg,${GOLD}20,transparent)`:'transparent',
                  border:`1px solid ${item.doble?GOLD:'rgba(255,255,255,0.1)'}`,
                  display:"flex",
                  alignItems:"center",
                  gap:12,
                  minHeight:60
                }}>
                  <img src={`https://flagcdn.com/w40/${item.code}.png`} alt={item.pais} style={{width:32,height:20,borderRadius:3,flexShrink:0}} />
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontWeight:700,fontSize:13,color:item.doble?GOLD:'#fff',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                      {item.pais} {item.doble?'⭐':''}
                    </div>
                    <div style={{fontSize:11,color:DIM,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                      {item.jug}
                    </div>
                  </div>
                </div>
              ])}
            </div>

            {/* Info resumen */}
            <div style={{
              display:"flex",
              justifyContent:"center",
              gap:32,
              flexWrap:"wrap",
              padding:"20px 0",
              borderTop:"1px solid rgba(255,255,255,0.05)"
            }}>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:28,fontWeight:800,color:GOLD}}>15</div>
                <div style={{fontSize:12,color:DIM}}>Jugadores</div>
              </div>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:28,fontWeight:800,color:GOLD}}>13</div>
                <div style={{fontSize:12,color:DIM}}>Selecciones</div>
              </div>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:28,fontWeight:800,color:GOLD}}>2</div>
                <div style={{fontSize:12,color:DIM}}>Con dobles</div>
              </div>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:28,fontWeight:800,color:"#22c55e"}}>✓</div>
                <div style={{fontSize:12,color:DIM}}>Válido</div>
              </div>
            </div>

            {/* Equipo inválido */}
            <div style={{
              marginTop:32,
              padding:24,
              borderRadius:20,
              background:"rgba(239,68,68,0.08)",
              border:"1px solid rgba(239,68,68,0.25)",
              display:"flex",
              gap:16,
              alignItems:"flex-start"
            }}>
              <span style={{fontSize:24}}>❌</span>
              <div>
                <span style={{fontWeight:700,color:"#ef4444",fontSize:15}}>EQUIPO INVÁLIDO:</span>
                <p style={{fontSize:14,color:MID,marginTop:6,lineHeight:1.6}}>
                  2 de Argentina + 2 de Brasil + <strong style={{color:"#ef4444"}}>2 de Francia</strong> = ❌ No permitido.<br/>
                  Solo puedes tener dobles en <strong>2 selecciones</strong> como máximo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SISTEMA DE PUNTOS DETALLADO
          ═══════════════════════════════════════ */}
      <section style={{padding:"80px 20px",background:BG3}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:50}}>
            <h2 style={{fontSize:"clamp(28px,5vw,42px)",fontWeight:800}}>
              Sistema de <span style={{color:GOLD}}>Puntos</span>
            </h2>
            <p style={{color:MID,marginTop:12}}>Cada acción cuenta</p>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:16}}>
            {PUNTOS_SISTEMA.map((p,i)=>(
              <div key={i} style={{padding:20,borderRadius:16,background:BG2,border:"1px solid rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <span style={{fontSize:24}}>{p.icono}</span>
                  <span style={{fontSize:14,color:MID}}>{p.accion}</span>
                </div>
                <span style={{fontSize:18,fontWeight:800,color:p.puntos.includes("-")?"#ef4444":GOLD}}>
                  {p.puntos}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LOS 4 COMODINES (CHIPS)
          ═══════════════════════════════════════ */}
      <section style={{padding:"80px 20px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:50}}>
            <span style={{color:GOLD,fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>Momentos decisivos</span>
            <h2 style={{fontSize:"clamp(28px,5vw,42px)",fontWeight:800,marginTop:16}}>
              Los 4 <span style={{color:GOLD}}>Comodines</span>
            </h2>
            <p style={{color:MID,marginTop:12,maxWidth:500,margin:"12px auto 0"}}>
              Úsalos sabiamente. No se regeneran durante el torneo.
            </p>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:24}}>
            {CHIPS.map((chip,i)=>(
              <div key={i} style={{padding:32,borderRadius:24,background:BG2,border:"1px solid rgba(255,255,255,0.05)",position:"relative",overflow:"hidden"}}>
                <div style={{position:"absolute",top:16,right:16,padding:"4px 12px",borderRadius:12,background:BG3,fontSize:11,color:GOLD,fontWeight:700}}>
                  {chip.usos}
                </div>
                <div style={{fontSize:56,marginBottom:16}}>{chip.icono}</div>
                <h3 style={{fontSize:20,fontWeight:800,marginBottom:12}}>{chip.nombre}</h3>
                <p style={{fontSize:14,color:MID,lineHeight:1.7,marginBottom:16}}>{chip.desc}</p>
                <div style={{padding:12,borderRadius:8,background:BG3,fontSize:12,color:GOLD}}>
                  💡 <strong>Cuándo:</strong> {chip.cuando}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DUelos HEAD-TO-HEAD
          ═══════════════════════════════════════ */}
      <section style={{padding:"60px 20px"}}>
        <div style={{maxWidth:800,margin:"0 auto",textAlign:"center"}}>
          <div style={{padding:40,borderRadius:24,background:`linear-gradient(135deg,${GOLD}10,transparent)`,border:`1px solid ${GOLD}30`}}>
            <div style={{fontSize:48,marginBottom:16}}>⚔️</div>
            <h2 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800,marginBottom:16}}>
              Duelos <span style={{color:GOLD}}>1vs1</span>
            </h2>
            <p style={{color:MID,fontSize:16,lineHeight:1.7,maxWidth:600,margin:"0 auto 24px"}}>
              Reta a cualquier usuario a un duelo directo. Gana quien sume más puntos en la jornada. 
              Apuesta monedas o puntos de ranking y demuestra quién es el mejor manager.
            </p>
            <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
              <span style={{padding:"10px 20px",borderRadius:20,background:BG2,fontSize:14,color:MID}}>🏆 Gana el mejor</span>
              <span style={{padding:"10px 20px",borderRadius:20,background:BG2,fontSize:14,color:MID}}>💰 Apuesta monedas</span>
              <span style={{padding:"10px 20px",borderRadius:20,background:BG2,fontSize:14,color:MID}}>📈 Ranking</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA FINAL
          ═══════════════════════════════════════ */}
      <section style={{padding:"100px 20px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center, rgba(201,168,76,0.1) 0%, transparent 60%)"}}/>
        
        <div style={{maxWidth:700,margin:"0 auto",textAlign:"center",position:"relative"}}>
          <div style={{fontSize:64,marginBottom:24}}>⚽</div>
          <h2 style={{fontSize:"clamp(28px,5vw,44px)",fontWeight:900,marginBottom:16,lineHeight:1.1}}>
            Construye tu XI <span style={{color:GOLD}}>ideal</span>
          </h2>
          <p style={{color:MID,marginBottom:40,fontSize:18,maxWidth:500,margin:"0 auto 40px",lineHeight:1.6}}>
            Sin dinero, sin draft. Solo tu conocimiento futbolístico y estrategia. 
            <strong style={{color:"#fff"}}> 15 jugadores, 13 selecciones, 1 campeón.</strong>
          </p>
          <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",marginBottom:24}}>
            <Link href="/registro" style={{
              padding:"18px 44px",borderRadius:14,
              background:`linear-gradient(135deg,${GOLD},${GOLD2})`,
              color:BG,fontWeight:800,fontSize:18,textDecoration:"none",display:"inline-block",
              boxShadow:"0 8px 32px rgba(201,168,76,0.35)"
            }}>
              🚀 Pre-regístrate gratis
            </Link>
          </div>
          <p style={{fontSize:14,color:DARK}}>
            Es fácil de jugar, difícil de dominar · Gratis · Sin compromiso
          </p>
        </div>
      </section>
    </div>
  );
}
