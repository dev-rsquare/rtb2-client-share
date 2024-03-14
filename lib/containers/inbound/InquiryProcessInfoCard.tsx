import { FC } from 'react'
import { Button, Chip, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material"
import styled from "@emotion/styled"
import { Column, Row } from '../../main'

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

const InquiryProcessEditCard: FC = () => {
  return (
    <Column gap="8px">
      <Row justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight="bold">문의처리</Typography>
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
                    <Chip size="small" label="완료"/>
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
                    <Button variant="outlined">[기회]업무</Button>
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
                    <Chip size="small" label="임차자문팀"/>
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
                    <Chip size="small" label="기회 전달"/>
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
                    <Table sx={{width: '1015px'}}>
                      <colgroup>
                        <col style={{width: '15%'}}/>
                        <col style={{width: '15%'}}/>
                        <col style={{width: '60%'}}/>
                        <col style={{width: '10%'}}/>
                      </colgroup>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <Typography>
                              2022.01.03
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>
                              딜 생성
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>
                              [TSK22425331] (주)함덕제 위성사무실_부천_50평_NOC5
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>
                              완료
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography>
                              2022.01.02
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>
                              업무 등록
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Chip size="small" label="TSK00000001"/>
                          </TableCell>
                          <TableCell>
                            <Typography>
                              완료
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography>
                              2022.01.01
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>
                              콜 이력 등록
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Chip size="small" label="TSK00000002"/>
                          </TableCell>
                          <TableCell>
                            <Typography>
                              -
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </ContentCell>
                </Row>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Row>
    </Column>
  )
}

export default InquiryProcessEditCard
