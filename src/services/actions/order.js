import {createOrderApi} from "../../api/burger-api";

export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';

export function createOrder(ids) {
  return async function(dispatch) {
    dispatch({type: CREATE_ORDER_REQUEST});

    try {
      const result = await createOrderApi(ids);
      dispatch({type: CREATE_ORDER_SUCCESS, orderNumber: result.order.number});
    } catch (e) {
      dispatch({type: CREATE_ORDER_FAILED, errorMessage: e?.message});
    }
  }
}