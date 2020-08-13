//this will render a single characters information into the characterCard
import React from "react";

function Character(props) {
  return (
    <div>
      This is the character page
      {console.log(props.state)}
      {/* <h3>Characters--</h3>
      <ul>
        {props.story.characters.map((character, index) => (
          <li key={index}>{character.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Character;
