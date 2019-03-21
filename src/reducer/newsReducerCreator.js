import { LOAD_NEWS_SUCCESS, ALL_ARTICLES } from "./actionTypes";

const initialState = { articles: [], allArticles: false };

export default typeOfNews => {
  return (state = initialState, action) => {
    switch (action.type) {
      case LOAD_NEWS_SUCCESS + "-" + typeOfNews:
        // console.log("[NEWS REDUCER CREATOR] -- articles:", state.articles);
        // console.log("[NEWS REDUCER CREATOR] -- payload:", action.payload);
        if (!Array.isArray(action.payload)) {
          return { ...state, articles: [...state.articles, action.payload] };
        } else if (state.articles.length < 9) {
          return { ...state, articles: action.payload };
        }
        return { ...state, articles: [...state.articles, ...action.payload] };
      case ALL_ARTICLES + "-" + typeOfNews:
        return { ...state, allArticles: !state.allArticles };
      default:
        return state;
    }
  };
};
