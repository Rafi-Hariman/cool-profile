// Technical capabilities grouped by verified use across the public repos
// (cool-profile, bsg-cashier, matematik-apps, lib-boilerplate-ionic-angular).
export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  },
  {
    label: "Mobile & PWA",
    skills: ["Ionic", "Capacitor", "Progressive Web Apps", "Firebase"],
  },
  {
    label: "Tools & Workflow",
    skills: ["Git", "GitHub", "Vite"],
  },
];
