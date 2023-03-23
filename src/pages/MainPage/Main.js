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
          <p>공공자전거란</p>
          <p>
            주민들의 편의를 도모하고 교통 체증, 대기오염 문제를 해결하기 위해
          </p>
          <p>정부나 지역 내 민간단체가 대여, 반납 체계를 갖춰</p>
          <p>빌려주는 자전거를 말합니다.</p>
        </div>
        <div>
          <p>공공자전거는</p>
          <p>
            &quot;누구나, 언제나, 어디서나 &quot; 쉽고 편리하게 이용할 수
            있습니다.
          </p>
        </div>
      </BannerContainer2>

      <BannerContainer3>
        <div>
          <p>공공자전거란</p>
          <p>
            주민들의 편의를 도모하고 교통 체증, 대기오염 문제를 해결하기 위해
          </p>
          <p>정부나 지역 내 민간단체가 대여, 반납 체계를 갖춰</p>
          <p>빌려주는 자전거를 말합니다.</p>
        </div>
        <div>
          <p>공공자전거는</p>
          <p>
            &quot;누구나, 언제나, 어디서나 &quot; 쉽고 편리하게 이용할 수
            있습니다.
          </p>
        </div>
      </BannerContainer3>

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
