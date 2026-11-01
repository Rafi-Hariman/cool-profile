import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
import { MarketingSectionHeading } from "@/components/marketing/section-heading";
import { FaqAccordion } from "@/components/marketing/faq-accordion";

export function MarketingFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="scroll-mt-24 bg-white py-20 sm:py-24"
    >
      <div className="container-marketing grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <MarketingSectionHeading
            id="faq-title"
            eyebrow="FAQ"
            title="Pertanyaan yang sering diajukan."
            description="Jawaban singkat untuk hal-hal yang biasanya menentukan langkah berikutnya."
          />

          <div className="mt-8 rounded-2xl border border-brand-line bg-brand-light p-5">
            <p className="text-sm leading-relaxed text-brand-muted">
              Belum menemukan jawaban? Ceritakan kebutuhan Anda langsung.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-ink focus-brand"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Tanya melalui WhatsApp
            </a>
          </div>
        </div>

        <FaqAccordion />
      </div>
    </section>
  );
}
