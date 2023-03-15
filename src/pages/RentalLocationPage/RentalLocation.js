import { useEffect, useState } from "react";
import { RentalLocationWrapper } from "./rental-location-styled";
import Map from "./Map";

const RentalLocation = () => {
  const [bikeData, setBikeData] = useState([]);

  const getData = async () => {
    const result = [];

    await fetch(
      `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_BIKE_API_KEY}/json/bikeList/1/1000/`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("data1", response.rentBikeStatus.row);
        result.push(...response.rentBikeStatus.row);
      });

    await fetch(
      `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_BIKE_API_KEY}/json/bikeList/1001/2000/`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("data2", response.rentBikeStatus.row);
        result.push(...response.rentBikeStatus.row);
      });

    await fetch(
      `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_BIKE_API_KEY}/json/bikeList/2001/3000/`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("data3", response.rentBikeStatus.row);
        result.push(...response.rentBikeStatus.row);
      });

    setBikeData(result);
  };

  return (
    <RentalLocationWrapper>
      <div>대여소 정보 페이지</div>
      <button onClick={getData}>get data</button>
      <Map data={bikeData} />
    </RentalLocationWrapper>
  );
};

export default RentalLocation;
