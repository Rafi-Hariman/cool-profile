@AGENTS.md

# Project

Project name: Cool Profile

This repository contains a premium personal portfolio website for a professional Frontend Engineer.

The portfolio is not intended to be a generic personal website.

It is a professional engineering portfolio designed to communicate:

- frontend engineering capability
- product thinking
- UI/UX quality
- accessibility awareness
- performance engineering
- architecture knowledge
- communication skills
- professional experience
- problem-solving ability

The website should feel like a real digital product.

---

# PRIMARY DESIGN CONCEPT

The core layout is inspired by the design philosophy of Brittany Chiang's portfolio.

IMPORTANT:

This is NOT a clone of Brittany Chiang's website.

Do not copy exact layout, typography, colors, wording, components, animations, spacing, or visual assets.

Instead, preserve the underlying philosophy:

- minimal
- editorial
- developer-focused
- highly readable
- strong typography
- generous whitespace
- sticky identity panel
- scroll-driven content
- restrained motion
- content-first design

The final website must have its own identity.

---

# CORE LAYOUT

Desktop layout:

```
| LEFT STICKY PANEL | RIGHT SCROLLING CONTENT |
```

The left panel is the user's permanent identity:

- name
- role
- short introduction
- navigation
- social links
- resume
- availability

The right panel contains the portfolio narrative:

- about
- experience
- selected projects
- technical capabilities
- writing
- contact

The left panel remains sticky on desktop. The right side provides the primary scrolling experience.

---

# DESIGN PRINCIPLE

The portfolio should feel like:

"A beautifully designed technical document."

Not:

"A flashy personal landing page."

Avoid unnecessary visual effects. Avoid excessive animation. Avoid excessive gradients. Avoid visual noise.

---

# INTENTIONAL DEVIATIONS (agreed with owner, 2026-09-09)

These decisions override the generic docs where stated. They are deliberate, not oversights.

1. **Dark-only theme.** The site ships a single, polished dark theme
   ("deep-space" OLED: near-black background, cyan accent
   `hsl(199 89% 48%)`, Space Grotesk + JetBrains Mono). A light mode and
   ThemeToggle are deferred — see docs/13-ROADMAP.md. All colors remain
   semantic tokens (bg-background, text-muted-foreground, …), so a second
   theme can be added later without touching components.

2. **3D robot signature.** The Spline interactive robot card
   (`components/robot-card.tsx`) in the left panel is the site's signature
   element. It is exempt from the "no unnecessary 3D" motion rule. Its cost
   is mitigated: lazy-loaded below the fold, desktop-only (`lg:` and up),
   skipped entirely on touch/coarse pointers, and respects
   prefers-reduced-motion (see docs/10-MOTION.md).

3. **Cursor spotlight.** The Spotlight hover effect inside the robot card is
   exempt from the "no cursor trails" rule. It is contained to the card, is
   GPU-friendly (transform/opacity only), and fades on mouseleave.

4. **Aurora shader background.** The three.js GLSL aurora
   (`components/ui/animated-shader-background.tsx`) filling the RIGHT page
   margin on `xl+` screens is exempt from the "no animated backgrounds"
   rule. Mitigations: margin-only (never under content),
   pointer-events-none, fixed single canvas, lazy three.js import, static
   gradient fallback, skipped on touch devices and prefers-reduced-motion
   (see docs/10-MOTION.md).

---

# TECHNOLOGY

Existing project stack:

- Next.js 16.3.4
- React 19.2.8
- TypeScript
- TailwindCSS 3.4
- Lucide React
- class-variance-authority
- clsx
- tailwind-merge
- framer-motion + @splinetool/react-spline (signature 3D card only)

Do not replace the existing stack without a strong technical reason.

Before installing additional dependencies:

1. inspect package.json
2. determine whether the feature can be implemented using existing dependencies
3. only install a dependency when it provides meaningful value

Do not install libraries unnecessarily.

---

# ENGINEERING PRINCIPLES

Use:

- strict TypeScript
- reusable components
- semantic HTML
- accessible interactions
- responsive design
- maintainable architecture
- minimal client-side JavaScript
- server components where possible

Avoid:

- duplicated components
- unnecessary abstraction
- giant components
- excessive prop drilling
- magic numbers
- unnecessary client components

---

# SOURCE OF TRUTH

Before implementation, read the documents under `docs/`. They are the source
of truth.

When implementation conflicts with documentation:

1. identify the conflict
2. do not silently change the design
3. prefer updating the documentation before implementation if the new decision is intentional

---

# DEVELOPMENT RULE

Do not implement the entire application blindly in one pass. Work
incrementally: inspect → document → foundation → shell → sections → SEO →
polish. Verify with typecheck + build at every phase.

---

# CONTENT RULE

Do not use lorem ipsum.

Do not invent fake employment history, fake companies, fake achievements,
fake statistics, or fake client names.

Use clearly marked placeholders where real information is unavailable
(`[YOUR NAME]`, `[YOUR COMPANY]`, …) and keep sample entries in `data/`
marked with `SAMPLE` comments until replaced with real information.

Never present placeholder information as real.

---

# VISUAL RULE

The design must prioritize hierarchy, readability, spacing, typography,
interaction — in that order. Do not solve every visual problem using
animation.

---

# QUALITY STANDARD

The portfolio should be good enough to be reviewed by a Senior/Staff Frontend
Engineer, Engineering Manager, Product Designer, and Technical Recruiter. The
final result should demonstrate both DESIGN QUALITY and ENGINEERING QUALITY.

---

# DEFINITION OF DONE

A feature is not complete until: desktop/tablet/mobile work, keyboard
navigation works, focus states work, reduced motion works, semantic HTML is
used, no console errors, TypeScript passes, build passes, links work,
metadata exists where required, and visual spacing is consistent.
