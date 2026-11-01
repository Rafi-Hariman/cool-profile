import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { fontMono, fontSans, fontSerif } from "@/components/fonts";
import { JsonLd } from "@/components/json-ld";
import { business } from "@/data/marketing";
import { person } from "@/data/person";
import "./globals.css";

const SITE_TITLE = "Jasa Pembuatan Sistem & Aplikasi Custom | Rahesa";
const SITE_DESCRIPTION =
  "Rahesa menyediakan jasa pembuatan sistem informasi, aplikasi web, aplikasi Android, dashboard, integrasi, dan sistem custom sesuai kebutuhan.";

export const metadata: Metadata = {
  metadataBase: new URL(person.siteUrl),
  title: {
    default: SITE_TITLE,
    template: `%s | ${business.brand}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "jasa pembuatan sistem",
    "jasa pembuatan sistem informasi",
    "jasa pembuatan aplikasi web",
    "jasa pembuatan aplikasi custom",
    "jasa pembuatan sistem custom",
    "jasa pembuatan dashboard",
    "jasa pembuatan aplikasi Yogyakarta",
    business.formalName,
  ],
  applicationName: business.brand,
  authors: [{ name: person.name }],
  creator: person.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: person.siteUrl,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: business.formalName,
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F7F9FD",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${fontSans.variable} ${fontMono.variable} ${fontSerif.variable}`}>
      <body>
        {children}
        <SpeedInsights />
        {/* Site-level identity only. Person facts live on /profile where the
            employer and technical background are actually shown. */}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: business.formalName,
            url: person.siteUrl,
            inLanguage: "id-ID",
          }}
        />
      </body>
    </html>
  );
}
