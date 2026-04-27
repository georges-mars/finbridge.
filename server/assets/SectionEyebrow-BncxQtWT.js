import { jsxs, jsx } from "react/jsx-runtime";
function SectionEyebrow({ children, number }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
    number && /* @__PURE__ */ jsx("span", { className: "eyebrow text-foreground", children: number }),
    /* @__PURE__ */ jsxs("span", { className: "eyebrow", children: [
      "— ",
      children
    ] })
  ] });
}
export {
  SectionEyebrow as S
};
