// src/app/page.tsx
// ZonaMundial.app — Home Page Mejorada con Video Logo

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FeatureIcon } from "@/components/FeatureIcon";

const IMGS = {
  c_elopi23: "/img/zonamundial-images/creators/elopi23.jpg",
  c_franbar: "/img/zonamundial-images/creators/franbar.jpg",
  c_jose_cobo: "/img/zonamundial-images/creators/jose-cobo.jpg",
  c_nachocp: "/img/zonamundial-images/creators/nachocp.jpg",
  c_nereita: "/img/zonamundial-images/creators/nereita.jpg",
  c_pimpeano: "/img/zonamundial-images/creators/pimpeano.jpg",
  c_salvador: "/img/zonamundial-images/creators/salvador.jpg",
  c_svgiago: "/img/zonamundial-images/creators/svgiago.jpg",
};

const CREATORS=[
  {name:"José Cobo",handle:"@josecobo",followers:"4.7M",slug:"josecobo",img:IMGS.c_jose_cobo,color:"#c9a84c"},
  {name:"SVGiago",handle:"@svgiago",followers:"2.5M",slug:"svgiago",img:IMGS.c_svgiago,color:"#00d4ff"},
  {name:"Pimpeano",handle:"@pimpeano",followers:"2.3M",slug:"pimpeano",img:IMGS.c_pimpeano,color:"#ff6b35"},
  {name:"Nacho CP",handle:"@nachocp",followers:"1.6M",slug:"nachocp",img:IMGS.c_nachocp,color:"#22c55e"},
  {name:"Nereita",handle:"@nereita",followers:"500K",slug:"nereita",img:IMGS.c_nereita,color:"#e879f9"},
  {name:"Elopi23",handle:"@elopi23",followers:"300K",slug:"elopi23",img:IMGS.c_elopi23,color:"#38bdf8"},
  {name:"Salvador",handle:"@salvador",followers:"300K",slug:"salvador",img:IMGS.c_salvador,color:"#f97316"},
  {name:"Franbar",handle:"@franbar",followers:"130K",slug:"franbar",img:IMGS.c_franbar,color:"#a78bfa"},
];

const MODULES=[
  {icon:"⚽",title:"Match Center",desc:"104 partidos en vivo con stats, alineaciones y eventos minuto a minuto"},
  {icon:"🎯",title:"Predicciones",desc:"8 tipos: resultado exacto, goleador, tarjetas, corners, MVP y más"},
  {icon:"🏆",title:"Fantasy",desc:"Arma tu 11 ideal con presupuesto limitado. Puntos reales, ranking global"},
  {icon:"🤖",title:"IA Coach",desc:"Analista personal con inteligencia artificial — tácticas y recomendaciones"},
  {icon:"📺",title:"Zona Streaming",desc:"Directos con creadores durante los partidos. Reacciones en vivo"},
  {icon:"⚡",title:"Trivia Diaria",desc:"Preguntas diarias de fútbol — gana puntos extra y escala posiciones"},
  {icon:"🎮",title:"Modo Carrera",desc:"Dirige una selección durante todo el torneo como DT virtual"},
  {icon:"🏅",title:"Ligas Privadas",desc:"Crea ligas con amigos, compañeros o tu comunidad favorita"},
  {icon:"📊",title:"Rankings",desc:"Global, por país, por creador — demuestra quién sabe más de fútbol"},
  {icon:"💬",title:"Chat en Vivo",desc:"Chat en tiempo real con tu liga durante cada partido"},
  {icon:"🔥",title:"Micro-predicciones",desc:"Predicciones en directo: próximo gol, corner, tarjeta, cambio"},
  {icon:"📰",title:"Stories",desc:"Contenido editorial diario: datos, análisis y curiosidades"},
];

const GROUPS=[
  {l:"A",t:[{n:"México",f:"mx"},{n:"Corea del Sur",f:"kr"},{n:"Sudáfrica",f:"za"},{n:"Por definir",f:null}]},
  {l:"B",t:[{n:"Canadá",f:"ca"},{n:"Por definir",f:null},{n:"Qatar",f:"qa"},{n:"Suiza",f:"ch"}]},
  {l:"C",t:[{n:"Brasil",f:"br"},{n:"Marruecos",f:"ma"},{n:"Haití",f:"ht"},{n:"Escocia",f:"gb-sct"}]},
  {l:"D",t:[{n:"EE.UU.",f:"us"},{n:"Paraguay",f:"py"},{n:"Australia",f:"au"},{n:"Por definir",f:null}]},
  {l:"E",t:[{n:"Alemania",f:"de"},{n:"Curazao",f:"cw"},{n:"C. de Marfil",f:"ci"},{n:"Ecuador",f:"ec"}]},
  {l:"F",t:[{n:"P. Bajos",f:"nl"},{n:"Japón",f:"jp"},{n:"Por definir",f:null},{n:"Túnez",f:"tn"}]},
  {l:"G",t:[{n:"Bélgica",f:"be"},{n:"Egipto",f:"eg"},{n:"Irán",f:"ir"},{n:"N. Zelanda",f:"nz"}]},
  {l:"H",t:[{n:"España",f:"es"},{n:"Cabo Verde",f:"cv"},{n:"A. Saudí",f:"sa"},{n:"Uruguay",f:"uy"}]},
  {l:"I",t:[{n:"Francia",f:"fr"},{n:"Senegal",f:"sn"},{n:"Por definir",f:null},{n:"Noruega",f:"no"}]},
  {l:"J",t:[{n:"Argentina",f:"ar"},{n:"Argelia",f:"dz"},{n:"Austria",f:"at"},{n:"Jordania",f:"jo"}]},
  {l:"K",t:[{n:"Portugal",f:"pt"},{n:"Por definir",f:null},{n:"Uzbekistán",f:"uz"},{n:"Colombia",f:"co"}]},
  {l:"L",t:[{n:"Inglaterra",f:"gb-eng"},{n:"Croacia",f:"hr"},{n:"Ghana",f:"gh"},{n:"Panamá",f:"pa"}]},
];

const BG="#060B14",BG2="#0F1D32",BG3="#0B1825",GOLD="#c9a84c",GOLD2="#e8d48b",MID="#8a94b0",DIM="#6a7a9a",DARK="#4a5570";

const Flag=({code,w=20}: {code: string | null, w?: number})=>code?<img src={`https://flagcdn.com/w${w}/${code}.png`} alt="" style={{width:w,height:Math.round(w*0.67),borderRadius:2,objectFit:"cover"}} loading="lazy"/>:<div style={{width:w,height:Math.round(w*0.67),borderRadius:2,background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:6,color:DIM}}>?</span></div>;

function useCountdown(target: string){
  const[t,setT]=useState({d:0,h:0,m:0,s:0});
  useEffect(()=>{const c=()=>{const diff=Math.max(0,+new Date(target)-+Date.now());setT({d:Math.floor(diff/864e5),h:Math.floor(diff%864e5/36e5),m:Math.floor(diff%36e5/6e4),s:Math.floor(diff%6e4/1e3)})};c();const i=setInterval(c,1000);return()=>clearInterval(i)},[target]);
  return t;
}

export default function HomePage(){
  const cd=useCountdown("2026-06-11T00:00:00-05:00");

  return(
    <div style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif",minHeight:"100vh"}}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      
      {/* ═══════ HERO CON VIDEO LOGO ═══════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0" style={{background:`linear-gradient(170deg, ${BG2} 0%, ${BG} 50%, #0a0f1a 100%)`}}/>
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse at 30% 20%, rgba(201,168,76,0.1) 0%, transparent 50%)"}}/>
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse at 70% 80%, rgba(0,180,220,0.03) 0%, transparent 40%)"}}/>
        
        {/* Field pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <rect x="50" y="50" width="1100" height="700" fill="none" stroke="#c9a84c" strokeWidth="2"/>
          <line x1="600" y1="50" x2="600" y2="750" stroke="#c9a84c" strokeWidth="2"/>
          <circle cx="600" cy="400" r="91.5" fill="none" stroke="#c9a84c" strokeWidth="2"/>
          <circle cx="600" cy="400" r="3" fill="#c9a84c"/>
          <rect x="50" y="244" width="165" height="312" fill="none" stroke="#c9a84c" strokeWidth="2"/>
          <rect x="985" y="244" width="165" height="312" fill="none" stroke="#c9a84c" strokeWidth="2"/>
        </svg>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse"/>
            <span className="text-[#C9A84C] text-xs font-bold tracking-wider uppercase">
              Copa del Mundo 2026 · EE.UU. · México · Canadá
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
            Vive el Mundial<br />
            <span className="text-[#C9A84C]">como nunca antes</span>
          </h1>

          {/* VIDEO LOGO */}
          <div className="mb-6 flex justify-center">
            <div className="relative rounded-full overflow-hidden shadow-[0_0_60px_rgba(201,168,76,0.3)]">
              <video
                src="/img/zonamundial-images/video logo dando vueltas.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[280px] h-auto block"
                style={{mixBlendMode:"screen"}}
              />
            </div>
          </div>

          <p className="text-lg text-[#8a94b0] max-w-xl mx-auto mb-8">
            Predicciones · Fantasy · IA Coach · Trivia · Streaming con creadores
          </p>

          {/* Countdown */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-8">
            {[{v:cd.d,l:"DÍAS"},{v:cd.h,l:"HORAS"},{v:cd.m,l:"MIN"},{v:cd.s,l:"SEG"}].map((u)=>(
              <div key={u.l} className="text-center">
                <div className="w-[60px] sm:w-[72px] h-[60px] sm:h-[72px] rounded-xl bg-gradient-to-br from-[#0F1D32] to-[#0B1825] border border-[#C9A84C]/15 flex items-center justify-center shadow-lg">
                  <span className="text-2xl sm:text-3xl font-black text-[#C9A84C] tabular-nums">
                    {String(u.v).padStart(2,"0")}
                  </span>
                </div>
                <span className="text-[10px] text-gray-500 font-semibold mt-2 block tracking-wider">{u.l}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/registro" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#E8D48B] text-[#030712] font-bold hover:shadow-lg hover:shadow-[#C9A84C]/30 transition-all hover:-translate-y-0.5">
              Pre-regístrate gratis
            </Link>
            <Link href="/selecciones" className="px-8 py-3.5 rounded-xl border border-[#C9A84C]/30 text-[#C9A84C] font-semibold hover:bg-[#C9A84C]/10 transition-all">
              Explorar selecciones →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ STATS BAR ═══════ */}
      <section className="border-y border-white/5 bg-[#0B1825]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {[{v:"48",l:"Selecciones"},{v:"16",l:"Sedes"},{v:"104",l:"Partidos"},{v:"12",l:"Grupos"},{v:"3",l:"Países"},{v:"12",l:"Módulos"}].map(s=>[
              <div key={s.l} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#C9A84C]">{s.v}</div>
                <div className="text-xs text-gray-500 mt-1">{s.l}</div>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURES ═══════ */}
      <section className="py-16 px-4" style={{background:BG}}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5 flex items-center justify-center border border-[#C9A84C]/20">
              <span className="text-2xl">🎮</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Todo lo que necesitas</h2>
              <p className="text-sm text-gray-500">12 módulos para vivir el Mundial al máximo</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MODULES.map((m,i)=>[
              <div key={i} className="p-5 rounded-xl border border-white/5 bg-[#0F1D32] hover:border-[#C9A84C]/30 transition-all group">
                <div className="mb-3">
                  <FeatureIcon title={m.title} size={40} />
                </div>
                <h3 className="text-base font-bold text-white mb-1">{m.title}</h3>
                <p className="text-sm text-gray-400">{m.desc}</p>
              </div>
            ])}
          </div>
        </div>
      </section>

      {/* ═══════ DESCUBRE LA APP ═══════ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{background:BG2}}>
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C9A84C]/5 blur-[150px] rounded-full pointer-events-none"/>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-bold tracking-wider uppercase mb-4">
              Explora la Plataforma
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              La App del Mundial 2026
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Descubre todas las funcionalidades que hemos preparado para que vivas el Mundial como nunca antes
            </p>
          </div>

          {/* App Screenshots / Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Card 1 - Predicciones */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"/>
              <Link href="/app/predicciones" className="block relative p-6 rounded-2xl border border-white/10 bg-[#0B1825] hover:border-[#C9A84C]/40 transition-all duration-300 h-full">
                <div className="aspect-video rounded-xl mb-4 overflow-hidden relative border border-[#C9A84C]/20">
                  <img 
                    src="/img/zonamundial-images/imagenes/apuesta para portada.jpeg" 
                    alt="Predicciones - Apuestas"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1825] via-transparent to-transparent opacity-80"/>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    <span className="text-xs font-bold text-white bg-[#C9A84C]/80 px-2 py-1 rounded-full">PREDICCIONES</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Predicciones</h3>
                <p className="text-sm text-gray-400 mb-4">Predice resultados exactos, goleadores, tarjetas y más. Compite con amigos.</p>
                <div className="flex items-center gap-2 text-[#C9A84C]">
                  <span className="text-sm font-semibold">Probar ahora</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </div>

            {/* Card 2 - Fantasy con imagen real */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"/>
              <Link href="/app/fantasy" className="block relative p-6 rounded-2xl border border-white/10 bg-[#0B1825] hover:border-blue-500/40 transition-all duration-300 h-full">
                <div className="aspect-video rounded-xl mb-4 overflow-hidden relative border border-blue-500/20">
                  <img 
                    src="/img/zonamundial-images/imagenes/alineacion fantasy.jpeg" 
                    alt="Fantasy - Alineación"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1825] via-transparent to-transparent opacity-80"/>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="text-2xl">🏆</span>
                    <span className="text-xs font-bold text-white bg-blue-500/80 px-2 py-1 rounded-full">FANTASY</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Fantasy</h3>
                <p className="text-sm text-gray-400 mb-4">Arma tu equipo con presupuesto limitado. Escoge jugadores de las 48 selecciones.</p>
                <div className="flex items-center gap-2 text-blue-400">
                  <span className="text-sm font-semibold">Crear equipo</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </div>

            {/* Card 3 - Trivia con imagen real */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"/>
              <Link href="/app/trivia" className="block relative p-6 rounded-2xl border border-white/10 bg-[#0B1825] hover:border-purple-500/40 transition-all duration-300 h-full">
                <div className="aspect-video rounded-xl mb-4 overflow-hidden relative border border-purple-500/20">
                  <img 
                    src="/img/zonamundial-images/imagenes/pregunta trivia para portada.jpeg" 
                    alt="Trivia - Preguntas"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1825] via-transparent to-transparent opacity-80"/>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    <span className="text-xs font-bold text-white bg-purple-500/80 px-2 py-1 rounded-full">TRIVIA</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Trivia Diaria</h3>
                <p className="text-sm text-gray-400 mb-4">Preguntas diarias sobre historia del Mundial. Gana puntos extra y sube en el ranking.</p>
                <div className="flex items-center gap-2 text-purple-400">
                  <span className="text-sm font-semibold">Jugar trivia</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </div>
          </div>

          {/* More features row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {icon: "📺", title: "Streaming", desc: "Con creadores en vivo", color: "#ef4444", href: "/app/streaming"},
              {icon: "🤖", title: "IA Coach", desc: "Análisis inteligente", color: "#22c55e", href: "/app/ia-coach"},
              {icon: "💬", title: "Chat", desc: "En tiempo real", color: "#3b82f6", href: "/app/chat"},
              {icon: "📊", title: "Rankings", desc: "Global y privados", color: "#f59e0b", href: "/app/rankings"},
            ].map((feature) => (
              <Link key={feature.title} href={feature.href} className="group p-4 rounded-xl border border-white/5 bg-[#0B1825]/50 hover:bg-[#0B1825] transition-all text-center">
                <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">{feature.icon}</span>
                <h4 className="text-sm font-bold text-white mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-500">{feature.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CREADORES ═══════ */}
      <section className="py-16 px-4" style={{background:BG3}}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 flex items-center justify-center border border-purple-500/20">
                <span className="text-2xl">🎥</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Con tus creadores favoritos</h2>
                <p className="text-sm text-gray-500">8 creadores de contenido futbolístico</p>
              </div>
            </div>
            <Link href="/creadores" className="text-[#C9A84C] text-sm font-semibold hover:underline">Ver todos →</Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CREATORS.map((c)=>[
              <Link key={c.slug} href="/creadores" className="group">
                <div className="p-4 rounded-xl border border-white/5 bg-[#0F1D32] hover:border-white/10 transition-all text-center">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <div className="w-full h-full rounded-full overflow-hidden border-2" style={{borderColor:c.color+"40",padding:2}}>
                      <img src={c.img} alt={c.name} className="w-full h-full object-cover rounded-full"/>
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-0.5">{c.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">{c.handle}</p>
                  <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold" style={{background:c.color+"15",color:c.color}}>
                    {c.followers}
                  </span>
                </div>
              </Link>
            ])}
          </div>
        </div>
      </section>

      {/* ═══════ EXPLORA LA PLATAFORMA ═══════ */}
      <section className="py-16 px-4" style={{background:BG}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A84C]/20 text-[#C9A84C] text-xs font-bold tracking-wider uppercase mb-4">
              Explora ZonaMundial
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Descubre todo lo que tenemos
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Navega por todas las secciones de nuestra plataforma y encuentra toda la información del Mundial 2026
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Grupos */}
            <Link href="/grupos" className="group p-6 rounded-2xl border border-white/5 bg-[#0F1D32] hover:border-[#C9A84C]/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">📊</span>
                </div>
                <span className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Los 12 Grupos</h3>
              <p className="text-sm text-gray-400 mb-3">Conoce los 12 grupos del Mundial 2026. 48 selecciones clasificadas.</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#C9A84C] font-semibold">Ver grupos</span>
              </div>
            </Link>

            {/* Selecciones */}
            <Link href="/selecciones" className="group p-6 rounded-2xl border border-white/5 bg-[#0F1D32] hover:border-[#C9A84C]/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/5 flex items-center justify-center border border-green-500/20 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">⚽</span>
                </div>
                <span className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">48 Selecciones</h3>
              <p className="text-sm text-gray-400 mb-3">Toda la información de cada selección: jugadores, historia y estadísticas.</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#C9A84C] font-semibold">Ver selecciones</span>
              </div>
            </Link>

            {/* Creadores */}
            <Link href="/creadores" className="group p-6 rounded-2xl border border-white/5 bg-[#0F1D32] hover:border-[#C9A84C]/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 flex items-center justify-center border border-purple-500/20 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🎥</span>
                </div>
                <span className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Creadores</h3>
              <p className="text-sm text-gray-400 mb-3">8 creadores de contenido futbolístico streaming durante el Mundial.</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#C9A84C] font-semibold">Ver creadores</span>
              </div>
            </Link>

            {/* Historia */}
            <Link href="/historia" className="group p-6 rounded-2xl border border-white/5 bg-[#0F1D32] hover:border-[#C9A84C]/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/5 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">📜</span>
                </div>
                <span className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Historia</h3>
              <p className="text-sm text-gray-400 mb-3">Desde Uruguay 1930 hasta Qatar 2022. Todos los campeones y momentos históricos.</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#C9A84C] font-semibold">Ver historia</span>
              </div>
            </Link>

            {/* Formato */}
            <Link href="/formato" className="group p-6 rounded-2xl border border-white/5 bg-[#0F1D32] hover:border-[#C9A84C]/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/5 flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">📐</span>
                </div>
                <span className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Formato 2026</h3>
              <p className="text-sm text-gray-400 mb-3">48 equipos, 12 grupos, dieciseisavos de final. Entiende cómo funciona.</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#C9A84C] font-semibold">Ver formato</span>
              </div>
            </Link>

            {/* Registro/Reglas del Juego */}
            <Link href="/registro" className="group p-6 rounded-2xl border border-[#C9A84C]/20 bg-gradient-to-br from-[#C9A84C]/10 to-transparent hover:border-[#C9A84C]/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A84C]/30 to-[#C9A84C]/10 flex items-center justify-center border border-[#C9A84C]/30 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🎯</span>
                </div>
                <span className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Únete Ahora</h3>
              <p className="text-sm text-gray-400 mb-3">Regístrate gratis y empieza a predecir. Compite con tus amigos.</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#C9A84C] font-semibold">Empezar gratis</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ CTA FINAL ═══════ */}
      <section className="py-16 px-4" style={{background:BG3}}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 sm:p-12 rounded-2xl border border-[#C9A84C]/20 bg-gradient-to-br from-[#C9A84C]/10 to-[#0F1D32] text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#C9A84C]/20 blur-[80px] rounded-full"/>
            <div className="relative z-10">
              <div className="text-5xl mb-4">🏆</div>
              <h2 className="text-3xl font-black text-white mb-3">¿Quién ganará el Mundial 2026?</h2>
              <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                Únete a la comunidad de ZonaMundial y demuestra quién sabe más de fútbol.
              </p>
              <Link href="/registro" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#E8D48B] text-[#030712] font-bold hover:shadow-lg transition-all">
                Registrarme gratis →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
