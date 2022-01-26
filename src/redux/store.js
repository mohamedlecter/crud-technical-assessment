import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const Reducer = (state = {}, action) => {
  switch (action.type) {
    case "REQUEST_ITEM_LIST":
      return { ...state, loading: true };
    case "ADD_ITEM_LIST":
      return { ...state, loading: false, products: action.payload };
    case "FAIL_ITEM_LIST":
      return { ...state, loading: false, message: "Error" };
    case "ADD_ITEM_CART":
      return {
        ...state,
        cart: [...state.cart, { id: action.payload, quantity: 1 }],
      };
    case "DEL_ITEM_CART":
      return {
        ...state,
        cart: state.cart.filter((id) => id.id !== action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(Reducer, applyMiddleware(thunk));

export default store;
