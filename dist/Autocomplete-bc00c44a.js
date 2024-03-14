import { z as Ko, b as Ke, _ as A, P as r, g as Xt, d as Ee, f as gt } from "./createTheme-c26d6c87.js";
import * as R from "react";
import Xo, { createElement as Yo } from "react";
import { g as Yt, c as qe } from "./Box-df35b90b.js";
import { o as lo, P as Jo, H as At, u as Qo, g as Zo, h as Ft, i as Ut, j as _e, k as po, l as nt, m as $o, n as er, p as tr } from "./TextField-19a51cc9.js";
import { e as St, r as Io, u as qt, f as co, d as Mt, g as It, s as or, a as rr, c as nr } from "./Button-30aae85a.js";
import { jsx as G, jsxs as Tt } from "react/jsx-runtime";
import { s as le, u as Dt, b as ar } from "./styled-9ec65cd1.js";
import { C as ir } from "./TableRow-3364e3d6.js";
const sr = (e) => {
  const t = R.useRef({});
  return R.useEffect(() => {
    t.current = e;
  }), t.current;
}, lr = sr, pr = {
  disableDefaultClasses: !1
}, To = /* @__PURE__ */ R.createContext(pr);
process.env.NODE_ENV !== "production" && (To.displayName = "ClassNameConfiguratorContext");
function cr(e) {
  const {
    disableDefaultClasses: t
  } = R.useContext(To);
  return (o) => t ? "" : e(o);
}
const Eo = "base";
function ur(e) {
  return `${Eo}--${e}`;
}
function dr(e, t) {
  return `${Eo}-${e}-${t}`;
}
function Ro(e, t) {
  const o = Ko[t];
  return o ? ur(o) : dr(e, t);
}
function fr(e, t) {
  const o = {};
  return t.forEach((n) => {
    o[n] = Ro(e, n);
  }), o;
}
var ie = "top", ge = "bottom", he = "right", se = "left", Jt = "auto", yt = [ie, ge, he, se], at = "start", mt = "end", gr = "clippingParents", Ao = "viewport", ft = "popper", hr = "reference", uo = /* @__PURE__ */ yt.reduce(function(e, t) {
  return e.concat([t + "-" + at, t + "-" + mt]);
}, []), So = /* @__PURE__ */ [].concat(yt, [Jt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + at, t + "-" + mt]);
}, []), vr = "beforeRead", mr = "read", br = "afterRead", yr = "beforeMain", Or = "main", xr = "afterMain", wr = "beforeWrite", Pr = "write", Cr = "afterWrite", $r = [vr, mr, br, yr, Or, xr, wr, Pr, Cr];
function Ae(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ce(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Xe(e) {
  var t = ce(e).Element;
  return e instanceof t || e instanceof Element;
}
function fe(e) {
  var t = ce(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Qt(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ce(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ir(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var n = t.styles[o] || {}, i = t.attributes[o] || {}, l = t.elements[o];
    !fe(l) || !Ae(l) || (Object.assign(l.style, n), Object.keys(i).forEach(function(u) {
      var p = i[u];
      p === !1 ? l.removeAttribute(u) : l.setAttribute(u, p === !0 ? "" : p);
    }));
  });
}
function Tr(e) {
  var t = e.state, o = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, o.popper), t.styles = o, t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var i = t.elements[n], l = t.attributes[n] || {}, u = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : o[n]), p = u.reduce(function(c, g) {
        return c[g] = "", c;
      }, {});
      !fe(i) || !Ae(i) || (Object.assign(i.style, p), Object.keys(l).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const Er = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ir,
  effect: Tr,
  requires: ["computeStyles"]
};
function Re(e) {
  return e.split("-")[0];
}
var Ge = Math.max, kt = Math.min, it = Math.round;
function Gt() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ko() {
  return !/^((?!chrome|android).)*safari/i.test(Gt());
}
function st(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var n = e.getBoundingClientRect(), i = 1, l = 1;
  t && fe(e) && (i = e.offsetWidth > 0 && it(n.width) / e.offsetWidth || 1, l = e.offsetHeight > 0 && it(n.height) / e.offsetHeight || 1);
  var u = Xe(e) ? ce(e) : window, p = u.visualViewport, c = !ko() && o, g = (n.left + (c && p ? p.offsetLeft : 0)) / i, d = (n.top + (c && p ? p.offsetTop : 0)) / l, m = n.width / i, x = n.height / l;
  return {
    width: m,
    height: x,
    top: d,
    right: g + m,
    bottom: d + x,
    left: g,
    x: g,
    y: d
  };
}
function Zt(e) {
  var t = st(e), o = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: n
  };
}
function Lo(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && Qt(o)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function De(e) {
  return ce(e).getComputedStyle(e);
}
function Rr(e) {
  return ["table", "td", "th"].indexOf(Ae(e)) >= 0;
}
function Ve(e) {
  return ((Xe(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Nt(e) {
  return Ae(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Qt(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ve(e)
  );
}
function fo(e) {
  return !fe(e) || // https://github.com/popperjs/popper-core/issues/837
  De(e).position === "fixed" ? null : e.offsetParent;
}
function Ar(e) {
  var t = /firefox/i.test(Gt()), o = /Trident/i.test(Gt());
  if (o && fe(e)) {
    var n = De(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Nt(e);
  for (Qt(i) && (i = i.host); fe(i) && ["html", "body"].indexOf(Ae(i)) < 0; ) {
    var l = De(i);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Ot(e) {
  for (var t = ce(e), o = fo(e); o && Rr(o) && De(o).position === "static"; )
    o = fo(o);
  return o && (Ae(o) === "html" || Ae(o) === "body" && De(o).position === "static") ? t : o || Ar(e) || t;
}
function eo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ht(e, t, o) {
  return Ge(e, kt(t, o));
}
function Sr(e, t, o) {
  var n = ht(e, t, o);
  return n > o ? o : n;
}
function Mo() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Do(e) {
  return Object.assign({}, Mo(), e);
}
function No(e, t) {
  return t.reduce(function(o, n) {
    return o[n] = e, o;
  }, {});
}
var kr = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, Do(typeof t != "number" ? t : No(t, yt));
};
function Lr(e) {
  var t, o = e.state, n = e.name, i = e.options, l = o.elements.arrow, u = o.modifiersData.popperOffsets, p = Re(o.placement), c = eo(p), g = [se, he].indexOf(p) >= 0, d = g ? "height" : "width";
  if (!(!l || !u)) {
    var m = kr(i.padding, o), x = Zt(l), h = c === "y" ? ie : se, L = c === "y" ? ge : he, O = o.rects.reference[d] + o.rects.reference[c] - u[c] - o.rects.popper[d], C = u[c] - o.rects.reference[c], E = Ot(l), S = E ? c === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, w = O / 2 - C / 2, y = m[h], $ = S - x[d] - m[L], P = S / 2 - x[d] / 2 + w, T = ht(y, P, $), F = c;
    o.modifiersData[n] = (t = {}, t[F] = T, t.centerOffset = T - P, t);
  }
}
function Mr(e) {
  var t = e.state, o = e.options, n = o.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Lo(t.elements.popper, i) && (t.elements.arrow = i));
}
const Dr = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Lr,
  effect: Mr,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function lt(e) {
  return e.split("-")[1];
}
var Nr = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function jr(e, t) {
  var o = e.x, n = e.y, i = t.devicePixelRatio || 1;
  return {
    x: it(o * i) / i || 0,
    y: it(n * i) / i || 0
  };
}
function go(e) {
  var t, o = e.popper, n = e.popperRect, i = e.placement, l = e.variation, u = e.offsets, p = e.position, c = e.gpuAcceleration, g = e.adaptive, d = e.roundOffsets, m = e.isFixed, x = u.x, h = x === void 0 ? 0 : x, L = u.y, O = L === void 0 ? 0 : L, C = typeof d == "function" ? d({
    x: h,
    y: O
  }) : {
    x: h,
    y: O
  };
  h = C.x, O = C.y;
  var E = u.hasOwnProperty("x"), S = u.hasOwnProperty("y"), w = se, y = ie, $ = window;
  if (g) {
    var P = Ot(o), T = "clientHeight", F = "clientWidth";
    if (P === ce(o) && (P = Ve(o), De(P).position !== "static" && p === "absolute" && (T = "scrollHeight", F = "scrollWidth")), P = P, i === ie || (i === se || i === he) && l === mt) {
      y = ge;
      var M = m && P === $ && $.visualViewport ? $.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[T]
      );
      O -= M - n.height, O *= c ? 1 : -1;
    }
    if (i === se || (i === ie || i === ge) && l === mt) {
      w = he;
      var B = m && P === $ && $.visualViewport ? $.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[F]
      );
      h -= B - n.width, h *= c ? 1 : -1;
    }
  }
  var H = Object.assign({
    position: p
  }, g && Nr), I = d === !0 ? jr({
    x: h,
    y: O
  }, ce(o)) : {
    x: h,
    y: O
  };
  if (h = I.x, O = I.y, c) {
    var U;
    return Object.assign({}, H, (U = {}, U[y] = S ? "0" : "", U[w] = E ? "0" : "", U.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + O + "px)" : "translate3d(" + h + "px, " + O + "px, 0)", U));
  }
  return Object.assign({}, H, (t = {}, t[y] = S ? O + "px" : "", t[w] = E ? h + "px" : "", t.transform = "", t));
}
function Br(e) {
  var t = e.state, o = e.options, n = o.gpuAcceleration, i = n === void 0 ? !0 : n, l = o.adaptive, u = l === void 0 ? !0 : l, p = o.roundOffsets, c = p === void 0 ? !0 : p, g = {
    placement: Re(t.placement),
    variation: lt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, go(Object.assign({}, g, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: u,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, go(Object.assign({}, g, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Vr = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Br,
  data: {}
};
var Et = {
  passive: !0
};
function Hr(e) {
  var t = e.state, o = e.instance, n = e.options, i = n.scroll, l = i === void 0 ? !0 : i, u = n.resize, p = u === void 0 ? !0 : u, c = ce(t.elements.popper), g = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && g.forEach(function(d) {
    d.addEventListener("scroll", o.update, Et);
  }), p && c.addEventListener("resize", o.update, Et), function() {
    l && g.forEach(function(d) {
      d.removeEventListener("scroll", o.update, Et);
    }), p && c.removeEventListener("resize", o.update, Et);
  };
}
const Wr = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Hr,
  data: {}
};
var zr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Rt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return zr[t];
  });
}
var Fr = {
  start: "end",
  end: "start"
};
function ho(e) {
  return e.replace(/start|end/g, function(t) {
    return Fr[t];
  });
}
function to(e) {
  var t = ce(e), o = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: n
  };
}
function oo(e) {
  return st(Ve(e)).left + to(e).scrollLeft;
}
function Ur(e, t) {
  var o = ce(e), n = Ve(e), i = o.visualViewport, l = n.clientWidth, u = n.clientHeight, p = 0, c = 0;
  if (i) {
    l = i.width, u = i.height;
    var g = ko();
    (g || !g && t === "fixed") && (p = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: l,
    height: u,
    x: p + oo(e),
    y: c
  };
}
function _r(e) {
  var t, o = Ve(e), n = to(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, l = Ge(o.scrollWidth, o.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), u = Ge(o.scrollHeight, o.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), p = -n.scrollLeft + oo(e), c = -n.scrollTop;
  return De(i || o).direction === "rtl" && (p += Ge(o.clientWidth, i ? i.clientWidth : 0) - l), {
    width: l,
    height: u,
    x: p,
    y: c
  };
}
function ro(e) {
  var t = De(e), o = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + i + n);
}
function jo(e) {
  return ["html", "body", "#document"].indexOf(Ae(e)) >= 0 ? e.ownerDocument.body : fe(e) && ro(e) ? e : jo(Nt(e));
}
function vt(e, t) {
  var o;
  t === void 0 && (t = []);
  var n = jo(e), i = n === ((o = e.ownerDocument) == null ? void 0 : o.body), l = ce(n), u = i ? [l].concat(l.visualViewport || [], ro(n) ? n : []) : n, p = t.concat(u);
  return i ? p : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    p.concat(vt(Nt(u)))
  );
}
function Kt(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function qr(e, t) {
  var o = st(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function vo(e, t, o) {
  return t === Ao ? Kt(Ur(e, o)) : Xe(t) ? qr(t, o) : Kt(_r(Ve(e)));
}
function Gr(e) {
  var t = vt(Nt(e)), o = ["absolute", "fixed"].indexOf(De(e).position) >= 0, n = o && fe(e) ? Ot(e) : e;
  return Xe(n) ? t.filter(function(i) {
    return Xe(i) && Lo(i, n) && Ae(i) !== "body";
  }) : [];
}
function Kr(e, t, o, n) {
  var i = t === "clippingParents" ? Gr(e) : [].concat(t), l = [].concat(i, [o]), u = l[0], p = l.reduce(function(c, g) {
    var d = vo(e, g, n);
    return c.top = Ge(d.top, c.top), c.right = kt(d.right, c.right), c.bottom = kt(d.bottom, c.bottom), c.left = Ge(d.left, c.left), c;
  }, vo(e, u, n));
  return p.width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p;
}
function Bo(e) {
  var t = e.reference, o = e.element, n = e.placement, i = n ? Re(n) : null, l = n ? lt(n) : null, u = t.x + t.width / 2 - o.width / 2, p = t.y + t.height / 2 - o.height / 2, c;
  switch (i) {
    case ie:
      c = {
        x: u,
        y: t.y - o.height
      };
      break;
    case ge:
      c = {
        x: u,
        y: t.y + t.height
      };
      break;
    case he:
      c = {
        x: t.x + t.width,
        y: p
      };
      break;
    case se:
      c = {
        x: t.x - o.width,
        y: p
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var g = i ? eo(i) : null;
  if (g != null) {
    var d = g === "y" ? "height" : "width";
    switch (l) {
      case at:
        c[g] = c[g] - (t[d] / 2 - o[d] / 2);
        break;
      case mt:
        c[g] = c[g] + (t[d] / 2 - o[d] / 2);
        break;
    }
  }
  return c;
}
function bt(e, t) {
  t === void 0 && (t = {});
  var o = t, n = o.placement, i = n === void 0 ? e.placement : n, l = o.strategy, u = l === void 0 ? e.strategy : l, p = o.boundary, c = p === void 0 ? gr : p, g = o.rootBoundary, d = g === void 0 ? Ao : g, m = o.elementContext, x = m === void 0 ? ft : m, h = o.altBoundary, L = h === void 0 ? !1 : h, O = o.padding, C = O === void 0 ? 0 : O, E = Do(typeof C != "number" ? C : No(C, yt)), S = x === ft ? hr : ft, w = e.rects.popper, y = e.elements[L ? S : x], $ = Kr(Xe(y) ? y : y.contextElement || Ve(e.elements.popper), c, d, u), P = st(e.elements.reference), T = Bo({
    reference: P,
    element: w,
    strategy: "absolute",
    placement: i
  }), F = Kt(Object.assign({}, w, T)), M = x === ft ? F : P, B = {
    top: $.top - M.top + E.top,
    bottom: M.bottom - $.bottom + E.bottom,
    left: $.left - M.left + E.left,
    right: M.right - $.right + E.right
  }, H = e.modifiersData.offset;
  if (x === ft && H) {
    var I = H[i];
    Object.keys(B).forEach(function(U) {
      var re = [he, ge].indexOf(U) >= 0 ? 1 : -1, ne = [ie, ge].indexOf(U) >= 0 ? "y" : "x";
      B[U] += I[ne] * re;
    });
  }
  return B;
}
function Xr(e, t) {
  t === void 0 && (t = {});
  var o = t, n = o.placement, i = o.boundary, l = o.rootBoundary, u = o.padding, p = o.flipVariations, c = o.allowedAutoPlacements, g = c === void 0 ? So : c, d = lt(n), m = d ? p ? uo : uo.filter(function(L) {
    return lt(L) === d;
  }) : yt, x = m.filter(function(L) {
    return g.indexOf(L) >= 0;
  });
  x.length === 0 && (x = m);
  var h = x.reduce(function(L, O) {
    return L[O] = bt(e, {
      placement: O,
      boundary: i,
      rootBoundary: l,
      padding: u
    })[Re(O)], L;
  }, {});
  return Object.keys(h).sort(function(L, O) {
    return h[L] - h[O];
  });
}
function Yr(e) {
  if (Re(e) === Jt)
    return [];
  var t = Rt(e);
  return [ho(e), t, ho(t)];
}
function Jr(e) {
  var t = e.state, o = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = o.mainAxis, l = i === void 0 ? !0 : i, u = o.altAxis, p = u === void 0 ? !0 : u, c = o.fallbackPlacements, g = o.padding, d = o.boundary, m = o.rootBoundary, x = o.altBoundary, h = o.flipVariations, L = h === void 0 ? !0 : h, O = o.allowedAutoPlacements, C = t.options.placement, E = Re(C), S = E === C, w = c || (S || !L ? [Rt(C)] : Yr(C)), y = [C].concat(w).reduce(function(q, _) {
      return q.concat(Re(_) === Jt ? Xr(t, {
        placement: _,
        boundary: d,
        rootBoundary: m,
        padding: g,
        flipVariations: L,
        allowedAutoPlacements: O
      }) : _);
    }, []), $ = t.rects.reference, P = t.rects.popper, T = /* @__PURE__ */ new Map(), F = !0, M = y[0], B = 0; B < y.length; B++) {
      var H = y[B], I = Re(H), U = lt(H) === at, re = [ie, ge].indexOf(I) >= 0, ne = re ? "width" : "height", V = bt(t, {
        placement: H,
        boundary: d,
        rootBoundary: m,
        altBoundary: x,
        padding: g
      }), K = re ? U ? he : se : U ? ge : ie;
      $[ne] > P[ne] && (K = Rt(K));
      var ee = Rt(K), Ce = [];
      if (l && Ce.push(V[I] <= 0), p && Ce.push(V[K] <= 0, V[ee] <= 0), Ce.every(function(q) {
        return q;
      })) {
        M = H, F = !1;
        break;
      }
      T.set(H, Ce);
    }
    if (F)
      for (var ue = L ? 3 : 1, ve = function(_) {
        var be = y.find(function(ke) {
          var D = T.get(ke);
          if (D)
            return D.slice(0, _).every(function(J) {
              return J;
            });
        });
        if (be)
          return M = be, "break";
      }, me = ue; me > 0; me--) {
        var Se = ve(me);
        if (Se === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[n]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const Qr = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Jr,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function mo(e, t, o) {
  return o === void 0 && (o = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - o.y,
    right: e.right - t.width + o.x,
    bottom: e.bottom - t.height + o.y,
    left: e.left - t.width - o.x
  };
}
function bo(e) {
  return [ie, he, ge, se].some(function(t) {
    return e[t] >= 0;
  });
}
function Zr(e) {
  var t = e.state, o = e.name, n = t.rects.reference, i = t.rects.popper, l = t.modifiersData.preventOverflow, u = bt(t, {
    elementContext: "reference"
  }), p = bt(t, {
    altBoundary: !0
  }), c = mo(u, n), g = mo(p, i, l), d = bo(c), m = bo(g);
  t.modifiersData[o] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: g,
    isReferenceHidden: d,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": m
  });
}
const en = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Zr
};
function tn(e, t, o) {
  var n = Re(e), i = [se, ie].indexOf(n) >= 0 ? -1 : 1, l = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, u = l[0], p = l[1];
  return u = u || 0, p = (p || 0) * i, [se, he].indexOf(n) >= 0 ? {
    x: p,
    y: u
  } : {
    x: u,
    y: p
  };
}
function on(e) {
  var t = e.state, o = e.options, n = e.name, i = o.offset, l = i === void 0 ? [0, 0] : i, u = So.reduce(function(d, m) {
    return d[m] = tn(m, t.rects, l), d;
  }, {}), p = u[t.placement], c = p.x, g = p.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += g), t.modifiersData[n] = u;
}
const rn = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: on
};
function nn(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = Bo({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const an = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: nn,
  data: {}
};
function sn(e) {
  return e === "x" ? "y" : "x";
}
function ln(e) {
  var t = e.state, o = e.options, n = e.name, i = o.mainAxis, l = i === void 0 ? !0 : i, u = o.altAxis, p = u === void 0 ? !1 : u, c = o.boundary, g = o.rootBoundary, d = o.altBoundary, m = o.padding, x = o.tether, h = x === void 0 ? !0 : x, L = o.tetherOffset, O = L === void 0 ? 0 : L, C = bt(t, {
    boundary: c,
    rootBoundary: g,
    padding: m,
    altBoundary: d
  }), E = Re(t.placement), S = lt(t.placement), w = !S, y = eo(E), $ = sn(y), P = t.modifiersData.popperOffsets, T = t.rects.reference, F = t.rects.popper, M = typeof O == "function" ? O(Object.assign({}, t.rects, {
    placement: t.placement
  })) : O, B = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), H = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (P) {
    if (l) {
      var U, re = y === "y" ? ie : se, ne = y === "y" ? ge : he, V = y === "y" ? "height" : "width", K = P[y], ee = K + C[re], Ce = K - C[ne], ue = h ? -F[V] / 2 : 0, ve = S === at ? T[V] : F[V], me = S === at ? -F[V] : -T[V], Se = t.elements.arrow, q = h && Se ? Zt(Se) : {
        width: 0,
        height: 0
      }, _ = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Mo(), be = _[re], ke = _[ne], D = ht(0, T[V], q[V]), J = w ? T[V] / 2 - ue - D - be - B.mainAxis : ve - D - be - B.mainAxis, Ne = w ? -T[V] / 2 + ue + D + ke + B.mainAxis : me + D + ke + B.mainAxis, He = t.elements.arrow && Ot(t.elements.arrow), te = He ? y === "y" ? He.clientTop || 0 : He.clientLeft || 0 : 0, je = (U = H == null ? void 0 : H[y]) != null ? U : 0, Ye = K + J - je - te, Q = K + Ne - je, b = ht(h ? kt(ee, Ye) : ee, K, h ? Ge(Ce, Q) : Ce);
      P[y] = b, I[y] = b - K;
    }
    if (p) {
      var pt, j = y === "x" ? ie : se, ye = y === "x" ? ge : he, ae = P[$], Le = $ === "y" ? "height" : "width", $e = ae + C[j], Oe = ae - C[ye], Be = [ie, se].indexOf(E) !== -1, Je = (pt = H == null ? void 0 : H[$]) != null ? pt : 0, We = Be ? $e : ae - T[Le] - F[Le] - Je + B.altAxis, ze = Be ? ae + T[Le] + F[Le] - Je - B.altAxis : Oe, Z = h && Be ? Sr(We, ae, ze) : ht(h ? We : $e, ae, h ? ze : Oe);
      P[$] = Z, I[$] = Z - ae;
    }
    t.modifiersData[n] = I;
  }
}
const pn = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ln,
  requiresIfExists: ["offset"]
};
function cn(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function un(e) {
  return e === ce(e) || !fe(e) ? to(e) : cn(e);
}
function dn(e) {
  var t = e.getBoundingClientRect(), o = it(t.width) / e.offsetWidth || 1, n = it(t.height) / e.offsetHeight || 1;
  return o !== 1 || n !== 1;
}
function fn(e, t, o) {
  o === void 0 && (o = !1);
  var n = fe(t), i = fe(t) && dn(t), l = Ve(t), u = st(e, i, o), p = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (n || !n && !o) && ((Ae(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ro(l)) && (p = un(t)), fe(t) ? (c = st(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : l && (c.x = oo(l))), {
    x: u.left + p.scrollLeft - c.x,
    y: u.top + p.scrollTop - c.y,
    width: u.width,
    height: u.height
  };
}
function gn(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(l) {
    t.set(l.name, l);
  });
  function i(l) {
    o.add(l.name);
    var u = [].concat(l.requires || [], l.requiresIfExists || []);
    u.forEach(function(p) {
      if (!o.has(p)) {
        var c = t.get(p);
        c && i(c);
      }
    }), n.push(l);
  }
  return e.forEach(function(l) {
    o.has(l.name) || i(l);
  }), n;
}
function hn(e) {
  var t = gn(e);
  return $r.reduce(function(o, n) {
    return o.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function vn(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function mn(e) {
  var t = e.reduce(function(o, n) {
    var i = o[n.name];
    return o[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, o;
  }, {});
  return Object.keys(t).map(function(o) {
    return t[o];
  });
}
var yo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Oo() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function bn(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, n = o === void 0 ? [] : o, i = t.defaultOptions, l = i === void 0 ? yo : i;
  return function(p, c, g) {
    g === void 0 && (g = l);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, yo, l),
      modifiersData: {},
      elements: {
        reference: p,
        popper: c
      },
      attributes: {},
      styles: {}
    }, m = [], x = !1, h = {
      state: d,
      setOptions: function(E) {
        var S = typeof E == "function" ? E(d.options) : E;
        O(), d.options = Object.assign({}, l, d.options, S), d.scrollParents = {
          reference: Xe(p) ? vt(p) : p.contextElement ? vt(p.contextElement) : [],
          popper: vt(c)
        };
        var w = hn(mn([].concat(n, d.options.modifiers)));
        return d.orderedModifiers = w.filter(function(y) {
          return y.enabled;
        }), L(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!x) {
          var E = d.elements, S = E.reference, w = E.popper;
          if (Oo(S, w)) {
            d.rects = {
              reference: fn(S, Ot(w), d.options.strategy === "fixed"),
              popper: Zt(w)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(B) {
              return d.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var y = 0; y < d.orderedModifiers.length; y++) {
              if (d.reset === !0) {
                d.reset = !1, y = -1;
                continue;
              }
              var $ = d.orderedModifiers[y], P = $.fn, T = $.options, F = T === void 0 ? {} : T, M = $.name;
              typeof P == "function" && (d = P({
                state: d,
                options: F,
                name: M,
                instance: h
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: vn(function() {
        return new Promise(function(C) {
          h.forceUpdate(), C(d);
        });
      }),
      destroy: function() {
        O(), x = !0;
      }
    };
    if (!Oo(p, c))
      return h;
    h.setOptions(g).then(function(C) {
      !x && g.onFirstUpdate && g.onFirstUpdate(C);
    });
    function L() {
      d.orderedModifiers.forEach(function(C) {
        var E = C.name, S = C.options, w = S === void 0 ? {} : S, y = C.effect;
        if (typeof y == "function") {
          var $ = y({
            state: d,
            name: E,
            instance: h,
            options: w
          }), P = function() {
          };
          m.push($ || P);
        }
      });
    }
    function O() {
      m.forEach(function(C) {
        return C();
      }), m = [];
    }
    return h;
  };
}
var yn = [Wr, an, Vr, Er, rn, Qr, pn, Dr, en], On = /* @__PURE__ */ bn({
  defaultModifiers: yn
});
const Vo = "Popper";
function xn(e) {
  return Ro(Vo, e);
}
fr(Vo, ["root"]);
const wn = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], Pn = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function Cn(e, t) {
  if (t === "ltr")
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
function Lt(e) {
  return typeof e == "function" ? e() : e;
}
function jt(e) {
  return e.nodeType !== void 0;
}
function $n(e) {
  return !jt(e);
}
const In = () => Mt({
  root: ["root"]
}, cr(xn)), Tn = {}, En = /* @__PURE__ */ R.forwardRef(function(t, o) {
  var n;
  const {
    anchorEl: i,
    children: l,
    direction: u,
    disablePortal: p,
    modifiers: c,
    open: g,
    placement: d,
    popperOptions: m,
    popperRef: x,
    slotProps: h = {},
    slots: L = {},
    TransitionProps: O
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, C = Ke(t, wn), E = R.useRef(null), S = qt(E, o), w = R.useRef(null), y = qt(w, x), $ = R.useRef(y);
  co(() => {
    $.current = y;
  }, [y]), R.useImperativeHandle(x, () => w.current, []);
  const P = Cn(d, u), [T, F] = R.useState(P), [M, B] = R.useState(Lt(i));
  R.useEffect(() => {
    w.current && w.current.forceUpdate();
  }), R.useEffect(() => {
    i && B(Lt(i));
  }, [i]), co(() => {
    if (!M || !g)
      return;
    const ne = (ee) => {
      F(ee.placement);
    };
    if (process.env.NODE_ENV !== "production" && M && jt(M) && M.nodeType === 1) {
      const ee = M.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ee.top === 0 && ee.left === 0 && ee.right === 0 && ee.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let V = [{
      name: "preventOverflow",
      options: {
        altBoundary: p
      }
    }, {
      name: "flip",
      options: {
        altBoundary: p
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: ee
      }) => {
        ne(ee);
      }
    }];
    c != null && (V = V.concat(c)), m && m.modifiers != null && (V = V.concat(m.modifiers));
    const K = On(M, E.current, A({
      placement: P
    }, m, {
      modifiers: V
    }));
    return $.current(K), () => {
      K.destroy(), $.current(null);
    };
  }, [M, p, c, g, m, P]);
  const H = {
    placement: T
  };
  O !== null && (H.TransitionProps = O);
  const I = In(), U = (n = L.root) != null ? n : "div", re = Qo({
    elementType: U,
    externalSlotProps: h.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: S
    },
    ownerState: t,
    className: I.root
  });
  return /* @__PURE__ */ G(U, A({}, re, {
    children: typeof l == "function" ? l(H) : l
  }));
}), Ho = /* @__PURE__ */ R.forwardRef(function(t, o) {
  const {
    anchorEl: n,
    children: i,
    container: l,
    direction: u = "ltr",
    disablePortal: p = !1,
    keepMounted: c = !1,
    modifiers: g,
    open: d,
    placement: m = "bottom",
    popperOptions: x = Tn,
    popperRef: h,
    style: L,
    transition: O = !1,
    slotProps: C = {},
    slots: E = {}
  } = t, S = Ke(t, Pn), [w, y] = R.useState(!0), $ = () => {
    y(!1);
  }, P = () => {
    y(!0);
  };
  if (!c && !d && (!O || w))
    return null;
  let T;
  if (l)
    T = l;
  else if (n) {
    const B = Lt(n);
    T = B && jt(B) ? lo(B).body : lo(null).body;
  }
  const F = !d && c && (!O || w) ? "none" : void 0, M = O ? {
    in: d,
    onEnter: $,
    onExited: P
  } : void 0;
  return /* @__PURE__ */ G(Jo, {
    disablePortal: p,
    container: T,
    children: /* @__PURE__ */ G(En, A({
      anchorEl: n,
      direction: u,
      disablePortal: p,
      modifiers: g,
      ref: o,
      open: O ? !w : d,
      placement: m,
      popperOptions: x,
      popperRef: h,
      slotProps: C,
      slots: E
    }, S, {
      style: A({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: F
      }, L),
      TransitionProps: M,
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (Ho.propTypes = {
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
  anchorEl: St(r.oneOfType([At, r.object, r.func]), (e) => {
    if (e.open) {
      const t = Lt(e.anchorEl);
      if (t && jt(t) && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || $n(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: r.oneOfType([r.node, r.func]),
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
  container: r.oneOfType([At, r.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: r.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: r.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: r.arrayOf(r.shape({
    data: r.object,
    effect: r.func,
    enabled: r.bool,
    fn: r.func,
    name: r.any,
    options: r.object,
    phase: r.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: r.arrayOf(r.string),
    requiresIfExists: r.arrayOf(r.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: r.shape({
    modifiers: r.array,
    onFirstUpdate: r.func,
    placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: r.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Io,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: r.shape({
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: r.shape({
    root: r.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: r.bool
});
function xo(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function Rn(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: o = !0,
    limit: n,
    matchFrom: i = "any",
    stringify: l,
    trim: u = !1
  } = e;
  return (p, {
    inputValue: c,
    getOptionLabel: g
  }) => {
    let d = u ? c.trim() : c;
    o && (d = d.toLowerCase()), t && (d = xo(d));
    const m = d ? p.filter((x) => {
      let h = (l || g)(x);
      return o && (h = h.toLowerCase()), t && (h = xo(h)), i === "start" ? h.indexOf(d) === 0 : h.indexOf(d) > -1;
    }) : p;
    return typeof n == "number" ? m.slice(0, n) : m;
  };
}
function _t(e, t) {
  for (let o = 0; o < e.length; o += 1)
    if (t(e[o]))
      return o;
  return -1;
}
const An = Rn(), wo = 5, Sn = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function kn(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = Sn,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: o = "Mui",
    autoComplete: n = !1,
    autoHighlight: i = !1,
    autoSelect: l = !1,
    blurOnSelect: u = !1,
    clearOnBlur: p = !e.freeSolo,
    clearOnEscape: c = !1,
    componentName: g = "useAutocomplete",
    defaultValue: d = e.multiple ? [] : null,
    disableClearable: m = !1,
    disableCloseOnSelect: x = !1,
    disabled: h,
    disabledItemsFocusable: L = !1,
    disableListWrap: O = !1,
    filterOptions: C = An,
    filterSelectedOptions: E = !1,
    freeSolo: S = !1,
    getOptionDisabled: w,
    getOptionKey: y,
    getOptionLabel: $ = (s) => {
      var a;
      return (a = s.label) != null ? a : s;
    },
    groupBy: P,
    handleHomeEndKeys: T = !e.freeSolo,
    id: F,
    includeInputInList: M = !1,
    inputValue: B,
    isOptionEqualToValue: H = (s, a) => s === a,
    multiple: I = !1,
    onChange: U,
    onClose: re,
    onHighlightChange: ne,
    onInputChange: V,
    onOpen: K,
    open: ee,
    openOnFocus: Ce = !1,
    options: ue,
    readOnly: ve = !1,
    selectOnFocus: me = !e.freeSolo,
    value: Se
  } = e, q = Zo(F);
  let _ = $;
  _ = (s) => {
    const a = $(s);
    if (typeof a != "string") {
      if (process.env.NODE_ENV !== "production") {
        const f = a === void 0 ? "undefined" : `${typeof a} (${a})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${g} returned ${f} instead of a string for ${JSON.stringify(s)}.`);
      }
      return String(a);
    }
    return a;
  };
  const be = R.useRef(!1), ke = R.useRef(!0), D = R.useRef(null), J = R.useRef(null), [Ne, He] = R.useState(null), [te, je] = R.useState(-1), Ye = i ? 0 : -1, Q = R.useRef(Ye), [b, pt] = Ft({
    controlled: Se,
    default: d,
    name: g
  }), [j, ye] = Ft({
    controlled: B,
    default: "",
    name: g,
    state: "inputValue"
  }), [ae, Le] = R.useState(!1), $e = R.useCallback((s, a) => {
    if (!(I ? b.length < a.length : a !== null) && !p)
      return;
    let v;
    if (I)
      v = "";
    else if (a == null)
      v = "";
    else {
      const N = _(a);
      v = typeof N == "string" ? N : "";
    }
    j !== v && (ye(v), V && V(s, v, "reset"));
  }, [_, j, I, V, ye, p, b]), [Oe, Be] = Ft({
    controlled: ee,
    default: !1,
    name: g,
    state: "open"
  }), [Je, We] = R.useState(!0), ze = !I && b != null && j === _(b), Z = Oe && !ve, W = Z ? C(
    ue.filter((s) => !(E && (I ? b : [b]).some((a) => a !== null && H(s, a)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: ze && Je ? "" : j,
      getOptionLabel: _
    }
  ) : [], xe = lr({
    filteredOptions: W,
    value: b,
    inputValue: j
  });
  R.useEffect(() => {
    const s = b !== xe.value;
    ae && !s || S && !s || $e(null, b);
  }, [b, $e, ae, xe.value, S]);
  const ct = Oe && W.length > 0 && !ve;
  if (process.env.NODE_ENV !== "production" && b !== null && !S && ue.length > 0) {
    const s = (I ? b : [b]).filter((a) => !ue.some((f) => H(f, a)));
    s.length > 0 && console.warn([`MUI: The value provided to ${g} is invalid.`, `None of the options match with \`${s.length > 1 ? JSON.stringify(s) : JSON.stringify(s[0])}\`.`, "You can use the `isOptionEqualToValue` prop to customize the equality test."].join(`
`));
  }
  const Qe = It((s) => {
    s === -1 ? D.current.focus() : Ne.querySelector(`[data-tag-index="${s}"]`).focus();
  });
  R.useEffect(() => {
    I && te > b.length - 1 && (je(-1), Qe(-1));
  }, [b, I, te, Qe]);
  function Ze(s, a) {
    if (!J.current || s < 0 || s >= W.length)
      return -1;
    let f = s;
    for (; ; ) {
      const v = J.current.querySelector(`[data-option-index="${f}"]`), N = L ? !1 : !v || v.disabled || v.getAttribute("aria-disabled") === "true";
      if (v && v.hasAttribute("tabindex") && !N)
        return f;
      if (a === "next" ? f = (f + 1) % W.length : f = (f - 1 + W.length) % W.length, f === s)
        return -1;
    }
  }
  const Ie = It(({
    event: s,
    index: a,
    reason: f = "auto"
  }) => {
    if (Q.current = a, a === -1 ? D.current.removeAttribute("aria-activedescendant") : D.current.setAttribute("aria-activedescendant", `${q}-option-${a}`), ne && ne(s, a === -1 ? null : W[a], f), !J.current)
      return;
    const v = J.current.querySelector(`[role="option"].${o}-focused`);
    v && (v.classList.remove(`${o}-focused`), v.classList.remove(`${o}-focusVisible`));
    let N = J.current;
    if (J.current.getAttribute("role") !== "listbox" && (N = J.current.parentElement.querySelector('[role="listbox"]')), !N)
      return;
    if (a === -1) {
      N.scrollTop = 0;
      return;
    }
    const z = J.current.querySelector(`[data-option-index="${a}"]`);
    if (z && (z.classList.add(`${o}-focused`), f === "keyboard" && z.classList.add(`${o}-focusVisible`), N.scrollHeight > N.clientHeight && f !== "mouse" && f !== "touch")) {
      const X = z, pe = N.clientHeight + N.scrollTop, $t = X.offsetTop + X.offsetHeight;
      $t > pe ? N.scrollTop = $t - N.clientHeight : X.offsetTop - X.offsetHeight * (P ? 1.3 : 0) < N.scrollTop && (N.scrollTop = X.offsetTop - X.offsetHeight * (P ? 1.3 : 0));
    }
  }), we = It(({
    event: s,
    diff: a,
    direction: f = "next",
    reason: v = "auto"
  }) => {
    if (!Z)
      return;
    const z = Ze((() => {
      const X = W.length - 1;
      if (a === "reset")
        return Ye;
      if (a === "start")
        return 0;
      if (a === "end")
        return X;
      const pe = Q.current + a;
      return pe < 0 ? pe === -1 && M ? -1 : O && Q.current !== -1 || Math.abs(a) > 1 ? 0 : X : pe > X ? pe === X + 1 && M ? -1 : O || Math.abs(a) > 1 ? X : 0 : pe;
    })(), f);
    if (Ie({
      index: z,
      reason: v,
      event: s
    }), n && a !== "reset")
      if (z === -1)
        D.current.value = j;
      else {
        const X = _(W[z]);
        D.current.value = X, X.toLowerCase().indexOf(j.toLowerCase()) === 0 && j.length > 0 && D.current.setSelectionRange(j.length, X.length);
      }
  }), et = () => {
    const s = (a, f) => {
      const v = a ? _(a) : "", N = f ? _(f) : "";
      return v === N;
    };
    if (Q.current !== -1 && xe.filteredOptions && xe.filteredOptions.length !== W.length && xe.inputValue === j && (I ? b.length === xe.value.length && xe.value.every((a, f) => _(b[f]) === _(a)) : s(xe.value, b))) {
      const a = xe.filteredOptions[Q.current];
      if (a && W.some((v) => _(v) === _(a)))
        return !0;
    }
    return !1;
  }, ut = R.useCallback(() => {
    if (!Z || et())
      return;
    const s = I ? b[0] : b;
    if (W.length === 0 || s == null) {
      we({
        diff: "reset"
      });
      return;
    }
    if (J.current) {
      if (s != null) {
        const a = W[Q.current];
        if (I && a && _t(b, (v) => H(a, v)) !== -1)
          return;
        const f = _t(W, (v) => H(v, s));
        f === -1 ? we({
          diff: "reset"
        }) : Ie({
          index: f
        });
        return;
      }
      if (Q.current >= W.length - 1) {
        Ie({
          index: W.length - 1
        });
        return;
      }
      Ie({
        index: Q.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    W.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    I ? !1 : b,
    E,
    we,
    Ie,
    Z,
    j,
    I
  ]), Bt = It((s) => {
    or(J, s), s && ut();
  });
  process.env.NODE_ENV !== "production" && R.useEffect(() => {
    (!D.current || D.current.nodeName !== "INPUT") && (D.current && D.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${g} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (e.g. enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${D.current} while an HTMLInputElement was expected.`, `Instead, ${g} expects an input element.`, "", g === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [g]), R.useEffect(() => {
    ut();
  }, [ut]);
  const de = (s) => {
    Oe || (Be(!0), We(!0), K && K(s));
  }, Me = (s, a) => {
    Oe && (Be(!1), re && re(s, a));
  }, Te = (s, a, f, v) => {
    if (I) {
      if (b.length === a.length && b.every((N, z) => N === a[z]))
        return;
    } else if (b === a)
      return;
    U && U(s, a, f, v), pt(a);
  }, tt = R.useRef(!1), Fe = (s, a, f = "selectOption", v = "options") => {
    let N = f, z = a;
    if (I) {
      if (z = Array.isArray(b) ? b.slice() : [], process.env.NODE_ENV !== "production") {
        const pe = z.filter(($t) => H(a, $t));
        pe.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${g} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${pe.length} matches.`].join(`
`));
      }
      const X = _t(z, (pe) => H(a, pe));
      X === -1 ? z.push(a) : v !== "freeSolo" && (z.splice(X, 1), N = "removeOption");
    }
    $e(s, z), Te(s, z, N, {
      option: a
    }), !x && (!s || !s.ctrlKey && !s.metaKey) && Me(s, N), (u === !0 || u === "touch" && tt.current || u === "mouse" && !tt.current) && D.current.blur();
  };
  function xt(s, a) {
    if (s === -1)
      return -1;
    let f = s;
    for (; ; ) {
      if (a === "next" && f === b.length || a === "previous" && f === -1)
        return -1;
      const v = Ne.querySelector(`[data-tag-index="${f}"]`);
      if (!v || !v.hasAttribute("tabindex") || v.disabled || v.getAttribute("aria-disabled") === "true")
        f += a === "next" ? 1 : -1;
      else
        return f;
    }
  }
  const wt = (s, a) => {
    if (!I)
      return;
    j === "" && Me(s, "toggleInput");
    let f = te;
    te === -1 ? j === "" && a === "previous" && (f = b.length - 1) : (f += a === "next" ? 1 : -1, f < 0 && (f = 0), f === b.length && (f = -1)), f = xt(f, a), je(f), Qe(f);
  }, Pt = (s) => {
    be.current = !0, ye(""), V && V(s, "", "clear"), Te(s, I ? [] : null, "clear");
  }, Vt = (s) => (a) => {
    if (s.onKeyDown && s.onKeyDown(a), !a.defaultMuiPrevented && (te !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(a.key) === -1 && (je(-1), Qe(-1)), a.which !== 229))
      switch (a.key) {
        case "Home":
          Z && T && (a.preventDefault(), we({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: a
          }));
          break;
        case "End":
          Z && T && (a.preventDefault(), we({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: a
          }));
          break;
        case "PageUp":
          a.preventDefault(), we({
            diff: -wo,
            direction: "previous",
            reason: "keyboard",
            event: a
          }), de(a);
          break;
        case "PageDown":
          a.preventDefault(), we({
            diff: wo,
            direction: "next",
            reason: "keyboard",
            event: a
          }), de(a);
          break;
        case "ArrowDown":
          a.preventDefault(), we({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: a
          }), de(a);
          break;
        case "ArrowUp":
          a.preventDefault(), we({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: a
          }), de(a);
          break;
        case "ArrowLeft":
          wt(a, "previous");
          break;
        case "ArrowRight":
          wt(a, "next");
          break;
        case "Enter":
          if (Q.current !== -1 && Z) {
            const f = W[Q.current], v = w ? w(f) : !1;
            if (a.preventDefault(), v)
              return;
            Fe(a, f, "selectOption"), n && D.current.setSelectionRange(D.current.value.length, D.current.value.length);
          } else
            S && j !== "" && ze === !1 && (I && a.preventDefault(), Fe(a, j, "createOption", "freeSolo"));
          break;
        case "Escape":
          Z ? (a.preventDefault(), a.stopPropagation(), Me(a, "escape")) : c && (j !== "" || I && b.length > 0) && (a.preventDefault(), a.stopPropagation(), Pt(a));
          break;
        case "Backspace":
          if (I && !ve && j === "" && b.length > 0) {
            const f = te === -1 ? b.length - 1 : te, v = b.slice();
            v.splice(f, 1), Te(a, v, "removeOption", {
              option: b[f]
            });
          }
          break;
        case "Delete":
          if (I && !ve && j === "" && b.length > 0 && te !== -1) {
            const f = te, v = b.slice();
            v.splice(f, 1), Te(a, v, "removeOption", {
              option: b[f]
            });
          }
          break;
      }
  }, io = (s) => {
    Le(!0), Ce && !be.current && de(s);
  }, ot = (s) => {
    if (t(J)) {
      D.current.focus();
      return;
    }
    Le(!1), ke.current = !0, be.current = !1, l && Q.current !== -1 && Z ? Fe(s, W[Q.current], "blur") : l && S && j !== "" ? Fe(s, j, "blur", "freeSolo") : p && $e(s, b), Me(s, "blur");
  }, oe = (s) => {
    const a = s.target.value;
    j !== a && (ye(a), We(!1), V && V(s, a, "input")), a === "" ? !m && !I && Te(s, null, "clear") : de(s);
  }, Y = (s) => {
    const a = Number(s.currentTarget.getAttribute("data-option-index"));
    Q.current !== a && Ie({
      event: s,
      index: a,
      reason: "mouse"
    });
  }, Pe = (s) => {
    Ie({
      event: s,
      index: Number(s.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), tt.current = !0;
  }, so = (s) => {
    const a = Number(s.currentTarget.getAttribute("data-option-index"));
    Fe(s, W[a], "selectOption"), tt.current = !1;
  }, Ht = (s) => (a) => {
    const f = b.slice();
    f.splice(s, 1), Te(a, f, "removeOption", {
      option: b[s]
    });
  }, Wt = (s) => {
    Oe ? Me(s, "toggleInput") : de(s);
  }, zt = (s) => {
    s.currentTarget.contains(s.target) && s.target.getAttribute("id") !== q && s.preventDefault();
  }, Ct = (s) => {
    s.currentTarget.contains(s.target) && (D.current.focus(), me && ke.current && D.current.selectionEnd - D.current.selectionStart === 0 && D.current.select(), ke.current = !1);
  }, dt = (s) => {
    !h && (j === "" || !Oe) && Wt(s);
  };
  let Ue = S && j.length > 0;
  Ue = Ue || (I ? b.length > 0 : b !== null);
  let rt = W;
  if (P) {
    const s = /* @__PURE__ */ new Map();
    let a = !1;
    rt = W.reduce((f, v, N) => {
      const z = P(v);
      return f.length > 0 && f[f.length - 1].group === z ? f[f.length - 1].options.push(v) : (process.env.NODE_ENV !== "production" && (s.get(z) && !a && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${g} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), a = !0), s.set(z, !0)), f.push({
        key: N,
        index: N,
        group: z,
        options: [v]
      })), f;
    }, []);
  }
  return h && ae && ot(), {
    getRootProps: (s = {}) => A({
      "aria-owns": ct ? `${q}-listbox` : null
    }, s, {
      onKeyDown: Vt(s),
      onMouseDown: zt,
      onClick: Ct
    }),
    getInputLabelProps: () => ({
      id: `${q}-label`,
      htmlFor: q
    }),
    getInputProps: () => ({
      id: q,
      value: j,
      onBlur: ot,
      onFocus: io,
      onChange: oe,
      onMouseDown: dt,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": Z ? "" : null,
      "aria-autocomplete": n ? "both" : "list",
      "aria-controls": ct ? `${q}-listbox` : void 0,
      "aria-expanded": ct,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: D,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: h
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Pt
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Wt
    }),
    getTagProps: ({
      index: s
    }) => A({
      key: s,
      "data-tag-index": s,
      tabIndex: -1
    }, !ve && {
      onDelete: Ht(s)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${q}-listbox`,
      "aria-labelledby": `${q}-label`,
      ref: Bt,
      onMouseDown: (s) => {
        s.preventDefault();
      }
    }),
    getOptionProps: ({
      index: s,
      option: a
    }) => {
      var f;
      const v = (I ? b : [b]).some((z) => z != null && H(a, z)), N = w ? w(a) : !1;
      return {
        key: (f = y == null ? void 0 : y(a)) != null ? f : _(a),
        tabIndex: -1,
        role: "option",
        id: `${q}-option-${s}`,
        onMouseMove: Y,
        onClick: so,
        onTouchStart: Pe,
        "data-option-index": s,
        "aria-disabled": N,
        "aria-selected": v
      };
    },
    id: q,
    inputValue: j,
    value: b,
    dirty: Ue,
    expanded: Z && Ne,
    popupOpen: Z,
    focused: ae || te !== -1,
    anchorEl: Ne,
    setAnchorEl: He,
    focusedTag: te,
    groupedOptions: rt
  };
}
function Ln(e) {
  return Xt("MuiIconButton", e);
}
const Mn = Yt("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Dn = Mn, Nn = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], jn = (e) => {
  const {
    classes: t,
    disabled: o,
    color: n,
    edge: i,
    size: l
  } = e, u = {
    root: ["root", o && "disabled", n !== "default" && `color${Ee(n)}`, i && `edge${Ee(i)}`, `size${Ee(l)}`]
  };
  return Mt(u, Ln, t);
}, Bn = le(rr, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "default" && t[`color${Ee(o.color)}`], o.edge && t[`edge${Ee(o.edge)}`], t[`size${Ee(o.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => A({
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
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : gt(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var o;
  const n = (o = (e.vars || e).palette) == null ? void 0 : o[t.color];
  return A({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && A({
    color: n == null ? void 0 : n.main
  }, !t.disableRipple && {
    "&:hover": A({}, n && {
      backgroundColor: e.vars ? `rgba(${n.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : gt(n.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${Dn.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), Wo = /* @__PURE__ */ R.forwardRef(function(t, o) {
  const n = Dt({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: l,
    className: u,
    color: p = "default",
    disabled: c = !1,
    disableFocusRipple: g = !1,
    size: d = "medium"
  } = n, m = Ke(n, Nn), x = A({}, n, {
    edge: i,
    color: p,
    disabled: c,
    disableFocusRipple: g,
    size: d
  }), h = jn(x);
  return /* @__PURE__ */ G(Bn, A({
    className: qe(h.root, u),
    centerRipple: !0,
    focusRipple: !g,
    disabled: c,
    ref: o
  }, m, {
    ownerState: x,
    children: l
  }));
});
process.env.NODE_ENV !== "production" && (Wo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: St(r.node, (e) => R.Children.toArray(e.children).some((o) => /* @__PURE__ */ R.isValidElement(o) && o.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: r.oneOfType([r.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: r.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["small", "medium", "large"]), r.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const zo = Wo, Vn = nr(/* @__PURE__ */ G("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
var no = {};
Object.defineProperty(no, "__esModule", {
  value: !0
});
var Fo = no.default = void 0, Hn = zn(Xo), Wn = ar;
function Uo(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
  return (Uo = function(n) {
    return n ? o : t;
  })(e);
}
function zn(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var o = Uo(t);
  if (o && o.has(e))
    return o.get(e);
  var n = { __proto__: null }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e)
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var u = i ? Object.getOwnPropertyDescriptor(e, l) : null;
      u && (u.get || u.set) ? Object.defineProperty(n, l, u) : n[l] = e[l];
    }
  return n.default = e, o && o.set(e, n), n;
}
function Fn(e) {
  return Object.keys(e).length === 0;
}
function Un(e = null) {
  const t = Hn.useContext(Wn.ThemeContext);
  return !t || Fn(t) ? e : t;
}
Fo = no.default = Un;
const _n = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], qn = le(Ho, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), _o = /* @__PURE__ */ R.forwardRef(function(t, o) {
  var n;
  const i = Fo(), l = Dt({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: u,
    component: p,
    components: c,
    componentsProps: g,
    container: d,
    disablePortal: m,
    keepMounted: x,
    modifiers: h,
    open: L,
    placement: O,
    popperOptions: C,
    popperRef: E,
    transition: S,
    slots: w,
    slotProps: y
  } = l, $ = Ke(l, _n), P = (n = w == null ? void 0 : w.root) != null ? n : c == null ? void 0 : c.Root, T = A({
    anchorEl: u,
    container: d,
    disablePortal: m,
    keepMounted: x,
    modifiers: h,
    open: L,
    placement: O,
    popperOptions: C,
    popperRef: E,
    transition: S
  }, $);
  return /* @__PURE__ */ G(qn, A({
    as: p,
    direction: i == null ? void 0 : i.direction,
    slots: {
      root: P
    },
    slotProps: y ?? g
  }, T, {
    ref: o
  }));
});
process.env.NODE_ENV !== "production" && (_o.propTypes = {
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
  anchorEl: r.oneOfType([At, r.object, r.func]),
  /**
   * Popper render function or node.
   */
  children: r.oneOfType([r.node, r.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: r.shape({
    Root: r.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: r.shape({
    root: r.oneOfType([r.func, r.object])
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
  container: r.oneOfType([At, r.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: r.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: r.arrayOf(r.shape({
    data: r.object,
    effect: r.func,
    enabled: r.bool,
    fn: r.func,
    name: r.any,
    options: r.object,
    phase: r.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: r.arrayOf(r.string),
    requiresIfExists: r.arrayOf(r.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: r.shape({
    modifiers: r.array,
    onFirstUpdate: r.func,
    placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: r.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Io,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: r.shape({
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: r.shape({
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: r.bool
});
const qo = _o;
function Gn(e) {
  return Xt("MuiListSubheader", e);
}
const Kn = Yt("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]), Pa = Kn, Xn = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], Yn = (e) => {
  const {
    classes: t,
    color: o,
    disableGutters: n,
    inset: i,
    disableSticky: l
  } = e, u = {
    root: ["root", o !== "default" && `color${Ee(o)}`, !n && "gutters", i && "inset", !l && "sticky"]
  };
  return Mt(u, Gn, t);
}, Jn = le("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "default" && t[`color${Ee(o.color)}`], !o.disableGutters && t.gutters, o.inset && t.inset, !o.disableSticky && t.sticky];
  }
})(({
  theme: e,
  ownerState: t
}) => A({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (e.vars || e).palette.text.secondary,
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(14)
}, t.color === "primary" && {
  color: (e.vars || e).palette.primary.main
}, t.color === "inherit" && {
  color: "inherit"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.inset && {
  paddingLeft: 72
}, !t.disableSticky && {
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: (e.vars || e).palette.background.paper
})), ao = /* @__PURE__ */ R.forwardRef(function(t, o) {
  const n = Dt({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: i,
    color: l = "default",
    component: u = "li",
    disableGutters: p = !1,
    disableSticky: c = !1,
    inset: g = !1
  } = n, d = Ke(n, Xn), m = A({}, n, {
    color: l,
    component: u,
    disableGutters: p,
    disableSticky: c,
    inset: g
  }), x = Yn(m);
  return /* @__PURE__ */ G(Jn, A({
    as: u,
    className: qe(x.root, i),
    ref: o,
    ownerState: m
  }, d));
});
ao.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (ao.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: r.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: r.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: r.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Qn = ao;
function Zn(e) {
  return Xt("MuiAutocomplete", e);
}
const ea = Yt("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]), k = ea;
var Po, Co;
const ta = ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "componentsProps", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionKey", "getOptionLabel", "isOptionEqualToValue", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "readOnly", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "slotProps", "value"], oa = ["ref"], ra = (e) => {
  const {
    classes: t,
    disablePortal: o,
    expanded: n,
    focused: i,
    fullWidth: l,
    hasClearIcon: u,
    hasPopupIcon: p,
    inputFocused: c,
    popupOpen: g,
    size: d
  } = e, m = {
    root: ["root", n && "expanded", i && "focused", l && "fullWidth", u && "hasClearIcon", p && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", c && "inputFocused"],
    tag: ["tag", `tagSize${Ee(d)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", g && "popupIndicatorOpen"],
    popper: ["popper", o && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return Mt(m, Zn, t);
}, na = le("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      fullWidth: n,
      hasClearIcon: i,
      hasPopupIcon: l,
      inputFocused: u,
      size: p
    } = o;
    return [{
      [`& .${k.tag}`]: t.tag
    }, {
      [`& .${k.tag}`]: t[`tagSize${Ee(p)}`]
    }, {
      [`& .${k.inputRoot}`]: t.inputRoot
    }, {
      [`& .${k.input}`]: t.input
    }, {
      [`& .${k.input}`]: u && t.inputFocused
    }, t.root, n && t.fullWidth, l && t.hasPopupIcon, i && t.hasClearIcon];
  }
})(({
  ownerState: e
}) => A({
  [`&.${k.focused} .${k.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${k.clearIndicator}`]: {
      visibility: "visible"
    }
  }
}, e.fullWidth && {
  width: "100%"
}, {
  [`& .${k.tag}`]: A({
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  }, e.size === "small" && {
    margin: 2,
    maxWidth: "calc(100% - 4px)"
  }),
  [`& .${k.inputRoot}`]: {
    flexWrap: "wrap",
    [`.${k.hasPopupIcon}&, .${k.hasClearIcon}&`]: {
      paddingRight: 26 + 4
    },
    [`.${k.hasPopupIcon}.${k.hasClearIcon}&`]: {
      paddingRight: 52 + 4
    },
    [`& .${k.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${Ut.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${Ut.root}.${_e.sizeSmall}`]: {
    [`& .${Ut.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${po.root}`]: {
    padding: 9,
    [`.${k.hasPopupIcon}&, .${k.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${k.hasPopupIcon}.${k.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${k.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${k.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${po.root}.${_e.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${k.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${nt.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${k.hasPopupIcon}&, .${k.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${k.hasPopupIcon}.${k.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${nt.input}`]: {
      padding: "7px 4px"
    },
    [`& .${k.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${nt.root}.${_e.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${nt.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${_e.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${nt.root}.${_e.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${k.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${nt.root}.${_e.hiddenLabel}.${_e.sizeSmall}`]: {
    [`& .${k.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${k.input}`]: A({
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  }, e.inputFocused && {
    opacity: 1
  })
})), aa = le("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), ia = le(zo, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), sa = le(zo, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: ({
    ownerState: e
  }, t) => A({}, t.popupIndicator, e.popupOpen && t.popupIndicatorOpen)
})(({
  ownerState: e
}) => A({
  padding: 2,
  marginRight: -2
}, e.popupOpen && {
  transform: "rotate(180deg)"
})), la = le(qo, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${k.option}`]: t.option
    }, t.popper, o.disablePortal && t.popperDisablePortal];
  }
})(({
  theme: e,
  ownerState: t
}) => A({
  zIndex: (e.vars || e).zIndex.modal
}, t.disablePortal && {
  position: "absolute"
})), pa = le($o, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(({
  theme: e
}) => A({}, e.typography.body1, {
  overflow: "auto"
})), ca = le("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), ua = le("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), da = le("div", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (e, t) => t.listbox
})(({
  theme: e
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${k.option}`]: {
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
    [`&.${k.focused}`]: {
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
    [`&.${k.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : gt(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${k.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : gt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${k.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : gt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
})), fa = le(Qn, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
})), ga = le("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${k.option}`]: {
    paddingLeft: 24
  }
}), Go = /* @__PURE__ */ R.forwardRef(function(t, o) {
  var n, i, l, u;
  const p = Dt({
    props: t,
    name: "MuiAutocomplete"
  }), {
    autoComplete: c = !1,
    autoHighlight: g = !1,
    autoSelect: d = !1,
    blurOnSelect: m = !1,
    ChipProps: x,
    className: h,
    clearIcon: L = Po || (Po = /* @__PURE__ */ G(Vn, {
      fontSize: "small"
    })),
    clearOnBlur: O = !p.freeSolo,
    clearOnEscape: C = !1,
    clearText: E = "Clear",
    closeText: S = "Close",
    componentsProps: w = {},
    defaultValue: y = p.multiple ? [] : null,
    disableClearable: $ = !1,
    disableCloseOnSelect: P = !1,
    disabled: T = !1,
    disabledItemsFocusable: F = !1,
    disableListWrap: M = !1,
    disablePortal: B = !1,
    filterSelectedOptions: H = !1,
    forcePopupIcon: I = "auto",
    freeSolo: U = !1,
    fullWidth: re = !1,
    getLimitTagsText: ne = (a) => `+${a}`,
    getOptionLabel: V,
    groupBy: K,
    handleHomeEndKeys: ee = !p.freeSolo,
    includeInputInList: Ce = !1,
    limitTags: ue = -1,
    ListboxComponent: ve = "ul",
    ListboxProps: me,
    loading: Se = !1,
    loadingText: q = "Loading…",
    multiple: _ = !1,
    noOptionsText: be = "No options",
    openOnFocus: ke = !1,
    openText: D = "Open",
    PaperComponent: J = $o,
    PopperComponent: Ne = qo,
    popupIcon: He = Co || (Co = /* @__PURE__ */ G(er, {})),
    readOnly: te = !1,
    renderGroup: je,
    renderInput: Ye,
    renderOption: Q,
    renderTags: b,
    selectOnFocus: pt = !p.freeSolo,
    size: j = "medium",
    slotProps: ye = {}
  } = p, ae = Ke(p, ta), {
    getRootProps: Le,
    getInputProps: $e,
    getInputLabelProps: Oe,
    getPopupIndicatorProps: Be,
    getClearProps: Je,
    getTagProps: We,
    getListboxProps: ze,
    getOptionProps: Z,
    value: W,
    dirty: xe,
    expanded: ct,
    id: Qe,
    popupOpen: Ze,
    focused: Ie,
    focusedTag: we,
    anchorEl: et,
    setAnchorEl: ut,
    inputValue: Bt,
    groupedOptions: de
  } = kn(A({}, p, {
    componentName: "Autocomplete"
  })), Me = !$ && !T && xe && !te, Te = (!U || I === !0) && I !== !1, {
    onMouseDown: tt
  } = $e(), {
    ref: Fe
  } = me ?? {}, xt = ze(), {
    ref: wt
  } = xt, Pt = Ke(xt, oa), Vt = qt(wt, Fe), ot = V || ((a) => {
    var f;
    return (f = a.label) != null ? f : a;
  }), oe = A({}, p, {
    disablePortal: B,
    expanded: ct,
    focused: Ie,
    fullWidth: re,
    getOptionLabel: ot,
    hasClearIcon: Me,
    hasPopupIcon: Te,
    inputFocused: we === -1,
    popupOpen: Ze,
    size: j
  }), Y = ra(oe);
  let Pe;
  if (_ && W.length > 0) {
    const a = (f) => A({
      className: Y.tag,
      disabled: T
    }, We(f));
    b ? Pe = b(W, a, oe) : Pe = W.map((f, v) => /* @__PURE__ */ G(ir, A({
      label: ot(f),
      size: j
    }, a({
      index: v
    }), x)));
  }
  if (ue > -1 && Array.isArray(Pe)) {
    const a = Pe.length - ue;
    !Ie && a > 0 && (Pe = Pe.splice(0, ue), Pe.push(/* @__PURE__ */ G("span", {
      className: Y.tag,
      children: ne(a)
    }, Pe.length)));
  }
  const Ht = je || ((a) => /* @__PURE__ */ Tt("li", {
    children: [/* @__PURE__ */ G(fa, {
      className: Y.groupLabel,
      ownerState: oe,
      component: "div",
      children: a.group
    }), /* @__PURE__ */ G(ga, {
      className: Y.groupUl,
      ownerState: oe,
      children: a.children
    })]
  }, a.key)), zt = Q || ((a, f) => /* @__PURE__ */ Yo("li", A({}, a, {
    key: a.key
  }), ot(f))), Ct = (a, f) => {
    const v = Z({
      option: a,
      index: f
    });
    return zt(A({}, v, {
      className: Y.option
    }), a, {
      selected: v["aria-selected"],
      index: f,
      inputValue: Bt
    }, oe);
  }, dt = (n = ye.clearIndicator) != null ? n : w.clearIndicator, Ue = (i = ye.paper) != null ? i : w.paper, rt = (l = ye.popper) != null ? l : w.popper, s = (u = ye.popupIndicator) != null ? u : w.popupIndicator;
  return /* @__PURE__ */ Tt(R.Fragment, {
    children: [/* @__PURE__ */ G(na, A({
      ref: o,
      className: qe(Y.root, h),
      ownerState: oe
    }, Le(ae), {
      children: Ye({
        id: Qe,
        disabled: T,
        fullWidth: !0,
        size: j === "small" ? "small" : void 0,
        InputLabelProps: Oe(),
        InputProps: A({
          ref: ut,
          className: Y.inputRoot,
          startAdornment: Pe,
          onClick: (a) => {
            a.target === a.currentTarget && tt(a);
          }
        }, (Me || Te) && {
          endAdornment: /* @__PURE__ */ Tt(aa, {
            className: Y.endAdornment,
            ownerState: oe,
            children: [Me ? /* @__PURE__ */ G(ia, A({}, Je(), {
              "aria-label": E,
              title: E,
              ownerState: oe
            }, dt, {
              className: qe(Y.clearIndicator, dt == null ? void 0 : dt.className),
              children: L
            })) : null, Te ? /* @__PURE__ */ G(sa, A({}, Be(), {
              disabled: T,
              "aria-label": Ze ? S : D,
              title: Ze ? S : D,
              ownerState: oe
            }, s, {
              className: qe(Y.popupIndicator, s == null ? void 0 : s.className),
              children: He
            })) : null]
          })
        }),
        inputProps: A({
          className: Y.input,
          disabled: T,
          readOnly: te
        }, $e())
      })
    })), et ? /* @__PURE__ */ G(la, A({
      as: Ne,
      disablePortal: B,
      style: {
        width: et ? et.clientWidth : null
      },
      ownerState: oe,
      role: "presentation",
      anchorEl: et,
      open: Ze
    }, rt, {
      className: qe(Y.popper, rt == null ? void 0 : rt.className),
      children: /* @__PURE__ */ Tt(pa, A({
        ownerState: oe,
        as: J
      }, Ue, {
        className: qe(Y.paper, Ue == null ? void 0 : Ue.className),
        children: [Se && de.length === 0 ? /* @__PURE__ */ G(ca, {
          className: Y.loading,
          ownerState: oe,
          children: q
        }) : null, de.length === 0 && !U && !Se ? /* @__PURE__ */ G(ua, {
          className: Y.noOptions,
          ownerState: oe,
          role: "presentation",
          onMouseDown: (a) => {
            a.preventDefault();
          },
          children: be
        }) : null, de.length > 0 ? /* @__PURE__ */ G(da, A({
          as: ve,
          className: Y.listbox,
          ownerState: oe
        }, Pt, me, {
          ref: Vt,
          children: de.map((a, f) => K ? Ht({
            key: a.key,
            group: a.group,
            children: a.options.map((v, N) => Ct(v, a.index + N))
          }) : Ct(a, f))
        })) : null]
      }))
    })) : null]
  });
});
process.env.NODE_ENV !== "production" && (Go.propTypes = {
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
  autoComplete: r.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: r.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using the `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: r.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: r.oneOfType([r.oneOf(["mouse", "touch"]), r.bool]),
  /**
   * Props applied to the [`Chip`](/material-ui/api/chip/) element.
   */
  ChipProps: r.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: r.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set it to `true` if you want to help the user enter a new value.
   * Set it to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: r.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: r.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: r.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: r.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: r.shape({
    clearIndicator: r.object,
    paper: r.object,
    popper: r.object,
    popupIndicator: r.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: St(r.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
`)) : null),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: r.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: r.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: r.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: r.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: r.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: r.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: r.oneOfType([r.oneOf(["auto"]), r.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: r.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: r.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: r.func,
  /**
   * Used to determine the key for a given option.
   * This can be useful when the labels of options are not unique (since labels are used as keys by default).
   *
   * @param {Value} option The option to get the key for.
   * @returns {string | number}
   */
  getOptionKey: r.func,
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
  getOptionLabel: r.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} options The options to group.
   * @returns {string}
   */
  groupBy: r.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: r.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: r.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: r.bool,
  /**
   * The input value.
   */
  inputValue: r.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: r.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: tr,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   */
  ListboxComponent: r.elementType,
  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: r.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, e.g. `options` are empty).
   * @default false
   */
  loading: r.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: r.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: r.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: r.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: r.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: r.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: r.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: r.func,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: r.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: r.string,
  /**
   * Array of options.
   */
  options: r.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   */
  PaperComponent: r.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   */
  PopperComponent: r.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: r.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: r.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: r.func,
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: r.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: r.func,
  /**
   * Render the selected value.
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: r.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: r.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["small", "medium"]), r.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    clearIndicator: r.object,
    paper: r.object,
    popper: r.object,
    popupIndicator: r.object
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: St(r.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const Ca = Go;
export {
  Ca as A,
  Vn as C,
  zo as I,
  Qn as L,
  qo as P,
  kn as a,
  k as b,
  Rn as c,
  Ln as d,
  Gn as e,
  Zn as g,
  Dn as i,
  Pa as l,
  lr as u
};
