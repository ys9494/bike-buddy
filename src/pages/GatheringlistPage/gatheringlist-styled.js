import styled from "styled-components";

export const GatheringlistWrapper = styled.div`
  max-width: 1200px;
  margin: 20px auto 0;
  background-color: beige;
  border-radius: 30px;
  padding: 20px 0;
  h1 {
    font-size: 20px;
    font-weight: bold;
    color: green;
    text-align: center;
  }
`;

export const GatheringItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  /* column-gap: 20px; */
`;

export const GatheringItemWrapper = styled.div`
  height: 260px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;
