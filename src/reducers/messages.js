const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'WEBSOCKET_SEND_MESSAGE': 
    case 'WEBSOCKET_RECEIVE_MESSAGE': 
      return [ ...state, { from: action.data.from, message: action.data.message }];
    default:
      return state;
  }
};

export default messagesReducer;