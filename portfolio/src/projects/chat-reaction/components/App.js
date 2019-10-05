import React, { Component } from "react";
import PublishMessage from "./PublishMessage";
import MessageBoard from "./MessageBoard";
import SetUsername from "./SetUsername";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Chat Reaction</h2>
        <SetUsername />
        <hr />
        <PublishMessage />
        <MessageBoard />
      </div>
    );
  }
}

export default App;
