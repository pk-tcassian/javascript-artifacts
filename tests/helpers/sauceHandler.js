module.exports = {

    sauceEnd: function (result) {
        var SauceLabs = require("saucelabs");

        var saucelabs = new SauceLabs({
            username: process.env.SAUCE_USERNAME,
            password: process.env.SAUCE_ACCESS_KEY
        });

        var sessionid = this.capabilities['webdriver.remote.sessionid'],
            jobName = this.currentTest.name,
            passed = this.currentTest.results.testcases[jobName].failed === 0;

        var self = this
        saucelabs.updateJob(sessionid, {
            passed: passed,
            name: jobName
        }, function () {
            self.end(callback)
        });

        console.log("SauceOnDemandSessionID=" + sessionid + " job-name=" + jobName);

    }
};