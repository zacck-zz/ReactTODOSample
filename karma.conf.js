var webpackConfig = require('./webpack.config.js');
module.exports = function (config) {
  config.set({
    browsers: ['Chrome'], //browers to use for testing
    customLaunchers: {
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
    singleRun: true,
    frameworks: ['mocha'], //frameworks used in testing
    files: [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/foundation-sites/dist/foundation.min.js',
    'app/tests/**/*.test.jsx'
    ], //globbing pattern
    preprocessors: { //what preprocessors to use
      'app/tests/**/*.test.jsx':['webpack', 'sourcemap']
    },
    reporters: ['mocha'], //what reporters to use to do reporters
    client: {
      mocha: { //wait 5 secs to timeout tests
        timeout: '5000'
      }
    },
    webpack:webpackConfig, //use the config file to load the app for testing
    webpackServer: {
      noInfo: true
    }
  });
  if(process.env.TRAVIS) {
    configuration.browsers=['Chrome_travis_ci'];
  }
  config.set(configuration);
}
