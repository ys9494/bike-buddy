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

// const rawData =
//   '{"주말": {"0": 42118.50, "1": 30389.00, "2": 21772.00, "3": 13880.50, "4": 9291.50, "5": 9092.50, "6": 12536.50, "7": 21367.50, "8": 37514.50, "9": 50243.50, "10": 56328.00, "11": 64944.00, "12": 75770.00, "13": 83256.50, "14": 84274.00, "15": 89781.50, "16": 95618.50, "17": 89805.00, "18": 76682.50, "19": 63288.00, "20": 57918.00, "21": 56056.00, "22": 48286.50, "23": 36475.00}, "평일": {"0": 28094.80, "1": 18651.80, "2": 11686.60, "3": 7696.00, "4": 6489.60, "5": 13414.00, "6": 30460.00, "7": 86001.40, "8": 145239.80, "9": 73890.60, "10": 51639.40, "11": 59694.80, "12": 65621.20, "13": 63367.80, "14": 63360.00, "15": 71362.80, "16": 91994.00, "17": 123629.40, "18": 158177.00, "19": 100289.80, "20": 79896.80, "21": 72284.00, "22": 60688.00, "23": 38781.40}}';
// const parsedData = JSON.parse(rawData);

// const weekData = parsedData["평일"];
// const weekendData = parsedData["주말"];

// const data = {
//   labels: Object.keys(weekData),
//   datasets: [
//     {
//       label: "주말",
//       data: Object.values(weekendData),
//       backgroundColor: "rgba(54, 162, 235, 0.2)",
//       borderColor: "rgba(54, 162, 235, 1)",
//       borderWidth: 1,
//     },
//     {
//       label: "평일",
//       data: Object.values(weekData),
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 1,
//     },
//   ],
// };

// const options = {
//   y: {
//     stacked: false,
//   },
// };

const HourChart = () => {
  const [weekdayData, setWeekdayData] = useState([]);
  const [weekendData, setWeekendData] = useState([]);

  const getAPI = async () => {
    const hourResult = await API.get("/charts/2");
    console.log("hour", hourResult.data.data);
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
      duration: 3000,
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
