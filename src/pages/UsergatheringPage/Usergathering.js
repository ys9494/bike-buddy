import {
  UsergatheringWrapper,
  UsergatheringForm,
  InputWrapper,
  ButtonWrapper,
} from "./usergathering-styled";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Usergathering = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [rentalshop, setRentalShop] = useState();
  const [time, setTime] = useState();
  const [content, setContent] = useState();
  const [count, setCount] = useState();
  const [editMode, setEditMode] = useState(false);

  const params = useParams();

  useEffect(() => {
    console.log("params", params);
    if (params?.id) {
      setEditMode(true);
    } else {
      setEditMode(false);
    }
  }, [params]);

  // 수정
  const handleModify = (e) => {
    e.preventDefault();
    alert("수정되었습니다.");
  };
  // 삭제
  const handleDelete = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <UsergatheringWrapper>
        <UsergatheringForm>
          <InputWrapper>
            <label>제목</label>
            <br />
            <input type="title" placeholder={title} />
          </InputWrapper>
          <InputWrapper>
            <label>날짜</label>
            <br />
            <input type="datetime-local" placeholder={date} />
          </InputWrapper>
          <InputWrapper>
            <label>대여소</label>
            <br />
            <input type="rentalshop" placeholder={rentalshop} />
          </InputWrapper>
          <InputWrapper>
            <label>소요시간</label>
            <br />
            <input type="number" placeholder={time} />
          </InputWrapper>
          <InputWrapper>
            <label>인원</label>
            <br />
            <input type="number" placeholder={count} />
          </InputWrapper>
          <InputWrapper>
            <label>내용</label>
            <br />
            <input
              type="content"
              placeholder={content}
              style={{ height: "110px", width: "220px" }}
            />
          </InputWrapper>
          <br />
          <ButtonWrapper>
            <Button variant="primary" onClick={handleModify}>
              수정
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              삭제
            </Button>
          </ButtonWrapper>
        </UsergatheringForm>
      </UsergatheringWrapper>
    </>
  );
};

export default Usergathering;
