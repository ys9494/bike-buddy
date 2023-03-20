import axios from "axios";
import { useState, useEffect } from "react";

export const useMyGatheringList = () => {
  const [myGatheringList, setMyGatheringList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/gatherings");

        setMyGatheringList(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return {
    myGatheringList
  }
}


