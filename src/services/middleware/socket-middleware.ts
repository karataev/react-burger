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
import {refreshToken} from "../../api/norma-api";
import storage from "../../utils/storage";

const MAX_FEED_ORDERS = 20;

export const socketMiddleware = (): Middleware => {
  return (store) => {
    let socket: WebSocket | null = null;
    let isConnected = false;
    let reconnectTimer = 0;
    let url = '';
    let useToken = false;

    function connect() {
      let socketUrl = url;
      if (useToken) {
        const tokenWithBearer = storage.get('accessToken') as string;
        const token = tokenWithBearer.split('Bearer ')[1];
        socketUrl += `?token=${token}`;
      }
      socket = new WebSocket(socketUrl);
      isConnected = true;
    }

    return next => action => {
      const { dispatch } = store;

      if (action.type === WS_CONNECT) {
        console.log('connect');
        url = action.url;
        useToken = action.useToken;
        connect();

        if (socket) {
          socket.onopen = () => {
            dispatch(wsFeedOnOpen());
          };

          socket.onerror = ()  => {
          };

          socket.onmessage = async event => {
            const { data } = event;
            const parsedData = JSON.parse(data);
            if (parsedData.message === 'Invalid or missing token') {
              const refreshData = await refreshToken();
              if (refreshData.success) {
                storage.set("refreshToken", refreshData.refreshToken);
                storage.set("accessToken", refreshData.accessToken);
              }
              socket?.close();
              connect();
              return;
            }
            const orders = parsedData.orders.slice(0, MAX_FEED_ORDERS);
            dispatch(wsFeedOnMessage({
              orders,
              ordersToday: parsedData.totalToday,
              ordersTotal: parsedData.total,
            }));
          };

          socket.onclose = event => {
            if (event.code !== 1000 && event.code !== 1005) {
              console.log('error')
              dispatch(wsFeedOnError(event.code.toString()));
            }
            console.log('close');
            dispatch(wsFeedOnClose());

            if (isConnected) {
              reconnectTimer = window.setTimeout(() => {
                dispatch(wsFeedConnect({url, useToken}));
              }, 3000)
            }

          };
        }
      }

      if (action.type === WS_DISCONNECT) {
        console.log('disconnect');
        clearTimeout(reconnectTimer);
        isConnected = false;
        reconnectTimer = 0;
        if (socket) socket.close();
        dispatch(wsFeedOnClose());
      }


      next(action);
    };
  };
};
  