import React from "react";
import ReactDOMServer from "react-dom/server";
import Provider from "../Provider";
import { StaticRouter } from "react-router";
import { ServerStyleSheet } from "styled-components";

import Html from "../components/Html";
import App from "../components/App";
import { Article } from "../models"; // just for now, later remove!

const renderer = async (req, res, next) => {
  const scripts = ["vendors~client.js", "client.js"];

  const articles = await Article.find();

  const initialState = { latestStories: articles };
  console.log(initialState);

  const context = {};

  const sheet = new ServerStyleSheet();

  const appMarkup = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <Provider initialState={initialState}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    )
  );

  const styles = sheet.getStyleElement();

  const html = ReactDOMServer.renderToStaticMarkup(
    <Html
      styles={styles}
      children={appMarkup}
      scripts={scripts}
      initialState={initialState}
    />
  );

  return res.send(`<!doctype html>${html}`);
};

export default renderer;
