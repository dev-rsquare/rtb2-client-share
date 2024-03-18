import { _ as s, u as n, T as a } from "./createTheme-9d913e0e.js";
import * as u from "react";
import { d as p } from "./styled-c80c7b02.js";
const l = "exact-prop: ​";
function f(e) {
  return process.env.NODE_ENV === "production" ? e : s({}, e, {
    [l]: (r) => {
      const o = Object.keys(r).filter((t) => !e.hasOwnProperty(t));
      return o.length > 0 ? new Error(`The following props are not supported: ${o.map((t) => `\`${t}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function h() {
  const e = n(p);
  return process.env.NODE_ENV !== "production" && u.useDebugValue(e), e[a] || e;
}
const c = (e) => {
  let r;
  return e < 1 ? r = 5.11916 * e ** 2 : r = 4.5 * Math.log(e + 1) + 2, (r / 100).toFixed(2);
}, d = c;
export {
  f as e,
  d as g,
  h as u
};
