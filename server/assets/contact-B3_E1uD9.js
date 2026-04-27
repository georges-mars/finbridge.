import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Mail, MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";
import { S as SectionEyebrow } from "./SectionEyebrow-BncxQtWT.js";
const contactInfo = [{
  icon: Mail,
  label: "Email",
  value: "georgesmars8@gmail.com"
}, {
  icon: MapPin,
  label: "Location",
  value: "Nairobi, Kenya — Remote Worldwide"
}, {
  icon: Clock,
  label: "Response Time",
  value: "Within 24 hours"
}, {
  icon: Phone,
  label: "Phone / WhatsApp",
  value: "+254 716 555 810"
}];
function ContactPage() {
  const [status, setStatus] = useState("idle");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xeevzyqn", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 4e3);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4e3);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4e3);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "section-paper border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-12 items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { number: "06", children: "Contact" }),
        /* @__PURE__ */ jsxs("h1", { className: "display-xl mt-6", children: [
          "Let's build something",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "italic text-primary", children: "great." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "md:col-span-5 text-base md:text-lg text-muted-foreground leading-relaxed", children: "Tell us what you are building and where you need help. We will come back with a clear technical path and next steps." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "section-paper", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 lg:pb-32", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-px bg-border border border-border md:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-background p-5 sm:p-8 lg:p-12 md:col-span-5", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow text-primary", children: "Direct lines" }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-7", children: contactInfo.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 pb-6 border-b border-border last:border-0", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full border border-border-strong shrink-0", children: /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4 text-foreground", strokeWidth: 1.5 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "eyebrow", children: item.label }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 font-display text-lg", children: item.value })
          ] })
        ] }, item.label)) })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "bg-background p-8 lg:p-12 md:col-span-7 space-y-6", children: [
        /* @__PURE__ */ jsx(Field, { label: "Your Name", children: /* @__PURE__ */ jsx("input", { required: true, name: "name", type: "text", className: "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors", placeholder: "Jane Doe" }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx(Field, { label: "Email", children: /* @__PURE__ */ jsx("input", { required: true, name: "email", type: "email", className: "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors", placeholder: "jane@company.com" }) }),
          /* @__PURE__ */ jsx(Field, { label: "Budget", children: /* @__PURE__ */ jsxs("select", { name: "budget", defaultValue: "", className: "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground focus:border-foreground focus:outline-none transition-colors", children: [
            /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select budget" }),
            /* @__PURE__ */ jsx("option", { children: "Under $1,000" }),
            /* @__PURE__ */ jsx("option", { children: "$1,000–$5,000" }),
            /* @__PURE__ */ jsx("option", { children: "$5,000–$15,000" }),
            /* @__PURE__ */ jsx("option", { children: "$15,000+" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(Field, { label: "Service Needed", children: /* @__PURE__ */ jsxs("select", { name: "service", defaultValue: "", className: "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground focus:border-foreground focus:outline-none transition-colors", children: [
          /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select service" }),
          /* @__PURE__ */ jsx("option", { children: "Mobile Development" }),
          /* @__PURE__ */ jsx("option", { children: "Backend Engineering" }),
          /* @__PURE__ */ jsx("option", { children: "Full-Stack Web" }),
          /* @__PURE__ */ jsx("option", { children: "IoT & Embedded" }),
          /* @__PURE__ */ jsx("option", { children: "Cloud & DevOps" }),
          /* @__PURE__ */ jsx("option", { children: "Full Product Build" })
        ] }) }),
        /* @__PURE__ */ jsx(Field, { label: "Project Details", children: /* @__PURE__ */ jsx("textarea", { required: true, name: "message", rows: 4, className: "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors resize-none", placeholder: "Tell us about your project, timeline, and any technical requirements…" }) }),
        /* @__PURE__ */ jsxs("button", { type: "submit", disabled: status === "sending", className: "group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background hover:bg-primary transition-colors disabled:opacity-60", children: [
          status === "idle" && /* @__PURE__ */ jsxs(Fragment, { children: [
            "Send Message ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
          ] }),
          status === "sending" && "Sending…",
          status === "sent" && "Message sent ✓",
          status === "error" && "Failed — try again"
        ] })
      ] })
    ] }) }) })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "eyebrow block mb-1", children: label }),
    children
  ] });
}
export {
  ContactPage as component
};
