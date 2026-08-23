import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rma.preview.nayagrowth.com"),
  title: "Radhika Mahajan Architects — Ar. Radhika Mahajan | Architecture & Interiors Pune & Lonavala",
  description:
    "Radhika Mahajan Architects (RMA) is a premier architecture & turnkey interior design studio by Ar. Radhika Mahajan. Form × Space × Detail across 35+ projects in Pune & Lonavala.",
  alternates: {
    canonical: "https://rma.preview.nayagrowth.com/",
  },
  openGraph: {
    type: "website",
    url: "https://rma.preview.nayagrowth.com/",
    siteName: "Radhika Mahajan Architects",
    title: "Radhika Mahajan Architects — Ar. Radhika Mahajan | Architecture & Interiors Pune & Lonavala",
    description:
      "Form × Space × Detail. 35+ delivered residences, luxury villas, and turnkey interiors across Pune & Lonavala.",
    images: [
      {
        url: "/og-rma-preview.png",
        width: 1200,
        height: 630,
        alt: "Radhika Mahajan Architects — Form × Space × Detail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radhika Mahajan Architects — Ar. Radhika Mahajan",
    description:
      "Form × Space × Detail. 35+ delivered residences, luxury villas, and turnkey interiors across Pune & Lonavala.",
    images: ["/og-rma-preview.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#f4f8fb",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable}`}>
      <head>
        {/* Preload High Priority Brand Assets */}
        <link rel="preload" href="/branding/rma-logo-horizontal-blk.webp" as="image" type="image/webp" />
        <link rel="preload" href="/branding/rma-logomark-gold.webp" as="image" type="image/webp" />

        {/* NayaGrowth Tracking & GTag Bootstrap */}
        <script
          src="https://api.nayagrowth.com/capture/tracking-bootstrap.js"
          async
        />
        {/* NayaGrowth Form Capture Script */}
        <script
          src="https://api.nayagrowth.com/capture/v1.js"
          data-naya-connector="src_rma_web"
          async
        />

        {/* Structured Data / JSON-LD for Google Search & Architectural Entity Knowledge Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ArchitecturalFirm",
                  "@id": "https://rma.preview.nayagrowth.com/#firm",
                  name: "Radhika Mahajan Architects",
                  alternateName: "RMA",
                  legalName: "Radhika Mahajan (OPC) Private Limited",
                  slogan: "Designing Spaces. Creating Experiences.",
                  url: "https://rma.preview.nayagrowth.com",
                  logo: "https://rma.preview.nayagrowth.com/branding/rma-logo-horizontal-blk.png",
                  image: "https://rma.preview.nayagrowth.com/og-rma-preview.png",
                  founder: {
                    "@type": "Person",
                    name: "Ar. Radhika Mahajan",
                    jobTitle: "Principal Architect & Founder",
                    url: "https://rma.preview.nayagrowth.com/about",
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Pune",
                    addressRegion: "Maharashtra",
                    addressCountry: "IN",
                  },
                  areaServed: [
                    "Pune",
                    "Bibewadi",
                    "Koregaon Park",
                    "Baner",
                    "Kothrud",
                    "Lonavala",
                    "Maharashtra",
                  ],
                  knowsAbout: [
                    "Architecture",
                    "Residential Interior Design",
                    "Turnkey Interior Execution",
                    "3D Spatial Planning",
                    "Villa Architecture",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://rma.preview.nayagrowth.com/#website",
                  url: "https://rma.preview.nayagrowth.com",
                  name: "Radhika Mahajan Architects",
                  publisher: {
                    "@id": "https://rma.preview.nayagrowth.com/#firm",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
