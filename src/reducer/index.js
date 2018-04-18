import { combineReducers } from 'redux';
import ChatRoomReducer from 'modules/ChatRoom';

const rootReducer = combineReducers({
  chatroom: ChatRoomReducer,
});

export default rootReducer;
