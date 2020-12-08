import { combineReducers } from "redux";
import storyReducer from "./storyReducer";
import characterReducer from "./characterReducer";

const rootReducer = combineReducers({
  storyReducer,
  characterReducer,
});

export default rootReducer;
