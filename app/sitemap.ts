import type { MetadataRoute } from "next";
import { person } from "@/data/person";

// Stable last-modified date. Bump manually when the homepage content
// actually changes — do NOT use build time, or the sitemap churns on every
// deploy despite no real content change.
const HOME_LAST_MODIFIED = "2026-10-13";

export default function sitemap(): MetadataRoute.Sitemap {
  // Single-page portfolio today: only the canonical homepage belongs in the
  // sitemap. Scratch routes (/mobile, /new-page) are noindex'd, not listed.
  return [
    {
      url: person.siteUrl,
      lastModified: HOME_LAST_MODIFIED,
    },
  ];
}
