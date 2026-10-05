import type { Metadata, Viewport } from "next";
import { fontMono, fontSans } from "@/components/fonts";
import { person } from "@/data/person";
import { socials } from "@/data/social";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(person.siteUrl),
  title: {
    default: `${person.name} — Frontend Developer`,
    template: `%s — ${person.name}`,
  },
  description:
    "Frontend Developer at BSI UII building responsive, maintainable web interfaces with Angular and TypeScript. Also studying Informatics at UMBY and taking selected freelance web projects.",
  keywords: [
    "frontend developer",
    "Angular developer",
    "TypeScript",
    "web developer",
    person.name,
    "BSI UII",
    "portfolio",
  ],
  authors: [{ name: person.name }],
  openGraph: {
    type: "website",
    url: person.siteUrl,
    title: `${person.name} — Frontend Developer`,
    description:
      "Selected frontend work, professional experience, and technical projects by Muhamad Rafi Hariman Saputra.",
    siteName: `${person.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — Frontend Developer`,
    description:
      "Selected frontend work, professional experience, and technical projects by Muhamad Rafi Hariman Saputra.",
  },
  alternates: {
    canonical: person.siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#020409",
};

/** Person structured data (docs/08-SEO). */
function PersonJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    url: person.siteUrl,
    sameAs: socials.map((s) => s.href),
  };
  if (person.email) data.email = `mailto:${person.email}`;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body>
        {children}
        <PersonJsonLd />
      </body>
    </html>
  );
}
