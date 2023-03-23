import dayjs from "dayjs";

export function sleep(msec) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}

export const timeFormat = (date) => {
  const dayjsDate = dayjs(date, "YYYY-MM-DD HH:mm:ss");

  return [dayjsDate.format("YYYY.MM.DD HH시 mm분")];
};
