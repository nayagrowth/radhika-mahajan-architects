export interface ManifestoCard {
  index: string;
  statement: string;
}

export interface PhilosophyPillar {
  index: string;
  tag: string;
  statement: string;
  elaboration: string;
}

export interface MissionContent {
  sectionNumber: string;
  sectionTitle: string;
  kicker: string;
  headlineLine1: string;
  headlineLine2: string;
  cards: ManifestoCard[];
  // Backwards compatibility
  monumentalQuote?: {
    prefix: string;
    emphasis: string;
    suffix: string;
  };
  missionBody?: string;
  pillars?: PhilosophyPillar[];
}
