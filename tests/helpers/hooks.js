const { Before, After } = require('cucumber');
const { client } = require('nightwatch-cucumber');
let globals = require('../helpers/globals.js');
let sauce = require('../helpers/sauceHandler.js');
var startTime = '';

Before(() => new Promise(resolve => {
  console.log('Before execution of Scenario');
  //client.init();
  client.resizeWindow(1600, 1600);
  startTime = new Date();
  console.log("Wait Timeout: " + globals.waitForConditionTimeout);
  setTimeout(() => {
    resolve();
  }, 8000);
}));

After({ tags: "not @demo" }, () => new Promise(resolve => {
  console.log('After execution of Scenario');

  const homePageObject = client.page.HomePage();
  homePageObject.clickSettings();
  const settingsPageObject = client.page.SettingsPage();
  settingsPageObject.performLogout();
  var endTime = new Date() - startTime;
  //sauce.sauceEnd().end();
  //client.end();
  setTimeout(() => {
    resolve();
  }, 8000);
}));