"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BG = "#060B14", BG2 = "#0F1D32", BG3 = "#0B1825", GOLD = "#c9a84c", GOLD2 = "#e8d48b", MID = "#8a94b0", DIM = "#6a7a9a", DARK = "#4a5570";

const CATEGORIES = [
  { id: "all",        label: "Todos",        color: GOLD },
  { id: "tactica",    label: "Táctica",      color: "#3b82f6" },
  { id: "jugadores",  label: "Jugadores",    color: "#22c55e" },
  { id: "curiosidades", label: "Curiosidades", color: "#f59e0b" },
  { id: "mundial2026", label: "Mundial 2026", color: "#e879f9" },
  { id: "estadisticas", label: "Estadísticas", color: "#ef4444" },
  { id: "opinion",    label: "Opinión",      color: "#06b6d4" },
];

type Post = {
  id: number;
  title: string;
  excerpt: string;
  body: string[];
  cat: string;
  date: string;
  readTime: number;
  author: string;
  authorRole: string;
  featured: boolean;
  img: string;
};

const POSTS: Post[] = [
  {
    id: 1,
    title: "El 4-3-3 de España y la presión alta: por qué pueden ganar el Mundial 2026",
    excerpt: "El sistema de Luis de la Fuente ha evolucionado hacia una presión ultraofensiva que recupera balones en zonas peligrosas para el rival. Analizamos sus mecanismos y por qué Norteamérica puede favorecer ese estilo.",
    body: [
      "La selección española llega al Mundial 2026 con uno de los sistemas tácticos más refinados de la competición. El 4-3-3 de Luis de la Fuente no es una reliquia del tiqui-taca: es un modelo mucho más vertical, intenso y directo en la búsqueda del arco rival.",
      "La clave está en los mediocentros. Pedri y Zubimendi forman un par complementario que combina la creatividad con el trabajo defensivo. Cuando España pierde el balón, los tres delanteros no retroceden: presionan inmediatamente, obligando al rival a jugar largo o cometer errores. Esta presión en campo contrario genera recuperaciones peligrosas a menos de 30 metros del arco.",
      "Los campos artificiales o híbridos del MetLife y el SoFi Stadium favorecen el toque rápido y el juego combinativo. Además, el calendario de la fase de grupos evita el calor extremo que históricamente ha penalizado a equipos europeos de posesión.",
      "La principal debilidad es la dependencia de Yamal como desequilibrador en banda derecha. Si el rival consigue neutralizarlo físicamente —como hizo Francia en semifinales de la Eurocopa 2024— España necesita encontrar soluciones alternativas.",
    ],
    cat: "tactica",
    date: "2026-04-14",
    readTime: 9,
    author: "Marcos Delgado",
    authorRole: "Analista Táctico",
    featured: true,
    img: "linear-gradient(135deg,#3b82f620,#0F1D32)",
  },
  {
    id: 2,
    title: "Kylian Mbappé: el peso de ser el mejor del mundo en un Mundial en casa... casi",
    excerpt: "Francia llega a Norteamérica con Mbappé como capitán y gran favorito individual. Repasamos su evolución táctica, sus stats internacionales y si el contexto del Mundial 2026 puede llevarle a su mejor versión.",
    body: [
      "Con 27 años en julio de 2026, Kylian Mbappé llega al Mundial en el pico absoluto de su carrera. Desde su llegada al Real Madrid en verano de 2024, ha añadido consistencia defensiva y liderazgo en el vestuario a una ya apabullante calidad técnica.",
      "Sus números con Francia son difíciles de ignorar: más de 50 goles en 90 internacionales, récord de goles en una sola Copa del Mundo para un jugador menor de 20 años (4 goles en Rusia 2018), y el tormento de la tanda de penaltis de Qatar 2022 que todavía le motiva.",
      "Didier Deschamps ha construido un equipo alrededor de su figura. El 4-2-3-1 coloca a Mbappé como mediapunta o extremo izquierdo con libertad para buscar el interior. Camavinga y Tchouaméni protegen la zona y liberan al 10 de responsabilidades defensivas.",
      "El reto es físico: el calendario del Mundial 2026 con potenciales siete partidos en cinco semanas exige una gestión de minutos que Francia deberá planificar desde la fase de grupos.",
    ],
    cat: "jugadores",
    date: "2026-04-12",
    readTime: 10,
    author: "Sofía Ramírez",
    authorRole: "Periodista Deportiva",
    featured: true,
    img: "linear-gradient(135deg,#22c55e20,#0F1D32)",
  },
  {
    id: 3,
    title: "48 equipos en el Mundial: ¿innovación necesaria o disolución del torneo?",
    excerpt: "La FIFA amplía el torneo a 48 selecciones por primera vez en la historia. Los argumentos a favor y en contra, qué significa para la calidad del juego y quién gana realmente con este formato.",
    body: [
      "El Mundial de 48 equipos es, ante todo, un negocio. La FIFA estima que el formato ampliado generará ingresos superiores a los 11 000 millones de dólares, un 40% más que Qatar 2022. Pero más allá del balance contable, ¿mejora el producto deportivo?",
      "Los defensores argumentan que incluir 16 selecciones adicionales democratiza el fútbol global. África pasará de 5 a 9 plazas, Asia de 4,5 a 8, CONCACAF de 3,5 a 6. Selecciones históricamente excluidas —Marruecos, Senegal, Japón en días buenos— tendrán más oportunidades de llegar lejos.",
      "Los críticos señalan que la fase de grupos de 3 equipos con un eliminado directo genera partidos de preparación sin narrativa real. Un grupo con Alemania, Panamá y Ruanda no tiene la intensidad de un grupo de cuatro donde todos se juegan algo hasta la última jornada.",
      "El dato más revelador: los últimos 8 Mundiales han sido ganados por solo 5 países (Brasil, Francia, Alemania, Italia, Argentina). Ampliar el torneo no cambia quién gana; cambia quién pierde en octavos de final.",
    ],
    cat: "opinion",
    date: "2026-04-10",
    readTime: 7,
    author: "Rodrigo Fuentes",
    authorRole: "Editor Jefe ZonaMundial",
    featured: true,
    img: "linear-gradient(135deg,#06b6d420,#0F1D32)",
  },
  {
    id: 4,
    title: "Erling Haaland y el dilema noruego: ¿puede un delantero llevar solo a su selección?",
    excerpt: "Noruega se clasifica por primera vez en 24 años gracias a los goles de Haaland. Pero el centro delantero del City llega al Mundial con la presión de ser un equipo de un solo hombre en un torneo que premia el colectivo.",
    body: [
      "La última vez que Noruega jugó un Mundial fue en Francia 1998, cuando Tore André Flo y Ole Gunnar Solskjær formaban la delantera. En 2026, el país escandinavo vuelve gracias a un solo jugador: Erling Haaland, que anotó 17 goles en la fase clasificatoria europea.",
      "El problema táctico es conocido. Sin Haaland, Noruega es un equipo de segunda categoría continental. Con él, los rivales montan un doble marcaje y eliminan su principal amenaza. El seleccionador Ståle Solbakken ha intentado diversificar el ataque incorporando a Sörloth como alternativa y dando más protagonismo a Odegaard desde el centro del campo.",
      "La historia de los Mundiales es escéptica con los equipos de un jugador. El Brasil de Ronaldo en 2006, la Argentina sin Messi en 2010... los equipos desequilibrados rara vez llegan a semifinales.",
      "Sin embargo, Haaland en forma puede decidir un partido individual. Si Noruega llega a cuartos con él al 100% y los dados del sorteo favorecen un enfrentamiento favorable, nada es imposible.",
    ],
    cat: "jugadores",
    date: "2026-04-08",
    readTime: 8,
    author: "Lars Eriksson",
    authorRole: "Corresponsal Europa",
    featured: false,
    img: "linear-gradient(135deg,#22c55e20,#0F1D32)",
  },
  {
    id: 5,
    title: "La máquina de presión del Bayern llega a Brasil: Flick y el 4-2-2-2 que confunde a todos",
    excerpt: "Alemania bajo Hansi Flick... no, bajo Julian Nagelsmann... no: bajo Julian Nagelsmann mejorado. El sistema gegenpressing alemán en 2026 y por qué sus sprints intensos a 35 grados en São Paulo podrían ser un problema.",
    body: [
      "Alemania llegó a Qatar 2022 sin pasar de grupos por segunda Copa del Mundo consecutiva. El traumatismo fue suficiente para reiniciar el proyecto desde cero. Julian Nagelsmann, con solo 36 años en el torneo, ha reconstruido el equipo alrededor de una generación nueva: Musiala, Wirtz, Gnabry y la defensa liderada por Schlotterbeck.",
      "El sistema es un 4-2-2-2 que en defensa se transforma en un 4-4-2 compacto. La clave son Wirtz y Musiala actuando como los dos mediapuntas interiores: rápidos, técnicos y con capacidad goleadora. Kimmich, ya con 31 años, gestiona el ritmo desde el centro.",
      "El gegenpressing —presión inmediata tras pérdida— funciona sobre el papel europeo. La duda es si es sostenible en las condiciones de calor y humedad de las sedes de CONCACAF: Ciudad de México, Los Ángeles, Dallas. Alemania históricamente rinde peor en torneos con calor extremo.",
      "Su historial en Mundiales habla solo: 4 títulos, pero el último en 2014. Doce años de sequía generan hambre. Esta generación nueva tiene calidad; la pregunta es si tiene consistencia en los momentos decisivos.",
    ],
    cat: "tactica",
    date: "2026-04-06",
    readTime: 8,
    author: "Marcos Delgado",
    authorRole: "Analista Táctico",
    featured: false,
    img: "linear-gradient(135deg,#3b82f620,#0F1D32)",
  },
  {
    id: 6,
    title: "Messi en su último baile: el 2026 que nadie esperaba y todos soñaban",
    excerpt: "Lionel Messi anunció que el Mundial 2026 será su último torneo internacional. Con 38 años y jugando en la MLS, el análisis de si su cuerpo y su mente pueden llevar a Argentina a una defensa histórica del título.",
    body: [
      "Cuando Lionel Messi levantó la Copa del Mundo en Lusail en diciembre de 2022, muchos pensaron que era el punto final perfecto. Él pensó diferente. En marzo de 2025, confirmó su participación en el Mundial 2026 con una frase que recorrió el mundo: 'Quiero jugar en casa. Norteamérica es donde vivo ahora.'",
      "Con 38 años y 10 meses el día de la final del Mundial 2026 (si Argentina llega), Messi sería el jugador de campo más mayor en disputar una final desde Cafu en 2002. Pero las comparaciones con otros veteranos no aplican: su juego nunca dependió de la velocidad, sino de la inteligencia táctica, la visión y la capacidad de aparición en momentos decisivos.",
      "Su temporada 2025-26 en el Inter Miami ha sido notable: 22 goles en 31 partidos de MLS, con el nivel físico gestionado sabiamente. El seleccionador Scaloni lo usa como mediapunta libre con menos responsabilidad defensiva, dejando que los demás —Di María retirado, ahora De Paul, Mac Allister, Enzo Fernández— lleven el trabajo sucio.",
      "La historia dirá que ningún jugador ganó dos Mundiales siendo el mejor jugador del torneo en ambos. Si Messi lo consigue, habrá redefinido los límites del fútbol.",
    ],
    cat: "jugadores",
    date: "2026-04-04",
    readTime: 11,
    author: "Sofía Ramírez",
    authorRole: "Periodista Deportiva",
    featured: false,
    img: "linear-gradient(135deg,#22c55e20,#0F1D32)",
  },
  {
    id: 7,
    title: "La maldición del tercer puesto: por qué el partido por el bronce destruye carreras",
    excerpt: "Desde 1974, el partido por el tercer y cuarto puesto del Mundial ha producido lesiones graves, expulsiones históricas y resultados extraños. La historia más oscura del torneo más grande.",
    body: [
      "El partido por el tercer puesto del Mundial existe desde 1930, cuando EE.UU. derrotó a Yugoslavia 3-1. Pero nadie lo recuerda. Lo que sí se recuerda es el Klose que se lesionó en 2010, la derrota de Brasil que precipitó el caos del Maracaná, o la rojísima que le costó el inicio de temporada a un jugador estrella en 1998.",
      "Los datos son elocuentes. El número de lesiones musculares en el partido por el tercer puesto es un 60% superior a la media del torneo. Los jugadores llegan agotados, sin motivación real, sabiendo que perdieron lo que querían. El esfuerzo adicional en ese estado es una receta perfecta para el desastre físico.",
      "Hay curiosidades extremas. En 1938, Brasil goleó a Suecia 4-2 en el partido del tercer puesto en el mismo día que Italia ganaba la final. En 1954, Austria derrotó a Uruguay 3-1 en lo que se considera el partido más olvidado de la historia. En 2014, Holanda ganó a Brasil 3-0 en un partido que todavía avergüenza al fútbol local.",
      "La FIFA ha discutido eliminar este partido varias veces. Los defensores argumentan que mantiene a cuatro selecciones hasta el final. Los detractores responden que un partido sin significado real no debería existir en el torneo más importante del mundo.",
    ],
    cat: "curiosidades",
    date: "2026-04-02",
    readTime: 7,
    author: "Ignacio Herrera",
    authorRole: "Historiador del Fútbol",
    featured: false,
    img: "linear-gradient(135deg,#f59e0b20,#0F1D32)",
  },
  {
    id: 8,
    title: "xG, PPDA y xGBuildup: las métricas avanzadas que definen quién ganará el Mundial",
    excerpt: "Más allá de los goles y las asistencias, los analistas usan Expected Goals, presión per acción defensiva y construcción esperada para predecir el rendimiento. Guía completa de las estadísticas que importan en 2026.",
    body: [
      "El Expected Goals (xG) nació en el análisis de baseball pero colonizó el fútbol en la última década. La métrica asigna a cada disparo una probabilidad de gol basada en la posición, el tipo de disparo, la presión defensiva y otros factores. Un equipo que crea 2.5 xG por partido debería, en teoría, marcar 2.5 goles si sigue repitiendo esas situaciones.",
      "El PPDA (Passes Allowed Per Defensive Action) mide la intensidad de la presión: cuántos pases permite el equipo antes de realizar una acción defensiva. Un PPDA bajo significa presión alta e inmediata. El Liverpool de Klopp promedió 6.8 en su mejor temporada; un equipo pasivo puede llegar a 15.",
      "Para el Mundial 2026, los modelos predictivos basados en datos apuntan a España (xG por partido: 2.1, PPDA: 7.2), Francia (xG: 2.3, PPDA: 8.1) y Brasil (xG: 1.9, PPDA: 9.4) como los equipos con mejores métricas en clasificatorias.",
      "Pero hay una trampa: las métricas de clasificatorias no son comparables entre zonas. La UEFA produce fútbol más competitivo que la CONMEBOL o la CAF, lo que infla artificialmente los números de las selecciones europeas. Los ajustes por dificultad del rival son el siguiente nivel del análisis.",
    ],
    cat: "estadisticas",
    date: "2026-03-30",
    readTime: 9,
    author: "Paula Vázquez",
    authorRole: "Data Analyst",
    featured: false,
    img: "linear-gradient(135deg,#ef444420,#0F1D32)",
  },
  {
    id: 9,
    title: "El primer Mundial de 1930: las curiosidades más increíbles del torneo fundacional",
    excerpt: "Uruguay 1930 fue el primer Mundial de la historia. Cuatro selecciones europeas viajaron en barco durante dos semanas, se jugó con dos balones distintos y el árbitro olvidó su silbato. Todo lo que no sabías sobre el origen del torneo.",
    body: [
      "El primer Mundial de Fútbol se disputó en Uruguay en julio de 1930 con 13 selecciones. La UEFA no existía aún, y las federaciones europeas veían el viaje al Río de la Plata como una aventura excesiva. Solo cuatro equipos europeos aceptaron: Francia, Bélgica, Yugoslavia y Rumania.",
      "El viaje en barco desde Europa duró entre 14 y 16 días. Las cuatro selecciones europeas viajaron en el mismo buque, el Conte Verde, entrenando en la cubierta durante la travesía. Cuando llegaron a Montevideo, tenían apenas 72 horas de descanso antes de su primer partido.",
      "La final entre Uruguay y Argentina el 30 de julio de 1930 generó una crisis diplomática. Los argentinos cruzaron el Río de la Plata en barco en decenas de miles. En el descanso, con Argentina ganando 2-1, el árbitro belga Jean Langenus aceptó dirigir la segunda mitad solo si le garantizaban un barco para abandonar Uruguay inmediatamente tras el pitido final.",
      "Uruguay ganó 4-2 y el árbitro tuvo su barco. El capitán uruguayo José Nasazzi dijo tras el partido: 'No ganamos por ser mejores; ganamos porque teníamos más miedo de perder.' El primer campeón del mundo había nacido.",
    ],
    cat: "curiosidades",
    date: "2026-03-27",
    readTime: 8,
    author: "Ignacio Herrera",
    authorRole: "Historiador del Fútbol",
    featured: false,
    img: "linear-gradient(135deg,#f59e0b20,#0F1D32)",
  },
  {
    id: 10,
    title: "Vinicius Jr.: del casi-meme al mejor jugador del mundo. ¿Puede ganar el Balón de Oro del Mundial?",
    excerpt: "En 2022, Vinicius fue el asistente de Benzema. En 2026, es el líder de la selección más presionada del planeta. La evolución técnica y mental del extremo del Real Madrid que quiere ser el Pelé de su generación.",
    body: [
      "Recordad 2019: Vinicius Junior llegaba al Real Madrid con 18 años, regateaba a todos y... fallaba el remate. Los memes llenaban las redes. Cuatro temporadas después, conquistó la Champions anotando el gol de la victoria ante el Liverpool en la final de París. El adolescente inseguro se había convertido en el mejor extremo del mundo.",
      "Su evolución táctica es un caso de estudio. Bajo Carlo Ancelotti aprendió a leer cuándo encarar y cuándo combinar; con Tite en la selección encontró libertad posicional. Pero fue la llegada de Dorival Júnior como seleccionador en 2024 lo que desbloqueó al Vinicius completo: más protagonismo, más responsabilidad en el liderazgo, más protagonismo en corner kicks y tiros libres.",
      "Sus estadísticas en la última temporada con el Real Madrid: 28 goles, 18 asistencias en 42 partidos. En la selección brasileña durante la clasificatoria sudamericana: 9 goles en 16 partidos, récord para un extremo en esa fase.",
      "La presión sobre Brasil es máxima: 8 Mundiales sin ganar desde 2002, la mayor sequía de la historia del pentacampeón. Vinicius lleva esa carga con una madurez que sorprende a quienes lo conocieron como el joven que desperdiciaba mano a mano.",
    ],
    cat: "jugadores",
    date: "2026-03-24",
    readTime: 10,
    author: "Sofía Ramírez",
    authorRole: "Periodista Deportiva",
    featured: false,
    img: "linear-gradient(135deg,#22c55e20,#0F1D32)",
  },
  {
    id: 11,
    title: "Las 5 sedes más difíciles para jugar: altitud, calor y condiciones extremas del Mundial 2026",
    excerpt: "Ciudad de México a 2240 metros, Kansas City en agosto con 38 grados, Seattle con lluvia constante. Un análisis geográfico y fisiológico de las sedes que pueden cambiar resultados inesperadamente.",
    body: [
      "La altitud del Estadio Azteca (2240 metros sobre el nivel del mar) reduce la absorción de oxígeno en un 20-25% comparado con el nivel del mar. El corazón trabaja más, los músculos se fatigan antes y la pelota viaja más lejos por la menor resistencia del aire. Los equipos europeos aclimatados a nivel del mar necesitan entre 10 y 14 días de adaptación para rendir al 100%.",
      "Kansas City en agosto puede superar los 38 grados Celsius con humedad relativa del 75%. El índice de calor efectivo supera los 45 grados, zona de peligro según los protocolos médicos de la FIFA. Las pausas de hidratación obligatorias de 3 minutos en cada parte cambian el ritmo de los partidos y benefician a equipos más organizados tácticamente.",
      "Vancouver, en cambio, ofrece condiciones perfectas para el juego europeo: temperatura media de 18-22 grados en junio, césped natural y estadio con buena cobertura. No es casualidad que los dos últimos simulacros de partidos amistosos en Vancouver hayan terminado con más de 5 goles.",
      "La estrategia de la FIFA para el sorteo incluirá consideraciones geográficas para evitar que una selección juegue todos sus partidos en condiciones extremas. Pero en los cruces de eliminación directa, las condiciones serán lo que sean.",
    ],
    cat: "mundial2026",
    date: "2026-03-21",
    readTime: 7,
    author: "Carlos Méndez",
    authorRole: "Corresponsal CONCACAF",
    featured: false,
    img: "linear-gradient(135deg,#e879f920,#0F1D32)",
  },
  {
    id: 12,
    title: "Pressing traps, block medio y salida por terceros: el glosario táctico del Mundial 2026",
    excerpt: "El fútbol moderno tiene su propio idioma. Guía completa de los términos tácticos que escucharás durante el Mundial 2026: desde la línea de cinco hasta el falso 9, explicados con ejemplos reales.",
    body: [
      "El fútbol de 2026 habla un idioma que Pelé no reconocería. Los entrenadores ya no buscan 'marcar más que el rival'; buscan 'superar la línea de presión con transición vertical' o 'generar superioridades posicionales en el tercer hombre'. Un glosario mínimo es imprescindible para entender lo que ocurre realmente en el campo.",
      "La pressing trap (trampa de presión) es una de las herramientas más sofisticadas: el equipo sin balón se retira intencionadamente, invitando al rival a avanzar hacia una zona determinada, para luego presionar en coordinación y recuperar en posición favorable. España la usa con maestría para recuperar en la zona de Pedri.",
      "El bloque medio es la antítesis: defensa organizada en las dos líneas de cuatro entre las áreas propias, esperando el error del rival. Es el sistema que usa Portugal cuando no tiene el balón, generando ataques en transición rápida con Mbappé... perdón, con Rafael Leão.",
      "La salida por terceros describe la acción de superar la primera línea de presión pasando el balón por detrás, hacia el lateral o el central que no está presionado. Italia lo lleva al extremo con Donnarumma como jugador de campo en los inicios de jugada.",
    ],
    cat: "tactica",
    date: "2026-03-18",
    readTime: 6,
    author: "Marcos Delgado",
    authorRole: "Analista Táctico",
    featured: false,
    img: "linear-gradient(135deg,#3b82f620,#0F1D32)",
  },
];

const MONTHS_ES: Record<string, string> = { "01": "Ene", "02": "Feb", "03": "Mar", "04": "Abr", "05": "May", "06": "Jun", "07": "Jul", "08": "Ago", "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dic" };
const fmtDate = (d: string) => { const p = d.split("-"); return `${parseInt(p[2])} ${MONTHS_ES[p[1]]} ${p[0]}`; };

function AnimatedBadge({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
      style={{ background: `${color}15`, color: color, border: `1px solid ${color}30` }}>
      {children}
    </span>
  );
}

function AuthorChip({ author, role }: { author: string; role: string }) {
  const initials = author.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black shrink-0"
        style={{ background: `${GOLD}20`, color: GOLD, border: `1px solid ${GOLD}30` }}>
        {initials}
      </div>
      <div>
        <p className="text-xs font-semibold text-white leading-none">{author}</p>
        <p className="text-[10px] text-[#4a5570] leading-none mt-0.5">{role}</p>
      </div>
    </div>
  );
}

function FeaturedCard({ post, onClick, index }: { post: Post; onClick: (p: Post) => void; index: number }) {
  const cat = CATEGORIES.find(c => c.id === post.cat);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(cardRef.current,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.8, delay: index * 0.15, ease: "power3.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 85%", once: true }
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} onClick={() => onClick(post)} className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-3xl border border-white/5 hover:border-[var(--cat-color)]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        style={{ "--cat-color": cat?.color } as React.CSSProperties}>
        <div className="absolute inset-0" style={{ background: post.img }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--cat-color)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative p-8 min-h-[300px] flex flex-col justify-end">
          <div className="flex items-center gap-3 mb-4">
            <AnimatedBadge color={cat?.color || GOLD}>{cat?.label}</AnimatedBadge>
            <span className="text-xs text-[#4a5570]">{post.readTime} min lectura</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 group-hover:text-[#C9A84C] transition-colors leading-tight">{post.title}</h3>
          <p className="text-sm text-[#8a94b0] mb-5 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <AuthorChip author={post.author} role={post.authorRole} />
            <span className="text-[10px] text-[#6a7a9a]">{fmtDate(post.date)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ post, onClick, index }: { post: Post; onClick: (p: Post) => void; index: number }) {
  const cat = CATEGORIES.find(c => c.id === post.cat);
  const cardRef = useRef<HTMLDivElement>(null);
  const [hov, setHov] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(cardRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, delay: index * 0.08, ease: "power2.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 90%", once: true }
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} onClick={() => onClick(post)} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="group cursor-pointer">
      <div className="relative p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
        style={{ background: hov ? `${cat?.color}08` : BG2, borderColor: hov ? `${cat?.color}40` : "rgba(255,255,255,0.04)" }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold"
            style={{ background: `${cat?.color}15`, color: cat?.color }}>{cat?.label}</span>
          <span className="text-[10px] text-[#4a5570] ml-auto">{post.readTime} min</span>
        </div>
        <h3 className="text-base font-bold mb-2 transition-colors leading-snug flex-1"
          style={{ color: hov ? GOLD : "#fff" }}>{post.title}</h3>
        <p className="text-xs text-[#6a7a9a] line-clamp-2 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
          <AuthorChip author={post.author} role={post.authorRole} />
          <span className="text-[10px] text-[#4a5570]">{fmtDate(post.date)}</span>
        </div>
      </div>
    </div>
  );
}

function PostDetail({ post, onBack }: { post: Post; onBack: () => void }) {
  const cat = CATEGORIES.find(c => c.id === post.cat);
  const containerRef = useRef<HTMLDivElement>(null);
  const related = POSTS.filter(p => p.id !== post.id && p.cat === post.cat).slice(0, 3);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [post.id]);

  return (
    <div ref={containerRef} className="max-w-3xl mx-auto">
      <button onClick={onBack}
        className="flex items-center gap-2 text-[#C9A84C] text-sm font-semibold mb-6 hover:gap-3 transition-all">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Volver al blog
      </button>

      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <AnimatedBadge color={cat?.color || GOLD}>{cat?.label}</AnimatedBadge>
        <span className="text-sm text-[#4a5570]">{fmtDate(post.date)}</span>
        <span className="text-[#4a5570]">·</span>
        <span className="text-sm text-[#4a5570]">{post.readTime} min lectura</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-black mb-6 leading-tight">{post.title}</h1>

      <div className="flex items-center gap-3 mb-8 p-4 rounded-2xl border border-white/5" style={{ background: BG2 }}>
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black"
          style={{ background: `${GOLD}20`, color: GOLD, border: `1px solid ${GOLD}30` }}>
          {post.author.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()}
        </div>
        <div>
          <p className="text-sm font-bold text-white">{post.author}</p>
          <p className="text-xs text-[#6a7a9a]">{post.authorRole}</p>
        </div>
      </div>

      <div className="p-8 rounded-2xl border border-white/5 mb-8" style={{ background: BG2 }}>
        <p className="text-[#d0d4de] text-lg leading-relaxed font-medium mb-6">{post.excerpt}</p>
        <div className="h-px my-6" style={{ background: "rgba(255,255,255,0.05)" }} />
        {post.body.map((paragraph, i) => (
          <p key={i} className="text-[#8a94b0] leading-relaxed mb-5 last:mb-0">{paragraph}</p>
        ))}
        <div className="mt-8 p-6 rounded-2xl border text-center"
          style={{ background: "linear-gradient(135deg,#c9a84c10,transparent)", borderColor: "#c9a84c20" }}>
          <p className="text-sm text-[#8a94b0] mb-4">¿Te gustó este artículo? Hay muchos más en camino.</p>
          <Link href="/registro"
            className="inline-block px-8 py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-[#c9a84c]/25 transition-all"
            style={{ background: "linear-gradient(to right,#c9a84c,#e8d48b)", color: "#060B14" }}>
            Pre-regístrate gratis
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs text-[#6a7a9a]">Compartir:</span>
        {["Twitter", "WhatsApp", "Copiar enlace"].map(s => (
          <button key={s}
            className="px-4 py-2 rounded-lg text-xs font-semibold border transition-all hover:bg-[#c9a84c]/10 hover:border-[#c9a84c]/30"
            style={{ borderColor: "#c9a84c20", background: "#c9a84c05", color: GOLD }}>
            {s}
          </button>
        ))}
      </div>

      {related.length > 0 && (
        <div>
          <h3 className="text-lg font-bold mb-4">Más artículos de {cat?.label}</h3>
          <div className="flex flex-col gap-3">
            {related.map(r => {
              const rc = CATEGORIES.find(c => c.id === r.cat);
              return (
                <div key={r.id} onClick={() => onBack()}
                  className="flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all hover:border-[#c9a84c]/20"
                  style={{ background: BG2, borderColor: "rgba(255,255,255,0.05)" }}>
                  <span className="px-2 py-1 rounded text-[10px] font-bold"
                    style={{ background: `${rc?.color}15`, color: rc?.color }}>{rc?.label}</span>
                  <span className="flex-1 text-sm font-semibold truncate">{r.title}</span>
                  <span className="text-[10px] text-[#4a5570] shrink-0">{r.readTime} min</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function BlogPage() {
  const [activeCat, setActiveCat] = useState("all");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const filtered = activeCat === "all" ? POSTS : POSTS.filter(p => p.cat === activeCat);
  const featured = filtered.filter(p => p.featured);
  const regular = filtered.filter(p => !p.featured);

  useEffect(() => {
    if (!heroRef.current) return;
    gsap.fromTo(heroRef.current.children,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (!categoriesRef.current) return;
    gsap.fromTo(categoriesRef.current.children,
      { y: 20, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out",
        scrollTrigger: { trigger: categoriesRef.current, start: "top 90%", once: true }
      }
    );
  }, []);

  return (
    <div className="min-h-screen" style={{ background: BG, color: "#fff", fontFamily: "'Outfit',sans-serif" }}>
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        {selectedPost ? (
          <PostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />
        ) : (
          <>
            {/* Hero */}
            <div ref={heroRef} className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                style={{ background: "#c9a84c10", borderColor: "#c9a84c20" }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: GOLD }} />
                <span className="text-xs font-bold tracking-wider uppercase" style={{ color: GOLD }}>Blog ZonaMundial</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Análisis, historias y<br />
                <span className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(to right, ${GOLD}, ${GOLD2}, ${GOLD})` }}>
                  pasión por el fútbol
                </span>
              </h1>
              <p className="text-lg max-w-xl leading-relaxed" style={{ color: MID }}>
                Táctica, jugadores, curiosidades históricas y todo lo que necesitas saber para vivir el Mundial 2026 con profundidad.
              </p>
              <div className="flex items-center gap-6 mt-8">
                <div className="text-center">
                  <p className="text-2xl font-black" style={{ color: GOLD }}>{POSTS.length}</p>
                  <p className="text-xs" style={{ color: DIM }}>Artículos</p>
                </div>
                <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.08)" }} />
                <div className="text-center">
                  <p className="text-2xl font-black" style={{ color: GOLD }}>{CATEGORIES.length - 1}</p>
                  <p className="text-xs" style={{ color: DIM }}>Categorías</p>
                </div>
                <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.08)" }} />
                <div className="text-center">
                  <p className="text-2xl font-black" style={{ color: GOLD }}>4</p>
                  <p className="text-xs" style={{ color: DIM }}>Autores</p>
                </div>
              </div>
            </div>

            {/* Filtros */}
            <div ref={categoriesRef} className="flex gap-2 mb-10 overflow-x-auto pb-2"
              style={{ scrollbarWidth: "none" }}>
              {CATEGORIES.map(c => (
                <button key={c.id} onClick={() => setActiveCat(c.id)}
                  className="px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300"
                  style={{
                    background: activeCat === c.id ? `${c.color}15` : "transparent",
                    border: `1px solid ${activeCat === c.id ? `${c.color}40` : "rgba(255,255,255,0.05)"}`,
                    color: activeCat === c.id ? c.color : DIM,
                  }}>
                  {c.label}
                </button>
              ))}
            </div>

            {/* Featured */}
            {featured.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                {featured.slice(0, 1).map((p, i) => (
                  <div key={p.id} className="lg:col-span-2">
                    <FeaturedCard post={p} onClick={setSelectedPost} index={i} />
                  </div>
                ))}
                {featured.slice(1, 3).map((p, i) => (
                  <FeaturedCard key={p.id} post={p} onClick={setSelectedPost} index={i + 1} />
                ))}
              </div>
            )}

            {/* Grid normal */}
            {regular.length > 0 && (
              <>
                {featured.length > 0 && (
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-5 rounded-full" style={{ background: GOLD }} />
                    <h2 className="text-lg font-bold">Más artículos</h2>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {regular.map((p, i) => (
                    <ArticleCard key={p.id} post={p} onClick={setSelectedPost} index={i} />
                  ))}
                </div>
              </>
            )}

            {filtered.length === 0 && (
              <div className="text-center py-20" style={{ color: DIM }}>
                No hay artículos en esta categoría aún. Pronto publicaremos más contenido.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
