export const GetCartProduct = () => {
  return {
    type: "GET_CART_PRODUCT",
  };
};

export const quantityIncrease = (Id) => {
  return {
    type: "QUANTITY_INCREASE",

    Id,
  };
};
export const quantityDecrease = (Id) => {
  return {
    type: "QUANTITY_DECREASE",

    Id,
  };
};

export const quantityChange = (Id, newQty) => {
  return {
    type: "QUANTITY_CHANGE",
    Id,
    newQty,
  };
};

export const AddToCart = (product, qty) => {
  return {
    type: "ADD_TO_CART",
    product,
    qty,
  };
};

export const ClearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const removeProduct = (Id) => {
  return {
    type: "REMOVE_FROM_CART",
    Id,
  };
};
