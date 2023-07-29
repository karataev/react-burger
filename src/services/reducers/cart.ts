import {v4 as uuidv4} from "uuid";
import {CART_BUN_SET, CART_ITEM_ADD, CART_ITEMS_SWAP, CART_ITEM_REMOVE, TCartActions} from "../actions/cart";
import {TIngredient} from "../../utils/types";

type TCartState = {
  cartBun: TIngredient | null;
  cartItems: TIngredient[];
}

const initialState: TCartState = {
  cartBun: null,
  cartItems: [],
}

export function cartReducer(state = initialState, action: TCartActions) {
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
  case CART_ITEMS_SWAP: {
    const {item1, item2} = action;
    const copy = [...state.cartItems];
    const index1 = copy.findIndex(item => item.key === item1.key);
    const index2 = copy.findIndex(item => item.key === item2.key);
    copy[index1] = item2;
    copy[index2] = item1;

    return {
      ...state,
      cartItems: copy
    }
  }
  default: {
    return state;
  }
  }
}