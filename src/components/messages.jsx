import React, { Component } from "react";

class Messages extends Component {
  state = {};
  render() {
    return (
      <div className="messages">
        {this.props.messages.map((message, index) => (
          <div className="message" key={index}>
            <div className="message-user">{message.user}</div>
            <div className="message-content">{message.content}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Messages;
