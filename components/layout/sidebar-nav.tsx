"use client";

import { navSections } from "@/data/person";
import { useActiveSection } from "@/components/layout/use-active-section";

/**
 * Scroll-spy navigation. Highlights the section currently in view via
 * IntersectionObserver (no scroll listeners) and exposes it to screen
 * readers through aria-current.
 */
export function SidebarNav() {
  const active = useActiveSection();

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
                className="group flex items-center gap-3 rounded py-1.5 pr-2 font-mono text-xs uppercase tracking-[0.12em] text-metadata transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span
                  aria-hidden="true"
                  className={`h-px transition-all duration-200 ${
                    isActive
                      ? "w-8 bg-accent"
                      : "w-4 bg-white/60 group-hover:w-6 group-hover:bg-white/80"
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
