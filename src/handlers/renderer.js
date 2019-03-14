import React from "react";
import ReactDOMServer from "react-dom/server";
import Provider from "../Provider";
import { StaticRouter } from "react-router";
import { ServerStyleSheet } from "styled-components";

import Html from "../components/Html";
import App from "../components/App";

import dataLoader from "./dataLoader";

const renderer = async (req, res, next) => {
  const scripts = ["vendors~client.js", "client.js"];

  const initialState = await dataLoader(req.url);

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

  console.log("APP MARKUP");

  const styles = sheet.getStyleElement();

  console.log("STYLES");

  const html = ReactDOMServer.renderToStaticMarkup(
    <Html
      styles={styles}
      children={appMarkup}
      scripts={scripts}
      initialState={initialState}
    />
  );

  console.log("HTML");

  return res.send(`<!doctype html>${html}`);
};

export default renderer;
