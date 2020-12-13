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

    case "CHARACTER_ADDED":
      let charid = action.payload.character.storyId;
      console.log(charid);
      return {
        ...state,
        stories: [...state.stories[charid].characters, action.payload],
        loading: false,
      };

    default:
      return state;
  }
};
