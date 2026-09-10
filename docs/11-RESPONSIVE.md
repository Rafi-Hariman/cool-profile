# Responsive Design

## Principle

The portfolio must feel intentionally designed for every viewport — not
"desktop shrunk to mobile".

---

# Desktop (≥1024px)

Two-column architecture. Left: sticky identity panel (~380px). Right:
scrolling content. The 3D robot card renders here only.

---

# Tablet (768–1023px)

Single column. The sidebar collapses into a compact top header (name +
role + horizontal nav). The robot card does not render.

---

# Mobile (<768px)

Single column, comfortable reading. Compact header, horizontal scrollable
section nav. No sticky sidebar, no robot card.

---

# Mobile Navigation

Compact top header with horizontally scrollable nav links. No hamburger
system (unnecessary for a one-page portfolio with six anchors).

---

# Touch

Interactive targets ≥ 44px comfortable. No hover-dependent functionality —
the spotlight is hover-only decoration, never information.

---

# Typography

Fluid/flexible type via Tailwind responsive sizes. No fixed giant text
that overflows.

---

# Testing

Test at minimum: 320, 375, 390, 430, 768, 1024, 1280, 1440, 1920px.

The two-column switch happens at `lg` (1024px); verify the sidebar fits
at exactly 1024px (narrowest desktop) — identity block, nav, socials, and
robot card must all be visible without crowding.
