import { Article, InPicture } from "./index";
import { ArticlesData } from "../components/static_data/latest_stories";
import { inPicturesData } from "../components/static_data/inPictures";

export const seedArticles = async () => {
  try {
    console.log("starting seeding");

    await Article.deleteMany({});
    await InPicture.deleteMany({});
    ArticlesData.forEach(async article => {
      await Article.create(article);
    });
    inPicturesData.forEach(async inPicture => {
      await InPicture.create(inPicture);
    });
  } catch (error) {
    console.log(error);
  }
};
