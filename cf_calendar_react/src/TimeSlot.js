import React from "react";
import PropTypes from "prop-types";

import { Button, Form } from "semantic-ui-react";
import { axiosInstance } from './utils';



export default class TimeSlot extends React.Component {
  state = {
    displayConfirmationForm: false,
    displayErrorMessage: false
  }
  onClick = () => {
    const { available } = this.props;
    const displayConfirmationForm = !this.state.displayConfirmationForm;
    if (available) {
       this.setState(() => ({
         displayConfirmationForm
       }));
    } else {
      this.setState(() => ({
        displayErrorMessage: true
      }));
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {
      calenderEntryId,
      studentId,
      mentorId,
      duration,
      date
    } = this.props;
    const event = {
      student_id: studentId,
      mentor_id: mentorId,
      duration,
      date,
      description: e.target["description"].value
    };
    axiosInstance.post("/events", {
      event,
      entry_id: calenderEntryId
    })
      .then(response => {
        const {data: event} = response;
        this.props.history.push("/events/success", { event: event })
      })
      .catch()
  }


  render() {
    const { time, available } = this.props;
    const { displayConfirmationForm, displayErrorMessage } = this.state;

    return (
      <>
        <Button onClick={this.onClick}>
          {time} - {available ? "Available" : "Not Available"}
        </Button>
        {displayConfirmationForm && (
          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Reason for this call</label>
              <input type="textarea" name="description" placeholder="I need to learn Programming" />
            </Form.Field>
            <Button type="submit">Confirm Call</Button>
          </Form>
        )}
        {displayErrorMessage && (
          <p>You cannot Choose this slot, it has already been allocated</p>
        )}
      </>
    );
  }
}

TimeSlot.propTypes = {
  calenderEntryId: PropTypes.number.isRequired,
  available: PropTypes.bool.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  studentId: PropTypes.number.isRequired,
  mentorId: PropTypes.number.isRequired
};