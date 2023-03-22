import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const dummy = [
  { year_info: 2019, ues_cnt: 18990928 },
  { year_info: 2020, ues_cnt: 23674296 },
  { year_info: 2021, ues_cnt: 32033133 },
  { year_info: 2022, ues_cnt: 40950756 },
];

const data = {
  labels: dummy.map((row) => row.year_info),
  datasets: [
    {
      label: "연도별 공공자전거 이용건수",
      data: dummy.map((row) => row.ues_cnt),
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

const YearChart = () => {
  return (
    <div>
      <h2>연도별</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default YearChart;
