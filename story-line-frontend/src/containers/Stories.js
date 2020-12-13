import React, { Component } from "react";
import { connect } from "react-redux";
import { getStories, deleteStory } from "../actions/stories";
import Story from "../components/Story";

class Stories extends Component {
  state = {
    search: "",
  };
  componentDidMount() {
    this.props.getStories();
  }

  handleClick = (e) => {
    this.props.deleteStory(e.target.id);
  };

  filterSearch = (event) => {
    // console.log(event.target.value);
    this.setState({
      search: event.target.value,
    });
  };

  render() {
    const filteredResults = this.props.stories.filter((story) => {
      return (
        story.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });

    const stories = filteredResults.map((story, index) => (
      <Story key={index} story={story} handleClick={this.handleClick} />
    ));

    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Search Stories"
            onChange={this.filterSearch}
          />
          {this.props.loading ? <h3>Loading...</h3> : stories}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);

  return {
    stories: state.storyReducer.stories,
    loading: state.storyReducer.loading,
  };
};

export default connect(mapStateToProps, { getStories, deleteStory })(Stories);
