const path = require("path");

module.exports = {
  entry: "./src/script.ts",
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, ""),
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
