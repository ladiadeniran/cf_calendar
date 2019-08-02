import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getAllStudents } from "../actions/studentsAction";


class Students extends React.Component {
  componentDidMount() {
    this.props.getAllStudents();
  }
  render() {
    const { students } = this.props;
    return  (
      <>
        {students && students.map((student, index) => <Link to={`/students/${student.id}`} key={index}>{student.name}</Link>)}
      </>
    );
  }
}

Students.propTypes = {
  students: PropTypes.array,
  getAllStudents: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    students: state.students
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllStudents: () => {
      dispatch(getAllStudents());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
