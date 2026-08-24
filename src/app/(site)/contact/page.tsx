import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { socialLinks } from "@/features/site-chrome";
import { PageHero } from "@/features/editorial";
import editorial from "@/features/editorial/editorial.module.css";
import { ContactForm } from "./ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Book Design Consultation — Radhika Mahajan Architects | Pune & Lonavala",
  description:
    "Schedule a 3D architectural consultation, site visit, or turnkey interior enquiry with Ar. Radhika Mahajan and the RMA team in Pune & Lonavala.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultation & Intake"
        index="01"
        headline="Start your spatial transformation"
        body={[
          "Whether you are taking possession of a new 3/4 BHK in Pune, designing a private retreat in Lonavala, or remodeling an existing space, we invite you to connect with our studio.",
          "Reserve a complimentary 3D design consultation and site visit below.",
        ]}
      />

      <section className={editorial.section}>
        <div className={`${editorial.container} ${styles.contactGrid}`}>
          <div className={styles.formColumn}>
            <Suspense fallback={<div className={styles.formSkeleton} />}>
              <ContactForm />
            </Suspense>
          </div>

          <aside className={styles.asideColumn}>
            <div className={styles.portraitBlock}>
              <Image
                className={styles.portrait}
                src="/media/radhika/radhika-consultation-portrait.webp"
                alt="Ar. Radhika Mahajan — Design Consultation"
                width={800}
                height={1200}
                sizes="(max-width: 900px) 50vw, 22rem"
                quality={90}
              />
            </div>

            <div className={styles.asideBlock}>
              <span className={styles.asideLabel}>Direct Studio Coordinate</span>
              <p className={styles.asideText}>
                Prefer instant WhatsApp connectivity or direct discussion?
              </p>
              <a
                className={editorial.ctaSecondary}
                href="https://wa.me/919876543210?text=Hello%20Ar.%20Radhika%20Mahajan%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit%20and%20design%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <span>WhatsApp Direct</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className={styles.asideBlock}>
              <span className={styles.asideLabel}>Service Coverage</span>
              <p className={styles.asideText}>
                Active site coverage across Pune (Bibewadi, Koregaon Park, Baner, Kothrud, Kolte Patil, Godrej Infinity) and Lonavala.
              </p>
            </div>

            {socialLinks.length > 0 ? (
              <div className={styles.asideBlock}>
                <span className={styles.asideLabel}>Follow the Studio</span>
                <ul className={styles.socialList}>
                  {socialLinks.map((social) => (
                    <li key={social.label}>
                      <a
                        className={styles.socialLink}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.label}
                        <span aria-hidden="true">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className={styles.asideBlock}>
              <span className={styles.asideLabel}>Committed Turnaround</span>
              <p className={styles.asideText}>
                Every enquiry is reviewed directly by Ar. Radhika Mahajan. We respond with initial feasibility feedback within 24 hours.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
