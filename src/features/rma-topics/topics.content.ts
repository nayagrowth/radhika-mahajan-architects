import type { TopicsContent } from "./topics.types";

/**
 * "What I Think About" — the eight subjects from the client copy master
 * (01_COPY section 06). Titles and descriptions are transcribed verbatim;
 * only the mono `tag` kickers are presentational additions.
 *
 * All hrefs now point to /articles/* (blog merged into articles).
 */
export const topicsContent: TopicsContent = {
  sectionNumber: "05",
  sectionTitle: "Practice Areas",
  headlineWord1: "WHAT WE",
  headlineWord2: "DESIGN",
  metaLabel: "Spatial Capabilities",
  supportingNote:
    "Integrated architectural planning, turnkey interior execution, and bespoke joinery for discerning homeowners and commercial spaces.",
  topics: [
    {
      id: "full-home-interiors",
      number: "01",
      tag: "Residential",
      title: "Full Home Interiors",
      description:
        "Comprehensive turnkey interiors for 3 & 4 BHK residences across Pune, blending functional layouts with refined materiality.",
      image: "/media/projects/rma-project-a01.webp",
      href: "/resources",
    },
    {
      id: "architectural-planning",
      number: "02",
      tag: "Architecture",
      title: "Architectural Planning",
      description:
        "Complete lifecycle architectural design—from feasibility studies, sun-path planning, and municipal drawings to on-site structural supervision.",
      image: "/media/projects/rma-project-a02.webp",
      href: "/resources",
    },
    {
      id: "luxury-villas",
      number: "03",
      tag: "Luxury Estates",
      title: "Villas & Weekend Retreats",
      description:
        "Tailored bungalows and scenic hillside retreats in Lonavala designed to celebrate natural light, outdoor terraces, and landscape vistas.",
      image: "/media/projects/rma-project-a03.webp",
      href: "/resources",
    },
    {
      id: "modular-kitchens",
      number: "04",
      tag: "Precision Joinery",
      title: "Modular Kitchens & Storage",
      description:
        "Ergonomic kitchen architecture and custom wardrobes engineered with top-tier hardware (Hettich, Ebco) and moisture-resistant boards.",
      image: "/media/projects/rma-project-a04.webp",
      href: "/resources",
    },
    {
      id: "commercial-interiors",
      number: "05",
      tag: "Workspaces",
      title: "Boutique Office Interiors",
      description:
        "High-performance workspaces designed to enhance productivity, acoustic comfort, and professional brand identity.",
      image: "/media/projects/rma-project-b01.webp",
      href: "/resources",
    },
    {
      id: "turnkey-renovation",
      number: "06",
      tag: "Transformation",
      title: "Turnkey Renovation",
      description:
        "Complete structural remodeling, civil modifications, false ceilings, and electrical realignment for older homes.",
      image: "/media/projects/rma-project-b02.webp",
      href: "/resources",
    },
    {
      id: "bespoke-furniture",
      number: "07",
      tag: "Craft & Materiality",
      title: "Bespoke Furniture & Styling",
      description:
        "Custom-crafted dining suites, accent chairs, textured wall panels, and warm ambient lighting schemes tailored to each family.",
      image: "/media/projects/rma-project-b03.webp",
      href: "/resources",
    },
    {
      id: "sustainable-design",
      number: "08",
      tag: "Climate Responsive",
      title: "Sustainable & Climate Design",
      description:
        "Passive cooling strategies, cross-ventilation optimization, and durable regional materials engineered for Maharashtra's climate.",
      image: "/media/projects/rma-project-b04.webp",
      href: "/resources",
    },
  ],
};

