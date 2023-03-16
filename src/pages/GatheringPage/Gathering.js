import React,{useState, useRef} from 'react';
import { 
  GatheringWrapper, 
  InputWrapper,
  GatheringForm,
} from "./gathering-styled";
import {
  Form,
  FloatingLabel,
  Button,
} from 'react-bootstrap';


function Gathering () {
  // const [title, setTitle] = useState();
  const [rentalshop, setRentalShop] = useState();
  const [leadtime, setLeadTime] = useState();
  const [content, setContent] = useState();
  const [membersum,setMemberSum ] = useState();

  const titleRef = useRef();

  // ?이거 빼도 되나?
  const formdata = new FormData();
  // formdata.append('title', title);
  formdata.append('rentalshop', rentalshop);
  formdata.append('leadtime', leadtime);
  formdata.append('content', content);
  formdata.append('membersum', membersum);

  const handleSubmit = () => {
    const title = titleRef.current.value;
    console.log(title);
  };

  /*const handleTitle = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };*/

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
      <GatheringWrapper>
        <GatheringForm>
          <InputWrapper>
            <label>제목</label>
            <input
              type="text"
              required
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
            />
          </InputWrapper>
          <InputWrapper>
            <label>날짜</label>
            <input type="datetime-local"></input> 
          </InputWrapper>
          <InputWrapper>
            <label>대여소</label>
            <input
              type="text"
              required
              // value={rentalshop}
              // onChange={(e) => setRentalshop(e.target.value)}
              placeholder="대여소를 입력하세요"
            />
          </InputWrapper>
          <InputWrapper>
            <label>소요시간</label>
            <input
              type="Number"
              required
              // value={time}
              // onChange={(e) => setTime(e.target.value)}
              placeholder="소요시간을 입력하세요"
            />
          </InputWrapper>
          <InputWrapper>
            <label>인원</label>
            <input
              type="Number"
              required
              // value={count}
              // onChange={(e) => setCount(e.target.value)}
              placeholder="인원을 입력하세요"
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
                placeholder="내용을 입력하세요" 
                style={{ height: '110px', width: '250px' }}
                onChange={handleContent}
                />
              </FloatingLabel>
          </InputWrapper>
          <Button variant="primary"> 
            {/* onClick={handleShow} */}
            등록
          </Button>
        </GatheringForm>   
      </GatheringWrapper>
    </>
  );
};

export default Gathering;