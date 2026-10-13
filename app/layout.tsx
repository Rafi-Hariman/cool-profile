import type { Metadata, Viewport } from "next";
import { fontMono, fontSans } from "@/components/fonts";
import { person } from "@/data/person";
import { socials } from "@/data/social";
import "./globals.css";

const SITE_TITLE = `${person.shortName} — Frontend Developer`;

export const metadata: Metadata = {
  metadataBase: new URL(person.siteUrl),
  title: {
    default: SITE_TITLE,
    template: `%s — ${person.shortName}`,
  },
  description:
    "Frontend Developer at BSI UII building responsive, maintainable web interfaces with Angular and TypeScript. Also studying Informatics at UMBY and taking selected freelance web projects.",
  keywords: [
    person.shortName,
    person.name,
    "Frontend Developer",
    "Angular",
    "TypeScript",
  ],
  applicationName: person.shortName,
  authors: [{ name: person.name }],
  creator: person.name,
  alternates: {
    canonical: person.siteUrl,
  },
  openGraph: {
    type: "website",
    url: person.siteUrl,
    title: SITE_TITLE,
    description:
      "Selected frontend work, professional experience, and technical projects by Muhamad Rafi Hariman Saputra.",
    siteName: `${person.shortName} — Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Selected frontend work, professional experience, and technical projects by Muhamad Rafi Hariman Saputra.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#020409",
};

// Real social profile URLs for schema.org `sameAs`. WhatsApp is a chat
// deep-link rather than a profile page, so it is intentionally excluded.
const sameAs = socials
  .filter((s) => s.label !== "WhatsApp")
  .map((s) => s.href);

/** Escape "<" so serialized JSON cannot break out of the <script> tag. */
function serializeLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** Person structured data — only fields verifiable from this repository. */
function PersonJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.shortName,
    alternateName: person.name,
    url: person.siteUrl,
    // Mirrors `person.role` ("Frontend Developer at BSI UII"), split for
    // schema.org's jobTitle + worksFor shape.
    jobTitle: "Frontend Developer",
    worksFor: { "@type": "Organization", name: "BSI UII" },
    knowsAbout: [
      "Angular",
      "TypeScript",
      "React",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
    ],
    sameAs,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeLd(data) }}
    />
  );
}

/** WebSite structured data. */
function WebSiteJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${person.shortName} — Portfolio`,
    url: person.siteUrl,
    inLanguage: "en-US",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeLd(data) }}
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
        <WebSiteJsonLd />
      </body>
    </html>
  );
}
