// Career journey — real, verified profile (see career addendum).
// Dates are left coarse on purpose: the exact internship and contract
// dates still need verification, so no month-level dates are invented.
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
    period: "After internship — Present",
    organization: "BSI UII",
    role: "Frontend Developer",
    type: "Contract employee (SPK)",
    summary:
      "Continued at BSI UII as a contract Frontend Developer after the internship, focusing on web application interfaces, feature development, and ongoing application maintenance.",
    points: [
      "Translate UI/UX designs into responsive and maintainable application interfaces.",
      "Develop and maintain frontend features for institutional web applications.",
      "Improve interface consistency, usability, and maintainability.",
      "Collaborate with backend developers and project stakeholders during implementation.",
    ],
  },
  {
    period: "Internship · approximately 6–8 months",
    organization: "BSI UII",
    role: "Backend & Frontend Developer Intern",
    type: "Internship",
    summary:
      "Started a professional software-development journey through an internship at BSI UII, contributing to backend and frontend tasks while learning how APIs, data, interfaces, and team workflows connect in real projects.",
    points: [
      "Collaborated across backend and frontend tasks during the internship.",
    ],
  },
];

// Work, study, and freelance are combined here as a summary — not as a
// third job at BSI UII.
export const currentFocus = {
  label: "Current Focus",
  summary:
    "Currently balancing frontend work at BSI UII, a bachelor's degree in Informatics at Universitas Mercu Buana Yogyakarta, and selected freelance projects. This combination strengthens practical engineering experience, academic foundations, and direct communication with project stakeholders.",
  education:
    "Bachelor of Informatics, Universitas Mercu Buana Yogyakarta — employee-class program",
  freelance:
    "Responsive websites, personal or business profiles, landing pages, and practical digital solutions",
} as const;
