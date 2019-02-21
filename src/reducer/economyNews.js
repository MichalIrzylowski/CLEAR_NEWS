import { LOAD_ECONOMY_NEWS_SUCCESS } from "./actionTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ECONOMY_NEWS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
