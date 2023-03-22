import styled from "styled-components";

export const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const LocationInfoWrapper = styled.div`
  position: relative;

  width: 400px;
`;

export const AlertZoomInfo = styled.div`
  width: 200px;
  height: 100px;
  background-color: beige;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const MapContainer = styled.div`
  width: 500px;
  height: 600px;
`;
