import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { services, projects, processSteps } from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* HERO — paper, centered, editorial */}
      <section className="section-paper relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-16 pb-20 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-44 text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
              Available for new projects
            </div>

            <h1 className="display-xl mt-8 sm:mt-10 mx-auto max-w-5xl">
              Engineering systems
              <br className="hidden sm:block" />
              {" "}that <em className="italic text-primary">actually ship.</em>
            </h1>

            <p className="mt-8 mx-auto max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              A two-person engineering team covering everything from mobile apps and backend APIs to IoT firmware and hardware. Full-stack. Production-ready. End-to-end.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background hover:bg-primary transition-colors"
              >
                View Our Work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-background px-7 py-3.5 text-sm font-medium text-foreground hover:border-foreground transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-border">
          <div className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border border-x border-border text-center">
            {[
              { n: "8+", label: "Combined Years" },
              { n: "20+", label: "Projects Shipped" },
              { n: "5+", label: "Industries Served" },
              { n: "2", label: "Engineers, Full Stack" },
            ].map((s) => (
              <div key={s.label} className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="font-display text-3xl sm:text-5xl md:text-6xl tracking-tight">
                  {s.n.replace("+", "")}
                  {s.n.includes("+") && <span className="text-primary italic">+</span>}
                </div>
                <div className="mt-3 eyebrow">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US — ink section */}
      <section className="section-ink">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
          <div className="max-w-4xl">
            <SectionEyebrow number="01">What we believe</SectionEyebrow>
            <h2 className="display-lg mt-6">
              We don't just write code.
              <br />
              We build <em className="italic text-primary">systems</em> that survive production.
            </h2>
            <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              For too long, software delivery has been overcomplicated and underdelivered. We work the other way around — clear architecture, fast iteration, and code shipped to real users.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-border border border-border">
            {[
              { title: "Depth", desc: "Engineering depth across firmware, mobile, web, backend, and cloud — not surface-level coverage." },
              { title: "Velocity", desc: "We ship fast, learn faster, and let real-world iteration compound the advantage." },
              { title: "Ownership", desc: "We treat your product like our own — every decision begins with the user's reality in mind." },
              { title: "Honesty", desc: "Direct, transparent communication. Clarity accelerates progress more than politeness ever will." },
            ].map((item, i) => (
              <div key={item.title} className="bg-ink p-10">
                <div className="eyebrow text-foreground">0{i + 1}</div>
                <h3 className="mt-4 font-display text-2xl md:text-3xl">{item.title}</h3>
                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — paper */}
      <section className="section-paper">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid gap-12 md:grid-cols-12 items-end">
            <div className="md:col-span-7">
              <SectionEyebrow number="02">What we do</SectionEyebrow>
              <h2 className="display-lg mt-6">
                Full-spectrum
                <br />
                <em className="italic text-primary">engineering.</em>
              </h2>
            </div>
            <p className="md:col-span-5 text-base text-muted-foreground leading-relaxed">
              From cloud software to embedded firmware, we deliver complete systems that are production-ready from day one.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-border border border-border">
            <div className="grid md:grid-cols-3 gap-px bg-border">
              {services.map((s) => (
                <article key={s.title} className="bg-background p-8 lg:p-10 group hover:bg-surface transition-colors">
                  <div className="flex items-start justify-between">
                    <s.icon className="h-7 w-7 text-foreground" strokeWidth={1.5} />
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl">{s.title}</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
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

          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:gap-3 transition-all">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SELECTED WORK — ink */}
      <section className="section-ink">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid gap-12 md:grid-cols-12 items-end">
            <div className="md:col-span-7">
              <SectionEyebrow number="03">Selected work</SectionEyebrow>
              <h2 className="display-lg mt-6">
                Projects we're
                <br />
                <em className="italic text-primary">proud of.</em>
              </h2>
            </div>
            <p className="md:col-span-5 text-base text-muted-foreground leading-relaxed">
              A mix of IoT products, mobile experiences, and real-world production systems delivered across multiple industries.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-border border border-border md:grid-cols-3">
            {projects.slice(0, 3).map((p) => {
              const Icon = p.icon;
              return (
                <article key={p.title} className="bg-ink p-8 lg:p-10 group">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-primary">{p.category}</span>
                    <Icon className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-10 font-display text-2xl leading-tight">{p.title}</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-4">{p.description}</p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-2.5 text-sm font-medium hover:bg-background hover:text-paper-foreground transition-colors">
              See all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS — paper */}
      <section className="section-paper">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
          <div className="max-w-3xl">
            <SectionEyebrow number="04">How we work</SectionEyebrow>
            <h2 className="display-lg mt-6">
              A simple, transparent
              <br />
              <em className="italic text-primary">delivery flow.</em>
            </h2>
          </div>

          <div className="mt-16 grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.n} className="bg-background p-10">
                <div className="font-display text-3xl sm:text-5xl text-primary italic">{step.n}</div>
                <h3 className="mt-6 font-display text-2xl">{step.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — ink */}
      <section className="section-ink">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32 text-center">
          <h2 className="display-xl mx-auto max-w-4xl">
            Have a system to <em className="italic text-primary">build?</em>
          </h2>
          <p className="mt-8 mx-auto max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Tell us what you are building. We will come back with a clear technical path and next steps within 24 hours.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-background text-paper-foreground px-8 py-4 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
