import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./components/App";
import "./index.css";

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
};

const rootReducer = () => {
  return DEFAULT_SETTINGS;
};

const store = createStore(rootReducer);

console.log("store.getState()", store.getState());
console.log("store", store);

ReactDOM.render(<App />, document.getElementById("root"));
