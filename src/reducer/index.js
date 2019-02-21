import { combineReducers } from "redux";
import latestStories from "./latestStories";
import inPictures from "./inPictures";
import economyNews from "./economyNews";
import healthNews from "./healthNews";

export default combineReducers({
  latestStories,
  inPictures,
  economyNews,
  healthNews
});
