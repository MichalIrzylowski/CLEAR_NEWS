import {
  LOAD_RECENT_POSTS_SUCCESS,
  LOAD_RECENT_POSTS_FAIL
} from "./actionTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECENT_POSTS_SUCCESS:
      console.log("[RECENT-POSTS-reducer-success]", action);
      return action.payload;
    case LOAD_RECENT_POSTS_FAIL:
      console.log("[RECENT-POSTS-reducer-error]");
      return action.payload;
    default:
      return state;
  }
};
