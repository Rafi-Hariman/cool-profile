// Career journey — real, verified profile (see CONTENT-INVENTORY-FINAL.md).
// Exact internship/contract dates still need verification, so no specific
// months/years are invented.
export interface Experience {
  period: string;
  organization: string;
  role: string;
  type: string;
  summary: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    period: "After internship · Present",
    organization: "BSI UII",
    role: "Frontend Developer",
    type: "Contract employee (SPK)",
    summary:
      "Stayed on at BSI UII after the internship, working mainly on frontend development, feature delivery, and application maintenance.",
    points: [
      "Translate UI/UX designs into responsive application interfaces.",
      "Build and maintain frontend features for institutional web applications.",
      "Work with backend developers and stakeholders during implementation.",
      "Keep interfaces consistent and maintainable across ongoing work.",
    ],
  },
  {
    period: "Internship · approximately 6 to 8 months",
    organization: "BSI UII",
    role: "Backend & Frontend Developer Intern",
    type: "Internship",
    summary:
      "Worked on backend and frontend tasks while learning how APIs, databases, interfaces, and delivery workflows connect in real software projects.",
    points: [
      "Supported API and data work required by frontend features.",
      "Helped with interface implementation and website maintenance.",
      "Worked across both sides of the application before specializing in frontend development.",
    ],
  },
];

// Current work/study/freelance balance — a summary, not a third job.
export const currently = {
  label: "Currently",
  summary:
    "Frontend Developer at BSI UII · Informatics student at UMBY · selected freelance work",
} as const;

// Education — shown after the experience timeline.
export const education = {
  program: "Bachelor of Informatics",
  institution: "Universitas Mercu Buana Yogyakarta",
  format: "Employee-class program",
  status: "Currently enrolled",
} as const;
