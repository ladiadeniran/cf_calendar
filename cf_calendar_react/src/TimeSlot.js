import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import { axiosInstance } from './utils';



class TimeSlot extends React.Component {
  static propTypes = {
    calenderEntryId: PropTypes.number.isRequired,
    available: PropTypes.bool.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    studentId: PropTypes.number.isRequired,
    mentorId: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
  }
  state = {
    displayConfirmationForm: false,
    displayErrorMessage: false
  };

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
  };

  onSubmit = e => {
    e.preventDefault();
    const { calenderEntryId, studentId, mentorId, duration, date } = this.props;
    const event = {
      student_id: studentId,
      mentor_id: mentorId,
      duration,
      date,
      description: e.target["description"].value
    };
    axiosInstance
      .post("/events", {
        event,
        entry_id: calenderEntryId
      })
      .then(response => {
        const { data: event } = response;
        if (response.status === 200) {
          this.props.history.push("/events/success", {
            event: event
          });
        }
      })
      .catch();
  };

  render() {
    const { time, available, duration } = this.props;
    const { displayConfirmationForm, displayErrorMessage } = this.state;

    return (
      <>
        <Button onClick={this.onClick}>
          {time} -{" "}
          {available ? `Available for ${duration} hour(s)` : "Not Available"}{" "}
        </Button>
        {displayConfirmationForm && (
          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Reason for this call</label>
              <input
                type="textarea"
                name="description"
                placeholder="I need to learn Programming"
              />
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

export default withRouter(TimeSlot);