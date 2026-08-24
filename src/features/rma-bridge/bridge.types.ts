export interface BridgeCta {
  label: string;
  href: string;
  primary?: boolean;
  event: string;
}

export interface BridgePillar {
  icon: string;
  title: string;
  note: string;
}

export interface BridgeContent {
  sectionNumber: string;
  sectionTitle: string;
  eyebrow: string;
  headlineWord1: string;
  headlineWord2: string;
  headlineAccent?: string;
  bodyParagraph: string;
  pillars: BridgePillar[];
  ctas: BridgeCta[];
  projectTypes?: string[];
  studioDetails?: {
    location: string;
    responseTime: string;
    email: string;
    registration: string;
  };
  whatsappCta?: {
    label: string;
    href: string;
    number: string;
  };
}

