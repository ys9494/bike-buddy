import React from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import { GatheringlistWrapper,ContainerWrapper } from "./gatheringlist-styled";

import { useGatheringList } from '../../hooks/gathering.hook'

function Gatheringlist () {
  const {gatheringList, isLoading} = useGatheringList()

  console.log('gatheringList : ', gatheringList)

  return (
    <>
      <GatheringlistWrapper>
        <h1 className="container px-4 px-lg-5 my-5"></h1>
        <section className="py-1">
          <div className="container px-4 px-lg-5 my-1">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                <div className="table-responsive">
                  {isLoading ? <>로딩중..</> : <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="border-0 bg-light">
                          <div className="p-2 px-3 text-uppercase">
                            <Form>
                              <Form.Label>
                                모임 리스트
                              </Form.Label>
                            </Form>
                            <br/>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    <Container>
                      <ContainerWrapper>
                        <Row
                          xs={2}
                          className="justify-content-md-center align-top align-left"
                        >
                          {gatheringList.map(gathering => {
                            return (
                              <tr key={gathering.id}>
                                {/* <td>{gathering.id}</td> */}
                                <label>제목</label>
                                <input
                                  type = "title"
                                  placeholder = {gathering.title} />
                                <label>대여소</label>
                                <td> {gathering.rentalshop}</td>
                                <label>내용</label>
                                <td> content:{gathering.content}</td>
                              </tr>
                            )
                          })}
                        </Row>
                      </ContainerWrapper>
                    </Container>  
                    </tbody>
                  </table>}
                </div>
              </div>
            </div>
          </div>
        </section>
      </GatheringlistWrapper>
    </>
  );
};

{/* <InputWrapper>
              <label>제목</label>
              <input
                type = "title"
                placeholder = {title} />
            </InputWrapper>
            <InputWrapper>
              <label>날짜</label>
              <input
                type = "date"
                placeholder = {date} />
</InputWrapper> */}

export default Gatheringlist;