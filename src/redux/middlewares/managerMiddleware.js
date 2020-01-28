import {
  ESTABLISH_CONNECTION,
  LOAD_USERNAME,
  SEND_MESSAGE,
  SAVE_USERNAME,
  GO_ONLINE,
  ADD_MESSAGES
} from '../actions/actionTypes';
import { addMessages, lsGet, lsSet, notify, setUsername, wsConnect, wsReconnect, wsSend } from '../actions';

const createManagerMiddleware = () => {
  return store => next => action => {
    switch (action.type) {
      case ESTABLISH_CONNECTION:
        next(wsConnect('wss://wssproxy.herokuapp.com/', addMessages));
        break;

      case ADD_MESSAGES:
        const newMessages = JSON.stringify([...action.messages].sort((message1, message2) => message1.time - message2.time));
        const oldMessages = JSON.stringify(store.getState().messages);

        if (newMessages !== oldMessages) {
          next(notify('Message Arrived!', 'Got some new messages for you!', 10000));
          next(action);
        }

        break;

      case SEND_MESSAGE:
        next(wsSend(JSON.stringify({ from: store.getState().myUsername, message: action.messageText })));
        break;

      case SAVE_USERNAME:
        next(lsSet('username', action.username));
        next(setUsername(action.username));
        break;

      case LOAD_USERNAME:
        next(lsGet('username', setUsername));
        break;

      case GO_ONLINE:
        next(wsReconnect());
        next(action);
        break;

      default:
        return next(action);
    }
  };
};

export default createManagerMiddleware;
