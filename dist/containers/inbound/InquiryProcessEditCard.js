import { jsxs as l, Fragment as s, jsx as e } from "react/jsx-runtime";
import { useState as g } from "react";
import { n as x } from "../../createTheme-9d913e0e.js";
import w from "./TaskCreateDialog.js";
import { Column as y } from "../../components/Column/index.js";
import { Row as n } from "../../components/Row/index.js";
import "../../theme-dd41183d.js";
import { T as i, B as r, a as C, b as I, c, d as a } from "../../TableRow-2b4ac02e.js";
import { T as p, M as t, A as T } from "../../TextField-fc4262cc.js";
const d = x(n)`
    display: flex;
    align-items: center;
    padding: 10px;
    min-width: 125px;
    max-width: 125px;
    height: 100%;
    background-color: #f5fdfa;
`, h = x(n)`
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
`, S = [
  { title: "임차자문팀", value: "임차자문팀" },
  { title: "물류팀", value: "물류팀" },
  { title: "리테일팀", value: "리테일팀" },
  { title: "LM팀", value: "LM팀" },
  { title: "매입", value: "매입" },
  { title: "매각팀", value: "매각팀" },
  { title: "인테리어본부", value: "인테리어본부" }
], B = ({ handleConfirm: m }) => {
  const [f, v] = g(!1), [b, u] = g(!1);
  return /* @__PURE__ */ l(s, { children: [
    /* @__PURE__ */ l(y, { gap: "8px", children: [
      /* @__PURE__ */ l(n, { justifyContent: "space-between", alignItems: "center", children: [
        /* @__PURE__ */ e(i, { variant: "h6", fontWeight: "bold", children: "문의처리" }),
        /* @__PURE__ */ l(n, { gap: "8px", children: [
          /* @__PURE__ */ e(r, { variant: "contained", onClick: m, children: "저장" }),
          /* @__PURE__ */ e(r, { variant: "outlined", children: "취소" })
        ] })
      ] }),
      /* @__PURE__ */ e(n, { border: "1px solid #e0e0e0", children: /* @__PURE__ */ e(C, { style: { tableLayout: "fixed" }, children: /* @__PURE__ */ l(
        I,
        {
          sx: {
            td: { height: "40px", padding: "4px" }
          },
          children: [
            /* @__PURE__ */ l(c, { children: [
              /* @__PURE__ */ e(a, { sx: { width: "auto", textAlign: "left" }, children: /* @__PURE__ */ l(n, { alignItems: "center", gap: "10px", height: "100%", children: [
                /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(i, { variant: "body2", fontWeight: "bold", children: "상태" }) }),
                /* @__PURE__ */ e(h, { children: /* @__PURE__ */ l(
                  p,
                  {
                    select: !0,
                    style: { width: "195px" },
                    size: "small",
                    placeholder: "선택",
                    defaultValue: "접수",
                    children: [
                      /* @__PURE__ */ e(t, { value: "접수", children: "접수" }, "접수"),
                      /* @__PURE__ */ e(t, { value: "보류", children: "보류" }, "보류"),
                      /* @__PURE__ */ e(t, { value: "완료", children: "완료" }, "완료")
                    ]
                  }
                ) })
              ] }) }),
              /* @__PURE__ */ e(a, { colSpan: 2, sx: { width: "auto", textAlign: "left" }, children: /* @__PURE__ */ l(n, { alignItems: "center", gap: "10px", height: "100%", children: [
                /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(i, { variant: "body2", fontWeight: "bold", children: "처리방식" }) }),
                /* @__PURE__ */ l(h, { children: [
                  /* @__PURE__ */ e(i, { children: "업무등록" }),
                  /* @__PURE__ */ e(r, { variant: "outlined", onClick: () => u(!0), children: "[기회]업무" }),
                  /* @__PURE__ */ e(r, { variant: "outlined", children: "[이관]업무" }),
                  /* @__PURE__ */ e(i, { children: "|" }),
                  /* @__PURE__ */ e(i, { children: "딜" }),
                  /* @__PURE__ */ e(r, { variant: "outlined", children: "딜 등록" }),
                  /* @__PURE__ */ e(i, { children: "|" }),
                  /* @__PURE__ */ e(i, { children: "기타" }),
                  /* @__PURE__ */ e(r, { variant: "outlined", children: "콜 이력으로 등록" })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(a, { colSpan: 3, sx: { width: "auto", textAlign: "left" }, children: /* @__PURE__ */ l(n, { alignItems: "center", gap: "10px", height: "100%", children: [
              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(i, { variant: "body2", fontWeight: "bold", children: "담당부서" }) }),
              /* @__PURE__ */ e(h, { children: f ? /* @__PURE__ */ e(s, { children: /* @__PURE__ */ e(
                T,
                {
                  id: "channel",
                  size: "small",
                  options: S,
                  filterSelectedOptions: !0,
                  getOptionLabel: (o) => o.title,
                  sx: { width: "192px" },
                  renderInput: (o) => /* @__PURE__ */ e(
                    p,
                    {
                      ...o,
                      placeholder: "선택"
                    }
                  )
                }
              ) }) : /* @__PURE__ */ l(s, { children: [
                /* @__PURE__ */ e(i, { children: "지정 전" }),
                /* @__PURE__ */ e(r, { onClick: () => v(!0), children: "+" })
              ] }) })
            ] }) }) }),
            /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(a, { colSpan: 3, sx: { width: "auto", textAlign: "left" }, children: /* @__PURE__ */ l(n, { alignItems: "center", gap: "10px", height: "100%", children: [
              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(i, { variant: "body2", fontWeight: "bold", children: "결과" }) }),
              /* @__PURE__ */ e(h, { children: /* @__PURE__ */ l(
                p,
                {
                  select: !0,
                  style: { width: "195px" },
                  size: "small",
                  placeholder: "선택",
                  children: [
                    /* @__PURE__ */ e(t, { value: "기회 전달", children: "기회 전달" }, "기회 전달"),
                    /* @__PURE__ */ e(t, { value: "문의 전달", children: "문의 전달" }, "문의 전달"),
                    /* @__PURE__ */ e(t, { value: "딜 생성, 이관", children: "딜 생성, 이관" }, "딜 생성, 이관"),
                    /* @__PURE__ */ e(t, { value: "블랙리스트", children: "블랙리스트" }, "블랙리스트"),
                    /* @__PURE__ */ e(t, { value: "니즈 없음", children: "니즈 없음" }, "니즈 없음"),
                    /* @__PURE__ */ e(t, { value: "부재 종료", children: "부재 종료" }, "부재 종료"),
                    /* @__PURE__ */ e(t, { value: "스팸", children: "스팸" }, "스팸")
                  ]
                }
              ) })
            ] }) }) }),
            /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(a, { colSpan: 3, sx: { width: "auto", textAlign: "left" }, children: /* @__PURE__ */ l(n, { alignItems: "center", gap: "10px", height: "100%", children: [
              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(i, { variant: "body2", fontWeight: "bold", children: "처리 이력" }) }),
              /* @__PURE__ */ e(h, { children: "처리 이력" })
            ] }) }) })
          ]
        }
      ) }) })
    ] }),
    /* @__PURE__ */ e(w, { open: b, onClose: () => u(!1) })
  ] });
};
export {
  B as default
};
