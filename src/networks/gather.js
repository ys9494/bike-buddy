import * as API from "../commons/api";
// import { sleep } from "../commons/utils";

export const fetchMyGatheringList = async () => {
  try {
    // const response = await API.get("/api/my/gatherings");
    // return response;
  } catch (error) {
    console.error(error);
  }
};

const DUMMY_GATHERING_LIST = [
  {
    id: 1,
    title: "모임1",
    date: "2023-02-01",
    rental: "역삼역 1번출구 앞",
    count: 10,
    content: "설명설명설명",
  },
  {
    id: 2,
    title: "모임1",
    date: "2023-02-01",
    rental: "역삼역 1번출구 앞",
    count: 10,
    content: "설명설명설명",
  },
  {
    id: 3,
    title: "모임1",
    date: "2023-02-01",
    rental: "역삼역 1번출구 앞",
    count: 10,
    content: "모임1 설명설명설명",
  },
  {
    id: 4,
    title: "모임1",
    date: "2023-02-01",
    rental: "역삼역 1번출구 앞",
    count: 10,
    content: "설명설명설명",
  },
  {
    id: 5,
    title: "모임1",
    date: "2023-02-01",
    rental: "역삼역 1번출구 앞",
    count: 10,
    content: "설명설명설명",
  },
];

export const fetchGatheringList = async () => {
  // const response = await api.get("/api/gatherings");
  // return response

  return Promise.resolve({ data: DUMMY_GATHERING_LIST });
};
