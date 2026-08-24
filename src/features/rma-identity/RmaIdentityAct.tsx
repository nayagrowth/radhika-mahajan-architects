import React from "react";
import Image from "next/image";
import { identityContent } from "./identity.content";
import type { IdentityContent } from "./identity.types";
import styles from "./rma-identity-act.module.css";

interface RmaIdentityActProps {
  content?: IdentityContent;
  className?: string;
}

function MetricIcon({ icon }: { icon: "sofa" | "blueprint" | "calendar" }) {
  if (icon === "sofa") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.ribbonIconSvg}
        aria-hidden="true"
      >
        <path d="M4 11V16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V11" />
        <path d="M6 11V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
        <path d="M2 13a2 2 0 0 1 2-2h1v5H3a1 1 0 0 1-1-1v-2z" />
        <path d="M19 11h1a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1h-2v-5z" />
        <path d="M6 17v2" />
        <path d="M18 17v2" />
      </svg>
    );
  }
  if (icon === "blueprint") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.ribbonIconSvg}
        aria-hidden="true"
      >
        <path d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
        <path d="M8 4v16" />
        <path d="M8 9h8" />
        <path d="M8 14h8" />
        <circle cx="14" cy="9" r="1" fill="currentColor" />
        <circle cx="14" cy="14" r="1" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.ribbonIconSvg}
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
    </svg>
  );
}

export function RmaIdentityAct({
  content = identityContent,
  className,
}: RmaIdentityActProps) {
  return (
    <section
      id="identity"
      className={`${styles.identitySection} ${className || ""}`}
      aria-labelledby="identity-heading"
      data-story-act2="true"
    >
      {/* Full-Bleed Master Interior Scene Background */}
      <div className={styles.sceneBackground} data-story-act2-scene="true">
        <Image
          src="/practice/act2-practice-scene-full.webp"
          alt="Architectural Living Room Interior — Radhika Mahajan Architects"
          fill
          priority
          sizes="100vw"
          className={styles.sceneImg}
        />
        <div className={styles.ambientLightGlow} aria-hidden="true" />
      </div>

      {/* Subtle Botanical / Architectural Watermark */}
      <div className={styles.botanicalWatermark} aria-hidden="true" />

      {/* Viewport Content Stage */}
      <div className={styles.identityContainer}>
        {/* Main Upper Split: Left Statement & CTA / Right Living Room Atmosphere */}
        <div className={styles.heroSplit}>
          {/* Left Column: 02 Label + Chromatic 3-Line Headline + Copy + CTA */}
          <div className={styles.editorialColumn} data-story-act2-copy-column="true">
            {/* 02 / THE PRACTICE Index Header */}
            <div className={styles.sectionIndexWrapper} data-story-act2-index="true">
              <div className={styles.sectionIndex}>
                <span>{content.sectionNumber}</span>
                <span aria-hidden="true">/</span>
                <span>{content.sectionTitle}</span>
              </div>
              <div className={styles.headerHairlineTrack}>
                <span className={styles.headerHairline} />
                <span className={styles.headerDot} />
              </div>
            </div>

            {/* Chromatic Headline: Colour, Comfort, Character. */}
            <h2 id="identity-heading" className={styles.headline}>
              {content.headlineLines?.map((line, idx) => (
                <span key={line.text} className={styles.headlineMask}>
                  <span
                    className={`${styles.headlineLine} ${
                      idx === 0
                        ? styles.headlineColour
                        : idx === 1
                        ? styles.headlineComfort
                        : styles.headlineCharacter
                    }`}
                    data-story-act2-headline="true"
                  >
                    {line.text}
                  </span>
                </span>
              )) || (
                <>
                  <span className={styles.headlineMask}>
                    <span
                      className={`${styles.headlineLine} ${styles.headlineColour}`}
                      data-story-act2-headline="true"
                    >
                      Colour,
                    </span>
                  </span>
                  <span className={styles.headlineMask}>
                    <span
                      className={`${styles.headlineLine} ${styles.headlineComfort}`}
                      data-story-act2-headline="true"
                    >
                      Comfort,
                    </span>
                  </span>
                  <span className={styles.headlineMask}>
                    <span
                      className={`${styles.headlineLine} ${styles.headlineCharacter}`}
                      data-story-act2-headline="true"
                    >
                      Character.
                    </span>
                  </span>
                </>
              )}
            </h2>

            {/* Supporting Copy */}
            <p className={styles.supportingCopy} data-story-act2-copy="true">
              {content.supportingCopy || content.bioParagraph}
            </p>

            {/* CTA Button */}
            <div className={styles.ctaRow} data-story-act2-cta="true">
              <a href={content.cta?.href || "/resources"} className={styles.practiceCtaBtn}>
                <span>{content.cta?.label || "EXPLORE OUR WORK"}</span>
                <span aria-hidden="true" className={styles.ctaArrow}>→</span>
              </a>
            </div>
          </div>

          {/* Right Empty Spacer (Revealing the curved sofa, painting & niche) */}
          <div className={styles.interiorSpaceAnchor} aria-hidden="true" />
        </div>

        {/* Bottom Multi-Tone Architectural Metric Ribbon + Sub-Ribbon Footer */}
        <div className={styles.ribbonWrapper} data-story-act2-stats="true">
          {/* 3-Color Metric Panels */}
          <div className={styles.ribbonPanels}>
            {content.metricsRibbon.map((item) => (
              <div
                key={item.label}
                className={styles.ribbonPanel}
                style={{ backgroundColor: item.color }}
              >
                <div className={styles.ribbonIconCircle}>
                  <MetricIcon icon={item.icon} />
                </div>
                <div className={styles.ribbonTextLockup}>
                  <div className={styles.ribbonValueRow}>
                    <span className={styles.ribbonValue}>{item.value}</span>
                    {item.suffix ? (
                      <span className={styles.ribbonSuffix}>{item.suffix}</span>
                    ) : null}
                  </div>
                  <span className={styles.ribbonLabel}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sub-Ribbon Baseline Footer */}
          <div className={styles.subRibbonBar}>
            <div className={styles.subRibbonHairline} />
            <span className={styles.subRibbonDiamond} aria-hidden="true" />
            <span className={styles.subRibbonText}>
              {content.subRibbonText || "IN-HOUSE DESIGN & EXECUTION  •  PUNE & LONAVALA"}
            </span>
            <span className={styles.subRibbonDiamond} aria-hidden="true" />
            <div className={styles.subRibbonHairline} />
          </div>
        </div>
      </div>
    </section>
  );
}

export { RmaIdentityAct as DipakIdentityAct };


