import React from "react";
import PropTypes from "prop-types";
import { Header } from "semantic-ui-react";

import Date from './Date';

export default class Mentor extends React.Component {

  transformEntriesToDates = (calendarEntries) => {
    let dates = {}
    calendarEntries.forEach((entry) => {
      const timeAndAvailability = {
        time: entry.time,
        available: entry.available,
        calendarEntryId: entry.id
      }
      if (dates[entry.day]) {
        dates[entry.day].push(timeAndAvailability);
      } else {
        dates[entry.day] = [timeAndAvailability];
      }
    })

    return dates
  }

  render() {
    const { mentor, studentId } = this.props;
    const {
      id: mentorId,
      first_name: mentorName,
      calendar_entries: calendarEntries = []
    } = mentor;

    const dates = this.transformEntriesToDates(calendarEntries);

    return (
      <>
        <Header as="h5" className="mentor-name">
          {mentorName}
        </Header>
        {Object.keys(dates).map((date, index) => (
          <Date
            key={index}
            date={date}
            timeSlots={dates[date]}
            studentId={studentId}
            mentorId={mentorId}
            postScheduledEvent={this.props.postScheduledEvent}
          />
        ))}
      </>
    );
  }
}


Mentor.propTypes = {
  mentor: PropTypes.object,
  studentId: PropTypes.number
};