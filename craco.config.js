module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      if (webpackConfig.optimization && webpackConfig.optimization.minimizer) {
        webpackConfig.optimization.minimizer =
          webpackConfig.optimization.minimizer.filter(
            (minimizer) =>
              !(
                minimizer.constructor &&
                minimizer.constructor.name === "CssMinimizerPlugin"
              )
          );
      }

      return webpackConfig;
    },
  },
};