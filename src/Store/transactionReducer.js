const initialState = {
  transaction: [],
  delivery: [],
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
      };

    case "LOGGED_OUT":
      return { ...state, login: false, user: "", role: "", displayName: "" };

    case "SIGNUP_ERROR":
      console.log("signup error");
      return { ...state, authError: action.err.message };

    case "resetPassword":
      return { ...state, resetPassword: true, password: "" };

    default:
      return { ...state };
  }
};

export default transactionReducer;
