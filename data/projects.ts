// Selected projects — 3 to 5 strong entries, not a wall of everything.
// SAMPLE — every entry below is a structural placeholder. Replace with
// your REAL projects, real links, and real (never invented) metrics.
export interface Project {
  title: string;
  year: string;
  description: string;
  tech: string[];
  href: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: "[Project One]",
    year: "[2025]",
    description:
      "[Problem → solution → outcome in two sentences. What was difficult, what you built, what changed.]",
    tech: ["[Next.js]", "[TypeScript]", "[WebGL]"],
    href: "#",
    repo: "#",
  },
  {
    title: "[Project Two]",
    year: "[2024]",
    description:
      "[Problem → solution → outcome. Keep it concrete and honest.]",
    tech: ["[React]", "[Tailwind]", "[Radix]"],
    href: "#",
  },
  {
    title: "[Project Three]",
    year: "[2024]",
    description:
      "[Problem → solution → outcome.]",
    tech: ["[Node]", "[Postgres]", "[DX]"],
    href: "#",
  },
];
