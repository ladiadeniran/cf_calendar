import React from "react";
// import PropTypes from "prop-types";
import axios from 'axios';
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

  getStudent = (studentId) => {
    return axiosInstance.get(`/students/${studentId}`)
  }

  getMentors = () => {
    return axiosInstance.get(`/mentors`);
  }

  getstudentAndMentors = () => {
    const { studentId } = this.props.match.params;
    axios
      .all([this.getStudent(studentId), this.getMentors()])
      .then(
        axios.spread((studentResponse, mentorsResponse) =>
          this.setState(() => ({
            student: studentResponse.data,
            mentors: mentorsResponse.data
          }))
        )
      )
      .catch();
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
              <List.Item>
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
