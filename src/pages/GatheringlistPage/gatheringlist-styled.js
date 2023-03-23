import styled from "styled-components";

export const GatheringlistWrapper = styled.div`
  max-width: 1200px;
  margin: 20px auto 0;
  background-color: beige;

  border-radius: 30px;
  padding: 20px;
  h1 {
    font-size: 20px;
    font-weight: bold;
    color: green;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const GatheringItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GatheringItemWrapper = styled.div`
  height: 340px;
  margin: 20px auto;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 30px;

  p {
    margin: 10px 0;
    &:first-of-type {
      font-weight: bold;
      color: green;
    }
    span {
      margin-left: 5px;
    }
  }
`;

export const GatheringDetail = styled.div``;

export const ApplyButtonWrapper = styled.div`
  button {
    width: 100%;
    height: 32px;
    border-radius: 10px;
    color: #fff;
    border: none;
    background-color: green;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
    transition: all 0.3s;
  }
`;

export const EditButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 45%;
    height: 32px;
    border-radius: 15px;
    background-color: #eee;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #ccc;
      transition: all 0.3s;
    }
  }
`;
