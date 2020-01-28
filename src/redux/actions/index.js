import {
  ADD_MESSAGES,
  ESTABLISH_CONNECTION,
  GO_OFFLINE,
  GO_ONLINE,
  LOAD_USERNAME,
  LS_CLEAR,
  LS_GET,
  LS_SET, NOTIFY,
  SAVE_USERNAME,
  SEND_MESSAGE,
  SET_USERNAME,
  WS_CLOSE,
  WS_CONNECT,
  WS_RECONNECT,
  WS_SEND
} from './actionTypes';

// General actions
const establishConnection = () => ({
  type: ESTABLISH_CONNECTION
});

// Message actions
const addMessages = messages => ({
  type: ADD_MESSAGES,
  messages
});

const sendMessage = messageText => ({
  type: SEND_MESSAGE,
  messageText
});

// Username actions
const setUsername = username => ({
  type: SET_USERNAME,
  username
});

const saveUsername = (username) => ({
  type: SAVE_USERNAME,
  username
});

const loadUsername = () => ({
  type: LOAD_USERNAME
});

// WebSocket actions
const wsConnect = (url, onMessage) => ({
  type: WS_CONNECT,
  url,
  onMessage
});

const wsSend = (message) => ({
  type: WS_SEND,
  message
});

const wsClose = () => ({
  type: WS_CLOSE
});

const wsReconnect = () => ({
  type: WS_RECONNECT
});

// LocalStorage actions
const lsSet = (key, value) => ({
  type: LS_SET,
  key,
  value
});

const lsGet = (key, actionCreator) => ({
  type: LS_GET,
  key,
  actionCreator
});

const lsClear = () => ({
  type: LS_CLEAR
});

// Network Connection actions
const goOnline = () => ({
  type: GO_ONLINE
});

const goOffline = () => ({
  type: GO_OFFLINE
});

// Notification actions
const notify = (title, body, timeout) => ({
  type: NOTIFY,
  title,
  body,
  timeout
});

export {
  establishConnection,

  addMessages,
  sendMessage,

  setUsername,
  saveUsername,
  loadUsername,

  wsConnect,
  wsSend,
  wsClose,
  wsReconnect,

  lsSet,
  lsGet,
  lsClear,

  goOnline,
  goOffline,

  notify
};
