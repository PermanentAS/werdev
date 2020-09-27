import React from "react";
import "./week-days-grid.scss";

const WeekDaysGrid = () => {
  const weekDays = ["s", "m", "t", "w", "t", "f", "s"];
  return (
    <div className="week-days-grid">
      {weekDays.map((item, idx) => {
        return (
          <div key={idx} className="day-container">
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default WeekDaysGrid;
