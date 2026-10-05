// Identity & site metadata.
// Verified career profile. Fields left empty are not yet known/verified —
// they are omitted from the UI rather than guessed.
export const person = {
  name: "Muhamad Rafi Hariman Saputra",
  role: "Frontend Developer at BSI UII",
  tagline:
    "I build and maintain web interfaces, turn UI designs into working products, and take on selected freelance projects for profile and business websites.",
  // Plain-language lead shown under the About headline (see about.tsx).
  summary:
    "I'm a Frontend Developer at BSI UII. I build responsive interfaces and maintain web applications with clean, reusable code.",
  availability: "Open to selected freelance projects",
  // Label for the primary sidebar CTA (scrolls to the Contact section).
  ctaLabel: "Get in touch",
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
  { id: "contact", label: "Contact" },
] as const;
