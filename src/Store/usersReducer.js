const initialState = {
  login: false,
  user: null,
  users: "[]",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const newUser = {
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
      };
      return { ...state, users: [...state.users, newUser] };

    default:
      return state;
  }
};

export default usersReducer;
