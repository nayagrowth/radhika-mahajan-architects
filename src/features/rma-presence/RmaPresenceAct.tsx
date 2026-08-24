import React from "react";
import Image from "next/image";
import { presenceContent } from "./presence.content";
import type { PresenceContent } from "./presence.types";
import styles from "./rma-presence-act.module.css";

interface RmaPresenceActProps {
  content?: PresenceContent;
  className?: string;
}

export function RmaPresenceAct({
  content = presenceContent,
  className,
}: RmaPresenceActProps) {
  return (
    <section
      id="presence"
      className={`${styles.presenceSection} ${className || ""}`}
      aria-labelledby="presence-heading"
      data-story-act3="true"
    >
      <div className={styles.presenceContainer}>
        {/* Top Header Eyebrow with Flanking Hairline Rules */}
        <div className={styles.eyebrowRow} data-story-act3-eyebrow="true">
          <div className={styles.eyebrowHairline} />
          <span className={styles.eyebrowDiamond} aria-hidden="true">◆</span>
          <span className={styles.eyebrowText}>{content.eyebrow || "BUILT PORTFOLIO."}</span>
          <span className={styles.eyebrowDiamond} aria-hidden="true">◆</span>
          <div className={styles.eyebrowHairline} />
        </div>

        {/* Master Serif Headline: Landmark Developments ✦ */}
        <header className={styles.headerBlock}>
          <h2 id="presence-heading" className={styles.headline}>
            <span className={styles.headlineMask}>
              <span className={styles.headlineLine} data-story-act3-headline="true">
                {content.headline || "Landmark Developments"}
              </span>
            </span>
            <span className={styles.headlineStar} data-story-act3-star="true" aria-hidden="true">✦</span>
          </h2>
          <p className={styles.supportingNote} data-story-act3-note="true">
            {content.supportingNote}
          </p>
        </header>

        {/* 5-Column Built Portfolio Gallery */}
        <div className={styles.projectsGrid} data-story-act3-grid="true">
          {content.projects.map((project, idx) => (
            <article
              key={project.id}
              className={styles.projectCard}
              data-story-act3-item="true"
            >
              <a
                href={project.href || "/resources"}
                className={styles.cardLink}
                aria-label={`View ${project.name} details`}
              >
                {/* Photo Container */}
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                    className={styles.projectImg}
                  />
                  <div className={styles.imageOverlay} aria-hidden="true" />
                </div>

                {/* Card Details Footer */}
                <div className={styles.cardInfo}>
                  {/* Number Badge with Hairline Wings */}
                  <div className={styles.numberBadgeRow}>
                    <span className={styles.numberHairline} />
                    <span className={styles.numberText}>{project.number || `0${idx + 1}`}</span>
                    <span className={styles.numberHairline} />
                  </div>

                  <h3 className={styles.projectName} data-story-act3-item-title="true">
                    {project.name}
                  </h3>
                  <p className={styles.projectSublabel}>{project.sublabel}</p>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* Bottom Studio Signature & Logo */}
        <footer className={styles.studioFooter} data-story-act3-footer="true">
          <div className={styles.footerHairline} />
          <div className={styles.signatureLockup}>
            <span className={styles.footerDiamond} aria-hidden="true">◆</span>
            <div className={styles.brandTextGroup}>
              <span className={styles.brandMonogram}>{content.studioName || "RMA"}</span>
              <span className={styles.brandTagline}>
                {content.studioTagline || "RADHIKA MAHAJAN ARCHITECTS"}
              </span>
            </div>
            <span className={styles.footerDiamond} aria-hidden="true">◆</span>
          </div>
          <div className={styles.footerHairline} />
        </footer>
      </div>
    </section>
  );
}

export { RmaPresenceAct as DipakPresenceAct };
