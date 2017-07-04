import io from 'socket.io-client';

const domain = 'http://localhost:8080';

const connectWebSocket = (socketId) => ({
  type: 'WEBSOCKET_CONNECTED',
  data: socketId
});

const disconnectedWebsocket = () => ({
  type: 'WEBSOCKET_DISCONNECTED',
})


const createWebSocketMiddleware = (websocket, pattern) => {
  return ({ dispatch, getState }) => next => {
    websocket.on('action', dispatch);
    websocket.on('connection', dispatch);
      
      return action => {
        if (action.type.startsWith(pattern)) {
          websocket.emit('action', action);
        }
        next(action);
      };
    };
}

export default createWebSocketMiddleware;