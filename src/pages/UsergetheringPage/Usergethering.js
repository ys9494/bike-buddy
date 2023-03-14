import { UsergetheringWrapper } from "./usergethering-styled";
import React,{useState} from 'react';
import {
  Form,
  FloatingLabel,
  Col,
  Button,
} from 'react-bootstrap';

const Usergethering = () => {
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
      <UsergetheringWrapper>
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
              // placeholder="제목을 입력해주세요." 
              />
            </FloatingLabel>
        </div>
        <div>
          <Form.Label>날짜</Form.Label>
          <input type="datetime-local"></input> 
        </div>
        <div>
          <Form.Label htmlFor="RentalShop">대여소 정보</Form.Label>
            <FloatingLabel
              controlId="floatingTextarea"
              className="mb-4"
              onChange={handleRentalShop}
            >
              <Form.Control 
              as="textarea" 
              />
            </FloatingLabel>
        </div>

        <Col>
          <Form.Label htmlFor="LeadTime">예상소요시간</Form.Label>
            <Form.Control
              type="Number"
              onChange={handleLeadTime}
            />

          <Form.Label htmlFor="MemberSum">인원</Form.Label>
            <Form.Control
            type="Number"
            onChange={handleMemberSum}
            /* value={membercount}
            onChange={(e) => {
            e.preventDefault();
            setMemberCount(e.target.value);
            }}*/
          />
        </Col>
          <div>
          <Form.Label htmlFor="Content">내용</Form.Label>
            <FloatingLabel
              controlId="floatingTextarea"
              className="mb-4"
              onChange={handleContent}
            >
              <Form.Control 
              type="text"
              as="textarea" 
              style={{ height: '110px' }}
              />
            </FloatingLabel>
        </div>
        <div>         
          <Col>
            <Button variant="primary"> 
              {/* onClick={handleShow} */}
              수정
            </Button>
  
            <Button variant="primary">
              삭제
            </Button>
          </Col>
        </div>   
  
          
      </UsergetheringWrapper>
    );
  };

export default Usergethering;