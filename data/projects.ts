// Selected work — verified from the public GitHub repos of Rafi-Hariman.
// Statuses and stacks were checked against each repo's package.json.
export type ProjectStatus =
  | "Prototype"
  | "Learning Project"
  | "Boilerplate"
  | "Experiment"
  | "Completed";

export interface Project {
  title: string;
  status: ProjectStatus;
  summary: string;
  stack: string[];
  repositoryUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Ionic Angular Boilerplate",
    status: "Boilerplate",
    summary:
      "A reusable Ionic + Angular foundation exploring PWA support, server-side rendering, and mobile-ready navigation for a front-end education app.",
    stack: ["Ionic", "Angular", "TypeScript", "Capacitor", "PWA", "SSR"],
    repositoryUrl:
      "https://github.com/Rafi-Hariman/lib-boilerplate-ionic-angular",
    liveUrl: "https://lib-education-ionic-angular.vercel.app",
  },
  {
    title: "BSG Cashier",
    status: "Prototype",
    summary:
      "An Angular-based cashier interface exploring product management and transactional UI workflows, with local persistence.",
    stack: ["Angular", "TypeScript", "Tailwind CSS", "Dexie"],
    repositoryUrl: "https://github.com/Rafi-Hariman/bsg-cashier",
  },
  {
    title: "Matematik Apps",
    status: "Learning Project",
    summary:
      "A React and TypeScript application for building interactive mathematics learning experiences.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    repositoryUrl: "https://github.com/Rafi-Hariman/matematik-apps",
  },
];
