import React, { Component } from "react";
import { connect } from "react-redux";
import { getStories } from "../actions/stories";
import CharacterCard from "../components/CharacterCard";

class Character extends Component {
  componentDidMount() {
    this.props.getStories();
  }

  showForm = () => {
    console.log("Form button was clicked");
  };

  render() {
    const characters_list_style = {
      display: "flex",
    };
    // console.log(this.props.match);

    const stories = this.props.stories.find(
      (story) => story.id == this.props.match.params.id
    );

    // debugger;
    // console.log(stories);

    return (
      <div>
        <button onClick={this.showForm}>Add New Character</button>
        <div style={characters_list_style}>
          {stories && <CharacterCard story={stories.characters} />}
        </div>
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
