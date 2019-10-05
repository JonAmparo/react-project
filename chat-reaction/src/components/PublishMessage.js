import React, { Component } from "react";
import { PubSubContext } from "../pubsub";
import { newMessage } from "../actions/messages";

class PublishMessage extends Component {
  state = { text: "" };

  updateText = event => this.setState({ text: event.target.value });

  PublishMessage = () => {
    this.context.pubsub.publsh(newMessage(this.state.text));
  };

  handleKeyPress = event => {
    if (event.key === "Enter") this.PublishMessage();
  };

  render() {
    console.log("this", this);
    return (
      <div>
        <h3>Got something to say?</h3>
        <input
          onChange={this.updateText}
          onKeyPress={this.handleKeyPress}
        />{" "}
        <button onClick={this.PublishMessage}>Publish It!</button>
      </div>
    );
  }

  static contextType = PubSubContext;
}
export default PublishMessage;
