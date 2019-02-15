import { LOAD_LATEST_STORIES_SUCCESS } from "./actionTypes";

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_LATEST_STORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
