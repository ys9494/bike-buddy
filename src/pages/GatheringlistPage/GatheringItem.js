import { useState } from "react";
import {
  GatheringItemWrapper,
  ApplyButtonWrapper,
  EditButtonWrapper,
} from "./gatheringlist-styled";

const GatheringItem = (gatheringItem) => {
  const [isApplied, setIsApplied] = useState(false);

  return (
    <GatheringItemWrapper>
      <div>
        <span>{gatheringItem.id}</span>
        <span>{gatheringItem.title}</span>
        <span>{gatheringItem.date}</span>
        <span>{gatheringItem.rental}</span>
        <span>{gatheringItem.count}</span>
        <span>{gatheringItem.content}</span>

        {isApplied ? (
          <ApplyButtonWrapper>
            <button>참가 신청</button>
          </ApplyButtonWrapper>
        ) : (
          <EditButtonWrapper>
            <button>수정</button>
            <button>삭제</button>
          </EditButtonWrapper>
        )}
      </div>
    </GatheringItemWrapper>
  );
};

export default GatheringItem;
