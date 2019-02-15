import { Router } from "express";

import { loadLatestStories } from "./routeHandlers";

import renderer from "../handlers/renderer";

const router = Router();

router.get("/api/latest_stories", loadLatestStories);

router.get("*", renderer);

export default router;
