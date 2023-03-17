import React from "react"; // ,{ useState }
import { SignupWrapper, SignupForm, InputWrapper } from "./signup-styled";
import { Link } from "react-router-dom";

const Signup = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <SignupWrapper>
      <h1>회원가입</h1>
      <SignupForm>
        <InputWrapper>
          <label>아이디</label>
          <br />
          <input
            // type="ID"
            // required
            // value={email}
            onchage
            placeholder="아이디을 입력하세요."
          />
        </InputWrapper>
        <InputWrapper>
          <label>이메일</label>
          <br />
          <input
            type="text"
            required
            // value={email}
            // onChange={checkEmail}
            // ref={emailRef}
            placeholder="이메일을 입력하세요"
          />
        </InputWrapper>
        <InputWrapper>
          <label>비밀번호</label>
          <br />
          <input
            type="password"
            required
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
        </InputWrapper>
        <InputWrapper>
          <label>비밀번호 확인</label>
          <br />
          <input
            type="password"
            required
            // value={passwordConfirm}
            // onChange={(e) => setPasswordConfirm(e.target.value)}
            // ref={pwRef}
            placeholder="비밀번호를 한번 더 입력하세요"
          />
        </InputWrapper>
        <button
          onClick={function handleClick() {
            alert("로그인되었습니다.");
          }}
        >
          <Link to="../main" style={{ textDecoration: "none" }}></Link>
          회원가입
        </button>
      </SignupForm>
    </SignupWrapper>
  );
};

export default Signup;
