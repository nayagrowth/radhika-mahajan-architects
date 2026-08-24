import type { TopicsContent } from "./topics.types";

export const topicsContent: TopicsContent = {
  sectionNumber: "05",
  sectionTitle: "Practice Areas",
  eyebrow: "PRACTICE AREAS & DISCIPLINES",
  headlineWord1: "What We",
  headlineWord2: "Design",
  headlineAccent: "✦",
  metaLabel: "Spatial Capabilities",
  supportingNote:
    "Integrated architectural planning, turnkey luxury interior execution, and bespoke joinery for high-end residences and boutique commercial environments across Pune & Maharashtra.",
  categories: [
    { id: "all", label: "All Disciplines" },
    { id: "residential", label: "Residential Interiors" },
    { id: "architecture", label: "Architectural Planning" },
    { id: "villas", label: "Villas & Retreats" },
    { id: "joinery", label: "Modular Joinery" },
    { id: "commercial", label: "Workspaces" },
  ],
  topics: [
    {
      id: "full-home-interiors",
      number: "01",
      category: "residential",
      tag: "Turnkey Residential",
      title: "Full Home Interiors",
      description:
        "Comprehensive turnkey interiors for 3 & 4 BHK residences across Pune, blending functional layouts, natural light, and refined materiality.",
      image: "/media/rma/hero-living-main.webp",
      href: "/resources",
      specs: ["3 & 4 BHK Layouts", "Turnkey Handover", "Photorealistic 3D"],
    },
    {
      id: "architectural-planning",
      number: "02",
      category: "architecture",
      tag: "Architecture",
      title: "Architectural Planning",
      description:
        "Complete lifecycle architectural design—from feasibility studies, sun-path planning, and municipal drawings to on-site structural supervision.",
      image: "/media/rma/hero-elevation-concept.webp",
      href: "/resources",
      specs: ["Sun-Path Orientation", "Municipal Drawings", "Site Supervision"],
    },
    {
      id: "luxury-villas",
      number: "03",
      category: "villas",
      tag: "Estates & Retreats",
      title: "Villas & Weekend Retreats",
      description:
        "Tailored hillside bungalows and serene retreats in Lonavala engineered to celebrate outdoor terraces, cross-ventilation, and landscape vistas.",
      image: "/landmarks/project-04-lonavala-villas.webp",
      href: "/resources",
      specs: ["Lonavala Estates", "Indoor-Outdoor Flow", "Landscape Sync"],
    },
    {
      id: "modular-kitchens",
      number: "04",
      category: "joinery",
      tag: "Precision Joinery",
      title: "Modular Kitchens & Storage",
      description:
        "Ergonomic kitchen architecture and custom wardrobes engineered with top-tier hardware (Hettich, Ebco) and moisture-resistant boards.",
      image: "/media/rma/hero-kitchen-modern.webp",
      href: "/resources",
      specs: ["Hettich / Ebco Hardware", "Anti-Moisture Core", "Custom Pantries"],
    },
    {
      id: "commercial-interiors",
      number: "05",
      category: "commercial",
      tag: "Workspaces",
      title: "Boutique Office Interiors",
      description:
        "High-performance commercial workspaces and executive suites designed to enhance acoustic comfort, employee focus, and brand prestige.",
      image: "/media/rma/hero-materials.webp",
      href: "/resources",
      specs: ["Acoustic Partitions", "Executive Cabins", "Brand Integration"],
    },
    {
      id: "turnkey-renovation",
      number: "06",
      category: "residential",
      tag: "Structural Transformation",
      title: "Turnkey Renovation & Styling",
      description:
        "Complete spatial remodeling, civil modifications, false ceilings, electrical realignment, and curated furniture styling for established properties.",
      image: "/media/rma/hero-bibewadi-penthouse.webp",
      href: "/resources",
      specs: ["Civil Alterations", "Lighting Realignment", "Full Refurbishment"],
    },
    {
      id: "bespoke-furniture",
      number: "07",
      category: "joinery",
      tag: "Craft & Materiality",
      title: "Bespoke Furniture & Styling",
      description:
        "Custom-crafted dining suites, accent chairs, fluted wall paneling, and warm ambient lighting schemes tailored to each family.",
      image: "/media/rma/hero-interior-suite.webp",
      href: "/resources",
      specs: ["Custom Joinery", "Textured Wall Panels", "Ambient Lighting"],
    },
    {
      id: "sustainable-design",
      number: "08",
      category: "architecture",
      tag: "Climate Responsive",
      title: "Sustainable & Climate Design",
      description:
        "Passive cooling strategies, cross-ventilation optimization, and durable regional materials engineered for Maharashtra's climate.",
      image: "/media/rma/hero-lighting-detail.webp",
      href: "/resources",
      specs: ["Passive Cooling", "Cross-Ventilation", "Regional Sourcing"],
    },
  ],
};


