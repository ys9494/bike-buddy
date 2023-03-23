import React, { useRef, useState, useCallback } from "react";
import { LoginWrapper, LoginForm, InputWrapper } from "./login-styled";
import { Link, useNavigate } from "react-router-dom";
import * as API from "../../commons/api";
import { useUserDispatch } from "../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef();
  const navigate = useNavigate();

  const dispatch = useUserDispatch();

  /** 로그인 API */
  const loginAPI = async (userData) => {
    try {
      const { data } = await API.post("../common/api", userData);
      console.log("login", data.isAdmin);
      localStorage.setItem("");

      dispatch({
        type: "LOGIN",
        isUser: data.isUser,
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

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    const result = await API.post("/signin", loginData);

    console.log("Login result", result);
  };

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
