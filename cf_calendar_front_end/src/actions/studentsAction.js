
import * as types from "../constants/actionTypes";
import axiosInstance from "../constants/axiosInstance";

export function requestStudents() {
  return {
    type: types.REQUEST_STUDENTS,
    payload: true
  };
}

export function receiveStudent(payload) {
   return {
     type: types.RECEIVE_STUDENT,
     payload
   };
}

export function receiveMentors(payload) {
  return {
    type: types.RECEIVE_MENTORS,
    payload
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

export function getStudent(studentId) {
  return function(dispatch) {
     return axiosInstance
       .get(`/students/${studentId}.json`)
       .then(response => {
         const { data } = response;
         dispatch(receiveStudent(data.student));
         dispatch(receiveMentors(data.mentors))
       })
       .catch();
  }
}
