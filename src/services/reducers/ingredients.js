import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  SET_CURRENT_TAB, SET_SELECTED_INGREDIENT
} from "../actions/ingredients";
import {GROUP_BUNS} from "../../utils/constants";

const initialState = {
  ingredients: [],
  ingredientsLoading: false,
  ingredientsError: false,
  currentTab: GROUP_BUNS,
  selectedIngredient: null,
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
  case GET_INGREDIENTS_FAILED: {
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
  case SET_SELECTED_INGREDIENT: {
    return {
      ...state,
      selectedIngredient: action.selectedIngredient,
    }
  }
  default: {
    return state;
  }
  }
}