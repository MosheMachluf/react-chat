import React, { Component } from "react";

class CreateMessage extends Component {
  state = {
    messageContent: "",
  };

  render() {
    return (
      <form className="create-message" onSubmit={this.handlerSubmit}>
        <input
          type="text"
          placeholder="Please enter message"
          value={this.state.messageContent}
          onChange={this.handlerChangeMessageContent}
        />
        <input type="submit" value="SEND" />
      </form>
    );
  }

  handlerChangeMessageContent = ({ currentTarget: input }) => {
    this.setState({ messageContent: input.value });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    const message = {
      user: "Moshe",
      content: this.state.messageContent,
    };

    this.setState({ messageContent: "" });

    this.props.createMessage(message);
  };
}

export default CreateMessage;
