import { combineReducers } from "redux";
import latestStories from "./latestStories";
import inPictures from "./inPictures";
import economyNews from "./economyNews";
import healthNews from "./healthNews";
import newsReducerCreator from "./newsReducerCreator";

export default combineReducers({
  latestStories,
  inPictures,
  economyNews,
  healthNews,
  cultureNews: newsReducerCreator("CULTURE_NEWS"),
  entertainmentNews: newsReducerCreator("ENTERTAINMENT_NEWS"),
  politicsNews: newsReducerCreator("POLITICS_NEWS"),
  sportsNews: newsReducerCreator("SPORTS_NEWS"),
  worldwideNews: newsReducerCreator("WORLDWIDE_NEWS"),
  innovationNews: newsReducerCreator("INNOVATION_NEWS"),
  educationNews: newsReducerCreator("EDUCATION_NEWS")
});
