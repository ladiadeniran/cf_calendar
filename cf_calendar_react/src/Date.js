import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';
import { Button, Divider } from "semantic-ui-react";

import TimeSlot from "./TimeSlot";

export default class Date extends React.Component {
  state = {
    displayTimeSlots: false
  }
  handleClick = () => {
    const displayTimeSlots = !this.state.displayTimeSlots;
    this.setState(() => ({
      displayTimeSlots
    }));
  }

  render() {
    const { date, timeSlots, studentId, mentorId } = this.props;
    const day = moment(`${date}`).format("MMMM Do YYYY");
    const { displayTimeSlots } = this.state;
    return (
      <div>
        <Button primary onClick={this.handleClick}>
          {day}
        </Button>
        {displayTimeSlots &&
          timeSlots.map((slot, index) => {
            const dateTime = moment(`${date} ${slot.time}`).format(
              "YYYY-MM-DD h:mm:ss"
            );
            const time = moment(`${slot.time}`, "HH:mm").format("h:mm A");
            return (
              <div key={index}>
                <TimeSlot
                  time={time}
                  date={dateTime}
                  studentId={studentId}
                  mentorId={mentorId}
                  available={slot.available}
                  calenderEntryId={slot.entryId}
                  duration={slot.duration}
                />
              </div>
            );
          })}
        <Divider hidden />
      </div>
    );
  }
}

Date.propTypes = {
  entry: PropTypes.object
};