import { u as di, G as pi, P as t, A as fi, b as J, s as mi, _ as d, k as $r, j as de, a as bi, i as hi, B as Bn, D as Xo, E as vi, h as Do, F as gi, e as yi, g as fe, H as jn, I as xi, x as it, J as Ei, T as Oi, K as Nr } from "./createTheme-9d913e0e.js";
import * as f from "react";
import eo, { createElement as Ci } from "react";
import { c as te, g as be } from "./Box-33250a7c.js";
import { g as Ti, b as wi, s as H, u as Oe, c as Si, d as Ri, r as nt, e as Pi } from "./styled-c80c7b02.js";
import { e as ht, f as xe, _ as Ii, g as kr, u as Mr, h as ze, i as bn, j as Kt, k as vt, s as sn, l as Et, r as Ze, m as Lt, C as $i, T as an, n as Ni } from "./TableRow-2b4ac02e.js";
import { jsx as I, jsxs as ke } from "react/jsx-runtime";
import { u as Ct, g as _n, e as Ar } from "./getOverlayAlpha-1f643798.js";
import { R as Eo, r as ki } from "./theme-dd41183d.js";
function Fr({
  styles: e,
  themeId: o,
  defaultTheme: n = {}
}) {
  const r = di(n), s = typeof e == "function" ? e(o && r[o] || r) : e;
  return /* @__PURE__ */ I(pi, {
    styles: s
  });
}
process.env.NODE_ENV !== "production" && (Fr.propTypes = {
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
const Mi = ["ownerState"], Ai = ["variants"], Fi = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Di(e) {
  return Object.keys(e).length === 0;
}
function Li(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Jo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Bi = $r(), zn = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Oo({
  defaultTheme: e,
  theme: o,
  themeId: n
}) {
  return Di(o) ? e : o[n] || o;
}
function ji(e) {
  return e ? (o, n) => n[e] : null;
}
function Po(e, o) {
  let {
    ownerState: n
  } = o, r = J(o, Mi);
  const s = typeof e == "function" ? e(d({
    ownerState: n
  }, r)) : e;
  if (Array.isArray(s))
    return s.flatMap((i) => Po(i, d({
      ownerState: n
    }, r)));
  if (s && typeof s == "object" && Array.isArray(s.variants)) {
    const {
      variants: i = []
    } = s;
    let c = J(s, Ai);
    return i.forEach((l) => {
      let u = !0;
      typeof l.props == "function" ? u = l.props(d({
        ownerState: n
      }, r, n)) : Object.keys(l.props).forEach((p) => {
        (n == null ? void 0 : n[p]) !== l.props[p] && r[p] !== l.props[p] && (u = !1);
      }), u && (Array.isArray(c) || (c = [c]), c.push(typeof l.style == "function" ? l.style(d({
        ownerState: n
      }, r, n)) : l.style));
    }), c;
  }
  return s;
}
function _i(e = {}) {
  const {
    themeId: o,
    defaultTheme: n = Bi,
    rootShouldForwardProp: r = Jo,
    slotShouldForwardProp: s = Jo
  } = e, i = (a) => bi(d({}, a, {
    theme: Oo(d({}, a, {
      defaultTheme: n,
      themeId: o
    }))
  }));
  return i.__mui_systemSx = !0, (a, c = {}) => {
    fi(a, (x) => x.filter((R) => !(R != null && R.__mui_systemSx)));
    const {
      name: l,
      slot: u,
      skipVariantsResolver: p,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: v = ji(zn(u))
    } = c, g = J(c, Fi), T = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), E = h || !1;
    let m;
    process.env.NODE_ENV !== "production" && l && (m = `${l}-${zn(u || "Root")}`);
    let O = Jo;
    u === "Root" || u === "root" ? O = r : u ? O = s : Li(a) && (O = void 0);
    const w = mi(a, d({
      shouldForwardProp: O,
      label: m
    }, g)), b = (x) => typeof x == "function" && x.__emotion_real !== x || hi(x) ? (R) => Po(x, d({}, R, {
      theme: Oo({
        theme: R.theme,
        defaultTheme: n,
        themeId: o
      })
    })) : x, y = (x, ...R) => {
      let S = b(x);
      const k = R ? R.map(b) : [];
      l && v && k.push((D) => {
        const F = Oo(d({}, D, {
          defaultTheme: n,
          themeId: o
        }));
        if (!F.components || !F.components[l] || !F.components[l].styleOverrides)
          return null;
        const L = F.components[l].styleOverrides, B = {};
        return Object.entries(L).forEach(([_, j]) => {
          B[_] = Po(j, d({}, D, {
            theme: F
          }));
        }), v(D, B);
      }), l && !T && k.push((D) => {
        var F;
        const L = Oo(d({}, D, {
          defaultTheme: n,
          themeId: o
        })), B = L == null || (F = L.components) == null || (F = F[l]) == null ? void 0 : F.variants;
        return Po({
          variants: B
        }, d({}, D, {
          theme: L
        }));
      }), E || k.push(i);
      const $ = k.length - R.length;
      if (Array.isArray(x) && $ > 0) {
        const D = new Array($).fill("");
        S = [...x, ...D], S.raw = [...x.raw, ...D];
      }
      const M = w(S, ...k);
      if (process.env.NODE_ENV !== "production") {
        let D;
        l && (D = `${l}${de(u || "")}`), D === void 0 && (D = `Styled(${Ti(a)})`), M.displayName = D;
      }
      return a.muiName && (M.muiName = a.muiName), M;
    };
    return w.withConfig && (y.withConfig = w.withConfig), y;
  };
}
const zi = _i(), Vi = zi;
function Wi(e) {
  const {
    prototype: o = {}
  } = e;
  return !!o.isReactComponent;
}
function Dr(e, o, n, r, s) {
  const i = e[o], a = s || o;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = i.type;
  return typeof l == "function" && !Wi(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Lr = ht(t.element, Dr);
Lr.isRequired = ht(t.element.isRequired, Dr);
const uo = Lr;
function gt(e, o, n, r, s) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[o], a = s || o;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
function Vn(...e) {
  return e.reduce((o, n) => n == null ? o : function(...s) {
    o.apply(this, s), n.apply(this, s);
  }, () => {
  });
}
function po(e, o = 166) {
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
function Zo(e, o) {
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
function pt(e) {
  return He(e).defaultView || window;
}
let Wn = 0;
function Ui(e) {
  const [o, n] = f.useState(e), r = e || o;
  return f.useEffect(() => {
    o == null && (Wn += 1, n(`mui-${Wn}`));
  }, [o]), r;
}
const Un = f["useId".toString()];
function hn(e) {
  if (Un !== void 0) {
    const o = Un();
    return e ?? o;
  }
  return Ui(e);
}
function At({
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
      current: u
    } = f.useRef(o);
    f.useEffect(() => {
      !s && u !== o && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(o)]);
  }
  const l = f.useCallback((u) => {
    s || a(u);
  }, []);
  return [c, l];
}
function Br(e) {
  const o = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - o);
}
let _t;
function jr() {
  if (_t)
    return _t;
  const e = document.createElement("div"), o = document.createElement("div");
  return o.style.width = "10px", o.style.height = "1px", e.appendChild(o), e.dir = "rtl", e.style.fontSize = "14px", e.style.width = "4px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.overflow = "scroll", document.body.appendChild(e), _t = "reverse", e.scrollLeft > 0 ? _t = "default" : (e.scrollLeft = 1, e.scrollLeft === 0 && (_t = "negative")), document.body.removeChild(e), _t;
}
function Hi(e, o) {
  const n = e.scrollLeft;
  if (o !== "rtl")
    return n;
  switch (jr()) {
    case "negative":
      return e.scrollWidth - e.clientWidth + n;
    case "reverse":
      return e.scrollWidth - e.clientWidth - n;
    default:
      return n;
  }
}
const qi = (e) => {
  const o = f.useRef({});
  return f.useEffect(() => {
    o.current = e;
  }), o.current;
}, Gi = qi;
function Ki(e) {
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
function Yi(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Xi = Number.isInteger || Yi;
function _r(e, o, n, r) {
  const s = e[o];
  if (s == null || !Xi(s)) {
    const i = Ki(s);
    return new RangeError(`Invalid ${r} \`${o}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function zr(e, o, ...n) {
  return e[o] === void 0 ? null : _r(e, o, ...n);
}
function ln() {
  return null;
}
zr.isRequired = _r;
ln.isRequired = ln;
const Lo = process.env.NODE_ENV === "production" ? ln : zr, Ji = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"], Zi = $r(), Qi = Vi("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, o) => o.root
});
function ea(e) {
  return wi({
    props: e,
    name: "MuiStack",
    defaultTheme: Zi
  });
}
function ta(e, o) {
  const n = f.Children.toArray(e).filter(Boolean);
  return n.reduce((r, s, i) => (r.push(s), i < n.length - 1 && r.push(/* @__PURE__ */ f.cloneElement(o, {
    key: `separator-${i}`
  })), r), []);
}
const oa = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], na = ({
  ownerState: e,
  theme: o
}) => {
  let n = d({
    display: "flex",
    flexDirection: "column"
  }, Bn({
    theme: o
  }, Xo({
    values: e.direction,
    breakpoints: o.breakpoints.values
  }), (r) => ({
    flexDirection: r
  })));
  if (e.spacing) {
    const r = vi(o), s = Object.keys(o.breakpoints.values).reduce((l, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (l[u] = !0), l), {}), i = Xo({
      values: e.direction,
      base: s
    }), a = Xo({
      values: e.spacing,
      base: s
    });
    typeof i == "object" && Object.keys(i).forEach((l, u, p) => {
      if (!i[l]) {
        const v = u > 0 ? i[p[u - 1]] : "column";
        i[l] = v;
      }
    }), n = Do(n, Bn({
      theme: o
    }, a, (l, u) => e.useFlexGap ? {
      gap: jn(r, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${oa(u ? i[u] : e.direction)}`]: jn(r, l)
      }
    }));
  }
  return n = gi(o.breakpoints, n), n;
};
function ra(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: o = Qi,
    useThemeProps: n = ea,
    componentName: r = "MuiStack"
  } = e, s = () => xe({
    root: ["root"]
  }, (l) => fe(r, l), {}), i = o(na), a = /* @__PURE__ */ f.forwardRef(function(l, u) {
    const p = n(l), h = yi(p), {
      component: v = "div",
      direction: g = "column",
      spacing: T = 0,
      divider: E,
      children: m,
      className: O,
      useFlexGap: w = !1
    } = h, b = J(h, Ji), y = {
      direction: g,
      spacing: T,
      useFlexGap: w
    }, x = s();
    return /* @__PURE__ */ I(i, d({
      as: v,
      ownerState: y,
      ref: u,
      className: te(x.root, O)
    }, b, {
      children: E ? ta(m, E) : m
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
var cn = { exports: {} }, Pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hn;
function sa() {
  if (Hn)
    return Pe;
  Hn = 1;
  var e = Symbol.for("react.element"), o = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), T;
  T = Symbol.for("react.module.reference");
  function E(m) {
    if (typeof m == "object" && m !== null) {
      var O = m.$$typeof;
      switch (O) {
        case e:
          switch (m = m.type, m) {
            case n:
            case s:
            case r:
            case u:
            case p:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case c:
                case a:
                case l:
                case v:
                case h:
                case i:
                  return m;
                default:
                  return O;
              }
          }
        case o:
          return O;
      }
    }
  }
  return Pe.ContextConsumer = a, Pe.ContextProvider = i, Pe.Element = e, Pe.ForwardRef = l, Pe.Fragment = n, Pe.Lazy = v, Pe.Memo = h, Pe.Portal = o, Pe.Profiler = s, Pe.StrictMode = r, Pe.Suspense = u, Pe.SuspenseList = p, Pe.isAsyncMode = function() {
    return !1;
  }, Pe.isConcurrentMode = function() {
    return !1;
  }, Pe.isContextConsumer = function(m) {
    return E(m) === a;
  }, Pe.isContextProvider = function(m) {
    return E(m) === i;
  }, Pe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, Pe.isForwardRef = function(m) {
    return E(m) === l;
  }, Pe.isFragment = function(m) {
    return E(m) === n;
  }, Pe.isLazy = function(m) {
    return E(m) === v;
  }, Pe.isMemo = function(m) {
    return E(m) === h;
  }, Pe.isPortal = function(m) {
    return E(m) === o;
  }, Pe.isProfiler = function(m) {
    return E(m) === s;
  }, Pe.isStrictMode = function(m) {
    return E(m) === r;
  }, Pe.isSuspense = function(m) {
    return E(m) === u;
  }, Pe.isSuspenseList = function(m) {
    return E(m) === p;
  }, Pe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === s || m === r || m === u || m === p || m === g || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === h || m.$$typeof === i || m.$$typeof === a || m.$$typeof === l || m.$$typeof === T || m.getModuleId !== void 0);
  }, Pe.typeOf = E, Pe;
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
var qn;
function ia() {
  return qn || (qn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), o = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), T = !1, E = !1, m = !1, O = !1, w = !1, b;
    b = Symbol.for("react.module.reference");
    function y(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === n || z === s || w || z === r || z === u || z === p || O || z === g || T || E || m || typeof z == "object" && z !== null && (z.$$typeof === v || z.$$typeof === h || z.$$typeof === i || z.$$typeof === a || z.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === b || z.getModuleId !== void 0));
    }
    function x(z) {
      if (typeof z == "object" && z !== null) {
        var se = z.$$typeof;
        switch (se) {
          case e:
            var K = z.type;
            switch (K) {
              case n:
              case s:
              case r:
              case u:
              case p:
                return K;
              default:
                var $e = K && K.$$typeof;
                switch ($e) {
                  case c:
                  case a:
                  case l:
                  case v:
                  case h:
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
    var R = a, S = i, k = e, $ = l, M = n, D = v, F = h, L = o, B = s, _ = r, j = u, V = p, N = !1, U = !1;
    function Z(z) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function he(z) {
      return U || (U = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ve(z) {
      return x(z) === a;
    }
    function Ee(z) {
      return x(z) === i;
    }
    function ee(z) {
      return typeof z == "object" && z !== null && z.$$typeof === e;
    }
    function ne(z) {
      return x(z) === l;
    }
    function G(z) {
      return x(z) === n;
    }
    function ue(z) {
      return x(z) === v;
    }
    function X(z) {
      return x(z) === h;
    }
    function pe(z) {
      return x(z) === o;
    }
    function Se(z) {
      return x(z) === s;
    }
    function ae(z) {
      return x(z) === r;
    }
    function ce(z) {
      return x(z) === u;
    }
    function ie(z) {
      return x(z) === p;
    }
    Ie.ContextConsumer = R, Ie.ContextProvider = S, Ie.Element = k, Ie.ForwardRef = $, Ie.Fragment = M, Ie.Lazy = D, Ie.Memo = F, Ie.Portal = L, Ie.Profiler = B, Ie.StrictMode = _, Ie.Suspense = j, Ie.SuspenseList = V, Ie.isAsyncMode = Z, Ie.isConcurrentMode = he, Ie.isContextConsumer = ve, Ie.isContextProvider = Ee, Ie.isElement = ee, Ie.isForwardRef = ne, Ie.isFragment = G, Ie.isLazy = ue, Ie.isMemo = X, Ie.isPortal = pe, Ie.isProfiler = Se, Ie.isStrictMode = ae, Ie.isSuspense = ce, Ie.isSuspenseList = ie, Ie.isValidElementType = y, Ie.typeOf = x;
  }()), Ie;
}
process.env.NODE_ENV === "production" ? cn.exports = sa() : cn.exports = ia();
var fo = cn.exports;
const Gn = {
  disabled: !1
};
var aa = process.env.NODE_ENV !== "production" ? t.oneOfType([t.number, t.shape({
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
var la = function(o) {
  return o.scrollTop;
}, to = "unmounted", kt = "exited", Mt = "entering", Vt = "entered", un = "exiting", Tt = /* @__PURE__ */ function(e) {
  Ii(o, e);
  function o(r, s) {
    var i;
    i = e.call(this, r, s) || this;
    var a = s, c = a && !a.isMounting ? r.enter : r.appear, l;
    return i.appearStatus = null, r.in ? c ? (l = kt, i.appearStatus = Mt) : l = Vt : r.unmountOnExit || r.mountOnEnter ? l = to : l = kt, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  o.getDerivedStateFromProps = function(s, i) {
    var a = s.in;
    return a && i.status === to ? {
      status: kt
    } : null;
  };
  var n = o.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(s) {
    var i = null;
    if (s !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Mt && a !== Vt && (i = Mt) : (a === Mt || a === Vt) && (i = un);
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
      if (this.cancelNextCallback(), i === Mt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Eo.findDOMNode(this);
          a && la(a);
        }
        this.performEnter(s);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === kt && this.setState({
        status: to
      });
  }, n.performEnter = function(s) {
    var i = this, a = this.props.enter, c = this.context ? this.context.isMounting : s, l = this.props.nodeRef ? [c] : [Eo.findDOMNode(this), c], u = l[0], p = l[1], h = this.getTimeouts(), v = c ? h.appear : h.enter;
    if (!s && !a || Gn.disabled) {
      this.safeSetState({
        status: Vt
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, p), this.safeSetState({
      status: Mt
    }, function() {
      i.props.onEntering(u, p), i.onTransitionEnd(v, function() {
        i.safeSetState({
          status: Vt
        }, function() {
          i.props.onEntered(u, p);
        });
      });
    });
  }, n.performExit = function() {
    var s = this, i = this.props.exit, a = this.getTimeouts(), c = this.props.nodeRef ? void 0 : Eo.findDOMNode(this);
    if (!i || Gn.disabled) {
      this.safeSetState({
        status: kt
      }, function() {
        s.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: un
    }, function() {
      s.props.onExiting(c), s.onTransitionEnd(a.exit, function() {
        s.safeSetState({
          status: kt
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
    var a = this.props.nodeRef ? this.props.nodeRef.current : Eo.findDOMNode(this), c = s == null && !this.props.addEndListener;
    if (!a || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = l[0], p = l[1];
      this.props.addEndListener(u, p);
    }
    s != null && setTimeout(this.nextCallback, s);
  }, n.render = function() {
    var s = this.state.status;
    if (s === to)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var c = J(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ eo.createElement(kr.Provider, {
        value: null
      }, typeof a == "function" ? a(s, c) : eo.cloneElement(eo.Children.only(a), c))
    );
  }, o;
}(eo.Component);
Tt.contextType = kr;
Tt.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var n = aa;
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
function zt() {
}
Tt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: zt,
  onEntering: zt,
  onEntered: zt,
  onExit: zt,
  onExiting: zt,
  onExited: zt
};
Tt.UNMOUNTED = to;
Tt.EXITED = kt;
Tt.ENTERING = Mt;
Tt.ENTERED = Vt;
Tt.EXITING = un;
const Bo = Tt, vn = (e) => e.scrollTop;
function Rt(e, o) {
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
function ca(e) {
  return fe("MuiCollapse", e);
}
const ua = be("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]), Om = ua, da = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"], pa = (e) => {
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
  return xe(r, ca, n);
}, fa = H("div", {
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
}) => d({
  height: 0,
  overflow: "hidden",
  transition: e.transitions.create("height")
}, o.orientation === "horizontal" && {
  height: "auto",
  width: 0,
  transition: e.transitions.create("width")
}, o.state === "entered" && d({
  height: "auto",
  overflow: "visible"
}, o.orientation === "horizontal" && {
  width: "auto"
}), o.state === "exited" && !o.in && o.collapsedSize === "0px" && {
  visibility: "hidden"
})), ma = H("div", {
  name: "MuiCollapse",
  slot: "Wrapper",
  overridesResolver: (e, o) => o.wrapper
})(({
  ownerState: e
}) => d({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: "flex",
  width: "100%"
}, e.orientation === "horizontal" && {
  width: "auto",
  height: "100%"
})), ba = H("div", {
  name: "MuiCollapse",
  slot: "WrapperInner",
  overridesResolver: (e, o) => o.wrapperInner
})(({
  ownerState: e
}) => d({
  width: "100%"
}, e.orientation === "horizontal" && {
  width: "auto",
  height: "100%"
})), gn = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiCollapse"
  }), {
    addEndListener: s,
    children: i,
    className: a,
    collapsedSize: c = "0px",
    component: l,
    easing: u,
    in: p,
    onEnter: h,
    onEntered: v,
    onEntering: g,
    onExit: T,
    onExited: E,
    onExiting: m,
    orientation: O = "vertical",
    style: w,
    timeout: b = xi.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: y = Bo
  } = r, x = J(r, da), R = d({}, r, {
    orientation: O,
    collapsedSize: c
  }), S = pa(R), k = Ct(), $ = Mr(), M = f.useRef(null), D = f.useRef(), F = typeof c == "number" ? `${c}px` : c, L = O === "horizontal", B = L ? "width" : "height", _ = f.useRef(null), j = ze(n, _), V = (G) => (ue) => {
    if (G) {
      const X = _.current;
      ue === void 0 ? G(X) : G(X, ue);
    }
  }, N = () => M.current ? M.current[L ? "clientWidth" : "clientHeight"] : 0, U = V((G, ue) => {
    M.current && L && (M.current.style.position = "absolute"), G.style[B] = F, h && h(G, ue);
  }), Z = V((G, ue) => {
    const X = N();
    M.current && L && (M.current.style.position = "");
    const {
      duration: pe,
      easing: Se
    } = Rt({
      style: w,
      timeout: b,
      easing: u
    }, {
      mode: "enter"
    });
    if (b === "auto") {
      const ae = k.transitions.getAutoHeightDuration(X);
      G.style.transitionDuration = `${ae}ms`, D.current = ae;
    } else
      G.style.transitionDuration = typeof pe == "string" ? pe : `${pe}ms`;
    G.style[B] = `${X}px`, G.style.transitionTimingFunction = Se, g && g(G, ue);
  }), he = V((G, ue) => {
    G.style[B] = "auto", v && v(G, ue);
  }), ve = V((G) => {
    G.style[B] = `${N()}px`, T && T(G);
  }), Ee = V(E), ee = V((G) => {
    const ue = N(), {
      duration: X,
      easing: pe
    } = Rt({
      style: w,
      timeout: b,
      easing: u
    }, {
      mode: "exit"
    });
    if (b === "auto") {
      const Se = k.transitions.getAutoHeightDuration(ue);
      G.style.transitionDuration = `${Se}ms`, D.current = Se;
    } else
      G.style.transitionDuration = typeof X == "string" ? X : `${X}ms`;
    G.style[B] = F, G.style.transitionTimingFunction = pe, m && m(G);
  });
  return /* @__PURE__ */ I(y, d({
    in: p,
    onEnter: U,
    onEntered: he,
    onEntering: Z,
    onExit: ve,
    onExited: Ee,
    onExiting: ee,
    addEndListener: (G) => {
      b === "auto" && $.start(D.current || 0, G), s && s(_.current, G);
    },
    nodeRef: _,
    timeout: b === "auto" ? null : b
  }, x, {
    children: (G, ue) => /* @__PURE__ */ I(fa, d({
      as: l,
      className: te(S.root, a, {
        entered: S.entered,
        exited: !p && F === "0px" && S.hidden
      }[G]),
      style: d({
        [L ? "minWidth" : "minHeight"]: F
      }, w),
      ref: j
    }, ue, {
      // `ownerState` is set after `childProps` to override any existing `ownerState` property in `childProps`
      // that might have been forwarded from the Transition component.
      ownerState: d({}, R, {
        state: G
      }),
      children: /* @__PURE__ */ I(ma, {
        ownerState: d({}, R, {
          state: G
        }),
        className: S.wrapper,
        ref: M,
        children: /* @__PURE__ */ I(ba, {
          ownerState: d({}, R, {
            state: G
          }),
          className: S.wrapperInner,
          children: i
        })
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (gn.propTypes = {
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
  component: bn,
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
gn.muiSupportAuto = !0;
const ha = gn;
function va(e) {
  return fe("MuiPaper", e);
}
const ga = be("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]), Cm = ga, ya = ["className", "component", "elevation", "square", "variant"], xa = (e) => {
  const {
    square: o,
    elevation: n,
    variant: r,
    classes: s
  } = e, i = {
    root: ["root", r, !o && "rounded", r === "elevation" && `elevation${n}`]
  };
  return xe(i, va, s);
}, Ea = H("div", {
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
  return d({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !o.square && {
    borderRadius: e.shape.borderRadius
  }, o.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, o.variant === "elevation" && d({
    boxShadow: (e.vars || e).shadows[o.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${it("#fff", _n(o.elevation))}, ${it("#fff", _n(o.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[o.elevation]
  }));
}), Vr = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiPaper"
  }), {
    className: s,
    component: i = "div",
    elevation: a = 1,
    square: c = !1,
    variant: l = "elevation"
  } = r, u = J(r, ya), p = d({}, r, {
    component: i,
    elevation: a,
    square: c,
    variant: l
  }), h = xa(p);
  return process.env.NODE_ENV !== "production" && Ct().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ I(Ea, d({
    as: i,
    ownerState: p,
    className: te(h.root, s),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (Vr.propTypes = {
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
  elevation: ht(Lo, (e) => {
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
const mo = Vr, Wr = /* @__PURE__ */ f.createContext({});
process.env.NODE_ENV !== "production" && (Wr.displayName = "AccordionContext");
const Ur = Wr;
function No(e) {
  return typeof e == "string";
}
function Hr(e, o, n) {
  return e === void 0 || No(e) ? o : d({}, o, {
    ownerState: d({}, o.ownerState, n)
  });
}
const Oa = {
  disableDefaultClasses: !1
}, qr = /* @__PURE__ */ f.createContext(Oa);
process.env.NODE_ENV !== "production" && (qr.displayName = "ClassNameConfiguratorContext");
function Ca(e) {
  const {
    disableDefaultClasses: o
  } = f.useContext(qr);
  return (n) => o ? "" : e(n);
}
function Gr(e, o = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !o.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Kr(e, o, n) {
  return typeof e == "function" ? e(o, n) : e;
}
function Kn(e) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    o[n] = e[n];
  }), o;
}
function Yr(e) {
  const {
    getSlotProps: o,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: s,
    className: i
  } = e;
  if (!o) {
    const g = te(n == null ? void 0 : n.className, i, s == null ? void 0 : s.className, r == null ? void 0 : r.className), T = d({}, n == null ? void 0 : n.style, s == null ? void 0 : s.style, r == null ? void 0 : r.style), E = d({}, n, s, r);
    return g.length > 0 && (E.className = g), Object.keys(T).length > 0 && (E.style = T), {
      props: E,
      internalRef: void 0
    };
  }
  const a = Gr(d({}, s, r)), c = Kn(r), l = Kn(s), u = o(a), p = te(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, s == null ? void 0 : s.className, r == null ? void 0 : r.className), h = d({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, s == null ? void 0 : s.style, r == null ? void 0 : r.style), v = d({}, u, n, l, c);
  return p.length > 0 && (v.className = p), Object.keys(h).length > 0 && (v.style = h), {
    props: v,
    internalRef: u.ref
  };
}
const Ta = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function ft(e) {
  var o;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: s,
    skipResolvingSlotProps: i = !1
  } = e, a = J(e, Ta), c = i ? {} : Kr(r, s), {
    props: l,
    internalRef: u
  } = Yr(d({}, a, {
    externalSlotProps: c
  })), p = ze(u, c == null ? void 0 : c.ref, (o = e.additionalProps) == null ? void 0 : o.ref);
  return Hr(n, d({}, l, {
    ref: p
  }), s);
}
const wa = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"], Sa = ["component", "slots", "slotProps"], Ra = ["component"];
function Pa(e, o) {
  const {
    className: n,
    elementType: r,
    ownerState: s,
    externalForwardedProps: i,
    getSlotOwnerState: a,
    internalForwardedProps: c
  } = o, l = J(o, wa), {
    component: u,
    slots: p = {
      [e]: void 0
    },
    slotProps: h = {
      [e]: void 0
    }
  } = i, v = J(i, Sa), g = p[e] || r, T = Kr(h[e], s), E = Yr(d({
    className: n
  }, l, {
    externalForwardedProps: e === "root" ? v : void 0,
    externalSlotProps: T
  })), {
    props: {
      component: m
    },
    internalRef: O
  } = E, w = J(E.props, Ra), b = ze(O, T == null ? void 0 : T.ref, o.ref), y = a ? a(w) : {}, x = d({}, s, y), R = e === "root" ? m || u : m, S = Hr(g, d({}, e === "root" && !u && !p[e] && c, e !== "root" && !p[e] && c, w, R && {
    as: R
  }, {
    ref: b
  }), x);
  return Object.keys(y).forEach((k) => {
    delete S[k];
  }), [g, S];
}
function Ia(e) {
  return fe("MuiAccordion", e);
}
const $a = be("MuiAccordion", ["root", "rounded", "expanded", "disabled", "gutters", "region"]), Co = $a, Na = ["children", "className", "defaultExpanded", "disabled", "disableGutters", "expanded", "onChange", "square", "slots", "slotProps", "TransitionComponent", "TransitionProps"], ka = (e) => {
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
  }, Ia, o);
}, Ma = H(mo, {
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
}) => d({}, !o.square && {
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
})), Xr = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiAccordion"
  }), {
    children: s,
    className: i,
    defaultExpanded: a = !1,
    disabled: c = !1,
    disableGutters: l = !1,
    expanded: u,
    onChange: p,
    square: h = !1,
    slots: v = {},
    slotProps: g = {},
    TransitionComponent: T,
    TransitionProps: E
  } = r, m = J(r, Na), [O, w] = At({
    controlled: u,
    default: a,
    name: "Accordion",
    state: "expanded"
  }), b = f.useCallback((L) => {
    w(!O), p && p(L, !O);
  }, [O, p, w]), [y, ...x] = f.Children.toArray(s), R = f.useMemo(() => ({
    expanded: O,
    disabled: c,
    disableGutters: l,
    toggle: b
  }), [O, c, l, b]), S = d({}, r, {
    square: h,
    disabled: c,
    disableGutters: l,
    expanded: O
  }), k = ka(S), $ = d({
    transition: T
  }, v), M = d({
    transition: E
  }, g), [D, F] = Pa("transition", {
    elementType: ha,
    externalForwardedProps: {
      slots: $,
      slotProps: M
    },
    ownerState: S
  });
  return /* @__PURE__ */ ke(Ma, d({
    className: te(k.root, i),
    ref: n,
    ownerState: S,
    square: h
  }, m, {
    children: [/* @__PURE__ */ I(Ur.Provider, {
      value: R,
      children: y
    }), /* @__PURE__ */ I(D, d({
      in: O,
      timeout: "auto"
    }, F, {
      children: /* @__PURE__ */ I("div", {
        "aria-labelledby": y.props.id,
        id: y.props["aria-controls"],
        role: "region",
        className: k.region,
        children: x
      })
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (Xr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: ht(t.node.isRequired, (e) => {
    const o = f.Children.toArray(e.children)[0];
    return fo.isFragment(o) ? new Error("MUI: The Accordion doesn't accept a Fragment as a child. Consider providing an array instead.") : /* @__PURE__ */ f.isValidElement(o) ? null : new Error("MUI: Expected the first child of Accordion to be a valid element.");
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
const Tm = Xr;
function Aa(e) {
  return fe("MuiAccordionDetails", e);
}
const Fa = be("MuiAccordionDetails", ["root"]), wm = Fa, Da = ["className"], La = (e) => {
  const {
    classes: o
  } = e;
  return xe({
    root: ["root"]
  }, Aa, o);
}, Ba = H("div", {
  name: "MuiAccordionDetails",
  slot: "Root",
  overridesResolver: (e, o) => o.root
})(({
  theme: e
}) => ({
  padding: e.spacing(1, 2, 2)
})), Jr = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiAccordionDetails"
  }), {
    className: s
  } = r, i = J(r, Da), a = r, c = La(a);
  return /* @__PURE__ */ I(Ba, d({
    className: te(c.root, s),
    ref: n,
    ownerState: a
  }, i));
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const Sm = Jr;
function ja(e) {
  return fe("MuiAccordionSummary", e);
}
const _a = be("MuiAccordionSummary", ["root", "expanded", "focusVisible", "disabled", "gutters", "contentGutters", "content", "expandIconWrapper"]), Wt = _a, za = ["children", "className", "expandIcon", "focusVisibleClassName", "onClick"], Va = (e) => {
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
  }, ja, o);
}, Wa = H(Kt, {
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
  return d({
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
}), Ua = H("div", {
  name: "MuiAccordionSummary",
  slot: "Content",
  overridesResolver: (e, o) => o.content
})(({
  theme: e,
  ownerState: o
}) => d({
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
})), Ha = H("div", {
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
})), Zr = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiAccordionSummary"
  }), {
    children: s,
    className: i,
    expandIcon: a,
    focusVisibleClassName: c,
    onClick: l
  } = r, u = J(r, za), {
    disabled: p = !1,
    disableGutters: h,
    expanded: v,
    toggle: g
  } = f.useContext(Ur), T = (O) => {
    g && g(O), l && l(O);
  }, E = d({}, r, {
    expanded: v,
    disabled: p,
    disableGutters: h
  }), m = Va(E);
  return /* @__PURE__ */ ke(Wa, d({
    focusRipple: !1,
    disableRipple: !0,
    disabled: p,
    component: "div",
    "aria-expanded": v,
    className: te(m.root, i),
    focusVisibleClassName: te(m.focusVisible, c),
    onClick: T,
    ref: n,
    ownerState: E
  }, u, {
    children: [/* @__PURE__ */ I(Ua, {
      className: m.content,
      ownerState: E,
      children: s
    }), a && /* @__PURE__ */ I(Ha, {
      className: m.expandIconWrapper,
      ownerState: E,
      children: a
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Zr.propTypes = {
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
const Rm = Zr, Qr = "base";
function qa(e) {
  return `${Qr}--${e}`;
}
function Ga(e, o) {
  return `${Qr}-${e}-${o}`;
}
function es(e, o) {
  const n = Ei[o];
  return n ? qa(n) : Ga(e, o);
}
function Ka(e, o) {
  const n = {};
  return o.forEach((r) => {
    n[r] = es(e, r);
  }), n;
}
const Ya = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Xa(e) {
  const o = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(o) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : o;
}
function Ja(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const o = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = o(`[name="${e.name}"]:checked`);
  return n || (n = o(`[name="${e.name}"]`)), n !== e;
}
function Za(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Ja(e));
}
function Qa(e) {
  const o = [], n = [];
  return Array.from(e.querySelectorAll(Ya)).forEach((r, s) => {
    const i = Xa(r);
    i === -1 || !Za(r) || (i === 0 ? o.push(r) : n.push({
      documentOrder: s,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, s) => r.tabIndex === s.tabIndex ? r.documentOrder - s.documentOrder : r.tabIndex - s.tabIndex).map((r) => r.node).concat(o);
}
function el() {
  return !0;
}
function ko(e) {
  const {
    children: o,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: s = !1,
    getTabbable: i = Qa,
    isEnabled: a = el,
    open: c
  } = e, l = f.useRef(!1), u = f.useRef(null), p = f.useRef(null), h = f.useRef(null), v = f.useRef(null), g = f.useRef(!1), T = f.useRef(null), E = ze(o.ref, T), m = f.useRef(null);
  f.useEffect(() => {
    !c || !T.current || (g.current = !n);
  }, [n, c]), f.useEffect(() => {
    if (!c || !T.current)
      return;
    const b = He(T.current);
    return T.current.contains(b.activeElement) || (T.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), T.current.setAttribute("tabIndex", "-1")), g.current && T.current.focus()), () => {
      s || (h.current && h.current.focus && (l.current = !0, h.current.focus()), h.current = null);
    };
  }, [c]), f.useEffect(() => {
    if (!c || !T.current)
      return;
    const b = He(T.current), y = (S) => {
      m.current = S, !(r || !a() || S.key !== "Tab") && b.activeElement === T.current && S.shiftKey && (l.current = !0, p.current && p.current.focus());
    }, x = () => {
      const S = T.current;
      if (S === null)
        return;
      if (!b.hasFocus() || !a() || l.current) {
        l.current = !1;
        return;
      }
      if (S.contains(b.activeElement) || r && b.activeElement !== u.current && b.activeElement !== p.current)
        return;
      if (b.activeElement !== v.current)
        v.current = null;
      else if (v.current !== null)
        return;
      if (!g.current)
        return;
      let k = [];
      if ((b.activeElement === u.current || b.activeElement === p.current) && (k = i(T.current)), k.length > 0) {
        var $, M;
        const D = !!(($ = m.current) != null && $.shiftKey && ((M = m.current) == null ? void 0 : M.key) === "Tab"), F = k[0], L = k[k.length - 1];
        typeof F != "string" && typeof L != "string" && (D ? L.focus() : F.focus());
      } else
        S.focus();
    };
    b.addEventListener("focusin", x), b.addEventListener("keydown", y, !0);
    const R = setInterval(() => {
      b.activeElement && b.activeElement.tagName === "BODY" && x();
    }, 50);
    return () => {
      clearInterval(R), b.removeEventListener("focusin", x), b.removeEventListener("keydown", y, !0);
    };
  }, [n, r, s, a, c, i]);
  const O = (b) => {
    h.current === null && (h.current = b.relatedTarget), g.current = !0, v.current = b.target;
    const y = o.props.onFocus;
    y && y(b);
  }, w = (b) => {
    h.current === null && (h.current = b.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ ke(f.Fragment, {
    children: [/* @__PURE__ */ I("div", {
      tabIndex: c ? 0 : -1,
      onFocus: w,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ f.cloneElement(o, {
      ref: E,
      onFocus: O
    }), /* @__PURE__ */ I("div", {
      tabIndex: c ? 0 : -1,
      onFocus: w,
      ref: p,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (ko.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: uo,
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
process.env.NODE_ENV !== "production" && (ko["propTypes"] = Ar(ko.propTypes));
function tl(e) {
  return typeof e == "function" ? e() : e;
}
const ao = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const {
    children: r,
    container: s,
    disablePortal: i = !1
  } = o, [a, c] = f.useState(null), l = ze(/* @__PURE__ */ f.isValidElement(r) ? r.ref : null, n);
  if (vt(() => {
    i || c(tl(s) || document.body);
  }, [s, i]), vt(() => {
    if (a && !i)
      return sn(n, a), () => {
        sn(n, null);
      };
  }, [n, a, i]), i) {
    if (/* @__PURE__ */ f.isValidElement(r)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ f.cloneElement(r, u);
    }
    return /* @__PURE__ */ I(f.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ I(f.Fragment, {
    children: a && /* @__PURE__ */ ki.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (ao.propTypes = {
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
  container: t.oneOfType([gt, t.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: t.bool
});
process.env.NODE_ENV !== "production" && (ao["propTypes"] = Ar(ao.propTypes));
function ol(e) {
  const o = He(e);
  return o.body === e ? pt(e).innerWidth > o.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function no(e, o) {
  o ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Yn(e) {
  return parseInt(pt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function nl(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Xn(e, o, n, r, s) {
  const i = [o, n, ...r];
  [].forEach.call(e.children, (a) => {
    const c = i.indexOf(a) === -1, l = !nl(a);
    c && l && no(a, s);
  });
}
function Qo(e, o) {
  let n = -1;
  return e.some((r, s) => o(r) ? (n = s, !0) : !1), n;
}
function rl(e, o) {
  const n = [], r = e.container;
  if (!o.disableScrollLock) {
    if (ol(r)) {
      const a = Br(He(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Yn(r) + a}px`;
      const c = He(r).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${Yn(l) + a}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = He(r).body;
    else {
      const a = r.parentElement, c = pt(r);
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
function sl(e) {
  const o = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && o.push(n);
  }), o;
}
class il {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(o, n) {
    let r = this.modals.indexOf(o);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(o), o.modalRef && no(o.modalRef, !1);
    const s = sl(n);
    Xn(n, o.mount, o.modalRef, s, !0);
    const i = Qo(this.containers, (a) => a.container === n);
    return i !== -1 ? (this.containers[i].modals.push(o), r) : (this.containers.push({
      modals: [o],
      container: n,
      restore: null,
      hiddenSiblings: s
    }), r);
  }
  mount(o, n) {
    const r = Qo(this.containers, (i) => i.modals.indexOf(o) !== -1), s = this.containers[r];
    s.restore || (s.restore = rl(s, n));
  }
  remove(o, n = !0) {
    const r = this.modals.indexOf(o);
    if (r === -1)
      return r;
    const s = Qo(this.containers, (a) => a.modals.indexOf(o) !== -1), i = this.containers[s];
    if (i.modals.splice(i.modals.indexOf(o), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), o.modalRef && no(o.modalRef, n), Xn(i.container, o.mount, o.modalRef, i.hiddenSiblings, !1), this.containers.splice(s, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && no(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(o) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === o;
  }
}
function al(e) {
  return typeof e == "function" ? e() : e;
}
function ll(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const cl = new il();
function ul(e) {
  const {
    container: o,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: s = cl,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: c,
    children: l,
    onClose: u,
    open: p,
    rootRef: h
  } = e, v = f.useRef({}), g = f.useRef(null), T = f.useRef(null), E = ze(T, h), [m, O] = f.useState(!p), w = ll(l);
  let b = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (b = !1);
  const y = () => He(g.current), x = () => (v.current.modalRef = T.current, v.current.mount = g.current, v.current), R = () => {
    s.mount(x(), {
      disableScrollLock: r
    }), T.current && (T.current.scrollTop = 0);
  }, S = Et(() => {
    const j = al(o) || y().body;
    s.add(x(), j), T.current && R();
  }), k = f.useCallback(() => s.isTopModal(x()), [s]), $ = Et((j) => {
    g.current = j, j && (p && k() ? R() : T.current && no(T.current, b));
  }), M = f.useCallback(() => {
    s.remove(x(), b);
  }, [b, s]);
  f.useEffect(() => () => {
    M();
  }, [M]), f.useEffect(() => {
    p ? S() : (!w || !i) && M();
  }, [p, M, w, i, S]);
  const D = (j) => (V) => {
    var N;
    (N = j.onKeyDown) == null || N.call(j, V), !(V.key !== "Escape" || V.which === 229 || // Wait until IME is settled.
    !k()) && (n || (V.stopPropagation(), u && u(V, "escapeKeyDown")));
  }, F = (j) => (V) => {
    var N;
    (N = j.onClick) == null || N.call(j, V), V.target === V.currentTarget && u && u(V, "backdropClick");
  };
  return {
    getRootProps: (j = {}) => {
      const V = Gr(e);
      delete V.onTransitionEnter, delete V.onTransitionExited;
      const N = d({}, V, j);
      return d({
        role: "presentation"
      }, N, {
        onKeyDown: D(N),
        ref: E
      });
    },
    getBackdropProps: (j = {}) => {
      const V = j;
      return d({
        "aria-hidden": !0
      }, V, {
        onClick: F(V),
        open: p
      });
    },
    getTransitionProps: () => {
      const j = () => {
        O(!1), a && a();
      }, V = () => {
        O(!0), c && c(), i && M();
      };
      return {
        onEnter: Vn(j, l == null ? void 0 : l.props.onEnter),
        onExited: Vn(V, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: E,
    portalRef: $,
    isTopModal: k,
    exited: m,
    hasTransition: w
  };
}
var Xe = "top", lt = "bottom", ct = "right", Je = "left", yn = "auto", bo = [Xe, lt, ct, Je], Ut = "start", lo = "end", dl = "clippingParents", ts = "viewport", Xt = "popper", pl = "reference", Jn = /* @__PURE__ */ bo.reduce(function(e, o) {
  return e.concat([o + "-" + Ut, o + "-" + lo]);
}, []), os = /* @__PURE__ */ [].concat(bo, [yn]).reduce(function(e, o) {
  return e.concat([o, o + "-" + Ut, o + "-" + lo]);
}, []), fl = "beforeRead", ml = "read", bl = "afterRead", hl = "beforeMain", vl = "main", gl = "afterMain", yl = "beforeWrite", xl = "write", El = "afterWrite", Ol = [fl, ml, bl, hl, vl, gl, yl, xl, El];
function yt(e) {
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
function Dt(e) {
  var o = ot(e).Element;
  return e instanceof o || e instanceof Element;
}
function at(e) {
  var o = ot(e).HTMLElement;
  return e instanceof o || e instanceof HTMLElement;
}
function xn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var o = ot(e).ShadowRoot;
  return e instanceof o || e instanceof ShadowRoot;
}
function Cl(e) {
  var o = e.state;
  Object.keys(o.elements).forEach(function(n) {
    var r = o.styles[n] || {}, s = o.attributes[n] || {}, i = o.elements[n];
    !at(i) || !yt(i) || (Object.assign(i.style, r), Object.keys(s).forEach(function(a) {
      var c = s[a];
      c === !1 ? i.removeAttribute(a) : i.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function Tl(e) {
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
      var s = o.elements[r], i = o.attributes[r] || {}, a = Object.keys(o.styles.hasOwnProperty(r) ? o.styles[r] : n[r]), c = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !at(s) || !yt(s) || (Object.assign(s.style, c), Object.keys(i).forEach(function(l) {
        s.removeAttribute(l);
      }));
    });
  };
}
const wl = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Cl,
  effect: Tl,
  requires: ["computeStyles"]
};
function bt(e) {
  return e.split("-")[0];
}
var Ft = Math.max, Mo = Math.min, Ht = Math.round;
function dn() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(o) {
    return o.brand + "/" + o.version;
  }).join(" ") : navigator.userAgent;
}
function ns() {
  return !/^((?!chrome|android).)*safari/i.test(dn());
}
function qt(e, o, n) {
  o === void 0 && (o = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, i = 1;
  o && at(e) && (s = e.offsetWidth > 0 && Ht(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ht(r.height) / e.offsetHeight || 1);
  var a = Dt(e) ? ot(e) : window, c = a.visualViewport, l = !ns() && n, u = (r.left + (l && c ? c.offsetLeft : 0)) / s, p = (r.top + (l && c ? c.offsetTop : 0)) / i, h = r.width / s, v = r.height / i;
  return {
    width: h,
    height: v,
    top: p,
    right: u + h,
    bottom: p + v,
    left: u,
    x: u,
    y: p
  };
}
function En(e) {
  var o = qt(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(o.width - n) <= 1 && (n = o.width), Math.abs(o.height - r) <= 1 && (r = o.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function rs(e, o) {
  var n = o.getRootNode && o.getRootNode();
  if (e.contains(o))
    return !0;
  if (n && xn(n)) {
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
function Sl(e) {
  return ["table", "td", "th"].indexOf(yt(e)) >= 0;
}
function Pt(e) {
  return ((Dt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function jo(e) {
  return yt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (xn(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Pt(e)
  );
}
function Zn(e) {
  return !at(e) || // https://github.com/popperjs/popper-core/issues/837
  Ot(e).position === "fixed" ? null : e.offsetParent;
}
function Rl(e) {
  var o = /firefox/i.test(dn()), n = /Trident/i.test(dn());
  if (n && at(e)) {
    var r = Ot(e);
    if (r.position === "fixed")
      return null;
  }
  var s = jo(e);
  for (xn(s) && (s = s.host); at(s) && ["html", "body"].indexOf(yt(s)) < 0; ) {
    var i = Ot(s);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || o && i.willChange === "filter" || o && i.filter && i.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function ho(e) {
  for (var o = ot(e), n = Zn(e); n && Sl(n) && Ot(n).position === "static"; )
    n = Zn(n);
  return n && (yt(n) === "html" || yt(n) === "body" && Ot(n).position === "static") ? o : n || Rl(e) || o;
}
function On(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ro(e, o, n) {
  return Ft(e, Mo(o, n));
}
function Pl(e, o, n) {
  var r = ro(e, o, n);
  return r > n ? n : r;
}
function ss() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function is(e) {
  return Object.assign({}, ss(), e);
}
function as(e, o) {
  return o.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Il = function(o, n) {
  return o = typeof o == "function" ? o(Object.assign({}, n.rects, {
    placement: n.placement
  })) : o, is(typeof o != "number" ? o : as(o, bo));
};
function $l(e) {
  var o, n = e.state, r = e.name, s = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, c = bt(n.placement), l = On(c), u = [Je, ct].indexOf(c) >= 0, p = u ? "height" : "width";
  if (!(!i || !a)) {
    var h = Il(s.padding, n), v = En(i), g = l === "y" ? Xe : Je, T = l === "y" ? lt : ct, E = n.rects.reference[p] + n.rects.reference[l] - a[l] - n.rects.popper[p], m = a[l] - n.rects.reference[l], O = ho(i), w = O ? l === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, b = E / 2 - m / 2, y = h[g], x = w - v[p] - h[T], R = w / 2 - v[p] / 2 + b, S = ro(y, R, x), k = l;
    n.modifiersData[r] = (o = {}, o[k] = S, o.centerOffset = S - R, o);
  }
}
function Nl(e) {
  var o = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = o.elements.popper.querySelector(s), !s) || rs(o.elements.popper, s) && (o.elements.arrow = s));
}
const kl = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: $l,
  effect: Nl,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Gt(e) {
  return e.split("-")[1];
}
var Ml = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Al(e, o) {
  var n = e.x, r = e.y, s = o.devicePixelRatio || 1;
  return {
    x: Ht(n * s) / s || 0,
    y: Ht(r * s) / s || 0
  };
}
function Qn(e) {
  var o, n = e.popper, r = e.popperRect, s = e.placement, i = e.variation, a = e.offsets, c = e.position, l = e.gpuAcceleration, u = e.adaptive, p = e.roundOffsets, h = e.isFixed, v = a.x, g = v === void 0 ? 0 : v, T = a.y, E = T === void 0 ? 0 : T, m = typeof p == "function" ? p({
    x: g,
    y: E
  }) : {
    x: g,
    y: E
  };
  g = m.x, E = m.y;
  var O = a.hasOwnProperty("x"), w = a.hasOwnProperty("y"), b = Je, y = Xe, x = window;
  if (u) {
    var R = ho(n), S = "clientHeight", k = "clientWidth";
    if (R === ot(n) && (R = Pt(n), Ot(R).position !== "static" && c === "absolute" && (S = "scrollHeight", k = "scrollWidth")), R = R, s === Xe || (s === Je || s === ct) && i === lo) {
      y = lt;
      var $ = h && R === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        R[S]
      );
      E -= $ - r.height, E *= l ? 1 : -1;
    }
    if (s === Je || (s === Xe || s === lt) && i === lo) {
      b = ct;
      var M = h && R === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        R[k]
      );
      g -= M - r.width, g *= l ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: c
  }, u && Ml), F = p === !0 ? Al({
    x: g,
    y: E
  }, ot(n)) : {
    x: g,
    y: E
  };
  if (g = F.x, E = F.y, l) {
    var L;
    return Object.assign({}, D, (L = {}, L[y] = w ? "0" : "", L[b] = O ? "0" : "", L.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + E + "px)" : "translate3d(" + g + "px, " + E + "px, 0)", L));
  }
  return Object.assign({}, D, (o = {}, o[y] = w ? E + "px" : "", o[b] = O ? g + "px" : "", o.transform = "", o));
}
function Fl(e) {
  var o = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, c = n.roundOffsets, l = c === void 0 ? !0 : c, u = {
    placement: bt(o.placement),
    variation: Gt(o.placement),
    popper: o.elements.popper,
    popperRect: o.rects.popper,
    gpuAcceleration: s,
    isFixed: o.options.strategy === "fixed"
  };
  o.modifiersData.popperOffsets != null && (o.styles.popper = Object.assign({}, o.styles.popper, Qn(Object.assign({}, u, {
    offsets: o.modifiersData.popperOffsets,
    position: o.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), o.modifiersData.arrow != null && (o.styles.arrow = Object.assign({}, o.styles.arrow, Qn(Object.assign({}, u, {
    offsets: o.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), o.attributes.popper = Object.assign({}, o.attributes.popper, {
    "data-popper-placement": o.placement
  });
}
const Dl = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Fl,
  data: {}
};
var To = {
  passive: !0
};
function Ll(e) {
  var o = e.state, n = e.instance, r = e.options, s = r.scroll, i = s === void 0 ? !0 : s, a = r.resize, c = a === void 0 ? !0 : a, l = ot(o.elements.popper), u = [].concat(o.scrollParents.reference, o.scrollParents.popper);
  return i && u.forEach(function(p) {
    p.addEventListener("scroll", n.update, To);
  }), c && l.addEventListener("resize", n.update, To), function() {
    i && u.forEach(function(p) {
      p.removeEventListener("scroll", n.update, To);
    }), c && l.removeEventListener("resize", n.update, To);
  };
}
const Bl = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Ll,
  data: {}
};
var jl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Io(e) {
  return e.replace(/left|right|bottom|top/g, function(o) {
    return jl[o];
  });
}
var _l = {
  start: "end",
  end: "start"
};
function er(e) {
  return e.replace(/start|end/g, function(o) {
    return _l[o];
  });
}
function Cn(e) {
  var o = ot(e), n = o.pageXOffset, r = o.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Tn(e) {
  return qt(Pt(e)).left + Cn(e).scrollLeft;
}
function zl(e, o) {
  var n = ot(e), r = Pt(e), s = n.visualViewport, i = r.clientWidth, a = r.clientHeight, c = 0, l = 0;
  if (s) {
    i = s.width, a = s.height;
    var u = ns();
    (u || !u && o === "fixed") && (c = s.offsetLeft, l = s.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: c + Tn(e),
    y: l
  };
}
function Vl(e) {
  var o, n = Pt(e), r = Cn(e), s = (o = e.ownerDocument) == null ? void 0 : o.body, i = Ft(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Ft(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), c = -r.scrollLeft + Tn(e), l = -r.scrollTop;
  return Ot(s || n).direction === "rtl" && (c += Ft(n.clientWidth, s ? s.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: c,
    y: l
  };
}
function wn(e) {
  var o = Ot(e), n = o.overflow, r = o.overflowX, s = o.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function ls(e) {
  return ["html", "body", "#document"].indexOf(yt(e)) >= 0 ? e.ownerDocument.body : at(e) && wn(e) ? e : ls(jo(e));
}
function so(e, o) {
  var n;
  o === void 0 && (o = []);
  var r = ls(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = ot(r), a = s ? [i].concat(i.visualViewport || [], wn(r) ? r : []) : r, c = o.concat(a);
  return s ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(so(jo(a)))
  );
}
function pn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Wl(e, o) {
  var n = qt(e, !1, o === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function tr(e, o, n) {
  return o === ts ? pn(zl(e, n)) : Dt(o) ? Wl(o, n) : pn(Vl(Pt(e)));
}
function Ul(e) {
  var o = so(jo(e)), n = ["absolute", "fixed"].indexOf(Ot(e).position) >= 0, r = n && at(e) ? ho(e) : e;
  return Dt(r) ? o.filter(function(s) {
    return Dt(s) && rs(s, r) && yt(s) !== "body";
  }) : [];
}
function Hl(e, o, n, r) {
  var s = o === "clippingParents" ? Ul(e) : [].concat(o), i = [].concat(s, [n]), a = i[0], c = i.reduce(function(l, u) {
    var p = tr(e, u, r);
    return l.top = Ft(p.top, l.top), l.right = Mo(p.right, l.right), l.bottom = Mo(p.bottom, l.bottom), l.left = Ft(p.left, l.left), l;
  }, tr(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function cs(e) {
  var o = e.reference, n = e.element, r = e.placement, s = r ? bt(r) : null, i = r ? Gt(r) : null, a = o.x + o.width / 2 - n.width / 2, c = o.y + o.height / 2 - n.height / 2, l;
  switch (s) {
    case Xe:
      l = {
        x: a,
        y: o.y - n.height
      };
      break;
    case lt:
      l = {
        x: a,
        y: o.y + o.height
      };
      break;
    case ct:
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
  var u = s ? On(s) : null;
  if (u != null) {
    var p = u === "y" ? "height" : "width";
    switch (i) {
      case Ut:
        l[u] = l[u] - (o[p] / 2 - n[p] / 2);
        break;
      case lo:
        l[u] = l[u] + (o[p] / 2 - n[p] / 2);
        break;
    }
  }
  return l;
}
function co(e, o) {
  o === void 0 && (o = {});
  var n = o, r = n.placement, s = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, c = n.boundary, l = c === void 0 ? dl : c, u = n.rootBoundary, p = u === void 0 ? ts : u, h = n.elementContext, v = h === void 0 ? Xt : h, g = n.altBoundary, T = g === void 0 ? !1 : g, E = n.padding, m = E === void 0 ? 0 : E, O = is(typeof m != "number" ? m : as(m, bo)), w = v === Xt ? pl : Xt, b = e.rects.popper, y = e.elements[T ? w : v], x = Hl(Dt(y) ? y : y.contextElement || Pt(e.elements.popper), l, p, a), R = qt(e.elements.reference), S = cs({
    reference: R,
    element: b,
    strategy: "absolute",
    placement: s
  }), k = pn(Object.assign({}, b, S)), $ = v === Xt ? k : R, M = {
    top: x.top - $.top + O.top,
    bottom: $.bottom - x.bottom + O.bottom,
    left: x.left - $.left + O.left,
    right: $.right - x.right + O.right
  }, D = e.modifiersData.offset;
  if (v === Xt && D) {
    var F = D[s];
    Object.keys(M).forEach(function(L) {
      var B = [ct, lt].indexOf(L) >= 0 ? 1 : -1, _ = [Xe, lt].indexOf(L) >= 0 ? "y" : "x";
      M[L] += F[_] * B;
    });
  }
  return M;
}
function ql(e, o) {
  o === void 0 && (o = {});
  var n = o, r = n.placement, s = n.boundary, i = n.rootBoundary, a = n.padding, c = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? os : l, p = Gt(r), h = p ? c ? Jn : Jn.filter(function(T) {
    return Gt(T) === p;
  }) : bo, v = h.filter(function(T) {
    return u.indexOf(T) >= 0;
  });
  v.length === 0 && (v = h);
  var g = v.reduce(function(T, E) {
    return T[E] = co(e, {
      placement: E,
      boundary: s,
      rootBoundary: i,
      padding: a
    })[bt(E)], T;
  }, {});
  return Object.keys(g).sort(function(T, E) {
    return g[T] - g[E];
  });
}
function Gl(e) {
  if (bt(e) === yn)
    return [];
  var o = Io(e);
  return [er(e), o, er(o)];
}
function Kl(e) {
  var o = e.state, n = e.options, r = e.name;
  if (!o.modifiersData[r]._skip) {
    for (var s = n.mainAxis, i = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, p = n.boundary, h = n.rootBoundary, v = n.altBoundary, g = n.flipVariations, T = g === void 0 ? !0 : g, E = n.allowedAutoPlacements, m = o.options.placement, O = bt(m), w = O === m, b = l || (w || !T ? [Io(m)] : Gl(m)), y = [m].concat(b).reduce(function(ee, ne) {
      return ee.concat(bt(ne) === yn ? ql(o, {
        placement: ne,
        boundary: p,
        rootBoundary: h,
        padding: u,
        flipVariations: T,
        allowedAutoPlacements: E
      }) : ne);
    }, []), x = o.rects.reference, R = o.rects.popper, S = /* @__PURE__ */ new Map(), k = !0, $ = y[0], M = 0; M < y.length; M++) {
      var D = y[M], F = bt(D), L = Gt(D) === Ut, B = [Xe, lt].indexOf(F) >= 0, _ = B ? "width" : "height", j = co(o, {
        placement: D,
        boundary: p,
        rootBoundary: h,
        altBoundary: v,
        padding: u
      }), V = B ? L ? ct : Je : L ? lt : Xe;
      x[_] > R[_] && (V = Io(V));
      var N = Io(V), U = [];
      if (i && U.push(j[F] <= 0), c && U.push(j[V] <= 0, j[N] <= 0), U.every(function(ee) {
        return ee;
      })) {
        $ = D, k = !1;
        break;
      }
      S.set(D, U);
    }
    if (k)
      for (var Z = T ? 3 : 1, he = function(ne) {
        var G = y.find(function(ue) {
          var X = S.get(ue);
          if (X)
            return X.slice(0, ne).every(function(pe) {
              return pe;
            });
        });
        if (G)
          return $ = G, "break";
      }, ve = Z; ve > 0; ve--) {
        var Ee = he(ve);
        if (Ee === "break")
          break;
      }
    o.placement !== $ && (o.modifiersData[r]._skip = !0, o.placement = $, o.reset = !0);
  }
}
const Yl = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Kl,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function or(e, o, n) {
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
function nr(e) {
  return [Xe, ct, lt, Je].some(function(o) {
    return e[o] >= 0;
  });
}
function Xl(e) {
  var o = e.state, n = e.name, r = o.rects.reference, s = o.rects.popper, i = o.modifiersData.preventOverflow, a = co(o, {
    elementContext: "reference"
  }), c = co(o, {
    altBoundary: !0
  }), l = or(a, r), u = or(c, s, i), p = nr(l), h = nr(u);
  o.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: p,
    hasPopperEscaped: h
  }, o.attributes.popper = Object.assign({}, o.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": h
  });
}
const Jl = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Xl
};
function Zl(e, o, n) {
  var r = bt(e), s = [Je, Xe].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, o, {
    placement: e
  })) : n, a = i[0], c = i[1];
  return a = a || 0, c = (c || 0) * s, [Je, ct].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function Ql(e) {
  var o = e.state, n = e.options, r = e.name, s = n.offset, i = s === void 0 ? [0, 0] : s, a = os.reduce(function(p, h) {
    return p[h] = Zl(h, o.rects, i), p;
  }, {}), c = a[o.placement], l = c.x, u = c.y;
  o.modifiersData.popperOffsets != null && (o.modifiersData.popperOffsets.x += l, o.modifiersData.popperOffsets.y += u), o.modifiersData[r] = a;
}
const ec = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ql
};
function tc(e) {
  var o = e.state, n = e.name;
  o.modifiersData[n] = cs({
    reference: o.rects.reference,
    element: o.rects.popper,
    strategy: "absolute",
    placement: o.placement
  });
}
const oc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: tc,
  data: {}
};
function nc(e) {
  return e === "x" ? "y" : "x";
}
function rc(e) {
  var o = e.state, n = e.options, r = e.name, s = n.mainAxis, i = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, h = n.padding, v = n.tether, g = v === void 0 ? !0 : v, T = n.tetherOffset, E = T === void 0 ? 0 : T, m = co(o, {
    boundary: l,
    rootBoundary: u,
    padding: h,
    altBoundary: p
  }), O = bt(o.placement), w = Gt(o.placement), b = !w, y = On(O), x = nc(y), R = o.modifiersData.popperOffsets, S = o.rects.reference, k = o.rects.popper, $ = typeof E == "function" ? E(Object.assign({}, o.rects, {
    placement: o.placement
  })) : E, M = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), D = o.modifiersData.offset ? o.modifiersData.offset[o.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (R) {
    if (i) {
      var L, B = y === "y" ? Xe : Je, _ = y === "y" ? lt : ct, j = y === "y" ? "height" : "width", V = R[y], N = V + m[B], U = V - m[_], Z = g ? -k[j] / 2 : 0, he = w === Ut ? S[j] : k[j], ve = w === Ut ? -k[j] : -S[j], Ee = o.elements.arrow, ee = g && Ee ? En(Ee) : {
        width: 0,
        height: 0
      }, ne = o.modifiersData["arrow#persistent"] ? o.modifiersData["arrow#persistent"].padding : ss(), G = ne[B], ue = ne[_], X = ro(0, S[j], ee[j]), pe = b ? S[j] / 2 - Z - X - G - M.mainAxis : he - X - G - M.mainAxis, Se = b ? -S[j] / 2 + Z + X + ue + M.mainAxis : ve + X + ue + M.mainAxis, ae = o.elements.arrow && ho(o.elements.arrow), ce = ae ? y === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, ie = (L = D == null ? void 0 : D[y]) != null ? L : 0, z = V + pe - ie - ce, se = V + Se - ie, K = ro(g ? Mo(N, z) : N, V, g ? Ft(U, se) : U);
      R[y] = K, F[y] = K - V;
    }
    if (c) {
      var $e, oe = y === "x" ? Xe : Je, De = y === "x" ? lt : ct, Ne = R[x], Te = x === "y" ? "height" : "width", Le = Ne + m[oe], Me = Ne - m[De], Re = [Xe, Je].indexOf(O) !== -1, qe = ($e = D == null ? void 0 : D[x]) != null ? $e : 0, Ge = Re ? Le : Ne - S[Te] - k[Te] - qe + M.altAxis, Ke = Re ? Ne + S[Te] + k[Te] - qe - M.altAxis : Me, re = g && Re ? Pl(Ge, Ne, Ke) : ro(g ? Ge : Le, Ne, g ? Ke : Me);
      R[x] = re, F[x] = re - Ne;
    }
    o.modifiersData[r] = F;
  }
}
const sc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: rc,
  requiresIfExists: ["offset"]
};
function ic(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ac(e) {
  return e === ot(e) || !at(e) ? Cn(e) : ic(e);
}
function lc(e) {
  var o = e.getBoundingClientRect(), n = Ht(o.width) / e.offsetWidth || 1, r = Ht(o.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function cc(e, o, n) {
  n === void 0 && (n = !1);
  var r = at(o), s = at(o) && lc(o), i = Pt(o), a = qt(e, s, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((yt(o) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  wn(i)) && (c = ac(o)), at(o) ? (l = qt(o, !0), l.x += o.clientLeft, l.y += o.clientTop) : i && (l.x = Tn(i))), {
    x: a.left + c.scrollLeft - l.x,
    y: a.top + c.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function uc(e) {
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
function dc(e) {
  var o = uc(e);
  return Ol.reduce(function(n, r) {
    return n.concat(o.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function pc(e) {
  var o;
  return function() {
    return o || (o = new Promise(function(n) {
      Promise.resolve().then(function() {
        o = void 0, n(e());
      });
    })), o;
  };
}
function fc(e) {
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
var rr = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function sr() {
  for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
    o[n] = arguments[n];
  return !o.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function mc(e) {
  e === void 0 && (e = {});
  var o = e, n = o.defaultModifiers, r = n === void 0 ? [] : n, s = o.defaultOptions, i = s === void 0 ? rr : s;
  return function(c, l, u) {
    u === void 0 && (u = i);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, rr, i),
      modifiersData: {},
      elements: {
        reference: c,
        popper: l
      },
      attributes: {},
      styles: {}
    }, h = [], v = !1, g = {
      state: p,
      setOptions: function(O) {
        var w = typeof O == "function" ? O(p.options) : O;
        E(), p.options = Object.assign({}, i, p.options, w), p.scrollParents = {
          reference: Dt(c) ? so(c) : c.contextElement ? so(c.contextElement) : [],
          popper: so(l)
        };
        var b = dc(fc([].concat(r, p.options.modifiers)));
        return p.orderedModifiers = b.filter(function(y) {
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
          var O = p.elements, w = O.reference, b = O.popper;
          if (sr(w, b)) {
            p.rects = {
              reference: cc(w, ho(b), p.options.strategy === "fixed"),
              popper: En(b)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(M) {
              return p.modifiersData[M.name] = Object.assign({}, M.data);
            });
            for (var y = 0; y < p.orderedModifiers.length; y++) {
              if (p.reset === !0) {
                p.reset = !1, y = -1;
                continue;
              }
              var x = p.orderedModifiers[y], R = x.fn, S = x.options, k = S === void 0 ? {} : S, $ = x.name;
              typeof R == "function" && (p = R({
                state: p,
                options: k,
                name: $,
                instance: g
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: pc(function() {
        return new Promise(function(m) {
          g.forceUpdate(), m(p);
        });
      }),
      destroy: function() {
        E(), v = !0;
      }
    };
    if (!sr(c, l))
      return g;
    g.setOptions(u).then(function(m) {
      !v && u.onFirstUpdate && u.onFirstUpdate(m);
    });
    function T() {
      p.orderedModifiers.forEach(function(m) {
        var O = m.name, w = m.options, b = w === void 0 ? {} : w, y = m.effect;
        if (typeof y == "function") {
          var x = y({
            state: p,
            name: O,
            instance: g,
            options: b
          }), R = function() {
          };
          h.push(x || R);
        }
      });
    }
    function E() {
      h.forEach(function(m) {
        return m();
      }), h = [];
    }
    return g;
  };
}
var bc = [Bl, oc, Dl, wl, ec, Yl, sc, kl, Jl], hc = /* @__PURE__ */ mc({
  defaultModifiers: bc
});
const us = "Popper";
function vc(e) {
  return es(us, e);
}
Ka(us, ["root"]);
const gc = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], yc = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function xc(e, o) {
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
function Ao(e) {
  return typeof e == "function" ? e() : e;
}
function _o(e) {
  return e.nodeType !== void 0;
}
function Ec(e) {
  return !_o(e);
}
const Oc = () => xe({
  root: ["root"]
}, Ca(vc)), Cc = {}, Tc = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r;
  const {
    anchorEl: s,
    children: i,
    direction: a,
    disablePortal: c,
    modifiers: l,
    open: u,
    placement: p,
    popperOptions: h,
    popperRef: v,
    slotProps: g = {},
    slots: T = {},
    TransitionProps: E
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = o, m = J(o, gc), O = f.useRef(null), w = ze(O, n), b = f.useRef(null), y = ze(b, v), x = f.useRef(y);
  vt(() => {
    x.current = y;
  }, [y]), f.useImperativeHandle(v, () => b.current, []);
  const R = xc(p, a), [S, k] = f.useState(R), [$, M] = f.useState(Ao(s));
  f.useEffect(() => {
    b.current && b.current.forceUpdate();
  }), f.useEffect(() => {
    s && M(Ao(s));
  }, [s]), vt(() => {
    if (!$ || !u)
      return;
    const _ = (N) => {
      k(N.placement);
    };
    if (process.env.NODE_ENV !== "production" && $ && _o($) && $.nodeType === 1) {
      const N = $.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && N.top === 0 && N.left === 0 && N.right === 0 && N.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
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
        state: N
      }) => {
        _(N);
      }
    }];
    l != null && (j = j.concat(l)), h && h.modifiers != null && (j = j.concat(h.modifiers));
    const V = hc($, O.current, d({
      placement: R
    }, h, {
      modifiers: j
    }));
    return x.current(V), () => {
      V.destroy(), x.current(null);
    };
  }, [$, c, l, u, h, R]);
  const D = {
    placement: S
  };
  E !== null && (D.TransitionProps = E);
  const F = Oc(), L = (r = T.root) != null ? r : "div", B = ft({
    elementType: L,
    externalSlotProps: g.root,
    externalForwardedProps: m,
    additionalProps: {
      role: "tooltip",
      ref: w
    },
    ownerState: o,
    className: F.root
  });
  return /* @__PURE__ */ I(L, d({}, B, {
    children: typeof i == "function" ? i(D) : i
  }));
}), ds = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const {
    anchorEl: r,
    children: s,
    container: i,
    direction: a = "ltr",
    disablePortal: c = !1,
    keepMounted: l = !1,
    modifiers: u,
    open: p,
    placement: h = "bottom",
    popperOptions: v = Cc,
    popperRef: g,
    style: T,
    transition: E = !1,
    slotProps: m = {},
    slots: O = {}
  } = o, w = J(o, yc), [b, y] = f.useState(!0), x = () => {
    y(!1);
  }, R = () => {
    y(!0);
  };
  if (!l && !p && (!E || b))
    return null;
  let S;
  if (i)
    S = i;
  else if (r) {
    const M = Ao(r);
    S = M && _o(M) ? He(M).body : He(null).body;
  }
  const k = !p && l && (!E || b) ? "none" : void 0, $ = E ? {
    in: p,
    onEnter: x,
    onExited: R
  } : void 0;
  return /* @__PURE__ */ I(ao, {
    disablePortal: c,
    container: S,
    children: /* @__PURE__ */ I(Tc, d({
      anchorEl: r,
      direction: a,
      disablePortal: c,
      modifiers: u,
      ref: n,
      open: E ? !b : p,
      placement: h,
      popperOptions: v,
      popperRef: g,
      slotProps: m,
      slots: O
    }, w, {
      style: d({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: k
      }, T),
      TransitionProps: $,
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
  anchorEl: ht(t.oneOfType([gt, t.object, t.func]), (e) => {
    if (e.open) {
      const o = Ao(e.anchorEl);
      if (o && _o(o) && o.nodeType === 1) {
        const n = o.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!o || typeof o.getBoundingClientRect != "function" || Ec(o) && o.contextElement != null && o.contextElement.nodeType !== 1)
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
  container: t.oneOfType([gt, t.func]),
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
const wc = ["onChange", "maxRows", "minRows", "style", "value"];
function wo(e) {
  return parseInt(e, 10) || 0;
}
const Sc = {
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
function Rc(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const ps = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const {
    onChange: r,
    maxRows: s,
    minRows: i = 1,
    style: a,
    value: c
  } = o, l = J(o, wc), {
    current: u
  } = f.useRef(c != null), p = f.useRef(null), h = ze(n, p), v = f.useRef(null), g = f.useCallback(() => {
    const m = p.current, w = pt(m).getComputedStyle(m);
    if (w.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const b = v.current;
    b.style.width = w.width, b.value = m.value || o.placeholder || "x", b.value.slice(-1) === `
` && (b.value += " ");
    const y = w.boxSizing, x = wo(w.paddingBottom) + wo(w.paddingTop), R = wo(w.borderBottomWidth) + wo(w.borderTopWidth), S = b.scrollHeight;
    b.value = "x";
    const k = b.scrollHeight;
    let $ = S;
    i && ($ = Math.max(Number(i) * k, $)), s && ($ = Math.min(Number(s) * k, $)), $ = Math.max($, k);
    const M = $ + (y === "border-box" ? x + R : 0), D = Math.abs($ - S) <= 1;
    return {
      outerHeightStyle: M,
      overflowing: D
    };
  }, [s, i, o.placeholder]), T = f.useCallback(() => {
    const m = g();
    if (Rc(m))
      return;
    const O = p.current;
    O.style.height = `${m.outerHeightStyle}px`, O.style.overflow = m.overflowing ? "hidden" : "";
  }, [g]);
  vt(() => {
    const m = () => {
      T();
    };
    let O;
    const w = () => {
      cancelAnimationFrame(O), O = requestAnimationFrame(() => {
        m();
      });
    }, b = po(m), y = p.current, x = pt(y);
    x.addEventListener("resize", b);
    let R;
    return typeof ResizeObserver < "u" && (R = new ResizeObserver(process.env.NODE_ENV === "test" ? w : m), R.observe(y)), () => {
      b.clear(), cancelAnimationFrame(O), x.removeEventListener("resize", b), R && R.disconnect();
    };
  }, [g, T]), vt(() => {
    T();
  });
  const E = (m) => {
    u || T(), r && r(m);
  };
  return /* @__PURE__ */ ke(f.Fragment, {
    children: [/* @__PURE__ */ I("textarea", d({
      value: c,
      onChange: E,
      ref: h,
      rows: i
    }, l)), /* @__PURE__ */ I("textarea", {
      "aria-hidden": !0,
      className: o.className,
      readOnly: !0,
      ref: v,
      tabIndex: -1,
      style: d({}, Sc.shadow, a, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (ps.propTypes = {
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
function ir(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function Pc(e = {}) {
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
    getOptionLabel: u
  }) => {
    let p = a ? l.trim() : l;
    n && (p = p.toLowerCase()), o && (p = ir(p));
    const h = p ? c.filter((v) => {
      let g = (i || u)(v);
      return n && (g = g.toLowerCase()), o && (g = ir(g)), s === "start" ? g.indexOf(p) === 0 : g.indexOf(p) > -1;
    }) : c;
    return typeof r == "number" ? h.slice(0, r) : h;
  };
}
function en(e, o) {
  for (let n = 0; n < e.length; n += 1)
    if (o(e[n]))
      return n;
  return -1;
}
const Ic = Pc(), ar = 5, $c = (e) => {
  var o;
  return e.current !== null && ((o = e.current.parentElement) == null ? void 0 : o.contains(document.activeElement));
};
function Nc(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: o = $c,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: r = !1,
    autoHighlight: s = !1,
    autoSelect: i = !1,
    blurOnSelect: a = !1,
    clearOnBlur: c = !e.freeSolo,
    clearOnEscape: l = !1,
    componentName: u = "useAutocomplete",
    defaultValue: p = e.multiple ? [] : null,
    disableClearable: h = !1,
    disableCloseOnSelect: v = !1,
    disabled: g,
    disabledItemsFocusable: T = !1,
    disableListWrap: E = !1,
    filterOptions: m = Ic,
    filterSelectedOptions: O = !1,
    freeSolo: w = !1,
    getOptionDisabled: b,
    getOptionKey: y,
    getOptionLabel: x = (P) => {
      var C;
      return (C = P.label) != null ? C : P;
    },
    groupBy: R,
    handleHomeEndKeys: S = !e.freeSolo,
    id: k,
    includeInputInList: $ = !1,
    inputValue: M,
    isOptionEqualToValue: D = (P, C) => P === C,
    multiple: F = !1,
    onChange: L,
    onClose: B,
    onHighlightChange: _,
    onInputChange: j,
    onOpen: V,
    open: N,
    openOnFocus: U = !1,
    options: Z,
    readOnly: he = !1,
    selectOnFocus: ve = !e.freeSolo,
    value: Ee
  } = e, ee = hn(k);
  let ne = x;
  ne = (P) => {
    const C = x(P);
    if (typeof C != "string") {
      if (process.env.NODE_ENV !== "production") {
        const W = C === void 0 ? "undefined" : `${typeof C} (${C})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${u} returned ${W} instead of a string for ${JSON.stringify(P)}.`);
      }
      return String(C);
    }
    return C;
  };
  const G = f.useRef(!1), ue = f.useRef(!0), X = f.useRef(null), pe = f.useRef(null), [Se, ae] = f.useState(null), [ce, ie] = f.useState(-1), z = s ? 0 : -1, se = f.useRef(z), [K, $e] = At({
    controlled: Ee,
    default: p,
    name: u
  }), [oe, De] = At({
    controlled: M,
    default: "",
    name: u,
    state: "inputValue"
  }), [Ne, Te] = f.useState(!1), Le = f.useCallback((P, C) => {
    if (!(F ? K.length < C.length : C !== null) && !c)
      return;
    let Q;
    if (F)
      Q = "";
    else if (C == null)
      Q = "";
    else {
      const we = ne(C);
      Q = typeof we == "string" ? we : "";
    }
    oe !== Q && (De(Q), j && j(P, Q, "reset"));
  }, [ne, oe, F, j, De, c, K]), [Me, Re] = At({
    controlled: N,
    default: !1,
    name: u,
    state: "open"
  }), [qe, Ge] = f.useState(!0), Ke = !F && K != null && oe === ne(K), re = Me && !he, ge = re ? m(
    Z.filter((P) => !(O && (F ? K : [K]).some((C) => C !== null && D(P, C)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Ke && qe ? "" : oe,
      getOptionLabel: ne
    }
  ) : [], Be = Gi({
    filteredOptions: ge,
    value: K,
    inputValue: oe
  });
  f.useEffect(() => {
    const P = K !== Be.value;
    Ne && !P || w && !P || Le(null, K);
  }, [K, Le, Ne, Be.value, w]);
  const Ye = Me && ge.length > 0 && !he;
  if (process.env.NODE_ENV !== "production" && K !== null && !w && Z.length > 0) {
    const P = (F ? K : [K]).filter((C) => !Z.some((W) => D(W, C)));
    P.length > 0 && console.warn([`MUI: The value provided to ${u} is invalid.`, `None of the options match with \`${P.length > 1 ? JSON.stringify(P) : JSON.stringify(P[0])}\`.`, "You can use the `isOptionEqualToValue` prop to customize the equality test."].join(`
`));
  }
  const rt = Et((P) => {
    P === -1 ? X.current.focus() : Se.querySelector(`[data-tag-index="${P}"]`).focus();
  });
  f.useEffect(() => {
    F && ce > K.length - 1 && (ie(-1), rt(-1));
  }, [K, F, ce, rt]);
  function ut(P, C) {
    if (!pe.current || P < 0 || P >= ge.length)
      return -1;
    let W = P;
    for (; ; ) {
      const Q = pe.current.querySelector(`[data-option-index="${W}"]`), we = T ? !1 : !Q || Q.disabled || Q.getAttribute("aria-disabled") === "true";
      if (Q && Q.hasAttribute("tabindex") && !we)
        return W;
      if (C === "next" ? W = (W + 1) % ge.length : W = (W - 1 + ge.length) % ge.length, W === P)
        return -1;
    }
  }
  const Y = Et(({
    event: P,
    index: C,
    reason: W = "auto"
  }) => {
    if (se.current = C, C === -1 ? X.current.removeAttribute("aria-activedescendant") : X.current.setAttribute("aria-activedescendant", `${ee}-option-${C}`), _ && _(P, C === -1 ? null : ge[C], W), !pe.current)
      return;
    const Q = pe.current.querySelector(`[role="option"].${n}-focused`);
    Q && (Q.classList.remove(`${n}-focused`), Q.classList.remove(`${n}-focusVisible`));
    let we = pe.current;
    if (pe.current.getAttribute("role") !== "listbox" && (we = pe.current.parentElement.querySelector('[role="listbox"]')), !we)
      return;
    if (C === -1) {
      we.scrollTop = 0;
      return;
    }
    const Ae = pe.current.querySelector(`[data-option-index="${C}"]`);
    if (Ae && (Ae.classList.add(`${n}-focused`), W === "keyboard" && Ae.classList.add(`${n}-focusVisible`), we.scrollHeight > we.clientHeight && W !== "mouse" && W !== "touch")) {
      const _e = Ae, Qe = we.clientHeight + we.scrollTop, xo = _e.offsetTop + _e.offsetHeight;
      xo > Qe ? we.scrollTop = xo - we.clientHeight : _e.offsetTop - _e.offsetHeight * (R ? 1.3 : 0) < we.scrollTop && (we.scrollTop = _e.offsetTop - _e.offsetHeight * (R ? 1.3 : 0));
    }
  }), A = Et(({
    event: P,
    diff: C,
    direction: W = "next",
    reason: Q = "auto"
  }) => {
    if (!re)
      return;
    const Ae = ut((() => {
      const _e = ge.length - 1;
      if (C === "reset")
        return z;
      if (C === "start")
        return 0;
      if (C === "end")
        return _e;
      const Qe = se.current + C;
      return Qe < 0 ? Qe === -1 && $ ? -1 : E && se.current !== -1 || Math.abs(C) > 1 ? 0 : _e : Qe > _e ? Qe === _e + 1 && $ ? -1 : E || Math.abs(C) > 1 ? _e : 0 : Qe;
    })(), W);
    if (Y({
      index: Ae,
      reason: Q,
      event: P
    }), r && C !== "reset")
      if (Ae === -1)
        X.current.value = oe;
      else {
        const _e = ne(ge[Ae]);
        X.current.value = _e, _e.toLowerCase().indexOf(oe.toLowerCase()) === 0 && oe.length > 0 && X.current.setSelectionRange(oe.length, _e.length);
      }
  }), q = () => {
    const P = (C, W) => {
      const Q = C ? ne(C) : "", we = W ? ne(W) : "";
      return Q === we;
    };
    if (se.current !== -1 && Be.filteredOptions && Be.filteredOptions.length !== ge.length && Be.inputValue === oe && (F ? K.length === Be.value.length && Be.value.every((C, W) => ne(K[W]) === ne(C)) : P(Be.value, K))) {
      const C = Be.filteredOptions[se.current];
      if (C && ge.some((Q) => ne(Q) === ne(C)))
        return !0;
    }
    return !1;
  }, le = f.useCallback(() => {
    if (!re || q())
      return;
    const P = F ? K[0] : K;
    if (ge.length === 0 || P == null) {
      A({
        diff: "reset"
      });
      return;
    }
    if (pe.current) {
      if (P != null) {
        const C = ge[se.current];
        if (F && C && en(K, (Q) => D(C, Q)) !== -1)
          return;
        const W = en(ge, (Q) => D(Q, P));
        W === -1 ? A({
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
    F ? !1 : K,
    O,
    A,
    Y,
    re,
    oe,
    F
  ]), me = Et((P) => {
    sn(pe, P), P && le();
  });
  process.env.NODE_ENV !== "production" && f.useEffect(() => {
    (!X.current || X.current.nodeName !== "INPUT") && (X.current && X.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${u} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (e.g. enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${X.current} while an HTMLInputElement was expected.`, `Instead, ${u} expects an input element.`, "", u === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [u]), f.useEffect(() => {
    le();
  }, [le]);
  const Ce = (P) => {
    Me || (Re(!0), Ge(!0), V && V(P));
  }, Fe = (P, C) => {
    Me && (Re(!1), B && B(P, C));
  }, je = (P, C, W, Q) => {
    if (F) {
      if (K.length === C.length && K.every((we, Ae) => we === C[Ae]))
        return;
    } else if (K === C)
      return;
    L && L(P, C, W, Q), $e(C);
  }, st = f.useRef(!1), We = (P, C, W = "selectOption", Q = "options") => {
    let we = W, Ae = C;
    if (F) {
      if (Ae = Array.isArray(K) ? K.slice() : [], process.env.NODE_ENV !== "production") {
        const Qe = Ae.filter((xo) => D(C, xo));
        Qe.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${u} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${Qe.length} matches.`].join(`
`));
      }
      const _e = en(Ae, (Qe) => D(C, Qe));
      _e === -1 ? Ae.push(C) : Q !== "freeSolo" && (Ae.splice(_e, 1), we = "removeOption");
    }
    Le(P, Ae), je(P, Ae, we, {
      option: C
    }), !v && (!P || !P.ctrlKey && !P.metaKey) && Fe(P, we), (a === !0 || a === "touch" && st.current || a === "mouse" && !st.current) && X.current.blur();
  };
  function wt(P, C) {
    if (P === -1)
      return -1;
    let W = P;
    for (; ; ) {
      if (C === "next" && W === K.length || C === "previous" && W === -1)
        return -1;
      const Q = Se.querySelector(`[data-tag-index="${W}"]`);
      if (!Q || !Q.hasAttribute("tabindex") || Q.disabled || Q.getAttribute("aria-disabled") === "true")
        W += C === "next" ? 1 : -1;
      else
        return W;
    }
  }
  const vo = (P, C) => {
    if (!F)
      return;
    oe === "" && Fe(P, "toggleInput");
    let W = ce;
    ce === -1 ? oe === "" && C === "previous" && (W = K.length - 1) : (W += C === "next" ? 1 : -1, W < 0 && (W = 0), W === K.length && (W = -1)), W = wt(W, C), ie(W), rt(W);
  }, go = (P) => {
    G.current = !0, De(""), j && j(P, "", "clear"), je(P, F ? [] : null, "clear");
  }, qo = (P) => (C) => {
    if (P.onKeyDown && P.onKeyDown(C), !C.defaultMuiPrevented && (ce !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(C.key) === -1 && (ie(-1), rt(-1)), C.which !== 229))
      switch (C.key) {
        case "Home":
          re && S && (C.preventDefault(), A({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: C
          }));
          break;
        case "End":
          re && S && (C.preventDefault(), A({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: C
          }));
          break;
        case "PageUp":
          C.preventDefault(), A({
            diff: -ar,
            direction: "previous",
            reason: "keyboard",
            event: C
          }), Ce(C);
          break;
        case "PageDown":
          C.preventDefault(), A({
            diff: ar,
            direction: "next",
            reason: "keyboard",
            event: C
          }), Ce(C);
          break;
        case "ArrowDown":
          C.preventDefault(), A({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: C
          }), Ce(C);
          break;
        case "ArrowUp":
          C.preventDefault(), A({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: C
          }), Ce(C);
          break;
        case "ArrowLeft":
          vo(C, "previous");
          break;
        case "ArrowRight":
          vo(C, "next");
          break;
        case "Enter":
          if (se.current !== -1 && re) {
            const W = ge[se.current], Q = b ? b(W) : !1;
            if (C.preventDefault(), Q)
              return;
            We(C, W, "selectOption"), r && X.current.setSelectionRange(X.current.value.length, X.current.value.length);
          } else
            w && oe !== "" && Ke === !1 && (F && C.preventDefault(), We(C, oe, "createOption", "freeSolo"));
          break;
        case "Escape":
          re ? (C.preventDefault(), C.stopPropagation(), Fe(C, "escape")) : l && (oe !== "" || F && K.length > 0) && (C.preventDefault(), C.stopPropagation(), go(C));
          break;
        case "Backspace":
          if (F && !he && oe === "" && K.length > 0) {
            const W = ce === -1 ? K.length - 1 : ce, Q = K.slice();
            Q.splice(W, 1), je(C, Q, "removeOption", {
              option: K[W]
            });
          }
          break;
        case "Delete":
          if (F && !he && oe === "" && K.length > 0 && ce !== -1) {
            const W = ce, Q = K.slice();
            Q.splice(W, 1), je(C, Q, "removeOption", {
              option: K[W]
            });
          }
          break;
      }
  }, Dn = (P) => {
    Te(!0), U && !G.current && Ce(P);
  }, Bt = (P) => {
    if (o(pe)) {
      X.current.focus();
      return;
    }
    Te(!1), ue.current = !0, G.current = !1, i && se.current !== -1 && re ? We(P, ge[se.current], "blur") : i && w && oe !== "" ? We(P, oe, "blur", "freeSolo") : c && Le(P, K), Fe(P, "blur");
  }, Ue = (P) => {
    const C = P.target.value;
    oe !== C && (De(C), Ge(!1), j && j(P, C, "input")), C === "" ? !h && !F && je(P, null, "clear") : Ce(P);
  }, Ve = (P) => {
    const C = Number(P.currentTarget.getAttribute("data-option-index"));
    se.current !== C && Y({
      event: P,
      index: C,
      reason: "mouse"
    });
  }, dt = (P) => {
    Y({
      event: P,
      index: Number(P.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), st.current = !0;
  }, Ln = (P) => {
    const C = Number(P.currentTarget.getAttribute("data-option-index"));
    We(P, ge[C], "selectOption"), st.current = !1;
  }, Go = (P) => (C) => {
    const W = K.slice();
    W.splice(P, 1), je(C, W, "removeOption", {
      option: K[P]
    });
  }, Ko = (P) => {
    Me ? Fe(P, "toggleInput") : Ce(P);
  }, Yo = (P) => {
    P.currentTarget.contains(P.target) && P.target.getAttribute("id") !== ee && P.preventDefault();
  }, yo = (P) => {
    P.currentTarget.contains(P.target) && (X.current.focus(), ve && ue.current && X.current.selectionEnd - X.current.selectionStart === 0 && X.current.select(), ue.current = !1);
  }, Yt = (P) => {
    !g && (oe === "" || !Me) && Ko(P);
  };
  let $t = w && oe.length > 0;
  $t = $t || (F ? K.length > 0 : K !== null);
  let jt = ge;
  if (R) {
    const P = /* @__PURE__ */ new Map();
    let C = !1;
    jt = ge.reduce((W, Q, we) => {
      const Ae = R(Q);
      return W.length > 0 && W[W.length - 1].group === Ae ? W[W.length - 1].options.push(Q) : (process.env.NODE_ENV !== "production" && (P.get(Ae) && !C && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${u} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), C = !0), P.set(Ae, !0)), W.push({
        key: we,
        index: we,
        group: Ae,
        options: [Q]
      })), W;
    }, []);
  }
  return g && Ne && Bt(), {
    getRootProps: (P = {}) => d({
      "aria-owns": Ye ? `${ee}-listbox` : null
    }, P, {
      onKeyDown: qo(P),
      onMouseDown: Yo,
      onClick: yo
    }),
    getInputLabelProps: () => ({
      id: `${ee}-label`,
      htmlFor: ee
    }),
    getInputProps: () => ({
      id: ee,
      value: oe,
      onBlur: Bt,
      onFocus: Dn,
      onChange: Ue,
      onMouseDown: Yt,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": re ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": Ye ? `${ee}-listbox` : void 0,
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
      onClick: go
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Ko
    }),
    getTagProps: ({
      index: P
    }) => d({
      key: P,
      "data-tag-index": P,
      tabIndex: -1
    }, !he && {
      onDelete: Go(P)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${ee}-listbox`,
      "aria-labelledby": `${ee}-label`,
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
      const Q = (F ? K : [K]).some((Ae) => Ae != null && D(C, Ae)), we = b ? b(C) : !1;
      return {
        key: (W = y == null ? void 0 : y(C)) != null ? W : ne(C),
        tabIndex: -1,
        role: "option",
        id: `${ee}-option-${P}`,
        onMouseMove: Ve,
        onClick: Ln,
        onTouchStart: dt,
        "data-option-index": P,
        "aria-disabled": we,
        "aria-selected": Q
      };
    },
    id: ee,
    inputValue: oe,
    value: K,
    dirty: $t,
    expanded: re && Se,
    popupOpen: re,
    focused: Ne || ce !== -1,
    anchorEl: Se,
    setAnchorEl: ae,
    focusedTag: ce,
    groupedOptions: jt
  };
}
function kc(e) {
  return fe("MuiIconButton", e);
}
const Mc = be("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Ac = Mc, Fc = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], Dc = (e) => {
  const {
    classes: o,
    disabled: n,
    color: r,
    edge: s,
    size: i
  } = e, a = {
    root: ["root", n && "disabled", r !== "default" && `color${de(r)}`, s && `edge${de(s)}`, `size${de(i)}`]
  };
  return xe(a, kc, o);
}, Lc = H(Kt, {
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
}) => d({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : it(e.palette.action.active, e.palette.action.hoverOpacity),
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
  return d({}, o.color === "inherit" && {
    color: "inherit"
  }, o.color !== "inherit" && o.color !== "default" && d({
    color: r == null ? void 0 : r.main
  }, !o.disableRipple && {
    "&:hover": d({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : it(r.main, e.palette.action.hoverOpacity)
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
    [`&.${Ac.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), fs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiIconButton"
  }), {
    edge: s = !1,
    children: i,
    className: a,
    color: c = "default",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    size: p = "medium"
  } = r, h = J(r, Fc), v = d({}, r, {
    edge: s,
    color: c,
    disabled: l,
    disableFocusRipple: u,
    size: p
  }), g = Dc(v);
  return /* @__PURE__ */ I(Lc, d({
    className: te(g.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l,
    ref: n
  }, h, {
    ownerState: v,
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (fs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: ht(t.node, (e) => f.Children.toArray(e.children).some((n) => /* @__PURE__ */ f.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const ms = fs, Bc = Lt(/* @__PURE__ */ I("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
var Sn = {};
Object.defineProperty(Sn, "__esModule", {
  value: !0
});
var bs = Sn.default = void 0, jc = zc(eo), _c = Si;
function hs(e) {
  if (typeof WeakMap != "function")
    return null;
  var o = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (hs = function(r) {
    return r ? n : o;
  })(e);
}
function zc(e, o) {
  if (!o && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = hs(o);
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
function Vc(e) {
  return Object.keys(e).length === 0;
}
function Wc(e = null) {
  const o = jc.useContext(_c.ThemeContext);
  return !o || Vc(o) ? e : o;
}
bs = Sn.default = Wc;
const Uc = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], Hc = H(ds, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, o) => o.root
})({}), vs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r;
  const s = bs(), i = Oe({
    props: o,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: c,
    components: l,
    componentsProps: u,
    container: p,
    disablePortal: h,
    keepMounted: v,
    modifiers: g,
    open: T,
    placement: E,
    popperOptions: m,
    popperRef: O,
    transition: w,
    slots: b,
    slotProps: y
  } = i, x = J(i, Uc), R = (r = b == null ? void 0 : b.root) != null ? r : l == null ? void 0 : l.Root, S = d({
    anchorEl: a,
    container: p,
    disablePortal: h,
    keepMounted: v,
    modifiers: g,
    open: T,
    placement: E,
    popperOptions: m,
    popperRef: O,
    transition: w
  }, x);
  return /* @__PURE__ */ I(Hc, d({
    as: c,
    direction: s == null ? void 0 : s.direction,
    slots: {
      root: R
    },
    slotProps: y ?? u
  }, S, {
    ref: n
  }));
});
process.env.NODE_ENV !== "production" && (vs.propTypes = {
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
  anchorEl: t.oneOfType([gt, t.object, t.func]),
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
  container: t.oneOfType([gt, t.func]),
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
const gs = vs;
function qc(e) {
  return fe("MuiListSubheader", e);
}
const Gc = be("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]), Pm = Gc, Kc = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], Yc = (e) => {
  const {
    classes: o,
    color: n,
    disableGutters: r,
    inset: s,
    disableSticky: i
  } = e, a = {
    root: ["root", n !== "default" && `color${de(n)}`, !r && "gutters", s && "inset", !i && "sticky"]
  };
  return xe(a, qc, o);
}, Xc = H("li", {
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
}) => d({
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
})), Rn = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiListSubheader"
  }), {
    className: s,
    color: i = "default",
    component: a = "li",
    disableGutters: c = !1,
    disableSticky: l = !1,
    inset: u = !1
  } = r, p = J(r, Kc), h = d({}, r, {
    color: i,
    component: a,
    disableGutters: c,
    disableSticky: l,
    inset: u
  }), v = Yc(h);
  return /* @__PURE__ */ I(Xc, d({
    as: a,
    className: te(v.root, s),
    ref: n,
    ownerState: h
  }, p));
});
Rn.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (Rn.propTypes = {
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
const Jc = Rn;
function It({
  props: e,
  states: o,
  muiFormControl: n
}) {
  return o.reduce((r, s) => (r[s] = e[s], n && typeof e[s] > "u" && (r[s] = n[s]), r), {});
}
const ys = /* @__PURE__ */ f.createContext(void 0);
process.env.NODE_ENV !== "production" && (ys.displayName = "FormControlContext");
const zo = ys;
function xt() {
  return f.useContext(zo);
}
function xs(e) {
  return /* @__PURE__ */ I(Fr, d({}, e, {
    defaultTheme: Ri,
    themeId: Oi
  }));
}
process.env.NODE_ENV !== "production" && (xs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: t.oneOfType([t.array, t.func, t.number, t.object, t.string, t.bool])
});
function lr(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Fo(e, o = !1) {
  return e && (lr(e.value) && e.value !== "" || o && lr(e.defaultValue) && e.defaultValue !== "");
}
function Zc(e) {
  return e.startAdornment;
}
function Qc(e) {
  return fe("MuiInputBase", e);
}
const eu = be("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), et = eu, tu = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], Vo = (e, o) => {
  const {
    ownerState: n
  } = e;
  return [o.root, n.formControl && o.formControl, n.startAdornment && o.adornedStart, n.endAdornment && o.adornedEnd, n.error && o.error, n.size === "small" && o.sizeSmall, n.multiline && o.multiline, n.color && o[`color${de(n.color)}`], n.fullWidth && o.fullWidth, n.hiddenLabel && o.hiddenLabel];
}, Wo = (e, o) => {
  const {
    ownerState: n
  } = e;
  return [o.input, n.size === "small" && o.inputSizeSmall, n.multiline && o.inputMultiline, n.type === "search" && o.inputTypeSearch, n.startAdornment && o.inputAdornedStart, n.endAdornment && o.inputAdornedEnd, n.hiddenLabel && o.inputHiddenLabel];
}, ou = (e) => {
  const {
    classes: o,
    color: n,
    disabled: r,
    error: s,
    endAdornment: i,
    focused: a,
    formControl: c,
    fullWidth: l,
    hiddenLabel: u,
    multiline: p,
    readOnly: h,
    size: v,
    startAdornment: g,
    type: T
  } = e, E = {
    root: ["root", `color${de(n)}`, r && "disabled", s && "error", l && "fullWidth", a && "focused", c && "formControl", v && v !== "medium" && `size${de(v)}`, p && "multiline", g && "adornedStart", i && "adornedEnd", u && "hiddenLabel", h && "readOnly"],
    input: ["input", r && "disabled", T === "search" && "inputTypeSearch", p && "inputMultiline", v === "small" && "inputSizeSmall", u && "inputHiddenLabel", g && "inputAdornedStart", i && "inputAdornedEnd", h && "readOnly"]
  };
  return xe(E, Qc, o);
}, Uo = H("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Vo
})(({
  theme: e,
  ownerState: o
}) => d({}, e.typography.body1, {
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
}, o.multiline && d({
  padding: "4px 0 5px"
}, o.size === "small" && {
  paddingTop: 1
}), o.fullWidth && {
  width: "100%"
})), Ho = H("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Wo
})(({
  theme: e,
  ownerState: o
}) => {
  const n = e.palette.mode === "light", r = d({
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
  return d({
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
}), nu = /* @__PURE__ */ I(xs, {
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
}), Es = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r;
  const s = Oe({
    props: o,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: a,
    autoFocus: c,
    className: l,
    components: u = {},
    componentsProps: p = {},
    defaultValue: h,
    disabled: v,
    disableInjectingGlobalStyles: g,
    endAdornment: T,
    fullWidth: E = !1,
    id: m,
    inputComponent: O = "input",
    inputProps: w = {},
    inputRef: b,
    maxRows: y,
    minRows: x,
    multiline: R = !1,
    name: S,
    onBlur: k,
    onChange: $,
    onClick: M,
    onFocus: D,
    onKeyDown: F,
    onKeyUp: L,
    placeholder: B,
    readOnly: _,
    renderSuffix: j,
    rows: V,
    slotProps: N = {},
    slots: U = {},
    startAdornment: Z,
    type: he = "text",
    value: ve
  } = s, Ee = J(s, tu), ee = w.value != null ? w.value : ve, {
    current: ne
  } = f.useRef(ee != null), G = f.useRef(), ue = f.useCallback((re) => {
    process.env.NODE_ENV !== "production" && re && re.nodeName !== "INPUT" && !re.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), X = ze(G, b, w.ref, ue), [pe, Se] = f.useState(!1), ae = xt();
  process.env.NODE_ENV !== "production" && f.useEffect(() => {
    if (ae)
      return ae.registerEffect();
  }, [ae]);
  const ce = It({
    props: s,
    muiFormControl: ae,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ce.focused = ae ? ae.focused : pe, f.useEffect(() => {
    !ae && v && pe && (Se(!1), k && k());
  }, [ae, v, pe, k]);
  const ie = ae && ae.onFilled, z = ae && ae.onEmpty, se = f.useCallback((re) => {
    Fo(re) ? ie && ie() : z && z();
  }, [ie, z]);
  vt(() => {
    ne && se({
      value: ee
    });
  }, [ee, se, ne]);
  const K = (re) => {
    if (ce.disabled) {
      re.stopPropagation();
      return;
    }
    D && D(re), w.onFocus && w.onFocus(re), ae && ae.onFocus ? ae.onFocus(re) : Se(!0);
  }, $e = (re) => {
    k && k(re), w.onBlur && w.onBlur(re), ae && ae.onBlur ? ae.onBlur(re) : Se(!1);
  }, oe = (re, ...ge) => {
    if (!ne) {
      const Be = re.target || G.current;
      if (Be == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Nr(1));
      se({
        value: Be.value
      });
    }
    w.onChange && w.onChange(re, ...ge), $ && $(re, ...ge);
  };
  f.useEffect(() => {
    se(G.current);
  }, []);
  const De = (re) => {
    G.current && re.currentTarget === re.target && G.current.focus(), M && M(re);
  };
  let Ne = O, Te = w;
  R && Ne === "input" && (V ? (process.env.NODE_ENV !== "production" && (x || y) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Te = d({
    type: void 0,
    minRows: V,
    maxRows: V
  }, Te)) : Te = d({
    type: void 0,
    maxRows: y,
    minRows: x
  }, Te), Ne = ps);
  const Le = (re) => {
    se(re.animationName === "mui-auto-fill-cancel" ? G.current : {
      value: "x"
    });
  };
  f.useEffect(() => {
    ae && ae.setAdornedStart(!!Z);
  }, [ae, Z]);
  const Me = d({}, s, {
    color: ce.color || "primary",
    disabled: ce.disabled,
    endAdornment: T,
    error: ce.error,
    focused: ce.focused,
    formControl: ae,
    fullWidth: E,
    hiddenLabel: ce.hiddenLabel,
    multiline: R,
    size: ce.size,
    startAdornment: Z,
    type: he
  }), Re = ou(Me), qe = U.root || u.Root || Uo, Ge = N.root || p.root || {}, Ke = U.input || u.Input || Ho;
  return Te = d({}, Te, (r = N.input) != null ? r : p.input), /* @__PURE__ */ ke(f.Fragment, {
    children: [!g && nu, /* @__PURE__ */ ke(qe, d({}, Ge, !No(qe) && {
      ownerState: d({}, Me, Ge.ownerState)
    }, {
      ref: n,
      onClick: De
    }, Ee, {
      className: te(Re.root, Ge.className, l, _ && "MuiInputBase-readOnly"),
      children: [Z, /* @__PURE__ */ I(zo.Provider, {
        value: null,
        children: /* @__PURE__ */ I(Ke, d({
          ownerState: Me,
          "aria-invalid": ce.error,
          "aria-describedby": i,
          autoComplete: a,
          autoFocus: c,
          defaultValue: h,
          disabled: ce.disabled,
          id: m,
          onAnimationStart: Le,
          name: S,
          placeholder: B,
          readOnly: _,
          required: ce.required,
          rows: V,
          value: ee,
          onKeyDown: F,
          onKeyUp: L,
          type: he
        }, Te, !No(Ke) && {
          as: Ne,
          ownerState: d({}, Me, Te.ownerState)
        }, {
          ref: X,
          className: te(Re.input, Te.className, _ && "MuiInputBase-readOnly"),
          onBlur: $e,
          onChange: oe,
          onFocus: K
        }))
      }), T, j ? j(d({}, ce, {
        startAdornment: Z
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Es.propTypes = {
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
  inputComponent: bn,
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
const Pn = Es;
function ru(e) {
  return fe("MuiInput", e);
}
const su = d({}, et, be("MuiInput", ["root", "underline", "input"])), St = su;
function iu(e) {
  return fe("MuiOutlinedInput", e);
}
const au = d({}, et, be("MuiOutlinedInput", ["root", "notchedOutline", "input"])), mt = au;
function lu(e) {
  return fe("MuiFilledInput", e);
}
const cu = d({}, et, be("MuiFilledInput", ["root", "underline", "input"])), tt = cu, Os = Lt(/* @__PURE__ */ I("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
function uu(e) {
  return fe("MuiAutocomplete", e);
}
const du = be("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]), ye = du;
var cr, ur;
const pu = ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "componentsProps", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionKey", "getOptionLabel", "isOptionEqualToValue", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "readOnly", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "slotProps", "value"], fu = ["ref"], mu = (e) => {
  const {
    classes: o,
    disablePortal: n,
    expanded: r,
    focused: s,
    fullWidth: i,
    hasClearIcon: a,
    hasPopupIcon: c,
    inputFocused: l,
    popupOpen: u,
    size: p
  } = e, h = {
    root: ["root", r && "expanded", s && "focused", i && "fullWidth", a && "hasClearIcon", c && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", l && "inputFocused"],
    tag: ["tag", `tagSize${de(p)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", u && "popupIndicatorOpen"],
    popper: ["popper", n && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return xe(h, uu, o);
}, bu = H("div", {
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
}) => d({
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
  [`& .${ye.tag}`]: d({
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
  [`& .${mt.root}`]: {
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
  [`& .${mt.root}.${et.sizeSmall}`]: {
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
  [`& .${ye.input}`]: d({
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  }, e.inputFocused && {
    opacity: 1
  })
})), hu = H("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, o) => o.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), vu = H(ms, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, o) => o.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), gu = H(ms, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: ({
    ownerState: e
  }, o) => d({}, o.popupIndicator, e.popupOpen && o.popupIndicatorOpen)
})(({
  ownerState: e
}) => d({
  padding: 2,
  marginRight: -2
}, e.popupOpen && {
  transform: "rotate(180deg)"
})), yu = H(gs, {
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
}) => d({
  zIndex: (e.vars || e).zIndex.modal
}, o.disablePortal && {
  position: "absolute"
})), xu = H(mo, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, o) => o.paper
})(({
  theme: e
}) => d({}, e.typography.body1, {
  overflow: "auto"
})), Eu = H("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, o) => o.loading
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), Ou = H("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, o) => o.noOptions
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), Cu = H("div", {
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
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : it(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${ye.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : it(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${ye.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : it(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
})), Tu = H(Jc, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, o) => o.groupLabel
})(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
})), wu = H("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, o) => o.groupUl
})({
  padding: 0,
  [`& .${ye.option}`]: {
    paddingLeft: 24
  }
}), Cs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s, i, a;
  const c = Oe({
    props: o,
    name: "MuiAutocomplete"
  }), {
    autoComplete: l = !1,
    autoHighlight: u = !1,
    autoSelect: p = !1,
    blurOnSelect: h = !1,
    ChipProps: v,
    className: g,
    clearIcon: T = cr || (cr = /* @__PURE__ */ I(Bc, {
      fontSize: "small"
    })),
    clearOnBlur: E = !c.freeSolo,
    clearOnEscape: m = !1,
    clearText: O = "Clear",
    closeText: w = "Close",
    componentsProps: b = {},
    defaultValue: y = c.multiple ? [] : null,
    disableClearable: x = !1,
    disableCloseOnSelect: R = !1,
    disabled: S = !1,
    disabledItemsFocusable: k = !1,
    disableListWrap: $ = !1,
    disablePortal: M = !1,
    filterSelectedOptions: D = !1,
    forcePopupIcon: F = "auto",
    freeSolo: L = !1,
    fullWidth: B = !1,
    getLimitTagsText: _ = (C) => `+${C}`,
    getOptionLabel: j,
    groupBy: V,
    handleHomeEndKeys: N = !c.freeSolo,
    includeInputInList: U = !1,
    limitTags: Z = -1,
    ListboxComponent: he = "ul",
    ListboxProps: ve,
    loading: Ee = !1,
    loadingText: ee = "Loading…",
    multiple: ne = !1,
    noOptionsText: G = "No options",
    openOnFocus: ue = !1,
    openText: X = "Open",
    PaperComponent: pe = mo,
    PopperComponent: Se = gs,
    popupIcon: ae = ur || (ur = /* @__PURE__ */ I(Os, {})),
    readOnly: ce = !1,
    renderGroup: ie,
    renderInput: z,
    renderOption: se,
    renderTags: K,
    selectOnFocus: $e = !c.freeSolo,
    size: oe = "medium",
    slotProps: De = {}
  } = c, Ne = J(c, pu), {
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
    id: rt,
    popupOpen: ut,
    focused: Y,
    focusedTag: A,
    anchorEl: q,
    setAnchorEl: le,
    inputValue: me,
    groupedOptions: Ce
  } = Nc(d({}, c, {
    componentName: "Autocomplete"
  })), Fe = !x && !S && Be && !ce, je = (!L || F === !0) && F !== !1, {
    onMouseDown: st
  } = Le(), {
    ref: We
  } = ve ?? {}, wt = Ke(), {
    ref: vo
  } = wt, go = J(wt, fu), qo = ze(vo, We), Bt = j || ((C) => {
    var W;
    return (W = C.label) != null ? W : C;
  }), Ue = d({}, c, {
    disablePortal: M,
    expanded: Ye,
    focused: Y,
    fullWidth: B,
    getOptionLabel: Bt,
    hasClearIcon: Fe,
    hasPopupIcon: je,
    inputFocused: A === -1,
    popupOpen: ut,
    size: oe
  }), Ve = mu(Ue);
  let dt;
  if (ne && ge.length > 0) {
    const C = (W) => d({
      className: Ve.tag,
      disabled: S
    }, Ge(W));
    K ? dt = K(ge, C, Ue) : dt = ge.map((W, Q) => /* @__PURE__ */ I($i, d({
      label: Bt(W),
      size: oe
    }, C({
      index: Q
    }), v)));
  }
  if (Z > -1 && Array.isArray(dt)) {
    const C = dt.length - Z;
    !Y && C > 0 && (dt = dt.splice(0, Z), dt.push(/* @__PURE__ */ I("span", {
      className: Ve.tag,
      children: _(C)
    }, dt.length)));
  }
  const Go = ie || ((C) => /* @__PURE__ */ ke("li", {
    children: [/* @__PURE__ */ I(Tu, {
      className: Ve.groupLabel,
      ownerState: Ue,
      component: "div",
      children: C.group
    }), /* @__PURE__ */ I(wu, {
      className: Ve.groupUl,
      ownerState: Ue,
      children: C.children
    })]
  }, C.key)), Yo = se || ((C, W) => /* @__PURE__ */ Ci("li", d({}, C, {
    key: C.key
  }), Bt(W))), yo = (C, W) => {
    const Q = re({
      option: C,
      index: W
    });
    return Yo(d({}, Q, {
      className: Ve.option
    }), C, {
      selected: Q["aria-selected"],
      index: W,
      inputValue: me
    }, Ue);
  }, Yt = (r = De.clearIndicator) != null ? r : b.clearIndicator, $t = (s = De.paper) != null ? s : b.paper, jt = (i = De.popper) != null ? i : b.popper, P = (a = De.popupIndicator) != null ? a : b.popupIndicator;
  return /* @__PURE__ */ ke(f.Fragment, {
    children: [/* @__PURE__ */ I(bu, d({
      ref: n,
      className: te(Ve.root, g),
      ownerState: Ue
    }, Te(Ne), {
      children: z({
        id: rt,
        disabled: S,
        fullWidth: !0,
        size: oe === "small" ? "small" : void 0,
        InputLabelProps: Me(),
        InputProps: d({
          ref: le,
          className: Ve.inputRoot,
          startAdornment: dt,
          onClick: (C) => {
            C.target === C.currentTarget && st(C);
          }
        }, (Fe || je) && {
          endAdornment: /* @__PURE__ */ ke(hu, {
            className: Ve.endAdornment,
            ownerState: Ue,
            children: [Fe ? /* @__PURE__ */ I(vu, d({}, qe(), {
              "aria-label": O,
              title: O,
              ownerState: Ue
            }, Yt, {
              className: te(Ve.clearIndicator, Yt == null ? void 0 : Yt.className),
              children: T
            })) : null, je ? /* @__PURE__ */ I(gu, d({}, Re(), {
              disabled: S,
              "aria-label": ut ? w : X,
              title: ut ? w : X,
              ownerState: Ue
            }, P, {
              className: te(Ve.popupIndicator, P == null ? void 0 : P.className),
              children: ae
            })) : null]
          })
        }),
        inputProps: d({
          className: Ve.input,
          disabled: S,
          readOnly: ce
        }, Le())
      })
    })), q ? /* @__PURE__ */ I(yu, d({
      as: Se,
      disablePortal: M,
      style: {
        width: q ? q.clientWidth : null
      },
      ownerState: Ue,
      role: "presentation",
      anchorEl: q,
      open: ut
    }, jt, {
      className: te(Ve.popper, jt == null ? void 0 : jt.className),
      children: /* @__PURE__ */ ke(xu, d({
        ownerState: Ue,
        as: pe
      }, $t, {
        className: te(Ve.paper, $t == null ? void 0 : $t.className),
        children: [Ee && Ce.length === 0 ? /* @__PURE__ */ I(Eu, {
          className: Ve.loading,
          ownerState: Ue,
          children: ee
        }) : null, Ce.length === 0 && !L && !Ee ? /* @__PURE__ */ I(Ou, {
          className: Ve.noOptions,
          ownerState: Ue,
          role: "presentation",
          onMouseDown: (C) => {
            C.preventDefault();
          },
          children: G
        }) : null, Ce.length > 0 ? /* @__PURE__ */ I(Cu, d({
          as: he,
          className: Ve.listbox,
          ownerState: Ue
        }, go, ve, {
          ref: qo,
          children: Ce.map((C, W) => V ? Go({
            key: C.key,
            group: C.group,
            children: C.options.map((Q, we) => yo(Q, C.index + we))
          }) : yo(C, W))
        })) : null]
      }))
    })) : null]
  });
});
process.env.NODE_ENV !== "production" && (Cs.propTypes = {
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
  defaultValue: ht(t.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
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
  limitTags: Lo,
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
  value: ht(t.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const Im = Cs, Su = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], Ru = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Ts = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Ct(), s = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: a = !0,
    children: c,
    easing: l,
    in: u,
    onEnter: p,
    onEntered: h,
    onEntering: v,
    onExit: g,
    onExited: T,
    onExiting: E,
    style: m,
    timeout: O = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = Bo
  } = o, b = J(o, Su), y = f.useRef(null), x = ze(y, c.ref, n), R = (B) => (_) => {
    if (B) {
      const j = y.current;
      _ === void 0 ? B(j) : B(j, _);
    }
  }, S = R(v), k = R((B, _) => {
    vn(B);
    const j = Rt({
      style: m,
      timeout: O,
      easing: l
    }, {
      mode: "enter"
    });
    B.style.webkitTransition = r.transitions.create("opacity", j), B.style.transition = r.transitions.create("opacity", j), p && p(B, _);
  }), $ = R(h), M = R(E), D = R((B) => {
    const _ = Rt({
      style: m,
      timeout: O,
      easing: l
    }, {
      mode: "exit"
    });
    B.style.webkitTransition = r.transitions.create("opacity", _), B.style.transition = r.transitions.create("opacity", _), g && g(B);
  }), F = R(T);
  return /* @__PURE__ */ I(w, d({
    appear: a,
    in: u,
    nodeRef: y,
    onEnter: k,
    onEntered: $,
    onEntering: S,
    onExit: D,
    onExited: F,
    onExiting: M,
    addEndListener: (B) => {
      i && i(y.current, B);
    },
    timeout: O
  }, b, {
    children: (B, _) => /* @__PURE__ */ f.cloneElement(c, d({
      style: d({
        opacity: 0,
        visibility: B === "exited" && !u ? "hidden" : void 0
      }, Ru[B], m, c.props.style),
      ref: x
    }, _))
  }));
});
process.env.NODE_ENV !== "production" && (Ts.propTypes = {
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
  children: uo.isRequired,
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
const Pu = Ts;
function Iu(e) {
  return fe("MuiBackdrop", e);
}
const $u = be("MuiBackdrop", ["root", "invisible"]), $m = $u, Nu = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], ku = (e) => {
  const {
    classes: o,
    invisible: n
  } = e;
  return xe({
    root: ["root", n && "invisible"]
  }, Iu, o);
}, Mu = H("div", {
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
}) => d({
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
})), ws = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s, i;
  const a = Oe({
    props: o,
    name: "MuiBackdrop"
  }), {
    children: c,
    className: l,
    component: u = "div",
    components: p = {},
    componentsProps: h = {},
    invisible: v = !1,
    open: g,
    slotProps: T = {},
    slots: E = {},
    TransitionComponent: m = Pu,
    transitionDuration: O
  } = a, w = J(a, Nu), b = d({}, a, {
    component: u,
    invisible: v
  }), y = ku(b), x = (r = T.root) != null ? r : h.root;
  return /* @__PURE__ */ I(m, d({
    in: g,
    timeout: O
  }, w, {
    children: /* @__PURE__ */ I(Mu, d({
      "aria-hidden": !0
    }, x, {
      as: (s = (i = E.root) != null ? i : p.Root) != null ? s : u,
      className: te(y.root, l, x == null ? void 0 : x.className),
      ownerState: d({}, b, x == null ? void 0 : x.ownerState),
      classes: y,
      ref: n,
      children: c
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ws.propTypes = {
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
const Au = ws;
function Fu(e) {
  return fe("PrivateSwitchBase", e);
}
be("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Du = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"], Lu = (e) => {
  const {
    classes: o,
    checked: n,
    disabled: r,
    edge: s
  } = e, i = {
    root: ["root", n && "checked", r && "disabled", s && `edge${de(s)}`],
    input: ["input"]
  };
  return xe(i, Fu, o);
}, Bu = H(Kt)(({
  ownerState: e
}) => d({
  padding: 9,
  borderRadius: "50%"
}, e.edge === "start" && {
  marginLeft: e.size === "small" ? -3 : -12
}, e.edge === "end" && {
  marginRight: e.size === "small" ? -3 : -12
})), ju = H("input", {
  shouldForwardProp: nt
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
}), Ss = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const {
    autoFocus: r,
    checked: s,
    checkedIcon: i,
    className: a,
    defaultChecked: c,
    disabled: l,
    disableFocusRipple: u = !1,
    edge: p = !1,
    icon: h,
    id: v,
    inputProps: g,
    inputRef: T,
    name: E,
    onBlur: m,
    onChange: O,
    onFocus: w,
    readOnly: b,
    required: y = !1,
    tabIndex: x,
    type: R,
    value: S
  } = o, k = J(o, Du), [$, M] = At({
    controlled: s,
    default: !!c,
    name: "SwitchBase",
    state: "checked"
  }), D = xt(), F = (U) => {
    w && w(U), D && D.onFocus && D.onFocus(U);
  }, L = (U) => {
    m && m(U), D && D.onBlur && D.onBlur(U);
  }, B = (U) => {
    if (U.nativeEvent.defaultPrevented)
      return;
    const Z = U.target.checked;
    M(Z), O && O(U, Z);
  };
  let _ = l;
  D && typeof _ > "u" && (_ = D.disabled);
  const j = R === "checkbox" || R === "radio", V = d({}, o, {
    checked: $,
    disabled: _,
    disableFocusRipple: u,
    edge: p
  }), N = Lu(V);
  return /* @__PURE__ */ ke(Bu, d({
    component: "span",
    className: te(N.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: _,
    tabIndex: null,
    role: void 0,
    onFocus: F,
    onBlur: L,
    ownerState: V,
    ref: n
  }, k, {
    children: [/* @__PURE__ */ I(ju, d({
      autoFocus: r,
      checked: s,
      defaultChecked: c,
      className: N.input,
      disabled: _,
      id: j ? v : void 0,
      name: E,
      onChange: B,
      readOnly: b,
      ref: T,
      required: y,
      ownerState: V,
      tabIndex: x,
      type: R
    }, R === "checkbox" && S === void 0 ? {} : {
      value: S
    }, g)), $ ? i : h]
  }));
});
process.env.NODE_ENV !== "production" && (Ss.propTypes = {
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
const _u = Ss, zu = Lt(/* @__PURE__ */ I("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), Vu = Lt(/* @__PURE__ */ I("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), Wu = Lt(/* @__PURE__ */ I("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function Uu(e) {
  return fe("MuiCheckbox", e);
}
const Hu = be("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), tn = Hu, qu = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"], Gu = (e) => {
  const {
    classes: o,
    indeterminate: n,
    color: r,
    size: s
  } = e, i = {
    root: ["root", n && "indeterminate", `color${de(r)}`, `size${de(s)}`]
  }, a = xe(i, Uu, o);
  return d({}, o, a);
}, Ku = H(_u, {
  shouldForwardProp: (e) => nt(e) || e === "classes",
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
}) => d({
  color: (e.vars || e).palette.text.secondary
}, !o.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${o.color === "default" ? e.vars.palette.action.activeChannel : e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : it(o.color === "default" ? e.palette.action.active : e.palette[o.color].main, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, o.color !== "default" && {
  [`&.${tn.checked}, &.${tn.indeterminate}`]: {
    color: (e.vars || e).palette[o.color].main
  },
  [`&.${tn.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  }
})), Yu = /* @__PURE__ */ I(Vu, {}), Xu = /* @__PURE__ */ I(zu, {}), Ju = /* @__PURE__ */ I(Wu, {}), Rs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s;
  const i = Oe({
    props: o,
    name: "MuiCheckbox"
  }), {
    checkedIcon: a = Yu,
    color: c = "primary",
    icon: l = Xu,
    indeterminate: u = !1,
    indeterminateIcon: p = Ju,
    inputProps: h,
    size: v = "medium",
    className: g
  } = i, T = J(i, qu), E = u ? p : l, m = u ? p : a, O = d({}, i, {
    color: c,
    indeterminate: u,
    size: v
  }), w = Gu(O);
  return /* @__PURE__ */ I(Ku, d({
    type: "checkbox",
    inputProps: d({
      "data-indeterminate": u
    }, h),
    icon: /* @__PURE__ */ f.cloneElement(E, {
      fontSize: (r = E.props.fontSize) != null ? r : v
    }),
    checkedIcon: /* @__PURE__ */ f.cloneElement(m, {
      fontSize: (s = m.props.fontSize) != null ? s : v
    }),
    ownerState: O,
    ref: n,
    className: te(w.root, g)
  }, T, {
    classes: w
  }));
});
process.env.NODE_ENV !== "production" && (Rs.propTypes = {
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
const Nm = Rs;
function Zu(e) {
  return fe("MuiModal", e);
}
const Qu = be("MuiModal", ["root", "hidden", "backdrop"]), km = Qu, ed = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], td = (e) => {
  const {
    open: o,
    exited: n,
    classes: r
  } = e;
  return xe({
    root: ["root", !o && n && "hidden"],
    backdrop: ["backdrop"]
  }, Zu, r);
}, od = H("div", {
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
}) => d({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !o.open && o.exited && {
  visibility: "hidden"
})), nd = H(Au, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, o) => o.backdrop
})({
  zIndex: -1
}), Ps = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s, i, a, c, l;
  const u = Oe({
    name: "MuiModal",
    props: o
  }), {
    BackdropComponent: p = nd,
    BackdropProps: h,
    className: v,
    closeAfterTransition: g = !1,
    children: T,
    container: E,
    component: m,
    components: O = {},
    componentsProps: w = {},
    disableAutoFocus: b = !1,
    disableEnforceFocus: y = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: R = !1,
    disableRestoreFocus: S = !1,
    disableScrollLock: k = !1,
    hideBackdrop: $ = !1,
    keepMounted: M = !1,
    onBackdropClick: D,
    open: F,
    slotProps: L,
    slots: B
    // eslint-disable-next-line react/prop-types
  } = u, _ = J(u, ed), j = d({}, u, {
    closeAfterTransition: g,
    disableAutoFocus: b,
    disableEnforceFocus: y,
    disableEscapeKeyDown: x,
    disablePortal: R,
    disableRestoreFocus: S,
    disableScrollLock: k,
    hideBackdrop: $,
    keepMounted: M
  }), {
    getRootProps: V,
    getBackdropProps: N,
    getTransitionProps: U,
    portalRef: Z,
    isTopModal: he,
    exited: ve,
    hasTransition: Ee
  } = ul(d({}, j, {
    rootRef: n
  })), ee = d({}, j, {
    exited: ve
  }), ne = td(ee), G = {};
  if (T.props.tabIndex === void 0 && (G.tabIndex = "-1"), Ee) {
    const {
      onEnter: ie,
      onExited: z
    } = U();
    G.onEnter = ie, G.onExited = z;
  }
  const ue = (r = (s = B == null ? void 0 : B.root) != null ? s : O.Root) != null ? r : od, X = (i = (a = B == null ? void 0 : B.backdrop) != null ? a : O.Backdrop) != null ? i : p, pe = (c = L == null ? void 0 : L.root) != null ? c : w.root, Se = (l = L == null ? void 0 : L.backdrop) != null ? l : w.backdrop, ae = ft({
    elementType: ue,
    externalSlotProps: pe,
    externalForwardedProps: _,
    getSlotProps: V,
    additionalProps: {
      ref: n,
      as: m
    },
    ownerState: ee,
    className: te(v, pe == null ? void 0 : pe.className, ne == null ? void 0 : ne.root, !ee.open && ee.exited && (ne == null ? void 0 : ne.hidden))
  }), ce = ft({
    elementType: X,
    externalSlotProps: Se,
    additionalProps: h,
    getSlotProps: (ie) => N(d({}, ie, {
      onClick: (z) => {
        D && D(z), ie != null && ie.onClick && ie.onClick(z);
      }
    })),
    className: te(Se == null ? void 0 : Se.className, h == null ? void 0 : h.className, ne == null ? void 0 : ne.backdrop),
    ownerState: ee
  });
  return !M && !F && (!Ee || ve) ? null : /* @__PURE__ */ I(ao, {
    ref: Z,
    container: E,
    disablePortal: R,
    children: /* @__PURE__ */ ke(ue, d({}, ae, {
      children: [!$ && p ? /* @__PURE__ */ I(X, d({}, ce)) : null, /* @__PURE__ */ I(ko, {
        disableEnforceFocus: y,
        disableAutoFocus: b,
        disableRestoreFocus: S,
        isEnabled: he,
        open: F,
        children: /* @__PURE__ */ f.cloneElement(T, G)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Ps.propTypes = {
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
  children: uo.isRequired,
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
  container: t.oneOfType([gt, t.func]),
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
const Is = Ps;
function rd(e) {
  return fe("MuiDialogActions", e);
}
const sd = be("MuiDialogActions", ["root", "spacing"]), Mm = sd, id = ["className", "disableSpacing"], ad = (e) => {
  const {
    classes: o,
    disableSpacing: n
  } = e;
  return xe({
    root: ["root", !n && "spacing"]
  }, rd, o);
}, ld = H("div", {
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
}) => d({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !e.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
})), $s = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiDialogActions"
  }), {
    className: s,
    disableSpacing: i = !1
  } = r, a = J(r, id), c = d({}, r, {
    disableSpacing: i
  }), l = ad(c);
  return /* @__PURE__ */ I(ld, d({
    className: te(l.root, s),
    ownerState: c,
    ref: n
  }, a));
});
process.env.NODE_ENV !== "production" && ($s.propTypes = {
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
const Am = $s;
function Fm(e) {
  return fe("MuiDivider", e);
}
const cd = be("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), dr = cd, ud = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function dd(e, o, n) {
  const r = o.getBoundingClientRect(), s = n && n.getBoundingClientRect(), i = pt(o);
  let a;
  if (o.fakeTransform)
    a = o.fakeTransform;
  else {
    const u = i.getComputedStyle(o);
    a = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform");
  }
  let c = 0, l = 0;
  if (a && a !== "none" && typeof a == "string") {
    const u = a.split("(")[1].split(")")[0].split(",");
    c = parseInt(u[4], 10), l = parseInt(u[5], 10);
  }
  return e === "left" ? s ? `translateX(${s.right + c - r.left}px)` : `translateX(${i.innerWidth + c - r.left}px)` : e === "right" ? s ? `translateX(-${r.right - s.left - c}px)` : `translateX(-${r.left + r.width - c}px)` : e === "up" ? s ? `translateY(${s.bottom + l - r.top}px)` : `translateY(${i.innerHeight + l - r.top}px)` : s ? `translateY(-${r.top - s.top + r.height - l}px)` : `translateY(-${r.top + r.height - l}px)`;
}
function Ns(e) {
  return typeof e == "function" ? e() : e;
}
function So(e, o, n) {
  const r = Ns(n), s = dd(e, o, r);
  s && (o.style.webkitTransform = s, o.style.transform = s);
}
const ks = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Ct(), s = {
    enter: r.transitions.easing.easeOut,
    exit: r.transitions.easing.sharp
  }, i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: c = !0,
    children: l,
    container: u,
    direction: p = "down",
    easing: h = s,
    in: v,
    onEnter: g,
    onEntered: T,
    onEntering: E,
    onExit: m,
    onExited: O,
    onExiting: w,
    style: b,
    timeout: y = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = Bo
  } = o, R = J(o, ud), S = f.useRef(null), k = ze(l.ref, S, n), $ = (N) => (U) => {
    N && (U === void 0 ? N(S.current) : N(S.current, U));
  }, M = $((N, U) => {
    So(p, N, u), vn(N), g && g(N, U);
  }), D = $((N, U) => {
    const Z = Rt({
      timeout: y,
      style: b,
      easing: h
    }, {
      mode: "enter"
    });
    N.style.webkitTransition = r.transitions.create("-webkit-transform", d({}, Z)), N.style.transition = r.transitions.create("transform", d({}, Z)), N.style.webkitTransform = "none", N.style.transform = "none", E && E(N, U);
  }), F = $(T), L = $(w), B = $((N) => {
    const U = Rt({
      timeout: y,
      style: b,
      easing: h
    }, {
      mode: "exit"
    });
    N.style.webkitTransition = r.transitions.create("-webkit-transform", U), N.style.transition = r.transitions.create("transform", U), So(p, N, u), m && m(N);
  }), _ = $((N) => {
    N.style.webkitTransition = "", N.style.transition = "", O && O(N);
  }), j = (N) => {
    a && a(S.current, N);
  }, V = f.useCallback(() => {
    S.current && So(p, S.current, u);
  }, [p, u]);
  return f.useEffect(() => {
    if (v || p === "down" || p === "right")
      return;
    const N = po(() => {
      S.current && So(p, S.current, u);
    }), U = pt(S.current);
    return U.addEventListener("resize", N), () => {
      N.clear(), U.removeEventListener("resize", N);
    };
  }, [p, v, u]), f.useEffect(() => {
    v || V();
  }, [v, V]), /* @__PURE__ */ I(x, d({
    nodeRef: S,
    onEnter: M,
    onEntered: F,
    onEntering: D,
    onExit: B,
    onExited: _,
    onExiting: L,
    addEndListener: j,
    appear: c,
    in: v,
    timeout: y
  }, R, {
    children: (N, U) => /* @__PURE__ */ f.cloneElement(l, d({
      ref: k,
      style: d({
        visibility: N === "exited" && !v ? "hidden" : void 0
      }, b, l.props.style)
    }, U))
  }));
});
process.env.NODE_ENV !== "production" && (ks.propTypes = {
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
  children: uo.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: ht(t.oneOfType([gt, t.func]), (e) => {
    if (e.open) {
      const o = Ns(e.container);
      if (o && o.nodeType === 1) {
        const n = o.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `container` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!o || typeof o.getBoundingClientRect != "function" || o.contextElement != null && o.contextElement.nodeType !== 1)
        return new Error(["MUI: The `container` prop provided to the component is invalid.", "It should be an HTML element instance."].join(`
`));
    }
    return null;
  }),
  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: t.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
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
const pd = ks;
function fd(e) {
  return fe("MuiDrawer", e);
}
const md = be("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]), Dm = md, bd = ["BackdropProps"], hd = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"], Ms = (e, o) => {
  const {
    ownerState: n
  } = e;
  return [o.root, (n.variant === "permanent" || n.variant === "persistent") && o.docked, o.modal];
}, vd = (e) => {
  const {
    classes: o,
    anchor: n,
    variant: r
  } = e, s = {
    root: ["root"],
    docked: [(r === "permanent" || r === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${de(n)}`, r !== "temporary" && `paperAnchorDocked${de(n)}`]
  };
  return xe(s, fd, o);
}, gd = H(Is, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: Ms
})(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
})), pr = H("div", {
  shouldForwardProp: nt,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: Ms
})({
  flex: "0 0 auto"
}), yd = H(mo, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.paper, o[`paperAnchor${de(n.anchor)}`], n.variant !== "temporary" && o[`paperAnchorDocked${de(n.anchor)}`]];
  }
})(({
  theme: e,
  ownerState: o
}) => d({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (e.vars || e).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0
}, o.anchor === "left" && {
  left: 0
}, o.anchor === "top" && {
  top: 0,
  left: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, o.anchor === "right" && {
  right: 0
}, o.anchor === "bottom" && {
  top: "auto",
  left: 0,
  bottom: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, o.anchor === "left" && o.variant !== "temporary" && {
  borderRight: `1px solid ${(e.vars || e).palette.divider}`
}, o.anchor === "top" && o.variant !== "temporary" && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
}, o.anchor === "right" && o.variant !== "temporary" && {
  borderLeft: `1px solid ${(e.vars || e).palette.divider}`
}, o.anchor === "bottom" && o.variant !== "temporary" && {
  borderTop: `1px solid ${(e.vars || e).palette.divider}`
})), As = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function xd(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function Ed(e, o) {
  return e.direction === "rtl" && xd(o) ? As[o] : o;
}
const Fs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiDrawer"
  }), s = Ct(), i = {
    enter: s.transitions.duration.enteringScreen,
    exit: s.transitions.duration.leavingScreen
  }, {
    anchor: a = "left",
    BackdropProps: c,
    children: l,
    className: u,
    elevation: p = 16,
    hideBackdrop: h = !1,
    ModalProps: {
      BackdropProps: v
    } = {},
    onClose: g,
    open: T = !1,
    PaperProps: E = {},
    SlideProps: m,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: O = pd,
    transitionDuration: w = i,
    variant: b = "temporary"
  } = r, y = J(r.ModalProps, bd), x = J(r, hd), R = f.useRef(!1);
  f.useEffect(() => {
    R.current = !0;
  }, []);
  const S = Ed(s, a), $ = d({}, r, {
    anchor: a,
    elevation: p,
    open: T,
    variant: b
  }, x), M = vd($), D = /* @__PURE__ */ I(yd, d({
    elevation: b === "temporary" ? p : 0,
    square: !0
  }, E, {
    className: te(M.paper, E.className),
    ownerState: $,
    children: l
  }));
  if (b === "permanent")
    return /* @__PURE__ */ I(pr, d({
      className: te(M.root, M.docked, u),
      ownerState: $,
      ref: n
    }, x, {
      children: D
    }));
  const F = /* @__PURE__ */ I(O, d({
    in: T,
    direction: As[S],
    timeout: w,
    appear: R.current
  }, m, {
    children: D
  }));
  return b === "persistent" ? /* @__PURE__ */ I(pr, d({
    className: te(M.root, M.docked, u),
    ownerState: $,
    ref: n
  }, x, {
    children: F
  })) : /* @__PURE__ */ I(gd, d({
    BackdropProps: d({}, c, v, {
      transitionDuration: w
    }),
    className: te(M.root, M.modal, u),
    open: T,
    ownerState: $,
    onClose: g,
    hideBackdrop: h,
    ref: n
  }, x, y, {
    children: F
  }));
});
process.env.NODE_ENV !== "production" && (Fs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: t.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: t.object,
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
   * The elevation of the drawer.
   * @default 16
   */
  elevation: Lo,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: t.bool,
  /**
   * Props applied to the [`Modal`](/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: t.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: t.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: t.bool,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: t.object,
  /**
   * Props applied to the [`Slide`](/material-ui/api/slide/) element.
   */
  SlideProps: t.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
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
   * The variant to use.
   * @default 'temporary'
   */
  variant: t.oneOf(["permanent", "persistent", "temporary"])
});
const Lm = Fs, Od = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], Cd = (e) => {
  const {
    classes: o,
    disableUnderline: n
  } = e, s = xe({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, lu, o);
  return d({}, o, s);
}, Td = H(Uo, {
  shouldForwardProp: (e) => nt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [...Vo(e, o), !n.disableUnderline && o.underline];
  }
})(({
  theme: e,
  ownerState: o
}) => {
  var n;
  const r = e.palette.mode === "light", s = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", a = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", c = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return d({
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
  }, o.multiline && d({
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
}), wd = H(Ho, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Wo
})(({
  theme: e,
  ownerState: o
}) => d({
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
})), In = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s, i, a;
  const c = Oe({
    props: o,
    name: "MuiFilledInput"
  }), {
    components: l = {},
    componentsProps: u,
    fullWidth: p = !1,
    // declare here to prevent spreading to DOM
    inputComponent: h = "input",
    multiline: v = !1,
    slotProps: g,
    slots: T = {},
    type: E = "text"
  } = c, m = J(c, Od), O = d({}, c, {
    fullWidth: p,
    inputComponent: h,
    multiline: v,
    type: E
  }), w = Cd(c), b = {
    root: {
      ownerState: O
    },
    input: {
      ownerState: O
    }
  }, y = g ?? u ? Do(b, g ?? u) : b, x = (r = (s = T.root) != null ? s : l.Root) != null ? r : Td, R = (i = (a = T.input) != null ? a : l.Input) != null ? i : wd;
  return /* @__PURE__ */ I(Pn, d({
    slots: {
      root: x,
      input: R
    },
    componentsProps: y,
    fullWidth: p,
    inputComponent: h,
    multiline: v,
    ref: n,
    type: E
  }, m, {
    classes: w
  }));
});
process.env.NODE_ENV !== "production" && (In.propTypes = {
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
In.muiName = "Input";
const Ds = In;
function Sd(e) {
  return fe("MuiFormControl", e);
}
const Rd = be("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]), Bm = Rd, Pd = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], Id = (e) => {
  const {
    classes: o,
    margin: n,
    fullWidth: r
  } = e, s = {
    root: ["root", n !== "none" && `margin${de(n)}`, r && "fullWidth"]
  };
  return xe(s, Sd, o);
}, $d = H("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, o) => d({}, o.root, o[`margin${de(e.margin)}`], e.fullWidth && o.fullWidth)
})(({
  ownerState: e
}) => d({
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
})), Ls = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiFormControl"
  }), {
    children: s,
    className: i,
    color: a = "primary",
    component: c = "div",
    disabled: l = !1,
    error: u = !1,
    focused: p,
    fullWidth: h = !1,
    hiddenLabel: v = !1,
    margin: g = "none",
    required: T = !1,
    size: E = "medium",
    variant: m = "outlined"
  } = r, O = J(r, Pd), w = d({}, r, {
    color: a,
    component: c,
    disabled: l,
    error: u,
    fullWidth: h,
    hiddenLabel: v,
    margin: g,
    required: T,
    size: E,
    variant: m
  }), b = Id(w), [y, x] = f.useState(() => {
    let L = !1;
    return s && f.Children.forEach(s, (B) => {
      if (!Zo(B, ["Input", "Select"]))
        return;
      const _ = Zo(B, ["Select"]) ? B.props.input : B;
      _ && Zc(_.props) && (L = !0);
    }), L;
  }), [R, S] = f.useState(() => {
    let L = !1;
    return s && f.Children.forEach(s, (B) => {
      Zo(B, ["Input", "Select"]) && (Fo(B.props, !0) || Fo(B.props.inputProps, !0)) && (L = !0);
    }), L;
  }), [k, $] = f.useState(!1);
  l && k && $(!1);
  const M = p !== void 0 && !l ? p : k;
  let D;
  if (process.env.NODE_ENV !== "production") {
    const L = f.useRef(!1);
    D = () => (L.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), L.current = !0, () => {
      L.current = !1;
    });
  }
  const F = f.useMemo(() => ({
    adornedStart: y,
    setAdornedStart: x,
    color: a,
    disabled: l,
    error: u,
    filled: R,
    focused: M,
    fullWidth: h,
    hiddenLabel: v,
    size: E,
    onBlur: () => {
      $(!1);
    },
    onEmpty: () => {
      S(!1);
    },
    onFilled: () => {
      S(!0);
    },
    onFocus: () => {
      $(!0);
    },
    registerEffect: D,
    required: T,
    variant: m
  }), [y, a, l, u, R, M, h, v, D, T, E, m]);
  return /* @__PURE__ */ I(zo.Provider, {
    value: F,
    children: /* @__PURE__ */ I($d, d({
      as: c,
      ownerState: w,
      className: te(b.root, i),
      ref: n
    }, O, {
      children: s
    }))
  });
});
process.env.NODE_ENV !== "production" && (Ls.propTypes = {
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
const Nd = Ls, Bs = ra({
  createStyledComponent: H("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, o) => o.root
  }),
  useThemeProps: (e) => Oe({
    props: e,
    name: "MuiStack"
  })
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
const kd = Bs;
function Md(e) {
  return fe("MuiFormControlLabel", e);
}
const Ad = be("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), oo = Ad, Fd = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"], Dd = (e) => {
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
  return xe(a, Md, o);
}, Ld = H("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${oo.label}`]: o.label
    }, o.root, o[`labelPlacement${de(n.labelPlacement)}`]];
  }
})(({
  theme: e,
  ownerState: o
}) => d({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${oo.disabled}`]: {
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
  [`& .${oo.label}`]: {
    [`&.${oo.disabled}`]: {
      color: (e.vars || e).palette.text.disabled
    }
  }
})), Bd = H("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (e, o) => o.asterisk
})(({
  theme: e
}) => ({
  [`&.${oo.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), js = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s;
  const i = Oe({
    props: o,
    name: "MuiFormControlLabel"
  }), {
    className: a,
    componentsProps: c = {},
    control: l,
    disabled: u,
    disableTypography: p,
    label: h,
    labelPlacement: v = "end",
    required: g,
    slotProps: T = {}
  } = i, E = J(i, Fd), m = xt(), O = (r = u ?? l.props.disabled) != null ? r : m == null ? void 0 : m.disabled, w = g ?? l.props.required, b = {
    disabled: O,
    required: w
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach(($) => {
    typeof l.props[$] > "u" && typeof i[$] < "u" && (b[$] = i[$]);
  });
  const y = It({
    props: i,
    muiFormControl: m,
    states: ["error"]
  }), x = d({}, i, {
    disabled: O,
    labelPlacement: v,
    required: w,
    error: y.error
  }), R = Dd(x), S = (s = T.typography) != null ? s : c.typography;
  let k = h;
  return k != null && k.type !== an && !p && (k = /* @__PURE__ */ I(an, d({
    component: "span"
  }, S, {
    className: te(R.label, S == null ? void 0 : S.className),
    children: k
  }))), /* @__PURE__ */ ke(Ld, d({
    className: te(R.root, a),
    ownerState: x,
    ref: n
  }, E, {
    children: [/* @__PURE__ */ f.cloneElement(l, b), w ? /* @__PURE__ */ ke(kd, {
      display: "block",
      children: [k, /* @__PURE__ */ ke(Bd, {
        ownerState: x,
        "aria-hidden": !0,
        className: R.asterisk,
        children: [" ", "*"]
      })]
    }) : k]
  }));
});
process.env.NODE_ENV !== "production" && (js.propTypes = {
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
const jm = js;
function jd(e) {
  return fe("MuiFormGroup", e);
}
const _d = be("MuiFormGroup", ["root", "row", "error"]), _m = _d, zd = ["className", "row"], Vd = (e) => {
  const {
    classes: o,
    row: n,
    error: r
  } = e;
  return xe({
    root: ["root", n && "row", r && "error"]
  }, jd, o);
}, Wd = H("div", {
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
}) => d({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap"
}, e.row && {
  flexDirection: "row"
})), _s = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiFormGroup"
  }), {
    className: s,
    row: i = !1
  } = r, a = J(r, zd), c = xt(), l = It({
    props: r,
    muiFormControl: c,
    states: ["error"]
  }), u = d({}, r, {
    row: i,
    error: l.error
  }), p = Vd(u);
  return /* @__PURE__ */ I(Wd, d({
    className: te(p.root, s),
    ownerState: u,
    ref: n
  }, a));
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
   * Display group of elements in a compact row.
   * @default false
   */
  row: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const zm = _s;
function Ud(e) {
  return fe("MuiFormHelperText", e);
}
const Hd = be("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), fr = Hd;
var mr;
const qd = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], Gd = (e) => {
  const {
    classes: o,
    contained: n,
    size: r,
    disabled: s,
    error: i,
    filled: a,
    focused: c,
    required: l
  } = e, u = {
    root: ["root", s && "disabled", i && "error", r && `size${de(r)}`, n && "contained", c && "focused", a && "filled", l && "required"]
  };
  return xe(u, Ud, o);
}, Kd = H("p", {
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
}) => d({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${fr.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${fr.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, o.size === "small" && {
  marginTop: 4
}, o.contained && {
  marginLeft: 14,
  marginRight: 14
})), zs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiFormHelperText"
  }), {
    children: s,
    className: i,
    component: a = "p"
  } = r, c = J(r, qd), l = xt(), u = It({
    props: r,
    muiFormControl: l,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), p = d({}, r, {
    component: a,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), h = Gd(p);
  return /* @__PURE__ */ I(Kd, d({
    as: a,
    ownerState: p,
    className: te(h.root, i),
    ref: n
  }, c, {
    children: s === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      mr || (mr = /* @__PURE__ */ I("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : s
  }));
});
process.env.NODE_ENV !== "production" && (zs.propTypes = {
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
const Yd = zs;
function Xd(e) {
  return fe("MuiFormLabel", e);
}
const Jd = be("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), io = Jd, Zd = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], Qd = (e) => {
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
  return xe(l, Xd, o);
}, ep = H("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, o) => d({}, o.root, e.color === "secondary" && o.colorSecondary, e.filled && o.filled)
})(({
  theme: e,
  ownerState: o
}) => d({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${io.focused}`]: {
    color: (e.vars || e).palette[o.color].main
  },
  [`&.${io.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${io.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), tp = H("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, o) => o.asterisk
})(({
  theme: e
}) => ({
  [`&.${io.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Vs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiFormLabel"
  }), {
    children: s,
    className: i,
    component: a = "label"
  } = r, c = J(r, Zd), l = xt(), u = It({
    props: r,
    muiFormControl: l,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), p = d({}, r, {
    color: u.color || "primary",
    component: a,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), h = Qd(p);
  return /* @__PURE__ */ ke(ep, d({
    as: a,
    ownerState: p,
    className: te(h.root, i),
    ref: n
  }, c, {
    children: [s, u.required && /* @__PURE__ */ ke(tp, {
      ownerState: p,
      "aria-hidden": !0,
      className: h.asterisk,
      children: [" ", "*"]
    })]
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
const op = Vs, np = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function fn(e) {
  return `scale(${e}, ${e ** 2})`;
}
const rp = {
  entering: {
    opacity: 1,
    transform: fn(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, on = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), $n = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const {
    addEndListener: r,
    appear: s = !0,
    children: i,
    easing: a,
    in: c,
    onEnter: l,
    onEntered: u,
    onEntering: p,
    onExit: h,
    onExited: v,
    onExiting: g,
    style: T,
    timeout: E = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: m = Bo
  } = o, O = J(o, np), w = Mr(), b = f.useRef(), y = Ct(), x = f.useRef(null), R = ze(x, i.ref, n), S = (_) => (j) => {
    if (_) {
      const V = x.current;
      j === void 0 ? _(V) : _(V, j);
    }
  }, k = S(p), $ = S((_, j) => {
    vn(_);
    const {
      duration: V,
      delay: N,
      easing: U
    } = Rt({
      style: T,
      timeout: E,
      easing: a
    }, {
      mode: "enter"
    });
    let Z;
    E === "auto" ? (Z = y.transitions.getAutoHeightDuration(_.clientHeight), b.current = Z) : Z = V, _.style.transition = [y.transitions.create("opacity", {
      duration: Z,
      delay: N
    }), y.transitions.create("transform", {
      duration: on ? Z : Z * 0.666,
      delay: N,
      easing: U
    })].join(","), l && l(_, j);
  }), M = S(u), D = S(g), F = S((_) => {
    const {
      duration: j,
      delay: V,
      easing: N
    } = Rt({
      style: T,
      timeout: E,
      easing: a
    }, {
      mode: "exit"
    });
    let U;
    E === "auto" ? (U = y.transitions.getAutoHeightDuration(_.clientHeight), b.current = U) : U = j, _.style.transition = [y.transitions.create("opacity", {
      duration: U,
      delay: V
    }), y.transitions.create("transform", {
      duration: on ? U : U * 0.666,
      delay: on ? V : V || U * 0.333,
      easing: N
    })].join(","), _.style.opacity = 0, _.style.transform = fn(0.75), h && h(_);
  }), L = S(v);
  return /* @__PURE__ */ I(m, d({
    appear: s,
    in: c,
    nodeRef: x,
    onEnter: $,
    onEntered: M,
    onEntering: k,
    onExit: F,
    onExited: L,
    onExiting: D,
    addEndListener: (_) => {
      E === "auto" && w.start(b.current || 0, _), r && r(x.current, _);
    },
    timeout: E === "auto" ? null : E
  }, O, {
    children: (_, j) => /* @__PURE__ */ f.cloneElement(i, d({
      style: d({
        opacity: 0,
        transform: fn(0.75),
        visibility: _ === "exited" && !c ? "hidden" : void 0
      }, rp[_], T, i.props.style),
      ref: R
    }, j))
  }));
});
process.env.NODE_ENV !== "production" && ($n.propTypes = {
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
  children: uo.isRequired,
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
$n.muiSupportAuto = !0;
const sp = $n, ip = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], ap = (e) => {
  const {
    classes: o,
    disableUnderline: n
  } = e, s = xe({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, ru, o);
  return d({}, o, s);
}, lp = H(Uo, {
  shouldForwardProp: (e) => nt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [...Vo(e, o), !n.disableUnderline && o.underline];
  }
})(({
  theme: e,
  ownerState: o
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), d({
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
}), cp = H(Ho, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Wo
})({}), Nn = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s, i, a;
  const c = Oe({
    props: o,
    name: "MuiInput"
  }), {
    disableUnderline: l,
    components: u = {},
    componentsProps: p,
    fullWidth: h = !1,
    inputComponent: v = "input",
    multiline: g = !1,
    slotProps: T,
    slots: E = {},
    type: m = "text"
  } = c, O = J(c, ip), w = ap(c), y = {
    root: {
      ownerState: {
        disableUnderline: l
      }
    }
  }, x = T ?? p ? Do(T ?? p, y) : y, R = (r = (s = E.root) != null ? s : u.Root) != null ? r : lp, S = (i = (a = E.input) != null ? a : u.Input) != null ? i : cp;
  return /* @__PURE__ */ I(Pn, d({
    slots: {
      root: R,
      input: S
    },
    slotProps: x,
    fullWidth: h,
    inputComponent: v,
    multiline: g,
    ref: n,
    type: m
  }, O, {
    classes: w
  }));
});
process.env.NODE_ENV !== "production" && (Nn.propTypes = {
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
Nn.muiName = "Input";
const Ws = Nn;
function up(e) {
  return fe("MuiInputAdornment", e);
}
const dp = be("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), br = dp;
var hr;
const pp = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"], fp = (e, o) => {
  const {
    ownerState: n
  } = e;
  return [o.root, o[`position${de(n.position)}`], n.disablePointerEvents === !0 && o.disablePointerEvents, o[n.variant]];
}, mp = (e) => {
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
  return xe(c, up, o);
}, bp = H("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: fp
})(({
  theme: e,
  ownerState: o
}) => d({
  display: "flex",
  height: "0.01em",
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active
}, o.variant === "filled" && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${br.positionStart}&:not(.${br.hiddenLabel})`]: {
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
})), Us = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiInputAdornment"
  }), {
    children: s,
    className: i,
    component: a = "div",
    disablePointerEvents: c = !1,
    disableTypography: l = !1,
    position: u,
    variant: p
  } = r, h = J(r, pp), v = xt() || {};
  let g = p;
  p && v.variant && process.env.NODE_ENV !== "production" && p === v.variant && console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one."), v && !g && (g = v.variant);
  const T = d({}, r, {
    hiddenLabel: v.hiddenLabel,
    size: v.size,
    disablePointerEvents: c,
    position: u,
    variant: g
  }), E = mp(T);
  return /* @__PURE__ */ I(zo.Provider, {
    value: null,
    children: /* @__PURE__ */ I(bp, d({
      as: a,
      ownerState: T,
      className: te(E.root, i),
      ref: n
    }, h, {
      children: typeof s == "string" && !l ? /* @__PURE__ */ I(an, {
        color: "text.secondary",
        children: s
      }) : /* @__PURE__ */ ke(f.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          hr || (hr = /* @__PURE__ */ I("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, s]
      })
    }))
  });
});
process.env.NODE_ENV !== "production" && (Us.propTypes = {
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
const Vm = Us;
function hp(e) {
  return fe("MuiInputLabel", e);
}
const vp = be("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), Wm = vp, gp = ["disableAnimation", "margin", "shrink", "variant", "className"], yp = (e) => {
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
  }, u = xe(l, hp, o);
  return d({}, o, u);
}, xp = H(op, {
  shouldForwardProp: (e) => nt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${io.asterisk}`]: o.asterisk
    }, o.root, n.formControl && o.formControl, n.size === "small" && o.sizeSmall, n.shrink && o.shrink, !n.disableAnimation && o.animated, n.focused && o.focused, o[n.variant]];
  }
})(({
  theme: e,
  ownerState: o
}) => d({
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
}, o.variant === "filled" && d({
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
}, o.shrink && d({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, o.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), o.variant === "outlined" && d({
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
}))), Hs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    name: "MuiInputLabel",
    props: o
  }), {
    disableAnimation: s = !1,
    shrink: i,
    className: a
  } = r, c = J(r, gp), l = xt();
  let u = i;
  typeof u > "u" && l && (u = l.filled || l.focused || l.adornedStart);
  const p = It({
    props: r,
    muiFormControl: l,
    states: ["size", "variant", "required", "focused"]
  }), h = d({}, r, {
    disableAnimation: s,
    formControl: l,
    shrink: u,
    size: p.size,
    variant: p.variant,
    required: p.required,
    focused: p.focused
  }), v = yp(h);
  return /* @__PURE__ */ I(xp, d({
    "data-shrink": u,
    ownerState: h,
    ref: n,
    className: te(v.root, a)
  }, c, {
    classes: v
  }));
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
const Ep = Hs, qs = /* @__PURE__ */ f.createContext({});
process.env.NODE_ENV !== "production" && (qs.displayName = "ListContext");
const mn = qs;
function Op(e) {
  return fe("MuiList", e);
}
const Cp = be("MuiList", ["root", "padding", "dense", "subheader"]), Um = Cp, Tp = ["children", "className", "component", "dense", "disablePadding", "subheader"], wp = (e) => {
  const {
    classes: o,
    disablePadding: n,
    dense: r,
    subheader: s
  } = e;
  return xe({
    root: ["root", !n && "padding", r && "dense", s && "subheader"]
  }, Op, o);
}, Sp = H("ul", {
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
}) => d({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), Gs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiList"
  }), {
    children: s,
    className: i,
    component: a = "ul",
    dense: c = !1,
    disablePadding: l = !1,
    subheader: u
  } = r, p = J(r, Tp), h = f.useMemo(() => ({
    dense: c
  }), [c]), v = d({}, r, {
    component: a,
    dense: c,
    disablePadding: l
  }), g = wp(v);
  return /* @__PURE__ */ I(mn.Provider, {
    value: h,
    children: /* @__PURE__ */ ke(Sp, d({
      as: a,
      className: te(g.root, i),
      ref: n,
      ownerState: v
    }, p, {
      children: [u, s]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Gs.propTypes = {
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
const Rp = Gs;
function Hm(e) {
  return fe("MuiListItemIcon", e);
}
const Pp = be("MuiListItemIcon", ["root", "alignItemsFlexStart"]), vr = Pp;
function qm(e) {
  return fe("MuiListItemText", e);
}
const Ip = be("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), gr = Ip, $p = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function nn(e, o, n) {
  return e === o ? e.firstChild : o && o.nextElementSibling ? o.nextElementSibling : n ? null : e.firstChild;
}
function yr(e, o, n) {
  return e === o ? n ? e.firstChild : e.lastChild : o && o.previousElementSibling ? o.previousElementSibling : n ? null : e.lastChild;
}
function Ks(e, o) {
  if (o === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : o.repeating ? n[0] === o.keys[0] : n.indexOf(o.keys.join("")) === 0;
}
function Jt(e, o, n, r, s, i) {
  let a = !1, c = s(e, o, o ? n : !1);
  for (; c; ) {
    if (c === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const l = r ? !1 : c.disabled || c.getAttribute("aria-disabled") === "true";
    if (!c.hasAttribute("tabindex") || !Ks(c, i) || l)
      c = s(e, c, n);
    else
      return c.focus(), !0;
  }
  return !1;
}
const Ys = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: s = !1,
    autoFocusItem: i = !1,
    children: a,
    className: c,
    disabledItemsFocusable: l = !1,
    disableListWrap: u = !1,
    onKeyDown: p,
    variant: h = "selectedMenu"
  } = o, v = J(o, $p), g = f.useRef(null), T = f.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  vt(() => {
    s && g.current.focus();
  }, [s]), f.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (b, y) => {
      const x = !g.current.style.width;
      if (b.clientHeight < g.current.clientHeight && x) {
        const R = `${Br(He(b))}px`;
        g.current.style[y.direction === "rtl" ? "paddingLeft" : "paddingRight"] = R, g.current.style.width = `calc(100% + ${R})`;
      }
      return g.current;
    }
  }), []);
  const E = (b) => {
    const y = g.current, x = b.key, R = He(y).activeElement;
    if (x === "ArrowDown")
      b.preventDefault(), Jt(y, R, u, l, nn);
    else if (x === "ArrowUp")
      b.preventDefault(), Jt(y, R, u, l, yr);
    else if (x === "Home")
      b.preventDefault(), Jt(y, null, u, l, nn);
    else if (x === "End")
      b.preventDefault(), Jt(y, null, u, l, yr);
    else if (x.length === 1) {
      const S = T.current, k = x.toLowerCase(), $ = performance.now();
      S.keys.length > 0 && ($ - S.lastTime > 500 ? (S.keys = [], S.repeating = !0, S.previousKeyMatched = !0) : S.repeating && k !== S.keys[0] && (S.repeating = !1)), S.lastTime = $, S.keys.push(k);
      const M = R && !S.repeating && Ks(R, S);
      S.previousKeyMatched && (M || Jt(y, R, !1, l, nn, S)) ? b.preventDefault() : S.previousKeyMatched = !1;
    }
    p && p(b);
  }, m = ze(g, n);
  let O = -1;
  f.Children.forEach(a, (b, y) => {
    if (!/* @__PURE__ */ f.isValidElement(b)) {
      O === y && (O += 1, O >= a.length && (O = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && fo.isFragment(b) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), b.props.disabled || (h === "selectedMenu" && b.props.selected || O === -1) && (O = y), O === y && (b.props.disabled || b.props.muiSkipListHighlight || b.type.muiSkipListHighlight) && (O += 1, O >= a.length && (O = -1));
  });
  const w = f.Children.map(a, (b, y) => {
    if (y === O) {
      const x = {};
      return i && (x.autoFocus = !0), b.props.tabIndex === void 0 && h === "selectedMenu" && (x.tabIndex = 0), /* @__PURE__ */ f.cloneElement(b, x);
    }
    return b;
  });
  return /* @__PURE__ */ I(Rp, d({
    role: "menu",
    ref: m,
    className: c,
    onKeyDown: E,
    tabIndex: s ? 0 : -1
  }, v, {
    children: w
  }));
});
process.env.NODE_ENV !== "production" && (Ys.propTypes = {
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
const Np = Ys;
function kp(e) {
  return fe("MuiPopover", e);
}
const Mp = be("MuiPopover", ["root", "paper"]), Gm = Mp, Ap = ["onEntering"], Fp = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], Dp = ["slotProps"];
function xr(e, o) {
  let n = 0;
  return typeof o == "number" ? n = o : o === "center" ? n = e.height / 2 : o === "bottom" && (n = e.height), n;
}
function Er(e, o) {
  let n = 0;
  return typeof o == "number" ? n = o : o === "center" ? n = e.width / 2 : o === "right" && (n = e.width), n;
}
function Or(e) {
  return [e.horizontal, e.vertical].map((o) => typeof o == "number" ? `${o}px` : o).join(" ");
}
function $o(e) {
  return typeof e == "function" ? e() : e;
}
const Lp = (e) => {
  const {
    classes: o
  } = e;
  return xe({
    root: ["root"],
    paper: ["paper"]
  }, kp, o);
}, Bp = H(Is, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, o) => o.root
})({}), Xs = H(mo, {
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
}), Js = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s, i;
  const a = Oe({
    props: o,
    name: "MuiPopover"
  }), {
    action: c,
    anchorEl: l,
    anchorOrigin: u = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: p,
    anchorReference: h = "anchorEl",
    children: v,
    className: g,
    container: T,
    elevation: E = 8,
    marginThreshold: m = 16,
    open: O,
    PaperProps: w = {},
    slots: b,
    slotProps: y,
    transformOrigin: x = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: R = sp,
    transitionDuration: S = "auto",
    TransitionProps: {
      onEntering: k
    } = {},
    disableScrollLock: $ = !1
  } = a, M = J(a.TransitionProps, Ap), D = J(a, Fp), F = (r = y == null ? void 0 : y.paper) != null ? r : w, L = f.useRef(), B = ze(L, F.ref), _ = d({}, a, {
    anchorOrigin: u,
    anchorReference: h,
    elevation: E,
    marginThreshold: m,
    externalPaperSlotProps: F,
    transformOrigin: x,
    TransitionComponent: R,
    transitionDuration: S,
    TransitionProps: M
  }), j = Lp(_), V = f.useCallback(() => {
    if (h === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (p || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), p;
    const ie = $o(l), z = ie && ie.nodeType === 1 ? ie : He(L.current).body, se = z.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const K = z.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && K.top === 0 && K.left === 0 && K.right === 0 && K.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: se.top + xr(se, u.vertical),
      left: se.left + Er(se, u.horizontal)
    };
  }, [l, u.horizontal, u.vertical, p, h]), N = f.useCallback((ie) => ({
    vertical: xr(ie, x.vertical),
    horizontal: Er(ie, x.horizontal)
  }), [x.horizontal, x.vertical]), U = f.useCallback((ie) => {
    const z = {
      width: ie.offsetWidth,
      height: ie.offsetHeight
    }, se = N(z);
    if (h === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Or(se)
      };
    const K = V();
    let $e = K.top - se.vertical, oe = K.left - se.horizontal;
    const De = $e + z.height, Ne = oe + z.width, Te = pt($o(l)), Le = Te.innerHeight - m, Me = Te.innerWidth - m;
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
      transformOrigin: Or(se)
    };
  }, [l, h, V, N, m]), [Z, he] = f.useState(O), ve = f.useCallback(() => {
    const ie = L.current;
    if (!ie)
      return;
    const z = U(ie);
    z.top !== null && (ie.style.top = z.top), z.left !== null && (ie.style.left = z.left), ie.style.transformOrigin = z.transformOrigin, he(!0);
  }, [U]);
  f.useEffect(() => ($ && window.addEventListener("scroll", ve), () => window.removeEventListener("scroll", ve)), [l, $, ve]);
  const Ee = (ie, z) => {
    k && k(ie, z), ve();
  }, ee = () => {
    he(!1);
  };
  f.useEffect(() => {
    O && ve();
  }), f.useImperativeHandle(c, () => O ? {
    updatePosition: () => {
      ve();
    }
  } : null, [O, ve]), f.useEffect(() => {
    if (!O)
      return;
    const ie = po(() => {
      ve();
    }), z = pt(l);
    return z.addEventListener("resize", ie), () => {
      ie.clear(), z.removeEventListener("resize", ie);
    };
  }, [l, O, ve]);
  let ne = S;
  S === "auto" && !R.muiSupportAuto && (ne = void 0);
  const G = T || (l ? He($o(l)).body : void 0), ue = (s = b == null ? void 0 : b.root) != null ? s : Bp, X = (i = b == null ? void 0 : b.paper) != null ? i : Xs, pe = ft({
    elementType: X,
    externalSlotProps: d({}, F, {
      style: Z ? F.style : d({}, F.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: E,
      ref: B
    },
    ownerState: _,
    className: te(j.paper, F == null ? void 0 : F.className)
  }), Se = ft({
    elementType: ue,
    externalSlotProps: (y == null ? void 0 : y.root) || {},
    externalForwardedProps: D,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: G,
      open: O
    },
    ownerState: _,
    className: te(j.root, g)
  }), {
    slotProps: ae
  } = Se, ce = J(Se, Dp);
  return /* @__PURE__ */ I(ue, d({}, ce, !No(ue) && {
    slotProps: ae,
    disableScrollLock: $
  }, {
    children: /* @__PURE__ */ I(R, d({
      appear: !0,
      in: O,
      onEntering: Ee,
      onExited: ee,
      timeout: ne
    }, M, {
      children: /* @__PURE__ */ I(X, d({}, pe, {
        children: v
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Js.propTypes = {
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
  anchorEl: ht(t.oneOfType([gt, t.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const o = $o(e.anchorEl);
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
  container: t.oneOfType([gt, t.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: t.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Lo,
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
    component: bn
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
const jp = Js;
function _p(e) {
  return fe("MuiMenu", e);
}
const zp = be("MuiMenu", ["root", "paper", "list"]), Km = zp, Vp = ["onEntering"], Wp = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], Up = {
  vertical: "top",
  horizontal: "right"
}, Hp = {
  vertical: "top",
  horizontal: "left"
}, qp = (e) => {
  const {
    classes: o
  } = e;
  return xe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, _p, o);
}, Gp = H(jp, {
  shouldForwardProp: (e) => nt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, o) => o.root
})({}), Kp = H(Xs, {
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
}), Yp = H(Np, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, o) => o.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Zs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s;
  const i = Oe({
    props: o,
    name: "MuiMenu"
  }), {
    autoFocus: a = !0,
    children: c,
    className: l,
    disableAutoFocusItem: u = !1,
    MenuListProps: p = {},
    onClose: h,
    open: v,
    PaperProps: g = {},
    PopoverClasses: T,
    transitionDuration: E = "auto",
    TransitionProps: {
      onEntering: m
    } = {},
    variant: O = "selectedMenu",
    slots: w = {},
    slotProps: b = {}
  } = i, y = J(i.TransitionProps, Vp), x = J(i, Wp), R = Ct(), S = R.direction === "rtl", k = d({}, i, {
    autoFocus: a,
    disableAutoFocusItem: u,
    MenuListProps: p,
    onEntering: m,
    PaperProps: g,
    transitionDuration: E,
    TransitionProps: y,
    variant: O
  }), $ = qp(k), M = a && !u && v, D = f.useRef(null), F = (U, Z) => {
    D.current && D.current.adjustStyleForScrollbar(U, R), m && m(U, Z);
  }, L = (U) => {
    U.key === "Tab" && (U.preventDefault(), h && h(U, "tabKeyDown"));
  };
  let B = -1;
  f.Children.map(c, (U, Z) => {
    /* @__PURE__ */ f.isValidElement(U) && (process.env.NODE_ENV !== "production" && fo.isFragment(U) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), U.props.disabled || (O === "selectedMenu" && U.props.selected || B === -1) && (B = Z));
  });
  const _ = (r = w.paper) != null ? r : Kp, j = (s = b.paper) != null ? s : g, V = ft({
    elementType: w.root,
    externalSlotProps: b.root,
    ownerState: k,
    className: [$.root, l]
  }), N = ft({
    elementType: _,
    externalSlotProps: j,
    ownerState: k,
    className: $.paper
  });
  return /* @__PURE__ */ I(Gp, d({
    onClose: h,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: S ? "right" : "left"
    },
    transformOrigin: S ? Up : Hp,
    slots: {
      paper: _,
      root: w.root
    },
    slotProps: {
      root: V,
      paper: N
    },
    open: v,
    ref: n,
    transitionDuration: E,
    TransitionProps: d({
      onEntering: F
    }, y),
    ownerState: k
  }, x, {
    classes: T,
    children: /* @__PURE__ */ I(Yp, d({
      onKeyDown: L,
      actions: D,
      autoFocus: a && (B === -1 || u),
      autoFocusItem: M,
      variant: O
    }, p, {
      className: te($.list, p.className),
      children: c
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Zs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: t.oneOfType([gt, t.func]),
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
const Xp = Zs;
function Jp(e) {
  return fe("MuiMenuItem", e);
}
const Zp = be("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Zt = Zp, Qp = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"], ef = (e, o) => {
  const {
    ownerState: n
  } = e;
  return [o.root, n.dense && o.dense, n.divider && o.divider, !n.disableGutters && o.gutters];
}, tf = (e) => {
  const {
    disabled: o,
    dense: n,
    divider: r,
    disableGutters: s,
    selected: i,
    classes: a
  } = e, l = xe({
    root: ["root", n && "dense", o && "disabled", !s && "gutters", r && "divider", i && "selected"]
  }, Jp, a);
  return d({}, a, l);
}, of = H(Kt, {
  shouldForwardProp: (e) => nt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: ef
})(({
  theme: e,
  ownerState: o
}) => d({}, e.typography.body1, {
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
  [`&.${Zt.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : it(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Zt.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : it(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Zt.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : it(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : it(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Zt.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Zt.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${dr.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${dr.inset}`]: {
    marginLeft: 52
  },
  [`& .${gr.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${gr.inset}`]: {
    paddingLeft: 36
  },
  [`& .${vr.root}`]: {
    minWidth: 36
  }
}, !o.dense && {
  [e.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, o.dense && d({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, e.typography.body2, {
  [`& .${vr.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), Qs = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiMenuItem"
  }), {
    autoFocus: s = !1,
    component: i = "li",
    dense: a = !1,
    divider: c = !1,
    disableGutters: l = !1,
    focusVisibleClassName: u,
    role: p = "menuitem",
    tabIndex: h,
    className: v
  } = r, g = J(r, Qp), T = f.useContext(mn), E = f.useMemo(() => ({
    dense: a || T.dense || !1,
    disableGutters: l
  }), [T.dense, a, l]), m = f.useRef(null);
  vt(() => {
    s && (m.current ? m.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [s]);
  const O = d({}, r, {
    dense: E.dense,
    divider: c,
    disableGutters: l
  }), w = tf(r), b = ze(m, n);
  let y;
  return r.disabled || (y = h !== void 0 ? h : -1), /* @__PURE__ */ I(mn.Provider, {
    value: E,
    children: /* @__PURE__ */ I(of, d({
      ref: b,
      role: p,
      tabIndex: y,
      component: i,
      focusVisibleClassName: te(w.focusVisible, u),
      className: te(w.root, v)
    }, g, {
      ownerState: O,
      classes: w
    }))
  });
});
process.env.NODE_ENV !== "production" && (Qs.propTypes = {
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
const Ym = Qs;
function nf(e) {
  return fe("MuiNativeSelect", e);
}
const rf = be("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), kn = rf, sf = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], af = (e) => {
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
  return xe(c, nf, o);
}, ei = ({
  ownerState: e,
  theme: o
}) => d({
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
  "&:focus": d({}, o.vars ? {
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
  [`&.${kn.disabled}`]: {
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
}), lf = H("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: nt,
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.select, o[n.variant], n.error && o.error, {
      [`&.${kn.multiple}`]: o.multiple
    }];
  }
})(ei), ti = ({
  ownerState: e,
  theme: o
}) => d({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (o.vars || o).palette.action.active,
  [`&.${kn.disabled}`]: {
    color: (o.vars || o).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), cf = H("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.icon, n.variant && o[`icon${de(n.variant)}`], n.open && o.iconOpen];
  }
})(ti), oi = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const {
    className: r,
    disabled: s,
    error: i,
    IconComponent: a,
    inputRef: c,
    variant: l = "standard"
  } = o, u = J(o, sf), p = d({}, o, {
    disabled: s,
    variant: l,
    error: i
  }), h = af(p);
  return /* @__PURE__ */ ke(f.Fragment, {
    children: [/* @__PURE__ */ I(lf, d({
      ownerState: p,
      className: te(h.select, r),
      disabled: s,
      ref: c || n
    }, u)), o.multiple ? null : /* @__PURE__ */ I(cf, {
      as: a,
      ownerState: p,
      className: h.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (oi.propTypes = {
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
const uf = oi;
var Cr;
const df = ["children", "classes", "className", "label", "notched"], pf = H("fieldset", {
  shouldForwardProp: nt
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
}), ff = H("legend", {
  shouldForwardProp: nt
})(({
  ownerState: e,
  theme: o
}) => d({
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
}, e.withLabel && d({
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
function ni(e) {
  const {
    className: o,
    label: n,
    notched: r
  } = e, s = J(e, df), i = n != null && n !== "", a = d({}, e, {
    notched: r,
    withLabel: i
  });
  return /* @__PURE__ */ I(pf, d({
    "aria-hidden": !0,
    className: o,
    ownerState: a
  }, s, {
    children: /* @__PURE__ */ I(ff, {
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
process.env.NODE_ENV !== "production" && (ni.propTypes = {
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
const mf = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], bf = (e) => {
  const {
    classes: o
  } = e, r = xe({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, iu, o);
  return d({}, o, r);
}, hf = H(Uo, {
  shouldForwardProp: (e) => nt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Vo
})(({
  theme: e,
  ownerState: o
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return d({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${mt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${mt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${mt.focused} .${mt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[o.color].main,
      borderWidth: 2
    },
    [`&.${mt.error} .${mt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${mt.disabled} .${mt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, o.startAdornment && {
    paddingLeft: 14
  }, o.endAdornment && {
    paddingRight: 14
  }, o.multiline && d({
    padding: "16.5px 14px"
  }, o.size === "small" && {
    padding: "8.5px 14px"
  }));
}), vf = H(ni, {
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
}), gf = H(Ho, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Wo
})(({
  theme: e,
  ownerState: o
}) => d({
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
})), Mn = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s, i, a, c;
  const l = Oe({
    props: o,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: p = !1,
    inputComponent: h = "input",
    label: v,
    multiline: g = !1,
    notched: T,
    slots: E = {},
    type: m = "text"
  } = l, O = J(l, mf), w = bf(l), b = xt(), y = It({
    props: l,
    muiFormControl: b,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), x = d({}, l, {
    color: y.color || "primary",
    disabled: y.disabled,
    error: y.error,
    focused: y.focused,
    formControl: b,
    fullWidth: p,
    hiddenLabel: y.hiddenLabel,
    multiline: g,
    size: y.size,
    type: m
  }), R = (r = (s = E.root) != null ? s : u.Root) != null ? r : hf, S = (i = (a = E.input) != null ? a : u.Input) != null ? i : gf;
  return /* @__PURE__ */ I(Pn, d({
    slots: {
      root: R,
      input: S
    },
    renderSuffix: (k) => /* @__PURE__ */ I(vf, {
      ownerState: x,
      className: w.notchedOutline,
      label: v != null && v !== "" && y.required ? c || (c = /* @__PURE__ */ ke(f.Fragment, {
        children: [v, " ", "*"]
      })) : v,
      notched: typeof T < "u" ? T : !!(k.startAdornment || k.filled || k.focused)
    }),
    fullWidth: p,
    inputComponent: h,
    multiline: g,
    ref: n,
    type: m
  }, O, {
    classes: d({}, w, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (Mn.propTypes = {
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
Mn.muiName = "Input";
const ri = Mn;
function yf(e) {
  return fe("MuiSelect", e);
}
const xf = be("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Qt = xf;
var Tr;
const Ef = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], Of = H("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Qt.select}`]: o.select
      },
      {
        [`&.${Qt.select}`]: o[n.variant]
      },
      {
        [`&.${Qt.error}`]: o.error
      },
      {
        [`&.${Qt.multiple}`]: o.multiple
      }
    ];
  }
})(ei, {
  // Win specificity over the input base
  [`&.${Qt.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), Cf = H("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.icon, n.variant && o[`icon${de(n.variant)}`], n.open && o.iconOpen];
  }
})(ti), Tf = H("input", {
  shouldForwardProp: (e) => Pi(e) && e !== "classes",
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
function wr(e, o) {
  return typeof o == "object" && o !== null ? e === o : String(e) === String(o);
}
function wf(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const Sf = (e) => {
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
  return xe(c, yf, o);
}, si = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r;
  const {
    "aria-describedby": s,
    "aria-label": i,
    autoFocus: a,
    autoWidth: c,
    children: l,
    className: u,
    defaultOpen: p,
    defaultValue: h,
    disabled: v,
    displayEmpty: g,
    error: T = !1,
    IconComponent: E,
    inputRef: m,
    labelId: O,
    MenuProps: w = {},
    multiple: b,
    name: y,
    onBlur: x,
    onChange: R,
    onClose: S,
    onFocus: k,
    onOpen: $,
    open: M,
    readOnly: D,
    renderValue: F,
    SelectDisplayProps: L = {},
    tabIndex: B,
    value: _,
    variant: j = "standard"
  } = o, V = J(o, Ef), [N, U] = At({
    controlled: _,
    default: h,
    name: "Select"
  }), [Z, he] = At({
    controlled: M,
    default: p,
    name: "Select"
  }), ve = f.useRef(null), Ee = f.useRef(null), [ee, ne] = f.useState(null), {
    current: G
  } = f.useRef(M != null), [ue, X] = f.useState(), pe = ze(n, m), Se = f.useCallback((Y) => {
    Ee.current = Y, Y && ne(Y);
  }, []), ae = ee == null ? void 0 : ee.parentNode;
  f.useImperativeHandle(pe, () => ({
    focus: () => {
      Ee.current.focus();
    },
    node: ve.current,
    value: N
  }), [N]), f.useEffect(() => {
    p && Z && ee && !G && (X(c ? null : ae.clientWidth), Ee.current.focus());
  }, [ee, c]), f.useEffect(() => {
    a && Ee.current.focus();
  }, [a]), f.useEffect(() => {
    if (!O)
      return;
    const Y = He(Ee.current).getElementById(O);
    if (Y) {
      const A = () => {
        getSelection().isCollapsed && Ee.current.focus();
      };
      return Y.addEventListener("click", A), () => {
        Y.removeEventListener("click", A);
      };
    }
  }, [O]);
  const ce = (Y, A) => {
    Y ? $ && $(A) : S && S(A), G || (X(c ? null : ae.clientWidth), he(Y));
  }, ie = (Y) => {
    Y.button === 0 && (Y.preventDefault(), Ee.current.focus(), ce(!0, Y));
  }, z = (Y) => {
    ce(!1, Y);
  }, se = f.Children.toArray(l), K = (Y) => {
    const A = se.find((q) => q.props.value === Y.target.value);
    A !== void 0 && (U(A.props.value), R && R(Y, A));
  }, $e = (Y) => (A) => {
    let q;
    if (A.currentTarget.hasAttribute("tabindex")) {
      if (b) {
        q = Array.isArray(N) ? N.slice() : [];
        const le = N.indexOf(Y.props.value);
        le === -1 ? q.push(Y.props.value) : q.splice(le, 1);
      } else
        q = Y.props.value;
      if (Y.props.onClick && Y.props.onClick(A), N !== q && (U(q), R)) {
        const le = A.nativeEvent || A, me = new le.constructor(le.type, le);
        Object.defineProperty(me, "target", {
          writable: !0,
          value: {
            value: q,
            name: y
          }
        }), R(me, Y);
      }
      b || ce(!1, A);
    }
  }, oe = (Y) => {
    D || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(Y.key) !== -1 && (Y.preventDefault(), ce(!0, Y));
  }, De = ee !== null && Z, Ne = (Y) => {
    !De && x && (Object.defineProperty(Y, "target", {
      writable: !0,
      value: {
        value: N,
        name: y
      }
    }), x(Y));
  };
  delete V["aria-invalid"];
  let Te, Le;
  const Me = [];
  let Re = !1, qe = !1;
  (Fo({
    value: N
  }) || g) && (F ? Te = F(N) : Re = !0);
  const Ge = se.map((Y) => {
    if (!/* @__PURE__ */ f.isValidElement(Y))
      return null;
    process.env.NODE_ENV !== "production" && fo.isFragment(Y) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let A;
    if (b) {
      if (!Array.isArray(N))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Nr(2));
      A = N.some((q) => wr(q, Y.props.value)), A && Re && Me.push(Y.props.children);
    } else
      A = wr(N, Y.props.value), A && Re && (Le = Y.props.children);
    return A && (qe = !0), /* @__PURE__ */ f.cloneElement(Y, {
      "aria-selected": A ? "true" : "false",
      onClick: $e(Y),
      onKeyUp: (q) => {
        q.key === " " && q.preventDefault(), Y.props.onKeyUp && Y.props.onKeyUp(q);
      },
      role: "option",
      selected: A,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Y.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && f.useEffect(() => {
    if (!qe && !b && N !== "") {
      const Y = se.map((A) => A.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${N}\` for the select ${y ? `(name="${y}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${Y.filter((A) => A != null).map((A) => `\`${A}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [qe, se, b, y, N]), Re && (b ? Me.length === 0 ? Te = null : Te = Me.reduce((Y, A, q) => (Y.push(A), q < Me.length - 1 && Y.push(", "), Y), []) : Te = Le);
  let Ke = ue;
  !c && G && ee && (Ke = ae.clientWidth);
  let re;
  typeof B < "u" ? re = B : re = v ? null : 0;
  const ge = L.id || (y ? `mui-component-select-${y}` : void 0), Be = d({}, o, {
    variant: j,
    value: N,
    open: De,
    error: T
  }), Ye = Sf(Be), rt = d({}, w.PaperProps, (r = w.slotProps) == null ? void 0 : r.paper), ut = hn();
  return /* @__PURE__ */ ke(f.Fragment, {
    children: [/* @__PURE__ */ I(Of, d({
      ref: Se,
      tabIndex: re,
      role: "combobox",
      "aria-controls": ut,
      "aria-disabled": v ? "true" : void 0,
      "aria-expanded": De ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [O, ge].filter(Boolean).join(" ") || void 0,
      "aria-describedby": s,
      onKeyDown: oe,
      onMouseDown: v || D ? null : ie,
      onBlur: Ne,
      onFocus: k
    }, L, {
      ownerState: Be,
      className: te(L.className, Ye.select, u),
      id: ge,
      children: wf(Te) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Tr || (Tr = /* @__PURE__ */ I("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Te
    })), /* @__PURE__ */ I(Tf, d({
      "aria-invalid": T,
      value: Array.isArray(N) ? N.join(",") : N,
      name: y,
      ref: ve,
      "aria-hidden": !0,
      onChange: K,
      tabIndex: -1,
      disabled: v,
      className: Ye.nativeInput,
      autoFocus: a,
      ownerState: Be
    }, V)), /* @__PURE__ */ I(Cf, {
      as: E,
      className: Ye.icon,
      ownerState: Be
    }), /* @__PURE__ */ I(Xp, d({
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
    }, w, {
      MenuListProps: d({
        "aria-labelledby": O,
        role: "listbox",
        "aria-multiselectable": b ? "true" : void 0,
        disableListWrap: !0,
        id: ut
      }, w.MenuListProps),
      slotProps: d({}, w.slotProps, {
        paper: d({}, rt, {
          style: d({
            minWidth: Ke
          }, rt != null ? rt.style : null)
        })
      }),
      children: Ge
    }))]
  });
});
process.env.NODE_ENV !== "production" && (si.propTypes = {
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
const Rf = si, Pf = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], If = ["root"], $f = (e) => {
  const {
    classes: o
  } = e;
  return o;
}, An = {
  name: "MuiSelect",
  overridesResolver: (e, o) => o.root,
  shouldForwardProp: (e) => nt(e) && e !== "variant",
  slot: "Root"
}, Nf = H(Ws, An)(""), kf = H(ri, An)(""), Mf = H(Ds, An)(""), Fn = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    name: "MuiSelect",
    props: o
  }), {
    autoWidth: s = !1,
    children: i,
    classes: a = {},
    className: c,
    defaultOpen: l = !1,
    displayEmpty: u = !1,
    IconComponent: p = Os,
    id: h,
    input: v,
    inputProps: g,
    label: T,
    labelId: E,
    MenuProps: m,
    multiple: O = !1,
    native: w = !1,
    onClose: b,
    onOpen: y,
    open: x,
    renderValue: R,
    SelectDisplayProps: S,
    variant: k = "outlined"
  } = r, $ = J(r, Pf), M = w ? uf : Rf, D = xt(), F = It({
    props: r,
    muiFormControl: D,
    states: ["variant", "error"]
  }), L = F.variant || k, B = d({}, r, {
    variant: L,
    classes: a
  }), _ = $f(B), j = J(_, If), V = v || {
    standard: /* @__PURE__ */ I(Nf, {
      ownerState: B
    }),
    outlined: /* @__PURE__ */ I(kf, {
      label: T,
      ownerState: B
    }),
    filled: /* @__PURE__ */ I(Mf, {
      ownerState: B
    })
  }[L], N = ze(n, V.ref);
  return /* @__PURE__ */ I(f.Fragment, {
    children: /* @__PURE__ */ f.cloneElement(V, d({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: M,
      inputProps: d({
        children: i,
        error: F.error,
        IconComponent: p,
        variant: L,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: O
      }, w ? {
        id: h
      } : {
        autoWidth: s,
        defaultOpen: l,
        displayEmpty: u,
        labelId: E,
        MenuProps: m,
        onClose: b,
        onOpen: y,
        open: x,
        renderValue: R,
        SelectDisplayProps: d({
          id: h
        }, S)
      }, g, {
        classes: g ? Do(j, g.classes) : j
      }, v ? v.props.inputProps : {})
    }, (O && w || u) && L === "outlined" ? {
      notched: !0
    } : {}, {
      ref: N,
      className: te(V.props.className, c, _.root)
    }, !v && {
      variant: L
    }, $))
  });
});
process.env.NODE_ENV !== "production" && (Fn.propTypes = {
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
Fn.muiName = "Select";
const Af = Fn;
function Ff(e) {
  return fe("MuiTab", e);
}
const Df = be("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]), Nt = Df, Lf = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"], Bf = (e) => {
  const {
    classes: o,
    textColor: n,
    fullWidth: r,
    wrapped: s,
    icon: i,
    label: a,
    selected: c,
    disabled: l
  } = e, u = {
    root: ["root", i && a && "labelIcon", `textColor${de(n)}`, r && "fullWidth", s && "wrapped", c && "selected", l && "disabled"],
    iconWrapper: ["iconWrapper"]
  };
  return xe(u, Ff, o);
}, jf = H(Kt, {
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
}) => d({}, e.typography.button, {
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
  [`& > .${Nt.iconWrapper}`]: d({}, o.iconPosition === "top" && {
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
  [`&.${Nt.selected}`]: {
    opacity: 1
  },
  [`&.${Nt.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, o.textColor === "primary" && {
  color: (e.vars || e).palette.text.secondary,
  [`&.${Nt.selected}`]: {
    color: (e.vars || e).palette.primary.main
  },
  [`&.${Nt.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  }
}, o.textColor === "secondary" && {
  color: (e.vars || e).palette.text.secondary,
  [`&.${Nt.selected}`]: {
    color: (e.vars || e).palette.secondary.main
  },
  [`&.${Nt.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  }
}, o.fullWidth && {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: 0,
  maxWidth: "none"
}, o.wrapped && {
  fontSize: e.typography.pxToRem(12)
})), ii = /* @__PURE__ */ f.forwardRef(function(o, n) {
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
    iconPosition: u = "top",
    // eslint-disable-next-line react/prop-types
    indicator: p,
    label: h,
    onChange: v,
    onClick: g,
    onFocus: T,
    // eslint-disable-next-line react/prop-types
    selected: E,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: m,
    // eslint-disable-next-line react/prop-types
    textColor: O = "inherit",
    value: w,
    wrapped: b = !1
  } = r, y = J(r, Lf), x = d({}, r, {
    disabled: i,
    disableFocusRipple: a,
    selected: E,
    icon: !!l,
    iconPosition: u,
    label: !!h,
    fullWidth: c,
    textColor: O,
    wrapped: b
  }), R = Bf(x), S = l && h && /* @__PURE__ */ f.isValidElement(l) ? /* @__PURE__ */ f.cloneElement(l, {
    className: te(R.iconWrapper, l.props.className)
  }) : l, k = (M) => {
    !E && v && v(M, w), g && g(M);
  }, $ = (M) => {
    m && !E && v && v(M, w), T && T(M);
  };
  return /* @__PURE__ */ ke(jf, d({
    focusRipple: !a,
    className: te(R.root, s),
    ref: n,
    role: "tab",
    "aria-selected": E,
    disabled: i,
    onClick: k,
    onFocus: $,
    ownerState: x,
    tabIndex: E ? 0 : -1
  }, y, {
    children: [u === "top" || u === "start" ? /* @__PURE__ */ ke(f.Fragment, {
      children: [S, h]
    }) : /* @__PURE__ */ ke(f.Fragment, {
      children: [h, S]
    }), p]
  }));
});
process.env.NODE_ENV !== "production" && (ii.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Ni,
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
const Xm = ii, _f = Lt(/* @__PURE__ */ I("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), zf = Lt(/* @__PURE__ */ I("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");
function Vf(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function Wf(e, o, n, r = {}, s = () => {
}) {
  const {
    ease: i = Vf,
    duration: a = 300
    // standard
  } = r;
  let c = null;
  const l = o[e];
  let u = !1;
  const p = () => {
    u = !0;
  }, h = (v) => {
    if (u) {
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
    requestAnimationFrame(h);
  };
  return l === n ? (s(new Error("Element already at target position")), p) : (requestAnimationFrame(h), p);
}
const Uf = ["onChange"], Hf = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function ai(e) {
  const {
    onChange: o
  } = e, n = J(e, Uf), r = f.useRef(), s = f.useRef(null), i = () => {
    r.current = s.current.offsetHeight - s.current.clientHeight;
  };
  return vt(() => {
    const a = po(() => {
      const l = r.current;
      i(), l !== r.current && o(r.current);
    }), c = pt(s.current);
    return c.addEventListener("resize", a), () => {
      a.clear(), c.removeEventListener("resize", a);
    };
  }, [o]), f.useEffect(() => {
    i(), o(r.current);
  }, [o]), /* @__PURE__ */ I("div", d({
    style: Hf,
    ref: s
  }, n));
}
process.env.NODE_ENV !== "production" && (ai.propTypes = {
  onChange: t.func.isRequired
});
function qf(e) {
  return fe("MuiTabScrollButton", e);
}
const Gf = be("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), Kf = Gf, Yf = ["className", "slots", "slotProps", "direction", "orientation", "disabled"], Xf = (e) => {
  const {
    classes: o,
    orientation: n,
    disabled: r
  } = e;
  return xe({
    root: ["root", n, r && "disabled"]
  }, qf, o);
}, Jf = H(Kt, {
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
}) => d({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${Kf.disabled}`]: {
    opacity: 0
  }
}, e.orientation === "vertical" && {
  width: "100%",
  height: 40,
  "& svg": {
    transform: `rotate(${e.isRtl ? -90 : 90}deg)`
  }
})), li = /* @__PURE__ */ f.forwardRef(function(o, n) {
  var r, s;
  const i = Oe({
    props: o,
    name: "MuiTabScrollButton"
  }), {
    className: a,
    slots: c = {},
    slotProps: l = {},
    direction: u
  } = i, p = J(i, Yf), v = Ct().direction === "rtl", g = d({
    isRtl: v
  }, i), T = Xf(g), E = (r = c.StartScrollButtonIcon) != null ? r : _f, m = (s = c.EndScrollButtonIcon) != null ? s : zf, O = ft({
    elementType: E,
    externalSlotProps: l.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: g
  }), w = ft({
    elementType: m,
    externalSlotProps: l.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: g
  });
  return /* @__PURE__ */ I(Jf, d({
    component: "div",
    className: te(T.root, a),
    ref: n,
    role: null,
    ownerState: g,
    tabIndex: null
  }, p, {
    children: u === "left" ? /* @__PURE__ */ I(E, d({}, O)) : /* @__PURE__ */ I(m, d({}, w))
  }));
});
process.env.NODE_ENV !== "production" && (li.propTypes = {
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
const Zf = li;
function Qf(e) {
  return fe("MuiTabs", e);
}
const em = be("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), rn = em, tm = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"], Sr = (e, o) => e === o ? e.firstChild : o && o.nextElementSibling ? o.nextElementSibling : e.firstChild, Rr = (e, o) => e === o ? e.lastChild : o && o.previousElementSibling ? o.previousElementSibling : e.lastChild, Ro = (e, o, n) => {
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
}, om = (e) => {
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
  }, Qf, l);
}, nm = H("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${rn.scrollButtons}`]: o.scrollButtons
    }, {
      [`& .${rn.scrollButtons}`]: n.scrollButtonsHideMobile && o.scrollButtonsHideMobile
    }, o.root, n.vertical && o.vertical];
  }
})(({
  ownerState: e,
  theme: o
}) => d({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex"
}, e.vertical && {
  flexDirection: "column"
}, e.scrollButtonsHideMobile && {
  [`& .${rn.scrollButtons}`]: {
    [o.breakpoints.down("sm")]: {
      display: "none"
    }
  }
})), rm = H("div", {
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
}) => d({
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
})), sm = H("div", {
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
}) => d({
  display: "flex"
}, e.vertical && {
  flexDirection: "column"
}, e.centered && {
  justifyContent: "center"
})), im = H("span", {
  name: "MuiTabs",
  slot: "Indicator",
  overridesResolver: (e, o) => o.indicator
})(({
  ownerState: e,
  theme: o
}) => d({
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
})), am = H(ai)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Pr = {};
let Ir = !1;
const ci = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiTabs"
  }), s = Ct(), i = s.direction === "rtl", {
    "aria-label": a,
    "aria-labelledby": c,
    action: l,
    centered: u = !1,
    children: p,
    className: h,
    component: v = "div",
    allowScrollButtonsMobile: g = !1,
    indicatorColor: T = "primary",
    onChange: E,
    orientation: m = "horizontal",
    ScrollButtonComponent: O = Zf,
    scrollButtons: w = "auto",
    selectionFollowsFocus: b,
    slots: y = {},
    slotProps: x = {},
    TabIndicatorProps: R = {},
    TabScrollButtonProps: S = {},
    textColor: k = "primary",
    value: $,
    variant: M = "standard",
    visibleScrollbar: D = !1
  } = r, F = J(r, tm), L = M === "scrollable", B = m === "vertical", _ = B ? "scrollTop" : "scrollLeft", j = B ? "top" : "left", V = B ? "bottom" : "right", N = B ? "clientHeight" : "clientWidth", U = B ? "height" : "width", Z = d({}, r, {
    component: v,
    allowScrollButtonsMobile: g,
    indicatorColor: T,
    orientation: m,
    vertical: B,
    scrollButtons: w,
    textColor: k,
    variant: M,
    visibleScrollbar: D,
    fixed: !L,
    hideScrollbar: L && !D,
    scrollableX: L && !B,
    scrollableY: L && B,
    centered: u && !L,
    scrollButtonsHideMobile: !g
  }), he = om(Z), ve = ft({
    elementType: y.StartScrollButtonIcon,
    externalSlotProps: x.startScrollButtonIcon,
    ownerState: Z
  }), Ee = ft({
    elementType: y.EndScrollButtonIcon,
    externalSlotProps: x.endScrollButtonIcon,
    ownerState: Z
  });
  process.env.NODE_ENV !== "production" && u && L && console.error('MUI: You can not use the `centered={true}` and `variant="scrollable"` properties at the same time on a `Tabs` component.');
  const [ee, ne] = f.useState(!1), [G, ue] = f.useState(Pr), [X, pe] = f.useState(!1), [Se, ae] = f.useState(!1), [ce, ie] = f.useState(!1), [z, se] = f.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), K = /* @__PURE__ */ new Map(), $e = f.useRef(null), oe = f.useRef(null), De = () => {
    const A = $e.current;
    let q;
    if (A) {
      const me = A.getBoundingClientRect();
      q = {
        clientWidth: A.clientWidth,
        scrollLeft: A.scrollLeft,
        scrollTop: A.scrollTop,
        scrollLeftNormalized: Hi(A, s.direction),
        scrollWidth: A.scrollWidth,
        top: me.top,
        bottom: me.bottom,
        left: me.left,
        right: me.right
      };
    }
    let le;
    if (A && $ !== !1) {
      const me = oe.current.children;
      if (me.length > 0) {
        const Ce = me[K.get($)];
        process.env.NODE_ENV !== "production" && (Ce || console.error(["MUI: The `value` provided to the Tabs component is invalid.", `None of the Tabs' children match with "${$}".`, K.keys ? `You can provide one of the following values: ${Array.from(K.keys()).join(", ")}.` : null].join(`
`))), le = Ce ? Ce.getBoundingClientRect() : null, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && !Ir && le && le.width === 0 && le.height === 0 && // if the whole Tabs component is hidden, don't warn
        q.clientWidth !== 0 && (q = null, console.error(["MUI: The `value` provided to the Tabs component is invalid.", `The Tab with this \`value\` ("${$}") is not part of the document layout.`, "Make sure the tab item is present in the document or that it's not `display: none`."].join(`
`)), Ir = !0);
      }
    }
    return {
      tabsMeta: q,
      tabMeta: le
    };
  }, Ne = Et(() => {
    const {
      tabsMeta: A,
      tabMeta: q
    } = De();
    let le = 0, me;
    if (B)
      me = "top", q && A && (le = q.top - A.top + A.scrollTop);
    else if (me = i ? "right" : "left", q && A) {
      const Fe = i ? A.scrollLeftNormalized + A.clientWidth - A.scrollWidth : A.scrollLeft;
      le = (i ? -1 : 1) * (q[me] - A[me] + Fe);
    }
    const Ce = {
      [me]: le,
      // May be wrong until the font is loaded.
      [U]: q ? q[U] : 0
    };
    if (isNaN(G[me]) || isNaN(G[U]))
      ue(Ce);
    else {
      const Fe = Math.abs(G[me] - Ce[me]), je = Math.abs(G[U] - Ce[U]);
      (Fe >= 1 || je >= 1) && ue(Ce);
    }
  }), Te = (A, {
    animation: q = !0
  } = {}) => {
    q ? Wf(_, $e.current, A, {
      duration: s.transitions.duration.standard
    }) : $e.current[_] = A;
  }, Le = (A) => {
    let q = $e.current[_];
    B ? q += A : (q += A * (i ? -1 : 1), q *= i && jr() === "reverse" ? -1 : 1), Te(q);
  }, Me = () => {
    const A = $e.current[N];
    let q = 0;
    const le = Array.from(oe.current.children);
    for (let me = 0; me < le.length; me += 1) {
      const Ce = le[me];
      if (q + Ce[N] > A) {
        me === 0 && (q = A);
        break;
      }
      q += Ce[N];
    }
    return q;
  }, Re = () => {
    Le(-1 * Me());
  }, qe = () => {
    Le(Me());
  }, Ge = f.useCallback((A) => {
    se({
      overflow: null,
      scrollbarWidth: A
    });
  }, []), Ke = () => {
    const A = {};
    A.scrollbarSizeListener = L ? /* @__PURE__ */ I(am, {
      onChange: Ge,
      className: te(he.scrollableX, he.hideScrollbar)
    }) : null;
    const le = L && (w === "auto" && (X || Se) || w === !0);
    return A.scrollButtonStart = le ? /* @__PURE__ */ I(O, d({
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
    }, S, {
      className: te(he.scrollButtons, S.className)
    })) : null, A.scrollButtonEnd = le ? /* @__PURE__ */ I(O, d({
      slots: {
        EndScrollButtonIcon: y.EndScrollButtonIcon
      },
      slotProps: {
        endScrollButtonIcon: Ee
      },
      orientation: m,
      direction: i ? "left" : "right",
      onClick: qe,
      disabled: !Se
    }, S, {
      className: te(he.scrollButtons, S.className)
    })) : null, A;
  }, re = Et((A) => {
    const {
      tabsMeta: q,
      tabMeta: le
    } = De();
    if (!(!le || !q)) {
      if (le[j] < q[j]) {
        const me = q[_] + (le[j] - q[j]);
        Te(me, {
          animation: A
        });
      } else if (le[V] > q[V]) {
        const me = q[_] + (le[V] - q[V]);
        Te(me, {
          animation: A
        });
      }
    }
  }), ge = Et(() => {
    L && w !== !1 && ie(!ce);
  });
  f.useEffect(() => {
    const A = po(() => {
      $e.current && Ne();
    });
    let q;
    const le = (Fe) => {
      Fe.forEach((je) => {
        je.removedNodes.forEach((st) => {
          var We;
          (We = q) == null || We.unobserve(st);
        }), je.addedNodes.forEach((st) => {
          var We;
          (We = q) == null || We.observe(st);
        });
      }), A(), ge();
    }, me = pt($e.current);
    me.addEventListener("resize", A);
    let Ce;
    return typeof ResizeObserver < "u" && (q = new ResizeObserver(A), Array.from(oe.current.children).forEach((Fe) => {
      q.observe(Fe);
    })), typeof MutationObserver < "u" && (Ce = new MutationObserver(le), Ce.observe(oe.current, {
      childList: !0
    })), () => {
      var Fe, je;
      A.clear(), me.removeEventListener("resize", A), (Fe = Ce) == null || Fe.disconnect(), (je = q) == null || je.disconnect();
    };
  }, [Ne, ge]), f.useEffect(() => {
    const A = Array.from(oe.current.children), q = A.length;
    if (typeof IntersectionObserver < "u" && q > 0 && L && w !== !1) {
      const le = A[0], me = A[q - 1], Ce = {
        root: $e.current,
        threshold: 0.99
      }, Fe = (wt) => {
        pe(!wt[0].isIntersecting);
      }, je = new IntersectionObserver(Fe, Ce);
      je.observe(le);
      const st = (wt) => {
        ae(!wt[0].isIntersecting);
      }, We = new IntersectionObserver(st, Ce);
      return We.observe(me), () => {
        je.disconnect(), We.disconnect();
      };
    }
  }, [L, w, ce, p == null ? void 0 : p.length]), f.useEffect(() => {
    ne(!0);
  }, []), f.useEffect(() => {
    Ne();
  }), f.useEffect(() => {
    re(Pr !== G);
  }, [re, G]), f.useImperativeHandle(l, () => ({
    updateIndicator: Ne,
    updateScrollButtons: ge
  }), [Ne, ge]);
  const Be = /* @__PURE__ */ I(im, d({}, R, {
    className: te(he.indicator, R.className),
    ownerState: Z,
    style: d({}, G, R.style)
  }));
  let Ye = 0;
  const rt = f.Children.map(p, (A) => {
    if (!/* @__PURE__ */ f.isValidElement(A))
      return null;
    process.env.NODE_ENV !== "production" && fo.isFragment(A) && console.error(["MUI: The Tabs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    const q = A.props.value === void 0 ? Ye : A.props.value;
    K.set(q, Ye);
    const le = q === $;
    return Ye += 1, /* @__PURE__ */ f.cloneElement(A, d({
      fullWidth: M === "fullWidth",
      indicator: le && !ee && Be,
      selected: le,
      selectionFollowsFocus: b,
      onChange: E,
      textColor: k,
      value: q
    }, Ye === 1 && $ === !1 && !A.props.tabIndex ? {
      tabIndex: 0
    } : {}));
  }), ut = (A) => {
    const q = oe.current, le = He(q).activeElement;
    if (le.getAttribute("role") !== "tab")
      return;
    let Ce = m === "horizontal" ? "ArrowLeft" : "ArrowUp", Fe = m === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (m === "horizontal" && i && (Ce = "ArrowRight", Fe = "ArrowLeft"), A.key) {
      case Ce:
        A.preventDefault(), Ro(q, le, Rr);
        break;
      case Fe:
        A.preventDefault(), Ro(q, le, Sr);
        break;
      case "Home":
        A.preventDefault(), Ro(q, null, Sr);
        break;
      case "End":
        A.preventDefault(), Ro(q, null, Rr);
        break;
    }
  }, Y = Ke();
  return /* @__PURE__ */ ke(nm, d({
    className: te(he.root, h),
    ownerState: Z,
    ref: n,
    as: v
  }, F, {
    children: [Y.scrollButtonStart, Y.scrollbarSizeListener, /* @__PURE__ */ ke(rm, {
      className: he.scroller,
      ownerState: Z,
      style: {
        overflow: z.overflow,
        [B ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: D ? void 0 : -z.scrollbarWidth
      },
      ref: $e,
      children: [/* @__PURE__ */ I(sm, {
        "aria-label": a,
        "aria-labelledby": c,
        "aria-orientation": m === "vertical" ? "vertical" : null,
        className: he.flexContainer,
        ownerState: Z,
        onKeyDown: ut,
        ref: oe,
        role: "tablist",
        children: rt
      }), ee && Be]
    }), Y.scrollButtonEnd]
  }));
});
process.env.NODE_ENV !== "production" && (ci.propTypes = {
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
const Jm = ci;
function lm(e) {
  return fe("MuiTextField", e);
}
const cm = be("MuiTextField", ["root"]), Zm = cm, um = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], dm = {
  standard: Ws,
  filled: Ds,
  outlined: ri
}, pm = (e) => {
  const {
    classes: o
  } = e;
  return xe({
    root: ["root"]
  }, lm, o);
}, fm = H(Nd, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, o) => o.root
})({}), ui = /* @__PURE__ */ f.forwardRef(function(o, n) {
  const r = Oe({
    props: o,
    name: "MuiTextField"
  }), {
    autoComplete: s,
    autoFocus: i = !1,
    children: a,
    className: c,
    color: l = "primary",
    defaultValue: u,
    disabled: p = !1,
    error: h = !1,
    FormHelperTextProps: v,
    fullWidth: g = !1,
    helperText: T,
    id: E,
    InputLabelProps: m,
    inputProps: O,
    InputProps: w,
    inputRef: b,
    label: y,
    maxRows: x,
    minRows: R,
    multiline: S = !1,
    name: k,
    onBlur: $,
    onChange: M,
    onFocus: D,
    placeholder: F,
    required: L = !1,
    rows: B,
    select: _ = !1,
    SelectProps: j,
    type: V,
    value: N,
    variant: U = "outlined"
  } = r, Z = J(r, um), he = d({}, r, {
    autoFocus: i,
    color: l,
    disabled: p,
    error: h,
    fullWidth: g,
    multiline: S,
    required: L,
    select: _,
    variant: U
  }), ve = pm(he);
  process.env.NODE_ENV !== "production" && _ && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const Ee = {};
  U === "outlined" && (m && typeof m.shrink < "u" && (Ee.notched = m.shrink), Ee.label = y), _ && ((!j || !j.native) && (Ee.id = void 0), Ee["aria-describedby"] = void 0);
  const ee = hn(E), ne = T && ee ? `${ee}-helper-text` : void 0, G = y && ee ? `${ee}-label` : void 0, ue = dm[U], X = /* @__PURE__ */ I(ue, d({
    "aria-describedby": ne,
    autoComplete: s,
    autoFocus: i,
    defaultValue: u,
    fullWidth: g,
    multiline: S,
    name: k,
    rows: B,
    maxRows: x,
    minRows: R,
    type: V,
    value: N,
    id: ee,
    inputRef: b,
    onBlur: $,
    onChange: M,
    onFocus: D,
    placeholder: F,
    inputProps: O
  }, Ee, w));
  return /* @__PURE__ */ ke(fm, d({
    className: te(ve.root, c),
    disabled: p,
    error: h,
    fullWidth: g,
    ref: n,
    required: L,
    color: l,
    variant: U,
    ownerState: he
  }, Z, {
    children: [y != null && y !== "" && /* @__PURE__ */ I(Ep, d({
      htmlFor: ee,
      id: G
    }, m, {
      children: y
    })), _ ? /* @__PURE__ */ I(Af, d({
      "aria-describedby": ne,
      id: ee,
      labelId: G,
      value: N,
      input: X
    }, j, {
      children: a
    })) : X, T && /* @__PURE__ */ I(Yd, d({
      id: ne
    }, v, {
      children: T
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (ui.propTypes = {
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
const Qm = ui;
export {
  Hr as $,
  Im as A,
  Au as B,
  Nm as C,
  Lm as D,
  Hm as E,
  jm as F,
  xs as G,
  gr as H,
  Vm as I,
  qm as J,
  xt as K,
  mn as L,
  Ym as M,
  It as N,
  uf as O,
  mo as P,
  nf as Q,
  Os as R,
  Ws as S,
  Qm as T,
  _u as U,
  Vn as V,
  sp as W,
  Bo as X,
  vn as Y,
  Rt as Z,
  gs as _,
  Tm as a,
  br as a$,
  xd as a0,
  Ed as a1,
  pt as a2,
  zf as a3,
  _f as a4,
  Af as a5,
  Pn as a6,
  Ds as a7,
  Nd as a8,
  Yd as a9,
  Iu as aA,
  tn as aB,
  Uu as aC,
  Om as aD,
  ca as aE,
  Mm as aF,
  rd as aG,
  dr as aH,
  Dm as aI,
  fd as aJ,
  tt as aK,
  lu as aL,
  Bm as aM,
  Sd as aN,
  oo as aO,
  Md as aP,
  _m as aQ,
  jd as aR,
  fr as aS,
  Ud as aT,
  io as aU,
  ep as aV,
  Xd as aW,
  Ac as aX,
  kc as aY,
  St as aZ,
  ru as a_,
  op as aa,
  Ep as ab,
  Rp as ac,
  Jc as ad,
  Xp as ae,
  Np as af,
  ri as ag,
  jp as ah,
  ao as ai,
  pd as aj,
  kd as ak,
  Zf as al,
  ps as am,
  Nc as an,
  ko as ao,
  po as ap,
  Co as aq,
  Ia as ar,
  wm as as,
  Aa as at,
  Wt as au,
  ja as av,
  Pc as aw,
  ye as ax,
  uu as ay,
  $m as az,
  Rm as b,
  up as b0,
  et as b1,
  Qc as b2,
  Wm as b3,
  hp as b4,
  Um as b5,
  Op as b6,
  vr as b7,
  Pm as b8,
  qc as b9,
  Zm as bA,
  lm as bB,
  Km as ba,
  _p as bb,
  Zt as bc,
  Jp as bd,
  il as be,
  km as bf,
  Zu as bg,
  kn as bh,
  mt as bi,
  iu as bj,
  Cm as bk,
  va as bl,
  Gm as bm,
  xr as bn,
  Er as bo,
  Bp as bp,
  Xs as bq,
  kp as br,
  Qt as bs,
  yf as bt,
  Nt as bu,
  Ff as bv,
  rn as bw,
  Qf as bx,
  Kf as by,
  qf as bz,
  Am as c,
  Sm as d,
  Jm as e,
  Xm as f,
  ha as g,
  zm as h,
  Zo as i,
  uo as j,
  At as k,
  Gr as l,
  Pa as m,
  ms as n,
  He as o,
  Bc as p,
  ft as q,
  fo as r,
  Vi as s,
  Lo as t,
  Gi as u,
  Is as v,
  hn as w,
  Pu as x,
  Fm as y,
  No as z
};
