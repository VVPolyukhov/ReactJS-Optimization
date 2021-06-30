var BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMoanalyzerMode: "disabled",
      generateStatsFile: true,
      statsOptions: { source: false },
    }),
  ],
};
