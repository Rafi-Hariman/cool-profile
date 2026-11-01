import Link from "next/link";
import { ArrowUpRight, Github, Instagram, Linkedin, Facebook, MessageCircle, FileText, MapPin } from "lucide-react";
import { person } from "@/data/person";
import { socials } from "@/data/social";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { Availability } from "@/components/availability";
import RobotCard from "@/components/robot-card";

const socialIcons = {
  GitHub: Github,
  Instagram: Instagram,
  LinkedIn: Linkedin,
  Facebook: Facebook,
  WhatsApp: MessageCircle,
} as const;

export function Sidebar() {
  return (
    <div className="flex h-full flex-col gap-8 py-8 pr-10 lg:pt-24">
      {/* Identity */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {person.name}
        </h1>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-accent">
          Frontend Developer
        </p>
        <p className="mt-3 font-mono text-xs tracking-[0.04em] text-muted-foreground">
          {person.shortName}
        </p>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
          {person.tagline}
        </p>
      </div>

      {/* Cross-link to the primary business site. The portfolio stays
          secondary; the marketing homepage sells the service. */}
      <Link
        href="/"
        lang="id"
        className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 transition-colors hover:border-accent/40 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span className="block text-sm font-medium text-foreground">
          Lihat layanan Rahesa
        </span>
        <ArrowUpRight
          className="h-4 w-4 shrink-0 text-metadata transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent motion-reduce:transform-none"
          aria-hidden="true"
        />
      </Link>

      {/* Navigation */}
      <SidebarNav />

      {/* Availability status + primary CTA */}
      <Availability />

      {/* Socials + resume */}
      <div className="flex flex-col gap-3">
        <ul className="flex items-center gap-2">
          {socials.map((social) => {
            const Icon = socialIcons[social.label];
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} profile`}
                  title={`${social.label} — opens in new tab`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.35] bg-white/[0.02] text-metadata transition-colors duration-200 hover:border-white/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {Icon ? (
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  ) : null}
                </a>
              </li>
            );
          })}
          {person.resumeUrl ? (
            <li>
              <a
                href={person.resumeUrl}
                aria-label="Resume (PDF)"
                title="Resume (PDF)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.35] bg-white/[0.02] text-metadata transition-colors duration-200 hover:border-white/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ) : null}
        </ul>

        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-metadata">
          <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          {person.location}
        </p>
      </div>

      {/* Signature 3D card — desktop-only, lazy, contained (docs/07).
          Sits directly in the column (no mt-auto) so it stays connected to
          the group above rather than floating at the bottom of tall
          viewports. */}
      <RobotCard />
    </div>
  );
}
