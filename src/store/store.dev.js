import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import socketMiddleware from '../middlewares'; 
import io from 'socket.io-client';

console.log(socketMiddleware);

let websocket = io('http://localhost:8080');
const webSocketMiddleware = socketMiddleware.createWebSocketMiddleware(websocket, 'WEBSOCKET');

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(webSocketMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;