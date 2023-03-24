import { MainWrapper, ChartWrapper } from "./main-styled";
import YearChart from "./YearChart";
import HourChart from "./HourChart";
import { useEffect, useState } from "react";
// import Chart from "chart.js/auto";

import * as API from "../../commons/api";

const Main = () => {
  const [hourChart, setHourChart] = useState([]);
  const [yearChart, setYearChart] = useState([]);

  const getAPI = async () => {
    const yearResult = await API.get("/charts/1");
    const hourResult = await API.get("/charts/2");

    console.log("hour", hourResult.data.data);
    setHourChart(hourResult.data.data);

    console.log("year", yearResult.data.data);
    setYearChart(yearResult.data.data);
  };

  useEffect(() => {
    getAPI();
    console.log("chart", yearChart);
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
