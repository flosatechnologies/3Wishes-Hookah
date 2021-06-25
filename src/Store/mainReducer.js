import usersReducer from "./usersReducer";
import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";

export default combineReducers({
  users: usersReducer,
  firebase: firebaseReducer,
});
