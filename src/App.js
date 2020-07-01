import React, { Component } from "react";
import CreateMessage from "./components/create-message";
import Messages from "./components/messages";
import socketIOClient from "socket.io-client";

var socket = null;
class App extends Component {
  componentWillMount() {
    if (!socket) {
      socket = socketIOClient("http://localhost:4000");
    }

    socket.on("SET_USERNAME", (username) => {
      this.setState({ username });
    });

    socket.on("CREATE_MESSAGE", (messageObject) => {
      this.setState({ messages: [...this.state.messages, messageObject] });
    });

    let myRef = React.createRef();
  }

  state = {
    username: "",
    messages: [],
  };

  handlerCreateMessage = (message) => {
    message.user = this.state.username;
    socket.emit("SEND_MESSAGE", message);
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
