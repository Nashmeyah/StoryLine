//this will render a card for each character
import React, { Component } from "react";

const CharacterCard = ({ story }) => {
  // console.log(story);
  const characters = story.map((char, index) => (
    <div key={index}>
      <h3>{char.name}</h3>
      <p>{char.age}</p>
      <p>{char.sex}</p>
      <p>{char.history}</p>
    </div>
  ));

  return <div>{characters}</div>;
};

export default CharacterCard;
