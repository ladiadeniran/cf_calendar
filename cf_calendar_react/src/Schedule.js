import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';
// import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker/src/entry";

export default class Schedule extends React.Component {
  handleClick = () => {
    const { entry, studentId, mentorId } = this.props;
    const { day } = entry;
  }

  render() {
    const { day, time, duration } = this.props.entry;
    const date = moment(`${day} ${time}`).format("MMMM Do YYYY, h:mm:ss a");
    return (
      <>
        <p>Date: {date}</p>
        <p>Duration: {`${duration} hour(s)`}</p>
        <button onClick={() => this.handleClick()}>Schedule</button>
      </>
    );
  }
}

Schedule.propTypes = {
  entry: PropTypes.object
};