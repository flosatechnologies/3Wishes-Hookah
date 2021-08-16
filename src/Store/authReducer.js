const initialState = {
  login: false,
  role: "",
  displayName: "",
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      const loggedInUser = action.payload;
      console.log("theRole:", loggedInUser.role);

      const therole = loggedInUser.role;
      const name = loggedInUser.firstName;
      return {
        ...state,
        login: true,
        role: therole,
        displayName: name,
        user: { loggedInUser },
      };

    case "LOGGED_OUT":
      return { ...state, login: false, user: "", role: "", displayName: "" };

    case "SIGNUP_ERROR":
      console.log("signup error");
      return { ...state, authError: action.err.message };

    default:
      return { ...state };
  }
};

export default authReducer;
