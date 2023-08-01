import {TOrder} from "../../utils/types";

export const WS_FEED_CONNECT = 'WS_FEED_CONNECT';
export const WS_FEED_DISCONNECT = 'WS_FEED_DISCONNECT';
export const WS_FEED_SEND_MESSAGE = 'WS_FEED_SEND_MESSAGE';
export const WS_FEED_CONNECTING = 'WS_FEED_CONNECTING';
export const WS_FEED_ON_OPEN = 'WS_FEED_ON_OPEN';
export const WS_FEED_ON_CLOSE = 'WS_FEED_ON_CLOSE';
export const WS_FEED_ON_ERROR = 'WS_FEED_ON_ERROR';
export const WS_FEED_ON_MESSAGE = 'WS_FEED_ON_MESSAGE';


export const wsFeedConnect = (url: string) => ({
  type: WS_FEED_CONNECT,
  payload: url,
})

export const wsFeedDisconnect = () => ({
  type: WS_FEED_DISCONNECT,
})

export const wsFeedSendMessage = () => ({
  type: WS_FEED_SEND_MESSAGE,
})

export const wsFeedConnecting = () => ({
  type: WS_FEED_CONNECTING,
})

export const wsFeedOnOpen = () => ({
  type: WS_FEED_ON_OPEN,
})

export const wsFeedOnClose = () => ({
  type: WS_FEED_ON_CLOSE,
})

export const wsFeedOnError = () => ({
  type: WS_FEED_ON_ERROR,
})

export const wsFeedOnMessage = (orders: TOrder[]) => ({
  type: WS_FEED_ON_MESSAGE,
  orders,
})
