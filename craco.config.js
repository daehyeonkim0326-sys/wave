process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.BABEL_ENV = process.env.BABEL_ENV || process.env.NODE_ENV;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
    if (webpackConfig.optimization && webpackConfig.optimization.minimizer) {
      webpackConfig.optimization.minimizer =
        webpackConfig.optimization.minimizer.filter(
          (minimizer) => !(
            minimizer.constructor &&
            minimizer.constructor.name === "CssMinimizerPlugin"
          )
        );
    }

    return webpackConfig;
  },
}
};