import React, { useEffect, useState } from "react";
import {
  GatheringWrapper,
  InputWrapper,
  GatheringForm,
  ButtonWrapper,
} from "./gathering-styled";
<<<<<<< HEAD
import {
  Button,
} from 'react-bootstrap';
// import * as API from "../";
=======
import { Button } from "react-bootstrap";
import { useParams } from "react-router";

import * as API from "../../commons/api";
>>>>>>> b5e2c1f6ab4112602f4d5228e1c76fb1a8716487

function Gathering() {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [rentalshop, setRentalShop] = useState();
  const [time, setTime] = useState();
  const [count, setCount] = useState();
  const [content, setContent] = useState();

<<<<<<< HEAD

  const handleSubmit = () => {
    // const formdata = new FormData();
    //   formdata.append('title', title);
    //    // console.log(title);
    //   formdata.append('date', date);
    //   formdata.append('rentalshop', rentalshop);
    //   formdata.append('time', time);
    //   formdata.append('count', count);
    //   formdata.append('content', content);

      const data= {
        title,
        date,
        rentalshop,
        time,
        count,
        content,
      };

      //await API.post("/주소" data);
  };

 
=======
  const params = useParams();

  const handleSubmit = async () => {
    // const formdata = new FormData();
    // formdata.append("title", title);
    // // console.log(title);
    // formdata.append("date", date);
    // formdata.append("rentalshop", rentalshop);
    // formdata.append("time", time);
    // formdata.append("count", count);
    // formdata.append("content", content);

    const data = {
      title,
      date,
      rentalshop,
      time,
      count,
      content,
    };

    // await API.post("/주소", data);
  };

  useEffect(() => {
    console.log();
  }, []);

>>>>>>> b5e2c1f6ab4112602f4d5228e1c76fb1a8716487
  return (
    <>
      <GatheringWrapper>
        <GatheringForm>
          <InputWrapper>
            <label>제목</label>
            <br/>
            <input
              type="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
            />
          </InputWrapper>
          <InputWrapper>
            <label>날짜</label>
<<<<<<< HEAD
            <br/>
            <input 
              type="datetime-local"
=======
            <input
              type="date"
>>>>>>> b5e2c1f6ab4112602f4d5228e1c76fb1a8716487
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </InputWrapper>
          <InputWrapper>
            <label>대여소</label>
            <br/>
            <input
              type="rentalshop"
              required
              value={rentalshop}
              onChange={(e) => setRentalShop(e.target.value)}
              placeholder="대여소를 입력하세요"
              readOnly
            />
          </InputWrapper>
          <InputWrapper>
            <label>소요시간</label>
            <br/>
            <input
              type="number"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="소요시간을 입력하세요"
            />
          </InputWrapper>
          <InputWrapper>
            <label>인원</label>
            <br/>
            <input
              type="number"
              required
              value={count}
              onChange={(e) => setCount(e.target.value)}
              placeholder="인원을 입력하세요"
            />
          </InputWrapper>
          <InputWrapper>
            <label>내용</label>
            <br/>
            <input
              type="content"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              style={{ height: "110px", width: "220px" }}
            />
          </InputWrapper>
          <br/>
          <ButtonWrapper>
            <Button variant="primary" onClick={() => handleSubmit()}>
              등록
            </Button>
          </ButtonWrapper>
        </GatheringForm>
      </GatheringWrapper>
    </>
  );
}

export default Gathering;
