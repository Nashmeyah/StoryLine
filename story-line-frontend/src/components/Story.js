import React from "react";
import { NavLink } from "react-router-dom";

const Story = (props) => {
  // console.log(props.story.characters);
  return (
    <div>
      <h1 style={{ color: "white" }}>{props.story.title}</h1>
      <button id={props.story.id} onClick={props.handleClick}>
        Delete Story
      </button>
      <p style={{ color: "white" }}>{props.story.body}</p>
      {/* <NavLink
        to={`/stories/${props.story.id}/characters`}
        exact
        activeStyle={{ background: "blue" }}
      >
        View Characters
      </NavLink> */}
    </div>
  );
};

export default Story;
