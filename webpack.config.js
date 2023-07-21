const path = require("path");

module.exports = {
    entry: "./src/app/app.js",
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: "main.js",
    },
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
      },
};
