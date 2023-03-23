import styled from "styled-components";

export const MygatheringWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center; //여러개있으면 없애기

  h1 {
    padding-top: 80px;
    font-size: 40px;
    text-align: center;
  }
`;

export const Mygatheringform = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 20px 200px;
  background-color: beige;
  padding: 40px;
  border-radius: 30px;
  color: green;
  width: 400px;

  label {
    font-size: 30px;
    text-align: center;
  }
  div {
    font-size: 20px;
    padding-left: 20px;
  }
  button {
    width: 80px;
    font-size: 15px;
    color: green;
    border-color: black;
    border-right-color: #ffffff;
    border-bottom-color: white;
    border-width: 1px;
    margin: auto;
    display: block;
  }
`;

export const MygatheringItems = styled.div`
  font-size: 20px;
  color: green;
  margin: 10px 10px;
  border-color: black;
`;
