//render a card for each character
import React from "react";

const CharacterCard = ({ story }) => {
  const style = {
    display: "flex",
    padding: "15px",
    border: "10px",
    justifyContent: "center",
  };

  const charstyle = {
    padding: "15px",
  };
  // console.log(story);
  const characters = story.map((char, index) => (
    <div style={charstyle} key={index}>
      <p>Here is your characters</p>
      <h1>Name:</h1>
      <h3>{char.name}</h3>
      <h1>Age:</h1>
      <p>{char.age}</p>
      <h1>Sex:</h1>

      <p>{char.sex}</p>
      <h1>History:</h1>

      <p>{char.history}</p>
    </div>
  ));

  return <div style={style}>{characters}</div>;
};

export default CharacterCard;
