import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding-top: 80px;
    font-size: 40px;
    text-align: center;
  }
`;

export const LoginForm = styled.form`
  margin-top: 20px;
  font-size: 20px;
  flex-direction: column;

  button {
    background-color: black;
    color: white;
    margin: 40px;
    font-size: 20px;
    padding: 5px 20px;
    align-items: center; ///적용안됨 >> 로그인버튼 중간으로
  }
`;

export const InputWrapper = styled.div`
  margin-top: 25px;
  label {
    flex-direction: column;
  }
  input {
    //이메일이랑 이메일칸이랑 줄바꿈하기 '<br/>'로 처리?
    padding: 10px;
    font-size: 15px;
    width: 100px;
  }
`;
