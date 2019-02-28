import { Router } from "express";

import {
  loadLatestStories,
  loadInPictures,
  loadLatestEconomyNews,
  loadLatestHealthNews,
  loadNews
} from "./routeHandlers";

import renderer from "../handlers/renderer";

const router = Router();

router.get("/api/latest_stories", loadLatestStories);
router.get("/api/in_pictures", loadInPictures);
router.get("/api/latest_economy_news", loadLatestEconomyNews);
router.get("/api/latest_health_news", loadLatestHealthNews);
router.get("/api/news/:typeOfNews/:pageNumber", loadNews);

router.get("/favicon.ico", (req, res, next) => {
  return res.status(200).json({});
});

router.get("*", renderer);

export default router;
