module.exports = {
  "presets": [
    "@babel/preset-react",
  ],
  "plugins": [
    "@babel/plugin-syntax-dynamic-import"
  ],
  "env": {
    "test": {
      "presets": [
        "@babel/preset-react",
      ],
    }
  }
}