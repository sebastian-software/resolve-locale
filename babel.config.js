module.exports = api => {
  const env = api.env();

  return {
    presets: ["babel-preset-edge"],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          helpers: true,
          regenerator: false,
          useESModules: false
        }
      ]
    ]
  };
};
