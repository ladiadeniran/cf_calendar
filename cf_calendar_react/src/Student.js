import React from "react";
// import PropTypes from "prop-types";
// import axios from 'axios';
import { List, Divider } from "semantic-ui-react";

import { axiosInstance } from "./utils";
import Mentor from "./Mentor";

export default class Student extends React.Component {
  state = {
    student: {},
    mentors: []
  }

  componentDidMount() {
    this.getstudentAndMentors();
  }

  postScheduledEvent = (event, entryId) => {
    axiosInstance.post("/events", {
      event,
      entry_id: entryId
    })
      .then(response => {
        if (response.status === 200) {
          this.getMentors()
            .then(response => (
              this.setState(() => ({
                mentors: response.data
              }))
            ))
        }
      })
      .catch()
  }

  getstudentAndMentors = () => {
      const { studentId } = this.props.match.params;
      axiosInstance
        .get(`/students/${studentId}`)
        .then(response => (
          this.setState(() => (
            this.setState(() => ({
              student: response.data.student,
              mentors: response.data.mentors
            }))
          ))
        ))
  }

  render() {
    const { student, mentors } = this.state;
    const { first_name: studentName } = student;
    return (
      <>
        <p>Welcome {studentName} find below the available slots on each mentor's calendar </p>
        <List bulleted>
          {mentors &&
            mentors.map((mentor, index) => (
              <List.Item key={index}>
                <Mentor
                  key={index}
                  mentor={mentor}
                  studentId={student.id}
                  postScheduledEvent={this.postScheduledEvent}
                />
                <Divider/>
              </List.Item>
            ))}
        </List>
      </>
    );
  }
}
