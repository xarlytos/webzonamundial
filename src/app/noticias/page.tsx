"use client";

import { useState, useEffect, useRef, useMemo } from "react";

const BG="#060B14",BG2="#0F1D32",BG3="#0B1825",GOLD="#c9a84c",GOLD2="#e8d48b",MID="#8a94b0",DIM="#6a7a9a",DARK="#4a5570";
const flagUrl=(c,w=80)=>c?`https://flagcdn.com/w${w}/${c}.png`:null;

// ═══ BLOG DATA ═══
const CATEGORIES=[
  {id:"all",label:"Todos",color:GOLD},
  {id:"analisis",label:"Análisis",color:"#3b82f6"},
  {id:"datos",label:"Datos & Stats",color:"#22c55e"},
  {id:"historia",label:"Historia",color:"#f59e0b"},
  {id:"sedes",label:"Sedes & Viajes",color:"#e879f9"},
  {id:"selecciones",label:"Selecciones",color:"#ef4444"},
  {id:"plataforma",label:"Plataforma",color:"#06b6d4"},
];

const POSTS=[
  {id:1,title:"Las 10 selecciones favoritas para ganar el Mundial 2026",excerpt:"Analizamos las plantillas, el momento de forma y los datos históricos de las principales candidatas al título en Norteamérica.",cat:"analisis",date:"2026-04-15",readTime:8,flags:["ar","fr","br","es","de"],featured:true,img:"linear-gradient(135deg,#c9a84c20,#0F1D32)"},
  {id:2,title:"Estadio Azteca: la catedral del fútbol se prepara para su tercer Mundial",excerpt:"El mítico estadio de Ciudad de México albergará el partido inaugural. Repasamos su historia y las renovaciones para 2026.",cat:"sedes",date:"2026-04-12",readTime:6,flags:["mx"],featured:true,img:"linear-gradient(135deg,#e879f920,#0F1D32)"},
  {id:3,title:"¿Cuántos puntos necesitas para clasificar en un grupo de 4?",excerpt:"Matemáticas del Mundial: calculamos los escenarios mínimos de clasificación con el nuevo formato de 48 selecciones.",cat:"datos",date:"2026-04-10",readTime:5,flags:[],featured:false,img:"linear-gradient(135deg,#22c55e20,#0F1D32)"},
  {id:4,title:"El Grupo H: España, Uruguay, Arabia Saudí y Cabo Verde",excerpt:"Análisis completo del grupo de la Roja. Historial, plantillas, estilo de juego y predicciones para cada partido.",cat:"selecciones",date:"2026-04-08",readTime:7,flags:["es","uy","sa","cv"],featured:false,img:"linear-gradient(135deg,#ef444420,#0F1D32)"},
  {id:5,title:"Historia: todos los campeones del mundo desde 1930",excerpt:"De Uruguay 1930 a Argentina 2022. Repaso completo de los 22 torneos, sus finales y momentos icónicos.",cat:"historia",date:"2026-04-05",readTime:12,flags:["uy","ar","br","de","it"],featured:true,img:"linear-gradient(135deg,#f59e0b20,#0F1D32)"},
  {id:6,title:"Guía de viaje: Miami para el Mundial 2026",excerpt:"Todo lo que necesitas saber para vivir el Mundial en Miami. Transporte, alojamiento, zonas y consejos prácticos.",cat:"sedes",date:"2026-04-03",readTime:9,flags:["us"],featured:false,img:"linear-gradient(135deg,#e879f920,#0F1D32)"},
  {id:7,title:"Cómo funciona el Fantasy de ZonaMundial",excerpt:"Guía completa del módulo Fantasy: reglas, puntuación, estrategias y cómo armar el equipo perfecto para el Mundial.",cat:"plataforma",date:"2026-04-01",readTime:6,flags:[],featured:false,img:"linear-gradient(135deg,#06b6d420,#0F1D32)"},
  {id:8,title:"Argentina: radiografía de la actual campeona",excerpt:"Plantilla, sistema táctico, jugadores clave y estadísticas de la selección de Scaloni rumbo a defender el título.",cat:"selecciones",date:"2026-03-28",readTime:8,flags:["ar"],featured:false,img:"linear-gradient(135deg,#ef444420,#0F1D32)"},
  {id:9,title:"El formato de 48 selecciones explicado en 3 minutos",excerpt:"12 grupos de 4, dieciseisavos, octavos, cuartos, semis y final. Todo lo que cambia con el nuevo formato del Mundial.",cat:"datos",date:"2026-03-25",readTime:3,flags:[],featured:false,img:"linear-gradient(135deg,#22c55e20,#0F1D32)"},
  {id:10,title:"MetLife Stadium: la sede de la gran final",excerpt:"El estadio más grande de la Copa del Mundo 2026. Ubicación, acceso, capacidad y lo que se espera para el 19 de julio.",cat:"sedes",date:"2026-03-22",readTime:5,flags:["us"],featured:false,img:"linear-gradient(135deg,#e879f920,#0F1D32)"},
  {id:11,title:"Las predicciones más rentables: guía de puntuación",excerpt:"Análisis de qué tipos de predicción dan más puntos y cuáles son más fáciles de acertar. Optimiza tu estrategia.",cat:"plataforma",date:"2026-03-20",readTime:5,flags:[],featured:false,img:"linear-gradient(135deg,#06b6d420,#0F1D32)"},
  {id:12,title:"Mbappé, Messi, Haaland: los 11 jugadores a seguir en 2026",excerpt:"Los nombres que pueden decidir el Mundial. Stats, goles internacionales y momentos clave de cada uno.",cat:"analisis",date:"2026-03-18",readTime:10,flags:["fr","ar","no","br","gb-eng"],featured:false,img:"linear-gradient(135deg,#3b82f620,#0F1D32)"},
];

const MONTHS_ES={"01":"Ene","02":"Feb","03":"Mar","04":"Abr","05":"May","06":"Jun","07":"Jul"};
const fmtBlogDate=(d)=>{const p=d.split("-");return`${parseInt(p[2])} ${MONTHS_ES[p[1]]} ${p[0]}`};

// ═══ LEGAL DATA ═══
const LEGAL_PAGES=[
  {id:"terminos",title:"Términos de Uso",icon:"📋",sections:[
    {t:"1. Aceptación",c:"Al acceder y utilizar ZonaMundial (zonamundial.app), aceptas estos Términos de Uso en su totalidad. Si no estás de acuerdo, no utilices la plataforma. ZonaMundial es propiedad de Sprintmarkt, con sede en Valencia, España."},
    {t:"2. Descripción del servicio",c:"ZonaMundial es una plataforma gratuita de predicciones deportivas, fantasy y entretenimiento relacionado con la Copa del Mundo 2026. No implica apuestas monetarias ni juego de azar. Los usuarios predicen resultados deportivos y acumulan puntos virtuales sin valor económico."},
    {t:"3. Registro y cuenta",c:"Para acceder a funciones personalizadas debes crear una cuenta. Puedes registrarte con email, Google o Apple. Debes tener al menos 14 años de edad. Los datos proporcionados deben ser veraces. Cada persona puede tener una sola cuenta activa."},
    {t:"4. Uso aceptable",c:"Te comprometes a utilizar la plataforma de forma lícita y respetuosa. Está prohibido crear cuentas múltiples para manipular rankings, usar bots o scripts automatizados, publicar contenido ofensivo en chats o ligas, intentar acceder a cuentas ajenas, y cualquier actividad que perjudique el funcionamiento normal de la plataforma."},
    {t:"5. Contenido premium",c:"ZonaMundial ofrece funciones premium de pago (€10 España / $8 USD LATAM, pago único). El acceso premium es personal e intransferible. Las compras se procesan a través de Stripe y las tiendas de aplicaciones correspondientes. No se realizan devoluciones una vez activado el acceso premium, salvo en los casos previstos por la legislación aplicable."},
    {t:"6. Propiedad intelectual",c:"Todo el contenido de ZonaMundial (diseño, código, textos, gráficos, marca) es propiedad de Sprintmarkt. Los nombres de selecciones nacionales, jugadores y estadios se utilizan en contexto editorial e informativo. Las banderas nacionales son de dominio público."},
    {t:"7. Limitación de responsabilidad",c:"ZonaMundial se proporciona 'tal cual'. No garantizamos disponibilidad ininterrumpida del servicio. No somos responsables de decisiones tomadas basándose en el contenido de la plataforma. Los resultados de predicciones y fantasy dependen de eventos deportivos reales sobre los que no tenemos control."},
    {t:"8. Modificaciones",c:"Nos reservamos el derecho de modificar estos términos. Los cambios se notificarán a través de la plataforma. El uso continuado tras una modificación implica aceptación de los nuevos términos."},
    {t:"9. Legislación aplicable",c:"Estos términos se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Valencia, España."},
    {t:"10. Contacto",c:"Para consultas sobre estos términos: business.dev@sprintmarkt.com"},
  ]},
  {id:"privacidad",title:"Política de Privacidad",icon:"🔒",sections:[
    {t:"1. Responsable del tratamiento",c:"Sprintmarkt, con domicilio en Valencia, España. Email de contacto: business.dev@sprintmarkt.com. Este tratamiento se realiza conforme al Reglamento General de Protección de Datos (RGPD) UE 2016/679 y la Ley Orgánica 3/2018 (LOPDGDD)."},
    {t:"2. Datos que recopilamos",c:"Datos de registro: nombre o alias, email, método de autenticación (email, Google, Apple). Datos de uso: predicciones realizadas, puntuaciones, participación en ligas, interacciones con módulos. Datos técnicos: dirección IP (para geolocalización de publicidad), tipo de dispositivo, navegador, sistema operativo. Datos de pago: procesados por Stripe; ZonaMundial no almacena datos de tarjetas de crédito."},
    {t:"3. Finalidad del tratamiento",c:"Gestión de tu cuenta y autenticación. Funcionamiento de predicciones, rankings y ligas. Personalización de la experiencia (idioma, preferencias). Geolocalización por IP para publicidad segmentada por país. Comunicaciones sobre el servicio y el Mundial. Estadísticas anónimas de uso para mejorar la plataforma."},
    {t:"4. Base legal",c:"Ejecución del contrato (uso de la plataforma). Consentimiento (comunicaciones comerciales). Interés legítimo (mejora del servicio, prevención de fraude). Obligación legal (cooperación con autoridades cuando sea requerido)."},
    {t:"5. Geolocalización por IP",c:"Utilizamos tu dirección IP para determinar tu país y mostrarte publicidad relevante para tu mercado. Esta geolocalización es a nivel de país, no de ubicación precisa. No vendemos ni compartimos datos de geolocalización con terceros."},
    {t:"6. Destinatarios de datos",c:"Stripe (procesamiento de pagos). Firebase/Google (notificaciones push, autenticación). Proveedores de hosting (AWS). No vendemos datos personales a terceros. No compartimos datos individuales con patrocinadores; solo proporcionamos estadísticas agregadas y anónimas."},
    {t:"7. Conservación de datos",c:"Los datos de tu cuenta se conservan mientras mantengas la cuenta activa. Tras solicitud de eliminación, los datos se borran en un plazo máximo de 30 días. Los datos anónimos de uso pueden conservarse indefinidamente con fines estadísticos."},
    {t:"8. Tus derechos (RGPD)",c:"Tienes derecho a: Acceso a tus datos personales. Rectificación de datos inexactos. Supresión ('derecho al olvido'). Limitación del tratamiento. Portabilidad de tus datos en formato estándar. Oposición al tratamiento. Retirada del consentimiento en cualquier momento. Para ejercer estos derechos: business.dev@sprintmarkt.com. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es)."},
    {t:"9. Menores de edad",c:"ZonaMundial requiere una edad mínima de 14 años para el registro. Los menores de 14 años no pueden crear cuenta. Recomendamos supervisión parental para usuarios menores de 18 años."},
    {t:"10. Seguridad",c:"Implementamos medidas técnicas y organizativas para proteger tus datos: cifrado en tránsito (TLS/SSL), almacenamiento seguro en AWS con cifrado en reposo, control de acceso basado en roles, y auditorías periódicas de seguridad."},
  ]},
  {id:"cookies",title:"Política de Cookies",icon:"🍪",sections:[
    {t:"1. ¿Qué son las cookies?",c:"Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten recordar tus preferencias y mejorar tu experiencia de navegación."},
    {t:"2. Cookies que utilizamos",c:"Cookies esenciales: necesarias para el funcionamiento de la plataforma (autenticación, sesión, preferencias de idioma). No requieren consentimiento. Cookies analíticas: nos ayudan a entender cómo utilizas la plataforma para mejorarla. Recopilan datos anónimos de navegación. Cookies de publicidad: utilizadas para mostrarte publicidad relevante basada en tu país (geolocalización por IP). No rastrean tu actividad en otros sitios."},
    {t:"3. Cookies de terceros",c:"Stripe: procesamiento seguro de pagos. Firebase: autenticación y notificaciones. Estos servicios tienen sus propias políticas de cookies."},
    {t:"4. Gestión de cookies",c:"Puedes gestionar tus preferencias de cookies en cualquier momento desde la configuración de tu navegador. Ten en cuenta que desactivar cookies esenciales puede afectar al funcionamiento de la plataforma."},
    {t:"5. Consentimiento",c:"Al continuar navegando por ZonaMundial tras ver el aviso de cookies, aceptas el uso de cookies según esta política. Puedes retirar tu consentimiento en cualquier momento desde la configuración de la plataforma."},
    {t:"6. Actualizaciones",c:"Esta política puede actualizarse para reflejar cambios en las cookies que utilizamos. La fecha de última actualización se indica al final de este documento. Última actualización: marzo 2026."},
  ]},
];

// ═══ BLOG CARD ═══
function BlogCard({post,featured,onClick}){
  const[hov,setHov]=useState(false);
  const cat=CATEGORIES.find(c=>c.id===post.cat);

  if(featured){
    return(
      <div onClick={()=>onClick(post)} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
        style={{borderRadius:22,cursor:"pointer",position:"relative",overflow:"hidden",
          background:post.img,border:`1px solid ${hov?"rgba(201,168,76,0.3)":"rgba(255,255,255,0.05)"}`,
          transform:hov?"translateY(-3px)":"none",boxShadow:hov?"0 16px 48px rgba(0,0,0,0.4)":"none",transition:"all .4s",
          padding:"clamp(24px,4vw,36px)",minHeight:220,display:"flex",flexDirection:"column",justifyContent:"flex-end",
        }}>
        {post.flags.length>0&&(
          <div style={{display:"flex",gap:4,marginBottom:12}}>
            {post.flags.slice(0,5).map(f=><img key={f} src={flagUrl(f,40)} alt="" style={{width:22,height:15,borderRadius:2,objectFit:"cover",boxShadow:"0 2px 6px rgba(0,0,0,0.4)",border:"1px solid rgba(255,255,255,0.1)"}}/>)}
          </div>
        )}
        <span style={{fontSize:10,fontWeight:700,color:cat.color,background:`${cat.color}15`,padding:"2px 8px",borderRadius:5,display:"inline-block",width:"fit-content",marginBottom:8,border:`1px solid ${cat.color}20`}}>{cat.label}</span>
        <h3 style={{fontWeight:800,fontSize:"clamp(18px,2.5vw,22px)",lineHeight:1.25,marginBottom:8,color:hov?GOLD:"#fff",transition:"color .3s"}}>{post.title}</h3>
        <p style={{fontSize:13,color:MID,lineHeight:1.5,marginBottom:8}}>{post.excerpt}</p>
        <div style={{display:"flex",alignItems:"center",gap:8,fontSize:11,color:DARK}}>
          <span>{fmtBlogDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime} min lectura</span>
        </div>
      </div>
    );
  }

  return(
    <div onClick={()=>onClick(post)} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{borderRadius:16,cursor:"pointer",padding:18,
        background:hov?`${cat.color}06`:BG2,
        border:`1px solid ${hov?`${cat.color}30`:"rgba(255,255,255,0.04)"}`,
        transform:hov?"translateY(-2px)":"none",transition:"all .35s",
      }}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
        <span style={{fontSize:10,fontWeight:700,color:cat.color,background:`${cat.color}12`,padding:"2px 8px",borderRadius:5,border:`1px solid ${cat.color}15`}}>{cat.label}</span>
        {post.flags.slice(0,3).map(f=><img key={f} src={flagUrl(f,30)} alt="" style={{width:16,height:11,borderRadius:1,objectFit:"cover"}}/>)}
        <span style={{fontSize:10,color:DARK,marginLeft:"auto"}}>{post.readTime} min</span>
      </div>
      <h3 style={{fontWeight:700,fontSize:15,lineHeight:1.3,marginBottom:6,color:hov?GOLD:"#fff",transition:"color .3s"}}>{post.title}</h3>
      <p style={{fontSize:12,color:DIM,lineHeight:1.45}}>{post.excerpt.slice(0,120)}...</p>
      <div style={{fontSize:10,color:DARK,marginTop:8}}>{fmtBlogDate(post.date)}</div>
    </div>
  );
}

// ═══ BLOG POST DETAIL ═══
function BlogDetail({post,onBack}){
  const cat=CATEGORIES.find(c=>c.id===post.cat);
  const[entered,setEntered]=useState(false);
  useEffect(()=>{setTimeout(()=>setEntered(true),30)},[]);

  const related=POSTS.filter(p=>p.id!==post.id&&(p.cat===post.cat||p.flags.some(f=>post.flags.includes(f)))).slice(0,3);

  return(
    <div style={{maxWidth:720,margin:"0 auto",opacity:entered?1:0,transform:entered?"translateY(0)":"translateY(12px)",transition:"all .5s"}}>
      <button onClick={onBack} style={{background:"none",border:"none",color:GOLD,cursor:"pointer",fontSize:13,fontWeight:600,fontFamily:"inherit",marginBottom:20,display:"flex",alignItems:"center",gap:6}}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Volver al blog
      </button>

      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
        <span style={{fontSize:11,fontWeight:700,color:cat.color,background:`${cat.color}12`,padding:"3px 10px",borderRadius:6,border:`1px solid ${cat.color}20`}}>{cat.label}</span>
        <span style={{fontSize:12,color:DARK}}>{fmtBlogDate(post.date)}</span>
        <span style={{fontSize:12,color:DARK}}>·</span>
        <span style={{fontSize:12,color:DARK}}>{post.readTime} min lectura</span>
      </div>

      <h1 style={{fontWeight:900,fontSize:"clamp(24px,4vw,34px)",lineHeight:1.15,marginBottom:16}}>{post.title}</h1>

      {post.flags.length>0&&(
        <div style={{display:"flex",gap:6,marginBottom:20}}>
          {post.flags.map(f=><img key={f} src={flagUrl(f,80)} alt="" style={{width:36,height:24,borderRadius:4,objectFit:"cover",boxShadow:"0 2px 8px rgba(0,0,0,0.3)",border:"1.5px solid rgba(255,255,255,0.1)"}}/>)}
        </div>
      )}

      {/* Article body placeholder */}
      <div style={{padding:28,borderRadius:20,background:BG2,border:"1px solid rgba(255,255,255,0.05)",marginBottom:28}}>
        <p style={{fontSize:16,color:"#d0d4de",lineHeight:1.75,marginBottom:20}}>{post.excerpt}</p>
        <div style={{height:1,background:"rgba(255,255,255,0.04)",margin:"20px 0"}}/>
        <p style={{fontSize:15,color:MID,lineHeight:1.7}}>Este artículo completo estará disponible cuando la plataforma se lance en abril 2026. Pre-regístrate para no perderte ninguna publicación.</p>
        <div style={{marginTop:24,padding:20,borderRadius:14,background:"rgba(201,168,76,0.04)",border:"1px solid rgba(201,168,76,0.1)",textAlign:"center"}}>
          <p style={{fontSize:13,color:MID,marginBottom:10}}>¿Quieres recibir artículos como este?</p>
          <button style={{padding:"10px 28px",borderRadius:10,border:"none",cursor:"pointer",background:`linear-gradient(135deg,${GOLD},${GOLD2})`,color:BG,fontWeight:700,fontSize:14,fontFamily:"inherit"}}>Pre-regístrate gratis</button>
        </div>
      </div>

      {/* Share */}
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:32}}>
        <span style={{fontSize:12,color:DIM}}>Compartir:</span>
        {["Twitter","WhatsApp","Copiar"].map(s=>(
          <button key={s} style={{padding:"5px 12px",borderRadius:7,border:"1px solid rgba(201,168,76,0.2)",background:"rgba(201,168,76,0.05)",color:GOLD,fontSize:11,fontWeight:600,fontFamily:"inherit",cursor:"pointer"}}>{s}</button>
        ))}
      </div>

      {/* Related */}
      {related.length>0&&(
        <div>
          <h3 style={{fontWeight:700,fontSize:16,marginBottom:12}}>Artículos relacionados</h3>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {related.map(r=>{
              const rc=CATEGORIES.find(c=>c.id===r.cat);
              return(
                <div key={r.id} onClick={()=>onBack(r)} style={{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderRadius:12,background:BG2,border:"1px solid rgba(255,255,255,0.04)",cursor:"pointer",transition:"all .3s"}}
                  onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(201,168,76,0.2)"}
                  onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.04)"}
                >
                  <span style={{fontSize:10,fontWeight:700,color:rc.color,background:`${rc.color}12`,padding:"2px 6px",borderRadius:4,flexShrink:0}}>{rc.label}</span>
                  <span style={{fontSize:13,fontWeight:600,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.title}</span>
                  <span style={{fontSize:10,color:DARK,flexShrink:0}}>{r.readTime} min</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ═══ BLOG PAGE ═══
function BlogPage({onBack}){
  const[cat,setCat]=useState("all");
  const[selectedPost,setSelectedPost]=useState(null);
  const scrollRef=useRef(null);

  const filtered=cat==="all"?POSTS:POSTS.filter(p=>p.cat===cat);
  const featured=filtered.filter(p=>p.featured);
  const regular=filtered.filter(p=>!p.featured);

  const openPost=(post)=>{
    setSelectedPost(post);
    if(scrollRef.current)scrollRef.current.scrollTop=0;
  };

  if(selectedPost)return(
    <div ref={scrollRef} style={{maxWidth:1000,margin:"0 auto",padding:"32px 16px 80px"}}>
      <BlogDetail post={selectedPost} onBack={(related)=>{if(related&&related.id){setSelectedPost(related);scrollRef.current?.scrollTo(0,0)}else setSelectedPost(null)}}/>
    </div>
  );

  return(
    <div ref={scrollRef}>
      <div style={{marginBottom:32}}>
        <span style={{color:GOLD,fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>Blog & Noticias</span>
        <h1 style={{fontSize:"clamp(28px,5vw,42px)",fontWeight:900,marginTop:8,marginBottom:10,lineHeight:1.08}}>
          Todo sobre el<br/><span style={{background:`linear-gradient(135deg,${GOLD},${GOLD2})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Mundial 2026</span>
        </h1>
        <p style={{color:MID,maxWidth:480,fontSize:15,lineHeight:1.6}}>Análisis, datos, historia y guías para vivir la Copa del Mundo como un experto.</p>
      </div>

      {/* Categories */}
      <div style={{display:"flex",gap:6,marginBottom:28,overflowX:"auto",paddingBottom:4}}>
        {CATEGORIES.map(c=>(
          <button key={c.id} onClick={()=>setCat(c.id)} style={{padding:"7px 14px",borderRadius:8,border:`1px solid ${cat===c.id?`${c.color}40`:"rgba(255,255,255,0.05)"}`,background:cat===c.id?`${c.color}12`:"transparent",color:cat===c.id?c.color:DIM,fontSize:12,fontWeight:600,fontFamily:"inherit",cursor:"pointer",whiteSpace:"nowrap",transition:"all .25s"}}>{c.label}</button>
        ))}
      </div>

      {/* Featured */}
      {featured.length>0&&(
        <div style={{display:"grid",gridTemplateColumns:featured.length>1?"repeat(auto-fit,minmax(300px,1fr))":"1fr",gap:14,marginBottom:24}}>
          {featured.map(p=><BlogCard key={p.id} post={p} featured onClick={openPost}/>)}
        </div>
      )}

      {/* Regular grid */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:10}}>
        {regular.map(p=><BlogCard key={p.id} post={p} onClick={openPost}/>)}
      </div>

      {filtered.length===0&&(
        <div style={{textAlign:"center",padding:40,color:DIM}}>No hay artículos en esta categoría aún.</div>
      )}
    </div>
  );
}

// ═══ LEGAL PAGE ═══
function LegalPage(){
  const[activePage,setActivePage]=useState("terminos");
  const[expandedSection,setExpandedSection]=useState(null);
  const page=LEGAL_PAGES.find(p=>p.id===activePage);

  return(
    <div>
      <div style={{marginBottom:28}}>
        <span style={{color:GOLD,fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>Legal</span>
        <h1 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:900,marginTop:8,marginBottom:6}}>Información legal</h1>
        <p style={{color:MID,fontSize:14}}>Transparencia y cumplimiento normativo (RGPD + LSSI-CE).</p>
      </div>

      {/* Page tabs */}
      <div style={{display:"flex",gap:8,marginBottom:24,flexWrap:"wrap"}}>
        {LEGAL_PAGES.map(p=>(
          <button key={p.id} onClick={()=>{setActivePage(p.id);setExpandedSection(null)}} style={{
            padding:"10px 18px",borderRadius:12,cursor:"pointer",fontFamily:"inherit",
            border:`1px solid ${activePage===p.id?"rgba(201,168,76,0.3)":"rgba(255,255,255,0.05)"}`,
            background:activePage===p.id?"rgba(201,168,76,0.08)":"transparent",
            color:activePage===p.id?GOLD:DIM,fontWeight:600,fontSize:13,
            display:"flex",alignItems:"center",gap:6,transition:"all .25s",
          }}>
            <span>{p.icon}</span>{p.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{borderRadius:20,background:BG2,border:"1px solid rgba(255,255,255,0.05)",overflow:"hidden"}}>
        <div style={{padding:"16px 20px",borderBottom:"1px solid rgba(255,255,255,0.04)",display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:22}}>{page.icon}</span>
          <h2 style={{fontWeight:800,fontSize:18}}>{page.title}</h2>
        </div>

        {page.sections.map((s,i)=>{
          const expanded=expandedSection===i;
          return(
            <div key={i} style={{borderBottom:i<page.sections.length-1?"1px solid rgba(255,255,255,0.03)":"none"}}>
              <button onClick={()=>setExpandedSection(expanded?null:i)} style={{
                width:"100%",padding:"14px 20px",background:expanded?"rgba(201,168,76,0.03)":"transparent",
                border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",
                fontFamily:"inherit",textAlign:"left",transition:"background .3s",
              }}>
                <span style={{fontWeight:700,fontSize:14,color:expanded?GOLD:"#d0d4de"}}>{s.t}</span>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" style={{transition:"transform .3s",transform:expanded?"rotate(180deg)":"none",flexShrink:0,marginLeft:12}}>
                  <path d="M1 1.5L7 6.5L13 1.5" stroke={expanded?GOLD:DIM} strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <div style={{maxHeight:expanded?500:0,overflow:"hidden",transition:"max-height .4s ease"}}>
                <div style={{padding:"0 20px 16px"}}>
                  <p style={{fontSize:14,color:MID,lineHeight:1.7}}>{s.c}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{marginTop:16,padding:14,borderRadius:12,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.03)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span style={{fontSize:11,color:DARK}}>Última actualización: marzo 2026</span>
        <span style={{fontSize:11,color:DARK}}>Contacto: business.dev@sprintmarkt.com</span>
      </div>
    </div>
  );
}

// ═══ MAIN ═══
export default function BlogAndLegal(){
  const[section,setSection]=useState("blog");
  const scrollRef=useRef(null);

  return(
    <div ref={scrollRef} style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif",height:"100vh",overflowY:"auto",overflowX:"hidden"}}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      <style>{`*{margin:0;padding:0;box-sizing:border-box}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:${BG}}::-webkit-scrollbar-thumb{background:rgba(201,168,76,0.2);border-radius:3px}::selection{background:rgba(201,168,76,0.3)}`}</style>

      {/* Tab switcher */}
      <div style={{position:"sticky",top:0,zIndex:50,background:"rgba(6,11,20,0.94)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",borderBottom:"1px solid rgba(255,255,255,0.04)",padding:"0 16px"}}>
        <div style={{maxWidth:1000,margin:"0 auto",display:"flex",gap:4}}>
          {[{id:"blog",label:"📰 Blog & Noticias"},{id:"legal",label:"📋 Legal"}].map(t=>(
            <button key={t.id} onClick={()=>setSection(t.id)} style={{padding:"12px 18px",border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:section===t.id?GOLD:DIM,borderBottom:`2px solid ${section===t.id?GOLD:"transparent"}`,background:"transparent",transition:"all .3s"}}>{t.label}</button>
          ))}
        </div>
      </div>

      <div style={{maxWidth:1000,margin:"0 auto",padding:"32px 16px 80px"}}>
        {section==="blog"?<BlogPage/>:<LegalPage/>}
      </div>
    </div>
  );
}
