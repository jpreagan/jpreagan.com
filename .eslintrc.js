module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:cypress/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  rules: {
    "react/jsx-props-no-spreading": 0,
    "react/forbid-prop-types": 0,
  },
}
