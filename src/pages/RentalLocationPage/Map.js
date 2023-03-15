import { useEffect } from "react";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";
import { MapWrapper, MapContainer } from "./map-styled";

const Map = (bikeData) => {
  // instead of window.naver.maps
  const navermaps = useNavermaps();

  useEffect(() => {
    console.log("bike data", bikeData.data);
  }, [bikeData]);

  //   const dummy = [
  //     { stationLatitude: 37.3595704, stationLongitude: 127.105399 },
  //     {
  //       stationLatitude: 37.55495071,
  //       stationLongitude: 126.91062927,
  //     },
  //     { stationLatitude: 37.55000687, stationLongitude: 126.91482544 },
  //   ];

  return (
    <MapWrapper>
      <div>
        <h1>네이버 맵</h1>
        <MapContainer>
          <MapDiv
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <NaverMap
              defaultCenter={new navermaps.LatLng(37.5556488, 126.91062927)}
              defaultZoom={20}
            >
              {bikeData &&
                bikeData?.data &&
                bikeData?.data?.map((item) => {
                  return (
                    <Marker
                      key={item.stationId}
                      position={
                        new navermaps.LatLng(
                          item.stationLatitude,
                          item.stationLongitude
                        )
                      }
                    />
                  );
                })}
            </NaverMap>
          </MapDiv>
        </MapContainer>
      </div>
    </MapWrapper>
  );
};

export default Map;
