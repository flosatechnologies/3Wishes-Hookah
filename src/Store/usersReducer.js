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

    default:
      return { ...state };
  }
};

export default usersReducer;
