import React from "react";
import ReactDOMServer from "react-dom/server";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";
import { ServerStyleSheet } from "styled-components";

import Html from "../components/Html";
import App from "../components/App";
import reducer from "../reducer";

const renderer = async (req, res, next) => {
  const scripts = ["vendors~client.js", "client.js"];

  const initialState = { initialText: "Rendered on server!" };

  const store = createStore(reducer, initialState);

  const context = {};

  const sheet = new ServerStyleSheet();

  const appMarkup = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <Provider store={store}>
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
