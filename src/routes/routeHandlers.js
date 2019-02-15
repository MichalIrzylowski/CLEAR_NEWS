import { Article } from "../models";

export const loadLatestStories = async (req, res, next) => {
  try {
    const articles = await Article.find({})
      .sort({ createdAt: -1 })
      .limit(9);

    console.log(articles);

    return res.status(200).json(articles);
  } catch (error) {
    return res.status(500).json(error);
  }
};
