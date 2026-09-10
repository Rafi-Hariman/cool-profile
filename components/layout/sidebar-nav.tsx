"use client";

import { useEffect, useState } from "react";
import { navSections } from "@/data/person";

/**
 * Scroll-spy navigation. Highlights the section currently in view via
 * IntersectionObserver (no scroll listeners) and exposes it to screen
 * readers through aria-current.
 */
export function SidebarNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = navSections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Sections">
      <ul className="flex flex-col gap-1">
        {navSections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center gap-3 rounded py-1.5 pr-2 font-mono text-xs uppercase tracking-[0.25em] text-white/50 transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span
                  aria-hidden="true"
                  className={`h-px transition-all duration-200 ${
                    isActive
                      ? "w-8 bg-accent"
                      : "w-4 bg-white/25 group-hover:w-6 group-hover:bg-white/50"
                  }`}
                />
                <span className={isActive ? "text-accent" : undefined}>
                  {section.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
