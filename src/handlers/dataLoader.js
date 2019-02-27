import { Article, InPicture } from "../models";

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
      latestStories: articles,
      inPictures,
      economyNews,
      healthNews,
      cultureNews
    };
  } else if (url === "/culture") {
    const articles = await Article.find({ category: "culture" })
      .sort({ createdAt: -1 })
      .limit(9);
    return {
      latestStories: [],
      inPictures: [],
      economyNews: [],
      healthNews: [],
      cultureNews: { articles: articles, allArticles: false }
    };
  }
};
