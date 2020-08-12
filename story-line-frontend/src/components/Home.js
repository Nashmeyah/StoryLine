import React, { Component } from "react";

import StoryForm from "../containers/StoryForm";
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Create new story</h2>
        <StoryForm />
      </div>
    );
  }
}

export default Home;
