import { LOAD_ARTICLE_SUCCESS, LOAD_ARTICLE_FAIL } from "./actionTypes";

const articleTemplate = {};

export default (state = articleTemplate, action) => {
  switch (action.type) {
    case LOAD_ARTICLE_SUCCESS:
      return state;
    case LOAD_ARTICLE_FAIL:
      console.log("ARTICLE LOAD FAIL");
      return state;
    default:
      return state;
  }
};
