import React, { Component } from "react";
import { connect } from "react-redux";
import { getStories } from "../actions/stories";
import CharacterCard from "../components/CharacterCard";
// import StoryForm from "../components/StoryForm";

class Character extends Component {
  componentDidMount() {
    this.props.getStories();
  }

  render() {
    const stories = this.props.stories.find(
      (story) => story.id == this.props.match.params.id
    );

    return (
      <div>
        <div>{stories && <CharacterCard story={stories.characters} />}</div>
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
export default connect(mapStateToProps, { getStories })(Character);
