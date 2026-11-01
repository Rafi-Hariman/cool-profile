import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Writing } from "@/components/sections/writing";
import { Contact } from "@/components/sections/contact";
import { JsonLd } from "@/components/json-ld";
import { person } from "@/data/person";
import { socials } from "@/data/social";

const PROFILE_TITLE = `${person.shortName} | Frontend Developer Portfolio`;
const PROFILE_DESCRIPTION =
  "Profil profesional Rafi Hariman, frontend developer dengan pengalaman mengembangkan aplikasi web, antarmuka sistem, integrasi API, dan produk digital.";

export const metadata: Metadata = {
  title: { absolute: PROFILE_TITLE },
  description: PROFILE_DESCRIPTION,
  alternates: { canonical: "/profile" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/profile",
    title: PROFILE_TITLE,
    description: PROFILE_DESCRIPTION,
    siteName: `${person.shortName} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: PROFILE_TITLE,
    description: PROFILE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// The portfolio keeps its original deep-space palette and browser chrome,
// independent of the light marketing homepage.
export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#020409",
};

const sameAs = socials
  .filter((social) => social.label !== "WhatsApp")
  .map((social) => social.href);

/** Person data for the page that actually shows this background. */
function PersonJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${person.siteUrl}/profile#person`,
        name: person.name,
        alternateName: person.shortName,
        url: `${person.siteUrl}/profile`,
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
      }}
    />
  );
}

export default function ProfilePage() {
  return (
    <div lang="en">
      <SiteShell>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Writing />
        <Contact />
        <footer className="border-t border-white/[0.05] py-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-metadata">
              © {new Date().getFullYear()} {person.name}. Built with Next.js,
              TypeScript, and a small robot.
            </p>
            <Link
              href="/"
              lang="id"
              className="inline-flex items-center gap-1.5 rounded-sm font-mono text-xs uppercase tracking-[0.12em] text-accent underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Lihat layanan Rahesa
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </footer>
      </SiteShell>
      <PersonJsonLd />
    </div>
  );
}
