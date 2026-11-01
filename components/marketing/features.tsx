import { Check, MessageCircle, Sparkles } from "lucide-react";
import { configurableFeatures } from "@/data/marketing";
import { MarketingSectionHeading } from "@/components/marketing/section-heading";

const previewRows = [
  { label: "Dashboard", status: "Aktif" },
  { label: "Pengguna", status: "Terhubung" },
  { label: "Laporan", status: "Siap" },
  { label: "Notifikasi", status: "Berjalan" },
];

export function MarketingFeatures() {
  return (
    <section
      id="fitur"
      aria-labelledby="fitur-title"
      className="scroll-mt-24 overflow-hidden bg-[linear-gradient(135deg,#15398f_0%,#2457e6_100%)] py-20 sm:py-24"
    >
      <div className="container-marketing grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <MarketingSectionHeading
            id="fitur-title"
            eyebrow="Fitur fleksibel"
            title="Fitur yang dapat"
            accent="disesuaikan."
            description="Pilih fitur yang diperlukan. Tidak semua sistem membutuhkan fitur yang sama."
            onDark
          />

          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {configurableFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white"
              >
                <Check
                  className="h-4 w-4 shrink-0 text-brand-cyan"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="rounded-[20px] border border-white/15 bg-white p-6 shadow-card">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-blue/[0.08] text-brand-blue">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-brand-ink">
                Konfigurasi sistem
              </span>
            </div>

            <ul className="mt-4 divide-y divide-brand-line">
              {previewRows.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span className="font-medium text-brand-ink">
                    {row.label}
                  </span>
                  <span className="rounded-full bg-brand-green-soft px-2.5 py-0.5 text-xs font-semibold text-brand-green">
                    {row.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 flex items-center gap-2 text-sm text-white/80">
            <MessageCircle
              className="h-4 w-4 shrink-0 text-brand-cyan"
              aria-hidden="true"
            />
            Disesuaikan saat konsultasi.
          </p>
        </div>
      </div>
    </section>
  );
}
