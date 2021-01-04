export default (state = { stories: [], loading: false }, action) => {
  function updateObject(old, newObj) {
    return Object.assign({}, old, newObj);
  }
  switch (action.type) {
    case "LOADING_STORIES":
      return {
        ...state,
        loading: true,
      };

    case "STORIES_LOADED":
      return {
        ...state,
        stories: action.payload,
        loading: false,
      };

    case "ADD_STORY":
      return {
        ...state,
        loading: true,
      };

    case "STORY_ADDED":
      return {
        ...state,
        stories: [...state.stories, action.payload],
        loading: false,
      };

    case "DELETE_STORY":
      return {
        ...state,
        loading: true,
      };

    case "STORY_DELETED":
      return {
        ...state,
        stories: [
          ...state.stories.filter((story) => `${story.id}` !== action.payload),
        ],
        loading: false,
      };

    case "ADD_CHARACTER":
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
