export const registerWithEmail = (email, password) => {
  return (dispatch, state, { getFirebase }) => {
    let firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loginWithEmail = (email, password) => {
  return (dispatch, state, { getFirebase }) => {
    let firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        dispatch(loggedIn(response));
      })
      .catch((err) => {
        console.log(err);
      });
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loggedIn = (user) => {
  return {
    type: "LOGGED_IN",
    payload: user,
  };
};

export const logginOut = () => {
  return {
    type: "THE_LOGOUT",
  };
};
