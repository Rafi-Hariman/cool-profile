"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav, site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#work");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "border-b border-white/[0.06] bg-[#030407]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        className="container-page flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-bold tracking-widest text-foreground"
        >
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-sm border border-accent/40 bg-accent/10 font-mono text-[11px] text-accent transition-colors group-hover:bg-accent group-hover:text-background"
          >
            {site.handle.slice(0, 1)}
          </span>
          <span className="hidden sm:inline">{site.handle}.</span>
          <span className="text-accent">_</span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "relative rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors",
                  active === item.href
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {active === item.href && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-px h-px bg-accent"
                  />
                )}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <Button asChild variant="outline" size="sm">
              <a href="#contact">
                Hire me
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </Button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-sm border border-white/10 text-foreground md:hidden"
        >
          <span className="relative block h-3 w-4" aria-hidden="true">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-full bg-current transition-all duration-200",
                menuOpen && "top-1.5 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-px w-full bg-current transition-all duration-200",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-px w-full bg-current transition-all duration-200",
                menuOpen && "top-1.5 -rotate-45"
              )}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/[0.06] bg-[#030407]/95 backdrop-blur-xl md:hidden"
        >
          <ul className="container-page flex flex-col gap-1 py-4">
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3 font-mono text-sm uppercase tracking-widest text-foreground/90"
                >
                  <span>
                    <span className="mr-3 text-accent/60">0{i + 1}</span>
                    {item.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </a>
              </li>
            ))}
            <li className="mt-2">
              <Button asChild className="w-full">
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Let&apos;s talk
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
