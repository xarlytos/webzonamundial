"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { homeSections } from "@/i18n/home-sections";
import styles from "./FinalCTASection.module.css";

const IconArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const IconGroup = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export function FinalCTASection() {
  const { locale } = useLanguage();
  const t = homeSections[locale].finalCta;

  return (
    <section className={styles.section} id="final-cta">
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.imageSlot} aria-hidden="true" />

          <div className={styles.copy}>
            <h2 className={styles.title}>
              {t.title1} <em className={styles.titleGold}>{t.titleGold1}</em>
              <br />
              {t.title2}
              <br />
              {t.title3} <em className={styles.titleGold}>{t.titleGold2}</em>
            </h2>

            <p className={styles.desc}>{t.desc}</p>

            <Link href="/registro" className={styles.cta}>
              {t.cta}
              <IconArrowRight />
            </Link>

            <div className={styles.assurance}>
              <span className={styles.assuranceItem}>
                <span className={styles.assuranceIcon}>
                  <IconShield />
                </span>
                {t.assurance.free}
              </span>
              <span className={styles.assuranceSep} aria-hidden="true" />
              <span className={styles.assuranceItem}>
                <span className={styles.assuranceIcon}>
                  <IconLock />
                </span>
                {t.assurance.noCard}
              </span>
              <span className={styles.assuranceSep} aria-hidden="true" />
              <span className={styles.assuranceItem}>
                <span className={styles.assuranceIcon}>
                  <IconGroup />
                </span>
                {t.assurance.noCommitment}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
