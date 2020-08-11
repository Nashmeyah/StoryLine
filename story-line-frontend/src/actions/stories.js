export const getStories = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_STORIES" });
    fetch("/stories")
      .then((response) => response.json())
      .then((stories) =>
        dispatch({ type: "STORIES_LOADED", payload: stories })
      );
  };
};

export const addStory = (story) => {
  return (dispatch) => {
    dispatch({ type: "ADD_STORY" });
    fetch("/stories", {
      method: "POST",
      body: JSON.stringify(story),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((story) => dispatch({ type: "STORY_ADDED", payload: story }));
  };
};
