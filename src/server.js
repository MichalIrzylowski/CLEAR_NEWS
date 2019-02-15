import express from "express";
import path from "path";

import routes from "./routes";

const app = express();

app.use(express.static(path.join(__dirname)));

app.use(routes);

app.listen(3000, () => {
  console.log("Rendering on port 3000");
});
