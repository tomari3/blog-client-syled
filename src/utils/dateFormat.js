import { DateTime } from "luxon";

export const longMonth = (date) => {
  return DateTime.fromISO(date).toFormat("yyyy LLL dd");
};
