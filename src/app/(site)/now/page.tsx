import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Reveal } from "@/features/editorial";
import editorial from "@/features/editorial/editorial.module.css";
import styles from "./now.module.css";

export const metadata: Metadata = {
  title: "Now — Radhika Mahajan Architects | Current Sites & Studio Status",
  description: "Live updates on active site visits, current project capacity, and studio focus at Radhika Mahajan Architects.",
  robots: { index: false, follow: true },
};

const lastUpdated = "2026-08-23";

const nowSections = [
  {
    index: "01",
    label: "Active Site Visits & Execution",
    note: "Current residential and villa projects actively on site.",
    items: [
      "Bibewadi 4 BHK Residence — Joinery installation, Hettich concealed channels, and Italian marble wall claddings.",
      "Lonavala Luxury Villa — Terraced roof framework, cross-ventilation optimization, and outdoor basalt masonry.",
      "Kolte Patil Living — Acoustic false ceiling cove lighting and modular kitchen carcass assembly.",
    ],
  },
  {
    index: "02",
    label: "Studio Capacity",
    note: "Intake availability for the upcoming quarter.",
    items: [
      "Accepting 3 to 5 new full home interior projects (3 & 4 BHKs) and custom architectural villas across Pune & Lonavala.",
      "Offering complimentary initial 3D design consultations for recently possessed flat owners.",
    ],
  },
  {
    index: "03",
    label: "Material & Design Research",
    note: "Materials and architectural details we are currently exploring.",
    items: [
      "Micro-cement and fluted stone textures for seamless bathroom and foyer transitions.",
      "Concealed architectural linear lighting profiles with warm 2700K – 3000K circadian calibration.",
    ],
  },
  {
    index: "04",
    label: "Execution Blueprint",
    note: "Standard operating milestones.",
    items: [
      "Strict 45-day turnkey delivery schedules with WhatsApp photographic progress reports sent every 3 days.",
      "Transparent 40-40-20 milestone payment plan tied directly to verified site inspections.",
    ],
  },
];

export default function NowPage() {
  const formatted = new Date(lastUpdated).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <PageHero
        eyebrow="Now"
        index="01"
        headline="What I’m focused on right now"
        body={[
          "A simple, regularly updated page covering what I am building, learning and thinking about now.",
        ]}
        aside={
          <div className={styles.heroMediaFrame}>
            <Image
              src="/media/radhika/radhika-design-table.webp"
              alt="Ar. Radhika Mahajan architectural design session"
              width={800}
              height={1000}
              sizes="(max-width: 900px) 70vw, 24rem"
              quality={90}
              className={styles.heroMediaImage}
            />
          </div>
        }
      />

      <section className={editorial.section}>
        <div className={editorial.container}>
          <p className={styles.updatedStamp}>
            Last updated <time dateTime={lastUpdated}>{formatted}</time>
          </p>

          <ul className={styles.nowList}>
            {nowSections.map((section, index) => (
              <Reveal
                as="li"
                key={section.index}
                index={index}
                className={styles.nowRow}
              >
                <div className={styles.nowHead}>
                  <span className={styles.nowIndex}>{section.index}</span>
                  <h2 className={styles.nowLabel}>{section.label}</h2>
                  <p className={styles.nowNote}>{section.note}</p>
                </div>

                <div className={styles.nowBody}>
                  {section.items.length > 0 ? (
                    <ul className={styles.itemList}>
                      {section.items.map((item) => (
                        <li key={item.slice(0, 40)} className={styles.item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className={styles.itemEmpty}>Nothing noted this season.</p>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
