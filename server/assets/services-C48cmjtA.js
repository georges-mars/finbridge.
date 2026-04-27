import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { ArrowUpRight } from "lucide-react";
import { S as SectionEyebrow } from "./SectionEyebrow-BncxQtWT.js";
import { a as services } from "./site-BuatwE8F.js";
function ServicesPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "section-paper border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-12 items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { number: "01", children: "What we do" }),
        /* @__PURE__ */ jsxs("h1", { className: "display-xl mt-6", children: [
          "Full-spectrum",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "italic text-primary", children: "engineering." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "md:col-span-5 text-base md:text-lg text-muted-foreground leading-relaxed", children: "From cloud software to embedded firmware, we deliver complete systems that are production-ready from day one." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "section-paper", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 lg:pb-32", children: /* @__PURE__ */ jsx("div", { className: "grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3", children: services.map((s) => /* @__PURE__ */ jsxs("article", { className: "bg-background p-8 lg:p-10 group hover:bg-surface transition-colors", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsx(s.icon, { className: "h-7 w-7 text-foreground", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "mt-8 font-display text-2xl md:text-3xl", children: s.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm md:text-base text-muted-foreground leading-relaxed", children: s.description }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-1.5", children: s.tags.map((t) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground", children: t }, t)) })
    ] }, s.title)) }) }) })
  ] });
}
export {
  ServicesPage as component
};
