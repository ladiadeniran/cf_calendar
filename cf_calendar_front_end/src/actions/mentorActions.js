import * as types from "../constants/actionTypes";
import axiosInstance from "../constants/axiosInstance";


export function receiveMentors(payload) {
  return {
    type: types.RECEIVE_MENTORS,
    payload
  };
}

export function getMentors() {
  return function(dispatch) {
    // dispatch(requestStudents());

    return axiosInstance
      .get("/mentors.json")
      .then(response => {
        const { data: mentors } = response;
        dispatch(receiveMentors(mentors));
      })
      .catch();
  };
}
