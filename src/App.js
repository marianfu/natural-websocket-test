import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Messages from './Messages.container';

class App extends Component {

  state = {
    text: ''
  }

  onKeyPressed = (e) => {
    if (e.key === 'Enter') {
      this.props.sendMessage(this.props.socketId, this.state.text);
      this.setState({ text: '' });
    }
  }

  onClickSend = () => {
    this.props.sendMessage(this.props.socketId, this.state.text);
    this.setState({ text: '' });
  } 

  render() {
    return (
      <div>
        <h1>SocketId: { this.props.socketId || 'Not connected' }</h1>
        <input
          value={this.state.text}
          type='text' 
          onKeyPress={this.onKeyPressed}
          onChange={(event) => this.setState({ text: event.target.value })} 
        />
        <button onClick={this.onClickSend}>Send</button>
        <Messages />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { socketId: state.websocket.socketId }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ sendMessage }, dispatch);
}

const sendMessage = (from, message) => ({ type: 'WEBSOCKET_SEND_MESSAGE', data: { from, message }});

export default connect(mapStateToProps, mapDispatchToProps)(App);
