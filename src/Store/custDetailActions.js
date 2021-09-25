export const AddCustomerInfo = (customer) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("customersInfo")
      .doc(customer.Id)
      .set({
        ghanaPostGps: customer.ghanaPostGps,
        residentialAddress: customer.residentialAddress,
        city: customer.city,
        region: customer.region,
        Id: customer.Id,
      })
      .then(() => {
        alert("Details submitted successfully");
        getFirestore()
          .collection("users")
          .doc(customer.Id)
          .update({
            firstName: customer.firstName,
            otherNames: customer.otherNames,
            phoneNumber: customer.phoneNumber,
          })
          .then()
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
    // dispatch(doc(customer));
    // dispatch({
    //   type: "ADD_CUSTOMER",
    //   payload: customer,
    // });
  };
};

export const getCustomerInfo = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("customersInfo")
      .onSnapshot(
        (snapshot) => {
          let customers = [];

          snapshot.forEach((doc) => {
            customers.push(doc.data());
          });
          console.log("theCustomers ", customers);
          dispatch({
            type: "GET_CUSTOMERS",
            payload: customers,
          });
        },
        (err) => {
          alert(err.message);
        }
      );
  };
};
export const getOtherCustomerInfo = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .onSnapshot(
        (snapshot) => {
          let others = [];
          snapshot.forEach((doc) => {
            others.push(doc.data());
          });
          console.log("theOtherInfo ", others);
          dispatch({
            type: "GET_OTHER_CUSTOMER_INFO",
            payload: others,
          });
        },
        (err) => {
          console.log("getOtherCustomerInfo: ", err);
        }
      );
  };
};
