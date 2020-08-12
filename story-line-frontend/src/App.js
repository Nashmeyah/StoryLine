import React, { Component } from "react";

import { connect } from "react-redux";
import { getStories, deleteStory } from "./actions/stories";
import "./App.css";
import StoryForm from "./containers/StoryForm";

class App extends Component {
  componentDidMount() {
    this.props.getStories();
  }
  handleClick = (e) => {
    this.props.deleteStory(e.target.id);
  };
  render() {
    const stories = this.props.stories.map((story, index) => (
      <li key={index}>
        {" "}
        {story.title}
        <button id={story.id} onClick={this.handleClick}>
          {" "}
          Delete Story{" "}
        </button>
      </li>
    ));
    return (
      <div className="App">
        <h1>StoryLine Creator</h1>
        <br />
        <h2>Create new story</h2>
        <StoryForm />
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
export default connect(mapStateToProps, { getStories, deleteStory })(App);
