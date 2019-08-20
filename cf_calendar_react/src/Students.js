import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { axiosInstance } from './utils';



export default class Students extends React.Component {
  state = {
    students: []
  }

  componentDidMount() {
    this.getAllStudents();
  }

  getAllStudents = () => {
    axiosInstance.get('/students')
      .then(response => this.setState(
        () => ({
          students: response.data
        })
      ))
      .catch()
  }

  render() {
    const { students } = this.state;
    return  (
      <>
        {students && students.map((student, index) => <Link to={`/students/${student.id}`} key={index}>{student.first_name}</Link>)}
      </>
    );
  }
}
