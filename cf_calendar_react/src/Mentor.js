import React from "react";
import PropTypes from "prop-types";

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
        {calendarEntries.map((entry) =>  entry.available && (<Schedule key={entry.id} entry={entry} studentId={studentId} mentorId={mentorId} postScheduledEvent={this.props.postScheduledEvent} />))}
      </>
    );
  }
}


Mentor.propTypes = {
  mentor: PropTypes.object,
  studentId: PropTypes.number
};