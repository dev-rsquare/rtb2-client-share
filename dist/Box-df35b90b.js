import { s as y, a as g, u as T, e as b, b as B, _ as C, g as N, c as v, T as _, C as P, P as a } from "./createTheme-c26d6c87.js";
import * as j from "react";
import { jsx as E } from "react/jsx-runtime";
function m(o) {
  var s, t, e = "";
  if (typeof o == "string" || typeof o == "number")
    e += o;
  else if (typeof o == "object")
    if (Array.isArray(o)) {
      var r = o.length;
      for (s = 0; s < r; s++)
        o[s] && (t = m(o[s])) && (e && (e += " "), e += t);
    } else
      for (t in o)
        o[t] && (e && (e += " "), e += t);
  return e;
}
function M() {
  for (var o, s, t = 0, e = "", r = arguments.length; t < r; t++)
    (o = arguments[t]) && (s = m(o)) && (e && (e += " "), e += s);
  return e;
}
const O = ["className", "component"];
function I(o = {}) {
  const {
    themeId: s,
    defaultTheme: t,
    defaultClassName: e = "MuiBox-root",
    generateClassName: r
  } = o, f = y("div", {
    shouldForwardProp: (n) => n !== "theme" && n !== "sx" && n !== "as"
  })(g);
  return /* @__PURE__ */ j.forwardRef(function(i, x) {
    const c = T(t), l = b(i), {
      className: d,
      component: p = "div"
    } = l, h = B(l, O);
    return /* @__PURE__ */ E(f, C({
      as: p,
      ref: x,
      className: M(d, r ? r(e) : e),
      theme: s && c[s] || c
    }, h));
  });
}
function R(o, s, t = "Mui") {
  const e = {};
  return s.forEach((r) => {
    e[r] = N(o, r, t);
  }), e;
}
const S = R("MuiBox", ["root"]), w = S, A = v(), u = I({
  themeId: _,
  defaultTheme: A,
  defaultClassName: w.root,
  generateClassName: P.generate
});
process.env.NODE_ENV !== "production" && (u.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: a.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const $ = u;
export {
  $ as B,
  w as b,
  M as c,
  R as g
};
