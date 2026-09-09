export const site = {
  name: "Adi Pratama",
  handle: "Adi",
  role: "Creative Developer",
  location: "Jakarta, ID",
  email: "hello@adi.dev",
  availability: "Available for freelance",
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X / Twitter", href: "https://x.com" },
  ],
  tagline: "I design and engineer kinetic, high-performance interfaces that feel alive.",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export interface Project {
  title: string;
  year: string;
  description: string;
  tags: string[];
  href: string;
  accent?: string;
}

export const projects: Project[] = [
  {
    title: "Pulse Analytics",
    year: "2025",
    description:
      "Real-time observability dashboard streaming 50k events/sec through a WebGL-smooth canvas. Choreographed micro-interactions keep a dense dataset calm.",
    tags: ["Next.js", "TypeScript", "D3", "WebGL"],
    href: "#",
    accent: "#38bdf8",
  },
  {
    title: "Atlas Design System",
    year: "2024",
    description:
      "Token-driven component library shipped to six product teams. Primitives, theming, and docs — dark mode designed first, light as an afterthought.",
    tags: ["React", "Tailwind", "Radix", "Storybook"],
    href: "#",
    accent: "#a78bfa",
  },
  {
    title: "Orbit UI Engine",
    year: "2024",
    description:
      "A spring-physics animation engine for interface states. Under 6kb, off the main thread where it counts, and friendly to reduced-motion users.",
    tags: ["TypeScript", "Canvas", "Motion"],
    href: "#",
    accent: "#34d399",
  },
  {
    title: "Terra API",
    year: "2023",
    description:
      "Developer platform for spatial data with an interactive 3D sandbox. Led the DX and the docs; the constellation you are standing in started as its easter egg.",
    tags: ["Node", "Postgres", "Rust", "DX"],
    href: "#",
    accent: "#fbbf24",
  },
];

export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Motion"],
  },
  {
    label: "Visual / Graphics",
    skills: ["Canvas 2D", "WebGL", "GLSL", "D3", "Figma"],
  },
  {
    label: "Backend & Ops",
    skills: ["Node", "Postgres", "Redis", "Docker", "AWS"],
  },
];
