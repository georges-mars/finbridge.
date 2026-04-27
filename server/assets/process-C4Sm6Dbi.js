import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as SectionEyebrow } from "./SectionEyebrow-BncxQtWT.js";
import { b as processSteps } from "./site-BuatwE8F.js";
import "lucide-react";
function ProcessPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "section-paper border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-12 items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { number: "05", children: "How we work" }),
        /* @__PURE__ */ jsxs("h1", { className: "display-xl mt-6", children: [
          "Our",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "italic text-primary", children: "process." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "md:col-span-5 text-base md:text-lg text-muted-foreground leading-relaxed", children: "A simple, transparent delivery flow designed for fast iteration and reliable production outcomes." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "section-paper", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 lg:pb-32", children: /* @__PURE__ */ jsx("div", { className: "grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-4", children: processSteps.map((step) => /* @__PURE__ */ jsxs("div", { className: "bg-background p-6 sm:p-10 lg:p-12", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-4xl sm:text-6xl text-primary italic", children: step.n }),
      /* @__PURE__ */ jsx("h3", { className: "mt-8 font-display text-2xl md:text-3xl", children: step.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: step.description })
    ] }, step.n)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "section-ink", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "What you get" }),
        /* @__PURE__ */ jsxs("h2", { className: "display-lg mt-6", children: [
          "Production-grade,",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "italic text-primary", children: "always." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-7 grid gap-6 md:grid-cols-2", children: [{
        t: "Clear architecture docs",
        d: "API contracts, data models, and deployment plans you can actually read."
      }, {
        t: "Working software weekly",
        d: "Demo every week. No surprises at the end of a sprint or a quarter."
      }, {
        t: "Code you can maintain",
        d: "Typed, tested, and documented. Built so the next engineer can take it forward."
      }, {
        t: "Hands-on support",
        d: "Post-launch monitoring, fixes, and feature growth — we don't disappear."
      }].map((v) => /* @__PURE__ */ jsxs("div", { className: "border-t border-border pt-5", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl", children: v.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: v.d })
      ] }, v.t)) })
    ] }) }) })
  ] });
}
export {
  ProcessPage as component
};
