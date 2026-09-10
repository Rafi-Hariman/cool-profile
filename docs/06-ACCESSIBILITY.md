# Accessibility Requirements

Target: WCAG 2.2 AA

---

# Semantic HTML

Use: header, nav, main, section, article, footer, button, a, ul/li, h1–h3.

Do not use divs for everything.

The sidebar is a `<header>` landmark with a `<nav>`; the content column is
`<main>`.

---

# Keyboard

All interactive elements must work with keyboard: Tab, Shift+Tab, Enter,
Space, Escape/Arrow keys where appropriate.

The robot card is decorative — it must not trap focus. Spline's canvas is
marked `aria-hidden` and not focusable.

---

# Focus

Every interactive element needs a visible focus state. Never
`outline: none` without replacement. Use the `focus-visible:ring` pattern
already established in Button/Badge.

---

# Screen Readers

Interactive icons need accessible labels (e.g. `aria-label="GitHub
profile"`). Decorative icons: `aria-hidden="true"`.

The scroll-spy navigation indicates the current section visually AND via
`aria-current="true"`.

---

# Images

Every meaningful image: alt text. Decorative image: empty alt / `aria-hidden`.

---

# Color

Do not communicate information using color alone. Maintain sufficient
contrast — cyan accent on near-black passes AA for text ≥ 14px bold and
large text; body copy uses foreground/muted-foreground tokens which are
tuned for AA.

---

# Motion

Respect prefers-reduced-motion.

When reduced motion is enabled:

- disable scroll-reveal translation (content simply appears)
- disable the Spotlight hover glow
- the Spline scene still renders (it is content, not decoration) but no
  additional animation is layered on top

---

# Navigation

The current section is programmatically understandable (`aria-current`).

---

# Heading Hierarchy

One `h1` (name in the sidebar). Section titles are `h2`, entry titles
`h3`. Never skip heading levels for visual appearance.

---

# Skip Link

A "Skip to content" link is the first focusable element on the page.

---

# Forms

No forms in the current scope (contact is a mailto link). If forms are
added: labels, error messages, validation, keyboard support, autocomplete.

---

# Accessibility Definition of Done

No major accessibility violations. Keyboard navigation works. Focus states
are visible. Reduced motion works. Screen reader labels exist where
necessary. Landmarks and heading hierarchy are correct.
