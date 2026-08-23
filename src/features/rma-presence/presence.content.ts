import type { PresenceContent } from "./presence.types";

/**
 * "Featured / Found On" proof rail.
 * Copy from the handoff pack, 01_COPY section 03.
 *
 * `href` is omitted on every entry deliberately. The previous values were
 * bare root domains (medium.com, youtube.com, linkedin.com) — not Dipak's
 * profiles — and the copy master flags media handles as unverified. Add each
 * real profile URL here and that platform becomes a working link on its own.
 */
export const presenceContent: PresenceContent = {
  sectionNumber: "03",
  sectionTitle: "LANDMARKS & PROOF",
  headlineWord1: "BUILT",
  headlineWord2: "PORTFOLIO",
  metaLabel: "Landmark Developments",
  supportingNote:
    "Transforming high-end 3 & 4 BHK residences, bespoke villas, and boutique workspaces across Pune's finest developments and Lonavala retreats.",
  signatures: [
    {
      id: "kolte-patil",
      name: "Kolte Patil Projects",
      sublabel: "Luxury 3 & 4 BHK Full Home Interiors",
      category: "RESIDENTIAL",
      iconType: "medium",
    },
    {
      id: "godrej-infinity",
      name: "Godrej Infinity",
      sublabel: "Contemporary Turnkey Living Spaces",
      category: "PREMIUM",
      iconType: "dailyhunt",
    },
    {
      id: "koregaon-park",
      name: "Koregaon Park",
      sublabel: "Bespoke Joinery & Architectural Styling",
      category: "LUXURY",
      iconType: "youtube",
    },
    {
      id: "lonavala-villas",
      name: "Lonavala Villas",
      sublabel: "Weekend Retreats & Landscape Integration",
      category: "RETREATS",
      iconType: "podcast",
    },
    {
      id: "bibewadi-estates",
      name: "Bibewadi Estates",
      sublabel: "Complete Spatial & Structural Renovations",
      category: "TURNKEY",
      iconType: "linkedin",
    },
  ],
};

