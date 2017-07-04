import React from 'react';

class Messages extends React.Component {

  render() {
    return (
      <div>
      { this.props.messages.map((message, i) => {
          return message.from === this.props.socketId
            ? <p key={i}><b>{`${message.from}`}</b>: {`${message.message}`}</p>
            : <p key={i}><i>{`${message.from} says: ${message.message}`}</i></p>
        })
      }
      </div>
    ) 
  }
};

export default Messages;