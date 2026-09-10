// Identity & site metadata.
// SAMPLE — replace with your real information before launch.
export const person = {
  name: "Adi Pratama",
  role: "Frontend Engineer",
  tagline: "I build accessible, performant interfaces that feel like instruments.",
  availability: "Available for freelance",
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
