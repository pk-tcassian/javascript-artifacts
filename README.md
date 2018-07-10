## Intro
This is a simple demo for running tests using Cucumber and Nightwatch.

## Setup & Run
Make sure you have all dependencies installed with `npm install`.
You can then run tests with `npm test`.
Later run 'node ./html_report_generator.js' to generate pretty html report of the test execution.

## Troubleshooting
If you already have chromedriver installed (via Homebrew, for example) then you
may see an error when installing chromedriver with `npm install`. You can point
`webdriver.chrome.driver` in the config file to your chromedriver path (**/usr/local/bin/chromedriver**).

Make sure to comment out `const chromedriver = require('chromedriver');` if you do this.
