# SEO Requirements

## Metadata

The root layout defines:

- title: `[NAME] — Frontend Engineer`
- description: concise professional description
- Open Graph metadata
- Twitter/X metadata
- canonical URL (from `metadataBase`)

Use Next.js Metadata API (`export const metadata` / `generateMetadata`).

---

# Open Graph

Professional preview when shared. `og:title`, `og:description`,
`og:type: website`, `og:url`, `og:image` (1200×630).

Note: `metadataBase` uses a placeholder URL in `data/person.ts` — replace
with the production domain before launch.

---

# Sitemap

`app/sitemap.ts` generates sitemap.xml (single page today; grows with
routes).

---

# Robots

`app/robots.ts` generates robots.txt allowing all crawlers and pointing to
the sitemap.

---

# Structured Data

Schema.org `Person` JSON-LD in the root layout: name, jobTitle, url,
sameAs (social profiles).

---

# Semantic Content

Meaningful headings (single h1 = name). Descriptive links — never "Click
here"; prefer "View project case study" / "GitHub profile".

---

# 404

Custom `app/not-found.tsx` preserving the design language: quiet, on-brand,
with a link back home.

---

# URLs

Clean URLs. One-page portfolio today (`/`); future articles may live under
`/articles/…`.
