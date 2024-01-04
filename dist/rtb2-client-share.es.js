import or from "react";
function wr(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var Ie = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function xr() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    var u = or, D = Symbol.for("react.element"), I = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), l = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), z = Symbol.iterator, M = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = z && e[z] || e[M];
      return typeof r == "function" ? r : null;
    }
    var U = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Y(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          n[s - 1] = arguments[s];
        N("error", e, n);
      }
    }
    function N(e, r, n) {
      {
        var s = U.ReactDebugCurrentFrame, w = s.getStackAddendum();
        w !== "" && (r += "%s", n = n.concat([w]));
        var k = n.map(function(O) {
          return String(O);
        });
        k.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, k);
      }
    }
    var L = !1, o = !1, ee = !1, de = !1, ve = !1, oe;
    oe = Symbol.for("react.module.reference");
    function pe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === c || ve || e === x || e === S || e === f || de || e === F || L || o || ee || typeof e == "object" && e !== null && (e.$$typeof === $ || e.$$typeof === m || e.$$typeof === C || e.$$typeof === l || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function ie(e, r, n) {
      var s = e.displayName;
      if (s)
        return s;
      var w = r.displayName || r.name || "";
      return w !== "" ? n + "(" + w + ")" : n;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function G(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case I:
          return "Portal";
        case c:
          return "Profiler";
        case x:
          return "StrictMode";
        case S:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var r = e;
            return ue(r) + ".Consumer";
          case C:
            var n = e;
            return ue(n._context) + ".Provider";
          case b:
            return ie(e, e.render, "ForwardRef");
          case m:
            var s = e.displayName || null;
            return s !== null ? s : G(e.type) || "Memo";
          case $: {
            var w = e, k = w._payload, O = w._init;
            try {
              return G(O(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, re = 0, K, Q, ne, se, t, i, E;
    function h() {
    }
    h.__reactDisabledLog = !0;
    function d() {
      {
        if (re === 0) {
          K = console.log, Q = console.info, ne = console.warn, se = console.error, t = console.group, i = console.groupCollapsed, E = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: h,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        re++;
      }
    }
    function R() {
      {
        if (re--, re === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, e, {
              value: K
            }),
            info: H({}, e, {
              value: Q
            }),
            warn: H({}, e, {
              value: ne
            }),
            error: H({}, e, {
              value: se
            }),
            group: H({}, e, {
              value: t
            }),
            groupCollapsed: H({}, e, {
              value: i
            }),
            groupEnd: H({}, e, {
              value: E
            })
          });
        }
        re < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var v = U.ReactCurrentDispatcher, y;
    function g(e, r, n) {
      {
        if (y === void 0)
          try {
            throw Error();
          } catch (w) {
            var s = w.stack.trim().match(/\n( *(at )?)/);
            y = s && s[1] || "";
          }
        return `
` + y + e;
      }
    }
    var P = !1, T;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      T = new B();
    }
    function a(e, r) {
      if (!e || P)
        return "";
      {
        var n = T.get(e);
        if (n !== void 0)
          return n;
      }
      var s;
      P = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = v.current, v.current = null, d();
      try {
        if (r) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (te) {
              s = te;
            }
            Reflect.construct(e, [], O);
          } else {
            try {
              O.call();
            } catch (te) {
              s = te;
            }
            e.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            s = te;
          }
          e();
        }
      } catch (te) {
        if (te && s && typeof te.stack == "string") {
          for (var _ = te.stack.split(`
`), J = s.stack.split(`
`), W = _.length - 1, q = J.length - 1; W >= 1 && q >= 0 && _[W] !== J[q]; )
            q--;
          for (; W >= 1 && q >= 0; W--, q--)
            if (_[W] !== J[q]) {
              if (W !== 1 || q !== 1)
                do
                  if (W--, q--, q < 0 || _[W] !== J[q]) {
                    var Z = `
` + _[W].replace(" at new ", " at ");
                    return e.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", e.displayName)), typeof e == "function" && T.set(e, Z), Z;
                  }
                while (W >= 1 && q >= 0);
              break;
            }
        }
      } finally {
        P = !1, v.current = k, R(), Error.prepareStackTrace = w;
      }
      var le = e ? e.displayName || e.name : "", Je = le ? g(le) : "";
      return typeof e == "function" && T.set(e, Je), Je;
    }
    function X(e, r, n) {
      return a(e, !1);
    }
    function fe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ae(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return a(e, fe(e));
      if (typeof e == "string")
        return g(e);
      switch (e) {
        case S:
          return g("Suspense");
        case f:
          return g("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return X(e.render);
          case m:
            return ae(e.type, r, n);
          case $: {
            var s = e, w = s._payload, k = s._init;
            try {
              return ae(k(w), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, De = {}, Me = U.ReactDebugCurrentFrame;
    function me(e) {
      if (e) {
        var r = e._owner, n = ae(e.type, e._source, r ? r.type : null);
        Me.setExtraStackFrame(n);
      } else
        Me.setExtraStackFrame(null);
    }
    function sr(e, r, n, s, w) {
      {
        var k = Function.call.bind(Ee);
        for (var O in e)
          if (k(e, O)) {
            var _ = void 0;
            try {
              if (typeof e[O] != "function") {
                var J = Error((s || "React class") + ": " + n + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              _ = e[O](r, O, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              _ = W;
            }
            _ && !(_ instanceof Error) && (me(w), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, O, typeof _), me(null)), _ instanceof Error && !(_.message in De) && (De[_.message] = !0, me(w), Y("Failed %s type: %s", n, _.message), me(null));
          }
      }
    }
    var fr = Array.isArray;
    function Te(e) {
      return fr(e);
    }
    function cr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function lr(e) {
      try {
        return Fe(e), !1;
      } catch {
        return !0;
      }
    }
    function Fe(e) {
      return "" + e;
    }
    function Ye(e) {
      if (lr(e))
        return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", cr(e)), Fe(e);
    }
    var ye = U.ReactCurrentOwner, dr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, Le, _e;
    _e = {};
    function vr(e) {
      if (Ee.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function pr(e) {
      if (Ee.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function yr(e, r) {
      if (typeof e.ref == "string" && ye.current && r && ye.current.stateNode !== r) {
        var n = G(ye.current.type);
        _e[n] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(ye.current.type), e.ref), _e[n] = !0);
      }
    }
    function br(e, r) {
      {
        var n = function() {
          We || (We = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function hr(e, r) {
      {
        var n = function() {
          Le || (Le = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var Er = function(e, r, n, s, w, k, O) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: D,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: O,
        // Record the component responsible for creating this element.
        _owner: k
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function mr(e, r, n, s, w) {
      {
        var k, O = {}, _ = null, J = null;
        n !== void 0 && (Ye(n), _ = "" + n), pr(r) && (Ye(r.key), _ = "" + r.key), vr(r) && (J = r.ref, yr(r, w));
        for (k in r)
          Ee.call(r, k) && !dr.hasOwnProperty(k) && (O[k] = r[k]);
        if (e && e.defaultProps) {
          var W = e.defaultProps;
          for (k in W)
            O[k] === void 0 && (O[k] = W[k]);
        }
        if (_ || J) {
          var q = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          _ && br(O, q), J && hr(O, q);
        }
        return Er(e, _, J, w, s, ye.current, O);
      }
    }
    var Re = U.ReactCurrentOwner, qe = U.ReactDebugCurrentFrame;
    function ce(e) {
      if (e) {
        var r = e._owner, n = ae(e.type, e._source, r ? r.type : null);
        qe.setExtraStackFrame(n);
      } else
        qe.setExtraStackFrame(null);
    }
    var Oe;
    Oe = !1;
    function Se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === D;
    }
    function Ue() {
      {
        if (Re.current) {
          var e = G(Re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function gr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
    }
    var Ne = {};
    function Tr(e) {
      {
        var r = Ue();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Ve(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = Tr(r);
        if (Ne[n])
          return;
        Ne[n] = !0;
        var s = "";
        e && e._owner && e._owner !== Re.current && (s = " It was passed a child from " + G(e._owner.type) + "."), ce(e), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, s), ce(null);
      }
    }
    function ze(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Te(e))
          for (var n = 0; n < e.length; n++) {
            var s = e[n];
            Se(s) && Ve(s, r);
          }
        else if (Se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = V(e);
          if (typeof w == "function" && w !== e.entries)
            for (var k = w.call(e), O; !(O = k.next()).done; )
              Se(O.value) && Ve(O.value, r);
        }
      }
    }
    function _r(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          n = r.propTypes;
        else
          return;
        if (n) {
          var s = G(r);
          sr(n, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !Oe) {
          Oe = !0;
          var w = G(r);
          Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var s = r[n];
          if (s !== "children" && s !== "key") {
            ce(e), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), ce(null);
            break;
          }
        }
        e.ref !== null && (ce(e), Y("Invalid attribute `ref` supplied to `React.Fragment`."), ce(null));
      }
    }
    function Be(e, r, n, s, w, k) {
      {
        var O = pe(e);
        if (!O) {
          var _ = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = gr(w);
          J ? _ += J : _ += Ue();
          var W;
          e === null ? W = "null" : Te(e) ? W = "array" : e !== void 0 && e.$$typeof === D ? (W = "<" + (G(e.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : W = typeof e, Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, _);
        }
        var q = mr(e, r, n, w, k);
        if (q == null)
          return q;
        if (O) {
          var Z = r.children;
          if (Z !== void 0)
            if (s)
              if (Te(Z)) {
                for (var le = 0; le < Z.length; le++)
                  ze(Z[le], e);
                Object.freeze && Object.freeze(Z);
              } else
                Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ze(Z, e);
        }
        return e === p ? Rr(q) : _r(q), q;
      }
    }
    function Or(e, r, n) {
      return Be(e, r, n, !0);
    }
    function Sr(e, r, n) {
      return Be(e, r, n, !1);
    }
    var Pr = Sr, Cr = Or;
    be.Fragment = p, be.jsx = Pr, be.jsxs = Cr;
  }()), be;
}
var he = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function jr() {
  if (Ge)
    return he;
  Ge = 1;
  var u = or, D = Symbol.for("react.element"), I = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, x = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(l, b, S) {
    var f, m = {}, $ = null, F = null;
    S !== void 0 && ($ = "" + S), b.key !== void 0 && ($ = "" + b.key), b.ref !== void 0 && (F = b.ref);
    for (f in b)
      p.call(b, f) && !c.hasOwnProperty(f) && (m[f] = b[f]);
    if (l && l.defaultProps)
      for (f in b = l.defaultProps, b)
        m[f] === void 0 && (m[f] = b[f]);
    return { $$typeof: D, type: l, key: $, ref: F, props: m, _owner: x.current };
  }
  return he.Fragment = I, he.jsx = C, he.jsxs = C, he;
}
process.env.NODE_ENV === "production" ? Ie.exports = jr() : Ie.exports = xr();
var Ar = Ie.exports, $e = { exports: {} }, Pe, Ke;
function ke() {
  if (Ke)
    return Pe;
  Ke = 1;
  var u = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pe = u, Pe;
}
var Ce, Xe;
function Ir() {
  if (Xe)
    return Ce;
  Xe = 1;
  var u = ke();
  function D() {
  }
  function I() {
  }
  return I.resetWarningCache = D, Ce = function() {
    function p(C, l, b, S, f, m) {
      if (m !== u) {
        var $ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw $.name = "Invariant Violation", $;
      }
    }
    p.isRequired = p;
    function x() {
      return p;
    }
    var c = {
      array: p,
      bigint: p,
      bool: p,
      func: p,
      number: p,
      object: p,
      string: p,
      symbol: p,
      any: p,
      arrayOf: x,
      element: p,
      elementType: p,
      instanceOf: x,
      node: p,
      objectOf: x,
      oneOf: x,
      oneOfType: x,
      shape: x,
      exact: x,
      checkPropTypes: I,
      resetWarningCache: D
    };
    return c.PropTypes = c, c;
  }, Ce;
}
var ge = { exports: {} }, j = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function $r() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && function() {
    var u = typeof Symbol == "function" && Symbol.for, D = u ? Symbol.for("react.element") : 60103, I = u ? Symbol.for("react.portal") : 60106, p = u ? Symbol.for("react.fragment") : 60107, x = u ? Symbol.for("react.strict_mode") : 60108, c = u ? Symbol.for("react.profiler") : 60114, C = u ? Symbol.for("react.provider") : 60109, l = u ? Symbol.for("react.context") : 60110, b = u ? Symbol.for("react.async_mode") : 60111, S = u ? Symbol.for("react.concurrent_mode") : 60111, f = u ? Symbol.for("react.forward_ref") : 60112, m = u ? Symbol.for("react.suspense") : 60113, $ = u ? Symbol.for("react.suspense_list") : 60120, F = u ? Symbol.for("react.memo") : 60115, z = u ? Symbol.for("react.lazy") : 60116, M = u ? Symbol.for("react.block") : 60121, V = u ? Symbol.for("react.fundamental") : 60117, U = u ? Symbol.for("react.responder") : 60118, Y = u ? Symbol.for("react.scope") : 60119;
    function N(a) {
      return typeof a == "string" || typeof a == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      a === p || a === S || a === c || a === x || a === m || a === $ || typeof a == "object" && a !== null && (a.$$typeof === z || a.$$typeof === F || a.$$typeof === C || a.$$typeof === l || a.$$typeof === f || a.$$typeof === V || a.$$typeof === U || a.$$typeof === Y || a.$$typeof === M);
    }
    function L(a) {
      if (typeof a == "object" && a !== null) {
        var X = a.$$typeof;
        switch (X) {
          case D:
            var fe = a.type;
            switch (fe) {
              case b:
              case S:
              case p:
              case c:
              case x:
              case m:
                return fe;
              default:
                var ae = fe && fe.$$typeof;
                switch (ae) {
                  case l:
                  case f:
                  case z:
                  case F:
                  case C:
                    return ae;
                  default:
                    return X;
                }
            }
          case I:
            return X;
        }
      }
    }
    var o = b, ee = S, de = l, ve = C, oe = D, pe = f, ie = p, ue = z, G = F, H = I, re = c, K = x, Q = m, ne = !1;
    function se(a) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(a) || L(a) === b;
    }
    function t(a) {
      return L(a) === S;
    }
    function i(a) {
      return L(a) === l;
    }
    function E(a) {
      return L(a) === C;
    }
    function h(a) {
      return typeof a == "object" && a !== null && a.$$typeof === D;
    }
    function d(a) {
      return L(a) === f;
    }
    function R(a) {
      return L(a) === p;
    }
    function v(a) {
      return L(a) === z;
    }
    function y(a) {
      return L(a) === F;
    }
    function g(a) {
      return L(a) === I;
    }
    function P(a) {
      return L(a) === c;
    }
    function T(a) {
      return L(a) === x;
    }
    function B(a) {
      return L(a) === m;
    }
    j.AsyncMode = o, j.ConcurrentMode = ee, j.ContextConsumer = de, j.ContextProvider = ve, j.Element = oe, j.ForwardRef = pe, j.Fragment = ie, j.Lazy = ue, j.Memo = G, j.Portal = H, j.Profiler = re, j.StrictMode = K, j.Suspense = Q, j.isAsyncMode = se, j.isConcurrentMode = t, j.isContextConsumer = i, j.isContextProvider = E, j.isElement = h, j.isForwardRef = d, j.isFragment = R, j.isLazy = v, j.isMemo = y, j.isPortal = g, j.isProfiler = P, j.isStrictMode = T, j.isSuspense = B, j.isValidElementType = N, j.typeOf = L;
  }()), j;
}
var A = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function kr() {
  if (Qe)
    return A;
  Qe = 1;
  var u = typeof Symbol == "function" && Symbol.for, D = u ? Symbol.for("react.element") : 60103, I = u ? Symbol.for("react.portal") : 60106, p = u ? Symbol.for("react.fragment") : 60107, x = u ? Symbol.for("react.strict_mode") : 60108, c = u ? Symbol.for("react.profiler") : 60114, C = u ? Symbol.for("react.provider") : 60109, l = u ? Symbol.for("react.context") : 60110, b = u ? Symbol.for("react.async_mode") : 60111, S = u ? Symbol.for("react.concurrent_mode") : 60111, f = u ? Symbol.for("react.forward_ref") : 60112, m = u ? Symbol.for("react.suspense") : 60113, $ = u ? Symbol.for("react.suspense_list") : 60120, F = u ? Symbol.for("react.memo") : 60115, z = u ? Symbol.for("react.lazy") : 60116, M = u ? Symbol.for("react.block") : 60121, V = u ? Symbol.for("react.fundamental") : 60117, U = u ? Symbol.for("react.responder") : 60118, Y = u ? Symbol.for("react.scope") : 60119;
  function N(o) {
    if (typeof o == "object" && o !== null) {
      var ee = o.$$typeof;
      switch (ee) {
        case D:
          switch (o = o.type, o) {
            case b:
            case S:
            case p:
            case c:
            case x:
            case m:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case l:
                case f:
                case z:
                case F:
                case C:
                  return o;
                default:
                  return ee;
              }
          }
        case I:
          return ee;
      }
    }
  }
  function L(o) {
    return N(o) === S;
  }
  return A.AsyncMode = b, A.ConcurrentMode = S, A.ContextConsumer = l, A.ContextProvider = C, A.Element = D, A.ForwardRef = f, A.Fragment = p, A.Lazy = z, A.Memo = F, A.Portal = I, A.Profiler = c, A.StrictMode = x, A.Suspense = m, A.isAsyncMode = function(o) {
    return L(o) || N(o) === b;
  }, A.isConcurrentMode = L, A.isContextConsumer = function(o) {
    return N(o) === l;
  }, A.isContextProvider = function(o) {
    return N(o) === C;
  }, A.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === D;
  }, A.isForwardRef = function(o) {
    return N(o) === f;
  }, A.isFragment = function(o) {
    return N(o) === p;
  }, A.isLazy = function(o) {
    return N(o) === z;
  }, A.isMemo = function(o) {
    return N(o) === F;
  }, A.isPortal = function(o) {
    return N(o) === I;
  }, A.isProfiler = function(o) {
    return N(o) === c;
  }, A.isStrictMode = function(o) {
    return N(o) === x;
  }, A.isSuspense = function(o) {
    return N(o) === m;
  }, A.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === p || o === S || o === c || o === x || o === m || o === $ || typeof o == "object" && o !== null && (o.$$typeof === z || o.$$typeof === F || o.$$typeof === C || o.$$typeof === l || o.$$typeof === f || o.$$typeof === V || o.$$typeof === U || o.$$typeof === Y || o.$$typeof === M);
  }, A.typeOf = N, A;
}
var er;
function ir() {
  return er || (er = 1, process.env.NODE_ENV === "production" ? ge.exports = kr() : ge.exports = $r()), ge.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var we, rr;
function Dr() {
  if (rr)
    return we;
  rr = 1;
  var u = Object.getOwnPropertySymbols, D = Object.prototype.hasOwnProperty, I = Object.prototype.propertyIsEnumerable;
  function p(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function x() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var C = {}, l = 0; l < 10; l++)
        C["_" + String.fromCharCode(l)] = l;
      var b = Object.getOwnPropertyNames(C).map(function(f) {
        return C[f];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var S = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        S[f] = f;
      }), Object.keys(Object.assign({}, S)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return we = x() ? Object.assign : function(c, C) {
    for (var l, b = p(c), S, f = 1; f < arguments.length; f++) {
      l = Object(arguments[f]);
      for (var m in l)
        D.call(l, m) && (b[m] = l[m]);
      if (u) {
        S = u(l);
        for (var $ = 0; $ < S.length; $++)
          I.call(l, S[$]) && (b[S[$]] = l[S[$]]);
      }
    }
    return b;
  }, we;
}
var xe, tr;
function ur() {
  return tr || (tr = 1, xe = Function.call.bind(Object.prototype.hasOwnProperty)), xe;
}
var je, nr;
function Mr() {
  if (nr)
    return je;
  nr = 1;
  var u = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var D = ke(), I = {}, p = ur();
    u = function(c) {
      var C = "Warning: " + c;
      typeof console < "u" && console.error(C);
      try {
        throw new Error(C);
      } catch {
      }
    };
  }
  function x(c, C, l, b, S) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in c)
        if (p(c, f)) {
          var m;
          try {
            if (typeof c[f] != "function") {
              var $ = Error(
                (b || "React class") + ": " + l + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw $.name = "Invariant Violation", $;
            }
            m = c[f](C, f, b, l, null, D);
          } catch (z) {
            m = z;
          }
          if (m && !(m instanceof Error) && u(
            (b || "React class") + ": type specification of " + l + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in I)) {
            I[m.message] = !0;
            var F = S ? S() : "";
            u(
              "Failed " + l + " type: " + m.message + (F ?? "")
            );
          }
        }
    }
  }
  return x.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (I = {});
  }, je = x, je;
}
var Ae, ar;
function Fr() {
  if (ar)
    return Ae;
  ar = 1;
  var u = ir(), D = Dr(), I = ke(), p = ur(), x = Mr(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(l) {
    var b = "Warning: " + l;
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  });
  function C() {
    return null;
  }
  return Ae = function(l, b) {
    var S = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function m(t) {
      var i = t && (S && t[S] || t[f]);
      if (typeof i == "function")
        return i;
    }
    var $ = "<<anonymous>>", F = {
      array: U("array"),
      bigint: U("bigint"),
      bool: U("boolean"),
      func: U("function"),
      number: U("number"),
      object: U("object"),
      string: U("string"),
      symbol: U("symbol"),
      any: Y(),
      arrayOf: N,
      element: L(),
      elementType: o(),
      instanceOf: ee,
      node: pe(),
      objectOf: ve,
      oneOf: de,
      oneOfType: oe,
      shape: ue,
      exact: G
    };
    function z(t, i) {
      return t === i ? t !== 0 || 1 / t === 1 / i : t !== t && i !== i;
    }
    function M(t, i) {
      this.message = t, this.data = i && typeof i == "object" ? i : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function V(t) {
      if (process.env.NODE_ENV !== "production")
        var i = {}, E = 0;
      function h(R, v, y, g, P, T, B) {
        if (g = g || $, T = T || y, B !== I) {
          if (b) {
            var a = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw a.name = "Invariant Violation", a;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var X = g + ":" + y;
            !i[X] && // Avoid spamming the console because they are often not actionable except for lib authors
            E < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + g + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), i[X] = !0, E++);
          }
        }
        return v[y] == null ? R ? v[y] === null ? new M("The " + P + " `" + T + "` is marked as required " + ("in `" + g + "`, but its value is `null`.")) : new M("The " + P + " `" + T + "` is marked as required in " + ("`" + g + "`, but its value is `undefined`.")) : null : t(v, y, g, P, T);
      }
      var d = h.bind(null, !1);
      return d.isRequired = h.bind(null, !0), d;
    }
    function U(t) {
      function i(E, h, d, R, v, y) {
        var g = E[h], P = K(g);
        if (P !== t) {
          var T = Q(g);
          return new M(
            "Invalid " + R + " `" + v + "` of type " + ("`" + T + "` supplied to `" + d + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return V(i);
    }
    function Y() {
      return V(C);
    }
    function N(t) {
      function i(E, h, d, R, v) {
        if (typeof t != "function")
          return new M("Property `" + v + "` of component `" + d + "` has invalid PropType notation inside arrayOf.");
        var y = E[h];
        if (!Array.isArray(y)) {
          var g = K(y);
          return new M("Invalid " + R + " `" + v + "` of type " + ("`" + g + "` supplied to `" + d + "`, expected an array."));
        }
        for (var P = 0; P < y.length; P++) {
          var T = t(y, P, d, R, v + "[" + P + "]", I);
          if (T instanceof Error)
            return T;
        }
        return null;
      }
      return V(i);
    }
    function L() {
      function t(i, E, h, d, R) {
        var v = i[E];
        if (!l(v)) {
          var y = K(v);
          return new M("Invalid " + d + " `" + R + "` of type " + ("`" + y + "` supplied to `" + h + "`, expected a single ReactElement."));
        }
        return null;
      }
      return V(t);
    }
    function o() {
      function t(i, E, h, d, R) {
        var v = i[E];
        if (!u.isValidElementType(v)) {
          var y = K(v);
          return new M("Invalid " + d + " `" + R + "` of type " + ("`" + y + "` supplied to `" + h + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return V(t);
    }
    function ee(t) {
      function i(E, h, d, R, v) {
        if (!(E[h] instanceof t)) {
          var y = t.name || $, g = se(E[h]);
          return new M("Invalid " + R + " `" + v + "` of type " + ("`" + g + "` supplied to `" + d + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return V(i);
    }
    function de(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), C;
      function i(E, h, d, R, v) {
        for (var y = E[h], g = 0; g < t.length; g++)
          if (z(y, t[g]))
            return null;
        var P = JSON.stringify(t, function(B, a) {
          var X = Q(a);
          return X === "symbol" ? String(a) : a;
        });
        return new M("Invalid " + R + " `" + v + "` of value `" + String(y) + "` " + ("supplied to `" + d + "`, expected one of " + P + "."));
      }
      return V(i);
    }
    function ve(t) {
      function i(E, h, d, R, v) {
        if (typeof t != "function")
          return new M("Property `" + v + "` of component `" + d + "` has invalid PropType notation inside objectOf.");
        var y = E[h], g = K(y);
        if (g !== "object")
          return new M("Invalid " + R + " `" + v + "` of type " + ("`" + g + "` supplied to `" + d + "`, expected an object."));
        for (var P in y)
          if (p(y, P)) {
            var T = t(y, P, d, R, v + "." + P, I);
            if (T instanceof Error)
              return T;
          }
        return null;
      }
      return V(i);
    }
    function oe(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), C;
      for (var i = 0; i < t.length; i++) {
        var E = t[i];
        if (typeof E != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ne(E) + " at index " + i + "."
          ), C;
      }
      function h(d, R, v, y, g) {
        for (var P = [], T = 0; T < t.length; T++) {
          var B = t[T], a = B(d, R, v, y, g, I);
          if (a == null)
            return null;
          a.data && p(a.data, "expectedType") && P.push(a.data.expectedType);
        }
        var X = P.length > 0 ? ", expected one of type [" + P.join(", ") + "]" : "";
        return new M("Invalid " + y + " `" + g + "` supplied to " + ("`" + v + "`" + X + "."));
      }
      return V(h);
    }
    function pe() {
      function t(i, E, h, d, R) {
        return H(i[E]) ? null : new M("Invalid " + d + " `" + R + "` supplied to " + ("`" + h + "`, expected a ReactNode."));
      }
      return V(t);
    }
    function ie(t, i, E, h, d) {
      return new M(
        (t || "React class") + ": " + i + " type `" + E + "." + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + d + "`."
      );
    }
    function ue(t) {
      function i(E, h, d, R, v) {
        var y = E[h], g = K(y);
        if (g !== "object")
          return new M("Invalid " + R + " `" + v + "` of type `" + g + "` " + ("supplied to `" + d + "`, expected `object`."));
        for (var P in t) {
          var T = t[P];
          if (typeof T != "function")
            return ie(d, R, v, P, Q(T));
          var B = T(y, P, d, R, v + "." + P, I);
          if (B)
            return B;
        }
        return null;
      }
      return V(i);
    }
    function G(t) {
      function i(E, h, d, R, v) {
        var y = E[h], g = K(y);
        if (g !== "object")
          return new M("Invalid " + R + " `" + v + "` of type `" + g + "` " + ("supplied to `" + d + "`, expected `object`."));
        var P = D({}, E[h], t);
        for (var T in P) {
          var B = t[T];
          if (p(t, T) && typeof B != "function")
            return ie(d, R, v, T, Q(B));
          if (!B)
            return new M(
              "Invalid " + R + " `" + v + "` key `" + T + "` supplied to `" + d + "`.\nBad object: " + JSON.stringify(E[h], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var a = B(y, T, d, R, v + "." + T, I);
          if (a)
            return a;
        }
        return null;
      }
      return V(i);
    }
    function H(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(H);
          if (t === null || l(t))
            return !0;
          var i = m(t);
          if (i) {
            var E = i.call(t), h;
            if (i !== t.entries) {
              for (; !(h = E.next()).done; )
                if (!H(h.value))
                  return !1;
            } else
              for (; !(h = E.next()).done; ) {
                var d = h.value;
                if (d && !H(d[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(t, i) {
      return t === "symbol" ? !0 : i ? i["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && i instanceof Symbol : !1;
    }
    function K(t) {
      var i = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : re(i, t) ? "symbol" : i;
    }
    function Q(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var i = K(t);
      if (i === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return i;
    }
    function ne(t) {
      var i = Q(t);
      switch (i) {
        case "array":
        case "object":
          return "an " + i;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + i;
        default:
          return i;
      }
    }
    function se(t) {
      return !t.constructor || !t.constructor.name ? $ : t.constructor.name;
    }
    return F.checkPropTypes = x, F.resetWarningCache = x.resetWarningCache, F.PropTypes = F, F;
  }, Ae;
}
if (process.env.NODE_ENV !== "production") {
  var Yr = ir(), Wr = !0;
  $e.exports = Fr()(Yr.isElement, Wr);
} else
  $e.exports = Ir()();
var Lr = $e.exports;
const qr = /* @__PURE__ */ wr(Lr);
function Ur(u) {
  const {
    greetee: D = "World"
  } = u;
  return /* @__PURE__ */ Ar.jsxs("div", { children: [
    "Hello, ",
    D,
    "!"
  ] });
}
Ur.propTypes = {
  greetee: qr.string
};
export {
  Ur as default
};
