import {
  Accordion,
  AccordionDetails,
  AccordionSummary, Button,
  Checkbox, Collapse,
  Dialog, DialogActions,
  FormControlLabel,
  MenuItem, Tab, Tabs,
  TextField,
  Typography,
  Table, TableBody,
  TableRow, TableCell,
  Autocomplete, InputAdornment,
  FormGroup, css
} from "@mui/material"
import styled from "@emotion/styled";
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

interface TitleCellProps {
  noBgColor?: boolean;
}

const TitleCell = styled(Row)<TitleCellProps>`
    display: flex;
    align-items: center;
    padding: 10px;
    min-width: 125px;
    max-width: 125px;
    height: 100%;
    ${(props) =>
  !props.noBgColor &&
  css`
                background-color: #f5fdfa;
            `}
`;
const ContentCell = styled(Row)`
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
`;

const regionOptions = [
  { title: "상암", value: "상암" },
  { title: "도심", value: "도심" },
  { title: "판교/분당", value: "판교/분당" },
  { title: "송파/강동", value: "송파/강동" },
  { title: "강남", value: "강남" },
  { title: "마포/여의도", value: "마포/여의도" },
  { title: "서울", value: "서울" },
  { title: "기타", value: "기타" },
  { title: "미정", value: "미정" },
];

const parkOptions = [
  { title: "기계식 주차", value: "기계식 주차" },
  { title: "혼합 주차장", value: "혼합 주차장" },
  { title: "자주식 주차장", value: "자주식 주차장" },
  { title: "상관없음", value: "상관없음" },
];

const heatingOptions = [
  { title: "중앙난방", value: "중앙난방" },
  { title: "개별난방", value: "개별난방" },
  { title: "미지정", value: "미지정" },
];

const coolingOptions = [
  { title: "중앙냉방", value: "중앙냉방" },
  { title: "개별냉방", value: "개별냉방" },
  { title: "미지정", value: "미지정" },
];

const existOrNotOptions = [
  { title: "있음", value: "있음" },
  { title: "없음", value: "없음" },
];

const yesOrNoOptions = [
  { title: "예", value: "예" },
  { title: "아니오", value: "아니오" },
];

const feeTypeOptions = [
  { title: "전세", value: "전세" },
  { title: "월세", value: "월세" },
];

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
                  {tab === "info" && (
                    <Table style={{ tableLayout: "fixed" }}>
                      <TableBody
                        sx={{
                          td: { height: "40px", padding: "4px" },
                        }}
                      >
                        <TableRow>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                            colSpan={2}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  희망지역
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <Autocomplete
                                  id="region"
                                  size="small"
                                  options={regionOptions}
                                  defaultValue={regionOptions[0]}
                                  filterSelectedOptions
                                  fullWidth
                                  getOptionLabel={(option) => option.title}
                                  renderInput={(params) => (
                                    <TextField {...params} placeholder="선택" />
                                  )}
                                />
                              </ContentCell>
                            </Row>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  이전 희망일자
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <TextField size="small" fullWidth />
                              </ContentCell>
                            </Row>
                          </TableCell>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  전용면적(평)
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <Row gap="8px">
                                  <TextField
                                    size="small"
                                    fullWidth
                                    InputProps={{
                                      startAdornment: <InputAdornment position="start">최소</InputAdornment>,
                                    }} />
                                  <TextField
                                    size="small"
                                    fullWidth
                                    InputProps={{
                                      startAdornment: <InputAdornment position="start">최대</InputAdornment>,
                                    }} />
                                </Row>
                              </ContentCell>
                            </Row>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  월고정비(만원)
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <Row gap="8px">
                                  <TextField
                                    size="small"
                                    fullWidth
                                    InputProps={{
                                      startAdornment: <InputAdornment position="start">최소</InputAdornment>,
                                    }} />
                                  <TextField
                                    size="small"
                                    fullWidth
                                    InputProps={{
                                      startAdornment: <InputAdornment position="start">최대</InputAdornment>,
                                    }} />
                                </Row>
                              </ContentCell>
                            </Row>
                          </TableCell>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  NOC(만원)
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <Row gap="8px">
                                  <TextField
                                    size="small"
                                    fullWidth
                                    InputProps={{
                                      startAdornment: <InputAdornment position="start">최소</InputAdornment>,
                                    }} />
                                  <TextField
                                    size="small"
                                    fullWidth
                                    InputProps={{
                                      startAdornment: <InputAdornment position="start">최대</InputAdornment>,
                                    }} />
                                </Row>
                              </ContentCell>
                            </Row>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  보증금(만원)
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <Row gap="8px">
                                  <TextField
                                    size="small"
                                    fullWidth
                                    InputProps={{
                                      startAdornment: <InputAdornment position="start">최소</InputAdornment>,
                                    }} />
                                  <TextField
                                    size="small"
                                    fullWidth
                                    InputProps={{
                                      startAdornment: <InputAdornment position="start">최대</InputAdornment>,
                                    }} />
                                </Row>
                              </ContentCell>
                            </Row>
                          </TableCell>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  사무실 사용 인원
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <TextField
                                  size="small"
                                  fullWidth
                                  InputProps={{
                                    endAdornment: <InputAdornment position="start">명</InputAdornment>,
                                  }} />
                              </ContentCell>
                            </Row>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  주차장 유형
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <Autocomplete
                                  id="park-type"
                                  size="small"
                                  options={parkOptions}
                                  defaultValue={parkOptions[0]}
                                  filterSelectedOptions
                                  fullWidth
                                  getOptionLabel={(option) => option.title}
                                  renderInput={(params) => (
                                    <TextField {...params} placeholder="선택" />
                                  )}
                                />
                              </ContentCell>
                            </Row>
                          </TableCell>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  엘리베이터
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <Autocomplete
                                  id="elevator"
                                  size="small"
                                  options={existOrNotOptions}
                                  defaultValue={existOrNotOptions[0]}
                                  filterSelectedOptions
                                  fullWidth
                                  getOptionLabel={(option) => option.title}
                                  renderInput={(params) => (
                                    <TextField {...params} placeholder="선택" />
                                  )}
                                />
                              </ContentCell>
                            </Row>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  냉방 유형
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <Autocomplete
                                  id="cooling"
                                  size="small"
                                  options={coolingOptions}
                                  defaultValue={coolingOptions[0]}
                                  filterSelectedOptions
                                  fullWidth
                                  getOptionLabel={(option) => option.title}
                                  renderInput={(params) => (
                                    <TextField {...params} placeholder="선택" />
                                  )}
                                />
                              </ContentCell>
                            </Row>
                          </TableCell>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  난방 유형
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <Autocomplete
                                  id="heating"
                                  size="small"
                                  options={heatingOptions}
                                  defaultValue={heatingOptions[0]}
                                  filterSelectedOptions
                                  fullWidth
                                  getOptionLabel={(option) => option.title}
                                  renderInput={(params) => (
                                    <TextField {...params} placeholder="선택" />
                                  )}
                                />
                              </ContentCell>
                            </Row>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  인테리어
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <Autocomplete
                                  id="interior"
                                  size="small"
                                  options={yesOrNoOptions}
                                  defaultValue={yesOrNoOptions[0]}
                                  filterSelectedOptions
                                  fullWidth
                                  getOptionLabel={(option) => option.title}
                                  renderInput={(params) => (
                                    <TextField {...params} placeholder="선택" />
                                  )}
                                />
                              </ContentCell>
                            </Row>
                          </TableCell>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  층 옵션
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <FormGroup sx={{ flexDirection: 'row' }}>
                                  <FormControlLabel control={<Checkbox />} label="1층만" />
                                  <FormControlLabel control={<Checkbox />} label="1층 제외" />
                                  <FormControlLabel control={<Checkbox />} label="지하만" />
                                  <FormControlLabel control={<Checkbox />} label="지하 제외" />
                                </FormGroup>
                              </ContentCell>
                            </Row>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  주택형 사무실
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <Autocomplete
                                  id="is-house-office"
                                  size="small"
                                  options={yesOrNoOptions}
                                  defaultValue={yesOrNoOptions[0]}
                                  filterSelectedOptions
                                  fullWidth
                                  getOptionLabel={(option) => option.title}
                                  renderInput={(params) => (
                                    <TextField {...params} placeholder="선택" />
                                  )}
                                />
                              </ContentCell>
                            </Row>
                          </TableCell>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  전월세 구분
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <Autocomplete
                                  id="fee-type"
                                  size="small"
                                  options={feeTypeOptions}
                                  defaultValue={feeTypeOptions[0]}
                                  filterSelectedOptions
                                  fullWidth
                                  getOptionLabel={(option) => option.title}
                                  renderInput={(params) => (
                                    <TextField {...params} placeholder="선택" />
                                  )}
                                />
                              </ContentCell>
                            </Row>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  준공 연도
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <TextField
                                  size="small"
                                  fullWidth
                                  InputProps={{
                                    endAdornment: <InputAdornment position="start">년 이내</InputAdornment>,
                                  }} />
                              </ContentCell>
                            </Row>
                          </TableCell>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  도보 거리
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <TextField
                                  size="small"
                                  fullWidth
                                  InputProps={{
                                    endAdornment: <InputAdornment position="start">분 이내</InputAdornment>,
                                  }} />
                              </ContentCell>
                            </Row>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            sx={{ width: "auto", textAlign: "left" }}
                            colSpan={2}
                          >
                            <Row
                              alignItems="center"
                              gap="10px"
                              height="100%"
                            >
                              <TitleCell>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                >
                                  기타
                                </Typography>
                              </TitleCell>
                              <ContentCell>
                                <TextField size="small" fullWidth />
                              </ContentCell>
                            </Row>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  )}
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
