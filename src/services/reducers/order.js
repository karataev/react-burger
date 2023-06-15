import {CREATE_ORDER_FAILED, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS} from "../actions/order";

const initialState = {
  isLoading: false,
  errorMessage: '',
  orderNumber: null,
}

export function orderReducer(state = initialState, action) {
  switch (action.type) {
  case CREATE_ORDER_REQUEST: {
    return {
      ...state,
      isLoading: true,
      errorMessage: '',
    }
  }
  case CREATE_ORDER_SUCCESS: {
    return {
      ...state,
      isLoading: false,
      orderNumber: action.orderNumber,
    }
  }
  case CREATE_ORDER_FAILED: {
    return {
      ...state,
      isLoading: false,
      errorMessage: action.errorMessage,
    }
  }
  default: {
    return state;
  }
  }
}