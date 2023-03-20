import api from '../commons/api'

export const fetchMyGatheringList = async () => {
    try {
      const response = await api.get("/api/gatherings");

      return response
    } catch (error) {
      console.error(error);
    }
}