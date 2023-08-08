import {fetchIngredientsApi} from "../../api/norma-api";
import {AppDispatch, AppThunk} from "../store";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const SET_SELECTED_INGREDIENT = 'SET_SELECTED_INGREDIENT';
export const CLEAR_SELECTED_INGREDIENT = 'CLEAR_SELECTED_INGREDIENT';

export const getIngredients: AppThunk = () => {
  return async function(dispatch: AppDispatch) {
    dispatch({type: GET_INGREDIENTS_REQUEST});

    try {
      const result = await fetchIngredientsApi();
      const ingredients = result.data;

      dispatch({type: GET_INGREDIENTS_SUCCESS, ingredients})
    } catch {
      dispatch({type: GET_INGREDIENTS_FAILED});
    }
  }
}
