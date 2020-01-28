import { applyMiddleware, combineReducers, createStore } from 'redux';

import connectionStatusReducer from '../reducers/connectionStatusReducer';
import messagesReducer from '../reducers/messagesReducer';
import usernameReducer from '../reducers/usernameReducer';

import createManagerMiddleware from '../middlewares/managerMiddleware';
import createNetworkConnectionMiddleware from '../middlewares/networkConnectionMiddleware';
import createLocalStorageMiddleware from '../middlewares/lsmiddleware';
import createWebSocketMiddleware from '../middlewares/wsmiddleware';
import createNotificationsMiddleware from '../middlewares/notiicationsMiddleware';
import { establishConnection, loadUsername } from '../actions';

const reducers = {
  connectionStatus: connectionStatusReducer,
  myUsername: usernameReducer,
  messages: messagesReducer
};
const middleware = applyMiddleware(createManagerMiddleware(), createNetworkConnectionMiddleware(), createLocalStorageMiddleware(), createWebSocketMiddleware(), createNotificationsMiddleware());
const store = createStore(combineReducers(reducers), middleware);

store.dispatch(loadUsername());
store.dispatch(establishConnection());

export default store;
