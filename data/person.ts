// Identity & site metadata.
// SAMPLE — replace with your real information before launch.
export const person = {
  name: "Adi Pratama",
  role: "Frontend Engineer",
  tagline: "I build accessible, performant interfaces that feel like instruments.",
  // Plain-language summary shown under the About headline. SAMPLE — replace
  // with one sentence a non-technical client would understand. Rendered only
  // when non-empty (see components/sections/about.tsx).
  summary:
    "[One plain-language line: what I build, and who it helps — no jargon.]",
  availability: "Available for freelance",
  // Label for the primary sidebar CTA (scrolls to the Contact section).
  ctaLabel: "Contact me",
  location: "Jakarta, ID",
  email: "hello@adi.dev",
  resumeUrl: "/resume.pdf",
  // Replace with the production domain before launch (used for SEO metadata).
  siteUrl: "https://adi.dev",
} as const;

export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
] as const;
