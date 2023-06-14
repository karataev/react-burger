import {fetchIngredientsApi} from "../api/burger-api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAIL = 'GET_INGREDIENTS_FAIL';
export const CART_ITEM_ADD = 'CART_ITEM_ADD';
export const CART_ITEM_REMOVE = 'CART_ITEM_REMOVE';
export const CART_BUN_SET = 'CART_BUN_SET';
export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';

export function getIngredients() {
  return async function(dispatch) {
    dispatch({type: GET_INGREDIENTS_REQUEST});

    try {
      const result = await fetchIngredientsApi();
      const ingredients = result.data;

      dispatch({type: GET_INGREDIENTS_SUCCESS, ingredients})
    } catch {
      dispatch({type: GET_INGREDIENTS_FAIL});
    }
  }
}
