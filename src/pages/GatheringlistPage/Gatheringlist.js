import React from "react";
import { useGatheringList } from "../../hooks/gathering.hook";
import GatheringItem from "./GatheringItem";
import {
  GatheringlistWrapper,
  GatheringItemContainer,
} from "./gatheringlist-styled";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Gatheringlist() {
  const { gatheringList, isLoading } = useGatheringList();

  console.log("gatheringList : ", gatheringList);

  return (
    <GatheringlistWrapper>
      <h1>모임 리스트</h1>
      <div>
        {isLoading ? (
          <>로딩중..</>
        ) : (
          <GatheringItemContainer>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {gatheringList.map((gatheringItem) => {
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
      </div>
    </GatheringlistWrapper>
  );
}

export default Gatheringlist;
