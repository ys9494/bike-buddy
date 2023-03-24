import styled from "styled-components";

export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding-top: 80px;
    font-size: 40px;
    text-align: center;
  }
`;

export const SignupForm = styled.form`
  margin-top: 20px;
  font-size: 20px;
  flex-direction: column;
  display: flex;
  align-items: center;

  button {
    background-color: black;
    color: white;
    margin-top: 40px;
    font-size: 20px;
    padding: 5px 20px;
    width: 200px;
  }
`;

export const InputWrapper = styled.div`
  margin-top: 25px;
  input {
    padding: 10px;
    font-size: 15px;
    width: 400px;
  }
`;

export const InvalidMessage = styled.div``;

export const GotoLogin = styled.div``;

export const Button = styled.button``;
