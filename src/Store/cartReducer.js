import { isEmpty } from "react-redux-firebase";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const cartProduct = { qty: action.qty, product: action.product };
      let decoy = state.cart;
      if (decoy.length === 0) {
        decoy.push(cartProduct);
      } else {
        const exist = decoy.some(
          (user) => user.product.Id === action.product.Id
        );
        if (exist) {
          decoy.map((dec) => {
            if (dec.product.Id === action.product.Id) {
              dec.qty = dec.qty + 1;
            }
          });
        }
        if (!exist) {
          decoy.push(cartProduct);
        }
      }
      return { ...state, cart: decoy };
    case "GET_CART_PRODUCT":
      return { ...state };

    case "QUANTITY_CHANGE":
      let changecopy = state.cart;
      console.log("the Copy: ", changecopy);
      copy.map((prod) => {
        if (prod.product.Id === action.Id) {
          prod.qty = action.newQty;
        }
      });
      return { ...state, cart: changecopy };

    case "QUANTITY_INCREASE":
      let copy = state.cart;
      console.log("the Copy: ", copy);
      copy.map((prod) => {
        if (prod.product.Id === action.Id) {
          prod.qty = prod.qty + 1;
        }
      });
      return { ...state, cart: copy };

    case "QUANTITY_DECREASE":
      let duplicate = state.cart;
      console.log("the Copy: ", duplicate);
      duplicate.map((prod) => {
        if (prod.product.Id === action.Id) {
          if (prod.qty === 1) {
            prod.qty = prod.qty;
          } else {
            prod.qty = prod.qty - 1;
          }
        }
      });
      return { ...state, cart: duplicate };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "REMOVE_FROM_CART":
      let theDuplicate = state.cart;
      let filtered = theDuplicate.filter((p) => p.product.Id !== action.Id);
      return { ...state, cart: filtered };

    default:
      return { ...state };
  }
};

export default cartReducer;
