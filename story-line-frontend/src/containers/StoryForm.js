import React, { Component } from "react";
import { connect } from "react-redux";
import { addStory } from "../actions/stories";

class StoryForm extends Component {
  state = {
    title: "",
    body: "",
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
      body: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const story = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.addStory(story);
    this.setState({
      title: "",
      body: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Title:</p>
          <input
            type="text"
            name="title"
            value={this.state.tite}
            onChange={this.handleChange}
          />

          <p>Story Body:</p>
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <input type="Submit" />
        </form>
      </div>
    );
  }
}
export default connect(null, { addStory })(StoryForm);
