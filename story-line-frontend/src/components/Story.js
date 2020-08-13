import React from "react";
import { NavLink } from "react-router-dom";

const Story = (props) => {
  return (
    <div>
      <h1>{props.story.title}</h1>
      <button id={props.story.id} onClick={props.handleClick}>
        Delete Story
      </button>
      <p>{props.story.body}</p>
      <NavLink
        to={`/characters/${props.story.id}`}
        exact
        activeStyle={{ background: "blue" }}
      >
        View Characters
      </NavLink>
    </div>
  );
};

export default Story;
