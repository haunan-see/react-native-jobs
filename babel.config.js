module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    // node_modules/expo-router/entry.js: [BABEL]: expo-router/babel is deprecated in favor of babel-preset-expo in SDK 50
    plugins: [],
  }
}
