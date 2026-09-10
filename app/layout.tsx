import type { Metadata, Viewport } from "next";
import { fontMono, fontSans } from "@/components/fonts";
import { person } from "@/data/person";
import { socials } from "@/data/social";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(person.siteUrl),
  title: {
    default: `${person.name} — ${person.role}`,
    template: `%s — ${person.name}`,
  },
  description: person.tagline,
  keywords: [
    "frontend engineer",
    "portfolio",
    person.name.toLowerCase(),
    "react",
    "next.js",
    "typescript",
  ],
  authors: [{ name: person.name }],
  openGraph: {
    type: "website",
    url: person.siteUrl,
    title: `${person.name} — ${person.role}`,
    description: person.tagline,
    siteName: `${person.name}'s portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — ${person.role}`,
    description: person.tagline,
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
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    url: person.siteUrl,
    email: `mailto:${person.email}`,
    sameAs: socials.map((s) => s.href),
  };
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
