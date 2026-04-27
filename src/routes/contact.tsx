import { Mail, MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";
import { SectionEyebrow } from "@/components/SectionEyebrow";

const contactInfo = [
  { icon: Mail, label: "Email", value: "georgesmars8@gmail.com" },
  { icon: MapPin, label: "Location", value: "Nairobi, Kenya — Remote Worldwide" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+254 716 555 810" },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xeevzyqn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <>
      <section className="section-paper border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
          <div className="grid gap-12 md:grid-cols-12 items-end">
            <div className="md:col-span-7">
              <SectionEyebrow number="06">Contact</SectionEyebrow>
              <h1 className="display-xl mt-6">
                Let's build something
                <br />
                <em className="italic text-primary">great.</em>
              </h1>
            </div>
            <p className="md:col-span-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Tell us what you are building and where you need help. We will come back with a clear technical path and next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="section-paper">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 lg:pb-32">
          <div className="grid gap-px bg-border border border-border md:grid-cols-12">
            {/* Contact info column */}
            <div className="bg-background p-5 sm:p-8 lg:p-12 md:col-span-5">
              <div className="eyebrow text-primary">Direct lines</div>
              <div className="mt-8 space-y-7">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4 pb-6 border-b border-border last:border-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong shrink-0">
                      <item.icon className="h-4 w-4 text-foreground" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="eyebrow">{item.label}</div>
                      <div className="mt-1 font-display text-lg">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form column */}
            <form onSubmit={handleSubmit} className="bg-background p-8 lg:p-12 md:col-span-7 space-y-6">
              <Field label="Your Name">
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                  placeholder="Jane Doe"
                />
              </Field>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Email">
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                    placeholder="jane@company.com"
                  />
                </Field>
                <Field label="Budget">
                  <select
                    name="budget"
                    defaultValue=""
                    className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground focus:border-foreground focus:outline-none transition-colors"
                  >
                    <option value="" disabled>Select budget</option>
                    <option>Under $1,000</option>
                    <option>$1,000–$5,000</option>
                    <option>$5,000–$15,000</option>
                    <option>$15,000+</option>
                  </select>
                </Field>
              </div>

              <Field label="Service Needed">
                <select
                  name="service"
                  defaultValue=""
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground focus:border-foreground focus:outline-none transition-colors"
                >
                  <option value="" disabled>Select service</option>
                  <option>Mobile Development</option>
                  <option>Backend Engineering</option>
                  <option>Full-Stack Web</option>
                  <option>IoT &amp; Embedded</option>
                  <option>Cloud &amp; DevOps</option>
                  <option>Full Product Build</option>
                </select>
              </Field>

              <Field label="Project Details">
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, timeline, and any technical requirements…"
                />
              </Field>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background hover:bg-primary transition-colors disabled:opacity-60"
              >
                {status === "idle" && <>Send Message <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>}
                {status === "sending" && "Sending…"}
                {status === "sent" && "Message sent ✓"}
                {status === "error" && "Failed — try again"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow block mb-1">{label}</span>
      {children}
    </label>
  );
}
