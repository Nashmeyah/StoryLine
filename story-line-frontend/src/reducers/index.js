import { combineReducers } from "redux";
import storyReducer from "./storyReducer";

const rootReducer = combineReducers({
  storyReducer,
});

export default rootReducer;
