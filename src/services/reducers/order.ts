import {CREATE_ORDER_FAILED, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS} from "../actions/order";

type TCreateOrderFailed = {
  type: typeof CREATE_ORDER_FAILED;
  errorMessage: string;
}

type TCreateOrderRequest = {
  type: typeof CREATE_ORDER_REQUEST;
}

type TCreateOrderSuccess = {
  type: typeof CREATE_ORDER_SUCCESS;
  orderNumber: number;
}

export type TOrderActions = TCreateOrderFailed | TCreateOrderRequest | TCreateOrderSuccess;

type TOrderState = {
  isLoading: boolean;
  errorMessage: string;
  orderNumber: number | null;
}

const initialState: TOrderState = {
  isLoading: false,
  errorMessage: '',
  orderNumber: null,
}

export function orderReducer(state = initialState, action: TOrderActions) {
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