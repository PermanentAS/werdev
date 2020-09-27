import React from "react";
import { connect } from "react-redux";
import { format } from "date-fns";
import { previousMonth, nextMonth } from "./../../../actions";
import "./calendar-navigation.scss";

const CalendarNavigation = ({ currentDate, previousMonth, nextMonth }) => {
  const formattedDate = format(currentDate, "MMMM yyyy");
  return (
    <div className="calendar-navigation">
      <i
        className="fas fa-angle-left arrow"
        onClick={() => previousMonth(currentDate)}
      />
      <p>{formattedDate}</p>
      <i
        className="fas fa-angle-right arrow"
        onClick={() => nextMonth(currentDate)}
      />
    </div>
  );
};

const mapStateToProps = ({ calendarReducer: { currentDate } }) => {
  return { currentDate };
};

const mapDispatchToProps = { previousMonth, nextMonth };

export default connect(mapStateToProps, mapDispatchToProps)(CalendarNavigation);
