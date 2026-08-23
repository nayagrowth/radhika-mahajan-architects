/**
 * Radhika Mahajan Architects (RMA) — Built Projects & Media Content Contract
 */

export interface VideoEntry {
  id: string;
  title: string;
  youtubeId: string;
  category: string;
  duration: string;
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
        youtubeId: "dQw4w9WgXcQ",
        category: "FULL HOME INTERIOR",
        duration: "8 MIN TOUR",
      },
      {
        id: "v2",
        title: "Luxury Hillside Retreat Walkthrough — Lonavala",
        youtubeId: "dQw4w9WgXcQ",
        category: "WEEKEND VILLA",
        duration: "11 MIN TOUR",
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
        youtubeId: "dQw4w9WgXcQ",
        category: "PROCESS",
        duration: "6 MIN",
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
    title: "The Bibewadi Luxury Residence (4 BHK)",
    description:
      "A 3,200 sq.ft contemporary residence in Pune featuring custom Italian marble paneling, concealed acoustic doors, and warm ambient architectural lighting.",
    ctaLabel: "Enquire About This Design",
    topic: "Bibewadi 4 BHK Interior Project",
    image: "/media/projects/rma-project-a01.webp",
    category: "4 BHK RESIDENTIAL",
  },
  {
    index: "02",
    title: "Kolte Patil Signature Home (3 BHK)",
    description:
      "Minimalist spatial design with bespoke Hettich-fitted modular kitchen, fluted glass partitions, and open-flow living spaces.",
    ctaLabel: "Enquire About This Design",
    topic: "Kolte Patil 3 BHK Project",
    image: "/media/projects/rma-project-a02.webp",
    category: "3 BHK RESIDENTIAL",
  },
  {
    index: "03",
    title: "The Lonavala Hillside Villa Retreat",
    description:
      "An expansive 4,800 sq.ft bungalow designed to blend seamless indoor-outdoor living, cross ventilation, and local basalt stone masonry.",
    ctaLabel: "Enquire About This Design",
    topic: "Lonavala Villa Architecture",
    image: "/media/projects/rma-project-a03.webp",
    category: "LUXURY RETREAT",
  },
  {
    index: "04",
    title: "Godrej Infinity Turnkey Living (3 BHK)",
    description:
      "A complete turnkey transformation delivered in 45 days, featuring calibrated BWR plywood wardrobes, false ceiling coves, and customized dining suite.",
    ctaLabel: "Enquire About This Design",
    topic: "Godrej Infinity Turnkey Interior",
    image: "/media/projects/rma-project-a04.webp",
    category: "TURNKEY INTERIOR",
  },
  {
    index: "05",
    title: "Koregaon Park Penthouse Styling",
    description:
      "Editorial styling combining Mist White canvas surfaces with Architectural Beige textiles, natural oak joinery, and curated spatial accents.",
    ctaLabel: "Enquire About This Design",
    topic: "Koregaon Park Penthouse",
    image: "/media/projects/rma-project-b01.webp",
    category: "PENTHOUSE",
  },
  {
    index: "06",
    title: "Boutique Creative Workspace",
    description:
      "Commercial office interior balancing collaborative central zones, acoustic focus pods, and brand-expressive reception architecture.",
    ctaLabel: "Enquire About This Design",
    topic: "Commercial Workspace Interior",
    image: "/media/projects/rma-project-b02.webp",
    category: "COMMERCIAL",
  },
];

export const signatureProperties = [
  "Form × Space × Detail™",
  "The 45-Day Turnkey Blueprint™",
  "Spatial Clarity Framework™",
  "3D Before Execution™",
  "Bespoke Materiality™",
];
