export interface TopicItem {
  id: string;
  number: string;
  category: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  specs?: string[];
}

export interface TopicsContent {
  sectionNumber: string;
  sectionTitle: string;
  eyebrow: string;
  headlineWord1: string;
  headlineWord2: string;
  headlineAccent?: string;
  metaLabel: string;
  supportingNote: string;
  categories: { id: string; label: string }[];
  topics: TopicItem[];
}

