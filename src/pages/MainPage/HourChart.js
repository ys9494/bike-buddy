import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import * as API from "../../commons/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HourChart = () => {
  const [weekdayData, setWeekdayData] = useState([]);
  const [weekendData, setWeekendData] = useState([]);

  const getAPI = async () => {
    const hourResult = await API.get("/charts/2");
    // console.log("hour", hourResult.data.data);
    setWeekdayData(hourResult?.data?.data[0]?.chart_data["평일"]);
    setWeekendData(hourResult?.data?.data[0]?.chart_data["주말"]);
  };

  useEffect(() => {
    getAPI();
  }, []);

  const data = {
    labels: Object.keys(weekdayData),
    datasets: [
      {
        label: "주말",
        data: Object.values(weekendData),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "평일",
        data: Object.values(weekdayData),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "평일 / 주말 시간대별 공공자전거 이용건수",
      },
    },
    animation: {
      easing: "easeInOutQuart",
      duration: 2000,
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: false,
      },
    },
  };

  return (
    <div>
      <h2>시간대별</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default HourChart;
