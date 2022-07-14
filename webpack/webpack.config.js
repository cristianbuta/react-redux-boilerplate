const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'
const rootDirectory = __dirname + '/..'
const webappDirectory = path.join(rootDirectory, 'src')
const devServer = require('./devServer')(rootDirectory)
const _module = require('./module')(rootDirectory)
const plugins = require('./plugins')(rootDirectory, webappDirectory, isDevelopment)

const config = {
  target: 'web',
  mode: process.env.NODE_ENV,
  entry: {
    index: path.join(webappDirectory, 'index.tsx'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(rootDirectory, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.svg', '.png', '.jpg', '.jpeg', '.webp'],
    alias: {
      '~redux': path.resolve(webappDirectory, 'redux/index'),
      '~types': path.resolve(webappDirectory, 'types'),
      '~components': path.resolve(webappDirectory, 'components'),
      '~themes': path.resolve(webappDirectory, 'themes'),
      '~images': path.resolve(webappDirectory, 'images'),
      '~icons': path.resolve(webappDirectory, 'images/icons'),
    },
  },
  performance: {
    maxAssetSize: 700000,
    maxEntrypointSize: 700000,
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.uglifyJsMinify,
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  plugins,
  devServer,
  module: _module,
}
if (isDevelopment) config.devtool = 'source-map'

module.exports = config
