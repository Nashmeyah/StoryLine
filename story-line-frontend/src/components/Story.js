import React from "react";

const Story = (props) => {
  // const handleClick = (e) => {
  //   props.deleteStory(e.target.id);
  // };
  // debugger;
  return (
    <div>
      {console.log(props.story)}
      <h1>{props.story.title}</h1>
      <button id={props.story.id} onClick={props.handleClick}>
        Delete Story
      </button>
      <p>{props.story.body}</p>

      <h3>Characters--</h3>
      <ul>
        {props.story.characters.map((character, index) => (
          <li key={index}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Story;
