import {
  Accordion,
  AccordionDetails,
  AccordionSummary, Button,
  Checkbox, Collapse,
  Dialog, DialogActions,
  FormControlLabel,
  MenuItem, Tab, Tabs,
  TextField,
  Typography
} from "@mui/material"
import { FC, useState } from "react"
import { Column, Row } from "../../main";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface Form {
  taskGroup: string;
  taskName: string;
  type: string;
  manager: string;
  request?: string;
}

const TaskCreateDialog: FC<Props> = ({open, onClose}) => {
  const [expand, setExpand] = useState<boolean>(true)
  const [isManager, setIsManager] = useState<boolean>(false)
  const [isDesiredDate, setIsDesiredDate] = useState<boolean>(false)
  const [collapseOpen, setCollapseOpen] = useState<boolean>(false)
  const [tab, setTab] = useState<"connect" | "info" | "">("")
  const [form, setForm] = useState<Form>({
    taskGroup: "업무그룹 선택",
    taskName: "",
    type: "client",
    manager: "choice",
    request: "",
  })

  const convertTaskGroupToString = (str: string) => {
    switch (str) {
      case "office":
        return "[기회]오피스"
      case "retail":
        return "[기회]리테일"
      case "warehouse":
        return "[기회]물류창고"
      case "interior":
        return "[기회]인테리어"
      default:
        return "업무그룹 선택"
    }
  }

  const onClickTab = (t: string) => {
    if (collapseOpen && t === tab) {
      setTab("")
      setCollapseOpen(false)
    } else {
      setCollapseOpen(true)
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{sx: {borderRadius: "16px"}}}
    >
      <Accordion
        expanded={expand}
        onChange={() => setExpand(!expand)}
        sx={{width: "530px"}}
      >
        <AccordionSummary sx={{backgroundColor: "#F6F8FA"}}>
          <Typography variant="h6" fontWeight="bold">
            {convertTaskGroupToString(form.taskGroup)}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{padding: "30px", maxHeight: "600px", overflow: "auto"}}
        >
          <Column gap="15px">
            <Row alignItems="center" gap="10px">
              <Row justifyContent="flex-end" width="50px">
                <Typography variant="subtitle2">업무그룹</Typography>
              </Row>
              <TextField
                size="small"
                value={form.taskGroup}
                onChange={(e) =>
                  setForm({...form, taskGroup: e.target.value})
                }
                sx={{width: "420px"}}
                select
              >
                <MenuItem value="업무그룹 선택">선택</MenuItem>
                <MenuItem value="office">[기회]오피스</MenuItem>
                <MenuItem value="retail">[기회]리테일</MenuItem>
                <MenuItem value="warehouse">[기회]물류창고</MenuItem>
                <MenuItem value="interior">[기회]인테리어</MenuItem>
              </TextField>
            </Row>
            <Row alignItems="center" gap="10px">
              <Row justifyContent="flex-end" width="50px">
                <Typography color="red">*</Typography>
                <Typography variant="subtitle2">업무명</Typography>
              </Row>
              <TextField
                size="small"
                placeholder="업무명을 입력해 주세요."
                sx={{width: "420px"}}
              />
            </Row>
            <Row alignItems="center" gap="10px">
              <Row justifyContent="flex-end" width="50px">
                <Typography color="red">*</Typography>
                <Typography variant="subtitle2">종류</Typography>
              </Row>
              <TextField
                size="small"
                value={form.type}
                onChange={(e) => setForm({...form, type: e.target.value})}
                sx={{width: "140px"}}
                select
              >
                <MenuItem value="client">거래처</MenuItem>
                <MenuItem value="customer">고객</MenuItem>
              </TextField>
            </Row>
            <Row alignItems="center" gap="10px">
              <Row justifyContent="space-between" width="50px">
                <Typography color="red">*</Typography>
                <Typography variant="subtitle2">담당자</Typography>
              </Row>
              <TextField
                size="small"
                value={form.manager}
                onChange={(e) => setForm({...form, manager: e.target.value})}
                sx={{width: "120px"}}
                select
                disabled={isManager}
              >
                <MenuItem value="choice">선택</MenuItem>
                <MenuItem value="moon">문재민</MenuItem>
                <MenuItem value="lim">임준혁</MenuItem>
                <MenuItem value="kim">김아무개</MenuItem>
              </TextField>
              <FormControlLabel
                control={
                  <Checkbox
                    value={isManager}
                    onChange={(_, v) => setIsManager(v)}
                  />
                }
                label={<Typography variant="subtitle2">지정요청</Typography>}
              />
            </Row>
            <Row alignItems="center" gap="10px">
              <Row justifyContent="flex-end" width="50px">
                <Typography variant="subtitle2">요청</Typography>
              </Row>
              <Column position="relative" flex={1}>
                <TextField
                  size="small"
                  placeholder="요청사항 입력"
                  inputProps={{
                    style: {fontSize: "14px", marginBottom: "35px"},
                  }}
                  sx={{
                    position: "relative",
                  }}
                  rows={3}
                  multiline
                />
                <Row
                  display="flex"
                  alignItems="center"
                  position="absolute"
                  height="35px"
                  borderRadius="0 0 4px 4px"
                  m="2px"
                  p="0 15px"
                  sx={{backgroundColor: "#F6F8FA", inset: "auto 0 0 0"}}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={isDesiredDate}
                        onChange={(_, v) => setIsDesiredDate(v)}
                      />
                    }
                    label={
                      <Typography variant="caption">완료희망일 입력</Typography>
                    }
                  />
                  {/* <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="ko"
                  >
                    <DatePicker
                      format="YYYY-MM-DD"
                      disabled={!isDesiredDate}
                      slotProps={{
                        textField: {
                          size: "small",
                          inputProps: {
                            style: {
                              padding: "4px",
                              fontSize: "12px",
                            },
                          },
                          sx: {
                            width: "115px",
                            div: { paddingRight: "4px" },
                            svg: {
                              width: "18px",
                              height: "18px",
                              color: "#969696",
                            },
                          },
                        },
                        openPickerButton: {
                          size: "small",
                          style: { width: "20px", height: "20px" },
                        },
                      }}
                    />
                  </LocalizationProvider> */}
                </Row>
              </Column>
            </Row>
            <Column>
              <Tabs
                value={tab}
                onChange={(_, v) => setTab(v)}
                textColor="inherit"
                TabIndicatorProps={{
                  sx: {
                    bgcolor: "transparent",
                    borderBottom: "none",
                    transition: "none",
                  },
                }}
                sx={{
                  ".MuiTab-root": {
                    fontWeight: "bold",
                    bgcolor: "#D9D9D9",
                  },
                  ".Mui-selected": {
                    bgcolor: "#00BD79",
                    color: "white",
                    borderBottom: "none",
                  },
                }}
              >
                <Tab
                  label="연결"
                  value="connect"
                  onClick={() => onClickTab("connect")}
                  sx={{
                    width: "49%",
                    borderRadius: "6px 6px 0 0",
                  }}
                />
                <Row flex={1}/>
                <Tab
                  label="정보"
                  value="info"
                  onClick={() => onClickTab("info")}
                  sx={{
                    width: "49%",
                    borderRadius: "6px 6px 0 0",
                  }}
                />
              </Tabs>
              <Collapse
                timeout="auto"
                in={collapseOpen}
                sx={{
                  border: "1px solid #BBBBBB",
                  borderRadius: "0px 0px 6px 6px",
                }}
              >
                <Column height="240px" p="10px 15px">
                  {tab === "connect" && (
                    <Column>
                      <Row gap="5px">
                        <TextField
                          defaultValue="client"
                          size="small"
                          sx={{width: "120px"}}
                          select
                        >
                          <MenuItem value="client">거래처</MenuItem>
                          <MenuItem value="customer">고객</MenuItem>
                          <MenuItem value="deal">딜</MenuItem>
                        </TextField>
                        <TextField
                          size="small"
                          placeholder="명칭, ID로 검색"
                          fullWidth
                        />
                      </Row>
                      <ul>
                        <li>거래처</li>
                        <li>고객</li>
                        <li>딜</li>
                      </ul>
                    </Column>
                  )}
                  {tab === "info" && <div>정보</div>}
                </Column>
                <Row
                  gap="10px"
                  sx={{alignItems: "center", borderTop: "1px solid #BBBBBB"}}
                >
                  <ul>
                    <li>관련업무</li>
                  </ul>
                  <TextField size="small" placeholder="업무명, ID 검색"/>
                </Row>
              </Collapse>
            </Column>
            <FormControlLabel
              control={<Checkbox/>}
              label={
                <Typography variant="subtitle2">연결업무 추가 등록</Typography>
              }
            />
          </Column>
        </AccordionDetails>
        <DialogActions
          sx={{
            justifyContent: "center",
            borderTop: "1px solid #D9D9D9",
            backgroundColor: "#F6F8FA",
          }}
        >
          <Button variant="outlined" onClick={onClose}>
            닫기
          </Button>
          <Button variant="contained" onClick={onClose}>
            등록
          </Button>
        </DialogActions>
      </Accordion>
    </Dialog>
  )
}

export default TaskCreateDialog
