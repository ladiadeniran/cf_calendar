
import * as types from "../constants/actionTypes";
import axiosInstance from "../constants/axiosInstance";

export function requestStudents() {
  return {
    type: types.REQUEST_STUDENTS,
    payload: true
  };
}

export function receiveStudents(payload) {
  return {
    type: types.RECEIVE_STUDENTS,
    payload
  };
}

export function selectStudent(studentId) {
  return {
    type: types.SELECT_STUDENT,
    studentId
  };
}

export function getAllStudents() {
  return function (dispatch) {
    dispatch(requestStudents());

    return axiosInstance
      .get(`/students.json`)
      .then(response => {
        const { students } = response.data;
        dispatch(receiveStudents(students));
      })
      .catch();
  }
}
