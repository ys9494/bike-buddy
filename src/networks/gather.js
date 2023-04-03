import * as API from "../commons/api";

export const fetchMyGatheringList = async () => {
  try {
    const { data } = await API.get("/my/gathering");
    return data;
    // return Promise.resolve({ data: dummyMygathering });
  } catch (error) {
    console.error(error);
  }
};

export const fetchGatheringList = async () => {
  const response = await API.get("/all/gathering");
  return response;
};
