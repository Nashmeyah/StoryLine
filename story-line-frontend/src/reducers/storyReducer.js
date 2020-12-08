export default (
  state = { stories: [], characters: [], loading: false },
  action
) => {
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

    //   case "LOADING_CHARACTERS":
    //   return {
    //     ...state,
    //     loading: true,
    //   };

    // case "CHARACTERS_LOADED":
    //   return {
    //     ...state,
    //     characters: action.payload,
    //     loading: false,
    //   };

    // case "ADD_CHARACTER":
    //   return {
    //     ...state,
    //     loading: true,
    //   };

    // case "CHARACTER_ADDED":
    //   return {
    //     ...state,
    //     characters: [...state, action.payload],
    //     loading: false,
    //   };

    default:
      return state;
  }
};
