import { UsergatheringWrapper,
  UsergatheringForm,
  InputWrapper 
} from "./usergathering-styled";
import React,{useState} from 'react';
import {
  Form,
  FloatingLabel,
  Button,
} from 'react-bootstrap';

const Usergathering = () => {
    const [title, setTitle] = useState();
    const [rentalshop, setRentalShop] = useState();
    const [leadtime, setLeadTime] = useState();
    const [content, setContent] = useState();
    const [membersum,setMemberSum ] = useState();
  
    const formdata = new FormData();
    formdata.append('title', title);
    formdata.append('rentalshop', rentalshop);
    formdata.append('leadtime', leadtime);
    formdata.append('content', content);
    formdata.append('membersum', membersum);
  
    const handleTitle = (event) => {
      event.preventDefault();
      setTitle(event.target.value);
    };
    const handleRentalShop = (event) => {
      event.preventDefault();
      setRentalShop(event.target.value);
    };
    const handleLeadTime = (event) => {
      event.preventDefault();
      setLeadTime(event.target.value);
    };
    const handleContent = (event) => {
      event.preventDefault();
      setContent(event.target.value);
    };
    const handleMemberSum = (event) => {
        event.preventDefault();
        setMemberSum(event.target.value);
      };
  
  
    return (
      <>
        <UsergatheringWrapper>
          <UsergatheringForm>
            <InputWrapper>
              <label>제목</label>
              <input
                type="text"
                required
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <label>날짜</label>
              <input type="datetime-local"></input> 
            </InputWrapper>
            <Form.Label htmlFor="RentalShop">대여소</Form.Label>
              <Form.Control 
                type="text"
                onChange={handleRentalShop}
              />
            <InputWrapper>
            <label>소요시간</label>
            <input
              type="Number"
              required
              // value={time}
              // onChange={(e) => setTime(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>인원</label>
            <input
              type="Number"
              required
              // value={count}
              // onChange={(e) => setCount(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Form.Label htmlFor="Content">내용</Form.Label>
              <FloatingLabel
                controlId="floatingTextarea"
                className="mb-4"
              >
                <Form.Control 
                type="text"
                as="textarea" 
                style={{ height: '110px', width: '250px' }}
                onChange={handleContent}
                />
              </FloatingLabel>
          </InputWrapper>
              <Button variant="primary"> 
                {/* onClick={handleShow} */}
                수정
              </Button>
              <Button variant="primary">
                삭제
              </Button>
          </UsergatheringForm>
        </UsergatheringWrapper>      
      </>
    );
  };

export default Usergathering;