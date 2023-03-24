import React, { useEffect, useState } from "react";
import { useGatheringList } from "../../hooks/gathering.hook";
import GatheringItem from "./GatheringItem";
import {
  GatheringlistWrapper,
  GatheringItemContainer,
  GotoNewGathering,
} from "./gatheringlist-styled";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import * as API from "../../commons/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Gatheringlist() {
  // const { gatheringList, isLoading } = useGatheringList();
  const [gatheringList, setGatheringList] = useState([]);

  // console.log("gatheringList : ", gatheringList);

  const isLoading = false;

  const getGatheringData = async () => {
    const result = await API.get("/all/gathering");
    setGatheringList(result?.data?.data);
    console.log("res", result);
  };

  useEffect(() => {
    getGatheringData();
  }, []);

  return (
    <GatheringlistWrapper>
      {/* <h1>모임</h1> */}
      <GotoNewGathering>
        <Link to="/location/rental">
          {/* <span>
            <FontAwesomeIcon icon={faPeopleGroup} />
          </span> */}
          <span>모임 만들기</span>
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </Link>
      </GotoNewGathering>

      {isLoading ? (
        <>로딩중..</>
      ) : (
        <GatheringItemContainer>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              {gatheringList &&
                gatheringList?.map((gatheringItem) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} key={gatheringItem.id}>
                      <GatheringItem {...gatheringItem} />
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </GatheringItemContainer>
      )}
    </GatheringlistWrapper>
  );
}

export default Gatheringlist;
