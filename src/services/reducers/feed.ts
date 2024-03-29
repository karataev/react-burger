import {TOrder} from "../../utils/types";
import {TwsActions, WS_CONNECT, WS_ON_MESSAGE} from "../actions/feed";

type TFeedState = {
  orders: TOrder[];
  ordersToday: number;
  ordersTotal: number;
}

const initialState: TFeedState = {
  orders: [],
  ordersToday: 0,
  ordersTotal: 0,
}

export function feedReducer(state = initialState, action: TwsActions) {
  switch (action.type) {
  case WS_CONNECT: {
    return {
      ...state,
      orders: [],
      ordersToday: 0,
      ordersTotal: 0,
    }
  }
  case WS_ON_MESSAGE: {
    return {
      ...state,
      orders: action.orders,
      ordersToday: action.ordersToday,
      ordersTotal: action.ordersTotal,
    }
  }
  default: {
    return state;
  }
  }
}