import {
  Activity,
  Database,
  Layers,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { solutionBenefits } from "@/data/marketing";
import { whatsappUrl } from "@/lib/whatsapp";
import { MarketingSectionHeading } from "@/components/marketing/section-heading";

const benefitIcons: LucideIcon[] = [Database, Workflow, Activity, Layers];

export function MarketingSolution() {
  return (
    <section
      id="solusi"
      aria-labelledby="solusi-title"
      className="scroll-mt-24 bg-brand-light py-20 sm:py-24"
    >
      <div className="container-marketing grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <MarketingSectionHeading
            id="solusi-title"
            eyebrow="Solusi untuk kebutuhan Anda"
            title="Wujudkan kebutuhan menjadi"
            accent="sistem yang siap digunakan."
            description="Sistem membantu mengelola data, menjalankan proses, memantau aktivitas, dan memberikan layanan dengan lebih praktis."
          />

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-brand-blue px-6 text-sm font-semibold text-white shadow-brand-glow transition-colors hover:bg-[#1e4bd0] focus-brand"
          >
            Konsultasikan Kebutuhan
          </a>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[28px] bg-[radial-gradient(70%_70%_at_70%_20%,rgb(14_165_233_/_0.14),transparent_70%)] blur-xl"
          />
          <ul className="relative divide-y divide-brand-line overflow-hidden rounded-[20px] border border-brand-line bg-white shadow-card">
            {solutionBenefits.map((benefit, index) => {
              const Icon = benefitIcons[index] ?? Database;
              return (
                <li
                  key={benefit.title}
                  className="flex items-start gap-4 p-6 sm:gap-5 sm:p-7"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-blue/[0.07] text-brand-blue">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-brand-ink">
                      {benefit.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
