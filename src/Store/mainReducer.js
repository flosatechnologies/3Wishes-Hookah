import usersReducer from "./usersReducer";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import { CustomerDetailReducer } from "./custDetailReducer";
import transactionReducer from "./transactionReducer";

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  products: productsReducer,
  cart: cartReducer,
  customerInfo: CustomerDetailReducer,
  transaction: transactionReducer,
});
