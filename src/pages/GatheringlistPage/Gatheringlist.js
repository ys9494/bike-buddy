import React, { useEffect } from "react";
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
  const { gatheringList, isLoading } = useGatheringList();

  useEffect(() => {
    console.log("gathering list", gatheringList);
  }, [gatheringList]);

  return (
    <GatheringlistWrapper>
      <GotoNewGathering>
        <Link to="/location/rental">
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
                gatheringList
                  ?.slice(0)
                  .reverse()
                  .map((gatheringItem) => {
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
