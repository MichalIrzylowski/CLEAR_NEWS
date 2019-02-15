import { combineReducers } from "redux";
import latestNews from "./latestNews";

export default combineReducers({ latestNews });

// export default function reducer(state, action) {
//   switch (action.type) {
//     case "CHANGE_TEXT":
//       return { ...state, initialText: "changed in the browser!" };
//     default:
//       return { ...state };
//   }
// }
