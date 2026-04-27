import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { services } from "@/data/site";

export default function ServicesPage() {
  return (
    <>
      <section className="section-paper border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
          <div className="grid gap-12 md:grid-cols-12 items-end">
            <div className="md:col-span-7">
              <SectionEyebrow number="01">What we do</SectionEyebrow>
              <h1 className="display-xl mt-6">
                Full-spectrum
                <br />
                <em className="italic text-primary">engineering.</em>
              </h1>
            </div>
            <p className="md:col-span-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              From cloud software to embedded firmware, we deliver complete systems that are production-ready from day one.
            </p>
          </div>
        </div>
      </section>

      <section className="section-paper">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 lg:pb-32">
          <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="bg-background p-8 lg:p-10 group hover:bg-surface transition-colors">
                <div className="flex items-start justify-between">
                  <s.icon className="h-7 w-7 text-foreground" strokeWidth={1.5} />
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="mt-8 font-display text-2xl md:text-3xl">{s.title}</h3>
                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">{s.description}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
