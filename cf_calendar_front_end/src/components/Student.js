import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Mentor from "./Mentor";
import { getMentors } from "../actions/mentorActions";

class Student extends React.Component {
  componentDidMount() {
    this.props.getMentors();
  }

  render() {
    const { student = {}, mentors } = this.props;
    const { name: studentName = "ladi" } = student;
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

Student.propTypes = {
  student: PropTypes.obj,
  mentors: PropTypes.array,
  getMentors: PropTypes.func
};

const mapStateToProps = (state) => {
  // const { studentId } = ownProps.match.params;
  console.log(state.students)
  return {
    mentors: state.mentors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMentors: () => {
      dispatch(getMentors());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Student);
