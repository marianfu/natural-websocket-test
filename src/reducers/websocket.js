const websocket = (state = {}, action) => {
  switch (action.type) {
    case 'WEBSOCKET_ON_OPEN': 
      return { ...state, socketId: action.data};
    default:
      return state;
  }
};

export default websocket;