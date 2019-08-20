import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';

export default class Schedule extends React.Component {
  handleClick = () => {
    const { entry, studentId, mentorId } = this.props;
    const { day, time, duration, id: entryId } = entry;
    const date = moment(`${day} ${time}`).format("YYYY-MM-DD HH:mm");

    const event = {
        student_id: studentId,
        mentor_id: mentorId,
        duration,
        date
    };

    this.props.postScheduledEvent(event, entryId);
  }



  render() {
    const { day, time, duration } = this.props.entry;
    const date = moment(`${day} ${time}`).format("MMMM Do YYYY, h:mm:ss a");
    return (
      <>
        <div>
          <span>{date}</span>
          <span>{` - ${duration} hour(s)`}</span>
          <button onClick={() => this.handleClick()}>Schedule</button>
        </div>
      </>
    );
  }
}

Schedule.propTypes = {
  entry: PropTypes.object
};