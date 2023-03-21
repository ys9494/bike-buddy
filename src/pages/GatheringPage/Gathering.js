import React,{ useState } from 'react';
import { 
  GatheringWrapper, 
  InputWrapper,
  GatheringForm,
  ButtonWrapper,
} from "./gathering-styled";
import {
  Button,
} from 'react-bootstrap';


function Gathering () {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [rentalshop, setRentalShop] = useState();
  const [time, setTime] = useState();
  const [count,setCount ] = useState();
  const [content, setContent] = useState();

 

  const handleSubmit = () => {
    const formdata = new FormData();
      formdata.append('title', title);
       // console.log(title);
      formdata.append('date', date);
      formdata.append('rentalshop', rentalshop);
      formdata.append('time', time);
      formdata.append('count', count);
      formdata.append('content', content);
  };

  return (
    <>
      <GatheringWrapper>
        <GatheringForm>
          <InputWrapper>
            <label>제목</label>
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
            <input 
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input> 
          </InputWrapper>
          <InputWrapper>
            <label>대여소</label>
            <input
              type="rentalshop"
              required
              value={rentalshop}
              onChange={(e) => setRentalShop(e.target.value)}
              placeholder="대여소를 입력하세요"
            />
          </InputWrapper>
          <InputWrapper>
            <label>소요시간</label>
            <input
              type="time"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="소요시간을 입력하세요"
            />
          </InputWrapper>
          <InputWrapper>
            <label>인원</label>
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
            <input
              type="content"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              style={{ height: '110px', width: '220px' }}
            />
          </InputWrapper>
          <ButtonWrapper>
            <Button variant="primary" onClick={()=> handleSubmit()}> 
              등록
            </Button>
          </ButtonWrapper>
        </GatheringForm>   
      </GatheringWrapper>
    </>
  );
};

export default Gathering;