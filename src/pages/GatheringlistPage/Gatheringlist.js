import React from "react";
import { useGatheringList } from "../../hooks/gathering.hook";
import GatheringItem from "./GatheringItem";
import {
  GatheringlistWrapper,
  GatheringItemContainer,
} from "./gatheringlist-styled";

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
            {gatheringList.map((gatheringItem) => {
              return (
                <GatheringItem key={gatheringItem.id} {...gatheringItem} />
              );
            })}
          </GatheringItemContainer>
        )}
      </div>
    </GatheringlistWrapper>
  );
}

export default Gatheringlist;
