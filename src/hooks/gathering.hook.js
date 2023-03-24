import { useState, useEffect } from "react";
import { fetchMyGatheringList, fetchGatheringList } from "../networks/gather";

export const useMyGatheringList = () => {
  const [myGatheringList, setMyGatheringList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetchMyGatheringList();

      setMyGatheringList(response.data);
    })();
  }, []);

  return {
    myGatheringList,
  };
};

export const useGatheringList = () => {
  const [gatheringList, setGtheringList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetchGatheringList();

      setGtheringList(response?.data?.data);
      setIsLoading(false);
    })();
  }, []);

  return {
    gatheringList,
    isLoading: isLoading || !gatheringList.length,
  };
};
