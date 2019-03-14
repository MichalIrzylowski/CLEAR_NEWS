import { Article, InPicture } from "../models";

const newsTemplate = { articles: [], allArticles: false };
const articleTemplate = {};

const initialStateTemplate = {
  latestStories: [],
  inPictures: [],
  economyNews: [],
  healthNews: [],
  cultureNews: newsTemplate,
  entertainmentNews: newsTemplate,
  politicsNews: newsTemplate,
  sportsNews: newsTemplate,
  worldwideNews: newsTemplate,
  innovationNews: newsTemplate,
  educationNews: newsTemplate,
  readArticle: articleTemplate
};

export default async url => {
  if (url === "/") {
    const articles = await Article.find({})
      .sort({ createdAt: -1 })
      .limit(6);

    const inPictures = await InPicture.find({})
      .sort({ createdAt: -1 })
      .limit(3)
      .select("title src");

    const economyNews = await Article.find({ category: "economy" })
      .sort({ createdAt: -1 })
      .limit(4);

    const healthNews = await Article.find({ category: "health" })
      .sort({ createdAt: -1 })
      .limit(3);
    return {
      ...initialStateTemplate,
      latestStories: articles,
      inPictures,
      economyNews,
      healthNews
    };
  } else {
    const splitedUrl = url.split("/");
    const category = splitedUrl[1];
    const articles = await Article.find({ category })
      .sort({ createdAt: -1 })
      .limit(9);

    const key = category + "News";

    const initialState = {
      ...initialStateTemplate,
      [key]: { articles, allArticles: false }
    };

    // console.log("[DATA LOADER] loaded initial state");

    return initialState;
  }
};
