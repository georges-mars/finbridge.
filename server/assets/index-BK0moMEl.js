import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { S as SectionEyebrow } from "./SectionEyebrow-BncxQtWT.js";
import { a as services, p as projects, b as processSteps } from "./site-BuatwE8F.js";
function HomePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "section-paper relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" }),
      /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-16 pb-20 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-44 text-center", children: /* @__PURE__ */ jsxs("div", { className: "animate-fade-up", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" }),
          "Available for new projects"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "display-xl mt-8 sm:mt-10 mx-auto max-w-5xl", children: [
          "Engineering systems",
          /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
          " ",
          "that ",
          /* @__PURE__ */ jsx("em", { className: "italic text-primary", children: "actually ship." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 mx-auto max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed", children: "A two-person engineering team covering everything from mobile apps and backend APIs to IoT firmware and hardware. Full-stack. Production-ready. End-to-end." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/projects", className: "inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background hover:bg-primary transition-colors", children: [
            "View Our Work",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full border border-border-strong bg-background px-7 py-3.5 text-sm font-medium text-foreground hover:border-foreground transition-colors", children: "Get in Touch" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "relative border-t border-border", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border border-x border-border text-center", children: [{
        n: "8+",
        label: "Combined Years"
      }, {
        n: "20+",
        label: "Projects Shipped"
      }, {
        n: "5+",
        label: "Industries Served"
      }, {
        n: "2",
        label: "Engineers, Full Stack"
      }].map((s) => /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:px-8 sm:py-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "font-display text-3xl sm:text-5xl md:text-6xl tracking-tight", children: [
          s.n.replace("+", ""),
          s.n.includes("+") && /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "+" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 eyebrow", children: s.label })
      ] }, s.label)) }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section-ink", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { number: "01", children: "What we believe" }),
        /* @__PURE__ */ jsxs("h2", { className: "display-lg mt-6", children: [
          "We don't just write code.",
          /* @__PURE__ */ jsx("br", {}),
          "We build ",
          /* @__PURE__ */ jsx("em", { className: "italic text-primary", children: "systems" }),
          " that survive production."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed", children: "For too long, software delivery has been overcomplicated and underdelivered. We work the other way around — clear architecture, fast iteration, and code shipped to real users." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-px bg-border border border-border", children: [{
        title: "Depth",
        desc: "Engineering depth across firmware, mobile, web, backend, and cloud — not surface-level coverage."
      }, {
        title: "Velocity",
        desc: "We ship fast, learn faster, and let real-world iteration compound the advantage."
      }, {
        title: "Ownership",
        desc: "We treat your product like our own — every decision begins with the user's reality in mind."
      }, {
        title: "Honesty",
        desc: "Direct, transparent communication. Clarity accelerates progress more than politeness ever will."
      }].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-ink p-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "eyebrow text-foreground", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-2xl md:text-3xl", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm md:text-base text-muted-foreground leading-relaxed", children: item.desc })
      ] }, item.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-paper", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-12 items-end", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
          /* @__PURE__ */ jsx(SectionEyebrow, { number: "02", children: "What we do" }),
          /* @__PURE__ */ jsxs("h2", { className: "display-lg mt-6", children: [
            "Full-spectrum",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("em", { className: "italic text-primary", children: "engineering." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "md:col-span-5 text-base text-muted-foreground leading-relaxed", children: "From cloud software to embedded firmware, we deliver complete systems that are production-ready from day one." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-px bg-border border border-border", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-px bg-border", children: services.map((s) => /* @__PURE__ */ jsxs("article", { className: "bg-background p-8 lg:p-10 group hover:bg-surface transition-colors", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsx(s.icon, { className: "h-7 w-7 text-foreground", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-8 font-display text-2xl", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: s.description }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-1.5", children: s.tags.map((t) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground", children: t }, t)) })
      ] }, s.title)) }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 text-sm font-medium text-foreground hover:gap-3 transition-all", children: [
        "All services ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-ink", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-12 items-end", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
          /* @__PURE__ */ jsx(SectionEyebrow, { number: "03", children: "Selected work" }),
          /* @__PURE__ */ jsxs("h2", { className: "display-lg mt-6", children: [
            "Projects we're",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("em", { className: "italic text-primary", children: "proud of." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "md:col-span-5 text-base text-muted-foreground leading-relaxed", children: "A mix of IoT products, mobile experiences, and real-world production systems delivered across multiple industries." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-px bg-border border border-border md:grid-cols-3", children: projects.slice(0, 3).map((p) => {
        const Icon = p.icon;
        return /* @__PURE__ */ jsxs("article", { className: "bg-ink p-8 lg:p-10 group", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "eyebrow text-primary", children: p.category }),
            /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-muted-foreground", strokeWidth: 1.5 })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-10 font-display text-2xl leading-tight", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-4", children: p.description }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-1.5", children: p.tags.slice(0, 4).map((t) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground", children: t }, t)) })
        ] }, p.title);
      }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/projects", className: "inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-2.5 text-sm font-medium hover:bg-background hover:text-paper-foreground transition-colors", children: [
        "See all projects ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-paper", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { number: "04", children: "How we work" }),
        /* @__PURE__ */ jsxs("h2", { className: "display-lg mt-6", children: [
          "A simple, transparent",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "italic text-primary", children: "delivery flow." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-4", children: processSteps.map((step) => /* @__PURE__ */ jsxs("div", { className: "bg-background p-10", children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-3xl sm:text-5xl text-primary italic", children: step.n }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 font-display text-2xl", children: step.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: step.description })
      ] }, step.n)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-ink", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32 text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "display-xl mx-auto max-w-4xl", children: [
        "Have a system to ",
        /* @__PURE__ */ jsx("em", { className: "italic text-primary", children: "build?" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 mx-auto max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed", children: "Tell us what you are building. We will come back with a clear technical path and next steps within 24 hours." }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-10 inline-flex items-center gap-2 rounded-full bg-background text-paper-foreground px-8 py-4 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors", children: [
        "Start a project ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) })
  ] });
}
export {
  HomePage as component
};
