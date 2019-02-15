import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import Provider from "./Provider";

const initialState = window.APP_STATE || {};

delete window.APP_STATE;

ReactDOM.hydrate(
  <Provider initialState={initialState}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
