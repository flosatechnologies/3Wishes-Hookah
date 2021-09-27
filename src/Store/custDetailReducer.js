const initialState = {
  customers: [],
  otherInfo: [],
};

// eslint-disable-next-line no-unused-vars
const customerDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CUSTOMERS":
      return { ...state, customers: action.payload };

    case "GET_OTHER_CUSTOMER_INFO":
      return { ...state, otherInfo: action.payload };
    default:
      return state;
  }
};

export default customerDetailReducer;
