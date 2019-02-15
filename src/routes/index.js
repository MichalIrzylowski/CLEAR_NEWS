import { Router } from "express";

import { loadLatestNews } from "./routeHandlers";

import renderer from "../handlers/renderer";

const router = Router();

router.get("/api/latest_news", loadLatestNews);

router.get("*", renderer);

export default router;
