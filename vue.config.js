module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.worker\.ts$/,
          use: { loader: "worker-loader" },
        },
      ],
    },
  },
};
