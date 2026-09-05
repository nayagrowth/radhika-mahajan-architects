/**
 * Radhika Mahajan Architects (RMA) — Built Projects & Media Content Contract
 */

export interface VideoEntry {
  id: string;
  title: string;
  youtubeId?: string;
  poster?: string;
  category: string;
  duration: string;
  href?: string;
}

export interface VideoRail {
  id: string;
  label: string;
  note: string;
  videos: VideoEntry[];
}

export const youtubeChannelUrl: string | null = "https://youtube.com";

export const videoRails: VideoRail[] = [
  {
    id: "walkthroughs",
    label: "Spatial Walkthroughs",
    note: "Cinematic room-by-room tours across our completed residences in Pune and Lonavala.",
    videos: [
      {
        id: "v1",
        title: "Modern 4 BHK Residence Tour — Bibewadi, Pune",
        poster: "/media/rma/hero-living-main.webp",
        category: "FULL HOME INTERIOR",
        duration: "8 MIN TOUR",
        href: "/contact?topic=Bibewadi%204%20BHK%20Interior%20Project",
      },
      {
        id: "v2",
        title: "Luxury Hillside Retreat Walkthrough — Lonavala",
        poster: "/media/rma/hero-lonavala-villa.webp",
        category: "WEEKEND VILLA",
        duration: "11 MIN TOUR",
        href: "/contact?topic=Lonavala%20Villa%20Architecture",
      },
    ],
  },
  {
    id: "process",
    label: "3D Design to Execution",
    note: "How our 3D visualization translates into precise millimeter joinery on site.",
    videos: [
      {
        id: "v3",
        title: "The 45-Day Turnkey Interior Process Breakdown",
        poster: "/media/rma/journal-45-day-blueprint.webp",
        category: "PROCESS",
        duration: "6 MIN",
        href: "/articles/the-45-day-turnkey-execution-blueprint",
      },
    ],
  },
];

export interface LeadMagnet {
  index: string;
  title: string;
  description: string;
  ctaLabel: string;
  topic: string;
  image?: string;
  category?: string;
}

export const leadMagnets: LeadMagnet[] = [
  {
    index: "01",
    title: "The Bibewadi Luxury Penthouse (4 BHK)",
    description:
      "A 3,200 sq.ft contemporary penthouse in Pune featuring custom Italian marble paneling, concealed acoustic doors, and warm ambient architectural lighting.",
    ctaLabel: "Enquire About This Project",
    topic: "Bibewadi 4 BHK Interior Project",
    image: "/media/rma/hero-living-main.webp",
    category: "4 BHK PENTHOUSE · PUNE",
  },
  {
    index: "02",
    title: "Kolte Patil Signature Home (3 BHK)",
    description:
      "Minimalist spatial design with bespoke Hettich-fitted modular kitchen, fluted glass partitions, and warm oak veneer paneling.",
    ctaLabel: "Enquire About This Project",
    topic: "Kolte Patil 3 BHK Project",
    image: "/media/rma/hero-interior-suite.webp",
    category: "3 BHK RESIDENTIAL · PUNE",
  },
  {
    index: "03",
    title: "The Lonavala Hillside Villa Retreat",
    description:
      "An expansive 5,800 sq.ft villa designed to blend seamless indoor-outdoor living, natural stone masonry, and panoramic Sahyadri views.",
    ctaLabel: "Enquire About This Project",
    topic: "Lonavala Villa Architecture",
    image: "/media/rma/hero-lonavala-villa.webp",
    category: "LUXURY RETREAT · LONAVALA",
  },
  {
    index: "04",
    title: "Godrej Infinity Modern Kitchen & Living",
    description:
      "High-gloss acrylic modular kitchen paired with seamless quartz counters, tandem pull-outs, and dedicated breakfast bar.",
    ctaLabel: "Enquire About This Project",
    topic: "Godrej Infinity Project",
    image: "/media/rma/hero-kitchen-modern.webp",
    category: "MODULAR KITCHEN & JOINERY",
  },
  {
    index: "05",
    title: "Koregaon Park Master Suite & Walk-In",
    description:
      "Bespoke master suite with fluted acoustic panelling, integrated cove lighting, and floor-to-ceiling tinted glass wardrobe system.",
    ctaLabel: "Enquire About This Project",
    topic: "Koregaon Park Suite",
    image: "/media/rma/hero-bibewadi-penthouse.webp",
    category: "MASTER SUITE ARCHITECTURE",
  },
  {
    index: "06",
    title: "Kothrud Architectural Villa Renovation",
    description:
      "Complete spatial restructuring with double-height ceiling voids, custom brass accents, and automated architectural lighting.",
    ctaLabel: "Enquire About This Project",
    topic: "Kothrud Villa Renovation",
    image: "/media/rma/hero-lighting-detail.webp",
    category: "TURNKEY RENOVATION",
  },
];

export const signatureProperties = [
  "Form × Space × Detail™",
  "The 45-Day Turnkey Blueprint™",
  "Spatial Clarity Framework™",
  "3D Before Execution™",
  "Bespoke Materiality™",
];
