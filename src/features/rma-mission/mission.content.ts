import type { MissionContent } from "./mission.types";

export const missionContent: MissionContent = {
  sectionNumber: "04",
  sectionTitle: "THE MANIFESTO",
  kicker: "STUDIO FOUNDATION",
  headlineLine1: "Designing Spaces.",
  headlineLine2: "Creating Experiences.",
  cards: [
    {
      index: "01",
      statement: "Let architecture and interiors remain the hero.",
    },
    {
      index: "02",
      statement: "Explain the decision behind the design.",
    },
    {
      index: "03",
      statement: "Use material, proportion and craft as substance.",
    },
  ],
  monumentalQuote: {
    prefix: "Designing Spaces.",
    emphasis: "Creating Experiences",
    suffix: ".",
  },
  missionBody:
    "Architecture and interior design should feel authored, not assembled. We translate spatial logic, light, proportion, and honest materials into living environments that reflect individual lifestyle and enduring comfort.",
  pillars: [
    {
      index: "01",
      tag: "SPACE",
      statement: "Let architecture and interiors remain the hero.",
      elaboration:
        "Spatial planning must prioritize natural ventilation, effortless circulation, and breathing negative space before surface finishes begin.",
    },
    {
      index: "02",
      tag: "THINKING",
      statement: "Explain the decision behind the design.",
      elaboration:
        "Every wall alignment, lighting grid, and material selection is validated with photorealistic 3D visualization before execution on site.",
    },
    {
      index: "03",
      tag: "DETAIL & CRAFT",
      statement: "Use material, proportion and craft as substance.",
      elaboration:
        "From branded hardware (Hettich, Ebco) and calibrated plywood to bespoke joinery, precision details define the spatial experience.",
    },
  ],
};

