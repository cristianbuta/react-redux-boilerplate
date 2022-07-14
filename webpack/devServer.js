const path = require("path");
module.exports = (rootDirectory) => {
  return {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api",
        },
      },
    },
    hot: true,
    watchFiles: {
      paths: [path.resolve("." + rootDirectory, "src")],
      options: {
        usePolling: false,
      },
    },
    port: 3000,
    historyApiFallback: true,
  };
};
