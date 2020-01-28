import Push from 'push.js';

import { NOTIFY } from '../actions/actionTypes';

const createNotificationsMiddleware = () => {
  Push.Permission.request();

  document.addEventListener('focus', () => Push.clear());

  return store => next => action => {
    switch (action.type) {
      case NOTIFY:
        if (document.hidden) {
          Push.create(action.title, {
            body: action.body,
            timeout: action.timeout,
            onClick: function () {
              window.focus();
              this.close();
            }
          });
        }

        break;

      default:
        return next(action);
    }
  };
};

export default createNotificationsMiddleware;
