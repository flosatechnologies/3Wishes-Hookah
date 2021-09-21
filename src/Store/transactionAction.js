export const getTransaction = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .onSnapshot(
        (snapshot) => {
          let users = [];

          snapshot.forEach((doc) => {
            users.push(doc.data());
          });
          console.log(users);
          dispatch({
            type: "SET_ALL_USERS",
            payload: users,
          });
        },
        (err) => {}
      );
  };
};

export const addTransaction = (transactionInfo) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("transaction")
      .doc()
      .set({
        Id: transactionInfo.Id,
        products: transactionInfo.products,
        customer: transactionInfo.customer,
        amount: transactionInfo.amount,
        location: transactionInfo.location,
        deliveryStatus: transactionInfo.deliveryStatus,
      })
      .then()
      .onSnapshot(
        (snapshot) => {
          let users = [];

          snapshot.forEach((doc) => {
            users.push(doc.data());
          });
          console.log(users);
          dispatch({
            type: "SET_ALL_USERS",
            payload: users,
          });
        },
        (err) => {}
      );
  };
};
