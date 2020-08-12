import React, { Component } from "react";
import { connect } from "react-redux";
import { getStories, deleteStory } from "../actions/stories";
class Characters extends Component {
  componentDidMount() {
    this.props.getStories();
  }
  handleClick = (e) => {
    this.props.deleteStory(e.target.id);
  };
  render() {
    const stories = this.props.stories.map((story, index) => (
      <div key={index}>
        <h1>{story.title}</h1>
        <button id={story.id} onClick={this.handleClick}>
          Delete Story
        </button>
        <p>{story.body}</p>
        {console.log(story)}
        <h3>Characters--</h3>
        <ul>
          {story.characters.map((character, index) => (
            <li key={index}>{character.name}</li>
          ))}
        </ul>
      </div>
    ));
    return (
      <div>
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
