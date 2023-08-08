import {createOrderApi} from "../../api/norma-api";
import {AppDispatch, AppThunk} from "../store";

export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';

export const createOrder: AppThunk = (ids: string[]) => {
  return async function(dispatch: AppDispatch) {
    dispatch({type: CREATE_ORDER_REQUEST});

    try {
      const result = await createOrderApi(ids);
      dispatch({type: CREATE_ORDER_SUCCESS, orderNumber: result.order.number});
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Произошла ошибка';
      dispatch({type: CREATE_ORDER_FAILED, errorMessage: message});
    }
  }
}