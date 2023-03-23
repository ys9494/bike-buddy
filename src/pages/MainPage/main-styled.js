import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BannerContainer1 = styled(BannerContainer)`
  height: calc(100vh - 100px);
  background-image: url("img/seoul-bike-img.png");
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: darken;
  position: relative;

  div {
    position: absolute;
    right: 15%;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: right;
    p {
      font-size: 2.8rem;
      font-weight: bold;
      color: #fff;
    }
  }
`;

export const BannerContainer2 = styled(BannerContainer)`
  height: calc(100vh - 100px);
  background-image: url("img/bike-street-img.jpg");
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
  position: relative;
  color: #fff;
  /* 
  div {
    position: absolute;
    right: 15%;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: right;
    p {
      font-size: 2.8rem;
      font-weight: bold;
      color: #fff;
    } 
  } */
`;
export const BannerContainer3 = styled(BannerContainer)``;
export const BannerContainer4 = styled(BannerContainer)``;
export const BannerContainer5 = styled(BannerContainer)``;

export const ChartWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
