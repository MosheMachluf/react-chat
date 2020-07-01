import React, { Component } from "react";

class CreateMessage extends Component {
  state = {};
  render() {
    return (
      <form className="create-message" onSubmit={this.handlerSubmit}>
        <input type="text" placeholder="Please enter message" />
        <input type="submit" value="SEND" />
      </form>
    );
  }

  handlerSubmit = (e) => {
    e.preventDefault();
    const message = {};
    this.props.createMessage(message);
  };
}

export default CreateMessage;
