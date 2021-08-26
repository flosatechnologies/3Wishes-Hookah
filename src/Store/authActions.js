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
              }

              dispatch({
                type: "LOGGED_IN",
                payload: doc.data(),
              });
            })
            .catch((error) => {
              alert(error.message);
              console.log("Error getting document:", error);
            });
        });
    } catch (err) {
      console.log(err);
      alert(err);
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
      });
  };
};

export const resetPassword = (email) => async (dispatch) => {
  return async (dispatch, state, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    try {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() =>
          dispatch({
            type: "RESET_SUCCESS",
            payload: "Reset email sent. Go check your inbox.",
          })
        )
        .catch((err) => {
          dispatch({
            type: "RESET_ERROR",
            payload: "...some message for the user...",
          });
        });
    } catch (err) {
      dispatch({
        type: " RESET_ERROR",
        payload: "...some message for the user...",
      });
    }
  };
};

// Create our initial doc

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

export const DeleteProduct = (Id, path) => {
  return (dispatch, state, { getFirestore, getFirebase }) => {
    getFirestore()
      .collection("products")
      .doc(Id)
      .delete()
      .then(() => {
        getFirebase()
          .storage()
          .ref("images")
          .child(path)
          .delete()
          .then(() => {
            console.log("file deleted successfully");
          })
          .catch((error) => {
            console.log(error);
          });
      });

    // export const DeleteProduct = (product_Id) => {
    //   return {
    //     type: "DELETE_PRODUCT",
    //     payload: product_Id,
  };
};

export const getAllProducts = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("products")
      .onSnapshot(
        (snapshot) => {
          let products = [];

          snapshot.forEach((doc) => {
            products.push(doc.data());
          });
          console.log(products);
          dispatch({
            type: "SET_ALL_PRODUCTS",
            payload: products,
          });
        },
        (err) => {}
      );
  };
};

export const EditProduct = (
  Id,
  product,
  price,
  quantity,
  description,
  image,
  path
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
                alert("Update successful");
              })
              .catch((error) => {
                console.log(error);
              });
          });
      },
      () => {
        getFirestore()
          .storage()
          .ref("images")
          .child(path)
          .delete()
          .then(() => {
            console.log("file deleted successfully");
          })
          .catch((error) => {
            console.log(error);
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

export const EditTextOnly = (
  Id,
  product,
  price,
  quantity,
  description,
  image
) => {
  return (state, dispatch, { getFirestore }) => {
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
        alert("Update successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
