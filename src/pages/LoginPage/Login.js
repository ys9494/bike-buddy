import React, {
  useRef,
  useState,
  // , useNavigate
} from "react";
// import { useCallback } from "react";
import { LoginWrapper, LoginForm, InputWrapper } from "./login-styled";
// import { Link } from "react-router-dom";
import * as API from "../../commons/api";

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

    const result = await API.post("/signin", loginData);

    console.log("Login result", result);
  };

  return (
    <>
      <LoginWrapper>
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
