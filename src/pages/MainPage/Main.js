import { MainWrapper, ChartWrapper } from "./main-styled";
import YearChart from "./YearChart";
import HourChart from "./HourChart";
// import Chart from "chart.js/auto";

const Main = () => {
  return (
    <MainWrapper>
      <h1>main page</h1>
      <ChartWrapper>
        <div>차트</div>
        <YearChart />
        <HourChart />
      </ChartWrapper>
    </MainWrapper>
  );
};

export default Main;
