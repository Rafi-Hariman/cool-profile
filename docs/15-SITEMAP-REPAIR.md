# Sitemap Repair — `sitemap.xml` / `robots.txt`

## Original symptom

Google Search Console reported:

```text
Sitemap: https://rafihariman.my.id/sitemap.xml
Type: Unknown
Status: Couldn't fetch / Tidak dapat mengambil peta situs
Discovered pages: 0
```

## Confirmed repository cause

The repository sitemap implementation was already correct (the built-in
`app/sitemap.ts` convention) and had no route conflict, no `public/sitemap.xml`,
no middleware/proxy interception, and no trailing-slash/rewrite configuration.

The confirmed root cause is a **stale production deployment**. The live origin
`https://rafihariman.my.id` serves the homepage (HTTP 200) but returns **404**
for `/articles` and `/articles/pju-mati-sleman`, proving the deployed build
predates the Articles feature and the `sitemap.xml`/`robots.txt` metadata routes.
The sitemap references routes that do not yet exist on the live deployment, so
Google cannot fetch/index them.

## Files changed

- `app/sitemap.ts` — homepage `<loc>` now has a trailing slash; added stable `changeFrequency` (`monthly`/`yearly`) and stable dates.
- `app/robots.ts` — added `Host: https://rafihariman.my.id`.
- `scripts/check-sitemap.mjs` — new dependency-free diagnostic.
- `package.json` — added `check:sitemap` script.
- `docs/15-SITEMAP-REPAIR.md` — this report.

## Final sitemap route

```text
https://rafihariman.my.id/sitemap.xml
```

URLs included:

- `https://rafihariman.my.id/` (monthly, priority 1, lastmod 2026-10-28)
- `https://rafihariman.my.id/articles` (monthly, priority 0.7, lastmod 2026-10-28)
- `https://rafihariman.my.id/articles/pju-mati-sleman` (yearly, priority 0.8, lastmod 2026-10-27)

URLs intentionally excluded: `/mobile`, `/new-page` (noindex scratch routes), `/robots.txt`, `/sitemap.xml`.

## Robots configuration

`app/robots.ts` generates:

```text
User-Agent: *
Allow: /

Host: https://rafihariman.my.id
Sitemap: https://rafihariman.my.id/sitemap.xml
```

## Middleware / proxy

None present (`middleware.ts`/`proxy.ts` do not exist; `next.config.mjs` has no rewrites/redirects/trailingSlash).

## Local production validation

- `npm run build` → PASS (TypeScript + 11 static routes; `/sitemap.xml` and `/robots.txt` generated).
- `npm run start` (production server):
  - `/sitemap.xml` → 200, `content-type: application/xml`
  - `/robots.txt` → 200
  - `/`, `/articles`, `/articles/pju-mati-sleman` → 200

## XML status and content type

- `content-type: application/xml`
- Root element `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
- 3 `<url>` entries, absolute HTTPS `<loc>`, valid `<lastmod>` dates, no `localhost`/preview/HTTP/duplicate URLs.

## Diagnostic result

`node scripts/check-sitemap.mjs http://localhost:3000`:

- Local sitemap + robots structure: **PASS** (3 loc entries, XML, no bad hosts/duplicates).
- Production `<loc>` reachability: homepage → 200; `/articles` and article → **404** (stale deployment).

## Production-only checks

- [ ] Deploy production commit to Vercel
- [ ] Confirm custom domain uses latest production deployment
- [ ] Open `/sitemap.xml` in incognito
- [ ] Confirm HTTP 200 and XML content type
- [ ] Open `/robots.txt`
- [ ] Confirm sitemap directive
- [ ] Confirm all sitemap URLs return 200
- [ ] Remove failed sitemap entry in Search Console if necessary
- [ ] Submit `sitemap.xml`
- [ ] Confirm status changes from Couldn't fetch to Success
- [ ] Inspect article URL
- [ ] Request indexing for the article

## Search Console resubmission procedure

1. Deploy the latest commit and confirm the domain uses it.
2. Open `https://rafihariman.my.id/sitemap.xml` in an incognito window; confirm XML with the article URL.
3. In Search Console → Indexing → Sitemaps, remove the failed entry if offered, or resubmit `sitemap.xml`.
4. After Google reads it, use URL Inspection on `https://rafihariman.my.id/articles/pju-mati-sleman` and request indexing.
