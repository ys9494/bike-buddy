import { useState, useEffect } from "react";
import { fetchMyGatheringList } from '../networks/gather'

export const useMyGatheringList = () => {
  const [myGatheringList, setMyGatheringList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetchMyGatheringList()

      setMyGatheringList(response.data)
    })()
  }, []);

  return {
    myGatheringList
  }
}


