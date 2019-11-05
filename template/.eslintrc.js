module.exports = {
    root: true,
    // extends: ['plugin:echobind/react-native'],
    extends: [
      '@react-native-community',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
    ],
    rules: {
      // enable i18n first
      // 'react/jsx-no-literals': ['error', { noStrings: true }],
  
      // remove below after EB eslint plugin is updated
      // https://github.com/echobind/eslint-plugin-echobind/pull/3
      curly: [2, 'multi-line'],
      'react-native/no-inline-styles': 0,
      'react/jsx-fragments': [2, 'syntax'],
      'import/order': ['error'],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'any', prev: ['const', 'let'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
        { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
        { blankLine: 'always', prev: 'multiline-expression', next: '*' },
        { blankLine: 'always', prev: 'multiline-const', next: '*' },
        { blankLine: 'always', prev: 'multiline-let', next: '*' },
        { blankLine: 'always', prev: '*', next: 'multiline-const' },
        { blankLine: 'always', prev: '*', next: 'multiline-let' },
        { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
      ],
    },
  };
  