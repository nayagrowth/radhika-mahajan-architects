import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  videoRails,
  youtubeChannelUrl,
  signatureProperties,
} from "@/features/rma-media/media.content";
import { PageHero, SectionHeader, Reveal } from "@/features/editorial";
import editorial from "@/features/editorial/editorial.module.css";
import styles from "./videos.module.css";

export const metadata: Metadata = {
  title: "Spatial Walkthroughs & Design Films — Radhika Mahajan Architects | Pune & Lonavala",
  description:
    "Watch room-by-room architectural walkthroughs, 3D design to execution breakdowns, and material selections by Radhika Mahajan Architects (RMA).",
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Spatial Walkthroughs"
        index="01"
        headline="Experience our built architecture"
        body={[
          "Cinematic room-by-room walkthroughs and design breakdowns exploring 3D spatial planning, false ceiling lighting, and bespoke joinery.",
        ]}
        aside={
          <div className={styles.heroMediaPlate}>
            <Image
              src="/media/rma/hero-lonavala-villa.webp"
              alt="Radhika Mahajan Architects Spatial Tour"
              width={1200}
              height={800}
              sizes="(max-width: 900px) 90vw, 36vw"
              quality={90}
              className={styles.heroMediaImage}
              priority
            />
            <span className={styles.heroMediaCaption}>
              SPATIAL TOUR · 3D TO BUILT REALITY
            </span>
          </div>
        }
      />

      {videoRails.map((rail, railIndex) => (
        <section
          key={rail.id}
          id={rail.id}
          className={`${editorial.section} ${
            railIndex % 2 === 1 ? editorial.sectionSunken : ""
          }`}
          aria-labelledby={`${rail.id}-heading`}
        >
          <div className={editorial.container}>
            <SectionHeader
              index={String(railIndex + 2).padStart(2, "0")}
              label="Videos"
              headline={rail.label}
              note={rail.note}
              headingId={`${rail.id}-heading`}
            />

            {rail.videos.length > 0 ? (
              <ul className={styles.videoGrid}>
                {rail.videos.map((video, index) => {
                  const cardHref = video.href || (video.youtubeId ? `https://www.youtube.com/watch?v=${video.youtubeId}` : "/contact");
                  const isExternal = cardHref.startsWith("http");
                  const thumbSrc = video.poster || (video.youtubeId ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg` : "/media/rma/hero-living-main.webp");

                  const cardContent = (
                    <>
                      <span className={styles.thumbFrame}>
                        <Image
                          className={styles.thumb}
                          src={thumbSrc}
                          alt={video.title}
                          width={480}
                          height={360}
                          sizes="(max-width: 700px) 100vw, 20rem"
                        />
                        <span className={styles.playToken} aria-hidden="true">
                          ▶
                        </span>
                      </span>

                      <span className={styles.videoMeta}>
                        {video.category} · {video.duration}
                      </span>
                      <h3 className={styles.videoTitle}>{video.title}</h3>
                    </>
                  );

                  return (
                    <Reveal as="li" key={video.id} index={index}>
                      {isExternal ? (
                        <a
                          className={styles.videoCard}
                          href={cardHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-ac-event="public.videos.video_clicked"
                        >
                          {cardContent}
                        </a>
                      ) : (
                        <Link
                          className={styles.videoCard}
                          href={cardHref}
                          data-ac-event="public.videos.video_clicked"
                        >
                          {cardContent}
                        </Link>
                      )}
                    </Reveal>
                  );
                })}
              </ul>
            ) : (
              <Reveal>
                <div className={styles.emptyRail}>
                  <span className={styles.emptyMark} aria-hidden="true">
                    ✦
                  </span>
                  <p className={styles.emptyText}>
                    This rail is being filmed. New breakdowns are published here
                    as they go live.
                  </p>
                  {youtubeChannelUrl ? (
                    <a
                      className={editorial.ctaSecondary}
                      href={youtubeChannelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch on YouTube
                      <span aria-hidden="true">→</span>
                    </a>
                  ) : (
                    <Link className={editorial.ctaSecondary} href="/articles">
                      Read the articles instead
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </Reveal>
            )}
          </div>
        </section>
      ))}

      {/* --- Signature studio frameworks --- */}
      <section
        className={`${editorial.section} ${editorial.sectionDark}`}
        aria-labelledby="signature-heading"
      >
        <div className={editorial.container}>
          <SectionHeader
            index="05"
            label="Studio Standards"
            headline="Architectural frameworks & execution principles"
            note="Definitive protocols designed to eliminate ambiguity, verify materiality, and deliver turnkey precision across Pune & Lonavala."
            inverted
            headingId="signature-heading"
          />

          <ul className={styles.propertyList}>
            {signatureProperties.map((property, index) => (
              <Reveal
                as="li"
                key={property}
                index={index}
                className={styles.propertyItem}
              >
                <span className={styles.propertyIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.propertyName}>{property}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
