import { combineReducers } from 'redux';
import messages from './messages';
import websocket from './websocket';

const rootReducer = combineReducers({
  messages,
  websocket,
});

export default rootReducer;