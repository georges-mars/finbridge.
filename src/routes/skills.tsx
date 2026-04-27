import { createFileRoute } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { skillGroups } from "@/data/site";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — FinBridge Solutions" },
      { name: "description", content: "Core engineering depth across backend systems, mobile and frontend platforms, embedded devices, and modern cloud operations." },
      { property: "og:title", content: "Capabilities — FinBridge Solutions" },
      { property: "og:description", content: "Backend, embedded, frontend, mobile, cloud, and DevOps capabilities." },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <>
      <section className="section-paper border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
          <div className="grid gap-12 md:grid-cols-12 items-end">
            <div className="md:col-span-7">
              <SectionEyebrow number="04">Capabilities</SectionEyebrow>
              <h1 className="display-xl mt-6">
                What we
                <br />
                <em className="italic text-primary">know deeply.</em>
              </h1>
            </div>
            <p className="md:col-span-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Core engineering depth across backend systems, mobile and frontend platforms, embedded devices, and modern cloud operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section-paper">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 lg:pb-32">
          <div className="grid gap-px bg-border border border-border md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="bg-background p-8 lg:p-12">
                <div className="eyebrow text-primary">{group.title}</div>
                <div className="mt-8 space-y-7">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-baseline justify-between">
                        <span className="font-display text-lg md:text-xl">{skill.name}</span>
                        <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="mt-3 h-px bg-border relative overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 h-full bg-foreground transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
