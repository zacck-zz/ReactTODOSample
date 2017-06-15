const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


//enviroment variable
var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';
var TEST = process.env.NODE_ENV === 'test'

module.exports = {
    devServer: {
      contentBase: './public',
      inline: true,
      hot: true
    },
    devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map',
    context: __dirname + '/app',
    entry: [
      './app.jsx',
      'script-loader!jquery/dist/jquery.min.js',
      'script-loader!foundation-sites/dist/foundation.min.js',
    ],
    output: {
      publicPath: '/',
      path: __dirname + '/public',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, //check for all js files
           use: [{
             loader: 'babel-loader',
             options: { presets: ['react', 'es2015', 'stage-0']}
           }],
           exclude: /(node_modules)/
        },
        {
          test: /\.scss$/,
           use:['style-loader','css-loader','sass-loader']
        },
      ],
    },
    resolve: {
      extensions: [" ", ".js", ".jsx"],
      modules : [
        'node_modules',
        './app/components',
        './app/api',
        './app/firebase',
        './app/reducers',
        './app/router',
        './app/store',
        './app/components/forms',
        './app/actions'
      ],
      alias: {
        app: path.resolve(__dirname, 'app/'),
      }
    },
    plugins: [
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
    }),
    new webpack.LoaderOptionsPlugin({
     minimize:true,
     debug: false,
     test: /\.scss$/,
     options: {
       sassLoader: {
         includePaths: [
           path.resolve(__dirname, './node_modules/foundation-sites/scss')
         ]
       }
     }
   })
  ],
};
