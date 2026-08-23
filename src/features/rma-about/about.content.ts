/**
 * Radhika Mahajan Architects (RMA) — About Content Contract
 * Source of truth for Ar. Radhika Mahajan, studio philosophy, and credentials.
 */

export interface JourneyStage {
  index: string;
  title: string;
  body: string;
}

export interface PhilosophyEntry {
  statement: string;
  elaboration: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export const aboutContent = {
  hero: {
    eyebrow: "About Radhika Mahajan Architects",
    headline: "Designing Spaces. Creating Experiences.",
    body: [
      "I am Ar. Radhika Mahajan — Founder and Principal Architect of Radhika Mahajan Architects (RMA).",
      "With over 35+ completed projects across Pune and Lonavala, our practice specializes in high-end residential architecture, full home interiors (3 & 4 BHKs), luxury weekend retreats, and turnkey commercial destinations.",
      "What drives our practice is not decorative trends, but spatial clarity: balancing natural light, proportion, honest materials, and precise execution so every space feels authored, timeless, and effortlessly comfortable.",
    ],
  },

  story: {
    index: "01",
    label: "Our Story",
    headline: "Form × Space × Detail",
    paragraphs: [
      "Our practice was founded on a simple observation: too many homeowners experience unnecessary friction during interior design—delays, hidden costs, uncoordinated vendors, and finished spaces that look nothing like initial sketches.",
      "We built RMA to replace that uncertainty with complete architectural clarity. By combining 3D photorealistic spatial planning with an in-house execution team, we ensure what you see in the design phase is exactly what gets delivered on site.",
      "From selecting certified BWR plywood and precision German hardware to supervising masonry and lighting on site, we manage the entire project lifecycle with personal principal supervision.",
      "Today, RMA has delivered 35+ landmark residences across Pune's premier addresses (Kolte Patil, Godrej Infinity, Koregaon Park, Baner, Bibewadi) and luxury hillside retreats in Lonavala.",
    ],
  },

  journey: {
    index: "02",
    label: "Journey",
    headline: "From architectural concept to built reality",
    stages: [
      {
        index: "01",
        title: "Architectural Foundation",
        body: "Rigorous training in spatial geometry, sun-path dynamics, structural planning, and climate-responsive architecture.",
      },
      {
        index: "02",
        title: "On-Site Execution Mastery",
        body: "Direct on-site supervision across civil remodeling, false ceiling frameworks, precision plumbing, and electrical load distribution.",
      },
      {
        index: "03",
        title: "Material & Hardware Integrity",
        body: "Establishing direct brand partnerships with Hettich, Ebco, Century, Greenply, and Asian Paints to ensure uncompromised longevity.",
      },
      {
        index: "04",
        title: "The Turnkey 45-Day Blueprint",
        body: "Pioneering a structured 45 to 60 day delivery framework with WhatsApp progress milestones every 3 days and clear 40-40-20 payment stages.",
      },
      {
        index: "05",
        title: "Radhika Mahajan Architects (OPC) Pvt Ltd",
        body: "Expanding our studio into an integrated architecture and turnkey interior design practice recognized for refined individuality.",
      },
    ] as JourneyStage[],
  },

  philosophy: {
    index: "03",
    label: "Our Philosophy",
    headline: "Four principles that anchor every space",
    entries: [
      {
        statement: "Space is the primary hero.",
        elaboration:
          "Circulation, natural ventilation, and daylight must be perfected before decorative finishes or cabinetry are placed.",
      },
      {
        statement: "Explain the decision behind the design.",
        elaboration:
          "Every partition, acoustic ceiling drop, and lighting grid is validated with 3D visualization so you understand its functional purpose.",
      },
      {
        statement: "Material, proportion and craft over transient trends.",
        elaboration:
          "Calibrated plywood, natural stones, precision joinery, and warm ambient palettes create enduring elegance that matures gracefully.",
      },
      {
        statement: "Predictability builds peace of mind.",
        elaboration:
          "Transparent BOQ quotations with zero hidden surprises, committed timelines, and regular milestone updates ensure a stress-free experience.",
      },
    ] as PhilosophyEntry[],
  },

  principles: {
    index: "04",
    label: "Our Principles",
    headline: "How we practice",
    items: [
      "Understand family lifestyle before drawing the first line.",
      "Design for natural light, air circulation, and functional ergonomics.",
      "Never compromise on core structural materials or joinery hardware.",
      "Provide complete 3D visualization and material boards before execution.",
      "Maintain absolute transparency in BOQs with zero hidden costs.",
      "Adhere strictly to committed 45–60 day execution milestones.",
      "Share progress reports and photographic updates on WhatsApp every 3 days.",
      "Provide dedicated post-handover support and warranty assurance.",
    ],
  },

  missionVision: {
    index: "05",
    label: "Mission & Vision",
    mission: {
      headline: "Designing homes that feel like you.",
      body: "To craft residential and commercial environments that seamlessly unite functional efficiency with bespoke aesthetic identity, giving our clients a joyful, stress-free turnkey journey.",
    },
    vision: {
      headline: "Setting the standard for architectural interior excellence.",
      body: "To be Maharashtra's most trusted architecture and interior design studio, renowned for authored spaces, structural integrity, and impeccable timeline execution.",
    },
  },

  faq: {
    index: "06",
    label: "FAQ",
    headline: "Frequently Asked Questions",
    entries: [
      {
        question: "What services does Radhika Mahajan Architects specialize in?",
        answer:
          "We provide comprehensive architectural planning and full turnkey interior design for 3 & 4 BHK residences, luxury bungalows, weekend retreats in Lonavala, boutique offices, modular kitchens, and complete civil renovations.",
      },
      {
        question: "Which areas and cities do you serve?",
        answer:
          "We actively undertake projects throughout Pune (including Bibewadi, Koregaon Park, Baner, Kothrud, Kalyani Nagar, Kolte Patil developments, and Godrej Infinity) as well as Lonavala and surrounding regions.",
      },
      {
        question: "What is your typical project execution timeline?",
        answer:
          "Our full home interior projects typically take 45 to 60 days depending on scope. We follow a strict phase-wise execution plan with WhatsApp updates shared every 3 days.",
      },
      {
        question: "Which material brands and standards do you use?",
        answer:
          "We exclusively specify certified branded materials including Hettich and Ebco hardware, Century and Greenply calibrated plywood, Asian Paints, and premium Italian marbles and laminates.",
      },
      {
        question: "What is your payment structure?",
        answer:
          "We operate on a transparent milestone-based 40-40-20 payment plan linked directly to verified on-site completion phases.",
      },
    ] as FaqEntry[],
  },

  cta: {
    primary: {
      text: "Ready to design your dream residence?",
      label: "Book Design Consultation",
      href: "/contact",
    },
    secondary: {
      text: "Explore our built architectural portfolio",
      label: "View Projects Gallery",
    },
  },
} as const;
