# SEO & Performance Implementation — Rahesa

## 1. Initial state

- Homepage `/` dulunya portfolio pribadi Rafi Hariman (bahasa Inggris, dark theme).
- Portfolio dipindah ke `/profile`; `/` menjadi landing page Rahesa (bahasa Indonesia).
- Domain produksi tetap `https://rafihariman.my.id`.

## 2. Route & entity map

| Rute | Entitas | Intent |
| --- | --- | --- |
| `/` | Rahesa Digital Systems (brand layanan) | transactional/commercial |
| `/profile` | Rafi Hariman (person) | navigational/personal |
| `/articles`, `/articles/[slug]` | konten informasional | informational |

Tidak ada redirect antara `/` dan `/profile`.

## 3. Metadata mapping

| Halaman | Title | Canonical |
| --- | --- | --- |
| `/` | `Jasa Pembuatan Sistem & Aplikasi Custom | Rahesa` | `https://rafihariman.my.id/` |
| `/profile` | `Rafi Hariman | Frontend Developer Portfolio` | `https://rafihariman.my.id/profile` |

- `metadataBase` = `new URL("https://rafihariman.my.id")`.
- Template title root = `%s | Rahesa`; profile memakai `title.absolute` agar tidak
  menjadi "Rafi Hariman | Frontend Developer Portfolio | Rahesa".
- OG siteName `/` = `Rahesa Digital Systems`, locale `id_ID`; profile `en_US`.

## 4. Entity separation

- `Rahesa` (brand) vs `Rafi Hariman` (person) dimodelkan terpisah.
- Config: `data/marketing.ts` (`business`) + `data/person.ts` (`person`).
- Person JSON-LD: `name` = nama lengkap, `alternateName` = nama publik.
- H1 `/profile` = nama lengkap; subtitle = `Frontend Developer`; nama publik
  "Rafi Hariman" tetap terlihat.

## 5. Structured data

- `/` → `WebSite` (root layout), `ProfessionalService` + `Service` (homepage).
- `/profile` → `Person` (name/alternateName/jobTitle/worksFor/sameAs/knowsAbout).
- `/articles/[slug]` → `BlogPosting` (sudah ada).
- Utility: `components/json-ld.tsx` + `lib/structured-data.ts` (escape `<`).
- Tidak ada rating/review/address/opening-hours/pricing palsu.

## 6. Sitemap

- `/`, `/profile`, `/articles`, `/articles/pju-mati-sleman`.
- Semua HTTPS, origin produksi, prioritas tidak semua 1.0.
- Tanggal `lastModified` stabil (bukan build time).

## 7. Robots

- `allow /`, `disallow /mobile /new-page`, sitemap URL produksi.
- Tidak memblokir CSS/JS/aset rendering.

## 8. Open Graph & favicon

- OG `/`: `app/opengraph-image.tsx` (Rahesa, teks, 1200×630).
- OG `/profile`: `app/profile/opengraph-image.tsx` (Rafi Hariman, dark).
- Favicon: `app/icon.png` + `app/apple-icon.png` (ikon R).
- Brand assets: `public/brand/` (logo penuh + ikon R cropped + ukuran turunan).

## 9. Internal linking

- `/` → `/profile` ("Profil Rafi Hariman" di footer).
- `/profile` → `/` ("Lihat layanan Rahesa" di sidebar, mobile header, footer).

## 10. Performance findings

- Homepage = Server Component (hanya `navbar.tsx` dan `faq-accordion.tsx` yang
  client island).
- **Tidak ada** Framer Motion atau Spline di homepage (Spline hanya di `/profile`
  robot-card, lazy + desktop-only).
- Animasi homepage = CSS keyframes (`fade-up`) + `Reveal` (IntersectionObserver),
  dengan `prefers-reduced-motion` dihormati.
- Font: `next/font` (Space Grotesk, JetBrains Mono, Source Serif 4), `display: swap`.
- Vercel Speed Insights dipertahankan.

## 11. Performance changes

- Tidak ada perubahan runtime besar; audit memastikan homepage tetap server-first
  tanpa bundle Framer Motion/Spline.

## 12. Accessibility changes

- Logo link `aria-label` deskriptif; ikon dekoratif `alt=""`.
- H1 tunggal per halaman; heading hierarkis.
- FAQ = accordion accessible (button + aria-expanded + region) dengan animasi
  grid-rows dan `prefers-reduced-motion`.
- Menu mobile: `aria-expanded`/`aria-controls`, Escape + outside-click close,
  `inert` saat tertutup.

## 13. Analytics plan

Lihat `docs/analytics-events.md`. Tidak ada vendor analytics yang ditambahkan.

## 14. Commands run & outcomes

- `npx tsc --noEmit` → exit 0.
- `npm run build` → lulus; route: `/`, `/profile`, `/articles`, `/articles/[slug]`,
  `/icon.png`, `/apple-icon.png`, `/opengraph-image`, `/profile/opengraph-image`,
  `/sitemap.xml`, `/robots.txt`.
- `node scripts/check-sitemap.mjs http://localhost:3001` → sitemap.xml + robots.txt
  lulus; reachability **FAIL** hanya pada `https://rafihariman.my.id/profile -> 404`
  (route belum deploy). Setelah deploy, harusnya lulus penuh.

## 15. Unresolved limitations

- `/profile` baru muncul di produksi setelah deploy; `check:sitemap` belum bisa
  penuh sebelum itu.
- Profile tetap berbahasa Inggris (desain lama); meta description memakai Bahasa
  Indonesia sesuai brief — inkonsistensi bahasa ringan yang disengaja.
- Tidak ada field data Core Web Vitals; belum ada Lighthouse baseline yang diukur.

## 16. Post-deployment checklist

Lihat `docs/search-console-checklist.md`.
