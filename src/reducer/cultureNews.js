import { LOAD_CULTURE_NEWS_SUCCESS, ALL_CULTURE_ARTICLES } from "./actionTypes";

const initialState = { articles: [], allArticles: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CULTURE_NEWS_SUCCESS:
      return { ...state, articles: [...state.articles, ...action.payload] };
    case ALL_CULTURE_ARTICLES:
      return { ...state, allArticles: !state.allArticles };
    default:
      return state;
  }
};
