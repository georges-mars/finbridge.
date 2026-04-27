import { SectionEyebrow } from "@/components/SectionEyebrow";
import { processSteps } from "@/data/site";

export default function ProcessPage() {
  return (
    <>
      <section className="section-paper border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
          <div className="grid gap-12 md:grid-cols-12 items-end">
            <div className="md:col-span-7">
              <SectionEyebrow number="05">How we work</SectionEyebrow>
              <h1 className="display-xl mt-6">
                Our
                <br />
                <em className="italic text-primary">process.</em>
              </h1>
            </div>
            <p className="md:col-span-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              A simple, transparent delivery flow designed for fast iteration and reliable production outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-paper">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 lg:pb-32">
          <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.n} className="bg-background p-6 sm:p-10 lg:p-12">
                <div className="font-display text-4xl sm:text-6xl text-primary italic">{step.n}</div>
                <h3 className="mt-8 font-display text-2xl md:text-3xl">{step.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-ink">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionEyebrow>What you get</SectionEyebrow>
              <h2 className="display-lg mt-6">
                Production-grade,
                <br />
                <em className="italic text-primary">always.</em>
              </h2>
            </div>
            <div className="md:col-span-7 grid gap-6 md:grid-cols-2">
              {[
                { t: "Clear architecture docs", d: "API contracts, data models, and deployment plans you can actually read." },
                { t: "Working software weekly", d: "Demo every week. No surprises at the end of a sprint or a quarter." },
                { t: "Code you can maintain", d: "Typed, tested, and documented. Built so the next engineer can take it forward." },
                { t: "Hands-on support", d: "Post-launch monitoring, fixes, and feature growth — we don't disappear." },
              ].map((v) => (
                <div key={v.t} className="border-t border-border pt-5">
                  <h3 className="font-display text-xl">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
