// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import { connectRouter } from "connected-react-router";

 import { students, selectedStudent } from "./studentsReducers";

 const rootReducer = history => combineReducers({
  router: connectRouter(history),
  students,
  selectedStudent
});

export default rootReducer;
