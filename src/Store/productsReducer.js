const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_PRODUCTS":
      return { products: action.payload };

    case "DELETE_PRODUCT":
      const filteredProducts = state.products.filter(
        (product) => product.Id !== action.payload
      );
      return { ...state, products: filteredProducts };

    case "GET_ALL_PRODUCTS":
      return { ...state, products: action.payload };

    default:
      return { ...state };
  }
};

export default productReducer;
