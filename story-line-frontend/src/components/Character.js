import React, { Component } from "react";
import { connect } from "react-redux";
import { getStories } from "../actions/stories";

class Character extends Component {
  componentDidMount() {
    this.props.getStories();
  }

  render() {
    console.log(this.props.match);

    const stories = this.props.stories.find(
      (story) => story.id === this.props.match.params.id
    );
    return (
      <div>
        <div>
          <div>{this.props.loading ? <h3>Loading...</h3> : stories}</div>
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
