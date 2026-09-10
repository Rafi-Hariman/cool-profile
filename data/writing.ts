// Articles — renders only when non-empty (docs/03-UI-UX: no empty UI).
// SAMPLE — replace with real articles; delete the sample entry to hide
// the section until real writing exists.
export interface Article {
  title: string;
  description: string;
  year: string;
  href: string;
}

export const articles: Article[] = [
  {
    title: "[Article Title — a real technical post]",
    description:
      "[One-line summary of the technical idea or lesson.]",
    year: "[2025]",
    href: "#",
  },
];
