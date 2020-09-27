import React from "react";
import { connect } from "react-redux";
import { selectNewDate } from "./../../../actions";
import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  addDays,
  format,
  isSameMonth,
  isSameDay,
} from "date-fns";

import "./days-grid.scss";

const DaysGrid = ({
  currentDate,
  selectedDate,
  datesWithEvents,
  selectNewDate,
}) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  let days = [];
  let rows = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const today = day;
      days.push(
        <div
          onClick={() => selectNewDate(today)}
          className={`day-container
          ${isSameMonth(currentDate, day) ? "primary" : "secondary"}
          ${isSameDay(selectedDate, day) && "active"}
          ${
            datesWithEvents.filter((item) => isSameDay(item.date, day)).length
              ? "have-event"
              : ""
          }
          `}
          key={i}
        >
          {format(day, "dd")}
        </div>
      );
      day = addDays(day, 1);
    }

    rows.push(days);
    days = [];
  }
  return (
    <div className="days-grid">
      {rows.map((row, idx) => (
        <div className="days-row" key={idx}>
          {row}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({
  calendarReducer: { currentDate, selectedDate, datesWithEvents },
}) => {
  return { currentDate, selectedDate, datesWithEvents };
};

const mapDispatchToProps = { selectNewDate };

export default connect(mapStateToProps, mapDispatchToProps)(DaysGrid);
