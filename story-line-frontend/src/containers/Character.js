import React, { Component } from "react";
import { connect } from "react-redux";
import { getStories } from "../actions/stories";
import CharacterCard from "../components/CharacterCard";
import CharacterForm from "../components/CharacterForm";

// import StoryForm from "../components/StoryForm";

class Character extends Component {
  componentDidMount() {
    this.props.getStories();
    // console.log(this.props);
  }

  render() {
    const stories = this.props.stories.find(
      (story) => story.id == this.props.match.params.id
    );

    return (
      <div>
        <CharacterForm />
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
