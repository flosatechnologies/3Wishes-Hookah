export const AddCustomerDetail = (customer) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("customers")
      .doc(customer.Id)
      .set({
        fullName: customer.fullName,
        phoneNumber: customer.phoneNumber,
        ghanaPostGps: customer.ghanaPostGps,
        deliveryLocation: customer.deliveryLocation,
        landMark: customer.landMark,
        region: customer.region,
        Id: customer.Id,
        createdAt: customer.createdAt,
      })
      .then(() => {
        alert("Details submitted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    // dispatch(doc(customer));
    // dispatch({
    //   type: "ADD_CUSTOMER",
    //   payload: customer,
    // });
  };
};

export const getCustomers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("customers")
      .onSnapshot(
        (snapshot) => {
          let customers = [];
          snapshot.forEach((doc) => {
            customers.push(doc.data());
          });
          console.log(customers, "Sam");
          dispatch({
            type: "GET_CUSTOMERS",
            payload: customers,
          });
        },
        (err) => {}
      );
  };
};
