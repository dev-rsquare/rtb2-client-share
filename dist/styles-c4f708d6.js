import { n as te, j as Vt, h as Ft, f as jt, M as yt, N as Nt, a as Ge, e as Bt, O as Lt, Q as St, b as v, u as vt, y as X, x as Wt, P as x, k as Ut, R as zt, _ as Q, G as Be, U as qt, c as Me, T as ie, V as re, W as Yt, X as Gt, Y as Ht, Z as k, $ as P, a0 as xe, a1 as Oe, a2 as me, a3 as Kt, K as Xt } from "./createTheme-3a6629d7.js";
import * as A from "react";
import { jsx as q, jsxs as ot } from "react/jsx-runtime";
const Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: te,
  isPlainObject: Vt
}, Symbol.toStringTag, { value: "Module" })), Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ft
}, Symbol.toStringTag, { value: "Module" })), Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jt,
  private_createBreakpoints: yt,
  unstable_applyStyles: Nt
}, Symbol.toStringTag, { value: "Module" })), er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ge,
  extendSxProp: Bt,
  unstable_createStyleFunctionSx: Lt,
  unstable_defaultSxConfig: St
}, Symbol.toStringTag, { value: "Module" }));
var ze = { exports: {} }, T = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nt;
function tr() {
  if (nt)
    return T;
  nt = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), d = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), _;
  _ = Symbol.for("react.module.reference");
  function p(i) {
    if (typeof i == "object" && i !== null) {
      var f = i.$$typeof;
      switch (f) {
        case e:
          switch (i = i.type, i) {
            case o:
            case a:
            case n:
            case h:
            case y:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case d:
                case u:
                case c:
                case O:
                case $:
                case l:
                  return i;
                default:
                  return f;
              }
          }
        case t:
          return f;
      }
    }
  }
  return T.ContextConsumer = u, T.ContextProvider = l, T.Element = e, T.ForwardRef = c, T.Fragment = o, T.Lazy = O, T.Memo = $, T.Portal = t, T.Profiler = a, T.StrictMode = n, T.Suspense = h, T.SuspenseList = y, T.isAsyncMode = function() {
    return !1;
  }, T.isConcurrentMode = function() {
    return !1;
  }, T.isContextConsumer = function(i) {
    return p(i) === u;
  }, T.isContextProvider = function(i) {
    return p(i) === l;
  }, T.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === e;
  }, T.isForwardRef = function(i) {
    return p(i) === c;
  }, T.isFragment = function(i) {
    return p(i) === o;
  }, T.isLazy = function(i) {
    return p(i) === O;
  }, T.isMemo = function(i) {
    return p(i) === $;
  }, T.isPortal = function(i) {
    return p(i) === t;
  }, T.isProfiler = function(i) {
    return p(i) === a;
  }, T.isStrictMode = function(i) {
    return p(i) === n;
  }, T.isSuspense = function(i) {
    return p(i) === h;
  }, T.isSuspenseList = function(i) {
    return p(i) === y;
  }, T.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === o || i === a || i === n || i === h || i === y || i === C || typeof i == "object" && i !== null && (i.$$typeof === O || i.$$typeof === $ || i.$$typeof === l || i.$$typeof === u || i.$$typeof === c || i.$$typeof === _ || i.getModuleId !== void 0);
  }, T.typeOf = p, T;
}
var w = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function rr() {
  return st || (st = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), d = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), _ = !1, p = !1, i = !1, f = !1, b = !1, I;
    I = Symbol.for("react.module.reference");
    function V(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === o || g === a || b || g === n || g === h || g === y || f || g === C || _ || p || i || typeof g == "object" && g !== null && (g.$$typeof === O || g.$$typeof === $ || g.$$typeof === l || g.$$typeof === u || g.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === I || g.getModuleId !== void 0));
    }
    function S(g) {
      if (typeof g == "object" && g !== null) {
        var se = g.$$typeof;
        switch (se) {
          case e:
            var W = g.type;
            switch (W) {
              case o:
              case a:
              case n:
              case h:
              case y:
                return W;
              default:
                var j = W && W.$$typeof;
                switch (j) {
                  case d:
                  case u:
                  case c:
                  case O:
                  case $:
                  case l:
                    return j;
                  default:
                    return se;
                }
            }
          case t:
            return se;
        }
      }
    }
    var r = u, m = l, E = e, M = c, F = o, R = O, D = $, Y = t, H = a, J = n, oe = h, le = y, ne = !1, ce = !1;
    function Se(g) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ue(g) {
      return ce || (ce = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function De(g) {
      return S(g) === u;
    }
    function ve(g) {
      return S(g) === l;
    }
    function de(g) {
      return typeof g == "object" && g !== null && g.$$typeof === e;
    }
    function Ve(g) {
      return S(g) === c;
    }
    function fe(g) {
      return S(g) === o;
    }
    function be(g) {
      return S(g) === O;
    }
    function Ce(g) {
      return S(g) === $;
    }
    function Fe(g) {
      return S(g) === t;
    }
    function _e(g) {
      return S(g) === a;
    }
    function Ee(g) {
      return S(g) === n;
    }
    function $e(g) {
      return S(g) === h;
    }
    function Te(g) {
      return S(g) === y;
    }
    w.ContextConsumer = r, w.ContextProvider = m, w.Element = E, w.ForwardRef = M, w.Fragment = F, w.Lazy = R, w.Memo = D, w.Portal = Y, w.Profiler = H, w.StrictMode = J, w.Suspense = oe, w.SuspenseList = le, w.isAsyncMode = Se, w.isConcurrentMode = ue, w.isContextConsumer = De, w.isContextProvider = ve, w.isElement = de, w.isForwardRef = Ve, w.isFragment = fe, w.isLazy = be, w.isMemo = Ce, w.isPortal = Fe, w.isProfiler = _e, w.isStrictMode = Ee, w.isSuspense = $e, w.isSuspenseList = Te, w.isValidElementType = V, w.typeOf = S;
  }()), w;
}
process.env.NODE_ENV === "production" ? ze.exports = tr() : ze.exports = rr();
var it = ze.exports;
const or = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function bt(e) {
  const t = `${e}`.match(or);
  return t && t[1] || "";
}
function Ct(e, t = "") {
  return e.displayName || e.name || bt(e) || t;
}
function at(e, t, o) {
  const n = Ct(t);
  return e.displayName || (n !== "" ? `${o}(${n})` : o);
}
function nr(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ct(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case it.ForwardRef:
          return at(e, e.render, "ForwardRef");
        case it.Memo:
          return at(e, e.type, "memo");
        default:
          return;
      }
  }
}
const sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nr,
  getFunctionName: bt
}, Symbol.toStringTag, { value: "Module" }));
function _t(e, t) {
  const o = v({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      o[n] = v({}, e[n], o[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const a = e[n] || {}, l = t[n];
      o[n] = {}, !l || !Object.keys(l) ? o[n] = a : !a || !Object.keys(a) ? o[n] = l : (o[n] = v({}, l), Object.keys(a).forEach((u) => {
        o[n][u] = _t(a[u], l[u]);
      }));
    } else
      o[n] === void 0 && (o[n] = e[n]);
  }), o;
}
function ir(e) {
  const {
    theme: t,
    name: o,
    props: n
  } = e;
  return !t || !t.components || !t.components[o] || !t.components[o].defaultProps ? n : _t(t.components[o].defaultProps, n);
}
function ar({
  props: e,
  name: t,
  defaultTheme: o,
  themeId: n
}) {
  let a = vt(o);
  return n && (a = a[n] || a), ir({
    theme: a,
    name: t,
    props: e
  });
}
function He(e, t = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), Wt(e, t, o);
}
function lr(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((n) => n + n)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((n, a) => a < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function cr(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Z(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Z(lr(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(o) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : X(9, e));
  let n = e.substring(t + 1, e.length - 1), a;
  if (o === "color") {
    if (n = n.split(" "), a = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(a) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${a}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : X(10, a));
  } else
    n = n.split(",");
  return n = n.map((l) => parseFloat(l)), {
    type: o,
    values: n,
    colorSpace: a
  };
}
function Ie(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((a, l) => l < 3 ? parseInt(a, 10) : a) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${o} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function wo(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = Z(e);
  return `#${t.map((o, n) => cr(n === 3 ? Math.round(255 * o) : o)).join("")}`;
}
function ur(e) {
  e = Z(e);
  const {
    values: t
  } = e, o = t[0], n = t[1] / 100, a = t[2] / 100, l = n * Math.min(a, 1 - a), u = (h, y = (h + o / 30) % 12) => a - l * Math.max(Math.min(y - 3, 9 - y, 1), -1);
  let d = "rgb";
  const c = [Math.round(u(0) * 255), Math.round(u(8) * 255), Math.round(u(4) * 255)];
  return e.type === "hsla" && (d += "a", c.push(t[3])), Ie({
    type: d,
    values: c
  });
}
function qe(e) {
  e = Z(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Z(ur(e)).values : e.values;
  return t = t.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function xo(e, t) {
  const o = qe(e), n = qe(t);
  return (Math.max(o, n) + 0.05) / (Math.min(o, n) + 0.05);
}
function Oo(e, t) {
  return e = Z(e), t = He(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Ie(e);
}
function dr(e, t) {
  if (e = Z(e), t = He(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - t;
  return Ie(e);
}
function fr(e, t) {
  if (e = Z(e), t = He(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * t;
  return Ie(e);
}
function ko(e, t = 0.15) {
  return qe(e) > 0.5 ? dr(e, t) : fr(e, t);
}
const mr = "exact-prop: ​";
function Et(e) {
  return process.env.NODE_ENV === "production" ? e : v({}, e, {
    [mr]: (t) => {
      const o = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return o.length > 0 ? new Error(`The following props are not supported: ${o.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
const $t = /* @__PURE__ */ A.createContext(null);
process.env.NODE_ENV !== "production" && ($t.displayName = "ThemeContext");
const Tt = $t;
function Ke() {
  const e = A.useContext(Tt);
  return process.env.NODE_ENV !== "production" && A.useDebugValue(e), e;
}
const pr = typeof Symbol == "function" && Symbol.for, hr = pr ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function gr(e, t) {
  if (typeof t == "function") {
    const o = t(e);
    return process.env.NODE_ENV !== "production" && (o || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), o;
  }
  return v({}, e, t);
}
function Re(e) {
  const {
    children: t,
    theme: o
  } = e, n = Ke();
  process.env.NODE_ENV !== "production" && n === null && typeof o == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = A.useMemo(() => {
    const l = n === null ? o : gr(n, o);
    return l != null && (l[hr] = n !== null), l;
  }, [o, n]);
  return /* @__PURE__ */ q(Tt.Provider, {
    value: a,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Re.propTypes = {
  /**
   * Your component tree.
   */
  children: x.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: x.oneOfType([x.object, x.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Re.propTypes = Et(Re.propTypes));
const lt = {};
function ct(e, t, o, n = !1) {
  return A.useMemo(() => {
    const a = e && t[e] || t;
    if (typeof o == "function") {
      const l = o(a), u = e ? v({}, t, {
        [e]: l
      }) : l;
      return n ? () => u : u;
    }
    return e ? v({}, t, {
      [e]: o
    }) : v({}, t, o);
  }, [e, t, o, n]);
}
function he(e) {
  const {
    children: t,
    theme: o,
    themeId: n
  } = e, a = Ut(lt), l = Ke() || lt;
  process.env.NODE_ENV !== "production" && (a === null && typeof o == "function" || n && a && !a[n] && typeof o == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const u = ct(n, a, o), d = ct(n, l, o, !0);
  return /* @__PURE__ */ q(Re, {
    theme: d,
    children: /* @__PURE__ */ q(zt.Provider, {
      value: u,
      children: t
    })
  });
}
process.env.NODE_ENV !== "production" && (he.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: x.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: x.oneOfType([x.func, x.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: x.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (he.propTypes = Et(he.propTypes));
const Xe = "mode", Qe = "color-scheme", wt = "data-color-scheme";
function yr(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: o = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: a = Xe,
    colorSchemeStorageKey: l = Qe,
    attribute: u = wt,
    colorSchemeNode: d = "document.documentElement"
  } = e || {};
  return /* @__PURE__ */ q("script", {
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  var mode = localStorage.getItem('${a}') || '${t}';
  var colorScheme = '';
  if (mode === 'system') {
    // handle system mode
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = localStorage.getItem('${l}-dark') || '${n}';
    } else {
      colorScheme = localStorage.getItem('${l}-light') || '${o}';
    }
  }
  if (mode === 'light') {
    colorScheme = localStorage.getItem('${l}-light') || '${o}';
  }
  if (mode === 'dark') {
    colorScheme = localStorage.getItem('${l}-dark') || '${n}';
  }
  if (colorScheme) {
    ${d}.setAttribute('${u}', colorScheme);
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function ut(e) {
  if (typeof window < "u" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function xt(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Sr(e) {
  return xt(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Le(e, t) {
  if (typeof window > "u")
    return;
  let o;
  try {
    o = localStorage.getItem(e) || void 0, o || localStorage.setItem(e, t);
  } catch {
  }
  return o || t;
}
function vr(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: o,
    defaultDarkColorScheme: n,
    supportedColorSchemes: a = [],
    modeStorageKey: l = Xe,
    colorSchemeStorageKey: u = Qe,
    storageWindow: d = typeof window > "u" ? void 0 : window
  } = e, c = a.join(","), [h, y] = A.useState(() => {
    const i = Le(l, t), f = Le(`${u}-light`, o), b = Le(`${u}-dark`, n);
    return {
      mode: i,
      systemMode: ut(i),
      lightColorScheme: f,
      darkColorScheme: b
    };
  }), $ = Sr(h), O = A.useCallback((i) => {
    y((f) => {
      if (i === f.mode)
        return f;
      const b = i || t;
      try {
        localStorage.setItem(l, b);
      } catch {
      }
      return v({}, f, {
        mode: b,
        systemMode: ut(b)
      });
    });
  }, [l, t]), C = A.useCallback((i) => {
    i ? typeof i == "string" ? i && !c.includes(i) ? console.error(`\`${i}\` does not exist in \`theme.colorSchemes\`.`) : y((f) => {
      const b = v({}, f);
      return xt(f, (I) => {
        try {
          localStorage.setItem(`${u}-${I}`, i);
        } catch {
        }
        I === "light" && (b.lightColorScheme = i), I === "dark" && (b.darkColorScheme = i);
      }), b;
    }) : y((f) => {
      const b = v({}, f), I = i.light === null ? o : i.light, V = i.dark === null ? n : i.dark;
      if (I)
        if (!c.includes(I))
          console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          b.lightColorScheme = I;
          try {
            localStorage.setItem(`${u}-light`, I);
          } catch {
          }
        }
      if (V)
        if (!c.includes(V))
          console.error(`\`${V}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          b.darkColorScheme = V;
          try {
            localStorage.setItem(`${u}-dark`, V);
          } catch {
          }
        }
      return b;
    }) : y((f) => {
      try {
        localStorage.setItem(`${u}-light`, o), localStorage.setItem(`${u}-dark`, n);
      } catch {
      }
      return v({}, f, {
        lightColorScheme: o,
        darkColorScheme: n
      });
    });
  }, [c, u, o, n]), _ = A.useCallback((i) => {
    h.mode === "system" && y((f) => v({}, f, {
      systemMode: i != null && i.matches ? "dark" : "light"
    }));
  }, [h.mode]), p = A.useRef(_);
  return p.current = _, A.useEffect(() => {
    const i = (...b) => p.current(...b), f = window.matchMedia("(prefers-color-scheme: dark)");
    return f.addListener(i), i(f), () => f.removeListener(i);
  }, []), A.useEffect(() => {
    const i = (f) => {
      const b = f.newValue;
      typeof f.key == "string" && f.key.startsWith(u) && (!b || c.match(b)) && (f.key.endsWith("light") && C({
        light: b
      }), f.key.endsWith("dark") && C({
        dark: b
      })), f.key === l && (!b || ["light", "dark", "system"].includes(b)) && O(b || t);
    };
    if (d)
      return d.addEventListener("storage", i), () => d.removeEventListener("storage", i);
  }, [C, O, l, u, c, t, d]), v({}, h, {
    colorScheme: $,
    setMode: O,
    setColorScheme: C
  });
}
const br = ["colorSchemes", "components", "generateCssVars", "cssVarPrefix"], Cr = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function _r(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: o = {},
    attribute: n = wt,
    modeStorageKey: a = Xe,
    colorSchemeStorageKey: l = Qe,
    defaultMode: u = "light",
    defaultColorScheme: d,
    disableTransitionOnChange: c = !1,
    resolveTheme: h,
    excludeVariablesFromRoot: y
  } = e;
  (!o.colorSchemes || typeof d == "string" && !o.colorSchemes[d] || typeof d == "object" && !o.colorSchemes[d == null ? void 0 : d.light] || typeof d == "object" && !o.colorSchemes[d == null ? void 0 : d.dark]) && console.error(`MUI: \`${d}\` does not exist in \`theme.colorSchemes\`.`);
  const $ = /* @__PURE__ */ A.createContext(void 0);
  process.env.NODE_ENV !== "production" && ($.displayName = "ColorSchemeContext");
  const O = () => {
    const f = A.useContext($);
    if (!f)
      throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `useColorScheme` must be called under <CssVarsProvider />" : X(19));
    return f;
  };
  function C({
    children: f,
    theme: b = o,
    modeStorageKey: I = a,
    colorSchemeStorageKey: V = l,
    attribute: S = n,
    defaultMode: r = u,
    defaultColorScheme: m = d,
    disableTransitionOnChange: E = c,
    storageWindow: M = typeof window > "u" ? void 0 : window,
    documentNode: F = typeof document > "u" ? void 0 : document,
    colorSchemeNode: R = typeof document > "u" ? void 0 : document.documentElement,
    colorSchemeSelector: D = ":root",
    disableNestedContext: Y = !1,
    disableStyleSheetGeneration: H = !1
  }) {
    const J = A.useRef(!1), oe = Ke(), le = A.useContext($), ne = !!le && !Y, ce = b[t], Se = ce || b, {
      colorSchemes: ue = {},
      components: De = {},
      generateCssVars: ve = () => ({
        vars: {},
        css: {}
      }),
      cssVarPrefix: de
    } = Se, Ve = Q(Se, br), fe = Object.keys(ue), be = typeof m == "string" ? m : m.light, Ce = typeof m == "string" ? m : m.dark, {
      mode: Fe,
      setMode: _e,
      systemMode: Ee,
      lightColorScheme: $e,
      darkColorScheme: Te,
      colorScheme: g,
      setColorScheme: se
    } = vr({
      supportedColorSchemes: fe,
      defaultLightColorScheme: be,
      defaultDarkColorScheme: Ce,
      modeStorageKey: I,
      colorSchemeStorageKey: V,
      defaultMode: r,
      storageWindow: M
    });
    let W = Fe, j = g;
    ne && (W = le.mode, j = le.colorScheme);
    const Pt = (() => W || (r === "system" ? u : r))(), At = (() => j || (Pt === "dark" ? Ce : be))(), {
      css: Mt,
      vars: Je
    } = ve(), L = v({}, Ve, {
      components: De,
      colorSchemes: ue,
      cssVarPrefix: de,
      vars: Je,
      getColorSchemeSelector: (N) => `[${S}="${N}"] &`
    }), je = {}, et = {};
    Object.entries(ue).forEach(([N, G]) => {
      const {
        css: we,
        vars: It
      } = ve(N);
      L.vars = te(L.vars, It), N === At && (Object.keys(G).forEach((U) => {
        G[U] && typeof G[U] == "object" ? L[U] = v({}, L[U], G[U]) : L[U] = G[U];
      }), L.palette && (L.palette.colorScheme = N));
      const Dt = (() => typeof m == "string" ? m : r === "dark" ? m.dark : m.light)();
      if (N === Dt) {
        if (y) {
          const U = {};
          y(de).forEach((Ne) => {
            U[Ne] = we[Ne], delete we[Ne];
          }), je[`[${S}="${N}"]`] = U;
        }
        je[`${D}, [${S}="${N}"]`] = we;
      } else
        et[`${D === ":root" ? "" : D}[${S}="${N}"]`] = we;
    }), L.vars = te(L.vars, Je), A.useEffect(() => {
      j && R && R.setAttribute(S, j);
    }, [j, S, R]), A.useEffect(() => {
      let N;
      if (E && J.current && F) {
        const G = F.createElement("style");
        G.appendChild(F.createTextNode(Cr)), F.head.appendChild(G), window.getComputedStyle(F.body), N = setTimeout(() => {
          F.head.removeChild(G);
        }, 1);
      }
      return () => {
        clearTimeout(N);
      };
    }, [j, E, F]), A.useEffect(() => (J.current = !0, () => {
      J.current = !1;
    }), []);
    const Rt = A.useMemo(() => ({
      mode: W,
      systemMode: Ee,
      setMode: _e,
      lightColorScheme: $e,
      darkColorScheme: Te,
      colorScheme: j,
      setColorScheme: se,
      allColorSchemes: fe
    }), [fe, j, Te, $e, W, se, _e, Ee]);
    let tt = !0;
    (H || ne && (oe == null ? void 0 : oe.cssVarPrefix) === de) && (tt = !1);
    const rt = /* @__PURE__ */ ot(A.Fragment, {
      children: [tt && /* @__PURE__ */ ot(A.Fragment, {
        children: [/* @__PURE__ */ q(Be, {
          styles: {
            [D]: Mt
          }
        }), /* @__PURE__ */ q(Be, {
          styles: je
        }), /* @__PURE__ */ q(Be, {
          styles: et
        })]
      }), /* @__PURE__ */ q(he, {
        themeId: ce ? t : void 0,
        theme: h ? h(L) : L,
        children: f
      })]
    });
    return ne ? rt : /* @__PURE__ */ q($.Provider, {
      value: Rt,
      children: rt
    });
  }
  process.env.NODE_ENV !== "production" && (C.propTypes = {
    /**
     * The body attribute name to attach colorScheme.
     */
    attribute: x.string,
    /**
     * The component tree.
     */
    children: x.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: x.any,
    /**
     * The CSS selector for attaching the generated custom properties
     */
    colorSchemeSelector: x.string,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: x.string,
    /**
     * The initial color scheme used.
     */
    defaultColorScheme: x.oneOfType([x.string, x.object]),
    /**
     * The initial mode used.
     */
    defaultMode: x.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: x.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: x.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: x.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: x.any,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: x.string,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: x.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: x.object
  });
  const _ = typeof d == "string" ? d : d.light, p = typeof d == "string" ? d : d.dark;
  return {
    CssVarsProvider: C,
    useColorScheme: O,
    getInitColorSchemeScript: (f) => yr(v({
      attribute: n,
      colorSchemeStorageKey: l,
      defaultMode: u,
      defaultLightColorScheme: _,
      defaultDarkColorScheme: p,
      modeStorageKey: a
    }, f))
  };
}
function Er(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const a = n[0];
    return typeof a == "string" && !a.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${a}${t(...n.slice(1))})` : `, ${a}`;
  }
  return (n, ...a) => `var(--${e ? `${e}-` : ""}${n}${t(...a)})`;
}
const dt = (e, t, o, n = []) => {
  let a = e;
  t.forEach((l, u) => {
    u === t.length - 1 ? Array.isArray(a) ? a[Number(l)] = o : a && typeof a == "object" && (a[l] = o) : a && typeof a == "object" && (a[l] || (a[l] = n.includes(l) ? [] : {}), a = a[l]);
  });
}, $r = (e, t, o) => {
  function n(a, l = [], u = []) {
    Object.entries(a).forEach(([d, c]) => {
      (!o || o && !o([...l, d])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? n(c, [...l, d], Array.isArray(c) ? [...u, d] : u) : t([...l, d], c, u));
    });
  }
  n(e);
}, Tr = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0 ? t : `${t}px` : t;
function We(e, t) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: n
  } = t || {}, a = {}, l = {}, u = {};
  return $r(
    e,
    (d, c, h) => {
      if ((typeof c == "string" || typeof c == "number") && (!n || !n(d, c))) {
        const y = `--${o ? `${o}-` : ""}${d.join("-")}`;
        Object.assign(a, {
          [y]: Tr(d, c)
        }), dt(l, d, `var(${y})`, h), dt(u, d, `var(${y}, ${c})`, h);
      }
    },
    (d) => d[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: a,
    vars: l,
    varsWithDefaults: u
  };
}
function ge(e) {
  "@babel/helpers - typeof";
  return ge = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ge(e);
}
function wr(e, t) {
  if (ge(e) != "object" || !e)
    return e;
  var o = e[Symbol.toPrimitive];
  if (o !== void 0) {
    var n = o.call(e, t || "default");
    if (ge(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xr(e) {
  var t = wr(e, "string");
  return ge(t) == "symbol" ? t : String(t);
}
const Or = ["colorSchemes", "components", "defaultColorScheme"];
function kr(e, t) {
  const {
    colorSchemes: o = {},
    defaultColorScheme: n = "light"
  } = e, a = Q(e, Or), {
    vars: l,
    css: u,
    varsWithDefaults: d
  } = We(a, t);
  let c = d;
  const h = {}, {
    [n]: y
  } = o, $ = Q(o, [n].map(xr));
  if (Object.entries($ || {}).forEach(([C, _]) => {
    const {
      vars: p,
      css: i,
      varsWithDefaults: f
    } = We(_, t);
    c = te(c, f), h[C] = {
      css: i,
      vars: p
    };
  }), y) {
    const {
      css: C,
      vars: _,
      varsWithDefaults: p
    } = We(y, t);
    c = te(c, p), h[n] = {
      css: C,
      vars: _
    };
  }
  return {
    vars: c,
    generateCssVars: (C) => {
      var _;
      if (!C) {
        var p;
        const f = v({}, u);
        return {
          css: f,
          vars: l,
          selector: (t == null || (p = t.getSelector) == null ? void 0 : p.call(t, C, f)) || ":root"
        };
      }
      const i = v({}, h[C].css);
      return {
        css: i,
        vars: h[C].vars,
        selector: (t == null || (_ = t.getSelector) == null ? void 0 : _.call(t, C, i)) || ":root"
      };
    }
  };
}
const Pr = ["defaultProps", "mixins", "overrides", "palette", "props", "styleOverrides"], Ar = ["type", "mode"];
function Po(e) {
  process.env.NODE_ENV !== "production" && console.warn(["MUI: adaptV4Theme() is deprecated.", "Follow the upgrade guide on https://mui.com/r/migration-v4#theme."].join(`
`));
  const {
    defaultProps: t = {},
    mixins: o = {},
    overrides: n = {},
    palette: a = {},
    props: l = {},
    styleOverrides: u = {}
  } = e, d = Q(e, Pr), c = v({}, d, {
    components: {}
  });
  Object.keys(t).forEach((p) => {
    const i = c.components[p] || {};
    i.defaultProps = t[p], c.components[p] = i;
  }), Object.keys(l).forEach((p) => {
    const i = c.components[p] || {};
    i.defaultProps = l[p], c.components[p] = i;
  }), Object.keys(u).forEach((p) => {
    const i = c.components[p] || {};
    i.styleOverrides = u[p], c.components[p] = i;
  }), Object.keys(n).forEach((p) => {
    const i = c.components[p] || {};
    i.styleOverrides = n[p], c.components[p] = i;
  }), c.spacing = qt(e.spacing);
  const h = yt(e.breakpoints || {}), y = c.spacing;
  c.mixins = v({
    gutters: (p = {}) => v({
      paddingLeft: y(2),
      paddingRight: y(2)
    }, p, {
      [h.up("sm")]: v({
        paddingLeft: y(3),
        paddingRight: y(3)
      }, p[h.up("sm")])
    })
  }, o);
  const {
    type: $,
    mode: O
  } = a, C = Q(a, Ar), _ = O || $ || "light";
  return c.palette = v({
    // theme.palette.text.hint
    text: {
      hint: _ === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.38)"
    },
    mode: _,
    type: _
  }, C), c;
}
function Ao(e, ...t) {
  return Me(te({
    unstable_strictMode: !0
  }, e), ...t);
}
let ft = !1;
function Mo(e) {
  return ft || (console.warn(["MUI: createStyles from @mui/material/styles is deprecated.", "Please use @mui/styles/createStyles"].join(`
`)), ft = !0), e;
}
function mt(e) {
  return String(parseFloat(e)).length === String(e).length;
}
function Mr(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function ee(e) {
  return parseFloat(e);
}
function Rr(e) {
  return (t, o) => {
    const n = Mr(t);
    if (n === o)
      return t;
    let a = ee(t);
    n !== "px" && (n === "em" || n === "rem") && (a = ee(t) * ee(e));
    let l = a;
    if (o !== "px")
      if (o === "em")
        l = a / ee(e);
      else if (o === "rem")
        l = a / ee(e);
      else
        return t;
    return parseFloat(l.toFixed(5)) + o;
  };
}
function Ir({
  size: e,
  grid: t
}) {
  const o = e - e % t, n = o + t;
  return e - o < n - e ? o : n;
}
function Dr({
  lineHeight: e,
  pixels: t,
  htmlFontSize: o
}) {
  return t / (e * o);
}
function Vr({
  cssProperty: e,
  min: t,
  max: o,
  unit: n = "rem",
  breakpoints: a = [600, 900, 1200],
  transform: l = null
}) {
  const u = {
    [e]: `${t}${n}`
  }, d = (o - t) / a[a.length - 1];
  return a.forEach((c) => {
    let h = t + d * c;
    l !== null && (h = l(h)), u[`@media (min-width:${c}px)`] = {
      [e]: `${Math.round(h * 1e4) / 1e4}${n}`
    };
  }), u;
}
function Ro(e, t = {}) {
  const {
    breakpoints: o = ["sm", "md", "lg"],
    disableAlign: n = !1,
    factor: a = 2,
    variants: l = ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline"]
  } = t, u = v({}, e);
  u.typography = v({}, u.typography);
  const d = u.typography, c = Rr(d.htmlFontSize), h = o.map((y) => u.breakpoints.values[y]);
  return l.forEach((y) => {
    const $ = d[y], O = parseFloat(c($.fontSize, "rem"));
    if (O <= 1)
      return;
    const C = O, _ = 1 + (C - 1) / a;
    let {
      lineHeight: p
    } = $;
    if (!mt(p) && !n)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported non-unitless line height with grid alignment.
Use unitless line heights instead.` : X(6));
    mt(p) || (p = parseFloat(c(p, "rem")) / parseFloat(O));
    let i = null;
    n || (i = (f) => Ir({
      size: f,
      grid: Dr({
        pixels: 4,
        lineHeight: p,
        htmlFontSize: d.htmlFontSize
      })
    })), d[y] = v({}, $, Vr({
      cssProperty: "fontSize",
      min: _,
      max: C,
      unit: "rem",
      breakpoints: h,
      transform: i
    }));
  }), u;
}
const Fr = Me(), Ze = Fr;
function Io() {
  const e = vt(Ze);
  return process.env.NODE_ENV !== "production" && A.useDebugValue(e), e[ie] || e;
}
function Do({
  props: e,
  name: t
}) {
  return ar({
    props: e,
    name: t,
    defaultTheme: Ze,
    themeId: ie
  });
}
var ye = {};
const jr = /* @__PURE__ */ re(Yt);
var Ue = { exports: {} }, pt;
function Nr() {
  return pt || (pt = 1, function(e) {
    function t(o, n) {
      if (o == null)
        return {};
      var a = {}, l = Object.keys(o), u, d;
      for (d = 0; d < l.length; d++)
        u = l[d], !(n.indexOf(u) >= 0) && (a[u] = o[u]);
      return a;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ue)), Ue.exports;
}
const Br = /* @__PURE__ */ re(Gt), Lr = /* @__PURE__ */ re(Qt), Wr = /* @__PURE__ */ re(Zt), Ur = /* @__PURE__ */ re(sr), zr = /* @__PURE__ */ re(Jt), qr = /* @__PURE__ */ re(er);
var ae = Ht;
Object.defineProperty(ye, "__esModule", {
  value: !0
});
var Yr = ye.default = io, Ot = ye.shouldForwardProp = Pe;
ye.systemDefaultTheme = void 0;
var B = ae(jr), Ye = ae(Nr()), ht = to(Br), Gr = Lr, Hr = ae(Wr), Kr = ae(Ur), Xr = ae(zr), Qr = ae(qr);
const Zr = ["ownerState"], Jr = ["variants"], eo = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function kt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
  return (kt = function(n) {
    return n ? o : t;
  })(e);
}
function to(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var o = kt(t);
  if (o && o.has(e))
    return o.get(e);
  var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e)
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var u = a ? Object.getOwnPropertyDescriptor(e, l) : null;
      u && (u.get || u.set) ? Object.defineProperty(n, l, u) : n[l] = e[l];
    }
  return n.default = e, o && o.set(e, n), n;
}
function ro(e) {
  return Object.keys(e).length === 0;
}
function oo(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Pe(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const no = ye.systemDefaultTheme = (0, Xr.default)(), gt = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function ke({
  defaultTheme: e,
  theme: t,
  themeId: o
}) {
  return ro(t) ? e : t[o] || t;
}
function so(e) {
  return e ? (t, o) => o[e] : null;
}
function Ae(e, t) {
  let {
    ownerState: o
  } = t, n = (0, Ye.default)(t, Zr);
  const a = typeof e == "function" ? e((0, B.default)({
    ownerState: o
  }, n)) : e;
  if (Array.isArray(a))
    return a.flatMap((l) => Ae(l, (0, B.default)({
      ownerState: o
    }, n)));
  if (a && typeof a == "object" && Array.isArray(a.variants)) {
    const {
      variants: l = []
    } = a;
    let d = (0, Ye.default)(a, Jr);
    return l.forEach((c) => {
      let h = !0;
      typeof c.props == "function" ? h = c.props((0, B.default)({
        ownerState: o
      }, n, o)) : Object.keys(c.props).forEach((y) => {
        (o == null ? void 0 : o[y]) !== c.props[y] && n[y] !== c.props[y] && (h = !1);
      }), h && (Array.isArray(d) || (d = [d]), d.push(typeof c.style == "function" ? c.style((0, B.default)({
        ownerState: o
      }, n, o)) : c.style));
    }), d;
  }
  return a;
}
function io(e = {}) {
  const {
    themeId: t,
    defaultTheme: o = no,
    rootShouldForwardProp: n = Pe,
    slotShouldForwardProp: a = Pe
  } = e, l = (u) => (0, Qr.default)((0, B.default)({}, u, {
    theme: ke((0, B.default)({}, u, {
      defaultTheme: o,
      themeId: t
    }))
  }));
  return l.__mui_systemSx = !0, (u, d = {}) => {
    (0, ht.internal_processStyles)(u, (S) => S.filter((r) => !(r != null && r.__mui_systemSx)));
    const {
      name: c,
      slot: h,
      skipVariantsResolver: y,
      skipSx: $,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: O = so(gt(h))
    } = d, C = (0, Ye.default)(d, eo), _ = y !== void 0 ? y : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      h && h !== "Root" && h !== "root" || !1
    ), p = $ || !1;
    let i;
    process.env.NODE_ENV !== "production" && c && (i = `${c}-${gt(h || "Root")}`);
    let f = Pe;
    h === "Root" || h === "root" ? f = n : h ? f = a : oo(u) && (f = void 0);
    const b = (0, ht.default)(u, (0, B.default)({
      shouldForwardProp: f,
      label: i
    }, C)), I = (S) => typeof S == "function" && S.__emotion_real !== S || (0, Gr.isPlainObject)(S) ? (r) => Ae(S, (0, B.default)({}, r, {
      theme: ke({
        theme: r.theme,
        defaultTheme: o,
        themeId: t
      })
    })) : S, V = (S, ...r) => {
      let m = I(S);
      const E = r ? r.map(I) : [];
      c && O && E.push((R) => {
        const D = ke((0, B.default)({}, R, {
          defaultTheme: o,
          themeId: t
        }));
        if (!D.components || !D.components[c] || !D.components[c].styleOverrides)
          return null;
        const Y = D.components[c].styleOverrides, H = {};
        return Object.entries(Y).forEach(([J, oe]) => {
          H[J] = Ae(oe, (0, B.default)({}, R, {
            theme: D
          }));
        }), O(R, H);
      }), c && !_ && E.push((R) => {
        var D;
        const Y = ke((0, B.default)({}, R, {
          defaultTheme: o,
          themeId: t
        })), H = Y == null || (D = Y.components) == null || (D = D[c]) == null ? void 0 : D.variants;
        return Ae({
          variants: H
        }, (0, B.default)({}, R, {
          theme: Y
        }));
      }), p || E.push(l);
      const M = E.length - r.length;
      if (Array.isArray(S) && M > 0) {
        const R = new Array(M).fill("");
        m = [...S, ...R], m.raw = [...S.raw, ...R];
      }
      const F = b(m, ...E);
      if (process.env.NODE_ENV !== "production") {
        let R;
        c && (R = `${c}${(0, Hr.default)(h || "")}`), R === void 0 && (R = `Styled(${(0, Kr.default)(u)})`), F.displayName = R;
      }
      return u.muiName && (F.muiName = u.muiName), F;
    };
    return b.withConfig && (V.withConfig = b.withConfig), V;
  };
}
const ao = (e) => Ot(e) && e !== "classes", Vo = Ot, lo = Yr({
  themeId: ie,
  defaultTheme: Ze,
  rootShouldForwardProp: ao
}), Fo = lo, co = ["theme"];
function uo(e) {
  let {
    theme: t
  } = e, o = Q(e, co);
  const n = t[ie];
  return /* @__PURE__ */ q(he, v({}, o, {
    themeId: n ? ie : void 0,
    theme: n || t
  }));
}
process.env.NODE_ENV !== "production" && (uo.propTypes = {
  /**
   * Your component tree.
   */
  children: x.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: x.oneOfType([x.object, x.func]).isRequired
});
function jo() {
  throw new Error(process.env.NODE_ENV !== "production" ? `MUI: makeStyles is no longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#mui-material-styles for more details.` : X(14));
}
function No() {
  throw new Error(process.env.NODE_ENV !== "production" ? `MUI: withStyles is no longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#mui-material-styles for more details.` : X(15));
}
function Bo() {
  throw new Error(process.env.NODE_ENV !== "production" ? `MUI: withTheme is no longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#mui-material-styles for more details.` : X(16));
}
function fo(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const mo = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, po = mo, ho = ["colorSchemes", "cssVarPrefix", "shouldSkipGeneratingVar"], go = ["palette"], yo = [...Array(25)].map((e, t) => {
  if (t === 0)
    return;
  const o = po(t);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function So(e, t) {
  t.forEach((o) => {
    e[o] || (e[o] = {});
  });
}
function s(e, t, o) {
  !e[t] && o && (e[t] = o);
}
function pe(e) {
  return !e || !e.startsWith("hsl") ? e : Kt(e);
}
function K(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = me(pe(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, e.g. "12 12 12") or undefined if you want to remove the channel token.`));
}
const z = (e) => {
  try {
    return e();
  } catch {
  }
}, vo = (e = "mui") => Er(e);
function bo(e = {}, ...t) {
  var o, n, a, l, u, d;
  const {
    colorSchemes: c = {},
    cssVarPrefix: h = "mui",
    shouldSkipGeneratingVar: y = fo
  } = e, $ = Q(e, ho), O = vo(h), C = Me(v({}, $, c.light && {
    palette: (o = c.light) == null ? void 0 : o.palette
  })), {
    palette: _
  } = C, p = Q(C, go), {
    palette: i
  } = Me({
    palette: v({
      mode: "dark"
    }, (n = c.dark) == null ? void 0 : n.palette)
  });
  let f = v({}, p, {
    cssVarPrefix: h,
    getCssVar: O,
    colorSchemes: v({}, c, {
      light: v({}, c.light, {
        palette: _,
        opacity: v({
          inputPlaceholder: 0.42,
          inputUnderline: 0.42,
          switchTrackDisabled: 0.12,
          switchTrack: 0.38
        }, (a = c.light) == null ? void 0 : a.opacity),
        overlays: ((l = c.light) == null ? void 0 : l.overlays) || []
      }),
      dark: v({}, c.dark, {
        palette: i,
        opacity: v({
          inputPlaceholder: 0.5,
          inputUnderline: 0.7,
          switchTrackDisabled: 0.2,
          switchTrack: 0.3
        }, (u = c.dark) == null ? void 0 : u.opacity),
        overlays: ((d = c.dark) == null ? void 0 : d.overlays) || yo
      })
    })
  });
  Object.keys(f.colorSchemes).forEach((S) => {
    const r = f.colorSchemes[S].palette, m = (E) => {
      const M = E.split("-"), F = M[1], R = M[2];
      return O(E, r[F][R]);
    };
    if (S === "light" ? (s(r.common, "background", "#fff"), s(r.common, "onBackground", "#000")) : (s(r.common, "background", "#000"), s(r.common, "onBackground", "#fff")), So(r, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), S === "light") {
      s(r.Alert, "errorColor", k(r.error.light, 0.6)), s(r.Alert, "infoColor", k(r.info.light, 0.6)), s(r.Alert, "successColor", k(r.success.light, 0.6)), s(r.Alert, "warningColor", k(r.warning.light, 0.6)), s(r.Alert, "errorFilledBg", m("palette-error-main")), s(r.Alert, "infoFilledBg", m("palette-info-main")), s(r.Alert, "successFilledBg", m("palette-success-main")), s(r.Alert, "warningFilledBg", m("palette-warning-main")), s(r.Alert, "errorFilledColor", z(() => _.getContrastText(r.error.main))), s(r.Alert, "infoFilledColor", z(() => _.getContrastText(r.info.main))), s(r.Alert, "successFilledColor", z(() => _.getContrastText(r.success.main))), s(r.Alert, "warningFilledColor", z(() => _.getContrastText(r.warning.main))), s(r.Alert, "errorStandardBg", P(r.error.light, 0.9)), s(r.Alert, "infoStandardBg", P(r.info.light, 0.9)), s(r.Alert, "successStandardBg", P(r.success.light, 0.9)), s(r.Alert, "warningStandardBg", P(r.warning.light, 0.9)), s(r.Alert, "errorIconColor", m("palette-error-main")), s(r.Alert, "infoIconColor", m("palette-info-main")), s(r.Alert, "successIconColor", m("palette-success-main")), s(r.Alert, "warningIconColor", m("palette-warning-main")), s(r.AppBar, "defaultBg", m("palette-grey-100")), s(r.Avatar, "defaultBg", m("palette-grey-400")), s(r.Button, "inheritContainedBg", m("palette-grey-300")), s(r.Button, "inheritContainedHoverBg", m("palette-grey-A100")), s(r.Chip, "defaultBorder", m("palette-grey-400")), s(r.Chip, "defaultAvatarColor", m("palette-grey-700")), s(r.Chip, "defaultIconColor", m("palette-grey-700")), s(r.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), s(r.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), s(r.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), s(r.LinearProgress, "primaryBg", P(r.primary.main, 0.62)), s(r.LinearProgress, "secondaryBg", P(r.secondary.main, 0.62)), s(r.LinearProgress, "errorBg", P(r.error.main, 0.62)), s(r.LinearProgress, "infoBg", P(r.info.main, 0.62)), s(r.LinearProgress, "successBg", P(r.success.main, 0.62)), s(r.LinearProgress, "warningBg", P(r.warning.main, 0.62)), s(r.Skeleton, "bg", `rgba(${m("palette-text-primaryChannel")} / 0.11)`), s(r.Slider, "primaryTrack", P(r.primary.main, 0.62)), s(r.Slider, "secondaryTrack", P(r.secondary.main, 0.62)), s(r.Slider, "errorTrack", P(r.error.main, 0.62)), s(r.Slider, "infoTrack", P(r.info.main, 0.62)), s(r.Slider, "successTrack", P(r.success.main, 0.62)), s(r.Slider, "warningTrack", P(r.warning.main, 0.62));
      const E = xe(r.background.default, 0.8);
      s(r.SnackbarContent, "bg", E), s(r.SnackbarContent, "color", z(() => _.getContrastText(E))), s(r.SpeedDialAction, "fabHoverBg", xe(r.background.paper, 0.15)), s(r.StepConnector, "border", m("palette-grey-400")), s(r.StepContent, "border", m("palette-grey-400")), s(r.Switch, "defaultColor", m("palette-common-white")), s(r.Switch, "defaultDisabledColor", m("palette-grey-100")), s(r.Switch, "primaryDisabledColor", P(r.primary.main, 0.62)), s(r.Switch, "secondaryDisabledColor", P(r.secondary.main, 0.62)), s(r.Switch, "errorDisabledColor", P(r.error.main, 0.62)), s(r.Switch, "infoDisabledColor", P(r.info.main, 0.62)), s(r.Switch, "successDisabledColor", P(r.success.main, 0.62)), s(r.Switch, "warningDisabledColor", P(r.warning.main, 0.62)), s(r.TableCell, "border", P(Oe(r.divider, 1), 0.88)), s(r.Tooltip, "bg", Oe(r.grey[700], 0.92));
    } else {
      s(r.Alert, "errorColor", P(r.error.light, 0.6)), s(r.Alert, "infoColor", P(r.info.light, 0.6)), s(r.Alert, "successColor", P(r.success.light, 0.6)), s(r.Alert, "warningColor", P(r.warning.light, 0.6)), s(r.Alert, "errorFilledBg", m("palette-error-dark")), s(r.Alert, "infoFilledBg", m("palette-info-dark")), s(r.Alert, "successFilledBg", m("palette-success-dark")), s(r.Alert, "warningFilledBg", m("palette-warning-dark")), s(r.Alert, "errorFilledColor", z(() => i.getContrastText(r.error.dark))), s(r.Alert, "infoFilledColor", z(() => i.getContrastText(r.info.dark))), s(r.Alert, "successFilledColor", z(() => i.getContrastText(r.success.dark))), s(r.Alert, "warningFilledColor", z(() => i.getContrastText(r.warning.dark))), s(r.Alert, "errorStandardBg", k(r.error.light, 0.9)), s(r.Alert, "infoStandardBg", k(r.info.light, 0.9)), s(r.Alert, "successStandardBg", k(r.success.light, 0.9)), s(r.Alert, "warningStandardBg", k(r.warning.light, 0.9)), s(r.Alert, "errorIconColor", m("palette-error-main")), s(r.Alert, "infoIconColor", m("palette-info-main")), s(r.Alert, "successIconColor", m("palette-success-main")), s(r.Alert, "warningIconColor", m("palette-warning-main")), s(r.AppBar, "defaultBg", m("palette-grey-900")), s(r.AppBar, "darkBg", m("palette-background-paper")), s(r.AppBar, "darkColor", m("palette-text-primary")), s(r.Avatar, "defaultBg", m("palette-grey-600")), s(r.Button, "inheritContainedBg", m("palette-grey-800")), s(r.Button, "inheritContainedHoverBg", m("palette-grey-700")), s(r.Chip, "defaultBorder", m("palette-grey-700")), s(r.Chip, "defaultAvatarColor", m("palette-grey-300")), s(r.Chip, "defaultIconColor", m("palette-grey-300")), s(r.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), s(r.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), s(r.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), s(r.LinearProgress, "primaryBg", k(r.primary.main, 0.5)), s(r.LinearProgress, "secondaryBg", k(r.secondary.main, 0.5)), s(r.LinearProgress, "errorBg", k(r.error.main, 0.5)), s(r.LinearProgress, "infoBg", k(r.info.main, 0.5)), s(r.LinearProgress, "successBg", k(r.success.main, 0.5)), s(r.LinearProgress, "warningBg", k(r.warning.main, 0.5)), s(r.Skeleton, "bg", `rgba(${m("palette-text-primaryChannel")} / 0.13)`), s(r.Slider, "primaryTrack", k(r.primary.main, 0.5)), s(r.Slider, "secondaryTrack", k(r.secondary.main, 0.5)), s(r.Slider, "errorTrack", k(r.error.main, 0.5)), s(r.Slider, "infoTrack", k(r.info.main, 0.5)), s(r.Slider, "successTrack", k(r.success.main, 0.5)), s(r.Slider, "warningTrack", k(r.warning.main, 0.5));
      const E = xe(r.background.default, 0.98);
      s(r.SnackbarContent, "bg", E), s(r.SnackbarContent, "color", z(() => i.getContrastText(E))), s(r.SpeedDialAction, "fabHoverBg", xe(r.background.paper, 0.15)), s(r.StepConnector, "border", m("palette-grey-600")), s(r.StepContent, "border", m("palette-grey-600")), s(r.Switch, "defaultColor", m("palette-grey-300")), s(r.Switch, "defaultDisabledColor", m("palette-grey-600")), s(r.Switch, "primaryDisabledColor", k(r.primary.main, 0.55)), s(r.Switch, "secondaryDisabledColor", k(r.secondary.main, 0.55)), s(r.Switch, "errorDisabledColor", k(r.error.main, 0.55)), s(r.Switch, "infoDisabledColor", k(r.info.main, 0.55)), s(r.Switch, "successDisabledColor", k(r.success.main, 0.55)), s(r.Switch, "warningDisabledColor", k(r.warning.main, 0.55)), s(r.TableCell, "border", k(Oe(r.divider, 1), 0.68)), s(r.Tooltip, "bg", Oe(r.grey[700], 0.92));
    }
    K(r.background, "default"), K(r.common, "background"), K(r.common, "onBackground"), K(r, "divider"), Object.keys(r).forEach((E) => {
      const M = r[E];
      M && typeof M == "object" && (M.main && s(r[E], "mainChannel", me(pe(M.main))), M.light && s(r[E], "lightChannel", me(pe(M.light))), M.dark && s(r[E], "darkChannel", me(pe(M.dark))), M.contrastText && s(r[E], "contrastTextChannel", me(pe(M.contrastText))), E === "text" && (K(r[E], "primary"), K(r[E], "secondary")), E === "action" && (M.active && K(r[E], "active"), M.selected && K(r[E], "selected")));
    });
  }), f = t.reduce((S, r) => te(S, r), f);
  const b = {
    prefix: h,
    shouldSkipGeneratingVar: y
  }, {
    vars: I,
    generateCssVars: V
  } = kr(f, b);
  return f.vars = I, f.generateCssVars = V, f.shouldSkipGeneratingVar = y, f.unstable_sxConfig = v({}, St, $ == null ? void 0 : $.unstable_sxConfig), f.unstable_sx = function(r) {
    return Ge({
      sx: r,
      theme: this
    });
  }, f;
}
const Co = (e) => [...[...Array(24)].map((t, o) => `--${e ? `${e}-` : ""}overlays-${o + 1}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], _o = Co, Eo = bo(), {
  CssVarsProvider: Lo,
  useColorScheme: Wo,
  getInitColorSchemeScript: Uo
} = _r({
  themeId: ie,
  theme: Eo,
  attribute: "data-mui-color-scheme",
  modeStorageKey: "mui-mode",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultColorScheme: {
    light: "light",
    dark: "dark"
  },
  resolveTheme: (e) => {
    const t = v({}, e, {
      typography: Xt(e.palette, e.typography)
    });
    return t.unstable_sx = function(n) {
      return Ge({
        sx: n,
        theme: this
      });
    }, t;
  },
  excludeVariablesFromRoot: _o
});
function zo() {
  throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `experimental_sx` has been moved to `theme.unstable_sx`.For more details, see https://github.com/mui/material-ui/pull/35150." : X(20));
}
export {
  qe as A,
  ko as B,
  Ao as C,
  Mo as D,
  Ro as E,
  jo as F,
  No as G,
  Bo as H,
  bo as I,
  fo as J,
  _o as K,
  Wo as L,
  Uo as M,
  Lo as N,
  uo as T,
  ir as a,
  Do as b,
  Io as c,
  po as d,
  Et as e,
  dr as f,
  nr as g,
  Ze as h,
  ao as i,
  _t as j,
  Vo as k,
  fr as l,
  Mr as m,
  Oo as n,
  zo as o,
  Po as p,
  lr as q,
  Br as r,
  Fo as s,
  ee as t,
  ar as u,
  wo as v,
  ur as w,
  Z as x,
  Ie as y,
  xo as z
};
