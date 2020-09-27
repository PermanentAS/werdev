import React from "react";
import { connect } from "react-redux";
import Calendar from "./../../components/calendar/calendar";
import Popup from "./../../components/popup/popup";
import "./home.scss";

function Home({ showPopup }) {
  return (
    <div className="home-page">
      <div className="main-text">
        <h1 className="title">
          Choose the day <br />
          for the meeting
        </h1>
        <p className="description">
          We encourage you to book your appointment online. <br />
          This will save you time.
        </p>
      </div>
      <div className="calendar">
        <Calendar />
      </div>
      {showPopup && <Popup />}
    </div>
  );
}

const mapStateToProps = ({ calendarReducer: { showPopup } }) => {
  return { showPopup };
};

export default connect(mapStateToProps, null)(Home);
