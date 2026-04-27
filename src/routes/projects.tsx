import { createFileRoute } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — FinBridge Solutions" },
      { name: "description", content: "A mix of IoT products, mobile experiences, and real-world production systems delivered across multiple industries." },
      { property: "og:title", content: "Selected Work — FinBridge Solutions" },
      { property: "og:description", content: "Anitrac, Hewa-Teck, Okoa Life, E-Shamba, ASTE, DosiWatch and more — IoT, mobile, and full-stack systems we shipped." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <section className="section-paper border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
          <div className="grid gap-12 md:grid-cols-12 items-end">
            <div className="md:col-span-7">
              <SectionEyebrow number="03">Selected work</SectionEyebrow>
              <h1 className="display-xl mt-6">
                Projects we're
                <br />
                <em className="italic text-primary">proud of.</em>
              </h1>
            </div>
            <p className="md:col-span-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              A mix of IoT products, mobile experiences, and real-world production systems delivered across multiple industries.
            </p>
          </div>
        </div>
      </section>

      <section className="section-paper">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 lg:pb-32">
          <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => {
              const Icon = p.icon;
              return (
                <article key={p.title} className="bg-background p-8 lg:p-10 group hover:bg-surface transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-primary">{p.category}</span>
                    <span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span>
                  </div>

                  <div className="mt-10 mb-10 flex h-36 items-center justify-center border border-border bg-surface group-hover:border-primary/40 transition-colors">
                    <Icon className="h-10 w-10 text-foreground group-hover:text-primary group-hover:scale-110 transition-all" strokeWidth={1.25} />
                  </div>

                  <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
