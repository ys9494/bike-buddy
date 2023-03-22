import { MainWrapper, ChartWrapper } from "./main-styled";
import YearChart from "./YearChart";
import HourChart from "./HourChart";
import { useEffect } from "react";
// import Chart from "chart.js/auto";

import * as API from "../../commons/api";

const Main = () => {
  const getAPI = async () => {
    const result = await API.get("/charts/1");
    console.log("res", result);
  };

  useEffect(() => {
    getAPI();
  }, []);

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
