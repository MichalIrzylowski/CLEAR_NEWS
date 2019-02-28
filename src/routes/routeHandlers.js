import { Article, InPicture } from "../models";

export const loadLatestStories = async (req, res, next) => {
  try {
    const articles = await Article.find({})
      .sort({ createdAt: -1 })
      .limit(8);

    return res.status(200).json(articles);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const loadInPictures = async (req, res, next) => {
  try {
    const inPictures = await InPicture.find({})
      .sort({ createdAt: -1 })
      .limit(3);

    return res.status(200).json(inPictures);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const loadLatestEconomyNews = async (req, res, next) => {
  try {
    const economyNews = await Article.find({ category: "economy" })
      .sort({ createdAt: -1 })
      .limit(4);

    return res.status(200).json(economyNews);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const loadLatestHealthNews = async (req, res, next) => {
  try {
    const healthNews = await Article.find({ category: "health" })
      .sort({ createdAt: -1 })
      .limit(4);

    return res.status(200).json(healthNews);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const loadNews = async (req, res, next) => {
  try {
    let { pageNumber, typeOfNews } = req.params;

    if (+pageNumber !== 0) {
      pageNumber = +pageNumber * 9;
    }

    const news = await Article.find({ category: typeOfNews })
      .sort({ createdAt: -1 })
      .skip(+pageNumber)
      .limit(9);

    if (news.length === 0) {
      return res.status(204).json({});
    }

    return res.status(200).json(news);
  } catch (error) {
    return res.status(500).json(error);
  }
};
