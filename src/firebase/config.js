import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCb0l_ONkXxCSljUlRihJGmN5gytFpS9PU",
  authDomain: "wishes-ac84e.firebaseapp.com",
  projectId: "wishes-ac84e",
  storageBucket: "wishes-ac84e.appspot.com",
  messagingSenderId: "886281847112",
  appId: "1:886281847112:web:dc3f7f7632d2b7d8feb37d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
