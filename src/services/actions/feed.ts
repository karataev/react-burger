import {TOrder} from "../../utils/types";

export const WS_CONNECT = 'WS_CONNECT';
export const WS_DISCONNECT = 'WS_DISCONNECT';
export const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE';
export const WS_CONNECTING = 'WS_CONNECTING';
export const WS_ON_OPEN = 'WS_ON_OPEN';
export const WS_ON_CLOSE = 'WS_ON_CLOSE';
export const WS_ON_ERROR = 'WS_ON_ERROR';
export const WS_ON_MESSAGE = 'WS_ON_MESSAGE';


export const wsFeedConnect = (url: string) => ({
  type: WS_CONNECT,
  payload: url,
})

export const wsFeedDisconnect = () => ({
  type: WS_DISCONNECT,
})

export const wsFeedSendMessage = () => ({
  type: WS_SEND_MESSAGE,
})

export const wsFeedConnecting = () => ({
  type: WS_CONNECTING,
})

export const wsFeedOnOpen = () => ({
  type: WS_ON_OPEN,
})

export const wsFeedOnClose = () => ({
  type: WS_ON_CLOSE,
})

export const wsFeedOnError = () => ({
  type: WS_ON_ERROR,
})

export const wsFeedOnMessage = ({orders, ordersToday, ordersTotal}: {orders: TOrder[], ordersToday: number, ordersTotal: number}) => ({
  type: WS_ON_MESSAGE,
  orders,
  ordersToday,
  ordersTotal,
})
