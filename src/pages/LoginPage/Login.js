import React, { useRef, useState, useCallback } from "react";
import {
  LoginWrapper,
  LoginForm,
  InputWrapper,
  GotoSignup,
} from "./login-styled";
import { Link, useNavigate } from "react-router-dom";
import * as API from "../../commons/api";
import { useUserDispatch } from "../../context/UserContext";

import { decodeToken } from "../../commons/utils";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef();
  const navigate = useNavigate();

  const dispatch = useUserDispatch();

  /** 로그인 API */
  const loginAPI = async (userData) => {
    try {
      const { data } = await API.post("/users/sign-in", userData);
      // console.log("login", data);
      localStorage.setItem("token", data.token);

      dispatch({
        type: "LOGIN",
        isLoggedIn: true,
      });

      navigate("/");
    } catch (err) {
      console.log("Error", err?.response?.data);
      navigate("/login");
      alert("이메일 또는 비밀번호를 확인해주세요");
    }
  };

  /** 로그인 제출 */
  const loginSubmit = useCallback(
    (e) => {
      e.preventDefault();
      loginAPI({ email, password });
      setEmail("");
      setPassword("");
    },
    [email, password]
  );

  return (
    <>
      <LoginWrapper>
        <h1>로그인</h1>
        <LoginForm onSubmit={loginSubmit}>
          <InputWrapper>
            <label>이메일</label>
            <br />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
            />
          </InputWrapper>
          <InputWrapper>
            <label>비밀번호</label>
            <br />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordRef}
              placeholder="비밀번호를 입력하세요"
            />
          </InputWrapper>
          <button>로그인</button>
          <GotoSignup>
            <Link to="/signup">게정이 없으신가요?</Link>
          </GotoSignup>
        </LoginForm>
      </LoginWrapper>
    </>
  );
};

export default Login;
