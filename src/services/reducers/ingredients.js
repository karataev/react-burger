import {
  CLEAR_SELECTED_INGREDIENT,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  SET_SELECTED_INGREDIENT
} from "../actions/ingredients";

const initialState = {
  ingredients: [],
  ingredientsLoading: false,
  ingredientsError: false,
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
  case SET_SELECTED_INGREDIENT: {
    return {
      ...state,
      selectedIngredient: action.selectedIngredient,
    }
  }
  case CLEAR_SELECTED_INGREDIENT: {
    return {
      ...state,
      selectedIngredient: null,
    }
  }
  default: {
    return state;
  }
  }
}