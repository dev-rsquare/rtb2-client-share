import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { n as p } from "../../createTheme-c26d6c87.js";
import { Column as g } from "../../components/Column/index.js";
import { Row as d } from "../../components/Row/index.js";
import "../../theme-dc57b2b0.js";
import { T as l, B as a } from "../../Button-30aae85a.js";
import { T as o, a as s, b as r, c as i, C as t } from "../../TableRow-3364e3d6.js";
const h = p(d)`
    display: flex;
    align-items: center;
    padding: 10px;
    min-width: 125px;
    max-width: 125px;
    height: 100%;
    background-color: #f5fdfa;
`, c = p(d)`
    display: flex;
    flex: 1;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    gap: 8px;

    p {
        overflow: hidden;
        text-overflow: ellipsis;
    }
`, v = () => /* @__PURE__ */ n(g, { gap: "8px", children: [
  /* @__PURE__ */ e(d, { justifyContent: "space-between", alignItems: "center", children: /* @__PURE__ */ e(l, { variant: "h6", fontWeight: "bold", children: "문의처리" }) }),
  /* @__PURE__ */ e(d, { border: "1px solid #e0e0e0", children: /* @__PURE__ */ e(o, { style: { tableLayout: "fixed" }, children: /* @__PURE__ */ n(
    s,
    {
      sx: {
        td: { height: "40px", padding: "4px" }
      },
      children: [
        /* @__PURE__ */ n(r, { children: [
          /* @__PURE__ */ e(i, { sx: { width: "auto", textAlign: "left" }, children: /* @__PURE__ */ n(d, { alignItems: "center", gap: "10px", height: "100%", children: [
            /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e(l, { variant: "body2", fontWeight: "bold", children: "상태" }) }),
            /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(t, { size: "small", label: "완료" }) })
          ] }) }),
          /* @__PURE__ */ e(i, { colSpan: 2, sx: { width: "auto", textAlign: "left" }, children: /* @__PURE__ */ n(d, { alignItems: "center", gap: "10px", height: "100%", children: [
            /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e(l, { variant: "body2", fontWeight: "bold", children: "처리방식" }) }),
            /* @__PURE__ */ n(c, { children: [
              /* @__PURE__ */ e(l, { children: "업무등록" }),
              /* @__PURE__ */ e(a, { variant: "outlined", children: "[기회]업무" }),
              /* @__PURE__ */ e(a, { variant: "outlined", children: "[이관]업무" }),
              /* @__PURE__ */ e(l, { children: "|" }),
              /* @__PURE__ */ e(l, { children: "딜" }),
              /* @__PURE__ */ e(a, { variant: "outlined", children: "딜 등록" }),
              /* @__PURE__ */ e(l, { children: "|" }),
              /* @__PURE__ */ e(l, { children: "기타" }),
              /* @__PURE__ */ e(a, { variant: "outlined", children: "콜 이력으로 등록" })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e(i, { colSpan: 3, sx: { width: "auto", textAlign: "left" }, children: /* @__PURE__ */ n(d, { alignItems: "center", gap: "10px", height: "100%", children: [
          /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e(l, { variant: "body2", fontWeight: "bold", children: "담당부서" }) }),
          /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(t, { size: "small", label: "임차자문팀" }) })
        ] }) }) }),
        /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e(i, { colSpan: 3, sx: { width: "auto", textAlign: "left" }, children: /* @__PURE__ */ n(d, { alignItems: "center", gap: "10px", height: "100%", children: [
          /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e(l, { variant: "body2", fontWeight: "bold", children: "결과" }) }),
          /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(t, { size: "small", label: "기회 전달" }) })
        ] }) }) }),
        /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e(i, { colSpan: 3, sx: { width: "auto", textAlign: "left" }, children: /* @__PURE__ */ n(d, { alignItems: "center", gap: "10px", height: "100%", children: [
          /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e(l, { variant: "body2", fontWeight: "bold", children: "처리 이력" }) }),
          /* @__PURE__ */ e(c, { children: /* @__PURE__ */ n(o, { sx: { width: "1015px" }, children: [
            /* @__PURE__ */ n("colgroup", { children: [
              /* @__PURE__ */ e("col", { style: { width: "15%" } }),
              /* @__PURE__ */ e("col", { style: { width: "15%" } }),
              /* @__PURE__ */ e("col", { style: { width: "60%" } }),
              /* @__PURE__ */ e("col", { style: { width: "10%" } })
            ] }),
            /* @__PURE__ */ n(s, { children: [
              /* @__PURE__ */ n(r, { children: [
                /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e(l, { children: "2022.01.03" }) }),
                /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e(l, { children: "딜 생성" }) }),
                /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e(l, { children: "[TSK22425331] (주)함덕제 위성사무실_부천_50평_NOC5" }) }),
                /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e(l, { children: "완료" }) })
              ] }),
              /* @__PURE__ */ n(r, { children: [
                /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e(l, { children: "2022.01.02" }) }),
                /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e(l, { children: "업무 등록" }) }),
                /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e(t, { size: "small", label: "TSK00000001" }) }),
                /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e(l, { children: "완료" }) })
              ] }),
              /* @__PURE__ */ n(r, { children: [
                /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e(l, { children: "2022.01.01" }) }),
                /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e(l, { children: "콜 이력 등록" }) }),
                /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e(t, { size: "small", label: "TSK00000002" }) }),
                /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e(l, { children: "-" }) })
              ] })
            ] })
          ] }) })
        ] }) }) })
      ]
    }
  ) }) })
] });
export {
  v as default
};
