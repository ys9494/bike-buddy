import styled from "styled-components";

export const GatheringWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  margin: 20px auto;
  background-color: beige;
  padding: 70px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: bold;
  color: green;
  justify-content: center;
  align-items: center;
`;

export const GatheringForm = styled.form`
  display: flex;
  flex-direction: column;
  /* margin: 0 220px; */
`;

export const InputWrapper = styled.div`
  font-size: 22px;
  color: green;
  margin: 10px 0px;
  input{
    margin: 3px 0px;
    border: 10px solid white;
    border-radius: 10px;
    height: 40px;
    width: 300px;
    font-size: 18px;

    &:focus{
      border-color: green;
      outline: green;
      border-width: 4px;
    }   
  }

  textarea{
      margin: 3px 0px;
      border: 10px solid white;
      border-radius: 10px;
      height: 40px;
      width: 300px;
      font-size: 18px;
      resize: none;
      
      &:focus{
      border-color: green;
      outline: green;
      border-width: 4px;
      }   
    }
`;

export const ButtonWrapper = styled.div`
  button{
    width: 150px;
    height: 48px;
    background-color: green;
    border-radius: 15px;
    border-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.1rem;
    color: #fff;
    transition: all 0.3s;

    &:hover {
    opacity: 0.7;
    }
  }
`;
