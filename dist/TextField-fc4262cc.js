import { u as ci, G as di, P as t, A as ui, b as J, s as pi, _ as u, k as Pr, j as de, a as fi, i as mi, B as Ln, D as Ko, E as bi, h as Mo, F as hi, e as vi, g as fe, H as Bn, I as gi, x as st, J as yi, T as xi, K as Ir } from "./createTheme-9d913e0e.js";
import * as f from "react";
import to, { createElement as Ci } from "react";
import { c as te, g as be } from "./Box-33250a7c.js";
import { g as Oi, b as Ei, s as U, u as Oe, c as Ti, d as Si, r as ct, e as wi } from "./styled-c80c7b02.js";
import { e as yt, f as xe, _ as Ri, g as $r, u as Nr, h as We, i as mn, j as Kt, k as bt, s as rn, l as gt, r as Ze, m as Dt, C as Pi, T as sn, n as Ii } from "./TableRow-2b4ac02e.js";
import { jsx as I, jsxs as ke } from "react/jsx-runtime";
import { u as wt, g as jn, e as kr } from "./getOverlayAlpha-1f643798.js";
import { R as yo, r as $i } from "./theme-dd41183d.js";
function Mr({
  styles: e,
  themeId: o,
  defaultTheme: n = {}
}) {
  const r = ci(n), s = typeof e == "function" ? e(o && r[o] || r) : e;
  return /* @__PURE__ */ I(di, {
    styles: s
  });
}
process.env.NODE_ENV !== "production" && (Mr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: t.object,
  /**
   * @ignore
   */
  styles: t.oneOfType([t.array, t.func, t.number, t.object, t.string, t.bool]),
  /**
   * @ignore
   */
  themeId: t.string
});
const Ni = ["ownerState"], ki = ["variants"], Mi = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Ai(e) {
  return Object.keys(e).length === 0;
}
function Fi(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Yo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Di = Pr(), _n = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function xo({
  defaultTheme: e,
  theme: o,
  themeId: n
}) {
  return Ai(o) ? e : o[n] || o;
}
function Li(e) {
  return e ? (o, n) => n[e] : null;
}
function So(e, o) {
  let {
    ownerState: n
  } = o, r = J(o, Ni);
  const s = typeof e == "function" ? e(u({
    ownerState: n
  }, r)) : e;
  if (Array.isArray(s))
    return s.flatMap((i) => So(i, u({
      ownerState: n
    }, r)));
  if (s && typeof s == "object" && Array.isArray(s.variants)) {
    const {
      variants: i = []
    } = s;
    let c = J(s, ki);
    return i.forEach((l) => {
      let d = !0;
      typeof l.props == "function" ? d = l.props(u({
        ownerState: n
      }, r, n)) : Object.keys(l.props).forEach((p) => {
        (n == null ? void 0 : n[p]) !== l.props[p] && r[p] !== l.props[p] && (d = !1);
      }), d && (Array.isArray(c) || (c = [c]), c.push(typeof l.style == "function" ? l.style(u({
        ownerState: n
      }, r, n)) : l.style));
    }), c;
  }
  return s;
}
function Bi(e = {}) {
  const {
    themeId: o,
    defaultTheme: n = Di,
    rootShouldForwardProp: r = Yo,
    slotShouldForwardProp: s = Yo
  } = e, i = (a) => fi(u({}, a, {
    theme: xo(u({}, a, {
      defaultTheme: n,
      themeId: o
    }))
  }));
  return i.__mui_systemSx = !0, (a, c = {}) => {
    ui(a, (E) => E.filter((w) => !(w != null && w.__mui_systemSx)));
    const {
      name: l,
      slot: d,
      skipVariantsResolver: p,
      skipSx: b,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: v = Li(_n(d))
    } = c, g = J(c, Mi), T = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), O = b || !1;
    let m;
    process.env.NODE_ENV !== "production" && l && (m = `${l}-${_n(d || "Root")}`);
    let x = Yo;
    d === "Root" || d === "root" ? x = r : d ? x = s : Fi(a) && (x = void 0);
    const S = pi(a, u({
      shouldForwardProp: x,
      label: m
    }, g)), h = (E) => typeof E == "function" && E.__emotion_real !== E || mi(E) ? (w) => So(E, u({}, w, {
      theme: xo({
        theme: w.theme,
        defaultTheme: n,
        themeId: o
      })
    })) : E, y = (E, ...w) => {
      let R = h(E);
      const $ = w ? w.map(h) : [];
      l && v && $.push((F) => {
        const M = xo(u({}, F, {
          defaultTheme: n,
          themeId: o
        }));
        if (!M.components || !M.components[l] || !M.components[l].styleOverrides)
          return null;
        const D = M.components[l].styleOverrides, B = {};
        return Object.entries(D).forEach(([L, j]) => {
          B[L] = So(j, u({}, F, {
            theme: M
          }));
        }), v(F, B);
      }), l && !T && $.push((F) => {
        var M;
        const D = xo(u({}, F, {
          defaultTheme: n,
          themeId: o
        })), B = D == null || (M = D.components) == null || (M = M[l]) == null ? void 0 : M.variants;
        return So({
          variants: B
        }, u({}, F, {
          theme: D
        }));
      }), O || $.push(i);
      const N = $.length - w.length;
      if (Array.isArray(E) && N > 0) {
        const F = new Array(N).fill("");
        R = [...E, ...F], R.raw = [...E.raw, ...F];
      }
      const A = S(R, ...$);
      if (process.env.NODE_ENV !== "production") {
        let F;
        l && (F = `${l}${de(d || "")}`), F === void 0 && (F = `Styled(${Oi(a)})`), A.displayName = F;
      }
      return a.muiName && (A.muiName = a.muiName), A;
    };
    return S.withConfig && (y.withConfig = S.withConfig), y;
  };
}
const ji = Bi(), _i = ji;
function zi(e) {
  const {
    prototype: o = {}
  } = e;
  return !!o.isReactComponent;
}
function Ar(e, o, n, r, s) {
  const i = e[o], a = s || o;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = i.type;
  return typeof l == "function" && !zi(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Fr = yt(t.element, Ar);
Fr.isRequired = yt(t.element.isRequired, Ar);
const Ao = Fr;
function xt(e, o, n, r, s) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[o], a = s || o;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
function zn(...e) {
  return e.reduce((o, n) => n == null ? o : function(...s) {
    o.apply(this, s), n.apply(this, s);
  }, () => {
  });
}
function Fo(e, o = 166) {
  let n;
  function r(...s) {
    const i = () => {
      e.apply(this, s);
    };
    clearTimeout(n), n = setTimeout(i, o);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function Xo(e, o) {
  var n, r;
  return /* @__PURE__ */ f.isValidElement(e) && o.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function He(e) {
  return e && e.ownerDocument || document;
}
function Ct(e) {
  return He(e).defaultView || window;
}
let Wn = 0;
function Wi(e) {
  const [o, n] = f.useState(e), r = e || o;
  return f.useEffect(() => {
    o == null && (Wn += 1, n(`mui-${Wn}`));
  }, [o]), r;
}
const Vn = f["useId".toString()];
function Do(e) {
  if (Vn !== void 0) {
    const o = Vn();
    return e ?? o;
  }
  return Wi(e);
}
function Mt({
  controlled: e,
  default: o,
  name: n,
  state: r = "value"
}) {
  const {
    current: s
  } = f.useRef(e !== void 0), [i, a] = f.useState(o), c = s ? e : i;
  if (process.env.NODE_ENV !== "production") {
    f.useEffect(() => {
      s !== (e !== void 0) && console.error([`MUI: A component is changing the ${s ? "" : "un"}controlled ${r} state of ${n} to be ${s ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: d
    } = f.useRef(o);
    f.useEffect(() => {
      !s && d !== o && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(o)]);
  }
  const l = f.useCallback((d) => {
    s || a(d);
  }, []);
  return [c, l];
}
function Dr(e) {
  const o = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - o);
}
let jt;
function Lr() {
  if (jt)
    return jt;
  const e = document.createElement("div"), o = document.createElement("div");
  return o.style.width = "10px", o.style.height = "1px", e.appendChild(o), e.dir = "rtl", e.style.fontSize = "14px", e.style.width = "4px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.overflow = "scroll", document.body.appendChild(e), jt = "reverse", e.scrollLeft > 0 ? jt = "default" : (e.scrollLeft = 1, e.scrollLeft === 0 && (jt = "negative")), document.body.removeChild(e), jt;
}
function Vi(e, o) {
  const n = e.scrollLeft;
  if (o !== "rtl")
    return n;
  switch (Lr()) {
    case "negative":
      return e.scrollWidth - e.clientWidth + n;
    case "reverse":
      return e.scrollWidth - e.clientWidth - n;
    default:
      return n;
  }
}
const Ui = (e) => {
  const o = f.useRef({});
  return f.useEffect(() => {
    o.current = e;
  }), o.current;
}, Hi = Ui;
function qi(e) {
  const o = typeof e;
  switch (o) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return o;
  }
}
function Gi(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Ki = Number.isInteger || Gi;
function Br(e, o, n, r) {
  const s = e[o];
  if (s == null || !Ki(s)) {
    const i = qi(s);
    return new RangeError(`Invalid ${r} \`${o}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function jr(e, o, ...n) {
  return e[o] === void 0 ? null : Br(e, o, ...n);
}
function an() {
  return null;
}
jr.isRequired = Br;
an.isRequired = an;
const bn = process.env.NODE_ENV === "production" ? an : jr, Yi = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"], Xi = Pr(), Ji = _i("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, o) => o.root
});
function Zi(e) {
  return Ei({
    props: e,
    name: "MuiStack",
    defaultTheme: Xi
  });
}
function Qi(e, o) {
  const n = f.Children.toArray(e).filter(Boolean);
  return n.reduce((r, s, i) => (r.push(s), i < n.length - 1 && r.push(/* @__PURE__ */ f.cloneElement(o, {
    key: `separator-${i}`
  })), r), []);
}
const ea = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], ta = ({
  ownerState: e,
  theme: o
}) => {
  let n = u({
    display: "flex",
    flexDirection: "column"
  }, Ln({
    theme: o
  }, Ko({
    values: e.direction,
    breakpoints: o.breakpoints.values
  }), (r) => ({
    flexDirection: r
  })));
  if (e.spacing) {
    const r = bi(o), s = Object.keys(o.breakpoints.values).reduce((l, d) => ((typeof e.spacing == "object" && e.spacing[d] != null || typeof e.direction == "object" && e.direction[d] != null) && (l[d] = !0), l), {}), i = Ko({
      values: e.direction,
      base: s
    }), a = Ko({
      values: e.spacing,
      base: s
    });
    typeof i == "object" && Object.keys(i).forEach((l, d, p) => {
      if (!i[l]) {
        const v = d > 0 ? i[p[d - 1]] : "column";
        i[l] = v;
      }
    }), n = Mo(n, Ln({
      theme: o
    }, a, (l, d) => e.useFlexGap ? {
      gap: Bn(r, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${ea(d ? i[d] : e.direction)}`]: Bn(r, l)
      }
    }));
  }
  return n = hi(o.breakpoints, n), n;
};
function oa(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: o = Ji,
    useThemeProps: n = Zi,
    componentName: r = "MuiStack"
  } = e, s = () => xe({
    root: ["root"]
  }, (l) => fe(r, l), {}), i = o(ta), a = /* @__PURE__ */ f.forwardRef(function(l, d) {
    const p = n(l), b = vi(p), {
      component: v = "div",
      direction: g = "column",
      spacing: T = 0,
      divider: O,
      children: m,
      className: x,
      useFlexGap: S = !1
    } = b, h = J(b, Yi), y = {
      direction: g,
      spacing: T,
      useFlexGap: S
    }, E = s();
    return /* @__PURE__ */ I(i, u({
      as: v,
      ownerState: y,
      ref: d,
      className: te(E.root, x)
    }, h, {
      children: O ? Qi(m, O) : m
    }));
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: t.node,
    direction: t.oneOfType([t.oneOf(["column-reverse", "column", "row-reverse", "row"]), t.arrayOf(t.oneOf(["column-reverse", "column", "row-reverse", "row"])), t.object]),
    divider: t.node,
    spacing: t.oneOfType([t.arrayOf(t.oneOfType([t.number, t.string])), t.number, t.object, t.string]),
    sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
  }), a;
}
var ln = { exports: {} }, Pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Un;
function na() {
  if (Un)
    return Pe;
  Un = 1;
  var e = Symbol.for("react.element"), o = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), T;
  T = Symbol.for("react.module.reference");
  function O(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case e:
          switch (m = m.type, m) {
            case n:
            case s:
            case r:
            case d:
            case p:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case c:
                case a:
                case l:
                case v:
                case b:
                case i:
                  return m;
                default:
                  return x;
              }
          }
        case o:
          return x;
      }
    }
  }
  return Pe.ContextConsumer = a, Pe.ContextProvider = i, Pe.Element = e, Pe.ForwardRef = l, Pe.Fragment = n, Pe.Lazy = v, Pe.Memo = b, Pe.Portal = o, Pe.Profiler = s, Pe.StrictMode = r, Pe.Suspense = d, Pe.SuspenseList = p, Pe.isAsyncMode = function() {
    return !1;
  }, Pe.isConcurrentMode = function() {
    return !1;
  }, Pe.isContextConsumer = function(m) {
    return O(m) === a;
  }, Pe.isContextProvider = function(m) {
    return O(m) === i;
  }, Pe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, Pe.isForwardRef = function(m) {
    return O(m) === l;
  }, Pe.isFragment = function(m) {
    return O(m) === n;
  }, Pe.isLazy = function(m) {
    return O(m) === v;
  }, Pe.isMemo = function(m) {
    return O(m) === b;
  }, Pe.isPortal = function(m) {
    return O(m) === o;
  }, Pe.isProfiler = function(m) {
    return O(m) === s;
  }, Pe.isStrictMode = function(m) {
    return O(m) === r;
  }, Pe.isSuspense = function(m) {
    return O(m) === d;
  }, Pe.isSuspenseList = function(m) {
    return O(m) === p;
  }, Pe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === s || m === r || m === d || m === p || m === g || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === b || m.$$typeof === i || m.$$typeof === a || m.$$typeof === l || m.$$typeof === T || m.getModuleId !== void 0);
  }, Pe.typeOf = O, Pe;
}
var Ie = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hn;
function ra() {
  return Hn || (Hn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), o = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), T = !1, O = !1, m = !1, x = !1, S = !1, h;
    h = Symbol.for("react.module.reference");
    function y(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === n || z === s || S || z === r || z === d || z === p || x || z === g || T || O || m || typeof z == "object" && z !== null && (z.$$typeof === v || z.$$typeof === b || z.$$typeof === i || z.$$typeof === a || z.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === h || z.getModuleId !== void 0));
    }
    function E(z) {
      if (typeof z == "object" && z !== null) {
        var se = z.$$typeof;
        switch (se) {
          case e:
            var G = z.type;
            switch (G) {
              case n:
              case s:
              case r:
              case d:
              case p:
                return G;
              default:
                var $e = G && G.$$typeof;
                switch ($e) {
                  case c:
                  case a:
                  case l:
                  case v:
                  case b:
                  case i:
                    return $e;
                  default:
                    return se;
                }
            }
          case o:
            return se;
        }
      }
    }
    var w = a, R = i, $ = e, N = l, A = n, F = v, M = b, D = o, B = s, L = r, j = d, _ = p, V = !1, K = !1;
    function ee(z) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function he(z) {
      return K || (K = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ve(z) {
      return E(z) === a;
    }
    function Ce(z) {
      return E(z) === i;
    }
    function Q(z) {
      return typeof z == "object" && z !== null && z.$$typeof === e;
    }
    function ne(z) {
      return E(z) === l;
    }
    function q(z) {
      return E(z) === n;
    }
    function ue(z) {
      return E(z) === v;
    }
    function X(z) {
      return E(z) === b;
    }
    function pe(z) {
      return E(z) === o;
    }
    function we(z) {
      return E(z) === s;
    }
    function ae(z) {
      return E(z) === r;
    }
    function ce(z) {
      return E(z) === d;
    }
    function ie(z) {
      return E(z) === p;
    }
    Ie.ContextConsumer = w, Ie.ContextProvider = R, Ie.Element = $, Ie.ForwardRef = N, Ie.Fragment = A, Ie.Lazy = F, Ie.Memo = M, Ie.Portal = D, Ie.Profiler = B, Ie.StrictMode = L, Ie.Suspense = j, Ie.SuspenseList = _, Ie.isAsyncMode = ee, Ie.isConcurrentMode = he, Ie.isContextConsumer = ve, Ie.isContextProvider = Ce, Ie.isElement = Q, Ie.isForwardRef = ne, Ie.isFragment = q, Ie.isLazy = ue, Ie.isMemo = X, Ie.isPortal = pe, Ie.isProfiler = we, Ie.isStrictMode = ae, Ie.isSuspense = ce, Ie.isSuspenseList = ie, Ie.isValidElementType = y, Ie.typeOf = E;
  }()), Ie;
}
process.env.NODE_ENV === "production" ? ln.exports = na() : ln.exports = ra();
var po = ln.exports;
const qn = {
  disabled: !1
};
var sa = process.env.NODE_ENV !== "production" ? t.oneOfType([t.number, t.shape({
  enter: t.number,
  exit: t.number,
  appear: t.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && t.oneOfType([t.string, t.shape({
  enter: t.string,
  exit: t.string,
  active: t.string
}), t.shape({
  enter: t.string,
  enterDone: t.string,
  enterActive: t.string,
  exit: t.string,
  exitDone: t.string,
  exitActive: t.string
})]);
var ia = function(o) {
  return o.scrollTop;
}, oo = "unmounted", Nt = "exited", kt = "entering", zt = "entered", cn = "exiting", Et = /* @__PURE__ */ function(e) {
  Ri(o, e);
  function o(r, s) {
    var i;
    i = e.call(this, r, s) || this;
    var a = s, c = a && !a.isMounting ? r.enter : r.appear, l;
    return i.appearStatus = null, r.in ? c ? (l = Nt, i.appearStatus = kt) : l = zt : r.unmountOnExit || r.mountOnEnter ? l = oo : l = Nt, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  o.getDerivedStateFromProps = function(s, i) {
    var a = s.in;
    return a && i.status === oo ? {
      status: Nt
    } : null;
  };
  var n = o.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(s) {
    var i = null;
    if (s !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== kt && a !== zt && (i = kt) : (a === kt || a === zt) && (i = cn);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var s = this.props.timeout, i, a, c;
    return i = a = c = s, s != null && typeof s != "number" && (i = s.exit, a = s.enter, c = s.appear !== void 0 ? s.appear : a), {
      exit: i,
      enter: a,
      appear: c
    };
  }, n.updateStatus = function(s, i) {
    if (s === void 0 && (s = !1), i !== null)
      if (this.cancelNextCallback(), i === kt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : yo.findDOMNode(this);
          a && ia(a);
        }
        this.performEnter(s);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Nt && this.setState({
        status: oo
      });
  }, n.performEnter = function(s) {
    var i = this, a = this.props.enter, c = this.context ? this.context.isMounting : s, l = this.props.nodeRef ? [c] : [yo.findDOMNode(this), c], d = l[0], p = l[1], b = this.getTimeouts(), v = c ? b.appear : b.enter;
    if (!s && !a || qn.disabled) {
      this.safeSetState({
        status: zt
      }, function() {
        i.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, p), this.safeSetState({
      status: kt
    }, function() {
      i.props.onEntering(d, p), i.onTransitionEnd(v, function() {
        i.safeSetState({
          status: zt
        }, function() {
          i.props.onEntered(d, p);
        });
      });
    });
  }, n.performExit = function() {
    var s = this, i = this.props.exit, a = this.getTimeouts(), c = this.props.nodeRef ? void 0 : yo.findDOMNode(this);
    if (!i || qn.disabled) {
      this.safeSetState({
        status: Nt
      }, function() {
        s.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: cn
    }, function() {
      s.props.onExiting(c), s.onTransitionEnd(a.exit, function() {
        s.safeSetState({
          status: Nt
        }, function() {
          s.props.onExited(c);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(s, i) {
    i = this.setNextCallback(i), this.setState(s, i);
  }, n.setNextCallback = function(s) {
    var i = this, a = !0;
    return this.nextCallback = function(c) {
      a && (a = !1, i.nextCallback = null, s(c));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(s, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : yo.findDOMNode(this), c = s == null && !this.props.addEndListener;
    if (!a || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], d = l[0], p = l[1];
      this.props.addEndListener(d, p);
    }
    s != null && setTimeout(this.nextCallback, s);
  }, n.render = function() {
    var s = this.state.status;
    if (s === oo)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var c = J(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ to.createElement($r.Provider, {
        value: null
      }, typeof a == "function" ? a(s, c) : to.cloneElement(to.Children.only(a), c))
    );
  }, o;
}(to.Component);
Et.contextType = $r;
Et.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: t.shape({
    current: typeof Element > "u" ? t.any : function(e, o, n, r, s, i) {
      var a = e[o];
      return t.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, o, n, r, s, i);
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
  children: t.oneOfType([t.func.isRequired, t.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: t.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: t.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: t.bool,
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
  appear: t.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: t.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: t.bool,
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
  timeout: function(o) {
    var n = sa;
    o.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      s[i - 1] = arguments[i];
    return n.apply(void 0, [o].concat(s));
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
  addEndListener: t.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: t.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: t.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: t.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: t.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: t.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: t.func
} : {};
function _t() {
}
Et.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: _t,
  onEntering: _t,
  onEntered: _t,
  onExit: _t,
  onExiting: _t,
  onExited: _t
};
Et.UNMOUNTED = oo;
Et.EXITED = Nt;
Et.ENTERING = kt;
Et.ENTERED = zt;
Et.EXITING = cn;
const hn = Et, _r = (e) => e.scrollTop;
function Vt(e, o) {
  var n, r;
  const {
    timeout: s,
    easing: i,
    style: a = {}
  } = e;
  return {
    duration: (n = a.transitionDuration) != null ? n : typeof s == "number" ? s : s[o.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof i == "object" ? i[o.mode] : i,
    delay: a.transitionDelay
  };
}
function aa(e) {
  return fe("MuiCollapse", e);
}
const la = be("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]), bm = la, ca = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"], da = (e) => {
  const {
    orientation: o,
    classes: n
  } = e, r = {
    root: ["root", `${o}`],
    entered: ["entered"],
    hidden: ["hidden"],
    wrapper: ["wrapper", `${o}`],
    wrapperInner: ["wrapperInner", `${o}`]
  };
  return xe(r, aa, n);
}, ua = U("div", {
  name: "MuiCollapse",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.root, o[n.orientation], n.state === "entered" && o.entered, n.state === "exited" && !n.in && n.collapsedSize === "0px" && o.hidden];
  }
})(({
  theme: e,
  ownerState: o
}) => u({
  height: 0,
  overflow: "hidden",
  transition: e.transitions.create("height")
}, o.orientation === "horizontal" && {
  height: "auto",
  width: 0,
  transition: e.transitions.create("width")
}, o.state === "entered" && u({
  height: "auto",
  overflow: "visible"
}, o.orientation === "horizontal" && {
  width: "auto"
}), o.state === "exited" && !o.in && o.collapsedSize === "0px" && {
  visibility: "hidden"
})), pa = U("div", {
  name: "MuiCollapse",
  slot: "Wrapper",
  overridesResolver: (e, o) => o.wrapper
})(({
  ownerState: e
}) => u({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: "flex",
  width: "100%"
}, e.orientation === "horizontal" && {
  width: "auto",
  height: "100%"
})), fa = U("div", {
  name: "MuiCollapse",
  slot: "WrapperInner",
  overridesResolver: (e, o) => o.wrapperInner
})(({
  ownerState: e
}) => u({
  width: "100%"
}, e.orientation === "horizontal" && {
  width: "auto",
  height: "100%"
})), vn = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiCollapse"
  }), {
    addEndListener: s,
    children: i,
    className: a,
    collapsedSize: c = "0px",
    component: l,
    easing: d,
    in: p,
    onEnter: b,
    onEntered: v,
    onEntering: g,
    onExit: T,
    onExited: O,
    onExiting: m,
    orientation: x = "vertical",
    style: S,
    timeout: h = gi.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: y = hn
  } = r, E = J(r, ca), w = u({}, r, {
    orientation: x,
    collapsedSize: c
  }), R = da(w), $ = wt(), N = Nr(), A = f.useRef(null), F = f.useRef(), M = typeof c == "number" ? `${c}px` : c, D = x === "horizontal", B = D ? "width" : "height", L = f.useRef(null), j = We(n, L), _ = (q) => (ue) => {
    if (q) {
      const X = L.current;
      ue === void 0 ? q(X) : q(X, ue);
    }
  }, V = () => A.current ? A.current[D ? "clientWidth" : "clientHeight"] : 0, K = _((q, ue) => {
    A.current && D && (A.current.style.position = "absolute"), q.style[B] = M, b && b(q, ue);
  }), ee = _((q, ue) => {
    const X = V();
    A.current && D && (A.current.style.position = "");
    const {
      duration: pe,
      easing: we
    } = Vt({
      style: S,
      timeout: h,
      easing: d
    }, {
      mode: "enter"
    });
    if (h === "auto") {
      const ae = $.transitions.getAutoHeightDuration(X);
      q.style.transitionDuration = `${ae}ms`, F.current = ae;
    } else
      q.style.transitionDuration = typeof pe == "string" ? pe : `${pe}ms`;
    q.style[B] = `${X}px`, q.style.transitionTimingFunction = we, g && g(q, ue);
  }), he = _((q, ue) => {
    q.style[B] = "auto", v && v(q, ue);
  }), ve = _((q) => {
    q.style[B] = `${V()}px`, T && T(q);
  }), Ce = _(O), Q = _((q) => {
    const ue = V(), {
      duration: X,
      easing: pe
    } = Vt({
      style: S,
      timeout: h,
      easing: d
    }, {
      mode: "exit"
    });
    if (h === "auto") {
      const we = $.transitions.getAutoHeightDuration(ue);
      q.style.transitionDuration = `${we}ms`, F.current = we;
    } else
      q.style.transitionDuration = typeof X == "string" ? X : `${X}ms`;
    q.style[B] = M, q.style.transitionTimingFunction = pe, m && m(q);
  });
  return /* @__PURE__ */ I(y, u({
    in: p,
    onEnter: K,
    onEntered: he,
    onEntering: ee,
    onExit: ve,
    onExited: Ce,
    onExiting: Q,
    addEndListener: (q) => {
      h === "auto" && N.start(F.current || 0, q), s && s(L.current, q);
    },
    nodeRef: L,
    timeout: h === "auto" ? null : h
  }, E, {
    children: (q, ue) => /* @__PURE__ */ I(ua, u({
      as: l,
      className: te(R.root, a, {
        entered: R.entered,
        exited: !p && M === "0px" && R.hidden
      }[q]),
      style: u({
        [D ? "minWidth" : "minHeight"]: M
      }, S),
      ref: j
    }, ue, {
      // `ownerState` is set after `childProps` to override any existing `ownerState` property in `childProps`
      // that might have been forwarded from the Transition component.
      ownerState: u({}, w, {
        state: q
      }),
      children: /* @__PURE__ */ I(pa, {
        ownerState: u({}, w, {
          state: q
        }),
        className: R.wrapper,
        ref: A,
        children: /* @__PURE__ */ I(fa, {
          ownerState: u({}, w, {
            state: q
          }),
          className: R.wrapperInner,
          children: i
        })
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (vn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: t.func,
  /**
   * The content node to be collapsed.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The width (horizontal) or height (vertical) of the container when collapsed.
   * @default '0px'
   */
  collapsedSize: t.oneOfType([t.number, t.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: mn,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: t.oneOfType([t.shape({
    enter: t.string,
    exit: t.string
  }), t.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: t.bool,
  /**
   * @ignore
   */
  onEnter: t.func,
  /**
   * @ignore
   */
  onEntered: t.func,
  /**
   * @ignore
   */
  onEntering: t.func,
  /**
   * @ignore
   */
  onExit: t.func,
  /**
   * @ignore
   */
  onExited: t.func,
  /**
   * @ignore
   */
  onExiting: t.func,
  /**
   * The transition orientation.
   * @default 'vertical'
   */
  orientation: t.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  style: t.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default duration.standard
   */
  timeout: t.oneOfType([t.oneOf(["auto"]), t.number, t.shape({
    appear: t.number,
    enter: t.number,
    exit: t.number
  })])
});
vn.muiSupportAuto = !0;
const ma = vn;
function ba(e) {
  return fe("MuiPaper", e);
}
const ha = be("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]), hm = ha, va = ["className", "component", "elevation", "square", "variant"], ga = (e) => {
  const {
    square: o,
    elevation: n,
    variant: r,
    classes: s
  } = e, i = {
    root: ["root", r, !o && "rounded", r === "elevation" && `elevation${n}`]
  };
  return xe(i, ba, s);
}, ya = U("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.root, o[n.variant], !n.square && o.rounded, n.variant === "elevation" && o[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: o
}) => {
  var n;
  return u({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !o.square && {
    borderRadius: e.shape.borderRadius
  }, o.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, o.variant === "elevation" && u({
    boxShadow: (e.vars || e).shadows[o.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${st("#fff", jn(o.elevation))}, ${st("#fff", jn(o.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[o.elevation]
  }));
}), zr = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiPaper"
  }), {
    className: s,
    component: i = "div",
    elevation: a = 1,
    square: c = !1,
    variant: l = "elevation"
  } = r, d = J(r, va), p = u({}, r, {
    component: i,
    elevation: a,
    square: c,
    variant: l
  }), b = ga(p);
  return process.env.NODE_ENV !== "production" && wt().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ I(ya, u({
    as: i,
    ownerState: p,
    className: te(b.root, s),
    ref: n
  }, d));
});
process.env.NODE_ENV !== "production" && (zr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: yt(bn, (e) => {
    const {
      elevation: o,
      variant: n
    } = e;
    return o > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${o}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: t.oneOfType([t.oneOf(["elevation", "outlined"]), t.string])
});
const Yt = zr, Wr = /* @__PURE__ */ f.createContext({});
process.env.NODE_ENV !== "production" && (Wr.displayName = "AccordionContext");
const Vr = Wr;
function Po(e) {
  return typeof e == "string";
}
function Ur(e, o, n) {
  return e === void 0 || Po(e) ? o : u({}, o, {
    ownerState: u({}, o.ownerState, n)
  });
}
const xa = {
  disableDefaultClasses: !1
}, Hr = /* @__PURE__ */ f.createContext(xa);
process.env.NODE_ENV !== "production" && (Hr.displayName = "ClassNameConfiguratorContext");
function Ca(e) {
  const {
    disableDefaultClasses: o
  } = f.useContext(Hr);
  return (n) => o ? "" : e(n);
}
function qr(e, o = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !o.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Gr(e, o, n) {
  return typeof e == "function" ? e(o, n) : e;
}
function Gn(e) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    o[n] = e[n];
  }), o;
}
function Kr(e) {
  const {
    getSlotProps: o,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: s,
    className: i
  } = e;
  if (!o) {
    const g = te(n == null ? void 0 : n.className, i, s == null ? void 0 : s.className, r == null ? void 0 : r.className), T = u({}, n == null ? void 0 : n.style, s == null ? void 0 : s.style, r == null ? void 0 : r.style), O = u({}, n, s, r);
    return g.length > 0 && (O.className = g), Object.keys(T).length > 0 && (O.style = T), {
      props: O,
      internalRef: void 0
    };
  }
  const a = qr(u({}, s, r)), c = Gn(r), l = Gn(s), d = o(a), p = te(d == null ? void 0 : d.className, n == null ? void 0 : n.className, i, s == null ? void 0 : s.className, r == null ? void 0 : r.className), b = u({}, d == null ? void 0 : d.style, n == null ? void 0 : n.style, s == null ? void 0 : s.style, r == null ? void 0 : r.style), v = u({}, d, n, l, c);
  return p.length > 0 && (v.className = p), Object.keys(b).length > 0 && (v.style = b), {
    props: v,
    internalRef: d.ref
  };
}
const Oa = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function pt(e) {
  var o;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: s,
    skipResolvingSlotProps: i = !1
  } = e, a = J(e, Oa), c = i ? {} : Gr(r, s), {
    props: l,
    internalRef: d
  } = Kr(u({}, a, {
    externalSlotProps: c
  })), p = We(d, c == null ? void 0 : c.ref, (o = e.additionalProps) == null ? void 0 : o.ref);
  return Ur(n, u({}, l, {
    ref: p
  }), s);
}
const Ea = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"], Ta = ["component", "slots", "slotProps"], Sa = ["component"];
function wa(e, o) {
  const {
    className: n,
    elementType: r,
    ownerState: s,
    externalForwardedProps: i,
    getSlotOwnerState: a,
    internalForwardedProps: c
  } = o, l = J(o, Ea), {
    component: d,
    slots: p = {
      [e]: void 0
    },
    slotProps: b = {
      [e]: void 0
    }
  } = i, v = J(i, Ta), g = p[e] || r, T = Gr(b[e], s), O = Kr(u({
    className: n
  }, l, {
    externalForwardedProps: e === "root" ? v : void 0,
    externalSlotProps: T
  })), {
    props: {
      component: m
    },
    internalRef: x
  } = O, S = J(O.props, Sa), h = We(x, T == null ? void 0 : T.ref, o.ref), y = a ? a(S) : {}, E = u({}, s, y), w = e === "root" ? m || d : m, R = Ur(g, u({}, e === "root" && !d && !p[e] && c, e !== "root" && !p[e] && c, S, w && {
    as: w
  }, {
    ref: h
  }), E);
  return Object.keys(y).forEach(($) => {
    delete R[$];
  }), [g, R];
}
function Ra(e) {
  return fe("MuiAccordion", e);
}
const Pa = be("MuiAccordion", ["root", "rounded", "expanded", "disabled", "gutters", "region"]), Co = Pa, Ia = ["children", "className", "defaultExpanded", "disabled", "disableGutters", "expanded", "onChange", "square", "slots", "slotProps", "TransitionComponent", "TransitionProps"], $a = (e) => {
  const {
    classes: o,
    square: n,
    expanded: r,
    disabled: s,
    disableGutters: i
  } = e;
  return xe({
    root: ["root", !n && "rounded", r && "expanded", s && "disabled", !i && "gutters"],
    region: ["region"]
  }, Ra, o);
}, Na = U(Yt, {
  name: "MuiAccordion",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Co.region}`]: o.region
    }, o.root, !n.square && o.rounded, !n.disableGutters && o.gutters];
  }
})(({
  theme: e
}) => {
  const o = {
    duration: e.transitions.duration.shortest
  };
  return {
    position: "relative",
    transition: e.transitions.create(["margin"], o),
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
      backgroundColor: (e.vars || e).palette.divider,
      transition: e.transitions.create(["opacity", "background-color"], o)
    },
    "&:first-of-type": {
      "&::before": {
        display: "none"
      }
    },
    [`&.${Co.expanded}`]: {
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
    [`&.${Co.disabled}`]: {
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    }
  };
}, ({
  theme: e,
  ownerState: o
}) => u({}, !o.square && {
  borderRadius: 0,
  "&:first-of-type": {
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius
  },
  "&:last-of-type": {
    borderBottomLeftRadius: (e.vars || e).shape.borderRadius,
    borderBottomRightRadius: (e.vars || e).shape.borderRadius,
    // Fix a rendering issue on Edge
    "@supports (-ms-ime-align: auto)": {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }
  }
}, !o.disableGutters && {
  [`&.${Co.expanded}`]: {
    margin: "16px 0"
  }
})), Yr = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiAccordion"
  }), {
    children: s,
    className: i,
    defaultExpanded: a = !1,
    disabled: c = !1,
    disableGutters: l = !1,
    expanded: d,
    onChange: p,
    square: b = !1,
    slots: v = {},
    slotProps: g = {},
    TransitionComponent: T,
    TransitionProps: O
  } = r, m = J(r, Ia), [x, S] = Mt({
    controlled: d,
    default: a,
    name: "Accordion",
    state: "expanded"
  }), h = f.useCallback((D) => {
    S(!x), p && p(D, !x);
  }, [x, p, S]), [y, ...E] = f.Children.toArray(s), w = f.useMemo(() => ({
    expanded: x,
    disabled: c,
    disableGutters: l,
    toggle: h
  }), [x, c, l, h]), R = u({}, r, {
    square: b,
    disabled: c,
    disableGutters: l,
    expanded: x
  }), $ = $a(R), N = u({
    transition: T
  }, v), A = u({
    transition: O
  }, g), [F, M] = wa("transition", {
    elementType: ma,
    externalForwardedProps: {
      slots: N,
      slotProps: A
    },
    ownerState: R
  });
  return /* @__PURE__ */ ke(Na, u({
    className: te($.root, i),
    ref: n,
    ownerState: R,
    square: b
  }, m, {
    children: [/* @__PURE__ */ I(Vr.Provider, {
      value: w,
      children: y
    }), /* @__PURE__ */ I(F, u({
      in: x,
      timeout: "auto"
    }, M, {
      children: /* @__PURE__ */ I("div", {
        "aria-labelledby": y.props.id,
        id: y.props["aria-controls"],
        role: "region",
        className: $.region,
        children: E
      })
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (Yr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: yt(t.node.isRequired, (e) => {
    const o = f.Children.toArray(e.children)[0];
    return po.isFragment(o) ? new Error("MUI: The Accordion doesn't accept a Fragment as a child. Consider providing an array instead.") : /* @__PURE__ */ f.isValidElement(o) ? null : new Error("MUI: Expected the first child of Accordion to be a valid element.");
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * If `true`, expands the accordion by default.
   * @default false
   */
  defaultExpanded: t.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: t.bool,
  /**
   * If `true`, it removes the margin between two expanded accordion items and the increase of height.
   * @default false
   */
  disableGutters: t.bool,
  /**
   * If `true`, expands the accordion, otherwise collapse it.
   * Setting this prop enables control over the accordion.
   */
  expanded: t.bool,
  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {boolean} expanded The `expanded` state of the accordion.
   */
  onChange: t.func,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: t.shape({
    transition: t.oneOfType([t.func, t.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: t.shape({
    transition: t.elementType
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   */
  TransitionComponent: t.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   */
  TransitionProps: t.object
});
const vm = Yr;
function ka(e) {
  return fe("MuiAccordionDetails", e);
}
const Ma = be("MuiAccordionDetails", ["root"]), gm = Ma, Aa = ["className"], Fa = (e) => {
  const {
    classes: o
  } = e;
  return xe({
    root: ["root"]
  }, ka, o);
}, Da = U("div", {
  name: "MuiAccordionDetails",
  slot: "Root",
  overridesResolver: (e, o) => o.root
})(({
  theme: e
}) => ({
  padding: e.spacing(1, 2, 2)
})), Xr = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiAccordionDetails"
  }), {
    className: s
  } = r, i = J(r, Aa), a = r, c = Fa(a);
  return /* @__PURE__ */ I(Da, u({
    className: te(c.root, s),
    ref: n,
    ownerState: a
  }, i));
});
process.env.NODE_ENV !== "production" && (Xr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const ym = Xr;
function La(e) {
  return fe("MuiAccordionSummary", e);
}
const Ba = be("MuiAccordionSummary", ["root", "expanded", "focusVisible", "disabled", "gutters", "contentGutters", "content", "expandIconWrapper"]), Wt = Ba, ja = ["children", "className", "expandIcon", "focusVisibleClassName", "onClick"], _a = (e) => {
  const {
    classes: o,
    expanded: n,
    disabled: r,
    disableGutters: s
  } = e;
  return xe({
    root: ["root", n && "expanded", r && "disabled", !s && "gutters"],
    focusVisible: ["focusVisible"],
    content: ["content", n && "expanded", !s && "contentGutters"],
    expandIconWrapper: ["expandIconWrapper", n && "expanded"]
  }, La, o);
}, za = U(Kt, {
  name: "MuiAccordionSummary",
  slot: "Root",
  overridesResolver: (e, o) => o.root
})(({
  theme: e,
  ownerState: o
}) => {
  const n = {
    duration: e.transitions.duration.shortest
  };
  return u({
    display: "flex",
    minHeight: 48,
    padding: e.spacing(0, 2),
    transition: e.transitions.create(["min-height", "background-color"], n),
    [`&.${Wt.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    [`&.${Wt.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity
    },
    [`&:hover:not(.${Wt.disabled})`]: {
      cursor: "pointer"
    }
  }, !o.disableGutters && {
    [`&.${Wt.expanded}`]: {
      minHeight: 64
    }
  });
}), Wa = U("div", {
  name: "MuiAccordionSummary",
  slot: "Content",
  overridesResolver: (e, o) => o.content
})(({
  theme: e,
  ownerState: o
}) => u({
  display: "flex",
  flexGrow: 1,
  margin: "12px 0"
}, !o.disableGutters && {
  transition: e.transitions.create(["margin"], {
    duration: e.transitions.duration.shortest
  }),
  [`&.${Wt.expanded}`]: {
    margin: "20px 0"
  }
})), Va = U("div", {
  name: "MuiAccordionSummary",
  slot: "ExpandIconWrapper",
  overridesResolver: (e, o) => o.expandIconWrapper
})(({
  theme: e
}) => ({
  display: "flex",
  color: (e.vars || e).palette.action.active,
  transform: "rotate(0deg)",
  transition: e.transitions.create("transform", {
    duration: e.transitions.duration.shortest
  }),
  [`&.${Wt.expanded}`]: {
    transform: "rotate(180deg)"
  }
})), Jr = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiAccordionSummary"
  }), {
    children: s,
    className: i,
    expandIcon: a,
    focusVisibleClassName: c,
    onClick: l
  } = r, d = J(r, ja), {
    disabled: p = !1,
    disableGutters: b,
    expanded: v,
    toggle: g
  } = f.useContext(Vr), T = (x) => {
    g && g(x), l && l(x);
  }, O = u({}, r, {
    expanded: v,
    disabled: p,
    disableGutters: b
  }), m = _a(O);
  return /* @__PURE__ */ ke(za, u({
    focusRipple: !1,
    disableRipple: !0,
    disabled: p,
    component: "div",
    "aria-expanded": v,
    className: te(m.root, i),
    focusVisibleClassName: te(m.focusVisible, c),
    onClick: T,
    ref: n,
    ownerState: O
  }, d, {
    children: [/* @__PURE__ */ I(Wa, {
      className: m.content,
      ownerState: O,
      children: s
    }), a && /* @__PURE__ */ I(Va, {
      className: m.expandIconWrapper,
      ownerState: O,
      children: a
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Jr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The icon to display as the expand indicator.
   */
  expandIcon: t.node,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: t.string,
  /**
   * @ignore
   */
  onClick: t.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const xm = Jr, Zr = "base";
function Ua(e) {
  return `${Zr}--${e}`;
}
function Ha(e, o) {
  return `${Zr}-${e}-${o}`;
}
function Qr(e, o) {
  const n = yi[o];
  return n ? Ua(n) : Ha(e, o);
}
function qa(e, o) {
  const n = {};
  return o.forEach((r) => {
    n[r] = Qr(e, r);
  }), n;
}
const Ga = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Ka(e) {
  const o = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(o) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : o;
}
function Ya(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const o = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = o(`[name="${e.name}"]:checked`);
  return n || (n = o(`[name="${e.name}"]`)), n !== e;
}
function Xa(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Ya(e));
}
function Ja(e) {
  const o = [], n = [];
  return Array.from(e.querySelectorAll(Ga)).forEach((r, s) => {
    const i = Ka(r);
    i === -1 || !Xa(r) || (i === 0 ? o.push(r) : n.push({
      documentOrder: s,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, s) => r.tabIndex === s.tabIndex ? r.documentOrder - s.documentOrder : r.tabIndex - s.tabIndex).map((r) => r.node).concat(o);
}
function Za() {
  return !0;
}
function Io(e) {
  const {
    children: o,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: s = !1,
    getTabbable: i = Ja,
    isEnabled: a = Za,
    open: c
  } = e, l = f.useRef(!1), d = f.useRef(null), p = f.useRef(null), b = f.useRef(null), v = f.useRef(null), g = f.useRef(!1), T = f.useRef(null), O = We(o.ref, T), m = f.useRef(null);
  f.useEffect(() => {
    !c || !T.current || (g.current = !n);
  }, [n, c]), f.useEffect(() => {
    if (!c || !T.current)
      return;
    const h = He(T.current);
    return T.current.contains(h.activeElement) || (T.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), T.current.setAttribute("tabIndex", "-1")), g.current && T.current.focus()), () => {
      s || (b.current && b.current.focus && (l.current = !0, b.current.focus()), b.current = null);
    };
  }, [c]), f.useEffect(() => {
    if (!c || !T.current)
      return;
    const h = He(T.current), y = (R) => {
      m.current = R, !(r || !a() || R.key !== "Tab") && h.activeElement === T.current && R.shiftKey && (l.current = !0, p.current && p.current.focus());
    }, E = () => {
      const R = T.current;
      if (R === null)
        return;
      if (!h.hasFocus() || !a() || l.current) {
        l.current = !1;
        return;
      }
      if (R.contains(h.activeElement) || r && h.activeElement !== d.current && h.activeElement !== p.current)
        return;
      if (h.activeElement !== v.current)
        v.current = null;
      else if (v.current !== null)
        return;
      if (!g.current)
        return;
      let $ = [];
      if ((h.activeElement === d.current || h.activeElement === p.current) && ($ = i(T.current)), $.length > 0) {
        var N, A;
        const F = !!((N = m.current) != null && N.shiftKey && ((A = m.current) == null ? void 0 : A.key) === "Tab"), M = $[0], D = $[$.length - 1];
        typeof M != "string" && typeof D != "string" && (F ? D.focus() : M.focus());
      } else
        R.focus();
    };
    h.addEventListener("focusin", E), h.addEventListener("keydown", y, !0);
    const w = setInterval(() => {
      h.activeElement && h.activeElement.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(w), h.removeEventListener("focusin", E), h.removeEventListener("keydown", y, !0);
    };
  }, [n, r, s, a, c, i]);
  const x = (h) => {
    b.current === null && (b.current = h.relatedTarget), g.current = !0, v.current = h.target;
    const y = o.props.onFocus;
    y && y(h);
  }, S = (h) => {
    b.current === null && (b.current = h.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ ke(f.Fragment, {
    children: [/* @__PURE__ */ I("div", {
      tabIndex: c ? 0 : -1,
      onFocus: S,
      ref: d,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ f.cloneElement(o, {
      ref: O,
      onFocus: x
    }), /* @__PURE__ */ I("div", {
      tabIndex: c ? 0 : -1,
      onFocus: S,
      ref: p,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Io.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Ao,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: t.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: t.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: t.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: t.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: t.func,
  /**
   * If `true`, focus is locked.
   */
  open: t.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Io["propTypes"] = kr(Io.propTypes));
function Qa(e) {
  return typeof e == "function" ? e() : e;
}
const lo = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const {
    children: r,
    container: s,
    disablePortal: i = !1
  } = o, [a, c] = f.useState(null), l = We(/* @__PURE__ */ f.isValidElement(r) ? r.ref : null, n);
  if (bt(() => {
    i || c(Qa(s) || document.body);
  }, [s, i]), bt(() => {
    if (a && !i)
      return rn(n, a), () => {
        rn(n, null);
      };
  }, [n, a, i]), i) {
    if (/* @__PURE__ */ f.isValidElement(r)) {
      const d = {
        ref: l
      };
      return /* @__PURE__ */ f.cloneElement(r, d);
    }
    return /* @__PURE__ */ I(f.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ I(f.Fragment, {
    children: a && /* @__PURE__ */ $i.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (lo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: t.node,
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
  container: t.oneOfType([xt, t.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: t.bool
});
process.env.NODE_ENV !== "production" && (lo["propTypes"] = kr(lo.propTypes));
function el(e) {
  const o = He(e);
  return o.body === e ? Ct(e).innerWidth > o.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function ro(e, o) {
  o ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Kn(e) {
  return parseInt(Ct(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function tl(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Yn(e, o, n, r, s) {
  const i = [o, n, ...r];
  [].forEach.call(e.children, (a) => {
    const c = i.indexOf(a) === -1, l = !tl(a);
    c && l && ro(a, s);
  });
}
function Jo(e, o) {
  let n = -1;
  return e.some((r, s) => o(r) ? (n = s, !0) : !1), n;
}
function ol(e, o) {
  const n = [], r = e.container;
  if (!o.disableScrollLock) {
    if (el(r)) {
      const a = Dr(He(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Kn(r) + a}px`;
      const c = He(r).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${Kn(l) + a}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = He(r).body;
    else {
      const a = r.parentElement, c = Ct(r);
      i = (a == null ? void 0 : a.nodeName) === "HTML" && c.getComputedStyle(a).overflowY === "scroll" ? a : r;
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
      property: c
    }) => {
      i ? a.style.setProperty(c, i) : a.style.removeProperty(c);
    });
  };
}
function nl(e) {
  const o = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && o.push(n);
  }), o;
}
class rl {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(o, n) {
    let r = this.modals.indexOf(o);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(o), o.modalRef && ro(o.modalRef, !1);
    const s = nl(n);
    Yn(n, o.mount, o.modalRef, s, !0);
    const i = Jo(this.containers, (a) => a.container === n);
    return i !== -1 ? (this.containers[i].modals.push(o), r) : (this.containers.push({
      modals: [o],
      container: n,
      restore: null,
      hiddenSiblings: s
    }), r);
  }
  mount(o, n) {
    const r = Jo(this.containers, (i) => i.modals.indexOf(o) !== -1), s = this.containers[r];
    s.restore || (s.restore = ol(s, n));
  }
  remove(o, n = !0) {
    const r = this.modals.indexOf(o);
    if (r === -1)
      return r;
    const s = Jo(this.containers, (a) => a.modals.indexOf(o) !== -1), i = this.containers[s];
    if (i.modals.splice(i.modals.indexOf(o), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), o.modalRef && ro(o.modalRef, n), Yn(i.container, o.mount, o.modalRef, i.hiddenSiblings, !1), this.containers.splice(s, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && ro(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(o) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === o;
  }
}
function sl(e) {
  return typeof e == "function" ? e() : e;
}
function il(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const al = new rl();
function ll(e) {
  const {
    container: o,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: s = al,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: c,
    children: l,
    onClose: d,
    open: p,
    rootRef: b
  } = e, v = f.useRef({}), g = f.useRef(null), T = f.useRef(null), O = We(T, b), [m, x] = f.useState(!p), S = il(l);
  let h = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (h = !1);
  const y = () => He(g.current), E = () => (v.current.modalRef = T.current, v.current.mount = g.current, v.current), w = () => {
    s.mount(E(), {
      disableScrollLock: r
    }), T.current && (T.current.scrollTop = 0);
  }, R = gt(() => {
    const j = sl(o) || y().body;
    s.add(E(), j), T.current && w();
  }), $ = f.useCallback(() => s.isTopModal(E()), [s]), N = gt((j) => {
    g.current = j, j && (p && $() ? w() : T.current && ro(T.current, h));
  }), A = f.useCallback(() => {
    s.remove(E(), h);
  }, [h, s]);
  f.useEffect(() => () => {
    A();
  }, [A]), f.useEffect(() => {
    p ? R() : (!S || !i) && A();
  }, [p, A, S, i, R]);
  const F = (j) => (_) => {
    var V;
    (V = j.onKeyDown) == null || V.call(j, _), !(_.key !== "Escape" || _.which === 229 || // Wait until IME is settled.
    !$()) && (n || (_.stopPropagation(), d && d(_, "escapeKeyDown")));
  }, M = (j) => (_) => {
    var V;
    (V = j.onClick) == null || V.call(j, _), _.target === _.currentTarget && d && d(_, "backdropClick");
  };
  return {
    getRootProps: (j = {}) => {
      const _ = qr(e);
      delete _.onTransitionEnter, delete _.onTransitionExited;
      const V = u({}, _, j);
      return u({
        role: "presentation"
      }, V, {
        onKeyDown: F(V),
        ref: O
      });
    },
    getBackdropProps: (j = {}) => {
      const _ = j;
      return u({
        "aria-hidden": !0
      }, _, {
        onClick: M(_),
        open: p
      });
    },
    getTransitionProps: () => {
      const j = () => {
        x(!1), a && a();
      }, _ = () => {
        x(!0), c && c(), i && A();
      };
      return {
        onEnter: zn(j, l == null ? void 0 : l.props.onEnter),
        onExited: zn(_, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: O,
    portalRef: N,
    isTopModal: $,
    exited: m,
    hasTransition: S
  };
}
var Xe = "top", at = "bottom", lt = "right", Je = "left", gn = "auto", fo = [Xe, at, lt, Je], Ut = "start", co = "end", cl = "clippingParents", es = "viewport", Jt = "popper", dl = "reference", Xn = /* @__PURE__ */ fo.reduce(function(e, o) {
  return e.concat([o + "-" + Ut, o + "-" + co]);
}, []), ts = /* @__PURE__ */ [].concat(fo, [gn]).reduce(function(e, o) {
  return e.concat([o, o + "-" + Ut, o + "-" + co]);
}, []), ul = "beforeRead", pl = "read", fl = "afterRead", ml = "beforeMain", bl = "main", hl = "afterMain", vl = "beforeWrite", gl = "write", yl = "afterWrite", xl = [ul, pl, fl, ml, bl, hl, vl, gl, yl];
function ht(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ot(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var o = e.ownerDocument;
    return o && o.defaultView || window;
  }
  return e;
}
function Ft(e) {
  var o = ot(e).Element;
  return e instanceof o || e instanceof Element;
}
function it(e) {
  var o = ot(e).HTMLElement;
  return e instanceof o || e instanceof HTMLElement;
}
function yn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var o = ot(e).ShadowRoot;
  return e instanceof o || e instanceof ShadowRoot;
}
function Cl(e) {
  var o = e.state;
  Object.keys(o.elements).forEach(function(n) {
    var r = o.styles[n] || {}, s = o.attributes[n] || {}, i = o.elements[n];
    !it(i) || !ht(i) || (Object.assign(i.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? i.removeAttribute(a) : i.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function Ol(e) {
  var o = e.state, n = {
    popper: {
      position: o.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(o.elements.popper.style, n.popper), o.styles = n, o.elements.arrow && Object.assign(o.elements.arrow.style, n.arrow), function() {
    Object.keys(o.elements).forEach(function(r) {
      var s = o.elements[r], i = o.attributes[r] || {}, a = Object.keys(o.styles.hasOwnProperty(r) ? o.styles[r] : n[r]), c = a.reduce(function(l, d) {
        return l[d] = "", l;
      }, {});
      !it(s) || !ht(s) || (Object.assign(s.style, c), Object.keys(i).forEach(function(l) {
        s.removeAttribute(l);
      }));
    });
  };
}
const El = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Cl,
  effect: Ol,
  requires: ["computeStyles"]
};
function mt(e) {
  return e.split("-")[0];
}
var At = Math.max, $o = Math.min, Ht = Math.round;
function dn() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(o) {
    return o.brand + "/" + o.version;
  }).join(" ") : navigator.userAgent;
}
function os() {
  return !/^((?!chrome|android).)*safari/i.test(dn());
}
function qt(e, o, n) {
  o === void 0 && (o = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, i = 1;
  o && it(e) && (s = e.offsetWidth > 0 && Ht(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ht(r.height) / e.offsetHeight || 1);
  var a = Ft(e) ? ot(e) : window, c = a.visualViewport, l = !os() && n, d = (r.left + (l && c ? c.offsetLeft : 0)) / s, p = (r.top + (l && c ? c.offsetTop : 0)) / i, b = r.width / s, v = r.height / i;
  return {
    width: b,
    height: v,
    top: p,
    right: d + b,
    bottom: p + v,
    left: d,
    x: d,
    y: p
  };
}
function xn(e) {
  var o = qt(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(o.width - n) <= 1 && (n = o.width), Math.abs(o.height - r) <= 1 && (r = o.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function ns(e, o) {
  var n = o.getRootNode && o.getRootNode();
  if (e.contains(o))
    return !0;
  if (n && yn(n)) {
    var r = o;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ot(e) {
  return ot(e).getComputedStyle(e);
}
function Tl(e) {
  return ["table", "td", "th"].indexOf(ht(e)) >= 0;
}
function Rt(e) {
  return ((Ft(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Lo(e) {
  return ht(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (yn(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Rt(e)
  );
}
function Jn(e) {
  return !it(e) || // https://github.com/popperjs/popper-core/issues/837
  Ot(e).position === "fixed" ? null : e.offsetParent;
}
function Sl(e) {
  var o = /firefox/i.test(dn()), n = /Trident/i.test(dn());
  if (n && it(e)) {
    var r = Ot(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Lo(e);
  for (yn(s) && (s = s.host); it(s) && ["html", "body"].indexOf(ht(s)) < 0; ) {
    var i = Ot(s);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || o && i.willChange === "filter" || o && i.filter && i.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function mo(e) {
  for (var o = ot(e), n = Jn(e); n && Tl(n) && Ot(n).position === "static"; )
    n = Jn(n);
  return n && (ht(n) === "html" || ht(n) === "body" && Ot(n).position === "static") ? o : n || Sl(e) || o;
}
function Cn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function so(e, o, n) {
  return At(e, $o(o, n));
}
function wl(e, o, n) {
  var r = so(e, o, n);
  return r > n ? n : r;
}
function rs() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ss(e) {
  return Object.assign({}, rs(), e);
}
function is(e, o) {
  return o.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Rl = function(o, n) {
  return o = typeof o == "function" ? o(Object.assign({}, n.rects, {
    placement: n.placement
  })) : o, ss(typeof o != "number" ? o : is(o, fo));
};
function Pl(e) {
  var o, n = e.state, r = e.name, s = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, c = mt(n.placement), l = Cn(c), d = [Je, lt].indexOf(c) >= 0, p = d ? "height" : "width";
  if (!(!i || !a)) {
    var b = Rl(s.padding, n), v = xn(i), g = l === "y" ? Xe : Je, T = l === "y" ? at : lt, O = n.rects.reference[p] + n.rects.reference[l] - a[l] - n.rects.popper[p], m = a[l] - n.rects.reference[l], x = mo(i), S = x ? l === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, h = O / 2 - m / 2, y = b[g], E = S - v[p] - b[T], w = S / 2 - v[p] / 2 + h, R = so(y, w, E), $ = l;
    n.modifiersData[r] = (o = {}, o[$] = R, o.centerOffset = R - w, o);
  }
}
function Il(e) {
  var o = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = o.elements.popper.querySelector(s), !s) || ns(o.elements.popper, s) && (o.elements.arrow = s));
}
const $l = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Pl,
  effect: Il,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Gt(e) {
  return e.split("-")[1];
}
var Nl = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function kl(e, o) {
  var n = e.x, r = e.y, s = o.devicePixelRatio || 1;
  return {
    x: Ht(n * s) / s || 0,
    y: Ht(r * s) / s || 0
  };
}
function Zn(e) {
  var o, n = e.popper, r = e.popperRect, s = e.placement, i = e.variation, a = e.offsets, c = e.position, l = e.gpuAcceleration, d = e.adaptive, p = e.roundOffsets, b = e.isFixed, v = a.x, g = v === void 0 ? 0 : v, T = a.y, O = T === void 0 ? 0 : T, m = typeof p == "function" ? p({
    x: g,
    y: O
  }) : {
    x: g,
    y: O
  };
  g = m.x, O = m.y;
  var x = a.hasOwnProperty("x"), S = a.hasOwnProperty("y"), h = Je, y = Xe, E = window;
  if (d) {
    var w = mo(n), R = "clientHeight", $ = "clientWidth";
    if (w === ot(n) && (w = Rt(n), Ot(w).position !== "static" && c === "absolute" && (R = "scrollHeight", $ = "scrollWidth")), w = w, s === Xe || (s === Je || s === lt) && i === co) {
      y = at;
      var N = b && w === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[R]
      );
      O -= N - r.height, O *= l ? 1 : -1;
    }
    if (s === Je || (s === Xe || s === at) && i === co) {
      h = lt;
      var A = b && w === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[$]
      );
      g -= A - r.width, g *= l ? 1 : -1;
    }
  }
  var F = Object.assign({
    position: c
  }, d && Nl), M = p === !0 ? kl({
    x: g,
    y: O
  }, ot(n)) : {
    x: g,
    y: O
  };
  if (g = M.x, O = M.y, l) {
    var D;
    return Object.assign({}, F, (D = {}, D[y] = S ? "0" : "", D[h] = x ? "0" : "", D.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + O + "px)" : "translate3d(" + g + "px, " + O + "px, 0)", D));
  }
  return Object.assign({}, F, (o = {}, o[y] = S ? O + "px" : "", o[h] = x ? g + "px" : "", o.transform = "", o));
}
function Ml(e) {
  var o = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, c = n.roundOffsets, l = c === void 0 ? !0 : c, d = {
    placement: mt(o.placement),
    variation: Gt(o.placement),
    popper: o.elements.popper,
    popperRect: o.rects.popper,
    gpuAcceleration: s,
    isFixed: o.options.strategy === "fixed"
  };
  o.modifiersData.popperOffsets != null && (o.styles.popper = Object.assign({}, o.styles.popper, Zn(Object.assign({}, d, {
    offsets: o.modifiersData.popperOffsets,
    position: o.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), o.modifiersData.arrow != null && (o.styles.arrow = Object.assign({}, o.styles.arrow, Zn(Object.assign({}, d, {
    offsets: o.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), o.attributes.popper = Object.assign({}, o.attributes.popper, {
    "data-popper-placement": o.placement
  });
}
const Al = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ml,
  data: {}
};
var Oo = {
  passive: !0
};
function Fl(e) {
  var o = e.state, n = e.instance, r = e.options, s = r.scroll, i = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, l = ot(o.elements.popper), d = [].concat(o.scrollParents.reference, o.scrollParents.popper);
  return i && d.forEach(function(p) {
    p.addEventListener("scroll", n.update, Oo);
  }), c && l.addEventListener("resize", n.update, Oo), function() {
    i && d.forEach(function(p) {
      p.removeEventListener("scroll", n.update, Oo);
    }), c && l.removeEventListener("resize", n.update, Oo);
  };
}
const Dl = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Fl,
  data: {}
};
var Ll = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function wo(e) {
  return e.replace(/left|right|bottom|top/g, function(o) {
    return Ll[o];
  });
}
var Bl = {
  start: "end",
  end: "start"
};
function Qn(e) {
  return e.replace(/start|end/g, function(o) {
    return Bl[o];
  });
}
function On(e) {
  var o = ot(e), n = o.pageXOffset, r = o.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function En(e) {
  return qt(Rt(e)).left + On(e).scrollLeft;
}
function jl(e, o) {
  var n = ot(e), r = Rt(e), s = n.visualViewport, i = r.clientWidth, a = r.clientHeight, c = 0, l = 0;
  if (s) {
    i = s.width, a = s.height;
    var d = os();
    (d || !d && o === "fixed") && (c = s.offsetLeft, l = s.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: c + En(e),
    y: l
  };
}
function _l(e) {
  var o, n = Rt(e), r = On(e), s = (o = e.ownerDocument) == null ? void 0 : o.body, i = At(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = At(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + En(e), l = -r.scrollTop;
  return Ot(s || n).direction === "rtl" && (c += At(n.clientWidth, s ? s.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: c,
    y: l
  };
}
function Tn(e) {
  var o = Ot(e), n = o.overflow, r = o.overflowX, s = o.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function as(e) {
  return ["html", "body", "#document"].indexOf(ht(e)) >= 0 ? e.ownerDocument.body : it(e) && Tn(e) ? e : as(Lo(e));
}
function io(e, o) {
  var n;
  o === void 0 && (o = []);
  var r = as(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = ot(r), a = s ? [i].concat(i.visualViewport || [], Tn(r) ? r : []) : r, c = o.concat(a);
  return s ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(io(Lo(a)))
  );
}
function un(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function zl(e, o) {
  var n = qt(e, !1, o === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function er(e, o, n) {
  return o === es ? un(jl(e, n)) : Ft(o) ? zl(o, n) : un(_l(Rt(e)));
}
function Wl(e) {
  var o = io(Lo(e)), n = ["absolute", "fixed"].indexOf(Ot(e).position) >= 0, r = n && it(e) ? mo(e) : e;
  return Ft(r) ? o.filter(function(s) {
    return Ft(s) && ns(s, r) && ht(s) !== "body";
  }) : [];
}
function Vl(e, o, n, r) {
  var s = o === "clippingParents" ? Wl(e) : [].concat(o), i = [].concat(s, [n]), a = i[0], c = i.reduce(function(l, d) {
    var p = er(e, d, r);
    return l.top = At(p.top, l.top), l.right = $o(p.right, l.right), l.bottom = $o(p.bottom, l.bottom), l.left = At(p.left, l.left), l;
  }, er(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function ls(e) {
  var o = e.reference, n = e.element, r = e.placement, s = r ? mt(r) : null, i = r ? Gt(r) : null, a = o.x + o.width / 2 - n.width / 2, c = o.y + o.height / 2 - n.height / 2, l;
  switch (s) {
    case Xe:
      l = {
        x: a,
        y: o.y - n.height
      };
      break;
    case at:
      l = {
        x: a,
        y: o.y + o.height
      };
      break;
    case lt:
      l = {
        x: o.x + o.width,
        y: c
      };
      break;
    case Je:
      l = {
        x: o.x - n.width,
        y: c
      };
      break;
    default:
      l = {
        x: o.x,
        y: o.y
      };
  }
  var d = s ? Cn(s) : null;
  if (d != null) {
    var p = d === "y" ? "height" : "width";
    switch (i) {
      case Ut:
        l[d] = l[d] - (o[p] / 2 - n[p] / 2);
        break;
      case co:
        l[d] = l[d] + (o[p] / 2 - n[p] / 2);
        break;
    }
  }
  return l;
}
function uo(e, o) {
  o === void 0 && (o = {});
  var n = o, r = n.placement, s = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, c = n.boundary, l = c === void 0 ? cl : c, d = n.rootBoundary, p = d === void 0 ? es : d, b = n.elementContext, v = b === void 0 ? Jt : b, g = n.altBoundary, T = g === void 0 ? !1 : g, O = n.padding, m = O === void 0 ? 0 : O, x = ss(typeof m != "number" ? m : is(m, fo)), S = v === Jt ? dl : Jt, h = e.rects.popper, y = e.elements[T ? S : v], E = Vl(Ft(y) ? y : y.contextElement || Rt(e.elements.popper), l, p, a), w = qt(e.elements.reference), R = ls({
    reference: w,
    element: h,
    strategy: "absolute",
    placement: s
  }), $ = un(Object.assign({}, h, R)), N = v === Jt ? $ : w, A = {
    top: E.top - N.top + x.top,
    bottom: N.bottom - E.bottom + x.bottom,
    left: E.left - N.left + x.left,
    right: N.right - E.right + x.right
  }, F = e.modifiersData.offset;
  if (v === Jt && F) {
    var M = F[s];
    Object.keys(A).forEach(function(D) {
      var B = [lt, at].indexOf(D) >= 0 ? 1 : -1, L = [Xe, at].indexOf(D) >= 0 ? "y" : "x";
      A[D] += M[L] * B;
    });
  }
  return A;
}
function Ul(e, o) {
  o === void 0 && (o = {});
  var n = o, r = n.placement, s = n.boundary, i = n.rootBoundary, a = n.padding, c = n.flipVariations, l = n.allowedAutoPlacements, d = l === void 0 ? ts : l, p = Gt(r), b = p ? c ? Xn : Xn.filter(function(T) {
    return Gt(T) === p;
  }) : fo, v = b.filter(function(T) {
    return d.indexOf(T) >= 0;
  });
  v.length === 0 && (v = b);
  var g = v.reduce(function(T, O) {
    return T[O] = uo(e, {
      placement: O,
      boundary: s,
      rootBoundary: i,
      padding: a
    })[mt(O)], T;
  }, {});
  return Object.keys(g).sort(function(T, O) {
    return g[T] - g[O];
  });
}
function Hl(e) {
  if (mt(e) === gn)
    return [];
  var o = wo(e);
  return [Qn(e), o, Qn(o)];
}
function ql(e) {
  var o = e.state, n = e.options, r = e.name;
  if (!o.modifiersData[r]._skip) {
    for (var s = n.mainAxis, i = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, l = n.fallbackPlacements, d = n.padding, p = n.boundary, b = n.rootBoundary, v = n.altBoundary, g = n.flipVariations, T = g === void 0 ? !0 : g, O = n.allowedAutoPlacements, m = o.options.placement, x = mt(m), S = x === m, h = l || (S || !T ? [wo(m)] : Hl(m)), y = [m].concat(h).reduce(function(Q, ne) {
      return Q.concat(mt(ne) === gn ? Ul(o, {
        placement: ne,
        boundary: p,
        rootBoundary: b,
        padding: d,
        flipVariations: T,
        allowedAutoPlacements: O
      }) : ne);
    }, []), E = o.rects.reference, w = o.rects.popper, R = /* @__PURE__ */ new Map(), $ = !0, N = y[0], A = 0; A < y.length; A++) {
      var F = y[A], M = mt(F), D = Gt(F) === Ut, B = [Xe, at].indexOf(M) >= 0, L = B ? "width" : "height", j = uo(o, {
        placement: F,
        boundary: p,
        rootBoundary: b,
        altBoundary: v,
        padding: d
      }), _ = B ? D ? lt : Je : D ? at : Xe;
      E[L] > w[L] && (_ = wo(_));
      var V = wo(_), K = [];
      if (i && K.push(j[M] <= 0), c && K.push(j[_] <= 0, j[V] <= 0), K.every(function(Q) {
        return Q;
      })) {
        N = F, $ = !1;
        break;
      }
      R.set(F, K);
    }
    if ($)
      for (var ee = T ? 3 : 1, he = function(ne) {
        var q = y.find(function(ue) {
          var X = R.get(ue);
          if (X)
            return X.slice(0, ne).every(function(pe) {
              return pe;
            });
        });
        if (q)
          return N = q, "break";
      }, ve = ee; ve > 0; ve--) {
        var Ce = he(ve);
        if (Ce === "break")
          break;
      }
    o.placement !== N && (o.modifiersData[r]._skip = !0, o.placement = N, o.reset = !0);
  }
}
const Gl = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ql,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function tr(e, o, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - o.height - n.y,
    right: e.right - o.width + n.x,
    bottom: e.bottom - o.height + n.y,
    left: e.left - o.width - n.x
  };
}
function or(e) {
  return [Xe, lt, at, Je].some(function(o) {
    return e[o] >= 0;
  });
}
function Kl(e) {
  var o = e.state, n = e.name, r = o.rects.reference, s = o.rects.popper, i = o.modifiersData.preventOverflow, a = uo(o, {
    elementContext: "reference"
  }), c = uo(o, {
    altBoundary: !0
  }), l = tr(a, r), d = tr(c, s, i), p = or(l), b = or(d);
  o.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: d,
    isReferenceHidden: p,
    hasPopperEscaped: b
  }, o.attributes.popper = Object.assign({}, o.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": b
  });
}
const Yl = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Kl
};
function Xl(e, o, n) {
  var r = mt(e), s = [Je, Xe].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, o, {
    placement: e
  })) : n, a = i[0], c = i[1];
  return a = a || 0, c = (c || 0) * s, [Je, lt].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function Jl(e) {
  var o = e.state, n = e.options, r = e.name, s = n.offset, i = s === void 0 ? [0, 0] : s, a = ts.reduce(function(p, b) {
    return p[b] = Xl(b, o.rects, i), p;
  }, {}), c = a[o.placement], l = c.x, d = c.y;
  o.modifiersData.popperOffsets != null && (o.modifiersData.popperOffsets.x += l, o.modifiersData.popperOffsets.y += d), o.modifiersData[r] = a;
}
const Zl = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Jl
};
function Ql(e) {
  var o = e.state, n = e.name;
  o.modifiersData[n] = ls({
    reference: o.rects.reference,
    element: o.rects.popper,
    strategy: "absolute",
    placement: o.placement
  });
}
const ec = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ql,
  data: {}
};
function tc(e) {
  return e === "x" ? "y" : "x";
}
function oc(e) {
  var o = e.state, n = e.options, r = e.name, s = n.mainAxis, i = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, l = n.boundary, d = n.rootBoundary, p = n.altBoundary, b = n.padding, v = n.tether, g = v === void 0 ? !0 : v, T = n.tetherOffset, O = T === void 0 ? 0 : T, m = uo(o, {
    boundary: l,
    rootBoundary: d,
    padding: b,
    altBoundary: p
  }), x = mt(o.placement), S = Gt(o.placement), h = !S, y = Cn(x), E = tc(y), w = o.modifiersData.popperOffsets, R = o.rects.reference, $ = o.rects.popper, N = typeof O == "function" ? O(Object.assign({}, o.rects, {
    placement: o.placement
  })) : O, A = typeof N == "number" ? {
    mainAxis: N,
    altAxis: N
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, N), F = o.modifiersData.offset ? o.modifiersData.offset[o.placement] : null, M = {
    x: 0,
    y: 0
  };
  if (w) {
    if (i) {
      var D, B = y === "y" ? Xe : Je, L = y === "y" ? at : lt, j = y === "y" ? "height" : "width", _ = w[y], V = _ + m[B], K = _ - m[L], ee = g ? -$[j] / 2 : 0, he = S === Ut ? R[j] : $[j], ve = S === Ut ? -$[j] : -R[j], Ce = o.elements.arrow, Q = g && Ce ? xn(Ce) : {
        width: 0,
        height: 0
      }, ne = o.modifiersData["arrow#persistent"] ? o.modifiersData["arrow#persistent"].padding : rs(), q = ne[B], ue = ne[L], X = so(0, R[j], Q[j]), pe = h ? R[j] / 2 - ee - X - q - A.mainAxis : he - X - q - A.mainAxis, we = h ? -R[j] / 2 + ee + X + ue + A.mainAxis : ve + X + ue + A.mainAxis, ae = o.elements.arrow && mo(o.elements.arrow), ce = ae ? y === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, ie = (D = F == null ? void 0 : F[y]) != null ? D : 0, z = _ + pe - ie - ce, se = _ + we - ie, G = so(g ? $o(V, z) : V, _, g ? At(K, se) : K);
      w[y] = G, M[y] = G - _;
    }
    if (c) {
      var $e, oe = y === "x" ? Xe : Je, De = y === "x" ? at : lt, Ne = w[E], Te = E === "y" ? "height" : "width", Le = Ne + m[oe], Me = Ne - m[De], Re = [Xe, Je].indexOf(x) !== -1, qe = ($e = F == null ? void 0 : F[E]) != null ? $e : 0, Ge = Re ? Le : Ne - R[Te] - $[Te] - qe + A.altAxis, Ke = Re ? Ne + R[Te] + $[Te] - qe - A.altAxis : Me, re = g && Re ? wl(Ge, Ne, Ke) : so(g ? Ge : Le, Ne, g ? Ke : Me);
      w[E] = re, M[E] = re - Ne;
    }
    o.modifiersData[r] = M;
  }
}
const nc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: oc,
  requiresIfExists: ["offset"]
};
function rc(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function sc(e) {
  return e === ot(e) || !it(e) ? On(e) : rc(e);
}
function ic(e) {
  var o = e.getBoundingClientRect(), n = Ht(o.width) / e.offsetWidth || 1, r = Ht(o.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function ac(e, o, n) {
  n === void 0 && (n = !1);
  var r = it(o), s = it(o) && ic(o), i = Rt(o), a = qt(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ht(o) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Tn(i)) && (c = sc(o)), it(o) ? (l = qt(o, !0), l.x += o.clientLeft, l.y += o.clientTop) : i && (l.x = En(i))), {
    x: a.left + c.scrollLeft - l.x,
    y: a.top + c.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function lc(e) {
  var o = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    o.set(i.name, i);
  });
  function s(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(c) {
      if (!n.has(c)) {
        var l = o.get(c);
        l && s(l);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || s(i);
  }), r;
}
function cc(e) {
  var o = lc(e);
  return xl.reduce(function(n, r) {
    return n.concat(o.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function dc(e) {
  var o;
  return function() {
    return o || (o = new Promise(function(n) {
      Promise.resolve().then(function() {
        o = void 0, n(e());
      });
    })), o;
  };
}
function uc(e) {
  var o = e.reduce(function(n, r) {
    var s = n[r.name];
    return n[r.name] = s ? Object.assign({}, s, r, {
      options: Object.assign({}, s.options, r.options),
      data: Object.assign({}, s.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(o).map(function(n) {
    return o[n];
  });
}
var nr = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function rr() {
  for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
    o[n] = arguments[n];
  return !o.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function pc(e) {
  e === void 0 && (e = {});
  var o = e, n = o.defaultModifiers, r = n === void 0 ? [] : n, s = o.defaultOptions, i = s === void 0 ? nr : s;
  return function(c, l, d) {
    d === void 0 && (d = i);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, nr, i),
      modifiersData: {},
      elements: {
        reference: c,
        popper: l
      },
      attributes: {},
      styles: {}
    }, b = [], v = !1, g = {
      state: p,
      setOptions: function(x) {
        var S = typeof x == "function" ? x(p.options) : x;
        O(), p.options = Object.assign({}, i, p.options, S), p.scrollParents = {
          reference: Ft(c) ? io(c) : c.contextElement ? io(c.contextElement) : [],
          popper: io(l)
        };
        var h = cc(uc([].concat(r, p.options.modifiers)));
        return p.orderedModifiers = h.filter(function(y) {
          return y.enabled;
        }), T(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var x = p.elements, S = x.reference, h = x.popper;
          if (rr(S, h)) {
            p.rects = {
              reference: ac(S, mo(h), p.options.strategy === "fixed"),
              popper: xn(h)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(A) {
              return p.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var y = 0; y < p.orderedModifiers.length; y++) {
              if (p.reset === !0) {
                p.reset = !1, y = -1;
                continue;
              }
              var E = p.orderedModifiers[y], w = E.fn, R = E.options, $ = R === void 0 ? {} : R, N = E.name;
              typeof w == "function" && (p = w({
                state: p,
                options: $,
                name: N,
                instance: g
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: dc(function() {
        return new Promise(function(m) {
          g.forceUpdate(), m(p);
        });
      }),
      destroy: function() {
        O(), v = !0;
      }
    };
    if (!rr(c, l))
      return g;
    g.setOptions(d).then(function(m) {
      !v && d.onFirstUpdate && d.onFirstUpdate(m);
    });
    function T() {
      p.orderedModifiers.forEach(function(m) {
        var x = m.name, S = m.options, h = S === void 0 ? {} : S, y = m.effect;
        if (typeof y == "function") {
          var E = y({
            state: p,
            name: x,
            instance: g,
            options: h
          }), w = function() {
          };
          b.push(E || w);
        }
      });
    }
    function O() {
      b.forEach(function(m) {
        return m();
      }), b = [];
    }
    return g;
  };
}
var fc = [Dl, ec, Al, El, Zl, Gl, nc, $l, Yl], mc = /* @__PURE__ */ pc({
  defaultModifiers: fc
});
const cs = "Popper";
function bc(e) {
  return Qr(cs, e);
}
qa(cs, ["root"]);
const hc = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], vc = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function gc(e, o) {
  if (o === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function No(e) {
  return typeof e == "function" ? e() : e;
}
function Bo(e) {
  return e.nodeType !== void 0;
}
function yc(e) {
  return !Bo(e);
}
const xc = () => xe({
  root: ["root"]
}, Ca(bc)), Cc = {}, Oc = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r;
  const {
    anchorEl: s,
    children: i,
    direction: a,
    disablePortal: c,
    modifiers: l,
    open: d,
    placement: p,
    popperOptions: b,
    popperRef: v,
    slotProps: g = {},
    slots: T = {},
    TransitionProps: O
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = o, m = J(o, hc), x = f.useRef(null), S = We(x, n), h = f.useRef(null), y = We(h, v), E = f.useRef(y);
  bt(() => {
    E.current = y;
  }, [y]), f.useImperativeHandle(v, () => h.current, []);
  const w = gc(p, a), [R, $] = f.useState(w), [N, A] = f.useState(No(s));
  f.useEffect(() => {
    h.current && h.current.forceUpdate();
  }), f.useEffect(() => {
    s && A(No(s));
  }, [s]), bt(() => {
    if (!N || !d)
      return;
    const L = (V) => {
      $(V.placement);
    };
    if (process.env.NODE_ENV !== "production" && N && Bo(N) && N.nodeType === 1) {
      const V = N.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && V.top === 0 && V.left === 0 && V.right === 0 && V.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let j = [{
      name: "preventOverflow",
      options: {
        altBoundary: c
      }
    }, {
      name: "flip",
      options: {
        altBoundary: c
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: V
      }) => {
        L(V);
      }
    }];
    l != null && (j = j.concat(l)), b && b.modifiers != null && (j = j.concat(b.modifiers));
    const _ = mc(N, x.current, u({
      placement: w
    }, b, {
      modifiers: j
    }));
    return E.current(_), () => {
      _.destroy(), E.current(null);
    };
  }, [N, c, l, d, b, w]);
  const F = {
    placement: R
  };
  O !== null && (F.TransitionProps = O);
  const M = xc(), D = (r = T.root) != null ? r : "div", B = pt({
    elementType: D,
    externalSlotProps: g.root,
    externalForwardedProps: m,
    additionalProps: {
      role: "tooltip",
      ref: S
    },
    ownerState: o,
    className: M.root
  });
  return /* @__PURE__ */ I(D, u({}, B, {
    children: typeof i == "function" ? i(F) : i
  }));
}), ds = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const {
    anchorEl: r,
    children: s,
    container: i,
    direction: a = "ltr",
    disablePortal: c = !1,
    keepMounted: l = !1,
    modifiers: d,
    open: p,
    placement: b = "bottom",
    popperOptions: v = Cc,
    popperRef: g,
    style: T,
    transition: O = !1,
    slotProps: m = {},
    slots: x = {}
  } = o, S = J(o, vc), [h, y] = f.useState(!0), E = () => {
    y(!1);
  }, w = () => {
    y(!0);
  };
  if (!l && !p && (!O || h))
    return null;
  let R;
  if (i)
    R = i;
  else if (r) {
    const A = No(r);
    R = A && Bo(A) ? He(A).body : He(null).body;
  }
  const $ = !p && l && (!O || h) ? "none" : void 0, N = O ? {
    in: p,
    onEnter: E,
    onExited: w
  } : void 0;
  return /* @__PURE__ */ I(lo, {
    disablePortal: c,
    container: R,
    children: /* @__PURE__ */ I(Oc, u({
      anchorEl: r,
      direction: a,
      disablePortal: c,
      modifiers: d,
      ref: n,
      open: O ? !h : p,
      placement: b,
      popperOptions: v,
      popperRef: g,
      slotProps: m,
      slots: x
    }, S, {
      style: u({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: $
      }, T),
      TransitionProps: N,
      children: s
    }))
  });
});
process.env.NODE_ENV !== "production" && (ds.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: yt(t.oneOfType([xt, t.object, t.func]), (e) => {
    if (e.open) {
      const o = No(e.anchorEl);
      if (o && Bo(o) && o.nodeType === 1) {
        const n = o.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!o || typeof o.getBoundingClientRect != "function" || yc(o) && o.contextElement != null && o.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: t.oneOfType([t.node, t.func]),
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
  container: t.oneOfType([xt, t.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: t.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: t.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: t.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: t.arrayOf(t.shape({
    data: t.object,
    effect: t.func,
    enabled: t.bool,
    fn: t.func,
    name: t.any,
    options: t.object,
    phase: t.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: t.arrayOf(t.string),
    requiresIfExists: t.arrayOf(t.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: t.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: t.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: t.shape({
    modifiers: t.array,
    onFirstUpdate: t.func,
    placement: t.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: t.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Ze,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: t.shape({
    root: t.oneOfType([t.func, t.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: t.shape({
    root: t.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: t.bool
});
const Ec = ["onChange", "maxRows", "minRows", "style", "value"];
function Eo(e) {
  return parseInt(e, 10) || 0;
}
const Tc = {
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
function Sc(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const us = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const {
    onChange: r,
    maxRows: s,
    minRows: i = 1,
    style: a,
    value: c
  } = o, l = J(o, Ec), {
    current: d
  } = f.useRef(c != null), p = f.useRef(null), b = We(n, p), v = f.useRef(null), g = f.useCallback(() => {
    const m = p.current, S = Ct(m).getComputedStyle(m);
    if (S.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const h = v.current;
    h.style.width = S.width, h.value = m.value || o.placeholder || "x", h.value.slice(-1) === `
` && (h.value += " ");
    const y = S.boxSizing, E = Eo(S.paddingBottom) + Eo(S.paddingTop), w = Eo(S.borderBottomWidth) + Eo(S.borderTopWidth), R = h.scrollHeight;
    h.value = "x";
    const $ = h.scrollHeight;
    let N = R;
    i && (N = Math.max(Number(i) * $, N)), s && (N = Math.min(Number(s) * $, N)), N = Math.max(N, $);
    const A = N + (y === "border-box" ? E + w : 0), F = Math.abs(N - R) <= 1;
    return {
      outerHeightStyle: A,
      overflowing: F
    };
  }, [s, i, o.placeholder]), T = f.useCallback(() => {
    const m = g();
    if (Sc(m))
      return;
    const x = p.current;
    x.style.height = `${m.outerHeightStyle}px`, x.style.overflow = m.overflowing ? "hidden" : "";
  }, [g]);
  bt(() => {
    const m = () => {
      T();
    };
    let x;
    const S = () => {
      cancelAnimationFrame(x), x = requestAnimationFrame(() => {
        m();
      });
    }, h = Fo(m), y = p.current, E = Ct(y);
    E.addEventListener("resize", h);
    let w;
    return typeof ResizeObserver < "u" && (w = new ResizeObserver(process.env.NODE_ENV === "test" ? S : m), w.observe(y)), () => {
      h.clear(), cancelAnimationFrame(x), E.removeEventListener("resize", h), w && w.disconnect();
    };
  }, [g, T]), bt(() => {
    T();
  });
  const O = (m) => {
    d || T(), r && r(m);
  };
  return /* @__PURE__ */ ke(f.Fragment, {
    children: [/* @__PURE__ */ I("textarea", u({
      value: c,
      onChange: O,
      ref: b,
      rows: i
    }, l)), /* @__PURE__ */ I("textarea", {
      "aria-hidden": !0,
      className: o.className,
      readOnly: !0,
      ref: v,
      tabIndex: -1,
      style: u({}, Tc.shadow, a, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (us.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: t.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: t.oneOfType([t.number, t.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: t.oneOfType([t.number, t.string]),
  /**
   * @ignore
   */
  onChange: t.func,
  /**
   * @ignore
   */
  placeholder: t.string,
  /**
   * @ignore
   */
  style: t.object,
  /**
   * @ignore
   */
  value: t.oneOfType([t.arrayOf(t.string), t.number, t.string])
});
function sr(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function wc(e = {}) {
  const {
    ignoreAccents: o = !0,
    ignoreCase: n = !0,
    limit: r,
    matchFrom: s = "any",
    stringify: i,
    trim: a = !1
  } = e;
  return (c, {
    inputValue: l,
    getOptionLabel: d
  }) => {
    let p = a ? l.trim() : l;
    n && (p = p.toLowerCase()), o && (p = sr(p));
    const b = p ? c.filter((v) => {
      let g = (i || d)(v);
      return n && (g = g.toLowerCase()), o && (g = sr(g)), s === "start" ? g.indexOf(p) === 0 : g.indexOf(p) > -1;
    }) : c;
    return typeof r == "number" ? b.slice(0, r) : b;
  };
}
function Zo(e, o) {
  for (let n = 0; n < e.length; n += 1)
    if (o(e[n]))
      return n;
  return -1;
}
const Rc = wc(), ir = 5, Pc = (e) => {
  var o;
  return e.current !== null && ((o = e.current.parentElement) == null ? void 0 : o.contains(document.activeElement));
};
function Ic(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: o = Pc,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: r = !1,
    autoHighlight: s = !1,
    autoSelect: i = !1,
    blurOnSelect: a = !1,
    clearOnBlur: c = !e.freeSolo,
    clearOnEscape: l = !1,
    componentName: d = "useAutocomplete",
    defaultValue: p = e.multiple ? [] : null,
    disableClearable: b = !1,
    disableCloseOnSelect: v = !1,
    disabled: g,
    disabledItemsFocusable: T = !1,
    disableListWrap: O = !1,
    filterOptions: m = Rc,
    filterSelectedOptions: x = !1,
    freeSolo: S = !1,
    getOptionDisabled: h,
    getOptionKey: y,
    getOptionLabel: E = (P) => {
      var C;
      return (C = P.label) != null ? C : P;
    },
    groupBy: w,
    handleHomeEndKeys: R = !e.freeSolo,
    id: $,
    includeInputInList: N = !1,
    inputValue: A,
    isOptionEqualToValue: F = (P, C) => P === C,
    multiple: M = !1,
    onChange: D,
    onClose: B,
    onHighlightChange: L,
    onInputChange: j,
    onOpen: _,
    open: V,
    openOnFocus: K = !1,
    options: ee,
    readOnly: he = !1,
    selectOnFocus: ve = !e.freeSolo,
    value: Ce
  } = e, Q = Do($);
  let ne = E;
  ne = (P) => {
    const C = E(P);
    if (typeof C != "string") {
      if (process.env.NODE_ENV !== "production") {
        const W = C === void 0 ? "undefined" : `${typeof C} (${C})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${d} returned ${W} instead of a string for ${JSON.stringify(P)}.`);
      }
      return String(C);
    }
    return C;
  };
  const q = f.useRef(!1), ue = f.useRef(!0), X = f.useRef(null), pe = f.useRef(null), [we, ae] = f.useState(null), [ce, ie] = f.useState(-1), z = s ? 0 : -1, se = f.useRef(z), [G, $e] = Mt({
    controlled: Ce,
    default: p,
    name: d
  }), [oe, De] = Mt({
    controlled: A,
    default: "",
    name: d,
    state: "inputValue"
  }), [Ne, Te] = f.useState(!1), Le = f.useCallback((P, C) => {
    if (!(M ? G.length < C.length : C !== null) && !c)
      return;
    let Z;
    if (M)
      Z = "";
    else if (C == null)
      Z = "";
    else {
      const Se = ne(C);
      Z = typeof Se == "string" ? Se : "";
    }
    oe !== Z && (De(Z), j && j(P, Z, "reset"));
  }, [ne, oe, M, j, De, c, G]), [Me, Re] = Mt({
    controlled: V,
    default: !1,
    name: d,
    state: "open"
  }), [qe, Ge] = f.useState(!0), Ke = !M && G != null && oe === ne(G), re = Me && !he, ge = re ? m(
    ee.filter((P) => !(x && (M ? G : [G]).some((C) => C !== null && F(P, C)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Ke && qe ? "" : oe,
      getOptionLabel: ne
    }
  ) : [], Be = Hi({
    filteredOptions: ge,
    value: G,
    inputValue: oe
  });
  f.useEffect(() => {
    const P = G !== Be.value;
    Ne && !P || S && !P || Le(null, G);
  }, [G, Le, Ne, Be.value, S]);
  const Ye = Me && ge.length > 0 && !he;
  if (process.env.NODE_ENV !== "production" && G !== null && !S && ee.length > 0) {
    const P = (M ? G : [G]).filter((C) => !ee.some((W) => F(W, C)));
    P.length > 0 && console.warn([`MUI: The value provided to ${d} is invalid.`, `None of the options match with \`${P.length > 1 ? JSON.stringify(P) : JSON.stringify(P[0])}\`.`, "You can use the `isOptionEqualToValue` prop to customize the equality test."].join(`
`));
  }
  const nt = gt((P) => {
    P === -1 ? X.current.focus() : we.querySelector(`[data-tag-index="${P}"]`).focus();
  });
  f.useEffect(() => {
    M && ce > G.length - 1 && (ie(-1), nt(-1));
  }, [G, M, ce, nt]);
  function dt(P, C) {
    if (!pe.current || P < 0 || P >= ge.length)
      return -1;
    let W = P;
    for (; ; ) {
      const Z = pe.current.querySelector(`[data-option-index="${W}"]`), Se = T ? !1 : !Z || Z.disabled || Z.getAttribute("aria-disabled") === "true";
      if (Z && Z.hasAttribute("tabindex") && !Se)
        return W;
      if (C === "next" ? W = (W + 1) % ge.length : W = (W - 1 + ge.length) % ge.length, W === P)
        return -1;
    }
  }
  const Y = gt(({
    event: P,
    index: C,
    reason: W = "auto"
  }) => {
    if (se.current = C, C === -1 ? X.current.removeAttribute("aria-activedescendant") : X.current.setAttribute("aria-activedescendant", `${Q}-option-${C}`), L && L(P, C === -1 ? null : ge[C], W), !pe.current)
      return;
    const Z = pe.current.querySelector(`[role="option"].${n}-focused`);
    Z && (Z.classList.remove(`${n}-focused`), Z.classList.remove(`${n}-focusVisible`));
    let Se = pe.current;
    if (pe.current.getAttribute("role") !== "listbox" && (Se = pe.current.parentElement.querySelector('[role="listbox"]')), !Se)
      return;
    if (C === -1) {
      Se.scrollTop = 0;
      return;
    }
    const Ae = pe.current.querySelector(`[data-option-index="${C}"]`);
    if (Ae && (Ae.classList.add(`${n}-focused`), W === "keyboard" && Ae.classList.add(`${n}-focusVisible`), Se.scrollHeight > Se.clientHeight && W !== "mouse" && W !== "touch")) {
      const _e = Ae, Qe = Se.clientHeight + Se.scrollTop, go = _e.offsetTop + _e.offsetHeight;
      go > Qe ? Se.scrollTop = go - Se.clientHeight : _e.offsetTop - _e.offsetHeight * (w ? 1.3 : 0) < Se.scrollTop && (Se.scrollTop = _e.offsetTop - _e.offsetHeight * (w ? 1.3 : 0));
    }
  }), k = gt(({
    event: P,
    diff: C,
    direction: W = "next",
    reason: Z = "auto"
  }) => {
    if (!re)
      return;
    const Ae = dt((() => {
      const _e = ge.length - 1;
      if (C === "reset")
        return z;
      if (C === "start")
        return 0;
      if (C === "end")
        return _e;
      const Qe = se.current + C;
      return Qe < 0 ? Qe === -1 && N ? -1 : O && se.current !== -1 || Math.abs(C) > 1 ? 0 : _e : Qe > _e ? Qe === _e + 1 && N ? -1 : O || Math.abs(C) > 1 ? _e : 0 : Qe;
    })(), W);
    if (Y({
      index: Ae,
      reason: Z,
      event: P
    }), r && C !== "reset")
      if (Ae === -1)
        X.current.value = oe;
      else {
        const _e = ne(ge[Ae]);
        X.current.value = _e, _e.toLowerCase().indexOf(oe.toLowerCase()) === 0 && oe.length > 0 && X.current.setSelectionRange(oe.length, _e.length);
      }
  }), H = () => {
    const P = (C, W) => {
      const Z = C ? ne(C) : "", Se = W ? ne(W) : "";
      return Z === Se;
    };
    if (se.current !== -1 && Be.filteredOptions && Be.filteredOptions.length !== ge.length && Be.inputValue === oe && (M ? G.length === Be.value.length && Be.value.every((C, W) => ne(G[W]) === ne(C)) : P(Be.value, G))) {
      const C = Be.filteredOptions[se.current];
      if (C && ge.some((Z) => ne(Z) === ne(C)))
        return !0;
    }
    return !1;
  }, le = f.useCallback(() => {
    if (!re || H())
      return;
    const P = M ? G[0] : G;
    if (ge.length === 0 || P == null) {
      k({
        diff: "reset"
      });
      return;
    }
    if (pe.current) {
      if (P != null) {
        const C = ge[se.current];
        if (M && C && Zo(G, (Z) => F(C, Z)) !== -1)
          return;
        const W = Zo(ge, (Z) => F(Z, P));
        W === -1 ? k({
          diff: "reset"
        }) : Y({
          index: W
        });
        return;
      }
      if (se.current >= ge.length - 1) {
        Y({
          index: ge.length - 1
        });
        return;
      }
      Y({
        index: se.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    ge.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    M ? !1 : G,
    x,
    k,
    Y,
    re,
    oe,
    M
  ]), me = gt((P) => {
    rn(pe, P), P && le();
  });
  process.env.NODE_ENV !== "production" && f.useEffect(() => {
    (!X.current || X.current.nodeName !== "INPUT") && (X.current && X.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${d} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (e.g. enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${X.current} while an HTMLInputElement was expected.`, `Instead, ${d} expects an input element.`, "", d === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [d]), f.useEffect(() => {
    le();
  }, [le]);
  const Ee = (P) => {
    Me || (Re(!0), Ge(!0), _ && _(P));
  }, Fe = (P, C) => {
    Me && (Re(!1), B && B(P, C));
  }, je = (P, C, W, Z) => {
    if (M) {
      if (G.length === C.length && G.every((Se, Ae) => Se === C[Ae]))
        return;
    } else if (G === C)
      return;
    D && D(P, C, W, Z), $e(C);
  }, rt = f.useRef(!1), Ve = (P, C, W = "selectOption", Z = "options") => {
    let Se = W, Ae = C;
    if (M) {
      if (Ae = Array.isArray(G) ? G.slice() : [], process.env.NODE_ENV !== "production") {
        const Qe = Ae.filter((go) => F(C, go));
        Qe.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${d} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${Qe.length} matches.`].join(`
`));
      }
      const _e = Zo(Ae, (Qe) => F(C, Qe));
      _e === -1 ? Ae.push(C) : Z !== "freeSolo" && (Ae.splice(_e, 1), Se = "removeOption");
    }
    Le(P, Ae), je(P, Ae, Se, {
      option: C
    }), !v && (!P || !P.ctrlKey && !P.metaKey) && Fe(P, Se), (a === !0 || a === "touch" && rt.current || a === "mouse" && !rt.current) && X.current.blur();
  };
  function Tt(P, C) {
    if (P === -1)
      return -1;
    let W = P;
    for (; ; ) {
      if (C === "next" && W === G.length || C === "previous" && W === -1)
        return -1;
      const Z = we.querySelector(`[data-tag-index="${W}"]`);
      if (!Z || !Z.hasAttribute("tabindex") || Z.disabled || Z.getAttribute("aria-disabled") === "true")
        W += C === "next" ? 1 : -1;
      else
        return W;
    }
  }
  const bo = (P, C) => {
    if (!M)
      return;
    oe === "" && Fe(P, "toggleInput");
    let W = ce;
    ce === -1 ? oe === "" && C === "previous" && (W = G.length - 1) : (W += C === "next" ? 1 : -1, W < 0 && (W = 0), W === G.length && (W = -1)), W = Tt(W, C), ie(W), nt(W);
  }, ho = (P) => {
    q.current = !0, De(""), j && j(P, "", "clear"), je(P, M ? [] : null, "clear");
  }, Uo = (P) => (C) => {
    if (P.onKeyDown && P.onKeyDown(C), !C.defaultMuiPrevented && (ce !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(C.key) === -1 && (ie(-1), nt(-1)), C.which !== 229))
      switch (C.key) {
        case "Home":
          re && R && (C.preventDefault(), k({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: C
          }));
          break;
        case "End":
          re && R && (C.preventDefault(), k({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: C
          }));
          break;
        case "PageUp":
          C.preventDefault(), k({
            diff: -ir,
            direction: "previous",
            reason: "keyboard",
            event: C
          }), Ee(C);
          break;
        case "PageDown":
          C.preventDefault(), k({
            diff: ir,
            direction: "next",
            reason: "keyboard",
            event: C
          }), Ee(C);
          break;
        case "ArrowDown":
          C.preventDefault(), k({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: C
          }), Ee(C);
          break;
        case "ArrowUp":
          C.preventDefault(), k({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: C
          }), Ee(C);
          break;
        case "ArrowLeft":
          bo(C, "previous");
          break;
        case "ArrowRight":
          bo(C, "next");
          break;
        case "Enter":
          if (se.current !== -1 && re) {
            const W = ge[se.current], Z = h ? h(W) : !1;
            if (C.preventDefault(), Z)
              return;
            Ve(C, W, "selectOption"), r && X.current.setSelectionRange(X.current.value.length, X.current.value.length);
          } else
            S && oe !== "" && Ke === !1 && (M && C.preventDefault(), Ve(C, oe, "createOption", "freeSolo"));
          break;
        case "Escape":
          re ? (C.preventDefault(), C.stopPropagation(), Fe(C, "escape")) : l && (oe !== "" || M && G.length > 0) && (C.preventDefault(), C.stopPropagation(), ho(C));
          break;
        case "Backspace":
          if (M && !he && oe === "" && G.length > 0) {
            const W = ce === -1 ? G.length - 1 : ce, Z = G.slice();
            Z.splice(W, 1), je(C, Z, "removeOption", {
              option: G[W]
            });
          }
          break;
        case "Delete":
          if (M && !he && oe === "" && G.length > 0 && ce !== -1) {
            const W = ce, Z = G.slice();
            Z.splice(W, 1), je(C, Z, "removeOption", {
              option: G[W]
            });
          }
          break;
      }
  }, Fn = (P) => {
    Te(!0), K && !q.current && Ee(P);
  }, Lt = (P) => {
    if (o(pe)) {
      X.current.focus();
      return;
    }
    Te(!1), ue.current = !0, q.current = !1, i && se.current !== -1 && re ? Ve(P, ge[se.current], "blur") : i && S && oe !== "" ? Ve(P, oe, "blur", "freeSolo") : c && Le(P, G), Fe(P, "blur");
  }, Ue = (P) => {
    const C = P.target.value;
    oe !== C && (De(C), Ge(!1), j && j(P, C, "input")), C === "" ? !b && !M && je(P, null, "clear") : Ee(P);
  }, ze = (P) => {
    const C = Number(P.currentTarget.getAttribute("data-option-index"));
    se.current !== C && Y({
      event: P,
      index: C,
      reason: "mouse"
    });
  }, ut = (P) => {
    Y({
      event: P,
      index: Number(P.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), rt.current = !0;
  }, Dn = (P) => {
    const C = Number(P.currentTarget.getAttribute("data-option-index"));
    Ve(P, ge[C], "selectOption"), rt.current = !1;
  }, Ho = (P) => (C) => {
    const W = G.slice();
    W.splice(P, 1), je(C, W, "removeOption", {
      option: G[P]
    });
  }, qo = (P) => {
    Me ? Fe(P, "toggleInput") : Ee(P);
  }, Go = (P) => {
    P.currentTarget.contains(P.target) && P.target.getAttribute("id") !== Q && P.preventDefault();
  }, vo = (P) => {
    P.currentTarget.contains(P.target) && (X.current.focus(), ve && ue.current && X.current.selectionEnd - X.current.selectionStart === 0 && X.current.select(), ue.current = !1);
  }, Xt = (P) => {
    !g && (oe === "" || !Me) && qo(P);
  };
  let It = S && oe.length > 0;
  It = It || (M ? G.length > 0 : G !== null);
  let Bt = ge;
  if (w) {
    const P = /* @__PURE__ */ new Map();
    let C = !1;
    Bt = ge.reduce((W, Z, Se) => {
      const Ae = w(Z);
      return W.length > 0 && W[W.length - 1].group === Ae ? W[W.length - 1].options.push(Z) : (process.env.NODE_ENV !== "production" && (P.get(Ae) && !C && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${d} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), C = !0), P.set(Ae, !0)), W.push({
        key: Se,
        index: Se,
        group: Ae,
        options: [Z]
      })), W;
    }, []);
  }
  return g && Ne && Lt(), {
    getRootProps: (P = {}) => u({
      "aria-owns": Ye ? `${Q}-listbox` : null
    }, P, {
      onKeyDown: Uo(P),
      onMouseDown: Go,
      onClick: vo
    }),
    getInputLabelProps: () => ({
      id: `${Q}-label`,
      htmlFor: Q
    }),
    getInputProps: () => ({
      id: Q,
      value: oe,
      onBlur: Lt,
      onFocus: Fn,
      onChange: Ue,
      onMouseDown: Xt,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": re ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": Ye ? `${Q}-listbox` : void 0,
      "aria-expanded": Ye,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: X,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: g
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: ho
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: qo
    }),
    getTagProps: ({
      index: P
    }) => u({
      key: P,
      "data-tag-index": P,
      tabIndex: -1
    }, !he && {
      onDelete: Ho(P)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${Q}-listbox`,
      "aria-labelledby": `${Q}-label`,
      ref: me,
      onMouseDown: (P) => {
        P.preventDefault();
      }
    }),
    getOptionProps: ({
      index: P,
      option: C
    }) => {
      var W;
      const Z = (M ? G : [G]).some((Ae) => Ae != null && F(C, Ae)), Se = h ? h(C) : !1;
      return {
        key: (W = y == null ? void 0 : y(C)) != null ? W : ne(C),
        tabIndex: -1,
        role: "option",
        id: `${Q}-option-${P}`,
        onMouseMove: ze,
        onClick: Dn,
        onTouchStart: ut,
        "data-option-index": P,
        "aria-disabled": Se,
        "aria-selected": Z
      };
    },
    id: Q,
    inputValue: oe,
    value: G,
    dirty: It,
    expanded: re && we,
    popupOpen: re,
    focused: Ne || ce !== -1,
    anchorEl: we,
    setAnchorEl: ae,
    focusedTag: ce,
    groupedOptions: Bt
  };
}
function $c(e) {
  return fe("MuiIconButton", e);
}
const Nc = be("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), kc = Nc, Mc = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], Ac = (e) => {
  const {
    classes: o,
    disabled: n,
    color: r,
    edge: s,
    size: i
  } = e, a = {
    root: ["root", n && "disabled", r !== "default" && `color${de(r)}`, s && `edge${de(s)}`, `size${de(i)}`]
  };
  return xe(a, $c, o);
}, Fc = U(Kt, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.root, n.color !== "default" && o[`color${de(n.color)}`], n.edge && o[`edge${de(n.edge)}`], o[`size${de(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: o
}) => u({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !o.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : st(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, o.edge === "start" && {
  marginLeft: o.size === "small" ? -3 : -12
}, o.edge === "end" && {
  marginRight: o.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: o
}) => {
  var n;
  const r = (n = (e.vars || e).palette) == null ? void 0 : n[o.color];
  return u({}, o.color === "inherit" && {
    color: "inherit"
  }, o.color !== "inherit" && o.color !== "default" && u({
    color: r == null ? void 0 : r.main
  }, !o.disableRipple && {
    "&:hover": u({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : st(r.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), o.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, o.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${kc.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), ps = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiIconButton"
  }), {
    edge: s = !1,
    children: i,
    className: a,
    color: c = "default",
    disabled: l = !1,
    disableFocusRipple: d = !1,
    size: p = "medium"
  } = r, b = J(r, Mc), v = u({}, r, {
    edge: s,
    color: c,
    disabled: l,
    disableFocusRipple: d,
    size: p
  }), g = Ac(v);
  return /* @__PURE__ */ I(Fc, u({
    className: te(g.root, a),
    centerRipple: !0,
    focusRipple: !d,
    disabled: l,
    ref: n
  }, b, {
    ownerState: v,
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (ps.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: yt(t.node, (e) => f.Children.toArray(e.children).some((n) => /* @__PURE__ */ f.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: t.oneOfType([t.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), t.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: t.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: t.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: t.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: t.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: t.oneOfType([t.oneOf(["small", "medium", "large"]), t.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const fs = ps, Dc = Dt(/* @__PURE__ */ I("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
var Sn = {};
Object.defineProperty(Sn, "__esModule", {
  value: !0
});
var ms = Sn.default = void 0, Lc = jc(to), Bc = Ti;
function bs(e) {
  if (typeof WeakMap != "function")
    return null;
  var o = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (bs = function(r) {
    return r ? n : o;
  })(e);
}
function jc(e, o) {
  if (!o && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = bs(o);
  if (n && n.has(e))
    return n.get(e);
  var r = { __proto__: null }, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var a = s ? Object.getOwnPropertyDescriptor(e, i) : null;
      a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
    }
  return r.default = e, n && n.set(e, r), r;
}
function _c(e) {
  return Object.keys(e).length === 0;
}
function zc(e = null) {
  const o = Lc.useContext(Bc.ThemeContext);
  return !o || _c(o) ? e : o;
}
ms = Sn.default = zc;
const Wc = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], Vc = U(ds, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, o) => o.root
})({}), hs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r;
  const s = ms(), i = Oe({
    props: o,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: c,
    components: l,
    componentsProps: d,
    container: p,
    disablePortal: b,
    keepMounted: v,
    modifiers: g,
    open: T,
    placement: O,
    popperOptions: m,
    popperRef: x,
    transition: S,
    slots: h,
    slotProps: y
  } = i, E = J(i, Wc), w = (r = h == null ? void 0 : h.root) != null ? r : l == null ? void 0 : l.Root, R = u({
    anchorEl: a,
    container: p,
    disablePortal: b,
    keepMounted: v,
    modifiers: g,
    open: T,
    placement: O,
    popperOptions: m,
    popperRef: x,
    transition: S
  }, E);
  return /* @__PURE__ */ I(Vc, u({
    as: c,
    direction: s == null ? void 0 : s.direction,
    slots: {
      root: w
    },
    slotProps: y ?? d
  }, R, {
    ref: n
  }));
});
process.env.NODE_ENV !== "production" && (hs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: t.oneOfType([xt, t.object, t.func]),
  /**
   * Popper render function or node.
   */
  children: t.oneOfType([t.node, t.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: t.shape({
    Root: t.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: t.shape({
    root: t.oneOfType([t.func, t.object])
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
  container: t.oneOfType([xt, t.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: t.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: t.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: t.arrayOf(t.shape({
    data: t.object,
    effect: t.func,
    enabled: t.bool,
    fn: t.func,
    name: t.any,
    options: t.object,
    phase: t.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: t.arrayOf(t.string),
    requiresIfExists: t.arrayOf(t.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: t.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: t.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: t.shape({
    modifiers: t.array,
    onFirstUpdate: t.func,
    placement: t.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: t.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Ze,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: t.shape({
    root: t.oneOfType([t.func, t.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: t.shape({
    root: t.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: t.bool
});
const vs = hs;
function Uc(e) {
  return fe("MuiListSubheader", e);
}
const Hc = be("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]), Cm = Hc, qc = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], Gc = (e) => {
  const {
    classes: o,
    color: n,
    disableGutters: r,
    inset: s,
    disableSticky: i
  } = e, a = {
    root: ["root", n !== "default" && `color${de(n)}`, !r && "gutters", s && "inset", !i && "sticky"]
  };
  return xe(a, Uc, o);
}, Kc = U("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.root, n.color !== "default" && o[`color${de(n.color)}`], !n.disableGutters && o.gutters, n.inset && o.inset, !n.disableSticky && o.sticky];
  }
})(({
  theme: e,
  ownerState: o
}) => u({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (e.vars || e).palette.text.secondary,
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(14)
}, o.color === "primary" && {
  color: (e.vars || e).palette.primary.main
}, o.color === "inherit" && {
  color: "inherit"
}, !o.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, o.inset && {
  paddingLeft: 72
}, !o.disableSticky && {
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: (e.vars || e).palette.background.paper
})), wn = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiListSubheader"
  }), {
    className: s,
    color: i = "default",
    component: a = "li",
    disableGutters: c = !1,
    disableSticky: l = !1,
    inset: d = !1
  } = r, p = J(r, qc), b = u({}, r, {
    color: i,
    component: a,
    disableGutters: c,
    disableSticky: l,
    inset: d
  }), v = Gc(b);
  return /* @__PURE__ */ I(Kc, u({
    as: a,
    className: te(v.root, s),
    ref: n,
    ownerState: b
  }, p));
});
wn.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (wn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: t.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: t.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: t.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const Yc = wn;
function Pt({
  props: e,
  states: o,
  muiFormControl: n
}) {
  return o.reduce((r, s) => (r[s] = e[s], n && typeof e[s] > "u" && (r[s] = n[s]), r), {});
}
const gs = /* @__PURE__ */ f.createContext(void 0);
process.env.NODE_ENV !== "production" && (gs.displayName = "FormControlContext");
const jo = gs;
function vt() {
  return f.useContext(jo);
}
function ys(e) {
  return /* @__PURE__ */ I(Mr, u({}, e, {
    defaultTheme: Si,
    themeId: xi
  }));
}
process.env.NODE_ENV !== "production" && (ys.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: t.oneOfType([t.array, t.func, t.number, t.object, t.string, t.bool])
});
function ar(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function ko(e, o = !1) {
  return e && (ar(e.value) && e.value !== "" || o && ar(e.defaultValue) && e.defaultValue !== "");
}
function Xc(e) {
  return e.startAdornment;
}
function Jc(e) {
  return fe("MuiInputBase", e);
}
const Zc = be("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), et = Zc, Qc = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], _o = (e, o) => {
  const {
    ownerState: n
  } = e;
  return [o.root, n.formControl && o.formControl, n.startAdornment && o.adornedStart, n.endAdornment && o.adornedEnd, n.error && o.error, n.size === "small" && o.sizeSmall, n.multiline && o.multiline, n.color && o[`color${de(n.color)}`], n.fullWidth && o.fullWidth, n.hiddenLabel && o.hiddenLabel];
}, zo = (e, o) => {
  const {
    ownerState: n
  } = e;
  return [o.input, n.size === "small" && o.inputSizeSmall, n.multiline && o.inputMultiline, n.type === "search" && o.inputTypeSearch, n.startAdornment && o.inputAdornedStart, n.endAdornment && o.inputAdornedEnd, n.hiddenLabel && o.inputHiddenLabel];
}, ed = (e) => {
  const {
    classes: o,
    color: n,
    disabled: r,
    error: s,
    endAdornment: i,
    focused: a,
    formControl: c,
    fullWidth: l,
    hiddenLabel: d,
    multiline: p,
    readOnly: b,
    size: v,
    startAdornment: g,
    type: T
  } = e, O = {
    root: ["root", `color${de(n)}`, r && "disabled", s && "error", l && "fullWidth", a && "focused", c && "formControl", v && v !== "medium" && `size${de(v)}`, p && "multiline", g && "adornedStart", i && "adornedEnd", d && "hiddenLabel", b && "readOnly"],
    input: ["input", r && "disabled", T === "search" && "inputTypeSearch", p && "inputMultiline", v === "small" && "inputSizeSmall", d && "inputHiddenLabel", g && "inputAdornedStart", i && "inputAdornedEnd", b && "readOnly"]
  };
  return xe(O, Jc, o);
}, Wo = U("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: _o
})(({
  theme: e,
  ownerState: o
}) => u({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${et.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, o.multiline && u({
  padding: "4px 0 5px"
}, o.size === "small" && {
  paddingTop: 1
}), o.fullWidth && {
  width: "100%"
})), Vo = U("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: zo
})(({
  theme: e,
  ownerState: o
}) => {
  const n = e.palette.mode === "light", r = u({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), s = {
    opacity: "0 !important"
  }, i = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  };
  return u({
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
    [`label[data-shrink=false] + .${et.formControl} &`]: {
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
    [`&.${et.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, o.size === "small" && {
    paddingTop: 1
  }, o.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, o.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), td = /* @__PURE__ */ I(ys, {
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
}), xs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r;
  const s = Oe({
    props: o,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: a,
    autoFocus: c,
    className: l,
    components: d = {},
    componentsProps: p = {},
    defaultValue: b,
    disabled: v,
    disableInjectingGlobalStyles: g,
    endAdornment: T,
    fullWidth: O = !1,
    id: m,
    inputComponent: x = "input",
    inputProps: S = {},
    inputRef: h,
    maxRows: y,
    minRows: E,
    multiline: w = !1,
    name: R,
    onBlur: $,
    onChange: N,
    onClick: A,
    onFocus: F,
    onKeyDown: M,
    onKeyUp: D,
    placeholder: B,
    readOnly: L,
    renderSuffix: j,
    rows: _,
    slotProps: V = {},
    slots: K = {},
    startAdornment: ee,
    type: he = "text",
    value: ve
  } = s, Ce = J(s, Qc), Q = S.value != null ? S.value : ve, {
    current: ne
  } = f.useRef(Q != null), q = f.useRef(), ue = f.useCallback((re) => {
    process.env.NODE_ENV !== "production" && re && re.nodeName !== "INPUT" && !re.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), X = We(q, h, S.ref, ue), [pe, we] = f.useState(!1), ae = vt();
  process.env.NODE_ENV !== "production" && f.useEffect(() => {
    if (ae)
      return ae.registerEffect();
  }, [ae]);
  const ce = Pt({
    props: s,
    muiFormControl: ae,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ce.focused = ae ? ae.focused : pe, f.useEffect(() => {
    !ae && v && pe && (we(!1), $ && $());
  }, [ae, v, pe, $]);
  const ie = ae && ae.onFilled, z = ae && ae.onEmpty, se = f.useCallback((re) => {
    ko(re) ? ie && ie() : z && z();
  }, [ie, z]);
  bt(() => {
    ne && se({
      value: Q
    });
  }, [Q, se, ne]);
  const G = (re) => {
    if (ce.disabled) {
      re.stopPropagation();
      return;
    }
    F && F(re), S.onFocus && S.onFocus(re), ae && ae.onFocus ? ae.onFocus(re) : we(!0);
  }, $e = (re) => {
    $ && $(re), S.onBlur && S.onBlur(re), ae && ae.onBlur ? ae.onBlur(re) : we(!1);
  }, oe = (re, ...ge) => {
    if (!ne) {
      const Be = re.target || q.current;
      if (Be == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Ir(1));
      se({
        value: Be.value
      });
    }
    S.onChange && S.onChange(re, ...ge), N && N(re, ...ge);
  };
  f.useEffect(() => {
    se(q.current);
  }, []);
  const De = (re) => {
    q.current && re.currentTarget === re.target && q.current.focus(), A && A(re);
  };
  let Ne = x, Te = S;
  w && Ne === "input" && (_ ? (process.env.NODE_ENV !== "production" && (E || y) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Te = u({
    type: void 0,
    minRows: _,
    maxRows: _
  }, Te)) : Te = u({
    type: void 0,
    maxRows: y,
    minRows: E
  }, Te), Ne = us);
  const Le = (re) => {
    se(re.animationName === "mui-auto-fill-cancel" ? q.current : {
      value: "x"
    });
  };
  f.useEffect(() => {
    ae && ae.setAdornedStart(!!ee);
  }, [ae, ee]);
  const Me = u({}, s, {
    color: ce.color || "primary",
    disabled: ce.disabled,
    endAdornment: T,
    error: ce.error,
    focused: ce.focused,
    formControl: ae,
    fullWidth: O,
    hiddenLabel: ce.hiddenLabel,
    multiline: w,
    size: ce.size,
    startAdornment: ee,
    type: he
  }), Re = ed(Me), qe = K.root || d.Root || Wo, Ge = V.root || p.root || {}, Ke = K.input || d.Input || Vo;
  return Te = u({}, Te, (r = V.input) != null ? r : p.input), /* @__PURE__ */ ke(f.Fragment, {
    children: [!g && td, /* @__PURE__ */ ke(qe, u({}, Ge, !Po(qe) && {
      ownerState: u({}, Me, Ge.ownerState)
    }, {
      ref: n,
      onClick: De
    }, Ce, {
      className: te(Re.root, Ge.className, l, L && "MuiInputBase-readOnly"),
      children: [ee, /* @__PURE__ */ I(jo.Provider, {
        value: null,
        children: /* @__PURE__ */ I(Ke, u({
          ownerState: Me,
          "aria-invalid": ce.error,
          "aria-describedby": i,
          autoComplete: a,
          autoFocus: c,
          defaultValue: b,
          disabled: ce.disabled,
          id: m,
          onAnimationStart: Le,
          name: R,
          placeholder: B,
          readOnly: L,
          required: ce.required,
          rows: _,
          value: Q,
          onKeyDown: M,
          onKeyUp: D,
          type: he
        }, Te, !Po(Ke) && {
          as: Ne,
          ownerState: u({}, Me, Te.ownerState)
        }, {
          ref: X,
          className: te(Re.input, Te.className, L && "MuiInputBase-readOnly"),
          onBlur: $e,
          onChange: oe,
          onFocus: G
        }))
      }), T, j ? j(u({}, ce, {
        startAdornment: ee
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (xs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": t.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: t.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: t.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: t.oneOfType([t.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), t.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: t.shape({
    Input: t.elementType,
    Root: t.elementType
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
  componentsProps: t.shape({
    input: t.object,
    root: t.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: t.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: t.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: t.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: t.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: t.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: t.bool,
  /**
   * The id of the `input` element.
   */
  id: t.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: mn,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: t.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Ze,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: t.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: t.oneOfType([t.number, t.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: t.oneOfType([t.number, t.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: t.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: t.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: t.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: t.func,
  /**
   * @ignore
   */
  onClick: t.func,
  /**
   * @ignore
   */
  onFocus: t.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: t.func,
  /**
   * @ignore
   */
  onKeyDown: t.func,
  /**
   * @ignore
   */
  onKeyUp: t.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: t.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: t.bool,
  /**
   * @ignore
   */
  renderSuffix: t.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: t.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: t.oneOfType([t.number, t.string]),
  /**
   * The size of the component.
   */
  size: t.oneOfType([t.oneOf(["medium", "small"]), t.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: t.shape({
    input: t.object,
    root: t.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: t.shape({
    input: t.elementType,
    root: t.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: t.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: t.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: t.any
});
const Rn = xs;
function od(e) {
  return fe("MuiInput", e);
}
const nd = u({}, et, be("MuiInput", ["root", "underline", "input"])), St = nd;
function rd(e) {
  return fe("MuiOutlinedInput", e);
}
const sd = u({}, et, be("MuiOutlinedInput", ["root", "notchedOutline", "input"])), ft = sd;
function id(e) {
  return fe("MuiFilledInput", e);
}
const ad = u({}, et, be("MuiFilledInput", ["root", "underline", "input"])), tt = ad, Cs = Dt(/* @__PURE__ */ I("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
function ld(e) {
  return fe("MuiAutocomplete", e);
}
const cd = be("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]), ye = cd;
var lr, cr;
const dd = ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "componentsProps", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionKey", "getOptionLabel", "isOptionEqualToValue", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "readOnly", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "slotProps", "value"], ud = ["ref"], pd = (e) => {
  const {
    classes: o,
    disablePortal: n,
    expanded: r,
    focused: s,
    fullWidth: i,
    hasClearIcon: a,
    hasPopupIcon: c,
    inputFocused: l,
    popupOpen: d,
    size: p
  } = e, b = {
    root: ["root", r && "expanded", s && "focused", i && "fullWidth", a && "hasClearIcon", c && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", l && "inputFocused"],
    tag: ["tag", `tagSize${de(p)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", d && "popupIndicatorOpen"],
    popper: ["popper", n && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return xe(b, ld, o);
}, fd = U("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e, {
      fullWidth: r,
      hasClearIcon: s,
      hasPopupIcon: i,
      inputFocused: a,
      size: c
    } = n;
    return [{
      [`& .${ye.tag}`]: o.tag
    }, {
      [`& .${ye.tag}`]: o[`tagSize${de(c)}`]
    }, {
      [`& .${ye.inputRoot}`]: o.inputRoot
    }, {
      [`& .${ye.input}`]: o.input
    }, {
      [`& .${ye.input}`]: a && o.inputFocused
    }, o.root, r && o.fullWidth, i && o.hasPopupIcon, s && o.hasClearIcon];
  }
})(({
  ownerState: e
}) => u({
  [`&.${ye.focused} .${ye.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${ye.clearIndicator}`]: {
      visibility: "visible"
    }
  }
}, e.fullWidth && {
  width: "100%"
}, {
  [`& .${ye.tag}`]: u({
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  }, e.size === "small" && {
    margin: 2,
    maxWidth: "calc(100% - 4px)"
  }),
  [`& .${ye.inputRoot}`]: {
    flexWrap: "wrap",
    [`.${ye.hasPopupIcon}&, .${ye.hasClearIcon}&`]: {
      paddingRight: 26 + 4
    },
    [`.${ye.hasPopupIcon}.${ye.hasClearIcon}&`]: {
      paddingRight: 52 + 4
    },
    [`& .${ye.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${St.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${St.root}.${et.sizeSmall}`]: {
    [`& .${St.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${ft.root}`]: {
    padding: 9,
    [`.${ye.hasPopupIcon}&, .${ye.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${ye.hasPopupIcon}.${ye.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${ye.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${ye.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${ft.root}.${et.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${ye.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${tt.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${ye.hasPopupIcon}&, .${ye.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${ye.hasPopupIcon}.${ye.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${tt.input}`]: {
      padding: "7px 4px"
    },
    [`& .${ye.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${tt.root}.${et.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${tt.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${et.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${tt.root}.${et.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${ye.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${tt.root}.${et.hiddenLabel}.${et.sizeSmall}`]: {
    [`& .${ye.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${ye.input}`]: u({
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  }, e.inputFocused && {
    opacity: 1
  })
})), md = U("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, o) => o.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), bd = U(fs, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, o) => o.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), hd = U(fs, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: ({
    ownerState: e
  }, o) => u({}, o.popupIndicator, e.popupOpen && o.popupIndicatorOpen)
})(({
  ownerState: e
}) => u({
  padding: 2,
  marginRight: -2
}, e.popupOpen && {
  transform: "rotate(180deg)"
})), vd = U(vs, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ye.option}`]: o.option
    }, o.popper, n.disablePortal && o.popperDisablePortal];
  }
})(({
  theme: e,
  ownerState: o
}) => u({
  zIndex: (e.vars || e).zIndex.modal
}, o.disablePortal && {
  position: "absolute"
})), gd = U(Yt, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, o) => o.paper
})(({
  theme: e
}) => u({}, e.typography.body1, {
  overflow: "auto"
})), yd = U("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, o) => o.loading
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), xd = U("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, o) => o.noOptions
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), Cd = U("div", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (e, o) => o.listbox
})(({
  theme: e
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${ye.option}`]: {
    minHeight: 48,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 6,
    boxSizing: "border-box",
    outline: "0",
    WebkitTapHighlightColor: "transparent",
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [e.breakpoints.up("sm")]: {
      minHeight: "auto"
    },
    [`&.${ye.focused}`]: {
      backgroundColor: (e.vars || e).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    '&[aria-disabled="true"]': {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`&.${ye.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : st(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${ye.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : st(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${ye.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : st(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
})), Od = U(Yc, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, o) => o.groupLabel
})(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
})), Ed = U("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, o) => o.groupUl
})({
  padding: 0,
  [`& .${ye.option}`]: {
    paddingLeft: 24
  }
}), Os = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s, i, a;
  const c = Oe({
    props: o,
    name: "MuiAutocomplete"
  }), {
    autoComplete: l = !1,
    autoHighlight: d = !1,
    autoSelect: p = !1,
    blurOnSelect: b = !1,
    ChipProps: v,
    className: g,
    clearIcon: T = lr || (lr = /* @__PURE__ */ I(Dc, {
      fontSize: "small"
    })),
    clearOnBlur: O = !c.freeSolo,
    clearOnEscape: m = !1,
    clearText: x = "Clear",
    closeText: S = "Close",
    componentsProps: h = {},
    defaultValue: y = c.multiple ? [] : null,
    disableClearable: E = !1,
    disableCloseOnSelect: w = !1,
    disabled: R = !1,
    disabledItemsFocusable: $ = !1,
    disableListWrap: N = !1,
    disablePortal: A = !1,
    filterSelectedOptions: F = !1,
    forcePopupIcon: M = "auto",
    freeSolo: D = !1,
    fullWidth: B = !1,
    getLimitTagsText: L = (C) => `+${C}`,
    getOptionLabel: j,
    groupBy: _,
    handleHomeEndKeys: V = !c.freeSolo,
    includeInputInList: K = !1,
    limitTags: ee = -1,
    ListboxComponent: he = "ul",
    ListboxProps: ve,
    loading: Ce = !1,
    loadingText: Q = "Loading…",
    multiple: ne = !1,
    noOptionsText: q = "No options",
    openOnFocus: ue = !1,
    openText: X = "Open",
    PaperComponent: pe = Yt,
    PopperComponent: we = vs,
    popupIcon: ae = cr || (cr = /* @__PURE__ */ I(Cs, {})),
    readOnly: ce = !1,
    renderGroup: ie,
    renderInput: z,
    renderOption: se,
    renderTags: G,
    selectOnFocus: $e = !c.freeSolo,
    size: oe = "medium",
    slotProps: De = {}
  } = c, Ne = J(c, dd), {
    getRootProps: Te,
    getInputProps: Le,
    getInputLabelProps: Me,
    getPopupIndicatorProps: Re,
    getClearProps: qe,
    getTagProps: Ge,
    getListboxProps: Ke,
    getOptionProps: re,
    value: ge,
    dirty: Be,
    expanded: Ye,
    id: nt,
    popupOpen: dt,
    focused: Y,
    focusedTag: k,
    anchorEl: H,
    setAnchorEl: le,
    inputValue: me,
    groupedOptions: Ee
  } = Ic(u({}, c, {
    componentName: "Autocomplete"
  })), Fe = !E && !R && Be && !ce, je = (!D || M === !0) && M !== !1, {
    onMouseDown: rt
  } = Le(), {
    ref: Ve
  } = ve ?? {}, Tt = Ke(), {
    ref: bo
  } = Tt, ho = J(Tt, ud), Uo = We(bo, Ve), Lt = j || ((C) => {
    var W;
    return (W = C.label) != null ? W : C;
  }), Ue = u({}, c, {
    disablePortal: A,
    expanded: Ye,
    focused: Y,
    fullWidth: B,
    getOptionLabel: Lt,
    hasClearIcon: Fe,
    hasPopupIcon: je,
    inputFocused: k === -1,
    popupOpen: dt,
    size: oe
  }), ze = pd(Ue);
  let ut;
  if (ne && ge.length > 0) {
    const C = (W) => u({
      className: ze.tag,
      disabled: R
    }, Ge(W));
    G ? ut = G(ge, C, Ue) : ut = ge.map((W, Z) => /* @__PURE__ */ I(Pi, u({
      label: Lt(W),
      size: oe
    }, C({
      index: Z
    }), v)));
  }
  if (ee > -1 && Array.isArray(ut)) {
    const C = ut.length - ee;
    !Y && C > 0 && (ut = ut.splice(0, ee), ut.push(/* @__PURE__ */ I("span", {
      className: ze.tag,
      children: L(C)
    }, ut.length)));
  }
  const Ho = ie || ((C) => /* @__PURE__ */ ke("li", {
    children: [/* @__PURE__ */ I(Od, {
      className: ze.groupLabel,
      ownerState: Ue,
      component: "div",
      children: C.group
    }), /* @__PURE__ */ I(Ed, {
      className: ze.groupUl,
      ownerState: Ue,
      children: C.children
    })]
  }, C.key)), Go = se || ((C, W) => /* @__PURE__ */ Ci("li", u({}, C, {
    key: C.key
  }), Lt(W))), vo = (C, W) => {
    const Z = re({
      option: C,
      index: W
    });
    return Go(u({}, Z, {
      className: ze.option
    }), C, {
      selected: Z["aria-selected"],
      index: W,
      inputValue: me
    }, Ue);
  }, Xt = (r = De.clearIndicator) != null ? r : h.clearIndicator, It = (s = De.paper) != null ? s : h.paper, Bt = (i = De.popper) != null ? i : h.popper, P = (a = De.popupIndicator) != null ? a : h.popupIndicator;
  return /* @__PURE__ */ ke(f.Fragment, {
    children: [/* @__PURE__ */ I(fd, u({
      ref: n,
      className: te(ze.root, g),
      ownerState: Ue
    }, Te(Ne), {
      children: z({
        id: nt,
        disabled: R,
        fullWidth: !0,
        size: oe === "small" ? "small" : void 0,
        InputLabelProps: Me(),
        InputProps: u({
          ref: le,
          className: ze.inputRoot,
          startAdornment: ut,
          onClick: (C) => {
            C.target === C.currentTarget && rt(C);
          }
        }, (Fe || je) && {
          endAdornment: /* @__PURE__ */ ke(md, {
            className: ze.endAdornment,
            ownerState: Ue,
            children: [Fe ? /* @__PURE__ */ I(bd, u({}, qe(), {
              "aria-label": x,
              title: x,
              ownerState: Ue
            }, Xt, {
              className: te(ze.clearIndicator, Xt == null ? void 0 : Xt.className),
              children: T
            })) : null, je ? /* @__PURE__ */ I(hd, u({}, Re(), {
              disabled: R,
              "aria-label": dt ? S : X,
              title: dt ? S : X,
              ownerState: Ue
            }, P, {
              className: te(ze.popupIndicator, P == null ? void 0 : P.className),
              children: ae
            })) : null]
          })
        }),
        inputProps: u({
          className: ze.input,
          disabled: R,
          readOnly: ce
        }, Le())
      })
    })), H ? /* @__PURE__ */ I(vd, u({
      as: we,
      disablePortal: A,
      style: {
        width: H ? H.clientWidth : null
      },
      ownerState: Ue,
      role: "presentation",
      anchorEl: H,
      open: dt
    }, Bt, {
      className: te(ze.popper, Bt == null ? void 0 : Bt.className),
      children: /* @__PURE__ */ ke(gd, u({
        ownerState: Ue,
        as: pe
      }, It, {
        className: te(ze.paper, It == null ? void 0 : It.className),
        children: [Ce && Ee.length === 0 ? /* @__PURE__ */ I(yd, {
          className: ze.loading,
          ownerState: Ue,
          children: Q
        }) : null, Ee.length === 0 && !D && !Ce ? /* @__PURE__ */ I(xd, {
          className: ze.noOptions,
          ownerState: Ue,
          role: "presentation",
          onMouseDown: (C) => {
            C.preventDefault();
          },
          children: q
        }) : null, Ee.length > 0 ? /* @__PURE__ */ I(Cd, u({
          as: he,
          className: ze.listbox,
          ownerState: Ue
        }, ho, ve, {
          ref: Uo,
          children: Ee.map((C, W) => _ ? Ho({
            key: C.key,
            group: C.group,
            children: C.options.map((Z, Se) => vo(Z, C.index + Se))
          }) : vo(C, W))
        })) : null]
      }))
    })) : null]
  });
});
process.env.NODE_ENV !== "production" && (Os.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the portion of the selected suggestion that the user hasn't typed,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   * @default false
   */
  autoComplete: t.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: t.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using the `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: t.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: t.oneOfType([t.oneOf(["mouse", "touch"]), t.bool]),
  /**
   * Props applied to the [`Chip`](/material-ui/api/chip/) element.
   */
  ChipProps: t.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: t.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set it to `true` if you want to help the user enter a new value.
   * Set it to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: t.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: t.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: t.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: t.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: t.shape({
    clearIndicator: t.object,
    paper: t.object,
    popper: t.object,
    popupIndicator: t.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: yt(t.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
`)) : null),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: t.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: t.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: t.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: t.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: t.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: t.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: t.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: t.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: t.oneOfType([t.oneOf(["auto"]), t.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: t.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: t.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: t.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: t.func,
  /**
   * Used to determine the key for a given option.
   * This can be useful when the labels of options are not unique (since labels are used as keys by default).
   *
   * @param {Value} option The option to get the key for.
   * @returns {string | number}
   */
  getOptionKey: t.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * If used in free solo mode, it must accept both the type of the options and a string.
   *
   * @param {Value} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel: t.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} options The options to group.
   * @returns {string}
   */
  groupBy: t.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: t.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: t.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: t.bool,
  /**
   * The input value.
   */
  inputValue: t.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: t.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: bn,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   */
  ListboxComponent: t.elementType,
  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: t.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, e.g. `options` are empty).
   * @default false
   */
  loading: t.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: t.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: t.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: t.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: t.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: t.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: t.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: t.func,
  /**
   * @ignore
   */
  onKeyDown: t.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: t.func,
  /**
   * If `true`, the component is shown.
   */
  open: t.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: t.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: t.string,
  /**
   * Array of options.
   */
  options: t.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   */
  PaperComponent: t.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   */
  PopperComponent: t.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: t.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: t.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: t.func,
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: t.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: t.func,
  /**
   * Render the selected value.
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: t.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: t.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: t.oneOfType([t.oneOf(["small", "medium"]), t.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: t.shape({
    clearIndicator: t.object,
    paper: t.object,
    popper: t.object,
    popupIndicator: t.object
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: yt(t.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const Om = Os, Td = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], Sd = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Es = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = wt(), s = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: a = !0,
    children: c,
    easing: l,
    in: d,
    onEnter: p,
    onEntered: b,
    onEntering: v,
    onExit: g,
    onExited: T,
    onExiting: O,
    style: m,
    timeout: x = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = hn
  } = o, h = J(o, Td), y = f.useRef(null), E = We(y, c.ref, n), w = (B) => (L) => {
    if (B) {
      const j = y.current;
      L === void 0 ? B(j) : B(j, L);
    }
  }, R = w(v), $ = w((B, L) => {
    _r(B);
    const j = Vt({
      style: m,
      timeout: x,
      easing: l
    }, {
      mode: "enter"
    });
    B.style.webkitTransition = r.transitions.create("opacity", j), B.style.transition = r.transitions.create("opacity", j), p && p(B, L);
  }), N = w(b), A = w(O), F = w((B) => {
    const L = Vt({
      style: m,
      timeout: x,
      easing: l
    }, {
      mode: "exit"
    });
    B.style.webkitTransition = r.transitions.create("opacity", L), B.style.transition = r.transitions.create("opacity", L), g && g(B);
  }), M = w(T);
  return /* @__PURE__ */ I(S, u({
    appear: a,
    in: d,
    nodeRef: y,
    onEnter: $,
    onEntered: N,
    onEntering: R,
    onExit: F,
    onExited: M,
    onExiting: A,
    addEndListener: (B) => {
      i && i(y.current, B);
    },
    timeout: x
  }, h, {
    children: (B, L) => /* @__PURE__ */ f.cloneElement(c, u({
      style: u({
        opacity: 0,
        visibility: B === "exited" && !d ? "hidden" : void 0
      }, Sd[B], m, c.props.style),
      ref: E
    }, L))
  }));
});
process.env.NODE_ENV !== "production" && (Es.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: t.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: t.bool,
  /**
   * A single child content element.
   */
  children: Ao.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: t.oneOfType([t.shape({
    enter: t.string,
    exit: t.string
  }), t.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: t.bool,
  /**
   * @ignore
   */
  onEnter: t.func,
  /**
   * @ignore
   */
  onEntered: t.func,
  /**
   * @ignore
   */
  onEntering: t.func,
  /**
   * @ignore
   */
  onExit: t.func,
  /**
   * @ignore
   */
  onExited: t.func,
  /**
   * @ignore
   */
  onExiting: t.func,
  /**
   * @ignore
   */
  style: t.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: t.oneOfType([t.number, t.shape({
    appear: t.number,
    enter: t.number,
    exit: t.number
  })])
});
const Ts = Es;
function wd(e) {
  return fe("MuiBackdrop", e);
}
const Rd = be("MuiBackdrop", ["root", "invisible"]), Em = Rd, Pd = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Id = (e) => {
  const {
    classes: o,
    invisible: n
  } = e;
  return xe({
    root: ["root", n && "invisible"]
  }, wd, o);
}, $d = U("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.root, n.invisible && o.invisible];
  }
})(({
  ownerState: e
}) => u({
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
}, e.invisible && {
  backgroundColor: "transparent"
})), Ss = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s, i;
  const a = Oe({
    props: o,
    name: "MuiBackdrop"
  }), {
    children: c,
    className: l,
    component: d = "div",
    components: p = {},
    componentsProps: b = {},
    invisible: v = !1,
    open: g,
    slotProps: T = {},
    slots: O = {},
    TransitionComponent: m = Ts,
    transitionDuration: x
  } = a, S = J(a, Pd), h = u({}, a, {
    component: d,
    invisible: v
  }), y = Id(h), E = (r = T.root) != null ? r : b.root;
  return /* @__PURE__ */ I(m, u({
    in: g,
    timeout: x
  }, S, {
    children: /* @__PURE__ */ I($d, u({
      "aria-hidden": !0
    }, E, {
      as: (s = (i = O.root) != null ? i : p.Root) != null ? s : d,
      className: te(y.root, l, E == null ? void 0 : E.className),
      ownerState: u({}, h, E == null ? void 0 : E.ownerState),
      classes: y,
      ref: n,
      children: c
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Ss.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: t.shape({
    Root: t.elementType
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
  componentsProps: t.shape({
    root: t.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: t.bool,
  /**
   * If `true`, the component is shown.
   */
  open: t.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: t.shape({
    root: t.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: t.shape({
    root: t.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: t.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: t.oneOfType([t.number, t.shape({
    appear: t.number,
    enter: t.number,
    exit: t.number
  })])
});
const ws = Ss;
function Nd(e) {
  return fe("PrivateSwitchBase", e);
}
be("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const kd = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"], Md = (e) => {
  const {
    classes: o,
    checked: n,
    disabled: r,
    edge: s
  } = e, i = {
    root: ["root", n && "checked", r && "disabled", s && `edge${de(s)}`],
    input: ["input"]
  };
  return xe(i, Nd, o);
}, Ad = U(Kt)(({
  ownerState: e
}) => u({
  padding: 9,
  borderRadius: "50%"
}, e.edge === "start" && {
  marginLeft: e.size === "small" ? -3 : -12
}, e.edge === "end" && {
  marginRight: e.size === "small" ? -3 : -12
})), Fd = U("input", {
  shouldForwardProp: ct
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
}), Rs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const {
    autoFocus: r,
    checked: s,
    checkedIcon: i,
    className: a,
    defaultChecked: c,
    disabled: l,
    disableFocusRipple: d = !1,
    edge: p = !1,
    icon: b,
    id: v,
    inputProps: g,
    inputRef: T,
    name: O,
    onBlur: m,
    onChange: x,
    onFocus: S,
    readOnly: h,
    required: y = !1,
    tabIndex: E,
    type: w,
    value: R
  } = o, $ = J(o, kd), [N, A] = Mt({
    controlled: s,
    default: !!c,
    name: "SwitchBase",
    state: "checked"
  }), F = vt(), M = (K) => {
    S && S(K), F && F.onFocus && F.onFocus(K);
  }, D = (K) => {
    m && m(K), F && F.onBlur && F.onBlur(K);
  }, B = (K) => {
    if (K.nativeEvent.defaultPrevented)
      return;
    const ee = K.target.checked;
    A(ee), x && x(K, ee);
  };
  let L = l;
  F && typeof L > "u" && (L = F.disabled);
  const j = w === "checkbox" || w === "radio", _ = u({}, o, {
    checked: N,
    disabled: L,
    disableFocusRipple: d,
    edge: p
  }), V = Md(_);
  return /* @__PURE__ */ ke(Ad, u({
    component: "span",
    className: te(V.root, a),
    centerRipple: !0,
    focusRipple: !d,
    disabled: L,
    tabIndex: null,
    role: void 0,
    onFocus: M,
    onBlur: D,
    ownerState: _,
    ref: n
  }, $, {
    children: [/* @__PURE__ */ I(Fd, u({
      autoFocus: r,
      checked: s,
      defaultChecked: c,
      className: V.input,
      disabled: L,
      id: j ? v : void 0,
      name: O,
      onChange: B,
      readOnly: h,
      ref: T,
      required: y,
      ownerState: _,
      tabIndex: E,
      type: w
    }, w === "checkbox" && R === void 0 ? {} : {
      value: R
    }, g)), N ? i : b]
  }));
});
process.env.NODE_ENV !== "production" && (Rs.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: t.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: t.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: t.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * @ignore
   */
  defaultChecked: t.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: t.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: t.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: t.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: t.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: t.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: t.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Ze,
  /*
   * @ignore
   */
  name: t.string,
  /**
   * @ignore
   */
  onBlur: t.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: t.func,
  /**
   * @ignore
   */
  onFocus: t.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: t.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.object,
  /**
   * @ignore
   */
  tabIndex: t.oneOfType([t.number, t.string]),
  /**
   * The input component prop `type`.
   */
  type: t.string.isRequired,
  /**
   * The value of the component.
   */
  value: t.any
});
const Dd = Rs, Ld = Dt(/* @__PURE__ */ I("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), Bd = Dt(/* @__PURE__ */ I("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), jd = Dt(/* @__PURE__ */ I("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function _d(e) {
  return fe("MuiCheckbox", e);
}
const zd = be("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), Qo = zd, Wd = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"], Vd = (e) => {
  const {
    classes: o,
    indeterminate: n,
    color: r,
    size: s
  } = e, i = {
    root: ["root", n && "indeterminate", `color${de(r)}`, `size${de(s)}`]
  }, a = xe(i, _d, o);
  return u({}, o, a);
}, Ud = U(Dd, {
  shouldForwardProp: (e) => ct(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.root, n.indeterminate && o.indeterminate, o[`size${de(n.size)}`], n.color !== "default" && o[`color${de(n.color)}`]];
  }
})(({
  theme: e,
  ownerState: o
}) => u({
  color: (e.vars || e).palette.text.secondary
}, !o.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${o.color === "default" ? e.vars.palette.action.activeChannel : e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : st(o.color === "default" ? e.palette.action.active : e.palette[o.color].main, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, o.color !== "default" && {
  [`&.${Qo.checked}, &.${Qo.indeterminate}`]: {
    color: (e.vars || e).palette[o.color].main
  },
  [`&.${Qo.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  }
})), Hd = /* @__PURE__ */ I(Bd, {}), qd = /* @__PURE__ */ I(Ld, {}), Gd = /* @__PURE__ */ I(jd, {}), Ps = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s;
  const i = Oe({
    props: o,
    name: "MuiCheckbox"
  }), {
    checkedIcon: a = Hd,
    color: c = "primary",
    icon: l = qd,
    indeterminate: d = !1,
    indeterminateIcon: p = Gd,
    inputProps: b,
    size: v = "medium",
    className: g
  } = i, T = J(i, Wd), O = d ? p : l, m = d ? p : a, x = u({}, i, {
    color: c,
    indeterminate: d,
    size: v
  }), S = Vd(x);
  return /* @__PURE__ */ I(Ud, u({
    type: "checkbox",
    inputProps: u({
      "data-indeterminate": d
    }, b),
    icon: /* @__PURE__ */ f.cloneElement(O, {
      fontSize: (r = O.props.fontSize) != null ? r : v
    }),
    checkedIcon: /* @__PURE__ */ f.cloneElement(m, {
      fontSize: (s = m.props.fontSize) != null ? s : v
    }),
    ownerState: x,
    ref: n,
    className: te(S.root, g)
  }, T, {
    classes: S
  }));
});
process.env.NODE_ENV !== "production" && (Ps.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: t.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: t.oneOfType([t.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), t.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: t.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: t.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: t.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: t.node,
  /**
   * The id of the `input` element.
   */
  id: t.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: t.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: t.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: t.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Ze,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: t.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: t.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: t.oneOfType([t.oneOf(["medium", "small"]), t.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: t.any
});
const Tm = Ps;
function Kd(e) {
  return fe("MuiModal", e);
}
const Yd = be("MuiModal", ["root", "hidden", "backdrop"]), Sm = Yd, Xd = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], Jd = (e) => {
  const {
    open: o,
    exited: n,
    classes: r
  } = e;
  return xe({
    root: ["root", !o && n && "hidden"],
    backdrop: ["backdrop"]
  }, Kd, r);
}, Zd = U("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.root, !n.open && n.exited && o.hidden];
  }
})(({
  theme: e,
  ownerState: o
}) => u({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !o.open && o.exited && {
  visibility: "hidden"
})), Qd = U(ws, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, o) => o.backdrop
})({
  zIndex: -1
}), Is = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s, i, a, c, l;
  const d = Oe({
    name: "MuiModal",
    props: o
  }), {
    BackdropComponent: p = Qd,
    BackdropProps: b,
    className: v,
    closeAfterTransition: g = !1,
    children: T,
    container: O,
    component: m,
    components: x = {},
    componentsProps: S = {},
    disableAutoFocus: h = !1,
    disableEnforceFocus: y = !1,
    disableEscapeKeyDown: E = !1,
    disablePortal: w = !1,
    disableRestoreFocus: R = !1,
    disableScrollLock: $ = !1,
    hideBackdrop: N = !1,
    keepMounted: A = !1,
    onBackdropClick: F,
    open: M,
    slotProps: D,
    slots: B
    // eslint-disable-next-line react/prop-types
  } = d, L = J(d, Xd), j = u({}, d, {
    closeAfterTransition: g,
    disableAutoFocus: h,
    disableEnforceFocus: y,
    disableEscapeKeyDown: E,
    disablePortal: w,
    disableRestoreFocus: R,
    disableScrollLock: $,
    hideBackdrop: N,
    keepMounted: A
  }), {
    getRootProps: _,
    getBackdropProps: V,
    getTransitionProps: K,
    portalRef: ee,
    isTopModal: he,
    exited: ve,
    hasTransition: Ce
  } = ll(u({}, j, {
    rootRef: n
  })), Q = u({}, j, {
    exited: ve
  }), ne = Jd(Q), q = {};
  if (T.props.tabIndex === void 0 && (q.tabIndex = "-1"), Ce) {
    const {
      onEnter: ie,
      onExited: z
    } = K();
    q.onEnter = ie, q.onExited = z;
  }
  const ue = (r = (s = B == null ? void 0 : B.root) != null ? s : x.Root) != null ? r : Zd, X = (i = (a = B == null ? void 0 : B.backdrop) != null ? a : x.Backdrop) != null ? i : p, pe = (c = D == null ? void 0 : D.root) != null ? c : S.root, we = (l = D == null ? void 0 : D.backdrop) != null ? l : S.backdrop, ae = pt({
    elementType: ue,
    externalSlotProps: pe,
    externalForwardedProps: L,
    getSlotProps: _,
    additionalProps: {
      ref: n,
      as: m
    },
    ownerState: Q,
    className: te(v, pe == null ? void 0 : pe.className, ne == null ? void 0 : ne.root, !Q.open && Q.exited && (ne == null ? void 0 : ne.hidden))
  }), ce = pt({
    elementType: X,
    externalSlotProps: we,
    additionalProps: b,
    getSlotProps: (ie) => V(u({}, ie, {
      onClick: (z) => {
        F && F(z), ie != null && ie.onClick && ie.onClick(z);
      }
    })),
    className: te(we == null ? void 0 : we.className, b == null ? void 0 : b.className, ne == null ? void 0 : ne.backdrop),
    ownerState: Q
  });
  return !A && !M && (!Ce || ve) ? null : /* @__PURE__ */ I(lo, {
    ref: ee,
    container: O,
    disablePortal: w,
    children: /* @__PURE__ */ ke(ue, u({}, ae, {
      children: [!N && p ? /* @__PURE__ */ I(X, u({}, ce)) : null, /* @__PURE__ */ I(Io, {
        disableEnforceFocus: y,
        disableAutoFocus: h,
        disableRestoreFocus: R,
        isEnabled: he,
        open: M,
        children: /* @__PURE__ */ f.cloneElement(T, q)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Is.propTypes = {
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
  BackdropComponent: t.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: t.object,
  /**
   * A single child content element.
   */
  children: Ao.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: t.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: t.shape({
    Backdrop: t.elementType,
    Root: t.elementType
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
  componentsProps: t.shape({
    backdrop: t.oneOfType([t.func, t.object]),
    root: t.oneOfType([t.func, t.object])
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
  container: t.oneOfType([xt, t.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: t.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: t.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: t.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: t.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: t.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: t.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: t.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: t.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: t.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: t.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: t.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: t.func,
  /**
   * If `true`, the component is shown.
   */
  open: t.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: t.shape({
    backdrop: t.oneOfType([t.func, t.object]),
    root: t.oneOfType([t.func, t.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: t.shape({
    backdrop: t.elementType,
    root: t.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const $s = Is;
function eu(e) {
  return fe("MuiDialog", e);
}
const tu = be("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), en = tu, Ns = /* @__PURE__ */ f.createContext({});
process.env.NODE_ENV !== "production" && (Ns.displayName = "DialogContext");
const ou = Ns, nu = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], ru = U(ws, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, o) => o.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), su = (e) => {
  const {
    classes: o,
    scroll: n,
    maxWidth: r,
    fullWidth: s,
    fullScreen: i
  } = e, a = {
    root: ["root"],
    container: ["container", `scroll${de(n)}`],
    paper: ["paper", `paperScroll${de(n)}`, `paperWidth${de(String(r))}`, s && "paperFullWidth", i && "paperFullScreen"]
  };
  return xe(a, eu, o);
}, iu = U($s, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, o) => o.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), au = U("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.container, o[`scroll${de(n.scroll)}`]];
  }
})(({
  ownerState: e
}) => u({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, e.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, e.scroll === "body" && {
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
})), lu = U(Yt, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.paper, o[`scrollPaper${de(n.scroll)}`], o[`paperWidth${de(String(n.maxWidth))}`], n.fullWidth && o.paperFullWidth, n.fullScreen && o.paperFullScreen];
  }
})(({
  theme: e,
  ownerState: o
}) => u({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, o.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, o.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
  // 'initial' doesn't work on IE11
}, !o.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, o.maxWidth === "xs" && {
  maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
  [`&.${en.paperScrollBody}`]: {
    [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, o.maxWidth && o.maxWidth !== "xs" && {
  maxWidth: `${e.breakpoints.values[o.maxWidth]}${e.breakpoints.unit}`,
  [`&.${en.paperScrollBody}`]: {
    [e.breakpoints.down(e.breakpoints.values[o.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, o.fullWidth && {
  width: "calc(100% - 64px)"
}, o.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${en.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), ks = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiDialog"
  }), s = wt(), i = {
    enter: s.transitions.duration.enteringScreen,
    exit: s.transitions.duration.leavingScreen
  }, {
    "aria-describedby": a,
    "aria-labelledby": c,
    BackdropComponent: l,
    BackdropProps: d,
    children: p,
    className: b,
    disableEscapeKeyDown: v = !1,
    fullScreen: g = !1,
    fullWidth: T = !1,
    maxWidth: O = "sm",
    onBackdropClick: m,
    onClose: x,
    open: S,
    PaperComponent: h = Yt,
    PaperProps: y = {},
    scroll: E = "paper",
    TransitionComponent: w = Ts,
    transitionDuration: R = i,
    TransitionProps: $
  } = r, N = J(r, nu), A = u({}, r, {
    disableEscapeKeyDown: v,
    fullScreen: g,
    fullWidth: T,
    maxWidth: O,
    scroll: E
  }), F = su(A), M = f.useRef(), D = (_) => {
    M.current = _.target === _.currentTarget;
  }, B = (_) => {
    M.current && (M.current = null, m && m(_), x && x(_, "backdropClick"));
  }, L = Do(c), j = f.useMemo(() => ({
    titleId: L
  }), [L]);
  return /* @__PURE__ */ I(iu, u({
    className: te(F.root, b),
    closeAfterTransition: !0,
    components: {
      Backdrop: ru
    },
    componentsProps: {
      backdrop: u({
        transitionDuration: R,
        as: l
      }, d)
    },
    disableEscapeKeyDown: v,
    onClose: x,
    open: S,
    ref: n,
    onClick: B,
    ownerState: A
  }, N, {
    children: /* @__PURE__ */ I(w, u({
      appear: !0,
      in: S,
      timeout: R,
      role: "presentation"
    }, $, {
      children: /* @__PURE__ */ I(au, {
        className: te(F.container),
        onMouseDown: D,
        ownerState: A,
        children: /* @__PURE__ */ I(lu, u({
          as: h,
          elevation: 24,
          role: "dialog",
          "aria-describedby": a,
          "aria-labelledby": L
        }, y, {
          className: te(F.paper, y.className),
          ownerState: A,
          children: /* @__PURE__ */ I(ou.Provider, {
            value: j,
            children: p
          })
        }))
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ks.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": t.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": t.string,
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
  BackdropComponent: t.elementType,
  /**
   * @ignore
   */
  BackdropProps: t.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: t.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: t.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: t.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: t.oneOfType([t.oneOf(["xs", "sm", "md", "lg", "xl", !1]), t.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: t.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: t.func,
  /**
   * If `true`, the component is shown.
   */
  open: t.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: t.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: t.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: t.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: t.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: t.oneOfType([t.number, t.shape({
    appear: t.number,
    enter: t.number,
    exit: t.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: t.object
});
const wm = ks;
function cu(e) {
  return fe("MuiDialogActions", e);
}
const du = be("MuiDialogActions", ["root", "spacing"]), Rm = du, uu = ["className", "disableSpacing"], pu = (e) => {
  const {
    classes: o,
    disableSpacing: n
  } = e;
  return xe({
    root: ["root", !n && "spacing"]
  }, cu, o);
}, fu = U("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.root, !n.disableSpacing && o.spacing];
  }
})(({
  ownerState: e
}) => u({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !e.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
})), Ms = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiDialogActions"
  }), {
    className: s,
    disableSpacing: i = !1
  } = r, a = J(r, uu), c = u({}, r, {
    disableSpacing: i
  }), l = pu(c);
  return /* @__PURE__ */ I(fu, u({
    className: te(l.root, s),
    ownerState: c,
    ref: n
  }, a));
});
process.env.NODE_ENV !== "production" && (Ms.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const Pm = Ms;
function Im(e) {
  return fe("MuiDivider", e);
}
const mu = be("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), dr = mu, bu = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], hu = (e) => {
  const {
    classes: o,
    disableUnderline: n
  } = e, s = xe({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, id, o);
  return u({}, o, s);
}, vu = U(Wo, {
  shouldForwardProp: (e) => ct(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [..._o(e, o), !n.disableUnderline && o.underline];
  }
})(({
  theme: e,
  ownerState: o
}) => {
  var n;
  const r = e.palette.mode === "light", s = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", a = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", c = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return u({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : a,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
      }
    },
    [`&.${tt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
    },
    [`&.${tt.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : c
    }
  }, !o.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(n = (e.vars || e).palette[o.color || "primary"]) == null ? void 0 : n.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${tt.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${tt.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : s}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${tt.disabled}, .${tt.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${tt.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, o.startAdornment && {
    paddingLeft: 12
  }, o.endAdornment && {
    paddingRight: 12
  }, o.multiline && u({
    padding: "25px 12px 8px"
  }, o.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, o.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, o.hiddenLabel && o.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
}), gu = U(Vo, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: zo
})(({
  theme: e,
  ownerState: o
}) => u({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, o.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, o.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, o.startAdornment && {
  paddingLeft: 0
}, o.endAdornment && {
  paddingRight: 0
}, o.hiddenLabel && o.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, o.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
})), Pn = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s, i, a;
  const c = Oe({
    props: o,
    name: "MuiFilledInput"
  }), {
    components: l = {},
    componentsProps: d,
    fullWidth: p = !1,
    // declare here to prevent spreading to DOM
    inputComponent: b = "input",
    multiline: v = !1,
    slotProps: g,
    slots: T = {},
    type: O = "text"
  } = c, m = J(c, bu), x = u({}, c, {
    fullWidth: p,
    inputComponent: b,
    multiline: v,
    type: O
  }), S = hu(c), h = {
    root: {
      ownerState: x
    },
    input: {
      ownerState: x
    }
  }, y = g ?? d ? Mo(h, g ?? d) : h, E = (r = (s = T.root) != null ? s : l.Root) != null ? r : vu, w = (i = (a = T.input) != null ? a : l.Input) != null ? i : gu;
  return /* @__PURE__ */ I(Rn, u({
    slots: {
      root: E,
      input: w
    },
    componentsProps: y,
    fullWidth: p,
    inputComponent: b,
    multiline: v,
    ref: n,
    type: O
  }, m, {
    classes: S
  }));
});
process.env.NODE_ENV !== "production" && (Pn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: t.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: t.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: t.oneOfType([t.oneOf(["primary", "secondary"]), t.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: t.shape({
    Input: t.elementType,
    Root: t.elementType
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
  componentsProps: t.shape({
    input: t.object,
    root: t.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: t.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: t.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: t.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: t.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: t.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: t.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: t.bool,
  /**
   * The id of the `input` element.
   */
  id: t.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: t.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: t.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Ze,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: t.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: t.oneOfType([t.number, t.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: t.oneOfType([t.number, t.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: t.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: t.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: t.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: t.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: t.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: t.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: t.oneOfType([t.number, t.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: t.shape({
    input: t.object,
    root: t.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: t.shape({
    input: t.elementType,
    root: t.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: t.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: t.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: t.any
});
Pn.muiName = "Input";
const As = Pn;
function yu(e) {
  return fe("MuiFormControl", e);
}
const xu = be("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]), $m = xu, Cu = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], Ou = (e) => {
  const {
    classes: o,
    margin: n,
    fullWidth: r
  } = e, s = {
    root: ["root", n !== "none" && `margin${de(n)}`, r && "fullWidth"]
  };
  return xe(s, yu, o);
}, Eu = U("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, o) => u({}, o.root, o[`margin${de(e.margin)}`], e.fullWidth && o.fullWidth)
})(({
  ownerState: e
}) => u({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, e.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, e.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, e.fullWidth && {
  width: "100%"
})), Fs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiFormControl"
  }), {
    children: s,
    className: i,
    color: a = "primary",
    component: c = "div",
    disabled: l = !1,
    error: d = !1,
    focused: p,
    fullWidth: b = !1,
    hiddenLabel: v = !1,
    margin: g = "none",
    required: T = !1,
    size: O = "medium",
    variant: m = "outlined"
  } = r, x = J(r, Cu), S = u({}, r, {
    color: a,
    component: c,
    disabled: l,
    error: d,
    fullWidth: b,
    hiddenLabel: v,
    margin: g,
    required: T,
    size: O,
    variant: m
  }), h = Ou(S), [y, E] = f.useState(() => {
    let D = !1;
    return s && f.Children.forEach(s, (B) => {
      if (!Xo(B, ["Input", "Select"]))
        return;
      const L = Xo(B, ["Select"]) ? B.props.input : B;
      L && Xc(L.props) && (D = !0);
    }), D;
  }), [w, R] = f.useState(() => {
    let D = !1;
    return s && f.Children.forEach(s, (B) => {
      Xo(B, ["Input", "Select"]) && (ko(B.props, !0) || ko(B.props.inputProps, !0)) && (D = !0);
    }), D;
  }), [$, N] = f.useState(!1);
  l && $ && N(!1);
  const A = p !== void 0 && !l ? p : $;
  let F;
  if (process.env.NODE_ENV !== "production") {
    const D = f.useRef(!1);
    F = () => (D.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), D.current = !0, () => {
      D.current = !1;
    });
  }
  const M = f.useMemo(() => ({
    adornedStart: y,
    setAdornedStart: E,
    color: a,
    disabled: l,
    error: d,
    filled: w,
    focused: A,
    fullWidth: b,
    hiddenLabel: v,
    size: O,
    onBlur: () => {
      N(!1);
    },
    onEmpty: () => {
      R(!1);
    },
    onFilled: () => {
      R(!0);
    },
    onFocus: () => {
      N(!0);
    },
    registerEffect: F,
    required: T,
    variant: m
  }), [y, a, l, d, w, A, b, v, F, T, O, m]);
  return /* @__PURE__ */ I(jo.Provider, {
    value: M,
    children: /* @__PURE__ */ I(Eu, u({
      as: c,
      ownerState: S,
      className: te(h.root, i),
      ref: n
    }, x, {
      children: s
    }))
  });
});
process.env.NODE_ENV !== "production" && (Fs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: t.oneOfType([t.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), t.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: t.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: t.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: t.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: t.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: t.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: t.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: t.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: t.oneOfType([t.oneOf(["medium", "small"]), t.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: t.oneOf(["filled", "outlined", "standard"])
});
const Tu = Fs, Ds = oa({
  createStyledComponent: U("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, o) => o.root
  }),
  useThemeProps: (e) => Oe({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (Ds.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: t.oneOfType([t.oneOf(["column-reverse", "column", "row-reverse", "row"]), t.arrayOf(t.oneOf(["column-reverse", "column", "row-reverse", "row"])), t.object]),
  /**
   * Add an element between each child.
   */
  divider: t.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: t.oneOfType([t.arrayOf(t.oneOfType([t.number, t.string])), t.number, t.object, t.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: t.bool
});
const Su = Ds;
function wu(e) {
  return fe("MuiFormControlLabel", e);
}
const Ru = be("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), no = Ru, Pu = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"], Iu = (e) => {
  const {
    classes: o,
    disabled: n,
    labelPlacement: r,
    error: s,
    required: i
  } = e, a = {
    root: ["root", n && "disabled", `labelPlacement${de(r)}`, s && "error", i && "required"],
    label: ["label", n && "disabled"],
    asterisk: ["asterisk", s && "error"]
  };
  return xe(a, wu, o);
}, $u = U("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${no.label}`]: o.label
    }, o.root, o[`labelPlacement${de(n.labelPlacement)}`]];
  }
})(({
  theme: e,
  ownerState: o
}) => u({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${no.disabled}`]: {
    cursor: "default"
  }
}, o.labelPlacement === "start" && {
  flexDirection: "row-reverse",
  marginLeft: 16,
  // used for row presentation of radio/checkbox
  marginRight: -11
}, o.labelPlacement === "top" && {
  flexDirection: "column-reverse",
  marginLeft: 16
}, o.labelPlacement === "bottom" && {
  flexDirection: "column",
  marginLeft: 16
}, {
  [`& .${no.label}`]: {
    [`&.${no.disabled}`]: {
      color: (e.vars || e).palette.text.disabled
    }
  }
})), Nu = U("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (e, o) => o.asterisk
})(({
  theme: e
}) => ({
  [`&.${no.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Ls = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s;
  const i = Oe({
    props: o,
    name: "MuiFormControlLabel"
  }), {
    className: a,
    componentsProps: c = {},
    control: l,
    disabled: d,
    disableTypography: p,
    label: b,
    labelPlacement: v = "end",
    required: g,
    slotProps: T = {}
  } = i, O = J(i, Pu), m = vt(), x = (r = d ?? l.props.disabled) != null ? r : m == null ? void 0 : m.disabled, S = g ?? l.props.required, h = {
    disabled: x,
    required: S
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((N) => {
    typeof l.props[N] > "u" && typeof i[N] < "u" && (h[N] = i[N]);
  });
  const y = Pt({
    props: i,
    muiFormControl: m,
    states: ["error"]
  }), E = u({}, i, {
    disabled: x,
    labelPlacement: v,
    required: S,
    error: y.error
  }), w = Iu(E), R = (s = T.typography) != null ? s : c.typography;
  let $ = b;
  return $ != null && $.type !== sn && !p && ($ = /* @__PURE__ */ I(sn, u({
    component: "span"
  }, R, {
    className: te(w.label, R == null ? void 0 : R.className),
    children: $
  }))), /* @__PURE__ */ ke($u, u({
    className: te(w.root, a),
    ownerState: E,
    ref: n
  }, O, {
    children: [/* @__PURE__ */ f.cloneElement(l, h), S ? /* @__PURE__ */ ke(Su, {
      display: "block",
      children: [$, /* @__PURE__ */ ke(Nu, {
        ownerState: E,
        "aria-hidden": !0,
        className: w.asterisk,
        children: [" ", "*"]
      })]
    }) : $]
  }));
});
process.env.NODE_ENV !== "production" && (Ls.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component appears selected.
   */
  checked: t.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: t.shape({
    typography: t.object
  }),
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: t.element.isRequired,
  /**
   * If `true`, the control is disabled.
   */
  disabled: t.bool,
  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography: t.bool,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Ze,
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: t.node,
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement: t.oneOf(["bottom", "end", "start", "top"]),
  /**
   * @ignore
   */
  name: t.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: t.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: t.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: t.shape({
    typography: t.object
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The value of the component.
   */
  value: t.any
});
const Nm = Ls;
function ku(e) {
  return fe("MuiFormGroup", e);
}
const Mu = be("MuiFormGroup", ["root", "row", "error"]), km = Mu, Au = ["className", "row"], Fu = (e) => {
  const {
    classes: o,
    row: n,
    error: r
  } = e;
  return xe({
    root: ["root", n && "row", r && "error"]
  }, ku, o);
}, Du = U("div", {
  name: "MuiFormGroup",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.root, n.row && o.row];
  }
})(({
  ownerState: e
}) => u({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap"
}, e.row && {
  flexDirection: "row"
})), Bs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiFormGroup"
  }), {
    className: s,
    row: i = !1
  } = r, a = J(r, Au), c = vt(), l = Pt({
    props: r,
    muiFormControl: c,
    states: ["error"]
  }), d = u({}, r, {
    row: i,
    error: l.error
  }), p = Fu(d);
  return /* @__PURE__ */ I(Du, u({
    className: te(p.root, s),
    ownerState: d,
    ref: n
  }, a));
});
process.env.NODE_ENV !== "production" && (Bs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * Display group of elements in a compact row.
   * @default false
   */
  row: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const Mm = Bs;
function Lu(e) {
  return fe("MuiFormHelperText", e);
}
const Bu = be("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), ur = Bu;
var pr;
const ju = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], _u = (e) => {
  const {
    classes: o,
    contained: n,
    size: r,
    disabled: s,
    error: i,
    filled: a,
    focused: c,
    required: l
  } = e, d = {
    root: ["root", s && "disabled", i && "error", r && `size${de(r)}`, n && "contained", c && "focused", a && "filled", l && "required"]
  };
  return xe(d, Lu, o);
}, zu = U("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.root, n.size && o[`size${de(n.size)}`], n.contained && o.contained, n.filled && o.filled];
  }
})(({
  theme: e,
  ownerState: o
}) => u({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${ur.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${ur.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, o.size === "small" && {
  marginTop: 4
}, o.contained && {
  marginLeft: 14,
  marginRight: 14
})), js = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiFormHelperText"
  }), {
    children: s,
    className: i,
    component: a = "p"
  } = r, c = J(r, ju), l = vt(), d = Pt({
    props: r,
    muiFormControl: l,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), p = u({}, r, {
    component: a,
    contained: d.variant === "filled" || d.variant === "outlined",
    variant: d.variant,
    size: d.size,
    disabled: d.disabled,
    error: d.error,
    filled: d.filled,
    focused: d.focused,
    required: d.required
  }), b = _u(p);
  return /* @__PURE__ */ I(zu, u({
    as: a,
    ownerState: p,
    className: te(b.root, i),
    ref: n
  }, c, {
    children: s === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      pr || (pr = /* @__PURE__ */ I("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : s
  }));
});
process.env.NODE_ENV !== "production" && (js.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: t.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: t.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: t.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: t.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: t.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The variant to use.
   */
  variant: t.oneOfType([t.oneOf(["filled", "outlined", "standard"]), t.string])
});
const Wu = js;
function Vu(e) {
  return fe("MuiFormLabel", e);
}
const Uu = be("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), ao = Uu, Hu = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], qu = (e) => {
  const {
    classes: o,
    color: n,
    focused: r,
    disabled: s,
    error: i,
    filled: a,
    required: c
  } = e, l = {
    root: ["root", `color${de(n)}`, s && "disabled", i && "error", a && "filled", r && "focused", c && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return xe(l, Vu, o);
}, Gu = U("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, o) => u({}, o.root, e.color === "secondary" && o.colorSecondary, e.filled && o.filled)
})(({
  theme: e,
  ownerState: o
}) => u({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${ao.focused}`]: {
    color: (e.vars || e).palette[o.color].main
  },
  [`&.${ao.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${ao.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Ku = U("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, o) => o.asterisk
})(({
  theme: e
}) => ({
  [`&.${ao.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), _s = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiFormLabel"
  }), {
    children: s,
    className: i,
    component: a = "label"
  } = r, c = J(r, Hu), l = vt(), d = Pt({
    props: r,
    muiFormControl: l,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), p = u({}, r, {
    color: d.color || "primary",
    component: a,
    disabled: d.disabled,
    error: d.error,
    filled: d.filled,
    focused: d.focused,
    required: d.required
  }), b = qu(p);
  return /* @__PURE__ */ ke(Gu, u({
    as: a,
    ownerState: p,
    className: te(b.root, i),
    ref: n
  }, c, {
    children: [s, d.required && /* @__PURE__ */ ke(Ku, {
      ownerState: p,
      "aria-hidden": !0,
      className: b.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (_s.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: t.oneOfType([t.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), t.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: t.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: t.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: t.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: t.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const Yu = _s, Xu = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function pn(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Ju = {
  entering: {
    opacity: 1,
    transform: pn(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, tn = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), In = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const {
    addEndListener: r,
    appear: s = !0,
    children: i,
    easing: a,
    in: c,
    onEnter: l,
    onEntered: d,
    onEntering: p,
    onExit: b,
    onExited: v,
    onExiting: g,
    style: T,
    timeout: O = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: m = hn
  } = o, x = J(o, Xu), S = Nr(), h = f.useRef(), y = wt(), E = f.useRef(null), w = We(E, i.ref, n), R = (L) => (j) => {
    if (L) {
      const _ = E.current;
      j === void 0 ? L(_) : L(_, j);
    }
  }, $ = R(p), N = R((L, j) => {
    _r(L);
    const {
      duration: _,
      delay: V,
      easing: K
    } = Vt({
      style: T,
      timeout: O,
      easing: a
    }, {
      mode: "enter"
    });
    let ee;
    O === "auto" ? (ee = y.transitions.getAutoHeightDuration(L.clientHeight), h.current = ee) : ee = _, L.style.transition = [y.transitions.create("opacity", {
      duration: ee,
      delay: V
    }), y.transitions.create("transform", {
      duration: tn ? ee : ee * 0.666,
      delay: V,
      easing: K
    })].join(","), l && l(L, j);
  }), A = R(d), F = R(g), M = R((L) => {
    const {
      duration: j,
      delay: _,
      easing: V
    } = Vt({
      style: T,
      timeout: O,
      easing: a
    }, {
      mode: "exit"
    });
    let K;
    O === "auto" ? (K = y.transitions.getAutoHeightDuration(L.clientHeight), h.current = K) : K = j, L.style.transition = [y.transitions.create("opacity", {
      duration: K,
      delay: _
    }), y.transitions.create("transform", {
      duration: tn ? K : K * 0.666,
      delay: tn ? _ : _ || K * 0.333,
      easing: V
    })].join(","), L.style.opacity = 0, L.style.transform = pn(0.75), b && b(L);
  }), D = R(v);
  return /* @__PURE__ */ I(m, u({
    appear: s,
    in: c,
    nodeRef: E,
    onEnter: N,
    onEntered: A,
    onEntering: $,
    onExit: M,
    onExited: D,
    onExiting: F,
    addEndListener: (L) => {
      O === "auto" && S.start(h.current || 0, L), r && r(E.current, L);
    },
    timeout: O === "auto" ? null : O
  }, x, {
    children: (L, j) => /* @__PURE__ */ f.cloneElement(i, u({
      style: u({
        opacity: 0,
        transform: pn(0.75),
        visibility: L === "exited" && !c ? "hidden" : void 0
      }, Ju[L], T, i.props.style),
      ref: w
    }, j))
  }));
});
process.env.NODE_ENV !== "production" && (In.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: t.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: t.bool,
  /**
   * A single child content element.
   */
  children: Ao.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: t.oneOfType([t.shape({
    enter: t.string,
    exit: t.string
  }), t.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: t.bool,
  /**
   * @ignore
   */
  onEnter: t.func,
  /**
   * @ignore
   */
  onEntered: t.func,
  /**
   * @ignore
   */
  onEntering: t.func,
  /**
   * @ignore
   */
  onExit: t.func,
  /**
   * @ignore
   */
  onExited: t.func,
  /**
   * @ignore
   */
  onExiting: t.func,
  /**
   * @ignore
   */
  style: t.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: t.oneOfType([t.oneOf(["auto"]), t.number, t.shape({
    appear: t.number,
    enter: t.number,
    exit: t.number
  })])
});
In.muiSupportAuto = !0;
const Zu = In, Qu = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], ep = (e) => {
  const {
    classes: o,
    disableUnderline: n
  } = e, s = xe({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, od, o);
  return u({}, o, s);
}, tp = U(Wo, {
  shouldForwardProp: (e) => ct(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [..._o(e, o), !n.disableUnderline && o.underline];
  }
})(({
  theme: e,
  ownerState: o
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), u({
    position: "relative"
  }, o.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !o.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(e.vars || e).palette[o.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${St.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${St.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
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
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${St.disabled}, .${St.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${St.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), op = U(Vo, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: zo
})({}), $n = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s, i, a;
  const c = Oe({
    props: o,
    name: "MuiInput"
  }), {
    disableUnderline: l,
    components: d = {},
    componentsProps: p,
    fullWidth: b = !1,
    inputComponent: v = "input",
    multiline: g = !1,
    slotProps: T,
    slots: O = {},
    type: m = "text"
  } = c, x = J(c, Qu), S = ep(c), y = {
    root: {
      ownerState: {
        disableUnderline: l
      }
    }
  }, E = T ?? p ? Mo(T ?? p, y) : y, w = (r = (s = O.root) != null ? s : d.Root) != null ? r : tp, R = (i = (a = O.input) != null ? a : d.Input) != null ? i : op;
  return /* @__PURE__ */ I(Rn, u({
    slots: {
      root: w,
      input: R
    },
    slotProps: E,
    fullWidth: b,
    inputComponent: v,
    multiline: g,
    ref: n,
    type: m
  }, x, {
    classes: S
  }));
});
process.env.NODE_ENV !== "production" && ($n.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: t.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: t.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: t.oneOfType([t.oneOf(["primary", "secondary"]), t.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: t.shape({
    Input: t.elementType,
    Root: t.elementType
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
  componentsProps: t.shape({
    input: t.object,
    root: t.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: t.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: t.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: t.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: t.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: t.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: t.bool,
  /**
   * The id of the `input` element.
   */
  id: t.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: t.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: t.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Ze,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: t.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: t.oneOfType([t.number, t.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: t.oneOfType([t.number, t.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: t.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: t.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: t.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: t.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: t.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: t.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: t.oneOfType([t.number, t.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: t.shape({
    input: t.object,
    root: t.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: t.shape({
    input: t.elementType,
    root: t.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: t.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: t.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: t.any
});
$n.muiName = "Input";
const zs = $n;
function np(e) {
  return fe("MuiInputAdornment", e);
}
const rp = be("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), fr = rp;
var mr;
const sp = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"], ip = (e, o) => {
  const {
    ownerState: n
  } = e;
  return [o.root, o[`position${de(n.position)}`], n.disablePointerEvents === !0 && o.disablePointerEvents, o[n.variant]];
}, ap = (e) => {
  const {
    classes: o,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: s,
    size: i,
    variant: a
  } = e, c = {
    root: ["root", n && "disablePointerEvents", s && `position${de(s)}`, a, r && "hiddenLabel", i && `size${de(i)}`]
  };
  return xe(c, np, o);
}, lp = U("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: ip
})(({
  theme: e,
  ownerState: o
}) => u({
  display: "flex",
  height: "0.01em",
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active
}, o.variant === "filled" && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${fr.positionStart}&:not(.${fr.hiddenLabel})`]: {
    marginTop: 16
  }
}, o.position === "start" && {
  // Styles applied to the root element if `position="start"`.
  marginRight: 8
}, o.position === "end" && {
  // Styles applied to the root element if `position="end"`.
  marginLeft: 8
}, o.disablePointerEvents === !0 && {
  // Styles applied to the root element if `disablePointerEvents={true}`.
  pointerEvents: "none"
})), Ws = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiInputAdornment"
  }), {
    children: s,
    className: i,
    component: a = "div",
    disablePointerEvents: c = !1,
    disableTypography: l = !1,
    position: d,
    variant: p
  } = r, b = J(r, sp), v = vt() || {};
  let g = p;
  p && v.variant && process.env.NODE_ENV !== "production" && p === v.variant && console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one."), v && !g && (g = v.variant);
  const T = u({}, r, {
    hiddenLabel: v.hiddenLabel,
    size: v.size,
    disablePointerEvents: c,
    position: d,
    variant: g
  }), O = ap(T);
  return /* @__PURE__ */ I(jo.Provider, {
    value: null,
    children: /* @__PURE__ */ I(lp, u({
      as: a,
      ownerState: T,
      className: te(O.root, i),
      ref: n
    }, b, {
      children: typeof s == "string" && !l ? /* @__PURE__ */ I(sn, {
        color: "text.secondary",
        children: s
      }) : /* @__PURE__ */ ke(f.Fragment, {
        children: [d === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          mr || (mr = /* @__PURE__ */ I("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, s]
      })
    }))
  });
});
process.env.NODE_ENV !== "production" && (Ws.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   * @default false
   */
  disablePointerEvents: t.bool,
  /**
   * If children is a string then disable wrapping in a Typography component.
   * @default false
   */
  disableTypography: t.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: t.oneOf(["end", "start"]).isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: t.oneOf(["filled", "outlined", "standard"])
});
const Am = Ws;
function cp(e) {
  return fe("MuiInputLabel", e);
}
const dp = be("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), Fm = dp, up = ["disableAnimation", "margin", "shrink", "variant", "className"], pp = (e) => {
  const {
    classes: o,
    formControl: n,
    size: r,
    shrink: s,
    disableAnimation: i,
    variant: a,
    required: c
  } = e, l = {
    root: ["root", n && "formControl", !i && "animated", s && "shrink", r && r !== "normal" && `size${de(r)}`, a],
    asterisk: [c && "asterisk"]
  }, d = xe(l, cp, o);
  return u({}, o, d);
}, fp = U(Yu, {
  shouldForwardProp: (e) => ct(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ao.asterisk}`]: o.asterisk
    }, o.root, n.formControl && o.formControl, n.size === "small" && o.sizeSmall, n.shrink && o.shrink, !n.disableAnimation && o.animated, n.focused && o.focused, o[n.variant]];
  }
})(({
  theme: e,
  ownerState: o
}) => u({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, o.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, o.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, o.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !o.disableAnimation && {
  transition: e.transitions.create(["color", "transform", "max-width"], {
    duration: e.transitions.duration.shorter,
    easing: e.transitions.easing.easeOut
  })
}, o.variant === "filled" && u({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, o.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, o.shrink && u({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, o.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), o.variant === "outlined" && u({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, o.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, o.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), Vs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    name: "MuiInputLabel",
    props: o
  }), {
    disableAnimation: s = !1,
    shrink: i,
    className: a
  } = r, c = J(r, up), l = vt();
  let d = i;
  typeof d > "u" && l && (d = l.filled || l.focused || l.adornedStart);
  const p = Pt({
    props: r,
    muiFormControl: l,
    states: ["size", "variant", "required", "focused"]
  }), b = u({}, r, {
    disableAnimation: s,
    formControl: l,
    shrink: d,
    size: p.size,
    variant: p.variant,
    required: p.required,
    focused: p.focused
  }), v = pp(b);
  return /* @__PURE__ */ I(fp, u({
    "data-shrink": d,
    ownerState: b,
    ref: n,
    className: te(v.root, a)
  }, c, {
    classes: v
  }));
});
process.env.NODE_ENV !== "production" && (Vs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: t.oneOfType([t.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), t.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: t.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: t.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: t.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: t.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: t.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: t.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: t.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: t.oneOfType([t.oneOf(["normal", "small"]), t.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The variant to use.
   */
  variant: t.oneOf(["filled", "outlined", "standard"])
});
const mp = Vs, Us = /* @__PURE__ */ f.createContext({});
process.env.NODE_ENV !== "production" && (Us.displayName = "ListContext");
const fn = Us;
function bp(e) {
  return fe("MuiList", e);
}
const hp = be("MuiList", ["root", "padding", "dense", "subheader"]), Dm = hp, vp = ["children", "className", "component", "dense", "disablePadding", "subheader"], gp = (e) => {
  const {
    classes: o,
    disablePadding: n,
    dense: r,
    subheader: s
  } = e;
  return xe({
    root: ["root", !n && "padding", r && "dense", s && "subheader"]
  }, bp, o);
}, yp = U("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.root, !n.disablePadding && o.padding, n.dense && o.dense, n.subheader && o.subheader];
  }
})(({
  ownerState: e
}) => u({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), Hs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiList"
  }), {
    children: s,
    className: i,
    component: a = "ul",
    dense: c = !1,
    disablePadding: l = !1,
    subheader: d
  } = r, p = J(r, vp), b = f.useMemo(() => ({
    dense: c
  }), [c]), v = u({}, r, {
    component: a,
    dense: c,
    disablePadding: l
  }), g = gp(v);
  return /* @__PURE__ */ I(fn.Provider, {
    value: b,
    children: /* @__PURE__ */ ke(yp, u({
      as: a,
      className: te(g.root, i),
      ref: n,
      ownerState: v
    }, p, {
      children: [d, s]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Hs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: t.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: t.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: t.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const xp = Hs;
function Lm(e) {
  return fe("MuiListItemIcon", e);
}
const Cp = be("MuiListItemIcon", ["root", "alignItemsFlexStart"]), br = Cp;
function Bm(e) {
  return fe("MuiListItemText", e);
}
const Op = be("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), hr = Op, Ep = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function on(e, o, n) {
  return e === o ? e.firstChild : o && o.nextElementSibling ? o.nextElementSibling : n ? null : e.firstChild;
}
function vr(e, o, n) {
  return e === o ? n ? e.firstChild : e.lastChild : o && o.previousElementSibling ? o.previousElementSibling : n ? null : e.lastChild;
}
function qs(e, o) {
  if (o === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : o.repeating ? n[0] === o.keys[0] : n.indexOf(o.keys.join("")) === 0;
}
function Zt(e, o, n, r, s, i) {
  let a = !1, c = s(e, o, o ? n : !1);
  for (; c; ) {
    if (c === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const l = r ? !1 : c.disabled || c.getAttribute("aria-disabled") === "true";
    if (!c.hasAttribute("tabindex") || !qs(c, i) || l)
      c = s(e, c, n);
    else
      return c.focus(), !0;
  }
  return !1;
}
const Gs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: s = !1,
    autoFocusItem: i = !1,
    children: a,
    className: c,
    disabledItemsFocusable: l = !1,
    disableListWrap: d = !1,
    onKeyDown: p,
    variant: b = "selectedMenu"
  } = o, v = J(o, Ep), g = f.useRef(null), T = f.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  bt(() => {
    s && g.current.focus();
  }, [s]), f.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (h, y) => {
      const E = !g.current.style.width;
      if (h.clientHeight < g.current.clientHeight && E) {
        const w = `${Dr(He(h))}px`;
        g.current.style[y.direction === "rtl" ? "paddingLeft" : "paddingRight"] = w, g.current.style.width = `calc(100% + ${w})`;
      }
      return g.current;
    }
  }), []);
  const O = (h) => {
    const y = g.current, E = h.key, w = He(y).activeElement;
    if (E === "ArrowDown")
      h.preventDefault(), Zt(y, w, d, l, on);
    else if (E === "ArrowUp")
      h.preventDefault(), Zt(y, w, d, l, vr);
    else if (E === "Home")
      h.preventDefault(), Zt(y, null, d, l, on);
    else if (E === "End")
      h.preventDefault(), Zt(y, null, d, l, vr);
    else if (E.length === 1) {
      const R = T.current, $ = E.toLowerCase(), N = performance.now();
      R.keys.length > 0 && (N - R.lastTime > 500 ? (R.keys = [], R.repeating = !0, R.previousKeyMatched = !0) : R.repeating && $ !== R.keys[0] && (R.repeating = !1)), R.lastTime = N, R.keys.push($);
      const A = w && !R.repeating && qs(w, R);
      R.previousKeyMatched && (A || Zt(y, w, !1, l, on, R)) ? h.preventDefault() : R.previousKeyMatched = !1;
    }
    p && p(h);
  }, m = We(g, n);
  let x = -1;
  f.Children.forEach(a, (h, y) => {
    if (!/* @__PURE__ */ f.isValidElement(h)) {
      x === y && (x += 1, x >= a.length && (x = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && po.isFragment(h) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), h.props.disabled || (b === "selectedMenu" && h.props.selected || x === -1) && (x = y), x === y && (h.props.disabled || h.props.muiSkipListHighlight || h.type.muiSkipListHighlight) && (x += 1, x >= a.length && (x = -1));
  });
  const S = f.Children.map(a, (h, y) => {
    if (y === x) {
      const E = {};
      return i && (E.autoFocus = !0), h.props.tabIndex === void 0 && b === "selectedMenu" && (E.tabIndex = 0), /* @__PURE__ */ f.cloneElement(h, E);
    }
    return h;
  });
  return /* @__PURE__ */ I(xp, u({
    role: "menu",
    ref: m,
    className: c,
    onKeyDown: O,
    tabIndex: s ? 0 : -1
  }, v, {
    children: S
  }));
});
process.env.NODE_ENV !== "production" && (Gs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: t.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: t.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: t.node,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: t.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: t.bool,
  /**
   * @ignore
   */
  onKeyDown: t.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: t.oneOf(["menu", "selectedMenu"])
});
const Tp = Gs;
function Sp(e) {
  return fe("MuiPopover", e);
}
const wp = be("MuiPopover", ["root", "paper"]), jm = wp, Rp = ["onEntering"], Pp = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], Ip = ["slotProps"];
function gr(e, o) {
  let n = 0;
  return typeof o == "number" ? n = o : o === "center" ? n = e.height / 2 : o === "bottom" && (n = e.height), n;
}
function yr(e, o) {
  let n = 0;
  return typeof o == "number" ? n = o : o === "center" ? n = e.width / 2 : o === "right" && (n = e.width), n;
}
function xr(e) {
  return [e.horizontal, e.vertical].map((o) => typeof o == "number" ? `${o}px` : o).join(" ");
}
function Ro(e) {
  return typeof e == "function" ? e() : e;
}
const $p = (e) => {
  const {
    classes: o
  } = e;
  return xe({
    root: ["root"],
    paper: ["paper"]
  }, Sp, o);
}, Np = U($s, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, o) => o.root
})({}), Ks = U(Yt, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, o) => o.paper
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
}), Ys = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s, i;
  const a = Oe({
    props: o,
    name: "MuiPopover"
  }), {
    action: c,
    anchorEl: l,
    anchorOrigin: d = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: p,
    anchorReference: b = "anchorEl",
    children: v,
    className: g,
    container: T,
    elevation: O = 8,
    marginThreshold: m = 16,
    open: x,
    PaperProps: S = {},
    slots: h,
    slotProps: y,
    transformOrigin: E = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: w = Zu,
    transitionDuration: R = "auto",
    TransitionProps: {
      onEntering: $
    } = {},
    disableScrollLock: N = !1
  } = a, A = J(a.TransitionProps, Rp), F = J(a, Pp), M = (r = y == null ? void 0 : y.paper) != null ? r : S, D = f.useRef(), B = We(D, M.ref), L = u({}, a, {
    anchorOrigin: d,
    anchorReference: b,
    elevation: O,
    marginThreshold: m,
    externalPaperSlotProps: M,
    transformOrigin: E,
    TransitionComponent: w,
    transitionDuration: R,
    TransitionProps: A
  }), j = $p(L), _ = f.useCallback(() => {
    if (b === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (p || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), p;
    const ie = Ro(l), z = ie && ie.nodeType === 1 ? ie : He(D.current).body, se = z.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const G = z.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && G.top === 0 && G.left === 0 && G.right === 0 && G.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: se.top + gr(se, d.vertical),
      left: se.left + yr(se, d.horizontal)
    };
  }, [l, d.horizontal, d.vertical, p, b]), V = f.useCallback((ie) => ({
    vertical: gr(ie, E.vertical),
    horizontal: yr(ie, E.horizontal)
  }), [E.horizontal, E.vertical]), K = f.useCallback((ie) => {
    const z = {
      width: ie.offsetWidth,
      height: ie.offsetHeight
    }, se = V(z);
    if (b === "none")
      return {
        top: null,
        left: null,
        transformOrigin: xr(se)
      };
    const G = _();
    let $e = G.top - se.vertical, oe = G.left - se.horizontal;
    const De = $e + z.height, Ne = oe + z.width, Te = Ct(Ro(l)), Le = Te.innerHeight - m, Me = Te.innerWidth - m;
    if (m !== null && $e < m) {
      const Re = $e - m;
      $e -= Re, se.vertical += Re;
    } else if (m !== null && De > Le) {
      const Re = De - Le;
      $e -= Re, se.vertical += Re;
    }
    if (process.env.NODE_ENV !== "production" && z.height > Le && z.height && Le && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${z.height - Le}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), m !== null && oe < m) {
      const Re = oe - m;
      oe -= Re, se.horizontal += Re;
    } else if (Ne > Me) {
      const Re = Ne - Me;
      oe -= Re, se.horizontal += Re;
    }
    return {
      top: `${Math.round($e)}px`,
      left: `${Math.round(oe)}px`,
      transformOrigin: xr(se)
    };
  }, [l, b, _, V, m]), [ee, he] = f.useState(x), ve = f.useCallback(() => {
    const ie = D.current;
    if (!ie)
      return;
    const z = K(ie);
    z.top !== null && (ie.style.top = z.top), z.left !== null && (ie.style.left = z.left), ie.style.transformOrigin = z.transformOrigin, he(!0);
  }, [K]);
  f.useEffect(() => (N && window.addEventListener("scroll", ve), () => window.removeEventListener("scroll", ve)), [l, N, ve]);
  const Ce = (ie, z) => {
    $ && $(ie, z), ve();
  }, Q = () => {
    he(!1);
  };
  f.useEffect(() => {
    x && ve();
  }), f.useImperativeHandle(c, () => x ? {
    updatePosition: () => {
      ve();
    }
  } : null, [x, ve]), f.useEffect(() => {
    if (!x)
      return;
    const ie = Fo(() => {
      ve();
    }), z = Ct(l);
    return z.addEventListener("resize", ie), () => {
      ie.clear(), z.removeEventListener("resize", ie);
    };
  }, [l, x, ve]);
  let ne = R;
  R === "auto" && !w.muiSupportAuto && (ne = void 0);
  const q = T || (l ? He(Ro(l)).body : void 0), ue = (s = h == null ? void 0 : h.root) != null ? s : Np, X = (i = h == null ? void 0 : h.paper) != null ? i : Ks, pe = pt({
    elementType: X,
    externalSlotProps: u({}, M, {
      style: ee ? M.style : u({}, M.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: O,
      ref: B
    },
    ownerState: L,
    className: te(j.paper, M == null ? void 0 : M.className)
  }), we = pt({
    elementType: ue,
    externalSlotProps: (y == null ? void 0 : y.root) || {},
    externalForwardedProps: F,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: q,
      open: x
    },
    ownerState: L,
    className: te(j.root, g)
  }), {
    slotProps: ae
  } = we, ce = J(we, Ip);
  return /* @__PURE__ */ I(ue, u({}, ce, !Po(ue) && {
    slotProps: ae,
    disableScrollLock: N
  }, {
    children: /* @__PURE__ */ I(w, u({
      appear: !0,
      in: x,
      onEntering: Ce,
      onExited: Q,
      timeout: ne
    }, A, {
      children: /* @__PURE__ */ I(X, u({}, pe, {
        children: v
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Ys.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Ze,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: yt(t.oneOfType([xt, t.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const o = Ro(e.anchorEl);
      if (o && o.nodeType === 1) {
        const n = o.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${o}\` instead.`].join(`
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
  anchorOrigin: t.shape({
    horizontal: t.oneOfType([t.oneOf(["center", "left", "right"]), t.number]).isRequired,
    vertical: t.oneOfType([t.oneOf(["bottom", "center", "top"]), t.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: t.shape({
    left: t.number.isRequired,
    top: t.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: t.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: t.oneOfType([xt, t.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: t.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: bn,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: t.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: t.func,
  /**
   * If `true`, the component is shown.
   */
  open: t.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: t.shape({
    component: mn
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: t.shape({
    paper: t.oneOfType([t.func, t.object]),
    root: t.oneOfType([t.func, t.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: t.shape({
    paper: t.elementType,
    root: t.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
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
  transformOrigin: t.shape({
    horizontal: t.oneOfType([t.oneOf(["center", "left", "right"]), t.number]).isRequired,
    vertical: t.oneOfType([t.oneOf(["bottom", "center", "top"]), t.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: t.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: t.oneOfType([t.oneOf(["auto"]), t.number, t.shape({
    appear: t.number,
    enter: t.number,
    exit: t.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: t.object
});
const kp = Ys;
function Mp(e) {
  return fe("MuiMenu", e);
}
const Ap = be("MuiMenu", ["root", "paper", "list"]), _m = Ap, Fp = ["onEntering"], Dp = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], Lp = {
  vertical: "top",
  horizontal: "right"
}, Bp = {
  vertical: "top",
  horizontal: "left"
}, jp = (e) => {
  const {
    classes: o
  } = e;
  return xe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Mp, o);
}, _p = U(kp, {
  shouldForwardProp: (e) => ct(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, o) => o.root
})({}), zp = U(Ks, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, o) => o.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Wp = U(Tp, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, o) => o.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Xs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s;
  const i = Oe({
    props: o,
    name: "MuiMenu"
  }), {
    autoFocus: a = !0,
    children: c,
    className: l,
    disableAutoFocusItem: d = !1,
    MenuListProps: p = {},
    onClose: b,
    open: v,
    PaperProps: g = {},
    PopoverClasses: T,
    transitionDuration: O = "auto",
    TransitionProps: {
      onEntering: m
    } = {},
    variant: x = "selectedMenu",
    slots: S = {},
    slotProps: h = {}
  } = i, y = J(i.TransitionProps, Fp), E = J(i, Dp), w = wt(), R = w.direction === "rtl", $ = u({}, i, {
    autoFocus: a,
    disableAutoFocusItem: d,
    MenuListProps: p,
    onEntering: m,
    PaperProps: g,
    transitionDuration: O,
    TransitionProps: y,
    variant: x
  }), N = jp($), A = a && !d && v, F = f.useRef(null), M = (K, ee) => {
    F.current && F.current.adjustStyleForScrollbar(K, w), m && m(K, ee);
  }, D = (K) => {
    K.key === "Tab" && (K.preventDefault(), b && b(K, "tabKeyDown"));
  };
  let B = -1;
  f.Children.map(c, (K, ee) => {
    /* @__PURE__ */ f.isValidElement(K) && (process.env.NODE_ENV !== "production" && po.isFragment(K) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), K.props.disabled || (x === "selectedMenu" && K.props.selected || B === -1) && (B = ee));
  });
  const L = (r = S.paper) != null ? r : zp, j = (s = h.paper) != null ? s : g, _ = pt({
    elementType: S.root,
    externalSlotProps: h.root,
    ownerState: $,
    className: [N.root, l]
  }), V = pt({
    elementType: L,
    externalSlotProps: j,
    ownerState: $,
    className: N.paper
  });
  return /* @__PURE__ */ I(_p, u({
    onClose: b,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: R ? "right" : "left"
    },
    transformOrigin: R ? Lp : Bp,
    slots: {
      paper: L,
      root: S.root
    },
    slotProps: {
      root: _,
      paper: V
    },
    open: v,
    ref: n,
    transitionDuration: O,
    TransitionProps: u({
      onEntering: M
    }, y),
    ownerState: $
  }, E, {
    classes: T,
    children: /* @__PURE__ */ I(Wp, u({
      onKeyDown: D,
      actions: F,
      autoFocus: a && (B === -1 || d),
      autoFocusItem: A,
      variant: x
    }, p, {
      className: te(N.list, p.className),
      children: c
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Xs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: t.oneOfType([xt, t.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: t.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: t.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: t.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: t.func,
  /**
   * If `true`, the component is shown.
   */
  open: t.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: t.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: t.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: t.shape({
    paper: t.oneOfType([t.func, t.object]),
    root: t.oneOfType([t.func, t.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: t.shape({
    paper: t.elementType,
    root: t.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: t.oneOfType([t.oneOf(["auto"]), t.number, t.shape({
    appear: t.number,
    enter: t.number,
    exit: t.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: t.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: t.oneOf(["menu", "selectedMenu"])
});
const Vp = Xs;
function Up(e) {
  return fe("MuiMenuItem", e);
}
const Hp = be("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Qt = Hp, qp = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"], Gp = (e, o) => {
  const {
    ownerState: n
  } = e;
  return [o.root, n.dense && o.dense, n.divider && o.divider, !n.disableGutters && o.gutters];
}, Kp = (e) => {
  const {
    disabled: o,
    dense: n,
    divider: r,
    disableGutters: s,
    selected: i,
    classes: a
  } = e, l = xe({
    root: ["root", n && "dense", o && "disabled", !s && "gutters", r && "divider", i && "selected"]
  }, Up, a);
  return u({}, a, l);
}, Yp = U(Kt, {
  shouldForwardProp: (e) => ct(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Gp
})(({
  theme: e,
  ownerState: o
}) => u({}, e.typography.body1, {
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
}, !o.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, o.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, {
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Qt.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : st(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Qt.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : st(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Qt.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : st(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : st(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Qt.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Qt.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${dr.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${dr.inset}`]: {
    marginLeft: 52
  },
  [`& .${hr.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${hr.inset}`]: {
    paddingLeft: 36
  },
  [`& .${br.root}`]: {
    minWidth: 36
  }
}, !o.dense && {
  [e.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, o.dense && u({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, e.typography.body2, {
  [`& .${br.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), Js = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiMenuItem"
  }), {
    autoFocus: s = !1,
    component: i = "li",
    dense: a = !1,
    divider: c = !1,
    disableGutters: l = !1,
    focusVisibleClassName: d,
    role: p = "menuitem",
    tabIndex: b,
    className: v
  } = r, g = J(r, qp), T = f.useContext(fn), O = f.useMemo(() => ({
    dense: a || T.dense || !1,
    disableGutters: l
  }), [T.dense, a, l]), m = f.useRef(null);
  bt(() => {
    s && (m.current ? m.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [s]);
  const x = u({}, r, {
    dense: O.dense,
    divider: c,
    disableGutters: l
  }), S = Kp(r), h = We(m, n);
  let y;
  return r.disabled || (y = b !== void 0 ? b : -1), /* @__PURE__ */ I(fn.Provider, {
    value: O,
    children: /* @__PURE__ */ I(Yp, u({
      ref: h,
      role: p,
      tabIndex: y,
      component: i,
      focusVisibleClassName: te(S.focusVisible, d),
      className: te(S.root, v)
    }, g, {
      ownerState: x,
      classes: S
    }))
  });
});
process.env.NODE_ENV !== "production" && (Js.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: t.bool,
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: t.bool,
  /**
   * @ignore
   */
  disabled: t.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: t.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: t.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: t.string,
  /**
   * @ignore
   */
  role: t.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * @default 0
   */
  tabIndex: t.number
});
const zm = Js;
function Xp(e) {
  return fe("MuiNativeSelect", e);
}
const Jp = be("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Nn = Jp, Zp = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], Qp = (e) => {
  const {
    classes: o,
    variant: n,
    disabled: r,
    multiple: s,
    open: i,
    error: a
  } = e, c = {
    select: ["select", n, r && "disabled", s && "multiple", a && "error"],
    icon: ["icon", `icon${de(n)}`, i && "iconOpen", r && "disabled"]
  };
  return xe(c, Xp, o);
}, Zs = ({
  ownerState: e,
  theme: o
}) => u({
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
  "&:focus": u({}, o.vars ? {
    backgroundColor: `rgba(${o.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: o.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${Nn.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (o.vars || o).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, e.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, e.variant === "outlined" && {
  borderRadius: (o.vars || o).shape.borderRadius,
  "&:focus": {
    borderRadius: (o.vars || o).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), ef = U("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: ct,
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.select, o[n.variant], n.error && o.error, {
      [`&.${Nn.multiple}`]: o.multiple
    }];
  }
})(Zs), Qs = ({
  ownerState: e,
  theme: o
}) => u({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (o.vars || o).palette.action.active,
  [`&.${Nn.disabled}`]: {
    color: (o.vars || o).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), tf = U("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.icon, n.variant && o[`icon${de(n.variant)}`], n.open && o.iconOpen];
  }
})(Qs), ei = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const {
    className: r,
    disabled: s,
    error: i,
    IconComponent: a,
    inputRef: c,
    variant: l = "standard"
  } = o, d = J(o, Zp), p = u({}, o, {
    disabled: s,
    variant: l,
    error: i
  }), b = Qp(p);
  return /* @__PURE__ */ ke(f.Fragment, {
    children: [/* @__PURE__ */ I(ef, u({
      ownerState: p,
      className: te(b.select, r),
      disabled: s,
      ref: c || n
    }, d)), o.multiple ? null : /* @__PURE__ */ I(tf, {
      as: a,
      ownerState: p,
      className: b.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (ei.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * The CSS class name of the select element.
   */
  className: t.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: t.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: t.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: t.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: Ze,
  /**
   * @ignore
   */
  multiple: t.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: t.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: t.func,
  /**
   * The input value.
   */
  value: t.any,
  /**
   * The variant to use.
   */
  variant: t.oneOf(["standard", "outlined", "filled"])
});
const of = ei;
var Cr;
const nf = ["children", "classes", "className", "label", "notched"], rf = U("fieldset", {
  shouldForwardProp: ct
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
}), sf = U("legend", {
  shouldForwardProp: ct
})(({
  ownerState: e,
  theme: o
}) => u({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !e.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: o.transitions.create("width", {
    duration: 150,
    easing: o.transitions.easing.easeOut
  })
}, e.withLabel && u({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: o.transitions.create("max-width", {
    duration: 50,
    easing: o.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, e.notched && {
  maxWidth: "100%",
  transition: o.transitions.create("max-width", {
    duration: 100,
    easing: o.transitions.easing.easeOut,
    delay: 50
  })
})));
function ti(e) {
  const {
    className: o,
    label: n,
    notched: r
  } = e, s = J(e, nf), i = n != null && n !== "", a = u({}, e, {
    notched: r,
    withLabel: i
  });
  return /* @__PURE__ */ I(rf, u({
    "aria-hidden": !0,
    className: o,
    ownerState: a
  }, s, {
    children: /* @__PURE__ */ I(sf, {
      ownerState: a,
      children: i ? /* @__PURE__ */ I("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Cr || (Cr = /* @__PURE__ */ I("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (ti.propTypes = {
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The label.
   */
  label: t.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: t.bool.isRequired,
  /**
   * @ignore
   */
  style: t.object
});
const af = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], lf = (e) => {
  const {
    classes: o
  } = e, r = xe({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, rd, o);
  return u({}, o, r);
}, cf = U(Wo, {
  shouldForwardProp: (e) => ct(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: _o
})(({
  theme: e,
  ownerState: o
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return u({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${ft.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${ft.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${ft.focused} .${ft.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[o.color].main,
      borderWidth: 2
    },
    [`&.${ft.error} .${ft.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${ft.disabled} .${ft.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, o.startAdornment && {
    paddingLeft: 14
  }, o.endAdornment && {
    paddingRight: 14
  }, o.multiline && u({
    padding: "16.5px 14px"
  }, o.size === "small" && {
    padding: "8.5px 14px"
  }));
}), df = U(ti, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, o) => o.notchedOutline
})(({
  theme: e
}) => {
  const o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : o
  };
}), uf = U(Vo, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: zo
})(({
  theme: e,
  ownerState: o
}) => u({
  padding: "16.5px 14px"
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, o.size === "small" && {
  padding: "8.5px 14px"
}, o.multiline && {
  padding: 0
}, o.startAdornment && {
  paddingLeft: 0
}, o.endAdornment && {
  paddingRight: 0
})), kn = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s, i, a, c;
  const l = Oe({
    props: o,
    name: "MuiOutlinedInput"
  }), {
    components: d = {},
    fullWidth: p = !1,
    inputComponent: b = "input",
    label: v,
    multiline: g = !1,
    notched: T,
    slots: O = {},
    type: m = "text"
  } = l, x = J(l, af), S = lf(l), h = vt(), y = Pt({
    props: l,
    muiFormControl: h,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), E = u({}, l, {
    color: y.color || "primary",
    disabled: y.disabled,
    error: y.error,
    focused: y.focused,
    formControl: h,
    fullWidth: p,
    hiddenLabel: y.hiddenLabel,
    multiline: g,
    size: y.size,
    type: m
  }), w = (r = (s = O.root) != null ? s : d.Root) != null ? r : cf, R = (i = (a = O.input) != null ? a : d.Input) != null ? i : uf;
  return /* @__PURE__ */ I(Rn, u({
    slots: {
      root: w,
      input: R
    },
    renderSuffix: ($) => /* @__PURE__ */ I(df, {
      ownerState: E,
      className: S.notchedOutline,
      label: v != null && v !== "" && y.required ? c || (c = /* @__PURE__ */ ke(f.Fragment, {
        children: [v, " ", "*"]
      })) : v,
      notched: typeof T < "u" ? T : !!($.startAdornment || $.filled || $.focused)
    }),
    fullWidth: p,
    inputComponent: b,
    multiline: g,
    ref: n,
    type: m
  }, x, {
    classes: u({}, S, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (kn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: t.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: t.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: t.oneOfType([t.oneOf(["primary", "secondary"]), t.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: t.shape({
    Input: t.elementType,
    Root: t.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: t.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: t.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: t.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: t.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: t.bool,
  /**
   * The id of the `input` element.
   */
  id: t.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: t.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: t.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Ze,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: t.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: t.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: t.oneOfType([t.number, t.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: t.oneOfType([t.number, t.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: t.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: t.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: t.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: t.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: t.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: t.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: t.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: t.oneOfType([t.number, t.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: t.shape({
    input: t.elementType,
    root: t.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: t.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: t.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: t.any
});
kn.muiName = "Input";
const oi = kn;
function pf(e) {
  return fe("MuiSelect", e);
}
const ff = be("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), eo = ff;
var Or;
const mf = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], bf = U("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${eo.select}`]: o.select
      },
      {
        [`&.${eo.select}`]: o[n.variant]
      },
      {
        [`&.${eo.error}`]: o.error
      },
      {
        [`&.${eo.multiple}`]: o.multiple
      }
    ];
  }
})(Zs, {
  // Win specificity over the input base
  [`&.${eo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), hf = U("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.icon, n.variant && o[`icon${de(n.variant)}`], n.open && o.iconOpen];
  }
})(Qs), vf = U("input", {
  shouldForwardProp: (e) => wi(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, o) => o.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function Er(e, o) {
  return typeof o == "object" && o !== null ? e === o : String(e) === String(o);
}
function gf(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const yf = (e) => {
  const {
    classes: o,
    variant: n,
    disabled: r,
    multiple: s,
    open: i,
    error: a
  } = e, c = {
    select: ["select", n, r && "disabled", s && "multiple", a && "error"],
    icon: ["icon", `icon${de(n)}`, i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return xe(c, pf, o);
}, ni = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r;
  const {
    "aria-describedby": s,
    "aria-label": i,
    autoFocus: a,
    autoWidth: c,
    children: l,
    className: d,
    defaultOpen: p,
    defaultValue: b,
    disabled: v,
    displayEmpty: g,
    error: T = !1,
    IconComponent: O,
    inputRef: m,
    labelId: x,
    MenuProps: S = {},
    multiple: h,
    name: y,
    onBlur: E,
    onChange: w,
    onClose: R,
    onFocus: $,
    onOpen: N,
    open: A,
    readOnly: F,
    renderValue: M,
    SelectDisplayProps: D = {},
    tabIndex: B,
    value: L,
    variant: j = "standard"
  } = o, _ = J(o, mf), [V, K] = Mt({
    controlled: L,
    default: b,
    name: "Select"
  }), [ee, he] = Mt({
    controlled: A,
    default: p,
    name: "Select"
  }), ve = f.useRef(null), Ce = f.useRef(null), [Q, ne] = f.useState(null), {
    current: q
  } = f.useRef(A != null), [ue, X] = f.useState(), pe = We(n, m), we = f.useCallback((Y) => {
    Ce.current = Y, Y && ne(Y);
  }, []), ae = Q == null ? void 0 : Q.parentNode;
  f.useImperativeHandle(pe, () => ({
    focus: () => {
      Ce.current.focus();
    },
    node: ve.current,
    value: V
  }), [V]), f.useEffect(() => {
    p && ee && Q && !q && (X(c ? null : ae.clientWidth), Ce.current.focus());
  }, [Q, c]), f.useEffect(() => {
    a && Ce.current.focus();
  }, [a]), f.useEffect(() => {
    if (!x)
      return;
    const Y = He(Ce.current).getElementById(x);
    if (Y) {
      const k = () => {
        getSelection().isCollapsed && Ce.current.focus();
      };
      return Y.addEventListener("click", k), () => {
        Y.removeEventListener("click", k);
      };
    }
  }, [x]);
  const ce = (Y, k) => {
    Y ? N && N(k) : R && R(k), q || (X(c ? null : ae.clientWidth), he(Y));
  }, ie = (Y) => {
    Y.button === 0 && (Y.preventDefault(), Ce.current.focus(), ce(!0, Y));
  }, z = (Y) => {
    ce(!1, Y);
  }, se = f.Children.toArray(l), G = (Y) => {
    const k = se.find((H) => H.props.value === Y.target.value);
    k !== void 0 && (K(k.props.value), w && w(Y, k));
  }, $e = (Y) => (k) => {
    let H;
    if (k.currentTarget.hasAttribute("tabindex")) {
      if (h) {
        H = Array.isArray(V) ? V.slice() : [];
        const le = V.indexOf(Y.props.value);
        le === -1 ? H.push(Y.props.value) : H.splice(le, 1);
      } else
        H = Y.props.value;
      if (Y.props.onClick && Y.props.onClick(k), V !== H && (K(H), w)) {
        const le = k.nativeEvent || k, me = new le.constructor(le.type, le);
        Object.defineProperty(me, "target", {
          writable: !0,
          value: {
            value: H,
            name: y
          }
        }), w(me, Y);
      }
      h || ce(!1, k);
    }
  }, oe = (Y) => {
    F || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(Y.key) !== -1 && (Y.preventDefault(), ce(!0, Y));
  }, De = Q !== null && ee, Ne = (Y) => {
    !De && E && (Object.defineProperty(Y, "target", {
      writable: !0,
      value: {
        value: V,
        name: y
      }
    }), E(Y));
  };
  delete _["aria-invalid"];
  let Te, Le;
  const Me = [];
  let Re = !1, qe = !1;
  (ko({
    value: V
  }) || g) && (M ? Te = M(V) : Re = !0);
  const Ge = se.map((Y) => {
    if (!/* @__PURE__ */ f.isValidElement(Y))
      return null;
    process.env.NODE_ENV !== "production" && po.isFragment(Y) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let k;
    if (h) {
      if (!Array.isArray(V))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Ir(2));
      k = V.some((H) => Er(H, Y.props.value)), k && Re && Me.push(Y.props.children);
    } else
      k = Er(V, Y.props.value), k && Re && (Le = Y.props.children);
    return k && (qe = !0), /* @__PURE__ */ f.cloneElement(Y, {
      "aria-selected": k ? "true" : "false",
      onClick: $e(Y),
      onKeyUp: (H) => {
        H.key === " " && H.preventDefault(), Y.props.onKeyUp && Y.props.onKeyUp(H);
      },
      role: "option",
      selected: k,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Y.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && f.useEffect(() => {
    if (!qe && !h && V !== "") {
      const Y = se.map((k) => k.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${V}\` for the select ${y ? `(name="${y}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${Y.filter((k) => k != null).map((k) => `\`${k}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [qe, se, h, y, V]), Re && (h ? Me.length === 0 ? Te = null : Te = Me.reduce((Y, k, H) => (Y.push(k), H < Me.length - 1 && Y.push(", "), Y), []) : Te = Le);
  let Ke = ue;
  !c && q && Q && (Ke = ae.clientWidth);
  let re;
  typeof B < "u" ? re = B : re = v ? null : 0;
  const ge = D.id || (y ? `mui-component-select-${y}` : void 0), Be = u({}, o, {
    variant: j,
    value: V,
    open: De,
    error: T
  }), Ye = yf(Be), nt = u({}, S.PaperProps, (r = S.slotProps) == null ? void 0 : r.paper), dt = Do();
  return /* @__PURE__ */ ke(f.Fragment, {
    children: [/* @__PURE__ */ I(bf, u({
      ref: we,
      tabIndex: re,
      role: "combobox",
      "aria-controls": dt,
      "aria-disabled": v ? "true" : void 0,
      "aria-expanded": De ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [x, ge].filter(Boolean).join(" ") || void 0,
      "aria-describedby": s,
      onKeyDown: oe,
      onMouseDown: v || F ? null : ie,
      onBlur: Ne,
      onFocus: $
    }, D, {
      ownerState: Be,
      className: te(D.className, Ye.select, d),
      id: ge,
      children: gf(Te) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Or || (Or = /* @__PURE__ */ I("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Te
    })), /* @__PURE__ */ I(vf, u({
      "aria-invalid": T,
      value: Array.isArray(V) ? V.join(",") : V,
      name: y,
      ref: ve,
      "aria-hidden": !0,
      onChange: G,
      tabIndex: -1,
      disabled: v,
      className: Ye.nativeInput,
      autoFocus: a,
      ownerState: Be
    }, _)), /* @__PURE__ */ I(hf, {
      as: O,
      className: Ye.icon,
      ownerState: Be
    }), /* @__PURE__ */ I(Vp, u({
      id: `menu-${y || ""}`,
      anchorEl: ae,
      open: De,
      onClose: z,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, S, {
      MenuListProps: u({
        "aria-labelledby": x,
        role: "listbox",
        "aria-multiselectable": h ? "true" : void 0,
        disableListWrap: !0,
        id: dt
      }, S.MenuListProps),
      slotProps: u({}, S.slotProps, {
        paper: u({}, nt, {
          style: u({
            minWidth: Ke
          }, nt != null ? nt.style : null)
        })
      }),
      children: Ge
    }))]
  });
});
process.env.NODE_ENV !== "production" && (ni.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": t.string,
  /**
   * @ignore
   */
  "aria-label": t.string,
  /**
   * @ignore
   */
  autoFocus: t.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: t.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * The CSS class name of the select element.
   */
  className: t.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: t.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: t.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: t.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: t.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: t.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: t.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: Ze,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: t.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: t.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: t.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: t.string,
  /**
   * @ignore
   */
  onBlur: t.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: t.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: t.func,
  /**
   * @ignore
   */
  onFocus: t.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: t.func,
  /**
   * If `true`, the component is shown.
   */
  open: t.bool,
  /**
   * @ignore
   */
  readOnly: t.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: t.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: t.object,
  /**
   * @ignore
   */
  tabIndex: t.oneOfType([t.number, t.string]),
  /**
   * @ignore
   */
  type: t.any,
  /**
   * The input value.
   */
  value: t.any,
  /**
   * The variant to use.
   */
  variant: t.oneOf(["standard", "outlined", "filled"])
});
const xf = ni, Cf = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], Of = ["root"], Ef = (e) => {
  const {
    classes: o
  } = e;
  return o;
}, Mn = {
  name: "MuiSelect",
  overridesResolver: (e, o) => o.root,
  shouldForwardProp: (e) => ct(e) && e !== "variant",
  slot: "Root"
}, Tf = U(zs, Mn)(""), Sf = U(oi, Mn)(""), wf = U(As, Mn)(""), An = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    name: "MuiSelect",
    props: o
  }), {
    autoWidth: s = !1,
    children: i,
    classes: a = {},
    className: c,
    defaultOpen: l = !1,
    displayEmpty: d = !1,
    IconComponent: p = Cs,
    id: b,
    input: v,
    inputProps: g,
    label: T,
    labelId: O,
    MenuProps: m,
    multiple: x = !1,
    native: S = !1,
    onClose: h,
    onOpen: y,
    open: E,
    renderValue: w,
    SelectDisplayProps: R,
    variant: $ = "outlined"
  } = r, N = J(r, Cf), A = S ? of : xf, F = vt(), M = Pt({
    props: r,
    muiFormControl: F,
    states: ["variant", "error"]
  }), D = M.variant || $, B = u({}, r, {
    variant: D,
    classes: a
  }), L = Ef(B), j = J(L, Of), _ = v || {
    standard: /* @__PURE__ */ I(Tf, {
      ownerState: B
    }),
    outlined: /* @__PURE__ */ I(Sf, {
      label: T,
      ownerState: B
    }),
    filled: /* @__PURE__ */ I(wf, {
      ownerState: B
    })
  }[D], V = We(n, _.ref);
  return /* @__PURE__ */ I(f.Fragment, {
    children: /* @__PURE__ */ f.cloneElement(_, u({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: A,
      inputProps: u({
        children: i,
        error: M.error,
        IconComponent: p,
        variant: D,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: x
      }, S ? {
        id: b
      } : {
        autoWidth: s,
        defaultOpen: l,
        displayEmpty: d,
        labelId: O,
        MenuProps: m,
        onClose: h,
        onOpen: y,
        open: E,
        renderValue: w,
        SelectDisplayProps: u({
          id: b
        }, R)
      }, g, {
        classes: g ? Mo(j, g.classes) : j
      }, v ? v.props.inputProps : {})
    }, (x && S || d) && D === "outlined" ? {
      notched: !0
    } : {}, {
      ref: V,
      className: te(_.props.className, c, L.root)
    }, !v && {
      variant: D
    }, N))
  });
});
process.env.NODE_ENV !== "production" && (An.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: t.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: t.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: t.any,
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
  displayEmpty: t.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: t.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: t.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: t.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: t.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: t.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: t.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: t.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: t.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: t.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: t.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: t.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: t.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: t.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: t.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: t.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: t.oneOfType([t.oneOf([""]), t.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: t.oneOf(["filled", "outlined", "standard"])
});
An.muiName = "Select";
const Rf = An;
function Pf(e) {
  return fe("MuiTab", e);
}
const If = be("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]), $t = If, $f = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"], Nf = (e) => {
  const {
    classes: o,
    textColor: n,
    fullWidth: r,
    wrapped: s,
    icon: i,
    label: a,
    selected: c,
    disabled: l
  } = e, d = {
    root: ["root", i && a && "labelIcon", `textColor${de(n)}`, r && "fullWidth", s && "wrapped", c && "selected", l && "disabled"],
    iconWrapper: ["iconWrapper"]
  };
  return xe(d, Pf, o);
}, kf = U(Kt, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.root, n.label && n.icon && o.labelIcon, o[`textColor${de(n.textColor)}`], n.fullWidth && o.fullWidth, n.wrapped && o.wrapped];
  }
})(({
  theme: e,
  ownerState: o
}) => u({}, e.typography.button, {
  maxWidth: 360,
  minWidth: 90,
  position: "relative",
  minHeight: 48,
  flexShrink: 0,
  padding: "12px 16px",
  overflow: "hidden",
  whiteSpace: "normal",
  textAlign: "center"
}, o.label && {
  flexDirection: o.iconPosition === "top" || o.iconPosition === "bottom" ? "column" : "row"
}, {
  lineHeight: 1.25
}, o.icon && o.label && {
  minHeight: 72,
  paddingTop: 9,
  paddingBottom: 9,
  [`& > .${$t.iconWrapper}`]: u({}, o.iconPosition === "top" && {
    marginBottom: 6
  }, o.iconPosition === "bottom" && {
    marginTop: 6
  }, o.iconPosition === "start" && {
    marginRight: e.spacing(1)
  }, o.iconPosition === "end" && {
    marginLeft: e.spacing(1)
  })
}, o.textColor === "inherit" && {
  color: "inherit",
  opacity: 0.6,
  // same opacity as theme.palette.text.secondary
  [`&.${$t.selected}`]: {
    opacity: 1
  },
  [`&.${$t.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, o.textColor === "primary" && {
  color: (e.vars || e).palette.text.secondary,
  [`&.${$t.selected}`]: {
    color: (e.vars || e).palette.primary.main
  },
  [`&.${$t.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  }
}, o.textColor === "secondary" && {
  color: (e.vars || e).palette.text.secondary,
  [`&.${$t.selected}`]: {
    color: (e.vars || e).palette.secondary.main
  },
  [`&.${$t.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  }
}, o.fullWidth && {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: 0,
  maxWidth: "none"
}, o.wrapped && {
  fontSize: e.typography.pxToRem(12)
})), ri = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiTab"
  }), {
    className: s,
    disabled: i = !1,
    disableFocusRipple: a = !1,
    // eslint-disable-next-line react/prop-types
    fullWidth: c,
    icon: l,
    iconPosition: d = "top",
    // eslint-disable-next-line react/prop-types
    indicator: p,
    label: b,
    onChange: v,
    onClick: g,
    onFocus: T,
    // eslint-disable-next-line react/prop-types
    selected: O,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: m,
    // eslint-disable-next-line react/prop-types
    textColor: x = "inherit",
    value: S,
    wrapped: h = !1
  } = r, y = J(r, $f), E = u({}, r, {
    disabled: i,
    disableFocusRipple: a,
    selected: O,
    icon: !!l,
    iconPosition: d,
    label: !!b,
    fullWidth: c,
    textColor: x,
    wrapped: h
  }), w = Nf(E), R = l && b && /* @__PURE__ */ f.isValidElement(l) ? /* @__PURE__ */ f.cloneElement(l, {
    className: te(w.iconWrapper, l.props.className)
  }) : l, $ = (A) => {
    !O && v && v(A, S), g && g(A);
  }, N = (A) => {
    m && !O && v && v(A, S), T && T(A);
  };
  return /* @__PURE__ */ ke(kf, u({
    focusRipple: !a,
    className: te(w.root, s),
    ref: n,
    role: "tab",
    "aria-selected": O,
    disabled: i,
    onClick: $,
    onFocus: N,
    ownerState: E,
    tabIndex: O ? 0 : -1
  }, y, {
    children: [d === "top" || d === "start" ? /* @__PURE__ */ ke(f.Fragment, {
      children: [R, b]
    }) : /* @__PURE__ */ ke(f.Fragment, {
      children: [b, R]
    }), p]
  }));
});
process.env.NODE_ENV !== "production" && (ri.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Ii,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: t.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: t.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: t.bool,
  /**
   * The icon to display.
   */
  icon: t.oneOfType([t.element, t.string]),
  /**
   * The position of the icon relative to the label.
   * @default 'top'
   */
  iconPosition: t.oneOf(["bottom", "end", "start", "top"]),
  /**
   * The label element.
   */
  label: t.node,
  /**
   * @ignore
   */
  onChange: t.func,
  /**
   * @ignore
   */
  onClick: t.func,
  /**
   * @ignore
   */
  onFocus: t.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: t.any,
  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   * @default false
   */
  wrapped: t.bool
});
const Wm = ri, Mf = Dt(/* @__PURE__ */ I("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), Af = Dt(/* @__PURE__ */ I("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");
function Ff(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function Df(e, o, n, r = {}, s = () => {
}) {
  const {
    ease: i = Ff,
    duration: a = 300
    // standard
  } = r;
  let c = null;
  const l = o[e];
  let d = !1;
  const p = () => {
    d = !0;
  }, b = (v) => {
    if (d) {
      s(new Error("Animation cancelled"));
      return;
    }
    c === null && (c = v);
    const g = Math.min(1, (v - c) / a);
    if (o[e] = i(g) * (n - l) + l, g >= 1) {
      requestAnimationFrame(() => {
        s(null);
      });
      return;
    }
    requestAnimationFrame(b);
  };
  return l === n ? (s(new Error("Element already at target position")), p) : (requestAnimationFrame(b), p);
}
const Lf = ["onChange"], Bf = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function si(e) {
  const {
    onChange: o
  } = e, n = J(e, Lf), r = f.useRef(), s = f.useRef(null), i = () => {
    r.current = s.current.offsetHeight - s.current.clientHeight;
  };
  return bt(() => {
    const a = Fo(() => {
      const l = r.current;
      i(), l !== r.current && o(r.current);
    }), c = Ct(s.current);
    return c.addEventListener("resize", a), () => {
      a.clear(), c.removeEventListener("resize", a);
    };
  }, [o]), f.useEffect(() => {
    i(), o(r.current);
  }, [o]), /* @__PURE__ */ I("div", u({
    style: Bf,
    ref: s
  }, n));
}
process.env.NODE_ENV !== "production" && (si.propTypes = {
  onChange: t.func.isRequired
});
function jf(e) {
  return fe("MuiTabScrollButton", e);
}
const _f = be("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), zf = _f, Wf = ["className", "slots", "slotProps", "direction", "orientation", "disabled"], Vf = (e) => {
  const {
    classes: o,
    orientation: n,
    disabled: r
  } = e;
  return xe({
    root: ["root", n, r && "disabled"]
  }, jf, o);
}, Uf = U(Kt, {
  name: "MuiTabScrollButton",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.root, n.orientation && o[n.orientation]];
  }
})(({
  ownerState: e
}) => u({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${zf.disabled}`]: {
    opacity: 0
  }
}, e.orientation === "vertical" && {
  width: "100%",
  height: 40,
  "& svg": {
    transform: `rotate(${e.isRtl ? -90 : 90}deg)`
  }
})), ii = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s;
  const i = Oe({
    props: o,
    name: "MuiTabScrollButton"
  }), {
    className: a,
    slots: c = {},
    slotProps: l = {},
    direction: d
  } = i, p = J(i, Wf), v = wt().direction === "rtl", g = u({
    isRtl: v
  }, i), T = Vf(g), O = (r = c.StartScrollButtonIcon) != null ? r : Mf, m = (s = c.EndScrollButtonIcon) != null ? s : Af, x = pt({
    elementType: O,
    externalSlotProps: l.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: g
  }), S = pt({
    elementType: m,
    externalSlotProps: l.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: g
  });
  return /* @__PURE__ */ I(Uf, u({
    component: "div",
    className: te(T.root, a),
    ref: n,
    role: null,
    ownerState: g,
    tabIndex: null
  }, p, {
    children: d === "left" ? /* @__PURE__ */ I(O, u({}, x)) : /* @__PURE__ */ I(m, u({}, S))
  }));
});
process.env.NODE_ENV !== "production" && (ii.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The direction the button should indicate.
   */
  direction: t.oneOf(["left", "right"]).isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: t.bool,
  /**
   * The component orientation (layout flow direction).
   */
  orientation: t.oneOf(["horizontal", "vertical"]).isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps: t.shape({
    endScrollButtonIcon: t.oneOfType([t.func, t.object]),
    startScrollButtonIcon: t.oneOfType([t.func, t.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: t.shape({
    EndScrollButtonIcon: t.elementType,
    StartScrollButtonIcon: t.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const Hf = ii;
function qf(e) {
  return fe("MuiTabs", e);
}
const Gf = be("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), nn = Gf, Kf = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"], Tr = (e, o) => e === o ? e.firstChild : o && o.nextElementSibling ? o.nextElementSibling : e.firstChild, Sr = (e, o) => e === o ? e.lastChild : o && o.previousElementSibling ? o.previousElementSibling : e.lastChild, To = (e, o, n) => {
  let r = !1, s = n(e, o);
  for (; s; ) {
    if (s === e.firstChild) {
      if (r)
        return;
      r = !0;
    }
    const i = s.disabled || s.getAttribute("aria-disabled") === "true";
    if (!s.hasAttribute("tabindex") || i)
      s = n(e, s);
    else {
      s.focus();
      return;
    }
  }
}, Yf = (e) => {
  const {
    vertical: o,
    fixed: n,
    hideScrollbar: r,
    scrollableX: s,
    scrollableY: i,
    centered: a,
    scrollButtonsHideMobile: c,
    classes: l
  } = e;
  return xe({
    root: ["root", o && "vertical"],
    scroller: ["scroller", n && "fixed", r && "hideScrollbar", s && "scrollableX", i && "scrollableY"],
    flexContainer: ["flexContainer", o && "flexContainerVertical", a && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", c && "scrollButtonsHideMobile"],
    scrollableX: [s && "scrollableX"],
    hideScrollbar: [r && "hideScrollbar"]
  }, qf, l);
}, Xf = U("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${nn.scrollButtons}`]: o.scrollButtons
    }, {
      [`& .${nn.scrollButtons}`]: n.scrollButtonsHideMobile && o.scrollButtonsHideMobile
    }, o.root, n.vertical && o.vertical];
  }
})(({
  ownerState: e,
  theme: o
}) => u({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex"
}, e.vertical && {
  flexDirection: "column"
}, e.scrollButtonsHideMobile && {
  [`& .${nn.scrollButtons}`]: {
    [o.breakpoints.down("sm")]: {
      display: "none"
    }
  }
})), Jf = U("div", {
  name: "MuiTabs",
  slot: "Scroller",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.scroller, n.fixed && o.fixed, n.hideScrollbar && o.hideScrollbar, n.scrollableX && o.scrollableX, n.scrollableY && o.scrollableY];
  }
})(({
  ownerState: e
}) => u({
  position: "relative",
  display: "inline-block",
  flex: "1 1 auto",
  whiteSpace: "nowrap"
}, e.fixed && {
  overflowX: "hidden",
  width: "100%"
}, e.hideScrollbar && {
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}, e.scrollableX && {
  overflowX: "auto",
  overflowY: "hidden"
}, e.scrollableY && {
  overflowY: "auto",
  overflowX: "hidden"
})), Zf = U("div", {
  name: "MuiTabs",
  slot: "FlexContainer",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.flexContainer, n.vertical && o.flexContainerVertical, n.centered && o.centered];
  }
})(({
  ownerState: e
}) => u({
  display: "flex"
}, e.vertical && {
  flexDirection: "column"
}, e.centered && {
  justifyContent: "center"
})), Qf = U("span", {
  name: "MuiTabs",
  slot: "Indicator",
  overridesResolver: (e, o) => o.indicator
})(({
  ownerState: e,
  theme: o
}) => u({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  transition: o.transitions.create()
}, e.indicatorColor === "primary" && {
  backgroundColor: (o.vars || o).palette.primary.main
}, e.indicatorColor === "secondary" && {
  backgroundColor: (o.vars || o).palette.secondary.main
}, e.vertical && {
  height: "100%",
  width: 2,
  right: 0
})), em = U(si)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), wr = {};
let Rr = !1;
const ai = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiTabs"
  }), s = wt(), i = s.direction === "rtl", {
    "aria-label": a,
    "aria-labelledby": c,
    action: l,
    centered: d = !1,
    children: p,
    className: b,
    component: v = "div",
    allowScrollButtonsMobile: g = !1,
    indicatorColor: T = "primary",
    onChange: O,
    orientation: m = "horizontal",
    ScrollButtonComponent: x = Hf,
    scrollButtons: S = "auto",
    selectionFollowsFocus: h,
    slots: y = {},
    slotProps: E = {},
    TabIndicatorProps: w = {},
    TabScrollButtonProps: R = {},
    textColor: $ = "primary",
    value: N,
    variant: A = "standard",
    visibleScrollbar: F = !1
  } = r, M = J(r, Kf), D = A === "scrollable", B = m === "vertical", L = B ? "scrollTop" : "scrollLeft", j = B ? "top" : "left", _ = B ? "bottom" : "right", V = B ? "clientHeight" : "clientWidth", K = B ? "height" : "width", ee = u({}, r, {
    component: v,
    allowScrollButtonsMobile: g,
    indicatorColor: T,
    orientation: m,
    vertical: B,
    scrollButtons: S,
    textColor: $,
    variant: A,
    visibleScrollbar: F,
    fixed: !D,
    hideScrollbar: D && !F,
    scrollableX: D && !B,
    scrollableY: D && B,
    centered: d && !D,
    scrollButtonsHideMobile: !g
  }), he = Yf(ee), ve = pt({
    elementType: y.StartScrollButtonIcon,
    externalSlotProps: E.startScrollButtonIcon,
    ownerState: ee
  }), Ce = pt({
    elementType: y.EndScrollButtonIcon,
    externalSlotProps: E.endScrollButtonIcon,
    ownerState: ee
  });
  process.env.NODE_ENV !== "production" && d && D && console.error('MUI: You can not use the `centered={true}` and `variant="scrollable"` properties at the same time on a `Tabs` component.');
  const [Q, ne] = f.useState(!1), [q, ue] = f.useState(wr), [X, pe] = f.useState(!1), [we, ae] = f.useState(!1), [ce, ie] = f.useState(!1), [z, se] = f.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), G = /* @__PURE__ */ new Map(), $e = f.useRef(null), oe = f.useRef(null), De = () => {
    const k = $e.current;
    let H;
    if (k) {
      const me = k.getBoundingClientRect();
      H = {
        clientWidth: k.clientWidth,
        scrollLeft: k.scrollLeft,
        scrollTop: k.scrollTop,
        scrollLeftNormalized: Vi(k, s.direction),
        scrollWidth: k.scrollWidth,
        top: me.top,
        bottom: me.bottom,
        left: me.left,
        right: me.right
      };
    }
    let le;
    if (k && N !== !1) {
      const me = oe.current.children;
      if (me.length > 0) {
        const Ee = me[G.get(N)];
        process.env.NODE_ENV !== "production" && (Ee || console.error(["MUI: The `value` provided to the Tabs component is invalid.", `None of the Tabs' children match with "${N}".`, G.keys ? `You can provide one of the following values: ${Array.from(G.keys()).join(", ")}.` : null].join(`
`))), le = Ee ? Ee.getBoundingClientRect() : null, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && !Rr && le && le.width === 0 && le.height === 0 && // if the whole Tabs component is hidden, don't warn
        H.clientWidth !== 0 && (H = null, console.error(["MUI: The `value` provided to the Tabs component is invalid.", `The Tab with this \`value\` ("${N}") is not part of the document layout.`, "Make sure the tab item is present in the document or that it's not `display: none`."].join(`
`)), Rr = !0);
      }
    }
    return {
      tabsMeta: H,
      tabMeta: le
    };
  }, Ne = gt(() => {
    const {
      tabsMeta: k,
      tabMeta: H
    } = De();
    let le = 0, me;
    if (B)
      me = "top", H && k && (le = H.top - k.top + k.scrollTop);
    else if (me = i ? "right" : "left", H && k) {
      const Fe = i ? k.scrollLeftNormalized + k.clientWidth - k.scrollWidth : k.scrollLeft;
      le = (i ? -1 : 1) * (H[me] - k[me] + Fe);
    }
    const Ee = {
      [me]: le,
      // May be wrong until the font is loaded.
      [K]: H ? H[K] : 0
    };
    if (isNaN(q[me]) || isNaN(q[K]))
      ue(Ee);
    else {
      const Fe = Math.abs(q[me] - Ee[me]), je = Math.abs(q[K] - Ee[K]);
      (Fe >= 1 || je >= 1) && ue(Ee);
    }
  }), Te = (k, {
    animation: H = !0
  } = {}) => {
    H ? Df(L, $e.current, k, {
      duration: s.transitions.duration.standard
    }) : $e.current[L] = k;
  }, Le = (k) => {
    let H = $e.current[L];
    B ? H += k : (H += k * (i ? -1 : 1), H *= i && Lr() === "reverse" ? -1 : 1), Te(H);
  }, Me = () => {
    const k = $e.current[V];
    let H = 0;
    const le = Array.from(oe.current.children);
    for (let me = 0; me < le.length; me += 1) {
      const Ee = le[me];
      if (H + Ee[V] > k) {
        me === 0 && (H = k);
        break;
      }
      H += Ee[V];
    }
    return H;
  }, Re = () => {
    Le(-1 * Me());
  }, qe = () => {
    Le(Me());
  }, Ge = f.useCallback((k) => {
    se({
      overflow: null,
      scrollbarWidth: k
    });
  }, []), Ke = () => {
    const k = {};
    k.scrollbarSizeListener = D ? /* @__PURE__ */ I(em, {
      onChange: Ge,
      className: te(he.scrollableX, he.hideScrollbar)
    }) : null;
    const le = D && (S === "auto" && (X || we) || S === !0);
    return k.scrollButtonStart = le ? /* @__PURE__ */ I(x, u({
      slots: {
        StartScrollButtonIcon: y.StartScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: ve
      },
      orientation: m,
      direction: i ? "right" : "left",
      onClick: Re,
      disabled: !X
    }, R, {
      className: te(he.scrollButtons, R.className)
    })) : null, k.scrollButtonEnd = le ? /* @__PURE__ */ I(x, u({
      slots: {
        EndScrollButtonIcon: y.EndScrollButtonIcon
      },
      slotProps: {
        endScrollButtonIcon: Ce
      },
      orientation: m,
      direction: i ? "left" : "right",
      onClick: qe,
      disabled: !we
    }, R, {
      className: te(he.scrollButtons, R.className)
    })) : null, k;
  }, re = gt((k) => {
    const {
      tabsMeta: H,
      tabMeta: le
    } = De();
    if (!(!le || !H)) {
      if (le[j] < H[j]) {
        const me = H[L] + (le[j] - H[j]);
        Te(me, {
          animation: k
        });
      } else if (le[_] > H[_]) {
        const me = H[L] + (le[_] - H[_]);
        Te(me, {
          animation: k
        });
      }
    }
  }), ge = gt(() => {
    D && S !== !1 && ie(!ce);
  });
  f.useEffect(() => {
    const k = Fo(() => {
      $e.current && Ne();
    });
    let H;
    const le = (Fe) => {
      Fe.forEach((je) => {
        je.removedNodes.forEach((rt) => {
          var Ve;
          (Ve = H) == null || Ve.unobserve(rt);
        }), je.addedNodes.forEach((rt) => {
          var Ve;
          (Ve = H) == null || Ve.observe(rt);
        });
      }), k(), ge();
    }, me = Ct($e.current);
    me.addEventListener("resize", k);
    let Ee;
    return typeof ResizeObserver < "u" && (H = new ResizeObserver(k), Array.from(oe.current.children).forEach((Fe) => {
      H.observe(Fe);
    })), typeof MutationObserver < "u" && (Ee = new MutationObserver(le), Ee.observe(oe.current, {
      childList: !0
    })), () => {
      var Fe, je;
      k.clear(), me.removeEventListener("resize", k), (Fe = Ee) == null || Fe.disconnect(), (je = H) == null || je.disconnect();
    };
  }, [Ne, ge]), f.useEffect(() => {
    const k = Array.from(oe.current.children), H = k.length;
    if (typeof IntersectionObserver < "u" && H > 0 && D && S !== !1) {
      const le = k[0], me = k[H - 1], Ee = {
        root: $e.current,
        threshold: 0.99
      }, Fe = (Tt) => {
        pe(!Tt[0].isIntersecting);
      }, je = new IntersectionObserver(Fe, Ee);
      je.observe(le);
      const rt = (Tt) => {
        ae(!Tt[0].isIntersecting);
      }, Ve = new IntersectionObserver(rt, Ee);
      return Ve.observe(me), () => {
        je.disconnect(), Ve.disconnect();
      };
    }
  }, [D, S, ce, p == null ? void 0 : p.length]), f.useEffect(() => {
    ne(!0);
  }, []), f.useEffect(() => {
    Ne();
  }), f.useEffect(() => {
    re(wr !== q);
  }, [re, q]), f.useImperativeHandle(l, () => ({
    updateIndicator: Ne,
    updateScrollButtons: ge
  }), [Ne, ge]);
  const Be = /* @__PURE__ */ I(Qf, u({}, w, {
    className: te(he.indicator, w.className),
    ownerState: ee,
    style: u({}, q, w.style)
  }));
  let Ye = 0;
  const nt = f.Children.map(p, (k) => {
    if (!/* @__PURE__ */ f.isValidElement(k))
      return null;
    process.env.NODE_ENV !== "production" && po.isFragment(k) && console.error(["MUI: The Tabs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    const H = k.props.value === void 0 ? Ye : k.props.value;
    G.set(H, Ye);
    const le = H === N;
    return Ye += 1, /* @__PURE__ */ f.cloneElement(k, u({
      fullWidth: A === "fullWidth",
      indicator: le && !Q && Be,
      selected: le,
      selectionFollowsFocus: h,
      onChange: O,
      textColor: $,
      value: H
    }, Ye === 1 && N === !1 && !k.props.tabIndex ? {
      tabIndex: 0
    } : {}));
  }), dt = (k) => {
    const H = oe.current, le = He(H).activeElement;
    if (le.getAttribute("role") !== "tab")
      return;
    let Ee = m === "horizontal" ? "ArrowLeft" : "ArrowUp", Fe = m === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (m === "horizontal" && i && (Ee = "ArrowRight", Fe = "ArrowLeft"), k.key) {
      case Ee:
        k.preventDefault(), To(H, le, Sr);
        break;
      case Fe:
        k.preventDefault(), To(H, le, Tr);
        break;
      case "Home":
        k.preventDefault(), To(H, null, Tr);
        break;
      case "End":
        k.preventDefault(), To(H, null, Sr);
        break;
    }
  }, Y = Ke();
  return /* @__PURE__ */ ke(Xf, u({
    className: te(he.root, b),
    ownerState: ee,
    ref: n,
    as: v
  }, M, {
    children: [Y.scrollButtonStart, Y.scrollbarSizeListener, /* @__PURE__ */ ke(Jf, {
      className: he.scroller,
      ownerState: ee,
      style: {
        overflow: z.overflow,
        [B ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: F ? void 0 : -z.scrollbarWidth
      },
      ref: $e,
      children: [/* @__PURE__ */ I(Zf, {
        "aria-label": a,
        "aria-labelledby": c,
        "aria-orientation": m === "vertical" ? "vertical" : null,
        className: he.flexContainer,
        ownerState: ee,
        onKeyDown: dt,
        ref: oe,
        role: "tablist",
        children: nt
      }), Q && Be]
    }), Y.scrollButtonEnd]
  }));
});
process.env.NODE_ENV !== "production" && (ai.propTypes = {
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
  action: Ze,
  /**
   * If `true`, the scroll buttons aren't forced hidden on mobile.
   * By default the scroll buttons are hidden on mobile and takes precedence over `scrollButtons`.
   * @default false
   */
  allowScrollButtonsMobile: t.bool,
  /**
   * The label for the Tabs as a string.
   */
  "aria-label": t.string,
  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  "aria-labelledby": t.string,
  /**
   * If `true`, the tabs are centered.
   * This prop is intended for large views.
   * @default false
   */
  centered: t.bool,
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * Determines the color of the indicator.
   * @default 'primary'
   */
  indicatorColor: t.oneOfType([t.oneOf(["primary", "secondary"]), t.string]),
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {any} value We default to the index of the child (number)
   */
  onChange: t.func,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: t.oneOf(["horizontal", "vertical"]),
  /**
   * The component used to render the scroll buttons.
   * @default TabScrollButton
   */
  ScrollButtonComponent: t.elementType,
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
  scrollButtons: t.oneOf(["auto", !1, !0]),
  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: t.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps: t.shape({
    endScrollButtonIcon: t.oneOfType([t.func, t.object]),
    startScrollButtonIcon: t.oneOfType([t.func, t.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: t.shape({
    EndScrollButtonIcon: t.elementType,
    StartScrollButtonIcon: t.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * Props applied to the tab indicator element.
   * @default  {}
   */
  TabIndicatorProps: t.object,
  /**
   * Props applied to the [`TabScrollButton`](/material-ui/api/tab-scroll-button/) element.
   * @default {}
   */
  TabScrollButtonProps: t.object,
  /**
   * Determines the color of the `Tab`.
   * @default 'primary'
   */
  textColor: t.oneOf(["inherit", "primary", "secondary"]),
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this prop to `false`.
   */
  value: t.any,
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
  variant: t.oneOf(["fullWidth", "scrollable", "standard"]),
  /**
   * If `true`, the scrollbar is visible. It can be useful when displaying
   * a long vertical list of tabs.
   * @default false
   */
  visibleScrollbar: t.bool
});
const Vm = ai;
function tm(e) {
  return fe("MuiTextField", e);
}
const om = be("MuiTextField", ["root"]), Um = om, nm = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], rm = {
  standard: zs,
  filled: As,
  outlined: oi
}, sm = (e) => {
  const {
    classes: o
  } = e;
  return xe({
    root: ["root"]
  }, tm, o);
}, im = U(Tu, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, o) => o.root
})({}), li = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiTextField"
  }), {
    autoComplete: s,
    autoFocus: i = !1,
    children: a,
    className: c,
    color: l = "primary",
    defaultValue: d,
    disabled: p = !1,
    error: b = !1,
    FormHelperTextProps: v,
    fullWidth: g = !1,
    helperText: T,
    id: O,
    InputLabelProps: m,
    inputProps: x,
    InputProps: S,
    inputRef: h,
    label: y,
    maxRows: E,
    minRows: w,
    multiline: R = !1,
    name: $,
    onBlur: N,
    onChange: A,
    onFocus: F,
    placeholder: M,
    required: D = !1,
    rows: B,
    select: L = !1,
    SelectProps: j,
    type: _,
    value: V,
    variant: K = "outlined"
  } = r, ee = J(r, nm), he = u({}, r, {
    autoFocus: i,
    color: l,
    disabled: p,
    error: b,
    fullWidth: g,
    multiline: R,
    required: D,
    select: L,
    variant: K
  }), ve = sm(he);
  process.env.NODE_ENV !== "production" && L && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const Ce = {};
  K === "outlined" && (m && typeof m.shrink < "u" && (Ce.notched = m.shrink), Ce.label = y), L && ((!j || !j.native) && (Ce.id = void 0), Ce["aria-describedby"] = void 0);
  const Q = Do(O), ne = T && Q ? `${Q}-helper-text` : void 0, q = y && Q ? `${Q}-label` : void 0, ue = rm[K], X = /* @__PURE__ */ I(ue, u({
    "aria-describedby": ne,
    autoComplete: s,
    autoFocus: i,
    defaultValue: d,
    fullWidth: g,
    multiline: R,
    name: $,
    rows: B,
    maxRows: E,
    minRows: w,
    type: _,
    value: V,
    id: Q,
    inputRef: h,
    onBlur: N,
    onChange: A,
    onFocus: F,
    placeholder: M,
    inputProps: x
  }, Ce, S));
  return /* @__PURE__ */ ke(im, u({
    className: te(ve.root, c),
    disabled: p,
    error: b,
    fullWidth: g,
    ref: n,
    required: D,
    color: l,
    variant: K,
    ownerState: he
  }, ee, {
    children: [y != null && y !== "" && /* @__PURE__ */ I(mp, u({
      htmlFor: Q,
      id: q
    }, m, {
      children: y
    })), L ? /* @__PURE__ */ I(Rf, u({
      "aria-describedby": ne,
      id: Q,
      labelId: q,
      value: V,
      input: X
    }, j, {
      children: a
    })) : X, T && /* @__PURE__ */ I(Wu, u({
      id: ne
    }, v, {
      children: T
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (li.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: t.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: t.bool,
  /**
   * @ignore
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: t.oneOfType([t.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), t.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: t.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: t.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: t.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: t.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: t.bool,
  /**
   * The helper text content.
   */
  helperText: t.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: t.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: t.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: t.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: t.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Ze,
  /**
   * The label content.
   */
  label: t.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: t.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: t.oneOfType([t.number, t.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: t.oneOfType([t.number, t.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: t.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: t.string,
  /**
   * @ignore
   */
  onBlur: t.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: t.func,
  /**
   * @ignore
   */
  onFocus: t.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: t.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: t.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: t.oneOfType([t.number, t.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: t.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: t.object,
  /**
   * The size of the component.
   */
  size: t.oneOfType([t.oneOf(["medium", "small"]), t.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: t.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: t.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: t.oneOf(["filled", "outlined", "standard"])
});
const Hm = li;
export {
  Zu as $,
  Om as A,
  _r as B,
  Tm as C,
  wm as D,
  Vt as E,
  Nm as F,
  ys as G,
  xt as H,
  Am as I,
  $s as J,
  Po as K,
  fn as L,
  zm as M,
  Lm as N,
  hr as O,
  Yt as P,
  Bm as Q,
  vt as R,
  Pt as S,
  Hm as T,
  of as U,
  Xp as V,
  Cs as W,
  zs as X,
  Dd as Y,
  zn as Z,
  Do as _,
  vm as a,
  np as a$,
  vs as a0,
  Ur as a1,
  Af as a2,
  Mf as a3,
  Rf as a4,
  Rn as a5,
  ws as a6,
  Ts as a7,
  As as a8,
  Tu as a9,
  Qo as aA,
  _d as aB,
  bm as aC,
  aa as aD,
  en as aE,
  eu as aF,
  Rm as aG,
  cu as aH,
  dr as aI,
  tt as aJ,
  id as aK,
  $m as aL,
  yu as aM,
  no as aN,
  wu as aO,
  km as aP,
  ku as aQ,
  ur as aR,
  Lu as aS,
  ao as aT,
  Gu as aU,
  Vu as aV,
  kc as aW,
  $c as aX,
  St as aY,
  od as aZ,
  fr as a_,
  Wu as aa,
  Yu as ab,
  mp as ac,
  xp as ad,
  Yc as ae,
  Vp as af,
  Tp as ag,
  oi as ah,
  kp as ai,
  lo as aj,
  Su as ak,
  Hf as al,
  us as am,
  Ic as an,
  Io as ao,
  Co as ap,
  Ra as aq,
  gm as ar,
  ka as as,
  Wt as at,
  La as au,
  wc as av,
  ye as aw,
  ld as ax,
  Em as ay,
  wd as az,
  xm as b,
  et as b0,
  Jc as b1,
  Fm as b2,
  cp as b3,
  Dm as b4,
  bp as b5,
  br as b6,
  Cm as b7,
  Uc as b8,
  _m as b9,
  tm as bA,
  Mp as ba,
  Qt as bb,
  Up as bc,
  rl as bd,
  Sm as be,
  Kd as bf,
  Nn as bg,
  ft as bh,
  rd as bi,
  hm as bj,
  ba as bk,
  jm as bl,
  gr as bm,
  yr as bn,
  Np as bo,
  Ks as bp,
  Sp as bq,
  eo as br,
  pf as bs,
  $t as bt,
  Pf as bu,
  nn as bv,
  qf as bw,
  zf as bx,
  jf as by,
  Um as bz,
  ym as c,
  Vm as d,
  Wm as e,
  ma as f,
  Mm as g,
  Pm as h,
  Xo as i,
  Ao as j,
  Mt as k,
  qr as l,
  wa as m,
  fs as n,
  He as o,
  Dc as p,
  pt as q,
  po as r,
  _i as s,
  bn as t,
  Hi as u,
  ou as v,
  Im as w,
  Fo as x,
  Ct as y,
  hn as z
};
