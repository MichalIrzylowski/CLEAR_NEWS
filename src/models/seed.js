import { Article } from "./index";
import { ArticlesData } from "../components/static_data/latest_stories";

export const seedArticles = async () => {
  try {
    console.log("starting seeding");

    await Article.deleteMany({});
    ArticlesData.forEach(async article => {
      await Article.create(article);
    });
  } catch (error) {
    console.log(error);
  }
};
