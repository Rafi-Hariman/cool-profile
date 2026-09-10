# Performance Requirements

Performance is part of the portfolio. The portfolio itself must demonstrate
frontend engineering quality.

---

# Targets

Lighthouse target:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Do not sacrifice UX simply to achieve a Lighthouse score.

---

# The Spline Robot Budget

The signature 3D card is the heaviest element on the page
(`@splinetool/runtime` ≈ 1–2 MB JS + WebGL + remote scene download). Its
cost is contained by contract:

1. **Desktop-only** — rendered only at `lg:` and up (`hidden lg:block`).
   Mobile never downloads the runtime.
2. **Lazy** — `SplineScene` uses `React.lazy`, so the runtime is a separate
   chunk fetched after hydration.
3. **Below the identity block** — never above the fold's critical content.
4. **Touch devices skip it** — coarse-pointer devices don't get the
   interactive scene (they would pay the cost without hover interaction).
   Render a static fallback instead.
5. **Pinned runtime** — `@splinetool/runtime` is pinned to `1.12.98`
   because 2.x ships a DRACOLoader chunk referencing unpublished `libs/draco/*`
   assets, which fails the Next 16 Turbopack build. Do not bump blindly.

---

# Next.js

Prefer Server Components. Minimize client JavaScript. Use dynamic imports
when appropriate.

Client islands (current): SidebarNav (scroll-spy), Reveal, Spotlight,
RobotCard. Everything else is server-rendered.

---

# Images

Use next/image where images exist. Correct dimensions, appropriate sizes,
lazy loading when appropriate, priority only for critical images.

---

# Fonts

next/font with `display: swap`, two families, limited weights. Avoid
unnecessary font weights.

---

# JavaScript

Avoid unnecessary libraries. Do not install a library for functionality
that requires only a few lines of code.

---

# Animation

Animation must not block rendering. Prefer transform/opacity. Avoid
continuous animations and unnecessary scroll listeners (the scroll-spy
uses IntersectionObserver, not scroll events).

---

# Layout Shift

Reserve space for images, fonts, dynamic content. The robot card has a
fixed height so its lazy load cannot shift the sidebar layout.

---

# Network

Static content, statically rendered. The only remote fetches are the Spline
scene (lazy, desktop-only) and next/font styles.

---

# Performance Audit

Before completion inspect: bundle size, client components, image sizes,
fonts, unnecessary dependencies, hydration, layout shifts, animation cost.
