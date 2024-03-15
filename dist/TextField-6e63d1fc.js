import { u as ur, G as pr, P as e, A as fr, b as H, s as mr, _ as c, m as Jt, d as le, a as br, k as hr, B as xt, D as Ko, E as vr, j as _o, F as gr, e as yr, g as ee, H as Ct, I as xr, f as Qe, T as Cr, J as Qt } from "./createTheme-c26d6c87.js";
import * as p from "react";
import Ro from "react";
import { c as K, g as oe } from "./Box-df35b90b.js";
import { g as Er, c as Tr, s as W, u as ce, d as Sr, r as ke, e as Rr } from "./styled-9ec65cd1.js";
import { e as Co, d as ne, _ as Or, h as en, i as on, u as Pe, j as at, a as Eo, f as Ue, s as Et, g as vo, r as Me, c as ao, T as Tt, b as Pr } from "./Button-30aae85a.js";
import { jsx as P, jsxs as ge } from "react/jsx-runtime";
import { u as qe, g as St, e as tn } from "./getOverlayAlpha-7f2935fe.js";
import { R as Oo, r as wr } from "./theme-68f71ea5.js";
function nn({
  styles: o,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = ur(n), s = typeof o == "function" ? o(t && r[t] || r) : o;
  return /* @__PURE__ */ P(pr, {
    styles: s
  });
}
process.env.NODE_ENV !== "production" && (nn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: e.object,
  /**
   * @ignore
   */
  styles: e.oneOfType([e.array, e.func, e.number, e.object, e.string, e.bool]),
  /**
   * @ignore
   */
  themeId: e.string
});
const Nr = ["ownerState"], Ir = ["variants"], $r = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function kr(o) {
  return Object.keys(o).length === 0;
}
function Mr(o) {
  return typeof o == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  o.charCodeAt(0) > 96;
}
function Go(o) {
  return o !== "ownerState" && o !== "theme" && o !== "sx" && o !== "as";
}
const Fr = Jt(), Rt = (o) => o && o.charAt(0).toLowerCase() + o.slice(1);
function Po({
  defaultTheme: o,
  theme: t,
  themeId: n
}) {
  return kr(t) ? o : t[n] || t;
}
function Dr(o) {
  return o ? (t, n) => n[o] : null;
}
function $o(o, t) {
  let {
    ownerState: n
  } = t, r = H(t, Nr);
  const s = typeof o == "function" ? o(c({
    ownerState: n
  }, r)) : o;
  if (Array.isArray(s))
    return s.flatMap((i) => $o(i, c({
      ownerState: n
    }, r)));
  if (s && typeof s == "object" && Array.isArray(s.variants)) {
    const {
      variants: i = []
    } = s;
    let d = H(s, Ir);
    return i.forEach((l) => {
      let u = !0;
      typeof l.props == "function" ? u = l.props(c({
        ownerState: n
      }, r, n)) : Object.keys(l.props).forEach((m) => {
        (n == null ? void 0 : n[m]) !== l.props[m] && r[m] !== l.props[m] && (u = !1);
      }), u && (Array.isArray(d) || (d = [d]), d.push(typeof l.style == "function" ? l.style(c({
        ownerState: n
      }, r, n)) : l.style));
    }), d;
  }
  return s;
}
function Br(o = {}) {
  const {
    themeId: t,
    defaultTheme: n = Fr,
    rootShouldForwardProp: r = Go,
    slotShouldForwardProp: s = Go
  } = o, i = (a) => br(c({}, a, {
    theme: Po(c({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, d = {}) => {
    fr(a, (x) => x.filter((O) => !(O != null && O.__mui_systemSx)));
    const {
      name: l,
      slot: u,
      skipVariantsResolver: m,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: v = Dr(Rt(u))
    } = d, T = H(d, $r), C = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), S = h || !1;
    let f;
    process.env.NODE_ENV !== "production" && l && (f = `${l}-${Rt(u || "Root")}`);
    let y = Go;
    u === "Root" || u === "root" ? y = r : u ? y = s : Mr(a) && (y = void 0);
    const E = mr(a, c({
      shouldForwardProp: y,
      label: f
    }, T)), b = (x) => typeof x == "function" && x.__emotion_real !== x || hr(x) ? (O) => $o(x, c({}, O, {
      theme: Po({
        theme: O.theme,
        defaultTheme: n,
        themeId: t
      })
    })) : x, g = (x, ...O) => {
      let R = b(x);
      const $ = O ? O.map(b) : [];
      l && v && $.push((B) => {
        const V = Po(c({}, B, {
          defaultTheme: n,
          themeId: t
        }));
        if (!V.components || !V.components[l] || !V.components[l].styleOverrides)
          return null;
        const M = V.components[l].styleOverrides, k = {};
        return Object.entries(M).forEach(([I, L]) => {
          k[I] = $o(L, c({}, B, {
            theme: V
          }));
        }), v(B, k);
      }), l && !C && $.push((B) => {
        var V;
        const M = Po(c({}, B, {
          defaultTheme: n,
          themeId: t
        })), k = M == null || (V = M.components) == null || (V = V[l]) == null ? void 0 : V.variants;
        return $o({
          variants: k
        }, c({}, B, {
          theme: M
        }));
      }), S || $.push(i);
      const F = $.length - O.length;
      if (Array.isArray(x) && F > 0) {
        const B = new Array(F).fill("");
        R = [...x, ...B], R.raw = [...x.raw, ...B];
      }
      const A = E(R, ...$);
      if (process.env.NODE_ENV !== "production") {
        let B;
        l && (B = `${l}${le(u || "")}`), B === void 0 && (B = `Styled(${Er(a)})`), A.displayName = B;
      }
      return a.muiName && (A.muiName = a.muiName), A;
    };
    return E.withConfig && (g.withConfig = E.withConfig), g;
  };
}
const Ar = Br(), _r = Ar;
function Lr(o) {
  const {
    prototype: t = {}
  } = o;
  return !!t.isReactComponent;
}
function rn(o, t, n, r, s) {
  const i = o[t], a = s || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let d;
  const l = i.type;
  return typeof l == "function" && !Lr(l) && (d = "Did you accidentally use a plain function component for an element instead?"), d !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${d} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const sn = Co(e.element, rn);
sn.isRequired = Co(e.element.isRequired, rn);
const Lo = sn;
function xo(o, t, n, r, s) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o[t], a = s || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
function Ot(...o) {
  return o.reduce((t, n) => n == null ? t : function(...s) {
    t.apply(this, s), n.apply(this, s);
  }, () => {
  });
}
function jo(o, t = 166) {
  let n;
  function r(...s) {
    const i = () => {
      o.apply(this, s);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function Yo(o, t) {
  var n, r;
  return /* @__PURE__ */ p.isValidElement(o) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = o.type.muiName) != null ? n : (r = o.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function Ne(o) {
  return o && o.ownerDocument || document;
}
function _e(o) {
  return Ne(o).defaultView || window;
}
let Pt = 0;
function jr(o) {
  const [t, n] = p.useState(o), r = o || t;
  return p.useEffect(() => {
    t == null && (Pt += 1, n(`mui-${Pt}`));
  }, [t]), r;
}
const wt = p["useId".toString()];
function lt(o) {
  if (wt !== void 0) {
    const t = wt();
    return o ?? t;
  }
  return jr(o);
}
function Mo({
  controlled: o,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: s
  } = p.useRef(o !== void 0), [i, a] = p.useState(t), d = s ? o : i;
  if (process.env.NODE_ENV !== "production") {
    p.useEffect(() => {
      s !== (o !== void 0) && console.error([`MUI: A component is changing the ${s ? "" : "un"}controlled ${r} state of ${n} to be ${s ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, o]);
    const {
      current: u
    } = p.useRef(t);
    p.useEffect(() => {
      !s && u !== t && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const l = p.useCallback((u) => {
    s || a(u);
  }, []);
  return [d, l];
}
function an(o) {
  const t = o.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
let oo;
function ln() {
  if (oo)
    return oo;
  const o = document.createElement("div"), t = document.createElement("div");
  return t.style.width = "10px", t.style.height = "1px", o.appendChild(t), o.dir = "rtl", o.style.fontSize = "14px", o.style.width = "4px", o.style.height = "1px", o.style.position = "absolute", o.style.top = "-1000px", o.style.overflow = "scroll", document.body.appendChild(o), oo = "reverse", o.scrollLeft > 0 ? oo = "default" : (o.scrollLeft = 1, o.scrollLeft === 0 && (oo = "negative")), document.body.removeChild(o), oo;
}
function zr(o, t) {
  const n = o.scrollLeft;
  if (t !== "rtl")
    return n;
  switch (ln()) {
    case "negative":
      return o.scrollWidth - o.clientWidth + n;
    case "reverse":
      return o.scrollWidth - o.clientWidth - n;
    default:
      return n;
  }
}
function Wr(o) {
  const t = typeof o;
  switch (t) {
    case "number":
      return Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? o !== Math.floor(o) ? "float" : "number" : "Infinity";
    case "object":
      return o === null ? "null" : o.constructor.name;
    default:
      return t;
  }
}
function Vr(o) {
  return typeof o == "number" && isFinite(o) && Math.floor(o) === o;
}
const Ur = Number.isInteger || Vr;
function cn(o, t, n, r) {
  const s = o[t];
  if (s == null || !Ur(s)) {
    const i = Wr(s);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function dn(o, t, ...n) {
  return o[t] === void 0 ? null : cn(o, t, ...n);
}
function tt() {
  return null;
}
dn.isRequired = cn;
tt.isRequired = tt;
const un = process.env.NODE_ENV === "production" ? tt : dn, qr = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"], Hr = Jt(), Kr = _r("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (o, t) => t.root
});
function Gr(o) {
  return Tr({
    props: o,
    name: "MuiStack",
    defaultTheme: Hr
  });
}
function Yr(o, t) {
  const n = p.Children.toArray(o).filter(Boolean);
  return n.reduce((r, s, i) => (r.push(s), i < n.length - 1 && r.push(/* @__PURE__ */ p.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const Xr = (o) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[o], Zr = ({
  ownerState: o,
  theme: t
}) => {
  let n = c({
    display: "flex",
    flexDirection: "column"
  }, xt({
    theme: t
  }, Ko({
    values: o.direction,
    breakpoints: t.breakpoints.values
  }), (r) => ({
    flexDirection: r
  })));
  if (o.spacing) {
    const r = vr(t), s = Object.keys(t.breakpoints.values).reduce((l, u) => ((typeof o.spacing == "object" && o.spacing[u] != null || typeof o.direction == "object" && o.direction[u] != null) && (l[u] = !0), l), {}), i = Ko({
      values: o.direction,
      base: s
    }), a = Ko({
      values: o.spacing,
      base: s
    });
    typeof i == "object" && Object.keys(i).forEach((l, u, m) => {
      if (!i[l]) {
        const v = u > 0 ? i[m[u - 1]] : "column";
        i[l] = v;
      }
    }), n = _o(n, xt({
      theme: t
    }, a, (l, u) => o.useFlexGap ? {
      gap: Ct(r, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Xr(u ? i[u] : o.direction)}`]: Ct(r, l)
      }
    }));
  }
  return n = gr(t.breakpoints, n), n;
};
function Jr(o = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Kr,
    useThemeProps: n = Gr,
    componentName: r = "MuiStack"
  } = o, s = () => ne({
    root: ["root"]
  }, (l) => ee(r, l), {}), i = t(Zr), a = /* @__PURE__ */ p.forwardRef(function(l, u) {
    const m = n(l), h = yr(m), {
      component: v = "div",
      direction: T = "column",
      spacing: C = 0,
      divider: S,
      children: f,
      className: y,
      useFlexGap: E = !1
    } = h, b = H(h, qr), g = {
      direction: T,
      spacing: C,
      useFlexGap: E
    }, x = s();
    return /* @__PURE__ */ P(i, c({
      as: v,
      ownerState: g,
      ref: u,
      className: K(x.root, y)
    }, b, {
      children: S ? Yr(f, S) : f
    }));
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: e.node,
    direction: e.oneOfType([e.oneOf(["column-reverse", "column", "row-reverse", "row"]), e.arrayOf(e.oneOf(["column-reverse", "column", "row-reverse", "row"])), e.object]),
    divider: e.node,
    spacing: e.oneOfType([e.arrayOf(e.oneOfType([e.number, e.string])), e.number, e.object, e.string]),
    sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object])
  }), a;
}
var nt = { exports: {} }, ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nt;
function Qr() {
  if (Nt)
    return ie;
  Nt = 1;
  var o = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), d = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), C;
  C = Symbol.for("react.module.reference");
  function S(f) {
    if (typeof f == "object" && f !== null) {
      var y = f.$$typeof;
      switch (y) {
        case o:
          switch (f = f.type, f) {
            case n:
            case s:
            case r:
            case u:
            case m:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case d:
                case a:
                case l:
                case v:
                case h:
                case i:
                  return f;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return ie.ContextConsumer = a, ie.ContextProvider = i, ie.Element = o, ie.ForwardRef = l, ie.Fragment = n, ie.Lazy = v, ie.Memo = h, ie.Portal = t, ie.Profiler = s, ie.StrictMode = r, ie.Suspense = u, ie.SuspenseList = m, ie.isAsyncMode = function() {
    return !1;
  }, ie.isConcurrentMode = function() {
    return !1;
  }, ie.isContextConsumer = function(f) {
    return S(f) === a;
  }, ie.isContextProvider = function(f) {
    return S(f) === i;
  }, ie.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === o;
  }, ie.isForwardRef = function(f) {
    return S(f) === l;
  }, ie.isFragment = function(f) {
    return S(f) === n;
  }, ie.isLazy = function(f) {
    return S(f) === v;
  }, ie.isMemo = function(f) {
    return S(f) === h;
  }, ie.isPortal = function(f) {
    return S(f) === t;
  }, ie.isProfiler = function(f) {
    return S(f) === s;
  }, ie.isStrictMode = function(f) {
    return S(f) === r;
  }, ie.isSuspense = function(f) {
    return S(f) === u;
  }, ie.isSuspenseList = function(f) {
    return S(f) === m;
  }, ie.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === s || f === r || f === u || f === m || f === T || typeof f == "object" && f !== null && (f.$$typeof === v || f.$$typeof === h || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === C || f.getModuleId !== void 0);
  }, ie.typeOf = S, ie;
}
var ae = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var It;
function es() {
  return It || (It = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), d = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), C = !1, S = !1, f = !1, y = !1, E = !1, b;
    b = Symbol.for("react.module.reference");
    function g(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === n || N === s || E || N === r || N === u || N === m || y || N === T || C || S || f || typeof N == "object" && N !== null && (N.$$typeof === v || N.$$typeof === h || N.$$typeof === i || N.$$typeof === a || N.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === b || N.getModuleId !== void 0));
    }
    function x(N) {
      if (typeof N == "object" && N !== null) {
        var se = N.$$typeof;
        switch (se) {
          case o:
            var Ce = N.type;
            switch (Ce) {
              case n:
              case s:
              case r:
              case u:
              case m:
                return Ce;
              default:
                var he = Ce && Ce.$$typeof;
                switch (he) {
                  case d:
                  case a:
                  case l:
                  case v:
                  case h:
                  case i:
                    return he;
                  default:
                    return se;
                }
            }
          case t:
            return se;
        }
      }
    }
    var O = a, R = i, $ = o, F = l, A = n, B = v, V = h, M = t, k = s, I = r, L = u, D = m, z = !1, U = !1;
    function G(N) {
      return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function fe(N) {
      return U || (U = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function me(N) {
      return x(N) === a;
    }
    function ue(N) {
      return x(N) === i;
    }
    function J(N) {
      return typeof N == "object" && N !== null && N.$$typeof === o;
    }
    function be(N) {
      return x(N) === l;
    }
    function j(N) {
      return x(N) === n;
    }
    function re(N) {
      return x(N) === v;
    }
    function de(N) {
      return x(N) === h;
    }
    function xe(N) {
      return x(N) === t;
    }
    function ye(N) {
      return x(N) === s;
    }
    function X(N) {
      return x(N) === r;
    }
    function pe(N) {
      return x(N) === u;
    }
    function Z(N) {
      return x(N) === m;
    }
    ae.ContextConsumer = O, ae.ContextProvider = R, ae.Element = $, ae.ForwardRef = F, ae.Fragment = A, ae.Lazy = B, ae.Memo = V, ae.Portal = M, ae.Profiler = k, ae.StrictMode = I, ae.Suspense = L, ae.SuspenseList = D, ae.isAsyncMode = G, ae.isConcurrentMode = fe, ae.isContextConsumer = me, ae.isContextProvider = ue, ae.isElement = J, ae.isForwardRef = be, ae.isFragment = j, ae.isLazy = re, ae.isMemo = de, ae.isPortal = xe, ae.isProfiler = ye, ae.isStrictMode = X, ae.isSuspense = pe, ae.isSuspenseList = Z, ae.isValidElementType = g, ae.typeOf = x;
  }()), ae;
}
process.env.NODE_ENV === "production" ? nt.exports = Qr() : nt.exports = es();
var To = nt.exports;
const $t = {
  disabled: !1
};
var os = process.env.NODE_ENV !== "production" ? e.oneOfType([e.number, e.shape({
  enter: e.number,
  exit: e.number,
  appear: e.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && e.oneOfType([e.string, e.shape({
  enter: e.string,
  exit: e.string,
  active: e.string
}), e.shape({
  enter: e.string,
  enterDone: e.string,
  enterActive: e.string,
  exit: e.string,
  exitDone: e.string,
  exitActive: e.string
})]);
var ts = function(t) {
  return t.scrollTop;
}, bo = "unmounted", Ze = "exited", Je = "entering", no = "entered", rt = "exiting", Le = /* @__PURE__ */ function(o) {
  Or(t, o);
  function t(r, s) {
    var i;
    i = o.call(this, r, s) || this;
    var a = s, d = a && !a.isMounting ? r.enter : r.appear, l;
    return i.appearStatus = null, r.in ? d ? (l = Ze, i.appearStatus = Je) : l = no : r.unmountOnExit || r.mountOnEnter ? l = bo : l = Ze, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(s, i) {
    var a = s.in;
    return a && i.status === bo ? {
      status: Ze
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(s) {
    var i = null;
    if (s !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Je && a !== no && (i = Je) : (a === Je || a === no) && (i = rt);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var s = this.props.timeout, i, a, d;
    return i = a = d = s, s != null && typeof s != "number" && (i = s.exit, a = s.enter, d = s.appear !== void 0 ? s.appear : a), {
      exit: i,
      enter: a,
      appear: d
    };
  }, n.updateStatus = function(s, i) {
    if (s === void 0 && (s = !1), i !== null)
      if (this.cancelNextCallback(), i === Je) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Oo.findDOMNode(this);
          a && ts(a);
        }
        this.performEnter(s);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Ze && this.setState({
        status: bo
      });
  }, n.performEnter = function(s) {
    var i = this, a = this.props.enter, d = this.context ? this.context.isMounting : s, l = this.props.nodeRef ? [d] : [Oo.findDOMNode(this), d], u = l[0], m = l[1], h = this.getTimeouts(), v = d ? h.appear : h.enter;
    if (!s && !a || $t.disabled) {
      this.safeSetState({
        status: no
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, m), this.safeSetState({
      status: Je
    }, function() {
      i.props.onEntering(u, m), i.onTransitionEnd(v, function() {
        i.safeSetState({
          status: no
        }, function() {
          i.props.onEntered(u, m);
        });
      });
    });
  }, n.performExit = function() {
    var s = this, i = this.props.exit, a = this.getTimeouts(), d = this.props.nodeRef ? void 0 : Oo.findDOMNode(this);
    if (!i || $t.disabled) {
      this.safeSetState({
        status: Ze
      }, function() {
        s.props.onExited(d);
      });
      return;
    }
    this.props.onExit(d), this.safeSetState({
      status: rt
    }, function() {
      s.props.onExiting(d), s.onTransitionEnd(a.exit, function() {
        s.safeSetState({
          status: Ze
        }, function() {
          s.props.onExited(d);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(s, i) {
    i = this.setNextCallback(i), this.setState(s, i);
  }, n.setNextCallback = function(s) {
    var i = this, a = !0;
    return this.nextCallback = function(d) {
      a && (a = !1, i.nextCallback = null, s(d));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(s, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : Oo.findDOMNode(this), d = s == null && !this.props.addEndListener;
    if (!a || d) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = l[0], m = l[1];
      this.props.addEndListener(u, m);
    }
    s != null && setTimeout(this.nextCallback, s);
  }, n.render = function() {
    var s = this.state.status;
    if (s === bo)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var d = H(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Ro.createElement(en.Provider, {
        value: null
      }, typeof a == "function" ? a(s, d) : Ro.cloneElement(Ro.Children.only(a), d))
    );
  }, t;
}(Ro.Component);
Le.contextType = en;
Le.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: e.shape({
    current: typeof Element > "u" ? e.any : function(o, t, n, r, s, i) {
      var a = o[t];
      return e.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(o, t, n, r, s, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: e.oneOfType([e.func.isRequired, e.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: e.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: e.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: e.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: e.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: e.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: e.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = os;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      s[i - 1] = arguments[i];
    return n.apply(void 0, [t].concat(s));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: e.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: e.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: e.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: e.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: e.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: e.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: e.func
} : {};
function to() {
}
Le.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: to,
  onEntering: to,
  onEntered: to,
  onExit: to,
  onExiting: to,
  onExited: to
};
Le.UNMOUNTED = bo;
Le.EXITED = Ze;
Le.ENTERING = Je;
Le.ENTERED = no;
Le.EXITING = rt;
const ct = Le, pn = (o) => o.scrollTop;
function so(o, t) {
  var n, r;
  const {
    timeout: s,
    easing: i,
    style: a = {}
  } = o;
  return {
    duration: (n = a.transitionDuration) != null ? n : typeof s == "number" ? s : s[t.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: a.transitionDelay
  };
}
function ns(o) {
  return ee("MuiCollapse", o);
}
const rs = oe("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]), Yc = rs, ss = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"], is = (o) => {
  const {
    orientation: t,
    classes: n
  } = o, r = {
    root: ["root", `${t}`],
    entered: ["entered"],
    hidden: ["hidden"],
    wrapper: ["wrapper", `${t}`],
    wrapperInner: ["wrapperInner", `${t}`]
  };
  return ne(r, ns, n);
}, as = W("div", {
  name: "MuiCollapse",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [t.root, t[n.orientation], n.state === "entered" && t.entered, n.state === "exited" && !n.in && n.collapsedSize === "0px" && t.hidden];
  }
})(({
  theme: o,
  ownerState: t
}) => c({
  height: 0,
  overflow: "hidden",
  transition: o.transitions.create("height")
}, t.orientation === "horizontal" && {
  height: "auto",
  width: 0,
  transition: o.transitions.create("width")
}, t.state === "entered" && c({
  height: "auto",
  overflow: "visible"
}, t.orientation === "horizontal" && {
  width: "auto"
}), t.state === "exited" && !t.in && t.collapsedSize === "0px" && {
  visibility: "hidden"
})), ls = W("div", {
  name: "MuiCollapse",
  slot: "Wrapper",
  overridesResolver: (o, t) => t.wrapper
})(({
  ownerState: o
}) => c({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: "flex",
  width: "100%"
}, o.orientation === "horizontal" && {
  width: "auto",
  height: "100%"
})), cs = W("div", {
  name: "MuiCollapse",
  slot: "WrapperInner",
  overridesResolver: (o, t) => t.wrapperInner
})(({
  ownerState: o
}) => c({
  width: "100%"
}, o.orientation === "horizontal" && {
  width: "auto",
  height: "100%"
})), dt = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiCollapse"
  }), {
    addEndListener: s,
    children: i,
    className: a,
    collapsedSize: d = "0px",
    component: l,
    easing: u,
    in: m,
    onEnter: h,
    onEntered: v,
    onEntering: T,
    onExit: C,
    onExited: S,
    onExiting: f,
    orientation: y = "vertical",
    style: E,
    timeout: b = xr.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: g = ct
  } = r, x = H(r, ss), O = c({}, r, {
    orientation: y,
    collapsedSize: d
  }), R = is(O), $ = qe(), F = on(), A = p.useRef(null), B = p.useRef(), V = typeof d == "number" ? `${d}px` : d, M = y === "horizontal", k = M ? "width" : "height", I = p.useRef(null), L = Pe(n, I), D = (j) => (re) => {
    if (j) {
      const de = I.current;
      re === void 0 ? j(de) : j(de, re);
    }
  }, z = () => A.current ? A.current[M ? "clientWidth" : "clientHeight"] : 0, U = D((j, re) => {
    A.current && M && (A.current.style.position = "absolute"), j.style[k] = V, h && h(j, re);
  }), G = D((j, re) => {
    const de = z();
    A.current && M && (A.current.style.position = "");
    const {
      duration: xe,
      easing: ye
    } = so({
      style: E,
      timeout: b,
      easing: u
    }, {
      mode: "enter"
    });
    if (b === "auto") {
      const X = $.transitions.getAutoHeightDuration(de);
      j.style.transitionDuration = `${X}ms`, B.current = X;
    } else
      j.style.transitionDuration = typeof xe == "string" ? xe : `${xe}ms`;
    j.style[k] = `${de}px`, j.style.transitionTimingFunction = ye, T && T(j, re);
  }), fe = D((j, re) => {
    j.style[k] = "auto", v && v(j, re);
  }), me = D((j) => {
    j.style[k] = `${z()}px`, C && C(j);
  }), ue = D(S), J = D((j) => {
    const re = z(), {
      duration: de,
      easing: xe
    } = so({
      style: E,
      timeout: b,
      easing: u
    }, {
      mode: "exit"
    });
    if (b === "auto") {
      const ye = $.transitions.getAutoHeightDuration(re);
      j.style.transitionDuration = `${ye}ms`, B.current = ye;
    } else
      j.style.transitionDuration = typeof de == "string" ? de : `${de}ms`;
    j.style[k] = V, j.style.transitionTimingFunction = xe, f && f(j);
  });
  return /* @__PURE__ */ P(g, c({
    in: m,
    onEnter: U,
    onEntered: fe,
    onEntering: G,
    onExit: me,
    onExited: ue,
    onExiting: J,
    addEndListener: (j) => {
      b === "auto" && F.start(B.current || 0, j), s && s(I.current, j);
    },
    nodeRef: I,
    timeout: b === "auto" ? null : b
  }, x, {
    children: (j, re) => /* @__PURE__ */ P(as, c({
      as: l,
      className: K(R.root, a, {
        entered: R.entered,
        exited: !m && V === "0px" && R.hidden
      }[j]),
      style: c({
        [M ? "minWidth" : "minHeight"]: V
      }, E),
      ref: L
    }, re, {
      // `ownerState` is set after `childProps` to override any existing `ownerState` property in `childProps`
      // that might have been forwarded from the Transition component.
      ownerState: c({}, O, {
        state: j
      }),
      children: /* @__PURE__ */ P(ls, {
        ownerState: c({}, O, {
          state: j
        }),
        className: R.wrapper,
        ref: A,
        children: /* @__PURE__ */ P(cs, {
          ownerState: c({}, O, {
            state: j
          }),
          className: R.wrapperInner,
          children: i
        })
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (dt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: e.func,
  /**
   * The content node to be collapsed.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The width (horizontal) or height (vertical) of the container when collapsed.
   * @default '0px'
   */
  collapsedSize: e.oneOfType([e.number, e.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: at,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: e.oneOfType([e.shape({
    enter: e.string,
    exit: e.string
  }), e.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: e.bool,
  /**
   * @ignore
   */
  onEnter: e.func,
  /**
   * @ignore
   */
  onEntered: e.func,
  /**
   * @ignore
   */
  onEntering: e.func,
  /**
   * @ignore
   */
  onExit: e.func,
  /**
   * @ignore
   */
  onExited: e.func,
  /**
   * @ignore
   */
  onExiting: e.func,
  /**
   * The transition orientation.
   * @default 'vertical'
   */
  orientation: e.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  style: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default duration.standard
   */
  timeout: e.oneOfType([e.oneOf(["auto"]), e.number, e.shape({
    appear: e.number,
    enter: e.number,
    exit: e.number
  })])
});
dt.muiSupportAuto = !0;
const ds = dt;
function us(o) {
  return ee("MuiPaper", o);
}
const ps = oe("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]), Xc = ps, fs = ["className", "component", "elevation", "square", "variant"], ms = (o) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: s
  } = o, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return ne(i, us, s);
}, bs = W("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: o,
  ownerState: t
}) => {
  var n;
  return c({
    backgroundColor: (o.vars || o).palette.background.paper,
    color: (o.vars || o).palette.text.primary,
    transition: o.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: o.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(o.vars || o).palette.divider}`
  }, t.variant === "elevation" && c({
    boxShadow: (o.vars || o).shadows[t.elevation]
  }, !o.vars && o.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Qe("#fff", St(t.elevation))}, ${Qe("#fff", St(t.elevation))})`
  }, o.vars && {
    backgroundImage: (n = o.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), fn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiPaper"
  }), {
    className: s,
    component: i = "div",
    elevation: a = 1,
    square: d = !1,
    variant: l = "elevation"
  } = r, u = H(r, fs), m = c({}, r, {
    component: i,
    elevation: a,
    square: d,
    variant: l
  }), h = ms(m);
  return process.env.NODE_ENV !== "production" && qe().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ P(bs, c({
    as: i,
    ownerState: m,
    className: K(h.root, s),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (fn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: e.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Co(un, (o) => {
    const {
      elevation: t,
      variant: n
    } = o;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: e.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: e.oneOfType([e.oneOf(["elevation", "outlined"]), e.string])
});
const zo = fn, mn = /* @__PURE__ */ p.createContext({});
process.env.NODE_ENV !== "production" && (mn.displayName = "AccordionContext");
const bn = mn;
function Fo(o) {
  return typeof o == "string";
}
function hn(o, t, n) {
  return o === void 0 || Fo(o) ? t : c({}, t, {
    ownerState: c({}, t.ownerState, n)
  });
}
function vn(o, t = []) {
  if (o === void 0)
    return {};
  const n = {};
  return Object.keys(o).filter((r) => r.match(/^on[A-Z]/) && typeof o[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = o[r];
  }), n;
}
function gn(o, t, n) {
  return typeof o == "function" ? o(t, n) : o;
}
function kt(o) {
  if (o === void 0)
    return {};
  const t = {};
  return Object.keys(o).filter((n) => !(n.match(/^on[A-Z]/) && typeof o[n] == "function")).forEach((n) => {
    t[n] = o[n];
  }), t;
}
function yn(o) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: s,
    className: i
  } = o;
  if (!t) {
    const T = K(n == null ? void 0 : n.className, i, s == null ? void 0 : s.className, r == null ? void 0 : r.className), C = c({}, n == null ? void 0 : n.style, s == null ? void 0 : s.style, r == null ? void 0 : r.style), S = c({}, n, s, r);
    return T.length > 0 && (S.className = T), Object.keys(C).length > 0 && (S.style = C), {
      props: S,
      internalRef: void 0
    };
  }
  const a = vn(c({}, s, r)), d = kt(r), l = kt(s), u = t(a), m = K(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, s == null ? void 0 : s.className, r == null ? void 0 : r.className), h = c({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, s == null ? void 0 : s.style, r == null ? void 0 : r.style), v = c({}, u, n, l, d);
  return m.length > 0 && (v.className = m), Object.keys(h).length > 0 && (v.style = h), {
    props: v,
    internalRef: u.ref
  };
}
const hs = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Ae(o) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: s,
    skipResolvingSlotProps: i = !1
  } = o, a = H(o, hs), d = i ? {} : gn(r, s), {
    props: l,
    internalRef: u
  } = yn(c({}, a, {
    externalSlotProps: d
  })), m = Pe(u, d == null ? void 0 : d.ref, (t = o.additionalProps) == null ? void 0 : t.ref);
  return hn(n, c({}, l, {
    ref: m
  }), s);
}
const vs = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"], gs = ["component", "slots", "slotProps"], ys = ["component"];
function xs(o, t) {
  const {
    className: n,
    elementType: r,
    ownerState: s,
    externalForwardedProps: i,
    getSlotOwnerState: a,
    internalForwardedProps: d
  } = t, l = H(t, vs), {
    component: u,
    slots: m = {
      [o]: void 0
    },
    slotProps: h = {
      [o]: void 0
    }
  } = i, v = H(i, gs), T = m[o] || r, C = gn(h[o], s), S = yn(c({
    className: n
  }, l, {
    externalForwardedProps: o === "root" ? v : void 0,
    externalSlotProps: C
  })), {
    props: {
      component: f
    },
    internalRef: y
  } = S, E = H(S.props, ys), b = Pe(y, C == null ? void 0 : C.ref, t.ref), g = a ? a(E) : {}, x = c({}, s, g), O = o === "root" ? f || u : f, R = hn(T, c({}, o === "root" && !u && !m[o] && d, o !== "root" && !m[o] && d, E, O && {
    as: O
  }, {
    ref: b
  }), x);
  return Object.keys(g).forEach(($) => {
    delete R[$];
  }), [T, R];
}
function Cs(o) {
  return ee("MuiAccordion", o);
}
const Es = oe("MuiAccordion", ["root", "rounded", "expanded", "disabled", "gutters", "region"]), wo = Es, Ts = ["children", "className", "defaultExpanded", "disabled", "disableGutters", "expanded", "onChange", "square", "slots", "slotProps", "TransitionComponent", "TransitionProps"], Ss = (o) => {
  const {
    classes: t,
    square: n,
    expanded: r,
    disabled: s,
    disableGutters: i
  } = o;
  return ne({
    root: ["root", !n && "rounded", r && "expanded", s && "disabled", !i && "gutters"],
    region: ["region"]
  }, Cs, t);
}, Rs = W(zo, {
  name: "MuiAccordion",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [{
      [`& .${wo.region}`]: t.region
    }, t.root, !n.square && t.rounded, !n.disableGutters && t.gutters];
  }
})(({
  theme: o
}) => {
  const t = {
    duration: o.transitions.duration.shortest
  };
  return {
    position: "relative",
    transition: o.transitions.create(["margin"], t),
    overflowAnchor: "none",
    // Keep the same scrolling position
    "&::before": {
      position: "absolute",
      left: 0,
      top: -1,
      right: 0,
      height: 1,
      content: '""',
      opacity: 1,
      backgroundColor: (o.vars || o).palette.divider,
      transition: o.transitions.create(["opacity", "background-color"], t)
    },
    "&:first-of-type": {
      "&::before": {
        display: "none"
      }
    },
    [`&.${wo.expanded}`]: {
      "&::before": {
        opacity: 0
      },
      "&:first-of-type": {
        marginTop: 0
      },
      "&:last-of-type": {
        marginBottom: 0
      },
      "& + &": {
        "&::before": {
          display: "none"
        }
      }
    },
    [`&.${wo.disabled}`]: {
      backgroundColor: (o.vars || o).palette.action.disabledBackground
    }
  };
}, ({
  theme: o,
  ownerState: t
}) => c({}, !t.square && {
  borderRadius: 0,
  "&:first-of-type": {
    borderTopLeftRadius: (o.vars || o).shape.borderRadius,
    borderTopRightRadius: (o.vars || o).shape.borderRadius
  },
  "&:last-of-type": {
    borderBottomLeftRadius: (o.vars || o).shape.borderRadius,
    borderBottomRightRadius: (o.vars || o).shape.borderRadius,
    // Fix a rendering issue on Edge
    "@supports (-ms-ime-align: auto)": {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }
  }
}, !t.disableGutters && {
  [`&.${wo.expanded}`]: {
    margin: "16px 0"
  }
})), xn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiAccordion"
  }), {
    children: s,
    className: i,
    defaultExpanded: a = !1,
    disabled: d = !1,
    disableGutters: l = !1,
    expanded: u,
    onChange: m,
    square: h = !1,
    slots: v = {},
    slotProps: T = {},
    TransitionComponent: C,
    TransitionProps: S
  } = r, f = H(r, Ts), [y, E] = Mo({
    controlled: u,
    default: a,
    name: "Accordion",
    state: "expanded"
  }), b = p.useCallback((M) => {
    E(!y), m && m(M, !y);
  }, [y, m, E]), [g, ...x] = p.Children.toArray(s), O = p.useMemo(() => ({
    expanded: y,
    disabled: d,
    disableGutters: l,
    toggle: b
  }), [y, d, l, b]), R = c({}, r, {
    square: h,
    disabled: d,
    disableGutters: l,
    expanded: y
  }), $ = Ss(R), F = c({
    transition: C
  }, v), A = c({
    transition: S
  }, T), [B, V] = xs("transition", {
    elementType: ds,
    externalForwardedProps: {
      slots: F,
      slotProps: A
    },
    ownerState: R
  });
  return /* @__PURE__ */ ge(Rs, c({
    className: K($.root, i),
    ref: n,
    ownerState: R,
    square: h
  }, f, {
    children: [/* @__PURE__ */ P(bn.Provider, {
      value: O,
      children: g
    }), /* @__PURE__ */ P(B, c({
      in: y,
      timeout: "auto"
    }, V, {
      children: /* @__PURE__ */ P("div", {
        "aria-labelledby": g.props.id,
        id: g.props["aria-controls"],
        role: "region",
        className: $.region,
        children: x
      })
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (xn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: Co(e.node.isRequired, (o) => {
    const t = p.Children.toArray(o.children)[0];
    return To.isFragment(t) ? new Error("MUI: The Accordion doesn't accept a Fragment as a child. Consider providing an array instead.") : /* @__PURE__ */ p.isValidElement(t) ? null : new Error("MUI: Expected the first child of Accordion to be a valid element.");
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * If `true`, expands the accordion by default.
   * @default false
   */
  defaultExpanded: e.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, it removes the margin between two expanded accordion items and the increase of height.
   * @default false
   */
  disableGutters: e.bool,
  /**
   * If `true`, expands the accordion, otherwise collapse it.
   * Setting this prop enables control over the accordion.
   */
  expanded: e.bool,
  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {boolean} expanded The `expanded` state of the accordion.
   */
  onChange: e.func,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: e.shape({
    transition: e.oneOfType([e.func, e.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: e.shape({
    transition: e.elementType
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: e.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   */
  TransitionComponent: e.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   */
  TransitionProps: e.object
});
const Zc = xn;
function Os(o) {
  return ee("MuiAccordionDetails", o);
}
const Ps = oe("MuiAccordionDetails", ["root"]), Jc = Ps, ws = ["className"], Ns = (o) => {
  const {
    classes: t
  } = o;
  return ne({
    root: ["root"]
  }, Os, t);
}, Is = W("div", {
  name: "MuiAccordionDetails",
  slot: "Root",
  overridesResolver: (o, t) => t.root
})(({
  theme: o
}) => ({
  padding: o.spacing(1, 2, 2)
})), Cn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiAccordionDetails"
  }), {
    className: s
  } = r, i = H(r, ws), a = r, d = Ns(a);
  return /* @__PURE__ */ P(Is, c({
    className: K(d.root, s),
    ref: n,
    ownerState: a
  }, i));
});
process.env.NODE_ENV !== "production" && (Cn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object])
});
const Qc = Cn;
function $s(o) {
  return ee("MuiAccordionSummary", o);
}
const ks = oe("MuiAccordionSummary", ["root", "expanded", "focusVisible", "disabled", "gutters", "contentGutters", "content", "expandIconWrapper"]), ro = ks, Ms = ["children", "className", "expandIcon", "focusVisibleClassName", "onClick"], Fs = (o) => {
  const {
    classes: t,
    expanded: n,
    disabled: r,
    disableGutters: s
  } = o;
  return ne({
    root: ["root", n && "expanded", r && "disabled", !s && "gutters"],
    focusVisible: ["focusVisible"],
    content: ["content", n && "expanded", !s && "contentGutters"],
    expandIconWrapper: ["expandIconWrapper", n && "expanded"]
  }, $s, t);
}, Ds = W(Eo, {
  name: "MuiAccordionSummary",
  slot: "Root",
  overridesResolver: (o, t) => t.root
})(({
  theme: o,
  ownerState: t
}) => {
  const n = {
    duration: o.transitions.duration.shortest
  };
  return c({
    display: "flex",
    minHeight: 48,
    padding: o.spacing(0, 2),
    transition: o.transitions.create(["min-height", "background-color"], n),
    [`&.${ro.focusVisible}`]: {
      backgroundColor: (o.vars || o).palette.action.focus
    },
    [`&.${ro.disabled}`]: {
      opacity: (o.vars || o).palette.action.disabledOpacity
    },
    [`&:hover:not(.${ro.disabled})`]: {
      cursor: "pointer"
    }
  }, !t.disableGutters && {
    [`&.${ro.expanded}`]: {
      minHeight: 64
    }
  });
}), Bs = W("div", {
  name: "MuiAccordionSummary",
  slot: "Content",
  overridesResolver: (o, t) => t.content
})(({
  theme: o,
  ownerState: t
}) => c({
  display: "flex",
  flexGrow: 1,
  margin: "12px 0"
}, !t.disableGutters && {
  transition: o.transitions.create(["margin"], {
    duration: o.transitions.duration.shortest
  }),
  [`&.${ro.expanded}`]: {
    margin: "20px 0"
  }
})), As = W("div", {
  name: "MuiAccordionSummary",
  slot: "ExpandIconWrapper",
  overridesResolver: (o, t) => t.expandIconWrapper
})(({
  theme: o
}) => ({
  display: "flex",
  color: (o.vars || o).palette.action.active,
  transform: "rotate(0deg)",
  transition: o.transitions.create("transform", {
    duration: o.transitions.duration.shortest
  }),
  [`&.${ro.expanded}`]: {
    transform: "rotate(180deg)"
  }
})), En = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiAccordionSummary"
  }), {
    children: s,
    className: i,
    expandIcon: a,
    focusVisibleClassName: d,
    onClick: l
  } = r, u = H(r, Ms), {
    disabled: m = !1,
    disableGutters: h,
    expanded: v,
    toggle: T
  } = p.useContext(bn), C = (y) => {
    T && T(y), l && l(y);
  }, S = c({}, r, {
    expanded: v,
    disabled: m,
    disableGutters: h
  }), f = Fs(S);
  return /* @__PURE__ */ ge(Ds, c({
    focusRipple: !1,
    disableRipple: !0,
    disabled: m,
    component: "div",
    "aria-expanded": v,
    className: K(f.root, i),
    focusVisibleClassName: K(f.focusVisible, d),
    onClick: C,
    ref: n,
    ownerState: S
  }, u, {
    children: [/* @__PURE__ */ P(Bs, {
      className: f.content,
      ownerState: S,
      children: s
    }), a && /* @__PURE__ */ P(As, {
      className: f.expandIconWrapper,
      ownerState: S,
      children: a
    })]
  }));
});
process.env.NODE_ENV !== "production" && (En.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The icon to display as the expand indicator.
   */
  expandIcon: e.node,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: e.string,
  /**
   * @ignore
   */
  onClick: e.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object])
});
const ed = En, _s = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Ls(o) {
  const t = parseInt(o.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? o.contentEditable === "true" || (o.nodeName === "AUDIO" || o.nodeName === "VIDEO" || o.nodeName === "DETAILS") && o.getAttribute("tabindex") === null ? 0 : o.tabIndex : t;
}
function js(o) {
  if (o.tagName !== "INPUT" || o.type !== "radio" || !o.name)
    return !1;
  const t = (r) => o.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${o.name}"]:checked`);
  return n || (n = t(`[name="${o.name}"]`)), n !== o;
}
function zs(o) {
  return !(o.disabled || o.tagName === "INPUT" && o.type === "hidden" || js(o));
}
function Ws(o) {
  const t = [], n = [];
  return Array.from(o.querySelectorAll(_s)).forEach((r, s) => {
    const i = Ls(r);
    i === -1 || !zs(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: s,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, s) => r.tabIndex === s.tabIndex ? r.documentOrder - s.documentOrder : r.tabIndex - s.tabIndex).map((r) => r.node).concat(t);
}
function Vs() {
  return !0;
}
function Do(o) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: s = !1,
    getTabbable: i = Ws,
    isEnabled: a = Vs,
    open: d
  } = o, l = p.useRef(!1), u = p.useRef(null), m = p.useRef(null), h = p.useRef(null), v = p.useRef(null), T = p.useRef(!1), C = p.useRef(null), S = Pe(t.ref, C), f = p.useRef(null);
  p.useEffect(() => {
    !d || !C.current || (T.current = !n);
  }, [n, d]), p.useEffect(() => {
    if (!d || !C.current)
      return;
    const b = Ne(C.current);
    return C.current.contains(b.activeElement) || (C.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), C.current.setAttribute("tabIndex", "-1")), T.current && C.current.focus()), () => {
      s || (h.current && h.current.focus && (l.current = !0, h.current.focus()), h.current = null);
    };
  }, [d]), p.useEffect(() => {
    if (!d || !C.current)
      return;
    const b = Ne(C.current), g = (R) => {
      f.current = R, !(r || !a() || R.key !== "Tab") && b.activeElement === C.current && R.shiftKey && (l.current = !0, m.current && m.current.focus());
    }, x = () => {
      const R = C.current;
      if (R === null)
        return;
      if (!b.hasFocus() || !a() || l.current) {
        l.current = !1;
        return;
      }
      if (R.contains(b.activeElement) || r && b.activeElement !== u.current && b.activeElement !== m.current)
        return;
      if (b.activeElement !== v.current)
        v.current = null;
      else if (v.current !== null)
        return;
      if (!T.current)
        return;
      let $ = [];
      if ((b.activeElement === u.current || b.activeElement === m.current) && ($ = i(C.current)), $.length > 0) {
        var F, A;
        const B = !!((F = f.current) != null && F.shiftKey && ((A = f.current) == null ? void 0 : A.key) === "Tab"), V = $[0], M = $[$.length - 1];
        typeof V != "string" && typeof M != "string" && (B ? M.focus() : V.focus());
      } else
        R.focus();
    };
    b.addEventListener("focusin", x), b.addEventListener("keydown", g, !0);
    const O = setInterval(() => {
      b.activeElement && b.activeElement.tagName === "BODY" && x();
    }, 50);
    return () => {
      clearInterval(O), b.removeEventListener("focusin", x), b.removeEventListener("keydown", g, !0);
    };
  }, [n, r, s, a, d, i]);
  const y = (b) => {
    h.current === null && (h.current = b.relatedTarget), T.current = !0, v.current = b.target;
    const g = t.props.onFocus;
    g && g(b);
  }, E = (b) => {
    h.current === null && (h.current = b.relatedTarget), T.current = !0;
  };
  return /* @__PURE__ */ ge(p.Fragment, {
    children: [/* @__PURE__ */ P("div", {
      tabIndex: d ? 0 : -1,
      onFocus: E,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ p.cloneElement(t, {
      ref: S,
      onFocus: y
    }), /* @__PURE__ */ P("div", {
      tabIndex: d ? 0 : -1,
      onFocus: E,
      ref: m,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Do.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Lo,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: e.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: e.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: e.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: e.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: e.func,
  /**
   * If `true`, focus is locked.
   */
  open: e.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Do["propTypes"] = tn(Do.propTypes));
function Us(o) {
  return typeof o == "function" ? o() : o;
}
const Bo = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    children: r,
    container: s,
    disablePortal: i = !1
  } = t, [a, d] = p.useState(null), l = Pe(/* @__PURE__ */ p.isValidElement(r) ? r.ref : null, n);
  if (Ue(() => {
    i || d(Us(s) || document.body);
  }, [s, i]), Ue(() => {
    if (a && !i)
      return Et(n, a), () => {
        Et(n, null);
      };
  }, [n, a, i]), i) {
    if (/* @__PURE__ */ p.isValidElement(r)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ p.cloneElement(r, u);
    }
    return /* @__PURE__ */ P(p.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ P(p.Fragment, {
    children: a && /* @__PURE__ */ wr.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (Bo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: e.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: e.oneOfType([xo, e.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: e.bool
});
process.env.NODE_ENV !== "production" && (Bo["propTypes"] = tn(Bo.propTypes));
function qs(o) {
  const t = Ne(o);
  return t.body === o ? _e(o).innerWidth > t.documentElement.clientWidth : o.scrollHeight > o.clientHeight;
}
function go(o, t) {
  t ? o.setAttribute("aria-hidden", "true") : o.removeAttribute("aria-hidden");
}
function Mt(o) {
  return parseInt(_e(o).getComputedStyle(o).paddingRight, 10) || 0;
}
function Hs(o) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(o.tagName) !== -1, r = o.tagName === "INPUT" && o.getAttribute("type") === "hidden";
  return n || r;
}
function Ft(o, t, n, r, s) {
  const i = [t, n, ...r];
  [].forEach.call(o.children, (a) => {
    const d = i.indexOf(a) === -1, l = !Hs(a);
    d && l && go(a, s);
  });
}
function Xo(o, t) {
  let n = -1;
  return o.some((r, s) => t(r) ? (n = s, !0) : !1), n;
}
function Ks(o, t) {
  const n = [], r = o.container;
  if (!t.disableScrollLock) {
    if (qs(r)) {
      const a = an(Ne(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Mt(r) + a}px`;
      const d = Ne(r).querySelectorAll(".mui-fixed");
      [].forEach.call(d, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${Mt(l) + a}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = Ne(r).body;
    else {
      const a = r.parentElement, d = _e(r);
      i = (a == null ? void 0 : a.nodeName) === "HTML" && d.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: a,
      property: d
    }) => {
      i ? a.style.setProperty(d, i) : a.style.removeProperty(d);
    });
  };
}
function Gs(o) {
  const t = [];
  return [].forEach.call(o.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Ys {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && go(t.modalRef, !1);
    const s = Gs(n);
    Ft(n, t.mount, t.modalRef, s, !0);
    const i = Xo(this.containers, (a) => a.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: s
    }), r);
  }
  mount(t, n) {
    const r = Xo(this.containers, (i) => i.modals.indexOf(t) !== -1), s = this.containers[r];
    s.restore || (s.restore = Ks(s, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const s = Xo(this.containers, (a) => a.modals.indexOf(t) !== -1), i = this.containers[s];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && go(t.modalRef, n), Ft(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(s, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && go(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function Xs(o) {
  return typeof o == "function" ? o() : o;
}
function Zs(o) {
  return o ? o.props.hasOwnProperty("in") : !1;
}
const Js = new Ys();
function Qs(o) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: s = Js,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: d,
    children: l,
    onClose: u,
    open: m,
    rootRef: h
  } = o, v = p.useRef({}), T = p.useRef(null), C = p.useRef(null), S = Pe(C, h), [f, y] = p.useState(!m), E = Zs(l);
  let b = !0;
  (o["aria-hidden"] === "false" || o["aria-hidden"] === !1) && (b = !1);
  const g = () => Ne(T.current), x = () => (v.current.modalRef = C.current, v.current.mount = T.current, v.current), O = () => {
    s.mount(x(), {
      disableScrollLock: r
    }), C.current && (C.current.scrollTop = 0);
  }, R = vo(() => {
    const L = Xs(t) || g().body;
    s.add(x(), L), C.current && O();
  }), $ = p.useCallback(() => s.isTopModal(x()), [s]), F = vo((L) => {
    T.current = L, L && (m && $() ? O() : C.current && go(C.current, b));
  }), A = p.useCallback(() => {
    s.remove(x(), b);
  }, [b, s]);
  p.useEffect(() => () => {
    A();
  }, [A]), p.useEffect(() => {
    m ? R() : (!E || !i) && A();
  }, [m, A, E, i, R]);
  const B = (L) => (D) => {
    var z;
    (z = L.onKeyDown) == null || z.call(L, D), !(D.key !== "Escape" || D.which === 229 || // Wait until IME is settled.
    !$()) && (n || (D.stopPropagation(), u && u(D, "escapeKeyDown")));
  }, V = (L) => (D) => {
    var z;
    (z = L.onClick) == null || z.call(L, D), D.target === D.currentTarget && u && u(D, "backdropClick");
  };
  return {
    getRootProps: (L = {}) => {
      const D = vn(o);
      delete D.onTransitionEnter, delete D.onTransitionExited;
      const z = c({}, D, L);
      return c({
        role: "presentation"
      }, z, {
        onKeyDown: B(z),
        ref: S
      });
    },
    getBackdropProps: (L = {}) => {
      const D = L;
      return c({
        "aria-hidden": !0
      }, D, {
        onClick: V(D),
        open: m
      });
    },
    getTransitionProps: () => {
      const L = () => {
        y(!1), a && a();
      }, D = () => {
        y(!0), d && d(), i && A();
      };
      return {
        onEnter: Ot(L, l == null ? void 0 : l.props.onEnter),
        onExited: Ot(D, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: S,
    portalRef: F,
    isTopModal: $,
    exited: f,
    hasTransition: E
  };
}
const ei = ["onChange", "maxRows", "minRows", "style", "value"];
function No(o) {
  return parseInt(o, 10) || 0;
}
const oi = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function ti(o) {
  return o == null || Object.keys(o).length === 0 || o.outerHeightStyle === 0 && !o.overflowing;
}
const Tn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: s,
    minRows: i = 1,
    style: a,
    value: d
  } = t, l = H(t, ei), {
    current: u
  } = p.useRef(d != null), m = p.useRef(null), h = Pe(n, m), v = p.useRef(null), T = p.useCallback(() => {
    const f = m.current, E = _e(f).getComputedStyle(f);
    if (E.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const b = v.current;
    b.style.width = E.width, b.value = f.value || t.placeholder || "x", b.value.slice(-1) === `
` && (b.value += " ");
    const g = E.boxSizing, x = No(E.paddingBottom) + No(E.paddingTop), O = No(E.borderBottomWidth) + No(E.borderTopWidth), R = b.scrollHeight;
    b.value = "x";
    const $ = b.scrollHeight;
    let F = R;
    i && (F = Math.max(Number(i) * $, F)), s && (F = Math.min(Number(s) * $, F)), F = Math.max(F, $);
    const A = F + (g === "border-box" ? x + O : 0), B = Math.abs(F - R) <= 1;
    return {
      outerHeightStyle: A,
      overflowing: B
    };
  }, [s, i, t.placeholder]), C = p.useCallback(() => {
    const f = T();
    if (ti(f))
      return;
    const y = m.current;
    y.style.height = `${f.outerHeightStyle}px`, y.style.overflow = f.overflowing ? "hidden" : "";
  }, [T]);
  Ue(() => {
    const f = () => {
      C();
    };
    let y;
    const E = () => {
      cancelAnimationFrame(y), y = requestAnimationFrame(() => {
        f();
      });
    }, b = jo(f), g = m.current, x = _e(g);
    x.addEventListener("resize", b);
    let O;
    return typeof ResizeObserver < "u" && (O = new ResizeObserver(process.env.NODE_ENV === "test" ? E : f), O.observe(g)), () => {
      b.clear(), cancelAnimationFrame(y), x.removeEventListener("resize", b), O && O.disconnect();
    };
  }, [T, C]), Ue(() => {
    C();
  });
  const S = (f) => {
    u || C(), r && r(f);
  };
  return /* @__PURE__ */ ge(p.Fragment, {
    children: [/* @__PURE__ */ P("textarea", c({
      value: d,
      onChange: S,
      ref: h,
      rows: i
    }, l)), /* @__PURE__ */ P("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: v,
      tabIndex: -1,
      style: c({}, oi.shadow, a, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Tn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: e.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: e.oneOfType([e.number, e.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: e.oneOfType([e.number, e.string]),
  /**
   * @ignore
   */
  onChange: e.func,
  /**
   * @ignore
   */
  placeholder: e.string,
  /**
   * @ignore
   */
  style: e.object,
  /**
   * @ignore
   */
  value: e.oneOfType([e.arrayOf(e.string), e.number, e.string])
});
function eo({
  props: o,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, s) => (r[s] = o[s], n && typeof o[s] > "u" && (r[s] = n[s]), r), {});
}
const Sn = /* @__PURE__ */ p.createContext(void 0);
process.env.NODE_ENV !== "production" && (Sn.displayName = "FormControlContext");
const ut = Sn;
function He() {
  return p.useContext(ut);
}
function Rn(o) {
  return /* @__PURE__ */ P(nn, c({}, o, {
    defaultTheme: Sr,
    themeId: Cr
  }));
}
process.env.NODE_ENV !== "production" && (Rn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: e.oneOfType([e.array, e.func, e.number, e.object, e.string, e.bool])
});
function Dt(o) {
  return o != null && !(Array.isArray(o) && o.length === 0);
}
function Ao(o, t = !1) {
  return o && (Dt(o.value) && o.value !== "" || t && Dt(o.defaultValue) && o.defaultValue !== "");
}
function ni(o) {
  return o.startAdornment;
}
function ri(o) {
  return ee("MuiInputBase", o);
}
const si = oe("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), io = si, ii = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], Wo = (o, t) => {
  const {
    ownerState: n
  } = o;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${le(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Vo = (o, t) => {
  const {
    ownerState: n
  } = o;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, ai = (o) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: s,
    endAdornment: i,
    focused: a,
    formControl: d,
    fullWidth: l,
    hiddenLabel: u,
    multiline: m,
    readOnly: h,
    size: v,
    startAdornment: T,
    type: C
  } = o, S = {
    root: ["root", `color${le(n)}`, r && "disabled", s && "error", l && "fullWidth", a && "focused", d && "formControl", v && v !== "medium" && `size${le(v)}`, m && "multiline", T && "adornedStart", i && "adornedEnd", u && "hiddenLabel", h && "readOnly"],
    input: ["input", r && "disabled", C === "search" && "inputTypeSearch", m && "inputMultiline", v === "small" && "inputSizeSmall", u && "inputHiddenLabel", T && "inputAdornedStart", i && "inputAdornedEnd", h && "readOnly"]
  };
  return ne(S, ri, t);
}, Uo = W("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Wo
})(({
  theme: o,
  ownerState: t
}) => c({}, o.typography.body1, {
  color: (o.vars || o).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${io.disabled}`]: {
    color: (o.vars || o).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && c({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), qo = W("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Vo
})(({
  theme: o,
  ownerState: t
}) => {
  const n = o.palette.mode === "light", r = c({
    color: "currentColor"
  }, o.vars ? {
    opacity: o.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  }, {
    transition: o.transitions.create("opacity", {
      duration: o.transitions.duration.shorter
    })
  }), s = {
    opacity: "0 !important"
  }, i = o.vars ? {
    opacity: o.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  };
  return c({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&:-ms-input-placeholder": r,
    // IE11
    "&::-ms-input-placeholder": r,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${io.formControl} &`]: {
      "&::-webkit-input-placeholder": s,
      "&::-moz-placeholder": s,
      // Firefox 19+
      "&:-ms-input-placeholder": s,
      // IE11
      "&::-ms-input-placeholder": s,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": i,
      // IE11
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${io.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (o.vars || o).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, t.size === "small" && {
    paddingTop: 1
  }, t.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, t.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), li = /* @__PURE__ */ P(Rn, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), On = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var r;
  const s = ce({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: a,
    autoFocus: d,
    className: l,
    components: u = {},
    componentsProps: m = {},
    defaultValue: h,
    disabled: v,
    disableInjectingGlobalStyles: T,
    endAdornment: C,
    fullWidth: S = !1,
    id: f,
    inputComponent: y = "input",
    inputProps: E = {},
    inputRef: b,
    maxRows: g,
    minRows: x,
    multiline: O = !1,
    name: R,
    onBlur: $,
    onChange: F,
    onClick: A,
    onFocus: B,
    onKeyDown: V,
    onKeyUp: M,
    placeholder: k,
    readOnly: I,
    renderSuffix: L,
    rows: D,
    slotProps: z = {},
    slots: U = {},
    startAdornment: G,
    type: fe = "text",
    value: me
  } = s, ue = H(s, ii), J = E.value != null ? E.value : me, {
    current: be
  } = p.useRef(J != null), j = p.useRef(), re = p.useCallback((te) => {
    process.env.NODE_ENV !== "production" && te && te.nodeName !== "INPUT" && !te.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), de = Pe(j, b, E.ref, re), [xe, ye] = p.useState(!1), X = He();
  process.env.NODE_ENV !== "production" && p.useEffect(() => {
    if (X)
      return X.registerEffect();
  }, [X]);
  const pe = eo({
    props: s,
    muiFormControl: X,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  pe.focused = X ? X.focused : xe, p.useEffect(() => {
    !X && v && xe && (ye(!1), $ && $());
  }, [X, v, xe, $]);
  const Z = X && X.onFilled, N = X && X.onEmpty, se = p.useCallback((te) => {
    Ao(te) ? Z && Z() : N && N();
  }, [Z, N]);
  Ue(() => {
    be && se({
      value: J
    });
  }, [J, se, be]);
  const Ce = (te) => {
    if (pe.disabled) {
      te.stopPropagation();
      return;
    }
    B && B(te), E.onFocus && E.onFocus(te), X && X.onFocus ? X.onFocus(te) : ye(!0);
  }, he = (te) => {
    $ && $(te), E.onBlur && E.onBlur(te), X && X.onBlur ? X.onBlur(te) : ye(!1);
  }, Se = (te, ...Fe) => {
    if (!be) {
      const De = te.target || j.current;
      if (De == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Qt(1));
      se({
        value: De.value
      });
    }
    E.onChange && E.onChange(te, ...Fe), F && F(te, ...Fe);
  };
  p.useEffect(() => {
    se(j.current);
  }, []);
  const $e = (te) => {
    j.current && te.currentTarget === te.target && j.current.focus(), A && A(te);
  };
  let we = y, ve = E;
  O && we === "input" && (D ? (process.env.NODE_ENV !== "production" && (x || g) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), ve = c({
    type: void 0,
    minRows: D,
    maxRows: D
  }, ve)) : ve = c({
    type: void 0,
    maxRows: g,
    minRows: x
  }, ve), we = Tn);
  const Ie = (te) => {
    se(te.animationName === "mui-auto-fill-cancel" ? j.current : {
      value: "x"
    });
  };
  p.useEffect(() => {
    X && X.setAdornedStart(!!G);
  }, [X, G]);
  const Re = c({}, s, {
    color: pe.color || "primary",
    disabled: pe.disabled,
    endAdornment: C,
    error: pe.error,
    focused: pe.focused,
    formControl: X,
    fullWidth: S,
    hiddenLabel: pe.hiddenLabel,
    multiline: O,
    size: pe.size,
    startAdornment: G,
    type: fe
  }), Ee = ai(Re), je = U.root || u.Root || Uo, Ke = z.root || m.root || {}, Ge = U.input || u.Input || qo;
  return ve = c({}, ve, (r = z.input) != null ? r : m.input), /* @__PURE__ */ ge(p.Fragment, {
    children: [!T && li, /* @__PURE__ */ ge(je, c({}, Ke, !Fo(je) && {
      ownerState: c({}, Re, Ke.ownerState)
    }, {
      ref: n,
      onClick: $e
    }, ue, {
      className: K(Ee.root, Ke.className, l, I && "MuiInputBase-readOnly"),
      children: [G, /* @__PURE__ */ P(ut.Provider, {
        value: null,
        children: /* @__PURE__ */ P(Ge, c({
          ownerState: Re,
          "aria-invalid": pe.error,
          "aria-describedby": i,
          autoComplete: a,
          autoFocus: d,
          defaultValue: h,
          disabled: pe.disabled,
          id: f,
          onAnimationStart: Ie,
          name: R,
          placeholder: k,
          readOnly: I,
          required: pe.required,
          rows: D,
          value: J,
          onKeyDown: V,
          onKeyUp: M,
          type: fe
        }, ve, !Fo(Ge) && {
          as: we,
          ownerState: c({}, Re, ve.ownerState)
        }, {
          ref: de,
          className: K(Ee.input, ve.className, I && "MuiInputBase-readOnly"),
          onBlur: he,
          onChange: Se,
          onFocus: Ce
        }))
      }), C, L ? L(c({}, pe, {
        startAdornment: G
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (On.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": e.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: e.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: e.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: e.oneOfType([e.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), e.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: e.shape({
    Input: e.elementType,
    Root: e.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: e.shape({
    input: e.object,
    root: e.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: e.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: e.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: e.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: e.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: e.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: e.bool,
  /**
   * The id of the `input` element.
   */
  id: e.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: at,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: e.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Me,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: e.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: e.oneOfType([e.number, e.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: e.oneOfType([e.number, e.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: e.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: e.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: e.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: e.func,
  /**
   * @ignore
   */
  onClick: e.func,
  /**
   * @ignore
   */
  onFocus: e.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: e.func,
  /**
   * @ignore
   */
  onKeyDown: e.func,
  /**
   * @ignore
   */
  onKeyUp: e.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: e.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: e.bool,
  /**
   * @ignore
   */
  renderSuffix: e.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: e.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: e.oneOfType([e.number, e.string]),
  /**
   * The size of the component.
   */
  size: e.oneOfType([e.oneOf(["medium", "small"]), e.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: e.shape({
    input: e.object,
    root: e.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: e.shape({
    input: e.elementType,
    root: e.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: e.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: e.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: e.any
});
const pt = On;
function ci(o) {
  return ee("MuiInput", o);
}
const di = c({}, io, oe("MuiInput", ["root", "underline", "input"])), uo = di;
function ui(o) {
  return ee("MuiOutlinedInput", o);
}
const pi = c({}, io, oe("MuiOutlinedInput", ["root", "notchedOutline", "input"])), Ve = pi;
function fi(o) {
  return ee("MuiFilledInput", o);
}
const mi = c({}, io, oe("MuiFilledInput", ["root", "underline", "input"])), Ye = mi, bi = ao(/* @__PURE__ */ P("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), hi = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], vi = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Pn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = qe(), s = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: a = !0,
    children: d,
    easing: l,
    in: u,
    onEnter: m,
    onEntered: h,
    onEntering: v,
    onExit: T,
    onExited: C,
    onExiting: S,
    style: f,
    timeout: y = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: E = ct
  } = t, b = H(t, hi), g = p.useRef(null), x = Pe(g, d.ref, n), O = (k) => (I) => {
    if (k) {
      const L = g.current;
      I === void 0 ? k(L) : k(L, I);
    }
  }, R = O(v), $ = O((k, I) => {
    pn(k);
    const L = so({
      style: f,
      timeout: y,
      easing: l
    }, {
      mode: "enter"
    });
    k.style.webkitTransition = r.transitions.create("opacity", L), k.style.transition = r.transitions.create("opacity", L), m && m(k, I);
  }), F = O(h), A = O(S), B = O((k) => {
    const I = so({
      style: f,
      timeout: y,
      easing: l
    }, {
      mode: "exit"
    });
    k.style.webkitTransition = r.transitions.create("opacity", I), k.style.transition = r.transitions.create("opacity", I), T && T(k);
  }), V = O(C);
  return /* @__PURE__ */ P(E, c({
    appear: a,
    in: u,
    nodeRef: g,
    onEnter: $,
    onEntered: F,
    onEntering: R,
    onExit: B,
    onExited: V,
    onExiting: A,
    addEndListener: (k) => {
      i && i(g.current, k);
    },
    timeout: y
  }, b, {
    children: (k, I) => /* @__PURE__ */ p.cloneElement(d, c({
      style: c({
        opacity: 0,
        visibility: k === "exited" && !u ? "hidden" : void 0
      }, vi[k], f, d.props.style),
      ref: x
    }, I))
  }));
});
process.env.NODE_ENV !== "production" && (Pn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: e.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: e.bool,
  /**
   * A single child content element.
   */
  children: Lo.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: e.oneOfType([e.shape({
    enter: e.string,
    exit: e.string
  }), e.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: e.bool,
  /**
   * @ignore
   */
  onEnter: e.func,
  /**
   * @ignore
   */
  onEntered: e.func,
  /**
   * @ignore
   */
  onEntering: e.func,
  /**
   * @ignore
   */
  onExit: e.func,
  /**
   * @ignore
   */
  onExited: e.func,
  /**
   * @ignore
   */
  onExiting: e.func,
  /**
   * @ignore
   */
  style: e.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: e.oneOfType([e.number, e.shape({
    appear: e.number,
    enter: e.number,
    exit: e.number
  })])
});
const wn = Pn;
function gi(o) {
  return ee("MuiBackdrop", o);
}
const yi = oe("MuiBackdrop", ["root", "invisible"]), od = yi, xi = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Ci = (o) => {
  const {
    classes: t,
    invisible: n
  } = o;
  return ne({
    root: ["root", n && "invisible"]
  }, gi, t);
}, Ei = W("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: o
}) => c({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, o.invisible && {
  backgroundColor: "transparent"
})), Nn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var r, s, i;
  const a = ce({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: d,
    className: l,
    component: u = "div",
    components: m = {},
    componentsProps: h = {},
    invisible: v = !1,
    open: T,
    slotProps: C = {},
    slots: S = {},
    TransitionComponent: f = wn,
    transitionDuration: y
  } = a, E = H(a, xi), b = c({}, a, {
    component: u,
    invisible: v
  }), g = Ci(b), x = (r = C.root) != null ? r : h.root;
  return /* @__PURE__ */ P(f, c({
    in: T,
    timeout: y
  }, E, {
    children: /* @__PURE__ */ P(Ei, c({
      "aria-hidden": !0
    }, x, {
      as: (s = (i = S.root) != null ? i : m.Root) != null ? s : u,
      className: K(g.root, l, x == null ? void 0 : x.className),
      ownerState: c({}, b, x == null ? void 0 : x.ownerState),
      classes: g,
      ref: n,
      children: d
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Nn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: e.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: e.shape({
    Root: e.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: e.shape({
    root: e.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: e.bool,
  /**
   * If `true`, the component is shown.
   */
  open: e.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: e.shape({
    root: e.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: e.shape({
    root: e.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: e.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: e.oneOfType([e.number, e.shape({
    appear: e.number,
    enter: e.number,
    exit: e.number
  })])
});
const In = Nn;
function Ti(o) {
  return ee("PrivateSwitchBase", o);
}
oe("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Si = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"], Ri = (o) => {
  const {
    classes: t,
    checked: n,
    disabled: r,
    edge: s
  } = o, i = {
    root: ["root", n && "checked", r && "disabled", s && `edge${le(s)}`],
    input: ["input"]
  };
  return ne(i, Ti, t);
}, Oi = W(Eo)(({
  ownerState: o
}) => c({
  padding: 9,
  borderRadius: "50%"
}, o.edge === "start" && {
  marginLeft: o.size === "small" ? -3 : -12
}, o.edge === "end" && {
  marginRight: o.size === "small" ? -3 : -12
})), Pi = W("input", {
  shouldForwardProp: ke
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), $n = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    autoFocus: r,
    checked: s,
    checkedIcon: i,
    className: a,
    defaultChecked: d,
    disabled: l,
    disableFocusRipple: u = !1,
    edge: m = !1,
    icon: h,
    id: v,
    inputProps: T,
    inputRef: C,
    name: S,
    onBlur: f,
    onChange: y,
    onFocus: E,
    readOnly: b,
    required: g = !1,
    tabIndex: x,
    type: O,
    value: R
  } = t, $ = H(t, Si), [F, A] = Mo({
    controlled: s,
    default: !!d,
    name: "SwitchBase",
    state: "checked"
  }), B = He(), V = (U) => {
    E && E(U), B && B.onFocus && B.onFocus(U);
  }, M = (U) => {
    f && f(U), B && B.onBlur && B.onBlur(U);
  }, k = (U) => {
    if (U.nativeEvent.defaultPrevented)
      return;
    const G = U.target.checked;
    A(G), y && y(U, G);
  };
  let I = l;
  B && typeof I > "u" && (I = B.disabled);
  const L = O === "checkbox" || O === "radio", D = c({}, t, {
    checked: F,
    disabled: I,
    disableFocusRipple: u,
    edge: m
  }), z = Ri(D);
  return /* @__PURE__ */ ge(Oi, c({
    component: "span",
    className: K(z.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: I,
    tabIndex: null,
    role: void 0,
    onFocus: V,
    onBlur: M,
    ownerState: D,
    ref: n
  }, $, {
    children: [/* @__PURE__ */ P(Pi, c({
      autoFocus: r,
      checked: s,
      defaultChecked: d,
      className: z.input,
      disabled: I,
      id: L ? v : void 0,
      name: S,
      onChange: k,
      readOnly: b,
      ref: C,
      required: g,
      ownerState: D,
      tabIndex: x,
      type: O
    }, O === "checkbox" && R === void 0 ? {} : {
      value: R
    }, T)), F ? i : h]
  }));
});
process.env.NODE_ENV !== "production" && ($n.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: e.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: e.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: e.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * @ignore
   */
  defaultChecked: e.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: e.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: e.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: e.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: e.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: e.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: e.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Me,
  /*
   * @ignore
   */
  name: e.string,
  /**
   * @ignore
   */
  onBlur: e.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: e.func,
  /**
   * @ignore
   */
  onFocus: e.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: e.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: e.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.object,
  /**
   * @ignore
   */
  tabIndex: e.oneOfType([e.number, e.string]),
  /**
   * The input component prop `type`.
   */
  type: e.string.isRequired,
  /**
   * The value of the component.
   */
  value: e.any
});
const wi = $n, Ni = ao(/* @__PURE__ */ P("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), Ii = ao(/* @__PURE__ */ P("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), $i = ao(/* @__PURE__ */ P("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function ki(o) {
  return ee("MuiCheckbox", o);
}
const Mi = oe("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), Zo = Mi, Fi = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"], Di = (o) => {
  const {
    classes: t,
    indeterminate: n,
    color: r,
    size: s
  } = o, i = {
    root: ["root", n && "indeterminate", `color${le(r)}`, `size${le(s)}`]
  }, a = ne(i, ki, t);
  return c({}, t, a);
}, Bi = W(wi, {
  shouldForwardProp: (o) => ke(o) || o === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [t.root, n.indeterminate && t.indeterminate, t[`size${le(n.size)}`], n.color !== "default" && t[`color${le(n.color)}`]];
  }
})(({
  theme: o,
  ownerState: t
}) => c({
  color: (o.vars || o).palette.text.secondary
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: o.vars ? `rgba(${t.color === "default" ? o.vars.palette.action.activeChannel : o.vars.palette[t.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : Qe(t.color === "default" ? o.palette.action.active : o.palette[t.color].main, o.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.color !== "default" && {
  [`&.${Zo.checked}, &.${Zo.indeterminate}`]: {
    color: (o.vars || o).palette[t.color].main
  },
  [`&.${Zo.disabled}`]: {
    color: (o.vars || o).palette.action.disabled
  }
})), Ai = /* @__PURE__ */ P(Ii, {}), _i = /* @__PURE__ */ P(Ni, {}), Li = /* @__PURE__ */ P($i, {}), kn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var r, s;
  const i = ce({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: a = Ai,
    color: d = "primary",
    icon: l = _i,
    indeterminate: u = !1,
    indeterminateIcon: m = Li,
    inputProps: h,
    size: v = "medium",
    className: T
  } = i, C = H(i, Fi), S = u ? m : l, f = u ? m : a, y = c({}, i, {
    color: d,
    indeterminate: u,
    size: v
  }), E = Di(y);
  return /* @__PURE__ */ P(Bi, c({
    type: "checkbox",
    inputProps: c({
      "data-indeterminate": u
    }, h),
    icon: /* @__PURE__ */ p.cloneElement(S, {
      fontSize: (r = S.props.fontSize) != null ? r : v
    }),
    checkedIcon: /* @__PURE__ */ p.cloneElement(f, {
      fontSize: (s = f.props.fontSize) != null ? s : v
    }),
    ownerState: y,
    ref: n,
    className: K(E.root, T)
  }, C, {
    classes: E
  }));
});
process.env.NODE_ENV !== "production" && (kn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: e.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: e.oneOfType([e.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), e.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: e.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: e.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: e.node,
  /**
   * The id of the `input` element.
   */
  id: e.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: e.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: e.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: e.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Me,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: e.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: e.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: e.oneOfType([e.oneOf(["medium", "small"]), e.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: e.any
});
const td = kn;
function ji(o) {
  return ee("MuiModal", o);
}
const zi = oe("MuiModal", ["root", "hidden", "backdrop"]), nd = zi, Wi = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], Vi = (o) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = o;
  return ne({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, ji, r);
}, Ui = W("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: o,
  ownerState: t
}) => c({
  position: "fixed",
  zIndex: (o.vars || o).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), qi = W(In, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (o, t) => t.backdrop
})({
  zIndex: -1
}), Mn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var r, s, i, a, d, l;
  const u = ce({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: m = qi,
    BackdropProps: h,
    className: v,
    closeAfterTransition: T = !1,
    children: C,
    container: S,
    component: f,
    components: y = {},
    componentsProps: E = {},
    disableAutoFocus: b = !1,
    disableEnforceFocus: g = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: O = !1,
    disableRestoreFocus: R = !1,
    disableScrollLock: $ = !1,
    hideBackdrop: F = !1,
    keepMounted: A = !1,
    onBackdropClick: B,
    open: V,
    slotProps: M,
    slots: k
    // eslint-disable-next-line react/prop-types
  } = u, I = H(u, Wi), L = c({}, u, {
    closeAfterTransition: T,
    disableAutoFocus: b,
    disableEnforceFocus: g,
    disableEscapeKeyDown: x,
    disablePortal: O,
    disableRestoreFocus: R,
    disableScrollLock: $,
    hideBackdrop: F,
    keepMounted: A
  }), {
    getRootProps: D,
    getBackdropProps: z,
    getTransitionProps: U,
    portalRef: G,
    isTopModal: fe,
    exited: me,
    hasTransition: ue
  } = Qs(c({}, L, {
    rootRef: n
  })), J = c({}, L, {
    exited: me
  }), be = Vi(J), j = {};
  if (C.props.tabIndex === void 0 && (j.tabIndex = "-1"), ue) {
    const {
      onEnter: Z,
      onExited: N
    } = U();
    j.onEnter = Z, j.onExited = N;
  }
  const re = (r = (s = k == null ? void 0 : k.root) != null ? s : y.Root) != null ? r : Ui, de = (i = (a = k == null ? void 0 : k.backdrop) != null ? a : y.Backdrop) != null ? i : m, xe = (d = M == null ? void 0 : M.root) != null ? d : E.root, ye = (l = M == null ? void 0 : M.backdrop) != null ? l : E.backdrop, X = Ae({
    elementType: re,
    externalSlotProps: xe,
    externalForwardedProps: I,
    getSlotProps: D,
    additionalProps: {
      ref: n,
      as: f
    },
    ownerState: J,
    className: K(v, xe == null ? void 0 : xe.className, be == null ? void 0 : be.root, !J.open && J.exited && (be == null ? void 0 : be.hidden))
  }), pe = Ae({
    elementType: de,
    externalSlotProps: ye,
    additionalProps: h,
    getSlotProps: (Z) => z(c({}, Z, {
      onClick: (N) => {
        B && B(N), Z != null && Z.onClick && Z.onClick(N);
      }
    })),
    className: K(ye == null ? void 0 : ye.className, h == null ? void 0 : h.className, be == null ? void 0 : be.backdrop),
    ownerState: J
  });
  return !A && !V && (!ue || me) ? null : /* @__PURE__ */ P(Bo, {
    ref: G,
    container: S,
    disablePortal: O,
    children: /* @__PURE__ */ ge(re, c({}, X, {
      children: [!F && m ? /* @__PURE__ */ P(de, c({}, pe)) : null, /* @__PURE__ */ P(Do, {
        disableEnforceFocus: g,
        disableAutoFocus: b,
        disableRestoreFocus: R,
        isEnabled: fe,
        open: V,
        children: /* @__PURE__ */ p.cloneElement(C, j)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Mn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: e.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: e.object,
  /**
   * A single child content element.
   */
  children: Lo.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: e.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: e.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: e.shape({
    Backdrop: e.elementType,
    Root: e.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: e.shape({
    backdrop: e.oneOfType([e.func, e.object]),
    root: e.oneOfType([e.func, e.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: e.oneOfType([xo, e.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: e.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: e.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: e.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: e.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: e.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: e.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: e.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: e.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: e.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: e.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: e.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: e.func,
  /**
   * If `true`, the component is shown.
   */
  open: e.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: e.shape({
    backdrop: e.oneOfType([e.func, e.object]),
    root: e.oneOfType([e.func, e.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: e.shape({
    backdrop: e.elementType,
    root: e.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object])
});
const Fn = Mn;
function Hi(o) {
  return ee("MuiDialog", o);
}
const Ki = oe("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Jo = Ki, Dn = /* @__PURE__ */ p.createContext({});
process.env.NODE_ENV !== "production" && (Dn.displayName = "DialogContext");
const Gi = Dn, Yi = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], Xi = W(In, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (o, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), Zi = (o) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: s,
    fullScreen: i
  } = o, a = {
    root: ["root"],
    container: ["container", `scroll${le(n)}`],
    paper: ["paper", `paperScroll${le(n)}`, `paperWidth${le(String(r))}`, s && "paperFullWidth", i && "paperFullScreen"]
  };
  return ne(a, Hi, t);
}, Ji = W(Fn, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (o, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), Qi = W("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [t.container, t[`scroll${le(n.scroll)}`]];
  }
})(({
  ownerState: o
}) => c({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, o.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, o.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&::after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
})), ea = W(zo, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [t.paper, t[`scrollPaper${le(n.scroll)}`], t[`paperWidth${le(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(({
  theme: o,
  ownerState: t
}) => c({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, t.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, t.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
  // 'initial' doesn't work on IE11
}, !t.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, t.maxWidth === "xs" && {
  maxWidth: o.breakpoints.unit === "px" ? Math.max(o.breakpoints.values.xs, 444) : `max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,
  [`&.${Jo.paperScrollBody}`]: {
    [o.breakpoints.down(Math.max(o.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.maxWidth && t.maxWidth !== "xs" && {
  maxWidth: `${o.breakpoints.values[t.maxWidth]}${o.breakpoints.unit}`,
  [`&.${Jo.paperScrollBody}`]: {
    [o.breakpoints.down(o.breakpoints.values[t.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.fullWidth && {
  width: "calc(100% - 64px)"
}, t.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${Jo.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), Bn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiDialog"
  }), s = qe(), i = {
    enter: s.transitions.duration.enteringScreen,
    exit: s.transitions.duration.leavingScreen
  }, {
    "aria-describedby": a,
    "aria-labelledby": d,
    BackdropComponent: l,
    BackdropProps: u,
    children: m,
    className: h,
    disableEscapeKeyDown: v = !1,
    fullScreen: T = !1,
    fullWidth: C = !1,
    maxWidth: S = "sm",
    onBackdropClick: f,
    onClose: y,
    open: E,
    PaperComponent: b = zo,
    PaperProps: g = {},
    scroll: x = "paper",
    TransitionComponent: O = wn,
    transitionDuration: R = i,
    TransitionProps: $
  } = r, F = H(r, Yi), A = c({}, r, {
    disableEscapeKeyDown: v,
    fullScreen: T,
    fullWidth: C,
    maxWidth: S,
    scroll: x
  }), B = Zi(A), V = p.useRef(), M = (D) => {
    V.current = D.target === D.currentTarget;
  }, k = (D) => {
    V.current && (V.current = null, f && f(D), y && y(D, "backdropClick"));
  }, I = lt(d), L = p.useMemo(() => ({
    titleId: I
  }), [I]);
  return /* @__PURE__ */ P(Ji, c({
    className: K(B.root, h),
    closeAfterTransition: !0,
    components: {
      Backdrop: Xi
    },
    componentsProps: {
      backdrop: c({
        transitionDuration: R,
        as: l
      }, u)
    },
    disableEscapeKeyDown: v,
    onClose: y,
    open: E,
    ref: n,
    onClick: k,
    ownerState: A
  }, F, {
    children: /* @__PURE__ */ P(O, c({
      appear: !0,
      in: E,
      timeout: R,
      role: "presentation"
    }, $, {
      children: /* @__PURE__ */ P(Qi, {
        className: K(B.container),
        onMouseDown: M,
        ownerState: A,
        children: /* @__PURE__ */ P(ea, c({
          as: b,
          elevation: 24,
          role: "dialog",
          "aria-describedby": a,
          "aria-labelledby": I
        }, g, {
          className: K(B.paper, g.className),
          ownerState: A,
          children: /* @__PURE__ */ P(Gi.Provider, {
            value: L,
            children: m
          })
        }))
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Bn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": e.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": e.string,
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: e.elementType,
  /**
   * @ignore
   */
  BackdropProps: e.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: e.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: e.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: e.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: e.oneOfType([e.oneOf(["xs", "sm", "md", "lg", "xl", !1]), e.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: e.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: e.func,
  /**
   * If `true`, the component is shown.
   */
  open: e.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: e.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: e.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: e.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: e.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: e.oneOfType([e.number, e.shape({
    appear: e.number,
    enter: e.number,
    exit: e.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: e.object
});
const rd = Bn;
function oa(o) {
  return ee("MuiDialogActions", o);
}
const ta = oe("MuiDialogActions", ["root", "spacing"]), sd = ta, na = ["className", "disableSpacing"], ra = (o) => {
  const {
    classes: t,
    disableSpacing: n
  } = o;
  return ne({
    root: ["root", !n && "spacing"]
  }, oa, t);
}, sa = W("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [t.root, !n.disableSpacing && t.spacing];
  }
})(({
  ownerState: o
}) => c({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !o.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
})), An = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: s,
    disableSpacing: i = !1
  } = r, a = H(r, na), d = c({}, r, {
    disableSpacing: i
  }), l = ra(d);
  return /* @__PURE__ */ P(sa, c({
    className: K(l.root, s),
    ownerState: d,
    ref: n
  }, a));
});
process.env.NODE_ENV !== "production" && (An.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: e.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object])
});
const id = An;
function ad(o) {
  return ee("MuiDivider", o);
}
const ia = oe("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), Bt = ia, aa = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], la = (o) => {
  const {
    classes: t,
    disableUnderline: n
  } = o, s = ne({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, fi, t);
  return c({}, t, s);
}, ca = W(Uo, {
  shouldForwardProp: (o) => ke(o) || o === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [...Wo(o, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: o,
  ownerState: t
}) => {
  var n;
  const r = o.palette.mode === "light", s = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", a = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", d = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return c({
    position: "relative",
    backgroundColor: o.vars ? o.vars.palette.FilledInput.bg : i,
    borderTopLeftRadius: (o.vars || o).shape.borderRadius,
    borderTopRightRadius: (o.vars || o).shape.borderRadius,
    transition: o.transitions.create("background-color", {
      duration: o.transitions.duration.shorter,
      easing: o.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: o.vars ? o.vars.palette.FilledInput.hoverBg : a,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: o.vars ? o.vars.palette.FilledInput.bg : i
      }
    },
    [`&.${Ye.focused}`]: {
      backgroundColor: o.vars ? o.vars.palette.FilledInput.bg : i
    },
    [`&.${Ye.disabled}`]: {
      backgroundColor: o.vars ? o.vars.palette.FilledInput.disabledBg : d
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(n = (o.vars || o).palette[t.color || "primary"]) == null ? void 0 : n.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: o.transitions.create("transform", {
        duration: o.transitions.duration.shorter,
        easing: o.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${Ye.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Ye.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (o.vars || o).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${o.vars ? `rgba(${o.vars.palette.common.onBackgroundChannel} / ${o.vars.opacity.inputUnderline})` : s}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: o.transitions.create("border-bottom-color", {
        duration: o.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${Ye.disabled}, .${Ye.error}):before`]: {
      borderBottom: `1px solid ${(o.vars || o).palette.text.primary}`
    },
    [`&.${Ye.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && c({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, t.hiddenLabel && t.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
}), da = W(qo, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Vo
})(({
  theme: o,
  ownerState: t
}) => c({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !o.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: o.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: o.palette.mode === "light" ? null : "#fff",
    caretColor: o.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, o.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [o.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, t.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
}, t.hiddenLabel && t.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, t.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
})), ft = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var r, s, i, a;
  const d = ce({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: l = {},
    componentsProps: u,
    fullWidth: m = !1,
    // declare here to prevent spreading to DOM
    inputComponent: h = "input",
    multiline: v = !1,
    slotProps: T,
    slots: C = {},
    type: S = "text"
  } = d, f = H(d, aa), y = c({}, d, {
    fullWidth: m,
    inputComponent: h,
    multiline: v,
    type: S
  }), E = la(d), b = {
    root: {
      ownerState: y
    },
    input: {
      ownerState: y
    }
  }, g = T ?? u ? _o(b, T ?? u) : b, x = (r = (s = C.root) != null ? s : l.Root) != null ? r : ca, O = (i = (a = C.input) != null ? a : l.Input) != null ? i : da;
  return /* @__PURE__ */ P(pt, c({
    slots: {
      root: x,
      input: O
    },
    componentsProps: g,
    fullWidth: m,
    inputComponent: h,
    multiline: v,
    ref: n,
    type: S
  }, f, {
    classes: E
  }));
});
process.env.NODE_ENV !== "production" && (ft.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: e.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: e.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: e.oneOfType([e.oneOf(["primary", "secondary"]), e.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: e.shape({
    Input: e.elementType,
    Root: e.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: e.shape({
    input: e.object,
    root: e.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: e.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: e.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: e.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: e.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: e.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: e.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: e.bool,
  /**
   * The id of the `input` element.
   */
  id: e.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: e.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: e.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Me,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: e.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: e.oneOfType([e.number, e.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: e.oneOfType([e.number, e.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: e.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: e.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: e.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: e.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: e.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: e.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: e.oneOfType([e.number, e.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: e.shape({
    input: e.object,
    root: e.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: e.shape({
    input: e.elementType,
    root: e.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: e.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: e.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: e.any
});
ft.muiName = "Input";
const _n = ft;
function ua(o) {
  return ee("MuiFormControl", o);
}
const pa = oe("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]), ld = pa, fa = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], ma = (o) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = o, s = {
    root: ["root", n !== "none" && `margin${le(n)}`, r && "fullWidth"]
  };
  return ne(s, ua, t);
}, ba = W("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: o
  }, t) => c({}, t.root, t[`margin${le(o.margin)}`], o.fullWidth && t.fullWidth)
})(({
  ownerState: o
}) => c({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, o.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, o.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, o.fullWidth && {
  width: "100%"
})), Ln = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiFormControl"
  }), {
    children: s,
    className: i,
    color: a = "primary",
    component: d = "div",
    disabled: l = !1,
    error: u = !1,
    focused: m,
    fullWidth: h = !1,
    hiddenLabel: v = !1,
    margin: T = "none",
    required: C = !1,
    size: S = "medium",
    variant: f = "outlined"
  } = r, y = H(r, fa), E = c({}, r, {
    color: a,
    component: d,
    disabled: l,
    error: u,
    fullWidth: h,
    hiddenLabel: v,
    margin: T,
    required: C,
    size: S,
    variant: f
  }), b = ma(E), [g, x] = p.useState(() => {
    let M = !1;
    return s && p.Children.forEach(s, (k) => {
      if (!Yo(k, ["Input", "Select"]))
        return;
      const I = Yo(k, ["Select"]) ? k.props.input : k;
      I && ni(I.props) && (M = !0);
    }), M;
  }), [O, R] = p.useState(() => {
    let M = !1;
    return s && p.Children.forEach(s, (k) => {
      Yo(k, ["Input", "Select"]) && (Ao(k.props, !0) || Ao(k.props.inputProps, !0)) && (M = !0);
    }), M;
  }), [$, F] = p.useState(!1);
  l && $ && F(!1);
  const A = m !== void 0 && !l ? m : $;
  let B;
  if (process.env.NODE_ENV !== "production") {
    const M = p.useRef(!1);
    B = () => (M.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), M.current = !0, () => {
      M.current = !1;
    });
  }
  const V = p.useMemo(() => ({
    adornedStart: g,
    setAdornedStart: x,
    color: a,
    disabled: l,
    error: u,
    filled: O,
    focused: A,
    fullWidth: h,
    hiddenLabel: v,
    size: S,
    onBlur: () => {
      F(!1);
    },
    onEmpty: () => {
      R(!1);
    },
    onFilled: () => {
      R(!0);
    },
    onFocus: () => {
      F(!0);
    },
    registerEffect: B,
    required: C,
    variant: f
  }), [g, a, l, u, O, A, h, v, B, C, S, f]);
  return /* @__PURE__ */ P(ut.Provider, {
    value: V,
    children: /* @__PURE__ */ P(ba, c({
      as: d,
      ownerState: E,
      className: K(b.root, i),
      ref: n
    }, y, {
      children: s
    }))
  });
});
process.env.NODE_ENV !== "production" && (Ln.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: e.oneOfType([e.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), e.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: e.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: e.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: e.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: e.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: e.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: e.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: e.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: e.oneOfType([e.oneOf(["medium", "small"]), e.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: e.oneOf(["filled", "outlined", "standard"])
});
const ha = Ln, jn = Jr({
  createStyledComponent: W("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (o, t) => t.root
  }),
  useThemeProps: (o) => ce({
    props: o,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (jn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: e.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: e.oneOfType([e.oneOf(["column-reverse", "column", "row-reverse", "row"]), e.arrayOf(e.oneOf(["column-reverse", "column", "row-reverse", "row"])), e.object]),
  /**
   * Add an element between each child.
   */
  divider: e.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: e.oneOfType([e.arrayOf(e.oneOfType([e.number, e.string])), e.number, e.object, e.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: e.bool
});
const va = jn;
function ga(o) {
  return ee("MuiFormControlLabel", o);
}
const ya = oe("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), ho = ya, xa = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"], Ca = (o) => {
  const {
    classes: t,
    disabled: n,
    labelPlacement: r,
    error: s,
    required: i
  } = o, a = {
    root: ["root", n && "disabled", `labelPlacement${le(r)}`, s && "error", i && "required"],
    label: ["label", n && "disabled"],
    asterisk: ["asterisk", s && "error"]
  };
  return ne(a, ga, t);
}, Ea = W("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [{
      [`& .${ho.label}`]: t.label
    }, t.root, t[`labelPlacement${le(n.labelPlacement)}`]];
  }
})(({
  theme: o,
  ownerState: t
}) => c({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${ho.disabled}`]: {
    cursor: "default"
  }
}, t.labelPlacement === "start" && {
  flexDirection: "row-reverse",
  marginLeft: 16,
  // used for row presentation of radio/checkbox
  marginRight: -11
}, t.labelPlacement === "top" && {
  flexDirection: "column-reverse",
  marginLeft: 16
}, t.labelPlacement === "bottom" && {
  flexDirection: "column",
  marginLeft: 16
}, {
  [`& .${ho.label}`]: {
    [`&.${ho.disabled}`]: {
      color: (o.vars || o).palette.text.disabled
    }
  }
})), Ta = W("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (o, t) => t.asterisk
})(({
  theme: o
}) => ({
  [`&.${ho.error}`]: {
    color: (o.vars || o).palette.error.main
  }
})), zn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var r, s;
  const i = ce({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    className: a,
    componentsProps: d = {},
    control: l,
    disabled: u,
    disableTypography: m,
    label: h,
    labelPlacement: v = "end",
    required: T,
    slotProps: C = {}
  } = i, S = H(i, xa), f = He(), y = (r = u ?? l.props.disabled) != null ? r : f == null ? void 0 : f.disabled, E = T ?? l.props.required, b = {
    disabled: y,
    required: E
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((F) => {
    typeof l.props[F] > "u" && typeof i[F] < "u" && (b[F] = i[F]);
  });
  const g = eo({
    props: i,
    muiFormControl: f,
    states: ["error"]
  }), x = c({}, i, {
    disabled: y,
    labelPlacement: v,
    required: E,
    error: g.error
  }), O = Ca(x), R = (s = C.typography) != null ? s : d.typography;
  let $ = h;
  return $ != null && $.type !== Tt && !m && ($ = /* @__PURE__ */ P(Tt, c({
    component: "span"
  }, R, {
    className: K(O.label, R == null ? void 0 : R.className),
    children: $
  }))), /* @__PURE__ */ ge(Ea, c({
    className: K(O.root, a),
    ownerState: x,
    ref: n
  }, S, {
    children: [/* @__PURE__ */ p.cloneElement(l, b), E ? /* @__PURE__ */ ge(va, {
      display: "block",
      children: [$, /* @__PURE__ */ ge(Ta, {
        ownerState: x,
        "aria-hidden": !0,
        className: O.asterisk,
        children: [" ", "*"]
      })]
    }) : $]
  }));
});
process.env.NODE_ENV !== "production" && (zn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component appears selected.
   */
  checked: e.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: e.shape({
    typography: e.object
  }),
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: e.element.isRequired,
  /**
   * If `true`, the control is disabled.
   */
  disabled: e.bool,
  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography: e.bool,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Me,
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: e.node,
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement: e.oneOf(["bottom", "end", "start", "top"]),
  /**
   * @ignore
   */
  name: e.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: e.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: e.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: e.shape({
    typography: e.object
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The value of the component.
   */
  value: e.any
});
const cd = zn;
function Sa(o) {
  return ee("MuiFormHelperText", o);
}
const Ra = oe("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), At = Ra;
var _t;
const Oa = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], Pa = (o) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: s,
    error: i,
    filled: a,
    focused: d,
    required: l
  } = o, u = {
    root: ["root", s && "disabled", i && "error", r && `size${le(r)}`, n && "contained", d && "focused", a && "filled", l && "required"]
  };
  return ne(u, Sa, t);
}, wa = W("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [t.root, n.size && t[`size${le(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(({
  theme: o,
  ownerState: t
}) => c({
  color: (o.vars || o).palette.text.secondary
}, o.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${At.disabled}`]: {
    color: (o.vars || o).palette.text.disabled
  },
  [`&.${At.error}`]: {
    color: (o.vars || o).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), Wn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: s,
    className: i,
    component: a = "p"
  } = r, d = H(r, Oa), l = He(), u = eo({
    props: r,
    muiFormControl: l,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), m = c({}, r, {
    component: a,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), h = Pa(m);
  return /* @__PURE__ */ P(wa, c({
    as: a,
    ownerState: m,
    className: K(h.root, i),
    ref: n
  }, d, {
    children: s === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      _t || (_t = /* @__PURE__ */ P("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : s
  }));
});
process.env.NODE_ENV !== "production" && (Wn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: e.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: e.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: e.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: e.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: e.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: e.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: e.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The variant to use.
   */
  variant: e.oneOfType([e.oneOf(["filled", "outlined", "standard"]), e.string])
});
const Na = Wn;
function Ia(o) {
  return ee("MuiFormLabel", o);
}
const $a = oe("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), yo = $a, ka = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], Ma = (o) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: s,
    error: i,
    filled: a,
    required: d
  } = o, l = {
    root: ["root", `color${le(n)}`, s && "disabled", i && "error", a && "filled", r && "focused", d && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return ne(l, Ia, t);
}, Fa = W("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: o
  }, t) => c({}, t.root, o.color === "secondary" && t.colorSecondary, o.filled && t.filled)
})(({
  theme: o,
  ownerState: t
}) => c({
  color: (o.vars || o).palette.text.secondary
}, o.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${yo.focused}`]: {
    color: (o.vars || o).palette[t.color].main
  },
  [`&.${yo.disabled}`]: {
    color: (o.vars || o).palette.text.disabled
  },
  [`&.${yo.error}`]: {
    color: (o.vars || o).palette.error.main
  }
})), Da = W("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (o, t) => t.asterisk
})(({
  theme: o
}) => ({
  [`&.${yo.error}`]: {
    color: (o.vars || o).palette.error.main
  }
})), Vn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: s,
    className: i,
    component: a = "label"
  } = r, d = H(r, ka), l = He(), u = eo({
    props: r,
    muiFormControl: l,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), m = c({}, r, {
    color: u.color || "primary",
    component: a,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), h = Ma(m);
  return /* @__PURE__ */ ge(Fa, c({
    as: a,
    ownerState: m,
    className: K(h.root, i),
    ref: n
  }, d, {
    children: [s, u.required && /* @__PURE__ */ ge(Da, {
      ownerState: m,
      "aria-hidden": !0,
      className: h.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Vn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: e.oneOfType([e.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), e.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: e.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: e.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: e.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: e.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: e.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: e.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object])
});
const Ba = Vn, Aa = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function st(o) {
  return `scale(${o}, ${o ** 2})`;
}
const _a = {
  entering: {
    opacity: 1,
    transform: st(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Qo = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), mt = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: s = !0,
    children: i,
    easing: a,
    in: d,
    onEnter: l,
    onEntered: u,
    onEntering: m,
    onExit: h,
    onExited: v,
    onExiting: T,
    style: C,
    timeout: S = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: f = ct
  } = t, y = H(t, Aa), E = on(), b = p.useRef(), g = qe(), x = p.useRef(null), O = Pe(x, i.ref, n), R = (I) => (L) => {
    if (I) {
      const D = x.current;
      L === void 0 ? I(D) : I(D, L);
    }
  }, $ = R(m), F = R((I, L) => {
    pn(I);
    const {
      duration: D,
      delay: z,
      easing: U
    } = so({
      style: C,
      timeout: S,
      easing: a
    }, {
      mode: "enter"
    });
    let G;
    S === "auto" ? (G = g.transitions.getAutoHeightDuration(I.clientHeight), b.current = G) : G = D, I.style.transition = [g.transitions.create("opacity", {
      duration: G,
      delay: z
    }), g.transitions.create("transform", {
      duration: Qo ? G : G * 0.666,
      delay: z,
      easing: U
    })].join(","), l && l(I, L);
  }), A = R(u), B = R(T), V = R((I) => {
    const {
      duration: L,
      delay: D,
      easing: z
    } = so({
      style: C,
      timeout: S,
      easing: a
    }, {
      mode: "exit"
    });
    let U;
    S === "auto" ? (U = g.transitions.getAutoHeightDuration(I.clientHeight), b.current = U) : U = L, I.style.transition = [g.transitions.create("opacity", {
      duration: U,
      delay: D
    }), g.transitions.create("transform", {
      duration: Qo ? U : U * 0.666,
      delay: Qo ? D : D || U * 0.333,
      easing: z
    })].join(","), I.style.opacity = 0, I.style.transform = st(0.75), h && h(I);
  }), M = R(v);
  return /* @__PURE__ */ P(f, c({
    appear: s,
    in: d,
    nodeRef: x,
    onEnter: F,
    onEntered: A,
    onEntering: $,
    onExit: V,
    onExited: M,
    onExiting: B,
    addEndListener: (I) => {
      S === "auto" && E.start(b.current || 0, I), r && r(x.current, I);
    },
    timeout: S === "auto" ? null : S
  }, y, {
    children: (I, L) => /* @__PURE__ */ p.cloneElement(i, c({
      style: c({
        opacity: 0,
        transform: st(0.75),
        visibility: I === "exited" && !d ? "hidden" : void 0
      }, _a[I], C, i.props.style),
      ref: O
    }, L))
  }));
});
process.env.NODE_ENV !== "production" && (mt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: e.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: e.bool,
  /**
   * A single child content element.
   */
  children: Lo.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: e.oneOfType([e.shape({
    enter: e.string,
    exit: e.string
  }), e.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: e.bool,
  /**
   * @ignore
   */
  onEnter: e.func,
  /**
   * @ignore
   */
  onEntered: e.func,
  /**
   * @ignore
   */
  onEntering: e.func,
  /**
   * @ignore
   */
  onExit: e.func,
  /**
   * @ignore
   */
  onExited: e.func,
  /**
   * @ignore
   */
  onExiting: e.func,
  /**
   * @ignore
   */
  style: e.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: e.oneOfType([e.oneOf(["auto"]), e.number, e.shape({
    appear: e.number,
    enter: e.number,
    exit: e.number
  })])
});
mt.muiSupportAuto = !0;
const La = mt, ja = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], za = (o) => {
  const {
    classes: t,
    disableUnderline: n
  } = o, s = ne({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, ci, t);
  return c({}, t, s);
}, Wa = W(Uo, {
  shouldForwardProp: (o) => ke(o) || o === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [...Wo(o, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: o,
  ownerState: t
}) => {
  let r = o.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return o.vars && (r = `rgba(${o.vars.palette.common.onBackgroundChannel} / ${o.vars.opacity.inputUnderline})`), c({
    position: "relative"
  }, t.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(o.vars || o).palette[t.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: o.transitions.create("transform", {
        duration: o.transitions.duration.shorter,
        easing: o.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${uo.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${uo.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (o.vars || o).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${r}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: o.transitions.create("border-bottom-color", {
        duration: o.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${uo.disabled}, .${uo.error}):before`]: {
      borderBottom: `2px solid ${(o.vars || o).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${uo.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), Va = W(qo, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Vo
})({}), bt = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var r, s, i, a;
  const d = ce({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: l,
    components: u = {},
    componentsProps: m,
    fullWidth: h = !1,
    inputComponent: v = "input",
    multiline: T = !1,
    slotProps: C,
    slots: S = {},
    type: f = "text"
  } = d, y = H(d, ja), E = za(d), g = {
    root: {
      ownerState: {
        disableUnderline: l
      }
    }
  }, x = C ?? m ? _o(C ?? m, g) : g, O = (r = (s = S.root) != null ? s : u.Root) != null ? r : Wa, R = (i = (a = S.input) != null ? a : u.Input) != null ? i : Va;
  return /* @__PURE__ */ P(pt, c({
    slots: {
      root: O,
      input: R
    },
    slotProps: x,
    fullWidth: h,
    inputComponent: v,
    multiline: T,
    ref: n,
    type: f
  }, y, {
    classes: E
  }));
});
process.env.NODE_ENV !== "production" && (bt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: e.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: e.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: e.oneOfType([e.oneOf(["primary", "secondary"]), e.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: e.shape({
    Input: e.elementType,
    Root: e.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: e.shape({
    input: e.object,
    root: e.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: e.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: e.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: e.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: e.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: e.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: e.bool,
  /**
   * The id of the `input` element.
   */
  id: e.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: e.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: e.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Me,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: e.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: e.oneOfType([e.number, e.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: e.oneOfType([e.number, e.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: e.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: e.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: e.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: e.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: e.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: e.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: e.oneOfType([e.number, e.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: e.shape({
    input: e.object,
    root: e.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: e.shape({
    input: e.elementType,
    root: e.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: e.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: e.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: e.any
});
bt.muiName = "Input";
const Un = bt;
function Ua(o) {
  return ee("MuiInputLabel", o);
}
const qa = oe("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), dd = qa, Ha = ["disableAnimation", "margin", "shrink", "variant", "className"], Ka = (o) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: s,
    disableAnimation: i,
    variant: a,
    required: d
  } = o, l = {
    root: ["root", n && "formControl", !i && "animated", s && "shrink", r && r !== "normal" && `size${le(r)}`, a],
    asterisk: [d && "asterisk"]
  }, u = ne(l, Ua, t);
  return c({}, t, u);
}, Ga = W(Ba, {
  shouldForwardProp: (o) => ke(o) || o === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [{
      [`& .${yo.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(({
  theme: o,
  ownerState: t
}) => c({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, t.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, t.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, t.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !t.disableAnimation && {
  transition: o.transitions.create(["color", "transform", "max-width"], {
    duration: o.transitions.duration.shorter,
    easing: o.transitions.easing.easeOut
  })
}, t.variant === "filled" && c({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, t.shrink && c({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && c({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, t.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), qn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ce({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: s = !1,
    shrink: i,
    className: a
  } = r, d = H(r, Ha), l = He();
  let u = i;
  typeof u > "u" && l && (u = l.filled || l.focused || l.adornedStart);
  const m = eo({
    props: r,
    muiFormControl: l,
    states: ["size", "variant", "required", "focused"]
  }), h = c({}, r, {
    disableAnimation: s,
    formControl: l,
    shrink: u,
    size: m.size,
    variant: m.variant,
    required: m.required,
    focused: m.focused
  }), v = Ka(h);
  return /* @__PURE__ */ P(Ga, c({
    "data-shrink": u,
    ownerState: h,
    ref: n,
    className: K(v.root, a)
  }, d, {
    classes: v
  }));
});
process.env.NODE_ENV !== "production" && (qn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: e.oneOfType([e.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), e.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: e.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: e.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: e.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: e.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: e.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: e.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: e.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: e.oneOfType([e.oneOf(["normal", "small"]), e.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The variant to use.
   */
  variant: e.oneOf(["filled", "outlined", "standard"])
});
const Ya = qn, Hn = /* @__PURE__ */ p.createContext({});
process.env.NODE_ENV !== "production" && (Hn.displayName = "ListContext");
const it = Hn;
function Xa(o) {
  return ee("MuiList", o);
}
const Za = oe("MuiList", ["root", "padding", "dense", "subheader"]), ud = Za, Ja = ["children", "className", "component", "dense", "disablePadding", "subheader"], Qa = (o) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: s
  } = o;
  return ne({
    root: ["root", !n && "padding", r && "dense", s && "subheader"]
  }, Xa, t);
}, el = W("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})(({
  ownerState: o
}) => c({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !o.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, o.subheader && {
  paddingTop: 0
})), Kn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiList"
  }), {
    children: s,
    className: i,
    component: a = "ul",
    dense: d = !1,
    disablePadding: l = !1,
    subheader: u
  } = r, m = H(r, Ja), h = p.useMemo(() => ({
    dense: d
  }), [d]), v = c({}, r, {
    component: a,
    dense: d,
    disablePadding: l
  }), T = Qa(v);
  return /* @__PURE__ */ P(it.Provider, {
    value: h,
    children: /* @__PURE__ */ ge(el, c({
      as: a,
      className: K(T.root, i),
      ref: n,
      ownerState: v
    }, m, {
      children: [u, s]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Kn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: e.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: e.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: e.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: e.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object])
});
const ol = Kn;
function pd(o) {
  return ee("MuiListItemIcon", o);
}
const tl = oe("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Lt = tl;
function fd(o) {
  return ee("MuiListItemText", o);
}
const nl = oe("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), jt = nl, rl = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function et(o, t, n) {
  return o === t ? o.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : o.firstChild;
}
function zt(o, t, n) {
  return o === t ? n ? o.firstChild : o.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : o.lastChild;
}
function Gn(o, t) {
  if (t === void 0)
    return !0;
  let n = o.innerText;
  return n === void 0 && (n = o.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function po(o, t, n, r, s, i) {
  let a = !1, d = s(o, t, t ? n : !1);
  for (; d; ) {
    if (d === o.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const l = r ? !1 : d.disabled || d.getAttribute("aria-disabled") === "true";
    if (!d.hasAttribute("tabindex") || !Gn(d, i) || l)
      d = s(o, d, n);
    else
      return d.focus(), !0;
  }
  return !1;
}
const Yn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: s = !1,
    autoFocusItem: i = !1,
    children: a,
    className: d,
    disabledItemsFocusable: l = !1,
    disableListWrap: u = !1,
    onKeyDown: m,
    variant: h = "selectedMenu"
  } = t, v = H(t, rl), T = p.useRef(null), C = p.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Ue(() => {
    s && T.current.focus();
  }, [s]), p.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (b, g) => {
      const x = !T.current.style.width;
      if (b.clientHeight < T.current.clientHeight && x) {
        const O = `${an(Ne(b))}px`;
        T.current.style[g.direction === "rtl" ? "paddingLeft" : "paddingRight"] = O, T.current.style.width = `calc(100% + ${O})`;
      }
      return T.current;
    }
  }), []);
  const S = (b) => {
    const g = T.current, x = b.key, O = Ne(g).activeElement;
    if (x === "ArrowDown")
      b.preventDefault(), po(g, O, u, l, et);
    else if (x === "ArrowUp")
      b.preventDefault(), po(g, O, u, l, zt);
    else if (x === "Home")
      b.preventDefault(), po(g, null, u, l, et);
    else if (x === "End")
      b.preventDefault(), po(g, null, u, l, zt);
    else if (x.length === 1) {
      const R = C.current, $ = x.toLowerCase(), F = performance.now();
      R.keys.length > 0 && (F - R.lastTime > 500 ? (R.keys = [], R.repeating = !0, R.previousKeyMatched = !0) : R.repeating && $ !== R.keys[0] && (R.repeating = !1)), R.lastTime = F, R.keys.push($);
      const A = O && !R.repeating && Gn(O, R);
      R.previousKeyMatched && (A || po(g, O, !1, l, et, R)) ? b.preventDefault() : R.previousKeyMatched = !1;
    }
    m && m(b);
  }, f = Pe(T, n);
  let y = -1;
  p.Children.forEach(a, (b, g) => {
    if (!/* @__PURE__ */ p.isValidElement(b)) {
      y === g && (y += 1, y >= a.length && (y = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && To.isFragment(b) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), b.props.disabled || (h === "selectedMenu" && b.props.selected || y === -1) && (y = g), y === g && (b.props.disabled || b.props.muiSkipListHighlight || b.type.muiSkipListHighlight) && (y += 1, y >= a.length && (y = -1));
  });
  const E = p.Children.map(a, (b, g) => {
    if (g === y) {
      const x = {};
      return i && (x.autoFocus = !0), b.props.tabIndex === void 0 && h === "selectedMenu" && (x.tabIndex = 0), /* @__PURE__ */ p.cloneElement(b, x);
    }
    return b;
  });
  return /* @__PURE__ */ P(ol, c({
    role: "menu",
    ref: f,
    className: d,
    onKeyDown: S,
    tabIndex: s ? 0 : -1
  }, v, {
    children: E
  }));
});
process.env.NODE_ENV !== "production" && (Yn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: e.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: e.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: e.node,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: e.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: e.bool,
  /**
   * @ignore
   */
  onKeyDown: e.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: e.oneOf(["menu", "selectedMenu"])
});
const sl = Yn;
function il(o) {
  return ee("MuiPopover", o);
}
const al = oe("MuiPopover", ["root", "paper"]), md = al, ll = ["onEntering"], cl = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], dl = ["slotProps"];
function Wt(o, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = o.height / 2 : t === "bottom" && (n = o.height), n;
}
function Vt(o, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = o.width / 2 : t === "right" && (n = o.width), n;
}
function Ut(o) {
  return [o.horizontal, o.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function ko(o) {
  return typeof o == "function" ? o() : o;
}
const ul = (o) => {
  const {
    classes: t
  } = o;
  return ne({
    root: ["root"],
    paper: ["paper"]
  }, il, t);
}, pl = W(Fn, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (o, t) => t.root
})({}), Xn = W(zo, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (o, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Zn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var r, s, i;
  const a = ce({
    props: t,
    name: "MuiPopover"
  }), {
    action: d,
    anchorEl: l,
    anchorOrigin: u = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: m,
    anchorReference: h = "anchorEl",
    children: v,
    className: T,
    container: C,
    elevation: S = 8,
    marginThreshold: f = 16,
    open: y,
    PaperProps: E = {},
    slots: b,
    slotProps: g,
    transformOrigin: x = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: O = La,
    transitionDuration: R = "auto",
    TransitionProps: {
      onEntering: $
    } = {},
    disableScrollLock: F = !1
  } = a, A = H(a.TransitionProps, ll), B = H(a, cl), V = (r = g == null ? void 0 : g.paper) != null ? r : E, M = p.useRef(), k = Pe(M, V.ref), I = c({}, a, {
    anchorOrigin: u,
    anchorReference: h,
    elevation: S,
    marginThreshold: f,
    externalPaperSlotProps: V,
    transformOrigin: x,
    TransitionComponent: O,
    transitionDuration: R,
    TransitionProps: A
  }), L = ul(I), D = p.useCallback(() => {
    if (h === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (m || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), m;
    const Z = ko(l), N = Z && Z.nodeType === 1 ? Z : Ne(M.current).body, se = N.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const Ce = N.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Ce.top === 0 && Ce.left === 0 && Ce.right === 0 && Ce.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: se.top + Wt(se, u.vertical),
      left: se.left + Vt(se, u.horizontal)
    };
  }, [l, u.horizontal, u.vertical, m, h]), z = p.useCallback((Z) => ({
    vertical: Wt(Z, x.vertical),
    horizontal: Vt(Z, x.horizontal)
  }), [x.horizontal, x.vertical]), U = p.useCallback((Z) => {
    const N = {
      width: Z.offsetWidth,
      height: Z.offsetHeight
    }, se = z(N);
    if (h === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Ut(se)
      };
    const Ce = D();
    let he = Ce.top - se.vertical, Se = Ce.left - se.horizontal;
    const $e = he + N.height, we = Se + N.width, ve = _e(ko(l)), Ie = ve.innerHeight - f, Re = ve.innerWidth - f;
    if (f !== null && he < f) {
      const Ee = he - f;
      he -= Ee, se.vertical += Ee;
    } else if (f !== null && $e > Ie) {
      const Ee = $e - Ie;
      he -= Ee, se.vertical += Ee;
    }
    if (process.env.NODE_ENV !== "production" && N.height > Ie && N.height && Ie && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${N.height - Ie}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), f !== null && Se < f) {
      const Ee = Se - f;
      Se -= Ee, se.horizontal += Ee;
    } else if (we > Re) {
      const Ee = we - Re;
      Se -= Ee, se.horizontal += Ee;
    }
    return {
      top: `${Math.round(he)}px`,
      left: `${Math.round(Se)}px`,
      transformOrigin: Ut(se)
    };
  }, [l, h, D, z, f]), [G, fe] = p.useState(y), me = p.useCallback(() => {
    const Z = M.current;
    if (!Z)
      return;
    const N = U(Z);
    N.top !== null && (Z.style.top = N.top), N.left !== null && (Z.style.left = N.left), Z.style.transformOrigin = N.transformOrigin, fe(!0);
  }, [U]);
  p.useEffect(() => (F && window.addEventListener("scroll", me), () => window.removeEventListener("scroll", me)), [l, F, me]);
  const ue = (Z, N) => {
    $ && $(Z, N), me();
  }, J = () => {
    fe(!1);
  };
  p.useEffect(() => {
    y && me();
  }), p.useImperativeHandle(d, () => y ? {
    updatePosition: () => {
      me();
    }
  } : null, [y, me]), p.useEffect(() => {
    if (!y)
      return;
    const Z = jo(() => {
      me();
    }), N = _e(l);
    return N.addEventListener("resize", Z), () => {
      Z.clear(), N.removeEventListener("resize", Z);
    };
  }, [l, y, me]);
  let be = R;
  R === "auto" && !O.muiSupportAuto && (be = void 0);
  const j = C || (l ? Ne(ko(l)).body : void 0), re = (s = b == null ? void 0 : b.root) != null ? s : pl, de = (i = b == null ? void 0 : b.paper) != null ? i : Xn, xe = Ae({
    elementType: de,
    externalSlotProps: c({}, V, {
      style: G ? V.style : c({}, V.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: S,
      ref: k
    },
    ownerState: I,
    className: K(L.paper, V == null ? void 0 : V.className)
  }), ye = Ae({
    elementType: re,
    externalSlotProps: (g == null ? void 0 : g.root) || {},
    externalForwardedProps: B,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: j,
      open: y
    },
    ownerState: I,
    className: K(L.root, T)
  }), {
    slotProps: X
  } = ye, pe = H(ye, dl);
  return /* @__PURE__ */ P(re, c({}, pe, !Fo(re) && {
    slotProps: X,
    disableScrollLock: F
  }, {
    children: /* @__PURE__ */ P(O, c({
      appear: !0,
      in: y,
      onEntering: ue,
      onExited: J,
      timeout: be
    }, A, {
      children: /* @__PURE__ */ P(de, c({}, xe, {
        children: v
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Zn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Me,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Co(e.oneOfType([xo, e.func]), (o) => {
    if (o.open && (!o.anchorReference || o.anchorReference === "anchorEl")) {
      const t = ko(o.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: e.shape({
    horizontal: e.oneOfType([e.oneOf(["center", "left", "right"]), e.number]).isRequired,
    vertical: e.oneOfType([e.oneOf(["bottom", "center", "top"]), e.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: e.shape({
    left: e.number.isRequired,
    top: e.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: e.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: e.oneOfType([xo, e.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: e.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: un,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: e.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: e.func,
  /**
   * If `true`, the component is shown.
   */
  open: e.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: e.shape({
    component: at
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: e.shape({
    paper: e.oneOfType([e.func, e.object]),
    root: e.oneOfType([e.func, e.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: e.shape({
    paper: e.elementType,
    root: e.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: e.shape({
    horizontal: e.oneOfType([e.oneOf(["center", "left", "right"]), e.number]).isRequired,
    vertical: e.oneOfType([e.oneOf(["bottom", "center", "top"]), e.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: e.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: e.oneOfType([e.oneOf(["auto"]), e.number, e.shape({
    appear: e.number,
    enter: e.number,
    exit: e.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: e.object
});
const fl = Zn;
function ml(o) {
  return ee("MuiMenu", o);
}
const bl = oe("MuiMenu", ["root", "paper", "list"]), bd = bl, hl = ["onEntering"], vl = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], gl = {
  vertical: "top",
  horizontal: "right"
}, yl = {
  vertical: "top",
  horizontal: "left"
}, xl = (o) => {
  const {
    classes: t
  } = o;
  return ne({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, ml, t);
}, Cl = W(fl, {
  shouldForwardProp: (o) => ke(o) || o === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (o, t) => t.root
})({}), El = W(Xn, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (o, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Tl = W(sl, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (o, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Jn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var r, s;
  const i = ce({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: a = !0,
    children: d,
    className: l,
    disableAutoFocusItem: u = !1,
    MenuListProps: m = {},
    onClose: h,
    open: v,
    PaperProps: T = {},
    PopoverClasses: C,
    transitionDuration: S = "auto",
    TransitionProps: {
      onEntering: f
    } = {},
    variant: y = "selectedMenu",
    slots: E = {},
    slotProps: b = {}
  } = i, g = H(i.TransitionProps, hl), x = H(i, vl), O = qe(), R = O.direction === "rtl", $ = c({}, i, {
    autoFocus: a,
    disableAutoFocusItem: u,
    MenuListProps: m,
    onEntering: f,
    PaperProps: T,
    transitionDuration: S,
    TransitionProps: g,
    variant: y
  }), F = xl($), A = a && !u && v, B = p.useRef(null), V = (U, G) => {
    B.current && B.current.adjustStyleForScrollbar(U, O), f && f(U, G);
  }, M = (U) => {
    U.key === "Tab" && (U.preventDefault(), h && h(U, "tabKeyDown"));
  };
  let k = -1;
  p.Children.map(d, (U, G) => {
    /* @__PURE__ */ p.isValidElement(U) && (process.env.NODE_ENV !== "production" && To.isFragment(U) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), U.props.disabled || (y === "selectedMenu" && U.props.selected || k === -1) && (k = G));
  });
  const I = (r = E.paper) != null ? r : El, L = (s = b.paper) != null ? s : T, D = Ae({
    elementType: E.root,
    externalSlotProps: b.root,
    ownerState: $,
    className: [F.root, l]
  }), z = Ae({
    elementType: I,
    externalSlotProps: L,
    ownerState: $,
    className: F.paper
  });
  return /* @__PURE__ */ P(Cl, c({
    onClose: h,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: R ? "right" : "left"
    },
    transformOrigin: R ? gl : yl,
    slots: {
      paper: I,
      root: E.root
    },
    slotProps: {
      root: D,
      paper: z
    },
    open: v,
    ref: n,
    transitionDuration: S,
    TransitionProps: c({
      onEntering: V
    }, g),
    ownerState: $
  }, x, {
    classes: C,
    children: /* @__PURE__ */ P(Tl, c({
      onKeyDown: M,
      actions: B,
      autoFocus: a && (k === -1 || u),
      autoFocusItem: A,
      variant: y
    }, m, {
      className: K(F.list, m.className),
      children: d
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Jn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: e.oneOfType([xo, e.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: e.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: e.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: e.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: e.func,
  /**
   * If `true`, the component is shown.
   */
  open: e.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: e.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: e.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: e.shape({
    paper: e.oneOfType([e.func, e.object]),
    root: e.oneOfType([e.func, e.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: e.shape({
    paper: e.elementType,
    root: e.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: e.oneOfType([e.oneOf(["auto"]), e.number, e.shape({
    appear: e.number,
    enter: e.number,
    exit: e.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: e.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: e.oneOf(["menu", "selectedMenu"])
});
const Sl = Jn;
function Rl(o) {
  return ee("MuiMenuItem", o);
}
const Ol = oe("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), fo = Ol, Pl = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"], wl = (o, t) => {
  const {
    ownerState: n
  } = o;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, Nl = (o) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: s,
    selected: i,
    classes: a
  } = o, l = ne({
    root: ["root", n && "dense", t && "disabled", !s && "gutters", r && "divider", i && "selected"]
  }, Rl, a);
  return c({}, a, l);
}, Il = W(Eo, {
  shouldForwardProp: (o) => ke(o) || o === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: wl
})(({
  theme: o,
  ownerState: t
}) => c({}, o.typography.body1, {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.divider && {
  borderBottom: `1px solid ${(o.vars || o).palette.divider}`,
  backgroundClip: "padding-box"
}, {
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (o.vars || o).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${fo.selected}`]: {
    backgroundColor: o.vars ? `rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})` : Qe(o.palette.primary.main, o.palette.action.selectedOpacity),
    [`&.${fo.focusVisible}`]: {
      backgroundColor: o.vars ? `rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))` : Qe(o.palette.primary.main, o.palette.action.selectedOpacity + o.palette.action.focusOpacity)
    }
  },
  [`&.${fo.selected}:hover`]: {
    backgroundColor: o.vars ? `rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))` : Qe(o.palette.primary.main, o.palette.action.selectedOpacity + o.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: o.vars ? `rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})` : Qe(o.palette.primary.main, o.palette.action.selectedOpacity)
    }
  },
  [`&.${fo.focusVisible}`]: {
    backgroundColor: (o.vars || o).palette.action.focus
  },
  [`&.${fo.disabled}`]: {
    opacity: (o.vars || o).palette.action.disabledOpacity
  },
  [`& + .${Bt.root}`]: {
    marginTop: o.spacing(1),
    marginBottom: o.spacing(1)
  },
  [`& + .${Bt.inset}`]: {
    marginLeft: 52
  },
  [`& .${jt.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${jt.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Lt.root}`]: {
    minWidth: 36
  }
}, !t.dense && {
  [o.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, t.dense && c({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, o.typography.body2, {
  [`& .${Lt.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), Qn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: s = !1,
    component: i = "li",
    dense: a = !1,
    divider: d = !1,
    disableGutters: l = !1,
    focusVisibleClassName: u,
    role: m = "menuitem",
    tabIndex: h,
    className: v
  } = r, T = H(r, Pl), C = p.useContext(it), S = p.useMemo(() => ({
    dense: a || C.dense || !1,
    disableGutters: l
  }), [C.dense, a, l]), f = p.useRef(null);
  Ue(() => {
    s && (f.current ? f.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [s]);
  const y = c({}, r, {
    dense: S.dense,
    divider: d,
    disableGutters: l
  }), E = Nl(r), b = Pe(f, n);
  let g;
  return r.disabled || (g = h !== void 0 ? h : -1), /* @__PURE__ */ P(it.Provider, {
    value: S,
    children: /* @__PURE__ */ P(Il, c({
      ref: b,
      role: m,
      tabIndex: g,
      component: i,
      focusVisibleClassName: K(E.focusVisible, u),
      className: K(E.root, v)
    }, T, {
      ownerState: y,
      classes: E
    }))
  });
});
process.env.NODE_ENV !== "production" && (Qn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: e.bool,
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: e.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: e.bool,
  /**
   * @ignore
   */
  disabled: e.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: e.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: e.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: e.string,
  /**
   * @ignore
   */
  role: e.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: e.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * @default 0
   */
  tabIndex: e.number
});
const hd = Qn;
function $l(o) {
  return ee("MuiNativeSelect", o);
}
const kl = oe("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), ht = kl, Ml = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], Fl = (o) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: s,
    open: i,
    error: a
  } = o, d = {
    select: ["select", n, r && "disabled", s && "multiple", a && "error"],
    icon: ["icon", `icon${le(n)}`, i && "iconOpen", r && "disabled"]
  };
  return ne(d, $l, t);
}, er = ({
  ownerState: o,
  theme: t
}) => c({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": c({}, t.vars ? {
    backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${ht.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (t.vars || t).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, o.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, o.variant === "outlined" && {
  borderRadius: (t.vars || t).shape.borderRadius,
  "&:focus": {
    borderRadius: (t.vars || t).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), Dl = W("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: ke,
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${ht.multiple}`]: t.multiple
    }];
  }
})(er), or = ({
  ownerState: o,
  theme: t
}) => c({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${ht.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, o.open && {
  transform: "rotate(180deg)"
}, o.variant === "filled" && {
  right: 7
}, o.variant === "outlined" && {
  right: 7
}), Bl = W("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [t.icon, n.variant && t[`icon${le(n.variant)}`], n.open && t.iconOpen];
  }
})(or), tr = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: s,
    error: i,
    IconComponent: a,
    inputRef: d,
    variant: l = "standard"
  } = t, u = H(t, Ml), m = c({}, t, {
    disabled: s,
    variant: l,
    error: i
  }), h = Fl(m);
  return /* @__PURE__ */ ge(p.Fragment, {
    children: [/* @__PURE__ */ P(Dl, c({
      ownerState: m,
      className: K(h.select, r),
      disabled: s,
      ref: d || n
    }, u)), t.multiple ? null : /* @__PURE__ */ P(Bl, {
      as: a,
      ownerState: m,
      className: h.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (tr.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * The CSS class name of the select element.
   */
  className: e.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: e.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: e.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: e.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: Me,
  /**
   * @ignore
   */
  multiple: e.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: e.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: e.func,
  /**
   * The input value.
   */
  value: e.any,
  /**
   * The variant to use.
   */
  variant: e.oneOf(["standard", "outlined", "filled"])
});
const Al = tr;
var qt;
const _l = ["children", "classes", "className", "label", "notched"], Ll = W("fieldset", {
  shouldForwardProp: ke
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), jl = W("legend", {
  shouldForwardProp: ke
})(({
  ownerState: o,
  theme: t
}) => c({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !o.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: t.transitions.create("width", {
    duration: 150,
    easing: t.transitions.easing.easeOut
  })
}, o.withLabel && c({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: t.transitions.create("max-width", {
    duration: 50,
    easing: t.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, o.notched && {
  maxWidth: "100%",
  transition: t.transitions.create("max-width", {
    duration: 100,
    easing: t.transitions.easing.easeOut,
    delay: 50
  })
})));
function nr(o) {
  const {
    className: t,
    label: n,
    notched: r
  } = o, s = H(o, _l), i = n != null && n !== "", a = c({}, o, {
    notched: r,
    withLabel: i
  });
  return /* @__PURE__ */ P(Ll, c({
    "aria-hidden": !0,
    className: t,
    ownerState: a
  }, s, {
    children: /* @__PURE__ */ P(jl, {
      ownerState: a,
      children: i ? /* @__PURE__ */ P("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        qt || (qt = /* @__PURE__ */ P("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (nr.propTypes = {
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The label.
   */
  label: e.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: e.bool.isRequired,
  /**
   * @ignore
   */
  style: e.object
});
const zl = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], Wl = (o) => {
  const {
    classes: t
  } = o, r = ne({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, ui, t);
  return c({}, t, r);
}, Vl = W(Uo, {
  shouldForwardProp: (o) => ke(o) || o === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Wo
})(({
  theme: o,
  ownerState: t
}) => {
  const n = o.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return c({
    position: "relative",
    borderRadius: (o.vars || o).shape.borderRadius,
    [`&:hover .${Ve.notchedOutline}`]: {
      borderColor: (o.vars || o).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Ve.notchedOutline}`]: {
        borderColor: o.vars ? `rgba(${o.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${Ve.focused} .${Ve.notchedOutline}`]: {
      borderColor: (o.vars || o).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${Ve.error} .${Ve.notchedOutline}`]: {
      borderColor: (o.vars || o).palette.error.main
    },
    [`&.${Ve.disabled} .${Ve.notchedOutline}`]: {
      borderColor: (o.vars || o).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && c({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), Ul = W(nr, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (o, t) => t.notchedOutline
})(({
  theme: o
}) => {
  const t = o.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: o.vars ? `rgba(${o.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
}), ql = W(qo, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Vo
})(({
  theme: o,
  ownerState: t
}) => c({
  padding: "16.5px 14px"
}, !o.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: o.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: o.palette.mode === "light" ? null : "#fff",
    caretColor: o.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, o.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [o.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  padding: "8.5px 14px"
}, t.multiline && {
  padding: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
})), vt = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var r, s, i, a, d;
  const l = ce({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: m = !1,
    inputComponent: h = "input",
    label: v,
    multiline: T = !1,
    notched: C,
    slots: S = {},
    type: f = "text"
  } = l, y = H(l, zl), E = Wl(l), b = He(), g = eo({
    props: l,
    muiFormControl: b,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), x = c({}, l, {
    color: g.color || "primary",
    disabled: g.disabled,
    error: g.error,
    focused: g.focused,
    formControl: b,
    fullWidth: m,
    hiddenLabel: g.hiddenLabel,
    multiline: T,
    size: g.size,
    type: f
  }), O = (r = (s = S.root) != null ? s : u.Root) != null ? r : Vl, R = (i = (a = S.input) != null ? a : u.Input) != null ? i : ql;
  return /* @__PURE__ */ P(pt, c({
    slots: {
      root: O,
      input: R
    },
    renderSuffix: ($) => /* @__PURE__ */ P(Ul, {
      ownerState: x,
      className: E.notchedOutline,
      label: v != null && v !== "" && g.required ? d || (d = /* @__PURE__ */ ge(p.Fragment, {
        children: [v, " ", "*"]
      })) : v,
      notched: typeof C < "u" ? C : !!($.startAdornment || $.filled || $.focused)
    }),
    fullWidth: m,
    inputComponent: h,
    multiline: T,
    ref: n,
    type: f
  }, y, {
    classes: c({}, E, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (vt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: e.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: e.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: e.oneOfType([e.oneOf(["primary", "secondary"]), e.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: e.shape({
    Input: e.elementType,
    Root: e.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: e.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: e.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: e.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: e.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: e.bool,
  /**
   * The id of the `input` element.
   */
  id: e.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: e.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: e.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Me,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: e.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: e.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: e.oneOfType([e.number, e.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: e.oneOfType([e.number, e.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: e.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: e.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: e.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: e.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: e.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: e.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: e.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: e.oneOfType([e.number, e.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: e.shape({
    input: e.elementType,
    root: e.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: e.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: e.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: e.any
});
vt.muiName = "Input";
const rr = vt;
function Hl(o) {
  return ee("MuiSelect", o);
}
const Kl = oe("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), mo = Kl;
var Ht;
const Gl = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], Yl = W("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [
      // Win specificity over the input base
      {
        [`&.${mo.select}`]: t.select
      },
      {
        [`&.${mo.select}`]: t[n.variant]
      },
      {
        [`&.${mo.error}`]: t.error
      },
      {
        [`&.${mo.multiple}`]: t.multiple
      }
    ];
  }
})(er, {
  // Win specificity over the input base
  [`&.${mo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), Xl = W("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [t.icon, n.variant && t[`icon${le(n.variant)}`], n.open && t.iconOpen];
  }
})(or), Zl = W("input", {
  shouldForwardProp: (o) => Rr(o) && o !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (o, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function Kt(o, t) {
  return typeof t == "object" && t !== null ? o === t : String(o) === String(t);
}
function Jl(o) {
  return o == null || typeof o == "string" && !o.trim();
}
const Ql = (o) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: s,
    open: i,
    error: a
  } = o, d = {
    select: ["select", n, r && "disabled", s && "multiple", a && "error"],
    icon: ["icon", `icon${le(n)}`, i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return ne(d, Hl, t);
}, sr = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var r;
  const {
    "aria-describedby": s,
    "aria-label": i,
    autoFocus: a,
    autoWidth: d,
    children: l,
    className: u,
    defaultOpen: m,
    defaultValue: h,
    disabled: v,
    displayEmpty: T,
    error: C = !1,
    IconComponent: S,
    inputRef: f,
    labelId: y,
    MenuProps: E = {},
    multiple: b,
    name: g,
    onBlur: x,
    onChange: O,
    onClose: R,
    onFocus: $,
    onOpen: F,
    open: A,
    readOnly: B,
    renderValue: V,
    SelectDisplayProps: M = {},
    tabIndex: k,
    value: I,
    variant: L = "standard"
  } = t, D = H(t, Gl), [z, U] = Mo({
    controlled: I,
    default: h,
    name: "Select"
  }), [G, fe] = Mo({
    controlled: A,
    default: m,
    name: "Select"
  }), me = p.useRef(null), ue = p.useRef(null), [J, be] = p.useState(null), {
    current: j
  } = p.useRef(A != null), [re, de] = p.useState(), xe = Pe(n, f), ye = p.useCallback((q) => {
    ue.current = q, q && be(q);
  }, []), X = J == null ? void 0 : J.parentNode;
  p.useImperativeHandle(xe, () => ({
    focus: () => {
      ue.current.focus();
    },
    node: me.current,
    value: z
  }), [z]), p.useEffect(() => {
    m && G && J && !j && (de(d ? null : X.clientWidth), ue.current.focus());
  }, [J, d]), p.useEffect(() => {
    a && ue.current.focus();
  }, [a]), p.useEffect(() => {
    if (!y)
      return;
    const q = Ne(ue.current).getElementById(y);
    if (q) {
      const w = () => {
        getSelection().isCollapsed && ue.current.focus();
      };
      return q.addEventListener("click", w), () => {
        q.removeEventListener("click", w);
      };
    }
  }, [y]);
  const pe = (q, w) => {
    q ? F && F(w) : R && R(w), j || (de(d ? null : X.clientWidth), fe(q));
  }, Z = (q) => {
    q.button === 0 && (q.preventDefault(), ue.current.focus(), pe(!0, q));
  }, N = (q) => {
    pe(!1, q);
  }, se = p.Children.toArray(l), Ce = (q) => {
    const w = se.find((_) => _.props.value === q.target.value);
    w !== void 0 && (U(w.props.value), O && O(q, w));
  }, he = (q) => (w) => {
    let _;
    if (w.currentTarget.hasAttribute("tabindex")) {
      if (b) {
        _ = Array.isArray(z) ? z.slice() : [];
        const Y = z.indexOf(q.props.value);
        Y === -1 ? _.push(q.props.value) : _.splice(Y, 1);
      } else
        _ = q.props.value;
      if (q.props.onClick && q.props.onClick(w), z !== _ && (U(_), O)) {
        const Y = w.nativeEvent || w, Q = new Y.constructor(Y.type, Y);
        Object.defineProperty(Q, "target", {
          writable: !0,
          value: {
            value: _,
            name: g
          }
        }), O(Q, q);
      }
      b || pe(!1, w);
    }
  }, Se = (q) => {
    B || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(q.key) !== -1 && (q.preventDefault(), pe(!0, q));
  }, $e = J !== null && G, we = (q) => {
    !$e && x && (Object.defineProperty(q, "target", {
      writable: !0,
      value: {
        value: z,
        name: g
      }
    }), x(q));
  };
  delete D["aria-invalid"];
  let ve, Ie;
  const Re = [];
  let Ee = !1, je = !1;
  (Ao({
    value: z
  }) || T) && (V ? ve = V(z) : Ee = !0);
  const Ke = se.map((q) => {
    if (!/* @__PURE__ */ p.isValidElement(q))
      return null;
    process.env.NODE_ENV !== "production" && To.isFragment(q) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let w;
    if (b) {
      if (!Array.isArray(z))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Qt(2));
      w = z.some((_) => Kt(_, q.props.value)), w && Ee && Re.push(q.props.children);
    } else
      w = Kt(z, q.props.value), w && Ee && (Ie = q.props.children);
    return w && (je = !0), /* @__PURE__ */ p.cloneElement(q, {
      "aria-selected": w ? "true" : "false",
      onClick: he(q),
      onKeyUp: (_) => {
        _.key === " " && _.preventDefault(), q.props.onKeyUp && q.props.onKeyUp(_);
      },
      role: "option",
      selected: w,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": q.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && p.useEffect(() => {
    if (!je && !b && z !== "") {
      const q = se.map((w) => w.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${z}\` for the select ${g ? `(name="${g}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${q.filter((w) => w != null).map((w) => `\`${w}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [je, se, b, g, z]), Ee && (b ? Re.length === 0 ? ve = null : ve = Re.reduce((q, w, _) => (q.push(w), _ < Re.length - 1 && q.push(", "), q), []) : ve = Ie);
  let Ge = re;
  !d && j && J && (Ge = X.clientWidth);
  let te;
  typeof k < "u" ? te = k : te = v ? null : 0;
  const Fe = M.id || (g ? `mui-component-select-${g}` : void 0), De = c({}, t, {
    variant: L,
    value: z,
    open: $e,
    error: C
  }), ze = Ql(De), lo = c({}, E.PaperProps, (r = E.slotProps) == null ? void 0 : r.paper), So = lt();
  return /* @__PURE__ */ ge(p.Fragment, {
    children: [/* @__PURE__ */ P(Yl, c({
      ref: ye,
      tabIndex: te,
      role: "combobox",
      "aria-controls": So,
      "aria-disabled": v ? "true" : void 0,
      "aria-expanded": $e ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [y, Fe].filter(Boolean).join(" ") || void 0,
      "aria-describedby": s,
      onKeyDown: Se,
      onMouseDown: v || B ? null : Z,
      onBlur: we,
      onFocus: $
    }, M, {
      ownerState: De,
      className: K(M.className, ze.select, u),
      id: Fe,
      children: Jl(ve) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ht || (Ht = /* @__PURE__ */ P("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : ve
    })), /* @__PURE__ */ P(Zl, c({
      "aria-invalid": C,
      value: Array.isArray(z) ? z.join(",") : z,
      name: g,
      ref: me,
      "aria-hidden": !0,
      onChange: Ce,
      tabIndex: -1,
      disabled: v,
      className: ze.nativeInput,
      autoFocus: a,
      ownerState: De
    }, D)), /* @__PURE__ */ P(Xl, {
      as: S,
      className: ze.icon,
      ownerState: De
    }), /* @__PURE__ */ P(Sl, c({
      id: `menu-${g || ""}`,
      anchorEl: X,
      open: $e,
      onClose: N,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, E, {
      MenuListProps: c({
        "aria-labelledby": y,
        role: "listbox",
        "aria-multiselectable": b ? "true" : void 0,
        disableListWrap: !0,
        id: So
      }, E.MenuListProps),
      slotProps: c({}, E.slotProps, {
        paper: c({}, lo, {
          style: c({
            minWidth: Ge
          }, lo != null ? lo.style : null)
        })
      }),
      children: Ke
    }))]
  });
});
process.env.NODE_ENV !== "production" && (sr.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": e.string,
  /**
   * @ignore
   */
  "aria-label": e.string,
  /**
   * @ignore
   */
  autoFocus: e.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: e.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * The CSS class name of the select element.
   */
  className: e.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: e.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: e.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: e.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: e.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: e.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: e.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: Me,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: e.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: e.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: e.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: e.string,
  /**
   * @ignore
   */
  onBlur: e.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: e.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: e.func,
  /**
   * @ignore
   */
  onFocus: e.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: e.func,
  /**
   * If `true`, the component is shown.
   */
  open: e.bool,
  /**
   * @ignore
   */
  readOnly: e.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: e.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: e.object,
  /**
   * @ignore
   */
  tabIndex: e.oneOfType([e.number, e.string]),
  /**
   * @ignore
   */
  type: e.any,
  /**
   * The input value.
   */
  value: e.any,
  /**
   * The variant to use.
   */
  variant: e.oneOf(["standard", "outlined", "filled"])
});
const ec = sr, oc = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], tc = ["root"], nc = (o) => {
  const {
    classes: t
  } = o;
  return t;
}, gt = {
  name: "MuiSelect",
  overridesResolver: (o, t) => t.root,
  shouldForwardProp: (o) => ke(o) && o !== "variant",
  slot: "Root"
}, rc = W(Un, gt)(""), sc = W(rr, gt)(""), ic = W(_n, gt)(""), yt = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ce({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: s = !1,
    children: i,
    classes: a = {},
    className: d,
    defaultOpen: l = !1,
    displayEmpty: u = !1,
    IconComponent: m = bi,
    id: h,
    input: v,
    inputProps: T,
    label: C,
    labelId: S,
    MenuProps: f,
    multiple: y = !1,
    native: E = !1,
    onClose: b,
    onOpen: g,
    open: x,
    renderValue: O,
    SelectDisplayProps: R,
    variant: $ = "outlined"
  } = r, F = H(r, oc), A = E ? Al : ec, B = He(), V = eo({
    props: r,
    muiFormControl: B,
    states: ["variant", "error"]
  }), M = V.variant || $, k = c({}, r, {
    variant: M,
    classes: a
  }), I = nc(k), L = H(I, tc), D = v || {
    standard: /* @__PURE__ */ P(rc, {
      ownerState: k
    }),
    outlined: /* @__PURE__ */ P(sc, {
      label: C,
      ownerState: k
    }),
    filled: /* @__PURE__ */ P(ic, {
      ownerState: k
    })
  }[M], z = Pe(n, D.ref);
  return /* @__PURE__ */ P(p.Fragment, {
    children: /* @__PURE__ */ p.cloneElement(D, c({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: A,
      inputProps: c({
        children: i,
        error: V.error,
        IconComponent: m,
        variant: M,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: y
      }, E ? {
        id: h
      } : {
        autoWidth: s,
        defaultOpen: l,
        displayEmpty: u,
        labelId: S,
        MenuProps: f,
        onClose: b,
        onOpen: g,
        open: x,
        renderValue: O,
        SelectDisplayProps: c({
          id: h
        }, R)
      }, T, {
        classes: T ? _o(L, T.classes) : L
      }, v ? v.props.inputProps : {})
    }, (y && E || u) && M === "outlined" ? {
      notched: !0
    } : {}, {
      ref: z,
      className: K(D.props.className, d, I.root)
    }, !v && {
      variant: M
    }, F))
  });
});
process.env.NODE_ENV !== "production" && (yt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: e.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: e.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: e.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: e.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: e.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: e.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: e.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: e.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: e.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: e.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: e.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: e.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: e.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: e.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: e.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: e.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: e.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: e.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: e.oneOfType([e.oneOf([""]), e.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: e.oneOf(["filled", "outlined", "standard"])
});
yt.muiName = "Select";
const ac = yt;
function lc(o) {
  return ee("MuiTab", o);
}
const cc = oe("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]), Xe = cc, dc = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"], uc = (o) => {
  const {
    classes: t,
    textColor: n,
    fullWidth: r,
    wrapped: s,
    icon: i,
    label: a,
    selected: d,
    disabled: l
  } = o, u = {
    root: ["root", i && a && "labelIcon", `textColor${le(n)}`, r && "fullWidth", s && "wrapped", d && "selected", l && "disabled"],
    iconWrapper: ["iconWrapper"]
  };
  return ne(u, lc, t);
}, pc = W(Eo, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${le(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped];
  }
})(({
  theme: o,
  ownerState: t
}) => c({}, o.typography.button, {
  maxWidth: 360,
  minWidth: 90,
  position: "relative",
  minHeight: 48,
  flexShrink: 0,
  padding: "12px 16px",
  overflow: "hidden",
  whiteSpace: "normal",
  textAlign: "center"
}, t.label && {
  flexDirection: t.iconPosition === "top" || t.iconPosition === "bottom" ? "column" : "row"
}, {
  lineHeight: 1.25
}, t.icon && t.label && {
  minHeight: 72,
  paddingTop: 9,
  paddingBottom: 9,
  [`& > .${Xe.iconWrapper}`]: c({}, t.iconPosition === "top" && {
    marginBottom: 6
  }, t.iconPosition === "bottom" && {
    marginTop: 6
  }, t.iconPosition === "start" && {
    marginRight: o.spacing(1)
  }, t.iconPosition === "end" && {
    marginLeft: o.spacing(1)
  })
}, t.textColor === "inherit" && {
  color: "inherit",
  opacity: 0.6,
  // same opacity as theme.palette.text.secondary
  [`&.${Xe.selected}`]: {
    opacity: 1
  },
  [`&.${Xe.disabled}`]: {
    opacity: (o.vars || o).palette.action.disabledOpacity
  }
}, t.textColor === "primary" && {
  color: (o.vars || o).palette.text.secondary,
  [`&.${Xe.selected}`]: {
    color: (o.vars || o).palette.primary.main
  },
  [`&.${Xe.disabled}`]: {
    color: (o.vars || o).palette.text.disabled
  }
}, t.textColor === "secondary" && {
  color: (o.vars || o).palette.text.secondary,
  [`&.${Xe.selected}`]: {
    color: (o.vars || o).palette.secondary.main
  },
  [`&.${Xe.disabled}`]: {
    color: (o.vars || o).palette.text.disabled
  }
}, t.fullWidth && {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: 0,
  maxWidth: "none"
}, t.wrapped && {
  fontSize: o.typography.pxToRem(12)
})), ir = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiTab"
  }), {
    className: s,
    disabled: i = !1,
    disableFocusRipple: a = !1,
    // eslint-disable-next-line react/prop-types
    fullWidth: d,
    icon: l,
    iconPosition: u = "top",
    // eslint-disable-next-line react/prop-types
    indicator: m,
    label: h,
    onChange: v,
    onClick: T,
    onFocus: C,
    // eslint-disable-next-line react/prop-types
    selected: S,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: f,
    // eslint-disable-next-line react/prop-types
    textColor: y = "inherit",
    value: E,
    wrapped: b = !1
  } = r, g = H(r, dc), x = c({}, r, {
    disabled: i,
    disableFocusRipple: a,
    selected: S,
    icon: !!l,
    iconPosition: u,
    label: !!h,
    fullWidth: d,
    textColor: y,
    wrapped: b
  }), O = uc(x), R = l && h && /* @__PURE__ */ p.isValidElement(l) ? /* @__PURE__ */ p.cloneElement(l, {
    className: K(O.iconWrapper, l.props.className)
  }) : l, $ = (A) => {
    !S && v && v(A, E), T && T(A);
  }, F = (A) => {
    f && !S && v && v(A, E), C && C(A);
  };
  return /* @__PURE__ */ ge(pc, c({
    focusRipple: !a,
    className: K(O.root, s),
    ref: n,
    role: "tab",
    "aria-selected": S,
    disabled: i,
    onClick: $,
    onFocus: F,
    ownerState: x,
    tabIndex: S ? 0 : -1
  }, g, {
    children: [u === "top" || u === "start" ? /* @__PURE__ */ ge(p.Fragment, {
      children: [R, h]
    }) : /* @__PURE__ */ ge(p.Fragment, {
      children: [h, R]
    }), m]
  }));
});
process.env.NODE_ENV !== "production" && (ir.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Pr,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: e.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: e.bool,
  /**
   * The icon to display.
   */
  icon: e.oneOfType([e.element, e.string]),
  /**
   * The position of the icon relative to the label.
   * @default 'top'
   */
  iconPosition: e.oneOf(["bottom", "end", "start", "top"]),
  /**
   * The label element.
   */
  label: e.node,
  /**
   * @ignore
   */
  onChange: e.func,
  /**
   * @ignore
   */
  onClick: e.func,
  /**
   * @ignore
   */
  onFocus: e.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: e.any,
  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   * @default false
   */
  wrapped: e.bool
});
const vd = ir, fc = ao(/* @__PURE__ */ P("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), mc = ao(/* @__PURE__ */ P("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");
function bc(o) {
  return (1 + Math.sin(Math.PI * o - Math.PI / 2)) / 2;
}
function hc(o, t, n, r = {}, s = () => {
}) {
  const {
    ease: i = bc,
    duration: a = 300
    // standard
  } = r;
  let d = null;
  const l = t[o];
  let u = !1;
  const m = () => {
    u = !0;
  }, h = (v) => {
    if (u) {
      s(new Error("Animation cancelled"));
      return;
    }
    d === null && (d = v);
    const T = Math.min(1, (v - d) / a);
    if (t[o] = i(T) * (n - l) + l, T >= 1) {
      requestAnimationFrame(() => {
        s(null);
      });
      return;
    }
    requestAnimationFrame(h);
  };
  return l === n ? (s(new Error("Element already at target position")), m) : (requestAnimationFrame(h), m);
}
const vc = ["onChange"], gc = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function ar(o) {
  const {
    onChange: t
  } = o, n = H(o, vc), r = p.useRef(), s = p.useRef(null), i = () => {
    r.current = s.current.offsetHeight - s.current.clientHeight;
  };
  return Ue(() => {
    const a = jo(() => {
      const l = r.current;
      i(), l !== r.current && t(r.current);
    }), d = _e(s.current);
    return d.addEventListener("resize", a), () => {
      a.clear(), d.removeEventListener("resize", a);
    };
  }, [t]), p.useEffect(() => {
    i(), t(r.current);
  }, [t]), /* @__PURE__ */ P("div", c({
    style: gc,
    ref: s
  }, n));
}
process.env.NODE_ENV !== "production" && (ar.propTypes = {
  onChange: e.func.isRequired
});
function yc(o) {
  return ee("MuiTabScrollButton", o);
}
const xc = oe("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), Cc = xc, Ec = ["className", "slots", "slotProps", "direction", "orientation", "disabled"], Tc = (o) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = o;
  return ne({
    root: ["root", n, r && "disabled"]
  }, yc, t);
}, Sc = W(Eo, {
  name: "MuiTabScrollButton",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [t.root, n.orientation && t[n.orientation]];
  }
})(({
  ownerState: o
}) => c({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${Cc.disabled}`]: {
    opacity: 0
  }
}, o.orientation === "vertical" && {
  width: "100%",
  height: 40,
  "& svg": {
    transform: `rotate(${o.isRtl ? -90 : 90}deg)`
  }
})), lr = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var r, s;
  const i = ce({
    props: t,
    name: "MuiTabScrollButton"
  }), {
    className: a,
    slots: d = {},
    slotProps: l = {},
    direction: u
  } = i, m = H(i, Ec), v = qe().direction === "rtl", T = c({
    isRtl: v
  }, i), C = Tc(T), S = (r = d.StartScrollButtonIcon) != null ? r : fc, f = (s = d.EndScrollButtonIcon) != null ? s : mc, y = Ae({
    elementType: S,
    externalSlotProps: l.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: T
  }), E = Ae({
    elementType: f,
    externalSlotProps: l.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: T
  });
  return /* @__PURE__ */ P(Sc, c({
    component: "div",
    className: K(C.root, a),
    ref: n,
    role: null,
    ownerState: T,
    tabIndex: null
  }, m, {
    children: u === "left" ? /* @__PURE__ */ P(S, c({}, y)) : /* @__PURE__ */ P(f, c({}, E))
  }));
});
process.env.NODE_ENV !== "production" && (lr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The direction the button should indicate.
   */
  direction: e.oneOf(["left", "right"]).isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * The component orientation (layout flow direction).
   */
  orientation: e.oneOf(["horizontal", "vertical"]).isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps: e.shape({
    endScrollButtonIcon: e.oneOfType([e.func, e.object]),
    startScrollButtonIcon: e.oneOfType([e.func, e.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: e.shape({
    EndScrollButtonIcon: e.elementType,
    StartScrollButtonIcon: e.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object])
});
const Rc = lr;
function Oc(o) {
  return ee("MuiTabs", o);
}
const Pc = oe("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), ot = Pc, wc = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"], Gt = (o, t) => o === t ? o.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o.firstChild, Yt = (o, t) => o === t ? o.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o.lastChild, Io = (o, t, n) => {
  let r = !1, s = n(o, t);
  for (; s; ) {
    if (s === o.firstChild) {
      if (r)
        return;
      r = !0;
    }
    const i = s.disabled || s.getAttribute("aria-disabled") === "true";
    if (!s.hasAttribute("tabindex") || i)
      s = n(o, s);
    else {
      s.focus();
      return;
    }
  }
}, Nc = (o) => {
  const {
    vertical: t,
    fixed: n,
    hideScrollbar: r,
    scrollableX: s,
    scrollableY: i,
    centered: a,
    scrollButtonsHideMobile: d,
    classes: l
  } = o;
  return ne({
    root: ["root", t && "vertical"],
    scroller: ["scroller", n && "fixed", r && "hideScrollbar", s && "scrollableX", i && "scrollableY"],
    flexContainer: ["flexContainer", t && "flexContainerVertical", a && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", d && "scrollButtonsHideMobile"],
    scrollableX: [s && "scrollableX"],
    hideScrollbar: [r && "hideScrollbar"]
  }, Oc, l);
}, Ic = W("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [{
      [`& .${ot.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${ot.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, n.vertical && t.vertical];
  }
})(({
  ownerState: o,
  theme: t
}) => c({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex"
}, o.vertical && {
  flexDirection: "column"
}, o.scrollButtonsHideMobile && {
  [`& .${ot.scrollButtons}`]: {
    [t.breakpoints.down("sm")]: {
      display: "none"
    }
  }
})), $c = W("div", {
  name: "MuiTabs",
  slot: "Scroller",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [t.scroller, n.fixed && t.fixed, n.hideScrollbar && t.hideScrollbar, n.scrollableX && t.scrollableX, n.scrollableY && t.scrollableY];
  }
})(({
  ownerState: o
}) => c({
  position: "relative",
  display: "inline-block",
  flex: "1 1 auto",
  whiteSpace: "nowrap"
}, o.fixed && {
  overflowX: "hidden",
  width: "100%"
}, o.hideScrollbar && {
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}, o.scrollableX && {
  overflowX: "auto",
  overflowY: "hidden"
}, o.scrollableY && {
  overflowY: "auto",
  overflowX: "hidden"
})), kc = W("div", {
  name: "MuiTabs",
  slot: "FlexContainer",
  overridesResolver: (o, t) => {
    const {
      ownerState: n
    } = o;
    return [t.flexContainer, n.vertical && t.flexContainerVertical, n.centered && t.centered];
  }
})(({
  ownerState: o
}) => c({
  display: "flex"
}, o.vertical && {
  flexDirection: "column"
}, o.centered && {
  justifyContent: "center"
})), Mc = W("span", {
  name: "MuiTabs",
  slot: "Indicator",
  overridesResolver: (o, t) => t.indicator
})(({
  ownerState: o,
  theme: t
}) => c({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  transition: t.transitions.create()
}, o.indicatorColor === "primary" && {
  backgroundColor: (t.vars || t).palette.primary.main
}, o.indicatorColor === "secondary" && {
  backgroundColor: (t.vars || t).palette.secondary.main
}, o.vertical && {
  height: "100%",
  width: 2,
  right: 0
})), Fc = W(ar)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Xt = {};
let Zt = !1;
const cr = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiTabs"
  }), s = qe(), i = s.direction === "rtl", {
    "aria-label": a,
    "aria-labelledby": d,
    action: l,
    centered: u = !1,
    children: m,
    className: h,
    component: v = "div",
    allowScrollButtonsMobile: T = !1,
    indicatorColor: C = "primary",
    onChange: S,
    orientation: f = "horizontal",
    ScrollButtonComponent: y = Rc,
    scrollButtons: E = "auto",
    selectionFollowsFocus: b,
    slots: g = {},
    slotProps: x = {},
    TabIndicatorProps: O = {},
    TabScrollButtonProps: R = {},
    textColor: $ = "primary",
    value: F,
    variant: A = "standard",
    visibleScrollbar: B = !1
  } = r, V = H(r, wc), M = A === "scrollable", k = f === "vertical", I = k ? "scrollTop" : "scrollLeft", L = k ? "top" : "left", D = k ? "bottom" : "right", z = k ? "clientHeight" : "clientWidth", U = k ? "height" : "width", G = c({}, r, {
    component: v,
    allowScrollButtonsMobile: T,
    indicatorColor: C,
    orientation: f,
    vertical: k,
    scrollButtons: E,
    textColor: $,
    variant: A,
    visibleScrollbar: B,
    fixed: !M,
    hideScrollbar: M && !B,
    scrollableX: M && !k,
    scrollableY: M && k,
    centered: u && !M,
    scrollButtonsHideMobile: !T
  }), fe = Nc(G), me = Ae({
    elementType: g.StartScrollButtonIcon,
    externalSlotProps: x.startScrollButtonIcon,
    ownerState: G
  }), ue = Ae({
    elementType: g.EndScrollButtonIcon,
    externalSlotProps: x.endScrollButtonIcon,
    ownerState: G
  });
  process.env.NODE_ENV !== "production" && u && M && console.error('MUI: You can not use the `centered={true}` and `variant="scrollable"` properties at the same time on a `Tabs` component.');
  const [J, be] = p.useState(!1), [j, re] = p.useState(Xt), [de, xe] = p.useState(!1), [ye, X] = p.useState(!1), [pe, Z] = p.useState(!1), [N, se] = p.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), Ce = /* @__PURE__ */ new Map(), he = p.useRef(null), Se = p.useRef(null), $e = () => {
    const w = he.current;
    let _;
    if (w) {
      const Q = w.getBoundingClientRect();
      _ = {
        clientWidth: w.clientWidth,
        scrollLeft: w.scrollLeft,
        scrollTop: w.scrollTop,
        scrollLeftNormalized: zr(w, s.direction),
        scrollWidth: w.scrollWidth,
        top: Q.top,
        bottom: Q.bottom,
        left: Q.left,
        right: Q.right
      };
    }
    let Y;
    if (w && F !== !1) {
      const Q = Se.current.children;
      if (Q.length > 0) {
        const Te = Q[Ce.get(F)];
        process.env.NODE_ENV !== "production" && (Te || console.error(["MUI: The `value` provided to the Tabs component is invalid.", `None of the Tabs' children match with "${F}".`, Ce.keys ? `You can provide one of the following values: ${Array.from(Ce.keys()).join(", ")}.` : null].join(`
`))), Y = Te ? Te.getBoundingClientRect() : null, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && !Zt && Y && Y.width === 0 && Y.height === 0 && // if the whole Tabs component is hidden, don't warn
        _.clientWidth !== 0 && (_ = null, console.error(["MUI: The `value` provided to the Tabs component is invalid.", `The Tab with this \`value\` ("${F}") is not part of the document layout.`, "Make sure the tab item is present in the document or that it's not `display: none`."].join(`
`)), Zt = !0);
      }
    }
    return {
      tabsMeta: _,
      tabMeta: Y
    };
  }, we = vo(() => {
    const {
      tabsMeta: w,
      tabMeta: _
    } = $e();
    let Y = 0, Q;
    if (k)
      Q = "top", _ && w && (Y = _.top - w.top + w.scrollTop);
    else if (Q = i ? "right" : "left", _ && w) {
      const Oe = i ? w.scrollLeftNormalized + w.clientWidth - w.scrollWidth : w.scrollLeft;
      Y = (i ? -1 : 1) * (_[Q] - w[Q] + Oe);
    }
    const Te = {
      [Q]: Y,
      // May be wrong until the font is loaded.
      [U]: _ ? _[U] : 0
    };
    if (isNaN(j[Q]) || isNaN(j[U]))
      re(Te);
    else {
      const Oe = Math.abs(j[Q] - Te[Q]), Be = Math.abs(j[U] - Te[U]);
      (Oe >= 1 || Be >= 1) && re(Te);
    }
  }), ve = (w, {
    animation: _ = !0
  } = {}) => {
    _ ? hc(I, he.current, w, {
      duration: s.transitions.duration.standard
    }) : he.current[I] = w;
  }, Ie = (w) => {
    let _ = he.current[I];
    k ? _ += w : (_ += w * (i ? -1 : 1), _ *= i && ln() === "reverse" ? -1 : 1), ve(_);
  }, Re = () => {
    const w = he.current[z];
    let _ = 0;
    const Y = Array.from(Se.current.children);
    for (let Q = 0; Q < Y.length; Q += 1) {
      const Te = Y[Q];
      if (_ + Te[z] > w) {
        Q === 0 && (_ = w);
        break;
      }
      _ += Te[z];
    }
    return _;
  }, Ee = () => {
    Ie(-1 * Re());
  }, je = () => {
    Ie(Re());
  }, Ke = p.useCallback((w) => {
    se({
      overflow: null,
      scrollbarWidth: w
    });
  }, []), Ge = () => {
    const w = {};
    w.scrollbarSizeListener = M ? /* @__PURE__ */ P(Fc, {
      onChange: Ke,
      className: K(fe.scrollableX, fe.hideScrollbar)
    }) : null;
    const Y = M && (E === "auto" && (de || ye) || E === !0);
    return w.scrollButtonStart = Y ? /* @__PURE__ */ P(y, c({
      slots: {
        StartScrollButtonIcon: g.StartScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: me
      },
      orientation: f,
      direction: i ? "right" : "left",
      onClick: Ee,
      disabled: !de
    }, R, {
      className: K(fe.scrollButtons, R.className)
    })) : null, w.scrollButtonEnd = Y ? /* @__PURE__ */ P(y, c({
      slots: {
        EndScrollButtonIcon: g.EndScrollButtonIcon
      },
      slotProps: {
        endScrollButtonIcon: ue
      },
      orientation: f,
      direction: i ? "left" : "right",
      onClick: je,
      disabled: !ye
    }, R, {
      className: K(fe.scrollButtons, R.className)
    })) : null, w;
  }, te = vo((w) => {
    const {
      tabsMeta: _,
      tabMeta: Y
    } = $e();
    if (!(!Y || !_)) {
      if (Y[L] < _[L]) {
        const Q = _[I] + (Y[L] - _[L]);
        ve(Q, {
          animation: w
        });
      } else if (Y[D] > _[D]) {
        const Q = _[I] + (Y[D] - _[D]);
        ve(Q, {
          animation: w
        });
      }
    }
  }), Fe = vo(() => {
    M && E !== !1 && Z(!pe);
  });
  p.useEffect(() => {
    const w = jo(() => {
      he.current && we();
    });
    let _;
    const Y = (Oe) => {
      Oe.forEach((Be) => {
        Be.removedNodes.forEach((co) => {
          var We;
          (We = _) == null || We.unobserve(co);
        }), Be.addedNodes.forEach((co) => {
          var We;
          (We = _) == null || We.observe(co);
        });
      }), w(), Fe();
    }, Q = _e(he.current);
    Q.addEventListener("resize", w);
    let Te;
    return typeof ResizeObserver < "u" && (_ = new ResizeObserver(w), Array.from(Se.current.children).forEach((Oe) => {
      _.observe(Oe);
    })), typeof MutationObserver < "u" && (Te = new MutationObserver(Y), Te.observe(Se.current, {
      childList: !0
    })), () => {
      var Oe, Be;
      w.clear(), Q.removeEventListener("resize", w), (Oe = Te) == null || Oe.disconnect(), (Be = _) == null || Be.disconnect();
    };
  }, [we, Fe]), p.useEffect(() => {
    const w = Array.from(Se.current.children), _ = w.length;
    if (typeof IntersectionObserver < "u" && _ > 0 && M && E !== !1) {
      const Y = w[0], Q = w[_ - 1], Te = {
        root: he.current,
        threshold: 0.99
      }, Oe = (Ho) => {
        xe(!Ho[0].isIntersecting);
      }, Be = new IntersectionObserver(Oe, Te);
      Be.observe(Y);
      const co = (Ho) => {
        X(!Ho[0].isIntersecting);
      }, We = new IntersectionObserver(co, Te);
      return We.observe(Q), () => {
        Be.disconnect(), We.disconnect();
      };
    }
  }, [M, E, pe, m == null ? void 0 : m.length]), p.useEffect(() => {
    be(!0);
  }, []), p.useEffect(() => {
    we();
  }), p.useEffect(() => {
    te(Xt !== j);
  }, [te, j]), p.useImperativeHandle(l, () => ({
    updateIndicator: we,
    updateScrollButtons: Fe
  }), [we, Fe]);
  const De = /* @__PURE__ */ P(Mc, c({}, O, {
    className: K(fe.indicator, O.className),
    ownerState: G,
    style: c({}, j, O.style)
  }));
  let ze = 0;
  const lo = p.Children.map(m, (w) => {
    if (!/* @__PURE__ */ p.isValidElement(w))
      return null;
    process.env.NODE_ENV !== "production" && To.isFragment(w) && console.error(["MUI: The Tabs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    const _ = w.props.value === void 0 ? ze : w.props.value;
    Ce.set(_, ze);
    const Y = _ === F;
    return ze += 1, /* @__PURE__ */ p.cloneElement(w, c({
      fullWidth: A === "fullWidth",
      indicator: Y && !J && De,
      selected: Y,
      selectionFollowsFocus: b,
      onChange: S,
      textColor: $,
      value: _
    }, ze === 1 && F === !1 && !w.props.tabIndex ? {
      tabIndex: 0
    } : {}));
  }), So = (w) => {
    const _ = Se.current, Y = Ne(_).activeElement;
    if (Y.getAttribute("role") !== "tab")
      return;
    let Te = f === "horizontal" ? "ArrowLeft" : "ArrowUp", Oe = f === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (f === "horizontal" && i && (Te = "ArrowRight", Oe = "ArrowLeft"), w.key) {
      case Te:
        w.preventDefault(), Io(_, Y, Yt);
        break;
      case Oe:
        w.preventDefault(), Io(_, Y, Gt);
        break;
      case "Home":
        w.preventDefault(), Io(_, null, Gt);
        break;
      case "End":
        w.preventDefault(), Io(_, null, Yt);
        break;
    }
  }, q = Ge();
  return /* @__PURE__ */ ge(Ic, c({
    className: K(fe.root, h),
    ownerState: G,
    ref: n,
    as: v
  }, V, {
    children: [q.scrollButtonStart, q.scrollbarSizeListener, /* @__PURE__ */ ge($c, {
      className: fe.scroller,
      ownerState: G,
      style: {
        overflow: N.overflow,
        [k ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: B ? void 0 : -N.scrollbarWidth
      },
      ref: he,
      children: [/* @__PURE__ */ P(kc, {
        "aria-label": a,
        "aria-labelledby": d,
        "aria-orientation": f === "vertical" ? "vertical" : null,
        className: fe.flexContainer,
        ownerState: G,
        onKeyDown: So,
        ref: Se,
        role: "tablist",
        children: lo
      }), J && De]
    }), q.scrollButtonEnd]
  }));
});
process.env.NODE_ENV !== "production" && (cr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It supports two actions: `updateIndicator()` and `updateScrollButtons()`
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: Me,
  /**
   * If `true`, the scroll buttons aren't forced hidden on mobile.
   * By default the scroll buttons are hidden on mobile and takes precedence over `scrollButtons`.
   * @default false
   */
  allowScrollButtonsMobile: e.bool,
  /**
   * The label for the Tabs as a string.
   */
  "aria-label": e.string,
  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  "aria-labelledby": e.string,
  /**
   * If `true`, the tabs are centered.
   * This prop is intended for large views.
   * @default false
   */
  centered: e.bool,
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: e.elementType,
  /**
   * Determines the color of the indicator.
   * @default 'primary'
   */
  indicatorColor: e.oneOfType([e.oneOf(["primary", "secondary"]), e.string]),
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {any} value We default to the index of the child (number)
   */
  onChange: e.func,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: e.oneOf(["horizontal", "vertical"]),
  /**
   * The component used to render the scroll buttons.
   * @default TabScrollButton
   */
  ScrollButtonComponent: e.elementType,
  /**
   * Determine behavior of scroll buttons when tabs are set to scroll:
   *
   * - `auto` will only present them when not all the items are visible.
   * - `true` will always present them.
   * - `false` will never present them.
   *
   * By default the scroll buttons are hidden on mobile.
   * This behavior can be disabled with `allowScrollButtonsMobile`.
   * @default 'auto'
   */
  scrollButtons: e.oneOf(["auto", !1, !0]),
  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: e.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps: e.shape({
    endScrollButtonIcon: e.oneOfType([e.func, e.object]),
    startScrollButtonIcon: e.oneOfType([e.func, e.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: e.shape({
    EndScrollButtonIcon: e.elementType,
    StartScrollButtonIcon: e.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Props applied to the tab indicator element.
   * @default  {}
   */
  TabIndicatorProps: e.object,
  /**
   * Props applied to the [`TabScrollButton`](/material-ui/api/tab-scroll-button/) element.
   * @default {}
   */
  TabScrollButtonProps: e.object,
  /**
   * Determines the color of the `Tab`.
   * @default 'primary'
   */
  textColor: e.oneOf(["inherit", "primary", "secondary"]),
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this prop to `false`.
   */
  value: e.any,
  /**
   * Determines additional display behavior of the tabs:
   *
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  - `fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   * @default 'standard'
   */
  variant: e.oneOf(["fullWidth", "scrollable", "standard"]),
  /**
   * If `true`, the scrollbar is visible. It can be useful when displaying
   * a long vertical list of tabs.
   * @default false
   */
  visibleScrollbar: e.bool
});
const gd = cr;
function Dc(o) {
  return ee("MuiTextField", o);
}
const Bc = oe("MuiTextField", ["root"]), yd = Bc, Ac = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], _c = {
  standard: Un,
  filled: _n,
  outlined: rr
}, Lc = (o) => {
  const {
    classes: t
  } = o;
  return ne({
    root: ["root"]
  }, Dc, t);
}, jc = W(ha, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (o, t) => t.root
})({}), dr = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ce({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: s,
    autoFocus: i = !1,
    children: a,
    className: d,
    color: l = "primary",
    defaultValue: u,
    disabled: m = !1,
    error: h = !1,
    FormHelperTextProps: v,
    fullWidth: T = !1,
    helperText: C,
    id: S,
    InputLabelProps: f,
    inputProps: y,
    InputProps: E,
    inputRef: b,
    label: g,
    maxRows: x,
    minRows: O,
    multiline: R = !1,
    name: $,
    onBlur: F,
    onChange: A,
    onFocus: B,
    placeholder: V,
    required: M = !1,
    rows: k,
    select: I = !1,
    SelectProps: L,
    type: D,
    value: z,
    variant: U = "outlined"
  } = r, G = H(r, Ac), fe = c({}, r, {
    autoFocus: i,
    color: l,
    disabled: m,
    error: h,
    fullWidth: T,
    multiline: R,
    required: M,
    select: I,
    variant: U
  }), me = Lc(fe);
  process.env.NODE_ENV !== "production" && I && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const ue = {};
  U === "outlined" && (f && typeof f.shrink < "u" && (ue.notched = f.shrink), ue.label = g), I && ((!L || !L.native) && (ue.id = void 0), ue["aria-describedby"] = void 0);
  const J = lt(S), be = C && J ? `${J}-helper-text` : void 0, j = g && J ? `${J}-label` : void 0, re = _c[U], de = /* @__PURE__ */ P(re, c({
    "aria-describedby": be,
    autoComplete: s,
    autoFocus: i,
    defaultValue: u,
    fullWidth: T,
    multiline: R,
    name: $,
    rows: k,
    maxRows: x,
    minRows: O,
    type: D,
    value: z,
    id: J,
    inputRef: b,
    onBlur: F,
    onChange: A,
    onFocus: B,
    placeholder: V,
    inputProps: y
  }, ue, E));
  return /* @__PURE__ */ ge(jc, c({
    className: K(me.root, d),
    disabled: m,
    error: h,
    fullWidth: T,
    ref: n,
    required: M,
    color: l,
    variant: U,
    ownerState: fe
  }, G, {
    children: [g != null && g !== "" && /* @__PURE__ */ P(Ya, c({
      htmlFor: J,
      id: j
    }, f, {
      children: g
    })), I ? /* @__PURE__ */ P(ac, c({
      "aria-describedby": be,
      id: J,
      labelId: j,
      value: z,
      input: de
    }, L, {
      children: a
    })) : de, C && /* @__PURE__ */ P(Na, c({
      id: be
    }, v, {
      children: C
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (dr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: e.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: e.bool,
  /**
   * @ignore
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: e.oneOfType([e.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), e.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: e.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: e.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: e.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: e.bool,
  /**
   * The helper text content.
   */
  helperText: e.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: e.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: e.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: e.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: e.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Me,
  /**
   * The label content.
   */
  label: e.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: e.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: e.oneOfType([e.number, e.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: e.oneOfType([e.number, e.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: e.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: e.string,
  /**
   * @ignore
   */
  onBlur: e.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: e.func,
  /**
   * @ignore
   */
  onFocus: e.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: e.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: e.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: e.oneOfType([e.number, e.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: e.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: e.object,
  /**
   * The size of the component.
   */
  size: e.oneOfType([e.oneOf(["medium", "small"]), e.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: e.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: e.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: e.oneOf(["filled", "outlined", "standard"])
});
const xd = dr;
export {
  La as $,
  Zc as A,
  _e as B,
  td as C,
  rd as D,
  ct as E,
  cd as F,
  Rn as G,
  xo as H,
  pn as I,
  so as J,
  Fn as K,
  He as L,
  hd as M,
  eo as N,
  ut as O,
  Bo as P,
  it as Q,
  Fo as R,
  pd as S,
  xd as T,
  jt as U,
  fd as V,
  Al as W,
  $l as X,
  Un as Y,
  wi as Z,
  Ot as _,
  ed as a,
  ui as a$,
  hn as a0,
  mc as a1,
  fc as a2,
  ac as a3,
  pt as a4,
  In as a5,
  wn as a6,
  _n as a7,
  ha as a8,
  Na as a9,
  oa as aA,
  Bt as aB,
  fi as aC,
  ld as aD,
  ua as aE,
  ho as aF,
  ga as aG,
  At as aH,
  Sa as aI,
  yo as aJ,
  Fa as aK,
  Ia as aL,
  ci as aM,
  ri as aN,
  dd as aO,
  Ua as aP,
  ud as aQ,
  Xa as aR,
  Lt as aS,
  bd as aT,
  ml as aU,
  fo as aV,
  Rl as aW,
  Ys as aX,
  nd as aY,
  ji as aZ,
  ht as a_,
  Ba as aa,
  Ya as ab,
  ol as ac,
  Sl as ad,
  sl as ae,
  rr as af,
  fl as ag,
  va as ah,
  Rc as ai,
  Tn as aj,
  Do as ak,
  wo as al,
  Cs as am,
  Jc as an,
  Os as ao,
  ro as ap,
  $s as aq,
  od as ar,
  gi as as,
  Zo as at,
  ki as au,
  Yc as av,
  ns as aw,
  Jo as ax,
  Hi as ay,
  sd as az,
  Qc as b,
  Xc as b0,
  us as b1,
  md as b2,
  Wt as b3,
  Vt as b4,
  pl as b5,
  Xn as b6,
  il as b7,
  mo as b8,
  Hl as b9,
  Xe as ba,
  lc as bb,
  ot as bc,
  Oc as bd,
  Cc as be,
  yc as bf,
  yd as bg,
  Dc as bh,
  gd as c,
  vd as d,
  ds as e,
  id as f,
  lt as g,
  Mo as h,
  uo as i,
  io as j,
  Ve as k,
  Ye as l,
  zo as m,
  bi as n,
  Ne as o,
  un as p,
  Yo as q,
  Lo as r,
  _r as s,
  vn as t,
  Ae as u,
  xs as v,
  To as w,
  Gi as x,
  ad as y,
  jo as z
};
