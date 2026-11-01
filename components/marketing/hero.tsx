import { Check, MessageCircle } from "lucide-react";
import { heroBenefits } from "@/data/marketing";
import { whatsappUrl } from "@/lib/whatsapp";
import { HeroVisual } from "@/components/marketing/hero-visual";

export function MarketingHero() {
  return (
    <section
      id="beranda"
      aria-labelledby="hero-title"
      className="relative -mt-[72px] overflow-hidden"
    >
      {/* Blue gradient + "jaring" grid + two outline circles — the exact same
          surface as the final CTA card, promoted to the whole first section.
          The section is pulled up behind the transparent header so the
          circle + grid continue through it with no seam. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,#2457e6_0%,#1e4bd0_48%,#0b2c8a_100%)]"
      >
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -right-16 -bottom-28 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255_/_0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255_/_0.05)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_10%,transparent_75%)]" />
      </div>

      <div className="container-marketing relative grid gap-16 pb-24 pt-[136px] sm:pt-[152px] lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-12 lg:pb-32 lg:pt-[184px]">
        <div className="max-w-2xl">
          {/* <p className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white shadow-sm motion-reduce:animate-none">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-brand-cyan"
            />
            Jasa Pembuatan Sistem
          </p> */}

          <h1
            id="hero-title"
            style={{ animationDelay: "80ms" }}
            className="mt-6 animate-fade-up text-balance text-[2.35rem] font-bold leading-[1.08] tracking-[-0.035em] text-white motion-reduce:animate-none sm:text-5xl lg:text-[3.5rem]"
          >
            Jasa Pembuatan Sistem Sesuai Kebutuhan Anda
          </h1>

          <p
            style={{ animationDelay: "160ms" }}
            className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-white/80 motion-reduce:animate-none sm:text-lg sm:leading-[1.7]"
          >
            Mulai dari sistem informasi, aplikasi web, aplikasi Android,
            dashboard, website, hingga sistem custom. Kami bantu dari
            konsultasi hingga sistem siap digunakan.
          </p>

          <div
            style={{ animationDelay: "240ms" }}
            className="mt-8 flex animate-fade-up flex-col gap-3 motion-reduce:animate-none sm:flex-row sm:items-center"
          >
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-white px-7 text-sm font-semibold text-brand-navy transition hover:bg-brand-light active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue motion-reduce:transform-none"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Konsultasi Gratis
            </a>
            <a
              href="#layanan"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-7 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
            >
              Lihat Layanan Kami
            </a>
          </div>

          <ul
            style={{ animationDelay: "320ms" }}
            className="mt-9 grid max-w-lg animate-fade-up grid-cols-2 gap-x-6 gap-y-3 motion-reduce:animate-none"
          >
            {heroBenefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15">
                  <Check className="h-3 w-3 text-white" aria-hidden="true" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{ animationDelay: "160ms" }}
          className="animate-fade-up motion-reduce:animate-none lg:pl-4"
        >
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
