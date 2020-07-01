import React, { Component } from "react";
import CreateMessage from "./components/create-message";
import Messages from "./components/messages";

class App extends Component {
  state = {
    messages: [
      { user: "Moshe", content: "Hello Everyone" },
      { user: "Koko", content: "Monkeys !" },
    ],
  };

  handlerCreateMessage(message) {
    this.setState({ messages: [...this.state.messages, message] });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React !</h1>

        <Messages messages={this.state.messages} />
        <CreateMessage createMessage={this.handlerCreateMessage} />
      </div>
    );
  }
}

export default App;
