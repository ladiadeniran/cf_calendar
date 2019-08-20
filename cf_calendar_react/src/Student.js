import React from "react";
// import PropTypes from "prop-types";
import axios from 'axios';

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
        <p>Welcome, {studentName}</p>
        {mentors &&
          mentors.map((mentor, index) => (
            <Mentor key={index} mentor={mentor} studentId={student.id} />
          ))}
      </>
    );
  }
}
