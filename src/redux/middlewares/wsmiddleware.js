import { WS_CLOSE, WS_CONNECT, WS_RECONNECT, WS_SEND } from '../actions/actionTypes';

const createWebSocketMiddleware = () => {
  let wsClient = null;
  let url = null;
  let onMessage = null;

  return store => {
    const connect = () => {
      if (store.getState().connectionStatus === 'offline') {
        setTimeout(connect, 1000);
        return;
      }

      wsClient = new WebSocket(url);

      wsClient.onmessage = event => {
        return store.dispatch(onMessage(JSON.parse(event.data)));
      };

      wsClient.onclose = () => {
        setTimeout(connect, 1000);
      };
    };

    return next => action => {
      switch (action.type) {
        case WS_CONNECT:
          url = action.url;
          onMessage = action.onMessage;

          connect();

          break;
        case WS_SEND:
          wsClient.send(action.message);

          break;
        case WS_CLOSE:
          wsClient.close();
          wsClient = null;

          break;

        case WS_RECONNECT:
          if (!wsClient || wsClient.readyState !== 1) {
            connect();
          }

          break;

        default:
          return next(action);
      }
    };
  };
};

export default createWebSocketMiddleware;
