import { combineReducers } from "redux";
import latestStories from "./latestStories";

export default combineReducers({ latestStories });

// export default function reducer(state, action) {
//   switch (action.type) {
//     case "CHANGE_TEXT":
//       return { ...state, initialText: "changed in the browser!" };
//     default:
//       return { ...state };
//   }
// }
