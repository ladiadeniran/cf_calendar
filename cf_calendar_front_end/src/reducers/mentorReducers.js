import * as types from "../constants/actionTypes";


export function mentors(state = [], action) {
  switch (action.type) {
    case types.RECEIVE_MENTORS:
      return action.payload;
    default:
      return state;
  }
}
