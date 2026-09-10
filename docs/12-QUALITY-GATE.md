# Quality Gate

The portfolio is not complete until it passes this checklist.

---

# FUNCTIONAL

- [ ] Navigation works, all anchors scroll correctly
- [ ] Active-section highlight tracks scroll
- [ ] Social links work (target=_blank + rel)
- [ ] Resume link works
- [ ] Project links work
- [ ] Contact email link works

---

# VISUAL

- [ ] Typography consistent (two families, defined scale)
- [ ] Spacing consistent (section rhythm py-24/sm:py-32)
- [ ] Alignment consistent (left rail of content column)
- [ ] No accidental overflow (check 320px)
- [ ] No broken images
- [ ] No excessive shadows
- [ ] No visual noise
- [ ] Dark theme polished (single theme by design)

---

# RESPONSIVE

- [ ] 320 / 375 / 390 / 430 — single column, header compact
- [ ] 768 — comfortable tablet
- [ ] 1024 — two-column switch, sidebar fits
- [ ] 1280 / 1440 / 1920 — content max-width holds

---

# ACCESSIBILITY

- [ ] Keyboard navigation through all interactive elements
- [ ] Visible focus states
- [ ] Semantic HTML (header/nav/main/section/footer)
- [ ] Single h1, logical h2/h3 hierarchy
- [ ] Skip link present and functional
- [ ] aria-current on active nav item
- [ ] Reduced motion disables non-essential animation
- [ ] Contrast passes AA

---

# PERFORMANCE

- [ ] Robot card desktop-only + lazy (no Spline on mobile)
- [ ] Client components limited to the sanctioned islands
- [ ] Fonts via next/font, swap, limited weights
- [ ] No unnecessary dependencies
- [ ] No layout shift (robot card fixed height)
- [ ] No expensive animation outside transform/opacity

---

# SEO

- [ ] Title + description metadata
- [ ] Open Graph + Twitter metadata
- [ ] metadataBase set (replace placeholder before launch)
- [ ] sitemap.xml
- [ ] robots.txt
- [ ] Person structured data
- [ ] Custom 404

---

# ENGINEERING

- [ ] TypeScript passes
- [ ] Build passes
- [ ] No console errors
- [ ] No dead code (old hero/navbar/constellation removed)
- [ ] No duplicated components
- [ ] No unnecessary abstractions

---

# CONTENT

- [ ] No lorem ipsum
- [ ] No fake achievements or metrics (fabricated stats removed)
- [ ] SAMPLE entries clearly marked in data/
- [ ] Contact information correct
