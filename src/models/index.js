import mongoose from "mongoose";
import Article from "./article";

import { seedArticles } from "./seed";

mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost:27017/clear_news", {
  keepAlive: true,
  useNewUrlParser: true
});

seedArticles();

export { Article };
