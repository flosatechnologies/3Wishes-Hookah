
import { BsImageFill } from "react-icons/bs";

export const registerWithEmail = (email, password) => {
  return (dispatch, state, { getFirebase }) => {
    let firebase = getFirebase();
//=======
export const registerWithEmail = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const timestamp = new Date();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        return firestore.collection("users").doc(resp.user.uid).set({
          fullname: newUser.fullname,
          email: newUser.email,
          userRole: newUser.userRole,
          createdDate: timestamp,
        });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
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
        alert(err);
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

export const AddNewProduct_obsolete = (
  Id,
  product,
  price,
  quantity,
  description,
  image
) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("products")
      .doc(Id)
      .set({
        Id,
        product,
        price,
        quantity,
        description,
        image,
      })
      .then(() => {
        alert("Product added successfully");
      })
      .catch((error) => {
        alert(error);
      });
  };
};

export const AddNewProduct = (
  Id,
  product,
  price,
  quantity,
  description,
  image
) => {
  return (dispatch, state, { getFirestore, getFirebase }) => {
    const uploadTask = getFirebase()
      .storage()
      .ref(`images/${image.name}`)
      .put(image);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getFirebase()
          .storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            getFirestore()
              .collection("products")
              .doc(Id)
              .set({
                Id,
                product,
                price,
                quantity,
                description,
                image: url,
              })
              .then(() => {
                alert("Product added successfully");
              })
              .catch((error) => {
                console.log(error);
              });
          });
      }
    );
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
