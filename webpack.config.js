const path = require("path");

module.exports = {
    entry: "./src/app/app.js",
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "./src/app/"),
        filename: "main.js",
    },
};
