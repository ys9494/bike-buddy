import React from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import { GatheringlistWrapper } from "./gatheringlist-styled";

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
                              <Form.Label htmlFor="GatheringList">
                                모임 리스트
                              </Form.Label>
                            </Form>
                            <p>제목</p>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {gatheringList.map(gathering => {
                        return (
                          <tr key={gathering.id}>
                            <td>{gathering.id}</td>
                            <td>{gathering.title}</td>
                            <td>{gathering.description}</td>
                          </tr>
                        )
                      })}
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

export default Gatheringlist;