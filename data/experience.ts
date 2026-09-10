// Employment history.
// SAMPLE — every entry below is a structural placeholder. Replace company,
// dates, descriptions, and tech with your REAL history. Never present
// sample entries as real experience.
export interface Experience {
  period: string;
  company: string;
  role: string;
  summary: string;
  points: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    period: "[2023] — [Present]",
    company: "[Your Company]",
    role: "[Senior Frontend Engineer]",
    summary:
      "[One-line summary of your remit — the product, the scale, the team.]",
    points: [
      "[Responsibility or accomplishment — factual, specific.]",
      "[Responsibility or accomplishment — factual, specific.]",
    ],
    tech: ["[React]", "[TypeScript]", "[Next.js]"],
  },
  {
    period: "[2020] — [2023]",
    company: "[Previous Company]",
    role: "[Frontend Engineer]",
    summary: "[One-line summary.]",
    points: [
      "[Responsibility or accomplishment.]",
      "[Responsibility or accomplishment.]",
    ],
    tech: ["[Vue]", "[Tailwind]", "[Node]"],
  },
];
