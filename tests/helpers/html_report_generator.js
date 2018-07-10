var reporter = require('cucumber-html-reporter');
 
var options = {
        name: 'Nightwatch-BDD Demo',
        brandTitle: 'Automated Test Report',
        theme: 'hierarchy',
        jsonFile: 'reports/cucumber.json',
        output: 'reports/test_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        ignoreBadJsonFile: true,
        storeScreenshots: true,
        metadata: {
            "App Version":"1.0.0",
            "Test Environment": "DEVELOPMENT",
            "Browser": "Chrome  66.0.3359.181",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);