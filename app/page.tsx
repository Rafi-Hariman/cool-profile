import { MarketingNavbar } from "@/components/marketing/navbar";
import { MarketingHero } from "@/components/marketing/hero";
import { MarketingProblems } from "@/components/marketing/problems";
import { MarketingSolution } from "@/components/marketing/solution";
import { MarketingServices } from "@/components/marketing/services";
import { MarketingFeatures } from "@/components/marketing/features";
import { MarketingPackages } from "@/components/marketing/packages";
import { MarketingReasons } from "@/components/marketing/reasons";
import { MarketingProcess } from "@/components/marketing/process";
import { MarketingNoConcept } from "@/components/marketing/no-concept";
import { MarketingFaq } from "@/components/marketing/faq";
import { MarketingFinalCta } from "@/components/marketing/final-cta";
import { MarketingFooter } from "@/components/marketing/footer";
import { MobileCta } from "@/components/marketing/mobile-cta";
import { MarketingHomeJsonLd } from "@/components/marketing/home-json-ld";
import Reveal from "@/components/reveal";

/**
 * Marketing homepage: sells the custom-systems service. The professional
 * portfolio lives at /profile and is intentionally not duplicated here.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-brand-ink">
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-brand-blue focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
      >
        Lewati ke konten
      </a>

      <MarketingNavbar />

      <main id="konten">
        <MarketingHero />
        <Reveal>
          <MarketingProblems />
        </Reveal>
        <Reveal>
          <MarketingSolution />
        </Reveal>
        <Reveal>
          <MarketingServices />
        </Reveal>
        <Reveal>
          <MarketingFeatures />
        </Reveal>
        <Reveal>
          <MarketingPackages />
        </Reveal>
        <Reveal>
          <MarketingReasons />
        </Reveal>
        <Reveal>
          <MarketingProcess />
        </Reveal>
        <Reveal>
          <MarketingNoConcept />
        </Reveal>
        <Reveal>
          <MarketingFaq />
        </Reveal>
        <Reveal>
          <MarketingFinalCta />
        </Reveal>
      </main>

      <MarketingFooter />
      <MobileCta />
      <MarketingHomeJsonLd />
    </div>
  );
}
