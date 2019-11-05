module.exports = {
  root: true,
  extends: ['plugin:echobind/react-native'],
  extends: [
    '@react-native-community',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    // enable i18n first
    // 'react/jsx-no-literals': ['error', { noStrings: true }],
  },
};
