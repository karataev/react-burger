import {
  GET_INGREDIENTS_FAIL,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS, SET_CURRENT_TAB
} from "../actions/ingredients";
import {GROUP_BUNS} from "../../utils/constants";

const initialState = {
  ingredients: [],
  ingredientsLoading: false,
  ingredientsError: false,
  currentTab: GROUP_BUNS,
}

export function ingredientsReducer(state = initialState, action) {
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
  case SET_CURRENT_TAB: {
    return {
      ...state,
      currentTab: action.tab,
    }
  }
  default: {
    return state;
  }
  }
}