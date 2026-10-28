import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { articleMeta } from "@/data/articles/pju-mati-sleman";
import { person } from "@/data/person";
import { ArticleBody } from "@/components/articles/article-body";
import { ArticleToc } from "@/components/articles/article-toc";
import { KeyFindings } from "@/components/articles/key-findings";
import { ArticleReferences } from "@/components/articles/article-references";
import { AuthorCard } from "@/components/articles/author-card";

const MONTHS_ID = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

function formatDateId(iso: string): string {
  const [year, month, day] = iso.split("-");
  const m = Number(month);
  if (!year || !m || !day || Number.isNaN(m) || m < 1 || m > 12) return iso;
  return `${Number(day)} ${MONTHS_ID[m - 1]} ${year}`;
}

export const metadata: Metadata = {
  title: articleMeta.seoTitle,
  description: articleMeta.description,
  alternates: { canonical: "/articles/pju-mati-sleman" },
  openGraph: {
    type: "article",
    locale: "id_ID",
    url: "/articles/pju-mati-sleman",
    title: articleMeta.seoTitle,
    description: articleMeta.description,
    publishedTime: articleMeta.publishedAt,
    modifiedTime: articleMeta.updatedAt,
    authors: [articleMeta.author.name],
    images: [
      {
        url: "/assets/images/articles/pju-mati.jpg",
        width: 1360,
        height: 936,
        alt: "Ruas jalan pada malam hari dengan penerangan dari beberapa lampu jalan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: articleMeta.seoTitle,
    description: articleMeta.description,
    images: ["/assets/images/articles/pju-mati.jpg"],
  },
};

/** Escape "<" so serialized JSON cannot break out of the <script> tag. */
function serializeLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** BlogPosting structured data for the article (root Person/WebSite untouched). */
function BlogPostingJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: articleMeta.title,
    description: articleMeta.description,
    image: `${person.siteUrl}/assets/images/articles/pju-mati.jpg`,
    datePublished: articleMeta.publishedAt,
    dateModified: articleMeta.updatedAt,
    inLanguage: "id-ID",
    isAccessibleForFree: true,
    articleSection: "Layanan Publik",
    author: {
      "@type": "Person",
      name: articleMeta.author.name,
      url: articleMeta.author.url,
    },
    publisher: {
      "@type": "Person",
      name: articleMeta.author.name,
      url: articleMeta.author.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${person.siteUrl}/articles/${articleMeta.slug}`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeLd(data) }}
    />
  );
}

export default function ArticlePage() {
  return (
    <article lang="id-ID" className="pt-12 sm:pt-16">
      <Link
        href="/articles"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-article-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-article-accent"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        Kembali ke artikel
      </Link>

      <header className="mt-8">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-article-accent">
          {articleMeta.category}
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-article-foreground sm:text-4xl md:text-5xl">
          {articleMeta.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-article-body">
          {articleMeta.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-article-muted">
          <span>{articleMeta.author.name}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={articleMeta.publishedAt}>
            {formatDateId(articleMeta.publishedAt)}
          </time>
          <span aria-hidden="true">·</span>
          <span>{articleMeta.readingTime}</span>
        </div>
      </header>

      {/* Editorial image — the owner-provided asset. Not claimed to depict a
          specific reported location or a confirmed fault, so it is labelled as
          an illustration rather than documentation. */}
      <figure className="mt-10 overflow-hidden rounded-xl border border-article-border bg-article-surface">
        <Image
          src="/assets/images/articles/pju-mati.jpg"
          alt="Ruas jalan pada malam hari dengan penerangan dari beberapa lampu jalan"
          width={1360}
          height={936}
          priority
          sizes="(min-width: 1024px) 768px, 100vw"
          className="h-auto w-full"
        />
        {/* <figcaption className="border-t border-article-border px-5 py-3 font-mono text-xs uppercase tracking-[0.1em] text-article-muted">
          Ilustrasi kondisi jalan pada malam hari. Gambar tidak
          merepresentasikan salah satu kasus di Sleman secara khusus.
        </figcaption> */}
      </figure>

      {/* Data-led hero — the single most concrete number, location, and research
          window. */}
      <div className="mt-10 rounded-xl border border-article-border bg-article-surface p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-article-muted">
          Data pembuka
        </p>
        <div className="mt-4 flex flex-wrap items-end gap-x-3 gap-y-1">
          <span className="text-5xl font-bold tracking-tight text-article-foreground sm:text-6xl">
            43
          </span>
          <span className="pb-1.5 text-sm text-article-body">
            titik tidak berfungsi dalam satu pemeriksaan
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-article-muted">
          Jalan Kaliurang KM 10, Sleman · 24 September 2025 · periode riset
          2023–2026
        </p>
      </div>

      <KeyFindings />

      <div className="mt-12 grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
        <div>
          <ArticleToc />
        </div>
        <div className="min-w-0">
          <ArticleBody />
        </div>
      </div>

      <ArticleReferences />
      <AuthorCard />
      <BlogPostingJsonLd />
    </article>
  );
}
