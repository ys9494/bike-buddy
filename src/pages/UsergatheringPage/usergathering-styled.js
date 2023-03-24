import styled from "styled-components";

export const UsergatheringWrapper = styled.div`
  display: flex;
  margin: 20px 350px;
  background-color: beige;
  padding: 70px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: bold;
  color: green;
  justify-content: center;
  align-items: center;
  `;

export const UsergatheringForm = styled.div`
  display: flex;
  flex-direction: column;
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
  display: flex;
  margin-top: 15px;
  button{
    width: 150px;
    height: 48px;
    background-color: green;
    border-radius: 15px;
    border-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    
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

export const UsergatheringItems = styled.div`
  margin: 0 220px;
  `;
