import React, { Component } from "react";
import CreateMessage from "./components/create-message";
import Messages from "./components/messages";
import socketIOClient from "socket.io-client";

var socket = null;
class App extends Component {
  constructor() {
    super();

    if (!socket) {
      socket = socketIOClient("https://localhost:4000/");
    }

    socket.on("SET_USERNAME", (username) => {
      this.setState({ username });
    });

    socket.on("CREATE_MESSAGE", (messageObject) => {
      this.setState({ messages: [...this.state.messages, messageObject] });
    });
    this.myRef = React.createRef();
  }

  state = {
    username: "",
    messages: [],
  };

  handlerCreateMessage = (message) => {
    message.user = this.state.username;
    socket.emit("SEND_MESSAGE", message);
    this.myRef.current.scrollTop = this.myRef.current.clientHeight;
  };

  render() {
    return (
      <div className="chat">
        <Messages
          refProp={this.myRef}
          messages={this.state.messages}
          username={this.state.username}
        />
        <CreateMessage createMessage={this.handlerCreateMessage} />
      </div>
    );
  }
}

export default App;
