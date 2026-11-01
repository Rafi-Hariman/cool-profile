import { processSteps } from "@/data/marketing";
import { MarketingSectionHeading } from "@/components/marketing/section-heading";

export function MarketingProcess() {
  return (
    <section
      id="cara-kerja"
      aria-labelledby="cara-kerja-title"
      className="scroll-mt-24 bg-brand-light py-20 sm:py-24"
    >
      <div className="container-marketing">
        <MarketingSectionHeading
          id="cara-kerja-title"
          eyebrow="Cara kerja"
          title="Semudah Ini Memulai Sistem Anda"
          description="Lima langkah dari konsultasi awal sampai sistem digunakan."
          align="center"
        />

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-brand-line bg-white p-5 shadow-card"
            >
              <span className="font-mono text-xs font-bold text-brand-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold text-brand-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
