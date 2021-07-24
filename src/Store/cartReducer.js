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

    case "QUANTITY_CHANGE":
      let copy = state.cart;
      console.log("the Copy: ", copy);
      copy.map((prod) => {
        if (prod.product.Id === action.Id) {
          prod.qty = action.qty;
        }
      });
      return { ...state, cart: copy };

    default:
      return { ...state };
  }
};

export default cartReducer;
