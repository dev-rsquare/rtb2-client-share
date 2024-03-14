import * as W from "react";
import { forwardRef as yn, useContext as gn } from "react";
import { jsx as $t } from "react/jsx-runtime";
import { c as je, g as vn, b as be, p as Ee, r as xe, l as Oe, a as _e, o as $e } from "./grey-c051ab9f.js";
function Ie(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
const bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ie
}, Symbol.toStringTag, { value: "Module" })), qi = "$$material";
function U() {
  return U = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, U.apply(this, arguments);
}
const Gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: U
}, Symbol.toStringTag, { value: "Module" }));
function ye(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), o, s;
  for (s = 0; s < n.length; s++)
    o = n[s], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function Rt(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var En = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xn = /* @__PURE__ */ Rt(
  function(e) {
    return En.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function On(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function _n(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var wn = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var s;
      n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, s), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(_n(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var s = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      s && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !s;
    }
    if (this.isSpeedy) {
      var i = On(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch (a) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', a);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), H = "-ms-", He = "-moz-", A = "-webkit-", Rr = "comm", Ar = "rule", jr = "decl", Sn = "@import", At = "@keyframes", Tn = "@layer", Cn = Math.abs, Qe = String.fromCharCode, Pn = Object.assign;
function Nn(e, r) {
  return K(e, 0) ^ 45 ? (((r << 2 ^ K(e, 0)) << 2 ^ K(e, 1)) << 2 ^ K(e, 2)) << 2 ^ K(e, 3) : 0;
}
function jt(e) {
  return e.trim();
}
function kn(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function j(e, r, t) {
  return e.replace(r, t);
}
function Tr(e, r) {
  return e.indexOf(r);
}
function K(e, r) {
  return e.charCodeAt(r) | 0;
}
function Me(e, r, t) {
  return e.slice(r, t);
}
function ae(e) {
  return e.length;
}
function Ir(e) {
  return e.length;
}
function Ye(e, r) {
  return r.push(e), e;
}
function $n(e, r) {
  return e.map(r).join("");
}
var er = 1, Te = 1, It = 0, J = 0, G = 0, Pe = "";
function rr(e, r, t, n, o, s, i) {
  return { value: e, root: r, parent: t, type: n, props: o, children: s, line: er, column: Te, length: i, return: "" };
}
function Re(e, r) {
  return Pn(rr("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Rn() {
  return G;
}
function An() {
  return G = J > 0 ? K(Pe, --J) : 0, Te--, G === 10 && (Te = 1, er--), G;
}
function ee() {
  return G = J < It ? K(Pe, J++) : 0, Te++, G === 10 && (Te = 1, er++), G;
}
function ce() {
  return K(Pe, J);
}
function qe() {
  return J;
}
function Le(e, r) {
  return Me(Pe, e, r);
}
function De(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Mt(e) {
  return er = Te = 1, It = ae(Pe = e), J = 0, [];
}
function Dt(e) {
  return Pe = "", e;
}
function Ge(e) {
  return jt(Le(J - 1, Cr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function jn(e) {
  for (; (G = ce()) && G < 33; )
    ee();
  return De(e) > 2 || De(G) > 3 ? "" : " ";
}
function In(e, r) {
  for (; --r && ee() && !(G < 48 || G > 102 || G > 57 && G < 65 || G > 70 && G < 97); )
    ;
  return Le(e, qe() + (r < 6 && ce() == 32 && ee() == 32));
}
function Cr(e) {
  for (; ee(); )
    switch (G) {
      case e:
        return J;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Cr(G);
        break;
      case 40:
        e === 41 && Cr(e);
        break;
      case 92:
        ee();
        break;
    }
  return J;
}
function Mn(e, r) {
  for (; ee() && e + G !== 47 + 10; )
    if (e + G === 42 + 42 && ce() === 47)
      break;
  return "/*" + Le(r, J - 1) + "*" + Qe(e === 47 ? e : ee());
}
function Dn(e) {
  for (; !De(ce()); )
    ee();
  return Le(e, J);
}
function zn(e) {
  return Dt(Ke("", null, null, null, [""], e = Mt(e), 0, [0], e));
}
function Ke(e, r, t, n, o, s, i, a, u) {
  for (var f = 0, l = 0, p = i, d = 0, v = 0, y = 0, c = 1, E = 1, x = 1, P = 0, _ = "", D = o, h = s, B = n, N = _; E; )
    switch (y = P, P = ee()) {
      case 40:
        if (y != 108 && K(N, p - 1) == 58) {
          Tr(N += j(Ge(P), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        N += Ge(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        N += jn(y);
        break;
      case 92:
        N += In(qe() - 1, 7);
        continue;
      case 47:
        switch (ce()) {
          case 42:
          case 47:
            Ye(Ln(Mn(ee(), qe()), r, t), u);
            break;
          default:
            N += "/";
        }
        break;
      case 123 * c:
        a[f++] = ae(N) * x;
      case 125 * c:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            E = 0;
          case 59 + l:
            x == -1 && (N = j(N, /\f/g, "")), v > 0 && ae(N) - p && Ye(v > 32 ? Hr(N + ";", n, t, p - 1) : Hr(j(N, " ", "") + ";", n, t, p - 2), u);
            break;
          case 59:
            N += ";";
          default:
            if (Ye(B = Kr(N, r, t, f, l, o, a, _, D = [], h = [], p), s), P === 123)
              if (l === 0)
                Ke(N, r, B, B, D, s, p, a, h);
              else
                switch (d === 99 && K(N, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ke(e, B, B, n && Ye(Kr(e, B, B, 0, 0, o, a, _, o, D = [], p), h), o, h, p, a, n ? D : h);
                    break;
                  default:
                    Ke(N, B, B, B, [""], h, 0, a, h);
                }
        }
        f = l = v = 0, c = x = 1, _ = N = "", p = i;
        break;
      case 58:
        p = 1 + ae(N), v = y;
      default:
        if (c < 1) {
          if (P == 123)
            --c;
          else if (P == 125 && c++ == 0 && An() == 125)
            continue;
        }
        switch (N += Qe(P), P * c) {
          case 38:
            x = l > 0 ? 1 : (N += "\f", -1);
            break;
          case 44:
            a[f++] = (ae(N) - 1) * x, x = 1;
            break;
          case 64:
            ce() === 45 && (N += Ge(ee())), d = ce(), l = p = ae(_ = N += Dn(qe())), P++;
            break;
          case 45:
            y === 45 && ae(N) == 2 && (c = 0);
        }
    }
  return s;
}
function Kr(e, r, t, n, o, s, i, a, u, f, l) {
  for (var p = o - 1, d = o === 0 ? s : [""], v = Ir(d), y = 0, c = 0, E = 0; y < n; ++y)
    for (var x = 0, P = Me(e, p + 1, p = Cn(c = i[y])), _ = e; x < v; ++x)
      (_ = jt(c > 0 ? d[x] + " " + P : j(P, /&\f/g, d[x]))) && (u[E++] = _);
  return rr(e, r, t, o === 0 ? Ar : a, u, f, l);
}
function Ln(e, r, t) {
  return rr(e, r, t, Rr, Qe(Rn()), Me(e, 2, -2), 0);
}
function Hr(e, r, t, n) {
  return rr(e, r, t, jr, Me(e, 0, n), Me(e, n + 1, -1), n);
}
function we(e, r) {
  for (var t = "", n = Ir(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function Un(e, r, t, n) {
  switch (e.type) {
    case Tn:
      if (e.children.length)
        break;
    case Sn:
    case jr:
      return e.return = e.return || e.value;
    case Rr:
      return "";
    case At:
      return e.return = e.value + "{" + we(e.children, n) + "}";
    case Ar:
      e.value = e.props.join(",");
  }
  return ae(t = we(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Vn(e) {
  var r = Ir(e);
  return function(t, n, o, s) {
    for (var i = "", a = 0; a < r; a++)
      i += e[a](t, n, o, s) || "";
    return i;
  };
}
function Fn(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var Wn = function(r, t, n) {
  for (var o = 0, s = 0; o = s, s = ce(), o === 38 && s === 12 && (t[n] = 1), !De(s); )
    ee();
  return Le(r, J);
}, Bn = function(r, t) {
  var n = -1, o = 44;
  do
    switch (De(o)) {
      case 0:
        o === 38 && ce() === 12 && (t[n] = 1), r[n] += Wn(J - 1, t, n);
        break;
      case 2:
        r[n] += Ge(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = ce() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += Qe(o);
    }
  while (o = ee());
  return r;
}, Yn = function(r, t) {
  return Dt(Bn(Mt(r), t));
}, Xr = /* @__PURE__ */ new WeakMap(), qn = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Xr.get(n)) && !o) {
      Xr.set(r, !0);
      for (var s = [], i = Yn(t, s), a = n.props, u = 0, f = 0; u < i.length; u++)
        for (var l = 0; l < a.length; l++, f++)
          r.props[f] = s[u] ? i[u].replace(/&\f/g, a[l]) : a[l] + " " + i[u];
    }
  }
}, Gn = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, Kn = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Hn = function(r) {
  return r.type === "comm" && r.children.indexOf(Kn) > -1;
}, Xn = function(r) {
  return function(t, n, o) {
    if (!(t.type !== "rule" || r.compat)) {
      var s = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (s) {
        for (var i = !!t.parent, a = i ? t.parent.children : (
          // global rule at the root level
          o
        ), u = a.length - 1; u >= 0; u--) {
          var f = a[u];
          if (f.line < t.line)
            break;
          if (f.column < t.column) {
            if (Hn(f))
              return;
            break;
          }
        }
        s.forEach(function(l) {
          console.error('The pseudo class "' + l + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + l.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, zt = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, Jn = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!zt(t[n]))
      return !0;
  return !1;
}, Jr = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, Zn = function(r, t, n) {
  zt(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Jr(r)) : Jn(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Jr(r)));
};
function Lt(e, r) {
  switch (Nn(e, r)) {
    case 5103:
      return A + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return A + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return A + e + He + e + H + e + e;
    case 6828:
    case 4268:
      return A + e + H + e + e;
    case 6165:
      return A + e + H + "flex-" + e + e;
    case 5187:
      return A + e + j(e, /(\w+).+(:[^]+)/, A + "box-$1$2" + H + "flex-$1$2") + e;
    case 5443:
      return A + e + H + "flex-item-" + j(e, /flex-|-self/, "") + e;
    case 4675:
      return A + e + H + "flex-line-pack" + j(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return A + e + H + j(e, "shrink", "negative") + e;
    case 5292:
      return A + e + H + j(e, "basis", "preferred-size") + e;
    case 6060:
      return A + "box-" + j(e, "-grow", "") + A + e + H + j(e, "grow", "positive") + e;
    case 4554:
      return A + j(e, /([^-])(transform)/g, "$1" + A + "$2") + e;
    case 6187:
      return j(j(j(e, /(zoom-|grab)/, A + "$1"), /(image-set)/, A + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return j(e, /(image-set\([^]*)/, A + "$1$`$1");
    case 4968:
      return j(j(e, /(.+:)(flex-)?(.*)/, A + "box-pack:$3" + H + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + A + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(e, /(.+)-inline(.+)/, A + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ae(e) - 1 - r > 6)
        switch (K(e, r + 1)) {
          case 109:
            if (K(e, r + 4) !== 45)
              break;
          case 102:
            return j(e, /(.+:)(.+)-([^]+)/, "$1" + A + "$2-$3$1" + He + (K(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Tr(e, "stretch") ? Lt(j(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (K(e, r + 1) !== 115)
        break;
    case 6444:
      switch (K(e, ae(e) - 3 - (~Tr(e, "!important") && 10))) {
        case 107:
          return j(e, ":", ":" + A) + e;
        case 101:
          return j(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + A + (K(e, 14) === 45 ? "inline-" : "") + "box$3$1" + A + "$2$3$1" + H + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (K(e, r + 11)) {
        case 114:
          return A + e + H + j(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return A + e + H + j(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return A + e + H + j(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return A + e + H + e + e;
  }
  return e;
}
var Qn = function(r, t, n, o) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case jr:
        r.return = Lt(r.value, r.length);
        break;
      case At:
        return we([Re(r, {
          value: j(r.value, "@", "@" + A)
        })], o);
      case Ar:
        if (r.length)
          return $n(r.props, function(s) {
            switch (kn(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return we([Re(r, {
                  props: [j(s, /:(read-\w+)/, ":" + He + "$1")]
                })], o);
              case "::placeholder":
                return we([Re(r, {
                  props: [j(s, /:(plac\w+)/, ":" + A + "input-$1")]
                }), Re(r, {
                  props: [j(s, /:(plac\w+)/, ":" + He + "$1")]
                }), Re(r, {
                  props: [j(s, /:(plac\w+)/, H + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, eo = [Qn], Ut = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(c) {
      var E = c.getAttribute("data-emotion");
      E.indexOf(" ") !== -1 && (document.head.appendChild(c), c.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || eo;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var s = {}, i, a = [];
  i = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(c) {
      for (var E = c.getAttribute("data-emotion").split(" "), x = 1; x < E.length; x++)
        s[E[x]] = !0;
      a.push(c);
    }
  );
  var u, f = [qn, Gn];
  process.env.NODE_ENV !== "production" && f.push(Xn({
    get compat() {
      return y.compat;
    }
  }), Zn);
  {
    var l, p = [Un, process.env.NODE_ENV !== "production" ? function(c) {
      c.root || (c.return ? l.insert(c.return) : c.value && c.type !== Rr && l.insert(c.value + "{}"));
    } : Fn(function(c) {
      l.insert(c);
    })], d = Vn(f.concat(o, p)), v = function(E) {
      return we(zn(E), d);
    };
    u = function(E, x, P, _) {
      l = P, process.env.NODE_ENV !== "production" && x.map !== void 0 && (l = {
        insert: function(h) {
          P.insert(h + x.map);
        }
      }), v(E ? E + "{" + x.styles + "}" : x.styles), _ && (y.inserted[x.name] = !0);
    };
  }
  var y = {
    key: t,
    sheet: new wn({
      key: t,
      container: i,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: s,
    registered: {},
    insert: u
  };
  return y.sheet.hydrate(a), y;
};
function ro(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Vt(e) {
  if (e.__esModule)
    return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var Pr = { exports: {} }, I = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr;
function to() {
  if (Zr)
    return I;
  Zr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function _(h) {
    if (typeof h == "object" && h !== null) {
      var B = h.$$typeof;
      switch (B) {
        case r:
          switch (h = h.type, h) {
            case u:
            case f:
            case n:
            case s:
            case o:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case l:
                case y:
                case v:
                case i:
                  return h;
                default:
                  return B;
              }
          }
        case t:
          return B;
      }
    }
  }
  function D(h) {
    return _(h) === f;
  }
  return I.AsyncMode = u, I.ConcurrentMode = f, I.ContextConsumer = a, I.ContextProvider = i, I.Element = r, I.ForwardRef = l, I.Fragment = n, I.Lazy = y, I.Memo = v, I.Portal = t, I.Profiler = s, I.StrictMode = o, I.Suspense = p, I.isAsyncMode = function(h) {
    return D(h) || _(h) === u;
  }, I.isConcurrentMode = D, I.isContextConsumer = function(h) {
    return _(h) === a;
  }, I.isContextProvider = function(h) {
    return _(h) === i;
  }, I.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === r;
  }, I.isForwardRef = function(h) {
    return _(h) === l;
  }, I.isFragment = function(h) {
    return _(h) === n;
  }, I.isLazy = function(h) {
    return _(h) === y;
  }, I.isMemo = function(h) {
    return _(h) === v;
  }, I.isPortal = function(h) {
    return _(h) === t;
  }, I.isProfiler = function(h) {
    return _(h) === s;
  }, I.isStrictMode = function(h) {
    return _(h) === o;
  }, I.isSuspense = function(h) {
    return _(h) === p;
  }, I.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === f || h === s || h === o || h === p || h === d || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === v || h.$$typeof === i || h.$$typeof === a || h.$$typeof === l || h.$$typeof === E || h.$$typeof === x || h.$$typeof === P || h.$$typeof === c);
  }, I.typeOf = _, I;
}
var M = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function no() {
  return Qr || (Qr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function _(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === f || g === s || g === o || g === p || g === d || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === v || g.$$typeof === i || g.$$typeof === a || g.$$typeof === l || g.$$typeof === E || g.$$typeof === x || g.$$typeof === P || g.$$typeof === c);
    }
    function D(g) {
      if (typeof g == "object" && g !== null) {
        var ie = g.$$typeof;
        switch (ie) {
          case r:
            var Be = g.type;
            switch (Be) {
              case u:
              case f:
              case n:
              case s:
              case o:
              case p:
                return Be;
              default:
                var Gr = Be && Be.$$typeof;
                switch (Gr) {
                  case a:
                  case l:
                  case y:
                  case v:
                  case i:
                    return Gr;
                  default:
                    return ie;
                }
            }
          case t:
            return ie;
        }
      }
    }
    var h = u, B = f, N = a, ke = i, fe = r, de = l, Fe = n, mr = y, hr = v, ve = t, yr = s, se = o, me = p, We = !1;
    function gr(g) {
      return We || (We = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m(g) || D(g) === u;
    }
    function m(g) {
      return D(g) === f;
    }
    function b(g) {
      return D(g) === a;
    }
    function C(g) {
      return D(g) === i;
    }
    function S(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    function O(g) {
      return D(g) === l;
    }
    function k(g) {
      return D(g) === n;
    }
    function w(g) {
      return D(g) === y;
    }
    function T(g) {
      return D(g) === v;
    }
    function $(g) {
      return D(g) === t;
    }
    function z(g) {
      return D(g) === s;
    }
    function R(g) {
      return D(g) === o;
    }
    function X(g) {
      return D(g) === p;
    }
    M.AsyncMode = h, M.ConcurrentMode = B, M.ContextConsumer = N, M.ContextProvider = ke, M.Element = fe, M.ForwardRef = de, M.Fragment = Fe, M.Lazy = mr, M.Memo = hr, M.Portal = ve, M.Profiler = yr, M.StrictMode = se, M.Suspense = me, M.isAsyncMode = gr, M.isConcurrentMode = m, M.isContextConsumer = b, M.isContextProvider = C, M.isElement = S, M.isForwardRef = O, M.isFragment = k, M.isLazy = w, M.isMemo = T, M.isPortal = $, M.isProfiler = z, M.isStrictMode = R, M.isSuspense = X, M.isValidElementType = _, M.typeOf = D;
  }()), M;
}
process.env.NODE_ENV === "production" ? Pr.exports = to() : Pr.exports = no();
var Mr = Pr.exports, Ft = Mr, oo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, so = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Wt = {};
Wt[Ft.ForwardRef] = oo;
Wt[Ft.Memo] = so;
var io = !0;
function Dr(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
var tr = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  io === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, nr = function(r, t, n) {
  tr(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var s = t;
    do
      r.insert(t === s ? "." + o : "", s, r.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function ao(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var co = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, et = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, uo = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", lo = /[A-Z]|^ms/g, Bt = /_EMO_([^_]+?)_([^]*?)_EMO_/g, zr = function(r) {
  return r.charCodeAt(1) === 45;
}, rt = function(r) {
  return r != null && typeof r != "boolean";
}, vr = /* @__PURE__ */ Rt(function(e) {
  return zr(e) ? e : e.replace(lo, "-$&").toLowerCase();
}), Xe = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Bt, function(n, o, s) {
          return oe = {
            name: o,
            styles: s,
            next: oe
          }, o;
        });
  }
  return co[r] !== 1 && !zr(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var fo = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, po = ["normal", "none", "initial", "inherit", "unset"], mo = Xe, ho = /^-ms-/, yo = /-(.)/g, tt = {};
  Xe = function(r, t) {
    if (r === "content" && (typeof t != "string" || po.indexOf(t) === -1 && !fo.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = mo(r, t);
    return n !== "" && !zr(r) && r.indexOf("-") !== -1 && tt[r] === void 0 && (tt[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(ho, "ms-").replace(yo, function(o, s) {
      return s.toUpperCase();
    }) + "?")), n;
  };
}
var Yt = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ze(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Yt);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return oe = {
          name: t.name,
          styles: t.styles,
          next: oe
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            oe = {
              name: n.name,
              styles: n.styles,
              next: oe
            }, n = n.next;
        var o = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (o += t.map), o;
      }
      return go(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var s = oe, i = t(e);
        return oe = s, ze(e, r, i);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var a = [], u = t.replace(Bt, function(l, p, d) {
          var v = "animation" + a.length;
          return a.push("const " + v + " = keyframes`" + d.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + v + "}";
        });
        a.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(a, ["`" + u + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + u + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var f = r[t];
  return f !== void 0 ? f : t;
}
function go(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += ze(e, r, t[o]) + ";";
  else
    for (var s in t) {
      var i = t[s];
      if (typeof i != "object")
        r != null && r[i] !== void 0 ? n += s + "{" + r[i] + "}" : rt(i) && (n += vr(s) + ":" + Xe(s, i) + ";");
      else {
        if (s === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Yt);
        if (Array.isArray(i) && typeof i[0] == "string" && (r == null || r[i[0]] === void 0))
          for (var a = 0; a < i.length; a++)
            rt(i[a]) && (n += vr(s) + ":" + Xe(s, i[a]) + ";");
        else {
          var u = ze(e, r, i);
          switch (s) {
            case "animation":
            case "animationName": {
              n += vr(s) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && s === "undefined" && console.error(uo), n += s + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var nt = /label:\s*([^\s;\n{]+)\s*(;|$)/g, qt;
process.env.NODE_ENV !== "production" && (qt = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var oe, Ce = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var o = !0, s = "";
  oe = void 0;
  var i = r[0];
  i == null || i.raw === void 0 ? (o = !1, s += ze(n, t, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(et), s += i[0]);
  for (var a = 1; a < r.length; a++)
    s += ze(n, t, r[a]), o && (process.env.NODE_ENV !== "production" && i[a] === void 0 && console.error(et), s += i[a]);
  var u;
  process.env.NODE_ENV !== "production" && (s = s.replace(qt, function(d) {
    return u = d, "";
  })), nt.lastIndex = 0;
  for (var f = "", l; (l = nt.exec(s)) !== null; )
    f += "-" + // $FlowFixMe we know it's not null
    l[1];
  var p = ao(s) + f;
  return process.env.NODE_ENV !== "production" ? {
    name: p,
    styles: s,
    map: u,
    next: oe,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: p,
    styles: s,
    next: oe
  };
}, vo = function(r) {
  return r();
}, Gt = W["useInsertionEffect"] ? W["useInsertionEffect"] : !1, Lr = Gt || vo, ot = Gt || W.useLayoutEffect, bo = {}.hasOwnProperty, Ur = /* @__PURE__ */ W.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ut({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Ur.displayName = "EmotionCacheContext");
var Eo = Ur.Provider, or = function(r) {
  return /* @__PURE__ */ yn(function(t, n) {
    var o = gn(Ur);
    return r(t, o, n);
  });
}, ge = /* @__PURE__ */ W.createContext({});
process.env.NODE_ENV !== "production" && (ge.displayName = "EmotionThemeContext");
var st = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", it = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", xo = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return tr(t, n, o), Lr(function() {
    return nr(t, n, o);
  }), null;
}, Oo = /* @__PURE__ */ or(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var o = e[st], s = [n], i = "";
  typeof e.className == "string" ? i = Dr(r.registered, s, e.className) : e.className != null && (i = e.className + " ");
  var a = Ce(s, void 0, W.useContext(ge));
  if (process.env.NODE_ENV !== "production" && a.name.indexOf("-") === -1) {
    var u = e[it];
    u && (a = Ce([a, "label:" + u + ";"]));
  }
  i += r.key + "-" + a.name;
  var f = {};
  for (var l in e)
    bo.call(e, l) && l !== "css" && l !== st && (process.env.NODE_ENV === "production" || l !== it) && (f[l] = e[l]);
  return f.ref = t, f.className = i, /* @__PURE__ */ W.createElement(W.Fragment, null, /* @__PURE__ */ W.createElement(xo, {
    cache: r,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ W.createElement(o, f));
});
process.env.NODE_ENV !== "production" && (Oo.displayName = "EmotionCssPropInternal");
var _o = {
  name: "@emotion/react",
  version: "11.11.4",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.2",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, at = !1, Kt = /* @__PURE__ */ or(function(e, r) {
  process.env.NODE_ENV !== "production" && !at && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), at = !0);
  var t = e.styles, n = Ce([t], void 0, W.useContext(ge)), o = W.useRef();
  return ot(function() {
    var s = r.key + "-global", i = new r.sheet.constructor({
      key: s,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), a = !1, u = document.querySelector('style[data-emotion="' + s + " " + n.name + '"]');
    return r.sheet.tags.length && (i.before = r.sheet.tags[0]), u !== null && (a = !0, u.setAttribute("data-emotion", s), i.hydrate([u])), o.current = [i, a], function() {
      i.flush();
    };
  }, [r]), ot(function() {
    var s = o.current, i = s[0], a = s[1];
    if (a) {
      s[1] = !1;
      return;
    }
    if (n.next !== void 0 && nr(r, n.next, !0), i.tags.length) {
      var u = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = u, i.flush();
    }
    r.insert("", n, i, !1);
  }, [r, n.name]), null;
});
process.env.NODE_ENV !== "production" && (Kt.displayName = "EmotionGlobal");
function Ht() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return Ce(r);
}
var wo = function() {
  var r = Ht.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, So = function e(r) {
  for (var t = r.length, n = 0, o = ""; n < t; n++) {
    var s = r[n];
    if (s != null) {
      var i = void 0;
      switch (typeof s) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(s))
            i = e(s);
          else {
            process.env.NODE_ENV !== "production" && s.styles !== void 0 && s.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), i = "";
            for (var a in s)
              s[a] && a && (i && (i += " "), i += a);
          }
          break;
        }
        default:
          i = s;
      }
      i && (o && (o += " "), o += i);
    }
  }
  return o;
};
function To(e, r, t) {
  var n = [], o = Dr(e, n, t);
  return n.length < 2 ? t : o + r(n);
}
var Co = function(r) {
  var t = r.cache, n = r.serializedArr;
  return Lr(function() {
    for (var o = 0; o < n.length; o++)
      nr(t, n[o], !1);
  }), null;
}, Po = /* @__PURE__ */ or(function(e, r) {
  var t = !1, n = [], o = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var f = arguments.length, l = new Array(f), p = 0; p < f; p++)
      l[p] = arguments[p];
    var d = Ce(l, r.registered);
    return n.push(d), tr(r, d, !1), r.key + "-" + d.name;
  }, s = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var f = arguments.length, l = new Array(f), p = 0; p < f; p++)
      l[p] = arguments[p];
    return To(r.registered, o, So(l));
  }, i = {
    css: o,
    cx: s,
    theme: W.useContext(ge)
  }, a = e.children(i);
  return t = !0, /* @__PURE__ */ W.createElement(W.Fragment, null, /* @__PURE__ */ W.createElement(Co, {
    cache: r,
    serializedArr: n
  }), a);
});
process.env.NODE_ENV !== "production" && (Po.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var ct = !0, No = typeof jest < "u" || typeof vi < "u";
  if (ct && !No) {
    var ut = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : ct ? window : global
    ), lt = "__EMOTION_REACT_" + _o.version.split(".")[0] + "__";
    ut[lt] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), ut[lt] = !0;
  }
}
var ko = xn, $o = function(r) {
  return r !== "theme";
}, ft = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? ko : $o;
}, dt = function(r, t, n) {
  var o;
  if (t) {
    var s = t.shouldForwardProp;
    o = r.__emotion_forwardProp && s ? function(i) {
      return r.__emotion_forwardProp(i) && s(i);
    } : s;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, pt = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Ro = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return tr(t, n, o), Lr(function() {
    return nr(t, n, o);
  }), null;
}, Ao = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, s, i;
  t !== void 0 && (s = t.label, i = t.target);
  var a = dt(r, t, n), u = a || ft(o), f = !u("as");
  return function() {
    var l = arguments, p = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (s !== void 0 && p.push("label:" + s + ";"), l[0] == null || l[0].raw === void 0)
      p.push.apply(p, l);
    else {
      process.env.NODE_ENV !== "production" && l[0][0] === void 0 && console.error(pt), p.push(l[0][0]);
      for (var d = l.length, v = 1; v < d; v++)
        process.env.NODE_ENV !== "production" && l[0][v] === void 0 && console.error(pt), p.push(l[v], l[0][v]);
    }
    var y = or(function(c, E, x) {
      var P = f && c.as || o, _ = "", D = [], h = c;
      if (c.theme == null) {
        h = {};
        for (var B in c)
          h[B] = c[B];
        h.theme = W.useContext(ge);
      }
      typeof c.className == "string" ? _ = Dr(E.registered, D, c.className) : c.className != null && (_ = c.className + " ");
      var N = Ce(p.concat(D), E.registered, h);
      _ += E.key + "-" + N.name, i !== void 0 && (_ += " " + i);
      var ke = f && a === void 0 ? ft(P) : u, fe = {};
      for (var de in c)
        f && de === "as" || // $FlowFixMe
        ke(de) && (fe[de] = c[de]);
      return fe.className = _, fe.ref = x, /* @__PURE__ */ W.createElement(W.Fragment, null, /* @__PURE__ */ W.createElement(Ro, {
        cache: E,
        serialized: N,
        isStringTag: typeof P == "string"
      }), /* @__PURE__ */ W.createElement(P, fe));
    });
    return y.displayName = s !== void 0 ? s : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = r.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = p, y.__emotion_forwardProp = a, Object.defineProperty(y, "toString", {
      value: function() {
        return i === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), y.withComponent = function(c, E) {
      return e(c, U({}, t, E, {
        shouldForwardProp: dt(y, E, !0)
      })).apply(void 0, p);
    }, y;
  };
}, jo = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Nr = Ao.bind();
jo.forEach(function(e) {
  Nr[e] = Nr(e);
});
var kr = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var br, mt;
function Io() {
  if (mt)
    return br;
  mt = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var i = {}, a = 0; a < 10; a++)
        i["_" + String.fromCharCode(a)] = a;
      var u = Object.getOwnPropertyNames(i).map(function(l) {
        return i[l];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        f[l] = l;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return br = o() ? Object.assign : function(s, i) {
    for (var a, u = n(s), f, l = 1; l < arguments.length; l++) {
      a = Object(arguments[l]);
      for (var p in a)
        r.call(a, p) && (u[p] = a[p]);
      if (e) {
        f = e(a);
        for (var d = 0; d < f.length; d++)
          t.call(a, f[d]) && (u[f[d]] = a[f[d]]);
      }
    }
    return u;
  }, br;
}
var Er, ht;
function Vr() {
  if (ht)
    return Er;
  ht = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Er = e, Er;
}
var xr, yt;
function Xt() {
  return yt || (yt = 1, xr = Function.call.bind(Object.prototype.hasOwnProperty)), xr;
}
var Or, gt;
function Mo() {
  if (gt)
    return Or;
  gt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Vr(), t = {}, n = Xt();
    e = function(s) {
      var i = "Warning: " + s;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(s, i, a, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in s)
        if (n(s, l)) {
          var p;
          try {
            if (typeof s[l] != "function") {
              var d = Error(
                (u || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            p = s[l](i, l, u, a, null, r);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (u || "React class") + ": type specification of " + a + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in t)) {
            t[p.message] = !0;
            var v = f ? f() : "";
            e(
              "Failed " + a + " type: " + p.message + (v ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Or = o, Or;
}
var _r, vt;
function Do() {
  if (vt)
    return _r;
  vt = 1;
  var e = Mr, r = Io(), t = Vr(), n = Xt(), o = Mo(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(a) {
    var u = "Warning: " + a;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return _r = function(a, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function p(m) {
      var b = m && (f && m[f] || m[l]);
      if (typeof b == "function")
        return b;
    }
    var d = "<<anonymous>>", v = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: P(),
      arrayOf: _,
      element: D(),
      elementType: h(),
      instanceOf: B,
      node: de(),
      objectOf: ke,
      oneOf: N,
      oneOfType: fe,
      shape: mr,
      exact: hr
    };
    function y(m, b) {
      return m === b ? m !== 0 || 1 / m === 1 / b : m !== m && b !== b;
    }
    function c(m, b) {
      this.message = m, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    c.prototype = Error.prototype;
    function E(m) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, C = 0;
      function S(k, w, T, $, z, R, X) {
        if ($ = $ || d, R = R || T, X !== t) {
          if (u) {
            var g = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw g.name = "Invariant Violation", g;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ie = $ + ":" + T;
            !b[ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            C < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + R + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[ie] = !0, C++);
          }
        }
        return w[T] == null ? k ? w[T] === null ? new c("The " + z + " `" + R + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new c("The " + z + " `" + R + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : m(w, T, $, z, R);
      }
      var O = S.bind(null, !1);
      return O.isRequired = S.bind(null, !0), O;
    }
    function x(m) {
      function b(C, S, O, k, w, T) {
        var $ = C[S], z = se($);
        if (z !== m) {
          var R = me($);
          return new c(
            "Invalid " + k + " `" + w + "` of type " + ("`" + R + "` supplied to `" + O + "`, expected ") + ("`" + m + "`."),
            { expectedType: m }
          );
        }
        return null;
      }
      return E(b);
    }
    function P() {
      return E(i);
    }
    function _(m) {
      function b(C, S, O, k, w) {
        if (typeof m != "function")
          return new c("Property `" + w + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var T = C[S];
        if (!Array.isArray(T)) {
          var $ = se(T);
          return new c("Invalid " + k + " `" + w + "` of type " + ("`" + $ + "` supplied to `" + O + "`, expected an array."));
        }
        for (var z = 0; z < T.length; z++) {
          var R = m(T, z, O, k, w + "[" + z + "]", t);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return E(b);
    }
    function D() {
      function m(b, C, S, O, k) {
        var w = b[C];
        if (!a(w)) {
          var T = se(w);
          return new c("Invalid " + O + " `" + k + "` of type " + ("`" + T + "` supplied to `" + S + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(m);
    }
    function h() {
      function m(b, C, S, O, k) {
        var w = b[C];
        if (!e.isValidElementType(w)) {
          var T = se(w);
          return new c("Invalid " + O + " `" + k + "` of type " + ("`" + T + "` supplied to `" + S + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(m);
    }
    function B(m) {
      function b(C, S, O, k, w) {
        if (!(C[S] instanceof m)) {
          var T = m.name || d, $ = gr(C[S]);
          return new c("Invalid " + k + " `" + w + "` of type " + ("`" + $ + "` supplied to `" + O + "`, expected ") + ("instance of `" + T + "`."));
        }
        return null;
      }
      return E(b);
    }
    function N(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), i;
      function b(C, S, O, k, w) {
        for (var T = C[S], $ = 0; $ < m.length; $++)
          if (y(T, m[$]))
            return null;
        var z = JSON.stringify(m, function(X, g) {
          var ie = me(g);
          return ie === "symbol" ? String(g) : g;
        });
        return new c("Invalid " + k + " `" + w + "` of value `" + String(T) + "` " + ("supplied to `" + O + "`, expected one of " + z + "."));
      }
      return E(b);
    }
    function ke(m) {
      function b(C, S, O, k, w) {
        if (typeof m != "function")
          return new c("Property `" + w + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var T = C[S], $ = se(T);
        if ($ !== "object")
          return new c("Invalid " + k + " `" + w + "` of type " + ("`" + $ + "` supplied to `" + O + "`, expected an object."));
        for (var z in T)
          if (n(T, z)) {
            var R = m(T, z, O, k, w + "." + z, t);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return E(b);
    }
    function fe(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var b = 0; b < m.length; b++) {
        var C = m[b];
        if (typeof C != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + We(C) + " at index " + b + "."
          ), i;
      }
      function S(O, k, w, T, $) {
        for (var z = [], R = 0; R < m.length; R++) {
          var X = m[R], g = X(O, k, w, T, $, t);
          if (g == null)
            return null;
          g.data && n(g.data, "expectedType") && z.push(g.data.expectedType);
        }
        var ie = z.length > 0 ? ", expected one of type [" + z.join(", ") + "]" : "";
        return new c("Invalid " + T + " `" + $ + "` supplied to " + ("`" + w + "`" + ie + "."));
      }
      return E(S);
    }
    function de() {
      function m(b, C, S, O, k) {
        return ve(b[C]) ? null : new c("Invalid " + O + " `" + k + "` supplied to " + ("`" + S + "`, expected a ReactNode."));
      }
      return E(m);
    }
    function Fe(m, b, C, S, O) {
      return new c(
        (m || "React class") + ": " + b + " type `" + C + "." + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function mr(m) {
      function b(C, S, O, k, w) {
        var T = C[S], $ = se(T);
        if ($ !== "object")
          return new c("Invalid " + k + " `" + w + "` of type `" + $ + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var z in m) {
          var R = m[z];
          if (typeof R != "function")
            return Fe(O, k, w, z, me(R));
          var X = R(T, z, O, k, w + "." + z, t);
          if (X)
            return X;
        }
        return null;
      }
      return E(b);
    }
    function hr(m) {
      function b(C, S, O, k, w) {
        var T = C[S], $ = se(T);
        if ($ !== "object")
          return new c("Invalid " + k + " `" + w + "` of type `" + $ + "` " + ("supplied to `" + O + "`, expected `object`."));
        var z = r({}, C[S], m);
        for (var R in z) {
          var X = m[R];
          if (n(m, R) && typeof X != "function")
            return Fe(O, k, w, R, me(X));
          if (!X)
            return new c(
              "Invalid " + k + " `" + w + "` key `" + R + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(C[S], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(m), null, "  ")
            );
          var g = X(T, R, O, k, w + "." + R, t);
          if (g)
            return g;
        }
        return null;
      }
      return E(b);
    }
    function ve(m) {
      switch (typeof m) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !m;
        case "object":
          if (Array.isArray(m))
            return m.every(ve);
          if (m === null || a(m))
            return !0;
          var b = p(m);
          if (b) {
            var C = b.call(m), S;
            if (b !== m.entries) {
              for (; !(S = C.next()).done; )
                if (!ve(S.value))
                  return !1;
            } else
              for (; !(S = C.next()).done; ) {
                var O = S.value;
                if (O && !ve(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function yr(m, b) {
      return m === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function se(m) {
      var b = typeof m;
      return Array.isArray(m) ? "array" : m instanceof RegExp ? "object" : yr(b, m) ? "symbol" : b;
    }
    function me(m) {
      if (typeof m > "u" || m === null)
        return "" + m;
      var b = se(m);
      if (b === "object") {
        if (m instanceof Date)
          return "date";
        if (m instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function We(m) {
      var b = me(m);
      switch (b) {
        case "array":
        case "object":
          return "an " + b;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + b;
        default:
          return b;
      }
    }
    function gr(m) {
      return !m.constructor || !m.constructor.name ? d : m.constructor.name;
    }
    return v.checkPropTypes = o, v.resetWarningCache = o.resetWarningCache, v.PropTypes = v, v;
  }, _r;
}
var wr, bt;
function zo() {
  if (bt)
    return wr;
  bt = 1;
  var e = Vr();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, wr = function() {
    function n(i, a, u, f, l, p) {
      if (p !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return s.PropTypes = s, s;
  }, wr;
}
if (process.env.NODE_ENV !== "production") {
  var Lo = Mr, Uo = !0;
  kr.exports = Do()(Lo.isElement, Uo);
} else
  kr.exports = zo()();
var Vo = kr.exports;
const Z = /* @__PURE__ */ ro(Vo);
let $r;
typeof document == "object" && ($r = Ut({
  key: "css",
  prepend: !0
}));
function Jt(e) {
  const {
    injectFirst: r,
    children: t
  } = e;
  return r && $r ? /* @__PURE__ */ $t(Eo, {
    value: $r,
    children: t
  }) : t;
}
process.env.NODE_ENV !== "production" && (Jt.propTypes = {
  /**
   * Your component tree.
   */
  children: Z.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: Z.bool
});
function Fo(e) {
  return e == null || Object.keys(e).length === 0;
}
function Zt(e) {
  const {
    styles: r,
    defaultTheme: t = {}
  } = e;
  return /* @__PURE__ */ $t(Kt, {
    styles: typeof r == "function" ? (o) => r(Fo(o) ? t : o) : r
  });
}
process.env.NODE_ENV !== "production" && (Zt.propTypes = {
  defaultTheme: Z.object,
  styles: Z.oneOfType([Z.array, Z.string, Z.object, Z.func])
});
/**
 * @mui/styled-engine v5.15.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Wo(e, r) {
  const t = Nr(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((s) => s === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
const Bo = (e, r) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}, Ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Zt,
  StyledEngineProvider: Jt,
  ThemeContext: ge,
  css: Ht,
  default: Wo,
  internal_processStyles: Bo,
  keyframes: wo
}, Symbol.toStringTag, { value: "Module" }));
function he(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Qt(e) {
  if (!he(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = Qt(e[t]);
  }), r;
}
function ue(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? U({}, e) : e;
  return he(e) && he(r) && Object.keys(r).forEach((o) => {
    o !== "__proto__" && (he(r[o]) && o in e && he(e[o]) ? n[o] = ue(e[o], r[o], t) : t.clone ? n[o] = he(r[o]) ? Qt(r[o]) : r[o] : n[o] = r[o]);
  }), n;
}
const Yo = ["values", "unit", "step"], qo = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => U({}, t, {
    [n.key]: n.val
  }), {});
};
function Go(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, o = ye(e, Yo), s = qo(r), i = Object.keys(s);
  function a(d) {
    return `@media (min-width:${typeof r[d] == "number" ? r[d] : d}${t})`;
  }
  function u(d) {
    return `@media (max-width:${(typeof r[d] == "number" ? r[d] : d) - n / 100}${t})`;
  }
  function f(d, v) {
    const y = i.indexOf(v);
    return `@media (min-width:${typeof r[d] == "number" ? r[d] : d}${t}) and (max-width:${(y !== -1 && typeof r[i[y]] == "number" ? r[i[y]] : v) - n / 100}${t})`;
  }
  function l(d) {
    return i.indexOf(d) + 1 < i.length ? f(d, i[i.indexOf(d) + 1]) : a(d);
  }
  function p(d) {
    const v = i.indexOf(d);
    return v === 0 ? a(i[1]) : v === i.length - 1 ? u(i[v]) : f(d, i[i.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return U({
    keys: i,
    values: s,
    up: a,
    down: u,
    between: f,
    only: l,
    not: p,
    unit: t
  }, o);
}
const Ko = {
  borderRadius: 4
}, Ho = Ko, Xo = process.env.NODE_ENV !== "production" ? Z.oneOfType([Z.number, Z.string, Z.object, Z.array]) : {}, pe = Xo;
function Ae(e, r) {
  return r ? ue(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Fr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Et = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Fr[e]}px)`
};
function le(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const s = n.breakpoints || Et;
    return r.reduce((i, a, u) => (i[s.up(s.keys[u])] = t(r[u]), i), {});
  }
  if (typeof r == "object") {
    const s = n.breakpoints || Et;
    return Object.keys(r).reduce((i, a) => {
      if (Object.keys(s.values || Fr).indexOf(a) !== -1) {
        const u = s.up(a);
        i[u] = t(r[a], a);
      } else {
        const u = a;
        i[u] = r[u];
      }
      return i;
    }, {});
  }
  return t(r);
}
function en(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const s = e.up(o);
    return n[s] = {}, n;
  }, {})) || {};
}
function rn(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function Hi(e, ...r) {
  const t = en(e), n = [t, ...r].reduce((o, s) => ue(o, s), {});
  return rn(Object.keys(t), n);
}
function Jo(e, r) {
  if (typeof e != "object")
    return {};
  const t = {}, n = Object.keys(r);
  return Array.isArray(e) ? n.forEach((o, s) => {
    s < e.length && (t[o] = !0);
  }) : n.forEach((o) => {
    e[o] != null && (t[o] = !0);
  }), t;
}
function Xi({
  values: e,
  breakpoints: r,
  base: t
}) {
  const n = t || Jo(e, r), o = Object.keys(n);
  if (o.length === 0)
    return e;
  let s;
  return o.reduce((i, a, u) => (Array.isArray(e) ? (i[a] = e[u] != null ? e[u] : e[s], s = u) : typeof e == "object" ? (i[a] = e[a] != null ? e[a] : e[s], s = a) : i[a] = e, i), {});
}
function tn(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ie(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function sr(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Je(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = sr(e, t) || n, r && (o = r(o, n, e)), o;
}
function Y(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, s = (i) => {
    if (i[r] == null)
      return null;
    const a = i[r], u = i.theme, f = sr(u, n) || {};
    return le(i, a, (p) => {
      let d = Je(f, o, p);
      return p === d && typeof p == "string" && (d = Je(f, o, `${r}${p === "default" ? "" : tn(p)}`, p)), t === !1 ? d : {
        [t]: d
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: pe
  } : {}, s.filterProps = [r], s;
}
function Zo(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const Qo = {
  m: "margin",
  p: "padding"
}, es = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, xt = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, rs = Zo((e) => {
  if (e.length > 2)
    if (xt[e])
      e = xt[e];
    else
      return [e];
  const [r, t] = e.split(""), n = Qo[r], o = es[t] || "";
  return Array.isArray(o) ? o.map((s) => n + s) : [n + o];
}), ir = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ar = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], ts = [...ir, ...ar];
function Ue(e, r, t, n) {
  var o;
  const s = (o = sr(e, r, !1)) != null ? o : t;
  return typeof s == "number" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), s * i) : Array.isArray(s) ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && (Number.isInteger(i) ? i > s.length - 1 && console.error([`MUI: The value provided (${i}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${i} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), s[i]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function nn(e) {
  return Ue(e, "spacing", 8, "spacing");
}
function Ve(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function ns(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = Ve(r, t), n), {});
}
function os(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const o = rs(t), s = ns(o, n), i = e[t];
  return le(e, i, s);
}
function on(e, r) {
  const t = nn(e.theme);
  return Object.keys(e).map((n) => os(e, r, n, t)).reduce(Ae, {});
}
function V(e) {
  return on(e, ir);
}
V.propTypes = process.env.NODE_ENV !== "production" ? ir.reduce((e, r) => (e[r] = pe, e), {}) : {};
V.filterProps = ir;
function F(e) {
  return on(e, ar);
}
F.propTypes = process.env.NODE_ENV !== "production" ? ar.reduce((e, r) => (e[r] = pe, e), {}) : {};
F.filterProps = ar;
process.env.NODE_ENV !== "production" && ts.reduce((e, r) => (e[r] = pe, e), {});
function ss(e = 8) {
  if (e.mui)
    return e;
  const r = nn({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((s) => {
    const i = r(s);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" "));
  return t.mui = !0, t;
}
function cr(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((s) => {
    n[s] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, s) => r[s] ? Ae(o, r[s](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function re(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ne(e, r) {
  return Y({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const is = ne("border", re), as = ne("borderTop", re), cs = ne("borderRight", re), us = ne("borderBottom", re), ls = ne("borderLeft", re), fs = ne("borderColor"), ds = ne("borderTopColor"), ps = ne("borderRightColor"), ms = ne("borderBottomColor"), hs = ne("borderLeftColor"), ys = ne("outline", re), gs = ne("outlineColor"), ur = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = Ue(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: Ve(r, n)
    });
    return le(e, e.borderRadius, t);
  }
  return null;
};
ur.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: pe
} : {};
ur.filterProps = ["borderRadius"];
cr(is, as, cs, us, ls, fs, ds, ps, ms, hs, ur, ys, gs);
const lr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = Ue(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: Ve(r, n)
    });
    return le(e, e.gap, t);
  }
  return null;
};
lr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: pe
} : {};
lr.filterProps = ["gap"];
const fr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = Ue(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: Ve(r, n)
    });
    return le(e, e.columnGap, t);
  }
  return null;
};
fr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: pe
} : {};
fr.filterProps = ["columnGap"];
const dr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = Ue(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: Ve(r, n)
    });
    return le(e, e.rowGap, t);
  }
  return null;
};
dr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: pe
} : {};
dr.filterProps = ["rowGap"];
const vs = Y({
  prop: "gridColumn"
}), bs = Y({
  prop: "gridRow"
}), Es = Y({
  prop: "gridAutoFlow"
}), xs = Y({
  prop: "gridAutoColumns"
}), Os = Y({
  prop: "gridAutoRows"
}), _s = Y({
  prop: "gridTemplateColumns"
}), ws = Y({
  prop: "gridTemplateRows"
}), Ss = Y({
  prop: "gridTemplateAreas"
}), Ts = Y({
  prop: "gridArea"
});
cr(lr, fr, dr, vs, bs, Es, xs, Os, _s, ws, Ss, Ts);
function Se(e, r) {
  return r === "grey" ? r : e;
}
const Cs = Y({
  prop: "color",
  themeKey: "palette",
  transform: Se
}), Ps = Y({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Se
}), Ns = Y({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Se
});
cr(Cs, Ps, Ns);
function Q(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ks = Y({
  prop: "width",
  transform: Q
}), Wr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, o;
      const s = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || Fr[t];
      return s ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: Q(t)
      };
    };
    return le(e, e.maxWidth, r);
  }
  return null;
};
Wr.filterProps = ["maxWidth"];
const $s = Y({
  prop: "minWidth",
  transform: Q
}), Rs = Y({
  prop: "height",
  transform: Q
}), As = Y({
  prop: "maxHeight",
  transform: Q
}), js = Y({
  prop: "minHeight",
  transform: Q
});
Y({
  prop: "size",
  cssProperty: "width",
  transform: Q
});
Y({
  prop: "size",
  cssProperty: "height",
  transform: Q
});
const Is = Y({
  prop: "boxSizing"
});
cr(ks, Wr, $s, Rs, As, js, Is);
const Ms = {
  // borders
  border: {
    themeKey: "borders",
    transform: re
  },
  borderTop: {
    themeKey: "borders",
    transform: re
  },
  borderRight: {
    themeKey: "borders",
    transform: re
  },
  borderBottom: {
    themeKey: "borders",
    transform: re
  },
  borderLeft: {
    themeKey: "borders",
    transform: re
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: re
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ur
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Se
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Se
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Se
  },
  // spacing
  p: {
    style: F
  },
  pt: {
    style: F
  },
  pr: {
    style: F
  },
  pb: {
    style: F
  },
  pl: {
    style: F
  },
  px: {
    style: F
  },
  py: {
    style: F
  },
  padding: {
    style: F
  },
  paddingTop: {
    style: F
  },
  paddingRight: {
    style: F
  },
  paddingBottom: {
    style: F
  },
  paddingLeft: {
    style: F
  },
  paddingX: {
    style: F
  },
  paddingY: {
    style: F
  },
  paddingInline: {
    style: F
  },
  paddingInlineStart: {
    style: F
  },
  paddingInlineEnd: {
    style: F
  },
  paddingBlock: {
    style: F
  },
  paddingBlockStart: {
    style: F
  },
  paddingBlockEnd: {
    style: F
  },
  m: {
    style: V
  },
  mt: {
    style: V
  },
  mr: {
    style: V
  },
  mb: {
    style: V
  },
  ml: {
    style: V
  },
  mx: {
    style: V
  },
  my: {
    style: V
  },
  margin: {
    style: V
  },
  marginTop: {
    style: V
  },
  marginRight: {
    style: V
  },
  marginBottom: {
    style: V
  },
  marginLeft: {
    style: V
  },
  marginX: {
    style: V
  },
  marginY: {
    style: V
  },
  marginInline: {
    style: V
  },
  marginInlineStart: {
    style: V
  },
  marginInlineEnd: {
    style: V
  },
  marginBlock: {
    style: V
  },
  marginBlockStart: {
    style: V
  },
  marginBlockEnd: {
    style: V
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: lr
  },
  rowGap: {
    style: dr
  },
  columnGap: {
    style: fr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Q
  },
  maxWidth: {
    style: Wr
  },
  minWidth: {
    transform: Q
  },
  height: {
    transform: Q
  },
  maxHeight: {
    transform: Q
  },
  minHeight: {
    transform: Q
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, pr = Ms;
function Ds(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function zs(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Ls() {
  function e(t, n, o, s) {
    const i = {
      [t]: n,
      theme: o
    }, a = s[t];
    if (!a)
      return {
        [t]: n
      };
    const {
      cssProperty: u = t,
      themeKey: f,
      transform: l,
      style: p
    } = a;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const d = sr(o, f) || {};
    return p ? p(i) : le(i, n, (y) => {
      let c = Je(d, l, y);
      return y === c && typeof y == "string" && (c = Je(d, l, `${t}${y === "default" ? "" : tn(y)}`, y)), u === !1 ? c : {
        [u]: c
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: o,
      theme: s = {}
    } = t || {};
    if (!o)
      return null;
    const i = (n = s.unstable_sxConfig) != null ? n : pr;
    function a(u) {
      let f = u;
      if (typeof u == "function")
        f = u(s);
      else if (typeof u != "object")
        return u;
      if (!f)
        return null;
      const l = en(s.breakpoints), p = Object.keys(l);
      let d = l;
      return Object.keys(f).forEach((v) => {
        const y = zs(f[v], s);
        if (y != null)
          if (typeof y == "object")
            if (i[v])
              d = Ae(d, e(v, y, s, i));
            else {
              const c = le({
                theme: s
              }, y, (E) => ({
                [v]: E
              }));
              Ds(c, y) ? d[v] = r({
                sx: y,
                theme: s
              }) : d = Ae(d, c);
            }
          else
            d = Ae(d, e(v, y, s, i));
      }), rn(p, d);
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return r;
}
const sn = Ls();
sn.filterProps = ["sx"];
const an = sn;
function Us(e, r) {
  const t = this;
  return t.vars && typeof t.getColorSchemeSelector == "function" ? {
    [t.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: r
  } : t.palette.mode === e ? r : {};
}
const Vs = ["breakpoints", "palette", "spacing", "shape"];
function cn(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: s = {}
  } = e, i = ye(e, Vs), a = Go(t), u = ss(o);
  let f = ue({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: U({
      mode: "light"
    }, n),
    spacing: u,
    shape: U({}, Ho, s)
  }, i);
  return f.applyStyles = Us, f = r.reduce((l, p) => ue(l, p), f), f.unstable_sxConfig = U({}, pr, i == null ? void 0 : i.unstable_sxConfig), f.unstable_sx = function(p) {
    return an({
      sx: p,
      theme: this
    });
  }, f;
}
function Fs(e) {
  return Object.keys(e).length === 0;
}
function Ws(e = null) {
  const r = W.useContext(ge);
  return !r || Fs(r) ? e : r;
}
const Bs = cn();
function Ji(e = Bs) {
  return Ws(e);
}
const Ys = ["sx"], qs = (e) => {
  var r, t;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (r = e == null || (t = e.theme) == null ? void 0 : t.unstable_sxConfig) != null ? r : pr;
  return Object.keys(e).forEach((s) => {
    o[s] ? n.systemProps[s] = e[s] : n.otherProps[s] = e[s];
  }), n;
};
function Zi(e) {
  const {
    sx: r
  } = e, t = ye(e, Ys), {
    systemProps: n,
    otherProps: o
  } = qs(t);
  let s;
  return Array.isArray(r) ? s = [n, ...r] : typeof r == "function" ? s = (...i) => {
    const a = r(...i);
    return he(a) ? U({}, n, a) : n;
  } : s = U({}, n, r), U({}, o, {
    sx: s
  });
}
const Ot = (e) => e, Gs = () => {
  let e = Ot;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = Ot;
    }
  };
}, Ks = Gs(), Hs = Ks, Xs = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Js(e, r, t = "Mui") {
  const n = Xs[r];
  return n ? `${t}-${n}` : `${Hs.generate(e)}-${r}`;
}
function Zs(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
const Qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zs
}, Symbol.toStringTag, { value: "Module" }));
function ei(e, r) {
  return U({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
var q = {}, un = { exports: {} };
(function(e) {
  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})(un);
var ri = un.exports;
const ti = /* @__PURE__ */ Vt(bn), ni = /* @__PURE__ */ Vt(Qs);
var ln = ri;
Object.defineProperty(q, "__esModule", {
  value: !0
});
var Qi = q.alpha = mn;
q.blend = yi;
q.colorChannel = void 0;
var oi = q.darken = Yr;
q.decomposeColor = te;
var ea = q.emphasize = hi, _t = q.getContrastRatio = fi;
q.getLuminance = Ze;
q.hexToRgb = fn;
var ra = q.hslToRgb = pn, si = q.lighten = qr, ta = q.private_safeAlpha = di, ii = q.private_safeColorChannel = void 0, na = q.private_safeDarken = pi, oa = q.private_safeEmphasize = hn, sa = q.private_safeLighten = mi;
q.recomposeColor = Ne;
q.rgbToHex = li;
var wt = ln(ti), ai = ln(ni);
function Br(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), (0, ai.default)(e, r, t);
}
function fn(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ci(e) {
  const r = e.toString(16);
  return r.length === 1 ? `0${r}` : r;
}
function te(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return te(fn(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, wt.default)(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, wt.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const dn = (e) => {
  const r = te(e);
  return r.values.slice(0, 3).map((t, n) => r.type.indexOf("hsl") !== -1 && n !== 0 ? `${t}%` : t).join(" ");
};
q.colorChannel = dn;
const ui = (e, r) => {
  try {
    return dn(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
ii = q.private_safeColorChannel = ui;
function Ne(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((o, s) => s < 3 ? parseInt(o, 10) : o) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function li(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: r
  } = te(e);
  return `#${r.map((t, n) => ci(n === 3 ? Math.round(255 * t) : t)).join("")}`;
}
function pn(e) {
  e = te(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, s = n * Math.min(o, 1 - o), i = (f, l = (f + t / 30) % 12) => o - s * Math.max(Math.min(l - 3, 9 - l, 1), -1);
  let a = "rgb";
  const u = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (a += "a", u.push(r[3])), Ne({
    type: a,
    values: u
  });
}
function Ze(e) {
  e = te(e);
  let r = e.type === "hsl" || e.type === "hsla" ? te(pn(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function fi(e, r) {
  const t = Ze(e), n = Ze(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function mn(e, r) {
  return e = te(e), r = Br(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, Ne(e);
}
function di(e, r, t) {
  try {
    return mn(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Yr(e, r) {
  if (e = te(e), r = Br(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return Ne(e);
}
function pi(e, r, t) {
  try {
    return Yr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function qr(e, r) {
  if (e = te(e), r = Br(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return Ne(e);
}
function mi(e, r, t) {
  try {
    return qr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function hi(e, r = 0.15) {
  return Ze(e) > 0.5 ? Yr(e, r) : qr(e, r);
}
function hn(e, r, t) {
  try {
    return hn(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function yi(e, r, t, n = 1) {
  const o = (u, f) => Math.round((u ** (1 / n) * (1 - t) + f ** (1 / n) * t) ** n), s = te(e), i = te(r), a = [o(s.values[0], i.values[0]), o(s.values[1], i.values[1]), o(s.values[2], i.values[2])];
  return Ne({
    type: "rgb",
    values: a
  });
}
const gi = ["mode", "contrastThreshold", "tonalOffset"], St = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: je.white,
    default: je.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Sr = {
  text: {
    primary: je.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: je.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Tt(e, r, t, n) {
  const o = n.light || n, s = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = si(e.main, o) : r === "dark" && (e.dark = oi(e.main, s)));
}
function bi(e = "light") {
  return e === "dark" ? {
    main: be[200],
    light: be[50],
    dark: be[400]
  } : {
    main: be[700],
    light: be[400],
    dark: be[800]
  };
}
function Ei(e = "light") {
  return e === "dark" ? {
    main: Ee[200],
    light: Ee[50],
    dark: Ee[400]
  } : {
    main: Ee[500],
    light: Ee[300],
    dark: Ee[700]
  };
}
function xi(e = "light") {
  return e === "dark" ? {
    main: xe[500],
    light: xe[300],
    dark: xe[700]
  } : {
    main: xe[700],
    light: xe[400],
    dark: xe[800]
  };
}
function Oi(e = "light") {
  return e === "dark" ? {
    main: Oe[400],
    light: Oe[300],
    dark: Oe[700]
  } : {
    main: Oe[700],
    light: Oe[500],
    dark: Oe[900]
  };
}
function _i(e = "light") {
  return e === "dark" ? {
    main: _e[400],
    light: _e[300],
    dark: _e[700]
  } : {
    main: _e[800],
    light: _e[500],
    dark: _e[900]
  };
}
function wi(e = "light") {
  return e === "dark" ? {
    main: $e[400],
    light: $e[300],
    dark: $e[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: $e[500],
    dark: $e[900]
  };
}
function Si(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, o = ye(e, gi), s = e.primary || bi(r), i = e.secondary || Ei(r), a = e.error || xi(r), u = e.info || Oi(r), f = e.success || _i(r), l = e.warning || wi(r);
  function p(c) {
    const E = _t(c, Sr.text.primary) >= t ? Sr.text.primary : St.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = _t(c, E);
      x < 3 && console.error([`MUI: The contrast ratio of ${x}:1 for ${E} on ${c}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return E;
  }
  const d = ({
    color: c,
    name: E,
    mainShade: x = 500,
    lightShade: P = 300,
    darkShade: _ = 700
  }) => {
    if (c = U({}, c), !c.main && c[x] && (c.main = c[x]), !c.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${x}\` property.` : Ie(11, E ? ` (${E})` : "", x));
    if (typeof c.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(c.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ie(12, E ? ` (${E})` : "", JSON.stringify(c.main)));
    return Tt(c, "light", P, n), Tt(c, "dark", _, n), c.contrastText || (c.contrastText = p(c.main)), c;
  }, v = {
    dark: Sr,
    light: St
  };
  return process.env.NODE_ENV !== "production" && (v[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), ue(U({
    // A collection of common colors.
    common: U({}, je),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: d({
      color: i,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: d({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: d({
      color: l,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: vn,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, v[r]), o);
}
const Ti = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Ci(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ct = {
  textTransform: "uppercase"
}, Pt = '"Roboto", "Helvetica", "Arial", sans-serif';
function Pi(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = Pt,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: l,
    pxToRem: p
  } = t, d = ye(t, Ti);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const v = o / 14, y = p || ((x) => `${x / f * v}rem`), c = (x, P, _, D, h) => U({
    fontFamily: n,
    fontWeight: x,
    fontSize: y(P),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: _
  }, n === Pt ? {
    letterSpacing: `${Ci(D / P)}em`
  } : {}, h, l), E = {
    h1: c(s, 96, 1.167, -1.5),
    h2: c(s, 60, 1.2, -0.5),
    h3: c(i, 48, 1.167, 0),
    h4: c(i, 34, 1.235, 0.25),
    h5: c(i, 24, 1.334, 0),
    h6: c(a, 20, 1.6, 0.15),
    subtitle1: c(i, 16, 1.75, 0.15),
    subtitle2: c(a, 14, 1.57, 0.1),
    body1: c(i, 16, 1.5, 0.15),
    body2: c(i, 14, 1.43, 0.15),
    button: c(a, 14, 1.75, 0.4, Ct),
    caption: c(i, 12, 1.66, 0.4),
    overline: c(i, 12, 2.66, 1, Ct),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ue(U({
    htmlFontSize: f,
    pxToRem: y,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: s,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: u
  }, E), d, {
    clone: !1
    // No need to clone deep
  });
}
const Ni = 0.2, ki = 0.14, $i = 0.12;
function L(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ni})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ki})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${$i})`].join(",");
}
const Ri = ["none", L(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), L(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), L(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), L(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), L(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), L(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), L(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), L(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), L(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), L(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), L(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), L(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), L(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), L(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), L(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), L(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), L(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), L(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), L(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), L(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), L(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), L(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), L(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), L(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ai = Ri, ji = ["duration", "easing", "delay"], Ii = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Mi = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Nt(e) {
  return `${Math.round(e)}ms`;
}
function Di(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function zi(e) {
  const r = U({}, Ii, e.easing), t = U({}, Mi, e.duration);
  return U({
    getAutoHeightDuration: Di,
    create: (o = ["all"], s = {}) => {
      const {
        duration: i = t.standard,
        easing: a = r.easeInOut,
        delay: u = 0
      } = s, f = ye(s, ji);
      if (process.env.NODE_ENV !== "production") {
        const l = (d) => typeof d == "string", p = (d) => !isNaN(parseFloat(d));
        !l(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(i) && !l(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), l(a) || console.error('MUI: Argument "easing" must be a string.'), !p(u) && !l(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((l) => `${l} ${typeof i == "string" ? i : Nt(i)} ${a} ${typeof u == "string" ? u : Nt(u)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const Li = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Ui = Li, Vi = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Fi(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: o = {},
    typography: s = {}
  } = e, i = ye(e, Vi);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ie(18));
  const a = Si(n), u = cn(e);
  let f = ue(u, {
    mixins: ei(u.breakpoints, t),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ai.slice(),
    typography: Pi(a, s),
    transitions: zi(o),
    zIndex: U({}, Ui)
  });
  if (f = ue(f, i), f = r.reduce((l, p) => ue(l, p), f), process.env.NODE_ENV !== "production") {
    const l = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (d, v) => {
      let y;
      for (y in d) {
        const c = d[y];
        if (l.indexOf(y) !== -1 && Object.keys(c).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const E = Js("", y);
            console.error([`MUI: The \`${v}\` component increases the CSS specificity of the \`${y}\` internal state.`, "You can not override it like this: ", JSON.stringify(d, null, 2), "", `Instead, you need to use the '&.${E}' syntax:`, JSON.stringify({
              root: {
                [`&.${E}`]: c
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          d[y] = {};
        }
      }
    };
    Object.keys(f.components).forEach((d) => {
      const v = f.components[d].styleOverrides;
      v && d.indexOf("Mui") === 0 && p(v, d);
    });
  }
  return f.unstable_sxConfig = U({}, pr, i == null ? void 0 : i.unstable_sxConfig), f.unstable_sx = function(p) {
    return an({
      sx: p,
      theme: this
    });
  }, f;
}
let kt = !1;
function ia(...e) {
  return process.env.NODE_ENV !== "production" && (kt || (kt = !0, console.error(["MUI: the createMuiTheme function was renamed to createTheme.", "", "You should use `import { createTheme } from '@mui/material/styles'`"].join(`
`)))), Fi(...e);
}
export {
  sa as $,
  Ht as A,
  si as B,
  Hs as C,
  oi as D,
  sr as E,
  Ut as F,
  Zt as G,
  Eo as H,
  ia as I,
  Ii as J,
  Pi as K,
  ei as L,
  Go as M,
  Us as N,
  Ls as O,
  Z as P,
  pr as Q,
  ge as R,
  Jt as S,
  qi as T,
  ss as U,
  Vt as V,
  Gi as W,
  Ki as X,
  ri as Y,
  na as Z,
  ye as _,
  an as a,
  oa as a0,
  ta as a1,
  ii as a2,
  ra as a3,
  U as b,
  Fi as c,
  ro as d,
  Zi as e,
  cn as f,
  Js as g,
  tn as h,
  Bo as i,
  he as j,
  Ws as k,
  le as l,
  nn as m,
  ue as n,
  Hi as o,
  Ve as p,
  Mi as q,
  Xi as r,
  Wo as s,
  Qi as t,
  Ji as u,
  wo as v,
  Xs as w,
  Zs as x,
  Ie as y,
  ea as z
};
