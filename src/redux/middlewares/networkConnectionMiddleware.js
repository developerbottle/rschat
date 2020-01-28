import { goOffline, goOnline } from '../actions';

const createNetworkConnectionMiddleware = () => {
  return store => {
    window.addEventListener('online', () => store.dispatch(goOnline()));
    window.addEventListener('offline', () => store.dispatch(goOffline()));

    return next => action => {
      next(action);
    };
  };
};

export default createNetworkConnectionMiddleware;
