import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BannerContainer1 = styled(BannerContainer)`
  /* height: calc(100vh - 100px); */
  background-image: url("/img/seoul-bike-img.png");
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: darken;
  position: relative;

  > div {
    position: absolute;
    right: 15%;
    top: 40%;
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
  background-image: url("/img/bike-street-img.jpg");
  background-color: rgba(255, 255, 255, 0.9);
  background-blend-mode: lighten;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const BannerContainer3 = styled(BannerContainer)`
  background-image: url("/img/bike-street-img.jpg");
  background-color: rgba(255, 255, 255, 0.9);
  background-blend-mode: lighten;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ChartWrapper = styled.div`
  > div {
    width: 600px;
    height: 360px;
    background-color: rgba(255, 255, 255, 0.4);
    padding: 30px;
    border-radius: 10px;
  }
`;

export const DescWrapper = styled.div`
  padding: 40px;
  /* text-align: center; */
  > p {
    font-size: 1.4rem;
    font-weight: bold;
  }
  span {
    font-size: 2rem;
    font-weight: bold;
    color: green;
  }
  div {
    margin: 20px 0;
    p {
      font-size: 1rem;
      font-weight: bold;
    }
  }
`;

export const GotoGathering = styled.div`
  width: 120px;
  height: 40px;
  background-color: #036530;
  border-radius: 10px;
  a {
    display: block;
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    border-radius: 10px;
  }
  &:hover {
    opacity: 0.8;
    transition: all 0.3s;
  }
`;
