import { HomeIntroStory } from "@/features/home-intro-story";
import { SiteHeader, SiteFooter, WhatsAppConcierge } from "@/features/site-chrome";
import { getAllArticles } from "@/lib/articles";
import type { FeaturedArticle } from "@/features/rma-thinking/thinking.types";

export default function HomePage() {
  // Read the article store here (server) and hand it to the client story
  // component — HomeIntroStory is "use client" for GSAP and cannot touch fs.
  const latestArticles: FeaturedArticle[] = getAllArticles()
    .map((article, index) => ({
      id: article.slug,
      number: String(index + 1).padStart(2, "0"),
      title: article.title,
      category: article.category,
      series: article.series,
      readTime: article.readTime,
      abstract: article.excerpt,
      url: `/articles/${article.slug}`,
      coverImage: article.coverImage || (
        index === 0 ? "/media/rma/hero-living-main.webp" :
        index === 1 ? "/media/rma/hero-kitchen-modern.webp" :
        index === 2 ? "/media/rma/hero-elevation-concept.webp" :
        index === 3 ? "/media/rma/hero-materials.webp" :
        index === 4 ? "/media/rma/hero-interior-suite.webp" :
        "/media/rma/hero-bibewadi-penthouse.webp"
      ),
      date: article.date,
      author: "Ar. Radhika Mahajan",
    }));

  return (
    <>
      <SiteHeader />
      <main id="main">
        <HomeIntroStory latestArticles={latestArticles} />
      </main>
      <SiteFooter />
      <WhatsAppConcierge />
    </>
  );
}
