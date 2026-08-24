import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  footerContent,
  practiceLinks,
  rmaConsultationCta,
  siteBrand,
  socialLinks,
} from "./site.content";
import styles from "./site-chrome.module.css";

const EVENT_SCHEMA_VERSION = "1";

export function SiteFooter() {
  return (
    <footer className={styles.footer} role="contentinfo" aria-label="Architectural Studio Footer">
      {/* Top Gold Laser Boundary Hairline */}
      <div className={styles.footerLaserBoundary} aria-hidden="true" />

      <div className={styles.footerInner}>
        {/* Column 1: Studio Identity & Registration */}
        <div className={styles.footerBrandBlock}>
          <Link className={styles.footerBrandLink} href="/" aria-label="Radhika Mahajan Architects — Home">
            <Image
              src="/branding/rma-logo-horizontal-wht.webp"
              alt="Radhika Mahajan Architects"
              width={240}
              height={76}
              className={styles.footerSignatureImg}
            />
          </Link>
          <p className={styles.footerPhilosophy}>{siteBrand.primaryIdea}</p>
          <span className={styles.footerTagline}>{siteBrand.subTagline}</span>
          <div className={styles.footerRegistrationBadge}>
            <span className={styles.registrationPip}>◆</span>
            <span className={styles.registrationText}>{siteBrand.councilRegistration}</span>
          </div>
        </div>

        {/* Column 2: Architectural Practice Areas */}
        <div className={styles.footerNavBlock}>
          <span className={styles.footerLabel}>Practice Areas &amp; Disciplines</span>
          <ul className={styles.footerNavList}>
            {practiceLinks.map((link) => (
              <li key={link.label}>
                <Link className={styles.footerLink} href={link.href}>
                  <span className={styles.footerLinkArrow} aria-hidden="true">↗</span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Studio Locations & Direct Contacts */}
        <div className={styles.footerLocationsBlock}>
          <span className={styles.footerLabel}>Studio Locations</span>
          <div className={styles.studiosList}>
            {footerContent.studios.map((studio) => (
              <div key={studio.city} className={styles.studioItem}>
                <span className={styles.studioCityName}>{studio.city}</span>
                <p className={styles.studioAddress}>{studio.address}</p>
                <div className={styles.studioContactsRow}>
                  <a href={`tel:${studio.phone.replace(/\s+/g, "")}`} className={styles.studioContactLink}>
                    {studio.phone}
                  </a>
                  <span className={styles.contactDivider}>·</span>
                  <a href={`mailto:${studio.email}`} className={styles.studioContactLink}>
                    {studio.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 4: Consultation Intake & Social Connect */}
        <div className={styles.footerCtaBlock}>
          <span className={styles.footerLabel}>Project Intake &amp; Dialogue</span>
          <p className={styles.footerCtaNote}>
            Initiate your 3D spatial planning, residential interior transformation, or architectural consultation.
          </p>

          <Link
            className={styles.footerCta}
            href={rmaConsultationCta.href}
            data-ac-event={rmaConsultationCta.event}
            data-ac-event-schema={EVENT_SCHEMA_VERSION}
            data-ac-surface="site-footer"
          >
            <span>{rmaConsultationCta.label}</span>
            <span aria-hidden="true">↗</span>
          </Link>

          {socialLinks.length > 0 ? (
            <div className={styles.socialChannels}>
              <span className={styles.socialChannelsTitle}>Studio Channels</span>
              <ul className={styles.socialList}>
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      className={styles.socialLink}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit RMA on ${social.label}`}
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      {/* Bottom Legal Baseline */}
      <div className={styles.footerBaseline}>
        <div className={styles.baselineInner}>
          <span className={styles.copyrightText}>{footerContent.copyright}</span>
          <span className={styles.hallmarkText}>{footerContent.hallmark}</span>
          <div className={styles.legalLinksRow}>
            {footerContent.legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.legalLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}


