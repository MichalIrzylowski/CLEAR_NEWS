import React from "react";
import PropTypes from "prop-types";

const Html = ({ styles, children, scripts, initialState }) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <title>Server side rendered app!</title>
      {styles}
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
      {initialState && (
        <script
          dangerouslySetInnerHTML={{
            __html: `window.APP_STATE=${JSON.stringify(initialState)}`
          }}
        />
      )}
      {scripts.map((script, index) => (
        <script key={index} src={script} />
      ))}
    </body>
  </html>
);

Html.propTypes = {
  children: PropTypes.node.isRequired,
  initialState: PropTypes.object,
  scripts: PropTypes.array
};

export default Html;
