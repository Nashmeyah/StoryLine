export default (state = { stories: [], loading: false }, action) => {
  switch (action.type) {
    case "LOADING_STORIES":
      return {
        ...state,
        loading: true,
      };

    case "STORIES_LOADED":
      return {
        ...state,
        stories: stories,
        loading: false,
      };
    default:
      return state;
  }
};