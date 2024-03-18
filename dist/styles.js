import { K as U, M as lt, P as C, _ as f, L as ct, Y as dt, b as R, h as H, G as me, Z as ut, l as mt, d as fe, T as ge, $ as b, a0 as v, a1 as ee, a2 as te, a3 as Y, p as pt, a as We, a4 as ht, W as ft } from "./createTheme-9d913e0e.js";
import { V as Tr, S as xr, c as $r, I as kr, U as Er, w as _r, X as Ar } from "./createTheme-9d913e0e.js";
import { e as He, g as gt } from "./getOverlayAlpha-1f643798.js";
import { u as Or } from "./getOverlayAlpha-1f643798.js";
import { s as Ir, s as Br, u as Dr } from "./styled-c80c7b02.js";
import * as $ from "react";
import { jsx as N, jsxs as Pe } from "react/jsx-runtime";
function Se(e, r = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > o) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${o}].`), lt(e, r, o);
}
function yt(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(r);
  return o && o[0].length === 1 && (o = o.map((s) => s + s)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((s, i) => i < 3 ? parseInt(s, 16) : Math.round(parseInt(s, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function St(e) {
  const r = e.toString(16);
  return r.length === 1 ? `0${r}` : r;
}
function G(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return G(yt(e));
  const r = e.indexOf("("), o = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(o) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : U(9, e));
  let s = e.substring(r + 1, e.length - 1), i;
  if (o === "color") {
    if (s = s.split(" "), i = s.shift(), s.length === 4 && s[3].charAt(0) === "/" && (s[3] = s[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : U(10, i));
  } else
    s = s.split(",");
  return s = s.map((l) => parseFloat(l)), {
    type: o,
    values: s,
    colorSpace: i
  };
}
function oe(e) {
  const {
    type: r,
    colorSpace: o
  } = e;
  let {
    values: s
  } = e;
  return r.indexOf("rgb") !== -1 ? s = s.map((i, l) => l < 3 ? parseInt(i, 10) : i) : r.indexOf("hsl") !== -1 && (s[1] = `${s[1]}%`, s[2] = `${s[2]}%`), r.indexOf("color") !== -1 ? s = `${o} ${s.join(" ")}` : s = `${s.join(", ")}`, `${r}(${s})`;
}
function ir(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: r
  } = G(e);
  return `#${r.map((o, s) => St(s === 3 ? Math.round(255 * o) : o)).join("")}`;
}
function Ct(e) {
  e = G(e);
  const {
    values: r
  } = e, o = r[0], s = r[1] / 100, i = r[2] / 100, l = s * Math.min(i, 1 - i), m = (y, g = (y + o / 30) % 12) => i - l * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let d = "rgb";
  const a = [Math.round(m(0) * 255), Math.round(m(8) * 255), Math.round(m(4) * 255)];
  return e.type === "hsla" && (d += "a", a.push(r[3])), oe({
    type: d,
    values: a
  });
}
function ye(e) {
  e = G(e);
  let r = e.type === "hsl" || e.type === "hsla" ? G(Ct(e)).values : e.values;
  return r = r.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function ar(e, r) {
  const o = ye(e), s = ye(r);
  return (Math.max(o, s) + 0.05) / (Math.min(o, s) + 0.05);
}
function lr(e, r) {
  return e = G(e), r = Se(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, oe(e);
}
function bt(e, r) {
  if (e = G(e), r = Se(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - r;
  return oe(e);
}
function vt(e, r) {
  if (e = G(e), r = Se(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * r;
  return oe(e);
}
function cr(e, r = 0.15) {
  return ye(e) > 0.5 ? bt(e, r) : vt(e, r);
}
const ze = /* @__PURE__ */ $.createContext(null);
process.env.NODE_ENV !== "production" && (ze.displayName = "ThemeContext");
const Ke = ze;
function Ce() {
  const e = $.useContext(Ke);
  return process.env.NODE_ENV !== "production" && $.useDebugValue(e), e;
}
const wt = typeof Symbol == "function" && Symbol.for, Tt = wt ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function xt(e, r) {
  if (typeof r == "function") {
    const o = r(e);
    return process.env.NODE_ENV !== "production" && (o || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), o;
  }
  return f({}, e, r);
}
function re(e) {
  const {
    children: r,
    theme: o
  } = e, s = Ce();
  process.env.NODE_ENV !== "production" && s === null && typeof o == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const i = $.useMemo(() => {
    const l = s === null ? o : xt(s, o);
    return l != null && (l[Tt] = s !== null), l;
  }, [o, s]);
  return /* @__PURE__ */ N(Ke.Provider, {
    value: i,
    children: r
  });
}
process.env.NODE_ENV !== "production" && (re.propTypes = {
  /**
   * Your component tree.
   */
  children: C.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: C.oneOfType([C.object, C.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (re.propTypes = He(re.propTypes));
const Fe = {};
function je(e, r, o, s = !1) {
  return $.useMemo(() => {
    const i = e && r[e] || r;
    if (typeof o == "function") {
      const l = o(i), m = e ? f({}, r, {
        [e]: l
      }) : l;
      return s ? () => m : m;
    }
    return e ? f({}, r, {
      [e]: o
    }) : f({}, r, o);
  }, [e, r, o, s]);
}
function Q(e) {
  const {
    children: r,
    theme: o,
    themeId: s
  } = e, i = ct(Fe), l = Ce() || Fe;
  process.env.NODE_ENV !== "production" && (i === null && typeof o == "function" || s && i && !i[s] && typeof o == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const m = je(s, i, o), d = je(s, l, o, !0);
  return /* @__PURE__ */ N(re, {
    theme: d,
    children: /* @__PURE__ */ N(dt.Provider, {
      value: m,
      children: r
    })
  });
}
process.env.NODE_ENV !== "production" && (Q.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: C.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: C.oneOfType([C.func, C.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: C.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Q.propTypes = He(Q.propTypes));
const be = "mode", ve = "color-scheme", Ye = "data-color-scheme";
function $t(e) {
  const {
    defaultMode: r = "light",
    defaultLightColorScheme: o = "light",
    defaultDarkColorScheme: s = "dark",
    modeStorageKey: i = be,
    colorSchemeStorageKey: l = ve,
    attribute: m = Ye,
    colorSchemeNode: d = "document.documentElement"
  } = e || {};
  return /* @__PURE__ */ N("script", {
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  var mode = localStorage.getItem('${i}') || '${r}';
  var colorScheme = '';
  if (mode === 'system') {
    // handle system mode
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = localStorage.getItem('${l}-dark') || '${s}';
    } else {
      colorScheme = localStorage.getItem('${l}-light') || '${o}';
    }
  }
  if (mode === 'light') {
    colorScheme = localStorage.getItem('${l}-light') || '${o}';
  }
  if (mode === 'dark') {
    colorScheme = localStorage.getItem('${l}-dark') || '${s}';
  }
  if (colorScheme) {
    ${d}.setAttribute('${m}', colorScheme);
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function Le(e) {
  if (typeof window < "u" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function qe(e, r) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return r("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return r("dark");
}
function kt(e) {
  return qe(e, (r) => {
    if (r === "light")
      return e.lightColorScheme;
    if (r === "dark")
      return e.darkColorScheme;
  });
}
function pe(e, r) {
  if (typeof window > "u")
    return;
  let o;
  try {
    o = localStorage.getItem(e) || void 0, o || localStorage.setItem(e, r);
  } catch {
  }
  return o || r;
}
function Et(e) {
  const {
    defaultMode: r = "light",
    defaultLightColorScheme: o,
    defaultDarkColorScheme: s,
    supportedColorSchemes: i = [],
    modeStorageKey: l = be,
    colorSchemeStorageKey: m = ve,
    storageWindow: d = typeof window > "u" ? void 0 : window
  } = e, a = i.join(","), [y, g] = $.useState(() => {
    const c = pe(l, r), p = pe(`${m}-light`, o), S = pe(`${m}-dark`, s);
    return {
      mode: c,
      systemMode: Le(c),
      lightColorScheme: p,
      darkColorScheme: S
    };
  }), k = kt(y), _ = $.useCallback((c) => {
    g((p) => {
      if (c === p.mode)
        return p;
      const S = c || r;
      try {
        localStorage.setItem(l, S);
      } catch {
      }
      return f({}, p, {
        mode: S,
        systemMode: Le(S)
      });
    });
  }, [l, r]), w = $.useCallback((c) => {
    c ? typeof c == "string" ? c && !a.includes(c) ? console.error(`\`${c}\` does not exist in \`theme.colorSchemes\`.`) : g((p) => {
      const S = f({}, p);
      return qe(p, (M) => {
        try {
          localStorage.setItem(`${m}-${M}`, c);
        } catch {
        }
        M === "light" && (S.lightColorScheme = c), M === "dark" && (S.darkColorScheme = c);
      }), S;
    }) : g((p) => {
      const S = f({}, p), M = c.light === null ? o : c.light, I = c.dark === null ? s : c.dark;
      if (M)
        if (!a.includes(M))
          console.error(`\`${M}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          S.lightColorScheme = M;
          try {
            localStorage.setItem(`${m}-light`, M);
          } catch {
          }
        }
      if (I)
        if (!a.includes(I))
          console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          S.darkColorScheme = I;
          try {
            localStorage.setItem(`${m}-dark`, I);
          } catch {
          }
        }
      return S;
    }) : g((p) => {
      try {
        localStorage.setItem(`${m}-light`, o), localStorage.setItem(`${m}-dark`, s);
      } catch {
      }
      return f({}, p, {
        lightColorScheme: o,
        darkColorScheme: s
      });
    });
  }, [a, m, o, s]), T = $.useCallback((c) => {
    y.mode === "system" && g((p) => f({}, p, {
      systemMode: c != null && c.matches ? "dark" : "light"
    }));
  }, [y.mode]), h = $.useRef(T);
  return h.current = T, $.useEffect(() => {
    const c = (...S) => h.current(...S), p = window.matchMedia("(prefers-color-scheme: dark)");
    return p.addListener(c), c(p), () => p.removeListener(c);
  }, []), $.useEffect(() => {
    const c = (p) => {
      const S = p.newValue;
      typeof p.key == "string" && p.key.startsWith(m) && (!S || a.match(S)) && (p.key.endsWith("light") && w({
        light: S
      }), p.key.endsWith("dark") && w({
        dark: S
      })), p.key === l && (!S || ["light", "dark", "system"].includes(S)) && _(S || r);
    };
    if (d)
      return d.addEventListener("storage", c), () => d.removeEventListener("storage", c);
  }, [w, _, l, m, a, r, d]), f({}, y, {
    colorScheme: k,
    setMode: _,
    setColorScheme: w
  });
}
const _t = ["colorSchemes", "components", "generateCssVars", "cssVarPrefix"], At = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Mt(e) {
  const {
    themeId: r,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: o = {},
    attribute: s = Ye,
    modeStorageKey: i = be,
    colorSchemeStorageKey: l = ve,
    defaultMode: m = "light",
    defaultColorScheme: d,
    disableTransitionOnChange: a = !1,
    resolveTheme: y,
    excludeVariablesFromRoot: g
  } = e;
  (!o.colorSchemes || typeof d == "string" && !o.colorSchemes[d] || typeof d == "object" && !o.colorSchemes[d == null ? void 0 : d.light] || typeof d == "object" && !o.colorSchemes[d == null ? void 0 : d.dark]) && console.error(`MUI: \`${d}\` does not exist in \`theme.colorSchemes\`.`);
  const k = /* @__PURE__ */ $.createContext(void 0);
  process.env.NODE_ENV !== "production" && (k.displayName = "ColorSchemeContext");
  const _ = () => {
    const p = $.useContext(k);
    if (!p)
      throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `useColorScheme` must be called under <CssVarsProvider />" : U(19));
    return p;
  };
  function w({
    children: p,
    theme: S = o,
    modeStorageKey: M = i,
    colorSchemeStorageKey: I = l,
    attribute: A = s,
    defaultMode: t = m,
    defaultColorScheme: u = d,
    disableTransitionOnChange: x = a,
    storageWindow: E = typeof window > "u" ? void 0 : window,
    documentNode: P = typeof document > "u" ? void 0 : document,
    colorSchemeNode: z = typeof document > "u" ? void 0 : document.documentElement,
    colorSchemeSelector: Z = ":root",
    disableNestedContext: Qe = !1,
    disableStyleSheetGeneration: Xe = !1
  }) {
    const ne = $.useRef(!1), we = Ce(), se = $.useContext(k), ie = !!se && !Qe, Te = S[r], xe = Te || S, {
      colorSchemes: ae = {},
      components: Ze = {},
      generateCssVars: $e = () => ({
        vars: {},
        css: {}
      }),
      cssVarPrefix: le
    } = xe, Je = R(xe, _t), ce = Object.keys(ae), ke = typeof u == "string" ? u : u.light, Ee = typeof u == "string" ? u : u.dark, {
      mode: et,
      setMode: _e,
      systemMode: Ae,
      lightColorScheme: Me,
      darkColorScheme: Oe,
      colorScheme: tt,
      setColorScheme: Ve
    } = Et({
      supportedColorSchemes: ce,
      defaultLightColorScheme: ke,
      defaultDarkColorScheme: Ee,
      modeStorageKey: M,
      colorSchemeStorageKey: I,
      defaultMode: t,
      storageWindow: E
    });
    let K = et, F = tt;
    ie && (K = se.mode, F = se.colorScheme);
    const rt = (() => K || (t === "system" ? m : t))(), ot = (() => F || (rt === "dark" ? Ee : ke))(), {
      css: nt,
      vars: Ie
    } = $e(), V = f({}, Je, {
      components: Ze,
      colorSchemes: ae,
      cssVarPrefix: le,
      vars: Ie,
      getColorSchemeSelector: (O) => `[${A}="${O}"] &`
    }), de = {}, Be = {};
    Object.entries(ae).forEach(([O, j]) => {
      const {
        css: J,
        vars: it
      } = $e(O);
      V.vars = H(V.vars, it), O === ot && (Object.keys(j).forEach((B) => {
        j[B] && typeof j[B] == "object" ? V[B] = f({}, V[B], j[B]) : V[B] = j[B];
      }), V.palette && (V.palette.colorScheme = O));
      const at = (() => typeof u == "string" ? u : t === "dark" ? u.dark : u.light)();
      if (O === at) {
        if (g) {
          const B = {};
          g(le).forEach((ue) => {
            B[ue] = J[ue], delete J[ue];
          }), de[`[${A}="${O}"]`] = B;
        }
        de[`${Z}, [${A}="${O}"]`] = J;
      } else
        Be[`${Z === ":root" ? "" : Z}[${A}="${O}"]`] = J;
    }), V.vars = H(V.vars, Ie), $.useEffect(() => {
      F && z && z.setAttribute(A, F);
    }, [F, A, z]), $.useEffect(() => {
      let O;
      if (x && ne.current && P) {
        const j = P.createElement("style");
        j.appendChild(P.createTextNode(At)), P.head.appendChild(j), window.getComputedStyle(P.body), O = setTimeout(() => {
          P.head.removeChild(j);
        }, 1);
      }
      return () => {
        clearTimeout(O);
      };
    }, [F, x, P]), $.useEffect(() => (ne.current = !0, () => {
      ne.current = !1;
    }), []);
    const st = $.useMemo(() => ({
      mode: K,
      systemMode: Ae,
      setMode: _e,
      lightColorScheme: Me,
      darkColorScheme: Oe,
      colorScheme: F,
      setColorScheme: Ve,
      allColorSchemes: ce
    }), [ce, F, Oe, Me, K, Ve, _e, Ae]);
    let De = !0;
    (Xe || ie && (we == null ? void 0 : we.cssVarPrefix) === le) && (De = !1);
    const Ne = /* @__PURE__ */ Pe($.Fragment, {
      children: [De && /* @__PURE__ */ Pe($.Fragment, {
        children: [/* @__PURE__ */ N(me, {
          styles: {
            [Z]: nt
          }
        }), /* @__PURE__ */ N(me, {
          styles: de
        }), /* @__PURE__ */ N(me, {
          styles: Be
        })]
      }), /* @__PURE__ */ N(Q, {
        themeId: Te ? r : void 0,
        theme: y ? y(V) : V,
        children: p
      })]
    });
    return ie ? Ne : /* @__PURE__ */ N(k.Provider, {
      value: st,
      children: Ne
    });
  }
  process.env.NODE_ENV !== "production" && (w.propTypes = {
    /**
     * The body attribute name to attach colorScheme.
     */
    attribute: C.string,
    /**
     * The component tree.
     */
    children: C.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: C.any,
    /**
     * The CSS selector for attaching the generated custom properties
     */
    colorSchemeSelector: C.string,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: C.string,
    /**
     * The initial color scheme used.
     */
    defaultColorScheme: C.oneOfType([C.string, C.object]),
    /**
     * The initial mode used.
     */
    defaultMode: C.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: C.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: C.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: C.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: C.any,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: C.string,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: C.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: C.object
  });
  const T = typeof d == "string" ? d : d.light, h = typeof d == "string" ? d : d.dark;
  return {
    CssVarsProvider: w,
    useColorScheme: _,
    getInitColorSchemeScript: (p) => $t(f({
      attribute: s,
      colorSchemeStorageKey: l,
      defaultMode: m,
      defaultLightColorScheme: T,
      defaultDarkColorScheme: h,
      modeStorageKey: i
    }, p))
  };
}
function Ot(e = "") {
  function r(...s) {
    if (!s.length)
      return "";
    const i = s[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${r(...s.slice(1))})` : `, ${i}`;
  }
  return (s, ...i) => `var(--${e ? `${e}-` : ""}${s}${r(...i)})`;
}
const Ue = (e, r, o, s = []) => {
  let i = e;
  r.forEach((l, m) => {
    m === r.length - 1 ? Array.isArray(i) ? i[Number(l)] = o : i && typeof i == "object" && (i[l] = o) : i && typeof i == "object" && (i[l] || (i[l] = s.includes(l) ? [] : {}), i = i[l]);
  });
}, Vt = (e, r, o) => {
  function s(i, l = [], m = []) {
    Object.entries(i).forEach(([d, a]) => {
      (!o || o && !o([...l, d])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? s(a, [...l, d], Array.isArray(a) ? [...m, d] : m) : r([...l, d], a, m));
    });
  }
  s(e);
}, It = (e, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((s) => e.includes(s)) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0 ? r : `${r}px` : r;
function he(e, r) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: s
  } = r || {}, i = {}, l = {}, m = {};
  return Vt(
    e,
    (d, a, y) => {
      if ((typeof a == "string" || typeof a == "number") && (!s || !s(d, a))) {
        const g = `--${o ? `${o}-` : ""}${d.join("-")}`;
        Object.assign(i, {
          [g]: It(d, a)
        }), Ue(l, d, `var(${g})`, y), Ue(m, d, `var(${g}, ${a})`, y);
      }
    },
    (d) => d[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: l,
    varsWithDefaults: m
  };
}
function X(e) {
  "@babel/helpers - typeof";
  return X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, X(e);
}
function Bt(e, r) {
  if (X(e) != "object" || !e)
    return e;
  var o = e[Symbol.toPrimitive];
  if (o !== void 0) {
    var s = o.call(e, r || "default");
    if (X(s) != "object")
      return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function Dt(e) {
  var r = Bt(e, "string");
  return X(r) == "symbol" ? r : String(r);
}
const Nt = ["colorSchemes", "components", "defaultColorScheme"];
function Pt(e, r) {
  const {
    colorSchemes: o = {},
    defaultColorScheme: s = "light"
  } = e, i = R(e, Nt), {
    vars: l,
    css: m,
    varsWithDefaults: d
  } = he(i, r);
  let a = d;
  const y = {}, {
    [s]: g
  } = o, k = R(o, [s].map(Dt));
  if (Object.entries(k || {}).forEach(([w, T]) => {
    const {
      vars: h,
      css: c,
      varsWithDefaults: p
    } = he(T, r);
    a = H(a, p), y[w] = {
      css: c,
      vars: h
    };
  }), g) {
    const {
      css: w,
      vars: T,
      varsWithDefaults: h
    } = he(g, r);
    a = H(a, h), y[s] = {
      css: w,
      vars: T
    };
  }
  return {
    vars: a,
    generateCssVars: (w) => {
      var T;
      if (!w) {
        var h;
        const p = f({}, m);
        return {
          css: p,
          vars: l,
          selector: (r == null || (h = r.getSelector) == null ? void 0 : h.call(r, w, p)) || ":root"
        };
      }
      const c = f({}, y[w].css);
      return {
        css: c,
        vars: y[w].vars,
        selector: (r == null || (T = r.getSelector) == null ? void 0 : T.call(r, w, c)) || ":root"
      };
    }
  };
}
const Ft = ["defaultProps", "mixins", "overrides", "palette", "props", "styleOverrides"], jt = ["type", "mode"];
function dr(e) {
  process.env.NODE_ENV !== "production" && console.warn(["MUI: adaptV4Theme() is deprecated.", "Follow the upgrade guide on https://mui.com/r/migration-v4#theme."].join(`
`));
  const {
    defaultProps: r = {},
    mixins: o = {},
    overrides: s = {},
    palette: i = {},
    props: l = {},
    styleOverrides: m = {}
  } = e, d = R(e, Ft), a = f({}, d, {
    components: {}
  });
  Object.keys(r).forEach((h) => {
    const c = a.components[h] || {};
    c.defaultProps = r[h], a.components[h] = c;
  }), Object.keys(l).forEach((h) => {
    const c = a.components[h] || {};
    c.defaultProps = l[h], a.components[h] = c;
  }), Object.keys(m).forEach((h) => {
    const c = a.components[h] || {};
    c.styleOverrides = m[h], a.components[h] = c;
  }), Object.keys(s).forEach((h) => {
    const c = a.components[h] || {};
    c.styleOverrides = s[h], a.components[h] = c;
  }), a.spacing = ut(e.spacing);
  const y = mt(e.breakpoints || {}), g = a.spacing;
  a.mixins = f({
    gutters: (h = {}) => f({
      paddingLeft: g(2),
      paddingRight: g(2)
    }, h, {
      [y.up("sm")]: f({
        paddingLeft: g(3),
        paddingRight: g(3)
      }, h[y.up("sm")])
    })
  }, o);
  const {
    type: k,
    mode: _
  } = i, w = R(i, jt), T = _ || k || "light";
  return a.palette = f({
    // theme.palette.text.hint
    text: {
      hint: T === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.38)"
    },
    mode: T,
    type: T
  }, w), a;
}
function ur(e, ...r) {
  return fe(H({
    unstable_strictMode: !0
  }, e), ...r);
}
let Re = !1;
function mr(e) {
  return Re || (console.warn(["MUI: createStyles from @mui/material/styles is deprecated.", "Please use @mui/styles/createStyles"].join(`
`)), Re = !0), e;
}
function Ge(e) {
  return String(parseFloat(e)).length === String(e).length;
}
function Lt(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function W(e) {
  return parseFloat(e);
}
function Ut(e) {
  return (r, o) => {
    const s = Lt(r);
    if (s === o)
      return r;
    let i = W(r);
    s !== "px" && (s === "em" || s === "rem") && (i = W(r) * W(e));
    let l = i;
    if (o !== "px")
      if (o === "em")
        l = i / W(e);
      else if (o === "rem")
        l = i / W(e);
      else
        return r;
    return parseFloat(l.toFixed(5)) + o;
  };
}
function Rt({
  size: e,
  grid: r
}) {
  const o = e - e % r, s = o + r;
  return e - o < s - e ? o : s;
}
function Gt({
  lineHeight: e,
  pixels: r,
  htmlFontSize: o
}) {
  return r / (e * o);
}
function Wt({
  cssProperty: e,
  min: r,
  max: o,
  unit: s = "rem",
  breakpoints: i = [600, 900, 1200],
  transform: l = null
}) {
  const m = {
    [e]: `${r}${s}`
  }, d = (o - r) / i[i.length - 1];
  return i.forEach((a) => {
    let y = r + d * a;
    l !== null && (y = l(y)), m[`@media (min-width:${a}px)`] = {
      [e]: `${Math.round(y * 1e4) / 1e4}${s}`
    };
  }), m;
}
function pr(e, r = {}) {
  const {
    breakpoints: o = ["sm", "md", "lg"],
    disableAlign: s = !1,
    factor: i = 2,
    variants: l = ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline"]
  } = r, m = f({}, e);
  m.typography = f({}, m.typography);
  const d = m.typography, a = Ut(d.htmlFontSize), y = o.map((g) => m.breakpoints.values[g]);
  return l.forEach((g) => {
    const k = d[g], _ = parseFloat(a(k.fontSize, "rem"));
    if (_ <= 1)
      return;
    const w = _, T = 1 + (w - 1) / i;
    let {
      lineHeight: h
    } = k;
    if (!Ge(h) && !s)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported non-unitless line height with grid alignment.
Use unitless line heights instead.` : U(6));
    Ge(h) || (h = parseFloat(a(h, "rem")) / parseFloat(_));
    let c = null;
    s || (c = (p) => Rt({
      size: p,
      grid: Gt({
        pixels: 4,
        lineHeight: h,
        htmlFontSize: d.htmlFontSize
      })
    })), d[g] = f({}, k, Wt({
      cssProperty: "fontSize",
      min: T,
      max: w,
      unit: "rem",
      breakpoints: y,
      transform: c
    }));
  }), m;
}
const Ht = ["theme"];
function zt(e) {
  let {
    theme: r
  } = e, o = R(e, Ht);
  const s = r[ge];
  return /* @__PURE__ */ N(Q, f({}, o, {
    themeId: s ? ge : void 0,
    theme: s || r
  }));
}
process.env.NODE_ENV !== "production" && (zt.propTypes = {
  /**
   * Your component tree.
   */
  children: C.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: C.oneOfType([C.object, C.func]).isRequired
});
function hr() {
  throw new Error(process.env.NODE_ENV !== "production" ? `MUI: makeStyles is no longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#mui-material-styles for more details.` : U(14));
}
function fr() {
  throw new Error(process.env.NODE_ENV !== "production" ? `MUI: withStyles is no longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#mui-material-styles for more details.` : U(15));
}
function gr() {
  throw new Error(process.env.NODE_ENV !== "production" ? `MUI: withTheme is no longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#mui-material-styles for more details.` : U(16));
}
function Kt(e) {
  var r;
  return !!e[0].match(/(cssVarPrefix|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((r = e[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Yt = ["colorSchemes", "cssVarPrefix", "shouldSkipGeneratingVar"], qt = ["palette"], Qt = [...Array(25)].map((e, r) => {
  if (r === 0)
    return;
  const o = gt(r);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function Xt(e, r) {
  r.forEach((o) => {
    e[o] || (e[o] = {});
  });
}
function n(e, r, o) {
  !e[r] && o && (e[r] = o);
}
function q(e) {
  return !e || !e.startsWith("hsl") ? e : ht(e);
}
function L(e, r) {
  `${r}Channel` in e || (e[`${r}Channel`] = Y(q(e[r]), `MUI: Can't create \`palette.${r}Channel\` because \`palette.${r}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${r}Channel\` as a string (in rgb format, e.g. "12 12 12") or undefined if you want to remove the channel token.`));
}
const D = (e) => {
  try {
    return e();
  } catch {
  }
}, Zt = (e = "mui") => Ot(e);
function Jt(e = {}, ...r) {
  var o, s, i, l, m, d;
  const {
    colorSchemes: a = {},
    cssVarPrefix: y = "mui",
    shouldSkipGeneratingVar: g = Kt
  } = e, k = R(e, Yt), _ = Zt(y), w = fe(f({}, k, a.light && {
    palette: (o = a.light) == null ? void 0 : o.palette
  })), {
    palette: T
  } = w, h = R(w, qt), {
    palette: c
  } = fe({
    palette: f({
      mode: "dark"
    }, (s = a.dark) == null ? void 0 : s.palette)
  });
  let p = f({}, h, {
    cssVarPrefix: y,
    getCssVar: _,
    colorSchemes: f({}, a, {
      light: f({}, a.light, {
        palette: T,
        opacity: f({
          inputPlaceholder: 0.42,
          inputUnderline: 0.42,
          switchTrackDisabled: 0.12,
          switchTrack: 0.38
        }, (i = a.light) == null ? void 0 : i.opacity),
        overlays: ((l = a.light) == null ? void 0 : l.overlays) || []
      }),
      dark: f({}, a.dark, {
        palette: c,
        opacity: f({
          inputPlaceholder: 0.5,
          inputUnderline: 0.7,
          switchTrackDisabled: 0.2,
          switchTrack: 0.3
        }, (m = a.dark) == null ? void 0 : m.opacity),
        overlays: ((d = a.dark) == null ? void 0 : d.overlays) || Qt
      })
    })
  });
  Object.keys(p.colorSchemes).forEach((A) => {
    const t = p.colorSchemes[A].palette, u = (x) => {
      const E = x.split("-"), P = E[1], z = E[2];
      return _(x, t[P][z]);
    };
    if (A === "light" ? (n(t.common, "background", "#fff"), n(t.common, "onBackground", "#000")) : (n(t.common, "background", "#000"), n(t.common, "onBackground", "#fff")), Xt(t, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), A === "light") {
      n(t.Alert, "errorColor", b(t.error.light, 0.6)), n(t.Alert, "infoColor", b(t.info.light, 0.6)), n(t.Alert, "successColor", b(t.success.light, 0.6)), n(t.Alert, "warningColor", b(t.warning.light, 0.6)), n(t.Alert, "errorFilledBg", u("palette-error-main")), n(t.Alert, "infoFilledBg", u("palette-info-main")), n(t.Alert, "successFilledBg", u("palette-success-main")), n(t.Alert, "warningFilledBg", u("palette-warning-main")), n(t.Alert, "errorFilledColor", D(() => T.getContrastText(t.error.main))), n(t.Alert, "infoFilledColor", D(() => T.getContrastText(t.info.main))), n(t.Alert, "successFilledColor", D(() => T.getContrastText(t.success.main))), n(t.Alert, "warningFilledColor", D(() => T.getContrastText(t.warning.main))), n(t.Alert, "errorStandardBg", v(t.error.light, 0.9)), n(t.Alert, "infoStandardBg", v(t.info.light, 0.9)), n(t.Alert, "successStandardBg", v(t.success.light, 0.9)), n(t.Alert, "warningStandardBg", v(t.warning.light, 0.9)), n(t.Alert, "errorIconColor", u("palette-error-main")), n(t.Alert, "infoIconColor", u("palette-info-main")), n(t.Alert, "successIconColor", u("palette-success-main")), n(t.Alert, "warningIconColor", u("palette-warning-main")), n(t.AppBar, "defaultBg", u("palette-grey-100")), n(t.Avatar, "defaultBg", u("palette-grey-400")), n(t.Button, "inheritContainedBg", u("palette-grey-300")), n(t.Button, "inheritContainedHoverBg", u("palette-grey-A100")), n(t.Chip, "defaultBorder", u("palette-grey-400")), n(t.Chip, "defaultAvatarColor", u("palette-grey-700")), n(t.Chip, "defaultIconColor", u("palette-grey-700")), n(t.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), n(t.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), n(t.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), n(t.LinearProgress, "primaryBg", v(t.primary.main, 0.62)), n(t.LinearProgress, "secondaryBg", v(t.secondary.main, 0.62)), n(t.LinearProgress, "errorBg", v(t.error.main, 0.62)), n(t.LinearProgress, "infoBg", v(t.info.main, 0.62)), n(t.LinearProgress, "successBg", v(t.success.main, 0.62)), n(t.LinearProgress, "warningBg", v(t.warning.main, 0.62)), n(t.Skeleton, "bg", `rgba(${u("palette-text-primaryChannel")} / 0.11)`), n(t.Slider, "primaryTrack", v(t.primary.main, 0.62)), n(t.Slider, "secondaryTrack", v(t.secondary.main, 0.62)), n(t.Slider, "errorTrack", v(t.error.main, 0.62)), n(t.Slider, "infoTrack", v(t.info.main, 0.62)), n(t.Slider, "successTrack", v(t.success.main, 0.62)), n(t.Slider, "warningTrack", v(t.warning.main, 0.62));
      const x = ee(t.background.default, 0.8);
      n(t.SnackbarContent, "bg", x), n(t.SnackbarContent, "color", D(() => T.getContrastText(x))), n(t.SpeedDialAction, "fabHoverBg", ee(t.background.paper, 0.15)), n(t.StepConnector, "border", u("palette-grey-400")), n(t.StepContent, "border", u("palette-grey-400")), n(t.Switch, "defaultColor", u("palette-common-white")), n(t.Switch, "defaultDisabledColor", u("palette-grey-100")), n(t.Switch, "primaryDisabledColor", v(t.primary.main, 0.62)), n(t.Switch, "secondaryDisabledColor", v(t.secondary.main, 0.62)), n(t.Switch, "errorDisabledColor", v(t.error.main, 0.62)), n(t.Switch, "infoDisabledColor", v(t.info.main, 0.62)), n(t.Switch, "successDisabledColor", v(t.success.main, 0.62)), n(t.Switch, "warningDisabledColor", v(t.warning.main, 0.62)), n(t.TableCell, "border", v(te(t.divider, 1), 0.88)), n(t.Tooltip, "bg", te(t.grey[700], 0.92));
    } else {
      n(t.Alert, "errorColor", v(t.error.light, 0.6)), n(t.Alert, "infoColor", v(t.info.light, 0.6)), n(t.Alert, "successColor", v(t.success.light, 0.6)), n(t.Alert, "warningColor", v(t.warning.light, 0.6)), n(t.Alert, "errorFilledBg", u("palette-error-dark")), n(t.Alert, "infoFilledBg", u("palette-info-dark")), n(t.Alert, "successFilledBg", u("palette-success-dark")), n(t.Alert, "warningFilledBg", u("palette-warning-dark")), n(t.Alert, "errorFilledColor", D(() => c.getContrastText(t.error.dark))), n(t.Alert, "infoFilledColor", D(() => c.getContrastText(t.info.dark))), n(t.Alert, "successFilledColor", D(() => c.getContrastText(t.success.dark))), n(t.Alert, "warningFilledColor", D(() => c.getContrastText(t.warning.dark))), n(t.Alert, "errorStandardBg", b(t.error.light, 0.9)), n(t.Alert, "infoStandardBg", b(t.info.light, 0.9)), n(t.Alert, "successStandardBg", b(t.success.light, 0.9)), n(t.Alert, "warningStandardBg", b(t.warning.light, 0.9)), n(t.Alert, "errorIconColor", u("palette-error-main")), n(t.Alert, "infoIconColor", u("palette-info-main")), n(t.Alert, "successIconColor", u("palette-success-main")), n(t.Alert, "warningIconColor", u("palette-warning-main")), n(t.AppBar, "defaultBg", u("palette-grey-900")), n(t.AppBar, "darkBg", u("palette-background-paper")), n(t.AppBar, "darkColor", u("palette-text-primary")), n(t.Avatar, "defaultBg", u("palette-grey-600")), n(t.Button, "inheritContainedBg", u("palette-grey-800")), n(t.Button, "inheritContainedHoverBg", u("palette-grey-700")), n(t.Chip, "defaultBorder", u("palette-grey-700")), n(t.Chip, "defaultAvatarColor", u("palette-grey-300")), n(t.Chip, "defaultIconColor", u("palette-grey-300")), n(t.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), n(t.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), n(t.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), n(t.LinearProgress, "primaryBg", b(t.primary.main, 0.5)), n(t.LinearProgress, "secondaryBg", b(t.secondary.main, 0.5)), n(t.LinearProgress, "errorBg", b(t.error.main, 0.5)), n(t.LinearProgress, "infoBg", b(t.info.main, 0.5)), n(t.LinearProgress, "successBg", b(t.success.main, 0.5)), n(t.LinearProgress, "warningBg", b(t.warning.main, 0.5)), n(t.Skeleton, "bg", `rgba(${u("palette-text-primaryChannel")} / 0.13)`), n(t.Slider, "primaryTrack", b(t.primary.main, 0.5)), n(t.Slider, "secondaryTrack", b(t.secondary.main, 0.5)), n(t.Slider, "errorTrack", b(t.error.main, 0.5)), n(t.Slider, "infoTrack", b(t.info.main, 0.5)), n(t.Slider, "successTrack", b(t.success.main, 0.5)), n(t.Slider, "warningTrack", b(t.warning.main, 0.5));
      const x = ee(t.background.default, 0.98);
      n(t.SnackbarContent, "bg", x), n(t.SnackbarContent, "color", D(() => c.getContrastText(x))), n(t.SpeedDialAction, "fabHoverBg", ee(t.background.paper, 0.15)), n(t.StepConnector, "border", u("palette-grey-600")), n(t.StepContent, "border", u("palette-grey-600")), n(t.Switch, "defaultColor", u("palette-grey-300")), n(t.Switch, "defaultDisabledColor", u("palette-grey-600")), n(t.Switch, "primaryDisabledColor", b(t.primary.main, 0.55)), n(t.Switch, "secondaryDisabledColor", b(t.secondary.main, 0.55)), n(t.Switch, "errorDisabledColor", b(t.error.main, 0.55)), n(t.Switch, "infoDisabledColor", b(t.info.main, 0.55)), n(t.Switch, "successDisabledColor", b(t.success.main, 0.55)), n(t.Switch, "warningDisabledColor", b(t.warning.main, 0.55)), n(t.TableCell, "border", b(te(t.divider, 1), 0.68)), n(t.Tooltip, "bg", te(t.grey[700], 0.92));
    }
    L(t.background, "default"), L(t.common, "background"), L(t.common, "onBackground"), L(t, "divider"), Object.keys(t).forEach((x) => {
      const E = t[x];
      E && typeof E == "object" && (E.main && n(t[x], "mainChannel", Y(q(E.main))), E.light && n(t[x], "lightChannel", Y(q(E.light))), E.dark && n(t[x], "darkChannel", Y(q(E.dark))), E.contrastText && n(t[x], "contrastTextChannel", Y(q(E.contrastText))), x === "text" && (L(t[x], "primary"), L(t[x], "secondary")), x === "action" && (E.active && L(t[x], "active"), E.selected && L(t[x], "selected")));
    });
  }), p = r.reduce((A, t) => H(A, t), p);
  const S = {
    prefix: y,
    shouldSkipGeneratingVar: g
  }, {
    vars: M,
    generateCssVars: I
  } = Pt(p, S);
  return p.vars = M, p.generateCssVars = I, p.shouldSkipGeneratingVar = g, p.unstable_sxConfig = f({}, pt, k == null ? void 0 : k.unstable_sxConfig), p.unstable_sx = function(t) {
    return We({
      sx: t,
      theme: this
    });
  }, p;
}
const er = (e) => [...[...Array(24)].map((r, o) => `--${e ? `${e}-` : ""}overlays-${o + 1}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], tr = er, rr = Jt(), {
  CssVarsProvider: yr,
  useColorScheme: Sr,
  getInitColorSchemeScript: Cr
} = Mt({
  themeId: ge,
  theme: rr,
  attribute: "data-mui-color-scheme",
  modeStorageKey: "mui-mode",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultColorScheme: {
    light: "light",
    dark: "dark"
  },
  resolveTheme: (e) => {
    const r = f({}, e, {
      typography: ft(e.palette, e.typography)
    });
    return r.unstable_sx = function(s) {
      return We({
        sx: s,
        theme: this
      });
    }, r;
  },
  excludeVariablesFromRoot: tr
});
function br() {
  throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `experimental_sx` has been moved to `theme.unstable_sx`.For more details, see https://github.com/mui/material-ui/pull/35150." : U(20));
}
export {
  yr as Experimental_CssVarsProvider,
  Tr as StyledEngineProvider,
  ge as THEME_ID,
  zt as ThemeProvider,
  dr as adaptV4Theme,
  lr as alpha,
  xr as createMuiTheme,
  mr as createStyles,
  fe as createTheme,
  $r as css,
  bt as darken,
  G as decomposeColor,
  kr as duration,
  Er as easing,
  cr as emphasize,
  Ir as experimentalStyled,
  Jt as experimental_extendTheme,
  br as experimental_sx,
  ar as getContrastRatio,
  Cr as getInitColorSchemeScript,
  ye as getLuminance,
  gt as getOverlayAlpha,
  yt as hexToRgb,
  Ct as hslToRgb,
  _r as keyframes,
  vt as lighten,
  hr as makeStyles,
  Ar as private_createMixins,
  ft as private_createTypography,
  tr as private_excludeVariablesFromRoot,
  oe as recomposeColor,
  pr as responsiveFontSizes,
  ir as rgbToHex,
  Kt as shouldSkipGeneratingVar,
  Br as styled,
  ur as unstable_createMuiStrictModeTheme,
  Lt as unstable_getUnit,
  W as unstable_toUnitless,
  Sr as useColorScheme,
  Or as useTheme,
  Dr as useThemeProps,
  fr as withStyles,
  gr as withTheme
};
