import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Mentor extends React.Component {
  render() {
    const { mentor, studentId } = this.props;
    const { id: mentorId, first_name: mentorName } = mentor;

    return (
      <>
        <Link to={`/${studentId}/schedule/${mentorId}`}>
          {mentorName}
        </Link>
      </>
    );
  }
}
