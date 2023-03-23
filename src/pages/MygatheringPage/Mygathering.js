import React from "react";
import {
  MygatheringWrapper,
  Mygatheringform,
  MygatheringItems,
} from "./Mygathering-styled";
import { useMemo } from "react";

import { useMyGatheringList } from "../../hooks/gathering.hook";

const Mygathering = () => {
  const me = {
    id: 1,
    name: "Ash Lee",
  };

  const { myGatheringList } = useMyGatheringList();

  const appliedGatheringList = useMemo(() => {
    return myGatheringList.filter((gathering) => {
      return gathering.createdBy.id !== me.id;
    });
  }, [myGatheringList, me]);
  const ownGatheringList = useMemo(() => {
    return myGatheringList.filter((gathering) => {
      return gathering.createdBy.id === me.id;
    });
  }, [myGatheringList, me]);
  return (
    <>
      <MygatheringWrapper>
        <h1>내 모임</h1>

        <Mygatheringform>
          <label>참가신청한 모임</label>
          <br />

          {appliedGatheringList.map((item, index) => {
            return (
              <MygatheringItems key={item.id} className="key">
                <span>제목</span>
                <span>{item.title}</span>
                <span>날짜</span>
                <span>{item.date}</span>
                <span>시간</span>
                <span>{item.time}</span>
                <span>대여소명</span>
                <span>{item.rentalshop}</span>
              </MygatheringItems>
            );
          })}
        </Mygatheringform>

        <Mygatheringform>
          <label>내가 만든 모임</label>
          <br />

          {ownGatheringList.map((item, index) => {
            return (
              <MygatheringItems key={item.id} className="key">
                <span>제목</span>
                <span>{item.title}</span>
                <span>날짜</span>
                <span>{item.date}</span>
                <span>시간</span>
                <span>{item.time}</span>
                <span>대여소명</span>
                <span>{item.rentalshop}</span>
              </MygatheringItems>
            );
          })}
        </Mygatheringform>
      </MygatheringWrapper>
    </>
  );
};

export default Mygathering;
