import { jsx as e, jsxs as l } from "react/jsx-runtime";
import { useState as s } from "react";
import { Column as d } from "../../components/Column/index.js";
import { Row as r } from "../../components/Row/index.js";
import "../../theme-5726a14a.js";
import { D as j, A, a as M, b as R, T as a, M as i, F as x, C as m, c as G, d as B, e as P, f as S } from "../../TextField-19a51cc9.js";
import { T as t, B as D } from "../../Button-30aae85a.js";
const N = ({ open: k, onClose: p }) => {
  const [g, T] = s(!0), [b, y] = s(!1), [F, I] = s(!1), [f, v] = s(!1), [h, C] = s(""), [o, u] = s({
    taskGroup: "업무그룹 선택",
    taskName: "",
    type: "client",
    manager: "choice",
    request: ""
  }), z = (n) => {
    switch (n) {
      case "office":
        return "[기회]오피스";
      case "retail":
        return "[기회]리테일";
      case "warehouse":
        return "[기회]물류창고";
      case "interior":
        return "[기회]인테리어";
      default:
        return "업무그룹 선택";
    }
  }, w = (n) => {
    f && n === h ? (C(""), v(!1)) : v(!0);
  };
  return /* @__PURE__ */ e(
    j,
    {
      open: k,
      onClose: p,
      PaperProps: { sx: { borderRadius: "16px" } },
      children: /* @__PURE__ */ l(
        A,
        {
          expanded: g,
          onChange: () => T(!g),
          sx: { width: "530px" },
          children: [
            /* @__PURE__ */ e(M, { sx: { backgroundColor: "#F6F8FA" }, children: /* @__PURE__ */ e(t, { variant: "h6", fontWeight: "bold", children: z(o.taskGroup) }) }),
            /* @__PURE__ */ e(
              R,
              {
                sx: { padding: "30px", maxHeight: "600px", overflow: "auto" },
                children: /* @__PURE__ */ l(d, { gap: "15px", children: [
                  /* @__PURE__ */ l(r, { alignItems: "center", gap: "10px", children: [
                    /* @__PURE__ */ e(r, { justifyContent: "flex-end", width: "50px", children: /* @__PURE__ */ e(t, { variant: "subtitle2", children: "업무그룹" }) }),
                    /* @__PURE__ */ l(
                      a,
                      {
                        size: "small",
                        value: o.taskGroup,
                        onChange: (n) => u({ ...o, taskGroup: n.target.value }),
                        sx: { width: "420px" },
                        select: !0,
                        children: [
                          /* @__PURE__ */ e(i, { value: "업무그룹 선택", children: "선택" }),
                          /* @__PURE__ */ e(i, { value: "office", children: "[기회]오피스" }),
                          /* @__PURE__ */ e(i, { value: "retail", children: "[기회]리테일" }),
                          /* @__PURE__ */ e(i, { value: "warehouse", children: "[기회]물류창고" }),
                          /* @__PURE__ */ e(i, { value: "interior", children: "[기회]인테리어" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l(r, { alignItems: "center", gap: "10px", children: [
                    /* @__PURE__ */ l(r, { justifyContent: "flex-end", width: "50px", children: [
                      /* @__PURE__ */ e(t, { color: "red", children: "*" }),
                      /* @__PURE__ */ e(t, { variant: "subtitle2", children: "업무명" })
                    ] }),
                    /* @__PURE__ */ e(
                      a,
                      {
                        size: "small",
                        placeholder: "업무명을 입력해 주세요.",
                        sx: { width: "420px" }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l(r, { alignItems: "center", gap: "10px", children: [
                    /* @__PURE__ */ l(r, { justifyContent: "flex-end", width: "50px", children: [
                      /* @__PURE__ */ e(t, { color: "red", children: "*" }),
                      /* @__PURE__ */ e(t, { variant: "subtitle2", children: "종류" })
                    ] }),
                    /* @__PURE__ */ l(
                      a,
                      {
                        size: "small",
                        value: o.type,
                        onChange: (n) => u({ ...o, type: n.target.value }),
                        sx: { width: "140px" },
                        select: !0,
                        children: [
                          /* @__PURE__ */ e(i, { value: "client", children: "거래처" }),
                          /* @__PURE__ */ e(i, { value: "customer", children: "고객" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l(r, { alignItems: "center", gap: "10px", children: [
                    /* @__PURE__ */ l(r, { justifyContent: "space-between", width: "50px", children: [
                      /* @__PURE__ */ e(t, { color: "red", children: "*" }),
                      /* @__PURE__ */ e(t, { variant: "subtitle2", children: "담당자" })
                    ] }),
                    /* @__PURE__ */ l(
                      a,
                      {
                        size: "small",
                        value: o.manager,
                        onChange: (n) => u({ ...o, manager: n.target.value }),
                        sx: { width: "120px" },
                        select: !0,
                        disabled: b,
                        children: [
                          /* @__PURE__ */ e(i, { value: "choice", children: "선택" }),
                          /* @__PURE__ */ e(i, { value: "moon", children: "문재민" }),
                          /* @__PURE__ */ e(i, { value: "lim", children: "임준혁" }),
                          /* @__PURE__ */ e(i, { value: "kim", children: "김아무개" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ e(
                      x,
                      {
                        control: /* @__PURE__ */ e(
                          m,
                          {
                            value: b,
                            onChange: (n, c) => y(c)
                          }
                        ),
                        label: /* @__PURE__ */ e(t, { variant: "subtitle2", children: "지정요청" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l(r, { alignItems: "center", gap: "10px", children: [
                    /* @__PURE__ */ e(r, { justifyContent: "flex-end", width: "50px", children: /* @__PURE__ */ e(t, { variant: "subtitle2", children: "요청" }) }),
                    /* @__PURE__ */ l(d, { position: "relative", flex: 1, children: [
                      /* @__PURE__ */ e(
                        a,
                        {
                          size: "small",
                          placeholder: "요청사항 입력",
                          inputProps: {
                            style: { fontSize: "14px", marginBottom: "35px" }
                          },
                          sx: {
                            position: "relative"
                          },
                          rows: 3,
                          multiline: !0
                        }
                      ),
                      /* @__PURE__ */ e(
                        r,
                        {
                          display: "flex",
                          alignItems: "center",
                          position: "absolute",
                          height: "35px",
                          borderRadius: "0 0 4px 4px",
                          m: "2px",
                          p: "0 15px",
                          sx: { backgroundColor: "#F6F8FA", inset: "auto 0 0 0" },
                          children: /* @__PURE__ */ e(
                            x,
                            {
                              control: /* @__PURE__ */ e(
                                m,
                                {
                                  value: F,
                                  onChange: (n, c) => I(c)
                                }
                              ),
                              label: /* @__PURE__ */ e(t, { variant: "caption", children: "완료희망일 입력" })
                            }
                          )
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ l(d, { children: [
                    /* @__PURE__ */ l(
                      G,
                      {
                        value: h,
                        onChange: (n, c) => C(c),
                        textColor: "inherit",
                        TabIndicatorProps: {
                          sx: {
                            bgcolor: "transparent",
                            borderBottom: "none",
                            transition: "none"
                          }
                        },
                        sx: {
                          ".MuiTab-root": {
                            fontWeight: "bold",
                            bgcolor: "#D9D9D9"
                          },
                          ".Mui-selected": {
                            bgcolor: "#00BD79",
                            color: "white",
                            borderBottom: "none"
                          }
                        },
                        children: [
                          /* @__PURE__ */ e(
                            B,
                            {
                              label: "연결",
                              value: "connect",
                              onClick: () => w("connect"),
                              sx: {
                                width: "49%",
                                borderRadius: "6px 6px 0 0"
                              }
                            }
                          ),
                          /* @__PURE__ */ e(r, { flex: 1 }),
                          /* @__PURE__ */ e(
                            B,
                            {
                              label: "정보",
                              value: "info",
                              onClick: () => w("info"),
                              sx: {
                                width: "49%",
                                borderRadius: "6px 6px 0 0"
                              }
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ l(
                      P,
                      {
                        timeout: "auto",
                        in: f,
                        sx: {
                          border: "1px solid #BBBBBB",
                          borderRadius: "0px 0px 6px 6px"
                        },
                        children: [
                          /* @__PURE__ */ l(d, { height: "240px", p: "10px 15px", children: [
                            h === "connect" && /* @__PURE__ */ l(d, { children: [
                              /* @__PURE__ */ l(r, { gap: "5px", children: [
                                /* @__PURE__ */ l(
                                  a,
                                  {
                                    defaultValue: "client",
                                    size: "small",
                                    sx: { width: "120px" },
                                    select: !0,
                                    children: [
                                      /* @__PURE__ */ e(i, { value: "client", children: "거래처" }),
                                      /* @__PURE__ */ e(i, { value: "customer", children: "고객" }),
                                      /* @__PURE__ */ e(i, { value: "deal", children: "딜" })
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ e(
                                  a,
                                  {
                                    size: "small",
                                    placeholder: "명칭, ID로 검색",
                                    fullWidth: !0
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ l("ul", { children: [
                                /* @__PURE__ */ e("li", { children: "거래처" }),
                                /* @__PURE__ */ e("li", { children: "고객" }),
                                /* @__PURE__ */ e("li", { children: "딜" })
                              ] })
                            ] }),
                            h === "info" && /* @__PURE__ */ e("div", { children: "정보" })
                          ] }),
                          /* @__PURE__ */ l(
                            r,
                            {
                              gap: "10px",
                              sx: { alignItems: "center", borderTop: "1px solid #BBBBBB" },
                              children: [
                                /* @__PURE__ */ e("ul", { children: /* @__PURE__ */ e("li", { children: "관련업무" }) }),
                                /* @__PURE__ */ e(a, { size: "small", placeholder: "업무명, ID 검색" })
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e(
                    x,
                    {
                      control: /* @__PURE__ */ e(m, {}),
                      label: /* @__PURE__ */ e(t, { variant: "subtitle2", children: "연결업무 추가 등록" })
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ l(
              S,
              {
                sx: {
                  justifyContent: "center",
                  borderTop: "1px solid #D9D9D9",
                  backgroundColor: "#F6F8FA"
                },
                children: [
                  /* @__PURE__ */ e(D, { variant: "outlined", onClick: p, children: "닫기" }),
                  /* @__PURE__ */ e(D, { variant: "contained", onClick: p, children: "등록" })
                ]
              }
            )
          ]
        }
      )
    }
  );
};
export {
  N as default
};
