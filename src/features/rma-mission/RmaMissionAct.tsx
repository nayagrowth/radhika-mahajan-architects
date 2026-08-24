import React from "react";
import { missionContent } from "./mission.content";
import type { MissionContent } from "./mission.types";
import styles from "./rma-mission-act.module.css";

interface RmaMissionActProps {
  content?: MissionContent;
  className?: string;
}

export function RmaMissionAct({
  content = missionContent,
  className,
}: RmaMissionActProps) {
  return (
    <section
      id="mission"
      className={`${styles.missionSection} ${className || ""}`}
      aria-labelledby="mission-heading"
      data-story-act4="true"
    >
      {/* Background Architectural Blueprint & Wireframe Graphics */}
      <div className={styles.blueprintAtmosphere} aria-hidden="true">
        {/* Left Architectural Staircase Wireframe */}
        <svg
          className={styles.blueprintStairs}
          data-story-act4-stairs="true"
          viewBox="0 0 320 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 400 V340 H60 V280 H100 V220 H140 V160 H180 V100 H220 V40 H280"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 3"
          />
          <path
            d="M60 400 V280 M100 400 V220 M140 400 V160 M180 400 V100 M220 400 V40"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />
          <line x1="20" y1="400" x2="320" y2="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 6" />
        </svg>

        {/* Right Concentric Drafting Arcs */}
        <svg
          className={styles.blueprintCircles}
          data-story-act4-circles="true"
          viewBox="0 0 450 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="450" cy="0" r="420" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="450" cy="0" r="340" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 4" />
          <circle cx="450" cy="0" r="240" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="450" cy="0" r="140" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="0" x2="450" y2="450" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
        </svg>

        {/* Ambient Dark Grain Overlay */}
        <div className={styles.darkGradientWash} />
      </div>

      <div className={styles.manifestoContainer}>
        {/* Top Kicker Block: 04 / THE MANIFESTO + STUDIO FOUNDATION */}
        <header className={styles.kickerBlock}>
          <div className={styles.sectionIndex} data-story-act4-index="true">
            <span>{content.sectionNumber}</span>
            <span aria-hidden="true" className={styles.indexSlash}>/</span>
            <span>{content.sectionTitle}</span>
          </div>
          <span className={styles.kickerMeta} data-story-act4-kicker="true">
            {content.kicker}
          </span>
        </header>

        {/* Master Serif Headline: Designing Spaces. / Creating Experiences. */}
        <div className={styles.headlineBlock}>
          <h2 id="mission-heading" className={styles.headline}>
            <span className={styles.headlineMask}>
              <span
                className={`${styles.headlineLine} ${styles.headlineWhite}`}
                data-story-act4-line="0"
              >
                {content.headlineLine1 || "Designing Spaces."}
              </span>
            </span>
            <span className={styles.headlineMask}>
              <span
                className={`${styles.headlineLine} ${styles.headlineChampagne}`}
                data-story-act4-line="1"
              >
                {content.headlineLine2 || "Creating Experiences."}
              </span>
            </span>
          </h2>

          {/* Central Gold Diamond Underline Rule */}
          <div className={styles.centerRuleContainer} data-story-act4-rule="true">
            <div className={styles.centerRuleLine} aria-hidden="true" />
            <span className={styles.centerRuleDiamond} data-story-act4-diamond="true" aria-hidden="true">◆</span>
            <div className={styles.centerRuleLine} aria-hidden="true" />
          </div>
        </div>

        {/* 3-Column Foundation Manifesto Cards */}
        <div
          className={styles.cardsGrid}
          aria-label="Studio Foundation Pillars"
          data-story-act4-tenets="true"
        >
          {content.cards.map((card, cIdx) => (
            <article
              key={card.index}
              className={styles.manifestoCard}
              data-story-act4-card={cIdx}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>{card.index}</span>
                <div className={styles.cardNumberUnderline} aria-hidden="true" />
              </div>
              <p className={styles.cardStatement}>{card.statement}</p>
              <span
                className={styles.cardCrosshair}
                data-story-act4-crosshair="true"
                aria-hidden="true"
              >
                +
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { RmaMissionAct as DipakMissionAct };
