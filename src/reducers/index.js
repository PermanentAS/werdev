import { combineReducers } from "redux";
import navbarReducer from "./navbar-reducer";
import calendarReducer from "./calendar-reducer";

const reducer = combineReducers({
  navbarReducer,
  calendarReducer,
});

export default reducer;
