# Design System

## Design Philosophy

Minimal editorial interface with a deep-space identity.

The design relies heavily on:

- typography
- whitespace
- contrast
- alignment
- subtle borders
- restrained color
- subtle motion

---

# Color

The site is dark-only (intentional deviation — see CLAUDE.md). Colors are
defined as semantic CSS variables in `app/globals.css` and consumed through
Tailwind tokens. Never hardcode colors in components.

Deep-space palette (current identity, kept):

| Token | Value | Use |
|---|---|---|
| `--background` | `228 64% 2%` (≈ #020409) | page background |
| `--foreground` | `210 20% 98%` | primary text |
| `--card` | `228 50% 3%` | card surfaces |
| `--muted-foreground` | `215 16% 60%` | secondary text |
| `--border` | `228 18% 12%` | subtle borders |
| `--accent` | `199 89% 48%` (cyan) | interactive accents, active nav, icons |
| `--ring` | same as accent | focus rings |

Transparent white utilities (`text-white/40`, `border-white/[0.05]`) are
used for micro-adjustments where a token would be too strong; keep them
subtle and consistent.

A future light theme can be added by redefining the same variables — the
components reference only tokens.

---

# Typography

Primary font: Space Grotesk (`--font-grotesk`)
Mono font: JetBrains Mono (`--font-jetbrains`)

Both loaded via `next/font` in `components/fonts.ts` with `display: swap`.

Type scale (fluid where useful):

- Display / hero identity: `text-3xl → text-5xl` bold, tight tracking
- H2 (section titles): `text-2xl sm:text-3xl` semibold
- H3 (entry titles): `text-xl` semibold
- Body: `text-base sm:text-lg`, relaxed leading
- Small: `text-sm`
- Micro (eyebrow, metadata): `text-xs`, mono, uppercase, wide tracking

Line height: headings 1.1–1.2, body 1.6–1.8.

---

# Spacing

Use Tailwind's 4px scale. Primary rhythm: 4, 8, 12, 16, 24, 32, 48, 64, 96.
Section padding: `py-24 sm:py-32`. Avoid arbitrary spacing values.

---

# Radius

Restrained rounding:

- Small: `rounded` (4px) — badges
- Medium: `rounded-lg` (8px) — inputs
- Large: `rounded-xl`/`rounded-2xl` (12–16px) — cards

Avoid excessive pill-shaped UI (social icon buttons excepted).

---

# Shadows & Glow

The design primarily uses borders, contrast, and background changes rather
than heavy shadows. Subtle cyan glow (`shadow-[0_0_…]`) is reserved for
primary interactive elements and the robot signature card.

---

# Icons

Lucide React. Consistent size, `aria-hidden="true"` when decorative,
`aria-label` when interactive. Icons never replace important text.

---

# Buttons

Primary: strong contrast, subtle glow
Secondary: subtle border
Ghost: transparent

All buttons require hover, focus-visible, active, and (where applicable)
disabled states.

---

# Cards

Cards only when they improve information grouping (project entries, the
robot signature card). Do not turn every section into a card.

---

# Grid

Desktop two-column architecture:

- Left identity panel: ~35–40% (`lg:w-[380px]`), sticky
- Right content: remaining width, max-width ~1200px overall

Content max-width: `max-w-6xl` via `.container-page`.

---

# Visual Hierarchy

1. Name (sidebar)
2. Role
3. Section title
4. Entry title
5. Body
6. Metadata

Never allow decorative elements (including the robot card) to compete with
these. The robot card sits below the identity block, compact and quiet.
