import { Middleware } from 'redux';
import {RootState} from '../store';
import {WS_FEED_CONNECT, WS_FEED_DISCONNECT, WS_FEED_SEND_MESSAGE} from "../actions/feed";

export type TwsActionTypes = {
    wsConnect: any,
    wsDisconnect: any,
    wsSendMessage?: any,
    wsConnecting: any,
    onOpen: any,
    onClose: any,
    onError: any,
    onMessage: any,
}

const MAX_FEED_ORDERS = 20;

export const socketMiddleware: any = (wsActions: TwsActionTypes): Middleware<{}, RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;
    let isConnected = false;
    let reconnectTimer = 0;
    let url = '';

    return next => action => {
      const { dispatch } = store;
      const { wsConnect, wsSendMessage, onOpen,
        onClose, onError, onMessage, wsConnecting } = wsActions;

      if (action.type === WS_FEED_CONNECT) {
        console.log('connect')
        url = action.payload;
        socket = new WebSocket(url);
        isConnected = true;
        dispatch(wsConnecting());
      }

      if (socket) {
        socket.onopen = () => {
          dispatch(onOpen());
        };
  
        socket.onerror = err  => {
          console.log('error')
        };
  
        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          console.log('got', parsedData);
          const orders = parsedData.orders.slice(0, MAX_FEED_ORDERS);
          dispatch(onMessage({
            orders,
            ordersToday: parsedData.totalToday,
            ordersTotal: parsedData.total,
          }));
        };
  
        socket.onclose = event => {
          if (event.code !== 1000) {
            console.log('error')
            dispatch(onError(event.code.toString()));
          }
          console.log('close')
          dispatch(onClose());

          if (isConnected) {
            dispatch(wsConnecting());
            reconnectTimer = window.setTimeout(() => {
              dispatch(wsConnect(url));
            }, 3000)
          }

        };
  
        if (wsSendMessage && action.type === WS_FEED_SEND_MESSAGE) {
          console.log('send')
          socket.send(JSON.stringify(action.payload));
        }

        if (action.type === WS_FEED_DISCONNECT) {
          console.log('disconnect')
          clearTimeout(reconnectTimer)
          isConnected = false;
          reconnectTimer = 0;
          socket.close();
          dispatch(onClose());
        }
      }
  
      next(action);
    };
  };
};
  