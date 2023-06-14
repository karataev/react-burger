import {v4 as uuidv4} from "uuid";
import {CART_BUN_SET, CART_ITEM_ADD, CART_ITEM_REMOVE} from "../actions/cart";

const initialState = {
  cartBun: null,
  cartItems: [],
}

function addId(item) {
  return {
    ...item,
    id: uuidv4(),
  }
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
        addId(action.item),
      ]
    }
  }
  case CART_ITEM_REMOVE: {
    return {
      ...state,
      cartItems: state.cartItems.filter(item => item.id !== action.id),
    }
  }
  default: {
    return state;
  }
  }
}