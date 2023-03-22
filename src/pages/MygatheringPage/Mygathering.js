import React from "react";
import {
  MygatheringWrapper,
  Mygatheringform,
  MygatheringItems,
} from "./Mygathering-styled";
import { useMemo } from "react";

import { useMyGatheringList } from '../../hooks/gathering.hook'

const Mygathering = () => {
  const me = {
    id: 1,
    name: 'Ash Lee'
  }

  const { myGatheringList } = useMyGatheringList()

  const appliedGatheringList = useMemo(() => {
    return myGatheringList.filter(gathering => {
      return gathering.createdBy.id !== me.id
    })
  }, [myGatheringList, me])
  const ownGatheringList = useMemo(() => {
    return myGatheringList.filter(gathering => {
      return gathering.createdBy.id === me.id
    })
  }, [myGatheringList, me])


  return (
    <>
      <MygatheringWrapper>
        <h1>내 모임</h1>

        <Mygatheringform>
          <label>참가신청한 모임</label>
          <br />
          <div>제목</div>
          <div>시간</div>
          <div>날짜</div>
          <div>대여소명</div>
          <button>참가취소</button>

          {appliedGatheringList.map((item, index) => {
            return (
              <MygatheringItems key={item.id} className="key">
                <div>{item.title}</div>
                <div>{item.date}</div>
                <div>{item.rentalshop}</div>
                <div>{item.time}</div>
              </MygatheringItems>
            );
          })}
        </Mygatheringform>

        <Mygatheringform>
          <label>내가 만든 모임</label>
          <br />
          <div>제목</div>
          <div>시간</div>
          <div>날짜</div>
          <div>대여소명</div>
          <button>참가취소</button>

          {ownGatheringList.map((item, index) => {
            return (
              <MygatheringItems key={item.id} className="key">
                <div>{item.title}</div>
                <div>{item.date}</div>
                <div>{item.rentalshop}</div>
                <div>{item.time}</div>
              </MygatheringItems>
            );
          })}
        </Mygatheringform>
      </MygatheringWrapper>
    </>
  );
};

export default Mygathering;
