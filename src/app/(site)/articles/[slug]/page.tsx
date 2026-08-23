import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllArticleSlugs,
  getAllArticles,
  getArticleBySlug,
  formatArticleDate,
} from "@/lib/articles";
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
