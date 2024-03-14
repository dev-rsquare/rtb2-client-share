import { j as xe, k as ge, d as we, m as Me, o as Ce, p as je, a as Fe, e as Ae, q as Le, r as De, _ as U, u as Ie, c as ke, T as se, t as O, v as qe, w as ze, x as Ne } from "./createTheme-c26d6c87.js";
const We = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xe,
  isPlainObject: ge
}, Symbol.toStringTag, { value: "Module" })), Ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: we
}, Symbol.toStringTag, { value: "Module" })), Ve = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Me,
  private_createBreakpoints: Ce,
  unstable_applyStyles: je
}, Symbol.toStringTag, { value: "Module" })), Ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fe,
  extendSxProp: Ae,
  unstable_createStyleFunctionSx: Le,
  unstable_defaultSxConfig: De
}, Symbol.toStringTag, { value: "Module" }));
var H = { exports: {} }, c = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J;
function Be() {
  if (J)
    return c;
  J = 1;
  var e = Symbol.for("react.element"), s = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), i = Symbol.for("react.context"), p = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), x;
  x = Symbol.for("react.module.reference");
  function _(t) {
    if (typeof t == "object" && t !== null) {
      var T = t.$$typeof;
      switch (T) {
        case e:
          switch (t = t.type, t) {
            case r:
            case a:
            case o:
            case m:
            case y:
              return t;
            default:
              switch (t = t && t.$$typeof, t) {
                case p:
                case i:
                case l:
                case S:
                case E:
                case u:
                  return t;
                default:
                  return T;
              }
          }
        case s:
          return T;
      }
    }
  }
  return c.ContextConsumer = i, c.ContextProvider = u, c.Element = e, c.ForwardRef = l, c.Fragment = r, c.Lazy = S, c.Memo = E, c.Portal = s, c.Profiler = a, c.StrictMode = o, c.Suspense = m, c.SuspenseList = y, c.isAsyncMode = function() {
    return !1;
  }, c.isConcurrentMode = function() {
    return !1;
  }, c.isContextConsumer = function(t) {
    return _(t) === i;
  }, c.isContextProvider = function(t) {
    return _(t) === u;
  }, c.isElement = function(t) {
    return typeof t == "object" && t !== null && t.$$typeof === e;
  }, c.isForwardRef = function(t) {
    return _(t) === l;
  }, c.isFragment = function(t) {
    return _(t) === r;
  }, c.isLazy = function(t) {
    return _(t) === S;
  }, c.isMemo = function(t) {
    return _(t) === E;
  }, c.isPortal = function(t) {
    return _(t) === s;
  }, c.isProfiler = function(t) {
    return _(t) === a;
  }, c.isStrictMode = function(t) {
    return _(t) === o;
  }, c.isSuspense = function(t) {
    return _(t) === m;
  }, c.isSuspenseList = function(t) {
    return _(t) === y;
  }, c.isValidElementType = function(t) {
    return typeof t == "string" || typeof t == "function" || t === r || t === a || t === o || t === m || t === y || t === M || typeof t == "object" && t !== null && (t.$$typeof === S || t.$$typeof === E || t.$$typeof === u || t.$$typeof === i || t.$$typeof === l || t.$$typeof === x || t.getModuleId !== void 0);
  }, c.typeOf = _, c;
}
var f = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q;
function He() {
  return Q || (Q = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), s = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), i = Symbol.for("react.context"), p = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), x = !1, _ = !1, t = !1, T = !1, C = !1, j;
    j = Symbol.for("react.module.reference");
    function D(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === r || n === a || C || n === o || n === m || n === y || T || n === M || x || _ || t || typeof n == "object" && n !== null && (n.$$typeof === S || n.$$typeof === E || n.$$typeof === u || n.$$typeof === i || n.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === j || n.getModuleId !== void 0));
    }
    function d(n) {
      if (typeof n == "object" && n !== null) {
        var V = n.$$typeof;
        switch (V) {
          case e:
            var k = n.type;
            switch (k) {
              case r:
              case a:
              case o:
              case m:
              case y:
                return k;
              default:
                var Z = k && k.$$typeof;
                switch (Z) {
                  case p:
                  case i:
                  case l:
                  case S:
                  case E:
                  case u:
                    return Z;
                  default:
                    return V;
                }
            }
          case s:
            return V;
        }
      }
    }
    var P = i, F = u, $ = e, I = l, A = r, v = S, h = E, R = s, g = a, W = o, Y = m, de = y, G = !1, K = !1;
    function me(n) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function pe(n) {
      return K || (K = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ye(n) {
      return d(n) === i;
    }
    function _e(n) {
      return d(n) === u;
    }
    function ve(n) {
      return typeof n == "object" && n !== null && n.$$typeof === e;
    }
    function Se(n) {
      return d(n) === l;
    }
    function he(n) {
      return d(n) === r;
    }
    function be(n) {
      return d(n) === S;
    }
    function Ee(n) {
      return d(n) === E;
    }
    function Pe(n) {
      return d(n) === s;
    }
    function Te(n) {
      return d(n) === a;
    }
    function $e(n) {
      return d(n) === o;
    }
    function Re(n) {
      return d(n) === m;
    }
    function Oe(n) {
      return d(n) === y;
    }
    f.ContextConsumer = P, f.ContextProvider = F, f.Element = $, f.ForwardRef = I, f.Fragment = A, f.Lazy = v, f.Memo = h, f.Portal = R, f.Profiler = g, f.StrictMode = W, f.Suspense = Y, f.SuspenseList = de, f.isAsyncMode = me, f.isConcurrentMode = pe, f.isContextConsumer = ye, f.isContextProvider = _e, f.isElement = ve, f.isForwardRef = Se, f.isFragment = he, f.isLazy = be, f.isMemo = Ee, f.isPortal = Pe, f.isProfiler = Te, f.isStrictMode = $e, f.isSuspense = Re, f.isSuspenseList = Oe, f.isValidElementType = D, f.typeOf = d;
  }()), f;
}
process.env.NODE_ENV === "production" ? H.exports = Be() : H.exports = He();
var ee = H.exports;
const Xe = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function ae(e) {
  const s = `${e}`.match(Xe);
  return s && s[1] || "";
}
function ie(e, s = "") {
  return e.displayName || e.name || ae(e) || s;
}
function te(e, s, r) {
  const o = ie(s);
  return e.displayName || (o !== "" ? `${r}(${o})` : r);
}
function Ge(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ie(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ee.ForwardRef:
          return te(e, e.render, "ForwardRef");
        case ee.Memo:
          return te(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Ke = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ge,
  getFunctionName: ae
}, Symbol.toStringTag, { value: "Module" }));
function ue(e, s) {
  const r = U({}, s);
  return Object.keys(e).forEach((o) => {
    if (o.toString().match(/^(components|slots)$/))
      r[o] = U({}, e[o], r[o]);
    else if (o.toString().match(/^(componentsProps|slotProps)$/)) {
      const a = e[o] || {}, u = s[o];
      r[o] = {}, !u || !Object.keys(u) ? r[o] = a : !a || !Object.keys(a) ? r[o] = u : (r[o] = U({}, u), Object.keys(a).forEach((i) => {
        r[o][i] = ue(a[i], u[i]);
      }));
    } else
      r[o] === void 0 && (r[o] = e[o]);
  }), r;
}
function Ze(e) {
  const {
    theme: s,
    name: r,
    props: o
  } = e;
  return !s || !s.components || !s.components[r] || !s.components[r].defaultProps ? o : ue(s.components[r].defaultProps, o);
}
function Je({
  props: e,
  name: s,
  defaultTheme: r,
  themeId: o
}) {
  let a = Ie(r);
  return o && (a = a[o] || a), Ze({
    theme: a,
    name: s,
    props: e
  });
}
const Qe = ke(), ce = Qe;
function Ot({
  props: e,
  name: s
}) {
  return Je({
    props: e,
    name: s,
    defaultTheme: ce,
    themeId: se
  });
}
var L = {};
const et = /* @__PURE__ */ O(qe);
var B = { exports: {} }, re;
function tt() {
  return re || (re = 1, function(e) {
    function s(r, o) {
      if (r == null)
        return {};
      var a = {}, u = Object.keys(r), i, p;
      for (p = 0; p < u.length; p++)
        i = u[p], !(o.indexOf(i) >= 0) && (a[i] = r[i]);
      return a;
    }
    e.exports = s, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(B)), B.exports;
}
const rt = /* @__PURE__ */ O(ze), ot = /* @__PURE__ */ O(We), nt = /* @__PURE__ */ O(Ye), st = /* @__PURE__ */ O(Ke), at = /* @__PURE__ */ O(Ve), it = /* @__PURE__ */ O(Ue);
var w = Ne;
Object.defineProperty(L, "__esModule", {
  value: !0
});
var ut = L.default = Pt, fe = L.shouldForwardProp = z;
L.systemDefaultTheme = void 0;
var b = w(et), X = w(tt()), oe = vt(rt), ct = ot, ft = w(nt), lt = w(st), dt = w(at), mt = w(it);
const pt = ["ownerState"], yt = ["variants"], _t = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function le(e) {
  if (typeof WeakMap != "function")
    return null;
  var s = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (le = function(o) {
    return o ? r : s;
  })(e);
}
function vt(e, s) {
  if (!s && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = le(s);
  if (r && r.has(e))
    return r.get(e);
  var o = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if (u !== "default" && Object.prototype.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(o, u, i) : o[u] = e[u];
    }
  return o.default = e, r && r.set(e, o), o;
}
function St(e) {
  return Object.keys(e).length === 0;
}
function ht(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function z(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const bt = L.systemDefaultTheme = (0, dt.default)(), ne = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function q({
  defaultTheme: e,
  theme: s,
  themeId: r
}) {
  return St(s) ? e : s[r] || s;
}
function Et(e) {
  return e ? (s, r) => r[e] : null;
}
function N(e, s) {
  let {
    ownerState: r
  } = s, o = (0, X.default)(s, pt);
  const a = typeof e == "function" ? e((0, b.default)({
    ownerState: r
  }, o)) : e;
  if (Array.isArray(a))
    return a.flatMap((u) => N(u, (0, b.default)({
      ownerState: r
    }, o)));
  if (a && typeof a == "object" && Array.isArray(a.variants)) {
    const {
      variants: u = []
    } = a;
    let p = (0, X.default)(a, yt);
    return u.forEach((l) => {
      let m = !0;
      typeof l.props == "function" ? m = l.props((0, b.default)({
        ownerState: r
      }, o, r)) : Object.keys(l.props).forEach((y) => {
        (r == null ? void 0 : r[y]) !== l.props[y] && o[y] !== l.props[y] && (m = !1);
      }), m && (Array.isArray(p) || (p = [p]), p.push(typeof l.style == "function" ? l.style((0, b.default)({
        ownerState: r
      }, o, r)) : l.style));
    }), p;
  }
  return a;
}
function Pt(e = {}) {
  const {
    themeId: s,
    defaultTheme: r = bt,
    rootShouldForwardProp: o = z,
    slotShouldForwardProp: a = z
  } = e, u = (i) => (0, mt.default)((0, b.default)({}, i, {
    theme: q((0, b.default)({}, i, {
      defaultTheme: r,
      themeId: s
    }))
  }));
  return u.__mui_systemSx = !0, (i, p = {}) => {
    (0, oe.internal_processStyles)(i, (d) => d.filter((P) => !(P != null && P.__mui_systemSx)));
    const {
      name: l,
      slot: m,
      skipVariantsResolver: y,
      skipSx: E,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: S = Et(ne(m))
    } = p, M = (0, X.default)(p, _t), x = y !== void 0 ? y : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), _ = E || !1;
    let t;
    process.env.NODE_ENV !== "production" && l && (t = `${l}-${ne(m || "Root")}`);
    let T = z;
    m === "Root" || m === "root" ? T = o : m ? T = a : ht(i) && (T = void 0);
    const C = (0, oe.default)(i, (0, b.default)({
      shouldForwardProp: T,
      label: t
    }, M)), j = (d) => typeof d == "function" && d.__emotion_real !== d || (0, ct.isPlainObject)(d) ? (P) => N(d, (0, b.default)({}, P, {
      theme: q({
        theme: P.theme,
        defaultTheme: r,
        themeId: s
      })
    })) : d, D = (d, ...P) => {
      let F = j(d);
      const $ = P ? P.map(j) : [];
      l && S && $.push((v) => {
        const h = q((0, b.default)({}, v, {
          defaultTheme: r,
          themeId: s
        }));
        if (!h.components || !h.components[l] || !h.components[l].styleOverrides)
          return null;
        const R = h.components[l].styleOverrides, g = {};
        return Object.entries(R).forEach(([W, Y]) => {
          g[W] = N(Y, (0, b.default)({}, v, {
            theme: h
          }));
        }), S(v, g);
      }), l && !x && $.push((v) => {
        var h;
        const R = q((0, b.default)({}, v, {
          defaultTheme: r,
          themeId: s
        })), g = R == null || (h = R.components) == null || (h = h[l]) == null ? void 0 : h.variants;
        return N({
          variants: g
        }, (0, b.default)({}, v, {
          theme: R
        }));
      }), _ || $.push(u);
      const I = $.length - P.length;
      if (Array.isArray(d) && I > 0) {
        const v = new Array(I).fill("");
        F = [...d, ...v], F.raw = [...d.raw, ...v];
      }
      const A = C(F, ...$);
      if (process.env.NODE_ENV !== "production") {
        let v;
        l && (v = `${l}${(0, ft.default)(m || "")}`), v === void 0 && (v = `Styled(${(0, lt.default)(i)})`), A.displayName = v;
      }
      return i.muiName && (A.muiName = i.muiName), A;
    };
    return C.withConfig && (D.withConfig = C.withConfig), D;
  };
}
const Tt = (e) => fe(e) && e !== "classes", xt = fe, $t = ut({
  themeId: se,
  defaultTheme: ce,
  rootShouldForwardProp: Tt
}), gt = $t;
export {
  ue as a,
  rt as b,
  Je as c,
  ce as d,
  xt as e,
  Ze as f,
  Ge as g,
  Tt as r,
  gt as s,
  Ot as u
};
