import {
  Blocks,
  CalendarCheck,
  CreditCard,
  Database,
  Globe,
  LayoutDashboard,
  Plug,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/marketing";
import { MarketingSectionHeading } from "@/components/marketing/section-heading";

const icons: Record<string, LucideIcon> = {
  "sistem-informasi": Database,
  "aplikasi-web": Globe,
  "aplikasi-android": Smartphone,
  dashboard: LayoutDashboard,
  "sistem-transaksi": CreditCard,
  "booking-reservasi": CalendarCheck,
  "integrasi-sistem": Plug,
  "sistem-custom": Blocks,
};

export function MarketingServices() {
  return (
    <section
      id="layanan"
      aria-labelledby="layanan-title"
      className="scroll-mt-24 bg-white py-20 sm:py-24"
    >
      <div className="container-marketing">
        <MarketingSectionHeading
          id="layanan-title"
          eyebrow="Layanan kami"
          title="Sistem untuk"
          accent="Berbagai Kebutuhan"
          description="Pembuatan sistem untuk bisnis, organisasi, pendidikan, penelitian, maupun kebutuhan personal."
          align="center"
        />

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.id] ?? Blocks;
            return (
              <li
                key={service.id}
                id={`layanan-${service.id}`}
                className="group flex scroll-mt-28 items-center gap-3.5 rounded-xl border border-brand-line bg-white p-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-brand-blue/30 hover:shadow-card-hover motion-reduce:transform-none motion-reduce:transition-none"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-light text-brand-blue">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-brand-ink">
                    {service.title}
                  </h3>
                  <p className="mt-0.5 text-[13px] leading-snug text-brand-muted">
                    {service.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
