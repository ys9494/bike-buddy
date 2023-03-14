import { useEffect, useState } from "react";
import { RentalLocationWrapper } from "./rental-location-styled";

const RentalLocation = () => {
  const [bikeData, setBikeData] = useState([]);

  const BIKE_KEY = "6345704f6e73796b3131336653744c70";

  const getData = async () => {
    const result = [];

    await fetch(
      `http://openapi.seoul.go.kr:8088/${BIKE_KEY}/json/bikeList/1/1000/`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("data1", response.rentBikeStatus.row);
        result.push(...response.rentBikeStatus.row);
      });

    await fetch(
      `http://openapi.seoul.go.kr:8088/${BIKE_KEY}/json/bikeList/1001/2000/`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("data2", response.rentBikeStatus.row);
        result.push(...response.rentBikeStatus.row);
      });

    await fetch(
      `http://openapi.seoul.go.kr:8088/${BIKE_KEY}/json/bikeList/2001/3000/`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("data3", response.rentBikeStatus.row);
        result.push(...response.rentBikeStatus.row);
      });

    setBikeData(result);
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    console.log("bike data", bikeData);
  }, [bikeData]);

  return (
    <RentalLocationWrapper>
      <div>대여소 정보 페이지</div>
      <button onClick={getData}>get data</button>
    </RentalLocationWrapper>
  );
};

export default RentalLocation;
