import React,{useState} from 'react';
import { GatheringWrapper } from "./gathering-styled";
import {
  Form,
  FloatingLabel,
  Col,
  Button,
} from 'react-bootstrap';


function Gathering () {
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
    <GatheringWrapper>
      <>
        <Col>
          <Form.Label htmlFor="Title">제목</Form.Label>
            <Form.Control 
              type="text"
              placeholder="제목 입력" 
              onChange={handleTitle}
            />
          <br />
          <Form.Label>날짜</Form.Label>
            <input type="datetime-local"></input> 
          <br />
          <Form.Label htmlFor="RentalShop">대여소</Form.Label>
            <Form.Control 
              type="text"
              placeholder="대여소 입력"
              onChange={handleRentalShop}
            />
          <br />
          <Form.Label htmlFor="LeadTime">예상소요시간</Form.Label>
            <Form.Control
              type="Number"
              placeholder="소요시간 입력" 
              onChange={handleLeadTime}
            />
          <br />
          <Form.Label htmlFor="MemberSum">인원</Form.Label>
            <Form.Control
            type="Number"
            placeholder="인원 입력"
            onChange={handleMemberSum}
          />
          <br />
          <Form.Label htmlFor="Content">내용</Form.Label>
            <FloatingLabel
              controlId="floatingTextarea"
              className="mb-4"
            >
              <Form.Control 
              type="text"
              as="textarea" 
              placeholder="내용 입력" 
              style={{ height: '110px' }}
              onChange={handleContent}
              />
            </FloatingLabel>
          
          <Button variant="primary"> 
            {/* onClick={handleShow} */}
            등록
          </Button>
        </Col>   
      </>
    </GatheringWrapper>
  );
};

export default Gathering;