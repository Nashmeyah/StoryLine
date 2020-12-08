import React, { Component } from "react";
import { connect } from "react-redux";
import { getStories } from "../actions/stories";
import CharacterCard from "../components/CharacterCard";

class Character extends Component {
  constructor(props) {
    super(props);
    // Here we initialize our components state
    this.state = {
      showForm: false,
    };

    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    this.props.getStories();
  }
  onClick() {
    // On click we change our state – this will trigger our `render` method
    this.setState({ showForm: true });
  }

  showForm = () => {
    return (
      <div>
        <br></br>
        <form id="add-char">
          <label>Character Name: </label>
          <input type="text"></input>

          <label>Age: </label>
          <input type="text"></input>

          <label>Sex: </label>
          <input type="text"></input>

          <label>History: </label>
          <input type="text"></input>
          <button>Create</button>
        </form>
      </div>
    );
  };

  render() {
    const stories = this.props.stories.find(
      (story) => story.id == this.props.match.params.id
    );

    // debugger;
    // console.log(stories);

    return (
      <div>
        <button onClick={this.onClick}>Add New Character</button>
        {this.state.showForm && this.showForm()}
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
