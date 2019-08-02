import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class Students extends React.Component {
  render() {
    const { students } = this.props;
    return  (
      <>
        {students && students.map((student, index) => <Link to={`/student/${student.id}`} key={index}>{student.name}</Link>)}
      </>
    );
  }
}

Students.propTypes = {
  students: PropTypes.obj
}

export default Students;
