"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { bridgeContent } from "./bridge.content";
import type { BridgeContent } from "./bridge.types";
import styles from "./rma-bridge-act.module.css";

interface RmaBridgeActProps {
  content?: BridgeContent;
  className?: string;
}

export function RmaBridgeAct({
  content = bridgeContent,
  className,
}: RmaBridgeActProps) {
  const [selectedType, setSelectedType] = useState(
    content.projectTypes?.[0] || "Full Home (3/4 BHK)"
  );

  const primaryCta = content.ctas.find((c) => c.primary) || content.ctas[0];
  const secondaryCta = content.ctas.find((c) => !c.primary);

  return (
    <section
      id="consultation"
      className={`${styles.bridgeSection} ${className || ""}`}
      aria-labelledby="bridge-heading"
      data-story-act7="true"
    >
      <div className={styles.atmosphereLayer} aria-hidden="true" />
      <div className={styles.architecturalGridOverlay} aria-hidden="true" />

      <div className={styles.bridgeContainer}>
        {/* Top Eyebrow Row */}
        <div className={styles.eyebrowRow} data-story-act7-eyebrow="true">
          <span className={styles.eyebrowHairline} aria-hidden="true" />
          <span className={styles.eyebrowDiamond} aria-hidden="true">◆</span>
          <span className={styles.eyebrowText}>
            {content.sectionNumber} / {content.sectionTitle} — {content.eyebrow}
          </span>
          <span className={styles.eyebrowDiamond} aria-hidden="true">◆</span>
          <span className={styles.eyebrowHairline} aria-hidden="true" />
        </div>

        {/* 2-Column Grand Architectural Portal */}
        <div className={styles.splitPortalGrid}>
          {/* Left Column: Headline, Narrative & Numbered Guarantees Ledger */}
          <div className={styles.narrativeCol}>
            <div className={styles.titleGroup}>
              <div className={styles.brandMarkEmblem}>
                <Image
                  src="/branding/rma-submark-gold.webp"
                  alt="Radhika Mahajan Architects"
                  width={56}
                  height={56}
                  className={styles.brandMarkLogo}
                />
              </div>

              <h2 id="bridge-heading" className={styles.headline}>
                <span className={styles.headlineLine1}>{content.headlineWord1}</span>
                <span className={styles.headlineLine2}>
                  {content.headlineWord2}
                  {content.headlineAccent && (
                    <span className={styles.headlineStar}>{content.headlineAccent}</span>
                  )}
                  <span className={styles.goldPeriod}>.</span>
                </span>
              </h2>
            </div>

            <p className={styles.bodyText} data-story-act7-body="true">
              {content.bodyParagraph}
            </p>

            {/* Minimalist Numbered Guarantees Ledger */}
            {content.pillars && content.pillars.length > 0 && (
              <div className={styles.guaranteesLedger} data-story-act7-pillars="true">
                <span className={styles.ledgerHeaderTitle}>Our Studio Commitments</span>
                <div className={styles.ledgerList}>
                  {content.pillars.map((pillar, idx) => (
                    <div key={idx} className={styles.ledgerRow}>
                      <span className={styles.ledgerIndex}>{pillar.icon}</span>
                      <div className={styles.ledgerContent}>
                        <span className={styles.ledgerTitle}>{pillar.title}</span>
                        <p className={styles.ledgerNote}>{pillar.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Council Registration Footnote */}
            {content.studioDetails?.registration && (
              <div className={styles.registrationBadge}>
                <span className={styles.registrationPip}>◆</span>
                <span>{content.studioDetails.registration}</span>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Consultation Card */}
          <div className={styles.intakeCardCol} data-story-act7-card="true">
            <div className={styles.intakeCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardEyebrow}>Direct Intake Portal</span>
                <h3 className={styles.cardTitle}>Schedule a Design Dialogue</h3>
                <p className={styles.cardSubtitle}>
                  Direct consultation with Ar. Radhika Mahajan &amp; the RMA studio team.
                </p>
              </div>

              {/* Project Type Selectors */}
              {content.projectTypes && content.projectTypes.length > 0 && (
                <div className={styles.projectTypeSelector}>
                  <label className={styles.selectorLabel}>Select Project Focus</label>
                  <div className={styles.typePillsGrid}>
                    {content.projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        className={`${styles.typePill} ${
                          selectedType === type ? styles.typePillActive : ""
                        }`}
                        onClick={() => setSelectedType(type)}
                      >
                        {selectedType === type && (
                          <span className={styles.activePillPip}>◆</span>
                        )}
                        <span>{type}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Suite */}
              <div className={styles.cardActionsRow} data-story-act7-ctas="true">
                {primaryCta && (
                  <Link
                    href={`${primaryCta.href}?type=${encodeURIComponent(selectedType)}`}
                    className={styles.primaryButton}
                    data-ac-event={primaryCta.event}
                  >
                    <span>{primaryCta.label}</span>
                    <span className={styles.buttonArrow} aria-hidden="true">↗</span>
                  </Link>
                )}

                {content.whatsappCta && (
                  <a
                    href={`${content.whatsappCta.href}&text=${encodeURIComponent(
                      `Hello Ar. Radhika Mahajan, I would like to discuss a ${selectedType} project.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappButton}
                    data-ac-event="cta_whatsapp_bridge"
                    aria-label="Chat on WhatsApp with Ar. Radhika Mahajan"
                  >
                    <span className={styles.whatsappLiveDot} aria-hidden="true" />
                    <span>{content.whatsappCta.label}</span>
                  </a>
                )}

                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className={styles.secondaryLink}
                    data-ac-event={secondaryCta.event}
                  >
                    <span>{secondaryCta.label}</span>
                    <span className={styles.buttonArrow} aria-hidden="true">→</span>
                  </Link>
                )}
              </div>

              {/* Studio Metadata Footer */}
              {content.studioDetails && (
                <div className={styles.cardFooterDetails}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailIcon}>✦</span>
                    <span className={styles.detailText}>
                      {content.studioDetails.location} · {content.studioDetails.responseTime}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

