const { Before, After } = require('cucumber');
const {client} = require('nightwatch-cucumber');


Before(() => new Promise(resolve => {
  console.log('Before execution of Scenario');
  client.resizeWindow(1200, 1200);
  var startTime = new Date();
  console.log("Wait Timeout: " + client.globals.waitForConditionTimeout);
  setTimeout(() => {
    resolve();
  }, 1000);
}));

After({tags: "not @demo"}, () => new Promise(resolve => {
  console.log('After execution of Scenario');
  const homePageObject = client.page.HomePage();
  homePageObject.clickSettings();
  const settingsPageObject = client.page.SettingsPage();
  settingsPageObject.performLogout();
  //client.end();
  client.sauceHandler();
  setTimeout(() => {
    resolve();
  }, 1000);
}));