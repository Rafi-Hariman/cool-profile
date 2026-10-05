// Technical capabilities grouped by verified use across the public repos.
// "Project Experience" means used in projects, not a claimed mastery level.
export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  },
  {
    label: "Project Experience",
    skills: [
      "React",
      "Next.js",
      "Ionic",
      "Capacitor",
      "Progressive Web Apps",
      "Dexie",
      "Firebase",
    ],
  },
  {
    label: "Tools & Workflow",
    skills: ["Git", "GitHub", "Vite"],
  },
];
