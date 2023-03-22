import { useEffect, useState, useMemo } from "react";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";
import {
  MapWrapper,
  LocationInfoWrapper,
  MapContainer,
  AlertZoomInfo,
} from "./map-styled";

const Map = ({ bikeData }) => {
  const [locationData, setLocationData] = useState(null);

  /** 지도 경도 위도값 */
  const [maxLongitude, setMaxLongitude] = useState(0);
  const [minLongitude, setMinLongitude] = useState(0);
  const [maxLatitude, setMaxLatitude] = useState(0);
  const [minLatitude, setMinLatitude] = useState(0);

  /** zoom 값 */
  const [zoom, setZoom] = useState(15);

  // instead of window.naver.maps
  const navermaps = useNavermaps();

  /** 지도 state */
  const [map, setMap] = useState(null);

  // useEffect(() => {
  //   console.log("data", locationData);
  // }, [locationData]);

  // useEffect(() => {
  //   console.log("bike data", bikeData);
  // }, [bikeData]);

  useEffect(() => {
    if (!map) return;
    const bounds = map.bounds;

    setMaxLongitude(bounds._max._lng);
    setMinLongitude(bounds._min._lng);
    setMaxLatitude(bounds._max._lat);
    setMinLatitude(bounds._min._lat);
  }, [map]);

  /** 지도의 위도 경도 값으로 데이터 필터링 */
  const filteredBikeData = useMemo(() => {
    return bikeData.filter((b) => {
      const lat = parseFloat(b.stationLatitude);
      const long = parseFloat(b.stationLongitude);

      return (
        lat < maxLatitude &&
        lat > minLatitude &&
        long < maxLongitude &&
        long > minLongitude
      );
    });
  }, [bikeData, maxLongitude, minLongitude, maxLatitude, minLatitude]);

  /** 줌 바꼈을 때 실행되는 함수 */
  const zoomListener = () => {
    console.log("changed", map.zoom);
    setZoom(map?.zoom);
  };

  return (
    <MapWrapper>
      <LocationInfoWrapper>
        {zoom <= 13 && (
          <AlertZoomInfo>대여소 위치 정보를 확인하려면 지도 확대</AlertZoomInfo>
        )}

        <h1>대여소 정보</h1>
        {locationData ? (
          <>
            <p>대여소 이름 : {locationData?.stationName}</p>
            <p>거치대개수 : {locationData?.rackTotCnt}</p>
            <p>자전거주차총건수 : {locationData?.parkingBikeTotCnt}</p>

            <p>
              거치대 개수는 대여소별 자전거를 거치할수 있는 거치대의 수를
              말하며, <br />
              자전거 주차 총건수는 거치대에 거치된 자전거 수량 및 거치대에
              거치되지
              <br />
              않았지만 대여소에 주차된 자전거 수량의 합을 말합니다. 거치대의
              수와
              <br />
              상관없이 자전거 주차가 가능하여 건수 차이가 날 수 있습니다.
            </p>
          </>
        ) : (
          <>
            <p>마커를 클릭하면 대여소 정보를 볼 수 있습니다.</p>
          </>
        )}
      </LocationInfoWrapper>
      <MapContainer>
        <MapDiv
          style={{
            width: "100%",
            height: "100%",
            outline: "none",
          }}
        >
          <NaverMap
            ref={setMap}
            defaultCenter={
              new navermaps.LatLng(
                bikeData[0]?.stationLatitude || 37.5556488,
                bikeData[0]?.stationLongitude || 126.91062927
              )
            }
            onZoomChanged={zoomListener}
            // minZoom={12}
            defaultZoom={15}
            onBoundsChanged={(bounds) => {
              setMaxLongitude(bounds._max._lng);
              setMinLongitude(bounds._min._lng);
              setMaxLatitude(bounds._max._lat);
              setMinLatitude(bounds._min._lat);
            }}
          >
            {zoom > 13 &&
              filteredBikeData &&
              filteredBikeData?.map((item) => {
                return (
                  <Marker
                    onClick={() => setLocationData(item)}
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
    </MapWrapper>
  );
};

export default Map;
