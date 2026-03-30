"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BG="#060B14",BG2="#0F1D32",BG3="#0B1825",GOLD="#c9a84c",GOLD2="#e8d48b",MID="#8a94b0",DIM="#6a7a9a",DARK="#4a5570";
const flagUrl=(c,w=80)=>c?`https://flagcdn.com/w${w}/${c}.png`:null;

const CATEGORIES=[
  {id:"all",label:"Todos",color:GOLD},
  {id:"analisis",label:"Análisis",color:"#3b82f6"},
  {id:"datos",label:"Datos & Stats",color:"#22c55e"},
  {id:"historia",label:"Historia",color:"#f59e0b"},
  {id:"sedes",label:"Sedes",color:"#e879f9"},
  {id:"selecciones",label:"Selecciones",color:"#ef4444"},
  {id:"plataforma",label:"Plataforma",color:"#06b6d4"},
];

const POSTS=[
  {id:100,title:"¡BOMBA! Rodrygo Goes se pierde el Mundial 2026",excerpt:"El delantero del Real Madrid sufrió una grave lesión jugando ante el Getafe. Rotura del menisco y del ligamento cruzado anterior de la rodilla derecha. Tendrá 8 meses de recuperación y se pierde el sueño de jugar con Brasil.",cat:"selecciones",date:"2026-03-02",readTime:4,flags:["br"],featured:true,img:"linear-gradient(135deg,#ef444420,#0F1D32)",realImage:"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2264605162.jpg?q=w_1160,c_fill/f_webp",imageCaption:"Rodrygo Goes durante un partido con el Real Madrid",imageSource:"Getty Images vía CNN"},
  {id:101,title:"Neymar podría volver a la Canarinha por la lesión de Rodrygo",excerpt:"La ausencia de Rodrygo abre una ventana para el regreso de Neymar. El astro del Santos viene de marcar un doblete en el Brasileirao y Ancelotti podría reconsiderar su convocatoria.",cat:"selecciones",date:"2026-03-04",readTime:5,flags:["br"],featured:true,img:"linear-gradient(135deg,#22c55e20,#0F1D32)",realImage:"https://images.ctfassets.net/3mv54pzvptwz/7Jj4ryLGJazS8pDUlCK2Vg/10b71577e0270c8158d669b5fca17aa9/54331642772_05fa9ffe6b_o_dentro.jpg",imageCaption:"Neymar Jr. durante un partido con el Santos",imageSource:"FIFA via Getty Images"},
  {id:102,title:"Zinedine Zidane será el DT de Francia después del Mundial 2026",excerpt:"El presidente de la Federación Francesa confirmó que ya tienen elegido al sucesor de Didier Deschamps. Zidane tomará las riendas tras la Copa del Mundo. ¿El último baile de Deschamps con Les Bleus?",cat:"selecciones",date:"2026-03-23",readTime:6,flags:["fr"],featured:true,img:"linear-gradient(135deg,#3b82f620,#0F1D32)",realImage:"https://blob.postadeportes.com/images/2026/03/23/zinedine-zidane-ya-tiene-fecha-para-dirigir-a-francia-97eaf274-focus-0.2-0.41-1479-828.webp",imageCaption:"Zinedine Zidane",imageSource:"Posta Deportes"},
  {id:103,title:"Cristiano Ronaldo se recupera en Madrid: 'Mejorando cada día'",excerpt:"El astro portugués no pudo decir presente en los amistosos de marzo y se recupera en Madrid de su lesión. A sus 41 años, el Bicho busca llegar en forma al Mundial 2026, lo que podría ser su última cita mundialista.",cat:"selecciones",date:"2026-03-24",readTime:5,flags:["pt"],featured:false,img:"linear-gradient(135deg,#ef444420,#0F1D32)",realImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/800px-Cristiano_Ronaldo_2018.jpg",imageCaption:"Cristiano Ronaldo con Portugal en 2018",imageSource:"Wikimedia Commons"},
  {id:104,title:"Messi jugará el Mundial 'en casa' en Estados Unidos",excerpt:"El crack argentino reside en Miami desde hace 3 años y jugará el Mundial en territorio norteamericano. Inter Miami no dará descanso a Leo previo al torneo, según confirmó Javier Mascherano.",cat:"selecciones",date:"2026-03-22",readTime:4,flags:["ar","us"],featured:true,img:"linear-gradient(135deg,#3b82f620,#0F1D32)",realImage:"https://media.elcomercio.com/wp-content/uploads/2025/12/lionel-messi-2-1024x683.jpg",imageCaption:"Lionel Messi con el Inter de Miami",imageSource:"El Comercio"},
  {id:105,title:"Jordania hace historia: debutará en un Mundial",excerpt:"Los árabes llegan al Mundial 2026 en el mejor momento de su historia futbolística. Clasificaron por primera vez tras un proyecto que comenzó en 2002. Enfrentarán a Argentina en su debut.",cat:"selecciones",date:"2026-03-25",readTime:5,flags:["jo","ar"],featured:false,img:"linear-gradient(135deg,#22c55e20,#0F1D32)",realImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Jordan_national_football_team.jpg/800px-Jordan_national_football_team.jpg",imageCaption:"Selección de Jordania",imageSource:"Wikimedia Commons"},
];

const MONTHS_ES={"01":"Ene","02":"Feb","03":"Mar","04":"Abr","05":"May","06":"Jun","07":"Jul"};
const fmtBlogDate=(d)=>{const p=d.split("-");return`${parseInt(p[2])} ${MONTHS_ES[p[1]]} ${p[0]}`};

function AnimatedBadge({children,color}: {children: React.ReactNode; color: string}) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold" 
      style={{background:`${color}15`,color:color,border:`1px solid ${color}30`}}>
      {children}
    </span>
  );
}

function FeaturedCard({post,onClick,index}: {post: typeof POSTS[0]; onClick: (p: typeof POSTS[0]) => void; index: number}) {
  const cat=CATEGORIES.find(c=>c.id===post.cat);
  const cardRef=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    if(!cardRef.current)return;
    gsap.fromTo(cardRef.current,
      {y:60,opacity:0,scale:0.95},
      {y:0,opacity:1,scale:1,duration:0.8,delay:index*0.15,ease:"power3.out",
        scrollTrigger:{trigger:cardRef.current,start:"top 85%",once:true}
      }
    );
  },[index]);

  return (
    <div ref={cardRef} onClick={()=>onClick(post)} className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-3xl border border-white/5 hover:border-[var(--cat-color)]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        style={{"--cat-color":cat?.color} as React.CSSProperties}>
        <div className="absolute inset-0" style={post.realImage?{backgroundImage:`url(${post.realImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:post.img}}/>
        <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/70 to-transparent"/>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--cat-color)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
        <div className="relative p-8 min-h-[280px] flex flex-col justify-end">
          <div className="flex items-center gap-3 mb-4">
            {post.flags.length>0&&(
              <div className="flex gap-1.5">
                {post.flags.slice(0,5).map(f=>
                  <img key={f} src={flagUrl(f,40)} alt="" className="w-6 h-4 rounded object-cover shadow-lg border border-white/10"/>
                )}
              </div>
            )}
            <AnimatedBadge color={cat?.color||GOLD}>{cat?.label}</AnimatedBadge>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 group-hover:text-[#C9A84C] transition-colors leading-tight">{post.title}</h3>
          <p className="text-sm text-[#8a94b0] mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center gap-3 text-xs text-[#6a7a9a]">
            <span>{fmtBlogDate(post.date)}</span>
            <span className="w-1 h-1 rounded-full bg-[#6a7a9a]"/>
            <span>{post.readTime} min lectura</span>
          </div>
          {post.imageCaption&&(
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-[10px] text-[#4a5570] italic">{post.imageCaption}</p>
              {post.imageSource&&<p className="text-[9px] text-[#4a5570] mt-1">Fuente: {post.imageSource}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ArticleCard({post,onClick,index}: {post: typeof POSTS[0]; onClick: (p: typeof POSTS[0]) => void; index: number}) {
  const cat=CATEGORIES.find(c=>c.id===post.cat);
  const cardRef=useRef<HTMLDivElement>(null);
  const [hov,setHov]=useState(false);

  useEffect(()=>{
    if(!cardRef.current)return;
    gsap.fromTo(cardRef.current,
      {y:40,opacity:0},
      {y:0,opacity:1,duration:0.6,delay:index*0.08,ease:"power2.out",
        scrollTrigger:{trigger:cardRef.current,start:"top 90%",once:true}
      }
    );
  },[index]);

  return (
    <div ref={cardRef} onClick={()=>onClick(post)} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      className="group cursor-pointer">
      <div className="relative p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
        style={{background:hov?`${cat?.color}08`:BG2,borderColor:hov?`${cat?.color}40`:"rgba(255,255,255,0.04)"}}>
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold" 
            style={{background:`${cat?.color}15`,color:cat?.color}}>{cat?.label}</span>
          {post.flags.slice(0,3).map(f=><img key={f} src={flagUrl(f,30)} alt="" className="w-4 h-3 rounded object-cover"/>)}
          <span className="text-[10px] text-[#4a5570] ml-auto">{post.readTime} min</span>
        </div>
        <h3 className="text-base font-bold mb-2 transition-colors" style={{color:hov?GOLD:"#fff"}}>{post.title}</h3>
        <p className="text-xs text-[#6a7a9a] line-clamp-2">{post.excerpt}</p>
        <div className="text-[10px] text-[#4a5570] mt-3">{fmtBlogDate(post.date)}</div>
      </div>
    </div>
  );
}

function PostDetail({post,onBack}: {post: typeof POSTS[0]; onBack: () => void}) {
  const cat=CATEGORIES.find(c=>c.id===post.cat);
  const containerRef=useRef<HTMLDivElement>(null);
  const related=POSTS.filter(p=>p.id!==post.id&&(p.cat===post.cat||p.flags.some(f=>post.flags.includes(f)))).slice(0,3);

  useEffect(()=>{
    if(!containerRef.current)return;
    gsap.fromTo(containerRef.current,
      {opacity:0,y:30},
      {opacity:1,y:0,duration:0.6,ease:"power3.out"}
    );
  },[post.id]);

  return(
    <div ref={containerRef} className="max-w-3xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-[#C9A84C] text-sm font-semibold mb-6 hover:gap-3 transition-all">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Volver al blog
      </button>

      <div className="flex items-center gap-3 mb-6">
        <AnimatedBadge color={cat?.color||GOLD}>{cat?.label}</AnimatedBadge>
        <span className="text-sm text-[#4a5570]">{fmtBlogDate(post.date)}</span>
        <span className="text-[#4a5570]">·</span>
        <span className="text-sm text-[#4a5570]">{post.readTime} min lectura</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-black mb-6 leading-tight">{post.title}</h1>

      {post.realImage&&(
        <div className="mb-6 rounded-2xl overflow-hidden border border-white/10">
          <img src={post.realImage} alt={post.title} className="w-full h-auto max-h-[400px] object-cover"/>
          {post.imageCaption&&(
            <div className="p-3 bg-[#0B1825] border-t border-white/5">
              <p className="text-xs text-[#6a7a9a] italic">{post.imageCaption}</p>
              {post.imageSource&&<p className="text-[10px] text-[#4a5570] mt-1">Fuente: {post.imageSource}</p>}
            </div>
          )}
        </div>
      )}

      {post.flags.length>0&&(
        <div className="flex gap-2 mb-8">
          {post.flags.map(f=><img key={f} src={flagUrl(f,80)} alt="" className="w-10 h-7 rounded object-cover shadow-lg border border-white/10"/>)}
        </div>
      )}

      <div className="p-8 rounded-2xl bg-[#0F1D32] border border-white/5 mb-8">
        <p className="text-[#d0d4de] text-lg leading-relaxed mb-6">{post.excerpt}</p>
        <div className="h-px bg-white/5 my-6"/>
        <p className="text-[#8a94b0] leading-relaxed">Este artículo completo estará disponible cuando la plataforma se lance en abril 2026. Pre-regístrate para no perderte ninguna publicación.</p>
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#c9a84c]/10 to-transparent border border-[#c9a84c]/20 text-center">
          <p className="text-sm text-[#8a94b0] mb-4">¿Quieres recibir artículos como este?</p>
          <Link href="/registro" className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-[#c9a84c] to-[#e8d48b] text-[#060B14] font-bold text-sm hover:shadow-lg hover:shadow-[#c9a84c]/25 transition-all">
            Pre-regístrate gratis
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs text-[#6a7a9a]">Compartir:</span>
        {["Twitter","WhatsApp","Copiar"].map(s=>(
          <button key={s} className="px-4 py-2 rounded-lg text-xs font-semibold border border-[#c9a84c]/20 bg-[#c9a84c]/5 text-[#c9a84c] hover:bg-[#c9a84c]/10 hover:border-[#c9a84c]/30 transition-all">{s}</button>
        ))}
      </div>

      {related.length>0&&(
        <div>
          <h3 className="text-lg font-bold mb-4">Artículos relacionados</h3>
          <div className="flex flex-col gap-3">
            {related.map(r=>{
              const rc=CATEGORIES.find(c=>c.id===r.cat);
              return(
                <div key={r.id} onClick={()=>onBack()} className="flex items-center gap-3 p-4 rounded-xl bg-[#0F1D32] border border-white/5 hover:border-[#c9a84c]/20 cursor-pointer transition-all">
                  <span className="px-2 py-1 rounded text-[10px] font-bold" style={{background:`${rc?.color}15`,color:rc?.color}}>{rc?.label}</span>
                  <span className="flex-1 text-sm font-semibold truncate">{r.title}</span>
                  <span className="text-[10px] text-[#4a5570]">{r.readTime} min</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function NoticiasPage() {
  const [cat,setCat]=useState("all");
  const [selectedPost,setSelectedPost]=useState<typeof POSTS[0]|null>(null);
  const heroRef=useRef<HTMLDivElement>(null);
  const categoriesRef=useRef<HTMLDivElement>(null);
  const gridRef=useRef<HTMLDivElement>(null);

  const filtered=cat==="all"?POSTS:POSTS.filter(p=>p.cat===cat);
  const featured=filtered.filter(p=>p.featured);
  const regular=filtered.filter(p=>!p.featured);

  useEffect(()=>{
    if(!heroRef.current)return;
    gsap.fromTo(heroRef.current.children,
      {y:40,opacity:0},
      {y:0,opacity:1,duration:0.8,stagger:0.1,ease:"power3.out"}
    );
  },[]);

  useEffect(()=>{
    if(!categoriesRef.current)return;
    gsap.fromTo(categoriesRef.current.children,
      {y:20,opacity:0},
      {y:0,opacity:1,duration:0.4,stagger:0.05,ease:"power2.out",
        scrollTrigger:{trigger:categoriesRef.current,start:"top 90%",once:true}
      }
    );
  },[]);

  return (
    <div className="min-h-screen" style={{background:BG,color:"#fff",fontFamily:"'Outfit',sans-serif"}}>
      <div className="max-w-6xl mx-auto px-4 pt-0 pb-12 sm:pb-16">
        {selectedPost?(
          <PostDetail post={selectedPost} onBack={()=>setSelectedPost(null)}/>
        ):(
          <>
            <div ref={heroRef} className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse"/>
                <span className="text-[#c9a84c] text-xs font-bold tracking-wider uppercase">Blog & Noticias</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Todo sobre el<br/>
                <span className="bg-gradient-to-r from-[#c9a84c] via-[#e8d48b] to-[#c9a84c] bg-clip-text text-transparent">Mundial 2026</span>
              </h1>
              <p className="text-lg text-[#8a94b0] max-w-xl leading-relaxed">
                Análisis, datos, historia y guías para vivir la Copa del Mundo como un experto.
              </p>
            </div>

            <div ref={categoriesRef} className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
              {CATEGORIES.map(c=>(
                <button key={c.id} onClick={()=>setCat(c.id)}
                  className="px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300"
                  style={{
                    background:cat===c.id?`${c.color}15`:"transparent",
                    border:`1px solid ${cat===c.id?`${c.color}40`:"rgba(255,255,255,0.05)"}`,
                    color:cat===c.id?c.color:DIM
                  }}>
                  {c.label}
                </button>
              ))}
            </div>

            {featured.length>0&&(
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                {featured.map((p,i)=><FeaturedCard key={p.id} post={p} onClick={setSelectedPost} index={i}/>)}
              </div>
            )}

            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {regular.map((p,i)=><ArticleCard key={p.id} post={p} onClick={setSelectedPost} index={i}/>)}
            </div>

            {filtered.length===0&&(
              <div className="text-center py-20 text-[#6a7a9a]">No hay artículos en esta categoría aún.</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}