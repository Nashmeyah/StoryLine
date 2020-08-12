import React, { Component } from "react";
import { connect } from "react-redux";
import { getStories, deleteStory } from "../actions/stories";
class Home extends Component {
  componentDidMount() {
    this.props.getStories();
  }
  handleClick = (e) => {
    this.props.deleteStory(e.target.id);
  };
  render() {
    const stories = this.props.stories.map((story, index) => (
      <p key={index}>
        {story.title}
        <button id={story.id} onClick={this.handleClick}>
          Delete Story
        </button>
      </p>
    ));
    return (
      <div>
        <h2>Create new story</h2>
        <div>{this.props.loading ? <h3>Loading...</h3> : stories}</div>
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
export default connect(mapStateToProps, { getStories, deleteStory })(Home);
