import React from "react";
import {
  MygatheringWrapper,
  Mygatheringform,
  MygatheringItems,
} from "./Mygathering-styled";
import axios from "axios";
import { useState, useEffect } from "react";

const Mygathering = () => {
  const Mygathering = [{}];
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [rentalshop, setRentalShop] = useState();
  const [time, setTime] = useState();
  const [mygathering, setMygathering] = useState(Mygathering);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("");
        setTitle(response.title);
        setDate(response.date);
        setRentalShop(response.rentalshop);
        setTime(response.time);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData;
  }, []);

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

          {Mygathering.map((item, index) => {
            return (
              <MygatheringItems key={index} className="key">
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
        </Mygatheringform>
      </MygatheringWrapper>
    </>
  );
};

export default Mygathering;
