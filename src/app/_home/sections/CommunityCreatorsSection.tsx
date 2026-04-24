"use client";

import { CSSProperties, useEffect, useRef } from "react";
import Link from "next/link";
import { CREADORES } from "@/data/creadores";
import { useLanguage } from "@/i18n/LanguageContext";
import { homeSections } from "@/i18n/home-sections";
import styles from "./CommunityCreatorsSection.module.css";

/* ============== Icons ============== */

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconGroup = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconArrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

const IconBroadcast = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.48M20.49 4.51a10 10 0 0 1 0 14.13M3.51 19.14a10 10 0 0 1 0-14.14" />
  </svg>
);

const IconChat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const IconBars = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 20h4V10H3v10zm7 0h4V4h-4v16zm7 0h4v-7h-4v7z" />
  </svg>
);

const IconCommunity = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="7" r="4" />
    <circle cx="17" cy="9" r="3" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <path d="M19 21v-2a3 3 0 0 0-2-2.82" />
  </svg>
);

/* ============== Data ============== */

/* Icon order matches i18n features array */
const FEATURE_ICONS = [IconBroadcast, IconChat, IconBars, IconCommunity] as const;

/* Floating sparks — mix gold + purple */
const SPARKS: Array<{ left: string; dur: string; delay: string; kind: "gold" | "purple" }> = [
  { left: "6%", dur: "14s", delay: "0s", kind: "purple" },
  { left: "14%", dur: "18s", delay: "3s", kind: "gold" },
  { left: "24%", dur: "16s", delay: "6s", kind: "purple" },
  { left: "36%", dur: "20s", delay: "2s", kind: "gold" },
  { left: "48%", dur: "15s", delay: "9s", kind: "purple" },
  { left: "58%", dur: "17s", delay: "4s", kind: "gold" },
  { left: "70%", dur: "13s", delay: "11s", kind: "purple" },
  { left: "80%", dur: "19s", delay: "7s", kind: "purple" },
  { left: "92%", dur: "16s", delay: "5s", kind: "gold" },
];

/* ============== Main Component ============== */

export function CommunityCreatorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { locale } = useLanguage();
  const t = homeSections[locale].community;

  /* Track cursor for interactive glow */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        el.style.setProperty("--mx", `${x}%`);
        el.style.setProperty("--my", `${y}%`);
        raf = 0;
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="community-creators">
      {/* Background layers */}
      <div className={styles.cursorGlow} aria-hidden="true" />
      <div className={styles.ambientPurple} aria-hidden="true" />
      <div className={styles.sparks} aria-hidden="true">
        {SPARKS.map((s, i) => (
          <span
            key={i}
            className={`${styles.spark} ${s.kind === "gold" ? styles.sparkGold : styles.sparkPurple}`}
            style={{
              left: s.left,
              bottom: "-20px",
              ["--dur" as string]: s.dur,
              ["--delay" as string]: s.delay,
            }}
          />
        ))}
      </div>

      {/* ========== HERO with BG image ========== */}
      <div className={styles.heroBg}>
        <div className={styles.hero}>
          <div className={styles.copyCol}>
            <div className={styles.pill}>
              <span className={styles.pillShield}>
                <IconShield />
              </span>
              {t.pill}
            </div>

            <h2 className={styles.title}>
              {t.title1} <em className={styles.titleAccent}>{t.titleGold}</em>
            </h2>

            <p className={styles.desc}>{t.desc}</p>

            <div className={styles.infoBox}>
              <span className={styles.infoIconWrap}>
                <IconGroup />
              </span>
              <p className={styles.infoText}>
                {t.infoBefore}{" "}
                <span className={styles.infoHighlight}>{t.infoHighlight}</span> {t.infoAfter}
                <br />
                {t.infoSub}
              </p>
            </div>

            <Link href="/creadores" className={styles.cta}>
              {t.cta}
              <IconArrow />
            </Link>
          </div>
          {/* Right column is rendered by the heroBg image (stadium + ball baked in) */}
        </div>
      </div>

      <div className={styles.inner}>
        {/* ========== FEATURES STRIP ========== */}
        <div className={styles.features}>
          {t.features.map((f, i) => {
            const Icon = FEATURE_ICONS[i];
            return (
              <div key={f.title} className={styles.feature}>
                <span className={styles.featureIcon}>
                  <Icon />
                </span>
                <div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========== CREATORS GRID ========== */}
        <div className={styles.creatorsHead}>
          <h2 className={styles.creatorsTitle}>{t.creatorsTitle}</h2>
          <p className={styles.creatorsSub}>
            {CREADORES.length} {t.creatorsSubA}
          </p>
        </div>

        <div className={styles.creatorsGrid}>
          {CREADORES.map((c) => {
            const style: CSSProperties = {
              ["--color" as string]: c.colorPrimario,
            };
            return (
              <Link
                key={c.slug}
                href={`/creadores#${c.slug}`}
                className={styles.creatorCard}
                style={style}
              >
                <div className={styles.avatarWrap}>
                  <img
                    className={styles.avatar}
                    src={c.imagen}
                    alt={`Creator ${c.nombre}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className={styles.creatorName}>{c.nombre}</h3>
                <p className={styles.creatorHandle}>{c.handle}</p>
                <span className={styles.followerPill}>{c.seguidores}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
