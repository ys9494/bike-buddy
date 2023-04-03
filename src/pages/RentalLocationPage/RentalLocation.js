import { useEffect, useState } from "react";
import { RentalLocationWrapper } from "./rental-location-styled";
import Map from "./Map";

const RentalLocation = () => {
  const [bikeData, setBikeData] = useState([]);

  const getData = async () => {
    const reqUrls = [
      `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_BIKE_API_KEY}/json/bikeList/1/1000/`,
      `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_BIKE_API_KEY}/json/bikeList/1001/2000/`,
      `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_BIKE_API_KEY}/json/bikeList/2001/3000/`,
    ];

    await Promise.all(reqUrls.map((url) => fetch(url)))
      .then(async (res) => {
        return Promise.all(res.map(async (data) => await data.json()));
      })
      .then((res) => {
        const newArr = [
          ...res[0].rentBikeStatus.row,
          ...res[1].rentBikeStatus.row,
          ...res[2].rentBikeStatus.row,
        ];
        setBikeData(newArr);
      })
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <RentalLocationWrapper>
      <h1>대여소 정보</h1>
      <Map bikeData={bikeData} />
    </RentalLocationWrapper>
  );
};

export default RentalLocation;
