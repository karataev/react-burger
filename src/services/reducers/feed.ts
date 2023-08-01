import {TOrder} from "../../utils/types";
import {WS_FEED_ON_MESSAGE} from "../actions/feed";

type TFeedState = {
  orders: TOrder[];
}

const initialState: TFeedState = {
  orders: [],
}

export function feedReducer(state = initialState, action: any) {
  switch (action.type) {
  case WS_FEED_ON_MESSAGE: {
    return {
      ...state,
      orders: action.orders,
    }
  }
  default: {
    return state;
  }
  }
}