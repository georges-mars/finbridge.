import { createFileRoute } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { team } from "@/data/site";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — FinBridge Solutions" },
      { name: "description", content: "Two engineers, one full stack. A focused two-person team that moves quickly across product, platform, firmware, and infrastructure." },
      { property: "og:title", content: "Team — FinBridge Solutions" },
      { property: "og:description", content: "Meet Eddy and George — the two engineers behind FinBridge Solutions." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <section className="section-paper border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
          <div className="grid gap-12 md:grid-cols-12 items-end">
            <div className="md:col-span-7">
              <SectionEyebrow number="02">The team</SectionEyebrow>
              <h1 className="display-xl mt-6">
                Two engineers,
                <br />
                <em className="italic text-primary">one full stack.</em>
              </h1>
            </div>
            <p className="md:col-span-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              A focused two-person team that can move quickly across product, platform, firmware, and infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="section-paper">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 lg:pb-32">
          <div className="grid gap-px bg-border border border-border md:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="bg-background p-6 sm:p-10 lg:p-14">
                <div className="flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-full border border-border-strong bg-surface font-display text-2xl sm:text-3xl text-primary italic">
                  {member.initials}
                </div>
                <h3 className="mt-6 sm:mt-8 font-display text-2xl sm:text-3xl md:text-4xl">{member.name}</h3>
                <p className="mt-2 eyebrow text-primary">{member.role}</p>
                <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed">{member.bio}</p>
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="eyebrow mb-4">Stack</div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border px-2.5 py-1 text-[11px] font-mono text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Culture code */}
      <section className="section-ink">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
          <div className="grid gap-12 md:grid-cols-12 items-start">
            <div className="md:col-span-5">
              <SectionEyebrow number="03">Who you'll be working with</SectionEyebrow>
              <h2 className="display-lg mt-6">
                The <em className="italic text-primary">culture code.</em>
              </h2>
              <div className="mt-10 rounded-2xl border border-border-strong p-8">
                <h3 className="font-display text-2xl">High talent density</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  A lean team of exceptional engineers moves faster and solves unstructured problems more effectively.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 divide-y divide-border">
              {[
                { title: "Velocity over perfection", desc: "We ship fast, learn faster, and let iteration compound our advantage." },
                { title: "First-principles thinking", desc: "We design systems from fundamentals — not legacy conventions." },
                { title: "Client obsession", desc: "Every system, every detail, every decision begins with the client's reality in mind." },
                { title: "Honesty over niceness", desc: "We communicate directly and transparently — because clarity accelerates progress." },
                { title: "Craft as character", desc: "Our work reflects who we are — thoughtful, precise, and deeply intentional." },
              ].map((v) => (
                <div key={v.title} className="py-6 first:pt-0">
                  <h3 className="font-display text-2xl">{v.title}</h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
