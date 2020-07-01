import React from "react";

const Messages = ({ refProp, messages, username }) => {
  return (
    <div className="messages" ref={refProp}>
      {messages.map((message, index) => (
        <div
          className={`message ${username === message.user ? "message-me" : ""}`}
          key={index}
        >
          <div className="message-user">{message.user}</div>
          <div className="message-content">{message.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
