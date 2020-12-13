import React, { Component } from "react";
import { connect } from "react-redux";
import { getStories } from "../actions/stories";
import CharacterCard from "../components/CharacterCard";
import { Input } from "antd";

class Character extends Component {
  constructor(props) {
    super(props);
    // Here we initialize our components state
    this.state = {
      showForm: false,
      charName: "",
      charAge: "",
      sex: "",
      history: "",
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.props.getStories();
    console.log(this.props);
  }
  onClick() {
    // On click we change our state – this will trigger our `render` method
    this.setState({ showForm: true });
  }

  handleInput = (event) => {
    event.persist();
    // console.log(event);
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit(event) {
    event.preventDefault();
    const character = {
      charName: this.state.charName,
      charAge: this.state.charAge,
      sex: this.state.sex,
      history: this.state.history,
      storyId: this.props.match.params.id,
    };
    //having trouble connecting to the action.
    this.props.addCharacter(character);
  }

  showForm = () => {
    return (
      <div>
        <br></br>
        <form id="add-char">
          <label>Character Name: </label>
          <Input
            onChange={this.handleInput}
            type="text"
            name="charName"
          ></Input>

          <label>Age: </label>
          <Input onChange={this.handleInput} type="text" name="charAge"></Input>

          <label>Sex: </label>
          <Input onChange={this.handleInput} type="text" name="sex"></Input>

          <label>History: </label>
          <Input onChange={this.handleInput} type="text" name="history"></Input>
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
