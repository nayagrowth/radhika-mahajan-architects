/**
 * Global brand + navigation contract for Radhika Mahajan Architects (RMA).
 *
 * Source of truth derived from the approved RMA Identity & Visual Guidelines:
 * - FORM × SPACE × DETAIL
 * - DESIGNING SPACES. CREATING EXPERIENCES.
 * - Architecture + Interior Design Studio | Pune & Lonavala
 */

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export interface SiteBrand {
  firstLine: string;
  secondLine: string;
  positioning: string;
  primaryIdea: string;
  subTagline: string;
  councilRegistration: string;
}

export const siteBrand: SiteBrand = {
  firstLine: "RADHIKA",
  secondLine: "MAHAJAN ARCHITECTS",
  positioning: "Architecture + Interior Design Studio | Pune & Lonavala",
  primaryIdea: "Designing Spaces. Creating Experiences.",
  subTagline: "FORM × SPACE × DETAIL",
  councilRegistration: "Council of Architecture Reg. CA/20XX/XXXXX",
};

export const primaryNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/resources" },
  { label: "Practice", href: "/#topics" },
  { label: "Journal", href: "/articles" },
  { label: "Walkthroughs", href: "/videos" },
  { label: "Contact", href: "/contact" },
];

export const practiceLinks: NavLink[] = [
  { label: "Full Home Interiors (3 & 4 BHK)", href: "/#topics" },
  { label: "Architectural Planning & Municipal", href: "/#topics" },
  { label: "Villas & Weekend Retreats (Lonavala)", href: "/#topics" },
  { label: "Modular Joinery & Kitchens (Hettich)", href: "/#topics" },
  { label: "Boutique Corporate Workspaces", href: "/#topics" },
  { label: "Turnkey Renovation & Styling", href: "/#topics" },
];

/**
 * Persistent primary CTA for booking design consultations & site visits.
 */
export const rmaConsultationCta = {
  label: "Book 3D Consultation",
  href: "/contact",
  event: "public.global.book_consultation_clicked",
};

export const footerContent = {
  philosophyLine: "FORM × SPACE × DETAIL — Designing Spaces. Creating Experiences.",
  subtext:
    "Radhika Mahajan Architects (RMA) is a premier architectural planning and turnkey interior design studio crafting timeless residences, luxury villas, and boutique commercial environments across Pune and Maharashtra.",
  studios: [
    {
      city: "Pune Main Studio",
      address: "Suvarnaratna Garden, Bibewadi & Koregaon Park, Pune, Maharashtra 411037",
      phone: "+91 98765 43210",
      email: "studio@radhikamahajan.com",
    },
    {
      city: "Lonavala Planning Cell",
      address: "Retreat & Villa Architecture Cell, Lonavala, Maharashtra 410401",
      phone: "+91 98765 43210",
      email: "lonavala@radhikamahajan.com",
    },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Practice", href: "/terms" },
    { label: "XML Sitemap", href: "/sitemap.xml" },
  ] as NavLink[],
  copyright: "© 2026 Radhika Mahajan Architects (RMA). All Rights Reserved.",
  hallmark: "Crafted with Architectural Precision in Pune & Maharashtra",
};

export const socialLinks: NavLink[] = [
  { label: "Instagram", href: "https://instagram.com" },
  {
    label: "WhatsApp",
    href: "https://wa.me/919876543210?text=Hello%20Ar.%20Radhika%20Mahajan%2C%20I%20would%20like%20to%20discuss%20an%20architectural%2Finterior%20project.",
  },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

