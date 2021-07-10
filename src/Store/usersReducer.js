const initialState = {
  login: false,

  user: {},
  products: [],
  cart: [],

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
      return { ...state, login: true, user: { loggedInUser } };

    case "LOGGED_OUT":
      return { ...state, login: false, user: "" };

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

    case "GET_ALL_PRODUCTS":
      return { products: action.payload };

    case "ADD_TO_CART":
      const cartProduct = { qty: action.qty, product: action.product };
      return { ...state, cart: [...state.cart, cartProduct] };


    default:
      return state;
  }
};

export default usersReducer;
