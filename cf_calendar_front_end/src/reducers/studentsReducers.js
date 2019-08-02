import * as types from "../constants/actionTypes";

export function selectedStudent(state = null, action) {


  switch (action.type) {
    case types.SELECT_STUDENT: {
      const selectedStudent =
        state &&
        state.students.filter(student => student.id === action.studentId);
      return Object.assign({}, state, {
        student: selectedStudent
      });
    }
    default:
      return state
  }
}

export function students(state = [], action) {
  switch (action.type) {
    case types.RECEIVE_STUDENTS:
      return action.payload
    default:
      return state;
  }
}
