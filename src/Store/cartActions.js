export const GetCartProduct = () => {
  return {
    type: "GET_CART_PRODUCT",
  };
};

export const changeQuantity = (qty, Id) => {
  return {
    type: "QUANTITY_CHANGE",
    qty,
    Id,
  };
};
