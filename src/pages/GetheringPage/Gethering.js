import React,{useState} from 'react';
import { GetheringWrapper } from "./gethering-styled";
import {
  Form,
  FloatingLabel,
  Col,
  Button,
} from 'react-bootstrap';


function Gethering () {
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
    <GetheringWrapper>
      <div>
        <Form.Label htmlFor="Title">제목</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea"
            // label="제목"
            className="mb-4"
            onChange={handleTitle}
          >
            <Form.Control 
            as="textarea" 
            placeholder="제목을 입력" 
            />
          </FloatingLabel>
      </div>
      <div>
          <Form.Label>날짜</Form.Label>
          <input type="datetime-local"></input> 
        </div>
      <div>
        <Form.Label htmlFor="RentalShop">대여소</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea"
            className="mb-4"
            onChange={handleRentalShop}
          >
            <Form.Control 
            as="textarea"
            placeholder="대여소 입력" 
            />
          </FloatingLabel>
      </div>

        <Col>
          <Form.Label htmlFor="LeadTime">예상소요시간</Form.Label>
            <Form.Control
              type="Number"
              placeholder="소요시간 입력" 
              onChange={handleLeadTime}
            />

          <Form.Label htmlFor="MemberSum">인원</Form.Label>
            <Form.Control
            type="Number"
            placeholder="인원 입력"
            onChange={handleMemberSum}
          />
        </Col>

        <div>
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
      </div>
      <div>         
        <Button variant="primary"> 
          {/* onClick={handleShow} */}
          등록
        </Button>
      </div>   

    </GetheringWrapper>
  );
};

export default Gethering;