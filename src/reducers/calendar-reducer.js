import { addDays, subDays } from "date-fns";

const initialState = {
  currentDate: new Date(),
  selectedDate: new Date(),
  showPopup: false,
  datesWithEvents: [
    { date: subDays(new Date(), 5) },
    { date: subDays(new Date(), 3) },
    { date: new Date() },
    { date: addDays(new Date(), 3) },
    { date: addDays(new Date(), 5) },
  ],
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PREV_MONTH":
    case "NEXT_MONTH":
      return {
        ...state,
        currentDate: action.payload,
      };
    case "SELECT_NEW_DATE":
      return {
        ...state,
        selectedDate: action.payload,
        showPopup: true,
      };
    case "CLOSE_POPUP":
      return {
        ...state,
        showPopup: false,
      };

    default:
      return state;
  }
};

export default calendarReducer;
