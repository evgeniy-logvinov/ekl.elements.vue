const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '../', dir)
}

module.exports = async ({ config, mode }) => {

  config.module.rules.push({
    test: /\.md$/,
    use: [
      {
        loader: 'html-loader',
      },
      {
        loader: 'markdown-loader',
      },
    ],
  })
  config.module.rules.push(
    {
      test: /\.(png|jpe|svg?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
  )

  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '@stories': resolve('stories'),
    '@storybookconf': resolve('.storybook'),
  })

  return config;
};