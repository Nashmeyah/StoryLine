import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  paddings: "12px",
  margin: "0, 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{ background: "darkblue" }}
        >
          Home
        </NavLink>
      </div>
    );
  }
}
