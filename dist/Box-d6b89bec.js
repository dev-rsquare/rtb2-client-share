import * as V from "react";
import { forwardRef as Sn, useContext as Tn } from "react";
import { jsx as kr } from "react/jsx-runtime";
const Cn = {
  black: "#000",
  white: "#fff"
}, je = Cn, An = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, be = An, Nn = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Ee = Nn, Pn = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, xe = Pn, $n = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Oe = $n, Rn = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, _e = Rn, kn = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, $e = kn, jn = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, In = jn;
function Ie(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
const Mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ie
}, Symbol.toStringTag, { value: "Module" })), Dn = "$$material";
function B() {
  return B = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, B.apply(this, arguments);
}
function pe(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), o, s;
  for (s = 0; s < n.length; s++)
    o = n[s], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function Mt(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var zn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ln = /* @__PURE__ */ Mt(
  function(e) {
    return zn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Bn(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Un(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Vn = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Un(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var s = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      s && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !s;
    }
    if (this.isSpeedy) {
      var i = Bn(o);
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
}(), X = "-ms-", Xe = "-moz-", k = "-webkit-", jr = "comm", Ir = "rule", Mr = "decl", Fn = "@import", Dt = "@keyframes", Wn = "@layer", Yn = Math.abs, er = String.fromCharCode, qn = Object.assign;
function Gn(e, r) {
  return H(e, 0) ^ 45 ? (((r << 2 ^ H(e, 0)) << 2 ^ H(e, 1)) << 2 ^ H(e, 2)) << 2 ^ H(e, 3) : 0;
}
function zt(e) {
  return e.trim();
}
function Kn(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function j(e, r, t) {
  return e.replace(r, t);
}
function Ar(e, r) {
  return e.indexOf(r);
}
function H(e, r) {
  return e.charCodeAt(r) | 0;
}
function Me(e, r, t) {
  return e.slice(r, t);
}
function ae(e) {
  return e.length;
}
function Dr(e) {
  return e.length;
}
function Ye(e, r) {
  return r.push(e), e;
}
function Hn(e, r) {
  return e.map(r).join("");
}
var rr = 1, Te = 1, Lt = 0, Z = 0, K = 0, Ae = "";
function tr(e, r, t, n, o, s, i) {
  return { value: e, root: r, parent: t, type: n, props: o, children: s, line: rr, column: Te, length: i, return: "" };
}
function Re(e, r) {
  return qn(tr("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Xn() {
  return K;
}
function Jn() {
  return K = Z > 0 ? H(Ae, --Z) : 0, Te--, K === 10 && (Te = 1, rr--), K;
}
function ee() {
  return K = Z < Lt ? H(Ae, Z++) : 0, Te++, K === 10 && (Te = 1, rr++), K;
}
function ce() {
  return H(Ae, Z);
}
function Ge() {
  return Z;
}
function Le(e, r) {
  return Me(Ae, e, r);
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
function Bt(e) {
  return rr = Te = 1, Lt = ae(Ae = e), Z = 0, [];
}
function Ut(e) {
  return Ae = "", e;
}
function Ke(e) {
  return zt(Le(Z - 1, Nr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Zn(e) {
  for (; (K = ce()) && K < 33; )
    ee();
  return De(e) > 2 || De(K) > 3 ? "" : " ";
}
function Qn(e, r) {
  for (; --r && ee() && !(K < 48 || K > 102 || K > 57 && K < 65 || K > 70 && K < 97); )
    ;
  return Le(e, Ge() + (r < 6 && ce() == 32 && ee() == 32));
}
function Nr(e) {
  for (; ee(); )
    switch (K) {
      case e:
        return Z;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Nr(K);
        break;
      case 40:
        e === 41 && Nr(e);
        break;
      case 92:
        ee();
        break;
    }
  return Z;
}
function eo(e, r) {
  for (; ee() && e + K !== 47 + 10; )
    if (e + K === 42 + 42 && ce() === 47)
      break;
  return "/*" + Le(r, Z - 1) + "*" + er(e === 47 ? e : ee());
}
function ro(e) {
  for (; !De(ce()); )
    ee();
  return Le(e, Z);
}
function to(e) {
  return Ut(He("", null, null, null, [""], e = Bt(e), 0, [0], e));
}
function He(e, r, t, n, o, s, i, a, u) {
  for (var l = 0, c = 0, p = i, d = 0, v = 0, y = 0, f = 1, E = 1, x = 1, A = 0, _ = "", D = o, h = s, Y = n, N = _; E; )
    switch (y = A, A = ee()) {
      case 40:
        if (y != 108 && H(N, p - 1) == 58) {
          Ar(N += j(Ke(A), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        N += Ke(A);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        N += Zn(y);
        break;
      case 92:
        N += Qn(Ge() - 1, 7);
        continue;
      case 47:
        switch (ce()) {
          case 42:
          case 47:
            Ye(no(eo(ee(), Ge()), r, t), u);
            break;
          default:
            N += "/";
        }
        break;
      case 123 * f:
        a[l++] = ae(N) * x;
      case 125 * f:
      case 59:
      case 0:
        switch (A) {
          case 0:
          case 125:
            E = 0;
          case 59 + c:
            x == -1 && (N = j(N, /\f/g, "")), v > 0 && ae(N) - p && Ye(v > 32 ? Zr(N + ";", n, t, p - 1) : Zr(j(N, " ", "") + ";", n, t, p - 2), u);
            break;
          case 59:
            N += ";";
          default:
            if (Ye(Y = Jr(N, r, t, l, c, o, a, _, D = [], h = [], p), s), A === 123)
              if (c === 0)
                He(N, r, Y, Y, D, s, p, a, h);
              else
                switch (d === 99 && H(N, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    He(e, Y, Y, n && Ye(Jr(e, Y, Y, 0, 0, o, a, _, o, D = [], p), h), o, h, p, a, n ? D : h);
                    break;
                  default:
                    He(N, Y, Y, Y, [""], h, 0, a, h);
                }
        }
        l = c = v = 0, f = x = 1, _ = N = "", p = i;
        break;
      case 58:
        p = 1 + ae(N), v = y;
      default:
        if (f < 1) {
          if (A == 123)
            --f;
          else if (A == 125 && f++ == 0 && Jn() == 125)
            continue;
        }
        switch (N += er(A), A * f) {
          case 38:
            x = c > 0 ? 1 : (N += "\f", -1);
            break;
          case 44:
            a[l++] = (ae(N) - 1) * x, x = 1;
            break;
          case 64:
            ce() === 45 && (N += Ke(ee())), d = ce(), c = p = ae(_ = N += ro(Ge())), A++;
            break;
          case 45:
            y === 45 && ae(N) == 2 && (f = 0);
        }
    }
  return s;
}
function Jr(e, r, t, n, o, s, i, a, u, l, c) {
  for (var p = o - 1, d = o === 0 ? s : [""], v = Dr(d), y = 0, f = 0, E = 0; y < n; ++y)
    for (var x = 0, A = Me(e, p + 1, p = Yn(f = i[y])), _ = e; x < v; ++x)
      (_ = zt(f > 0 ? d[x] + " " + A : j(A, /&\f/g, d[x]))) && (u[E++] = _);
  return tr(e, r, t, o === 0 ? Ir : a, u, l, c);
}
function no(e, r, t) {
  return tr(e, r, t, jr, er(Xn()), Me(e, 2, -2), 0);
}
function Zr(e, r, t, n) {
  return tr(e, r, t, Mr, Me(e, 0, n), Me(e, n + 1, -1), n);
}
function we(e, r) {
  for (var t = "", n = Dr(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function oo(e, r, t, n) {
  switch (e.type) {
    case Wn:
      if (e.children.length)
        break;
    case Fn:
    case Mr:
      return e.return = e.return || e.value;
    case jr:
      return "";
    case Dt:
      return e.return = e.value + "{" + we(e.children, n) + "}";
    case Ir:
      e.value = e.props.join(",");
  }
  return ae(t = we(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function so(e) {
  var r = Dr(e);
  return function(t, n, o, s) {
    for (var i = "", a = 0; a < r; a++)
      i += e[a](t, n, o, s) || "";
    return i;
  };
}
function io(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var ao = function(r, t, n) {
  for (var o = 0, s = 0; o = s, s = ce(), o === 38 && s === 12 && (t[n] = 1), !De(s); )
    ee();
  return Le(r, Z);
}, co = function(r, t) {
  var n = -1, o = 44;
  do
    switch (De(o)) {
      case 0:
        o === 38 && ce() === 12 && (t[n] = 1), r[n] += ao(Z - 1, t, n);
        break;
      case 2:
        r[n] += Ke(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = ce() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += er(o);
    }
  while (o = ee());
  return r;
}, uo = function(r, t) {
  return Ut(co(Bt(r), t));
}, Qr = /* @__PURE__ */ new WeakMap(), fo = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Qr.get(n)) && !o) {
      Qr.set(r, !0);
      for (var s = [], i = uo(t, s), a = n.props, u = 0, l = 0; u < i.length; u++)
        for (var c = 0; c < a.length; c++, l++)
          r.props[l] = s[u] ? i[u].replace(/&\f/g, a[c]) : a[c] + " " + i[u];
    }
  }
}, lo = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, po = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", mo = function(r) {
  return r.type === "comm" && r.children.indexOf(po) > -1;
}, ho = function(r) {
  return function(t, n, o) {
    if (!(t.type !== "rule" || r.compat)) {
      var s = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (s) {
        for (var i = !!t.parent, a = i ? t.parent.children : (
          // global rule at the root level
          o
        ), u = a.length - 1; u >= 0; u--) {
          var l = a[u];
          if (l.line < t.line)
            break;
          if (l.column < t.column) {
            if (mo(l))
              return;
            break;
          }
        }
        s.forEach(function(c) {
          console.error('The pseudo class "' + c + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + c.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Vt = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, yo = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!Vt(t[n]))
      return !0;
  return !1;
}, et = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, go = function(r, t, n) {
  Vt(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), et(r)) : yo(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), et(r)));
};
function Ft(e, r) {
  switch (Gn(e, r)) {
    case 5103:
      return k + "print-" + e + e;
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
      return k + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + e + Xe + e + X + e + e;
    case 6828:
    case 4268:
      return k + e + X + e + e;
    case 6165:
      return k + e + X + "flex-" + e + e;
    case 5187:
      return k + e + j(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + X + "flex-$1$2") + e;
    case 5443:
      return k + e + X + "flex-item-" + j(e, /flex-|-self/, "") + e;
    case 4675:
      return k + e + X + "flex-line-pack" + j(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return k + e + X + j(e, "shrink", "negative") + e;
    case 5292:
      return k + e + X + j(e, "basis", "preferred-size") + e;
    case 6060:
      return k + "box-" + j(e, "-grow", "") + k + e + X + j(e, "grow", "positive") + e;
    case 4554:
      return k + j(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    case 6187:
      return j(j(j(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return j(e, /(image-set\([^]*)/, k + "$1$`$1");
    case 4968:
      return j(j(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + X + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(e, /(.+)-inline(.+)/, k + "$1$2") + e;
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
        switch (H(e, r + 1)) {
          case 109:
            if (H(e, r + 4) !== 45)
              break;
          case 102:
            return j(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + Xe + (H(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ar(e, "stretch") ? Ft(j(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (H(e, r + 1) !== 115)
        break;
    case 6444:
      switch (H(e, ae(e) - 3 - (~Ar(e, "!important") && 10))) {
        case 107:
          return j(e, ":", ":" + k) + e;
        case 101:
          return j(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + k + (H(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + X + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (H(e, r + 11)) {
        case 114:
          return k + e + X + j(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return k + e + X + j(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return k + e + X + j(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return k + e + X + e + e;
  }
  return e;
}
var vo = function(r, t, n, o) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Mr:
        r.return = Ft(r.value, r.length);
        break;
      case Dt:
        return we([Re(r, {
          value: j(r.value, "@", "@" + k)
        })], o);
      case Ir:
        if (r.length)
          return Hn(r.props, function(s) {
            switch (Kn(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return we([Re(r, {
                  props: [j(s, /:(read-\w+)/, ":" + Xe + "$1")]
                })], o);
              case "::placeholder":
                return we([Re(r, {
                  props: [j(s, /:(plac\w+)/, ":" + k + "input-$1")]
                }), Re(r, {
                  props: [j(s, /:(plac\w+)/, ":" + Xe + "$1")]
                }), Re(r, {
                  props: [j(s, /:(plac\w+)/, X + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, bo = [vo], Wt = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(f) {
      var E = f.getAttribute("data-emotion");
      E.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || bo;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var s = {}, i, a = [];
  i = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(f) {
      for (var E = f.getAttribute("data-emotion").split(" "), x = 1; x < E.length; x++)
        s[E[x]] = !0;
      a.push(f);
    }
  );
  var u, l = [fo, lo];
  process.env.NODE_ENV !== "production" && l.push(ho({
    get compat() {
      return y.compat;
    }
  }), go);
  {
    var c, p = [oo, process.env.NODE_ENV !== "production" ? function(f) {
      f.root || (f.return ? c.insert(f.return) : f.value && f.type !== jr && c.insert(f.value + "{}"));
    } : io(function(f) {
      c.insert(f);
    })], d = so(l.concat(o, p)), v = function(E) {
      return we(to(E), d);
    };
    u = function(E, x, A, _) {
      c = A, process.env.NODE_ENV !== "production" && x.map !== void 0 && (c = {
        insert: function(h) {
          A.insert(h + x.map);
        }
      }), v(E ? E + "{" + x.styles + "}" : x.styles), _ && (y.inserted[x.name] = !0);
    };
  }
  var y = {
    key: t,
    sheet: new Vn({
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
function Eo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Yt(e) {
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
var qe = { exports: {} }, I = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rt;
function xo() {
  if (rt)
    return I;
  rt = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function _(h) {
    if (typeof h == "object" && h !== null) {
      var Y = h.$$typeof;
      switch (Y) {
        case r:
          switch (h = h.type, h) {
            case u:
            case l:
            case n:
            case s:
            case o:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case c:
                case y:
                case v:
                case i:
                  return h;
                default:
                  return Y;
              }
          }
        case t:
          return Y;
      }
    }
  }
  function D(h) {
    return _(h) === l;
  }
  return I.AsyncMode = u, I.ConcurrentMode = l, I.ContextConsumer = a, I.ContextProvider = i, I.Element = r, I.ForwardRef = c, I.Fragment = n, I.Lazy = y, I.Memo = v, I.Portal = t, I.Profiler = s, I.StrictMode = o, I.Suspense = p, I.isAsyncMode = function(h) {
    return D(h) || _(h) === u;
  }, I.isConcurrentMode = D, I.isContextConsumer = function(h) {
    return _(h) === a;
  }, I.isContextProvider = function(h) {
    return _(h) === i;
  }, I.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === r;
  }, I.isForwardRef = function(h) {
    return _(h) === c;
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
    return typeof h == "string" || typeof h == "function" || h === n || h === l || h === s || h === o || h === p || h === d || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === v || h.$$typeof === i || h.$$typeof === a || h.$$typeof === c || h.$$typeof === E || h.$$typeof === x || h.$$typeof === A || h.$$typeof === f);
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
var tt;
function Oo() {
  return tt || (tt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function _(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === l || g === s || g === o || g === p || g === d || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === v || g.$$typeof === i || g.$$typeof === a || g.$$typeof === c || g.$$typeof === E || g.$$typeof === x || g.$$typeof === A || g.$$typeof === f);
    }
    function D(g) {
      if (typeof g == "object" && g !== null) {
        var ie = g.$$typeof;
        switch (ie) {
          case r:
            var We = g.type;
            switch (We) {
              case u:
              case l:
              case n:
              case s:
              case o:
              case p:
                return We;
              default:
                var Xr = We && We.$$typeof;
                switch (Xr) {
                  case a:
                  case c:
                  case y:
                  case v:
                  case i:
                    return Xr;
                  default:
                    return ie;
                }
            }
          case t:
            return ie;
        }
      }
    }
    var h = u, Y = l, N = a, Pe = i, le = r, de = c, Ve = n, hr = y, yr = v, ve = t, gr = s, se = o, he = p, Fe = !1;
    function vr(g) {
      return Fe || (Fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m(g) || D(g) === u;
    }
    function m(g) {
      return D(g) === l;
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
      return D(g) === c;
    }
    function P(g) {
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
    function J(g) {
      return D(g) === p;
    }
    M.AsyncMode = h, M.ConcurrentMode = Y, M.ContextConsumer = N, M.ContextProvider = Pe, M.Element = le, M.ForwardRef = de, M.Fragment = Ve, M.Lazy = hr, M.Memo = yr, M.Portal = ve, M.Profiler = gr, M.StrictMode = se, M.Suspense = he, M.isAsyncMode = vr, M.isConcurrentMode = m, M.isContextConsumer = b, M.isContextProvider = C, M.isElement = S, M.isForwardRef = O, M.isFragment = P, M.isLazy = w, M.isMemo = T, M.isPortal = $, M.isProfiler = z, M.isStrictMode = R, M.isSuspense = J, M.isValidElementType = _, M.typeOf = D;
  }()), M;
}
var nt;
function zr() {
  return nt || (nt = 1, process.env.NODE_ENV === "production" ? qe.exports = xo() : qe.exports = Oo()), qe.exports;
}
var qt = zr(), _o = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, wo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Gt = {};
Gt[qt.ForwardRef] = _o;
Gt[qt.Memo] = wo;
var So = !0;
function Lr(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
var nr = function(r, t, n) {
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
  So === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, or = function(r, t, n) {
  nr(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var s = t;
    do
      r.insert(t === s ? "." + o : "", s, r.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function To(e) {
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
var Co = {
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
}, ot = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Ao = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", No = /[A-Z]|^ms/g, Kt = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Br = function(r) {
  return r.charCodeAt(1) === 45;
}, st = function(r) {
  return r != null && typeof r != "boolean";
}, br = /* @__PURE__ */ Mt(function(e) {
  return Br(e) ? e : e.replace(No, "-$&").toLowerCase();
}), Je = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Kt, function(n, o, s) {
          return oe = {
            name: o,
            styles: s,
            next: oe
          }, o;
        });
  }
  return Co[r] !== 1 && !Br(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var Po = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, $o = ["normal", "none", "initial", "inherit", "unset"], Ro = Je, ko = /^-ms-/, jo = /-(.)/g, it = {};
  Je = function(r, t) {
    if (r === "content" && (typeof t != "string" || $o.indexOf(t) === -1 && !Po.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = Ro(r, t);
    return n !== "" && !Br(r) && r.indexOf("-") !== -1 && it[r] === void 0 && (it[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(ko, "ms-").replace(jo, function(o, s) {
      return s.toUpperCase();
    }) + "?")), n;
  };
}
var Ht = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ze(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Ht);
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
      return Io(e, r, t);
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
        var a = [], u = t.replace(Kt, function(c, p, d) {
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
  var l = r[t];
  return l !== void 0 ? l : t;
}
function Io(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += ze(e, r, t[o]) + ";";
  else
    for (var s in t) {
      var i = t[s];
      if (typeof i != "object")
        r != null && r[i] !== void 0 ? n += s + "{" + r[i] + "}" : st(i) && (n += br(s) + ":" + Je(s, i) + ";");
      else {
        if (s === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Ht);
        if (Array.isArray(i) && typeof i[0] == "string" && (r == null || r[i[0]] === void 0))
          for (var a = 0; a < i.length; a++)
            st(i[a]) && (n += br(s) + ":" + Je(s, i[a]) + ";");
        else {
          var u = ze(e, r, i);
          switch (s) {
            case "animation":
            case "animationName": {
              n += br(s) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && s === "undefined" && console.error(Ao), n += s + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var at = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Xt;
process.env.NODE_ENV !== "production" && (Xt = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var oe, Ce = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var o = !0, s = "";
  oe = void 0;
  var i = r[0];
  i == null || i.raw === void 0 ? (o = !1, s += ze(n, t, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(ot), s += i[0]);
  for (var a = 1; a < r.length; a++)
    s += ze(n, t, r[a]), o && (process.env.NODE_ENV !== "production" && i[a] === void 0 && console.error(ot), s += i[a]);
  var u;
  process.env.NODE_ENV !== "production" && (s = s.replace(Xt, function(d) {
    return u = d, "";
  })), at.lastIndex = 0;
  for (var l = "", c; (c = at.exec(s)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    c[1];
  var p = To(s) + l;
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
}, Mo = function(r) {
  return r();
}, Jt = V["useInsertionEffect"] ? V["useInsertionEffect"] : !1, Ur = Jt || Mo, ct = Jt || V.useLayoutEffect, Do = {}.hasOwnProperty, Vr = /* @__PURE__ */ V.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Wt({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Vr.displayName = "EmotionCacheContext");
var zo = Vr.Provider, sr = function(r) {
  return /* @__PURE__ */ Sn(function(t, n) {
    var o = Tn(Vr);
    return r(t, o, n);
  });
}, ge = /* @__PURE__ */ V.createContext({});
process.env.NODE_ENV !== "production" && (ge.displayName = "EmotionThemeContext");
var ut = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ft = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Lo = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return nr(t, n, o), Ur(function() {
    return or(t, n, o);
  }), null;
}, Bo = /* @__PURE__ */ sr(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var o = e[ut], s = [n], i = "";
  typeof e.className == "string" ? i = Lr(r.registered, s, e.className) : e.className != null && (i = e.className + " ");
  var a = Ce(s, void 0, V.useContext(ge));
  if (process.env.NODE_ENV !== "production" && a.name.indexOf("-") === -1) {
    var u = e[ft];
    u && (a = Ce([a, "label:" + u + ";"]));
  }
  i += r.key + "-" + a.name;
  var l = {};
  for (var c in e)
    Do.call(e, c) && c !== "css" && c !== ut && (process.env.NODE_ENV === "production" || c !== ft) && (l[c] = e[c]);
  return l.ref = t, l.className = i, /* @__PURE__ */ V.createElement(V.Fragment, null, /* @__PURE__ */ V.createElement(Lo, {
    cache: r,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ V.createElement(o, l));
});
process.env.NODE_ENV !== "production" && (Bo.displayName = "EmotionCssPropInternal");
var Er = { exports: {} }, lt;
function Uo() {
  return lt || (lt = 1, function(e) {
    function r() {
      return e.exports = r = Object.assign ? Object.assign.bind() : function(t) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var s in o)
            Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s]);
        }
        return t;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, r.apply(this, arguments);
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Er)), Er.exports;
}
Uo();
var Vo = {
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
}, dt = !1, Zt = /* @__PURE__ */ sr(function(e, r) {
  process.env.NODE_ENV !== "production" && !dt && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), dt = !0);
  var t = e.styles, n = Ce([t], void 0, V.useContext(ge)), o = V.useRef();
  return ct(function() {
    var s = r.key + "-global", i = new r.sheet.constructor({
      key: s,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), a = !1, u = document.querySelector('style[data-emotion="' + s + " " + n.name + '"]');
    return r.sheet.tags.length && (i.before = r.sheet.tags[0]), u !== null && (a = !0, u.setAttribute("data-emotion", s), i.hydrate([u])), o.current = [i, a], function() {
      i.flush();
    };
  }, [r]), ct(function() {
    var s = o.current, i = s[0], a = s[1];
    if (a) {
      s[1] = !1;
      return;
    }
    if (n.next !== void 0 && or(r, n.next, !0), i.tags.length) {
      var u = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = u, i.flush();
    }
    r.insert("", n, i, !1);
  }, [r, n.name]), null;
});
process.env.NODE_ENV !== "production" && (Zt.displayName = "EmotionGlobal");
function Qt() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return Ce(r);
}
var Fo = function() {
  var r = Qt.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Wo = function e(r) {
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
function Yo(e, r, t) {
  var n = [], o = Lr(e, n, t);
  return n.length < 2 ? t : o + r(n);
}
var qo = function(r) {
  var t = r.cache, n = r.serializedArr;
  return Ur(function() {
    for (var o = 0; o < n.length; o++)
      or(t, n[o], !1);
  }), null;
}, Go = /* @__PURE__ */ sr(function(e, r) {
  var t = !1, n = [], o = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var l = arguments.length, c = new Array(l), p = 0; p < l; p++)
      c[p] = arguments[p];
    var d = Ce(c, r.registered);
    return n.push(d), nr(r, d, !1), r.key + "-" + d.name;
  }, s = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var l = arguments.length, c = new Array(l), p = 0; p < l; p++)
      c[p] = arguments[p];
    return Yo(r.registered, o, Wo(c));
  }, i = {
    css: o,
    cx: s,
    theme: V.useContext(ge)
  }, a = e.children(i);
  return t = !0, /* @__PURE__ */ V.createElement(V.Fragment, null, /* @__PURE__ */ V.createElement(qo, {
    cache: r,
    serializedArr: n
  }), a);
});
process.env.NODE_ENV !== "production" && (Go.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var pt = !0, Ko = typeof jest < "u" || typeof vi < "u";
  if (pt && !Ko) {
    var mt = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : pt ? window : global
    ), ht = "__EMOTION_REACT_" + Vo.version.split(".")[0] + "__";
    mt[ht] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), mt[ht] = !0;
  }
}
var Ho = Ln, Xo = function(r) {
  return r !== "theme";
}, yt = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Ho : Xo;
}, gt = function(r, t, n) {
  var o;
  if (t) {
    var s = t.shouldForwardProp;
    o = r.__emotion_forwardProp && s ? function(i) {
      return r.__emotion_forwardProp(i) && s(i);
    } : s;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, vt = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Jo = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return nr(t, n, o), Ur(function() {
    return or(t, n, o);
  }), null;
}, Zo = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, s, i;
  t !== void 0 && (s = t.label, i = t.target);
  var a = gt(r, t, n), u = a || yt(o), l = !u("as");
  return function() {
    var c = arguments, p = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (s !== void 0 && p.push("label:" + s + ";"), c[0] == null || c[0].raw === void 0)
      p.push.apply(p, c);
    else {
      process.env.NODE_ENV !== "production" && c[0][0] === void 0 && console.error(vt), p.push(c[0][0]);
      for (var d = c.length, v = 1; v < d; v++)
        process.env.NODE_ENV !== "production" && c[0][v] === void 0 && console.error(vt), p.push(c[v], c[0][v]);
    }
    var y = sr(function(f, E, x) {
      var A = l && f.as || o, _ = "", D = [], h = f;
      if (f.theme == null) {
        h = {};
        for (var Y in f)
          h[Y] = f[Y];
        h.theme = V.useContext(ge);
      }
      typeof f.className == "string" ? _ = Lr(E.registered, D, f.className) : f.className != null && (_ = f.className + " ");
      var N = Ce(p.concat(D), E.registered, h);
      _ += E.key + "-" + N.name, i !== void 0 && (_ += " " + i);
      var Pe = l && a === void 0 ? yt(A) : u, le = {};
      for (var de in f)
        l && de === "as" || // $FlowFixMe
        Pe(de) && (le[de] = f[de]);
      return le.className = _, le.ref = x, /* @__PURE__ */ V.createElement(V.Fragment, null, /* @__PURE__ */ V.createElement(Jo, {
        cache: E,
        serialized: N,
        isStringTag: typeof A == "string"
      }), /* @__PURE__ */ V.createElement(A, le));
    });
    return y.displayName = s !== void 0 ? s : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = r.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = p, y.__emotion_forwardProp = a, Object.defineProperty(y, "toString", {
      value: function() {
        return i === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), y.withComponent = function(f, E) {
      return e(f, B({}, t, E, {
        shouldForwardProp: gt(y, E, !0)
      })).apply(void 0, p);
    }, y;
  };
}, Qo = [
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
], Pr = Zo.bind();
Qo.forEach(function(e) {
  Pr[e] = Pr(e);
});
var $r = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xr, bt;
function es() {
  if (bt)
    return xr;
  bt = 1;
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
      var u = Object.getOwnPropertyNames(i).map(function(c) {
        return i[c];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        l[c] = c;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xr = o() ? Object.assign : function(s, i) {
    for (var a, u = n(s), l, c = 1; c < arguments.length; c++) {
      a = Object(arguments[c]);
      for (var p in a)
        r.call(a, p) && (u[p] = a[p]);
      if (e) {
        l = e(a);
        for (var d = 0; d < l.length; d++)
          t.call(a, l[d]) && (u[l[d]] = a[l[d]]);
      }
    }
    return u;
  }, xr;
}
var Or, Et;
function Fr() {
  if (Et)
    return Or;
  Et = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Or = e, Or;
}
var _r, xt;
function en() {
  return xt || (xt = 1, _r = Function.call.bind(Object.prototype.hasOwnProperty)), _r;
}
var wr, Ot;
function rs() {
  if (Ot)
    return wr;
  Ot = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Fr(), t = {}, n = en();
    e = function(s) {
      var i = "Warning: " + s;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(s, i, a, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in s)
        if (n(s, c)) {
          var p;
          try {
            if (typeof s[c] != "function") {
              var d = Error(
                (u || "React class") + ": " + a + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            p = s[c](i, c, u, a, null, r);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (u || "React class") + ": type specification of " + a + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in t)) {
            t[p.message] = !0;
            var v = l ? l() : "";
            e(
              "Failed " + a + " type: " + p.message + (v ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, wr = o, wr;
}
var Sr, _t;
function ts() {
  if (_t)
    return Sr;
  _t = 1;
  var e = zr(), r = es(), t = Fr(), n = en(), o = rs(), s = function() {
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
  return Sr = function(a, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function p(m) {
      var b = m && (l && m[l] || m[c]);
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
      any: A(),
      arrayOf: _,
      element: D(),
      elementType: h(),
      instanceOf: Y,
      node: de(),
      objectOf: Pe,
      oneOf: N,
      oneOfType: le,
      shape: hr,
      exact: yr
    };
    function y(m, b) {
      return m === b ? m !== 0 || 1 / m === 1 / b : m !== m && b !== b;
    }
    function f(m, b) {
      this.message = m, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function E(m) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, C = 0;
      function S(P, w, T, $, z, R, J) {
        if ($ = $ || d, R = R || T, J !== t) {
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
        return w[T] == null ? P ? w[T] === null ? new f("The " + z + " `" + R + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new f("The " + z + " `" + R + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : m(w, T, $, z, R);
      }
      var O = S.bind(null, !1);
      return O.isRequired = S.bind(null, !0), O;
    }
    function x(m) {
      function b(C, S, O, P, w, T) {
        var $ = C[S], z = se($);
        if (z !== m) {
          var R = he($);
          return new f(
            "Invalid " + P + " `" + w + "` of type " + ("`" + R + "` supplied to `" + O + "`, expected ") + ("`" + m + "`."),
            { expectedType: m }
          );
        }
        return null;
      }
      return E(b);
    }
    function A() {
      return E(i);
    }
    function _(m) {
      function b(C, S, O, P, w) {
        if (typeof m != "function")
          return new f("Property `" + w + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var T = C[S];
        if (!Array.isArray(T)) {
          var $ = se(T);
          return new f("Invalid " + P + " `" + w + "` of type " + ("`" + $ + "` supplied to `" + O + "`, expected an array."));
        }
        for (var z = 0; z < T.length; z++) {
          var R = m(T, z, O, P, w + "[" + z + "]", t);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return E(b);
    }
    function D() {
      function m(b, C, S, O, P) {
        var w = b[C];
        if (!a(w)) {
          var T = se(w);
          return new f("Invalid " + O + " `" + P + "` of type " + ("`" + T + "` supplied to `" + S + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(m);
    }
    function h() {
      function m(b, C, S, O, P) {
        var w = b[C];
        if (!e.isValidElementType(w)) {
          var T = se(w);
          return new f("Invalid " + O + " `" + P + "` of type " + ("`" + T + "` supplied to `" + S + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(m);
    }
    function Y(m) {
      function b(C, S, O, P, w) {
        if (!(C[S] instanceof m)) {
          var T = m.name || d, $ = vr(C[S]);
          return new f("Invalid " + P + " `" + w + "` of type " + ("`" + $ + "` supplied to `" + O + "`, expected ") + ("instance of `" + T + "`."));
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
      function b(C, S, O, P, w) {
        for (var T = C[S], $ = 0; $ < m.length; $++)
          if (y(T, m[$]))
            return null;
        var z = JSON.stringify(m, function(J, g) {
          var ie = he(g);
          return ie === "symbol" ? String(g) : g;
        });
        return new f("Invalid " + P + " `" + w + "` of value `" + String(T) + "` " + ("supplied to `" + O + "`, expected one of " + z + "."));
      }
      return E(b);
    }
    function Pe(m) {
      function b(C, S, O, P, w) {
        if (typeof m != "function")
          return new f("Property `" + w + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var T = C[S], $ = se(T);
        if ($ !== "object")
          return new f("Invalid " + P + " `" + w + "` of type " + ("`" + $ + "` supplied to `" + O + "`, expected an object."));
        for (var z in T)
          if (n(T, z)) {
            var R = m(T, z, O, P, w + "." + z, t);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return E(b);
    }
    function le(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var b = 0; b < m.length; b++) {
        var C = m[b];
        if (typeof C != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Fe(C) + " at index " + b + "."
          ), i;
      }
      function S(O, P, w, T, $) {
        for (var z = [], R = 0; R < m.length; R++) {
          var J = m[R], g = J(O, P, w, T, $, t);
          if (g == null)
            return null;
          g.data && n(g.data, "expectedType") && z.push(g.data.expectedType);
        }
        var ie = z.length > 0 ? ", expected one of type [" + z.join(", ") + "]" : "";
        return new f("Invalid " + T + " `" + $ + "` supplied to " + ("`" + w + "`" + ie + "."));
      }
      return E(S);
    }
    function de() {
      function m(b, C, S, O, P) {
        return ve(b[C]) ? null : new f("Invalid " + O + " `" + P + "` supplied to " + ("`" + S + "`, expected a ReactNode."));
      }
      return E(m);
    }
    function Ve(m, b, C, S, O) {
      return new f(
        (m || "React class") + ": " + b + " type `" + C + "." + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function hr(m) {
      function b(C, S, O, P, w) {
        var T = C[S], $ = se(T);
        if ($ !== "object")
          return new f("Invalid " + P + " `" + w + "` of type `" + $ + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var z in m) {
          var R = m[z];
          if (typeof R != "function")
            return Ve(O, P, w, z, he(R));
          var J = R(T, z, O, P, w + "." + z, t);
          if (J)
            return J;
        }
        return null;
      }
      return E(b);
    }
    function yr(m) {
      function b(C, S, O, P, w) {
        var T = C[S], $ = se(T);
        if ($ !== "object")
          return new f("Invalid " + P + " `" + w + "` of type `" + $ + "` " + ("supplied to `" + O + "`, expected `object`."));
        var z = r({}, C[S], m);
        for (var R in z) {
          var J = m[R];
          if (n(m, R) && typeof J != "function")
            return Ve(O, P, w, R, he(J));
          if (!J)
            return new f(
              "Invalid " + P + " `" + w + "` key `" + R + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(C[S], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(m), null, "  ")
            );
          var g = J(T, R, O, P, w + "." + R, t);
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
    function gr(m, b) {
      return m === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function se(m) {
      var b = typeof m;
      return Array.isArray(m) ? "array" : m instanceof RegExp ? "object" : gr(b, m) ? "symbol" : b;
    }
    function he(m) {
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
    function Fe(m) {
      var b = he(m);
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
    function vr(m) {
      return !m.constructor || !m.constructor.name ? d : m.constructor.name;
    }
    return v.checkPropTypes = o, v.resetWarningCache = o.resetWarningCache, v.PropTypes = v, v;
  }, Sr;
}
var Tr, wt;
function ns() {
  if (wt)
    return Tr;
  wt = 1;
  var e = Fr();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Tr = function() {
    function n(i, a, u, l, c, p) {
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
  }, Tr;
}
if (process.env.NODE_ENV !== "production") {
  var os = zr(), ss = !0;
  $r.exports = ts()(os.isElement, ss);
} else
  $r.exports = ns()();
var is = $r.exports;
const U = /* @__PURE__ */ Eo(is);
let Rr;
typeof document == "object" && (Rr = Wt({
  key: "css",
  prepend: !0
}));
function rn(e) {
  const {
    injectFirst: r,
    children: t
  } = e;
  return r && Rr ? /* @__PURE__ */ kr(zo, {
    value: Rr,
    children: t
  }) : t;
}
process.env.NODE_ENV !== "production" && (rn.propTypes = {
  /**
   * Your component tree.
   */
  children: U.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: U.bool
});
function as(e) {
  return e == null || Object.keys(e).length === 0;
}
function tn(e) {
  const {
    styles: r,
    defaultTheme: t = {}
  } = e;
  return /* @__PURE__ */ kr(Zt, {
    styles: typeof r == "function" ? (o) => r(as(o) ? t : o) : r
  });
}
process.env.NODE_ENV !== "production" && (tn.propTypes = {
  defaultTheme: U.object,
  styles: U.oneOfType([U.array, U.string, U.object, U.func])
});
/**
 * @mui/styled-engine v5.15.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function nn(e, r) {
  const t = Pr(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((s) => s === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
const cs = (e, r) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}, ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: tn,
  StyledEngineProvider: rn,
  ThemeContext: ge,
  css: Qt,
  default: nn,
  internal_processStyles: cs,
  keyframes: Fo
}, Symbol.toStringTag, { value: "Module" }));
function ye(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function on(e) {
  if (!ye(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = on(e[t]);
  }), r;
}
function ue(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? B({}, e) : e;
  return ye(e) && ye(r) && Object.keys(r).forEach((o) => {
    o !== "__proto__" && (ye(r[o]) && o in e && ye(e[o]) ? n[o] = ue(e[o], r[o], t) : t.clone ? n[o] = ye(r[o]) ? on(r[o]) : r[o] : n[o] = r[o]);
  }), n;
}
const us = ["values", "unit", "step"], fs = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => B({}, t, {
    [n.key]: n.val
  }), {});
};
function ls(e) {
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
  } = e, o = pe(e, us), s = fs(r), i = Object.keys(s);
  function a(d) {
    return `@media (min-width:${typeof r[d] == "number" ? r[d] : d}${t})`;
  }
  function u(d) {
    return `@media (max-width:${(typeof r[d] == "number" ? r[d] : d) - n / 100}${t})`;
  }
  function l(d, v) {
    const y = i.indexOf(v);
    return `@media (min-width:${typeof r[d] == "number" ? r[d] : d}${t}) and (max-width:${(y !== -1 && typeof r[i[y]] == "number" ? r[i[y]] : v) - n / 100}${t})`;
  }
  function c(d) {
    return i.indexOf(d) + 1 < i.length ? l(d, i[i.indexOf(d) + 1]) : a(d);
  }
  function p(d) {
    const v = i.indexOf(d);
    return v === 0 ? a(i[1]) : v === i.length - 1 ? u(i[v]) : l(d, i[i.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return B({
    keys: i,
    values: s,
    up: a,
    down: u,
    between: l,
    only: c,
    not: p,
    unit: t
  }, o);
}
const ds = {
  borderRadius: 4
}, ps = ds, ms = process.env.NODE_ENV !== "production" ? U.oneOfType([U.number, U.string, U.object, U.array]) : {}, me = ms;
function ke(e, r) {
  return r ? ue(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Wr = {
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
}, St = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Wr[e]}px)`
};
function fe(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const s = n.breakpoints || St;
    return r.reduce((i, a, u) => (i[s.up(s.keys[u])] = t(r[u]), i), {});
  }
  if (typeof r == "object") {
    const s = n.breakpoints || St;
    return Object.keys(r).reduce((i, a) => {
      if (Object.keys(s.values || Wr).indexOf(a) !== -1) {
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
function sn(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const s = e.up(o);
    return n[s] = {}, n;
  }, {})) || {};
}
function an(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function ya(e, ...r) {
  const t = sn(e), n = [t, ...r].reduce((o, s) => ue(o, s), {});
  return an(Object.keys(t), n);
}
function hs(e, r) {
  if (typeof e != "object")
    return {};
  const t = {}, n = Object.keys(r);
  return Array.isArray(e) ? n.forEach((o, s) => {
    s < e.length && (t[o] = !0);
  }) : n.forEach((o) => {
    e[o] != null && (t[o] = !0);
  }), t;
}
function ga({
  values: e,
  breakpoints: r,
  base: t
}) {
  const n = t || hs(e, r), o = Object.keys(n);
  if (o.length === 0)
    return e;
  let s;
  return o.reduce((i, a, u) => (Array.isArray(e) ? (i[a] = e[u] != null ? e[u] : e[s], s = u) : typeof e == "object" ? (i[a] = e[a] != null ? e[a] : e[s], s = a) : i[a] = e, i), {});
}
function cn(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ie(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ir(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Ze(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = ir(e, t) || n, r && (o = r(o, n, e)), o;
}
function q(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, s = (i) => {
    if (i[r] == null)
      return null;
    const a = i[r], u = i.theme, l = ir(u, n) || {};
    return fe(i, a, (p) => {
      let d = Ze(l, o, p);
      return p === d && typeof p == "string" && (d = Ze(l, o, `${r}${p === "default" ? "" : cn(p)}`, p)), t === !1 ? d : {
        [t]: d
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: me
  } : {}, s.filterProps = [r], s;
}
function ys(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const gs = {
  m: "margin",
  p: "padding"
}, vs = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Tt = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, bs = ys((e) => {
  if (e.length > 2)
    if (Tt[e])
      e = Tt[e];
    else
      return [e];
  const [r, t] = e.split(""), n = gs[r], o = vs[t] || "";
  return Array.isArray(o) ? o.map((s) => n + s) : [n + o];
}), ar = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], cr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Es = [...ar, ...cr];
function Be(e, r, t, n) {
  var o;
  const s = (o = ir(e, r, !1)) != null ? o : t;
  return typeof s == "number" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), s * i) : Array.isArray(s) ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && (Number.isInteger(i) ? i > s.length - 1 && console.error([`MUI: The value provided (${i}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${i} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), s[i]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function un(e) {
  return Be(e, "spacing", 8, "spacing");
}
function Ue(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function xs(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = Ue(r, t), n), {});
}
function Os(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const o = bs(t), s = xs(o, n), i = e[t];
  return fe(e, i, s);
}
function fn(e, r) {
  const t = un(e.theme);
  return Object.keys(e).map((n) => Os(e, r, n, t)).reduce(ke, {});
}
function F(e) {
  return fn(e, ar);
}
F.propTypes = process.env.NODE_ENV !== "production" ? ar.reduce((e, r) => (e[r] = me, e), {}) : {};
F.filterProps = ar;
function W(e) {
  return fn(e, cr);
}
W.propTypes = process.env.NODE_ENV !== "production" ? cr.reduce((e, r) => (e[r] = me, e), {}) : {};
W.filterProps = cr;
process.env.NODE_ENV !== "production" && Es.reduce((e, r) => (e[r] = me, e), {});
function _s(e = 8) {
  if (e.mui)
    return e;
  const r = un({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((s) => {
    const i = r(s);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" "));
  return t.mui = !0, t;
}
function ur(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((s) => {
    n[s] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, s) => r[s] ? ke(o, r[s](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function re(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ne(e, r) {
  return q({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const ws = ne("border", re), Ss = ne("borderTop", re), Ts = ne("borderRight", re), Cs = ne("borderBottom", re), As = ne("borderLeft", re), Ns = ne("borderColor"), Ps = ne("borderTopColor"), $s = ne("borderRightColor"), Rs = ne("borderBottomColor"), ks = ne("borderLeftColor"), js = ne("outline", re), Is = ne("outlineColor"), fr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = Be(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: Ue(r, n)
    });
    return fe(e, e.borderRadius, t);
  }
  return null;
};
fr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: me
} : {};
fr.filterProps = ["borderRadius"];
ur(ws, Ss, Ts, Cs, As, Ns, Ps, $s, Rs, ks, fr, js, Is);
const lr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = Be(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: Ue(r, n)
    });
    return fe(e, e.gap, t);
  }
  return null;
};
lr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: me
} : {};
lr.filterProps = ["gap"];
const dr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = Be(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: Ue(r, n)
    });
    return fe(e, e.columnGap, t);
  }
  return null;
};
dr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: me
} : {};
dr.filterProps = ["columnGap"];
const pr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = Be(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: Ue(r, n)
    });
    return fe(e, e.rowGap, t);
  }
  return null;
};
pr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: me
} : {};
pr.filterProps = ["rowGap"];
const Ms = q({
  prop: "gridColumn"
}), Ds = q({
  prop: "gridRow"
}), zs = q({
  prop: "gridAutoFlow"
}), Ls = q({
  prop: "gridAutoColumns"
}), Bs = q({
  prop: "gridAutoRows"
}), Us = q({
  prop: "gridTemplateColumns"
}), Vs = q({
  prop: "gridTemplateRows"
}), Fs = q({
  prop: "gridTemplateAreas"
}), Ws = q({
  prop: "gridArea"
});
ur(lr, dr, pr, Ms, Ds, zs, Ls, Bs, Us, Vs, Fs, Ws);
function Se(e, r) {
  return r === "grey" ? r : e;
}
const Ys = q({
  prop: "color",
  themeKey: "palette",
  transform: Se
}), qs = q({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Se
}), Gs = q({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Se
});
ur(Ys, qs, Gs);
function Q(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ks = q({
  prop: "width",
  transform: Q
}), Yr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, o;
      const s = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || Wr[t];
      return s ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: Q(t)
      };
    };
    return fe(e, e.maxWidth, r);
  }
  return null;
};
Yr.filterProps = ["maxWidth"];
const Hs = q({
  prop: "minWidth",
  transform: Q
}), Xs = q({
  prop: "height",
  transform: Q
}), Js = q({
  prop: "maxHeight",
  transform: Q
}), Zs = q({
  prop: "minHeight",
  transform: Q
});
q({
  prop: "size",
  cssProperty: "width",
  transform: Q
});
q({
  prop: "size",
  cssProperty: "height",
  transform: Q
});
const Qs = q({
  prop: "boxSizing"
});
ur(Ks, Yr, Hs, Xs, Js, Zs, Qs);
const ei = {
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
    style: fr
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
    style: W
  },
  pt: {
    style: W
  },
  pr: {
    style: W
  },
  pb: {
    style: W
  },
  pl: {
    style: W
  },
  px: {
    style: W
  },
  py: {
    style: W
  },
  padding: {
    style: W
  },
  paddingTop: {
    style: W
  },
  paddingRight: {
    style: W
  },
  paddingBottom: {
    style: W
  },
  paddingLeft: {
    style: W
  },
  paddingX: {
    style: W
  },
  paddingY: {
    style: W
  },
  paddingInline: {
    style: W
  },
  paddingInlineStart: {
    style: W
  },
  paddingInlineEnd: {
    style: W
  },
  paddingBlock: {
    style: W
  },
  paddingBlockStart: {
    style: W
  },
  paddingBlockEnd: {
    style: W
  },
  m: {
    style: F
  },
  mt: {
    style: F
  },
  mr: {
    style: F
  },
  mb: {
    style: F
  },
  ml: {
    style: F
  },
  mx: {
    style: F
  },
  my: {
    style: F
  },
  margin: {
    style: F
  },
  marginTop: {
    style: F
  },
  marginRight: {
    style: F
  },
  marginBottom: {
    style: F
  },
  marginLeft: {
    style: F
  },
  marginX: {
    style: F
  },
  marginY: {
    style: F
  },
  marginInline: {
    style: F
  },
  marginInlineStart: {
    style: F
  },
  marginInlineEnd: {
    style: F
  },
  marginBlock: {
    style: F
  },
  marginBlockStart: {
    style: F
  },
  marginBlockEnd: {
    style: F
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
    style: pr
  },
  columnGap: {
    style: dr
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
    style: Yr
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
}, mr = ei;
function ri(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function ti(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function ni() {
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
      themeKey: l,
      transform: c,
      style: p
    } = a;
    if (n == null)
      return null;
    if (l === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const d = ir(o, l) || {};
    return p ? p(i) : fe(i, n, (y) => {
      let f = Ze(d, c, y);
      return y === f && typeof y == "string" && (f = Ze(d, c, `${t}${y === "default" ? "" : cn(y)}`, y)), u === !1 ? f : {
        [u]: f
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
    const i = (n = s.unstable_sxConfig) != null ? n : mr;
    function a(u) {
      let l = u;
      if (typeof u == "function")
        l = u(s);
      else if (typeof u != "object")
        return u;
      if (!l)
        return null;
      const c = sn(s.breakpoints), p = Object.keys(c);
      let d = c;
      return Object.keys(l).forEach((v) => {
        const y = ti(l[v], s);
        if (y != null)
          if (typeof y == "object")
            if (i[v])
              d = ke(d, e(v, y, s, i));
            else {
              const f = fe({
                theme: s
              }, y, (E) => ({
                [v]: E
              }));
              ri(f, y) ? d[v] = r({
                sx: y,
                theme: s
              }) : d = ke(d, f);
            }
          else
            d = ke(d, e(v, y, s, i));
      }), an(p, d);
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return r;
}
const ln = ni();
ln.filterProps = ["sx"];
const qr = ln;
function oi(e, r) {
  const t = this;
  return t.vars && typeof t.getColorSchemeSelector == "function" ? {
    [t.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: r
  } : t.palette.mode === e ? r : {};
}
const si = ["breakpoints", "palette", "spacing", "shape"];
function dn(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: s = {}
  } = e, i = pe(e, si), a = ls(t), u = _s(o);
  let l = ue({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: B({
      mode: "light"
    }, n),
    spacing: u,
    shape: B({}, ps, s)
  }, i);
  return l.applyStyles = oi, l = r.reduce((c, p) => ue(c, p), l), l.unstable_sxConfig = B({}, mr, i == null ? void 0 : i.unstable_sxConfig), l.unstable_sx = function(p) {
    return qr({
      sx: p,
      theme: this
    });
  }, l;
}
function ii(e) {
  return Object.keys(e).length === 0;
}
function ai(e = null) {
  const r = V.useContext(ge);
  return !r || ii(r) ? e : r;
}
const ci = dn();
function ui(e = ci) {
  return ai(e);
}
const fi = ["sx"], li = (e) => {
  var r, t;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (r = e == null || (t = e.theme) == null ? void 0 : t.unstable_sxConfig) != null ? r : mr;
  return Object.keys(e).forEach((s) => {
    o[s] ? n.systemProps[s] = e[s] : n.otherProps[s] = e[s];
  }), n;
};
function di(e) {
  const {
    sx: r
  } = e, t = pe(e, fi), {
    systemProps: n,
    otherProps: o
  } = li(t);
  let s;
  return Array.isArray(r) ? s = [n, ...r] : typeof r == "function" ? s = (...i) => {
    const a = r(...i);
    return ye(a) ? B({}, n, a) : n;
  } : s = B({}, n, r), B({}, o, {
    sx: s
  });
}
const Ct = (e) => e, pi = () => {
  let e = Ct;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = Ct;
    }
  };
}, mi = pi(), pn = mi;
function mn(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (r = 0; r < o; r++)
        e[r] && (t = mn(e[r])) && (n && (n += " "), n += t);
    } else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function hi() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++)
    (e = arguments[t]) && (r = mn(e)) && (n && (n += " "), n += r);
  return n;
}
const yi = ["className", "component"];
function gi(e = {}) {
  const {
    themeId: r,
    defaultTheme: t,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, s = nn("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(qr);
  return /* @__PURE__ */ V.forwardRef(function(u, l) {
    const c = ui(t), p = di(u), {
      className: d,
      component: v = "div"
    } = p, y = pe(p, yi);
    return /* @__PURE__ */ kr(s, B({
      as: v,
      ref: l,
      className: hi(d, o ? o(n) : n),
      theme: r && c[r] || c
    }, y));
  });
}
const bi = {
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
function hn(e, r, t = "Mui") {
  const n = bi[r];
  return n ? `${t}-${n}` : `${pn.generate(e)}-${r}`;
}
function Ei(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = hn(e, o, t);
  }), n;
}
function xi(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
const Oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xi
}, Symbol.toStringTag, { value: "Module" }));
function _i(e, r) {
  return B({
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
var G = {}, yn = { exports: {} };
(function(e) {
  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})(yn);
var wi = yn.exports;
const Si = /* @__PURE__ */ Yt(Mn), Ti = /* @__PURE__ */ Yt(Oi);
var gn = wi;
Object.defineProperty(G, "__esModule", {
  value: !0
});
var va = G.alpha = xn;
G.blend = Li;
G.colorChannel = void 0;
var Ci = G.darken = Kr;
G.decomposeColor = te;
var ba = G.emphasize = zi, At = G.getContrastRatio = ji;
G.getLuminance = Qe;
G.hexToRgb = vn;
var Ea = G.hslToRgb = En, Ai = G.lighten = Hr, xa = G.private_safeAlpha = Ii, Ni = G.private_safeColorChannel = void 0, Oa = G.private_safeDarken = Mi, _a = G.private_safeEmphasize = On, wa = G.private_safeLighten = Di;
G.recomposeColor = Ne;
G.rgbToHex = ki;
var Nt = gn(Si), Pi = gn(Ti);
function Gr(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), (0, Pi.default)(e, r, t);
}
function vn(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function $i(e) {
  const r = e.toString(16);
  return r.length === 1 ? `0${r}` : r;
}
function te(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return te(vn(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, Nt.default)(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, Nt.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const bn = (e) => {
  const r = te(e);
  return r.values.slice(0, 3).map((t, n) => r.type.indexOf("hsl") !== -1 && n !== 0 ? `${t}%` : t).join(" ");
};
G.colorChannel = bn;
const Ri = (e, r) => {
  try {
    return bn(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
Ni = G.private_safeColorChannel = Ri;
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
function ki(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: r
  } = te(e);
  return `#${r.map((t, n) => $i(n === 3 ? Math.round(255 * t) : t)).join("")}`;
}
function En(e) {
  e = te(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, s = n * Math.min(o, 1 - o), i = (l, c = (l + t / 30) % 12) => o - s * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const u = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (a += "a", u.push(r[3])), Ne({
    type: a,
    values: u
  });
}
function Qe(e) {
  e = te(e);
  let r = e.type === "hsl" || e.type === "hsla" ? te(En(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function ji(e, r) {
  const t = Qe(e), n = Qe(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function xn(e, r) {
  return e = te(e), r = Gr(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, Ne(e);
}
function Ii(e, r, t) {
  try {
    return xn(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Kr(e, r) {
  if (e = te(e), r = Gr(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return Ne(e);
}
function Mi(e, r, t) {
  try {
    return Kr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Hr(e, r) {
  if (e = te(e), r = Gr(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return Ne(e);
}
function Di(e, r, t) {
  try {
    return Hr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function zi(e, r = 0.15) {
  return Qe(e) > 0.5 ? Kr(e, r) : Hr(e, r);
}
function On(e, r, t) {
  try {
    return On(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Li(e, r, t, n = 1) {
  const o = (u, l) => Math.round((u ** (1 / n) * (1 - t) + l ** (1 / n) * t) ** n), s = te(e), i = te(r), a = [o(s.values[0], i.values[0]), o(s.values[1], i.values[1]), o(s.values[2], i.values[2])];
  return Ne({
    type: "rgb",
    values: a
  });
}
const Bi = ["mode", "contrastThreshold", "tonalOffset"], Pt = {
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
}, Cr = {
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
function $t(e, r, t, n) {
  const o = n.light || n, s = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = Ai(e.main, o) : r === "dark" && (e.dark = Ci(e.main, s)));
}
function Ui(e = "light") {
  return e === "dark" ? {
    main: xe[200],
    light: xe[50],
    dark: xe[400]
  } : {
    main: xe[700],
    light: xe[400],
    dark: xe[800]
  };
}
function Vi(e = "light") {
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
function Fi(e = "light") {
  return e === "dark" ? {
    main: be[500],
    light: be[300],
    dark: be[700]
  } : {
    main: be[700],
    light: be[400],
    dark: be[800]
  };
}
function Wi(e = "light") {
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
function Yi(e = "light") {
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
function qi(e = "light") {
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
function Gi(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, o = pe(e, Bi), s = e.primary || Ui(r), i = e.secondary || Vi(r), a = e.error || Fi(r), u = e.info || Wi(r), l = e.success || Yi(r), c = e.warning || qi(r);
  function p(f) {
    const E = At(f, Cr.text.primary) >= t ? Cr.text.primary : Pt.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = At(f, E);
      x < 3 && console.error([`MUI: The contrast ratio of ${x}:1 for ${E} on ${f}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return E;
  }
  const d = ({
    color: f,
    name: E,
    mainShade: x = 500,
    lightShade: A = 300,
    darkShade: _ = 700
  }) => {
    if (f = B({}, f), !f.main && f[x] && (f.main = f[x]), !f.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${x}\` property.` : Ie(11, E ? ` (${E})` : "", x));
    if (typeof f.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(f.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ie(12, E ? ` (${E})` : "", JSON.stringify(f.main)));
    return $t(f, "light", A, n), $t(f, "dark", _, n), f.contrastText || (f.contrastText = p(f.main)), f;
  }, v = {
    dark: Cr,
    light: Pt
  };
  return process.env.NODE_ENV !== "production" && (v[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), ue(B({
    // A collection of common colors.
    common: B({}, je),
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
      color: c,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: In,
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
const Ki = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Hi(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Rt = {
  textTransform: "uppercase"
}, kt = '"Roboto", "Helvetica", "Arial", sans-serif';
function Xi(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = kt,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: c,
    pxToRem: p
  } = t, d = pe(t, Ki);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const v = o / 14, y = p || ((x) => `${x / l * v}rem`), f = (x, A, _, D, h) => B({
    fontFamily: n,
    fontWeight: x,
    fontSize: y(A),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: _
  }, n === kt ? {
    letterSpacing: `${Hi(D / A)}em`
  } : {}, h, c), E = {
    h1: f(s, 96, 1.167, -1.5),
    h2: f(s, 60, 1.2, -0.5),
    h3: f(i, 48, 1.167, 0),
    h4: f(i, 34, 1.235, 0.25),
    h5: f(i, 24, 1.334, 0),
    h6: f(a, 20, 1.6, 0.15),
    subtitle1: f(i, 16, 1.75, 0.15),
    subtitle2: f(a, 14, 1.57, 0.1),
    body1: f(i, 16, 1.5, 0.15),
    body2: f(i, 14, 1.43, 0.15),
    button: f(a, 14, 1.75, 0.4, Rt),
    caption: f(i, 12, 1.66, 0.4),
    overline: f(i, 12, 2.66, 1, Rt),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ue(B({
    htmlFontSize: l,
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
const Ji = 0.2, Zi = 0.14, Qi = 0.12;
function L(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ji})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Zi})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Qi})`].join(",");
}
const ea = ["none", L(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), L(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), L(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), L(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), L(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), L(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), L(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), L(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), L(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), L(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), L(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), L(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), L(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), L(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), L(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), L(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), L(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), L(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), L(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), L(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), L(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), L(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), L(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), L(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ra = ea, ta = ["duration", "easing", "delay"], na = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, oa = {
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
function jt(e) {
  return `${Math.round(e)}ms`;
}
function sa(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function ia(e) {
  const r = B({}, na, e.easing), t = B({}, oa, e.duration);
  return B({
    getAutoHeightDuration: sa,
    create: (o = ["all"], s = {}) => {
      const {
        duration: i = t.standard,
        easing: a = r.easeInOut,
        delay: u = 0
      } = s, l = pe(s, ta);
      if (process.env.NODE_ENV !== "production") {
        const c = (d) => typeof d == "string", p = (d) => !isNaN(parseFloat(d));
        !c(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(i) && !c(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), c(a) || console.error('MUI: Argument "easing" must be a string.'), !p(u) && !c(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((c) => `${c} ${typeof i == "string" ? i : jt(i)} ${a} ${typeof u == "string" ? u : jt(u)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const aa = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, ca = aa, ua = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function _n(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: o = {},
    typography: s = {}
  } = e, i = pe(e, ua);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ie(18));
  const a = Gi(n), u = dn(e);
  let l = ue(u, {
    mixins: _i(u.breakpoints, t),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ra.slice(),
    typography: Xi(a, s),
    transitions: ia(o),
    zIndex: B({}, ca)
  });
  if (l = ue(l, i), l = r.reduce((c, p) => ue(c, p), l), process.env.NODE_ENV !== "production") {
    const c = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (d, v) => {
      let y;
      for (y in d) {
        const f = d[y];
        if (c.indexOf(y) !== -1 && Object.keys(f).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const E = hn("", y);
            console.error([`MUI: The \`${v}\` component increases the CSS specificity of the \`${y}\` internal state.`, "You can not override it like this: ", JSON.stringify(d, null, 2), "", `Instead, you need to use the '&.${E}' syntax:`, JSON.stringify({
              root: {
                [`&.${E}`]: f
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          d[y] = {};
        }
      }
    };
    Object.keys(l.components).forEach((d) => {
      const v = l.components[d].styleOverrides;
      v && d.indexOf("Mui") === 0 && p(v, d);
    });
  }
  return l.unstable_sxConfig = B({}, mr, i == null ? void 0 : i.unstable_sxConfig), l.unstable_sx = function(p) {
    return qr({
      sx: p,
      theme: this
    });
  }, l;
}
let It = !1;
function Sa(...e) {
  return process.env.NODE_ENV !== "production" && (It || (It = !0, console.error(["MUI: the createMuiTheme function was renamed to createTheme.", "", "You should use `import { createTheme } from '@mui/material/styles'`"].join(`
`)))), _n(...e);
}
const fa = Ei("MuiBox", ["root"]), la = fa, da = _n(), wn = gi({
  themeId: Dn,
  defaultTheme: da,
  defaultClassName: la.root,
  generateClassName: pn.generate
});
process.env.NODE_ENV !== "production" && (wn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: U.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: U.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: U.oneOfType([U.arrayOf(U.oneOfType([U.func, U.object, U.bool])), U.func, U.object])
});
const Ta = wn;
export {
  Eo as $,
  hn as A,
  Ta as B,
  fe as C,
  ga as D,
  un as E,
  ya as F,
  tn as G,
  Ue as H,
  _s as I,
  _n as J,
  Dn as K,
  Yt as L,
  ha as M,
  Uo as N,
  wi as O,
  U as P,
  Oa as Q,
  wa as R,
  _a as S,
  ge as T,
  xa as U,
  Ni as V,
  Ea as W,
  Xi as X,
  Ei as Y,
  pn as Z,
  pe as _,
  In as a,
  oa as a0,
  va as a1,
  Fo as a2,
  bi as a3,
  ba as a4,
  Qt as a5,
  Ai as a6,
  Ci as a7,
  ir as a8,
  Sa as a9,
  na as aa,
  rn as ab,
  _i as ac,
  la as ad,
  xe as b,
  je as c,
  ue as d,
  cn as e,
  dn as f,
  _e as g,
  ls as h,
  ye as i,
  oi as j,
  di as k,
  Oe as l,
  ni as m,
  mr as n,
  $e as o,
  Ee as p,
  cs as q,
  be as r,
  qr as s,
  nn as t,
  ui as u,
  B as v,
  ai as w,
  Ie as x,
  xi as y,
  hi as z
};
