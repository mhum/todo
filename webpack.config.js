const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/client/index.html",
  filename: "./index.html"
});

module.exports = {
  mode: 'development',
  entry: './src/client',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.client.json"
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx'],
  },
  plugins: [htmlPlugin],
  devServer: {
    proxy: {
      '/todo': {
        target: 'http://localhost:4000',
      },
    },
  },
};