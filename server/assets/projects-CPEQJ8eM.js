import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as SectionEyebrow } from "./SectionEyebrow-BncxQtWT.js";
import { p as projects } from "./site-BuatwE8F.js";
import "lucide-react";
function ProjectsPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "section-paper border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-12 items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { number: "03", children: "Selected work" }),
        /* @__PURE__ */ jsxs("h1", { className: "display-xl mt-6", children: [
          "Projects we're",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "italic text-primary", children: "proud of." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "md:col-span-5 text-base md:text-lg text-muted-foreground leading-relaxed", children: "A mix of IoT products, mobile experiences, and real-world production systems delivered across multiple industries." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "section-paper", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 lg:pb-32", children: /* @__PURE__ */ jsx("div", { className: "grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3", children: projects.map((p, i) => {
      const Icon = p.icon;
      return /* @__PURE__ */ jsxs("article", { className: "bg-background p-8 lg:p-10 group hover:bg-surface transition-colors", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow text-primary", children: p.category }),
          /* @__PURE__ */ jsxs("span", { className: "font-mono text-[11px] text-muted-foreground", children: [
            "0",
            i + 1
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 mb-10 flex h-36 items-center justify-center border border-border bg-surface group-hover:border-primary/40 transition-colors", children: /* @__PURE__ */ jsx(Icon, { className: "h-10 w-10 text-foreground group-hover:text-primary group-hover:scale-110 transition-all", strokeWidth: 1.25 }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl leading-tight", children: p.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: p.description }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-1.5", children: p.tags.map((t) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground", children: t }, t)) })
      ] }, p.title);
    }) }) }) })
  ] });
}
export {
  ProjectsPage as component
};
