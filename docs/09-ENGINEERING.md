# Engineering Standards

## TypeScript

Strict mode. Avoid `any`. Use explicit types where inference is
insufficient.

---

# Naming

Components: PascalCase. Functions: camelCase. Constants: UPPER_SNAKE_CASE
where appropriate. Files: kebab-case for components, camelCase for data
files (`data/projects.ts`) — follow consistently.

---

# Imports

Keep imports organized (@/ aliases). Avoid circular dependencies.

---

# Data

Portfolio content is separated from presentation:

```
data/
├── person.ts       # identity, availability, resume, metadata
├── social.ts       # social links
├── experience.ts   # SAMPLE — replace with real history
├── projects.ts     # SAMPLE — replace with real projects
├── skills.ts       # capability groups
└── writing.ts      # SAMPLE — real articles when they exist
```

Rather than embedding large data objects inside JSX.

SAMPLE data is marked with comments and must never be presented as real.

---

# Configuration

Environment-specific values belong in environment configuration. Never
commit secrets.

---

# Error Handling

External resources (the Spline scene) must fail gracefully — a failed load
leaves a quiet placeholder, never a broken layout.

---

# Testing

Interactive functionality should be testable. Playwright is available
(`playwright-core` dev dependency). Add smoke tests when justified.

---

# Code Review Checklist

Before completion check: duplicated code, unnecessary abstraction, client
components (only where required), accessibility, responsive, semantic
HTML, error states, loading states, dead code, console logs, TypeScript
errors, lint errors, build errors.

---

# Architecture

Prefer simple architecture. No state management library — the only state
is scroll-spy (local) and hover (local). A portfolio should not have Redux.

---

# Dependencies

Every dependency should have a reason. Before adding, ask: can native
browser APIs solve this? Can existing dependencies solve this? Can a small
utility solve this? If yes, do not add the dependency.
