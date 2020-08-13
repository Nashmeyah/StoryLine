import React from "react";
import { NavLink } from "react-router-dom";
import Character from "./Character";

const Story = (props) => {
  return (
    <div>
      {console.log(props.story)}
      <h1>{props.story.title}</h1>
      <button id={props.story.id} onClick={props.handleClick}>
        Delete Story
      </button>
      <p>{props.story.body}</p>
      <NavLink to="/characters" exact activeStyle={{ background: "blue" }}>
        View Characters
      </NavLink>
      <Character props={props.story} />
    </div>
  );
};

export default Story;
