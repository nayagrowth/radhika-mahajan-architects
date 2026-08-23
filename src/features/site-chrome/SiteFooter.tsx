import Image from "next/image";
import Link from "next/link";
import {
  authorityClosersCta,
  footerContent,
  primaryNav,
  siteBrand,
  socialLinks,
} from "./site.content";
import styles from "./site-chrome.module.css";

const EVENT_SCHEMA_VERSION = "1";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrandBlock}>
          <Link className={styles.footerBrandLink} href="/" aria-label="Radhika Mahajan Architects — home">
            <Image
              src="/branding/rma-signature-full-gold.webp"
              alt="Radhika Mahajan Architects"
              width={240}
              height={76}
              className={styles.footerSignatureImg}
            />
          </Link>
          <span className={styles.footerPositioning}>{siteBrand.positioning}</span>
          <p className={styles.footerPhilosophy}>{footerContent.philosophyLine}</p>
        </div>

        <div className={styles.footerNavBlock}>
          <span className={styles.footerLabel}>Studio &amp; Practice</span>
          <ul className={styles.footerNavList}>
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link className={styles.footerLink} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerCtaBlock}>
          <span className={styles.footerLabel}>Consultation &amp; Enquiries</span>
          <Link
            className={styles.footerCta}
            href={authorityClosersCta.href}
            data-ac-event={authorityClosersCta.event}
            data-ac-event-schema={EVENT_SCHEMA_VERSION}
            data-ac-surface="site-footer"
          >
            {authorityClosersCta.label}
            <span aria-hidden="true">→</span>
          </Link>

          {socialLinks.length > 0 ? (
            <ul className={styles.socialList}>
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    className={styles.footerLink}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div className={styles.footerBaseline}>
        <span>{footerContent.copyright}</span>
      </div>
    </footer>
  );
}

