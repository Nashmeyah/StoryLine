import React from "react";
import Header from "./Header";

const Home = () => {
  const style = {
    color: "white",
    fontSize: "30px",
    display: "flex",
    flexWrap: "wrap",
    width: "500px",
    padding: "20px",
    margin: "auto",
  };
  return (
    <div>
      <Header />
      <h2 style={style}>
        Welcome to the StoryLine creator, this app allows you to create stories
        and share them when youre ready!
      </h2>
    </div>
  );
};

export default Home;
