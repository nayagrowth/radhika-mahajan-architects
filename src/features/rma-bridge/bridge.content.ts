import type { BridgeContent } from "./bridge.types";

export const bridgeContent: BridgeContent = {
  sectionNumber: "07",
  sectionTitle: "NEXT STEP",
  eyebrow: "START YOUR SPATIAL TRANSFORMATION",
  headlineWord1: "DESIGN",
  headlineWord2: "CONSULTATION",
  bodyParagraph:
    "Whether you are planning full home interiors for a 3 or 4 BHK, building a bespoke weekend villa in Lonavala, or redesigning a boutique commercial workspace, our in-house team guides your project from 3D concept to turnkey handover.",
  ctas: [
    {
      label: "Book 3D Consultation",
      href: "/contact",
      primary: true,
      event: "cta_book_consultation_bridge",
    },
    {
      label: "Explore Projects Gallery",
      href: "/resources",
      primary: false,
      event: "cta_explore_projects_bridge",
    },
  ],
};
