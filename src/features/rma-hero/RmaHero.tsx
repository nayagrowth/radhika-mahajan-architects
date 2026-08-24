"use client";

import React from "react";
import Image from "next/image";
import { MobileNav } from "./MobileNav";
import type { HeroContent, HeroCta } from "./hero.types";
import styles from "./rma-hero.module.css";

const EVENT_SCHEMA_VERSION = "1";

function CtaButton({ cta }: { cta: HeroCta }) {
  if (!cta.href) return null;

  return (
    <a
      className={cta.kind === "primary" ? styles.primaryCta : styles.secondaryCta}
      href={cta.href}
      data-ac-event={cta.event}
      data-ac-event-schema={EVENT_SCHEMA_VERSION}
      data-ac-surface="rma-public-hero"
    >
      <span className={styles.ctaText}>{cta.label}</span>
      <span aria-hidden="true" className={styles.ctaArrow}>
        →
      </span>
    </a>
  );
}

export function RmaHero({ content }: { content: HeroContent }) {
  return (
    <section
      id="hero"
      className={styles.surface}
      aria-labelledby="hero-heading"
      data-story-act1="true"
    >
      {/* Full-Bleed Master Architectural Scene Background */}
      <div className={styles.sceneBackground} data-story-scene="true">
        <Image
          src="/hero/hero-scene-full.webp"
          alt="Architectural Interior Studio Scene — Radhika Mahajan Architects"
          fill
          priority
          sizes="100vw"
          className={styles.sceneImg}
        />
        <div className={styles.sceneAtmosphereGlow} aria-hidden="true" />
      </div>

      {/* Master Architectural Header */}
      <header className={styles.header} data-story-header="true">
        <div className={styles.headerInner}>
          <a
            className={styles.brandLink}
            href="#hero"
            aria-label="Radhika Mahajan Architects — Home"
          >
            <Image
              src="/branding/rma-logo-horizontal-blk.webp"
              alt="Radhika Mahajan Architects"
              width={230}
              height={72}
              className={styles.headerSignatureImg}
              priority
            />
          </a>

          <nav className={styles.desktopNav} aria-label="Architectural Navigation">
            {content.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`${styles.navLink} ${
                  link.active ? styles.navLinkActive : ""
                }`}
              >
                <span>{link.label}</span>
                {link.active ? (
                  <span className={styles.activeIndicator} aria-hidden="true">
                    ◆
                  </span>
                ) : null}
              </a>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <a
              href="/contact"
              className={styles.headerCtaBtn}
              data-ac-event="public.rma_hero.header_consultation_clicked"
            >
              <span>Book Consultation</span>
              <span className={styles.headerCtaArrow} aria-hidden="true">↗</span>
            </a>

            <MobileNav
              navLinks={content.navLinks}
              ctas={content.ctas}
              brandFirstLine={content.brandFirstLine}
              brandSecondLine={content.brandSecondLine}
            />
          </div>
        </div>
      </header>

      {/* 58 / 42 Art-Directed Viewport Stage */}
      <div className={styles.heroGrid}>
        {/* Left Column (58%): Small positioning line, Headline, Controlled 2-line copy, CTAs */}
        <div className={styles.copyColumn} data-story-copy-column="true">
          {/* Eyebrow / Kicker */}
          <div className={styles.kickerRow} data-story-kicker="true">
            <span className={styles.kickerText}>{content.kicker}</span>
          </div>

          {/* Headline */}
          <h1 id="hero-heading" className={styles.headline}>
            <span className={styles.headlineLine} data-story-headline-line="true">
              {content.headlinePart1}
            </span>
            <span className={styles.headlineLine} data-story-headline-line="true">
              {content.headlinePart2}
            </span>
          </h1>

          {/* Supporting Copy (Controlled 2 Lines, ~540px width) */}
          <p className={styles.supportingCopy} data-story-copy="true">
            {content.supportingCopy}
          </p>

          {/* CTAs */}
          {content.ctas.some((cta) => Boolean(cta.href)) ? (
            <div
              className={styles.ctaRow}
              data-story-cta-row="true"
              aria-label="Hero actions"
            >
              {content.ctas.map((cta) => (
                <CtaButton cta={cta} key={cta.event} />
              ))}
            </div>
          ) : null}
        </div>

        {/* Right Column (42%): Art-Directed Portrait Inhabiting Architectural Scene */}
        <div className={styles.portraitColumn} data-story-portrait-root="true">
          <div className={styles.figureStage}>
            <div className={styles.figureImageWrapper}>
              <Image
                src="/hero/radhika-hero-cutout.webp"
                alt="Ar. Radhika Mahajan — Founder & Principal Architect"
                width={760}
                height={1140}
                className={styles.standingFigureImg}
                priority
                quality={95}
              />
              <div className={styles.portraitGroundGlow} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


