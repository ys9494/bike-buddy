import styled from "styled-components";

export const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LocationInfoWrapper = styled.div`
  width: 420px;
  height: 500px;
  margin-left: 20px;
  /* background-color: #fff; */
  padding: 40px;
  border-radius: 5px;
`;

export const LocationDataWrapper = styled.div`
  width: 100%;
  height: 100%;

  div {
    margin-bottom: 40px;
    p {
      font-weight: bold;

      &:first-of-type {
        font-size: 1.1rem;
        padding-bottom: 10px;
      }
      span {
        font-size: 1.2rem;
        margin-left: 5px;
        /* color: #ed7117; */
        color: green;
      }
    }
  }
`;

export const GotoGatheringButton = styled.div`
  width: 150px;
  height: 48px;
  margin-top: 80px;
  background-color: green;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
  }

  span {
    font-weight: bold;
    font-size: 1.1rem;

    color: #fff;
  }
`;

export const MapContainer = styled.div`
  position: relative;
  width: 420px;
  height: 500px;
  border: 5px solid #fff;
  border-radius: 5px;
`;

export const AlertZoomInfo = styled.div`
  width: 200px;
  height: 100px;
  background-color: beige;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const AlertMarkerInfo = styled.div`
  padding-top: 120px;
  p {
    font-size: 1.2rem;
    font-weight: bold;
    color: green;
    text-align: center;
  }
`;
