import React, {
  useRef,
  useState,
  // , useNavigate
} from "react";
// import { useCallback } from "react";
import { LoginWrapper, LoginForm, InputWrapper } from "./login-styled";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef();
  // const navigate = useNavigate();

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
          <button
            onClick={function handleClick() {
              alert("로그인되었습니다.");
            }}
          >
            <Link to="../main" style={{ textDecoration: "none" }}></Link>
            로그인
          </button>
        </LoginForm>
      </LoginWrapper>
    </>
  );
};

export default Login;
