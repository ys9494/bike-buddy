import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

export function sleep(msec) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}

export const timeFormat = (date) => {
  const dayjsDate = dayjs(date, "YYYY-MM-DD HH:mm:ss");

  return [dayjsDate.format("YYYY.MM.DD HH시 mm분")];
};

export const getUserId = () => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = jwt_decode(token);
      const { userId } = decoded;
      return userId;
    }
  } catch (error) {
    // invalid token format
    console.log("error: " + JSON.stringify(localStorage));
  }
};

export const decodeToken = (token) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = jwt_decode(token);
      // console.log("de", decoded);
      const { user_id } = decoded;
      return user_id;
    } else {
      return undefined;
    }
  } catch (error) {
    // invalid token format
    console.log("error: " + JSON.stringify(localStorage));
  }

  console.log(jwt_decode(token));
};
