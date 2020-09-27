import React from "react";
import CalendarNavigation from "./calendar-navigation/calendar-navigation";
import WeekDaysGrid from "./week-days-grid/week-days-grid";
import DaysGrid from "./days-grid/days-grid";

const Calendar = () => {
  return (
    <div>
      <CalendarNavigation />
      <DaysGrid />
      <WeekDaysGrid />
    </div>
  );
};

export default Calendar;
