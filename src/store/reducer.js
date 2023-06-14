import {
  CART_BUN_SET,
  CART_ITEM_ADD,
  CART_ITEM_REMOVE,
  GET_INGREDIENTS_FAIL,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS
} from "./actions";
import {v4 as uuidv4} from "uuid";

const initialState = {
  ingredients: [],
  ingredientsLoading: false,
  ingredientsError: false,
  cartItems: [],
  cartBun: null,
}

function addId(item) {
  return {
    ...item,
    id: uuidv4(),
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
  case GET_INGREDIENTS_REQUEST: {
    return {
      ...state,
      ingredientsLoading: true,
    }
  }
  case GET_INGREDIENTS_SUCCESS: {
    return {
      ...state,
      ingredientsLoading: false,
      ingredients: action.ingredients,
    }
  }
  case GET_INGREDIENTS_FAIL: {
    return {
      ...state,
      ingredientsLoading: false,
      ingredientsError: true,
    }
  }
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