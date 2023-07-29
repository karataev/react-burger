import {
  CLEAR_SELECTED_INGREDIENT,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  SET_SELECTED_INGREDIENT
} from "../actions/ingredients";
import {TIngredient} from "../../utils/types";

type TIngredientsState = {
  ingredients: TIngredient[];
  ingredientsLoading: boolean;
  ingredientsError: boolean;
  selectedIngredient: TIngredient | null;
}

const initialState: TIngredientsState = {
  ingredients: [],
  ingredientsLoading: false,
  ingredientsError: false,
  selectedIngredient: null,
}

type TClearSelectedIngredient = {
  type: typeof CLEAR_SELECTED_INGREDIENT;
}

type TGetIngredientsFailed = {
  type: typeof GET_INGREDIENTS_FAILED;
}

type TGetIngredientsRequest = {
  type: typeof GET_INGREDIENTS_REQUEST;
}

type TGetIngredientsSuccess = {
  type: typeof GET_INGREDIENTS_SUCCESS;
  ingredients: TIngredient[];
}

type TSetSelectedIngredient = {
  type: typeof SET_SELECTED_INGREDIENT;
  selectedIngredient: TIngredient;
}

export type TIngredientsActions = TClearSelectedIngredient
  | TGetIngredientsRequest
  | TGetIngredientsSuccess
  | TGetIngredientsFailed
  | TSetSelectedIngredient;

export function ingredientsReducer(state = initialState, action: TIngredientsActions) {
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