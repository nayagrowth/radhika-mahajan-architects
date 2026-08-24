export type HeroEventName =
  | "public.rma_hero.primary_cta_clicked"
  | "public.rma_hero.secondary_cta_clicked"
  | string;

export type HeroCta = {
  label: string;
  href?: string;
  event: HeroEventName;
  kind: "primary" | "secondary";
};

export type NavLink = {
  label: string;
  href: string;
  active?: boolean;
  badge?: string;
};

export type SpatialPerspective = {
  id: string;
  label: string;
  title: string;
  location: string;
  specs: string;
  image: string;
  alt: string;
  isCutout?: boolean;
};

export type DesignProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: "discover" | "design" | "execute" | string;
};

export type HeroContent = {
  brandFirstLine: string;
  brandSecondLine: string;
  navLinks: NavLink[];
  kicker: string;
  headlinePart1: string;
  headlinePart2: string;
  headlinePart3?: string;
  supportingCopy: string;
  quote?: string;
  perspectives?: SpatialPerspective[];
  designProcess: DesignProcessStep[];
  ctas: HeroCta[];
  metrics?: Array<{ value: string; label: string }>;
};

