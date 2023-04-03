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
import { Bar, Line } from "react-chartjs-2";
import * as API from "../../commons/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const YearChart = () => {
  const [yearChart, setYearChart] = useState([]);

  const getAPI = async () => {
    const yearResult = await API.get("/charts/1");
    // console.log("year", yearResult.data.data);
    setYearChart(yearResult.data.data);
  };

  useEffect(() => {
    getAPI();
  }, []);

  const data = {
    labels: yearChart?.map((row) => row.year_info),
    datasets: [
      {
        label: "연도별 공공자전거 이용건수",
        data: yearChart?.map((row) => row.ues_cnt),
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    animation: {
      easing: "easeInOutQuart",
      duration: 2000,
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div>
      <h2>연도별</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default YearChart;
