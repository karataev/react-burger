import {v4 as uuidv4} from "uuid";
import {CART_BUN_SET, CART_ITEM_ADD, CART_ITEM_REMOVE} from "../actions/cart";

const initialState = {
  cartBun: null,
  cartItems: [],
}

export function cartReducer(state = initialState, action) {
  switch (action.type) {
  case CART_BUN_SET: {
    return {
      ...state,
      cartBun: action.bun,
    }
  }
  case CART_ITEM_ADD: {
    return {
      ...state,
      cartItems: [
        ...state.cartItems,
        {...action.item, key: uuidv4()},
      ]
    }
  }
  case CART_ITEM_REMOVE: {
    return {
      ...state,
      cartItems: state.cartItems.filter(item => item.key !== action.key),
    }
  }
  default: {
    return state;
  }
  }
}