import { addMonths, subMonths } from "date-fns";

export const pageChange = (data) => {
  return {
    type: "PAGE_CHANGE",
    payload: data,
  };
};

export const previousMonth = (currentDate) => {
  return {
    type: "PREV_MONTH",
    payload: subMonths(currentDate, 1),
  };
};

export const nextMonth = (currentDate) => {
  return {
    type: "NEXT_MONTH",
    payload: addMonths(currentDate, 1),
  };
};

export const selectNewDate = (selectedDate) => {
  return {
    type: "SELECT_NEW_DATE",
    payload: selectedDate,
  };
};

export const closePopup = () => {
  return {
    type: "CLOSE_POPUP",
  };
};
