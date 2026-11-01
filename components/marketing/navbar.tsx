"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { business, marketingNav } from "@/data/marketing";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

function isHash(href: string): boolean {
  return href.startsWith("#");
}

/**
 * Sticky marketing navigation. Transparent over the blue hero at the top,
 * hides on scroll, and switches to a solid white bar (with dark text) while
 * the mobile/tablet menu is open so nothing blends into the panel.
 */
export function MarketingNavbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const solid = open; // menu open → solid white header

  // Hide the top bar once the user scrolls past the hero.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      setHidden(window.scrollY > 0);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape to close + outside tap to close.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  // Lock page scroll while the menu is open so the header can't slide away.
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = "";
      };
    }
  }, [open]);

  const focusClass = solid
    ? "focus-brand"
    : "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue";

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 transition duration-300 motion-reduce:transition-none",
        hidden && !open
          ? "pointer-events-none -translate-y-full opacity-0"
          : "translate-y-0 opacity-100",
        solid ? "bg-white" : "bg-transparent"
      )}
    >
      <div className="container-marketing flex h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Rahesa — beranda"
          className={cn("flex shrink-0 items-center gap-2.5 rounded-lg", focusClass)}
        >
          <span
            className={cn(
              "flex size-11 shrink-0 items-center justify-center rounded-xl bg-white",
              solid && "ring-1 ring-brand-line"
            )}
          >
            <Image
              src={business.iconPath}
              alt=""
              width={36}
              height={36}
              priority
              className="size-9 object-contain"
            />
          </span>
          <span
            className={cn(
              "text-[15px] font-bold tracking-[-0.01em]",
              solid ? "text-brand-ink" : "text-white"
            )}
          >
            Rahesa
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {marketingNav.map((item) => (
              <li key={item.href}>
                {isHash(item.href) ? (
                  <a
                    href={item.href}
                    className={cn(
                      "flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium transition-colors",
                      solid
                        ? "text-brand-muted hover:bg-brand-light hover:text-brand-ink"
                        : "text-white/85 hover:bg-white/10 hover:text-white",
                      focusClass
                    )}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium transition-colors",
                      solid
                        ? "text-brand-muted hover:bg-brand-light hover:text-brand-ink"
                        : "text-white/85 hover:bg-white/10 hover:text-white",
                      focusClass
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden min-h-[44px] items-center gap-2 rounded-xl px-5 text-sm font-semibold transition active:scale-[0.98] motion-reduce:transform-none sm:inline-flex",
              focusClass,
              solid
                ? "bg-brand-blue text-white shadow-brand-glow hover:bg-[#1e4bd0]"
                : "bg-white text-brand-navy hover:bg-brand-light"
            )}
          >
            Konsultasi Gratis
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-xl border transition-colors lg:hidden",
              focusClass,
              solid
                ? "border-brand-line bg-white text-brand-ink hover:bg-brand-light"
                : "border-white/30 bg-white/5 text-white hover:bg-white/10"
            )}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu — smooth open/close via grid-template-rows. */}
      <div
        id="mobile-menu"
        className={cn(
          "grid lg:hidden",
          "transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0 overflow-hidden" inert={!open}>
          <div className="border-t border-brand-line bg-white shadow-[0_28px_44px_-28px_rgba(16,26,56,0.45)]">
            <nav
              aria-label="Navigasi utama versi mobile"
              className="container-marketing py-3"
            >
              <ul className="flex flex-col gap-0.5">
                {marketingNav.map((item) => (
                  <li key={item.href}>
                    {isHash(item.href) ? (
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex min-h-[46px] items-center justify-between rounded-lg px-3 text-base font-medium text-brand-ink transition-colors hover:bg-brand-light focus-brand"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex min-h-[46px] items-center justify-between rounded-lg px-3 text-base font-medium text-brand-ink transition-colors hover:bg-brand-light focus-brand"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-brand-blue px-5 text-sm font-semibold text-white shadow-brand-glow transition hover:bg-[#1e4bd0] active:scale-[0.98] focus-brand motion-reduce:transform-none"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Konsultasi Gratis
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
