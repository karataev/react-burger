import { Middleware } from 'redux';
import {
  WS_CONNECT,
  WS_DISCONNECT,
  wsFeedConnect,
  wsFeedOnClose,
  wsFeedOnError,
  wsFeedOnMessage,
  wsFeedOnOpen,
} from "../actions/feed";

const MAX_FEED_ORDERS = 20;

export const socketMiddleware = (): Middleware => {
  return (store) => {
    let socket: WebSocket | null = null;
    let isConnected = false;
    let reconnectTimer = 0;
    let url = '';

    return next => action => {
      const { dispatch } = store;

      if (action.type === WS_CONNECT) {
        console.log('connect')
        url = action.payload;
        socket = new WebSocket(url);
        isConnected = true;
      }

      if (socket) {
        socket.onopen = () => {
          dispatch(wsFeedOnOpen());
        };
  
        socket.onerror = ()  => {
        };
  
        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const orders = parsedData.orders.slice(0, MAX_FEED_ORDERS);
          dispatch(wsFeedOnMessage({
            orders,
            ordersToday: parsedData.totalToday,
            ordersTotal: parsedData.total,
          }));
        };
  
        socket.onclose = event => {
          if (event.code !== 1000) {
            console.log('error')
            dispatch(wsFeedOnError(event.code.toString()));
          }
          console.log('close')
          dispatch(wsFeedOnClose());

          if (isConnected) {
            reconnectTimer = window.setTimeout(() => {
              dispatch(wsFeedConnect(url));
            }, 3000)
          }

        };
  
        if (action.type === WS_DISCONNECT) {
          console.log('disconnect')
          clearTimeout(reconnectTimer)
          isConnected = false;
          reconnectTimer = 0;
          socket.close();
          dispatch(wsFeedOnClose());
        }
      }
  
      next(action);
    };
  };
};
  