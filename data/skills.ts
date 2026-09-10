// Technical capabilities grouped by how you think about them — not a
// wall of logos.
export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion"],
  },
  {
    label: "Architecture",
    skills: ["Design systems", "Component APIs", "Accessibility", "Testing"],
  },
  {
    label: "Tooling & Ops",
    skills: ["Node", "Vite", "Playwright", "CI/CD"],
  },
];
