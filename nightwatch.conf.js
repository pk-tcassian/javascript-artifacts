require('env2')('test.env');

const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');
const edgedriver = require('edgedriver');

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'tests/step_definitions',
    '--require', 'tests/helpers/hooks.js',
    '--format', 'node_modules/cucumber-pretty',
    '--format', 'json:tests/reports/jsons/cucumber.json',
    'tests/features']
});

module.exports = {
  test_workers: {
    enabled: true,
    workers: 'auto'
  },
  output_folder: 'tests/reports',
  globals_path: 'tests/helpers/globals.js',
  page_objects_path: 'tests/page_objects',
  custom_commands_path: '',
  custom_assertions_path: '',
  disable_colors: false,
  persist_globals: true,
  live_output: true,
  parallel_process_delay: 10,
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
      "webdriver.firefox.profile": ""
    }
  },
  test_settings: {
    default: {
      launch_url: 'http//demo.nopcommerce.com',
      selenium_host: 'ondemand.saucelabs.com',
      selenium_port: 4444,
      username: process.env.SAUCE_USERNAME,
      access_key: process.env.SAUCE_ACCESS_KEY,
      use_ssl: false,
      silent: true,
      output: true,
      detailed_output: true,
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'tests/reports/screenshots'
      },
      desiredCapabilities: {
        platform: 'Windows 10',
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'tests/reports/screenshots'
      }
    },
    local: {
      launch_url: "http//demo.nopcommerce.com",
      selenium_port: 4444,
      selenium_host: "127.0.0.1",
      silent: true,
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'tests/reports/screenshots'
      },
      desiredCapabilities: {
        platform: 'Windows 10',
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },
    edge: {
      launch_url: 'http//demo.nopcommerce.com',
      desiredCapabilities: {
        platform: 'Windows 10',
        browserName: 'MicrosoftEdge',
        javascriptEnabled: true
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'tests/reports/screenshots'
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
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'tests/reports/screenshots'
      },
      detailed_output: false
    },
    sauce_firefox: {
      launch_url: 'http//demo.nopcommerce.com',
      desiredCapabilities: {
        name: 'sauce-firefox',
        platform: 'Windows 10',
        browserName: 'firefox',
        version: '60.0'
      }
    },
    sauce_chrome: {
      launch_url: 'http//demo.nopcommerce.com',
      desiredCapabilities: {
        name: 'sauce-chrome',
        platform: 'Windows 10',
        browserName: 'chrome',
        version: '66.0'
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'tests/reports/screenshots'
      },
    },
  }
};

     /* "globals": {
        "waitForConditionTimeout": 5000, // sometimes internet is slow so wait.
        "abortOnAssertionFailure" : true,
        "waitForConditionPollInterval" : 100,
        "throwOnMultipleElementsReturned" : true,
        "asyncHookTimeout" : 10000,
        siteURL:'https://react-redux.realworld.io/'
      },*/