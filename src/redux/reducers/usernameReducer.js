import { SET_USERNAME } from '../actions/actionTypes';

const initialState = null;

const usernameReducer = (previousState = initialState, action) => {
  if (action.type === SET_USERNAME) {
    return action.username;
  } else {
    return previousState;
  }
};

export default usernameReducer;
