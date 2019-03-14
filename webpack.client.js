const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", path.resolve(__dirname, "src", "client.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};
