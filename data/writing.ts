// Writing — no published articles yet, so the section renders an honest
// "in progress" panel instead of placeholder links (see sections/writing.tsx).
export interface Article {
  title: string;
  description: string;
  year: string;
  href: string;
}

export const articles: Article[] = [];
