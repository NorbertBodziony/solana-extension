const path = require('path')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

const resolve = item => {
  return path.join(__dirname, '../', item)
}
module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    // '@storybook/preset-create-react-app',
    // '@storybook/addon-actions/register',
    // '@storybook/addon-knobs/register',
    // '@storybook/addon-viewport/register',
    // '@storybook/addon-storysource',
    '@storybook/addon-storysource',
    'storybook-dark-mode'
  ],

  core: {
    builder: 'webpack5'
  },
  webpackFinal: config => {
    console.log(config.node)
    Object.assign(config.resolve.alias, {
      '@sb': resolve('.storybook'),
      '@static': resolve('src/static'),
      '@components': resolve('src/components'),
      '@containers': resolve('src/containers'),
      '@pages': resolve('src/pages'),
      '@web3': resolve('src/web3'),
      '@reducers': resolve('src/store/reducers'),
      '@selectors': resolve('src/store/selectors'),
      '@sagas': resolve('src/store/sagas'),
      '@consts': resolve('src/store/consts')
    })
    Object.assign(config.resolve.fallback, {
      fs: false
    })
    config.plugins.push(new NodePolyfillPlugin())
    // console.log(config.plugins)

    return config
  }
}
