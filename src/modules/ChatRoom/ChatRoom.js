import { createAction } from 'redux-actions';

// Constants
export const SEND_MESSAGE = 'chatroom/SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'chatroom/RECEIVE_MESSAGE';
export const ADD_USER = 'chatroom/ADD_USER';
export const GET_USERLIST = 'chatroom/GET_USERLIST';

// Reducer
const initialState = {
  nextMessageId: 0,
  currentUser: null,
  users: [],
  messages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
    case RECEIVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat({
          id: state.nextMessageId,
          user: action.payload.user,
          message: action.payload.message,
        }),
        nextMessageId: state.nextMessageId + 1,
      };
    case ADD_USER:
      return {
        ...state,
        currentUser: {
          id: action.payload.id,
          username: action.payload.username,
        },
      };
    case GET_USERLIST:
      return {
        ...state,
        users: action.payload.userList,
      };
    default:
      return state;
  }
};

// Action creators
export const sendMessage = createAction(SEND_MESSAGE);
export const receiveMessage = createAction(RECEIVE_MESSAGE);
export const addUser = createAction(ADD_USER);
export const getUserList = createAction(GET_USERLIST);

export const actions = {
  addUser,
  sendMessage,
  receiveMessage,
  getUserList,
};
