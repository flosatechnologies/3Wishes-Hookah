const initialState = {
  login: false,
  role: "",
  displayName: "",
  allUsers: {},
  user: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const newUser = {
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
      };
      return { ...state, users: [...state.user, newUser] };

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

export default usersReducer;
