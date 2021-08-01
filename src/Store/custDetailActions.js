export const AddCustomerDetail = (newCustomer) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("customers")
      .add(newCustomer)
      .then((doc) => {
        console.log(doc);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
