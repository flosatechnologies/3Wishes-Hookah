const initialState = {
  login: false,
  user: null,
  users: "[]",
  products: [
    {
      name: "",
      price: "",
      quantity: "",
      description: "",
      imageTofirestore: { name: "noImage.png" },
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJfdSVJ3Vi3Q_8wVTsa8lE6foFVOOFXiapNJB6SORmxKLOCi9hN1QgGO8saCXqfUhmkU&usqp=CAU",
    },
  ],
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
    case "LOGGED_IN":
      return { ...state, login: true, user: action.payload };
    case "THE_LOGOUT":
      return { ...state, login: false };

      console.log("signup success");
      return { ...state, authError: null };

    case "SIGNUP_ERROR":
      console.log("signup error");
      return { ...state, authError: action.err.message };

    case "SET_ALL_PRODUCTS":
      return { products: action.payload };

    case "DELETE_PRODUCT":
      const filteredProducts = state.products.filter(
        (product) => product.Id !== action.payload
      );
      return { ...state, products: filteredProducts };
    default:
      return state;
  }
};

export default usersReducer;
