import {fetchIngredientsApi} from "../../api/burger-api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';

export function getIngredients() {
  return async function(dispatch) {
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
