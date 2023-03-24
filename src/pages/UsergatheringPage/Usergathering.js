import {
  UsergatheringWrapper,
  UsergatheringForm,
  InputWrapper,
  ButtonWrapper,
} from "./usergathering-styled";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import * as API from "../../commons/api";
import { ROUTE } from "../../routes/route";
import { useNavigate, useParams } from "react-router-dom";

const Usergathering = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [rentalshop, setRentalShop] = useState("");
  const [time, setTime] = useState("");
  const [content, setContent] = useState("");
  const [count, setCount] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    console.log("파람스:", params);
  });

  useEffect(() => {
    params &&
      (async () => {
        try {
          const response = await API.get(
            `/gathering?type=gather&id=${params.id}`
          );
          const gathering = response.data.data[0];
          console.log("게더링: ", gathering);
          setTitle(gathering.title);
          setDate(gathering.start_time?.slice(0, 16));
          setRentalShop(gathering.rent_name);
          setTime(gathering.duration);
          setContent(gathering.gather_desc);
          setCount(gathering.total_members);
        } catch (err) {
          console.log(err);
        }
      })();
  }, [params]);

  const handleTime = (val) => {
    console.log(val);
    if (val < 0) {
      setTime("");
    } else {
      setTime(val);
    }
  };

  const handleCount = (val) => {
    console.log(val);
    if (val < 0) {
      setCount("");
    } else {
      setCount(val);
    }
  };

  const handleModify = async () => {
    try {
      await API.patch(`/gathering/${params.id}`, {
        title,
        start_time: date,
        rent_name: rentalshop,
        duration: time,
        total_members: count,
        gather_desc: content,
      });
      alert("수정되었습니다.");
      navigate(ROUTE.MYGATHERING.link);
    } catch (err) {
      console.log("Err", err);
    }
  };

  // 삭제
  const handleDelete = async () => {
    try {
      await API.delete(`/gathering/${params.id}`);
      alert("삭제되었습니다.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <UsergatheringWrapper>
        <UsergatheringForm>
          <InputWrapper>
            <label>제목</label>
            <br />
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
            <br />
            <input
              type="datetime-local"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>대여소</label>
            <br />
            <input
              type="rentalshop"
              required
              value={rentalshop}
              onChange={(e) => setRentalShop(e.target.value)}
              readOnly
            />
          </InputWrapper>
          <InputWrapper>
            <label>소요시간</label>
            <br />
            <input
              type="number"
              required
              value={time}
              step="5"
              onChange={(e) => handleTime(e.target.value)}
              placeholder="소요시간을 입력하세요"
              min="1"
            />
          </InputWrapper>
          <InputWrapper>
            <label>인원</label>
            <br />
            <input
              type="number"
              required
              value={count}
              onChange={(e) => handleCount(e.target.value)}
              placeholder="인원을 입력하세요(최대 30명)"
              min="1"
              max="30"
            />
          </InputWrapper>
          <InputWrapper>
            <label>내용</label>
            <br />
            <textarea
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              style={{ height: "110px" }}
            />
          </InputWrapper>
          <ButtonWrapper>
            <Button
              variant="success"
              onClick={(e) => {
                e.preventDefault();
                handleModify();
              }}
            >
              수정
            </Button>
            <Button
              variant="success"
              onClick={(e) => {
                e.preventDefault();
                handleDelete();
              }}
            >
              삭제
            </Button>
          </ButtonWrapper>
        </UsergatheringForm>
      </UsergatheringWrapper>
    </>
  );
};

export default Usergathering;
