import React, { Component } from "react";
import Home from "./components/Home";
import { connect } from "react-redux";
import { addStory, addCharacter } from "./actions/stories";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Stories from "./containers/Stories";
import Character from "./containers/Character";
import StoryForm from "./components/StoryForm";
import "./App.css";
import CharacterForm from "./components/CharacterForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/stories" component={Stories} />
            <Route
              exact
              path="/stories/new"
              render={(props) => (
                <StoryForm createStory={this.props.addStory} />
              )}
            />
            {/* <Route path="/stories/:id/characters/" component={}> */}
            <Route
              path="/stories/:id/characters/"
              render={(props) => (
                (<Character />),
                (<CharacterForm addCharacter={this.props.addCharacter} />)
              )}
            />
            {/* </Route> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, { addStory, addCharacter })(App);
