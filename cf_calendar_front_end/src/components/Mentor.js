import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Mentor extends React.Component {
  render() {
    const { mentor, studentName } = this.props;
    const { name: mentorName } = mentor;

    return (
      <>
        <Link to={`/${studentName}/schedule/${mentorName}`}>
          {mentorName}
        </Link>
      </>
    );
  }
}

Mentor.propTypes = {
  mentor: PropTypes.obj,
  studentName: PropTypes.string
};

export default Mentor;
