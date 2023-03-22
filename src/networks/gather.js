import api from '../commons/api'
import { sleep } from '../commons/utils'

export const fetchMyGatheringList = async () => {
    try {
      const response = await api.get("/api/my/gatherings");

      return response
    } catch (error) {
      console.error(error);
    }
}


const DUMMY_GATHERING_LIST = [
  {
    id: 1,
    title: '모임1',
    rentalshop: 12,
    content: '설명'
  },
  {
    id: 2,
    title: '모임2',
    rentalshop: 45,
    content: '설명'
  },
  {
    id: 3,
    title: '모임3',
    rentalshop: 76,
    content: '설명'
  },
  {
    id: 4,
    title: '모임4',
    rentalshop: 8,
    content: '설명'
  },
]

export const fetchGatheringList = async () => {
  // const response = await api.get("/api/gatherings");

  return Promise.resolve({data: DUMMY_GATHERING_LIST})
  // return response
}