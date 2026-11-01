import { Check, Info } from "lucide-react";
import { packages } from "@/data/marketing";
import { whatsappUrl } from "@/lib/whatsapp";
import { MarketingSectionHeading } from "@/components/marketing/section-heading";

export function MarketingPackages() {
  return (
    <section
      id="paket"
      aria-labelledby="paket-title"
      className="scroll-mt-24 bg-brand-light py-20 sm:py-24"
    >
      <div className="container-marketing">
        <MarketingSectionHeading
          id="paket-title"
          eyebrow="Pilihan paket"
          title="Pilih titik awal yang"
          accent="paling sesuai."
          description="Belum yakin memilih paket? Konsultasikan kebutuhan Anda terlebih dahulu."
          align="center"
        />

        <ul className="mt-14 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {packages.map((pkg) => {
            const featured = Boolean(pkg.recommended);
            return (
              <li
                key={pkg.id}
                className={`relative flex flex-col rounded-[20px] border bg-white p-6 sm:p-7 ${
                  featured
                    ? "border-2 border-brand-blue shadow-card"
                    : "border-brand-line shadow-card"
                }`}
              >
                {featured ? (
                  <span className="absolute right-4 top-4 rounded-full bg-brand-blue px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    Rekomendasi
                  </span>
                ) : null}

                <span className="inline-flex w-fit rounded-full bg-brand-blue/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-blue">
                  {pkg.label}
                </span>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-brand-ink">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {pkg.description}
                </p>

                <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                  {pkg.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-brand-ink"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl(`paket ${pkg.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition active:scale-[0.98] motion-reduce:transform-none focus-brand ${
                    featured
                      ? "bg-brand-blue text-white shadow-brand-glow hover:bg-[#1e4bd0]"
                      : "border border-brand-line bg-white text-brand-blue hover:border-brand-blue/30 hover:bg-brand-light"
                  }`}
                >
                  Konsultasikan Paket Ini
                </a>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 flex items-start justify-center gap-2 text-center text-sm text-brand-muted">
          <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          Harga dan ruang lingkup disesuaikan setelah kebutuhan dikonfirmasi.
        </p>
      </div>
    </section>
  );
}
