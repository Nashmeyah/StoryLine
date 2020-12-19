import React, { useState } from "react";
import { Input } from "antd";
import { addCharacter } from "../actions/stories";

const CharacterForm = (props) => {
  const [charName, setcharName] = useState("");
  const [charAge, setcharAge] = useState("");
  const [sex, setsex] = useState("");
  const [history, sethistory] = useState("");

  const handlecharName = (event) => {
    setcharName(event.target.value);
  };
  const handlesetcharAge = (event) => {
    setcharAge(event.target.value);
  };
  const handlesetsex = (event) => {
    setsex(event.target.value);
  };
  const handlesethistory = (event) => {
    sethistory(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const character = {
      charName,
      charAge,
      sex,
      history,
    };
    //having trouble connecting to the action.
    addCharacter(character);
  };
  console.log(props.addCharacter);

  return (
    <div>
      <p>Add Character</p>
      <br></br>
      <form id="add-char" onSubmit={handleOnSubmit}>
        <label>Character Name: </label>
        <Input onChange={handlecharName} type="text" name="charName"></Input>

        <label>Age: </label>
        <Input onChange={handlesetcharAge} type="text" name="charAge"></Input>

        <label>Sex: </label>
        <Input onChange={handlesetsex} type="text" name="sex"></Input>

        <label>History: </label>
        <Input onChange={handlesethistory} type="text" name="history"></Input>
        <input type="Submit" />
      </form>
    </div>
  );
};
export default CharacterForm;
