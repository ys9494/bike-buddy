import React from "react"; // ,{ useState }
import {
  SignupWrapper,
  SignupForm,
  InputWrapper,
  SignupButton,
} from "./signup-styled";

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
          <input
            type="password"
            required
            // value={passwordConfirm}
            // onChange={(e) => setPasswordConfirm(e.target.value)}
            // ref={pwRef}
            placeholder="비밀번호를 한번 더 입력하세요"
          />
        </InputWrapper>
        <SignupButton>회원가입</SignupButton>
      </SignupForm>
    </SignupWrapper>
  );
};

export default Signup;
