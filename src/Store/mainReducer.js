import usersReducer from "./usersReducer";
// import cartReducer from "./cartReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";

export default combineReducers({
  users: usersReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  // cart: cartReducer,
});
