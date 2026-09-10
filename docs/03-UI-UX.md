# UI UX Guidelines

## Core Layout

Desktop (≥1024px):

```
| Identity Panel (sticky) | Portfolio Content (scroll) |
```

The identity panel remains visible. The portfolio content scrolls.

---

# Left Panel

Contains, top to bottom:

1. Name + role
2. Short description (1–2 sentences)
3. Navigation (About, Experience, Projects, Skills, Writing, Contact)
4. Social links + resume
5. Availability note
6. The 3D robot signature card (desktop-only)

The panel is quiet and editorial: no card chrome around the identity itself.

---

# Navigation Behavior

As the user scrolls:

- detect the visible section (IntersectionObserver)
- highlight the corresponding navigation item (cyan + marker)
- anchor links scroll smoothly (native `scroll-behavior`, respects reduced motion)

Do not make navigation overly animated.

---

# Right Content

Sections are stacked with generous vertical spacing (`py-24 sm:py-32`) and
subtle top borders. Each section should feel independent but connected.

---

# About

Short introduction. Maximum 2–4 paragraphs. Focus on expertise, interests,
engineering philosophy. Avoid autobiography.

---

# Experience

Each entry includes: date range, company, role, description, technology,
responsibilities, impact where legitimate.

---

# Projects

Project entry: title, short description, role, technology, preview, links,
optional metrics.

3–5 strong projects. Hover communicates interactivity (subtle translation,
border transition).

---

# Interaction

Hover should communicate interactivity. Use subtle translation, border
transition, opacity, underline animation.

Avoid: large scale changes, rotation, bouncing, flashing.

The robot card's cursor spotlight is the single sanctioned "delight" —
contained inside the card.

---

# Empty States

If a section has no real content, omit it entirely (do not display empty
UI), or use a clearly-marked development placeholder.

---

# Error States

Broken images degrade gracefully. Broken external links must not break
layout.

---

# Contact

Simple: one-line invitation, email link, social links, resume. No contact
form (no backend requirement).

---

# Mobile

On mobile:

- remove sticky two-column behavior
- compact header: name + role + horizontal section nav
- stack content in reading order
- keep comfortable spacing
- the robot card is NOT rendered on mobile (performance decision)

---

# UX Priority

1. readability
2. navigation
3. content
4. accessibility
5. aesthetics
6. animation
