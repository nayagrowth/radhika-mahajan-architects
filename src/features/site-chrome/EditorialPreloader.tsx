"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./editorial-preloader.module.css";

interface EditorialPreloaderProps {
  onReady?: () => void;
}

const PHASES = [
  { threshold: 0, text: "CALIBRATING SPATIAL GRID & DATUM", step: "01/04" },
  { threshold: 28, text: "COMPUTING GOLDEN RATIO PROPORTIONS (φ 1.618)", step: "02/04" },
  { threshold: 58, text: "DECODING VOLUMETRIC MATERIALS & ASSETS", step: "03/04" },
  { threshold: 86, text: "SYNCHRONIZING ARCHITECTURAL FOLIO", step: "04/04" },
  { threshold: 100, text: "STAGE CALIBRATED — UNVEILING EXHIBIT", step: "READY" },
];

export function EditorialPreloader({ onReady }: EditorialPreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isComplete, setIsComplete] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  const onReadyRef = useRef(onReady);
  useEffect(() => {
    onReadyRef.current = onReady;
  }, [onReady]);

  useEffect(() => {
    if (isComplete) {
      onReadyRef.current?.();
      return;
    }

    let isMounted = true;

    // Lock scroll during preloader presentation
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 1. Asynchronously await critical webfonts & hero visual assets
    let assetsLoaded = false;
    async function preloadCriticalAssets() {
      try {
        if (typeof document !== "undefined" && "fonts" in document) {
          await document.fonts.ready;
        }

        const criticalImages = [
          "/branding/rma-logomark-gold.webp",
          "/branding/rma-logo-horizontal-blk.webp",
          "/media/radhika/radhika-hero-portrait.webp",
        ];

        await Promise.allSettled(
          criticalImages.map((src) => {
            return new Promise<void>((resolve) => {
              const img = new window.Image();
              img.src = src;
              if (img.complete) {
                if ("decode" in img) {
                  img.decode().then(() => resolve()).catch(() => resolve());
                } else {
                  resolve();
                }
              } else {
                img.onload = () => {
                  if ("decode" in img) {
                    img.decode().then(() => resolve()).catch(() => resolve());
                  } else {
                    resolve();
                  }
                };
                img.onerror = () => resolve();
              }
            });
          })
        );
      } catch {
        // Graceful fallback
      } finally {
        assetsLoaded = true;
      }
    }

    preloadCriticalAssets();

    // 2. High-precision counter interpolation (approx 1.6s minimum duration for visual choreo)
    const minDuration = 1500;
    const startTime = performance.now();
    let frameId: number;

    const tick = (now: number) => {
      if (!isMounted) return;

      const elapsed = now - startTime;
      const linearProgress = Math.min(elapsed / minDuration, 1);
      // Subtle architectural acceleration curve
      const easedProgress = Math.min(
        Math.floor(linearProgress * 100),
        assetsLoaded ? 100 : 92
      );

      setProgress((prev) => Math.max(prev, easedProgress));

      if (easedProgress < 100) {
        frameId = requestAnimationFrame(tick);
      } else {
        // Reached 100%: Brief hold on calibrated state, then trigger architectural shutter reveal
        setTimeout(() => {
          if (!isMounted) return;
          setIsExiting(true);

          setTimeout(() => {
            if (!isMounted) return;
            setIsComplete(true);
            document.body.style.overflow = originalOverflow;
            onReadyRef.current?.();
          }, 720); // Sync with CSS shutter transition
        }, 220);
      }
    };

    frameId = requestAnimationFrame(tick);

    // Safety fallback: maximum 2.8s cap
    const safetyTimer = setTimeout(() => {
      if (!isMounted) return;
      setProgress(100);
      setIsExiting(true);
      setTimeout(() => {
        if (!isMounted) return;
        setIsComplete(true);
        document.body.style.overflow = originalOverflow;
        onReadyRef.current?.();
      }, 720);
    }, 2800);

    return () => {
      isMounted = false;
      cancelAnimationFrame(frameId);
      clearTimeout(safetyTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [isComplete]);

  if (isComplete) return null;

  // Determine active phase message
  const currentPhase =
    [...PHASES].reverse().find((p) => progress >= p.threshold) || PHASES[0];

  const formattedCount = String(progress).padStart(2, "0");

  return (
    <aside
      className={`${styles.preloaderRoot} ${isExiting ? styles.preloaderExiting : ""}`}
      aria-label="Loading Radhika Mahajan Architects official spatial portfolio"
      aria-live="polite"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Cinematic Dual-Shutter Aperture */}
      <div className={`${styles.curtain} ${styles.curtainTop}`} aria-hidden="true">
        <div className={styles.curtainGrid} />
      </div>
      <div className={`${styles.curtain} ${styles.curtainBottom}`} aria-hidden="true">
        <div className={styles.curtainGrid} />
      </div>

      {/* Center Seam Hairline */}
      <div className={styles.shutterSeam} aria-hidden="true" />

      {/* Folio Perimeter HUD Frame */}
      <div className={styles.hudOverlay} aria-hidden="true">
        {/* Top-Left Stamp */}
        <div className={styles.hudTopLeft}>
          <span className={styles.hudTitle}>RADHIKA MAHAJAN ARCHITECTS</span>
          <span className={styles.hudSub}>PORTFOLIO REVELATION // STAGE 01</span>
          <span className={styles.hudCross}>✛</span>
        </div>

        {/* Top-Right Stamp */}
        <div className={styles.hudTopRight}>
          <span className={styles.hudMono}>GEO: 18°31&apos;13&quot;N · 73°51&apos;24&quot;E</span>
          <span className={styles.hudSub}>DATUM ±0.000 // SCALE 1:100</span>
          <span className={styles.hudCross}>✛</span>
        </div>

        {/* Bottom-Left Phase Calibrator */}
        <div className={styles.hudBottomLeft}>
          <div className={styles.phaseIndicator}>
            <span className={styles.phaseStep}>[{currentPhase.step}]</span>
            <span className={styles.phaseText}>{currentPhase.text}</span>
            <span className={styles.blinker}>_</span>
          </div>
        </div>

        {/* Bottom-Right Numerical Counter */}
        <div className={styles.hudBottomRight}>
          <div className={styles.counterBox}>
            <span className={styles.counterNum}>{formattedCount}</span>
            <span className={styles.counterPercent}>%</span>
          </div>
          <span className={styles.counterStatus}>
            {progress === 100 ? "[ CALIBRATED ]" : "[ CALIBRATING ]"}
          </span>
        </div>
      </div>

      {/* Central Architectural Drafting Stage */}
      <div className={styles.centerStage}>
        {/* Vector CAD Reticle & Compass Assembly */}
        <div className={styles.reticleWrapper} aria-hidden="true">
          <svg
            viewBox="0 0 500 500"
            className={styles.reticleSvg}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ambient Radial Backlight */}
            <defs>
              <radialGradient id="reticleWarmth" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#c89545" stopOpacity="0.18" />
                <stop offset="50%" stopColor="#8f621f" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#050206" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d8aa5a" />
                <stop offset="50%" stopColor="#c89545" />
                <stop offset="100%" stopColor="#8f621f" />
              </linearGradient>
            </defs>

            {/* Radiant Ambient Core */}
            <circle cx="250" cy="250" r="230" fill="url(#reticleWarmth)" />

            {/* Precision Datum Axis Lines (X / Y) */}
            <line x1="20" y1="250" x2="480" y2="250" className={styles.axisLine} />
            <line x1="250" y1="20" x2="250" y2="480" className={styles.axisLine} />

            {/* Axis Millimeter Graduation Marks */}
            {[-180, -120, -60, 60, 120, 180].map((offset) => (
              <React.Fragment key={offset}>
                <line
                  x1={250 + offset}
                  y1={246}
                  x2={250 + offset}
                  y2={254}
                  className={styles.axisTick}
                />
                <line
                  x1={246}
                  y1={250 + offset}
                  x2={254}
                  y2={250 + offset}
                  className={styles.axisTick}
                />
              </React.Fragment>
            ))}

            {/* Corner Registration Crosshairs */}
            <g className={styles.registrationGroup}>
              <path d="M 60 70 L 60 60 L 70 60" className={styles.regBracket} />
              <path d="M 440 70 L 440 60 L 430 60" className={styles.regBracket} />
              <path d="M 60 430 L 60 440 L 70 440" className={styles.regBracket} />
              <path d="M 440 430 L 440 440 L 430 440" className={styles.regBracket} />
            </g>

            {/* Outer Rotating Azimuth Degree Ring (Clockwise) */}
            <g className={styles.azimuthRing}>
              <circle cx="250" cy="250" r="214" className={styles.azimuthCircle} />
              {/* 36 Radial Degree Ticks (Every 10°) */}
              {Array.from({ length: 36 }).map((_, i) => {
                const angle = i * 10;
                const isMajor = i % 9 === 0;
                const isMedium = i % 3 === 0;
                const tickLen = isMajor ? 12 : isMedium ? 8 : 4;
                return (
                  <line
                    key={angle}
                    x1="250"
                    y1={250 - 214}
                    x2="250"
                    y2={250 - 214 + tickLen}
                    transform={`rotate(${angle} 250 250)`}
                    className={isMajor ? styles.azimuthTickMajor : styles.azimuthTick}
                  />
                );
              })}
              {/* Cardinal Coordinates */}
              <text x="250" y="28" className={styles.cardinalText}>000°</text>
              <text x="472" y="254" className={styles.cardinalText}>090°</text>
              <text x="250" y="478" className={styles.cardinalText}>180°</text>
              <text x="28" y="254" className={styles.cardinalText}>270°</text>
            </g>

            {/* Middle Caliper Ring (Counter-Clockwise) */}
            <g className={styles.caliperRing}>
              <circle cx="250" cy="250" r="172" className={styles.caliperDashedCircle} />
              {/* 4 Precision Caliper Arc Segments */}
              <path
                d="M 250 78 A 172 172 0 0 1 372 128"
                className={styles.caliperAccentArc}
              />
              <path
                d="M 250 422 A 172 172 0 0 1 128 372"
                className={styles.caliperAccentArc}
              />
            </g>

            {/* Dynamic Progress Arc (Golden Ratio Armature) */}
            <circle
              cx="250"
              cy="250"
              r="132"
              className={styles.progressTrack}
            />
            <circle
              cx="250"
              cy="250"
              r="132"
              className={styles.progressArc}
              style={{
                strokeDashoffset: 829 - (829 * progress) / 100,
              }}
            />

            {/* Inner Concentric Golden Orbit */}
            <circle cx="250" cy="250" r="92" className={styles.innerOrbit} />
          </svg>

          {/* Central RMA Official Architectural Monogram Core */}
          <div className={styles.monogramCore}>
            <div className={styles.monogramGlow} />
            <div className={styles.monogramImgContainer}>
              <Image
                src="/branding/rma-logomark-gold.webp"
                alt="Radhika Mahajan Architects Official Seal"
                width={104}
                height={104}
                priority
                className={styles.monogramImage}
              />
            </div>
          </div>
        </div>

        {/* Brand Lockup */}
        <div className={styles.brandLockup}>
          <h2 className={styles.brandTitle}>RADHIKA MAHAJAN ARCHITECTS</h2>
          <div className={styles.brandTaglineRow}>
            <span className={styles.taglineSegment}>FORM</span>
            <span className={styles.taglineSeparator}>×</span>
            <span className={styles.taglineSegment}>SPACE</span>
            <span className={styles.taglineSeparator}>×</span>
            <span className={styles.taglineSegment}>DETAIL</span>
          </div>
        </div>

        {/* Architectural Vernier Caliper Scale */}
        <div className={styles.caliperScaleContainer}>
          <div className={styles.caliperRulerTicks} aria-hidden="true">
            <span className={styles.rulerMark}>00</span>
            <span className={styles.rulerMark}>25</span>
            <span className={styles.rulerMark}>50</span>
            <span className={styles.rulerMark}>75</span>
            <span className={styles.rulerMark}>100</span>
          </div>

          <div className={styles.caliperBarTrack}>
            <div
              className={styles.caliperBarFill}
              style={{ width: `${progress}%` }}
            />
            <div
              className={styles.caliperCursor}
              style={{ left: `${progress}%` }}
            />
          </div>

          <div className={styles.caliperSubtext}>
            <span>STUDIO CAD VERNIER // METRIC SCALE</span>
            <span>{progress}% CALIBRATED</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
