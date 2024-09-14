const CopyPlugin = require('copy-webpack-plugin');
const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  config.plugins.push(
    new CopyPlugin({
      patterns: [
        {
          from: './public',
          to: '',
        },
      ],
    })
  );

  return config;
});
