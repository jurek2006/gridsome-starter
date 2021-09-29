module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:gridsome/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'prettier',
  ],
  rules: {
    'gridsome/format-query-block': 'error',
    semi: [2, 'never'],
    'no-console': 'error',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  plugins: ['gridsome', 'vue', 'prettier'],
}
