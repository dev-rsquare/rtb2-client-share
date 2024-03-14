import { FC, useState } from 'react'
import {
  Autocomplete,
  Button,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography
} from "@mui/material"
import styled from "@emotion/styled"
import TaskCreateDialog from "./TaskCreateDialog.tsx"
import { Column, Row } from '../../main.tsx'

const TitleCell = styled(Row)`
    display: flex;
    align-items: center;
    padding: 10px;
    min-width: 125px;
    max-width: 125px;
    height: 100%;
    background-color: #f5fdfa;
`

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
`

interface InquiryProcessEditCardProps {
  handleConfirm: () => void
}

const departmentOptions = [
  {title: '임차자문팀', value: '임차자문팀'},
  {title: '물류팀', value: '물류팀'},
  {title: '리테일팀', value: '리테일팀'},
  {title: 'LM팀', value: 'LM팀'},
  {title: '매입', value: '매입'},
  {title: '매각팀', value: '매각팀'},
  {title: '인테리어본부', value: '인테리어본부'},
]

const InquiryProcessEditCard: FC<InquiryProcessEditCardProps> = ({handleConfirm}) => {
  const [isOpenDepartmentInChargeSelect, setIsOpenDepartmentInChargeSelect] = useState(false)
  const [isOpenWorkDialog, setIsOpenWorkDialog] = useState(false)

  return (
    <>
      <Column gap="8px">
        <Row justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">문의처리</Typography>
          <Row gap="8px">
            <Button variant="contained" onClick={handleConfirm}>저장</Button>
            <Button variant="outlined">취소</Button>
          </Row>
        </Row>
        <Row border="1px solid #e0e0e0">
          <Table style={{tableLayout: 'fixed'}}>
            <TableBody
              sx={{
                td: {height: '40px', padding: '4px'},
              }}
            >
              <TableRow>
                <TableCell sx={{width: 'auto', textAlign: 'left'}}>
                  <Row alignItems="center" gap="10px" height="100%">
                    <TitleCell>
                      <Typography variant="body2" fontWeight="bold">
                        상태
                      </Typography>
                    </TitleCell>
                    <ContentCell>
                      <TextField
                        select
                        style={{width: '195px'}}
                        size="small"
                        placeholder="선택"
                        defaultValue="접수">
                        <MenuItem key="접수" value="접수">
                          접수
                        </MenuItem>
                        <MenuItem key="보류" value="보류">
                          보류
                        </MenuItem>
                        <MenuItem key="완료" value="완료">
                          완료
                        </MenuItem>
                      </TextField>
                    </ContentCell>
                  </Row>
                </TableCell>
                <TableCell colSpan={2} sx={{width: 'auto', textAlign: 'left'}}>
                  <Row alignItems="center" gap="10px" height="100%">
                    <TitleCell>
                      <Typography variant="body2" fontWeight="bold">
                        처리방식
                      </Typography>
                    </TitleCell>
                    <ContentCell>
                      <Typography>업무등록</Typography>
                      <Button variant="outlined" onClick={() => setIsOpenWorkDialog(true)}>[기회]업무</Button>
                      <Button variant="outlined">[이관]업무</Button>
                      <Typography>|</Typography>
                      <Typography>딜</Typography>
                      <Button variant="outlined">딜 등록</Button>
                      <Typography>|</Typography>
                      <Typography>기타</Typography>
                      <Button variant="outlined">콜 이력으로 등록</Button>
                    </ContentCell>
                  </Row>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3} sx={{width: 'auto', textAlign: 'left'}}>
                  <Row alignItems="center" gap="10px" height="100%">
                    <TitleCell>
                      <Typography variant="body2" fontWeight="bold">
                        담당부서
                      </Typography>
                    </TitleCell>
                    <ContentCell>
                      {
                        isOpenDepartmentInChargeSelect ?
                          <>
                            <Autocomplete
                              id="channel"
                              size="small"
                              options={departmentOptions}
                              filterSelectedOptions
                              getOptionLabel={(option) => option.title}
                              sx={{width: '192px'}}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  placeholder="선택"
                                />
                              )}
                            />
                          </>
                          :
                          <>
                            <Typography>지정 전</Typography>
                            <Button onClick={() => setIsOpenDepartmentInChargeSelect(true)}>+</Button>
                          </>
                      }
                    </ContentCell>
                  </Row>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3} sx={{width: 'auto', textAlign: 'left'}}>
                  <Row alignItems="center" gap="10px" height="100%">
                    <TitleCell>
                      <Typography variant="body2" fontWeight="bold">
                        결과
                      </Typography>
                    </TitleCell>
                    <ContentCell>
                      <TextField
                        select
                        style={{width: '195px'}}
                        size="small"
                        placeholder="선택">
                        <MenuItem key="기회 전달" value="기회 전달">
                          기회 전달
                        </MenuItem>
                        <MenuItem key="문의 전달" value="문의 전달">
                          문의 전달
                        </MenuItem>
                        <MenuItem key="딜 생성, 이관" value="딜 생성, 이관">
                          딜 생성, 이관
                        </MenuItem>
                        <MenuItem key="블랙리스트" value="블랙리스트">
                          블랙리스트
                        </MenuItem>
                        <MenuItem key="니즈 없음" value="니즈 없음">
                          니즈 없음
                        </MenuItem>
                        <MenuItem key="부재 종료" value="부재 종료">
                          부재 종료
                        </MenuItem>
                        <MenuItem key="스팸" value="스팸">
                          스팸
                        </MenuItem>
                      </TextField>
                    </ContentCell>
                  </Row>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3} sx={{width: 'auto', textAlign: 'left'}}>
                  <Row alignItems="center" gap="10px" height="100%">
                    <TitleCell>
                      <Typography variant="body2" fontWeight="bold">
                        처리 이력
                      </Typography>
                    </TitleCell>
                    <ContentCell>
                      처리 이력
                    </ContentCell>
                  </Row>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Row>
      </Column>
      <TaskCreateDialog open={isOpenWorkDialog} onClose={() => setIsOpenWorkDialog(false)} />
    </>
  )
}

export default InquiryProcessEditCard
