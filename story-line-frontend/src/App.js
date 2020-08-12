import React, { Component } from "react";
import Home from "./components/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>StoryLine Creator</h1>
        <br />
        <Home />
      </div>
    );
  }
}

export default App;
