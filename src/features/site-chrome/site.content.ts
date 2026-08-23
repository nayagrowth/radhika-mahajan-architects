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
}

export interface SiteBrand {
  firstLine: string;
  secondLine: string;
  positioning: string;
  primaryIdea: string;
  subTagline: string;
}

export const siteBrand: SiteBrand = {
  firstLine: "RADHIKA",
  secondLine: "MAHAJAN ARCHITECTS",
  positioning: "Architecture + Interior Design | Pune & Lonavala",
  primaryIdea: "Designing Spaces. Creating Experiences.",
  subTagline: "FORM × SPACE × DETAIL",
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/resources" },
  { label: "Journal", href: "/articles" },
  { label: "Walkthroughs", href: "/videos" },
  { label: "Contact", href: "/contact" },
];

/**
 * Persistent primary CTA for booking design consultations & site visits.
 */
export const rmaConsultationCta = {
  label: "Book Consultation",
  href: "/contact",
  event: "public.global.book_consultation_clicked",
};

// Backward compatibility alias for existing CTA references
export const authorityClosersCta = rmaConsultationCta;

export const footerContent = {
  philosophyLine: "FORM × SPACE × DETAIL — Designing Spaces. Creating Experiences.",
  subtext: "Radhika Mahajan Architects is an architecture and interior design studio crafting thoughtful residential and commercial spaces across Pune and Lonavala.",
  locations: [
    { city: "Pune", focus: "Full Home Interiors (3 & 4 BHK), Villas & Offices in Bibewadi, Koregaon Park, Baner & Kolte Patil" },
    { city: "Lonavala", focus: "Luxury Retreats, Weekend Homes & Turnkey Bungalows" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ] as NavLink[],
  copyright: "© Radhika Mahajan Architects (OPC) Private Limited. All rights reserved.",
};

export const socialLinks: NavLink[] = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "WhatsApp", href: "https://wa.me/919876543210?text=Hello%20Ar.%20Radhika%20Mahajan%2C%20I%20would%20like%20to%20discuss%20an%20architectural%2Finterior%20project." },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

