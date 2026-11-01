import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export function MarketingFinalCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-white pb-20 sm:pb-24">
      <div className="container-marketing">
        <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-brand-blue via-[#1e4bd0] to-[#0b2c8a] px-6 py-14 text-center shadow-brand-glow sm:px-12 sm:py-16">
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -right-16 -bottom-28 h-80 w-80 rounded-full border border-white/10" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255_/_0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255_/_0.05)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_10%,transparent_75%)]" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-white/70">
              Siap membantu kebutuhan digital Anda
            </p>
            <h2
              id="cta-title"
              className="mt-4 text-balance text-3xl font-bold leading-[1.14] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.6rem]"
            >
              Siap Membuat Sistem yang Anda Butuhkan?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              Ceritakan kebutuhan Anda. Dapatkan rekomendasi jenis sistem,
              fitur, platform, dan estimasi awal.
            </p>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-white px-7 text-sm font-semibold text-brand-navy transition hover:bg-brand-light active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue motion-reduce:transform-none"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Konsultasi melalui WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
