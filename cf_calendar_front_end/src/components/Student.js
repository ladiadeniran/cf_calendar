import React from "react";
import PropTypes from "prop-types";

import Mentor from "./Mentor";

class Student extends React.Component {
  render() {
    const { studentName } = this.props;
    const { mentors } = this.props;
    return (
      <>
        <p>Welcome, {studentName}</p>
        {mentors && mentors.map((mentor, index) => <Mentor key={index} mentor={mentor} studentName={studentName} />)}
      </>
    );
  }
}

Student.propTypes = {
  studentName: PropTypes.string,
  mentors: PropTypes.array
};

export default Student;
