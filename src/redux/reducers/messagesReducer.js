import { ADD_MESSAGES } from '../actions/actionTypes';

const initialState = [];

const distinctMessages = messages => {
  const ids = [];
  const res = [];

  messages.forEach(message => {
    if (ids.includes(message.id)) return;

    ids.push(message.id);
    res.push(message);
  });

  return res;
};

const messagesReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGES:
      return distinctMessages([...previousState, ...action.messages]).sort((message1, message2) => message1.time - message2.time);

    default:
      return previousState;
  }
};

export default messagesReducer;
