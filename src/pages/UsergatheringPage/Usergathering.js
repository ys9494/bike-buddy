import { UsergatheringWrapper,
  UsergatheringForm,
  InputWrapper,
  ButtonWrapper, 
  UsergatheringItems,
} from "./usergathering-styled";
import React,{ useState, useEffect } from 'react';
import {
  Button,
} from 'react-bootstrap';
import * as API from "../../commons/api";
//import { ROUTE } from "../../routes/route";
import { useGatheringList } from "../../hooks/gathering.hook";
import { useParams } from 'react-router-dom';


const Usergathering = () => {
    const params = useParams()

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [rentalshop, setRentalShop] = useState("");
    const [rentalId, setRentalId] = useState("");
    const [time, setTime] = useState("");
    const [content, setContent] = useState("");
    const [count,setCount ] = useState("");

    
    useEffect(()=> {
      console.log("파람스:", params);
    })

    useEffect(()=> {
      params && (async () => {
        try {
          const response = await API.get(`/gathering?type=gather&id=${params.id}`);
          const gathering = response.data;
          console.log("게더링: ", gathering)
          // setTitle(gathering.title);
          // setDate(gathering.date);
          // setRentalShop(gathering.rentalshop);
          // setTime(gathering.time);
          // setContent(gathering.content);
          // setCount(gathering.count);
        } catch(err) {
          console.log(err);
        }
      })();
    }, [ params]);

    
    // 수정
    const handleModify = async() => {
      try {
        await API.patch(`/gatherings/${params.id}`, {
          title,
          date,
          rentalId,
          rentalshop,
          time,
          count,
          content,
        });
        alert("수정되었습니다.");
      } catch (err) {
        console.log("Err", err);
      }
    };

    // 삭제
    const handleDelete = async() => {
      try {
        await API.delete(`/gatherings/${params.id}`);
      } catch(err) {
        console.log(err);
      }
    };

  
    return (
      <>
        <UsergatheringWrapper>
          <UsergatheringForm>
            <InputWrapper>
              <label>제목</label>
              <br/>
              <input
                type = "title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder = "제목을 입력하세요" />
            </InputWrapper>
            <InputWrapper>
              <label>날짜</label>
              <br/>
              <input
                type = "datetime-local"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}/>
            </InputWrapper>
            <InputWrapper>
              <label>대여소</label>
              <br/>
              <input
                type = "rentalshop"
                required
                value={rentalshop}
                onChange={(e) => setRentalShop(e.target.value)}
                readOnly/>
            </InputWrapper>
            <InputWrapper>
              <label>소요시간</label>
              <br/>
              <input
                type = "number"
                required
                value={time}
                step="5"
                onChange={(e) => setTime(e.target.value)}
                placeholder="소요시간을 입력하세요" />
            </InputWrapper>
            <InputWrapper>
              <label>인원</label>
              <br/>
              <input
                type = "number"
                required
                value={count}
                onChange={(e) => setCount(e.target.value)}
                placeholder="인원을 입력하세요" />
            </InputWrapper>
            <InputWrapper>
              <label>내용</label>
              <br/>
              <textarea
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="내용을 입력하세요"
                style={{ height: '110px'}} />              
            </InputWrapper>
            <br/>
            {/* {gatheringList.map((item, idx) => {
              return (
                <InputWrapper key={item.id} className="key">
                  <label>제목</label>
                  <br/>
                  <input placeholder ={item.title}></input>
                  <div>{item.date}</div>
                  <div>{item.rentalshop}</div>
                  <div>{item.time}</div>
                </InputWrapper>
              );
            })} */}
            <ButtonWrapper>
              <Button variant="success" onClick={(e) => {
                e.preventDefault();
                handleModify();
              }}> 
                수정
              </Button>
              <Button variant="success" onClick={(e) => {
                e.preventDefault();
                handleDelete();
              }}>
                삭제
              </Button>
            </ButtonWrapper>
          </UsergatheringForm>
        </UsergatheringWrapper>      
      </>
    );
   
};

export default Usergathering;