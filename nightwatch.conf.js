const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');
const edgedriver = require('edgedriver');

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'tests/features/step_definitions',
    '--require', 'hooks.js',
    '--format', 'node_modules/cucumber-pretty',
    '--format', 'json:reports/cucumber.json',
    'tests/features']
});

//'--require-module', 'babel-core/register',

module.exports = {
  test_workers: {
    enabled: true,
    workers: 'auto'
  },
  output_folder: 'reports',
  globals_path: 'helpers/globals.js',
  page_objects_path: 'tests/page_objects',
  custom_commands_path: '',
  custom_assertions_path: '',
  disable_colors: false,
  persist_globals : true,
  live_output : true,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444,
	  cli_args: {
          'webdriver.chrome.driver': chromedriver.path,
          'webdriver.gecko.driver': geckodriver.path,
          'webdriver.edge.driver': edgedriver.path,
          "webdriver.firefox.profile" : ""
    }
  },
  test_settings: {
    default: {
      launch_url: 'http//demo.nopcommerce.com',
      selenium_host : 'ondemand.saucelabs.com',
      selenium_port : 4444,
      username : 'cyril123',
      access_key : 'be091a52-f7d9-4b86-8e8d-fff42f32f7ac',
      use_ssl : false,
      silent : true,
      output : true,
      detailed_output: true,
      screenshots : {
        enabled : true,
        on_failure : true,
        path : 'reports/screenshots'
      },
      "globals": {
        "waitForConditionTimeout": 5000, // sometimes internet is slow so wait.
        "abortOnAssertionFailure" : true,
        "waitForConditionPollInterval" : 100,
        "throwOnMultipleElementsReturned" : true,
        "asyncHookTimeout" : 10000
      },
      desiredCapabilities: {
        platform: 'Windows 10',
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      screenshots : {
        enabled : true,
        on_failure : true,
        path: 'reports/screenshots'
      },
      globals : {
        propertyData : {
          siteURL:'https://react-redux.realworld.io/'
        }
      },
    },
    edge: {
      launch_url: 'http//demo.nopcommerce.com',
      desiredCapabilities: {
        platform: 'Windows 10',
        browserName: 'MicrosoftEdge',
        javascriptEnabled: true
      },
      screenshots : {
        enabled : true,
        on_failure : true,
        path: 'reports/screenshots'
      },
      detailed_output: false
    },
    firefox: {
      launch_url: 'http//demo.nopcommerce.com',
      desiredCapabilities: {
        platform: 'Windows 10',
        browserName: 'firefox',
        javascriptEnabled: true
      },
      screenshots : {
        enabled : true,
        on_failure : true,
        path: 'reports/screenshots'
      },
      detailed_output: false
    },
    sauce_firefox : {
      launch_url: 'http//demo.nopcommerce.com',
      desiredCapabilities: {
        name : 'sauce-firefox',
        platform : 'Windows 10',
        browserName : 'firefox',
        version: '60.0'
      },
      globals : {
        propertyData : {
          environment : 'windows10-firefox60',
          siteURL:'https://react-redux.realworld.io/'
        }
      }
    },
    sauce_chrome : {
      desiredCapabilities: {
        name : 'sauce-chrome',
        platform : 'Windows 10',
        browserName : 'chrome',
        version: '67.0'
      },
      globals : {
        propertyData : {
          environment:'windows10-chrome67',
          siteURL:'https://react-redux.realworld.io/'
        }
      }
    },
  }
};
