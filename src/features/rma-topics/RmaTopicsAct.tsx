"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { TopicsContent } from "./topics.types";
import { topicsContent } from "./topics.content";
import styles from "./rma-topics-act.module.css";

gsap.registerPlugin(ScrollTrigger);

interface RmaTopicsActProps {
  content?: TopicsContent;
  className?: string;
}

export function RmaTopicsAct({
  content = topicsContent,
  className,
}: RmaTopicsActProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartX = useRef<number>(0);
  const scrollLeftStart = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const hasDraggedRef = useRef<boolean>(false);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const progressBar = progressBarRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        const windowWidth = window.innerWidth;
        return -(trackWidth - windowWidth + Math.min(windowWidth * 0.1, 140));
      };

      const horizontalTween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.6,
          start: "top top",
          end: () => `+=${Math.max(track.scrollWidth - window.innerWidth + 900, 1800)}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBar) {
              gsap.set(progressBar, { scaleX: self.progress });
            }
            const total = content.topics.length;
            const newIndex = Math.min(
              Math.floor(self.progress * total),
              total - 1
            );
            setActiveIndex(newIndex);
          },
        },
      });

      return () => {
        horizontalTween.kill();
      };
    }, section);

    return () => ctx.revert();
  }, [content.topics.length]);

  // Pointer Drag Handlers for Interactive Click & Drag
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    dragStartX.current = e.clientX;
    const matrix = window.getComputedStyle(trackRef.current!).transform;
    if (matrix !== "none") {
      const values = matrix.split("(")[1].split(")")[0].split(",");
      scrollLeftStart.current = parseFloat(values[4]);
    } else {
      scrollLeftStart.current = 0;
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    const deltaX = e.clientX - dragStartX.current;
    if (Math.abs(deltaX) > 6) {
      hasDraggedRef.current = true;
      setIsDragging(true);
    }
    gsap.set(trackRef.current, {
      x: scrollLeftStart.current + deltaX,
    });
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 60);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="topics"
      className={`${styles.topicsPinSection} ${className || ""}`}
      aria-labelledby="topics-heading"
      data-story-act5="true"
    >
      <div className={styles.atmosphereLayer} aria-hidden="true" />

      <div className={styles.pinnedContentStage}>
        {/* Top Eyebrow & Master Header Row */}
        <header className={styles.topControlHeader}>
          <div className={styles.headerTitleGroup}>
            <div className={styles.eyebrowRow} data-story-act5-eyebrow="true">
              <span className={styles.eyebrowDiamond} aria-hidden="true">◆</span>
              <span className={styles.eyebrowText}>
                {content.sectionNumber} / {content.eyebrow || "PRACTICE AREAS & DISCIPLINES"}
              </span>
              <div className={styles.eyebrowHairline} aria-hidden="true" />
            </div>

            <h2 id="topics-heading" className={styles.headline}>
              <span>{content.headlineWord1}</span>{" "}
              <span className={styles.headlineAccentWord}>
                {content.headlineWord2}
                {content.headlineAccent ? (
                  <span className={styles.headlineStar} aria-hidden="true">
                    {" "}{content.headlineAccent}
                  </span>
                ) : (
                  <span className={styles.goldPeriod}>.</span>
                )}
              </span>
            </h2>
          </div>

          {/* Right Live Card Counter & Hint */}
          <div className={styles.counterGroup}>
            <div className={styles.activePillBadge}>
              <span className={styles.counterCurrent}>
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className={styles.counterSlash}>/</span>
              <span className={styles.counterTotal}>
                {String(content.topics.length).padStart(2, "0")}
              </span>
            </div>
            <span className={styles.scrollHintText}>Scroll or Drag to Explore →</span>
          </div>
        </header>

        {/* Pinned Horizontal Cards Rail */}
        <div
          ref={trackRef}
          className={`${styles.horizontalTrack} ${isDragging ? styles.isDragging : ""}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          role="region"
          aria-label="Horizontal Practice Areas Showcase"
        >
          {content.topics.map((item, idx) => {
            const isCenterActive = idx === activeIndex;
            return (
              <article
                key={item.id}
                className={`${styles.folioCard} ${
                  isCenterActive ? styles.folioCardActive : ""
                }`}
                data-story-act5-item="true"
              >
                <Link
                  href={item.href || "/projects"}
                  className={styles.cardLink}
                  onClick={handleCardClick}
                >
                  {/* Photo Frame with Vignette and Badge */}
                  <div className={styles.imageFrame}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 420px"
                      className={styles.cardPhoto}
                      loading="lazy"
                    />
                    <div className={styles.imageVignette} />

                    {/* Floating Architectural Badge */}
                    <div className={styles.topBadgeBar}>
                      <span className={styles.badgeTag}>{item.tag}</span>
                      <span className={styles.badgeNumber}>— {item.number} —</span>
                    </div>
                  </div>

                  {/* Card Editorial Body */}
                  <div className={styles.cardBody}>
                    <div className={styles.cardTitleRow}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <span className={styles.cardArrowIcon} aria-hidden="true">
                        ↗
                      </span>
                    </div>

                    <p className={styles.cardDescription}>{item.description}</p>

                    {/* Micro Architectural Specs */}
                    {item.specs && item.specs.length > 0 && (
                      <div className={styles.specsRow}>
                        {item.specs.map((spec, sIdx) => (
                          <span key={sIdx} className={styles.specPill}>
                            {spec}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Card Footer Crosshair */}
                    <div className={styles.cardFooterBar}>
                      <span className={styles.footerLinkText}>Explore Discipline</span>
                      <span className={styles.footerCrosshair} aria-hidden="true">+</span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom Horizontal Progress Bar & Guarantees Strip */}
        <footer className={styles.bottomControlBar}>
          <div className={styles.progressTrack}>
            <div ref={progressBarRef} className={styles.progressBarFill} />
          </div>

          <div className={styles.guaranteeStrip} data-story-act5-guarantees="true">
            <div className={styles.guaranteeItem}>
              <span className={styles.guaranteeIcon}>✦</span>
              <span className={styles.guaranteeText}>100% 3D Photorealistic Pre-Visualization</span>
            </div>
            <div className={styles.guaranteeDivider} aria-hidden="true" />
            <div className={styles.guaranteeItem}>
              <span className={styles.guaranteeIcon}>✦</span>
              <span className={styles.guaranteeText}>Calibrated Materials & Branded Hardware (Hettich, Ebco)</span>
            </div>
            <div className={styles.guaranteeDivider} aria-hidden="true" />
            <div className={styles.guaranteeItem}>
              <span className={styles.guaranteeIcon}>✦</span>
              <span className={styles.guaranteeText}>45-Day Turnkey Delivery Commitment</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

