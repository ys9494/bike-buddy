import styled from "styled-components";

export const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

export const LocationInfoWrapper = styled.div`
  width: 320px;
  height: 560px;
  margin-left: 20px;
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
  width: 600px;
  height: 560px;
  border: 5px solid #fff;
  border-radius: 5px;
`;

export const AlertZoomInfo = styled.div`
  width: 100%;
  padding: 10px 0 15px;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    &:first-child {
      font-size: 1.5rem;
      color: orange;
    }
  }
`;

export const AlertMarkerInfo = styled.div`
  padding-top: 110px;
  p {
    font-size: 1.3rem;
    font-weight: bold;
    color: green;
    text-align: center;
    span {
      color: #ffa401;
      font-size: 1.6rem;
    }
  }
`;
