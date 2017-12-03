module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-param-reassign': ['error', { props: false }],
    'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'no-use-before-define': ['error', { functions: false }],
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
  },
};
