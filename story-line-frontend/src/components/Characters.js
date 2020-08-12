import React, { Component } from "react";
import { connect } from "react-redux";
import { getStories, deleteStory } from "../actions/stories";
class Characters extends Component {
  componentDidMount() {
    this.props.getStories();
  }
  render() {
    const stories = this.props.stories.map((story, index) => (
      <div>
        <h3>{story.title}</h3>
        <p>{story.body}</p>
      </div>
    ));
    return (
      <div>
        This is a page to render all Characters
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

export default connect(mapStateToProps, { getStories, deleteStory })(
  Characters
);
