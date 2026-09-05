"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "./site.content";
import styles from "./site-chrome.module.css";

const EVENT_SCHEMA_VERSION = "1";

/**
 * Fixed header for the inner pages.
 *
 * The homepage deliberately does NOT use this: its header is baked into the
 * pinned GSAP story stage (see rma-hero) so it can deconstruct with Act 1.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  // Close the drawer on route change so back/forward never strands it open.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 24);
      // On the home page, reveal header once user scrolls into Act 2 (approx 35% of viewport height)
      setScrolledPastHero(scrollY > Math.min(window.innerHeight * 0.35, 300));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  // Lock body scroll behind the drawer, and restore it on unmount.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const headerVisibilityClass = isHomePage
    ? scrolledPastHero
      ? styles.headerVisibleOnHome
      : styles.headerHiddenOnHome
    : styles.headerVisible;

  return (
    <>
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>

      <header
        className={`${styles.header} ${scrolled ? styles.headerScrolled : ""} ${headerVisibilityClass}`}
        data-site-header="true"
      >
        <div className={styles.headerContainer}>
          <Link className={styles.brandLink} href="/" aria-label="Radhika Mahajan Architects — Home">
            <Image
              src="/branding/rma-logo-horizontal-blk.webp"
              alt="Radhika Mahajan Architects"
              width={220}
              height={70}
              className={styles.headerSignatureImg}
              priority
            />
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary Architectural Navigation">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive(link.href) ? styles.navLinkActive : ""}`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                <span>{link.label}</span>
                {isActive(link.href) ? (
                  <span className={styles.activeIndicator} aria-hidden="true">
                    ◆
                  </span>
                ) : null}
              </Link>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <Link
              href="/contact"
              className={styles.headerCtaBtn}
              data-ac-event="public.global.header_consultation_clicked"
            >
              <span>Book Consultation</span>
              <span className={styles.ctaArrowIcon} aria-hidden="true">↗</span>
            </Link>

            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="site-mobile-drawer"
              data-ac-event="public.global.mobile_nav_toggled"
              data-ac-event-schema={EVENT_SCHEMA_VERSION}
            >
              <span className={styles.menuText}>MENU</span>
              <div className={styles.menuBarsWrap} aria-hidden="true">
                <span
                  className={`${styles.menuBar} ${menuOpen ? styles.menuBarTopOpen : ""}`}
                />
                <span
                  className={`${styles.menuBar} ${menuOpen ? styles.menuBarBottomOpen : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <div
        id="site-mobile-drawer"
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!menuOpen}
      >
          <div className={styles.drawerHeader}>
            <Image
              src="/branding/rma-logo-horizontal-wht.webp"
              alt="Radhika Mahajan Architects"
              width={200}
              height={64}
              className={styles.drawerLogoImg}
            />
          </div>

          <nav className={styles.drawerNav} aria-label="Mobile Navigation">
            {primaryNav.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.drawerLink} ${isActive(link.href) ? styles.drawerLinkActive : ""}`}
                style={{ "--i": index } as React.CSSProperties}
                onClick={() => setMenuOpen(false)}
              >
                <span className={styles.drawerIndex}>
                  {link.badge || String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.drawerLabel}>{link.label}</span>
                <span className={styles.drawerArrow} aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>

          <div className={styles.drawerFooter}>
            <Link
              href="/contact"
              className={styles.drawerCtaBtn}
              onClick={() => setMenuOpen(false)}
            >
              <span>Book 3D Design Consultation ↗</span>
            </Link>
            <div className={styles.drawerStudioInfo}>
              <span className={styles.drawerCity}>Pune Main Studio · Bibewadi</span>
              <a href="tel:+919876543210" className={styles.drawerPhone}>
                +91 98765 43210
              </a>
          </div>
        </div>
      </div>
    </>
  );
}
