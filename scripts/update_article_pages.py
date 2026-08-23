# 1. Update articles/page.tsx
page_code = """import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllArticles, formatArticleDate } from "@/lib/articles";
import { PageHero, Reveal } from "@/features/editorial";
import editorial from "@/features/editorial/editorial.module.css";
import styles from "./articles.module.css";

export const metadata: Metadata = {
  title: "Design Journal & Architectural Essays — Radhika Mahajan Architects | Pune & Lonavala",
  description:
    "Explore architectural essays, 3D spatial principles, material science, and turnkey construction insights by Ar. Radhika Mahajan, Principal Architect at RMA.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  const [lead, ...rest] = articles;

  return (
    <>
      <PageHero
        eyebrow="Architectural Journal"
        index="01"
        headline="Principles & Insights from the Studio"
        body={[
          "Essays on spatial planning, 3D visualization, material durability, and the 45-day turnkey blueprint by Ar. Radhika Mahajan.",
        ]}
        aside={
          <div className={styles.heroMediaFrame}>
            <Image
              src="/media/projects/rma-project-a02.webp"
              alt="Radhika Mahajan Architects Design Journal"
              width={1000}
              height={750}
              sizes="(max-width: 900px) 70vw, 24rem"
              quality={90}
              className={styles.heroMediaImage}
            />
          </div>
        }
      />

      <section className={editorial.section}>
        <div className={editorial.container}>
          {articles.length === 0 ? (
            <p className={styles.emptyState}>
              Building a growing library of architectural ideas and field notes.
            </p>
          ) : (
            <>
              <Reveal>
                <div className={styles.leadCard}>
                  <div className={styles.leadMeta}>
                    {lead.series ? (
                      <span className={styles.series}>{lead.series}</span>
                    ) : null}
                    <span className={styles.metaLine}>
                      {lead.category} · {lead.readTime}
                    </span>
                  </div>

                  <h2 className={styles.leadTitle}>
                    <Link href={`/articles/${lead.slug}`} className={styles.titleLink}>
                      {lead.title}
                    </Link>
                  </h2>
                  <p className={styles.leadExcerpt}>{lead.excerpt}</p>

                  <Link href={`/articles/${lead.slug}`} className={styles.readCue}>
                    Read Article <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </Reveal>

              <ul className={styles.articleLedger}>
                {rest.map((article, index) => (
                  <Reveal as="li" key={article.slug} index={index}>
                    <div className={styles.ledgerCard}>
                      <span className={styles.ledgerIndex}>
                        {String(index + 2).padStart(2, "0")}
                      </span>

                      <div className={styles.ledgerMain}>
                        <span className={styles.metaLine}>
                          {article.category}
                          {article.series ? ` // ${article.series}` : ""}
                        </span>
                        <h3 className={styles.ledgerTitle}>
                          <Link href={`/articles/${article.slug}`} className={styles.titleLink}>
                            {article.title}
                          </Link>
                        </h3>
                        <p className={styles.ledgerExcerpt}>{article.excerpt}</p>
                      </div>

                      <div className={styles.ledgerAside}>
                        <span className={styles.metaLine}>
                          {formatArticleDate(article.date)}
                        </span>
                        <span className={styles.metaLine}>{article.readTime}</span>
                        <Link
                          href={`/articles/${article.slug}`}
                          className={styles.ledgerArrowLink}
                          aria-label={`Read ${article.title}`}
                        >
                          <span className={styles.ledgerArrow} aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
    </>
  );
}
"""
with open("D:/Projects/RMA/src/app/(site)/articles/page.tsx", "w", encoding="utf-8") as f:
    f.write(page_code)

# 2. Update articles/[slug]/page.tsx
slug_code = """import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllArticleSlugs,
  getAllArticles,
  getArticleBySlug,
  formatArticleDate,
} from "@/lib/articles";
import { authorityClosersCta } from "@/features/site-chrome";
import { ProseBody } from "@/features/editorial";
import editorial from "@/features/editorial/editorial.module.css";
import styles from "../articles.module.css";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) return { title: "Article not found" };

  const canonicalUrl = `https://rma.preview.nayagrowth.com/articles/${article.slug}`;
  const seoTitle = `${article.title} — Ar. Radhika Mahajan | Radhika Mahajan Architects`;
  const seoDescription = `${article.excerpt} Read this architectural insight by Ar. Radhika Mahajan, Founder & Principal Architect at RMA.`;

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: canonicalUrl,
      type: "article",
      publishedTime: article.date,
      authors: ["https://rma.preview.nayagrowth.com"],
      siteName: "Radhika Mahajan Architects — Architecture & Interior Design Studio",
      images: [
        {
          url: article.coverImage || "/og-rma-preview.png",
          width: 1200,
          height: 630,
          alt: `${article.title} — Ar. Radhika Mahajan`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [article.coverImage || "/og-rma-preview.png"],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const related = getAllArticles()
    .filter((candidate) => candidate.slug !== article.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: "Ar. Radhika Mahajan",
      jobTitle: "Principal Architect & Founder",
      worksFor: {
        "@type": "Organization",
        name: "Radhika Mahajan Architects (OPC) Private Limited",
        url: "https://rma.preview.nayagrowth.com",
      },
      url: "https://rma.preview.nayagrowth.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Radhika Mahajan Architects",
      url: "https://rma.preview.nayagrowth.com",
    },
    mainEntityOfPage: `https://rma.preview.nayagrowth.com/articles/${article.slug}`,
    image: article.coverImage
      ? `https://rma.preview.nayagrowth.com${article.coverImage}`
      : "https://rma.preview.nayagrowth.com/og-rma-preview.png",
  };

  return (
    <article className={styles.post}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className={styles.postHeader}>
        <div className={editorial.containerNarrow}>
          <Link href="/articles" className={styles.backLink}>
            <span aria-hidden="true">←</span> All Articles
          </Link>

          <div className={styles.postMeta}>
            {article.series ? (
              <span className={styles.series}>{article.series}</span>
            ) : null}
            <span className={styles.metaLine}>
              {article.category} · {article.readTime} ·{" "}
              <time dateTime={article.date}>
                {formatArticleDate(article.date)}
              </time>
            </span>
          </div>

          <h1 className={styles.postTitle}>{article.title}</h1>

          <div className={styles.bylineRow}>
            <span className={styles.bylineName}>By Ar. Radhika Mahajan</span>
            <span className={styles.bylineSep}>·</span>
            <span className={styles.bylineRole}>Principal Architect | Radhika Mahajan Architects</span>
          </div>

          {article.excerpt ? (
            <p className={styles.postStandfirst}>{article.excerpt}</p>
          ) : null}

          <div className={styles.postRule} aria-hidden="true" />
        </div>
      </header>

      <div className={editorial.containerNarrow}>
        <ProseBody
          className={styles.prose}
          html={article.html}
        />

        {/* Author Bio Box */}
        <section className={styles.authorBox} aria-label="About the Author">
          <div className={styles.authorBoxMeta}>
            <span className={styles.authorBoxLabel}>ABOUT THE AUTHOR</span>
            <h3 className={styles.authorBoxName}>Ar. Radhika Mahajan</h3>
            <p className={styles.authorBoxRole}>Founder & Principal Architect | RMA</p>
          </div>
          <p className={styles.authorBoxBio}>
            Ar. Radhika Mahajan is an architect and interior designer with 35+ completed projects across Pune and Lonavala. She specializes in 3D spatial planning, full home turnkey interiors (3 & 4 BHKs), luxury weekend retreats, and climate-responsive architecture.
          </p>
          <div className={styles.authorSignatureWrap}>
            <Image
              src="/branding/rma-signature-full-black.webp"
              alt="Radhika Mahajan Architects Signature"
              width={220}
              height={70}
              className={styles.authorSignatureImg}
            />
          </div>
        </section>

        <aside className={styles.postCta}>
          <p className={styles.postCtaText}>
            Ready to design your residence or luxury retreat?
          </p>
          <Link
            className={editorial.ctaPrimary}
            href="/contact"
            data-ac-event="public.article.book_consultation_clicked"
            data-ac-surface="article-footer"
          >
            Book Design Consultation
            <span aria-hidden="true">→</span>
          </Link>
        </aside>
      </div>

      {related.length > 0 ? (
        <section className={`${editorial.section} ${editorial.sectionSunken}`}>
          <div className={editorial.container}>
            <h2 className={styles.relatedHeading}>More from the Architectural Journal</h2>
            <ul className={styles.relatedGrid}>
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/articles/${item.slug}`} className={styles.relatedCard}>
                    <span className={styles.metaLine}>{item.category}</span>
                    <h3 className={styles.relatedTitle}>{item.title}</h3>
                    <span className={styles.metaLine}>{item.readTime}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </article>
  );
}
"""
with open("D:/Projects/RMA/src/app/(site)/articles/[slug]/page.tsx", "w", encoding="utf-8") as f:
    f.write(slug_code)

print("Updated articles pages successfully!")
