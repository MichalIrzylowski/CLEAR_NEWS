import { combineReducers } from "redux";
import latestStories from "./latestStories";
import inPictures from "./inPictures";
import economyNews from "./economyNews";
import healthNews from "./healthNews";
import cultureNews from "./cultureNews";

export default combineReducers({
  latestStories,
  inPictures,
  economyNews,
  healthNews,
  cultureNews
});
