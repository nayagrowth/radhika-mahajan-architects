"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ThinkingContent, FeaturedArticle } from "./thinking.types";
import { thinkingContent } from "./thinking.content";
import styles from "./rma-thinking-act.module.css";

interface RmaThinkingActProps {
  content?: ThinkingContent;
  articles?: FeaturedArticle[];
  className?: string;
}

export function RmaThinkingAct({
  content = thinkingContent,
  articles,
  className,
}: RmaThinkingActProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const allArticles = useMemo(() => {
    return articles?.length ? articles : content.articles;
  }, [articles, content.articles]);

  const filteredArticles = useMemo(() => {
    if (activeCategory === "all") return allArticles;
    return allArticles.filter((art) => {
      const slugCat = art.category.toLowerCase().replace(/[\s&]+/g, "-");
      return (
        slugCat.includes(activeCategory) ||
        activeCategory.includes(slugCat) ||
        art.category.toLowerCase() === activeCategory
      );
    });
  }, [activeCategory, allArticles]);

  const leadArticle = filteredArticles[0] || allArticles[0];
  const sideArticles = filteredArticles.slice(1, 5);

  return (
    <section
      id="thinking"
      className={`${styles.thinkingSection} ${className || ""}`}
      aria-labelledby="thinking-heading"
      data-story-act6="true"
    >
      <div className={styles.atmosphereLayer} aria-hidden="true" />

      <div className={styles.thinkingContainer}>
        {/* Top Eyebrow Row */}
        <div className={styles.eyebrowRow} data-story-act6-eyebrow="true">
          <div className={styles.eyebrowHairline} aria-hidden="true" />
          <span className={styles.eyebrowDiamond} aria-hidden="true">◆</span>
          <span className={styles.eyebrowText}>
            {content.sectionNumber} / {content.eyebrow || "ARCHITECTURAL JOURNAL & RESEARCH"}
          </span>
          <span className={styles.eyebrowDiamond} aria-hidden="true">◆</span>
          <div className={styles.eyebrowHairline} aria-hidden="true" />
        </div>

        {/* Master Header Block */}
        <header className={styles.headerBlock}>
          <div className={styles.headerTitleCol}>
            <h2 id="thinking-heading" className={styles.headline}>
              <span>{content.headlineWord1 || "Latest"}</span>{" "}
              <span className={styles.headlineAccentWord}>
                {content.headlineWord2 || "Thinking"}
                {content.headlineAccent ? (
                  <span className={styles.headlineStar} aria-hidden="true">
                    {" "}{content.headlineAccent}
                  </span>
                ) : (
                  <span className={styles.goldPeriod}>.</span>
                )}
              </span>
            </h2>
            <p className={styles.supportingNote} data-story-act6-note="true">
              {content.supportingNote}
            </p>
          </div>
        </header>

        {/* Interactive Category Filter Ribbon */}
        {content.filterCategories && content.filterCategories.length > 0 && (
          <nav className={styles.filterRibbon} aria-label="Filter journal articles">
            {content.filterCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`${styles.filterBtn} ${
                  activeCategory === cat.id ? styles.filterBtnActive : ""
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        )}

        {/* Asymmetrical Editorial Grid */}
        <div className={styles.editorialGrid} data-story-act6-grid="true">
          {/* Left Column: Lead Featured Spotlight Story */}
          {leadArticle && (
            <article className={styles.leadSpotlightCard} data-story-act6-lead="true">
              <Link href={leadArticle.url ?? "/articles"} className={styles.leadCardLink}>
                <div className={styles.leadImageFrame}>
                  {leadArticle.coverImage ? (
                    <Image
                      src={leadArticle.coverImage}
                      alt={leadArticle.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className={styles.leadPhoto}
                      priority={false}
                    />
                  ) : null}
                  <div className={styles.leadImageVignette} />

                  {/* Floating Badges */}
                  <div className={styles.leadBadgeRow}>
                    <span className={styles.leadTag}>
                      {leadArticle.category} {leadArticle.series ? `// ${leadArticle.series}` : ""}
                    </span>
                    <span className={styles.leadReadTime}>{leadArticle.readTime}</span>
                  </div>
                </div>

                <div className={styles.leadContentBody}>
                  <div className={styles.leadMetaRow}>
                    <span className={styles.leadIndex}>FEATURED PUBLICATION — 01</span>
                    <span className={styles.leadDate}>{leadArticle.date || "August 2026"}</span>
                  </div>

                  <h3 className={styles.leadTitle}>{leadArticle.title}</h3>

                  {leadArticle.abstract && (
                    <p className={styles.leadAbstract}>{leadArticle.abstract}</p>
                  )}

                  <div className={styles.leadFooterRow}>
                    <div className={styles.authorBadge}>
                      <span className={styles.authorName}>
                        {leadArticle.author || "Ar. Radhika Mahajan"}
                      </span>
                      <span className={styles.authorRole}>Principal Architect</span>
                    </div>

                    <div className={styles.readActionBtn}>
                      <span>Read Essay</span>
                      <span className={styles.readArrow} aria-hidden="true">↗</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          )}

          {/* Right Column: Curated Journal Ledger Stack */}
          <div className={styles.ledgerColumn} data-story-act6-ledger="true">
            <div className={styles.ledgerHeaderBar}>
              <span className={styles.ledgerSectionTitle}>
                {content.articleSectionHeading || "CURATED ARCHITECTURAL PUBLICATIONS"}
              </span>
              <span className={styles.ledgerCount}>
                {String(sideArticles.length + 1).padStart(2, "0")} / {String(allArticles.length).padStart(2, "0")} POSTS
              </span>
            </div>

            <div className={styles.ledgerStack}>
              {sideArticles.map((article, idx) => (
                <article key={article.id} className={styles.ledgerRowCard} data-story-act6-item="true">
                  <Link href={article.url ?? "/articles"} className={styles.ledgerRowLink}>
                    <div className={styles.ledgerIndexBadge}>
                      — {String(idx + 2).padStart(2, "0")} —
                    </div>

                    <div className={styles.ledgerMainCol}>
                      <div className={styles.ledgerMeta}>
                        <span className={styles.ledgerCategory}>{article.category}</span>
                        <span className={styles.ledgerDot} aria-hidden="true">·</span>
                        <span className={styles.ledgerReadTime}>{article.readTime}</span>
                      </div>

                      <h4 className={styles.ledgerTitle}>{article.title}</h4>

                      {article.abstract && (
                        <p className={styles.ledgerAbstract}>{article.abstract}</p>
                      )}
                    </div>

                    <div className={styles.ledgerActionCol}>
                      <span className={styles.ledgerArrow} aria-hidden="true">→</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* View Full Journal Link */}
            <Link className={styles.archiveLinkBtn} href="/articles">
              <span>{content.articlesCtaText || "Explore Full Architectural Archive"}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom Studio Research Commitments Bar */}
        <footer className={styles.commitmentsBar} data-story-act6-footer="true">
          <div className={styles.commitmentItem}>
            <span className={styles.commitmentIcon}>✦</span>
            <span className={styles.commitmentText}>
              {allArticles.length} Published Thought Leadership Articles
            </span>
          </div>
          <div className={styles.commitmentDivider} aria-hidden="true" />
          <div className={styles.commitmentItem}>
            <span className={styles.commitmentIcon}>✦</span>
            <span className={styles.commitmentText}>100% Transparent BOQs & Material Standards</span>
          </div>
          <div className={styles.commitmentDivider} aria-hidden="true" />
          <div className={styles.commitmentItem}>
            <span className={styles.commitmentIcon}>✦</span>
            <span className={styles.commitmentText}>Photorealistic 3D Spatial Walkthroughs</span>
          </div>
        </footer>
      </div>
    </section>
  );
}

export { RmaThinkingAct as DipakThinkingAct };

