import {
  Calculator,
  Lightbulb,
  ListChecks,
  MessageCircle,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

const items: { title: string; icon: LucideIcon }[] = [
  { title: "Konsultasi kebutuhan", icon: MessagesSquare },
  { title: "Rekomendasi sistem", icon: Lightbulb },
  { title: "Penentuan fitur", icon: ListChecks },
  { title: "Estimasi biaya", icon: Calculator },
];

export function MarketingNoConcept() {
  return (
    <section
      id="mulai"
      aria-labelledby="mulai-title"
      className="relative scroll-mt-24 overflow-hidden bg-brand-navy py-20 sm:py-24"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-brand-blue/25 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-[360px] w-[360px] rounded-full bg-brand-cyan/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255_/_0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255_/_0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_75%)]" />
      </div>

      <div className="container-marketing relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-cyan">
            Mulai dari mana saja
          </p>
          <h2
            id="mulai-title"
            className="mt-4 text-balance text-3xl font-bold leading-[1.14] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.6rem]"
          >
            Belum Punya Konsep? Tidak Masalah.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Cukup ceritakan kebutuhan dan proses yang ingin dibuat lebih
            praktis. Kami membantu memberikan gambaran sistem yang sesuai.
          </p>

          <p className="mt-7 border-l-2 border-brand-cyan pl-5 text-lg font-semibold leading-relaxed text-white sm:text-xl">
            Anda fokus pada kebutuhan. Kami bantu mengerjakan sistemnya.
          </p>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Mulai Konsultasi
          </a>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.06] text-brand-cyan">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-white">
                  {item.title}
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
