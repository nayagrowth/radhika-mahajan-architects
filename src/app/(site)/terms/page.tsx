import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/features/editorial";
import editorial from "@/features/editorial/editorial.module.css";

export const metadata: Metadata = {
  title: "Terms of Practice — Radhika Mahajan Architects | Pune & Lonavala",
  description:
    "Standard terms of practice, 3D consultation guidelines, and turnkey interior milestones at Radhika Mahajan Architects.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Studio Governance"
        index="01"
        headline="Terms of Architectural Practice"
        body={[
          "Guidelines governing design consultations, 3D spatial pre-visualization, bill of quantities (BOQ) agreements, and turnkey interior handover protocols.",
        ]}
      />

      <section className={editorial.section}>
        <div className={editorial.containerNarrow}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.4rem", lineHeight: 1.8 }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-family-serif)", fontSize: "1.6rem", margin: "0 0 0.8rem", color: "var(--ink-obsidian)" }}>
                1. Scope of Architectural & Interior Practice
              </h2>
              <p style={{ color: "var(--ink-body)", margin: 0 }}>
                Radhika Mahajan Architects (RMA) provides principal-led architectural planning, residential interior design, 3D photorealistic visualization, and turnkey project execution across Pune, Lonavala, and surrounding regions in Maharashtra.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-family-serif)", fontSize: "1.6rem", margin: "0 0 0.8rem", color: "var(--ink-obsidian)" }}>
                2. Design Consultations & Initial Feasibility
              </h2>
              <p style={{ color: "var(--ink-body)", margin: 0 }}>
                Initial 3D design dialogues and site feasibility assessments evaluate spatial layout potential, structural limitations, client budget expectations, and target completion timelines. Formal design documentation and high-resolution CAD/3D source files are initiated upon mutual agreement of engagement terms.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-family-serif)", fontSize: "1.6rem", margin: "0 0 0.8rem", color: "var(--ink-obsidian)" }}>
                3. BOQ Transparency & Material Specifications
              </h2>
              <p style={{ color: "var(--ink-body)", margin: 0 }}>
                All turnkey interior proposals are accompanied by an itemized Bill of Quantities (BOQ). Material specifications—including hardware (Hettich, Ebco), ply grades (BWP / BWR), veneers, laminates, and Italian marble finishes—are finalized prior to procurement. Any client-requested scope alterations are documented via written addenda.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-family-serif)", fontSize: "1.6rem", margin: "0 0 0.8rem", color: "var(--ink-obsidian)" }}>
                4. Turnkey Milestones & Quality Assurance
              </h2>
              <p style={{ color: "var(--ink-body)", margin: 0 }}>
                Turnkey projects follow structured milestone checkpoints (typically 40% civil/carcass, 40% finishes/joinery, 20% handover snag-list completion) with photographic progress updates shared every 3 days. On-site workmanship adheres to Council of Architecture standards and certified studio quality checklists.
              </p>
            </div>

            <div style={{ borderTop: "1px solid var(--rule-hairline)", paddingTop: "1.6rem" }}>
              <Link href="/contact" className={editorial.ctaPrimary}>
                Book Design Consultation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
