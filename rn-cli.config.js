module.exports = {
  // should only be required for < 0.57
  // getTransformModulePath() {
  //   return require.resolve('react-native-typescript-transformer');
  // },
  getSourceExts() {
    // allow overrides via ENV vars (ex: component.e2e.js)
    return process.env.RN_SRC_EXT
      ? process.env.RN_SRC_EXT.split(',').concat(['ts', 'tsx'])
      : ['ts', 'tsx'];
  },
};
