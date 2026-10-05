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
  contribution?: string;
  stack: string[];
  repositoryUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Ionic Angular Boilerplate",
    status: "Boilerplate",
    summary:
      "A reusable Ionic and Angular starter that cuts down on repeated setup for mobile-ready navigation, PWA support, Capacitor, and server-side rendering.",
    contribution:
      "I set up the frontend foundation and documented how to reuse it.",
    stack: ["Ionic", "Angular", "TypeScript", "Capacitor", "PWA", "SSR"],
    repositoryUrl:
      "https://github.com/Rafi-Hariman/lib-boilerplate-ionic-angular",
    liveUrl: "https://lib-education-ionic-angular.vercel.app",
  },
  {
    title: "BSG Cashier",
    status: "Prototype",
    summary:
      "A cashier interface prototype built to explore product management, transaction flows, and reliable local persistence in an Angular application.",
    contribution:
      "I designed the frontend structure, built the interface flow, and added IndexedDB persistence with Dexie.",
    stack: ["Angular", "TypeScript", "Tailwind CSS", "Dexie"],
    repositoryUrl: "https://github.com/Rafi-Hariman/bsg-cashier",
  },
  {
    title: "Matematik Apps",
    status: "Learning Project",
    summary:
      "An interactive mathematics app I built to practise component design, React with TypeScript, and responsive learning interfaces.",
    contribution:
      "I built the interface and interaction flow, learning React and TypeScript along the way.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    repositoryUrl: "https://github.com/Rafi-Hariman/matematik-apps",
  },
];
