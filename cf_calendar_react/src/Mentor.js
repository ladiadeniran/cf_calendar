import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

import Schedule from './Schedule';

export default class Mentor extends React.Component {
  render() {
    const { mentor, studentId } = this.props;
    const {
      id: mentorId,
      first_name: mentorName,
      calendar_entries: calendarEntries = []
    } = mentor;
    return (
      <>
        <p>Schedule with {mentorName}</p>
        {calendarEntries.map((entry) => <Schedule key={entry.id} entry={entry} studentId={studentId} mentorId={mentorId}/>)}
      </>
    );
  }
}


Mentor.propTypes = {
  mentor: PropTypes.object,
  studentId: PropTypes.string
};