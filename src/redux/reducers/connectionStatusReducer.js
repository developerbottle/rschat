import { GO_OFFLINE, GO_ONLINE } from '../actions/actionTypes';

const initialState = navigator.onLine ? 'online' : 'offline';
const connectionStatusReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case GO_ONLINE:
      return 'online';
    case GO_OFFLINE:
      return 'offline';
    default:
      return previousState;
  }
};

export default connectionStatusReducer;
