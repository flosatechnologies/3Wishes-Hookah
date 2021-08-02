const initialState = {
  customers: [],
};

// eslint-disable-next-line no-unused-vars
export const CustomerDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER_DETAIL":
      const newCustomer = {
        fullName: action.payload.fullName,
        phoneNumber: action.payload.phoneNumber,
        ghanaPostGps: action.payload.ghanaPostGps,
        deliveryLocation: action.payload.deliveryLocation,
        landMark: action.payload.landMark,
        region: action.payload.region,
      };
      return { ...state, customers: [...state.customers, newCustomer] };
    case "GET_CUSTOMERS":
      return { ...state, customers: action.payload };
    default:
      return state;
  }
};
