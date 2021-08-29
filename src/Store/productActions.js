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
