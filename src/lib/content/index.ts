import type { ContentProvider } from "./content.types";
import { FileSystemContentProvider } from "./fs-content-provider";

/**
 * Content Module Entry Point
 *
 * To plug in Strapi / Sanity / Ghost / Headless API in the future:
 *   1. Implement ContentProvider (from ./content.types)
 *   2. Swap the export here to use that provider
 * 
 * No UI components or page routes will need to change!
 */
export const contentProvider: ContentProvider = new FileSystemContentProvider();

export function formatContentDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export * from "./content.types";
