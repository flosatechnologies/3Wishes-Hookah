export const getTransaction = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("transaction")
      .onSnapshot(
        (snapshot) => {
          let transaction = [];

          snapshot.forEach((doc) => {
            transaction.push(doc.data());
          });
          console.log("transaction: ", transaction);
          dispatch({
            type: "SET_ALL_TRANSACTION",
            payload: transaction,
          });
        },
        (err) => {}
      );
  };
};

export const addTransaction = (Id, transactionInfo) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("transaction")
      .doc(Id)
      .set({
        Id: Id,
        transactionId: transactionInfo.transactionId,
        orderId: transactionInfo.orderId,
        products: transactionInfo.products,
        customer: transactionInfo.customer,
        contact: transactionInfo.contact,
        amount: transactionInfo.amount,
        location: transactionInfo.location,
        time: transactionInfo.time,
        deliveryStatus: "pending",
        deliveryInfo: "",
      })
      .then(() => {
        console.log("transaction saved successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addDeliveryInfo = (Id, deliveryInfo) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("transaction")
      .doc(Id)
      .update({
        deliveryInfo: deliveryInfo,
      })
      .then(() => {
        console.log("transaction info added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateTransaction = (Id) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("transaction")
      .doc(Id)
      .update({
        deliveryStatus: "delivered",
      })
      .then(() => {
        console.log("product receipt successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
