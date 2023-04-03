import styled from "styled-components";

export const GatheringlistWrapper = styled.div`
  max-width: 1200px;
  margin: 20px auto 0;
  background-color: beige;
  border-radius: 30px;
  padding: 20px;
  position: relative;

  h1 {
    font-size: 1.2rem;
    font-weight: bold;
    color: green;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const GotoNewGathering = styled.div`
  width: 280px;
  height: 60px;
  border-radius: 5px;
  background-color: #036530;
  margin: 20px auto;
  padding: 0 20px;
  border: 1px solid #036530;
  z-index: 99;

  &:hover {
    transition: all 0.3s;
    opacity: 0.8;
    a {
      color: #fff;
    }
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    span {
      font-size: 1.2rem;
      font-weight: bold;
    }
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
  border: 2px solid #036530;
  border-radius: 10px;

  button {
    width: 100%;
    height: 32px;
    color: #036530;
    border: none;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
  }
  &:hover button {
    background-color: rgb(3, 101, 48, 0.2);
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
