import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  componentDidMount() {}
  render() {
    const stories = this.props.stories.map((story, index) => (
      <li key={index}> {story.title}</li>
    ));
    return (
      <div className="App">
        <h1>StoryLine Creator</h1>
        <ul>{this.props.loading ? <h3>Loading...</h3> : stories}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stories: state.storyReducer.stories,
    loading: state.storyReducer.loading,
  };
};
export default connect(mapStateToProps)(App);
