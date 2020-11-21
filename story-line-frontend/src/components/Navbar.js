import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  paddings: "12px",
  margin: "0, 6px 6px",
  background: "gray",
  textDecoration: "none",
  color: "white",
};

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink to="/" exact style={link} activeStyle={{ background: "blue" }}>
          Home
        </NavLink>
        <span> - </span>
        <NavLink
          to="/stories/new"
          exact
          style={link}
          activeStyle={{ background: "blue" }}
        >
          Add Story
        </NavLink>
        <span> - </span>

        <NavLink
          to="/stories"
          exact
          style={link}
          activeStyle={{ background: "blue" }}
        >
          All Stories
        </NavLink>
      </div>
    );
  }
}
