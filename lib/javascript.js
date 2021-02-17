/* eslint-disable indent */
module.exports = {
  globals: { expect: true },
  ignorePatterns: ['node_modules/**', 'dist/**'],
  parserOptions: { ecmaVersion: 2019, sourceType: 'module' },
  extends: ['airbnb-base', 'plugin:jest/style'],
  plugins: ['jest', 'import'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
    'max-len': ['error', { code: 150 }],
    'no-prototype-builtins': 'off',
    'consistent-return': 'off',
    'no-continue': 'off',
    'require-atomic-updates': 'error',
    'prefer-regex-literals': 'error',
    'default-param-last': 'error',
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'no-constructor-return': 'error',
    'no-setter-return': 'error',
    'no-dupe-else-if': 'error',
    'prefer-exponentiation-operator': 'error',
    'quote-props': ['error', 'as-needed', { keywords: false }],
    curly: ['error', 'multi-line'],
    'max-classes-per-file': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'arrow-parens': ['error', 'as-needed'],
    semi: ['error', 'always'],
    'object-shorthand': ['error', 'always'],
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'import/no-useless-path-segments': ['error', { commonjs: true, noUselessIndex: true }],
  },
};