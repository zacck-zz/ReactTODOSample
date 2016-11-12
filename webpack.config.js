const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

module.exports = {
    devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map',
    context: path.join(__dirname, '/app'),
    entry: {
      js: './app.jsx',
      vendor: ['react']
    },
    output: {
      path: path.join(__dirname, '/public'),
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loaders: [
            'babel-loader'
          ],
          query: { //parse the files through react
            presets: ['react', 'es2015', 'stage-0']
          },
        },
      ],
    },
    resolve: {
      extensions: ['','.js', '.jsx'],
      alias: [
        path.resolve('./app'),
        'node_modules'
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: 'vendor.bundle.js'
      }),
      new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET)
      }
    })
  ],
};
