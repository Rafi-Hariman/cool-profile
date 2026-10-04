import { Github, Linkedin, Twitter, FileText, MapPin } from "lucide-react";
import { person } from "@/data/person";
import { socials } from "@/data/social";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import RobotCard from "@/components/robot-card";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  "X / Twitter": Twitter,
} as const;

export function Sidebar() {
  return (
    <div className="flex h-full flex-col gap-10 py-12 pr-10">
      {/* Identity */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {person.name}
        </h1>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-accent">
          {person.role}
        </p>
        <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
          {person.tagline}
        </p>
      </div>

      {/* Navigation */}
      <SidebarNav />

      {/* Socials + resume */}
      <div className="flex flex-col gap-4">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-metadata transition-colors duration-200 hover:border-white/25 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {Icon ? (
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  ) : null}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={person.resumeUrl}
              aria-label="Resume (PDF)"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-metadata transition-colors duration-200 hover:border-white/25 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        </ul>

        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-metadata">
          <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          {person.location}
          <span aria-hidden="true" className="text-white/20">/</span>
          <span className="text-accent">{person.availability}</span>
        </p>
      </div>

      {/* Signature 3D card — desktop-only, lazy, contained (docs/07) */}
      <div className="mt-auto hidden lg:block">
        <RobotCard />
      </div>
    </div>
  );
}
