import React, { useEffect, useState } from "react";
import { useGatheringList } from "../../hooks/gathering.hook";
import GatheringItem from "./GatheringItem";
import {
  GatheringlistWrapper,
  GatheringItemContainer,
} from "./gatheringlist-styled";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as API from "../../commons/api";

function Gatheringlist() {
  // const { gatheringList, isLoading } = useGatheringList();
  const [gatheringList, setGatheringList] = useState([]);

  // console.log("gatheringList : ", gatheringList);

  const isLoading = false;

  const getGatheringData = async () => {
    const result = await API.get("/all/gathering");
    setGatheringList(result?.data.data);
    console.log("res", result);
  };

  useEffect(() => {
    getGatheringData();
  }, []);

  return (
    <GatheringlistWrapper>
      <h1>모임 참가하기</h1>
      <div>
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
      </div>
    </GatheringlistWrapper>
  );
}

export default Gatheringlist;
