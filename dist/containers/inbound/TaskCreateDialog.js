import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { n as R, c as E } from "../../createTheme-9d913e0e.js";
import { useState as f } from "react";
import { Column as b } from "../../components/Column/index.js";
import { Row as i } from "../../components/Row/index.js";
import "../../theme-dd41183d.js";
import { D as H, a as $, b as J, c as K, T as r, M as h, F as g, C as x, d as Q, e as B, f as U, A as p, I as c, g as X, h as Y } from "../../TextField-fc4262cc.js";
import { T as n, a as Z, b as ee, c as s, d as a, B as D } from "../../TableRow-2b4ac02e.js";
const d = R(i)`
    display: flex;
    align-items: center;
    padding: 10px;
    min-width: 125px;
    max-width: 125px;
    height: 100%;
    ${(w) => !w.noBgColor && E`
                background-color: #f5fdfa;
            `}
`, o = R(i)`
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
`, P = [
  { title: "상암", value: "상암" },
  { title: "도심", value: "도심" },
  { title: "판교/분당", value: "판교/분당" },
  { title: "송파/강동", value: "송파/강동" },
  { title: "강남", value: "강남" },
  { title: "마포/여의도", value: "마포/여의도" },
  { title: "서울", value: "서울" },
  { title: "기타", value: "기타" },
  { title: "미정", value: "미정" }
], S = [
  { title: "기계식 주차", value: "기계식 주차" },
  { title: "혼합 주차장", value: "혼합 주차장" },
  { title: "자주식 주차장", value: "자주식 주차장" },
  { title: "상관없음", value: "상관없음" }
], F = [
  { title: "중앙난방", value: "중앙난방" },
  { title: "개별난방", value: "개별난방" },
  { title: "미지정", value: "미지정" }
], L = [
  { title: "중앙냉방", value: "중앙냉방" },
  { title: "개별냉방", value: "개별냉방" },
  { title: "미지정", value: "미지정" }
], V = [
  { title: "있음", value: "있음" },
  { title: "없음", value: "없음" }
], I = [
  { title: "예", value: "예" },
  { title: "아니오", value: "아니오" }
], j = [
  { title: "전세", value: "전세" },
  { title: "월세", value: "월세" }
], he = ({ open: w, onClose: y }) => {
  const [A, G] = f(!0), [C, M] = f(!1), [N, _] = f(!1), [z, O] = f(!1), [v, T] = f(""), [u, W] = f({
    taskGroup: "업무그룹 선택",
    taskName: "",
    type: "client",
    manager: "choice",
    request: ""
  }), q = (l) => {
    switch (l) {
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
  }, k = (l) => {
    z && l === v ? (T(""), O(!1)) : O(!0);
  };
  return /* @__PURE__ */ e(
    H,
    {
      open: w,
      onClose: y,
      PaperProps: { sx: { borderRadius: "16px" } },
      children: /* @__PURE__ */ t(
        $,
        {
          expanded: A,
          onChange: () => G(!A),
          sx: { width: "530px" },
          children: [
            /* @__PURE__ */ e(J, { sx: { backgroundColor: "#F6F8FA" }, children: /* @__PURE__ */ e(n, { variant: "h6", fontWeight: "bold", children: q(u.taskGroup) }) }),
            /* @__PURE__ */ e(
              K,
              {
                sx: { padding: "30px", maxHeight: "600px", overflow: "auto" },
                children: /* @__PURE__ */ t(b, { gap: "15px", children: [
                  /* @__PURE__ */ t(i, { alignItems: "center", gap: "10px", children: [
                    /* @__PURE__ */ e(i, { justifyContent: "flex-end", width: "50px", children: /* @__PURE__ */ e(n, { variant: "subtitle2", children: "업무그룹" }) }),
                    /* @__PURE__ */ t(
                      r,
                      {
                        size: "small",
                        value: u.taskGroup,
                        onChange: (l) => W({ ...u, taskGroup: l.target.value }),
                        sx: { width: "420px" },
                        select: !0,
                        children: [
                          /* @__PURE__ */ e(h, { value: "업무그룹 선택", children: "선택" }),
                          /* @__PURE__ */ e(h, { value: "office", children: "[기회]오피스" }),
                          /* @__PURE__ */ e(h, { value: "retail", children: "[기회]리테일" }),
                          /* @__PURE__ */ e(h, { value: "warehouse", children: "[기회]물류창고" }),
                          /* @__PURE__ */ e(h, { value: "interior", children: "[기회]인테리어" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ t(i, { alignItems: "center", gap: "10px", children: [
                    /* @__PURE__ */ t(i, { justifyContent: "flex-end", width: "50px", children: [
                      /* @__PURE__ */ e(n, { color: "red", children: "*" }),
                      /* @__PURE__ */ e(n, { variant: "subtitle2", children: "업무명" })
                    ] }),
                    /* @__PURE__ */ e(
                      r,
                      {
                        size: "small",
                        placeholder: "업무명을 입력해 주세요.",
                        sx: { width: "420px" }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ t(i, { alignItems: "center", gap: "10px", children: [
                    /* @__PURE__ */ t(i, { justifyContent: "flex-end", width: "50px", children: [
                      /* @__PURE__ */ e(n, { color: "red", children: "*" }),
                      /* @__PURE__ */ e(n, { variant: "subtitle2", children: "종류" })
                    ] }),
                    /* @__PURE__ */ t(
                      r,
                      {
                        size: "small",
                        value: u.type,
                        onChange: (l) => W({ ...u, type: l.target.value }),
                        sx: { width: "140px" },
                        select: !0,
                        children: [
                          /* @__PURE__ */ e(h, { value: "client", children: "거래처" }),
                          /* @__PURE__ */ e(h, { value: "customer", children: "고객" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ t(i, { alignItems: "center", gap: "10px", children: [
                    /* @__PURE__ */ t(i, { justifyContent: "space-between", width: "50px", children: [
                      /* @__PURE__ */ e(n, { color: "red", children: "*" }),
                      /* @__PURE__ */ e(n, { variant: "subtitle2", children: "담당자" })
                    ] }),
                    /* @__PURE__ */ t(
                      r,
                      {
                        size: "small",
                        value: u.manager,
                        onChange: (l) => W({ ...u, manager: l.target.value }),
                        sx: { width: "120px" },
                        select: !0,
                        disabled: C,
                        children: [
                          /* @__PURE__ */ e(h, { value: "choice", children: "선택" }),
                          /* @__PURE__ */ e(h, { value: "moon", children: "문재민" }),
                          /* @__PURE__ */ e(h, { value: "lim", children: "임준혁" }),
                          /* @__PURE__ */ e(h, { value: "kim", children: "김아무개" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ e(
                      g,
                      {
                        control: /* @__PURE__ */ e(
                          x,
                          {
                            value: C,
                            onChange: (l, m) => M(m)
                          }
                        ),
                        label: /* @__PURE__ */ e(n, { variant: "subtitle2", children: "지정요청" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ t(i, { alignItems: "center", gap: "10px", children: [
                    /* @__PURE__ */ e(i, { justifyContent: "flex-end", width: "50px", children: /* @__PURE__ */ e(n, { variant: "subtitle2", children: "요청" }) }),
                    /* @__PURE__ */ t(b, { position: "relative", flex: 1, children: [
                      /* @__PURE__ */ e(
                        r,
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
                        i,
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
                            g,
                            {
                              control: /* @__PURE__ */ e(
                                x,
                                {
                                  value: N,
                                  onChange: (l, m) => _(m)
                                }
                              ),
                              label: /* @__PURE__ */ e(n, { variant: "caption", children: "완료희망일 입력" })
                            }
                          )
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ t(b, { children: [
                    /* @__PURE__ */ t(
                      Q,
                      {
                        value: v,
                        onChange: (l, m) => T(m),
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
                              onClick: () => k("connect"),
                              sx: {
                                width: "49%",
                                borderRadius: "6px 6px 0 0"
                              }
                            }
                          ),
                          /* @__PURE__ */ e(i, { flex: 1 }),
                          /* @__PURE__ */ e(
                            B,
                            {
                              label: "정보",
                              value: "info",
                              onClick: () => k("info"),
                              sx: {
                                width: "49%",
                                borderRadius: "6px 6px 0 0"
                              }
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ t(
                      U,
                      {
                        timeout: "auto",
                        in: z,
                        sx: {
                          border: "1px solid #BBBBBB",
                          borderRadius: "0px 0px 6px 6px"
                        },
                        children: [
                          /* @__PURE__ */ t(b, { height: "240px", p: "10px 15px", children: [
                            v === "connect" && /* @__PURE__ */ t(b, { children: [
                              /* @__PURE__ */ t(i, { gap: "5px", children: [
                                /* @__PURE__ */ t(
                                  r,
                                  {
                                    defaultValue: "client",
                                    size: "small",
                                    sx: { width: "120px" },
                                    select: !0,
                                    children: [
                                      /* @__PURE__ */ e(h, { value: "client", children: "거래처" }),
                                      /* @__PURE__ */ e(h, { value: "customer", children: "고객" }),
                                      /* @__PURE__ */ e(h, { value: "deal", children: "딜" })
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ e(
                                  r,
                                  {
                                    size: "small",
                                    placeholder: "명칭, ID로 검색",
                                    fullWidth: !0
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ t("ul", { children: [
                                /* @__PURE__ */ e("li", { children: "거래처" }),
                                /* @__PURE__ */ e("li", { children: "고객" }),
                                /* @__PURE__ */ e("li", { children: "딜" })
                              ] })
                            ] }),
                            v === "info" && /* @__PURE__ */ e(Z, { style: { tableLayout: "fixed" }, children: /* @__PURE__ */ t(
                              ee,
                              {
                                sx: {
                                  td: { height: "40px", padding: "4px" }
                                },
                                children: [
                                  /* @__PURE__ */ e(s, { children: /* @__PURE__ */ e(
                                    a,
                                    {
                                      sx: { width: "auto", textAlign: "left" },
                                      colSpan: 2,
                                      children: /* @__PURE__ */ t(
                                        i,
                                        {
                                          alignItems: "center",
                                          gap: "10px",
                                          height: "100%",
                                          children: [
                                            /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                              n,
                                              {
                                                variant: "body2",
                                                fontWeight: "bold",
                                                children: "희망지역"
                                              }
                                            ) }),
                                            /* @__PURE__ */ e(o, { children: /* @__PURE__ */ e(
                                              p,
                                              {
                                                id: "region",
                                                size: "small",
                                                options: P,
                                                defaultValue: P[0],
                                                filterSelectedOptions: !0,
                                                fullWidth: !0,
                                                getOptionLabel: (l) => l.title,
                                                renderInput: (l) => /* @__PURE__ */ e(r, { ...l, placeholder: "선택" })
                                              }
                                            ) })
                                          ]
                                        }
                                      )
                                    }
                                  ) }),
                                  /* @__PURE__ */ t(s, { children: [
                                    /* @__PURE__ */ e(
                                      a,
                                      {
                                        sx: { width: "auto", textAlign: "left" },
                                        children: /* @__PURE__ */ t(
                                          i,
                                          {
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "100%",
                                            children: [
                                              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                                n,
                                                {
                                                  variant: "body2",
                                                  fontWeight: "bold",
                                                  children: "이전 희망일자"
                                                }
                                              ) }),
                                              /* @__PURE__ */ e(o, { children: /* @__PURE__ */ e(r, { size: "small", fullWidth: !0 }) })
                                            ]
                                          }
                                        )
                                      }
                                    ),
                                    /* @__PURE__ */ e(
                                      a,
                                      {
                                        sx: { width: "auto", textAlign: "left" },
                                        children: /* @__PURE__ */ t(
                                          i,
                                          {
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "100%",
                                            children: [
                                              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                                n,
                                                {
                                                  variant: "body2",
                                                  fontWeight: "bold",
                                                  children: "전용면적(평)"
                                                }
                                              ) }),
                                              /* @__PURE__ */ e(o, { children: /* @__PURE__ */ t(i, { gap: "8px", children: [
                                                /* @__PURE__ */ e(
                                                  r,
                                                  {
                                                    size: "small",
                                                    fullWidth: !0,
                                                    InputProps: {
                                                      startAdornment: /* @__PURE__ */ e(c, { position: "start", children: "최소" })
                                                    }
                                                  }
                                                ),
                                                /* @__PURE__ */ e(
                                                  r,
                                                  {
                                                    size: "small",
                                                    fullWidth: !0,
                                                    InputProps: {
                                                      startAdornment: /* @__PURE__ */ e(c, { position: "start", children: "최대" })
                                                    }
                                                  }
                                                )
                                              ] }) })
                                            ]
                                          }
                                        )
                                      }
                                    )
                                  ] }),
                                  /* @__PURE__ */ t(s, { children: [
                                    /* @__PURE__ */ e(
                                      a,
                                      {
                                        sx: { width: "auto", textAlign: "left" },
                                        children: /* @__PURE__ */ t(
                                          i,
                                          {
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "100%",
                                            children: [
                                              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                                n,
                                                {
                                                  variant: "body2",
                                                  fontWeight: "bold",
                                                  children: "월고정비(만원)"
                                                }
                                              ) }),
                                              /* @__PURE__ */ e(o, { children: /* @__PURE__ */ t(i, { gap: "8px", children: [
                                                /* @__PURE__ */ e(
                                                  r,
                                                  {
                                                    size: "small",
                                                    fullWidth: !0,
                                                    InputProps: {
                                                      startAdornment: /* @__PURE__ */ e(c, { position: "start", children: "최소" })
                                                    }
                                                  }
                                                ),
                                                /* @__PURE__ */ e(
                                                  r,
                                                  {
                                                    size: "small",
                                                    fullWidth: !0,
                                                    InputProps: {
                                                      startAdornment: /* @__PURE__ */ e(c, { position: "start", children: "최대" })
                                                    }
                                                  }
                                                )
                                              ] }) })
                                            ]
                                          }
                                        )
                                      }
                                    ),
                                    /* @__PURE__ */ e(
                                      a,
                                      {
                                        sx: { width: "auto", textAlign: "left" },
                                        children: /* @__PURE__ */ t(
                                          i,
                                          {
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "100%",
                                            children: [
                                              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                                n,
                                                {
                                                  variant: "body2",
                                                  fontWeight: "bold",
                                                  children: "NOC(만원)"
                                                }
                                              ) }),
                                              /* @__PURE__ */ e(o, { children: /* @__PURE__ */ t(i, { gap: "8px", children: [
                                                /* @__PURE__ */ e(
                                                  r,
                                                  {
                                                    size: "small",
                                                    fullWidth: !0,
                                                    InputProps: {
                                                      startAdornment: /* @__PURE__ */ e(c, { position: "start", children: "최소" })
                                                    }
                                                  }
                                                ),
                                                /* @__PURE__ */ e(
                                                  r,
                                                  {
                                                    size: "small",
                                                    fullWidth: !0,
                                                    InputProps: {
                                                      startAdornment: /* @__PURE__ */ e(c, { position: "start", children: "최대" })
                                                    }
                                                  }
                                                )
                                              ] }) })
                                            ]
                                          }
                                        )
                                      }
                                    )
                                  ] }),
                                  /* @__PURE__ */ t(s, { children: [
                                    /* @__PURE__ */ e(
                                      a,
                                      {
                                        sx: { width: "auto", textAlign: "left" },
                                        children: /* @__PURE__ */ t(
                                          i,
                                          {
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "100%",
                                            children: [
                                              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                                n,
                                                {
                                                  variant: "body2",
                                                  fontWeight: "bold",
                                                  children: "보증금(만원)"
                                                }
                                              ) }),
                                              /* @__PURE__ */ e(o, { children: /* @__PURE__ */ t(i, { gap: "8px", children: [
                                                /* @__PURE__ */ e(
                                                  r,
                                                  {
                                                    size: "small",
                                                    fullWidth: !0,
                                                    InputProps: {
                                                      startAdornment: /* @__PURE__ */ e(c, { position: "start", children: "최소" })
                                                    }
                                                  }
                                                ),
                                                /* @__PURE__ */ e(
                                                  r,
                                                  {
                                                    size: "small",
                                                    fullWidth: !0,
                                                    InputProps: {
                                                      startAdornment: /* @__PURE__ */ e(c, { position: "start", children: "최대" })
                                                    }
                                                  }
                                                )
                                              ] }) })
                                            ]
                                          }
                                        )
                                      }
                                    ),
                                    /* @__PURE__ */ e(
                                      a,
                                      {
                                        sx: { width: "auto", textAlign: "left" },
                                        children: /* @__PURE__ */ t(
                                          i,
                                          {
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "100%",
                                            children: [
                                              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                                n,
                                                {
                                                  variant: "body2",
                                                  fontWeight: "bold",
                                                  children: "사무실 사용 인원"
                                                }
                                              ) }),
                                              /* @__PURE__ */ e(o, { children: /* @__PURE__ */ e(
                                                r,
                                                {
                                                  size: "small",
                                                  fullWidth: !0,
                                                  InputProps: {
                                                    endAdornment: /* @__PURE__ */ e(c, { position: "start", children: "명" })
                                                  }
                                                }
                                              ) })
                                            ]
                                          }
                                        )
                                      }
                                    )
                                  ] }),
                                  /* @__PURE__ */ t(s, { children: [
                                    /* @__PURE__ */ e(
                                      a,
                                      {
                                        sx: { width: "auto", textAlign: "left" },
                                        children: /* @__PURE__ */ t(
                                          i,
                                          {
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "100%",
                                            children: [
                                              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                                n,
                                                {
                                                  variant: "body2",
                                                  fontWeight: "bold",
                                                  children: "주차장 유형"
                                                }
                                              ) }),
                                              /* @__PURE__ */ e(o, { children: /* @__PURE__ */ e(
                                                p,
                                                {
                                                  id: "park-type",
                                                  size: "small",
                                                  options: S,
                                                  defaultValue: S[0],
                                                  filterSelectedOptions: !0,
                                                  fullWidth: !0,
                                                  getOptionLabel: (l) => l.title,
                                                  renderInput: (l) => /* @__PURE__ */ e(r, { ...l, placeholder: "선택" })
                                                }
                                              ) })
                                            ]
                                          }
                                        )
                                      }
                                    ),
                                    /* @__PURE__ */ e(
                                      a,
                                      {
                                        sx: { width: "auto", textAlign: "left" },
                                        children: /* @__PURE__ */ t(
                                          i,
                                          {
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "100%",
                                            children: [
                                              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                                n,
                                                {
                                                  variant: "body2",
                                                  fontWeight: "bold",
                                                  children: "엘리베이터"
                                                }
                                              ) }),
                                              /* @__PURE__ */ e(o, { children: /* @__PURE__ */ e(
                                                p,
                                                {
                                                  id: "elevator",
                                                  size: "small",
                                                  options: V,
                                                  defaultValue: V[0],
                                                  filterSelectedOptions: !0,
                                                  fullWidth: !0,
                                                  getOptionLabel: (l) => l.title,
                                                  renderInput: (l) => /* @__PURE__ */ e(r, { ...l, placeholder: "선택" })
                                                }
                                              ) })
                                            ]
                                          }
                                        )
                                      }
                                    )
                                  ] }),
                                  /* @__PURE__ */ t(s, { children: [
                                    /* @__PURE__ */ e(
                                      a,
                                      {
                                        sx: { width: "auto", textAlign: "left" },
                                        children: /* @__PURE__ */ t(
                                          i,
                                          {
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "100%",
                                            children: [
                                              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                                n,
                                                {
                                                  variant: "body2",
                                                  fontWeight: "bold",
                                                  children: "냉방 유형"
                                                }
                                              ) }),
                                              /* @__PURE__ */ e(o, { children: /* @__PURE__ */ e(
                                                p,
                                                {
                                                  id: "cooling",
                                                  size: "small",
                                                  options: L,
                                                  defaultValue: L[0],
                                                  filterSelectedOptions: !0,
                                                  fullWidth: !0,
                                                  getOptionLabel: (l) => l.title,
                                                  renderInput: (l) => /* @__PURE__ */ e(r, { ...l, placeholder: "선택" })
                                                }
                                              ) })
                                            ]
                                          }
                                        )
                                      }
                                    ),
                                    /* @__PURE__ */ e(
                                      a,
                                      {
                                        sx: { width: "auto", textAlign: "left" },
                                        children: /* @__PURE__ */ t(
                                          i,
                                          {
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "100%",
                                            children: [
                                              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                                n,
                                                {
                                                  variant: "body2",
                                                  fontWeight: "bold",
                                                  children: "난방 유형"
                                                }
                                              ) }),
                                              /* @__PURE__ */ e(o, { children: /* @__PURE__ */ e(
                                                p,
                                                {
                                                  id: "heating",
                                                  size: "small",
                                                  options: F,
                                                  defaultValue: F[0],
                                                  filterSelectedOptions: !0,
                                                  fullWidth: !0,
                                                  getOptionLabel: (l) => l.title,
                                                  renderInput: (l) => /* @__PURE__ */ e(r, { ...l, placeholder: "선택" })
                                                }
                                              ) })
                                            ]
                                          }
                                        )
                                      }
                                    )
                                  ] }),
                                  /* @__PURE__ */ t(s, { children: [
                                    /* @__PURE__ */ e(
                                      a,
                                      {
                                        sx: { width: "auto", textAlign: "left" },
                                        children: /* @__PURE__ */ t(
                                          i,
                                          {
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "100%",
                                            children: [
                                              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                                n,
                                                {
                                                  variant: "body2",
                                                  fontWeight: "bold",
                                                  children: "인테리어"
                                                }
                                              ) }),
                                              /* @__PURE__ */ e(o, { children: /* @__PURE__ */ e(
                                                p,
                                                {
                                                  id: "interior",
                                                  size: "small",
                                                  options: I,
                                                  defaultValue: I[0],
                                                  filterSelectedOptions: !0,
                                                  fullWidth: !0,
                                                  getOptionLabel: (l) => l.title,
                                                  renderInput: (l) => /* @__PURE__ */ e(r, { ...l, placeholder: "선택" })
                                                }
                                              ) })
                                            ]
                                          }
                                        )
                                      }
                                    ),
                                    /* @__PURE__ */ e(
                                      a,
                                      {
                                        sx: { width: "auto", textAlign: "left" },
                                        children: /* @__PURE__ */ t(
                                          i,
                                          {
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "100%",
                                            children: [
                                              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                                n,
                                                {
                                                  variant: "body2",
                                                  fontWeight: "bold",
                                                  children: "층 옵션"
                                                }
                                              ) }),
                                              /* @__PURE__ */ e(o, { children: /* @__PURE__ */ t(X, { sx: { flexDirection: "row" }, children: [
                                                /* @__PURE__ */ e(g, { control: /* @__PURE__ */ e(x, {}), label: "1층만" }),
                                                /* @__PURE__ */ e(g, { control: /* @__PURE__ */ e(x, {}), label: "1층 제외" }),
                                                /* @__PURE__ */ e(g, { control: /* @__PURE__ */ e(x, {}), label: "지하만" }),
                                                /* @__PURE__ */ e(g, { control: /* @__PURE__ */ e(x, {}), label: "지하 제외" })
                                              ] }) })
                                            ]
                                          }
                                        )
                                      }
                                    )
                                  ] }),
                                  /* @__PURE__ */ t(s, { children: [
                                    /* @__PURE__ */ e(
                                      a,
                                      {
                                        sx: { width: "auto", textAlign: "left" },
                                        children: /* @__PURE__ */ t(
                                          i,
                                          {
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "100%",
                                            children: [
                                              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                                n,
                                                {
                                                  variant: "body2",
                                                  fontWeight: "bold",
                                                  children: "주택형 사무실"
                                                }
                                              ) }),
                                              /* @__PURE__ */ e(o, { children: /* @__PURE__ */ e(
                                                p,
                                                {
                                                  id: "is-house-office",
                                                  size: "small",
                                                  options: I,
                                                  defaultValue: I[0],
                                                  filterSelectedOptions: !0,
                                                  fullWidth: !0,
                                                  getOptionLabel: (l) => l.title,
                                                  renderInput: (l) => /* @__PURE__ */ e(r, { ...l, placeholder: "선택" })
                                                }
                                              ) })
                                            ]
                                          }
                                        )
                                      }
                                    ),
                                    /* @__PURE__ */ e(
                                      a,
                                      {
                                        sx: { width: "auto", textAlign: "left" },
                                        children: /* @__PURE__ */ t(
                                          i,
                                          {
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "100%",
                                            children: [
                                              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                                n,
                                                {
                                                  variant: "body2",
                                                  fontWeight: "bold",
                                                  children: "전월세 구분"
                                                }
                                              ) }),
                                              /* @__PURE__ */ e(o, { children: /* @__PURE__ */ e(
                                                p,
                                                {
                                                  id: "fee-type",
                                                  size: "small",
                                                  options: j,
                                                  defaultValue: j[0],
                                                  filterSelectedOptions: !0,
                                                  fullWidth: !0,
                                                  getOptionLabel: (l) => l.title,
                                                  renderInput: (l) => /* @__PURE__ */ e(r, { ...l, placeholder: "선택" })
                                                }
                                              ) })
                                            ]
                                          }
                                        )
                                      }
                                    )
                                  ] }),
                                  /* @__PURE__ */ t(s, { children: [
                                    /* @__PURE__ */ e(
                                      a,
                                      {
                                        sx: { width: "auto", textAlign: "left" },
                                        children: /* @__PURE__ */ t(
                                          i,
                                          {
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "100%",
                                            children: [
                                              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                                n,
                                                {
                                                  variant: "body2",
                                                  fontWeight: "bold",
                                                  children: "준공 연도"
                                                }
                                              ) }),
                                              /* @__PURE__ */ e(o, { children: /* @__PURE__ */ e(
                                                r,
                                                {
                                                  size: "small",
                                                  fullWidth: !0,
                                                  InputProps: {
                                                    endAdornment: /* @__PURE__ */ e(c, { position: "start", children: "년 이내" })
                                                  }
                                                }
                                              ) })
                                            ]
                                          }
                                        )
                                      }
                                    ),
                                    /* @__PURE__ */ e(
                                      a,
                                      {
                                        sx: { width: "auto", textAlign: "left" },
                                        children: /* @__PURE__ */ t(
                                          i,
                                          {
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "100%",
                                            children: [
                                              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                                n,
                                                {
                                                  variant: "body2",
                                                  fontWeight: "bold",
                                                  children: "도보 거리"
                                                }
                                              ) }),
                                              /* @__PURE__ */ e(o, { children: /* @__PURE__ */ e(
                                                r,
                                                {
                                                  size: "small",
                                                  fullWidth: !0,
                                                  InputProps: {
                                                    endAdornment: /* @__PURE__ */ e(c, { position: "start", children: "분 이내" })
                                                  }
                                                }
                                              ) })
                                            ]
                                          }
                                        )
                                      }
                                    )
                                  ] }),
                                  /* @__PURE__ */ e(s, { children: /* @__PURE__ */ e(
                                    a,
                                    {
                                      sx: { width: "auto", textAlign: "left" },
                                      colSpan: 2,
                                      children: /* @__PURE__ */ t(
                                        i,
                                        {
                                          alignItems: "center",
                                          gap: "10px",
                                          height: "100%",
                                          children: [
                                            /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                                              n,
                                              {
                                                variant: "body2",
                                                fontWeight: "bold",
                                                children: "기타"
                                              }
                                            ) }),
                                            /* @__PURE__ */ e(o, { children: /* @__PURE__ */ e(r, { size: "small", fullWidth: !0 }) })
                                          ]
                                        }
                                      )
                                    }
                                  ) })
                                ]
                              }
                            ) })
                          ] }),
                          /* @__PURE__ */ t(
                            i,
                            {
                              gap: "10px",
                              sx: { alignItems: "center", borderTop: "1px solid #BBBBBB" },
                              children: [
                                /* @__PURE__ */ e("ul", { children: /* @__PURE__ */ e("li", { children: "관련업무" }) }),
                                /* @__PURE__ */ e(r, { size: "small", placeholder: "업무명, ID 검색" })
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e(
                    g,
                    {
                      control: /* @__PURE__ */ e(x, {}),
                      label: /* @__PURE__ */ e(n, { variant: "subtitle2", children: "연결업무 추가 등록" })
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ t(
              Y,
              {
                sx: {
                  justifyContent: "center",
                  borderTop: "1px solid #D9D9D9",
                  backgroundColor: "#F6F8FA"
                },
                children: [
                  /* @__PURE__ */ e(D, { variant: "outlined", onClick: y, children: "닫기" }),
                  /* @__PURE__ */ e(D, { variant: "contained", onClick: y, children: "등록" })
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
  he as default
};
