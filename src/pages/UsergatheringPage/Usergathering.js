import { UsergatheringWrapper } from "./usergathering-styled";
import React,{useState} from 'react';
import {
  Form,
  FloatingLabel,
  Col,
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
      <UsergatheringWrapper>
        <Col>
          <div>
            <Form.Label htmlFor="Title">제목</Form.Label>
              <Form.Control 
                type="text"
                // ref = {titleRef}
                onChange={handleTitle}
              />
            <br />
            <Form.Label>날짜</Form.Label>
            <input type="datetime-local"></input> 
            <br />
            <Form.Label htmlFor="RentalShop">대여소</Form.Label>
              <Form.Control 
                type="text"
                onChange={handleRentalShop}
              />
            <br />
            <Form.Label htmlFor="LeadTime">예상소요시간</Form.Label>
              <Form.Control
                type="Number"
                onChange={handleLeadTime}
              />
            <br />
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
            <br />
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
              <Button variant="primary"> 
                {/* onClick={handleShow} */}
                수정
              </Button>
              <Button variant="primary">
                삭제
              </Button>
          </div>
        </Col>   
  
          
      </UsergatheringWrapper>
    );
  };

export default Usergathering;