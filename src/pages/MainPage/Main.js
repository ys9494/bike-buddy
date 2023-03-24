import {
  MainWrapper,
  ChartWrapper,
  BannerContainer1,
  BannerContainer2,
  BannerContainer3,
  BannerContainer4,
  BannerContainer5,
} from "./main-styled";
import YearChart from "./YearChart";
import HourChart from "./HourChart";

const Main = () => {
  return (
    <MainWrapper>
      <BannerContainer1>
        <div>
          <p>공공 자전거,</p>
          <p> 이용해 본 경험이 있으신가요?</p>
        </div>
      </BannerContainer1>
      <BannerContainer2>
        <div>
          <p>
            &quot;누구나, 언제나, 어디서나 &quot; 쉽고 편리하게 이용할 수 있는
          </p>
          <p>서울시 공공자전거,</p>
        </div>
      </BannerContainer2>

      <BannerContainer4>
        <h1>연도별 차트</h1>
        <ChartWrapper>
          <YearChart />
        </ChartWrapper>
      </BannerContainer4>
      <BannerContainer5>
        <h1>시간대별 차트</h1>
        <ChartWrapper>
          <HourChart />
        </ChartWrapper>
      </BannerContainer5>
    </MainWrapper>
  );
};

export default Main;
