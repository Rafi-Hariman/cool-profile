# Motion Guidelines

## Philosophy

Motion should explain interaction. Motion should not decorate the website.

Inspired by: Linear, Apple, Vercel.

---

# Principles

Fast. Subtle. Natural. Consistent.

---

# Sanctioned Exceptions (intentional deviations — see CLAUDE.md)

The generic rules below forbid "unnecessary 3D", "cursor trails", and
"animated backgrounds". This project carries two deliberate exceptions,
agreed with the owner:

1. **The Spline robot card** (sidebar signature). Interactive 3D, one
   scene, contained in a small card. Mitigations: desktop-only, lazy,
   reduced-motion aware. It is the site's identity element, not
   decoration.

2. **The cursor Spotlight inside the robot card.** A radial glow that
   follows the pointer within the card bounds. Mitigations: contained to
   the card (never page-wide), spring-smoothed, transform/opacity only,
   fades on mouseleave, disabled under prefers-reduced-motion.

3. **The aurora shader background in the left and right margins** (xl+ only,
   `components/ui/animated-shader-background.tsx`, mounted by SiteShell).
   Two symmetric strips frame the centered content column and pull the eye
   toward it. A full-quad GLSL shader (fbm noise + aurora trails) driven by
   three.js.
   Mitigations: rendered only where a real page margin exists (`xl:` and
   up, width `calc((100% - 72rem) / 2)`), `pointer-events-none` (it can
   never intercept clicks or steal hover), `position: fixed` (one canvas
   per margin strip for the whole scroll length — not one per section),
   lazy `import("three")` (the ~600KB library is never in the server bundle
   or the initial client chunk), a static gradient fallback for WebGL
   failure, static frame skipped entirely for touch/coarse pointers and
   prefers-reduced-motion, and `opacity-60` so it reads as texture rather
   than content.

These exceptions do NOT extend to other elements. No second 3D scene, no
page-wide cursor glow beyond the margin strip, no particle systems
elsewhere. (A previous full-screen constellation hero and, briefly, a
margin particle mesh were both retired — the margin effect lives on only
in this quieter shader form.)

---

# Section Reveal

Use opacity + translateY. Example: opacity 0 → 1, translateY 12px → 0.
Existing `Reveal` component. Under reduced motion, content appears without
translation.

---

# Hover

Project entry: translateY(-2px) + border transition
Link: underline animation
Button: subtle background transition
Nav item: color + marker transition

---

# Navigation

The active-section indicator transitions smoothly (color/marker), never
jumps.

---

# Page Load

No cinematic intro. The user sees content immediately. The Spline runtime
loads in the background after hydration.

---

# Reduced Motion

When prefers-reduced-motion: reduce — remove non-essential animations:
scroll-reveal translation, spotlight glow, gradient border spin, shine
sweeps.

---

# Forbidden (outside the sanctioned exceptions above)

- infinite bouncing
- excessive parallax
- spinning text
- animated backgrounds / particle systems
- page-wide cursor trails
- additional 3D scenes
- autoplay video
- excessive blur animation
