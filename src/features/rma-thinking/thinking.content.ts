import type { ThinkingContent } from "./thinking.types";

export const thinkingContent: ThinkingContent = {
  sectionNumber: "06",
  sectionTitle: "Architectural Journal",
  eyebrow: "ARCHITECTURAL JOURNAL & RESEARCH",
  headlineWord1: "Latest",
  headlineWord2: "Thinking",
  headlineAccent: "✦",
  metaLabel: "Spatial Insights & Essays",
  supportingNote:
    "Documenting spatial planning philosophies, turnkey 45-day execution frameworks, and material engineering behind our completed residences across Pune & Maharashtra.",
  videoSectionHeading: "SPATIAL WALKTHROUGH & CASE STUDY",
  articleSectionHeading: "ARCHITECTURAL ESSAYS & INSIGHTS",

  filterCategories: [
    { id: "all", label: "All Publications" },
    { id: "design-philosophy", label: "Design Philosophy" },
    { id: "project-execution", label: "Turnkey Execution" },
    { id: "design-process", label: "3D Visualization" },
    { id: "materials-craft", label: "Materials & Craft" },
    { id: "architecture", label: "Bioclimatic Architecture" },
    { id: "budget-planning", label: "Budget & BOQ" },
  ],

  featuredVideo: {
    id: "rma-walkthrough-1",
    title: "Inside a Contemporary 4 BHK Residence in Pune: Concept to Handover",
    category: "SPATIAL TOUR",
    duration: "10 MIN TOUR",
    youtubeUrl: "https://www.youtube.com",
    summary:
      "A complete walkthrough detailing 3D spatial visualization, false ceiling architectural lighting, and bespoke veneer joinery delivered on a strict 45-day execution plan.",
  },

  articles: [
    {
      id: "form-space-detail-the-rma-philosophy",
      number: "01",
      title: "Form × Space × Detail: The Architectural Foundation of Meaningful Interiors",
      category: "Design Philosophy",
      readTime: "6 MIN READ",
      series: "Architectural Foundations",
      abstract:
        "Why interior design must begin with architectural volume, natural light, and structural proportion before decorative elements are introduced.",
      url: "/articles/form-space-detail-the-rma-philosophy",
      coverImage: "/media/rma/hero-living-main.webp",
      date: "August 2026",
      author: "Ar. Radhika Mahajan",
    },
    {
      id: "the-45-day-turnkey-execution-blueprint",
      number: "02",
      title: "The 45-Day Turnkey Execution Blueprint: From 3D Approval to Move-In",
      category: "Project Execution",
      readTime: "5 MIN READ",
      series: "Execution Science",
      abstract:
        "How disciplined Gantt-chart scheduling, off-site modular factory joinery, and dedicated site supervision eliminate costly renovation delays.",
      url: "/articles/the-45-day-turnkey-execution-blueprint",
      coverImage: "/media/rma/hero-kitchen-modern.webp",
      date: "August 2026",
      author: "RMA Studio Team",
    },
    {
      id: "3d-visualization-before-execution",
      number: "03",
      title: "3D Photorealistic Pre-Visualization: Eliminating On-Site Guesswork",
      category: "Design Process",
      readTime: "4 MIN READ",
      series: "Virtual Architecture",
      abstract:
        "Why 100% accurate 3D spatial modeling is essential for daylight calculation, hardware validation, and client confidence before civil breaking begins.",
      url: "/articles/3d-visualization-before-execution",
      coverImage: "/media/rma/hero-elevation-concept.webp",
      date: "August 2026",
      author: "Ar. Radhika Mahajan",
    },
    {
      id: "material-integrity-hardware-standards",
      number: "04",
      title: "Material Integrity & Hardware Standards: The Anatomy of Durability",
      category: "Materials & Craft",
      readTime: "5 MIN READ",
      series: "Material Science",
      abstract:
        "A rigorous breakdown of calibrated BWR plywood cores, German-engineered soft-close fittings (Hettich, Ebco), and tactile polyurethane finishes.",
      url: "/articles/material-integrity-hardware-standards",
      coverImage: "/media/rma/hero-materials.webp",
      date: "August 2026",
      author: "RMA Technical Cell",
    },
    {
      id: "designing-for-light-and-cross-ventilation",
      number: "05",
      title: "Designing for Light & Cross-Ventilation in High-Density Urban Flats",
      category: "Architecture",
      readTime: "5 MIN READ",
      series: "Bioclimatic Design",
      abstract:
        "Architectural strategies to maximize daylight penetrations, optimize air circulation, and reduce artificial cooling dependencies in Pune apartments.",
      url: "/articles/designing-for-light-and-cross-ventilation",
      coverImage: "/media/rma/hero-interior-suite.webp",
      date: "August 2026",
      author: "Ar. Radhika Mahajan",
    },
    {
      id: "budget-transparency-and-boq-planning",
      number: "06",
      title: "Zero-Surprise BOQ Planning: Transparent Architectural Costing",
      category: "Budget & Planning",
      readTime: "4 MIN READ",
      series: "Financial Integrity",
      abstract:
        "How itemized Bills of Quantities and transparent material specifications protect homeowners from mid-project budget escalations.",
      url: "/articles/budget-transparency-and-boq-planning",
      coverImage: "/media/rma/hero-bibewadi-penthouse.webp",
      date: "August 2026",
      author: "RMA Studio Team",
    },
  ],

  videosCtaText: "View All Walkthroughs",
  articlesCtaText: "Explore Full Architectural Archive",
};

