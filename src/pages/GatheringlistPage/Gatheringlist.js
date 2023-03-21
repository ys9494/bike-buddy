import React from 'react';
import { Container, Row} from 'react-bootstrap';
import { GatheringlistWrapper } from "./gatheringlist-styled";
// import { userGatheringList } from '../../hooks/gathering.hook'

function Gatheringlist () {
  // const {gatheringList} = useGatheringList()

  return (
    <>
      <GatheringlistWrapper>
        <div className="container px-4 px-lg-5 my-1">
            <label>
              모임 리스트
            </label>
            <Container>
              <Row
                xs={2}
                className="justify-content-md-center align-top align-left"
                >
                {/* {gatheringList.map(gathering => {
                  return (
                    <tr key={gethering.id}>
                      <td>gethering.id}</td>
                      <td>gethering.title}</td>
                    </tr>
                  )
                })} */}
              </Row>
            </Container>
        </div>
      </GatheringlistWrapper>
    </>
  );
};

export default Gatheringlist;