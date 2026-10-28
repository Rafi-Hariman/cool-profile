# Article SEO — Pre-Production Audit

Routes audited: `/`, `/articles`, `/articles/pju-mati-sleman`.

## Titles and descriptions

- Homepage title: `Rafi Hariman — Frontend Developer Portfolio`
- Articles index title (rendered): `Articles — Rafi Hariman`
- Article HTML title (rendered): `PJU Mati di Sleman: Mengapa Bisa Lambat? — Rafi Hariman`
- Article H1 (visible): `PJU Mati di Sleman: Mengapa Penanganannya Bisa Lambat?`
- Article SEO title (Open Graph / Twitter): `PJU Mati di Sleman: Mengapa Bisa Lambat?`
- Article meta description: `Analisis kasus PJU mati di Sleman dan daerah lain pada 2023–2026, dari laporan warga, kewenangan, diagnosis, hingga perbaikan.`
- Articles index meta description: `Articles and analysis by Rafi Hariman on interfaces, systems, engineering, and public services.`

## Canonical URLs

- Homepage: `https://rafihariman.my.id`
- Articles index: `https://rafihariman.my.id/articles`
- Article: `https://rafihariman.my.id/articles/pju-mati-sleman`

## Structured data

- Article route: `BlogPosting` — `headline`, `description`, `image`, `datePublished`, `dateModified`, `inLanguage: id-ID`, `isAccessibleForFree: true`, `articleSection: Layanan Publik`, `author: Person`, `publisher: Person`, `mainEntityOfPage: WebPage` with canonical `@id`.
- Root layout: `Person` + `WebSite` (unchanged; no conflict with the route block).

## Sitemap and robots

- `sitemap.xml`: 3 URLs with stable `lastModified` and priorities — homepage `1`, article `0.8`, articles index `0.7`.
- `robots.txt`: `User-Agent: *` / `Allow: /` + `Sitemap: https://rafihariman.my.id/sitemap.xml`.

## Image

- Source path: `public/assets/images/articles/pju-mati.jpg`
- Dimensions: 1360 × 936
- Format: JPEG
- Alt: `Ruas jalan pada malam hari dengan penerangan dari beberapa lampu jalan`
- Caption: `Ilustrasi kondisi jalan pada malam hari. Gambar tidak merepresentasikan salah satu kasus di Sleman secara khusus.`
- Open Graph / Twitter: `summary_large_image` referencing the same asset.

## Headings and links

- One `<h1>` (visible article title); each principal section is `<h2>`; subsections are `<h3>`. Section labels (`01 — KONTEKS`) are spans, not headings.
- Internal crawl paths: Homepage Writing → article; `/articles` → article; article → `/articles`; author card → `/` (via `next/link`).

## Reading time

- Article prose ≈ 1.600 words → `9 menit baca` (200 words/min, rounded up; navigation, references, and interface labels excluded where practical).

## Validation

- `npm run build` → PASS (TypeScript check + 11 static routes).
- No `localhost`, preview-domain, `noindex`, or deprecated `next/head` usage in production metadata. No `new Date()` in sitemap generation.

## Production-only checks

- [ ] Custom-domain route returns HTTP 200
- [ ] HTTP redirects to HTTPS
- [ ] Canonical uses `rafihariman.my.id`
- [ ] `view-source:` contains metadata and article prose
- [ ] `robots.txt` reachable
- [ ] `sitemap.xml` reachable and includes the article URL
- [ ] Google Rich Results Test detects `BlogPosting`
- [ ] PageSpeed Insights run
- [ ] SEO Site Checkup run on the article URL
- [ ] Initial score recorded
- [ ] Warnings reviewed
- [ ] Final score recorded
- [ ] Screenshot saved below 10 MB

SEO Site Checkup final score: [TO BE FILLED AFTER DEPLOYMENT]
Screenshot filename: [TO BE FILLED AFTER DEPLOYMENT]
