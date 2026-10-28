// Writing — real, published articles. The homepage Writing section reads this
// list and renders an honest empty-state panel only when it is empty (see
// components/sections/writing.tsx). Entries link to static article routes
// under /articles.
export interface ArticleSummary {
  slug: string;
  title: string;
  description: string;
  category: string;
  /** ISO date (yyyy-mm-dd) — real publication date, not a build timestamp. */
  publishedAt: string;
  updatedAt?: string;
  /** Computed from the final manuscript (200 words/min, rounded up). */
  readingTime: string;
  href: string;
  featured?: boolean;
}

export const articles: ArticleSummary[] = [
  {
    slug: "pju-mati-sleman",
    title: "PJU Mati di Sleman: Mengapa Penanganannya Bisa Lambat?",
    description:
      "A data-led analysis of why streetlight repairs can be slow — from citizen reports and divided authority to diagnosis and confirmation.",
    category: "Layanan Publik",
    publishedAt: "2026-10-27",
    updatedAt: "2026-10-27",
    readingTime: "9 menit baca",
    href: "/articles/pju-mati-sleman",
    featured: true,
  },
];
