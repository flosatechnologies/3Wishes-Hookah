const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...cart] };

    default:
      return state;
  }
};

export default cartReducer;
