"use client";

import { useLayoutEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseHomeIntroTimelineProps {
  shellRef: RefObject<HTMLElement | null>;
  stageRef: RefObject<HTMLElement | null>;
  bridgeRuleRef: RefObject<HTMLElement | null>;
}

export function useHomeIntroTimeline({
  shellRef,
  stageRef,
  bridgeRuleRef,
}: UseHomeIntroTimelineProps) {
  useLayoutEffect(() => {
    const shell = shellRef.current;
    const stage = stageRef.current;
    const bridgeRule = bridgeRuleRef.current;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        "[data-story-act1-wrapper], [data-story-act2-wrapper], [data-story-act3-wrapper], [data-story-act4-wrapper], [data-story-act5], [data-story-act6], [data-story-act7]",
        {
          opacity: 1,
          visibility: "visible",
          clearProps: "transform",
        }
      );
      return;
    }

    const mm = gsap.matchMedia();

    // =========================================================================
    // 1. DESKTOP CONTINUOUS STORY CHOREOGRAPHY (>= 769px)
    // =========================================================================
    mm.add("(min-width: 769px)", () => {
      if (!shell || !stage) return;

      // -----------------------------------------------------------------------
      // PART 1-4: PINNED 4-ACT STORY TIMELINE (Acts 1 to 4)
      // -----------------------------------------------------------------------
      const act1Wrapper = stage.querySelector("[data-story-act1-wrapper]");
      const act1Scene = stage.querySelector("[data-story-scene], [data-story-niche]");
      const act1Portrait = stage.querySelector("[data-story-portrait-root]");
      const act1CopyColumn = stage.querySelector("[data-story-copy-column]");
      const act1Header = stage.querySelector("[data-story-header]");
      const act1PageShadow = stage.querySelector("[data-story-page-shadow]");
      const act1PageSheen = stage.querySelector("[data-story-page-sheen]");
      const act2Wrapper = stage.querySelector("[data-story-act2-wrapper]");
      const act3Wrapper = stage.querySelector("[data-story-act3-wrapper]");
      const act4Wrapper = stage.querySelector("[data-story-act4-wrapper]");

      const act2Scene = stage.querySelector("[data-story-act2-scene]");
      const act2Index = stage.querySelector("[data-story-act2-index]");
      const act2HeadlineLines = stage.querySelectorAll(
        "[data-story-act2-headline]"
      );
      const act2Copy = stage.querySelector("[data-story-act2-copy]");
      const act2Cta = stage.querySelector("[data-story-act2-cta]");
      const act2Stats = stage.querySelector("[data-story-act2-stats]");

      const act3Eyebrow = stage.querySelector("[data-story-act3-eyebrow]");
      const act3HeadlineLines = stage.querySelectorAll(
        "[data-story-act3-headline]"
      );
      const act3Star = stage.querySelector("[data-story-act3-star]");
      const act3Note = stage.querySelector("[data-story-act3-note]");
      const act3Items = stage.querySelectorAll("[data-story-act3-item]");
      const act3Footer = stage.querySelector("[data-story-act3-footer]");

      const act4Index = stage.querySelector("[data-story-act4-index]");
      const act4Kicker = stage.querySelector("[data-story-act4-kicker]");
      const act4Lines = stage.querySelectorAll("[data-story-act4-line]");
      const act4Rule = stage.querySelector("[data-story-act4-rule]");
      const act4Tenets = stage.querySelector("[data-story-act4-tenets]");
      const act4Cards = stage.querySelectorAll("[data-story-act4-tenets] > article");
      const act4Stairs = stage.querySelector("[data-story-act4-stairs]");
      const act4Circles = stage.querySelector("[data-story-act4-circles]");
      const act4Diamond = stage.querySelector("[data-story-act4-diamond]");
      const act4Crosshairs = stage.querySelectorAll("[data-story-act4-crosshair]");

      if (bridgeRule) {
        gsap.set(bridgeRule, {
          scaleX: 0,
          opacity: 0,
          transformOrigin: "left center",
        });
      }

      // Initial 3D Spatial States
      if (act1Wrapper) {
        gsap.set(act1Wrapper, {
          rotateY: 0,
          rotateZ: 0,
          x: 0,
          y: 0,
          transformOrigin: "left center",
        });
      }
      if (act1PageShadow) gsap.set(act1PageShadow, { opacity: 0 });
      if (act1PageSheen) gsap.set(act1PageSheen, { opacity: 0 });

      gsap.set(act2Wrapper, { visibility: "hidden", opacity: 0, scale: 0.98 });
      gsap.set(act3Wrapper, { visibility: "hidden", opacity: 0, scale: 0.98 });
      gsap.set(act4Wrapper, { visibility: "hidden", opacity: 0 });

      if (act2Scene) gsap.set(act2Scene, { opacity: 0, scale: 1.05, xPercent: 3 });
      if (act2Index) gsap.set(act2Index, { opacity: 0, y: -8 });
      if (act2HeadlineLines.length) gsap.set(act2HeadlineLines, { yPercent: 105 });
      if (act2Copy) gsap.set(act2Copy, { opacity: 0, y: 12 });
      if (act2Cta) gsap.set(act2Cta, { opacity: 0, y: 12 });
      if (act2Stats) gsap.set(act2Stats, { opacity: 0, y: 16 });

      if (act3Eyebrow) gsap.set(act3Eyebrow, { opacity: 0, y: -8 });
      if (act3HeadlineLines.length) gsap.set(act3HeadlineLines, { yPercent: 105 });
      if (act3Star) gsap.set(act3Star, { opacity: 0, scale: 0.4 });
      if (act3Note) gsap.set(act3Note, { opacity: 0, y: 10 });
      if (act3Items.length) gsap.set(act3Items, { opacity: 0, y: 20 });
      if (act3Footer) gsap.set(act3Footer, { opacity: 0, y: 10 });

      gsap.set(act4Index, { opacity: 0, y: -8 });
      gsap.set(act4Kicker, { opacity: 0, y: -6 });
      gsap.set(act4Lines, { yPercent: 105 });
      gsap.set(act4Rule, { scaleX: 0, opacity: 0, transformOrigin: "center" });
      gsap.set(act4Tenets, { opacity: 0, y: 16 });
      if (act4Cards.length) gsap.set(act4Cards, { opacity: 0, y: 16 });
      if (act4Stairs) gsap.set(act4Stairs, { opacity: 0, scale: 0.92, transformOrigin: "bottom left" });
      if (act4Circles) gsap.set(act4Circles, { opacity: 0, rotate: -25, scale: 0.88, transformOrigin: "top right" });
      if (act4Diamond) gsap.set(act4Diamond, { scale: 0, rotate: 0, transformOrigin: "center" });
      if (act4Crosshairs.length) gsap.set(act4Crosshairs, { opacity: 0, rotate: -45, scale: 0.4, transformOrigin: "center" });

      // MASTER TIMELINE: Pure Kinetic Direct-Scroll Scrub (Butter-smooth, 1:1 scroll responsiveness)
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: shell,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.15, // Direct, instantaneous 1:1 physical scroll response
          pin: stage,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
      });

      // -----------------------------------------------------------------------
      // BEAT 1: ARCHITECTURAL SPATIAL ELEVATION & PARALLAX DISSOLVE (0.0 -> 0.45)
      // Multilayer architectural depth transition revealing Act 2 credentials
      // -----------------------------------------------------------------------
      masterTl.addLabel("SPATIAL_TRANSITION", 0.0);

      // 1. Full-bleed architectural background scene eases outward with spatial parallax
      if (act1Scene) {
        masterTl.to(
          act1Scene,
          {
            xPercent: 8,
            scale: 1.05,
            opacity: 0,
            duration: 0.38,
            ease: "power2.inOut",
          },
          "SPATIAL_TRANSITION"
        );
      }

      // 2. Standing Principal Architect figure elevates with depth
      if (act1Portrait) {
        masterTl.to(
          act1Portrait,
          {
            yPercent: -12,
            scale: 1.04,
            opacity: 0,
            duration: 0.36,
            ease: "power2.inOut",
          },
          "SPATIAL_TRANSITION"
        );
      }

      // 3. Left architectural statement and process card glide upward with precision
      if (act1CopyColumn) {
        masterTl.to(
          act1CopyColumn,
          {
            yPercent: -14,
            opacity: 0,
            duration: 0.34,
            ease: "power2.inOut",
          },
          "SPATIAL_TRANSITION"
        );
      }

      // 4. Header nav dissolves upward
      if (act1Header) {
        masterTl.to(
          act1Header,
          {
            yPercent: -20,
            opacity: 0,
            duration: 0.28,
            ease: "power2.inOut",
          },
          "SPATIAL_TRANSITION"
        );
      }

      // 5. Clean spatial dissolution of Act 1 stage (zero book/paper distortion)
      if (act1Wrapper) {
        masterTl.to(
          act1Wrapper,
          {
            opacity: 0,
            scale: 0.98,
            duration: 0.4,
            ease: "power2.inOut",
          },
          "SPATIAL_TRANSITION"
        );
        masterTl.set(
          act1Wrapper,
          {
            visibility: "hidden",
          },
          "SPATIAL_TRANSITION+=0.42"
        );
      }

      // 6. Act 2 Emerges with Architectural Clarity & Precision
      masterTl.addLabel("ACT2_ENTER", 0.12);
      masterTl.set(
        act2Wrapper,
        {
          visibility: "visible",
          opacity: 1,
        },
        "ACT2_ENTER"
      );
      masterTl.to(
        act2Wrapper,
        {
          scale: 1,
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        },
        "ACT2_ENTER"
      );

      if (act2Scene) {
        masterTl.to(
          act2Scene,
          {
            opacity: 1,
            scale: 1,
            xPercent: 0,
            duration: 0.48,
            ease: "power2.out",
          },
          "ACT2_ENTER"
        );
      }

      if (act2Index) {
        masterTl.to(
          act2Index,
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out",
          },
          "ACT2_ENTER+=0.02"
        );
      }
      if (act2HeadlineLines.length) {
        masterTl.to(
          act2HeadlineLines,
          {
            yPercent: 0,
            duration: 0.42,
            stagger: 0.06,
            ease: "power3.out",
          },
          "ACT2_ENTER+=0.04"
        );
      }
      if (act2Copy) {
        masterTl.to(
          act2Copy,
          {
            opacity: 1,
            y: 0,
            duration: 0.32,
            ease: "power2.out",
          },
          "ACT2_ENTER+=0.1"
        );
      }
      if (act2Cta) {
        masterTl.to(
          act2Cta,
          {
            opacity: 1,
            y: 0,
            duration: 0.32,
            ease: "power2.out",
          },
          "ACT2_ENTER+=0.12"
        );
      }
      if (act2Stats) {
        masterTl.to(
          act2Stats,
          {
            opacity: 1,
            y: 0,
            duration: 0.38,
            ease: "power2.out",
          },
          "ACT2_ENTER+=0.14"
        );
      }

      // ACT 2 SOLID READING HOLD (Prevents premature trigger into Act 3)
      masterTl.addLabel("ACT2_HOLD", 0.6);
      masterTl.to({}, { duration: 1.0 }, "ACT2_HOLD");

      // -----------------------------------------------------------------------
      // BEAT 3: ACT 2 ➔ ACT 3 (PRESENCE / ENVELOPE REDESIGN) (1.8 -> 2.8)
      // -----------------------------------------------------------------------
      masterTl.addLabel("ACT2_TO_ACT3", 1.8);

      if (act2Copy) {
        masterTl.to(
          act2Copy,
          {
            y: -12,
            opacity: 0,
            duration: 0.22,
            ease: "power2.in",
          },
          "ACT2_TO_ACT3"
        );
      }
      if (act2Cta) {
        masterTl.to(
          act2Cta,
          {
            y: -12,
            opacity: 0,
            duration: 0.22,
            ease: "power2.in",
          },
          "ACT2_TO_ACT3"
        );
      }
      if (act2Stats) {
        masterTl.to(
          act2Stats,
          {
            y: 20,
            opacity: 0,
            duration: 0.22,
            ease: "power2.in",
          },
          "ACT2_TO_ACT3"
        );
      }
      if (act2Index) {
        masterTl.to(
          act2Index,
          {
            y: -14,
            opacity: 0,
            duration: 0.22,
            ease: "power2.in",
          },
          "ACT2_TO_ACT3"
        );
      }
      if (act2HeadlineLines.length) {
        masterTl.to(
          act2HeadlineLines,
          {
            yPercent: -105,
            opacity: 0,
            duration: 0.25,
            stagger: 0.03,
            ease: "power2.inOut",
          },
          "ACT2_TO_ACT3+=0.04"
        );
      }
      if (act2Scene) {
        masterTl.to(
          act2Scene,
          {
            scale: 1.04,
            opacity: 0,
            duration: 0.28,
            ease: "power2.in",
          },
          "ACT2_TO_ACT3+=0.06"
        );
      }

      masterTl.to(
        act2Wrapper,
        {
          opacity: 0,
          duration: 0.25,
          ease: "power1.in",
        },
        "ACT2_TO_ACT3+=0.08"
      );
      masterTl.set(
        act2Wrapper,
        {
          visibility: "hidden",
        },
        "ACT2_TO_ACT3+=0.33"
      );
      // ACT 3 ENTRANCE (Continuous Geometric Handoff into 5-Column Built Portfolio Gallery)
      masterTl.addLabel("ACT3_ENTER", 1.25);
      masterTl.set(
        act3Wrapper,
        {
          visibility: "visible",
          opacity: 1,
        },
        "ACT3_ENTER"
      );

      masterTl.to(
        act3Wrapper,
        {
          scale: 1,
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        },
        "ACT3_ENTER"
      );

      if (act3Eyebrow) {
        masterTl.to(
          act3Eyebrow,
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out",
          },
          "ACT3_ENTER+=0.02"
        );
      }
      if (act3HeadlineLines.length) {
        masterTl.to(
          act3HeadlineLines,
          {
            yPercent: 0,
            duration: 0.4,
            ease: "power3.out",
          },
          "ACT3_ENTER+=0.04"
        );
      }
      if (act3Star) {
        masterTl.to(
          act3Star,
          {
            scale: 1,
            opacity: 1,
            duration: 0.35,
            ease: "back.out(1.8)",
          },
          "ACT3_ENTER+=0.06"
        );
      }
      if (act3Note) {
        masterTl.to(
          act3Note,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "ACT3_ENTER+=0.06"
        );
      }
      if (act3Items.length) {
        masterTl.to(
          act3Items,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
          },
          "ACT3_ENTER+=0.08"
        );
      }
      if (act3Footer) {
        masterTl.to(
          act3Footer,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "ACT3_ENTER+=0.1"
        );
      }

      // -----------------------------------------------------------------------
      // BEAT 3.5: ACT 3 READING HOLD (1.4 -> 2.1)
      // -----------------------------------------------------------------------
      masterTl.addLabel("ACT3_HOLD", 1.4);
      masterTl.to({}, { duration: 0.7 }, "ACT3_HOLD");

      // -----------------------------------------------------------------------
      // BEAT 4: ACT 3 ➔ ACT 4 (THE MANIFESTO CONVERGENCE) (2.1 -> 3.0)
      // -----------------------------------------------------------------------
      masterTl.addLabel("ACT3_TO_ACT4", 2.1);

      // Project cards and headlines dissolve elegantly
      if (act3Items.length) {
        masterTl.to(
          act3Items,
          {
            y: 20,
            opacity: 0,
            duration: 0.28,
            stagger: 0.03,
            ease: "power2.in",
          },
          "ACT3_TO_ACT4"
        );
      }
      if (act3HeadlineLines.length) {
        masterTl.to(
          act3HeadlineLines,
          {
            yPercent: -105,
            opacity: 0,
            duration: 0.25,
            ease: "power2.inOut",
          },
          "ACT3_TO_ACT4"
        );
      }
      if (act3Star) {
        masterTl.to(
          act3Star,
          {
            scale: 0.4,
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
          },
          "ACT3_TO_ACT4"
        );
      }
      if (act3Note) {
        masterTl.to(
          act3Note,
          {
            opacity: 0,
            y: -10,
            duration: 0.22,
            ease: "power2.in",
          },
          "ACT3_TO_ACT4"
        );
      }
      if (act3Eyebrow) {
        masterTl.to(
          act3Eyebrow,
          {
            opacity: 0,
            y: -8,
            duration: 0.22,
            ease: "power2.in",
          },
          "ACT3_TO_ACT4"
        );
      }
      if (act3Footer) {
        masterTl.to(
          act3Footer,
          {
            opacity: 0,
            y: -8,
            duration: 0.22,
            ease: "power2.in",
          },
          "ACT3_TO_ACT4"
        );
      }

      masterTl.to(
        act3Wrapper,
        {
          opacity: 0,
          duration: 0.25,
          ease: "power1.in",
        },
        "ACT3_TO_ACT4+=0.06"
      );

      masterTl.set(
        act3Wrapper,
        {
          visibility: "hidden",
        },
        "ACT3_TO_ACT4+=0.35"
      );

      // ACT 4 ENTRANCE (Immediate, Grand, Laser-Focused Manifesto)
      masterTl.addLabel("ACT4_ENTER", 2.45);
      masterTl.set(
        act4Wrapper,
        {
          visibility: "visible",
          opacity: 1,
        },
        "ACT4_ENTER"
      );

      if (act4Stairs) {
        masterTl.to(
          act4Stairs,
          {
            opacity: 0.9,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "ACT4_ENTER"
        );
      }
      if (act4Circles) {
        masterTl.to(
          act4Circles,
          {
            opacity: 0.85,
            rotate: 0,
            scale: 1,
            duration: 0.65,
            ease: "power2.out",
          },
          "ACT4_ENTER"
        );
      }
      if (act4Index) {
        masterTl.to(
          act4Index,
          {
            opacity: 1,
            y: 0,
            duration: 0.28,
            ease: "power2.out",
          },
          "ACT4_ENTER+=0.02"
        );
      }
      if (act4Kicker) {
        masterTl.to(
          act4Kicker,
          {
            opacity: 1,
            y: 0,
            duration: 0.28,
            ease: "power2.out",
          },
          "ACT4_ENTER+=0.04"
        );
      }
      if (act4Lines.length) {
        masterTl.to(
          act4Lines,
          {
            yPercent: 0,
            duration: 0.48,
            stagger: 0.08,
            ease: "power3.out",
          },
          "ACT4_ENTER+=0.05"
        );
      }
      if (act4Rule) {
        masterTl.to(
          act4Rule,
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.38,
            ease: "power2.out",
          },
          "ACT4_ENTER+=0.08"
        );
      }
      if (act4Diamond) {
        masterTl.to(
          act4Diamond,
          {
            scale: 1,
            rotate: 45,
            duration: 0.35,
            ease: "back.out(2)",
          },
          "ACT4_ENTER+=0.08"
        );
      }
      if (act4Cards.length) {
        masterTl.to(
          act4Cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power3.out",
          },
          "ACT4_ENTER+=0.1"
        );
      }
      if (act4Crosshairs.length) {
        masterTl.to(
          act4Crosshairs,
          {
            opacity: 1,
            rotate: 0,
            scale: 1,
            duration: 0.35,
            stagger: 0.08,
            ease: "back.out(2)",
          },
          "ACT4_ENTER+=0.14"
        );
      }

      // ACT 4 READABLE HOLD (Holds cleanly with subtle kinetic blueprint drift)
      masterTl.addLabel("ACT4_HOLD", 3.1);
      if (act4Stairs) {
        masterTl.to(
          act4Stairs,
          {
            y: -15,
            duration: 0.6,
            ease: "none",
          },
          "ACT4_HOLD"
        );
      }
      if (act4Circles) {
        masterTl.to(
          act4Circles,
          {
            rotate: 15,
            duration: 0.6,
            ease: "none",
          },
          "ACT4_HOLD"
        );
      }
      masterTl.to({}, { duration: 0.6 }, "ACT4_HOLD");

      // -----------------------------------------------------------------------
      // PART 5: ACT 5 ARCHITECTURAL PRACTICE HORIZONTAL SHOWCASE
      // (Managed natively in RmaTopicsAct.tsx via Pinned Horizontal Scroll & Drag)
      // -----------------------------------------------------------------------
      const act5Section = document.querySelector('[data-story-act5="true"]');
      if (act5Section) {
        const act5Eyebrow = act5Section.querySelector("[data-story-act5-eyebrow]");
        const act5Headlines = act5Section.querySelector("h2");
        const act5Guarantees = act5Section.querySelector("[data-story-act5-guarantees]");

        const tl5 = gsap.timeline({
          scrollTrigger: {
            trigger: act5Section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        tl5.from([act5Eyebrow, act5Headlines].filter(Boolean), {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        }).from(
          act5Guarantees,
          { opacity: 0, y: 15, duration: 0.45, ease: "power2.out" },
          "-=0.2"
        );
      }

      // -----------------------------------------------------------------------
      // PART 6: ACTS 6 AND 7 (Below Stages)
      // -----------------------------------------------------------------------

      // ACT 6: LATEST THINKING (Dedicated ScrollTrigger reveals)
      const act6 = document.querySelector('[data-story-act6="true"]');
      if (act6) {
        const act6Eyebrow = act6.querySelector("[data-story-act6-eyebrow]");
        const act6Headlines = act6.querySelector("h2");
        const act6Note = act6.querySelector("[data-story-act6-note]");
        const act6Ribbon = act6.querySelector("nav");
        const act6Lead = act6.querySelector("[data-story-act6-lead]");
        const act6Items = act6.querySelectorAll("[data-story-act6-item]");
        const act6Footer = act6.querySelector("[data-story-act6-footer]");

        const tl6 = gsap.timeline({
          scrollTrigger: {
            trigger: act6,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        tl6.from([act6Eyebrow, act6Headlines].filter(Boolean), {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        })
          .from(
            act6Note,
            { opacity: 0, y: 14, duration: 0.4, ease: "power2.out" },
            "-=0.25"
          )
          .from(
            act6Ribbon,
            { opacity: 0, y: 12, scale: 0.96, duration: 0.35, ease: "back.out(1.5)" },
            "-=0.2"
          )
          .from(
            act6Lead,
            { opacity: 0, y: 30, duration: 0.6, ease: "power3.out" },
            "-=0.15"
          )
          .from(
            act6Items,
            {
              opacity: 0,
              x: 20,
              duration: 0.45,
              stagger: 0.07,
              ease: "power2.out",
            },
            "-=0.35"
          )
          .from(
            act6Footer,
            { opacity: 0, y: 15, duration: 0.45, ease: "power2.out" },
            "-=0.2"
          );
      }

      // ACT 7: ARCHITECTURAL CONSULTATION BRIDGE
      const act7 = document.querySelector('[data-story-act7="true"]');
      if (act7) {
        const act7Eyebrow = act7.querySelector("[data-story-act7-eyebrow]");
        const act7Headlines = act7.querySelector("h2");
        const act7Body = act7.querySelector("[data-story-act7-body]");
        const act7Pillars = act7.querySelector("[data-story-act7-pillars]");
        const act7Card = act7.querySelector("[data-story-act7-card]");

        const tl7 = gsap.timeline({
          scrollTrigger: {
            trigger: act7,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        tl7.from([act7Eyebrow, act7Headlines].filter(Boolean), {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        })
          .from(
            act7Body,
            { opacity: 0, y: 16, duration: 0.45, ease: "power2.out" },
            "-=0.2"
          )
          .from(
            act7Pillars,
            { opacity: 0, y: 20, duration: 0.5, ease: "power2.out" },
            "-=0.2"
          )
          .from(
            act7Card,
            { opacity: 0, y: 28, scale: 0.98, duration: 0.6, ease: "back.out(1.3)" },
            "-=0.35"
          );
      }
    });

    // =========================================================================
    // 2. MOBILE SEQUENTIAL DOCUMENT FLOW (<= 768px)
    // =========================================================================
    mm.add("(max-width: 768px)", () => {
      const allActs = [
        "[data-story-act2-wrapper]",
        "[data-story-act3-wrapper]",
        "[data-story-act4-wrapper]",
        "[data-story-act5-item]",
        "[data-story-act6]",
        "[data-story-act7]",
      ];

      allActs.forEach((actSelector) => {
        const elements = document.querySelectorAll(actSelector);
        elements.forEach((el) => {
          gsap.set(el, { visibility: "visible", opacity: 1, position: "relative" });
        });
      });
    });

    return () => mm.revert();
  }, [shellRef, stageRef, bridgeRuleRef]);
}
