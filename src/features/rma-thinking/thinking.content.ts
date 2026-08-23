import type { ThinkingContent } from "./thinking.types";

/**
 * Static fallback for the "Latest Thinking" act.
 *
 * The homepage injects real published articles from the file-backed store, so
 * `articles` here is only used if that list is empty (e.g. every post is a
 * draft). Keeping it empty means no fabricated essays can reach production.
 */
export const thinkingContent: ThinkingContent = {
  sectionNumber: "06",
  sectionTitle: "Architectural Journal",
  metaLabel: "Spatial Insights & Walkthroughs",
  supportingNote:
    "Explaining the design decisions, 3D planning principles, and material science behind our completed architecture and interiors.",
  videoSectionHeading: "SPATIAL WALKTHROUGH & CASE STUDY",
  articleSectionHeading: "ARCHITECTURAL ESSAYS & INSIGHTS",

  featuredVideo: {
    id: "rma-walkthrough-1",
    title: "Inside a Contemporary 4 BHK Residence in Pune: Concept to Handover",
    category: "SPATIAL TOUR",
    duration: "10 MIN TOUR",
    youtubeUrl: "https://www.youtube.com",
    summary:
      "A complete walkthrough detailing 3D spatial visualization, false ceiling architectural lighting, and bespoke veneer joinery delivered on a strict 45-day execution plan.",
  },

  articles: [],

  videosCtaText: "View All Walkthroughs",
  articlesCtaText: "Read Design Journal",
};

