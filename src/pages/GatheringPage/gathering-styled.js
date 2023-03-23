import styled from "styled-components";

export const GatheringWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  margin: 20px auto;
  background-color: beige;
  padding: 80px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: bold;
  color: green;
`;

export const GatheringForm = styled.form`
  display: flex;
  flex-direction: column;
  /* margin: 0 220px; */
`;

export const InputWrapper = styled.div`
  font-size: 20px;
  color: green;
  margin: 10px 0px;
  input {
    width: 320px;
    height: 40px;
    margin: 5px 0px;
    border: 5px solid white;
    border-radius: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  button {
    font-size: 18px;
    color: green;
    margin-right: 20px;
    background-color: #ffffff;
    border: 2px solid green;
    border-radius: 10px;
    cursor: pointer;
  }
`;
