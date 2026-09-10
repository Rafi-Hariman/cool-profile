# Component Architecture

## Principles

Components must be: reusable, composable, accessible, predictable, easy to
test.

---

# Directory Layout

```
components/
├── layout/            # shell & navigation
│   ├── site-shell.tsx
│   ├── sidebar.tsx
│   ├── sidebar-nav.tsx
│   └── mobile-header.tsx
├── ui/                # primitives (server-safe unless noted)
│   ├── badge.tsx
│   ├── button.tsx
│   ├── card.tsx
│   ├── link-underline.tsx
│   ├── reveal.tsx  (client — IntersectionObserver)
│   ├── section-heading.tsx
│   ├── spotlight.tsx  (client — framer-motion)
│   └── splite.tsx     (client — lazy SplineScene)
├── robot-card.tsx     (client — signature 3D card)
├── section-heading.tsx
├── reveal.tsx
└── sections/          # page sections (server components)
    ├── about.tsx
    ├── experience.tsx
    ├── projects.tsx
    ├── skills.tsx
    ├── writing.tsx
    └── contact.tsx
```

Data lives in `data/` (person.ts, experience.ts, projects.ts, skills.ts,
writing.ts, social.ts) — never embedded as large objects inside section
JSX.

---

# Layout Components

SiteShell — two-column architecture
Sidebar — sticky identity panel
SidebarNav — scroll-spy navigation
MobileHeader — compact top bar < lg

---

# Navigation Components

SidebarNav (active-section highlight)
SocialLinks
MobileHeader nav

---

# Content Components

SectionHeading
ExperienceItem (inline in Experience section)
ProjectCard
TechBadge (Badge variant)

---

# UI Components

Button, Badge, Card, Spotlight, SplineScene, Reveal

---

# Component Rule

Do not create components simply to reduce line count. Create components
when reused, independently meaningful, complex, or independently testable.

Do not automatically split every large component.

---

# Server vs Client

Prefer Server Components.

Use Client Components only for:

- interactive navigation (scroll-spy)
- animation requiring client state (Spotlight)
- browser APIs / WebGL (SplineScene)
- scroll-reveal (Reveal)

Do not add "use client" unnecessarily. Section components and the shell
remain server components; islands of interactivity are kept small.

---

# Signature Card Contract

`components/robot-card.tsx` must remain:

- desktop-only (`hidden lg:block` at usage site)
- lazy (Spline runtime never in the server bundle)
- reduced-motion aware
- compact (≤ ~320px height) — it is a sidebar accent, not a hero
