import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/features/editorial";
import editorial from "@/features/editorial/editorial.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — Radhika Mahajan Architects | Pune & Lonavala",
  description:
    "Privacy and confidentiality standards for architectural clients, design consultations, and spatial documentation at Radhika Mahajan Architects.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Studio Governance"
        index="01"
        headline="Privacy & Client Confidentiality"
        body={[
          "Radhika Mahajan Architects (RMA) is committed to protecting client privacy, proprietary floor plans, and project design data across all architectural and interior engagements.",
        ]}
      />

      <section className={editorial.section}>
        <div className={editorial.containerNarrow}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.4rem", lineHeight: 1.8 }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-family-serif)", fontSize: "1.6rem", margin: "0 0 0.8rem", color: "var(--ink-obsidian)" }}>
                1. Information We Collect
              </h2>
              <p style={{ color: "var(--ink-body)", margin: 0 }}>
                When you request a 3D architectural consultation, contact our studio, or subscribe to project walkthroughs, we collect relevant information including your name, contact details (phone, WhatsApp, email), property location/society, and design preferences.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-family-serif)", fontSize: "1.6rem", margin: "0 0 0.8rem", color: "var(--ink-obsidian)" }}>
                2. Use of Architectural & Spatial Documentation
              </h2>
              <p style={{ color: "var(--ink-body)", margin: 0 }}>
                Any floor plans, civil blueprints, site photographs, or budget specifications shared with RMA are held strictly confidential. They are utilized exclusively for feasibility analysis, 3D spatial modeling, bill of quantities (BOQ) preparation, and turnkey execution.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-family-serif)", fontSize: "1.6rem", margin: "0 0 0.8rem", color: "var(--ink-obsidian)" }}>
                3. Photography & Portfolio Permissions
              </h2>
              <p style={{ color: "var(--ink-body)", margin: 0 }}>
                Completed projects featured on our public portfolio and spatial walkthroughs are photographed and published only with explicit client consent, respecting personal privacy and protecting sensitive security layouts.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-family-serif)", fontSize: "1.6rem", margin: "0 0 0.8rem", color: "var(--ink-obsidian)" }}>
                4. Data Protection & Inquiries
              </h2>
              <p style={{ color: "var(--ink-body)", margin: "0 0 1rem" }}>
                We never sell, rent, or distribute client contact records to third-party marketing brokers. If you have questions regarding your data or wish to update your records, please connect directly with our Pune studio team:
              </p>
              <div style={{ padding: "1.2rem 1.6rem", background: "var(--paper-raised)", borderLeft: "3px solid var(--gold)" }}>
                <p style={{ margin: "0 0 0.4rem", fontWeight: 600 }}>Radhika Mahajan Architects (RMA)</p>
                <p style={{ margin: "0 0 0.4rem", color: "var(--ink-muted)", fontSize: "0.95rem" }}>
                  Suvarnaratna Garden, Bibewadi, Pune, Maharashtra 411037
                </p>
                <p style={{ margin: 0, color: "var(--ink-muted)", fontSize: "0.95rem" }}>
                  Email: <a href="mailto:studio@radhikamahajan.com" style={{ color: "var(--gold-deep)", textDecoration: "underline" }}>studio@radhikamahajan.com</a>
                </p>
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--rule-hairline)", paddingTop: "1.6rem" }}>
              <Link href="/contact" className={editorial.ctaPrimary}>
                Schedule a Consultation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
