import { useState } from "react";
import { GatheringItemWrapper } from "./gatheringlist-styled";

const GatheringItem = (gatheringItem) => {
  const [isApplied, setIsApplied] = useState(false);

  return (
    <GatheringItemWrapper>
      <span>{gatheringItem.id}</span>
      <span>{gatheringItem.title}</span>
      <span>{gatheringItem.description}</span>

      {isApplied ? (
        <button>참가 신청</button>
      ) : (
        <>
          <button>수정</button>
          <button>삭제</button>
        </>
      )}
    </GatheringItemWrapper>
  );
};

export default GatheringItem;
