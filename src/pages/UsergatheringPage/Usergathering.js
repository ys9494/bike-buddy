import { UsergatheringWrapper,
  UsergatheringForm,
  InputWrapper,
  ButtonWrapper, 
} from "./usergathering-styled";
import React,{useState} from 'react';
import {
  Button,
  Form,
} from 'react-bootstrap';

const Usergathering = () => {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [rentalshop, setRentalShop] = useState();
    const [time, setTime] = useState();
    const [content, setContent] = useState();
    const [count,setCount ] = useState();
    
    // useEffect(()=> {
    // },[]);
    
  
    const handleModify = (event) => {
      event.preventDefault();
      
    };
    const handleDelete = (event) => {
      event.preventDefault();
    };

  
    return (
      <>
        <UsergatheringWrapper>
          <UsergatheringForm>
            <InputWrapper>
              <label>제목</label>
              <input
                type = "title"
                placeholder = {title} />
            </InputWrapper>
            <InputWrapper>
              <label>날짜</label>
              <input
                type = "date"
                placeholder = {date} />
            </InputWrapper>
            <InputWrapper>
              <label>대여소</label>
              <input
                type = "rentalshop"
                placeholder = {rentalshop} />
            </InputWrapper>
            <InputWrapper>
              <label>소요시간</label>
              <input
                type = "time"
                placeholder = {time} />
            </InputWrapper>
            <InputWrapper>
              <label>인원</label>
              <input
                type = "number"
                placeholder = {count} />
            </InputWrapper>
            <InputWrapper>
              <label>내용</label>
              <input
                type = "content"
                placeholder = {content}
                style={{ height: '110px', width: '220px' }} />
            </InputWrapper>
          <ButtonWrapper>
            <Button variant="primary" onClick={()=> handleModify()}> 
              수정
            </Button>
            <Button variant="primary" onClick={()=> handleDelete()}>
              삭제
            </Button>
          </ButtonWrapper>
          </UsergatheringForm>
        </UsergatheringWrapper>      
      </>
    );
};

export default Usergathering;