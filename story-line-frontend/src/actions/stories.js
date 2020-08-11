export const getStories = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_STORIES" });
    return fetch("/stories")
      .then((response) => response.json())
      .then((stories) =>
        dispatch({ type: "STORIES_LOADED", payload: stories })
      );
  };
};
