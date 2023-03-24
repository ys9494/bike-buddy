import { useEffect, useState } from "react";
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
} from "@fortawesome/free-solid-svg-icons";

import { timeFormat } from "../../commons/utils";
import * as API from "../../commons/api";
import { useNavigate } from "react-router";
import { ROUTE } from "../../routes/route";

import { decodeToken } from "../../commons/utils";
import Mygathering from "../MygatheringPage/Mygathering";

const GatheringItem = (gatheringItem) => {
  const [isMyGathering, setMyGathering] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (gatheringItem) {
      const decToken = decodeToken();
      if (decToken) {
        if (gatheringItem?.owner_user_id === decToken) {
          setMyGathering(true);
        }
      }
    }
  }, []);

  // console.log(gatheringItem?.owner_user_id, isMyGathering);

  const handleApply = async (e) => {
    e.preventDefault();

    if (!localStorage.getItem("token")) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
    } else {
      const { data } = await API.post(`apply/${gatheringItem.id}`);
      console.log("result", data);
      if (data.success) {
        alert("참가 신청이 완료되었습니다.");
        navigate(ROUTE.MYGATHERING.link);
      } else {
        alert("이미 참여한 모임입니다.");
      }
    }
  };

  return (
    <GatheringItemWrapper>
      <GatheringDetail>
        <p>{gatheringItem.title}</p>
        <p>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{gatheringItem.rent_name}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faCalendarDays} />
          <span>{timeFormat(gatheringItem.start_time)}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} />
          <span>{gatheringItem.duration}분</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faPersonBiking} />
          <span>{gatheringItem.total_members}명</span>
        </p>
        <div>{gatheringItem.gather_desc}</div>
      </GatheringDetail>

      {isMyGathering ? (
        <div></div>
      ) : (
        <ApplyButtonWrapper>
          <button onClick={handleApply}>참가 신청</button>
        </ApplyButtonWrapper>
      )}
    </GatheringItemWrapper>
  );
};

export default GatheringItem;
