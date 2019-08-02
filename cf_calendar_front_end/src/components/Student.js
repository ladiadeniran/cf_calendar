import React from "react";
import PropTypes from "prop-types";

import Mentor from "./Mentor";

class Student extends React.Component {
  render() {
    const { student, mentors } = this.props;
    const { name: studentName } = student;
    return (
      <>
        <p>Welcome, {studentName}</p>
        {mentors && mentors.map((mentor, index) => <Mentor key={index} mentor={mentor} studentId={student.id} />)}
      </>
    );
  }
}

Student.propTypes = {
  student: PropTypes.obj,
  mentors: PropTypes.array
};

export default Student;
