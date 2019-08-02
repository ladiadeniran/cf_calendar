import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Mentor extends React.Component {
  render() {
    const { mentor, studentId } = this.props;
    const { id: mentorId, name: mentorName } = mentor;

    return (
      <>
        <Link to={`/${studentId}/schedule/${mentorId}`}>
          {mentorName}
        </Link>
      </>
    );
  }
}

Mentor.propTypes = {
  mentor: PropTypes.obj,
  studentId: PropTypes.string
};

export default Mentor;
