import Link from "next/link";
import Image from "next/image";
import { MapPin, MessageCircle } from "lucide-react";
import { business, services, type Service } from "@/data/marketing";
import { person } from "@/data/person";
import { WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/whatsapp";

const footerServiceIds = [
  "sistem-informasi",
  "aplikasi-web",
  "aplikasi-android",
  "dashboard",
  "sistem-custom",
];

const footerServices: Service[] = footerServiceIds
  .map((id) => services.find((service) => service.id === id))
  .filter((service): service is Service => Boolean(service));

const footerLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#paket", label: "Paket" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#faq", label: "FAQ" },
  { href: "/articles", label: "Blog" },
  { href: "/profile", label: "Profil" },
];

const columnHeading =
  "font-mono text-xs font-medium uppercase tracking-[0.16em] text-white/45";

const columnLink =
  "inline-flex min-h-[36px] items-center text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy";

export function MarketingFooter() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-marketing grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_0.9fr_1.1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            href="/"
            aria-label="Rahesa — beranda"
            className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white">
              <Image
                src={business.iconPath}
                alt=""
                width={36}
                height={36}
                className="size-9 object-contain"
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[15px] font-bold tracking-[-0.01em] text-white">
                Rahesa
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">
                Digital Systems
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            {business.description}
          </p>
          <p className="mt-3 text-xs text-white/40">
            oleh {person.shortName}
          </p>
        </div>

        <nav aria-labelledby="footer-layanan">
          <h2 id="footer-layanan" className={columnHeading}>
            Layanan
          </h2>
          <ul className="mt-4 flex flex-col gap-1">
            {footerServices.map((service) => (
              <li key={service.id}>
                <a href={`#layanan-${service.id}`} className={columnLink}>
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-tautan">
          <h2 id="footer-tautan" className={columnHeading}>
            Tautan
          </h2>
          <ul className="mt-4 flex flex-col gap-1">
            {footerLinks.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("#") ? (
                  <a href={link.href} className={columnLink}>
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className={columnLink}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={columnHeading}>Hubungi</h2>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
              >
                <MessageCircle className="h-4 w-4 text-brand-cyan" aria-hidden="true" />
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-white/60">
              <MapPin className="h-4 w-4 text-brand-cyan" aria-hidden="true" />
              {business.location}
            </li>
            <li>
              <Link
                href="/profile"
                className="inline-flex min-h-[36px] items-center gap-2 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
              >
                Profil Rafi Hariman
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-marketing flex flex-col gap-2 py-6 pb-24 sm:flex-row sm:items-center sm:justify-between lg:pb-6">
          <p className="font-mono text-xs tracking-[0.04em] text-white/45">
            © {new Date().getFullYear()} {business.brand} · Dikembangkan oleh{" "}
            {person.shortName}
          </p>
          <p className="text-xs text-white/40">
            Jasa pembuatan sistem informasi dan aplikasi custom.
          </p>
        </div>
      </div>
    </footer>
  );
}
