import {
  AppWindow,
  ClipboardList,
  FolderSearch,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { problems } from "@/data/marketing";
import { MarketingSectionHeading } from "@/components/marketing/section-heading";

const icons: Record<string, LucideIcon> = {
  manual: ClipboardList,
  data: FolderSearch,
  "belum-ada": AppWindow,
  pengembangan: Wrench,
};

export function MarketingProblems() {
  return (
    <section
      id="masalah"
      aria-labelledby="masalah-title"
      className="scroll-mt-24 bg-white py-20 sm:py-24"
    >
      <div className="container-marketing">
        <MarketingSectionHeading
          id="masalah-title"
          eyebrow="Apakah ini yang Anda rasakan?"
          title="Butuh sistem, tetapi"
          accent="belum tahu harus mulai dari mana?"
          description="Ceritakan kebutuhan Anda. Kami membantu menyusun solusi hingga sistem dapat digunakan."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => {
            const Icon = icons[problem.id] ?? ClipboardList;
            return (
              <li
                key={problem.id}
                className="group rounded-2xl border border-brand-line bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-blue/25 hover:shadow-card-hover motion-reduce:transform-none motion-reduce:transition-none"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-light text-brand-blue">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-brand-ink">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {problem.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
