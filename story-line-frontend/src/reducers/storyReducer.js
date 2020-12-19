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

    case "CHARACTER_ADDED":
      const newChar = state.characters.concat({
        id: action.id,
        name: action.charName,
        age: action.charAge,
        sex: action.sex,
        history: action.history,
      });

      return {
        stories: updateObject(state, { stories: newChar }),
        loading: false,
      };

    default:
      return state;
  }
};
