import type { HeroContent } from "./hero.types";

export const rmaHeroContent: HeroContent = {
  brandFirstLine: "RADHIKA",
  brandSecondLine: "MAHAJAN ARCHITECTS",
  navLinks: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Practice", href: "/#topics" },
    { label: "Journal", href: "/articles" },
    { label: "Walkthroughs", href: "/videos" },
    { label: "Contact", href: "/contact" },
  ],
  kicker: "ARCHITECTURE + INTERIOR DESIGN  |  PUNE & LONAVALA",
  headlinePart1: "Built On Trust.",
  headlinePart2: "Defined By Design.",
  supportingCopy:
    "We craft timeless spaces through thoughtful planning, balanced materials, and an obsession with detail.",
  quote: "FORM / SPACE / DETAIL",
  designProcess: [
    {
      number: "01",
      title: "DISCOVER",
      description: "We listen, understand and define what matters most.",
      icon: "discover",
    },
    {
      number: "02",
      title: "DESIGN",
      description: "We create thoughtful concepts tailored to your lifestyle.",
      icon: "design",
    },
    {
      number: "03",
      title: "EXECUTE",
      description: "We manage every detail to deliver with clarity and care.",
      icon: "execute",
    },
  ],
  ctas: [
    {
      label: "EXPLORE SELECTED PROJECTS",
      href: "/projects",
      event: "public.rma_hero.primary_cta_clicked",
      kind: "primary",
    },
    {
      label: "START A CONVERSATION",
      href: "/contact",
      event: "public.rma_hero.secondary_cta_clicked",
      kind: "secondary",
    },
  ],
  metrics: [
    { value: "35+", label: "Completed Projects in Pune & Lonavala" },
    { value: "45–60", label: "Days Turnkey Execution Commitment" },
    { value: "100%", label: "Line-Item BOQ Transparency" },
  ],
};


