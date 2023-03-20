import axios from "axios";

export const fetchMyGatheringList = async () => {
    try {
      const response = await axios.get("/api/gatherings");

      return response
    } catch (error) {
      console.error(error);
    }
}