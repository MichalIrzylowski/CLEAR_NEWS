import { LOAD_IN_PICTURES_SUCCESS } from "./actionTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IN_PICTURES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
