// Identity & site metadata.
// Verified from the career addendum (2026). Fields left empty are not yet
// known/verified — they are omitted from the UI rather than guessed.
export const person = {
  name: "Muhamad Rafi Hariman Saputra",
  role: "Frontend Developer at BSI UII",
  tagline:
    "Informatics student and freelance web developer building responsive interfaces and practical digital solutions.",
  // Plain-language summary shown under the About headline (see about.tsx).
  summary:
    "I build responsive, maintainable web interfaces — as a frontend developer at BSI UII, an Informatics student, and a freelance web developer.",
  availability: "Open to Selected Freelance Projects & Collaboration",
  // Label for the primary sidebar CTA (scrolls to the Contact section).
  ctaLabel: "Contact me",
  location: "Yogyakarta, Indonesia",
  // [NEEDS INPUT] professional email — empty means the Contact CTA falls
  // back to GitHub instead of a mailto link.
  email: "",
  // [NEEDS INPUT] resume — empty hides the resume button.
  resumeUrl: "",
  // No production domain yet; the GitHub repo is the only real URL so it
  // serves as metadataBase/canonical until a domain exists.
  // [NEEDS INPUT] production domain once deployed.
  siteUrl: "https://github.com/Rafi-Hariman/cool-profile",
} as const;

export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
] as const;
