import {TOrder} from "../../utils/types";

export const WS_CONNECT = 'WS_CONNECT';
export const WS_DISCONNECT = 'WS_DISCONNECT';
export const WS_ON_OPEN = 'WS_ON_OPEN';
export const WS_ON_CLOSE = 'WS_ON_CLOSE';
export const WS_ON_ERROR = 'WS_ON_ERROR';
export const WS_ON_MESSAGE = 'WS_ON_MESSAGE';

type TwsConnect = {
  type: typeof WS_CONNECT;
  payload: string;
}

type TwsDisconnect = {
  type: typeof WS_DISCONNECT;
}

type TwsOnOpen = {
  type: typeof WS_ON_OPEN;
}

type TwsOnClose = {
  type: typeof WS_ON_CLOSE;
}

type TwsOnError = {
  type: typeof WS_ON_ERROR;
  message: string;
}

type TwsOnMessage = {
  type: typeof WS_ON_MESSAGE;
  orders: TOrder[];
  ordersToday: number;
  ordersTotal: number;
}

export type TwsActions = TwsConnect | TwsDisconnect | TwsOnOpen | TwsOnClose | TwsOnError | TwsOnMessage;

export const wsFeedConnect = (url: string): TwsConnect => ({
  type: WS_CONNECT,
  payload: url,
})

export const wsFeedDisconnect = (): TwsDisconnect => ({
  type: WS_DISCONNECT,
})

export const wsFeedOnOpen = (): TwsOnOpen => ({
  type: WS_ON_OPEN,
})

export const wsFeedOnClose = (): TwsOnClose => ({
  type: WS_ON_CLOSE,
})

export const wsFeedOnError = (message: string): TwsOnError => ({
  type: WS_ON_ERROR,
  message,
})

export const wsFeedOnMessage = ({orders, ordersToday, ordersTotal}: {orders: TOrder[], ordersToday: number, ordersTotal: number}): TwsOnMessage => ({
  type: WS_ON_MESSAGE,
  orders,
  ordersToday,
  ordersTotal,
})
