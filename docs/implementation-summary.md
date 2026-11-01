# Implementation Summary

Transforms the portfolio site into a marketing website for **"Jasa Pembuatan
Sistem dan Aplikasi Custom"**, keeping the professional portfolio at `/profile`.

---

## 1. Repository audit

- **Router:** App Router (`app/`).
- **Stack:** Next.js 16.3.8, React 19.2.8, TypeScript 5, Tailwind CSS 3.4.13,
  Framer Motion 13.2.0, Lucide React, Radix UI, Vercel Speed Insights, Spline.
- **Original homepage:** `app/page.tsx` rendered `SiteShell` + the six
  portfolio sections (`about`, `experience`, `projects`, `skills`, `writing`,
  `contact`).
- **Existing routes:** `/`, `/articles`, `/articles/pju-mati-sleman`,
  scratch `/mobile` and `/new-page` (both `noindex`).
- **Metadata:** centralized in `app/layout.tsx`; per-page in articles.
- **Sitemap/robots:** `app/sitemap.ts` and `app/robots.ts`.
- **Content:** `data/person.ts`, `data/social.ts`, `data/experience.ts`,
  `data/projects.ts`, `data/skills.ts`, `data/writing.ts`, article data.
- **Scripts:** `dev`, `build`, `start`, `lint` (was `next lint`, now broken on
  Next 16), `check:sitemap` (`scripts/check-sitemap.mjs`).

---

## 2. Route map

| Route | Before | After |
| --- | --- | --- |
| `/` | Portfolio homepage | Marketing landing page |
| `/profile` | 404 | Professional portfolio (moved) |
| `/articles` | unchanged | unchanged |
| `/articles/pju-mati-sleman` | unchanged | unchanged |
| `/mobile`, `/new-page` | noindex | noindex + `Disallow` in robots.txt |

---

## 3. Files created

- `app/profile/page.tsx` — portfolio page + metadata + Person JSON-LD.
- `app/profile/opengraph-image.tsx` — portfolio OG card.
- `data/marketing.ts` — homepage content (nav, problems, services, features,
  packages, reasons, process, FAQ).
- `lib/whatsapp.ts` — WhatsApp number + prefilled consultation message.
- `lib/structured-data.ts` — typed JSON-LD serializer.
- `components/json-ld.tsx` — reusable JSON-LD renderer.
- `components/marketing/` — `navbar`, `hero`, `hero-visual`, `problems`,
  `solution`, `services`, `features`, `packages`, `reasons`, `process`,
  `no-concept`, `faq`, `final-cta`, `footer`, `section-heading`,
  `home-json-ld`.
- `docs/keyword-research.md`, `docs/analytics-events.md`,
  `docs/implementation-summary.md`, `README.md`.

---

## 4. Files modified

- `app/page.tsx` — replaced with the marketing homepage composition.
- `app/layout.tsx` — Indonesian marketing metadata, `lang="id"`, light
  viewport, `WebSite` JSON-LD only (Person facts moved to `/profile`).
- `app/sitemap.ts` — added `/profile`, adjusted priorities/lastModified.
- `app/robots.ts` — disallowed `/mobile` and `/new-page`.
- `app/opengraph-image.tsx` — rewritten as the marketing OG card.
- `components/layout/sidebar.tsx` — added cross-link to `/` ("Layanan").
- `components/layout/mobile-header.tsx` — added "Layanan" link to `/`.
- `components/articles/articles-shell.tsx` — header links → Home/Profile/Articles.
- `components/articles/author-card.tsx` — "Home" → "Profile" (`/profile`).
- `app/articles/page.tsx` — added `lang="en"` to the page container.
- `data/articles/pju-mati-sleman.ts` — author `url` → `/profile`.
- `tailwind.config.ts` — added `brand` palette, card shadows.
- `app/globals.css` — added marketing utilities (container, gradient text,
  focus ring).
- `package.json` — `lint` → `tsc --noEmit`; added `typecheck`.

---

## 5. Metadata & structured data

- **Homepage title:** `Jasa Pembuatan Sistem & Aplikasi Custom | Rafi Hariman`.
- **Homepage description:** the service proposition.
- **Canonical:** `/` (home), `/profile` (profile).
- **Open Graph / Twitter:** set on both; locale `id_ID` (site) and `en_US`
  (profile).
- **Structured data added:**
  - `WebSite` (root layout, `Rahesa Digital Systems`, `id-ID`).
  - `ProfessionalService` + `Service` (homepage, `areaServed: Yogyakarta`,
    no price/rating/address/opening-hours).
  - `Person` (profile, with `worksFor: BSI UII`, `sameAs` socials).
  - `BlogPosting` already existed on the article page (unchanged).
- **Deliberately omitted:** `FAQPage` JSON-LD — Google no longer shows FAQ
  rich results for most commercial sites, so adding it would not match a
  supported rich-result. `AggregateRating`, `Review`, `priceRange`, and fake
  address/opening hours are never emitted.

---

## 6. SEO decisions

- One H1 per page (hero H1 on `/`, name H1 on `/profile`).
- Logical H2/H3 hierarchy; service and package cards use H3 under their H2.
- Keyword metadata kept (understood as a non-ranking field) because the
  existing project convention uses it.
- Natural Indonesian copy; no keyword stuffing, no repeated city names, no
  hidden text, no bottom SEO block.
- Descriptive internal links (`Profil profesional`, `Layanan`, footer anchors).
- `next/image` not needed on the homepage — the product visual is decorative
  CSS (correctly `aria-hidden`), and no meaningful content images were added.
- Decorative visuals carry `aria-hidden="true"` and no fake client data.

---

## 7. Accessibility

- Skip-to-content link on the homepage.
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`).
- Native `<details>/<summary>` FAQ (keyboard + screen-reader friendly, no JS).
- Visible focus rings via a shared `.focus-brand` utility and per-component
  `focus-visible`.
- Tap targets ≥44px for nav, CTA, menu, and FAQ rows.
- `prefers-reduced-motion` respected (`motion-reduce:transform-none`,
  `motion-reduce:transition-none`, and the existing global `scroll-behavior`
  override).
- Single H1, `aria-current` on profile scroll-spy (unchanged), icon-only
  buttons have `aria-label`.

---

## 8. Performance

- Homepage is a server component; only `navbar.tsx` is a client island
  (mobile menu disclosure).
- No Spline, Framer Motion, or three.js on the marketing homepage.
- No new runtime dependencies.
- CSS-only hero/product visuals; no images to shift layout (fixed aspect
  ratios via intrinsic layout).
- Fonts unchanged (three `next/font` families, `display: swap`).
- Vercel Speed Insights preserved in the root layout.

---

## 9. Commands run & results

| Command | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass (exit 0) |
| `npm run lint` | Pass (exit 0, aliased to `tsc --noEmit`) |
| `npm run typecheck` | Pass (exit 0) |
| `npm run build` | Pass — all routes prerendered (see below) |
| `node scripts/check-sitemap.mjs http://localhost:3000` | sitemap.xml + robots.txt pass; reachability `FAIL` on `https://rafihariman.my.id/profile -> 404` because `/profile` is not yet deployed |

Build route output:

```
┌ ○ /
├ ○ /_not-found
├ ○ /articles
├ ○ /articles/pju-mati-sleman
├ ○ /icon.svg
├ ○ /mobile
├ ○ /new-page
├ ○ /opengraph-image
├ ○ /profile
├ ○ /profile/opengraph-image
├ ○ /robots.txt
└ ○ /sitemap.xml
```

Headless-browser verification (Playwright core, local chromium):

- `/`, `/profile`, `/articles`, article, `/sitemap.xml`, `/robots.txt`,
  both OG images → HTTP 200.
- No horizontal overflow at 1440/1280/375/390 px.
- One H1 on every page.
- No console errors from our code (the only 404 is Vercel's Speed Insights
  script, which is expected locally and resolves on Vercel).

---

## 10. Remaining limitations

- **`check:sitemap` reachability** still fails on `/profile` until the next
  deploy makes it live. Re-run
  `node scripts/check-sitemap.mjs https://rafihariman.my.id` after deploy.
- **No on-site lead form** — consultation is via WhatsApp deep-link only, so
  `submit_lead_form` is a planned event, not yet implemented.
- **Keyword research** is scaffolding only; the table is `N/A` pending real
  Google Keyword Planner / Trends collection (see `docs/keyword-research.md`).
- **No ESLint** — the `lint` script is aliased to type checking because
  Next.js 16 removed `next lint` and no ESLint config exists.
- **No analytics vendor** is wired; events are documented but not emitted.

---

## 11. Manual verification checklist

- [x] Desktop navigation (sticky navbar, anchors, mobile menu toggles)
- [x] Mobile navigation (hamburger, escape to close, 44px targets)
- [x] Homepage anchors (`#beranda`, `#layanan`, `#paket`, `#cara-kerja`, `#faq`)
- [x] `/profile` loads the full portfolio and links back to `/`
- [x] Articles/blog still resolve
- [x] WhatsApp URL + encoded prefilled message
- [x] FAQ accordion opens via keyboard
- [x] Canonical tags (`/` and `/profile`)
- [x] OG tags on homepage and profile
- [x] robots.txt (allow `/`, disallow scratch, sitemap URL)
- [x] sitemap.xml (4 public URLs)
- [x] No horizontal overflow
- [x] No private data, no fake claims, no prices/ratings/testimonials
- [x] No console errors (except local-only Speed Insights 404)
