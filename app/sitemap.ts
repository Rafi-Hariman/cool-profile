import type { MetadataRoute } from "next";
import { person } from "@/data/person";
import { articleMeta } from "@/data/articles/pju-mati-sleman";

// Stable last-modified dates. Bump manually when the relevant content actually
// changes — do NOT use build time, or the sitemap churns on every deploy
// despite no real content change.
const HOME_LAST_MODIFIED = "2026-10-28";
const ARTICLES_LAST_MODIFIED = "2026-10-28";

export default function sitemap(): MetadataRoute.Sitemap {
  // Homepage + the two article routes. Scratch routes (/mobile, /new-page)
  // are noindex'd via their own route metadata and are not listed.
  return [
    {
      url: `${person.siteUrl}/`,
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${person.siteUrl}/articles`,
      lastModified: ARTICLES_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${person.siteUrl}/articles/${articleMeta.slug}`,
      lastModified: articleMeta.updatedAt,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
