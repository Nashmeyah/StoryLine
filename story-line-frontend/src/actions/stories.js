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

export const deleteStory = (id) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_STORY" });
    fetch(`/stories/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => dispatch({ type: "STORY_DELETED", payload: id }));
  };
};

export const addCharacter = (id, character) => {
  return (dispatch) => {
    dispatch({ type: "ADD_CHARACTER" });
    fetch(`${id}`, {
      method: "POST",
      body: JSON.stringify(character),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((character) =>
        dispatch({ type: "CHARACTER_ADDED", payload: character })
      );
  };
};
