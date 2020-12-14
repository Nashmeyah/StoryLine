import React, { useState } from "react";

const StoryForm = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleOnTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleOnBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const story = {
      title,
      body,
    };
    props.createStory(story);
    setTitle("");
    setBody("");
  };
  console.log(props);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Title:</p>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleOnTitleChange}
        />

        <p>Story Body:</p>
        <textarea
          type="text"
          name="body"
          value={body}
          onChange={handleOnBodyChange}
        />
        <br />
        <input type="Submit" />
      </form>
    </div>
  );
};
export default StoryForm;
