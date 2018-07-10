const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
        jsonDir: 'reports',
        reportPath: 'reports',
        openReportInBrowser: false,
        saveCollectedJSON: false,
        disableLog: 'No',
        displayDuration: true,
        durationInMS: true,
        customStyle: '',
        metadata:{
            browser: {
                name: 'chrome',
                version: '66'
            },
            device: 'Local test machine',
            platform: {
                name: 'windows',
                version: '10'
            }
        },
        customData: {
            title: 'Automation Test Report',
            data: [
                {label: 'Project', value: 'Nightwatch Cucumber BDD Demo'},
                {label: 'Release', value: '1.0.0'},
                {label: 'Cycle', value: '1.0'},
                {label: 'Execution Start Time', value: ' ' + new Date()},
                {label: 'Execution End Time', value: ' ' + new Date()}
            ]
        }
    });

