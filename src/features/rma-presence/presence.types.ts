export interface LandmarkProject {
  id: string;
  number: string;
  name: string;
  sublabel: string;
  image: string;
  category?: string;
  href?: string;
}

export interface MediaSignature {
  id: string;
  name: string;
  sublabel: string;
  category: string;
  iconType: "residence" | "penthouse" | "villa" | "retreat" | "turnkey" | string;
  href?: string;
}

export interface PresenceContent {
  sectionNumber: string;
  sectionTitle: string;
  eyebrow: string;
  headline: string;
  supportingNote: string;
  projects: LandmarkProject[];
  studioName?: string;
  studioTagline?: string;
  // Backwards compatibility
  headlineWord1?: string;
  headlineWord2?: string;
  metaLabel?: string;
  signatures?: MediaSignature[];
}
