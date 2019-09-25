import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log("this", this);
    return (
      <div>
        <h2>Evens or Odds</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);

  return { gameStarted: state.gameStarted };
};

const componentConnector = connect(mapStateToProps);

export default componentConnector(App);
