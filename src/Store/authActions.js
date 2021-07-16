export const userRegistration = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const timestamp = new Date();

    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((resp) => {
        return firestore.collection("users").doc(resp.user.uid).set({
          firstName: user.firstName,
          otherNames: user.otherNames,
          email: user.email,
          phoneNumber: user.phoneNumber,
          role: user.role,
          createdDate: timestamp,
        });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
        alert(err.message);
      });
  };
};

export const loginWithEmail = (email, password) => {
  return (dispatch, state, { getFirebase, getFirestore }) => {
    let firebase = getFirebase();
    firebase
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
            console.log("Error getting document:", error);
          });
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
        dispatch({
          type: "LOGGED_OUT",
        });
      })
      .catch((err) => {
        console.log(err);
      });
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

export const DeleteProduct = (Id) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("products")
      .doc(Id)
      .delete()
      .then(() => {});
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
  image
) => {
  return (dispatch, state, { getFirestore, getFirebase }) => {
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
            alert("Product updated successfully");
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };
};

export const loggedIn = (user) => {
  return {
    type: "LOGGED_IN",
    payload: user,
  };
};

export const loggedOut = (products) => {
  return {
    type: "GET_ALL_PRODUCTS",
    payload: products,
  };
};

export const AddToCart = (product, qty) => {
  return {
    type: "LOGGED_IN",
    product,
    qty,
  };
};
