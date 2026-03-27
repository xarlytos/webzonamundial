// src/app/page.tsx
// ZonaMundial.app — Home Page con GSAP Animations

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { FeatureIcon } from "@/components/FeatureIcon";
import { useGSAPAnimations, useHoverAnimation, useMagneticButton } from "@/hooks/useGSAPAnimations";
import { GoldParticles } from "@/components/GoldParticles";
import { LuxuryBallBanner } from "@/components/LuxuryBallBanner";
import { ShimmerCard } from "@/components/ShimmerCard";
import { RippleButton } from "@/components/RippleButton";
import { FloatingElements } from "@/components/FloatingElements";

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
  {icon:"/img/zonamundial-images/imagenes/logos para sustuir emojis/match center.png",title:"Match Center",desc:"104 partidos en vivo con stats, alineaciones y eventos minuto a minuto", color: "#c9a84c"},
  {icon:"/img/zonamundial-images/imagenes/logos para sustuir emojis/predicciones.png",title:"Predicciones",desc:"8 tipos: resultado exacto, goleador, tarjetas, corners, MVP y más", color: "#ef4444"},
  {icon:"/img/zonamundial-images/imagenes/logos para sustuir emojis/fantasy.png",title:"Fantasy",desc:"Arma tu 11 ideal con presupuesto limitado. Puntos reales, ranking global", color: "#3b82f6"},
  {icon:"/img/zonamundial-images/imagenes/logos para sustuir emojis/ia coach.png",title:"IA Coach",desc:"Analista personal con inteligencia artificial — tácticas y recomendaciones", color: "#22c55e"},
  {icon:"/img/zonamundial-images/imagenes/logos para sustuir emojis/streaming.png",title:"Zona Streaming",desc:"Directos con creadores durante los partidos. Reacciones en vivo", color: "#f97316"},
  {icon:"/img/zonamundial-images/imagenes/logos para sustuir emojis/trivia.png",title:"Trivia Diaria",desc:"Preguntas diarias de fútbol — gana puntos extra y escala posiciones", color: "#a855f7"},
  {icon:"/img/zonamundial-images/imagenes/logos para sustuir emojis/modo carrera.png",title:"Modo Carrera",desc:"Dirige una selección durante todo el torneo como DT virtual", color: "#ec4899"},
  {icon:"/img/zonamundial-images/imagenes/logos para sustuir emojis/ligas privadas.png",title:"Ligas Privadas",desc:"Crea ligas con amigos, compañeros o tu comunidad favorita", color: "#14b8a6"},
  {icon:"/img/zonamundial-images/imagenes/logos para sustuir emojis/ranking.png",title:"Rankings",desc:"Global, por país, por creador — demuestra quién sabe más de fútbol", color: "#f59e0b"},
  {icon:"/img/zonamundial-images/imagenes/logos para sustuir emojis/chat en vivo.png",title:"Chat en Vivo",desc:"Chat en tiempo real con tu liga durante cada partido", color: "#6366f1"},
  {icon:"/img/zonamundial-images/imagenes/logos para sustuir emojis/micro-predicciones.png",title:"Micro-predicciones",desc:"Predicciones en directo: próximo gol, corner, tarjeta, cambio", color: "#dc2626"},
  {icon:"/img/zonamundial-images/imagenes/logos para sustuir emojis/stories.png",title:"Stories",desc:"Contenido editorial diario: datos, análisis y curiosidades", color: "#8b5cf6"},
];

const SPONSORS = [
  { name: "Patrocinador 1", img: "/img/sponsors/sponsor-1.png" },
  { name: "Patrocinador 2", img: "/img/sponsors/sponsor-2.png" },
  { name: "Patrocinador 3", img: "/img/sponsors/sponsor-3.png" },
  { name: "Patrocinador 4", img: "/img/sponsors/sponsor-4.png" },
  { name: "Patrocinador 5", img: "/img/sponsors/sponsor-5.png" },
  { name: "Patrocinador 6", img: "/img/sponsors/sponsor-6.png" },
  { name: "Patrocinador 7", img: "/img/sponsors/sponsor-7.png" },
  { name: "Patrocinador 8", img: "/img/sponsors/sponsor-8.png" },
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

const BG="#060B14",BG2="#0F1D32",BG3="#0B1825",GOLD="#c9a84c",GOLD2="#e8d48b",MID="#8a94b0",DIM="#6a7a9a";

const Flag=({code,w=20}: {code: string | null, w?: number})=>code?<img src={`https://flagcdn.com/w${w}/${code}.png`} alt="" style={{width:w,height:Math.round(w*0.67),borderRadius:2,objectFit:"cover"}} loading="lazy"/>:<div style={{width:w,height:Math.round(w*0.67),borderRadius:2,background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:6,color:DIM}}>?</span></div>;

function useCountdown(target: string){
  const[t,setT]=useState({d:0,h:0,m:0,s:0});
  useEffect(()=>{const c=()=>{const diff=Math.max(0,+new Date(target)-+Date.now());setT({d:Math.floor(diff/864e5),h:Math.floor(diff%864e5/36e5),m:Math.floor(diff%36e5/6e4),s:Math.floor(diff%6e4/1e3)})};c();const i=setInterval(c,1000);return()=>clearInterval(i)},[target]);
  return t;
}

// Animated Counter Component
function AnimatedCounter({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center group cursor-default">
      <div className="text-3xl sm:text-4xl font-black text-[#C9A84C] mb-1 group-hover:scale-110 transition-transform duration-300">
        <span className="stat-number" data-value={value}>{value}</span>
      </div>
      <div className="text-xs sm:text-sm text-gray-400 font-medium">{label}</div>
    </div>
  );
}

// Magnetic Button Component con Ripple
function MagneticButton({ children, href, variant = "primary" }: { children: React.ReactNode; href: string; variant?: "primary" | "secondary" }) {
  const buttonRef = useMagneticButton();
  
  const baseClasses = "relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 overflow-hidden";
  const variantClasses = variant === "primary" 
    ? "bg-gradient-to-r from-[#C9A84C] to-[#E8D48B] text-[#030712] hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] hover:scale-105"
    : "border-2 border-[#C9A84C]/30 text-[#C9A84C] hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]/60 hover:scale-105";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 10;
    `;
    
    button.appendChild(ripple);

    gsap.to(ripple, {
      width: 500,
      height: 500,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => ripple.remove()
    });
  };

  return (
    <Link href={href}>
      <button ref={buttonRef} className={`${baseClasses} ${variantClasses}`} onClick={handleClick}>
        {children}
      </button>
    </Link>
  );
}

// Feature Card with hover animation y shimmer
function FeatureCard({ module, index }: { module: typeof MODULES[0]; index: number }) {
  const cardRef = useHoverAnimation();
  const shimmerRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!shimmerRef.current || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    gsap.to(shimmerRef.current, {
      x: x - 100,
      y: y - 100,
      duration: 0.3,
      ease: "power2.out"
    });
  };
  
  const handleMouseEnter = () => {
    if (!shimmerRef.current) return;
    gsap.to(shimmerRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3
    });
  };
  
  const handleMouseLeave = () => {
    if (!shimmerRef.current) return;
    gsap.to(shimmerRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3
    });
  };
  
  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="feature-card relative p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-[#0F1D32] to-[#0B1825] hover:border-[#C9A84C]/30 transition-all duration-500 group cursor-pointer overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Efecto shimmer dorado */}
      <div
        ref={shimmerRef}
        className="absolute w-[200px] h-[200px] rounded-full pointer-events-none opacity-0"
        style={{
          background: "radial-gradient(circle, rgba(201, 168, 76, 0.5) 0%, rgba(201, 168, 76, 0.2) 40%, transparent 70%)",
          filter: "blur(30px)",
          transform: "translate(-50%, -50%) scale(0.5)"
        }}
      />
      
      <div className="mb-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
        <div className="relative float-animation">
          <img src={module.icon} alt={module.title} className="w-14 h-14 object-contain" />
        </div>
      </div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#C9A84C] transition-colors">{module.title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{module.desc}</p>
      <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <span className="text-xs font-semibold" style={{ color: module.color }}>Explorar</span>
        <span style={{ color: module.color }}>→</span>
      </div>
    </div>
  );
}

export default function HomePage(){
  const cd=useCountdown("2026-06-11T00:00:00-05:00");
  const { heroRef, statsRef, featuresRef, cardsRef, creatorsRef, ctaRef } = useGSAPAnimations();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const lines = titleRef.current.querySelectorAll('.hero-title-line');
      gsap.fromTo(lines, 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power3.out",
          delay: 0.5
        }
      );
    }
  }, []);

  return(
    <div style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif",minHeight:"100vh"}} className="relative overflow-hidden">
      <GoldParticles />
      
      {/* ═══════ HERO CON VIDEO LOGO ═══════ */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-20 overflow-hidden">
        {/* Animated Background gradients */}
        <div className="absolute inset-0 parallax-slow" style={{background:`linear-gradient(170deg, ${BG2} 0%, ${BG} 50%, #0a0f1a 100%)`}}/>
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse at 30% 20%, rgba(201,168,76,0.15) 0%, transparent 50%)"}}/>
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse at 70% 80%, rgba(0,180,220,0.05) 0%, transparent 40%)"}}/>
        
        {/* Animated Field pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none parallax-slow" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <rect x="50" y="50" width="1100" height="700" fill="none" stroke="#c9a84c" strokeWidth="2"/>
          <line x1="600" y1="50" x2="600" y2="750" stroke="#c9a84c" strokeWidth="2"/>
          <circle cx="600" cy="400" r="91.5" fill="none" stroke="#c9a84c" strokeWidth="2"/>
          <circle cx="600" cy="400" r="3" fill="#c9a84c"/>
          <rect x="50" y="244" width="165" height="312" fill="none" stroke="#c9a84c" strokeWidth="2"/>
          <rect x="985" y="244" width="165" height="312" fill="none" stroke="#c9a84c" strokeWidth="2"/>
        </svg>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C9A84C]/10 rounded-full blur-[100px] animate-pulse"/>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] animate-pulse" style={{animationDelay: "1s"}}/>

        {/* Floating Elements */}
        <FloatingElements />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="gsap-hero-item inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/5 mb-8 hover:bg-[#C9A84C]/10 transition-all cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9A84C] animate-pulse"/>
            <span className="text-[#C9A84C] text-xs font-bold tracking-wider uppercase">
              Copa del Mundo 2026 · EE.UU. · México · Canadá
            </span>
          </div>

          {/* Title con animación GSAP */}
          <h1 
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight"
          >
            <span className="hero-title-line block">Vive el Mundial</span>
            <span className="hero-title-line block text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] via-[#E8D48B] to-[#C9A84C] animate-gradient">
              como nunca antes
            </span>
          </h1>

          {/* VIDEO LOGO */}
          <div className="gsap-hero-item mb-8 flex justify-center">
            <div className="relative rounded-full overflow-hidden shadow-[0_0_80px_rgba(201,168,76,0.4)] hover:shadow-[0_0_120px_rgba(201,168,76,0.6)] transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-[#C9A84C]/20 to-transparent z-10"/>
              <video
                src="/img/zonamundial-images/video logo dando vueltas.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[320px] h-auto block"
                style={{mixBlendMode:"screen"}}
              />
            </div>
          </div>

          <p className="gsap-hero-item text-xl text-[#8a94b0] max-w-2xl mx-auto mb-10 leading-relaxed">
            Predicciones · Fantasy · IA Coach · Trivia · Streaming con creadores
          </p>

          {/* Countdown */}
          <div className="gsap-hero-item flex justify-center gap-3 sm:gap-5 mb-10">
            {[{v:cd.d,l:"DÍAS"},{v:cd.h,l:"HORAS"},{v:cd.m,l:"MIN"},{v:cd.s,l:"SEG"}].map((u, i)=>[
              <div key={u.l} className="text-center group">
                <div className="relative w-[70px] sm:w-[85px] h-[70px] sm:h-[85px] rounded-2xl bg-gradient-to-br from-[#0F1D32] to-[#0B1825] border border-[#C9A84C]/20 flex items-center justify-center shadow-lg group-hover:border-[#C9A84C]/50 group-hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-all duration-300">
                  <span className="text-3xl sm:text-4xl font-black text-[#C9A84C] tabular-nums group-hover:scale-110 transition-transform">
                    {String(u.v).padStart(2,"0")}
                  </span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                </div>
                <span className="text-[11px] text-gray-500 font-semibold mt-3 block tracking-widest">{u.l}</span>
              </div>
            ])}
          </div>

          {/* CTAs */}
          <div className="gsap-hero-item flex flex-wrap justify-center gap-4">
            <MagneticButton href="/registro" variant="primary">
              Pre-regístrate gratis
            </MagneticButton>
            <MagneticButton href="/selecciones" variant="secondary">
              Explorar selecciones →
            </MagneticButton>
          </div>
        </div>

        {/* Luxury Ball Background - Parabolic Motion */}
        <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
          <div className="relative w-full h-full">
            <LuxuryBallBanner />
          </div>
        </div>
      </section>

      {/* ═══════ STATS BAR ═══════ */}
      <section ref={statsRef} className="relative border-y border-white/5 bg-[#0B1825] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/5 via-transparent to-[#C9A84C]/5"/>
        <div className="max-w-6xl mx-auto px-4 py-10 relative">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
            <AnimatedCounter value={48} label="Selecciones" />
            <AnimatedCounter value={16} label="Sedes" />
            <AnimatedCounter value={104} label="Partidos" />
            <AnimatedCounter value={12} label="Grupos" />
            <AnimatedCounter value={3} label="Países" />
            <AnimatedCounter value={12} label="Módulos" />
          </div>
        </div>
      </section>

      {/* ═══════ DESCUBRE LA APP ═══════ */}
      <section className="py-24 px-4 relative overflow-hidden" style={{background:BG2}}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#C9A84C]/5 blur-[180px] rounded-full pointer-events-none"/>

        <div ref={cardsRef} className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-bold tracking-wider uppercase mb-6">
              Explora la Plataforma
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
              La App del Mundial 2026
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Descubre todas las funcionalidades que hemos preparado para que vivas el Mundial como nunca antes
            </p>
          </div>

          {/* Why we are the perfect app */}
          <div className="relative mb-14 rounded-3xl border border-[#C9A84C]/20 bg-gradient-to-br from-[#0B1825] to-[#0F1D32] overflow-hidden p-10 sm:p-14">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 via-transparent to-blue-900/10 pointer-events-none"/>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <p className="text-[#C9A84C] text-sm font-bold tracking-widest uppercase mb-6">Por qué somos diferentes</p>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
                La app perfecta para los <span className="text-[#C9A84C]">amantes del fútbol</span> y el Mundial 2026
              </h3>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10">
                En ZonaMundial reunimos todo lo que un verdadero fanático del fútbol necesita en un solo lugar. Hemos construido la plataforma más completa del mundo para que no te pierdas ni un solo detalle del torneo más grande del planeta. Predice resultados, arma tu equipo fantasy, compite en trivias históricas, sigue en vivo cada partido con nuestros creadores, y deja que nuestra IA analice el torneo por ti. No somos una app más: somos <span className="text-white font-bold">la experiencia definitiva del Mundial 2026</span>, diseñada por y para quienes viven el fútbol con pasión.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-[#C9A84C] text-2xl font-black mb-2">48</p>
                  <p className="text-white font-semibold mb-1">Selecciones</p>
                  <p className="text-gray-400 text-sm">Datos, plantillas y estadísticas de todos los equipos clasificados al Mundial.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-[#C9A84C] text-2xl font-black mb-2">100%</p>
                  <p className="text-white font-semibold mb-1">Fútbol puro</p>
                  <p className="text-gray-400 text-sm">Sin ruido, sin distracciones. Solo el Mundial y todo lo que lo rodea.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-[#C9A84C] text-2xl font-black mb-2">Todo en 1</p>
                  <p className="text-white font-semibold mb-1">Una sola plataforma</p>
                  <p className="text-gray-400 text-sm">Fantasy, predicciones, trivia, streaming, IA y mucho más, siempre a mano.</p>
                </div>
              </div>
            </div>
          </div>

          {/* More features row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              {iconTitle: "Zona Streaming", title: "Streaming", desc: "Con creadores en vivo", color: "#ef4444", href: "/app/streaming"},
              {iconTitle: "IA Coach", title: "IA Coach", desc: "Análisis inteligente", color: "#22c55e", href: "/app/ia-coach"},
              {iconTitle: "Chat en Vivo", title: "Chat", desc: "En tiempo real", color: "#3b82f6", href: "/app/chat"},
              {iconTitle: "Rankings", title: "Rankings", desc: "Global y privados", color: "#f59e0b", href: "/app/rankings"},
            ].map((feature) => (
              <Link key={feature.title} href={feature.href} className="group p-5 rounded-2xl border border-white/5 bg-[#0B1825]/50 hover:bg-[#0B1825] transition-all text-center hover:border-white/10">
                <div className="mb-3 flex justify-center">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300">
                    <FeatureIcon title={feature.iconTitle} size={32} />
                  </div>
                </div>
                <h4 className="text-base font-bold text-white mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-500">{feature.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURES CAROUSEL ═══════ */}
      <section ref={featuresRef} className="py-24 relative overflow-hidden" style={{background:BG}}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A84C]/5 blur-[150px] rounded-full pointer-events-none"/>

        {/* Header + texto */}
        <div className="max-w-5xl mx-auto px-4 text-center mb-16 relative">
          <span className="inline-block px-5 py-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-bold tracking-wider uppercase mb-6">
            12 módulos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Todo lo que necesitas
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Hemos creado una plataforma que va mucho más allá de ver partidos. Cada módulo está diseñado para que tu experiencia del Mundial 2026 sea única, competitiva y adictiva. Desde predicciones en tiempo real hasta tu propio equipo fantasy, pasando por trivias históricas y un coach de inteligencia artificial. <span className="text-[#C9A84C] font-semibold">Todo en un solo lugar, todo para ti.</span>
          </p>
        </div>

        {/* Carrusel fila 1 — izquierda */}
        <div className="relative mb-4 overflow-hidden">
          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-[#060B14] to-transparent z-10 pointer-events-none"/>
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-[#060B14] to-transparent z-10 pointer-events-none"/>
          <div className="flex gap-4" style={{ width:"max-content", animation:"carousel-left 45s linear infinite" }}>
            {[...MODULES, ...MODULES].map((m, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 group cursor-pointer"
              >
                <div
                  className="relative h-full p-5 rounded-2xl overflow-hidden transition-all duration-400"
                  style={{
                    background: `linear-gradient(135deg, ${m.color}0D 0%, #0B1825 60%)`,
                    border: `1px solid ${m.color}22`,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.border = `1px solid ${m.color}66`)}
                  onMouseLeave={e => (e.currentTarget.style.border = `1px solid ${m.color}22`)}
                >
                  {/* glow de fondo */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full blur-2xl opacity-20 pointer-events-none" style={{ background: m.color }}/>
                  {/* icono grande */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: `${m.color}1A`, boxShadow: `0 0 0 1px ${m.color}30` }}
                  >
                    <img src={m.icon} alt={m.title} className="w-10 h-10 object-contain drop-shadow-lg" />
                  </div>
                  <h3 className="text-white font-bold text-[15px] mb-2 leading-tight" style={{ transition:"color .2s" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = m.color)}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                  >{m.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
                  {/* línea inferior coloreada */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl opacity-50" style={{ background: `linear-gradient(90deg, ${m.color}, transparent)` }}/>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carrusel fila 2 — derecha */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-[#060B14] to-transparent z-10 pointer-events-none"/>
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-[#060B14] to-transparent z-10 pointer-events-none"/>
          <div className="flex gap-4" style={{ width:"max-content", animation:"carousel-right 52s linear infinite" }}>
            {[...MODULES.slice(4), ...MODULES, ...MODULES.slice(0, 4)].map((m, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 group cursor-pointer"
              >
                <div
                  className="relative h-full p-5 rounded-2xl overflow-hidden transition-all duration-400"
                  style={{
                    background: `linear-gradient(135deg, ${m.color}0D 0%, #0B1825 60%)`,
                    border: `1px solid ${m.color}22`,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.border = `1px solid ${m.color}66`)}
                  onMouseLeave={e => (e.currentTarget.style.border = `1px solid ${m.color}22`)}
                >
                  <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full blur-2xl opacity-20 pointer-events-none" style={{ background: m.color }}/>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: `${m.color}1A`, boxShadow: `0 0 0 1px ${m.color}30` }}
                  >
                    <img src={m.icon} alt={m.title} className="w-10 h-10 object-contain drop-shadow-lg" />
                  </div>
                  <h3 className="text-white font-bold text-[15px] mb-2 leading-tight" style={{ transition:"color .2s" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = m.color)}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                  >{m.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl opacity-50" style={{ background: `linear-gradient(90deg, ${m.color}, transparent)` }}/>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes carousel-left {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes carousel-right {
            0%   { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}</style>
      </section>

      {/* ═══════ AD SPACE 1 — carrusel patrocinadores ═══════ */}
      <div className="w-full border-y border-white/5 py-5 overflow-hidden relative" style={{background:"#07101C"}}>
        <div className="absolute left-0 top-0 w-28 h-full bg-gradient-to-r from-[#07101C] to-transparent z-10 pointer-events-none"/>
        <div className="absolute right-0 top-0 w-28 h-full bg-gradient-to-l from-[#07101C] to-transparent z-10 pointer-events-none"/>
        <p className="text-center text-[#C9A84C]/35 text-[10px] font-bold tracking-widest uppercase mb-4 select-none">Patrocinadores Oficiales</p>
        <div
          className="flex items-center gap-10"
          style={{ width: "max-content", animation: "sponsors-left 28s linear infinite" }}
        >
          {[...SPONSORS, ...SPONSORS].map((s, i) => (
            <div key={i} className="flex-shrink-0 w-36 h-16 rounded-xl border border-white/8 bg-[#0B1825] flex items-center justify-center px-4 hover:border-[#C9A84C]/40 transition-all duration-300 cursor-pointer group">
              <img
                src={s.img}
                alt={s.name}
                className="max-h-9 max-w-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  t.style.display = "none";
                  const p = t.nextElementSibling as HTMLElement | null;
                  if (p) p.style.display = "block";
                }}
              />
              <span className="text-white/30 text-xs font-bold hidden text-center leading-tight">{s.name}</span>
            </div>
          ))}
        </div>
        <style>{`@keyframes sponsors-left { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
      </div>

      {/* ═══════ CREADORES ═══════ */}
      <section ref={creatorsRef} className="py-24 px-4 relative" style={{background:BG3}}>
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none"/>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold tracking-wider uppercase mb-6">
              8 creadores de contenido
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Con tus creadores favoritos
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-4">
              El Mundial se vive mejor en compañía. Por eso hemos unido a los creadores de contenido futbolístico más grandes del mundo para que vivas cada partido a su lado. Directos, reacciones, análisis y debates en tiempo real con las personas que mejor entienden este deporte.
            </p>
            <p className="text-gray-400 text-base max-w-2xl mx-auto mb-8">
              Más de <span className="text-white font-semibold">12 millones de seguidores</span> combinados nos avalan. Únete a la comunidad y elige tu creador favorito para vivir el Mundial 2026 como nunca antes.
            </p>
            <Link href="/creadores" className="inline-flex items-center gap-2 text-purple-300 text-sm font-semibold hover:text-purple-200 transition-colors border border-purple-500/30 hover:border-purple-400/50 px-5 py-2.5 rounded-full bg-purple-500/10 hover:bg-purple-500/20">
              Ver todos los creadores →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {CREATORS.map((c) => (
              <Link key={c.slug} href="/creadores" className="creator-card group">
                <div className="p-5 rounded-2xl border border-white/5 bg-gradient-to-br from-[#0F1D32] to-[#0B1825] hover:border-white/15 transition-all duration-300 text-center hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C9A84C] via-[#E8D48B] to-[#C9A84C] p-[2px] group-hover:p-[3px] transition-all">
                      <div className="w-full h-full rounded-full overflow-hidden bg-[#0F1D32]">
                        <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#C9A84C] transition-colors">{c.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{c.handle}</p>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{background:c.color+"20",color:c.color}}>
                    {c.followers}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ AD SPACE 2 — carrusel patrocinadores ═══════ */}
      <div className="w-full border-y border-white/5 py-5 overflow-hidden relative" style={{background:"#07101C"}}>
        <div className="absolute left-0 top-0 w-28 h-full bg-gradient-to-r from-[#07101C] to-transparent z-10 pointer-events-none"/>
        <div className="absolute right-0 top-0 w-28 h-full bg-gradient-to-l from-[#07101C] to-transparent z-10 pointer-events-none"/>
        <p className="text-center text-[#C9A84C]/35 text-[10px] font-bold tracking-widest uppercase mb-4 select-none">Patrocinadores Oficiales</p>
        <div
          className="flex items-center gap-10"
          style={{ width: "max-content", animation: "sponsors-right 34s linear infinite" }}
        >
          {[...SPONSORS.slice(4), ...SPONSORS, ...SPONSORS.slice(0, 4)].map((s, i) => (
            <div key={i} className="flex-shrink-0 w-36 h-16 rounded-xl border border-white/8 bg-[#0B1825] flex items-center justify-center px-4 hover:border-[#C9A84C]/40 transition-all duration-300 cursor-pointer group">
              <img
                src={s.img}
                alt={s.name}
                className="max-h-9 max-w-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  t.style.display = "none";
                  const p = t.nextElementSibling as HTMLElement | null;
                  if (p) p.style.display = "block";
                }}
              />
              <span className="text-white/30 text-xs font-bold hidden text-center leading-tight">{s.name}</span>
            </div>
          ))}
        </div>
        <style>{`@keyframes sponsors-right { 0%{transform:translateX(-50%)} 100%{transform:translateX(0)} }`}</style>
      </div>

      {/* ═══════ EXPLORA LA PLATAFORMA ═══════ */}
      <section className="py-24 px-4 relative" style={{background:BG}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-5 py-2 rounded-full border border-[#C9A84C]/20 text-[#C9A84C] text-xs font-bold tracking-wider uppercase mb-6">
              Explora ZonaMundial
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Descubre todo lo que tenemos
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Navega por todas las secciones de nuestra plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title: "Los 12 Grupos", desc: "Conoce los 12 grupos del Mundial 2026", icon: "Los 12 Grupos", color: "#3b82f6", href: "/grupos"},
              {title: "48 Selecciones", desc: "Toda la información de cada selección", icon: "48 Selecciones", color: "#22c55e", href: "/selecciones"},
              {title: "Creadores", desc: "8 creadores de contenido futbolístico", icon: "Creadores", color: "#a855f7", href: "/creadores"},
              {title: "Historia", desc: "Desde Uruguay 1930 hasta Qatar 2022", icon: "Historia", color: "#f59e0b", href: "/historia"},
              {title: "Formato 2026", desc: "48 equipos, 12 grupos, dieciseisavos", icon: "Formato 2026", color: "#ef4444", href: "/formato"},
              {title: "Únete Ahora", desc: "Regístrate gratis y empieza a predecir", icon: "Únete Ahora", color: "#c9a84c", href: "/registro", featured: true},
            ].map((item) => (
              <Link key={item.title} href={item.href} className={`group p-7 rounded-3xl border transition-all duration-500 hover:-translate-y-1 ${item.featured ? 'border-[#C9A84C]/30 bg-gradient-to-br from-[#C9A84C]/10 to-[#0F1D32]' : 'border-white/5 bg-[#0F1D32] hover:border-[#C9A84C]/30'}`}>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110" style={{background: item.color + "15", borderColor: item.color + "30"}}>
                    <FeatureIcon title={item.icon} size={40} />
                  </div>
                  <span className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">→</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C9A84C] transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA FINAL ═══════ */}
      <section className="py-24 px-4 relative" style={{background:BG3}}>
        <div className="max-w-4xl mx-auto" ref={ctaRef}>
          <div className="relative p-10 sm:p-16 rounded-3xl border border-[#C9A84C]/20 bg-gradient-to-br from-[#C9A84C]/10 via-[#0F1D32] to-[#0B1825] text-center overflow-hidden group">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/5 via-transparent to-[#C9A84C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"/>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#C9A84C]/20 blur-[100px] rounded-full"/>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 float-animation">
                  <FeatureIcon title="Fantasy" size={56} />
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">¿Quién ganará el Mundial 2026?</h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
                Únete a la comunidad de ZonaMundial y demuestra quién sabe más de fútbol.
              </p>
              <MagneticButton href="/registro" variant="primary">
                Registrarme gratis →
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
