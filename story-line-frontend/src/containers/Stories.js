import React, { Component } from "react";
import { connect } from "react-redux";
import { getStories, deleteStory } from "../actions/stories";
import Story from "../components/Story";

class Stories extends Component {
  componentDidMount() {
    this.props.getStories();
  }

  handleClick = (e) => {
    this.props.deleteStory(e.target.id);
  };

  render() {
    const stories = this.props.stories.map((story, index) => (
      <Story key={index} story={story} handleClick={this.handleClick} />
    ));

    return (
      <div>
        <div>{this.props.loading ? <h3>Loading...</h3> : stories}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    stories: state.storyReducer.stories,
    loading: state.storyReducer.loading,
  };
};

export default connect(mapStateToProps, { getStories, deleteStory })(Stories);
