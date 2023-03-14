import React, { useRef, useState } from "react";
// import { useCallback } from "react";
import {
  LoginWrapper,
  LoginForm,
  InputWrapper,
  LoginButton,
} from "./login-styled";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef();

  return (
    <>
      <LoginWrapper>
        <h1>로그인</h1>
        <LoginForm>
          <InputWrapper>
            <label>이메일</label>
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
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordRef}
              placeholder="비밀번호를 입력하세요"
            />
          </InputWrapper>
          <LoginButton>로그인</LoginButton>
        </LoginForm>
      </LoginWrapper>
    </>
  );
};

export default Login;
