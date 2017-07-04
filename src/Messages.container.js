import { connect } from 'react-redux'; 
import Messages from './Messages';

const mapStateToProps = (state) => {
  const messages = state.messages;
  const socketId = state.websocket.socketId;

  return { messages, socketId };
};

export default connect(mapStateToProps, null)(Messages);