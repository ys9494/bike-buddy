import {
  MainWrapper,
  ChartWrapper,
  DescWrapper,
  BannerContainer1,
  BannerContainer2,
  BannerContainer3,
  GotoGathering,
} from "./main-styled";
import YearChart from "./YearChart";
import HourChart from "./HourChart";
import { SectionsContainer, Section } from "react-fullpage";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes/route";

let options = {
  anchors: ["1", "2", "3"],
};

const Main = () => {
  return (
    <MainWrapper>
      <SectionsContainer {...options}>
        <Section>
          <BannerContainer1>
            <div>
              <p>공공자전거,</p>
              <p> 이용해 본 경험이 있으신가요?</p>
            </div>
          </BannerContainer1>
        </Section>
        <Section>
          <BannerContainer2>
            <ChartWrapper>
              <div>
                <YearChart />
              </div>
            </ChartWrapper>
            <DescWrapper>
              <p>&quot;누구나, 언제나, 어디서나 &quot;</p>
              <p>쉽고 편리하게 이용할 수 있는</p>
              <span>공공자전거</span>
              <div>
                <p>매년 이용건수가</p>
                <p>증가하는 추세를 보이며</p>
                <p>교통수단 중 하나로 자리잡았습니다.</p>
              </div>
            </DescWrapper>
          </BannerContainer2>
        </Section>
        <Section>
          <BannerContainer3>
            <ChartWrapper>
              <div>
                <HourChart />
              </div>
            </ChartWrapper>
            <DescWrapper>
              <span>시간대별 공공자전거 이용건수</span>
              <div>
                <p>&quot;평일 출퇴근시간&quot;에</p>
                <p>가장 많은 이용률을 보입니다.</p>
              </div>

              <p>한산한 주말 출퇴근시간대,</p>
              <p>모임을 통해 하루를 새롭게 시작하거나</p>
              <p>마무리 해보는 건 어떨까요?</p>

              <GotoGathering>
                <Link to={ROUTE.GATHERING_LIST.link}>모임하러 가기</Link>
              </GotoGathering>
            </DescWrapper>
          </BannerContainer3>
        </Section>
      </SectionsContainer>
    </MainWrapper>
  );
};

export default Main;
