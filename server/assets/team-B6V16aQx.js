import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as SectionEyebrow } from "./SectionEyebrow-BncxQtWT.js";
import { t as team } from "./site-BuatwE8F.js";
import "lucide-react";
function TeamPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "section-paper border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-12 items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { number: "02", children: "The team" }),
        /* @__PURE__ */ jsxs("h1", { className: "display-xl mt-6", children: [
          "Two engineers,",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "italic text-primary", children: "one full stack." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "md:col-span-5 text-base md:text-lg text-muted-foreground leading-relaxed", children: "A focused two-person team that can move quickly across product, platform, firmware, and infrastructure." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "section-paper", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 lg:pb-32", children: /* @__PURE__ */ jsx("div", { className: "grid gap-px bg-border border border-border md:grid-cols-2", children: team.map((member) => /* @__PURE__ */ jsxs("article", { className: "bg-background p-6 sm:p-10 lg:p-14", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-full border border-border-strong bg-surface font-display text-2xl sm:text-3xl text-primary italic", children: member.initials }),
      /* @__PURE__ */ jsx("h3", { className: "mt-6 sm:mt-8 font-display text-2xl sm:text-3xl md:text-4xl", children: member.name }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 eyebrow text-primary", children: member.role }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-sm md:text-base text-muted-foreground leading-relaxed", children: member.bio }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-border", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow mb-4", children: "Stack" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: member.tags.map((t) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border px-2.5 py-1 text-[11px] font-mono text-muted-foreground", children: t }, t)) })
      ] })
    ] }, member.name)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "section-ink", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-12 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { number: "03", children: "Who you'll be working with" }),
        /* @__PURE__ */ jsxs("h2", { className: "display-lg mt-6", children: [
          "The ",
          /* @__PURE__ */ jsx("em", { className: "italic text-primary", children: "culture code." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 rounded-2xl border border-border-strong p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl", children: "High talent density" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: "A lean team of exceptional engineers moves faster and solves unstructured problems more effectively." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-7 divide-y divide-border", children: [{
        title: "Velocity over perfection",
        desc: "We ship fast, learn faster, and let iteration compound our advantage."
      }, {
        title: "First-principles thinking",
        desc: "We design systems from fundamentals — not legacy conventions."
      }, {
        title: "Client obsession",
        desc: "Every system, every detail, every decision begins with the client's reality in mind."
      }, {
        title: "Honesty over niceness",
        desc: "We communicate directly and transparently — because clarity accelerates progress."
      }, {
        title: "Craft as character",
        desc: "Our work reflects who we are — thoughtful, precise, and deeply intentional."
      }].map((v) => /* @__PURE__ */ jsxs("div", { className: "py-6 first:pt-0", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl", children: v.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm md:text-base text-muted-foreground leading-relaxed", children: v.desc })
      ] }, v.title)) })
    ] }) }) })
  ] });
}
export {
  TeamPage as component
};
