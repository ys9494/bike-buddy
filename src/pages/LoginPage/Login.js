import React, {
  useRef,
  useState,
  // , useNavigate
} from "react";
// import { useCallback } from "react";
import { LoginWrapper, LoginForm, InputWrapper } from "./login-styled";
// import { Link } from "react-router-dom";
import * as API from "../../commons/api";

import { decodeToken } from "../../commons/utils";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef();
  // const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    const result = await API.post("/users/sign-in", loginData);

    console.log("Login result", result.data.token);
    const dec = decodeToken(result?.data?.token);
    console.log("dec", dec);
    localStorage.setItem("token", result?.data?.token);
  };

  const test = (e) => {
    e.preventDefault();
    // const res = API.get("/my/gathering");
    const rs = axios.get(
      "http://kdt-ai6-team10.elicecoding.com:3003/my/gathering",
      {
        // jwt 토큰 헤더에 담아서 백엔드 서버에 보냄
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    console.log(rs);
  };

  return (
    <>
      <LoginWrapper>
        <button onClick={test}>test</button>
        <h1>로그인</h1>
        <LoginForm>
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
          <button onClick={handleLogin}>
            {/* <Link to="../main" style={{ textDecoration: "none" }}></Link> */}
            로그인
          </button>
        </LoginForm>
      </LoginWrapper>
    </>
  );
};

export default Login;
