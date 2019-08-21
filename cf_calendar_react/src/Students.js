import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";

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
    return (
      <>
        <Header as='h3'>Test as a student: </Header>
        {students &&
          students.map((student, index) => (
            <p key={index}>
              <Link to={`/students/${student.id}`}>
                {student.first_name}
              </Link>
            </p>
          ))}
      </>
    );
  }
}
