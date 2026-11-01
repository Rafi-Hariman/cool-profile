import {
  Eye,
  LifeBuoy,
  ListChecks,
  MonitorSmartphone,
  Sprout,
  Target,
  type LucideIcon,
} from "lucide-react";
import { reasons } from "@/data/marketing";
import { whatsappUrl } from "@/lib/whatsapp";
import { MarketingSectionHeading } from "@/components/marketing/section-heading";

const icons: LucideIcon[] = [
  Target,
  Sprout,
  MonitorSmartphone,
  Eye,
  ListChecks,
  LifeBuoy,
];

export function MarketingReasons() {
  return (
    <section
      id="alasan"
      aria-labelledby="alasan-title"
      className="scroll-mt-24 bg-white py-20 sm:py-24"
    >
      <div className="container-marketing grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <MarketingSectionHeading
            id="alasan-title"
            eyebrow="Mengapa memilih layanan ini"
            title="Cara kerja yang masuk akal untuk kebutuhan nyata."
            description="Tidak semua kebutuhan harus dimulai dari sistem besar. Yang penting, solusinya sesuai dengan proses yang dijalankan."
          />

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-brand-line bg-white px-6 text-sm font-semibold text-brand-blue transition hover:border-brand-blue/30 focus-brand"
          >
            Diskusikan Kebutuhan
          </a>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = icons[index] ?? Target;
            return (
              <li
                key={reason.title}
                className="rounded-2xl border border-brand-line bg-white p-5 shadow-card"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-light text-brand-blue">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-brand-ink">
                  {reason.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">
                  {reason.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
