import React from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import { GatheringlistWrapper } from "./gatheringlist-styled";
// import Gethering from '../GetheringPage/Gethering';

function Gatheringlist () {
  // const [gethering, setGethering] = useState([]);

  return (
    <GatheringlistWrapper>
      <div>
        <h1 className="container px-4 px-lg-5 my-5"></h1>
        <section className="py-1">
          <div className="container px-4 px-lg-5 my-1">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="border-0 bg-light">
                          <div className="p-2 px-3 text-uppercase">
                            <Form>
                              <Form.Label htmlFor="GatheringList">
                                모임 리스트
                              </Form.Label>
                            </Form>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <Container>
                        <Row
                          xs={2}
                          className="justify-content-md-center align-top align-left"
                        >
                          {/* {title.map(() => {
                            return (
                              <Gethering
                                // key={gethering._title}
                                // gethering={gethering}
                              />
                            );
                          })} */}
                        </Row>
                      </Container>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </GatheringlistWrapper>
  );
};

export default Gatheringlist;