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
    background-color: green;
    color: white;
    margin-top: 30px;
    font-size: 20px;
    padding: 10px 20px;
    width: 200px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
      transition: all 0.3s;
    }
  }
`;

export const InputWrapper = styled.div`
  margin-top: 20px;
  input {
    padding: 10px;
    font-size: 20px;
    width: 400px;
    border: 3px solid green;
    border-radius: 10px;
    &:focus {
      border-color: green;
      outline: green;
      border-width: 4px;
    }
  }
`;

export const GotoLogin = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid #aaa;

  a {
    font-size: 1rem;
  }
  &:hover {
    border-bottom: 1px solid #000;
    transition: all 0.3s;
  }
`;

export const Button = styled.button``;

export const InvalidMessage = styled.div`
  color: red;
`;
