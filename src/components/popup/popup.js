import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { format } from "date-fns";
import { closePopup } from "./../../actions";
import "./popup.scss";

const Popup = ({ selectedDate, closePopup }) => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    window.scroll(0, 0);
    return () => (document.body.style.overflow = originalStyle);
  }, []);
  return (
    <div className="popup-container">
      <div className="popup-form">
        <div className="close" onClick={() => closePopup()}>
          &times;
        </div>
        <div className="form">
          <label>
            Month
            <input
              type="text"
              className="input-form"
              defaultValue={format(selectedDate, "LLLL	")}
            />
          </label>
          <label>
            Day
            <input
              type="text"
              className="input-form"
              defaultValue={format(selectedDate, "do EEEE")}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ calendarReducer: { selectedDate } }) => {
  return { selectedDate };
};

const mapDispatchToProps = { closePopup };

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
