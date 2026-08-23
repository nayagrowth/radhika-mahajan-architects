import portraitArmchair from "./assets/dipak-seated-armchair.png";
import type { HeroContent } from "./hero.types";

export const dipakHeroContent: HeroContent = {
  brandFirstLine: "RADHIKA",
  brandSecondLine: "MAHAJAN ARCHITECTS",
  navLinks: [
    { label: "Home", href: "/", active: true },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/resources" },
    { label: "Journal", href: "/articles" },
    { label: "Walkthroughs", href: "/videos" },
    { label: "Contact", href: "/contact" },
  ],
  kicker: "Architecture + Interior Design | Pune & Lonavala",
  headlinePart1: "Designing Spaces.",
  headlinePart2: "Creating",
  headlinePart3: "Experiences",
  supportingCopy:
    "Thoughtful spaces. Balanced decisions. A clear, refined and individual point of view across residential, luxury villa, and commercial architecture.",
  quote: "FORM × SPACE × DETAIL",
  portrait: portraitArmchair,
  portraitAlt: "Radhika Mahajan Architects — Architecture & Interior Design Studio",
  ctas: [
    {
      label: "Book Consultation",
      href: "/contact",
      event: "public.rma_hero.primary_cta_clicked",
      kind: "primary",
    },
    {
      label: "Explore Projects",
      href: "/resources",
      event: "public.rma_hero.secondary_cta_clicked",
      kind: "secondary",
    },
  ],
};

