import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as SectionEyebrow } from "./SectionEyebrow-BncxQtWT.js";
import { s as skillGroups } from "./site-BuatwE8F.js";
import "lucide-react";
function SkillsPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "section-paper border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-12 items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { number: "04", children: "Capabilities" }),
        /* @__PURE__ */ jsxs("h1", { className: "display-xl mt-6", children: [
          "What we",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "italic text-primary", children: "know deeply." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "md:col-span-5 text-base md:text-lg text-muted-foreground leading-relaxed", children: "Core engineering depth across backend systems, mobile and frontend platforms, embedded devices, and modern cloud operations." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "section-paper", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 lg:pb-32", children: /* @__PURE__ */ jsx("div", { className: "grid gap-px bg-border border border-border md:grid-cols-2", children: skillGroups.map((group) => /* @__PURE__ */ jsxs("div", { className: "bg-background p-8 lg:p-12", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow text-primary", children: group.title }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-7", children: group.skills.map((skill) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "font-display text-lg md:text-xl", children: skill.name }),
          /* @__PURE__ */ jsxs("span", { className: "text-xs font-mono text-muted-foreground", children: [
            skill.level,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 h-px bg-border relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 h-full bg-foreground transition-all duration-1000", style: {
          width: `${skill.level}%`
        } }) })
      ] }, skill.name)) })
    ] }, group.title)) }) }) })
  ] });
}
export {
  SkillsPage as component
};
