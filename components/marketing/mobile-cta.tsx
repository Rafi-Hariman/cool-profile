import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

/**
 * Fixed bottom conversion CTA, mobile only. Keeps "Konsultasi Gratis"
 * reachable while the top header is hidden on scroll (matches the reference
 * `.mobile-cta`). Safe-area aware and hidden on lg+.
 */
export function MobileCta() {
  return (
    <div className="fixed inset-x-3.5 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-40 lg:hidden">
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(10,24,70,0.30)] transition hover:bg-[#1e4bd0] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 motion-reduce:transform-none"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Konsultasi Gratis
      </a>
    </div>
  );
}
