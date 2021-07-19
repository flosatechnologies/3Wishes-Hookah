const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const cartProduct = { qty: action.qty, product: action.product };
      return { ...state, cart: [...state.cart, cartProduct] };
    case "GET_CART_PRODUCT":
      return { ...state };
    default:
      return { ...state };
  }
};

export default cartReducer;
