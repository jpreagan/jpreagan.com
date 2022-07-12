module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ["airbnb", "airbnb-typescript", "prettier"],
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
}
