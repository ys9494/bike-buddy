import { useState } from "react";
import {
  GatheringItemWrapper,
  ApplyButtonWrapper,
  EditButtonWrapper,
  GatheringDetail,
} from "./gatheringlist-styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faLocationDot,
  faPersonBiking,
  faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";

const GatheringItem = (gatheringItem) => {
  const [isApplied, setIsApplied] = useState(faTruckMedical);

  return (
    <GatheringItemWrapper>
      <GatheringDetail>
        <p>{gatheringItem.title}</p>
        <p>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{gatheringItem.rental}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faCalendarDays} />
          <span>{gatheringItem.date}</span>
        </p>

        <p>
          {/* <span>예상 소요시간</span> */}
          <FontAwesomeIcon icon={faClock} />
          <span>55분</span>
        </p>
        <p>
          {/* <span>인원</span> */}
          <FontAwesomeIcon icon={faPersonBiking} />
          <span>{gatheringItem.count}명</span>
        </p>
        <div>{gatheringItem.content}</div>
      </GatheringDetail>

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
    </GatheringItemWrapper>
  );
};

export default GatheringItem;
