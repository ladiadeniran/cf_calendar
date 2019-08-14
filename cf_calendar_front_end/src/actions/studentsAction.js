
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

export function getAllStudents() {
  return function (dispatch) {
    // dispatch(requestStudents());

    return axiosInstance
      .get("/students.json")
      .then(response => {
        const { data: students } = response;
        dispatch(receiveStudents(students));
      })
      .catch();
  }
}
