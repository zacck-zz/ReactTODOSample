var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');

//enviroment variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//load env file using process.env
try {
  envFile(path.join(__dirname, 'config/'+process.env.NODE_ENV + '.env'));
} catch(e) {

}

module.exports =  {
  //find this file and start from there
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process_env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET)
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    //where all this needs to happen
    root: __dirname,
    modulesDirectories:[
      'node_modules',
      './app/components',
      './app/components/forms',
      './app/api'
    ],
    alias: {
      app: 'app',
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx'
    },
    //files we want to process
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        //name of loader
        loader: 'babel-loader',
        query: { //parse the files through react
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/, //regex for .jsx extension
        exclude: /(node_modules|bower_components)/ //set up folders to be ignored
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
