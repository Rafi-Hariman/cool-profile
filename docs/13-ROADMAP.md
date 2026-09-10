# Implementation Roadmap

Refactor executed 2026-09-09, mapped to the original plan with the agreed
deviations (dark-only, cyan identity, sidebar robot signature, no hero).

## Phase 0 — Repository Audit ✅

Inspected: package.json, app/, components/, lib/, tailwind.config.ts,
next.config.mjs, tsconfig.json. Existing primitives (Button, Badge, Card,
Reveal, Spotlight, SplineScene, SectionHeading) identified for reuse.

## Phase 1 — Documentation ✅

Materialized CLAUDE.md + docs/01–14 from port.md with intentional
deviations recorded.

## Phase 2 — Foundation & Shell

- data/ modules (person, social, experience, projects, skills, writing)
- SiteShell two-column layout
- Sidebar (identity, nav, socials, availability, robot card)
- SidebarNav scroll-spy (client island)
- MobileHeader (compact, < lg)
- Skip link

Verify: build, responsive base.

## Phase 3 — Sections

About, Experience, Projects, Skills, Writing, Contact — server components
consuming data/ modules.

## Phase 4 — SEO

metadata + OG + Twitter, metadataBase, Person JSON-LD, sitemap.ts,
robots.ts, not-found.tsx.

## Phase 5 — Cleanup

Remove dead code: hero.tsx, navbar.tsx, constellation-grid.tsx,
gradient-button.tsx, footer.tsx (replaced by sidebar/footer inline),
lib/site.ts (superseded by data/).

## Phase 6 — Verification

typecheck, build, render smoke test, responsive spot-check, dead-import
scan.

---

# Deferred (post-refactor backlog)

1. **Light theme + ThemeToggle** (next-themes). Token architecture already
   supports it; requires a full second palette pass.
2. **Real content** — replace SAMPLE entries in data/ with real
   experience, projects, articles; add real metrics only when factual.
3. **Case-study pages** (/projects/[slug]) once real projects exist.
4. **MDX writing** (/articles) once real articles exist.
5. **Playwright smoke tests** for navigation + skip link.
6. **Lighthouse audit** against the 90+/95+ targets.
7. **Custom OG image** (1200×630) instead of placeholder.

---

# Final Rule

Never sacrifice readability, accessibility, performance, or
maintainability for visual effects. The two sanctioned effects (robot,
spotlight) are contained and mitigated — keep them that way.
