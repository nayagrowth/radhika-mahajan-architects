export interface FeaturedVideo {
  id: string;
  title: string;
  category: string;
  duration: string;
  /** Empty/undefined hides the featured-video block entirely. */
  youtubeUrl?: string;
  summary?: string;
}

export interface FeaturedArticle {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  series?: string;
  abstract?: string;
  url?: string;
  coverImage?: string;
  date?: string;
  author?: string;
}

export interface ThinkingFilterCategory {
  id: string;
  label: string;
}

export interface ThinkingContent {
  sectionNumber: string;
  sectionTitle: string;
  eyebrow?: string;
  headlineWord1?: string;
  headlineWord2?: string;
  headlineAccent?: string;
  metaLabel: string;
  supportingNote: string;
  videoSectionHeading: string;
  articleSectionHeading: string;
  featuredVideo: FeaturedVideo;
  articles: FeaturedArticle[];
  filterCategories?: ThinkingFilterCategory[];
  videosCtaText: string;
  articlesCtaText: string;
}
