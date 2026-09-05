import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { leadMagnets } from "@/features/rma-media/media.content";
import { PageHero, Reveal } from "@/features/editorial";
import editorial from "@/features/editorial/editorial.module.css";
import styles from "../resources/resources.module.css";

export const metadata: Metadata = {
  title: "Projects & Architecture Portfolio — Radhika Mahajan Architects | Pune & Lonavala",
  description:
    "Explore built residential interiors, luxury 3 & 4 BHKs, weekend villas, and turnkey commercial architecture by Radhika Mahajan Architects (RMA).",
  alternates: {
    canonical: "https://rma.preview.nayagrowth.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Built Portfolio"
        index="01"
        headline="Form, space and materiality in practice"
        body={[
          "A curated selection of 3 & 4 BHK residences, luxury hillside retreats, and turnkey spatial transformations crafted across Pune and Lonavala.",
        ]}
        aside={
          <div className={styles.heroMediaFrame}>
            <Image
              src="/media/rma/hero-living-main.webp"
              alt="Radhika Mahajan Architects Portfolio"
              width={1000}
              height={750}
              sizes="(max-width: 900px) 70vw, 24rem"
              quality={90}
              className={styles.heroMediaImage}
            />
          </div>
        }
      />

      <section className={editorial.section} aria-label="Built projects">
        <div className={editorial.container}>
          <ul className={styles.resourceGrid}>
            {leadMagnets.map((project, index) => (
              <Reveal
                as="li"
                key={project.index}
                index={index}
                className={styles.resourceCard}
              >
                {project.image ? (
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={375}
                      className={styles.cardImage}
                    />
                  </div>
                ) : null}

                <div className={styles.cardHeader}>
                  <span className={styles.resourceIndex}>{project.index}</span>
                  {project.category ? (
                    <span className={styles.resourceCategory}>{project.category}</span>
                  ) : null}
                </div>

                <div className={styles.resourceBody}>
                  <h2 className={styles.resourceTitle}>{project.title}</h2>
                  <p className={styles.resourceDescription}>
                    {project.description}
                  </p>
                </div>

                <Link
                  className={styles.resourceCta}
                  href={`/contact?topic=${encodeURIComponent(project.topic)}`}
                  data-ac-event="public.resources.request_clicked"
                >
                  {project.ctaLabel}
                  <span aria-hidden="true">→</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${editorial.section} ${editorial.sectionDark}`}>
        <div className={editorial.container}>
          <div className={styles.bridgeBlock}>
            <h2 className={styles.bridgeHeadline}>
              Ready to transform your residence or commercial space
              <span className={styles.goldPeriod}>?</span>
            </h2>
            <p className={styles.bridgeBody}>
              Radhika Mahajan Architects manages the complete lifecycle—from 3D spatial visualization and transparent BOQ material selection to committed 45-day on-site turnkey handover with WhatsApp milestone updates every 3 days.
            </p>

            <div className={editorial.ctaRow}>
              <Link
                className={editorial.ctaPrimary}
                href="/contact"
                data-ac-event="public.projects.book_consultation_clicked"
                data-ac-surface="resources-bridge"
              >
                Book Design Consultation
                <span aria-hidden="true">→</span>
              </Link>
              <Link className={editorial.ctaSecondary} href="/articles">
                Read Design Journal
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
