// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import { connectRouter } from "connected-react-router";

 import { students } from "./studentsReducers";
 import { mentors } from "./mentorReducers";

 const rootReducer = history =>
   combineReducers({
     router: connectRouter(history),
     students,
     mentors
   });

export default rootReducer;
