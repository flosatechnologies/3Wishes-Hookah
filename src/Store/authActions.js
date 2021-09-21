import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export const userRegistration = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const timestamp = new Date();
    var respId = "";

    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((resp) => {
        respId = resp.user.uid;
        return firestore.collection("users").doc(resp.user.uid).set({
          firstName: user.firstName,
          otherNames: user.otherNames,
          email: user.email,
          phoneNumber: user.phoneNumber,
          role: user.role,
          createdDate: timestamp,
          Id: resp.user.uid,
        });
      })
      .then(() => {
        if (user.role === "customer") {
          firestore.collection("customersInfo").doc(respId).set({
            additionalInfo: "",
            ghanaPostGps: "",
            residentialAddress: "",
            region: "",
            Id: respId,
          });
        }
        dispatch({ type: "SIGNUP_SUCCESS" });
        alert("Account created successfully");
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
        alert(err.message);
      });
  };
};

export const loginWithEmail = (email, password) => {
  return async (dispatch, state, { getFirebase, getFirestore }) => {
    try {
      getFirebase()
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          console.log(response);

          getFirestore()
            .collection("users")
            .doc(response.user.uid)
            .get()
            .then((doc) => {
              if (doc.exists) {
                console.log("Document data:", doc.data());
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                alert("No such document!");
              }

              dispatch({
                type: "LOGGED_IN",
                payload: doc.data(),
              });
            })
            .catch((error) => {
              alert(error);
              console.log("Error getting document:", error);
            });
        });
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };
};

export const logoutUser = () => {
  return (dispatch, state, { getFirebase }) => {
    let firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then((response) => {
        console.log(response);
        dispatch({
          type: "LOGGED_OUT",
        });
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };
};

export const resetPassword = (email) => async (dispatch) => {
  return async (dispatch, state, { getAuth, sendPasswordResetEmail }) => {
    const auth = getAuth();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        alert("Check mail");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// Create our initial doc

export const loggedIn = (user) => {
  return {
    type: "LOGGED_IN",
    payload: user,
  };
};
