Betul. Kalau Anda ingin **collab dengan Claude Code secara serius**, saya sarankan jangan hanya memberikan `PROMPT.md`. Kita buat **documentation pack** yang menjadi *source of truth* untuk seluruh pembangunan portfolio.

Karena project Anda sudah punya `package.json`, saya akan membuat struktur yang bisa langsung Anda masukkan ke repository:

```text
cool-profile/
├── CLAUDE.md
├── docs/
│   ├── 01-PRODUCT.md
│   ├── 02-DESIGN-SYSTEM.md
│   ├── 03-UI-UX.md
│   ├── 04-CONTENT.md
│   ├── 05-COMPONENTS.md
│   ├── 06-ACCESSIBILITY.md
│   ├── 07-PERFORMANCE.md
│   ├── 08-SEO.md
│   ├── 09-ENGINEERING.md
│   ├── 10-MOTION.md
│   ├── 11-RESPONSIVE.md
│   ├── 12-QUALITY-GATE.md
│   └── 13-ROADMAP.md
└── ...
```

Di bawah ini saya siapkan **isi lengkapnya**. Anda bisa membuat file-file tersebut persis seperti ini.

---

# 1. `CLAUDE.md`

Ini adalah file **paling penting**. Claude Code harus membaca ini terlebih dahulu.

```md
# CLAUDE.md

## Project

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

Do not copy:

- exact layout
- exact typography
- exact colors
- exact wording
- exact components
- exact animations
- exact spacing
- exact visual assets

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

------------------------------------------------
| LEFT STICKY PANEL | RIGHT SCROLLING CONTENT |
------------------------------------------------

The left panel is the user's permanent identity.

The right panel contains the portfolio narrative.

LEFT:

- name
- role
- short introduction
- navigation
- social links
- resume
- availability
- theme toggle

RIGHT:

- about
- experience
- selected projects
- technical capabilities
- open source
- writing
- contact

The left panel remains sticky on desktop.

The right side provides the primary scrolling experience.

---

# DESIGN PRINCIPLE

The portfolio should feel like:

"A beautifully designed technical document."

Not:

"A flashy personal landing page."

Avoid unnecessary visual effects.

Avoid excessive animation.

Avoid excessive gradients.

Avoid excessive cards.

Avoid visual noise.

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

Do not replace the existing stack without a strong technical reason.

Before installing additional dependencies:

1. inspect package.json
2. determine whether the feature can be implemented using existing dependencies
3. only install a dependency when it provides meaningful value

Preferred additions when required:

- framer-motion or motion
- next-themes
- MDX tooling

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
- inline styles unless necessary
- unnecessary client components

---

# SOURCE OF TRUTH

Before implementation, read:

docs/01-PRODUCT.md
docs/02-DESIGN-SYSTEM.md
docs/03-UI-UX.md
docs/04-CONTENT.md
docs/05-COMPONENTS.md
docs/06-ACCESSIBILITY.md
docs/07-PERFORMANCE.md
docs/08-SEO.md
docs/09-ENGINEERING.md
docs/10-MOTION.md
docs/11-RESPONSIVE.md
docs/12-QUALITY-GATE.md
docs/13-ROADMAP.md

These documents are the source of truth.

When implementation conflicts with documentation:

1. identify the conflict
2. do not silently change the design
3. prefer updating the documentation before implementation if the new decision is intentional

---

# DEVELOPMENT RULE

Do not implement the entire application blindly in one pass.

Work incrementally.

Recommended sequence:

1. inspect repository
2. inspect existing application
3. read documentation
4. create architecture
5. create design tokens
6. create primitives
7. create layout
8. create sections
9. implement interactions
10. accessibility audit
11. responsive audit
12. performance audit
13. SEO audit
14. visual polish
15. final code review

---

# CONTENT RULE

Do not use lorem ipsum.

Do not invent fake employment history, fake companies, fake achievements, fake statistics, or fake client names.

Use clearly marked placeholders where real information is unavailable.

Example:

[YOUR NAME]

[YOUR ROLE]

[YOUR COMPANY]

[PROJECT DESCRIPTION]

Never present placeholder information as real.

---

# VISUAL RULE

The design must prioritize:

1. hierarchy
2. readability
3. spacing
4. typography
5. interaction
6. visual polish

Do not solve every visual problem using animation.

---

# QUALITY STANDARD

The portfolio should be good enough to be reviewed by:

- Senior Frontend Engineer
- Staff Frontend Engineer
- Engineering Manager
- Product Designer
- Technical Recruiter

The final result should demonstrate both:

DESIGN QUALITY

and

ENGINEERING QUALITY.

---

# DEFINITION OF DONE

A feature is not complete until:

- desktop works
- tablet works
- mobile works
- keyboard navigation works
- focus states work
- reduced motion works
- semantic HTML is used
- no console errors
- TypeScript passes
- build passes
- links work
- images have appropriate alt text
- metadata exists where required
- visual spacing is consistent

---

# IMPORTANT

Do not optimize for "wow" at the expense of usability.

The primary goal is:

Make the recruiter understand who I am, what I build, and why I am worth interviewing.

The portfolio itself should demonstrate that I understand professional frontend engineering.
```

---

# 2. `docs/01-PRODUCT.md`

```md
# Product Requirements

## Product Name

Cool Profile

---

# Product Vision

Create a premium one-page portfolio for a professional Frontend Engineer.

The website should communicate technical competence through the website itself.

The portfolio is simultaneously:

- personal brand
- resume
- project showcase
- engineering demonstration
- UX demonstration
- technical case study

---

# Target Audience

Primary:

- technical recruiters
- engineering managers
- frontend leads
- CTOs
- startup founders

Secondary:

- frontend developers
- designers
- potential collaborators
- open-source developers

---

# Primary User Goal

A recruiter should understand the following within approximately 30–60 seconds:

1. Who is this person?
2. What does this person specialize in?
3. What technologies does this person use?
4. What kind of products has this person built?
5. What is this person's experience?
6. How can I contact this person?

---

# Secondary Goal

A technical reviewer should be able to investigate:

- architecture
- technical decisions
- performance
- accessibility
- testing
- tradeoffs
- project complexity

---

# Core Experience

The website uses a one-page editorial layout.

Desktop:

LEFT = sticky identity

RIGHT = scrollable portfolio narrative

Mobile:

The layout becomes a normal single-column document.

---

# Required Sections

1. About
2. Experience
3. Projects
4. Technical Skills
5. Open Source
6. Writing
7. Contact

Optional:

- testimonials
- awards
- certifications
- education

Only include optional sections if they provide meaningful value.

---

# Navigation

Navigation should allow users to jump to:

About
Experience
Projects
Skills
Writing
Contact

The active section should be visually indicated.

---

# CTA

Primary:

View Projects

Secondary:

Contact Me

Additional:

Resume
GitHub
LinkedIn

---

# Project Strategy

Do not showcase many mediocre projects.

Target:

3–5 strong projects.

Each project should communicate:

- problem
- solution
- role
- technology
- complexity
- outcome

---

# Product Personality

The website should feel:

Calm
Confident
Technical
Modern
Human
Precise
Professional

Avoid:

Corporate
Generic
Overly playful
Overly futuristic
Overly flashy

---

# Success Criteria

The portfolio succeeds when a recruiter can quickly answer:

"What does this person do?"

"What have they built?"

"How experienced are they?"

"Can I contact them?"

And a technical reviewer can answer:

"Does this person understand modern frontend engineering?"
```

---

# 3. `docs/02-DESIGN-SYSTEM.md`

```md
# Design System

## Design Philosophy

Minimal editorial interface.

The design should rely heavily on:

- typography
- whitespace
- contrast
- alignment
- subtle borders
- restrained color
- subtle motion

---

# Color

Use semantic CSS variables.

Light mode:

Background:
neutral white

Foreground:
near-black

Muted foreground:
neutral gray

Border:
light neutral gray

Accent:
professional blue / indigo

Dark mode:

Background:
near-black

Foreground:
near-white

Muted foreground:
neutral gray

Border:
dark neutral

Accent:
blue / indigo

---

# Important

Do not hardcode colors throughout components.

Use semantic tokens.

Example:

bg-background

text-foreground

text-muted-foreground

border-border

text-primary

bg-card

---

# Typography

Primary font:

Geist

Fallback:

system-ui

---

# Type Scale

Display:

clamp(3rem, 8vw, 6rem)

H1:

clamp(2rem, 5vw, 4rem)

H2:

clamp(1.5rem, 3vw, 2.5rem)

H3:

1.25rem

Body:

1rem

Small:

0.875rem

Micro:

0.75rem

---

# Line Height

Display:

1.0–1.1

Heading:

1.1–1.2

Body:

1.6–1.8

---

# Spacing

Use a consistent spacing scale.

Primary spacing:

4
8
12
16
24
32
48
64
80
96
128

Avoid arbitrary spacing.

---

# Radius

Use restrained rounding.

Small:

6px

Medium:

8px

Large:

12px

Avoid excessive pill-shaped UI.

---

# Shadows

Use shadows sparingly.

The design should primarily use:

- borders
- contrast
- background changes

rather than heavy shadows.

---

# Icons

Use Lucide React.

Icons should:

- be consistent
- have appropriate size
- have accessible labels when interactive
- never replace important text

---

# Buttons

Primary:

strong contrast

Secondary:

subtle border

Ghost:

transparent

All buttons require:

- hover state
- focus state
- active state
- disabled state when applicable

---

# Links

Links should have obvious affordance.

Use subtle transitions.

Avoid links that only become visible on hover.

---

# Cards

Cards should be used only when they improve information grouping.

Avoid turning every section into a card.

---

# Grid

Desktop:

12-column conceptual grid.

Content max-width:

approximately 1200px.

Left identity:

approximately 35–40%

Right content:

approximately 60–65%

The proportions can adapt responsively.

---

# Visual Hierarchy

Priority:

1. Name
2. Role
3. Section title
4. Project title
5. Body
6. Metadata

Never allow decorative elements to compete with these.
```

---

# 4. `docs/03-UI-UX.md`

```md
# UI UX Guidelines

## Core Layout

Desktop:

-------------------------------------------------
| Identity Panel | Portfolio Content             |
|                |                              |
| sticky         | scroll                       |
|                |                              |
-------------------------------------------------

The identity panel remains visible.

The portfolio content scrolls.

---

# Left Panel

Contains:

Name

Role

Short description

Navigation

Social links

Resume

Theme toggle

Availability

---

# Navigation Behavior

As the user scrolls:

- detect visible section
- highlight corresponding navigation item
- use smooth scrolling
- respect prefers-reduced-motion

Do not make navigation overly animated.

---

# Right Content

Sections should have generous vertical spacing.

Each section should feel independent but connected.

---

# About

Short introduction.

Maximum:

approximately 2–4 paragraphs.

Focus on:

- expertise
- interests
- engineering philosophy

Avoid autobiography.

---

# Experience

Each experience entry should include:

Date

Company

Role

Description

Technology

Responsibilities

Impact where legitimate

---

# Projects

Project entry:

Title

Short description

Role

Technology

Preview

Links

Optional metrics

---

# Interaction

Hover should communicate interactivity.

Use:

- subtle translation
- border transition
- opacity
- underline animation

Avoid:

- large scale changes
- rotation
- bouncing
- flashing

---

# Empty States

If a section has no content:

Do not display an empty UI.

Either:

- omit the section
- or display a meaningful placeholder during development

---

# Error States

Broken images should have graceful fallbacks.

Broken external links should not break layout.

---

# Contact

The contact section should be simple.

Example:

Let's build something useful.

Email

LinkedIn

GitHub

Resume

No complicated contact form unless there is a real backend requirement.

---

# Mobile

On mobile:

- remove sticky two-column behavior
- stack content
- preserve reading order
- maintain comfortable spacing
- keep navigation accessible

---

# UX Priority

1. readability
2. navigation
3. content
4. accessibility
5. aesthetics
6. animation
```

---

# 5. `docs/04-CONTENT.md`

```md
# Content Strategy

## Tone

Professional.

Human.

Confident.

Clear.

Technical without unnecessary jargon.

---

# Avoid

"Passionate developer"

"Tech enthusiast"

"Code ninja"

"Pixel perfectionist"

"Turning coffee into code"

Generic motivational statements.

---

# Hero

Structure:

Greeting

Name

Role

Value proposition

CTA

Example:

Hello, I'm

[NAME]

Frontend Engineer

I build accessible, performant, and scalable web experiences.

The final text must be customized using the real user's information.

---

# About

Explain:

Who I am

What I specialize in

What I enjoy building

What engineering principles matter to me

---

# Experience

Use factual information only.

Never fabricate:

- company
- position
- dates
- metrics
- responsibilities

---

# Projects

Every project needs:

Project title

One-line summary

Problem

Solution

Role

Technology

Challenges

Result

Links

---

# Metrics

Metrics must be real.

Never invent:

- performance improvements
- revenue
- user counts
- percentages
- conversion rates

If real data is unavailable:

describe qualitative impact instead.

---

# Project Writing Formula

Problem:

What was difficult?

Action:

What did I build?

Reasoning:

Why did I choose this solution?

Result:

What changed?

Learning:

What did I learn?

---

# Writing

Articles should demonstrate technical thinking.

Good topics:

- frontend architecture
- performance
- accessibility
- TypeScript
- React
- Next.js
- design systems
- testing
- debugging
- real project lessons

---

# Personal Brand

The portfolio should communicate:

"I am an engineer who understands users, products, and systems."

Not simply:

"I know many technologies."
```

---

# 6. `docs/05-COMPONENTS.md`

```md
# Component Architecture

## Principles

Components must be:

- reusable
- composable
- accessible
- predictable
- easy to test

---

# Layout Components

SiteShell

StickySidebar

MainContent

Section

Container

---

# Navigation Components

Navigation

NavigationItem

SocialLinks

ThemeToggle

---

# Content Components

SectionHeading

ExperienceItem

ProjectCard

ProjectPreview

TechBadge

ArticleCard

Timeline

---

# UI Components

Button

Link

Badge

Tooltip

IconButton

---

# Feedback Components

Loading

ErrorBoundary

NotFound

ImageFallback

---

# Component Rule

Do not create components simply to reduce line count.

Create components when:

- reused
- independently meaningful
- complex
- independently testable

---

# Component Size

If a component becomes excessively large:

identify logical responsibilities.

Do not automatically split every component.

---

# Server vs Client

Prefer Server Components.

Use Client Components only for:

- interactive navigation
- theme
- animation requiring client state
- browser APIs
- interaction-heavy UI

Do not add "use client" unnecessarily.
```

---

# 7. `docs/06-ACCESSIBILITY.md`

```md
# Accessibility Requirements

Target:

WCAG 2.2 AA

---

# Semantic HTML

Use:

header

nav

main

section

article

footer

button

a

Do not use divs for everything.

---

# Keyboard

All interactive elements must work with keyboard.

Required:

Tab

Shift+Tab

Enter

Space

Escape where appropriate

Arrow keys where appropriate

---

# Focus

Every interactive element needs a visible focus state.

Never:

outline: none

without replacement.

---

# Screen Readers

Interactive icons need accessible labels.

Example:

aria-label="Toggle dark mode"

Decorative icons:

aria-hidden="true"

---

# Images

Every meaningful image:

alt text

Decorative image:

empty alt

---

# Color

Do not communicate information using color alone.

Maintain sufficient contrast.

---

# Motion

Respect:

prefers-reduced-motion

When reduced motion is enabled:

- disable parallax
- reduce transitions
- disable decorative animation
- preserve usability

---

# Navigation

The current section should be programmatically understandable where possible.

---

# Heading Hierarchy

Use logical:

h1

h2

h3

Never skip headings purely for visual appearance.

---

# Forms

If forms are added:

- labels
- error messages
- validation
- keyboard support
- autocomplete where appropriate

---

# Accessibility Definition of Done

No major accessibility violations.

Keyboard navigation works.

Focus states are visible.

Reduced motion works.

Screen reader labels exist where necessary.
```

---

# 8. `docs/07-PERFORMANCE.md`

```md
# Performance Requirements

Performance is part of the portfolio.

The portfolio itself must demonstrate frontend engineering quality.

---

# Targets

Lighthouse target:

Performance: 90+

Accessibility: 95+

Best Practices: 95+

SEO: 95+

Aim for 100 where practical.

Do not sacrifice UX simply to achieve a Lighthouse score.

---

# Next.js

Prefer Server Components.

Minimize client JavaScript.

Use dynamic imports when appropriate.

---

# Images

Use next/image.

Requirements:

- correct dimensions
- appropriate sizes
- lazy loading when appropriate
- priority only for critical images

---

# Fonts

Avoid unnecessary font weights.

Use optimized font loading.

---

# JavaScript

Avoid unnecessary libraries.

Do not install a library for functionality that requires only a few lines of code.

---

# Animation

Animation must not block rendering.

Avoid:

- expensive layout animations
- continuous animations
- unnecessary scroll listeners

Prefer:

- transform
- opacity

---

# Layout Shift

Avoid CLS.

Reserve space for:

- images
- fonts
- dynamic content

---

# Network

Do not fetch unnecessary data.

Static portfolio content should preferably be statically rendered.

---

# Performance Audit

Before completion inspect:

- bundle size
- client components
- image sizes
- fonts
- unnecessary dependencies
- hydration
- layout shifts
- animation cost
```

---

# 9. `docs/08-SEO.md`

```md
# SEO Requirements

## Metadata

Every page must have:

title

description

canonical URL where applicable

Open Graph metadata

Twitter/X metadata

---

# Homepage

Title format:

[NAME] — Frontend Engineer

Description:

A concise professional description.

---

# Open Graph

Create appropriate OG metadata.

The preview should look professional when shared.

---

# Sitemap

Generate sitemap.xml.

---

# Robots

Generate robots.txt.

---

# Structured Data

Use Schema.org where appropriate.

Potential type:

Person

WebSite

Article

---

# Semantic Content

Use meaningful headings.

Use descriptive links.

Avoid:

"Click here"

Prefer:

"View project case study"

---

# URLs

Use clean URLs.

Example:

/

 /projects

 /projects/project-name

 /articles

 /articles/article-name

---

# 404

Create a useful custom 404 page.

It should preserve the design language.
```

---

# 10. `docs/09-ENGINEERING.md`

```md
# Engineering Standards

## TypeScript

Strict mode.

Avoid any.

Use explicit types where inference is insufficient.

---

# Naming

Components:

PascalCase

Functions:

camelCase

Constants:

UPPER_SNAKE_CASE where appropriate

Files:

follow project convention consistently

---

# Imports

Keep imports organized.

Avoid circular dependencies.

---

# Data

Portfolio content should be separated from presentation.

Prefer:

data/projects.ts

data/experience.ts

data/social.ts

rather than embedding large data objects inside JSX.

---

# Configuration

Environment-specific values belong in environment configuration.

Never commit secrets.

---

# Error Handling

External resources must fail gracefully.

---

# Testing

Important interactive functionality should be testable.

Potential tools:

Playwright

Unit testing where justified

---

# Code Review Checklist

Before completion:

- duplicated code?
- unnecessary abstraction?
- client components?
- accessibility?
- responsive?
- semantic HTML?
- error states?
- loading states?
- dead code?
- console logs?
- TypeScript errors?
- lint errors?
- build errors?

---

# Architecture

Prefer simple architecture.

Do not introduce complex state management unless required.

A portfolio should not have Redux simply because Redux is popular.

---

# Dependencies

Every dependency should have a reason.

Before adding:

ask:

Can native browser APIs solve this?

Can existing dependencies solve this?

Can a small reusable utility solve this?

If yes:

do not add dependency.
```

---

# 11. `docs/10-MOTION.md`

```md
# Motion Guidelines

## Philosophy

Motion should explain interaction.

Motion should not decorate the website.

Inspired by:

Linear

Apple

Vercel

---

# Principles

Fast.

Subtle.

Natural.

Consistent.

---

# Section Reveal

Use:

opacity

transform: translateY

Example:

opacity: 0 → 1

translateY: 12px → 0

---

# Hover

Project:

translateY(-2px)

Link:

underline animation

Button:

subtle background transition

---

# Navigation

Active indicator should transition smoothly.

---

# Page Load

Do not create a long cinematic intro.

The user should see content immediately.

---

# Reduced Motion

When:

prefers-reduced-motion: reduce

remove non-essential animations.

---

# Forbidden

No:

- infinite bouncing
- excessive parallax
- spinning text
- animated backgrounds
- cursor trails
- particle systems
- unnecessary 3D
- autoplay video
- excessive blur animation
```

---

# 12. `docs/11-RESPONSIVE.md`

```md
# Responsive Design

## Principle

The portfolio must feel intentionally designed for every viewport.

Not simply "desktop shrunk to mobile".

---

# Desktop

>= 1024px

Two-column architecture.

Left:

sticky identity

Right:

scroll content

---

# Tablet

768px–1023px

Adapt column proportions.

If the sticky layout becomes uncomfortable:

reduce left panel width.

---

# Mobile

<768px

Single-column.

No sticky sidebar.

Navigation becomes compact.

---

# Mobile Navigation

Possible:

top header

menu

horizontal section navigation

Do not create a complex hamburger system unless necessary.

---

# Touch

Interactive targets should be comfortably tappable.

Avoid hover-dependent functionality.

---

# Typography

Use fluid typography.

Avoid fixed giant text that causes overflow.

---

# Images

Images must remain responsive.

Never overflow viewport.

---

# Testing

Test at minimum:

320px

375px

390px

430px

768px

1024px

1280px

1440px

1920px
```

---

# 13. `docs/12-QUALITY-GATE.md`

```md
# Quality Gate

The portfolio is not complete until it passes this checklist.

---

# FUNCTIONAL

[ ] Navigation works

[ ] All anchors work

[ ] Social links work

[ ] Resume link works

[ ] GitHub link works

[ ] LinkedIn link works

[ ] Theme toggle works

[ ] Mobile navigation works

[ ] Project links work

[ ] External links open correctly

---

# VISUAL

[ ] Typography consistent

[ ] Spacing consistent

[ ] Alignment consistent

[ ] No accidental overflow

[ ] No broken images

[ ] No excessive shadows

[ ] No visual noise

[ ] Dark mode polished

[ ] Light mode polished

---

# RESPONSIVE

[ ] 320px

[ ] 375px

[ ] 390px

[ ] 430px

[ ] 768px

[ ] 1024px

[ ] 1280px

[ ] 1440px

[ ] 1920px

---

# ACCESSIBILITY

[ ] Keyboard navigation

[ ] Visible focus

[ ] Semantic HTML

[ ] Heading hierarchy

[ ] Alt text

[ ] ARIA where required

[ ] Reduced motion

[ ] Contrast

---

# PERFORMANCE

[ ] No unnecessary client components

[ ] Images optimized

[ ] Fonts optimized

[ ] No unnecessary dependencies

[ ] No large unused packages

[ ] No layout shift

[ ] No expensive animation

---

# SEO

[ ] Title

[ ] Description

[ ] Open Graph

[ ] Canonical

[ ] Sitemap

[ ] Robots

[ ] Structured data

[ ] 404

---

# ENGINEERING

[ ] TypeScript passes

[ ] Build passes

[ ] Lint passes

[ ] No console errors

[ ] No dead code

[ ] No duplicated components

[ ] No unnecessary abstractions

---

# CONTENT

[ ] No lorem ipsum

[ ] No fake achievements

[ ] No fake metrics

[ ] No fake companies

[ ] All project descriptions are factual

[ ] Contact information is correct
```

---

# 14. `docs/13-ROADMAP.md`

Ini yang akan menjadi **instruksi kerja Claude Code**.

```md
# Implementation Roadmap

## Phase 0 — Repository Audit

Before changing anything:

- inspect repository
- inspect package.json
- inspect existing files
- inspect Tailwind configuration
- inspect Next.js configuration
- inspect TypeScript configuration

Do not delete existing code blindly.

Provide a short audit before implementation.

---

# Phase 1 — Foundation

Create:

- design tokens
- typography
- global styles
- layout primitives
- Container
- Section
- Button
- Link
- Badge

Verify:

- build
- responsive base
- dark mode foundation

---

# Phase 2 — Application Shell

Implement:

SiteShell

StickySidebar

MainContent

Navigation

SocialLinks

ThemeToggle

Responsive behavior

---

# Phase 3 — Hero / Identity

Implement:

Name

Role

Description

Availability

Social links

Resume

Navigation

The left panel must establish strong personal identity.

---

# Phase 4 — About

Implement editorial About section.

Keep content concise.

---

# Phase 5 — Experience

Implement reusable ExperienceItem.

Support:

- company
- role
- dates
- description
- technologies

---

# Phase 6 — Projects

Implement:

ProjectCard

ProjectPreview

Project metadata

Technology badges

Links

Projects should be visually strong but restrained.

---

# Phase 7 — Case Studies

Implement expandable or dedicated project details.

Each case study should support:

Problem

Solution

Architecture

Technology

Challenges

Performance

Accessibility

Tradeoffs

Lessons

---

# Phase 8 — Technical Skills

Create meaningful technical capability presentation.

Do not simply display a wall of technology logos.

Group technologies by capability.

Example:

Frontend

Architecture

Testing

Tooling

---

# Phase 9 — Writing

Implement article list.

Support future MDX integration.

---

# Phase 10 — Contact

Create simple contact CTA.

---

# Phase 11 — Motion

Add subtle motion.

Do not add motion until the static experience is already strong.

---

# Phase 12 — Accessibility

Perform accessibility audit.

Fix:

keyboard

focus

ARIA

semantic HTML

contrast

reduced motion

---

# Phase 13 — Performance

Audit:

bundle

images

fonts

client components

hydration

animations

---

# Phase 14 — SEO

Implement:

metadata

OG

sitemap

robots

structured data

404

---

# Phase 15 — Responsive Polish

Test:

320

375

390

430

768

1024

1280

1440

1920

---

# Phase 16 — Final Visual Review

Review the entire portfolio as a recruiter.

Ask:

Can I understand the person in 30 seconds?

Can I find projects immediately?

Can I find contact information?

Does the website feel professional?

Does the website feel original?

Does it feel like a real frontend engineer built it?

---

# Phase 17 — Final Engineering Review

Run:

typecheck

lint

build

tests

Fix all critical issues.

---

# Final Rule

Never sacrifice:

readability

accessibility

performance

maintainability

for visual effects.
```

---

# Bagian paling penting: bagaimana menjalankan Claude Code

Setelah semua file dibuat, **jangan langsung bilang:**

> "buatkan portfolio saya."

Gunakan workflow seperti engineer.

### Prompt pertama

```text
Read CLAUDE.md and all documentation under /docs.

Do not implement anything yet.

First audit the existing repository and compare it against the product requirements.

Analyze:

1. current architecture
2. current dependencies
3. current styling
4. existing components
5. Next.js configuration
6. Tailwind configuration
7. TypeScript configuration
8. what can be reused
9. what should be changed
10. what should be created

Then produce an implementation plan mapped to docs/13-ROADMAP.md.

Do not modify files yet.
```

Claude akan melakukan **audit dulu**.

---

Kemudian:

```text
Proceed with Phase 1 from docs/13-ROADMAP.md.

Before implementation, reread:

CLAUDE.md
docs/02-DESIGN-SYSTEM.md
docs/05-COMPONENTS.md
docs/09-ENGINEERING.md

Implement only Phase 1.

Do not implement later phases.

After implementation:

1. run typecheck
2. run lint if available
3. run build
4. inspect the result
5. fix issues
6. summarize what changed

Do not modify unrelated files.
```

Kemudian Phase 2.

```text
Proceed with Phase 2.

Read the relevant documentation first.

Implement only the Application Shell.

Do not implement projects, experience, blog, or contact yet.

After implementation run validation.
```

Dan seterusnya.

---

# Saya juga menyarankan satu file tambahan

## `docs/14-RECRUITER-AUDIT.md`

Ini yang membuat portfolio Anda **bukan cuma bagus menurut developer, tetapi bagus menurut HR/recruiter.**

```md
# Recruiter Audit

## First 10 Seconds

Can the visitor immediately identify:

[ ] Name

[ ] Role

[ ] Core specialization

[ ] Primary CTA

---

# First 30 Seconds

Can the visitor find:

[ ] Experience

[ ] Projects

[ ] Technology

[ ] Contact

---

# Recruiter Questions

The portfolio must answer:

Who are you?

What do you specialize in?

What have you built?

How complex were those projects?

What technologies do you use?

What was your personal contribution?

What impact did your work have?

How can I contact you?

---

# Red Flags

Avoid:

- excessive animations
- long introduction
- generic statements
- fake metrics
- fake experience
- broken links
- poor mobile design
- slow loading
- excessive technology lists
- irrelevant projects
- unfinished projects
- spelling mistakes

---

# Hiring Signal

The portfolio should communicate:

Technical competence

Product thinking

Attention to detail

Communication

Ownership

Problem solving

Engineering maturity

---

# Final Recruiter Test

A recruiter who spends only 60 seconds on the homepage should understand:

WHO

WHAT

EXPERIENCE

PROJECTS

CONTACT

without having to hunt for information.
```

---

## Jadi arsitektur final Anda

```text
cool-profile
│
├── CLAUDE.md
│
├── docs
│   │
│   ├── 01-PRODUCT.md
│   ├── 02-DESIGN-SYSTEM.md
│   ├── 03-UI-UX.md
│   ├── 04-CONTENT.md
│   ├── 05-COMPONENTS.md
│   ├── 06-ACCESSIBILITY.md
│   ├── 07-PERFORMANCE.md
│   ├── 08-SEO.md
│   ├── 09-ENGINEERING.md
│   ├── 10-MOTION.md
│   ├── 11-RESPONSIVE.md
│   ├── 12-QUALITY-GATE.md
│   ├── 13-ROADMAP.md
│   └── 14-RECRUITER-AUDIT.md
│
├── app
├── components
├── data
├── public
└── package.json
```

**Ini yang saya rekomendasikan untuk project Anda.** Dengan pendekatan ini, Claude Code tidak diposisikan sebagai "AI yang disuruh bikin website", tetapi sebagai **frontend engineer yang bekerja berdasarkan PRD, design system, engineering specification, QA criteria, dan roadmap**.

Dan yang paling penting: **layout Brittany Chiang yang Anda sukai tetap menjadi DNA utama** — satu halaman, sidebar kiri sticky sebagai identitas, konten kanan yang scroll, sangat simple, editorial, dan fokus — tetapi kualitas engineering, case study, accessibility, performance, responsive behavior, dan personal branding kita naikkan ke standar portfolio frontend modern.
