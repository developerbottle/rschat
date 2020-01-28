import { LS_CLEAR, LS_GET, LS_SET } from '../actions/actionTypes';

const createLocalStorageMiddleware = () => {
  return store => next => action => {
    switch (action.type) {
      case LS_SET:
        localStorage.setItem(action.key, action.value);
        break;
      case LS_GET:
        const value = localStorage.getItem(action.key);
        next(action.actionCreator(value));
        break;
      case LS_CLEAR:
        localStorage.clear();
        break;
      default:
        return next(action);
    }
  };
};

export default createLocalStorageMiddleware;
