"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./StatsHowSection.module.css";
import {
  IconStatBall,
  IconStatStadium,
  IconStatWhistle,
  IconStatGroup,
  IconStatFlag,
  IconStatPuzzle,
  IconStepChoose,
  IconStepPlay,
  IconStepWin,
} from "./StatsHowIcons";

/* =================== DATA =================== */

const STATS = [
  { Icon: IconStatBall, num: "48", label: "Selecciones" },
  { Icon: IconStatStadium, num: "16", label: "Sedes" },
  { Icon: IconStatWhistle, num: "104", label: "Partidos" },
  { Icon: IconStatGroup, num: "12", label: "Grupos" },
  { Icon: IconStatFlag, num: "3", label: "Países" },
  { Icon: IconStatPuzzle, num: "12", label: "Módulos" },
];

const STEPS = [
  {
    n: "01",
    Icon: IconStepChoose,
    title: "Elige tu selección",
    desc: "Descubre datos, fixture y estadísticas de los 48 equipos del Mundial 2026.",
  },
  {
    n: "02",
    Icon: IconStepPlay,
    title: "Juega y predice",
    desc: "Entra en predicciones, fantasy, trivia y ligas privadas con tus amigos.",
  },
  {
    n: "03",
    Icon: IconStepWin,
    title: "Vive y gana",
    desc: "Sigue los partidos en streaming con creadores y gana premios reales.",
  },
];

/* =================== COMPONENT =================== */

export function StatsHowSection() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  /* Track scroll position on mobile steps slider to update active dot */
  useEffect(() => {
    const el = stepsRef.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const children = Array.from(el.children).filter(
          (c): c is HTMLElement => c instanceof HTMLElement
        );
        const scrollMid = el.scrollLeft + el.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        children.forEach((child, i) => {
          const mid = child.offsetLeft + child.offsetWidth / 2;
          const d = Math.abs(mid - scrollMid);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        setActive(best);
        ticking = false;
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = useCallback((i: number) => {
    const el = stepsRef.current;
    if (!el) return;
    const children = Array.from(el.children).filter(
      (c): c is HTMLElement => c instanceof HTMLElement
    );
    const target = children[i];
    if (!target) return;
    el.scrollTo({
      left: target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className={styles.section} id="stats-how">
      <div className={styles.inner}>
        {/* ========== Block 1: Stats ========== */}
        <div className={styles.statsHead}>
          <h2 className={styles.statsTitle}>
            48 selecciones. 16 sedes. 104 partidos. 1 ganador:{" "}
            <em className={styles.statsTitleGold}>tú.</em>
          </h2>
          <p className={styles.statsSub}>
            Todo lo que necesitas para vivir el Mundial 2026 como nunca antes.
          </p>
        </div>

        <div className={styles.statsGrid}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <div className={styles.statIconWrap}>
                <s.Icon size={72} />
              </div>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.divider} aria-hidden="true" />

        {/* ========== Block 2: ¿Cómo funciona? ========== */}
        <div className={styles.howHead}>
          <span className={styles.pill}>ASÍ DE FÁCIL</span>
          <h2 className={styles.howTitle}>¿Cómo funciona?</h2>
          <p className={styles.howSub}>
            Tres pasos y ya estás dentro. Sin complicaciones, sin letra pequeña.
          </p>
        </div>

        <div className={styles.steps} ref={stepsRef}>
          {STEPS.map((s) => (
            <div key={s.n} className={styles.step}>
              <div className={styles.stepIconWrap}>
                <s.Icon size={120} />
                <span className={styles.stepBadge}>{s.n}</span>
              </div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Dots only visible in mobile (CSS-controlled) */}
        <div className={styles.sliderDots} role="tablist" aria-label="Pasos">
          {STEPS.map((s, i) => (
            <button
              key={s.n}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`Paso ${s.n} · ${s.title}`}
              onClick={() => goTo(i)}
              className={`${styles.sliderDot} ${active === i ? styles.sliderDotActive : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
