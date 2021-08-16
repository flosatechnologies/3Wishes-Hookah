const initialState = {
  users: [],
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

    case "SET_ALL_USERS":
      return { ...state, users: action.payload };

    default:
      return { ...state };
  }
};

export default usersReducer;
